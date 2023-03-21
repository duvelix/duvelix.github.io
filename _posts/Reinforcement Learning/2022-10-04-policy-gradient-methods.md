---
title: "Policy Gradient Methods"
permalink: /rl/policy-gradient-methods/
classes: wide
toc: true
toc_label: "Table of Contents"
toc_sticky: true
categories:
  - studies
tags:
  - reinforcement learning
---

이번 장은 드디어 마지막 장인 <span style="color:red">Policy Gradient</span>입니다. 이번 장에서는 지금까지 이 교재에서 다룬 방법들과는 다르게, Policy 자체를 매개변수화하는 방법을 알아보겠습니다. 지금까지의 방법들은 Estimated Action-Value를 기반으로 Action을 선택했기 때문에 Action-Value를 추정하는 것이 중요했습니다. 하지만 이번 장에서 배울 새로운 방법인 Policy Gradient는 Action을 선택하는 데 Value Function을 사용하지 않습니다. 이번 장에서 사용할 새로운 표기는 Policy에 대한 매개변수 벡터인 $\boldsymbol{\theta} \in \mathbb{R}^{d'}$입니다. 따라서 Policy는 이제 매개변수 $\boldsymbol{\theta}$를 포함하여 $\pi (a \mid s, \boldsymbol{\theta}) = Pr \\{ A_t = a \mid S_t = s, \boldsymbol{\theta}_t = \boldsymbol{\theta} \\}$로 표현합니다. 이것은 시간 $t$에서 State가 $s$이고 매개변수가 $\boldsymbol{\theta}$일 때 Action $a$를 선택할 확률로 정의됩니다. 만약 학습 알고리즘 안에서 Value Function에 대한 추정을 포함하는 경우, 이전과 마찬가지로 여전히 Weight Vector $\mathbf{w} \in \mathbb{R}^d$를 포함하여 $\hat{v}(s, \mathbf{w})$로 표현합니다.

새로 정의하는 Policy 매개변수 $\boldsymbol{\theta}$를 학습하기 위해서는 스칼라 성능 측정 함수인 $J(\boldsymbol{\theta})$를 기반으로 합니다. 당연히 성능을 최대화하는 것이 목적이기 때문에, $J$의 Gradient를 상승시키기 위해 $\boldsymbol{\theta}$의 값을 조절합니다.

$$\boldsymbol{\theta}_{t+1} = \boldsymbol{\theta}_t + \alpha \widehat{\nabla J (\boldsymbol{\theta}_t)} \tag{13.1}$$

식 (13.1)에서 $\widehat{\nabla J (\boldsymbol{\theta}_t)} \in \mathbb{R}^{d'}$는 매개변수 $\boldsymbol{\theta}_t$에 대해 성능을 나타내는 Gradient에 가까운 확률적 추정치입니다. 이러한 과정을 따르는 모든 방법은 Approximate Value Function을 학습하는지에 대한 여부에 상관 없는 Policy Gradient Method라고 합니다. 만약 Policy와 Value Function에 대한 근사값을 모두 학습한다면 Actor-Critic Method라고 합니다. Actor는 Policy를 학습하는 것을 의미하며, Critic은 Value Function을 학습하는 것을 말합니다. 이번 장은 Section 10.3과 마찬가지로 먼저 매개변수된 Policy 하에서의 State에 대한 Value로 성능이 정의되는 Episodic Task를 다룬 후, 성능이 Average Reward로 정의되는 Continuing Task를 다룰 예정입니다. 결국 마지막에는, 두 경우 모두에 대해 매우 유사한 용어를 사용하여 알고리즘을 표현할 수 있습니다.

## Policy Approximation and its Advantages

Policy Gradient Method에서 $\pi (a \mid s, \boldsymbol{\theta})$가 매개변수 $\boldsymbol{\theta}$에 대해 미분할 수 있고 모든 State $s \in \mathcal{S}$와 모든 Action $a \in \mathcal{A}(s)$, 그리고 매개변수 $\boldsymbol{\theta} \in \mathbb{R}^{d'}$에 대해 유한하다면 Policy는 어떤 방식으로든 매개변수화할 수 있습니다. 실제로, 탐색을 보장하기 위해서는 Policy가 절대 Deterministic이 아니어야 합니다. (즉, 모든 $s, a, \boldsymbol{\theta}$에 대해 $\pi (a \mid s, \boldsymbol{\theta}) \in (0, 1)$) 이번 Section에서는 이산적인 Action Space에서의 가장 일반적인 매개변수화 방법을 소개하고, 그것이 Action-Value 방법에 비해 어떤 장점이 있는지 논의하겠습니다. Policy에 기반한 방법은 (추후 Section 13.7에서 설명하는 것처럼) 연속적인 Action Space가 주어졌을 때 유용한 방법이기도 합니다.

만약 Action Space가 이산적이고 너무 크지 않다면, 일반적으로 떠올릴 수 있는 방법은 각 State-Action 쌍에 대해 매개변수화하는 Numerical Preference $h(s, a, \boldsymbol{\theta})$를 생성하는 것입니다. 각 State에서 Preference가 가장 높은 Action을 선택할 확률이 높게 만드는 것인데, 대표적인 방법으로 다음과 같은 <span style="color:red">Exponential Soft-max Distribution</span>이 있습니다.

$$\pi (a|s, \boldsymbol{\theta}) \doteq \frac{e^{h(s, a, \boldsymbol{\theta})}}{\sum_b e^{h(s, a, \boldsymbol{\theta})}} \tag{13.2}$$

식 (13.2)에서 $e \approx 2.71828$는 자연 로그의 밑입니다. 여기서 분모는 각 State의 Action을 선택할 확률의 합이 1이 되도록 설정한 것입니다. 이러한 Policy 매개변수화를 <span style="color:red">Soft-max in Action Preference</span>라고 부릅니다.

Action Preference 설정 자체는 임의로 매개변수화할 수 있습니다. 예를 들어, Deep Artificial Neural Network (ANN)로 계산할 수도 있습니다. 여기서 $\boldsymbol{\theta}$는 네트워크의 모든 Connection Weight의 벡터로 구성됩니다. 또는, 간단하게 다음과 같이 선형으로 나타낼 수도 있습니다.

$$h(s, a, \boldsymbol{\theta}) = \boldsymbol{\theta}^{\sf T} \mathbf{x} (s,a) \tag{13.3}$$

식 (13.3)에서 $\mathbf{x}  (s, a) \in \mathbb(R)^{d'}$는 Section 9.5에서 설명했던 Feature Vector입니다.

Action Preference의 Soft-max에 따라 Policy를 매개변수화하는 것의 장점 중 하나는 Approximate Policy가 Deterministic Policy에 점점 가까워진다는 것입니다. 지금까지 많이 사용했던 $\epsilon$-greedy의 경우 항상 무작위 Action을 선택할 확률이 존재합니다. 물론 Action-Value를 기반으로 Soft-max Distribution에 따라 Action을 선택할 수도 있지만, 이것만으로는 Policy가 Deterministic Policy에 가까워질 수 없습니다. 대신 Action-Value의 추정치는 그에 해당하는 Real Value값으로 수렴할 뿐이며, 이것은 0과 1이 아닌 특정 확률로 수렴합니다. Soft-max Distribution에 Temperature 매개변수가 포함된 경우 Temperature는 Deterministic에 접근하기 위해 시간이 지남에 따라 감소할 수 있지만, 실제 Action-Value에 대한 사전 지식 없이는 어느 정도 감소하게 할지, 또는 초기 Temperature를 어떻게 설정할 것인가에 대한 문제가 있기 때문입니다. 하지만 Action Preference는 이러한 특정한 값에 가까워지지 않기 때문에 다릅니다. 이것은 오직 Optimal Stochastic Policy를 유도하는데 주력할 뿐입니다. Optimal Policy가 Deterministic이라면, Optimal Action에 대한 Action Preference는 모든 다른 Action보다 무한히 높아집니다.

Action Preference의 Soft-max에 따라 Policy를 매개변수화하는 것의 두 번째 장점으로는 임의의 확률로 Action을 선택할 수 있다는 것입니다. 특정한 Function Approximation이 있는 문제에서 Optimal Approximate Policy는 Stochastic일 수도 있습니다. 예를 들어, 불완전한 정보를 가진 카드 게임에서의 최적의 플레이는 포커와 같이 임의의 확률로 블러핑을 하는 것입니다. Action-Value 방법은 이런 경우 Stochastic Optimal Policy를 찾는 방법이 없지만, Policy Gradient Method는 다음 예제와 같이 이것이 가능합니다.

**Example 13.1) Short corridor with switched actions**

![](/images/Reinforcement Learning/13. Policy Gradient Methods/RL 13-01.png){: .align-center}

위의 그래프에 삽입된 작은 Gridworld 문제가 있습니다. Reward는 각 단계당 -1로 설정되어 있습니다. Episode는 항상 S에서 시작하고, G에 도착하면 종료됩니다. 맨 오른쪽 State를 제외한 나머지 State에서는 각각 오른쪽/왼쪽으로 이동하는 2가지 Action이 있습니다. (단, S에서 왼쪽으로 가는 Action은 움직이지 않는 것으로 대체합니다) 이 문제에서 재밌는 점은 왼쪽에서 두 번째 State의 경우, Action에 따른 결과가 반전된다는 것입니다. 즉, 왼쪽을 선택하면 오른쪽으로, 오른쪽을 선택하면 왼쪽으로 움직입니다.

Function Approximation의 경우 모든 State가 동일하게 간주되므로 해결하기 어렵습니다. 예를 들어 모든 $s$에 대해 $\mathbf{x}(s, \text{right}) = [1, 0]^{\sf T}$, $\mathbf{x}(s, \text{left}) = [0, 1]^{\sf T}$로 정의하면, $\epsilon$-greedy를 사용한 Action-Value 방법은 크게 2가지 Policy만을 생성할 수 있습니다. 하나는 모든 단계에서 높은 확률로 오른쪽을 선택하고 $1 - \epsilon / 2$의 확률로 왼쪽을 선택하는 것이고, 다른 하나는 그 반대를 선택하는 것입니다. 만약 $\epsilon = 0.1$이라면 이 2개의 Policy는 위의 그래프처럼 시작 State에서 -44와 -82의 기대 Value를 각각 얻습니다. 만약 Stochastic Policy를 사용할 수 있다면 훨씬 더 나은 성능을 보일 수 있습니다. 가장 좋은 확률은 오른쪽을 약 0.59의 확률로 선택하는 것이며, 이 때의 Value는 약 -11.6이 됩니다.

<p style="text-align:right">□</p>

Policy에 대한 매개변수화가 Action-Value 매개변수화에 비해 가질 수 있는 가장 간단한 장점은 Policy가 더 간단한 함수로 근사화할 수 있다는 것입니다. 하지만 이것은 Policy와 Action-Value Function의 복잡성에 따라 다릅니다. 문제에 따라 Action-Value Function이 더 간단하게 근사화할 수도 있기 때문입니다. 다행히 일반적인 경우에는 Policy 기반 방법이 더 빠르게 학습하고 우수한 Policy를 생성할 수 있다는 것이 증명되었습니다. (참고 : Şimşek, Algorta, Kothiyal, 2016)

마지막으로, Policy를 매개변수하는 것은 때때로 원하는 Policy의 형태에 대한 사전 지식을 강화학습 시스템에 전달하는 좋은 방법이 될 수도 있습니다. 이것은 Policy 기반 학습 방법을 사용하는 가장 큰 이유 중 하나입니다.

## The Policy Gradient Theorem

이전 Section에서 설명한 Policy 매개변수화의 장점 외에도 중요한 이론적인 이점이 있습니다. 지속적인 Policy 매개변수화를 사용한 Action 확률은 학습된 매개변수에 대한 함수로 쉽게 표현되는 반면, $\epsilon$-greedy에서의 Action 확률은 추정된 Action-Value의 작은 변화에도 극적으로 변할 수 있습니다. 이로 인해 Policy Gradient Method는 Action-Value 방법보다 더 강력한 수렴을 보장할 수 있습니다. 특히, 매개변수에 대한 Policy 의존성의 연속성이 식 (13.1)에서 Policy Gradient Method가 Gradient Ascent를 사용할 수 있게 보장합니다.

Episodic Task와 Continuing Task에서 성능 측정 함수 $J(\boldsymbol{\theta})$를 다르게 정의하므로 어느 정도 다르게 취급해야 합니다. 하지만 일단 여기서는 두 가지 경우를 통합하고, 중요한 이론적 결과를 단일 방정식으로 설명할 수 있도록 표기법을 정리할 것입니다.

이 Section에서는 Episode의 시작 State에 대한 Value를 성능 측정으로 정의하는 Episodic Task를 다루겠습니다. 모든 Episode가 무작위가 아닌 특정한 State $s_0$에서 시작한다고 가정함으로써, 일반성을 잃지 않고 표기법을 단순화할 수 있습니다. 그러면 Episodic Task의 성능을 다음과 같이 정의할 수 있습니다.

$$J(\boldsymbol{\theta}) \doteq v_{\pi_{\boldsymbol{\theta}}} (s_0) \tag{13.4}$$

식 (13.4)에서 $v_{\pi_{\boldsymbol{\theta}}}$는 $\boldsymbol{\theta}$로 인해 정의된 Policy인 $\pi_{\boldsymbol{\theta}}$를 따를 때의 Real Value Function입니다. 여기에서는 일단 완전성을 위해 알고리즘에서 Discounting을 포함하지만, Episodic Task에서는 Discounting이 없다고 가정하겠습니다. (즉, $\gamma = 1$)

Function Approximation을 사용하면 Policy Improvement를 보장하는 방식으로 Policy 매개변수를 업데이트하는 것이 어려울 수 있습니다. 문제는 성능이 Action의 선택과, 그러한 선택을 만든 State Distribution 모두에 의존하는데, 이 두 가지 모두 Policy 매개변수에 의해 영향을 받는다는 것입니다. State가 주어졌을 때 Action에 대한 Policy 매개변수의 효과와 Reward에 대한 영향은 매개변수화에 대한 지식으로부터 간단한 방법으로 계산할 수 있습니다. 그러나 State Distribution에 대한 Policy의 영향은 Environment의 함수이기 때문에 일반적으로 알 수 없습니다. 그렇다면 Gradient가 State Distribution에서 알 수 없는 Policy 변경에 의존할 때 Policy 매개변수에 대한 성능의 Gradient를 어떻게 추정해야 할까요?

다행히 Policy 매개변수에 대한 성능의 Gradient를 분석할 수 있는 <span style="color:red">Policy Gradient Theorem</span>이라는 이론적 해결 방법이 있습니다. 이로 인해 식 (13.1)의 Gradient Ascent를 추정할 수 있으며, State Distribution에 대한 미분을 포함하지 않습니다. Episodic Task의 경우 Policy Gradient Theorem은 다음과 같이 적용할 수 있습니다.

$$\nabla J(\boldsymbol{\theta}) \propto \sum_s \mu (s) \sum_a q_{\pi} (s, a) \nabla \pi (a | s, \boldsymbol{\theta}) \tag{13.5}$$

이 식에서의 Gradient는 $\boldsymbol{\theta}$의 각 원소에 대한 편미분의 열 벡터이고, $\pi$는 매개변수 벡터 $\boldsymbol{\theta}$에 해당하는 Policy를 의미합니다. 기호 $\propto$는 비례를 의미합니다. Episodic Task의 경우 비례 상수는 Episode의 평균 길이이고, Continuing Task의 경우 1이 됩니다. (즉, 이 때는 등식이 됩니다) Distribution $\mu$는 9장과 10장에서 다루었던 $\pi$에 대한 On-policy Distribution 입니다. Episodic Task에서 Policy Gradient Theorem은 다음과 같이 증명할 수 있습니다.

**Proof of the Policy Gradient Theorem for Episodic Case**

간단한 미적분학과 식의 변형으로 Policy Gradient Theorem을 증명할 수 있습니다. 표기법을 단순하게 유지하기 위해, 모든 경우에 $\pi$가 $\boldsymbol{\theta}$에 대한 함수이고, 모든 Gradient도 $\boldsymbol{\theta}$에 대해 표현할 수 있다는 것을 가정하겠습니다. 먼저 State-Value Function의 Gradient는 다음과 같이 Action-Value Function의 관점에서 나타낼 수 있습니다.

$$ \begin{align}
\nabla v_{\pi} (s) &= \nabla \left[ \sum_a \pi (a|s) q_{\pi} (s, a) \right], \quad \text{for all } s \in \mathcal{S} \\ \\
&= \sum_a \left[ \nabla \pi (a|s) q_{\pi}(s, a) + \pi (a|s) \nabla q_{\pi} (s, a) \right] \tag{product rule of calculus} \\ \\
&= \sum_a \left[ \nabla \pi (a|s) q_{\pi} (s,a) + \pi(a|s) \nabla \sum_{s', r} p (s', r|s, a) (r + v_{\pi} (s')) \right] \\ \\
&= \sum_a \left[ \nabla \pi (a|s) q_{\pi} (s,a) + \pi (a|s) \sum_{s'} p(s' |s, a) \nabla v_{\pi} (s') \right] \tag{Equation 3.4} \\ \\
&= \sum_a \Bigg[ \nabla \pi (a|s) q_{\pi}(s,a) + \pi(a|s) \sum_{s'} p(s' |s, a) \\ \\
& \qquad \sum_{a'} [\nabla \pi (a'|s') q_{\pi} (s', a') + \pi (a'|s') \sum_{s''} p (s'' | s', a') \nabla v_{\pi} (s'')] \Bigg] \tag{unrolling} \\ \\
&= \sum_{x \in \mathcal{S}} \sum_{k=0}^{\infty} \text{Pr} (s \to x, k, \pi) \sum_{a} \nabla \pi (a|s) q_{\pi} (x, a)
\end{align} $$

Unrolling 부분은 식이 너무 길어서 2줄로 나누었습니다. 위 식에서 $\text{Pr} \left( s \to x, k, \pi \right)$는 Policy $\pi$에 따라 $k$단계 후에 State $s$에서 State $x$로 전환될 확률입니다. 이것을 이용하여 $\nabla J(\boldsymbol{\theta})$의 식을 변형하면,

$$ \begin{align}
\nabla J(\boldsymbol{\theta}) &= \nabla v_{\pi} (s_0) \\ \\
&= \sum_s \left( \sum_{k=0}^{\infty} \text{Pr} (s_0 \to s, k, \pi) \right) \sum_a \nabla \pi (a|s) q_{\pi} (s, a) \\ \\
&= \sum_a \eta (s) \sum_a \nabla \pi (a|s) q_{\pi} (s,a) \tag{Equation 9.2} \\ \\
&= \sum_{s'} \eta (s') \sum_s \frac{\eta (s)}{\sum_{s'} \eta(s')} \sum_a \nabla \pi (a|s) q_{\pi} (s, a) \\ \\
&= \sum_{s'} \eta (s') \sum_s \mu (s) \sum_a \nabla \pi (a|s) q_{\pi} (s,a) \tag{Equation 9.3} \\ \\
&\propto \sum_s \mu (s) \sum_a \nabla \pi (a|s) q_{\pi} (s,a) \tag{Q.E.D.}
\end{align} $$

## REINFORCE: Monte Carlo Policy Gradient

이제 Policy Gradient를 사용한 첫 번째 학습 알고리즘을 만들 준비가 되었습니다. 학습의 기본 전략은 이전에 다룬 식 (13.1)의 Stochastic Gradient Ascent를 기반으로 합니다. 이것을 수행하기 위해서는 Sample Gradient의 기대값이 매개변수의 함수로써 성능 측정의 실제 Gradient에 비례하도록 Sample을 얻는 방법이 필요합니다. Sample의 Gradient는 원래의 Gradient에 비례하기만 하면 되는데, 왜냐하면 비례 상수는 Step-size Parameter인 $\alpha$와 통합하여 취급할 수도 있고, 임의로 설정할 수도 있기 때문입니다. Policy Gradient Theorem은 Gradient에 비례하는 정확한 표현을 제공하므로, 필요한 것은 기대값이 이 표현식과 같거나 가까운 Sampling 방법입니다. Policy Gradient Theorem의 오른쪽 항은 Target Policy $\pi$ 하에서 State가 얼마나 자주 발생하는지에 따라 Weight가 부여된 State의 합입니다. 즉, Policy $\pi$를 따를 경우, 이러한 비율로 State가 발생합니다. 이것을 식으로 표현하면,

$$ \begin{align}
\nabla J(\boldsymbol{\theta}) & \propto \sum_s \mu (s) \sum_a q_{\pi} (s, a) \nabla \pi (a | s, \boldsymbol{\theta}) \\ \\
&= \mathbb{E}_{\pi} \left[ \sum_a q_{\pi} (S_t, a) \nabla \pi (a|S_t, \boldsymbol{\theta}) \right] \tag{13.6}
\end{align} $$

또한 식 (13.1)의 Stochastic Gradient Ascent 알고리즘을 다음과 같이 표현할 수 있습니다.

$$\boldsymbol{\theta}_{t+1} \doteq \boldsymbol{\theta}_t + \alpha \sum_a \hat{q} (S_t, a, \mathbf{w}) \nabla \pi (a | S_t, \boldsymbol{\theta}) \tag{13.7}$$

식 (13.7)에서 $\hat{q}$는 $q_{\pi}$에 대한 학습된 근사치입니다. 업데이트가 모든 Action을 포함하기 때문에 이 알고리즘은 <span style="color:red">All-actions</span> 방법이라고 불리며, 이 방법 중 대표적인 것으로 시간 $t$에서 실제로 취한 Action인 $A_t$에 대한 업데이트가 포함된 고전적인 <span style="color:red">REINFORCE</span> 알고리즘입니다. (Willams, 1992 참고)

REINFORCE의 완전한 알고리즘을 유도하기 위해서는 식 (13.6)가 $S_t$를 포함한 것과 마찬가지로 $A_t$를 포함시켜야 합니다. 즉, 확률 변수의 가능한 값에 대한 합을 Policy $\pi$ 하의 기대값으로 대체하여 Sampling합니다. 식 (13.6)은 Action에 대한 적절한 합을 포함하지만, 각 항은 $\pi (a \mid S_t, \boldsymbol{\theta})$에 Weight가 부여되지 않습니다. 그래서 우리는 전체적인 식의 관계가 변경되지 않도록 $\pi (a \mid S_t, \boldsymbol{\theta})$으로 나누어 식을 수정합니다. 이 과정을 식 (13.6)에 이어서 작성하면,

$$ \begin{align}
\nabla J(\boldsymbol{\theta}) & \propto \mathbb{E}_{\pi} \left[ \sum_a \pi (a|S_t, \boldsymbol{\theta}) q_{\pi} (S_t, a) \frac{\nabla \pi (a | S_t, \boldsymbol{\theta})}{\pi (a | S_t, \boldsymbol{\theta})} \right] \\ \\
&= \mathbb{E}_{\pi} \left[ q_{\pi} (S_t, A_t) \frac{\nabla \pi (A_t | S_t, \boldsymbol{\theta})}{\pi (A_t | S_t, \boldsymbol{\theta})} \right] \qquad \text{(replacing } a \text{ by the sample } A_t \sim \pi \text{)} \\ \\
&=\mathbb{E}_{\pi} \left[ G_t \frac{\nabla \pi (A_t | S_t, \boldsymbol{\theta})}{\pi (A_t | S_t, \boldsymbol{\theta})} \right] \qquad \text{(because } \mathbb{E}_{\pi} [G_t | S_t, A_t] = q_{\pi} (S_t, A_t) \text{)}
\end{align} $$

위 식에서 $G_t$는 일반적인 Return입니다. 마지막 식의 결과는 기대값의 Gradient에 비례하는 각 시간 단계에서의 Sampling할 수 있는 양입니다. 이 Sample을 사용하여 식 (13.1)의 Stochastic Gradient Ascent 알고리즘을 인스턴스화하면 REINFORCE 업데이트 식이 유도됩니다.

$$\boldsymbol{\theta}_{t+1} \doteq \boldsymbol{\theta}_t + \alpha G_t \frac{\nabla \pi (A_t | S_t, \boldsymbol{\theta})}{\pi (A_t | S_t, \boldsymbol{\theta})} \tag{13.8}$$

식 (13.8)과 같은 업데이트 식은 직관적입니다. 각 시간별 증가분은 Return $G_t$와 Action을 취할 확률의 Gradient를 그 확률로 나눈 값에 비례합니다. 그 벡터의 방향은 미래에 State $S_t$를 방문할 때 Action $A_t$를 반복할 확률을 가장 많이 증가시키는 매개변수 공간의 방향입니다. 즉, 업데이트는 Return $G_t$에 비례하고, Action 확률에 반비례하는 방향으로 매개변수 벡터를 증가시킵니다. Return에 비례하는 것은 가장 높은 Reward를 얻을 수 있는 Action을 선호하는 방향으로 매개변수를 움직인다는 의미가 있습니다. Action 확률에 비례하는 것은 자주 선택되는 Action을 선호한다는 뜻입니다. 자주 선택되는 Action은 가장 높은 Reward를 내지 못하더라도 유리한 선택이 될 수 있기 때문입니다.

REINFORCE는 Episode가 끝날 때까지 미래의 모든 Reward를 포함하는 시간 $t$부터 완전한 Return을 사용합니다. 이런 의미에서 REINFORCE는 Monte Carlo 알고리즘이라고 볼 수 있으며, Episode가 끝난 후 모든 업데이트가 수행되는 Episode Task에만 잘 정의됩니다. REINFORCE 알고리즘의 전체 Pseudocode는 다음과 같습니다.

![](/images/Reinforcement Learning/13. Policy Gradient Methods/RL 13-02.png){: .align-center}

위의 Pseudocode에서 마지막 줄은 REINFORCE 업데이트인 식 (13.8)과 다른 점이 있습니다. 먼저 $\nabla \ln x = \frac{\nabla x}{x}$라는 것을 이용하여, $\frac{\nabla \pi (A_t \mid S_t, \boldsymbol{\theta}_t)}{\pi (A_t \mid S_t, \boldsymbol{\theta}_t)}$를  $\nabla \ln \pi (A_t \mid S_t, \boldsymbol{\theta}_t)$로 바꾸었습니다. 이 벡터의 이름은 문헌에 따라 다르지만, 여기서는 간단하게 <span style="color:red">Eligibility Vector</span>라고 명칭하겠습니다. 이 부분이 알고리즘에서 Policy 매개변수화가 나타나는 유일한 부분입니다.

마지막 줄에서의 또 다른 차이점으로는 $\gamma^t$의 유무입니다. 식 (13.8)을 논할 때는 Discounting을 가정하지 않았기 때문에(즉, $\gamma = 1$) 이것을 생략하였지만, 위의 Pseudocode는 일반적인 경우에 대한 알고리즘이기 때문에 포함되었습니다.

다음의 그래프는 Example 13.1에서 REINFORCE의 성능을 나타내고 있습니다. $\alpha$에 값에 따라 성능의 차이가 크기 때문에, 좋은 $\alpha$를 정하는 것이 중요하다는 것을 알 수 있습니다.

![](/images/Reinforcement Learning/13. Policy Gradient Methods/RL 13-03.png){: .align-center}

REINFORCE는 Stochastic Gradient Method로 인해 좋은 이론적 수렴 특성을 가지고 있습니다. Episode에 대한 예상 업데이트는 성능에 대한 Gradient와 같은 방향입니다. 이것은 충분히 작은 $\alpha$에 대해 예상되는 성능의 개선과, $\alpha$가 감소하는 일반적인 확률적 근사 조건 하에 Local Optimum에 수렴하는 것을 보장합니다. 그러나 Monte Carlo Method인 REINFORCE는 Variance가 커서 학습이 느려질 수 있습니다.

## REINFORCE with Baseline

Policy Gradient Theorem을 나타내는 식 (13.5)는 상대적인 Action-Value를 비교하는데 사용되는 임의의 baseline $b(s)$를 포함하여 일반화할 수 있습니다.

$$\nabla J(\boldsymbol{\theta}) \propto \sum_s \mu (s) \sum_a \left( q_{\pi} (s, a) - b(s) \right) \nabla (a | s, \boldsymbol{\theta}) \tag{13.10}$$

Baseline은 $a$에 의해 변하지 않는 한, 확률 변수를 포함한 어떤 함수든 될 수 있습니다. 다음과 같이 Baseline은 Gradient를 취했을 때 0이 되기 때문입니다.

$$\sum_a b(s) \nabla \pi (a|s, \boldsymbol{\theta}) = b(s) \nabla \sum_a \pi (a|s, \boldsymbol{\theta}) = b(s) \nabla 1 = 0$$

식 (13.10)과 같이 Baseline이 있는 Policy Gradient Theorem을 사용하여 이전 Section에서와 유사하게 업데이트 규칙을 유도할 수 있습니다. 다음은 Baseline을 포함한 새로운 버전의 REINFORCE 업데이트 식입니다.

$$\boldsymbol{\theta}_{t+1} \doteq \boldsymbol{\theta}_t + \alpha \left( G_t - b(S_t) \right) \frac{\nabla \pi (A_t | S_t, \boldsymbol{\theta})}{\pi (A_t | S_t, \boldsymbol{\theta})} \tag{13.11}$$

Baseline은 0으로 균일할 수 있으므로 위의 식 (13.11)은 REINFORCE의 엄격한 일반화입니다. 일반적으로 Baseline은 업데이트의 Expected Value를 변경하지 않지만, Variance에 큰 영향을 줄 수 있습니다. 예를 들어, Section 2.8에서와 유사한 Baseline은 Gradient Bandit Algorithm의 Variance를 크게 줄일 수 있습니다. Variance가 줄어든다는 것은 그만큼 학습 속도가 빨라진다는 의미입니다.

Bandit Algorithm에서 Baseline은 숫자(=평균 Reward)에 불과했지만, MDP의 경우 Baseline은 State에 따라 달라져야 합니다. 어떤 State에서는 모든 Action이 높은 Value를 가질 수 있기 때문에, 더 높은 Value와 덜 높은 Value의 Action을 구별하기 위해 높은 Baseline이 필요합니다. 물론 반대로 모든 Action이 낮은 Action에서는 낮은 Baseline을 통해 Action의 상대적 Value를 구별해야 합니다.

Baseline에 대한 자연스러운 선택 중 하나는 State-Value의 추정값인 $\hat{v} (S_t, \mathbf{w})$ 입니다. 여기서 $\mathbf{w} \in \mathbb{R}^d$는 이전 장에서 제시된 방법 중 하나로 학습된 Weight Vector입니다. REINFORCE는 Policy 매개변수 $\boldsymbol{\theta}$를 학습하기 위한 Monte Carlo Method이기 때문에 Monte Carlo Method를 사용하여 State-Value의 Weight인 $\mathbf{w}$를 학습할 수도 있습니다. 학습된 State-Value Function을 Baseline으로 사용하는 REINFORCE의 전체 Pseudocode는 다음과 같습니다.

![](/images/Reinforcement Learning/13. Policy Gradient Methods/RL 13-04.png){: .align-center}

위의 알고리즘에는 두 개의 Step-size Parameter인 $\alpha^{\boldsymbol{\theta}}$와 $\alpha^{\mathbf{w}}$가 있습니다. 이 중 $\alpha^{\mathbf{w}}$를 선택하는 것은 비교적 쉽습니다. 예를 들어, Section 9.6에서와 같이 Linear의 경우 $\alpha^{\mathbf{w}} = 0.1 / \mathbb{E} [ \lVert \nabla \hat{v} (S_t, \mathbf{w}) \rVert^2_{\mu}]$라는 경험적인 법칙이 있었습니다. 하지만 $\alpha^{\boldsymbol{\theta}}$는 Reward의 범위와 Policy 매개변수화에 따라 결정해야하기 때문에 명확한 방법이 존재하지 않습니다.

![](/images/Reinforcement Learning/13. Policy Gradient Methods/RL 13-05.png){: .align-center}

위의 그림은 예제 13.1에서 Baseline이 있는 경우와 없는 경우 REINFORCE의 성능을 비교합니다. 이 비교에 사용된 State-Value Function의 추정값은 $\hat{v} (s, \mathbf{w}) = w$입니다. 즉, $\mathbf{w}$는 단일 요소 $w$로 구성되어 있습니다. 그래프를 보시면, 수렴되는 값은 두 방법이 차이가 없지만, Baseline을 사용하는 방법이 더 빠르게 수렴함을 알 수 있습니다.

## Actor–Critic Methods

Baseline이 있는 REINFORCE에서 학습된 State-Value Function은 각 State Transition에서 첫 번째 State의 Value를 추정합니다. 이 추정값은 후속 Return에 대한 Baseline을 설정하지만, Action이 Tranistion되기 전에 이루어지므로 해당 Action을 평가하는데 사용할 수 없습니다.

반면, Actor-Critic Method에서는 State-Value Function이 두 번째 State에도 적용됩니다. 두 번째 State의 Estimated Value는 Discount되어 Reward에 추가될 때, 1-step Return $G_{t:t+1}$을 포함하며, 이것은 실제 Return에 대한 올바른 추정이므로 Action을 평가할 수 있습니다. 이전에 배운 TD Learning에서도 보았듯이, 1-step Return은 Bias를 감안하더라도 Variance 및 계산 적합성 측면에서 실제 Return보다 우수합니다. 또한 7장 및 12장에서와 같이 $n$-step Return 및 Eligibility Trace를 사용하여 Bias의 범위를 유연하게 조정할 수도 있습니다. 이와 같이 State-Value Function을 사용하여 Action을 평가할 때, 이를 <span style="color:red">Critic</span>이라고 하며, 전체 Policy Gradient Method를 <span style="color:red">Actor-Critic Method</span>라고 합니다. Gradient 추정값의 Bias는 Bootstrapping으로 인한 것이 아니기 때문에 Critic이 Monte Carlo Method로 학습하더라도 Actor는 Bias될 것입니다.

먼저 1-step Actor-Critic Method를 소개하겠습니다. 1-step 방법의 장점은 완전한 On-line 및 Incremental 방식임에도 Eligibility Trace의 복잡함을 피할 수 있다는 것입니다. 1-step Actor-Critic Method는 REINFORCE 방법인 식 (13.11)의 전체 Return을 다음과 같이 1-step Return으로 대체합니다. (단, 이때 Baseline은 학습된 State-Value Function을 사용합니다)

$$ \begin{align}
\boldsymbol{\theta}_{t+1} & \doteq \boldsymbol{\theta}_t + \alpha \Big( G_{t:t+1} - \hat{v} (S_t, \mathbf{w}) \Big) \frac{\nabla \pi (A_t | S_t, \boldsymbol{\theta}_t)}{\pi (A_t | S_t, \boldsymbol{\theta}_t)} \tag{13.12} \\ \\
&= \boldsymbol{\theta}_t + \alpha \Big( R_{t+1} + \gamma \hat{v} (S_{t+1}, \mathbf{w}) - \hat{v}(S_t, \mathbf{w}) \Big) \frac{\nabla \pi (A_t | S_t, \boldsymbol{\theta}_t)}{\pi (A_t | S_t, \boldsymbol{\theta}_t)} \tag{13.13} \\ \\
&= \boldsymbol{\theta}_t + \alpha \delta_t \frac{\nabla \pi (A_t | S_t, \boldsymbol{\theta}_t)}{\pi (A_t | S_t, \boldsymbol{\theta}_t)} \tag{13.14}
\end{align} $$

이 업데이트와 짝을 이루는 State-Value Function의 학습 방법은 Semi-gradient TD(0)입니다. 이것을 반영한 전체 알고리즘의 Pseudocode는 다음과 같습니다. 이 알고리즘은 State, Action, 그리고 Reward가 발생하는 즉시 처리되는 완전한 On-line Incremental 알고리즘이라는 점에 유의하시기 바랍니다.

![](/images/Reinforcement Learning/13. Policy Gradient Methods/RL 13-06.png){: .align-center}

위의 1-step 방법의 Forward View에 대한 일반화 및 $n$-step으로의 일반화는 간단합니다. 이 때, 식 (13.12)의 1-step Return은 각각 $G_{t:t+n}$ 또는 $G^{\lambda}_t$로 대체됩니다. $\lambda$-return 알고리즘의 Backward View도 12장의 패턴을 따라 Actor와 Critic에 대해 별도의 Eligibility Trace를 사용하여 처리합니다. 이것을 반영한 전체 알고리즘의 Pseudocode는 다음과 같습니다.

![](/images/Reinforcement Learning/13. Policy Gradient Methods/RL 13-07.png){: .align-center}

## Policy Gradient for Continuing Problems

Section 10.3에서와 같이, Continuing Task의 성능은 다음과 같이 시간 단계에서 Average Reward로 정의해야 합니다.

$$ \begin{align}
J(\boldsymbol{\theta}) & \doteq r(\pi) \doteq \lim_{h \to \infty} \frac{1}{h} \sum_{t=1}^h \mathbb{E} \left[ R_t | S_0, A_{0:t-1} \sim \pi \right] \tag{13.15} \\ \\
&= \lim_{t \to \infty} \left[ R_t | S_0, A_{0:t-1} \sim \pi \right] \\ \\
&\sum_s \mu (s) \sum_a \pi (a | s) \sum_{s', r} p (s', r | s, a) r
\end{align} $$

위 식에서 $\mu$는 Policy $\pi$ 하에서의 Steady-state Distribution, $\mu (s) \doteq \underset{t \to \infty}{\operatorname{lim}} \text{Pr} \\{ S_t = s \mid A_{0:t} \sim \pi \\}$는 State $S_0$와 독립적으로 존재한다고 가정합니다. 이것은 $\pi$에 따라 Action을 선택하는 경우, 동일한 Distribution를 유지하는 특별한 Distribution임을 유의하시기 바랍니다.

$$\sum_s \mu (s) \sum_a \pi (a|s, \boldsymbol{\theta}) p(s'|s,a) = \mu (s'), \quad \text{for all } s' \in \mathcal{S} \tag{13.16}$$

(Backward View) Continuing Task에서 Actor-Critic 알고리즘의 전체 Pseudocode는 다음과 같습니다.

![](/images/Reinforcement Learning/13. Policy Gradient Methods/RL 13-08.png){: .align-center}

이러한 Continuing Task에서 Value Function은 각각 $v\_{\pi} (s) \doteq \mathbb{E}\_{\pi} \left[ G\_t \mid S\_t = s \right]$ (State-Value)와 $q\_{\pi} (s, a) \doteq \mathbb{E} \left[ G\_t \mid S\_t = s, A\_t = a \right]$ (Action-Value)로 정의됩니다. 이 때, Return $G\_t$는 다음과 같습니다.

$$G_t \doteq R_{t+1} - r(\pi) + R_{t+2} - r(\pi) + R_{t+3} - r(\pi) + \cdots \tag{13.17}$$

이렇게 정의가 바꾸더라도 식 (13.5) Policy Gradient Theorem은 유효합니다. Continuing Task에서 Policy Gradient Theorem에 대한 증명은 다음과 같습니다.

**Proof of the Policy Gradient Theorem for Continuing Case**

Episodic Task에서와 마찬가지로 먼저 모든 경우에 $\pi$가 $\boldsymbol{\theta}$에 대한 함수이고, Gradient가 $\boldsymbol{\theta}$로 표현될 수 있다는 가정이 필요합니다. 식 (13.15)에 의하여 Continuing Task에서 $J(\boldsymbol{\theta}) = r(\pi)$이고, $v_{\pi}$와 $q_{\pi}$는 식 (13.17)의 Return으로 구성되어 있습니다. 따라서 State-Value Function의 Gradient는 임의의 State $s \in \mathcal{S}$에 대해 다음과 같이 표현할 수 있습니다.

$$ \begin{align}
\nabla v_{\pi} (s) &= \nabla \left[ \sum_a \pi (a | s) q_{\pi} (s, a) \right], \quad \text{for all } s \in \mathcal{S} \\ \\
&= \sum_a \Big[ \nabla \pi (a|s) q_{\pi} (s, a) + \pi (a|s) \nabla q_{\pi} (s, a) \Big] \tag{product rule of calculus} \\ \\
&= \sum_a \Big[ \nabla \pi (a|s) q_{\pi} (s, a) + \pi (a|s) \nabla \sum_{s' ,r} p(s', r|s, a) \big(r - r(\boldsymbol{\theta}) + v_{\pi} (s') \big) \Big] \\ \\
&= \sum_a \Big[ \nabla \pi (a|s) q_{\pi} (s, a) + \pi (a|s) \big[ - \nabla r(\boldsymbol{\theta}) + \sum_{s'} p (s' |s, a) \nabla v_{\pi} (s') \big] \Big] \end{align} $$

이 식을 정리하면 다음과 같이 표현할 수 있습니다.

$$\nabla r(\boldsymbol{\theta}) = \sum_a \Big[ \nabla \pi (a|s) q_{\pi} (s, a) + \pi (a|s) \sum_{s'} p(s' |s, a) \nabla v_{\pi} (s') \Big] - \nabla v_{\pi} (s)$$

위 식의 좌변은 $J(\boldsymbol{\theta})$로 표기할 수 있으며, State $s$에 의존하지 않습니다. 따라서 우변 역시 State $s$에 의존하지 않으므로 식의 변경 없이 Weight $\mu (s)$를 붙여 합산할 수 있습니다. ($\because \sum_s \mu (s) = 1$)

$$ \begin{align}
J(\boldsymbol{\theta}) &= \sum_s \mu (s) \Bigg( \sum_a \Big[ \nabla \pi (a|s) q_{\pi} (s, a) + \pi (a|s) \sum_{s'} p(s' | s, a) \nabla v_{\pi} (s') \Big] - \nabla v_{\pi} (s) \Bigg) \\ \\
&= \sum_s \mu (s) \sum_a \nabla \pi (a|s) q_{\pi} (s, a) + \sum_s \mu (s) \sum_a \pi (a|s) \sum_{s'} p(s' | s, a) \nabla v_{\pi} (s') - \sum_s \mu (s) \nabla v_{\pi} (s) \\ \\
&= \sum_s \mu (s) \sum_a \nabla \pi (a|s) q_{\pi} (s, a) + \sum_{s'} \underbrace{\sum_s \mu (s) \sum_a \pi (a|s) p (s' | s, a)}_{\mu (s') \text{( 13.16)}} \nabla v_{\pi} (s') - \sum_s \mu (s) \nabla v_{\pi} (s) \\ \\
&= \sum_s \mu (s) \sum_a \nabla \pi (a|s) q_{\pi} (s, a) + \sum_{s'} \mu (s') \nabla v_{\pi} (s') - \sum_s \mu (s) \nabla v_{\pi} (s) \\ \\
&= \sum_s \mu (s) \sum_a \nabla \pi (a|s) q_{\pi} (s, a) \tag{Q.E.D.}
\end{align} $$

## Policy Parameterization for Continuous Actions

Policy에 기반한 방법은 Action Space가 매우 큰 경우(=Action의 수가 매우 많은 경우)나 Action의 수가 무한한 연속적인 Space에서도 효과적인 해법을 제공합니다. 이런 경우, Action 각각에 대해 학습된 확률을 계산하는 대신 확률 분포의 통계를 학습합니다. 예를 들어, Action 집합은 Normal Distribution(=Gaussian Distribution)에서 선택된 Action을 포함하는 실수 집합일 수 있습니다.

아시다시피, Normal Distribution에 대한 Probability Density Function은 다음과 같이 나타낼 수 있습니다.

$$p(x) \doteq \frac{1}{\sigma \sqrt{2 \pi}} \exp \left( - \frac{(x - \mu)^2}{2 \sigma^2} \right) \tag{13.18}$$

Probability Density Function에서 $\mu$는 Normal Distribution의 평균이고, $\sigma$는 표준편차입니다. 이 때 $p(x)$는 $x$가 일어날 확률이 아니라 $x$에서의 Probability Density입니다. 즉, 1보다 클 수도 있습니다. 합이 1이 되어야 하는 부분은 $p(x)$와 $x$축 사이의 총 넓이입니다. 일반적으로 $x$의 값을 범위로 정하여 적분을 취하면 해당 범위 내에 $x$가 존재할 확률을 구할 수 있습니다. Probability Density Function에서 평균과 표준편차의 값에 따라 나타낸 그래프는 다음과 같습니다.

![](/images/Reinforcement Learning/13. Policy Gradient Methods/RL 13-09.png){: .align-center}

Probability Density Function을 기반으로 Policy 매개변수화를 생성하기 위해서는, Policy를 State에 따라 달라지는 매개변수 함수 근사가 제공하는 평균 및 표준편차와 함께 실수 값 Scalar Action을 Normal Probability Density로 정의하면 됩니다. 즉,

$$\pi (a|s, \boldsymbol{\theta}) \doteq \frac{1}{\sigma(s, \boldsymbol{\theta}) \sqrt{2 \pi}} \exp \left( - \frac{(a - \mu (s, \boldsymbol{\theta}))^2}{2 \sigma (s, \boldsymbol{\theta})^2} \right) \tag{13.19}$$

식 (13.19)에서 $\mu : \mathcal{S} \times \mathbb{R}^{d'} \to \mathbb{R}$과 $\sigma : \mathcal{S} \times \mathbb{R}^{d'} \to \mathbb{R}^+$는 매개변수화된 함수 근사입니다.

위 식을 완성하기 위해서는 두 개의 함수 근사에 대한 형태를 정의해야 합니다. 이를 위해 Policy의 매개변수 벡터를 $\boldsymbol{\theta} = [\boldsymbol{\theta}\_{\mu}, \boldsymbol{\theta}\_{\sigma}]^{\sf T}$와 같이 두 부분으로 나눕니다. 이 두 부분은 각각 평균과 표준편차에 대한 근사를 의미합니다. 이 중 평균은 Linear Function으로 근사할 수 있습니다. 표준편차의 경우에는 항상 양수여야하는 조건이 있기 때문에 Linear Function의 지수 형태로 근사할 수 있습니다. 이를 수식으로 표현하면 다음과 같습니다.

$$\mu (s, \boldsymbol{\theta}) \doteq \boldsymbol{\theta}_{\mu}^{\sf T} \mathbf{x}_{\mu} (s) \quad \text{and} \quad \sigma (s, \boldsymbol{\theta}) \doteq \exp \left( \boldsymbol{\theta}_{\sigma}^{\sf T} \mathbf{x}_{\sigma} (s) \right) \tag{13.20}$$

식 (13.20)에서 $\mathbf{x}\_{\mu} (s)$와 $\mathbf{x}\_{\sigma} (s)$는 Section 9.5에서 설명된 방법 중 하나로 구성되는 Feature Vector입니다. 이러한 정의를 사용하면 이번 장에서 배웠던 알고리즘 중 하나를 적용하여 실수값으로 정의된 Action을 선택하는 것을 학습할 수 있습니다.

## Summary

이번 장을 배우기 전까지는 Action-Value를 학습한 다음, Action을 선택하는데 사용하는 방법(Action-Value Method)에 초점을 맞췄습니다. 반면에 이번 장에서는 Action-Value의 추정값을 참조하지 않고 Action을 선택할 수 있도록 매개변수화된 Policy를 학습하는 방법을 고려하였습니다. 특히, Policy 매개변수에 대한 성능의 Gradient를 추정하는 방법인 **Policy Gradient Method**를 고려하였습니다.

Policy 매개변수를 학습하는 방법에는 많은 이점이 있습니다. 먼저, Action을 취할 특정한 확률을 학습할 수 있습니다. 이 방법들은 적절한 수준의 Exploration을 수행하고 Deterministic Policy에 점근적으로 접근할 수 있습니다. 또한 연속적인 Action Space도 다룰 수 있습니다. 이것은 Policy 기반 방법에서는 쉽지만 $\epsilon$-greedy나 일반적인 Action-Value 방법으로는 어렵거나, 불가능합니다. 또한 일부 문제에서는 Value Function을 매개변수로 표현하는 것보다, Policy를 매개변수로 표현하는 것이 더 간단합니다. 이러한 문제들은 매개변수화된 Policy 방법에 더 적합합니다.

매개변수화된 Policy 방법은 **Policy Gradient Theorem**을 기반으로 한 중요한 이론적 장점이 있습니다. 이 정리는 State Distribution에 대한 정보를 포함하지 않는 Policy 매개변수에 의해 성능이 어떻게 영향을 받는지에 대한 정확한 공식을 제공합니다. 이 정리는 모든 Policy Gradient Method에 대한 이론적인 토대를 마련합니다.

**REINFORCE**는 Policy Gradient Theorem을 직접적으로 따르는 방법입니다. 또한 State-Value Function을 Baseline으로 추가하면 Bias를 피하면서 REINFORCE의 Variance를 줄일 수 있습니다. State-Value Function이 Policy의 Action 선택을 평가하거나 비판하는데 사용되는 경우, Value Function을 **Critic**이라고 하고 Policy를 **Actor**라고 합니다. 이 방법은 **Actor-Critic Method**이라고 합니다. Critic은 Actor의 Gradient 추정에 Bias를 추가하지만, Bootstrapping TD 방법이 종종 Monte Carlo Method보다 Variance가 낮다는 측면에서 우수하기 때문에 때때로 더 우수합니다.

정리하자면, Policy Gradient Method는 Action-Value 방법과는 상당히 다른 장점과 단점을 지닙니다. 현재 이 분야는 아직 활발하게 연구되는 주제이기 때문에, 앞으로 더 흥미로운 결과가 나오는 것을 기대하고 있습니다.

이로써 길고 길었던 강화학습 포스팅이 얼추 마무리가 되었습니다. 당분간 새로운 이론적인 포스트를 작성하기 보다는, 쉬면서 작성했던 포스트를 검토하여 부족했던 부분을 수정하거나 추가하도록 하겠습니다. 지금까지 읽어주셔서 감사합니다!