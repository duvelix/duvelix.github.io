---
title: "The Reinforcement Learning Problem"
permalink: /rl/the-reinforcement-learning-problem/
classes: wide
toc: true
toc_label: "Table of Contents"
categories:
  - studies
tags:
  - reinforcement learning
---

사람은 여러 환경과 상호 작용하며 많은 것을 학습합니다. 맛있는 음식을 먹으면 기분이 좋다는 것을 통해 먹는 것을 좋아하게 되며 날카로운 것에 찔리고 나서는 날카로운 것을 멀리하게 되는 것이 그 예입니다. 이렇게 원인과 결과를 학습하게 되고 행동으로부터 어떤 결과가 나오는 지 알게 되며 목표를 달성하기 위해 무엇을 해야하는지 알게 됩니다. 이러한 상호 작용은 사람들에 대한 지식의 원천이라고 할 수 있습니다.

## Reinforcement Learning

일반적인 기계학습에서는 주어진 데이터를 분석하여 **Classification**하거나 **Regression**하는 것을 목적으로 합니다. (기계학습 포스트를 참고하세요) 하지만 강화학습은 주어진 환경과 상호작용함으로써 목표에 도달하기 위해 어떤 행동을 하는 가에 중점을 둡니다.

강화학습의 가장 큰 특징은 <span style="color:red">Trial-and-error</span>와 <span style="color:red">Delayed Reward</span>입니다. 사람도 마찬가지지만, 강화학습의 Agent는 새로운 상황에 마주쳤을 때 어떤 선택이 최선의 선택인지 알 수 없으므로 막연하게 이것 저것 시도해보다가 실패를 되풀이하는 방식으로 최선의 선택을 찾습니다. 지연 보상의 의미는 내가 방금 행동한 것이 좋은 것인지 나쁜 것인지 바로 피드백 되는 것이 아니라, 하나의 Episode가 끝나고 나서야 그 행동에 대해 피드백할 수 있다는 것입니다. 이것은 추후 예제를 통해 다시 설명드리도록 하겠습니다.

## Examples

교재에서는 강화학습에 대해 다양한 예시를 보여주고 있습니다. 하지만 제가 봤을 때 교재의 예시가 그렇게 좋지 않아 보여서 제가 직접 몇 가지 예시를 보여드리도록 하겠습니다.

먼저 가장 유명한 사례로 바둑이 있습니다. 2016년에 Google Deepmind에서 보여준 AlphaGo가 대표적인 강화학습 프로그램입니다. 바둑은 검은색 돌부터 시작하여 흰색 돌과 서로 번갈아가며 하나씩 바둑판 위에 두어 승부를 겨루는 게임입니다. 각 플레이어는 매 턴마다 바둑판의 상황을 보고 어느 위치에 바둑알을 놓아야 결과적으로 이길 수 있을지 고민하는 게임이므로 강화학습에 알맞은 예시라고 볼 수 있습니다.

자전거를 배우는 과정 또한 강화학습의 예시라고 볼 수 있습니다. 처음에는 자전거를 타고 제대로 서는 것 조차 못하지만, 핸들을 이리저리 돌려보고 페달을 밟아보면서 점점 자전거에 익숙해질 수 있게 됩니다. 이 과정에서 넘어지는 것이 시행착오라고 볼 수 있습니다.

네트워크에서의 **Routing**은 현재 라우터에서 어떤 라우터를 선택하고 이동해야 최종 목적지까지 도달할 수 있을지 결정하는 문제입니다. 각 라우터에 도달할 때마다 다음 라우터를 선택해야 하고, 빨리 도착할 수록 높은 보상을 받을 수 있습니다. 따라서 Routing도 강화학습을 적용할 수 있는 좋은 예시입니다.

## Elements of Reinforcement Learning

강화학습의 구성 요소는 먼저 <span style="color:red">Agent</span>와 <span style="color:red">Environment</span>가 있습니다. 그 외에 4가지 주요 요소들로는 <span style="color:red">Policy</span>, <span style="color:red">Reward Signal</span>, <span style="color:red">Value Function</span> 그리고 <span style="color:red">Model</span>이 있습니다. 단, Model은 모든 문제에서 쓰이는 요소는 아닙니다. (대표적으로 강화학습의 한 종류인 Q-Learning은 Model을 사용하지 않습니다)

먼저 Policy는 Agent가 주어진 시간에서 행동 방식으로 정의됩니다. 즉, Agent가 주어진 Environment에서 특정 State에 있을 때 어떤 Action을 취할지 나타낸다고 생각하시면 됩니다. 따라서 강화학습의 주요 목표는 Reward의 총합이 최대가 되는 <span style="color:red">Optimal Policy</span>를 구하는 것입니다.

다음으로 Reward Signal은 강화학습 문제의 목표를 정의합니다. 각 Step에서 Environment는 강화학습 Agent에게 Reward라는 실수 숫자를 보냅니다. 이것을 통해 Agent의 목표는 장기적인 관점에서 받는 Reward의 총합을 최대화하는 것으로 정의됩니다. 따라서 보상 신호는 Agent가 어떤 Action을 했을 때 그것이 좋은지 나쁜지를 정의하는 역할을 합니다. Reward가 높을 수록 좋은 Action을 했다는 뜻이며 낮을 수록 나쁜 Action을 했다는 뜻이 됩니다. 만약 어떤 Action을 했을 때 낮은 Reward를 받는 다면 다음에 같은 상황에 처했을 때 다른 Action을 하도록 Policy가 변경될 수 있습니다. 이러한 Reward Signal은 상수로 정의될 수도 있지만 함수로 정의될 수도 있습니다.

Reward Signal이 즉각적은 의미에서 무엇이 좋은지를 나타내는 것과 다르게, Value Function은 장기적으로 무엇이 좋은지를 나타냅니다. 어떤 특정한 State의 Value는 해당 State에서 시작하여 앞으로 누적될 것으로 기대할 수 있는 총 Reward입니다. 이로 인해 당장 높은 Reward를 받을 수 있는 Action이 장기적으로 보았을 때 낮은 Value를 가질 수 있고, 그 반대 또한 성립할 수 있습니다. 따라서 Agent는 항상 가장 높은 Reward가 아니라 가장 높은 Value의 State를 얻을 수 있는 Action을 선택해야 합니다. 즉, Action에 대한 선택은 Value에 대한 판단을 기반으로 해야 합니다.

하지만 높은 Value를 얻을 수 있는 Action을 선택하는 것은 쉽지 않습니다. Reward는 기본적으로 Environment에 의해 직접적으로 제공되지만, Value는 전체 시나리오를 관찰하여 계산하고, 추정하고, 이를 반복해야만 알 수 있기 때문입니다. 따라서 대부분의 강화학습 알고리즘에서는 Value를 정확하게 추정하는 방법을 중요하게 다루고 있습니다.

마지막으로는 Environment에 대한 Model입니다. Model이 존재한다면 Environment가 어떻게 이루어져 있는지 Agent가 예측할 수 있게 되고, 어떻게 행동할 것인지에 대한 추론이 가능해집니다. 예를 들어, State와 Action이 주어진다면 Model은 다음 State와 다음 Reward를 예측할 수 있게 만들어줍니다. Model은 Planning에 사용되며 실제로 경험하기 전에 가능한 미래 상황을 고려하여 Action을 결정하는 모든 방법을 의미합니다. Model과 Planning을 사용하여 강화학습 문제를 해결하는 것을 Model-based 방법이라고 하며 Trial-and-error를 사용하여 강화학습 문제를 해결하는 것을 Model-free 방법이라고 합니다. Planning은 추후 8장에서 더 자세하게 다룰 예정입니다.

## Limitation and Scope

강화학습에서 State는 매우 중요한 요소입니다. 하지만 이 책에서는 State는 이미 주어진 것으로 가정하여 State를 새로 만들거나, 변경하거나, State Signal을 학습하는 부분은 다루지 않습니다. 대신 State가 주어졌을 때 어떤 Action을 취해야 하는 지를 집중적으로 다룰 예정입니다.

또한 이 책의 많은 강화학습의 방법들은 Value Function을 추정하는 방법을 위주로 다루고 있습니다. 하지만 강화학습 문제(정확히는 최적화 문제)에서 Value Function을 예측하는 것이 반드시 필요한 것은 아닙니다. 예를 들어 Genetic Algorithm, Genetic Programming, Simulated Annealing 과 같은 최적화 문제들은 Value Function을 추정하지 않습니다. 이러한 Evolutionary Method는 가장 Reward가 높은 Policy와 무작위 변형 Policy를 섞고 반복합니다. 다만 이러한 방법들을 사용하기 위해서는 Policy의 범위가 충분히 작거나 쉽게 찾을 수 있도록 구조화 되어야 하고, 최적의 답을 도출하는 데 시간이 많이 필요한 단점이 있습니다. 반대로 이러한 Evolutionary Method들은 학습 Agent가 Environment의 State를 완전히 알 필요가 없다는 장점이 있습니다.

이 책에서 최적화 문제를 해결하는 데 사용하는 것은 Environment와 상호 작용하며 Agent가 직접 Policy를 학습하는 강화학습 방법입니다. 이렇게 Agent가 단독으로 상호 작용하며 세부 사항을 활용할 수 있는 방법은 Evolutionary Method보다 효율적인 경우가 많습니다. Evolutionary Method들은 Agent가 어떤 State를 거치고 어떤 Action을 선택하는지 알 수 없다는 단점이 있습니다. 어떤 경우에는 그러한 과정 자체가 중요할 수도 있기 때문입니다. 물론 Evolutionary Method와 함께 사용하는 강화학습 방법도 존재하지만, 이 책에서는 그러한 방법들이 다소 적합하지 않다고 생각하기 때문에 다루지는 않습니다.

## An Extended Example : Tic-Tac-Toe

강화학습의 일반적인 개념과 다른 접근 방식과 비교할 수 있도록 구체적인 예시를 하나 살펴보겠습니다. Tic-Tac-Toe는 보드게임 중 하나로 2명의 플레이어가 3 * 3 크기의 보드에서 교대로 플레이하는 게임입니다. 플레이어는 자신의 턴에 9개의 칸 중 비어있는 칸에 O 또는 X를 표기할 수 있으며 만약 한 플레이어가 가로, 세로, 대각선 중 하나를 자신의 기호(O 또는 X)로 연결하면 이기는 게임입니다. 만약 두 명 다 한 줄을 만들지 못하고 9칸을 채우면 무승부가 됩니다. 사실 이 게임은 필승 전략이 존재하는 게임이기 때문에 상대방 플레이어는 이 게임을 처음 해보는 상황이라고 가정하겠습니다. 이 게임을 이기기 위해서는 어떤 Policy을 취해야 할까요?

![](/assets/images/RL/001/01.jpg){: .align-center}

게임의 대한 전략을 구상할 때 빼놓을 수 없는 이론이 바로 <span style="color:red">Game Theory</span>입니다. 하지만 Game Theory의 방법 중 하나인 Minimax 솔루션은 상대방 이득의 최대값을 최소화한다는 전략으로 플레이하는 것을 가정하기 때문에 이 문제에 적합하지 않습니다. Dynamic Programming 같은 순차적 최적화 방법은 모든 경우에 대해 최적의 솔루션을 계산할 수 있지만 상대방이 어떤 위치에 체크를 할 것인가에 대한 확률 정보를 포함한 완전한 데이터가 필요합니다. 이렇게 완전한 정보가 주어지는 경우는 현실에서 찾아보기 쉽지 않기 때문에 역시 적합하지 않습니다. 물론 이러한 정보는 경험을 통해 추정할 수는 있습니다. 만약 동일한 상대방과 수많은 게임을 플레이한다면 대략적으로 이 사람이 특정 위치에 체크할 확률을 알 수 있습니다. 이렇게 수많은 게임을 통해 상대방의 행동 패턴을 신뢰할 수 있을 정도가 되면 그 후에 동적 프로그래밍을 사용하여 최적의 솔루션을 계산할 수 있습니다. 추후 다룰 강화학습의 방법 중에는 이러한 메커니즘을 이용하는 경우도 있습니다.

Evolutionary Method를 이 문제에 적용하려면 상대방에게 이길 확률이 높은 Policy를 먼저 탐색하는 것입니다. 이 문제에서의 Policy는 플레이어에게 모든 State (3 * 3 크기의 보드에서 발생할 수 있는 모든 경우의 수)에 대해 어떤 Action (내가 어디에 체크할 것인지)을 취할지 선택하는 규칙입니다. 각각의 경우의 수에서 상대방과 여러번 게임을 함으로써 이길 확률을 추정할 수 있습니다. 그 다음에는 이러한 Policy를 계속 생성하며 점진적인 개선을 함으로써 최대화하는 것이 Evolutionary Method가 됩니다. 대표적으로 Genetic Algorithm은 승리확률이 높은 Policy들을 섞어 새로운 Policy를 만들어냄으로써 최적의 Policy를 찾습니다.

Value Function을 Tic-Tac-Toe 문제에 적용할 수도 있습니다. Dynamic Programming을 적용할 때와 같이 모든 가능한 State (경우의 수)에 대해 숫자를 매칭할 수 있도록 테이블을 생성합니다. 이 숫자는 해당 State에서 얼마나 이길 가능성이 높은지를 나타냅니다. 이 수는 Value Function을 갱신할 때마다 변경될 수 있으므로 현재 입력된 숫자는 최신 추정치라고 보시면 됩니다. 특정 State에 대해서 특정 Value를 도출 할 수 있으므로 **함수**로 표현됩니다. 임의의 두 State A, B에 대하여 State A의 Value가 State B의 Value보다 높다면 State A는 State B보다 더 나은 것으로 판단합니다.

그 후 마찬가지로 상대방 플레이어와 수많은 게임을 플레이합니다. 자신의 매 턴마다 가능한 선택지(다음 State)를 확인하여 대부분 가장 큰 Value를 가진 State로 갈 수 있는 곳에 체크를 합니다. 하지만 더 나은 State가 있을지도 모르기 때문에 가끔은 가장 큰 Value가 아닌 State를 무작위로 선택함으로써 다른 State의 Value를 갱신합니다. 이 방법을 요약하면 다음 그림과 같이 표현할 수 있습니다.

![](/assets/images/RL/001/02.jpg){: .align-center}

게임을 하는 동안 승률을 높일 수 있도록 State Value를 보다 정교하게 수정합니다. 위 그림에서의 빨간색 선은 자신이 행동한 후의 결과를 토대로 이전의 State Value를 수정한다는 의미입니다. 현재 시간을 $t$라고 했을 때 $S_t$는 현재 State, $S_{t+1}$은 다음 State를 의미합니다. $S_t$의 Value를 $V(S_t)$라고 하면 $V(S_t)$는 다음과 같이 정의할 수 있습니다.

$$V(S_t) \leftarrow V(S_t) + \alpha \left[ V(S_{t+1}) - V(S_t)\right]$$

위 식에서 $\alpha$는 <span style="color:red">Step-size parameter</span>, 또는 <span style="color:red">Learning rate</span>라고 부릅니다. 즉, 새로 학습한 Value를 얼마나 반영할지 나타내는 수치입니다. $\alpha$가 1에 가까울수록 새로 학습한 Value를 많이 반영하며, 0에 가까울수록 기존의 Value가 더 많이 반영됩니다. 위의 식과 같은 학습 방법을 <span style="color:red">Temporal-difference learning</span>이라고 하는데, 이것은 추후 더 자세히 다룰 예정입니다. **Difference**라는 이름이 붙은 이유는 $V(S_{t+1}) - V(S_t)$와 같이 연속된 두 State Value의 **차이**가 반영되기 때문입니다.

이 방법은 초기에 $\alpha$를 크게 잡아 학습을 시킨 다음, 시간이 지날수록 점점 감소시켜 Value가 수렴하도록 만듭니다. 또한 다음 State의 선택도 Value가 가장 큰 쪽을 선택하는 비율을 늘려간다면 (고정된) 상대방에 대해 Optimal Policy로 수렴합니다. 만약 상대가 고정된 전략을 사용하는 플레이어가 아니라 유동적으로 전략을 천천히 바꾸는 상대라면 $\alpha$의 값을 천천히 줄여나가되, 0이 되지 않도록 설정하는 것으로 대응할 수 있습니다.

이 예제는 Evolutionary Method와 Value Function을 학습하는 방법 간의 차이점을 보여줍니다. Evolutionary Method는 Policy를 평가하기 위해 Policy를 고정하고 상대방과 많은 게임을 하거나 상대방의 Model을 사용하여 많은 게임을 시뮬레이션합니다. 수많은 게임을 통해 얼마나 승리했는지는 다음 Policy를 선택하는데 사용할 수 있지만, Policy를 변경하는 것은 많은 게임 후에야 가능하며 게임의 최종 결과만 사용됩니다. (즉, 게임 도중에 일어나는 일은 무시됩니다) 게임에서 중요한 것은 승리/패배의 여부이기 때문에 게임 중에 행했던 특정 선택은 (실제 게임에서) 얼마나 중요했는지와는 상관 없이 동등한 Value를 지니게 됩니다. 이와 반대로 Value Function은 개별 State를 평가합니다. Evolutionary Method과 Value Function 방법은 모두 Policy를 탐색하는 공통점이 있지만 Value Function은 게임 도중에 사용할 수 있는 정보(즉, State)를 활용한다는 차이점이 있습니다.

이 예제를 통해서 강화학습의 몇 가지 주요한 기능을 알 수 있습니다. 첫째로, Environment(여기서는 상대방 플레이어)과 상호작용 하면서 학습하는 것에 중점을 둡니다. 둘째로, 명확한 목표가 있고 그에 따른 올바른 선택을 하기 위해서 플레이어의 선택에서 지연된 영향을 고려한 예측이나 계획이 필요합니다. 상대방의 Model을 사용하지 않고 계획 및 예측의 효과를 달성할 수 있다는 것이 강화학습 솔루션의 특징이라고 할 수 있습니다.

Tic-Tac-Toe 게임은 상대적으로 State의 수가 적은 편이지만 강화학습은 State Space가 매우 크거나 무한할 때도 사용할 수 있습니다. 예를 들어 Google Deepmind에서 개발한 AlphaGo는 강화학습을 사용하여 바둑을 플레이하는 프로그램입니다. 바둑은 Tic-Tac-Toe에 비해 보드의 크기가 매우 크고 흑돌과 백돌의 위치에 따른 경우의 수가 매우 많습니다. 이러한 Environment에서 Artificial Neural Network는 프로그램의 경험을 일반화할 수 있는 기능을 제공하므로 기존의 경험과 비슷한 State에서 저장된 정보를 기반으로 처음 보는 State에서도 Action을 선택할 수 있습니다. 최근 논문에서는 강화학습과 인공신경망 같은 지도학습을 융합하는 연구가 많은데, 강화학습에서 State Space가 매우 큰 경우에는 과거의 경험을 얼마나 적절하게 일반화할 수 있는지가 핵심이기 때문입니다. 물론 인공신경망이나 딥러닝 외에 방법이 없는 것은 아닙니다.

Tic-Tac-Toe 예제에서는 Agent가 게임의 규칙과 같은 사전지식이 없이 학습하였으나 강화학습이 항상 백지에서 시작하는 것은 아닙니다. 오히려 사전 정보를 사용함으로써 효율적으로 학습할 수 있기도 합니다. (9장 참고) 또한 이와 반대로 State의 일부가 숨겨져 있거나, 학습 Agent가 여러 State를 동일하게 보일 때도 강화학습을 적용할 수 있습니다.

마지막으로, Tic-Tac-Toe 예제에서 플레이어는 어떤 수를 선택하는가에 따라 다음에 발생할 State를 알 수 있었습니다. 이를 위해서는 선택하지 않는 수에 대해 Environment가 어떻게 변할지 예측할 수 있는 게임 Model이 있어야 했습니다. Tic-Tac-Toe처럼 선택하지 않는 수에 대해서도 예측이 가능하면 좋지만, 다른 문제에서는 Action의 효과에 대한 단기 Model조차 부족합니다. 다행히도 강화학습에 Model이 필수는 아니지만 Model이 있거나 학습할 수 있는 경우 Optimal Policy를 쉽게 계산할 수 있습니다. (8장 참고)

## Summary

강화학습은 목표 지향 학습과 의사 결정을 이해하고 자동화하기 위한 Computational 접근 방식입니다. 다른 기계학습과는 다르게 모범적인 Supervise나 Environment의 완전한 Model을 요구하지 않고 Environment와의 직접적인 상호작용으로부터 Agent의 학습을 강조하는 점이 특징입니다. 교재의 저자는 Environment와 상호 작용을 통해 학습할 때 발생하는 계산량을 해결하는 것이 첫 번째 분야라고 주장하고 있습니다.

강화학습은 Markov Decision Process (MDP)의 프레임워크를 사용하여 State와 Action으로 이루어진 Environment에서 Agent가 얻는 Reward를 정의합니다. 이것은 인공지능 문제에서 필수적인 요소들을 표현하기 위함입니다. 이것들은 원인과 결과, 불확실성과 비결정론, 그리고 명시적인 목표의 존재가 포함됩니다.

Value Function의 개념은 교재의 저자가 주장하는 강화학습 방법의 핵심입니다. Policy들 간의 효율적인 탐색을 위해 Value Function을 사용하여 각 Policy가 얼마나 뛰어난지, Policy에서 몇몇 중간 지점이들이 얼마나 중요한지를 파악할 수 있게 만드는 점이 Evolutionary Method들과 차이를 보입니다.



**※ 1.7 Early History of Reinforcement Learning 파트는 생략합니다.**