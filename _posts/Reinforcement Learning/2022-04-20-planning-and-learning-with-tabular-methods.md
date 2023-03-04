---
title: "Planning and Learning with Tabular Methods"
classes: wide
toc: true
toc_label: "Table of Contents"
toc_sticky: true
categories:
  - studies
tags:
  - reinforcement learning
---

지금까지 배운 강화학습 방법에서 동적 프로그래밍, 휴리스틱 검색과 같이 모델이 필요한 방법을 Model-based, 몬테 카를로 방법, 시간차 학습과 같이 모델 없이 사용할 수 있는 방법을 Model-free라고 부릅니다. Model-based 방법은 Planning을 사용하지만 Model-free 방법은 Learning을 사용하는 차이점이 있습니다. 그러나 두 방법은 가치 함수를 계산하는 과정에서 유사점이 있습니다. 두 방법 모두 미래에 발생하는 이벤트를 토대로 가치 함수를 추정하기 때문입니다. 이번 장에서는 Model-based와 Model-free를 통합한 새로운 방법을 제안합니다. 지난 장에서 몬테 카를로 방법과 TD(0)를 $n$-step TD로 통합하는 방법을 보여드렸는데, 이번 장의 통합 과정도 이와 유사합니다. 특히 서로 다른 두 방법이 어디까지 통합될 수 있는지에 집중할 예정입니다.

## Models and Planning

환경 모델은 학습 행위자의 행동에 환경이 어떻게 반응할지 예측하는 데 사용할 수 있는 모든 것을 의미합니다. 상태와 행동이 주어졌을 때, 모델은 다음 상태와 받게 되는 보수를 예측합니다. 모델이 확률적( Stochastic)이라면 다음 상태와 받게 되는 보수는 여러 종류가 있어서 확률에 따라 다음 상태와 받게 되는 보수가 정해집니다. 이것을 분포 모델(Distribution Model)이라고 부릅니다. 또 다른 모델로 확률에 따라 단 하나의 샘플만 생성하는 샘플 모델(Sample Model)도 있습니다.

예를 들어, 12개의 주사위를 던져 그 합을 모델링한다고 가정해봅시다. 분포 모델은 발생할 수 있는 모든 합을 구한 다음, 각 합계가 발생할 확률을 계산합니다. 반면에 샘플 모델은 이 확률 분포에 따라 생성된 샘플을 다수 생성하여 확률을 계산하는 것입니다. 분포 모델을 토대로 샘플을 생성할 수도 있기 때문에 더 우수한 방법이지만, 실제 문제에서는 분포 모델을 생성하는 것이 쉽지 않기 때문에 얻기 쉬운 샘플 모델을 더 많이 사용합니다. 예를 든 12개의 주사위 합을 모델링하는 것만 쳐도, 모든 경우의 수와 확률을 구하는 것은 쉽지 않습니다. 오히려 12개의 주사위를 굴리는 시뮬레이션 프로그램을 작성하는게 훨씬 쉽습니다. 물론 샘플 모델을 토대로 가능한 합계와 그 확률을 추산하는 것은 오류가 발생하기 쉽다는 단점도 있습니다.

모델을 구했다면 그 모델을 사용하여 시뮬레이션을 할 수도 있습니다. 초기 상태와 행동이 주어지면 샘플 모델은 가능한 다음 상태 및 보수 등을 생성하고, 분포 모델은 발생할 확률에 따라 가중치를 부여한 모든 가능한 상태와 보수를 생성합니다. 따라서 시작점만 주어진다면 모델을 통해 에피소드 전체를 생성할 수 있습니다. 이것을 시뮬레이션된 경험(Simulated Experience)라고 합니다. 이렇게 모델을 기반으로 모델링된 환경과 상호작용하기 위한 정책을 생성 및 개선하는 모든 프로세스를 Planning이라고 합니다.

![](/images/Reinforcement Learning/8. Planning and Learning with Tabular Methods/RL 08-01.png){: .align-center}

인공지능에서 Planning은 두 가지 접근 방식으로 나뉘어 있습니다. 이 책에서 다루는 접근 방식은 State-space Planning이라고 하는데, 최적의 정책을 만드는 최적의 경로를 위한 상태 공간(State Space)을 탐색하는 방법입니다. 이 때 행동은 상태에서 다른 상태로 전환하는 데 사용되며, 가치 함수는 상태에 의해 계산됩니다. 또 다른 방법으로 Plan-space Planning이 있는데, 이것은 이름처럼 Plan Space를 탐색하는 방법입니다. Operators를 사용하여 Plan을 다른 Plan으로 전환하고, 가치 함수는 Plan Space에 기반하여 정의됩니다. Plan-space Planning은 강화학습 문제의 초점인 확률적 순차 결정 문제(Stochastic Sequential Decision Problem)에 적용하기 어렵기 때문에 여기서는 더이상 언급하지 않습니다. (참고 : Russell and Norvig, 2010)

이번 장에서 사용하는 기본 아이디어로 (1) 모든 State-space Planning은 정책을 개선하기 위해 가치 함수 계산을 중간 단계에 포함하고, (2) 시뮬레이션된 경험이나 백업 연산으로 가치 함수를 계산합니다. 이 구조를 다이어그램으로 표현하면 다음과 같습니다.

![](/images/Reinforcement Learning/8. Planning and Learning with Tabular Methods/RL 08-02.png){: .align-center}

이 방법에 가장 적합한 것은 동적 프로그래밍입니다. 상태 공간을 Sweep한 다음 각 상태에 대해 가능한 Transition 분포를 생성하고, 각 분포가 백업된 값을 계산한 다음 상태의 추정 값을 업데이트하면 됩니다. 물론 동적 프로그래밍 외에 다른 State-space Planning 방법을 못쓰는 것은 아닙니다. 다른 방법 또한 이번 장에서 살펴볼 예정입니다.

Planning과 Learning의 핵심은 백업 업데이트를 통한 가치 함수의 추정입니다. 두 방법의 차이점으로 Planning은 모델에서 생성된 시뮬레이션 경험을 사용하는 반면, Learning은 환경에서 생성된 실제 경험을 사용합니다. 이 차이로 인해 경험이 얼마나 유연하게 생성될 수 있는지, 성능이 어떻게 평가되는지와 같은 또 다른 차이점을 만들어내긴 하지만, 가치 함수를 추정한다는 공통된 부분을 통해 많은 아이디어와 알고리즘을 두 방법에 동일하게 쓰일 수 있습니다. 특히, 다수의 Learning 알고리즘은 Planning에도 유용하게 사용할 수 있습니다. 예를 들어, 다음 알고리즘은 1-step Tabular Q-learning 알고리즘을 Planning에 도입한 예시입니다.

![](/images/Reinforcement Learning/8. Planning and Learning with Tabular Methods/RL 08-03.png){: .align-center}

이 장이 두 번째 주제는 작고 점진적인 단계로 Planning하는 것의 이점입니다. 이를 통해 계산 낭비가 거의 없이 언제든지 Planning을 중단하거나 리디렉션 할 수 있으며, 이는 Planning과 Learning을 효율적으로 융합하기 위한 핵심 요구 사항입니다. 주어진 문제가 너무 방대하여 정확하게 풀 수 없는 경우, 작은 단계로 나누어 Planning하는 것이 효율적인 접근 방식이 될 수 있습니다.

## Dyna: Integrated Planning, Acting, and Learning

Planning이 일어나는 동안, Planning Agent가 환경과 상호 작용하는 동안 얻게 되는 새로운 정보는 모델을 변경할 수 있습니다. 만약 의사 결정과 모델 학습이 모두 상당한 계산량이 필요하다면, 사용 가능한 계산 자원을 적절히 배분할 필요가 있습니다. 이 문제를 해결하기 위해 이번 섹션에서는 주요 기능을 통합하는 간단한 구조인 Dyna-Q를 제안합니다.

Planning Agent가 실제 경험을 하기 위해서는 최소한 다음 두 가지 조건이 필요합니다. 첫째로 실제 환경과 더 정확하게 일치하도록 모델을 개선하는 데 사용할 수 있어야 하고(Model Learning), 둘째로 이전 장들에서 논의한 강화학습 방법을 사용하여 가치 함수와 정책을 개선하는데 사용할 수 있어야 합니다(Direct Reinforcement Learning). 이들간의 관계는 아래 다이어그램에 참고해주시기 바랍니다. 각 화살표는 누구에게 영향을 끼치는지 나타냅니다. 경험(Experience)이 어떻게 모델을 통해 가치 함수와 정책을 개선할 수 있는지 확인하시기 바랍니다. 모델을 학습하고, 모델을 Planning 함으로써 가치 함수와 정책을 개선하는 것을 Indirect Reinforcement Learning이라고 합니다.

![](/images/Reinforcement Learning/8. Planning and Learning with Tabular Methods/RL 08-04.png){: .align-center}

Direct RL과 Indirect RL 모두 각자의 장단점이 있습니다. Indirect RL은 제한된 양의 경험을 최대한 활용하기 때문에 환경과의 상호작용이 적더라도 더 나은 정책을 유도할 수 있습니다. 반면 Direct RL은 간단하고 모델을 설계할 때 발생하는 편향(Bias)에 영향을 받지 않습니다.

![](/images/Reinforcement Learning/8. Planning and Learning with Tabular Methods/RL 08-05.png){: .align-center}

Dyna-Q에는 이 다이어그램에 표시된 모든 프로세스가 포함되어 있습니다. 위의 그림을 통해 그 구조를 확인할 수 있습니다. 중앙의 실제 경험(Real Experience)를 기준으로 왼쪽을 보시면 실제 경험을 토대로 Direct RL을 수행하고, 오른쪽을 보시면 실제 경험을 토대로 모델을 학습한 다음, 시뮬레이션된 경험을 토대로 Planning을 수행하는 것을 볼 수 있습니다. 여기에서 사용하는 Direct RL/Planning은 일반적으로 같은 강화학습 방법을 사용하기 때문에 Final Common Path라고 부릅니다.

원칙적으로 Dyna에서 Planning, Acting, Model-Learning, 그리고 Direct RL은 동시에 병렬적으로 수행됩니다. 하지만 실제로 구현하는 컴퓨터는 직렬 환경이기 때문에, 각각의 시간 단계에서 발생하는 순서를 지정해야 합니다. Dyna-Q에서 Acting, Model-Learning, Direct RL에는 계산이 거의 필요하지 않고, 약간의 시간만 소요된다고 가정합니다. 남은 계산 자원과 시간은 모두 Planning에 할당합니다. 전체 Tabular Dyna-Q 알고리즘은 아래와 같습니다. 이 알고리즘에서 $Model(s, a)$는 주어진 상태-행동 쌍 $(s, a)$에 대해 모델이 예상한 다음 상태 및 보수를 나타냅니다. Direct RL은 (d), Model-Learning은 (e), 그리고 Planning은 (f) 단계에서 구현되어 있습니다. 어렵게 생각하실 필요 없이 (e)와 (f)를 생략하면 그냥 1-step Q-learning과 동일한 알고리즘입니다.

![](/images/Reinforcement Learning/8. Planning and Learning with Tabular Methods/RL 08-06.png){: .align-center}

Example 8.1 Dyna Maze

이번에는 간단한 예제를 통해 Dyna를 더 자세히 살펴보겠습니다. 아래 그림(오른쪽 위)과 같은 간단한 미로가 있습니다. 상태는 각각의 칸, 행동은 동서남북 4방향으로 주어져 있습니다. 만약 갈 수 없는 방향인 경우 학습 행위자의 상태는 바뀌지 않습니다. 보수는 Goal에 도착하면 +1, 그 외에는 모두 0으로 주어집니다. Goal에 도착하면 에피소드가 종료되고 다시 Start 지점으로 돌아가 새 에피소드를 시작합니다. Discount는 $\gamma = 0.95$로 주어져 있습니다.

![](/images/Reinforcement Learning/8. Planning and Learning with Tabular Methods/RL 08-07.png){: .align-center}

이 문제에서 초기의 행동-가치는 모두 0, step-size parameter $\alpha = 0.1$, $\epsilon = 0.1$으로 설정되어 있습니다. 위의 그래프는 미로 문제에 대한 평균 학습 곡선을 나타내고 있습니다. Planning이 하나도 없는 Direct RL은 처음에 아무런 정보가 없기 때문에 굉장히 많은 Step을 거치고 나서야 Goal에 도달한 것을 알 수 있습니다. Step 수가 너무 커서 그래프에 표시되지 않았으나, 약 1700단계가 소요되었습니다. 그 이후로 빠르게 Step 수가 줄어들긴 합니다만, 수렴하기까지 약 25개의 에피소드가 필요함을 알 수 있습니다. 그러나 5개의 Planning만 추가해도 수렴 속도가 눈에 띄게 빨라지며, 50개의 Planning이 추가되었을 때는 3개의 에피소드만에 수렴함을 알 수 있습니다.

![](/images/Reinforcement Learning/8. Planning and Learning with Tabular Methods/RL 08-08.png){: .align-center}

어째서 Planning을 추가했을 때 학습이 빠르게 수렴하는지는 위의 그림을 보면 알 수 있습니다. 6장에서 배운대로 1-step Q-learning은 에피소드의 마지막 부분에서만 Q 값이 업데이트되기 때문에 수렴하기까지 속도가 오래 걸립니다. 그러나 Planning을 사용하면 Planning Step이 클 수록 하나의 에피소드에서 많은 Q 값이 동시에 학습되기 때문에 그만큼 수렴이 빨라집니다.

<p style="text-align:right">□</p>

## When the Model Is Wrong

섹션 8.2에서 보여드린 Dyna Maze 예제에서 모델의 업데이트는 매우 수월했습니다. 즉, 모델에 대한 사전 정보 없이, 이상적으로 정확한 모델이 생성되었습니다. 그러나 이렇게 항상 우리가 원하는 대로 모델이 생성될 수는 없습니다. 모델이 불완전할 수 있을 뿐만 아니라 정확하지 않을 수도 있습니다. 이렇게 되는 원인은 환경이 확률적인(Stochastic) 경우라던가, 제한된 적은 수의 샘플만 관찰된다던가, 불완전한 근사 함수를 토대로 학습된다던가, 아니면 심지어 환경이 바뀌었는데 그것을 관찰하지 못한 경우가 있을 수도 있습니다. 만약 모델에 이렇게 문제가 생긴다면, Planning 단계에서 Suboptimal Policy를 계산할 수 있습니다. 어떤 경우에는 Planning에 의해 계산된 Suboptimal Policy로 모델에 대한 오류를 빠르게 발견하고 수정할 수 있습니다. 다음 예제를 통해 이것이 어떤 의미인지 알아보겠습니다.

Example 8.2 Blocking Maze

![](/images/Reinforcement Learning/8. Planning and Learning with Tabular Methods/RL 08-09.png){: .align-center}

이번 예제는 비교적 사소한 모델링 오류를 복구해주는 미로 문제입니다. 위의 그림 중 왼쪽 상단의 미로는 시작 지점 S부터 목표 지점 G 사이에 긴 벽이 존재합니다. 1000개의 시간 단계가 지나면 오른쪽과 같이 벽의 위치를 바꿉니다. 그래프는 이 문제에서 Dyna-Q와 이를 수정한 Dyna-Q+에 대한 평균 누적 보수를 나타냅니다. 1000 시간 단계 후에 평평한 부분은 학습 에이전트가 벽 아래에서 어느 방향으로 가야 목표 지점에 도달할지 찾는 시간입니다. 이 구간이 지나면 다시 두 학습 행위자는 목표 지점으로 갈 수 있는 최단 경로를 찾아 다시 보수를 얻게 됩니다.

<p style="text-align:right">□</p>

이렇게 환경이 급격하게 변해 기존의 정책을 사용하지 못하는 경우에는 누적 보수의 차이만 있을 뿐 두 방법 모두 새로운 정책을 찾을 수 있습니다. 문제는 환경이 기존보다 나아지는 새로운 답이 생기는 경우에는 더 큰 어려움이 발생합니다. 그 예시를 다음 예제에서 보여드리겠습니다.

Example 8.3 Shortcut Maze

![](/images/Reinforcement Learning/8. Planning and Learning with Tabular Methods/RL 08-10.png){: .align-center}

이번 예제는 왼쪽에 출구가 있고, 시작 지점 S부터 목표 지점 G 사이에 긴 벽이 있는 상황입니다. 3000 시간 단계 후에, 이번에는 오른쪽에 새로운 출구가 생깁니다. 당연히 눈으로 보았을 때는 오른쪽 출구를 통해 목표 지점 G에 가는 것이 더 빠른 경로입니다. 그러나 아래의 그래프를 보시면 Dyna-Q 알고리즘은 오른쪽에 새로운 출구를 발견하지 못해 계속 기존의 정책을 고수하는 것을 알 수 있습니다. Dyna-Q+ 알고리즘은 이와 다르게 결국 새로운 출구를 찾기는 하나 상당 수의 시간 단계가 소요되는 것을 알 수 있습니다.

<p style="text-align:right">□</p>

여기서 발생할 수 있는 또 다른 문제는 Exploration과 Exploitation 간의 조율입니다. Planning에서 Exploration은 모델을 개선하는 시도를 의미하지만, Exploitation은 현재 모델에서 주어진 최적의 방식으로 행동하는 것을 의미합니다. 강화학습에서의 Exploration vs Exploitation과 마찬가지로 완벽하게 조율할 수 있는 솔루션은 없지만, 간단한 휴리스틱 방법(=경험적인 방법)으로 어느 정도 해결할 수 있습니다.

이전 예제에 언급된 Dyna-Q+가 바로 이러한 휴리스틱 방법을 사용합니다. Dyna-Q+의 Agent는 환경과의 실제 상호 작용에서 상태-행동 쌍이 마지막으로 선택된 이후 경과된 시간 단계를 측정합니다. 선택된 지 오래 지날수록 모델이 정확해지지 않을 가능성이 크기 때문에, 해당 상태-행동 쌍을 선택하도록 유도하기 위해 보너스 보수를 제공합니다. 예를 들어, 어떤 특정한 상태-행동 쌍이 $r$의 보수를 제공한다고 가정했을 때, 이 상태-행동 쌍이 시간 단계 $\tau$ 만큼 선택되지 않는다면, 해당 상태-행동 쌍의 보수는 $r + \kappa \sqrt{\tau}$가 되는 구조입니다. 물론 이렇게 Exploration을 강제로 유도하는 것은 그만큼의 손해가 발생하나, 이전 예제와 같이 환경이 변하는 경우에는 감수할 가치가 충분히 있습니다.

## Prioritized Sweeping

Dyna의 Agent에서 시뮬레이션된 전이(Transition)는 이전에 경험했던 모든 상태-행동 쌍에서 무작위로, 균일하게 선택되어 시작됩니다. 그러나 균일한 선택이 반드시 최선은 아닙니다. 상황에 따라 특정 상태-행동 쌍에 초점을 맞추고 선택하는 것이 Planning에 더 효율적일 수 있습니다. 예를 들어, 예제 8.1의 미로에서 왼쪽 그림을 보시면 첫 번째 에피소드에서 학습은 Goal 지점 직전에서만 이루어졌습니다. 두 번째 에피소드가 시작할 때, Goal 지점의 직전 상태-행동을 제외하고는 여전히 초기화된 0의 값만 가지고 있습니다. 즉, 이런 상황에서 대부분의 상태-행동 쌍은 방문해봤자 값이 변하지 않기 때문에 업데이트를 하는 의미가 없습니다. 그렇기 때문에 초기 몇 번의 에피소드에서의 업데이트는 낭비나 다를 바 없습니다.

이러한 업데이트 낭비를 해결하는 방법으로, 역방향 학습을 떠올려볼 수 있습니다. Goal 지점 직전 부분에서 값이 변했다면, 그 부분부터 역으로 진행하는 방법으로 낭비 없는 업데이트를 할 수 있기 때문입니다. 이것을 Planning에 도입한 것을 Backward Focusing이라고 합니다.

Backward Focusing을 사용해 낭비없이 많은 상태-행동 쌍을 업데이트할 수 있지만, 모든 상태-행동 쌍에 대해 유용하지 않을 수 있습니다. 어떤 상태-행동 쌍의 값은 많이 업데이트 될 수도 있지만, 그렇지 않은 상태-행동 쌍 또한 분명히 존재할 수 있기 때문입니다. 특히 확률적(Stochastic)인 환경에서 이럴 가능성이 높습니다. 따라서 이 때는 각 상태-행동 쌍마다 우선순위를 정하여 우선순위가 높은 상태-행동 쌍을 많이 방문하게 만드는 것이 좋습니다. 이렇게 우선순위에 따라 업데이트 하는 것을 Prioritized Sweeping이라고 합니다. 이 때, 업데이트 변경 값이 높을 수록 우선순위가 높습니다. 업데이트 시 값의 변화가 크다면 그만큼 적게 방문했다는 뜻이기 때문입니다. 이러한 방식으로 업데이트를 하게 되면 수렴할 때까지 효율적으로 전파가 가능해집니다. 결정적(Deterministic) 환경에서 Prioritized Sweeping에 대한 전체 알고리즘은 다음과 같습니다.

![](/images/Reinforcement Learning/8. Planning and Learning with Tabular Methods/RL 08-11.png){: .align-center}

Example 8.4 Prioritized Sweeping on Mazes

![](/images/Reinforcement Learning/8. Planning and Learning with Tabular Methods/RL 08-12.png){: .align-center}

다시 미로 예제로 돌아가봅시다. 위의 그래프를 보시면 미로 문제에서 Prioritized Sweeping은 Dyna-Q 방법보다 수렴속도가 5~10배 정도 빨라짐을 알 수 있습니다. 두 방법 모두 Planning 단계를 $n=5$로 동일하게 설정한 결과입니다. (Peng and Williams (1993))

<p style="text-align:right">□</p>

확률적(Stochastic)인 환경에 Prioritized Sweeping을 적용하는 것도 간단합니다. 각 상태-행동 쌍을 경험한 횟수와 그로부터 이어지는 다음 상태가 무엇이었는지를 직접 세면 됩니다. 즉, 가능한 모든 다음 상태와 발생 확률을 고려하여 우선순위를 정하는 것입니다.

지금까지 Prioritized Sweeping의 장점을 위주로 소개하였으나, Prioritized Sweeping는 Planning을 효율적으로 개선하는 방법 중 하나일 뿐 최선의 방법은 아닙니다. Prioritized Sweeping의 대표적인 한계는 Expected Update를 사용한다는 것입니다. 이것은 확률적인 환경에서 확률이 낮은 Transition에 대해 많은 계산을 낭비할 수 있습니다. 이에 반해 Sample Update는 Sampling으로 인한 분산을 감안하더라도 더 적은 계산으로 가치 함수를 실제와 가깝게 추정할 수 있습니다. Expected Update와 Sample Update의 비교는 다음 섹션에서 더 자세히 다루겠습니다.

## Expected vs. Sample Updates

지금까지 배운 내용의 대부분은 가치 함수를 추정하기 위한 업데이트 방법에 대한 종류였습니다. 1-step 업데이트로 한정해서 생각해보면 크게 3가지의 요소를 토대로 분류할 수 있습니다. 첫 번째 요소는 상태의 가치를 업데이트하는지, 아니면 행동의 가치를 업데이트하는지에 대한 여부입니다. 두 번째 요소는 최적의 정책에 대한 가치를 추정하는지, 아니면 주어진 임의의 정책에 대한 가치를 추정하는지에 대한 여부입니다. 이 두 요소를 조합했을 때 4가지 종류의 가치 함수 $q_{*}$, $v_{*}$, $q_{\pi}$ 그리고 $v_{\pi}$로 간단하게 표기할 수 있습니다. 마지막 세 번째 요소는 발생할 수 있는 모든 가능한 이벤트를 고려하는 Expected Update인지, 아니면 발생할 수 있는 단일 샘플을 고려한 Sample Update인지에 대한 여부입니다. 이 3가지 요소를 조합하면 총 8가지의 경우의 수가 나오며, 그 중 7개는 아래 그림처럼 정리할 수 있습니다. 한 가지가 빠진 이유는 그다지 유용한 방법이 아니기 때문입니다.

![](/images/Reinforcement Learning/8. Planning and Learning with Tabular Methods/RL 08-13.png){: .align-center}

위의 그림과 같은 7가지 분류는 Learning 뿐만 아니라 Planning에도 적용할 수 있습니다. 예를 들어, 이전 섹션에서 다루었던 Dyna-Q는 $q_{*}$ + Sample Update를 사용하지만, $q_{*}$ + Expected Update, 또는 $q_{\pi}$ + Sample Update를 사용할 수도 있습니다.

6장에서 1-step Sample Update를 소개할 때, Expected Update의 대안으로 소개하였습니다. 정확한 모델이 없으면 Expected Update가 불가능하기 때문에, 환경이나 샘플 모델의 정보를 사용하여 Sample Update를 수행할 수 있기 때문입니다. 이런 관점으로 볼 때, 만약 Sample Update와 Expected Update를 모두 사용할 수 있는 문제라면 Expected Update가 더 낫다는 것을 알 수 있습니다. Expected Update는 Sampling Error로 인한 문제가 발생하지 않기 때문에 확실히 더 낫다고 볼 수 있지만, 더 많은 계산이 필요합니다. 대부분의 문제에서 사용할 수 있는 계산 자원은 한계가 있기 때문에 두 방법을 적절하게 평가하기 위해서는 이 점을 반영해야 합니다.

구체적으로, $q\_{\*}$를 추정할 때 Expected Update와 Sample Update를 각각 고려해보겠습니다. 상태와 행동은 이산적, 가치 함수의 추정 함수는 Tabular-Q, 그리고 전이 함수는 $\hat{p}(s', r \mid s, a)$라고 가정하겠습니다. 이 때 Expected Update는 다음과 같이 표현할 수 있습니다.

$$Q(s, a) \gets \sum_{s', r} \hat{p}(s', r | s, a) \left[ r + \gamma \max_{a'} Q(s', a') \right] \tag{8.1}$$

Sample Update 버전은 아래와 같이 Q-learning과 유사한 형태로 표현됩니다. $\alpha$는 step-size parameter입니다.

$$Q(s, a) \gets Q(s, a) + \alpha \left[ R + \gamma \max_{a'} Q(S', a') - Q(s, a) \right] \tag{8.2}$$

Expected Update와 Sample Update의 차이는 상태와 행동을 토대로 가능한 다음 상태가 여러 개가 존재할 수 있는 확률적(Stochastic) 환경에서 발생합니다. 만약 결정적(Deterministic) 환경이라면, $\alpha = 1$로 설정했을 때 Expected Update와 Sample Update는 동일합니다. 확률적 환경에서 Sample Update는 Sampling Error의 영향을 받지만, 한번에 하나의 다음 상태만 고려하기 때문에 계산이 적고, Expected Update는 모든 가능한 다음 상태를 고려하기 때문에 Sampling Error가 존재하지 않지만 그만큼 많은 계산량을 필요로 합니다. 가능한 다음 상태의 개수를 Branching Factor $b$라고 하는데, Expected Update는 Sample Update보다 대략 $b$배 만큼 더 많은 계산이 필요합니다.

Expected Update를 하는데 충분한 계산 자원과 시간이 있는 경우, Expected Update는 Sampling Error가 없기 때문에 $b$번의 Sample Update보다 좋은 추정 결과를 보입니다. 그러나 많은 상태-행동 쌍이 있는 큰 문제에서는 충분한 계산 자원이나 시간이 없기 때문에 Sample Update가 더 나은 추정 결과를 보이게 됩니다. 그렇다면 어떤 상황에서 Expected Update를 사용할 지, Sample Update를 사용할 지를 생각해보겠습니다.

![](/images/Reinforcement Learning/8. Planning and Learning with Tabular Methods/RL 08-14.png){: .align-center}

위의 그래프는 다양한 $b$의 값을 토대로 Expected Update와 Sample Update를 비교한 결과입니다. Expected Update가 $b$만큼 연산을 했다는 것은 모든 상태-행동 쌍을 고려했다는 것이므로 $b$ 이후에 RMS error는 0이 됩니다. Sample Update는 대략 $\sqrt{\frac{b-1}{bt}}$ 그래프의 모양으로 RMS error가 감소합니다. $t$는 수행된 Sample Update의 수 입니다. 이 그래프로 알 수 있는 점은 적당히 큰 $b$의 경우 Sample Update의 오류가 생각보다 빨리 줄어든다는 것입니다. 이러한 결과는 Sample Update가 확률론적 분기 요인이 크고 상태가 너무 많아 정확하게 풀 수 없는 문제에 대한 Expected Update보다 우수할 수 있음을 시사합니다.

## Trajectory Sampling

이번 섹션에서는 업데이트를 분류하는 두 가지 방법을 비교합니다. 첫 번째는 동적 프로그래밍(Dynamic Programming)의 고전적인 접근 방법으로 전체 상태(또는 상태-행동 쌍)에 대해 Sweep를 수행하고 각 상태(또는 상태-행동)의 가치를 업데이트합니다. 이 방법은 한 번의 Sweep당 한 번의 업데이트를 수행하는데, Sweep에 오랜 시간이 걸릴 수 있는 대규모 문제에 적합하지 않을 수 있습니다.

두 번째는 어떤 분포에 따라 상태, 또는 상태-행동을 샘플링하는 것입니다. Dyna-Q와 같이 균일하게 샘플링할 수도 있지만, 문제에 따라서 균일한 샘플링은 적합하지 않을 수도 있습니다. 샘플링을 하는 또 다른 방법으로는 On-policy의 분포에 따라 샘플링하는 것입니다. 즉, 현재의 정책을 따를 때 관찰할 수 있는 분포에 따라 샘플링 및 업데이트를 하는 것입니다. 이 방법의 장점은 단순히 현재 정책에 따라 모델과 상호 작용함으로써 쉽게 생성할 수 있다는 것입니다. Episodic Task나 Continuing Task 모두 상관없이 사용할 수 있으며, 모델을 기반으로 시뮬레이션함으로써 업데이트를 수행합니다. 이 방법을 Trajectory Sampling 이라고 합니다.

On-policy 분포에 초점을 맞추면 중요하지 않은 수많은 상태(또는 상태-행동) 쌍이 무시되기 때문에 유리할 수도 있지만, 같은 이유로 오래 업데이트되지 않은 부분이 계속 영향을 끼치기 때문에 불리할 수도 있습니다. 이 책에서는 이것을 실험을 통해 경험적으로 평가하였습니다. 실험에서는 식 (8.1)과 같은 1-step Expected Tabular Update를 사용하여 균일한 경우와 On-policy한 경우로 나누어 시뮬레이션했습니다. 두 방법 모두 $\epsilon = 0.1$로 설정한 $\epsilon$-greedy policy를 사용하였으며, discount는 무시하였습니다. 모든 상태에서 Branching Factor $b$는 동일하게 설정하였으며, 모든 상태에서 에피소드가 종료될 확률은 0.1입니다. 각 Transition에 대한 기대 보수는 평균이 0, 분산이 1인 정규분포를 따르도록 설정하였습니다.

![](/images/Reinforcement Learning/8. Planning and Learning with Tabular Methods/RL 08-15.png){: .align-center}

위의 그래프 중 윗부분은 1000개의 상태와 Branching Factor를 각각 1, 3, 10으로 설정한 환경에서 200개의 샘플에 대한 평균 결과를 나타냅니다. 각 정책의 우수성은 Expected Update가 완료된 업데이트의 수에 대한 함수로 표현합니다. 모든 경우에서 On-policy 분포에 따른 샘플링은 균일한 분포에 비해 초기에 더 빨리 좋은 성능을 보여주는 것을 알 수 있습니다. 아래쪽의 그래프는 10000개의 상태에서 Branching Factor가 1인 경우에서의 실험입니다. 두 그래프를 토대로 상태의 개수나 Branching Factor에 상관 없이 항상 On-policy 분포에 따른 샘플링은 균일한 분포의 샘플링에 비해 초기에 우수한 성능을 보임을 알 수 있습니다.

그러나 위의 그래프를 다시보면, Branching Factor가 큰 경우에는 장기적으로 보았을 때 균일한 분포의 샘플링이 약간 더 우수한 성능을 보입니다. 즉, 단기적으로는 On-policy 분포에 따른 샘플링이 빠르게 수렴값에 가까워지지만, 장기적으로는 균일한 분포의 샘플링이 더 우수한 성능을 보일 수도 있습니다.

## Real-time Dynamic Programming

실시간 동적 프로그래밍(Real-time Dynamic Programming)은 동적 프로그래밍의 Value Iteration 알고리즘을 On-policy Trajectory Sampling으로 구현한 버전입니다. 동적 프로그래밍은 Sweep 기반 Policy Iteration과 밀접하게 관련되어 있기 때문에 실시간 동적 프로그래밍을 통해 On-policy Trajectory Sampling이 어떤 이점이 있는지 쉽게 비교할 수 있습니다. 실시간 동적 프로그래밍은 식 (4.10)에 정의한 대로 Expected Tabular Value Iteration을 통해 실제, 또는 시뮬레이션 된 Trajectory에서 방문한 상태의 가치를 업데이트합니다.

실시간 동적 프로그래밍은 섹션 4.5에서 언급한 비동기식 DP 알고리즘의 한 종류입니다. 실시간 동적 프로그래밍에서 업데이트 순서는 실제, 또는 시뮬레이션 된 Trajectory에서 방문한 순서에 의해 결정됩니다.

만약 Trajectory가 지정된 시작 상태의 집합에서만 시작할 수 있고, 주어진 정책에 대한 예측에만 관심이 있는 경우, On-policy Trajectory Sampling을 통해 알고리즘은 주어진 정책으로 도달할 수 없는 상태들은 완전히 무시할 수 있습니다. 주어진 정책을 평가하는게 아니라 최적의 정책을 찾는 것이 목표인 제어 문제에서는 최적의 정책으로 도달할 수 없는 상태가 있는 경우에는 그 상태로 가는 행동을 선택할 필요가 없습니다. 이렇게 최적의 정책과 관련 없는 상태에 대해 임의의 행동을 지정하거나, 정의하지 않을 수도 있는 정책을 최적의 부분 정책(Optimal Partial Policy)이라고 합니다. 표현이 조금 헷갈리지만, 아래 그림을 보시면 무슨 뜻인지 이해하실 수 있습니다.

![](/images/Reinforcement Learning/8. Planning and Learning with Tabular Methods/RL 08-16.png){: .align-center}

그러나 Sarsa와 같은 On-policy Trajectory Sampling 제어 방법에서 최적의 부분 정책을 찾기 위해서는 일반적으로 모든 상태-행동 쌍을 무한히 방문해야 합니다. 이것은 섹션 5.3과 같은 탐색 시작의 가정을 사용할 수도 있지만, 추정 문제와 달리 제어 문제에서는 최적의 정책으로 수렴하기 위해 상태, 또는 상태-행동 쌍 업데이트를 중지할 수 없습니다.

이와 다르게 실시간 동적 프로그래밍의 가장 큰 특징은 합리적인 조건을 문제에 대해 모든 상태를 무한히 자주 방문하지 않거나, 최적의 정책과 관련 없는 일부 상태를 전혀 방문하지 않고도 최적의 정책을 찾는 것을 보장한다는 것입니다. 이는 상태가 매우 많아 단일 Sweep도 수행하기 힘든 문제를 해결할 때 큰 장점이 될 수 있습니다.

Example 8.6 RTDP on the Racetrack

구체적인 예제를 통해 동적 프로그래밍 알고리즘과 실시간 동적 프로그래밍 알고리즘을 비교해보겠습니다. 아래의 그림과 같이 자동차가 Starting line에서 Finish line까지 도달하는 것이 목표인 Grid World 문제가 있습니다. Starting line에서 Finish line까지 도달하기 위해서는 자동차가 오른쪽으로 턴하는 행동이 반드시 필요한데, 트랙을 벗어나지 않으면서 가능한 빨리 Finish line에 도달해야합니다. 각 에피소드는 자동차가 Finish line에 도달하면 종료됩니다.

![](/images/Reinforcement Learning/8. Planning and Learning with Tabular Methods/RL 08-17.png){: .align-center}

상태의 집합은 자동차의 속도가 되는데, Starting line에서 속도는 0입니다. 속도의 제한은 딱히 없으므로 상태의 집합은 무한대라고 볼 수 있습니다. 하지만 0부터 시작하는 속도가 급속도로 무한대에 가까워질수는 없으니, 실질적으로 도달할 수 있는 속도는 유한하다고 볼 수 있습니다. 보수는 모든 단계에서 -1이고, 만약 자동차가 트랙의 경계에 부딪히면 Starting line 중 임의의 지점으로 이동하고 에피소드가 계속됩니다.

예제 중 왼쪽의 그림은 시작 상태에서 도달할 수 있는 상태가 총 9,115개입니다. 하지만 실제로 최적의 정책과 관련이 있는 상태는 그 중 599개 뿐입니다. 이 문제를 동적 프로그래밍과 실시간 동적 프로그래밍으로 각각 수행했을 때 평균적인 결과는 아래 표와 같습니다. 두 방법 모두 초기 값은 동일합니다.

![](/images/Reinforcement Learning/8. Planning and Learning with Tabular Methods/RL 08-18.png){: .align-center}

동적 프로그래밍은 각 상태 집합 전체를 Sweep하는 Value Iteration이며, Sweep 한 번에 하나의 상태가 업데이트됩니다. 동적 프로그래밍에서는 상태를 업데이트했을 때 그 변동값이 $10^{-4}$ 미만일 때 수렴된 것으로 판단하였고, 실시간 동적 프로그래밍은 20회 이상의 에피소드에서 Finish Line을 통과한 시간이 비슷한 시간 단계일 때 수렴한 것으로 판단하였습니다.

두 방법 모두 평균적으로 14~15 시간 단계를 소요하는 최적의 정책을 생성하였지만, 실시간 동적 프로그래밍은 동적 프로그래밍이 수행한 업데이트량의 절반만 사용했습니다. 이것이 바로 On-policy Trajectory Sampling의 결과입니다. 동적 프로그래밍은 각각의 Sweep에서 모든 상태의 가치를 업데이트했지만, 실시간 동적 프로그래밍은 최적의 정책과 관련된 일부의 상태만 업데이트 하였습니다. 실시간 동적 프로그래밍은 평균적으로 100회 이하로 방문한 상태의 98.45%를, 10회 이하로 방문한 상태의 80.51%의 가치를 업데이트했습니다. 또한 약 290개의 상태의 가치는 전혀 업데이트하지 않았습니다.

<p style="text-align:right">□</p>

실시간 동적 프로그래밍의 또 다른 장점은 가치 함수가 최적의 가치 함수 $v\_{\*}$에 접근함에 따라 에이전트가 정책을 따라 사용하는 궤적이 최적의 정책에 가까워진다는 것입니다. 이것은 Value Iteration 또한 알고리즘이 종료되기 직전의 가치 함수는 $v\_{\*}$에 가깝고 이 때의 greedy 정책은 최적의 정책에 가깝지만, Value Iteration이 종료되기 전의 greedy 정책이 최적의 정책과 가까운지 확인하는 것은 동적 프로그래밍에 포함되어 있지 않으며, 그것을 구현하기 위해서는 상당한 추가 계산이 필요합니다.

이 실시간 동적 프로그래밍 예제를 통해 Trajectory Sampling의 몇 가지 장점을 알 수 있습니다. 기존의 Value Iteration은 모든 상태의 가치를 계속 업데이트했지만, 실시간 동적 프로그래밍은 목표와 관련된 상태의 집합에 초점을 맞췄습니다. 이 초점은 학습이 진행될수록 점점 더 좁아지며, 결국에는 최적의 정책(여기서는 경로)을 구성하는 상태에만 초점을 맞추도록 수렴됩니다. 실시간 동적 프로그래밍은 Sweep 기반 Value Iteration에 비해 약 50%의 계산만 사용하고도 최적의 제어를 성공적으로 수행하였습니다.

## Planning at Decision Time

지금까지 이번 장의 내용은 모델에서 얻은 시뮬레이션된 경험을 기반으로 정책이나 가치 함수를 개선하기 위해 Planning을 사용했습니다. 현재 상태에서 행동을 선택하기 전에, 현재 상태를 포함한 이전의 많은 상태에서 행동을 선택하는데 Planning을 사용했습니다. 이런 개념으로, Planning은 현재 상태에만 집중되지 않습니다. 이렇게 사용되는 Planning을 Background Planning이라고 합니다.

Planning을 사용하는 또 다른 방법은 매번 새로운 상태 $S_t$를 방문한 후, Planning을 시작하고 완료하는 것입니다. 즉, 상태 $S_{t+1}$을 방문한 후, Planning을 시작하여 $A_{t+1}$을 생성하는 방식입니다. 이런 사용 방법은 상태의 가치만 사용할 수 있고, 모델로부터 예측한 다음 상태의 가치를 토대로 행동을 선택합니다. 이 방법은 Planning이 특정 상태에 초점을 맞추게 되며, 이것을 Decision-time Planning이라고 합니다.

Decision-time Planning은 가치와 정책이 현재 상태와 행동의 선택에 따라 달라지므로 Planning 과정에서 생성된 가치와 정책은 현재 상태에서 행동을 선택한 후 삭제됩니다. 이것이 문제처럼 보일 수 있지만, 일반적인 환경에서는 매우 많은 상태가 있고, 한번 상태를 방문한 후 오랫동안 같은 상태로 돌아갈 가능성이 거의 없기 때문에 큰 문제는 아닙니다. 방문하는 상태마다 Planning을 수행하기 때문에, Decision-time Planning은 빠른 응답이 필요하지 않은 환경에서 유용합니다. 예를 들면, 체스 게임 환경에서는 한 번의 이동에 몇 초 ~ 몇 분의 계산 시간이 허용될 수 있습니다. 다만 라우팅과 같이 빠른 응답이 필요한 환경에서는 Background Planning을 사용하여 각 상태에 대해 신속하게 적용할 수 있는 정책을 계산하는 것이 더 좋습니다.

## Heuristic Search

인공지능의 고전적인 State-space Planning 방법은 Heuristic Search로 알려진 Decision-time Planning 방법입니다. Heuristic Search에서는 만나는 상태마다 Tree 자료구조를 생성합니다. Tree의 Leaf node에 추정한 가치 함수를 적용하고, 현재 상태를 Root node로 두어 Leaf node부터 Root node까지 거꾸로 올라가는(Backup) 방식으로 탐색을 합니다. 이 과정은 현재 상태에 대한 상태-행동 쌍이 담긴 노드에서 중지되며, 계산한 Backup 값 중 현재 상태에서 가장 좋은 행동을 선택한 다음 나머지 Backup 값은 폐기합니다.

기존의 Heuristic Search에서는 추정한 가치 함수가 변경되었을 때 Backup된 값을 저장하지 않습니다. 왜냐면 기본적으로 가치 함수는 사람이 설계하는 것이고, 검색을 한다고 해서 변경되지는 않기 때문입니다. 하지만 Heuristic Search 중 계산된 Backup된 값이나, 지금까지 배운 다른 방법들을 사용하여 가치 함수를 개선해볼 수는 있습니다.

Heuristic Search를 통해 더 나은 행동을 선택하는 방법은 그만큼 더 Tree를 깊게 생성해서 검색하는 것입니다. 만약 완벽한 모델(그리고 불완전한 가치 함수)이 주어진다면 깊게 검색할수록 일반적으로 더 나은 정책을 만들 수 있습니다. 극단적으로 에피소드 끝까지 탐색할 수 있다면 불완전한 가치 함수일지라도 최적의 행동을 선택할 수 있습니다. 하지만 더 깊게 검색할수록 더 많은 계산이 필요하기 때문에 그만큼 응답 시간이 느려진다는 단점도 있습니다. (이것에 대한 구체적인 예시는 뒤에 나오는 섹션 16.1의 TD-Gammon을 참고해주시기 바랍니다)

Heuristic Search에서 가장 중요한 것이 현재 상태임을 간과해서는 안됩니다. Heuristic Search는 검색 트리가 현재 상태에서 즉시 사용할 수 있는 행동이나 후속 상태에 집중되어 있기 때문입니다. 가령, 계산 자원과 메모리 자원은 임박한 이벤트에 우선적으로 할당되어야 합니다.

![](/images/Reinforcement Learning/8. Planning and Learning with Tabular Methods/RL 08-19.png){: .align-center}

업데이트의 분포는 현재 상태와 가능한 후속 상태에 초점을 맞추기 위해 지금까지와 유사한 방식으로 변경할 수 있습니다. 제한적이지만 Heuristic Search를 사용하여 탐색 트리를 구성한 다음, 위의 그림과 같이 상향식으로 1-step 업데이트를 수행할 수 있습니다. 업데이트가 이러한 방식으로 이루어지고 테이블 형식으로(Tabular) 사용된다면 Depth-first Heuristic Search와 정확히 동일한 업데이트라고 볼 수 있습니다. 모든 상태 공간 검색은 이렇게 다수의 1-step 업데이트를 결합하는 것으로 볼 수 있습니다. 즉, 깊게 검색할수록 성능이 향상하는 이유는 multi-step을 사용하기 때문이 아니라, 현재 상태로부터 바로 다음에 있는 상태와 행동에 대한 업데이트의 집중 때문입니다. 행동을 결정하는 것에 대해 많은 양의 계산을 할당함으로써 그렇지 않은 업데이트보다 더 나은 의사 결정을 수행할 수 있습니다.

## Rollout Algorithms

Rollout Algorithm은 현재 상태에서 시작하여 시뮬레이션된 Trajectory에 적용된 몬테 카를로 제어를 기반으로 하는 Decision-time Planning 알고리즘입니다. 현재 상태에서 가능한 행동 각각에서 시작하여 주어진 정책을 따라 시뮬레이션된 궤적의 보수를 평균화하여 주어진 정책에 대한 행동 가치를 추정합니다. 추정한 행동 가치가 충분히 정확하다고 판단되면 가장 높은 추정값을 갖는 행동이 선택되고, 그 행동의 결과로 생성된 다음 상태에서 이 과정이 반복됩니다. Rollout 이라는 이름이 붙은 이유는 주사위를 여러번 던져서 주사위의 가치를 추정하는데서 유래했습니다. (Tesauro and Galperin, 1997)

5장에서 설명한 몬테 카를로 제어 알고리즘과 달리 Rollout Algorithm의 목표는 주어진 정책 $\pi$에 대해 최적의 행동 가치 함수 $q_{*}$를 찾거나, 행동 가치 함수 $q_{\pi}$를 추정하는 것이 아닙니다. 그 대신 주어진 정책에 대해 현재 상태에 대한 행동 가치의 몬테 카를로 추정을 계산합니다. (이것을 Rollout Policy라고 부릅니다) Decision-time Planning 알고리즘으로써, 사용한 행동 가치의 추정값은 바로 폐기합니다. Rollout Algorithm은 모든 상태-행동 쌍에 대한 결과를 샘플링할 필요가 없고, 상태 공간이나 상태-행동 공간에 대한 함수를 근사화할 필요가 없기 때문에 구현하기가 비교적 간단한 장점이 있습니다.

Rollout Algorithm의 목표는 Rollout Policy를 개선하는 것입니다. 그러나 이 과정에서 중요한 Tradeoff가 있는데, Rollout Policy를 향상시킬수록 시뮬레이션하는데 더 많은 시간이 필요하다는 것입니다. Rollout Algorithm은 Decision-time Planning 방법으로써 엄격한 시간 제약을 충족해야 합니다. Rollout Algorithm에 필요한 계산 시간은 ① 각 결정에 대해 평가해야하는 행동의 수, ② 유용한 샘플 보수를 얻는 데 필요한 시뮬레이션 Trajectory의 시간 단계 수, ③ Rollout Policy가 결정을 내리는 데 걸리는 시간, 그리고 ④ 우수한 몬테 카를로 행동 가치 추정치를 얻기 위해 필요한 시뮬레이션 Trajectory의 수가 있습니다.

이러한 요소들의 균형을 맞추는 것은 Rollout 방법을 사용할 때 중요하지만, 이를 조금 완화할 수 있는 몇 가지 방법이 있습니다. 첫째로, 몬테 카를로 시행은 서로 독립적이기 때문에 여러 개의 프로세서에서 이 시행들을 병렬적으로 실행할 수 있습니다. 둘째로, 5장에서 에피소드를 부분 종료한 테크닉을 활용하는 것입니다. (Tesauro and Galperin, 1997)이 제안한 것처럼 몬테 카를로 시뮬레이션을 모니터링하여 최적이 될 것 같지 않은 행동을 미리 제거할 수도 있습니다.

Rollout Algorithm은 가치나 정책에 대한 장기적인 기억을 유지하지 않기 때문에 일반적으로 학습 알고리즘으로 간주하지 않습니다. 그러나 Rollout Algorithm은 이 책에서 다루는 강화학습의 일부 특징을 활용합니다. Rollout Algorithm은 샘플 Trajectory의 Return을 평균화하는 과정에서 환경의 샘플 모델과 상호작용합니다. 이런 식으로 전체 Sweep을 사용하지 않고 Expected Update 대신 샘플에 의존하여 모델의 필요성을 피하는 강화학습의 특성을 갖고있기 때문입니다. 마지막으로 Rollout Algorithm은 추정된 행동 가치에 대해 greedy하게 행동함으로써 Policy Improvement 속성을 이용한다는 점이 있습니다.

## Monte Carlo Tree Search

몬테 카를로 트리 검색 (Monte Carlo Tree Search ; MCTS)는 최근에 나온 Decision-time Planning의 가장 핫한 예시입니다. MCTS는 기본적으로 이전 섹션에서 설명한 Rollout Algorithm에 기반하지만, 시뮬레이션에서 보다 높은 보수를 받는 Trajectory로 연속적으로 유도하기 위해, 몬테 카를로 시뮬레이션에서 얻은 가치 추정값을 누적하는 수단을 추가하였습니다. MCTS는 2016년 AlphaGo가 이세돌을 꺾는 데 결정적인 역할을 한 알고리즘입니다. 물론 MCTS는 게임 환경에 국한된 알고리즘은 아닙니다.

MCTS가 실행되는 순서는 기존과 조금 다른데, 주어진 상태에서 후속 상태가 먼저 발생한 후 그 상태를 만들기 위한 행동을 선택하는 방식입니다. Rollout Algorith에서와 같이 각각의 실행은 현재 상태에서 시작해서 최종 상태로 실행되는 많은 Trajectory를 시뮬레이션하는 반복 프로세스입니다. MCTS의 핵심 아이디어는 이전 시뮬레이션에서 높은 평가를 받은 Trajectory의 초기 부분에 집중하여, 연속적인 시뮬레이션을 수행하는 것입니다. MCTS를 구현할 때, 다음 행동을 선택할 때 사용한 추정한 가치 함수나 정책을 보존하는 경우가 많으나, 그렇게 하지 않아도 문제는 없습니다.

대부분 시뮬레이션된 Trajectory의 행동들은 단순한 정책에 의해 생성되는데, Rollout Algorithm에 사용되는 정책이기 때문에 Rollout Policy라고 합니다. Rollout Policy와 모델 모두 많은 계산이 필요하지 않다면 짧은 시간에 많은 시뮬레이션 Trajectory를 생성할 수 있습니다. 모든 Tabular 몬테 카를로 방법에서 상태-행동 쌍의 가치는 해당 쌍의 시뮬레이션된 보수의 평균으로 추정됩니다. 몬테 카를로의 가치 추정은 아래 그림과 같이 현재 상태를 Root로 하는 트리 구조를 가지며, 도달할 가능성이 가장 높은 상태-행동 쌍의 하위 집합만 유지됩니다. MCTS는 시뮬레이션된 Trajectory의 결과를 기반으로 최적의 상태가 될 수 있는 후보들을 노드에 추가하여 트리를 확장합니다. 이러한 상태에 대해 행동 중 일부는 가치 추정값을 가지고 있으므로 Exploration과 Exploitation를 잘 조절하여 Tree Policy라는 정책을 사용할 수 있습니다.

![](/images/Reinforcement Learning/8. Planning and Learning with Tabular Methods/RL 08-20.png){: .align-center}

위의 그림은 MCTS의 기본 버전입니다. 각 단계에 대해 조금 더 자세히 설명하면,

1. Selection : Root Node에서 시작하여 트리의 가장자리에 연결된 행동 가치를 기반으로 Tree Policy를 사용해 트리를 순회하며 Leaf Node를 선택합니다.
2. Expansion : 일부 반복 과정 중에 탐색되지 않은 행동을 선택함으로써, 선택한 노드에서 도달한 하나 이상의 자식 노드를 추가하여 Leaf Node를 확장합니다.
3. Simulation : Rollout Policy를 사용하여 선택한 노드, 또는 새로 추가된 자식 노드 중 하나에서 전체 에피소드를 시뮬레이션합니다. 결과는 Tree Policy에 의해 먼저 선택된 행동과 Rollout Policy에 의해 트리 이후의 행동이 포함된 몬테 카를로 시행입니다.
4. Backup : 시뮬레이션된 에피소드에 의해 생성된 Return은 MCTS의 반복 과정에서 Tree Policy가 수행한 행동 가치를 업데이트하거나, 초기화하기 위해 백업됩니다. Rollout Policy에 의해 트리 바깥에서 방문한 상태 및 행동에 대한 가치는 저장되지 않습니다.

MCTS는 시간적으로, 그리고 계산 리소스가 허용하는 만큼 이 4단계를 계속 반복합니다. 그 후 마지막으로 이 반복 과정을 통해 누적된 통계에 의해 Root Node의 행동이 선택됩니다. 이 때 행동을 선택하는 기준은 여러 가지가 있는데, 예를 들어 Root Node에서 선택할 수 있는 모든 행동 중 가장 가치가 큰 행동을 선택할 수도 있고, 또는 가장 안좋은 후속 상태를 피할 수 있는 행동을 선택할 수도 있습니다. 어쨌든 이렇게 행동을 선택해서 다음 상태에 도달하면, MCTS를 다시 실행하여 다음 행동을 선택합니다. 이 때, 다음 상태에 도달하고 나면 이전에 계산했던 트리는 모두 폐기됩니다.

MCTS가 어떻게 이렇게 우수한 결과를 도출할 수 있는지는 이 책에서 설명하는 강화학습의 원리와 연관시키면 이해할 수 있습니다. 기본적으로 MCTS는 Root Node에서 시작하는 시뮬레이션이 적용된 몬테 카를로 제어를 기반으로 하는 Decision-time Planning 알고리즘입니다. 즉, 이전 섹션에서 설명한 Rollout Algorithm의 한 종류입니다. 따라서 Online, Incremental, Sample 기반의 가치 추정 및 Policy Improvement의 장점을 그대로 보유하고 있습니다. 이 외에도 트리에 행동-가치 추정값을 저장하고, 강화학습의 Sample Update를 사용하여 업데이트합니다. 이것은 몬테 카를로 시행을 할 때, 초기에 높은 보수를 갖는 Trajectory를 따르는 경로에 집중하는 효과가 있습니다. 또한 트리를 점진적으로 확장함으로써 이러한 Trajectory에서 방문한 상태-행동 쌍의 추정 값을 효과적으로 저장 및 조회할 수 있습니다. 따라서 MCTS는 탐색에 과거 경험을 사용하는 이점을 가지면서 행동-가치 함수를 전체적으로 근사해야하는 문제를 피할 수 있습니다.

MCTS의 이러한 성공은 강화학습 뿐만 아니라 인공지능 전반에 큰 영향을 끼쳤으며, 현재에도 여러 응용 프로그램에 사용하기 위해 수정 및 확장을 연구하고 있습니다.

## Summary of the Chapter

Planning에는 환경 모델이 필요합니다. 분포 모델(Distribution Model)은 다음 상태의 확률과 가능한 행동에 대한 보수로 구성됩니다. 샘플 모델(Sample Model)은 이러한 확률에 따라 생성된 단일 Transition 및 보수를 생성합니다. 동적 프로그래밍은 가능한 모든 다음 상태 및 보수에 대한 기대값을 계산하는 Expected Update를 사용하기 때문에 분포 모델이 필요합니다. 반면에 대부분의 강화학습 알고리즘에서는 Sample Update를 사용하므로 샘플 모델을 사용합니다. 샘플 모델은 일반적으로 분포 모델보다 훨씬 쉽게 얻을 수 있습니다.

이 장에서는 최적의 행동을 Learning하는 것과 Planning하는 것 사이에 관계를 강조하였습니다. 두 방법 모두 동일하게 가치 함수를 추정하고, 작은 Backup 계산을 점진적으로 업데이트합니다. 이 공통점을 사용해 Learning과 Planning 모두 동일한 가치 함수 추정을 업데이트하도록 설계함으로써 간단하게 통합할 수 있습니다. 또한 어떤 Learning 방법이라도 실제 경험이 아니라 모델에 의한 시뮬레이션된 경험에 적용하기만 하면 Planning에 사용할 수 있습니다.

Incremental Planning 방법을 Acting 및 모델 학습과 통합하는 것은 간단합니다. Planning, Acting, 모델 학습 간에는 순환적으로 상호작용하며, 이를 통합하는 가장 간단한 방식은 모든 프로세스를 비동기화하여 병렬식으로 수행하는 것입니다. 이 방법은 프로세스 간의 계산 자원을 효율적으로 분배할 수 있다는 장점이 있습니다.

또한 이 장에서 상태 공간에서 Planning 방법에 대해 다루었습니다. 첫째로 업데이트 크기의 변화입니다. 업데이트가 작을수록 Planning이 더 Incremental 될 수 있습니다. 가장 작은 업데이트는 Dyna와 같은 1-step Sample Update입니다. 둘째로 업데이트의 분포, 즉 검색의 초점입니다. Prioritized Sweeping은 최근에 값이 변경된 상태의 역방향에 초점을 맞춥니다. On-policy Trajectory Sampling은 Agent가 환경을 제어할 때 만날 수 있는 상태, 또는 상태-행동 쌍에 초점을 둡니다. 이를 통해 예측이나 제어 문제와 관련이 없는 상태 공간의 일부를 건너뛸 수 있습니다. 실시간 동적 프로그래밍(Real-time Dynamic Programming)은 Value Iteration의 On-policy Trajectory Sampling 버전으로써 기존 Sweep 기반의 Policy Iteration에 비해 몇 가지 장점을 보여줍니다.

Planning은 Agent가 환경과 상호작용할 때 실제로 발생하는 상태에도 초점을 맞출 수도 있습니다. 이것의 가장 중요한 형태는 Planning이 행동을 선택하는 프로세스의 일부로 수행될 때입니다. 인공지능 분야에서 연구되는 고전적인 Heuristic Search가 그 예시입니다. 그 외에 Online, Incremental, Sample에 기반한 가치 추정 및 Policy Improvement의 이점을 제공하는 Rollout Algorithm과 Monte Carlo Tree Search가 있습니다.

## Summary of Part I : Dimensions

8장을 마지막으로 이 책의 1부가 끝납니다. 1부에서는 강화학습의 여러 방법들이 가지고 있는 공통적인 아이디어를 위주로 제시했습니다. 각각의 아이디어는 방법을 변형시킬 수 있는 차원(Dimension)으로 볼 수 있습니다. 이러한 차원의 집합은 가능한 방법들이 펼쳐진 공간으로 볼 수 있습니다. 이번 섹션에서는 방법 공간의 차원 개념을 사용하여 지금까지 배운 강화학습의 관점을 요약합니다.

지금까지 배운 강화학습의 방법에는 세 가지 공통된 핵심 아이디어가 있습니다. 첫째로, 모든 방법이 가치 함수를 추정했습니다. 둘째로, 모든 방법이 실제로 움직인 Trajectory 또는 가능한 상태의 Trajectory를 따라 값을 백업했습니다. 마지막으로 모든 방법이 Generalized Policy Iteration의 전략에 기반했습니다.

![](/images/Reinforcement Learning/8. Planning and Learning with Tabular Methods/RL 08-21.png){: .align-center}

위의 그림을 보시면 방법을 분류하는 가장 핵심적인 두 가지 차원이 나와 있습니다. 두 차원은 가치 함수를 개선하는데 사용되는 업데이트의 종류와 관련되어 있습니다. 가로 방향은 Sample Update인지 Expected Update인지에 대한 여부입니다. Expected Update는 분포 모델이 필요한 반면, Sample Update에는 샘플 모델만 필요하거나 아예 모델이 없는 실제 경험에서도 수행할 수 있습니다. 세로 방향은 업데이트의 깊이, 즉 Bootstrapping에 대한 정도를 나타냅니다. 위 그림의 네 꼭지점을 보시면 그 중 세 지점에는 가치 함수를 추정하는 방법인 동적 프로그래밍(Dynamic Programming), 시간차 학습(Temporal-difference Learning), 그리고 몬테 카를로 방법(Monte Carlo Method)가 나와 있습니다. 시간차 학습과 몬테 카를로 방법 사이에는 그림에는 나와있지 않지만 $n$-step TD 방법이 있으며, Bootstrapping을 많이 할수록(즉, $n$의 값을 커질수록) 몬테 카를로에 가까워집니다.

동적 프로그래밍 방법은 1-step Expected Update를 포함하기 때문에 맨 오른쪽 상단 끝에 위치합니다. 오른쪽 하단 끝은 Expected Update가 매우 깊어 마지막 상태까지 실행되는 극단적인 경우입니다. 이것은 사실상 모든 경우의 수를 체크하는 방법이기 때문에 Exhaustive Search라고 부릅니다. 이 극단적인 방법들 사이에는 Heuristic Search 방법과 제한된 깊이까지 검색 & 업데이트 하는 방법이 포함됩니다. 동적 프로그래밍과 시간차 학습 사이에는 Expected Update와 Sample Update를 혼합하는 방법, 그리고 단일 업데이트에서 샘플과 분포를 혼합하는 방법이 포함됩니다.

이 두 가지 차원 외에 마지막으로 논의할 수 있는 세 번째 차원은 On-policy와 Off-policy 방법에 대한 구분입니다. On-policy 방법은 현재 사용하는 정책에 대한 가치 함수를 학습하지만, Off-policy 방법은 가장 좋다고 판단되는 다른 정책으로부터 현재 정책의 가치 함수를 학습합니다. 정책을 생성하는 것은 일반적으로 탐색의 필요성으로 인해 현재 가장 좋다고 생각하는 것과 다릅니다. 이 세 번째 차원은 위의 그림에 직접적으로 표시되지는 않았으나, 그 그림의 평면에서 수직으로 표현된다고 보시면 됩니다. 이 외에도 이 교재에서는 아래와 같이 여러 가지 다른 차원을 구분해놓았습니다.

- Definition of Return : Episodic Task인가, 또는 Continuing Task인가? 그리고 Discount 되는가?
- Action value vs State value vs Afterstate value : 어떤 종류의 가치를 추정해야 하는가?
- Action Selection/Exploration : Exploration과 Exploitation를 적절히 조절하기 위해 어떻게 행동을 선택해야 하는가? (ex. $\epsilon$-greedy, soft-max, upper confidence bound)
- Synchronous vs Asynchronous : 모든 상태에 대한 업데이트를 동시에 수행할 것인가, 아니면 순서에 따라 하나씩 수행할 것인가?
- Real vs Simulated : 실제 경험으로 업데이트할 것인가? 아니면 시뮬레이션된 경험으로 업데이트할 것인가? 또는 둘 다인가? 둘 다라면 어떤 방법으로 융합하는가?
- Location of Updates : 어떤 상태, 또는 상태-행동 쌍을 업데이트 하는가? (모델이 없는 방법은 실제로 발생한 상태와 상태-행동 쌍만 가능하지만 모델에 기반한 방법은 임의로 선택할 수 있음)
- Timing of Updates : 업데이트는 행동 선택의 일부로 수행하는가? 아니면 나중에 수행하는가?
- Memory for Updates : 업데이트된 값을 얼마나 유지해야 하는가? Heuristic Search에서와 같이 행동을 선택할 동안에만 유지하고 폐기할 것인가, 아니면 영구적으로 유지할 것인가?

물론 이러한 차원의 구분은 완전하지 않고, 서로 독립적이지도 않습니다. 각각의 개별 알고리즘들은 이 외에도 여러 차이가 있으며, 많은 알고리즘은 여러 개의 차원에 걸쳐 있습니다. 예를 들면, Dyna 방법은 실제 경험과 시뮬레이션된 경험을 모두 사용하여 동일한 가치 함수에 영향을 끼칩니다. 물론 이와 다르게 여러 개의 가치 함수를 사용하는 것도 합리적인 방법입니다. 이 섹션에서 논하고자 하는 것은 가능한 방법들의 분류 방식을 소개하고 새로운 방법이 나왔을 때, 또는 새로운 방법을 만들고자 할 때의 아이디어를 정리하는 것입니다.

하지만 1부에서 언급하지 않은 가장 중요한 차원이 하나 있습니다. 2부에서는 함수 근사(Function Approximation)라는 새로운 아이디어를 본격적으로 다룰 예정입니다.

8장에 대한 내용은 여기서 마치겠습니다. 읽어주셔서 감사합니다!