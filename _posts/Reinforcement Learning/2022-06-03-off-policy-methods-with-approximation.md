---
title: "Off-policy Methods with Approximation"
permalink: /rl/off-policy-methods-with-approximation/
classes: wide
toc: true
toc_label: "Table of Contents"
categories:
  - studies
tags:
  - reinforcement learning
---

이 책은 5장 이후로 Generalized Policy Iteration (GPI)에서 내재된 Exploitation과 Exploration 사이의 Trade-off를 처리하는 방법으로 On-policy와 Off-policy를 사용했습니다. 9장과 10장에서는 On-policy의 경우를 Function Approximation로 처리했으며, 이번 장에서는 Off-policy에서의 Function Approximation을 다룰 예정입니다. Off-policy 방법을 Function Approximation로 확장하는 것은 On-policy의 경우에서와 다른 점도 많고 어려운 점도 많습니다.

6장과 7장에서 소개한 Tabular 형식의 Off-policy 방법은 Semi-gradient 알고리즘으로 확장하기 쉽지만, On-policy의 경우처럼 강력하게 수렴하지 않습니다. 이번 장에서는 Linear Function Approximation을 통해 Learnability의 개념을 소개한 다음, Off-policy의 수렴 문제와 더 강력한 수렴 보장을 가진 새로운 알고리즘에 대해 논의하겠습니다. 안타깝게도 새로운 알고리즘은 On-policy의 경우에서보다 이론적으로도, 경험적으로도 강력하지 않습니다. 이 과정에서 Off-policy 학습 뿐만 아니라 On-policy 학습에 대해서도 더 깊게 이해할 수 있습니다.

Off-policy는 Target Policy $\pi$와 Behavior Policy $b$로 분리하여 Value Function을 학습합니다. Value를 추정할 때 두 Policy는 모두 정적으로 주어졌으며, State-Value $\hat{v} \approx v_{\pi}$나 Action-Value $\hat{q} \approx q_{\pi}$ 중 하나를 학습했습니다. Control에서는 Action-Value를 학습하고 $\pi$는 Greedy Policy, $b$는 $\epsilon$-greedy와 같은 탐색적인 Policy로 변경됩니다.

Off-policy 학습은 크게 두 부분으로 나눌 수 있습니다. 하나는 Tabular 경우에서 발생하고, 다른 하나는 Function Approximation에서만 나타납니다. 첫 번째 부분은 Update Target ($\ne$ Target Policy)과 관련이 있고 두 번째 부분은 Update Distribution과 관련이 있습니다. 첫 번째 부분은 5장과 7장에서 다루었던 Importance Sampling과 관련이 있습니다. Importance Sampling은 Variance를 증가시킬 수 있지만 필수불가결합니다. 첫 번째 부분에서는 Function Approximation에서 이것의 확장을 다룰 예정입니다.

On-policy Distribution은 Semi-gradient 방법의 안정성을 위해 중요했습니다. 하지만 Off-policy의 경우에는 Update Distribution이 On-policy Distribution을 따르지 않기 때문에 이와 다른 접근 방식이 필요합니다. 첫 번째로 생각해볼 수 있는 방법은 Importance Sampling을 사용함으로써 Update Distribution을 On-policy Distribution으로 변형하여 Semi-gradient 방법이 수렴되도록 보장하는 것입니다. 두 번째로는 특별한 Distribution에 의존하지 않는 새로운 Gradient 방법을 개발하는 것입니다. 두 번째 부분에서는 이것에 대해 다룰 예정입니다.

이 부분에서 다루는 내용은 아직 연구가 진행중인 부분이기 때문에 실제로 무엇이 가장 효과적인지는 확실하게 언급할 수 없습니다.

## Semi-gradient Methods

가장 먼저 이전 장에서 배운 Semi-gradient 방법으로 Off-policy를 Function Approximation으로 확장하는 것으로 시작하겠습니다. 이 방법은 Off-policy에서 첫 번째 부분(Update Target 변경)을 해결하지만 두 번째 부분(Update Distribution 변경)은 해결하지 않습니다. 따라서 이 방법은 일부 경우에서 발산할 위험이 있지만, 일반적으로는 성공적으로 사용할 수 있습니다. 이 방법은 Tabular에서 안정적이고 점근적으로 Bias되지 않지만, Function Approximation에서만 발생하는 문제입니다. 이러한 단점에도 불구하고 이 방법은 간단하기 때문에 첫 주제로 다루는 것이 좋습니다.

Off-policy 알고리즘을 Semi-gradient 방법으로 변환하려면 Approximate Value Function($\hat{v}$또는 $\hat{q}$)와 Gradient를 이용하여 배열($V$ 또는 $Q$)에 대한 Update를 Weight Vector $\mathbf{w}$에 대한 Update로 바꾸면 됩니다. 이러한 알고리즘은 다음과 같은 단계별 Importance Sampling Ratio를 사용합니다.

$$\rho_t \doteq \rho_{t:t} = \frac{\pi (A_t | S_t)}{b(A_t | S_t)}$$

예를 들어, 1-step State-Value 알고리즘은 $\rho_t$가 추가된 것만 제외하면 On-policy 알고리즘과 같은 <span style="color:red">Semi-gradient Off-policy TD(0)</span>입니다.

$$\mathbf{w}_{t+1} \doteq \mathbf{w}_t + \alpha \rho_t \delta_t \nabla \hat{v}(S_t, \mathbf{w}_t) \tag{11.2}$$

여기서 $\delta_t$는 문제가 어떻게 정의되었는지에 따라 다릅니다. 만약 Epsidoic이고 Discounted를 사용한다면 다음 식 (11.3)처럼, Continuing이고 Average Reward를 사용한다면 식 (11.4)과 같이 정의됩니다.

$$ \begin{align}
\delta_t & \doteq R_{t+1} + \gamma \hat{v}(S_{t+1}, \mathbf{w}_t) - \hat{v}(S_t, \mathbf{w}_t) \tag{11.3} \\ \\
\delta_t & \doteq R_{t+1} - \bar{R}_t + \hat{v}(S_{t+1}, \mathbf{w}_t) - \hat{v}(S_t, \mathbf{w}_t) \tag{11.4}
\end{align} $$

만약 Action-Value인 경우라면, 1-step 알고리즘은 다음과 같은 <span style="color:red">Semi-gradient Expected Sarsa</span>입니다.

$$ \begin{align}
\mathbf{w}_{t+1} & \doteq \mathbf{w}_t + \alpha \delta_t \nabla \hat{q} (S_t, A_t, \mathbf{w}_t), \tag{11.5} \\ \\
\delta_t & \doteq R_{t+1} + \gamma \sum_a \pi(a|S_{t+1}) \hat{q} (S_{t+1}, a, \mathbf{w}_t) - \hat{q}(S_t, A_t, \mathbf{w}_t) \tag{episodic} \\ \\
\delta_t & \doteq R_{t+1} - \bar{R}_t + \sum_a \pi (a|S_{t+1}) \hat{q}(S_{t+1}, a, \mathbf{w}_t) - \hat{q}(S_t, A_t, \mathbf{w}_t) \tag{continuing}
\end{align} $$

이 알고리즘은 Importance Sampling을 사용하지 않습니다. Tabular의 경우 유일한 Sample Action이 $A_t$이기 때문에 다른 Action을 고려할 필요가 없으므로 적절합니다. 만약 Function Approximation을 사용하면 서로 다른 State-Action 쌍이 서로 다른 Weight를 적용하면서 동일한 근사값에 반영될 수 있으므로 애매합니다. 이 문제를 해결하기 위해서는 강화학습에서 Function Approximation 이론에 대해 조금 더 깊게 파고들 필요가 있습니다.

이 알고리즘을 $n$-step 버전으로 일반화할 때 State-Value 및 Action-Value는 모두 Importance Sampling을 포함합니다. Semi-gradient Sarsa의 $n$-step 버전은 다음과 같습니다.

$$ \begin{align}
\mathbf{w}_{t+n} & \doteq \mathbf{w}_{t+n} + \alpha \rho_{t+1} \cdots \rho_{t+n} \left[ G_{t:t+n} - \hat{q}(S_t, A_t, \mathbf{w}_{t+n-1}) \right] \nabla \hat{q} (S_t, A_t, \mathbf{w}_{t+n-1}) \tag{11.6} \\ \\
G_{t:t+n} & \doteq R_{t+1} + \cdots + \gamma^{n-1} R_{t+n} + \gamma^n \hat{q}(S_{t+n}, A_{t+n}, \mathbf{w}_{t+n-1}) \tag{episodic} \\ \\
G_{t:t+n} & \doteq R_{t+1} - \bar{R}_t + \cdots + R_{t+n} - \bar{R}_{t+n-1} + \hat{q}(S_{t+n}, A_{t+n}, \mathbf{w}_{t+n-1}) \tag{continuing}
\end{align} $$

이 때, Episode의 마지막을 처리하는 방법은 이전에 배운 $n$-step 버전과 약간 다릅니다. 식 (11.6)에서 $k \ge T$에 해당하는 $\rho_k$는 모두 1로 처리하고, $t+n \ge T$에 해당하는 $G_{t:t+n}$은 모두 $G_t$로 처리합니다.

또한 7장에서 Importance Sampling을 사용하지 않은 Off-policy 알고리즘인 $n$-step Tree-backup 알고리즘도 배운 적이 있습니다. 이것을 Semi-gradient 버전으로 바꾸면 다음과 같습니다.

$$ \begin{align}
\mathbf{w}_{t+n} & \doteq \mathbf{w}_{t+n-1} + \alpha \left[ G_{t:t+n} - \hat{q}(S_t, A_t, \mathbf{w}_{t+n-1}) \right] \nabla \hat{q} (S_t, A_t, \mathbf{w}_{t+n-1}) \tag{11.7} \\ \\
G_{t:t+n} & \doteq \hat{q}(S_t, A_t, \mathbf{w}_{t+n-1}) + \sum_{k=t}^{t+n-1} \delta_k \prod_{i=t+1}^k \gamma \pi (A_i | S_i) \tag{11.8}
\end{align} $$

식 (11.8)의 $\delta_t$는 위의 Expected Sarsa 부분에 나온 식과 동일합니다. 이 외에도 7장에서는 모든 Action-Value 알고리즘을 통합하는 $n$-step $Q(\sigma)$를 정의했습니다만, 이 식의 Semi-gradient 변형은 생략하도록 하겠습니다.

## Examples of Off-policy Divergence

이번 Section에서는 Off-policy 학습의 두 번째 부분에 대해 다루겠습니다. 가장 먼저, 지난 Section 첫 부분에서 언급했던 Off-policy 학습에서 생길 수 있는 문제점을 알아보겠습니다. 특히, Semi-gradient나 다른 알고리즘이 불안정하고 발산하는 경우입니다.

Off-policy가 어떤 상황에서 문제가 발생하는지 직관적으로 알기위해 간단한 예시를 하나 소개하겠습니다. MDP 중 일부에서 다음과 같은 2개의 State가 있다고 가정합니다. 여기서 매개변수 Vector $\mathbf{w}$는 단일 구성 요소 $w$로만 구성됩니다. 만약 두 State에 대한 Feature Vector가 각각 단순한 숫자로 이루어진 경우, Linear Function Approximation을 할 수 있습니다. 여기서는 각 State의 Value를 $w$와 $2w$로 설정합니다. 첫 번째 State에서는 Reward 0을 받고 두 번째 State로 이동하는 단 한 개의 Action만 존재합니다. 이것을 도식화하면 다음과 같습니다.

![](/assets/images/RL/011/01.jpg){: .align-center}

이 간단한 예제에서 어떻게 발산이 발생하는지 계산해보겠습니다. 먼저 초기에 $w = 10$이라고 가정합니다. 그러면 Estimated Value가 10인 State에서 Estimated Value가 20인 State로 이동합니다. Value가 상승했으므로 좋은 Action으로 판단되기 때문에, $w$는 첫 번째 State의 Estimated Value를 높이기 위해 증가합니다. $\gamma$가 1에 가까우면 TD Error는 10에 가까워질 것이고, 만약 $\alpha = 0.1$이면 TD Error를 줄이기 위해 $w$는 11에 가깝게 증가시킬 것입니다. 문제는 두 번째 State가 $2w$로 근사되었기 때문에 동시에 22 정도가 증가한다는 것입니다. 그렇게 되면 TD Error가 오히려 11로 증가합니다. 따라서 첫 번째 State의 Value가 다시 증가하며, 이전보다 더 많은 수치인 12.1 정도가 증가합니다. 이후로는 역시 두 번째 State의 Value도 증가하며, 결국 $w$는 무한대로 발산합니다.

이 원인을 알아보기 위해 두 State의 Update 순서를 자세히 알아보겠습니다. 먼저 두 State 사이의 Transition에 대한 TD Error는 다음과 같습니다.

$$\delta_t = R_{t+1} + \gamma \hat{v} (S_{t+1}, \mathbf{w}) - \hat{v} (S_t, \mathbf{w}) = 0 + \gamma 2 w_t - w_t = (2 \gamma - 1) w_t$$

그리고 식 (11.2)에 의한 Off-policy Semi-gradient TD(0)의 Update를 사용하면,

$$w_{t+1} = w_t + \alpha \rho_t \delta_t \nabla \hat{v} (S_t, w_t) = w_t + \alpha \cdot 1 \cdot (2 \gamma - 1) w_t \cdot 1 = \left(1 + \alpha (2 \gamma - 1) \right) w_t$$

이 예제에서 Importance Sampling Ratio $\rho_t$는 첫 번째 State에서 선택할 수 있는 Action이 1개뿐이기 때문에 1로 고정됩니다. (Target Policy와 Behavior Policy가 같을 수밖에 없으므로) 또한 이 Update 식에서 주목할 점은 $w_{t+1}$가 $w_t$에 $1 + \alpha (2 \gamma - 1)$을 곱한 값이라는 것입니다. 이 값이 1보다 크면 초기 값 $w$이 무엇인지에 따라 결국 양의 무한대나 음의 무한대로 발산하게 되므로, 시스템이 불안정할 수밖에 없습니다. 이 경우에는 만약 $\gamma$가 0.5보다 큰 경우에 발산합니다. 이것으로부터 알 수 있는 점은 Update의 안정성은 Step-size Parameter $\alpha$와는 무관하다는 것입니다. $\alpha$의 크기에 따라 발산하는 속도에 영향을 끼칠지는 몰라도, 결국 발산하는가 수렴하는가 자체에는 영향이 없습니다.

이 예제에서 발산이 발생하는 근본적인 이유는 $w$가 다른 State로 Transition되지 않는 이상 같은 Transition이 반복해서 일어나기 때문입니다. 만약 선택할 수 있는 다른 Action이 있다면, Off-policy는 Target Policy가 하지 않을 Action을 Behavior Policy가 선택할 수 있기 때문에 이 문제를 회피할 수 있습니다. 이 경우 $\rho_t$는 0이 되고 Update가 발생하지 않습니다. 하지만 On-policy에서 $\rho_t$는 항상 1입니다. State $w$에서 State $2w$로 Transition이 일어날 때마다 $w$가 증가하면, State $2w$를 벗어다는 Transition 또한 있어야 합니다. 만약 그 Transition이 $2w$보다 높은 State가 아니라면 $w$를 감소시키고, 그 State 뒤에 더 높은 Value의 State가 와야 하며, 그렇지 않으면 다시 $w$가 감소합니다. 각각의 State는 더 높은 기대값을 생성해야만 이전 State가 발산하지 않습니다.

다만 이 예제는 전체 MDP의 일부만 놓고 가정한 예시입니다. 이제 따져봐야 할 것은 예제와 같이 불안정하고 완전한 MDP 시스템이 실제로 존재할 수 있는지에 대한 여부입니다. 결론부터 말하자면 그런 시스템은 존재하며, <span style="color:red">Baird's Counterexample</span>이라는 이름으로 알려져 있습니다. 아래 그림과 같이 7개의 State와 2개의 Action이 있는 Episodic MDP가 있습니다. 점선으로 표시된 동작은 동일한 확률로 6개의 State 중 하나로 Action할 수 있다는 뜻이고, 실선으로 표시된 동작은 모두 맨 아래의 7번째 State로 이동합니다. Behavior Policy $b$는 확률 $\frac{6}{7}$로 점선 Action, 확률 $\frac{1}{7}$로 실선의 Action을 선택합니다. 이 확률 분포는 각 Episode의 시작 분포이기도 합니다. Target Policy $\pi$는 항상 실선 Action만 선택하여 7번째 State로만 이동하려고 합니다. Reward는 모든 Transition에서 0입니다. Discount Factor는 $\gamma = 0.99$로 정의됩니다.

![](/assets/images/RL/011/02.jpg){: .align-center}

각각의 State에 나타난 식은 Linear Parameter를 사용하여 State-Value를 추정한 것입니다. $w$ 아래에 있는 첨자는 Weight Vector $\mathbf{w} \in \mathbb{R}^8$의 몇 번째 요소인지 표시한 것입니다. 그러므로 맨 왼쪽의 State를 Feature Vector로 표현하면 $\mathbf{x} = (2,0,0,0,0,0,0,1)^{\sf T}$입니다. Reward는 모든 Transition에서 0으로 정의되어 있으므로 실제 Value Function은 모든 State $s$에 대해 $v_{\pi} = 0$입니다.  따라서 Weight Vector가 $\mathbf{w} = \mathbf{0}$에 수렴한다면 정확하게 근사가 가능합니다. (다만 이전 예제와 달리 구성 요소가 많기 때문에 이 외에도 더 많은 해법이 존재합니다) 또한 Feature Vector의 집합 $\\{ \mathbf{x}(s) : s \in \mathcal{S} \\}$는 Linear Independent 집합입니다. 이렇게 보았을 때 이 문제는 Linear Function Approximation에 적합한 것처럼 보입니다.

![](/assets/images/RL/011/03.jpg){: .align-center}

그런데 이 문제에 식 (11.2)와 같은 Semi-gradient TD(0)를 적용하면 위의 그림의 왼쪽과 같이 Weight가 무한대로 발산합니다. 심지어 그림의 오른쪽처럼 Expected Update를 이용한 Dynamic Programming을 사용해도 마찬가지로 발산합니다. 이 때 Weight Vector $\mathbf{w}$가 DP Target을 사용하여 Semi-gradient 방법으로 동시에 Update 되는 방식은 다음과 같습니다.

$$\mathbf{w}_{k+1} \doteq \mathbf{w}_k + \frac{\alpha}{|\mathcal{S}|} \sum_s \bigg( \mathbb{E}_{\pi} [ R_{t+1} + \gamma \hat{v} (S_{t+1}, \mathbf{w}_k) | S_t = s ] - \hat{v}(s, \mathbf{w}_k) \bigg) \nabla (s, \mathbf{w}_k) \tag{11.9}$$

이 방법은 기존 DP Update와 마찬가지로 **Randomness**와 **Asynchrony**가 없습니다. 그럼에도 불구하고 Semi-gradient Function Approximation을 적용했을 때 시스템이 불안정합니다. 만약 Baird’s counterexample에서 DP Update의 Distribution를 Uniform Distribution에서 On-policy Distribution으로 변경하면 수렴이 식 (9.14)와 같이 Bound가 있는 해법으로 보장됩니다.

이 반례가 신기한 점은 사용하는 TD나 DP가 가장 간단한 Bootstrapping 방법이고, 사용하는 Semi-gradient 방법이 가장 간단한 Function Approximation임에도 불구하고 발산한다는 점입니다. 이 예시를 통해 알 수 있는 점은 On-policy Distribution에 따라 Update가 수행되지 않으면 가장 간단한 Bootstrapping과 Function Approximation의 조합이라고 할지라도 불안정함을 나타냅니다.

만약 Baird’s counterexample과 달리 Expected Return을 사용하여 Value Function을 Least-Square로 바꾼다고 가정하겠습니다. 이 방법은 Feature Vector의 집합 $\\{ \mathbf{x}(s) : s \in \mathcal{S} \\}$이 Linear Independent일 때 각 Iteration에서 정확한 근사가 가능하고 표준 Tabular DP로 방법이 축소되기 때문에 불안정성 문제를 해결할 수 있을 것이라고 기대할 수 있습니다. 하지만 불행하게도, 다음 예제에 나오듯이 이 방법으로도 안정성이 보장되지 않습니다.

**Example 11.1) Tsitsiklis and Van Roy’s Counterexample**

![](/assets/images/RL/011/04.jpg){: .align-center}

이 예제는 각각의 단계에서 Least-Squares 해법을 찾은 경우에도 Linear Function Approximation이 DP에서 제대로 동작하지 않는 것을 보여줍니다. 위의 그림에서 나온 것처럼 $w$와 $2w$로 근사된 State가 있고, $2w$ State에서 $1-\epsilon$ 확률로 자기 자신으로 돌아오는 Action과 $\epsilon$ 확률로 마지막 State로 이동하는 Action이 있습니다. 모든 Transition에서 Reward는 0으로 정의되어 있기 때문에 Real Value는 $w = 0$일 경우 정확하게 추정이 가능합니다. 각 단계에서 1-step Return과 Estimated Value에 대한 $\overline{\text{VE}}$를 최소화하는 것으로 $w_{k+1}$를 정의하면 다음과 같이 전개할 수 있습니다.

$$ \begin{align}
w_{k+1} &= \underset{w \in \mathbb{R}}{\operatorname{argmin}} \sum_{s \in \mathcal{S}} \bigg( \hat{v}(s, w) - \mathbb{E}_{\pi} [ R_{t+1} + \gamma \hat{v} (S_{t+1}, w_k) | S_t = s ] \bigg)^2 \\ \\
&= \underset{w \in \mathbb{R}}{\operatorname{argmin}} (w - \gamma 2 w_k)^2 + \Big( 2w - (1 - \epsilon) \gamma 2 w_k \Big)^2 \\ \\
&= \frac{6 - 4 \epsilon}{5} \gamma w_k \tag{11.10}
\end{align} $$

즉, Sequence $\\{ w_k \\}$은 $\gamma > \frac{5}{6 - 4 \epsilon}$이고 $w_0 \ne 0$일 때 발산합니다.

<p style="text-align:right">□</p>

불안정성을 해결하기 위한 또 다른 방법은 특별한 방법을 사용해 함수를 근사하는 것입니다. 특히 관찰되는 Target에서 Extrapolate 하지 않는 Function Approximation의 경우 안정성이 보장됩니다. 이 방법은 <span style="color:red">Averagers</span>라고 부르며, Nearest Neighbor나 Locally Weighted Regression이 포함되지만, 아쉽게도 이전에 다룬 Tile Coding이나 Artificial Neural Network 같은 방법은 포함되지 않습니다.

## The Deadly Triad

이번 Section에서는 어떤 조건 때문에 지난 Section의 예제처럼 발산하는지에 대해 논의해보겠습니다. 이번 Section에서는 불안정성과 발산의 위험을 증가시키는 3가지 위험 요소인 <span style="color:red">The Deadly Triad</span>를 소개하도록 하겠습니다.

- **Function Approximation** : 메모리 및 계산 자원보다 훨씬 큰 State Space에서 일반화하는 방법
- **Bootstrapping** : Actual Reward 및 Complete Return 대신 기존 추정치를 포함하는 Update Target
- **Off-policy Training** : Target Policy와 다른 Distribution에 의해 생성된 데이터로 학습

특이한 점으로, Control이나 Generalized Policy Iteration 자체는 이러한 위험을 초래하지 않습니다. 이 경우 분석하기 더 복잡하지만, 이 3가지 위험 요소 중 해당하는 것이 많을 수록 불안정성과 발산의 가능성이 늘어납니다. 또한 이 불안정성은 학습이나 Environment의 불확실성과도 상관이 없습니다. Environment가 완전히 알려진 Planning과 같은 Dynamic Programming에서도 발생하기 때문입니다.

이 3가지 위험 요소 중 2가지 요소만 해당하는 경우 불안정성을 피할 수 있습니다. 그렇기 때문에 사용하는 방법에서 이 3가지 중 어떤 것을 포기할 수 있는지 하나하나 따져봐야합니다.

가장 먼저 포기할 수 없는 요소는 **Function Approximation**입니다. Function Approximation 없이는 매우 큰 State Space를 학습하기 어렵기 때문입니다. 대안으로 생각해볼 수 있는 State Aggregation이나 Nonparametric 방법은 데이터의 수가 많아질수록 시간 및 공간 복잡도가 너무 커집니다. LSTD와 같은 방법 또한 큰 문제에서 시간 복잡도로 인해 사용하기 어렵습니다.

두 번째로 **Bootstrapping**을 포기한다면 그 대신 계산 및 데이터 효율성을 포기해야 합니다. 둘 중에서는 계산 효율성의 손실이 더 치명적입니다. Monte Carlo와 같이 Bootstrapping을 사용하지 않는 방법은 예측을 수행하고 최종 Return을 얻는 사이에 발생하는 모든 것을 저장할 메모리가 필요하며, 모든 계산은 최종 Return을 얻은 후에야 완료됩니다. 이런 계산 문제의 비용은 주로 특수한 하드웨어에서 발생할 수 있습니다. 물론 데이터 효율성의 관점에서도 Bootstrapping을 사용하지 않았을 때의 손실이 적지 않습니다. 또한 일반적으로 Bootstrapping을 사용했을 때 학습 속도가 더 빠른 결과를 보여줍니다. 그렇기 때문에 필수는 아니지만, 가급적이면 Bootstrapping을 사용하는 것이 좋습니다.

마지막으로 **Off-policy Training**이 있습니다. On-policy이 효율적인 경우가 많기도 했고, Model이 없는 강화학습의 경우 Q-learning 대신 Sarsa를 사용하면 됩니다. Off-policy의 장점은 Target Policy에 상관 없는 Action을 할 수 있다는 점입니다. 편리하긴 하지만, 필수는 아닙니다. 하지만 Off-policy는 이 책에서 언급하지 않은 강력한 지능형 Agent를 만드는데 필수적입니다.

## Linear Value-function Geometry

Off-policy 학습의 안정성 문제를 더 잘 이해하기 위해서는 Value Function Approximation에 대해 더 자세히 알아보는 것이 좋습니다. 먼저 모든 State-Value Function은 State에서 실수 집합으로 매핑되는 함수입니다. ($v : \mathcal{S} \to \mathbb{R}$) 대부분의 Value Function은 어떤 Policy에도 해당하지 않는데, 중요한 점은 대부분의 Function Approximation 방법은 State보다 매개변수가 훨씬 적기 때문에 Policy로 표현될 수 없다는 것입니다.

State Space $\mathcal{S} = \\{ s_1, s_2, \ldots, s_{\lvert \mathcal{S} \rvert} \\}$에 대해 임의의 Value Function $v$를 가정합니다. 각 State에 대한 Value를 Vector로 표현하면 $\big[ v(s_1), v(s_2), \ldots, v(s_{\mathcal{S}}) \big]^{\sf T}$와 같이 State 수만큼 구성 요소가 있습니다. Function Approximation을 사용하려는 경우 Vector를 명시적으로 나타내기에는 구성 요소가 너무 많습니다만, 개념적으로 이러한 아이디어는 유용합니다.

간단하게 3개의 State $\mathcal{S} = \\{ s_1, s_2, s_3 \\}$와 2개의 매개변수 $\mathbf{w} = (w_1, w_2)^{\sf T}$를 예시로 들어보겠습니다. 이 예시에서 모든 Value Function/Vector는 3차원 공간의 점으로 볼 수 있습니다. 매개변수는 2차원 부분공간에 대한 대체 좌표계를 제공합니다. 또한 모든 Weight Vector $\mathbf{w} = (w_1, w_2)^{\sf T}$는 2차원 부분공간의 한 점이므로 3가지 State 전부에게 값을 할당하는 완전한 Value Function $v_{\mathbf{w}}$이기도 합니다. 일반적인 Function Approximation을 사용하면 전체 공간과 표현 가능한 함수 사이의 관계가 복잡할 수 있으나, 이 경우에는 Linear Value Function Approximation을 사용하면 부분 공간은 아래 그림과 같은 간단한 평면으로 나옵니다.

![](/assets/images/RL/011/05.jpg){: .align-center}

이 예시에서 고정된 단일 Policy $\pi$에 대하여, Real Value Function $v_{\pi}$가 너무 복잡해 근사값으로 정확하게 표현되지 않는다고 가정해보겠습니다. 이것은 $v_{\pi}$가 부분공간에 있지 않다는 의미입니다. 따라서 $v_{\pi}$는 위의 그림과 같이 표현 가능한 평면 (부분공간) 밖에 있는 것으로 나타낼 수 있습니다.

$v_{\pi}$를 정확하게 표현할 수 없기 때문에 표현 가능한 Value Function 중에서 가장 가까운 것을 찾아야합니다. 이 문제를 해결하기 위해서는 먼저 가장 가깝다는 의미를 파악해야 합니다. 즉, 두 Value Function 사이의 거리 측정이 필요합니다. 두 개의 Value Function $v_1$과 $v_2$가 주어졌을 때, 두 Value Function 사이의 차이를 $v = v_1 - v_2$로 표현하겠습니다. $v$가 작다는 것은 두 Value Function이 서로 가깝다는 의미입니다. 하지만 이 Vector의 크기를 측정하는 것이 문제입니다. Section 9.2에서 논의한 바와 같이 일부 State가 더 자주 발생하거나, 집중해야할 필요가 있기 때문에 Euclidean Norm은 적절하지 않습니다. 따라서 Section 9.2에서 배운 Distribution $\mu : \mathcal{S} \to [0, 1]$을 사용합니다. 이 Distribution은 서로 다른 State를 정확하게 평가하는데 어느 정도 관심이 있는지 그 정도를 표현하는 척도입니다. 그 후, 다음과 같은 Norm을 사용하여 Value Function 사이의 거리를 정의합니다.

$$||v||_{\mu}^2 \doteq \sum_{s \in \mathcal{S}} \mu(s) v(s)^2 \tag{11.11}$$

Section 9.2의 $\overline{\text{VE}}$는 이 Norm을 사용하여 $\overline{\text{VE}} (\mathbf{w}) = \lVert v_{\mathbf{w}} - v_{\pi} \rVert_{\mu}^2 $로 간단하게 작성할 수 있습니다. Value Function $v$를 표현 가능한 Value Function 부분 공간에서 가장 가까운 Value Function을 찾는 방법은 **Projection**입니다. 앞으로 Projection은 연산자 $\Pi$로 표현하겠습니다. Projection 연산자 $\Pi$를 사용하여 Value Function $v$를 표현 가능한 Value Function 부분 공간으로 Projection하는 것은 다음과 같이 나타낼 수 있습니다.

$$\Pi \doteq v_{\mathbf{w}} \quad \text{where} \quad \mathbf{w} = \underset{\mathbf{w} \in \mathbb{R}^d}{\operatorname{argmin}} || v - v_{\mathbf{w}} ||_{\mu}^2 \tag{11.12}$$

따라서 Real Value Function $v_{\pi}$에 가장 가까운 표현 가능한 Value Function은 위의 그림과 같이 Projection된 Value Function $\Pi v_{\pi}$입니다. 이 해법은 Monte Carlo Method에 의해 점근적으로 구할 수 있지만, 구하는 속도가 종종 매우 느릴 수 있습니다. 다음 단계로 넘어가기 전에, Projection 연산에 대해 더 자세히 알아보도록 하겠습니다.

**The Projection Matrix**

Linear Function Approximation 방법에서 Projection 연산은 마찬가지로 Linear이며, 이것은 다음과 같이 $\lvert \mathcal{S} \rvert \times \lvert \mathcal{S} \rvert$ 행렬로 표현할 수 있습니다.

$$\Pi \doteq \mathbf{X} \big( \mathbf{X}^{\sf T} \mathbf{D} \mathbf{X} \big)^{-1} \mathbf{X}^{\sf T} \mathbf{D} \tag{11.13}$$

$\mathbf{D}$는 대각 요소에 $\mu(s)$가 있는 $\lvert \mathcal{S} \rvert \times \lvert \mathcal{S} \rvert$ 크기의 대각 행렬이고, $\mathbf{X}$는 각 행이 Feature Vector $\mathbf{x}(s)^{\sf T}$로 이루어진 $\lvert \mathcal{S} \rvert \times d$ 크기의 행렬입니다. 만약 식 (11.13)의 역행렬이 존재하지 않는다면, **Pseudo Inverse**로 대체됩니다. Pseudo Inverse에 대해서는 다음 포스트를 참고해주시기 바랍니다.

- [[기계학습] 3. Linear Models I](/ml/linear-models-1/)

이를 토대로 Vector의 Square Norm을 표현하면 다음과 같습니다.

$$||v||_{\mu}^2 = v^{\sf T} \mathbf{D} v \tag{11.14}$$

따라서 Approximate Linear Value Function은 아래와 같이 작성할 수 있습니다.

$$v_{\mathbf{w}} = \mathbf{X} \mathbf{w} \tag{11.15}$$

<p style="text-align:right">□</p>

TD는 이와 다른 해법을 찾습니다. 그 이유를 알아보기 위해서, 먼저 Value Function $v_{\pi}$에 대한 Bellman Equation을 복습해보겠습니다.

$$v_{\pi} (s) = \sum_a \pi (a|s) \sum_{s', r} p(s', r | s, a) [r + \gamma v_{\pi} (s') ] \quad \text{for all } s \in \mathcal{S} \tag{11.16}$$

Real Value Function $v_{\pi}$는 식 (11.16)을 정확하게 풀 수 있는 유일한 함수입니다. Real Value Function $v_{\pi}$를 Approximate Value Function $v_{\mathbf{w}}$로 대체한 후, 수정된 방정식에서 발생하는 우변과 좌변 사이의 차이를 Bellman Error라고 부릅니다. Bellman Error는 $v_{\mathbf{w}}$가 $v_{\pi}$에서 얼마나 멀리 떨어져 있는지를 측정하는 데 사용되며, State $s$에 대한 Bellman Error는 다음과 같이 표현할 수 있습니다.

$$ \begin{align}
\bar{\delta}_{\mathbf{w}} (s) & \doteq \bigg( \sum_a \pi (a | s) \sum_{s', r} p(s', r|s, a) [r + \gamma v_{\mathbf{w}} (s')] \bigg) - v_{\mathbf{w}} (s) \tag{11.17} \\ \\
&= \mathbb{E}_{\pi} [R_{t+1} + \gamma v_{\mathbf{w}} (S_{t+1}) - v_{\mathbf{w}}(S_t) | S_t = s, A_t \sim \pi] \tag{11.18}
\end{align} $$

식 (11.18)을 통해 Bellman Error는 TD Error (=식 11.3)의 기대값임을 알 수 있습니다.

모든 Bellman Error의 Vector $\bar{\delta}_{\mathbf{w}} \in \mathbb{R}^{\lvert \mathcal{S} \rvert}$는 <span style="color:red">Bellman Error Vector</span>라고 합니다. 위의 그림에서 Bellman Error Vector는 BE로 표시되어 있습니다. Norm에서 이 Vector의 전체 크기는 Value Function의 전체적인 Error를 측정하며, <span style="color:red">Mean Square Bellman Error</span>라고 부릅니다. 이 식은 다음과 같이 간단하게 표현할 수 있습니다.

$$\overline{\text{BE}} (\mathbf{w}) = || \bar{\delta}_{\mathbf{w}} ||_{\mu}^2 \tag{11.19}$$

일반적으로 $\overline{\text{BE}}$를 0으로 줄이는 것은 불가능하지만, Linear Function Approximation의 경우 $\overline{\text{BE}}$가 최소화되는 고유한 $\mathbf{w}$가 있습니다. 이것은 위의 그림에서 $\min \overline{\text{BE}}$로 표현되어 있으며, 일반적으로 $\overline{\text{VE}}$를 최소화하는 지점(=$\Pi v_{\pi}$)과는 다릅니다. $\overline{\text{BE}}$를 최소화하는 방법은 다음 두 Section에서 더 자세히 다룰 예정입니다.

Bellman Error Vector는 Bellman Operator $B_{\pi} : \mathbb{R}^{\lvert \mathcal{S} \rvert} \to \mathbb{R}^{\lvert \mathcal{S} \rvert}$를 Approximate Value Function에 적용한 결과로, 위의 그림에도 나와 있습니다. Bellman Operator는 State $s \in \mathcal{S}$와 Value Function $v : \mathcal{S} \to \mathbb{R}$에 대해 다음과 같이 정의됩니다.

$$(B_{\pi} v)(s) \doteq \sum_a \pi (a|s) \sum_{s', r} p(s', r | s, a) [r + \gamma v(s')] \tag{11.20}$$

식 (11.20)을 이용하면 $v\_{\mathbf{w}}$에 대한 Bellman Error Vector를 $\bar{\delta}\_{\mathbf{w}} = B\_{\pi} v\_{\mathbf{w}} - v\_{\mathbf{w}}$로 작성할 수 있습니다.

Bellman Operator를 표현 가능한 부분 공간의 Value Function에 적용하게 되면 일반적으로 위의 그림과 같이 부분 공간 외부에 새로운 Value Function을 생성합니다. Function Approximation을 사용하지 않는 Dynamic Programming에서 Bellman Operator는 그림 상단에 있는 회색 화살표와 같이 표현 가능한 공간 외부의 점에 반복적으로 적용됩니다. 결국 이 과정은 Real Value Function $v_{\pi}$에 수렴하게 됩니다.

$$v_{\pi} = B_{\pi} v_{\pi} \tag{11.21}$$

이것은 식 (11.16)에서 $\pi$에 대한 Bellman Equation을 다르게 표현한 것입니다.

하지만 Function Approximation을 사용하게 되면 부분 공간 외부에 있는 Value Function을 표현할 수 없습니다. 즉, Dynamic Programming처럼 그림 상단의 회색 화살표를 따라갈 수 없습니다. 첫 번째 Update 후에 Value Function이 표현할 수 있는 부분 공간에 Projection되어야 하기 때문입니다. 다음 Update는 부분 공간 내에서 시작되며, Value Function은 다시 Bellman Operator에 의해 부분 공간 외부로 나간 다음, 다시 Projection에 의해 부분 공간으로 매핑됩니다. 이 과정은 근사를 사용한 Dynamic Programming과 유사합니다.

이 때 Bellman Error Vector를 표현 가능한 부분 공간으로 Projection한 $\Pi \bar{\delta}\_{\mathbf{w}}$는 그림에서 PBE로 나타나 있습니다. Norm에서 이 Vector의 크기는 Approximate Value Function의 또 다른 Error 측정값입니다. 임의의 Approximate Value Function $v\_{\mathbf{w}}$에 대해, Mean Square Projected Bellman Error는 $\overline{\text{PBE}}$라고 하며, 다음과 같이 표현할 수 있습니다.

$$\overline{\text{PBE}} (\mathbf{w}) = || \Pi \bar{\delta}_{\mathbf{w}}  ||_{\mu}^2 \tag{11.22}$$

Linear Function Approximation을 사용하면 $\overline{\text{PBE}}$가 0인 Approximate Value Function이 (부분 공간 안에) 반드시 존재합니다. 이것은 Section 9.4에서 소개한 TD Fixed Point $\mathbf{w}_{\text{TD}}$와 같습니다. 이 점은 Semi-gradient TD 방법과 Off-policy 방법에서 안정적이지 않다고 배웠습니다. 게다가 그림에서 볼 수 있듯이 이 Value Function은 일반적으로 $\overline{\text{VE}}$나 $\overline{\text{BE}}$를 최소화하는 함수와 다릅니다. 이것이 수렴하는 것을 보장하는 방법은 Section 11.7과 11.8에서 더 자세히 다룰 예정입니다.

## Gradient Descent in the Bellman Error

이번 Section에서는 지난 Section에서 배운 Bellman Error를 토대로 Off-policy 학습의 안정성 문제에 대해 다시 다루겠습니다. 이번 장에서 궁극적으로 하고싶은 것은 Off-policy 기반의 Stochastic Gradient Descent (SGD) 입니다. SGD의 Update는 목적 함수의 음의 기울기와 같습니다. 이 방법은 항상 목표에 대해 내리막길 방향으로 이동하기 때문에 안정적인 수렴을 기대할 수 있습니다.

SGD 방법은 On-policy와 Off-policy 학습 뿐만 아니라 일반 non-Linear (미분가능한) Function Approximation 방법에 대해서도 수렴하지만, Bootstrapping이 있는 Semi-gradient 방법보다 느린 경향이 있습니다. 대신 이번 장 앞부분에서 다루었듯이 Semi-gradient 방법은 Off-policy 학습과 non-Linear Function Approximation의 경우 발산할 수 있다는 문제가 있습니다. 하지만 SGD 방법은 그런 발산이 일어나지 않습니다.

SGD는 발산하지 않는다는 매우 강력한 장점을 가졌기 때문에 많은 연구자들이 강화학습에서 SGD를 활용하고자 연구하였습니다. 강화학습에 SGD를 활용하는 첫 번째 단계는 최적화할 Error나 목적 함수를 선택하는 것입니다. 따라서 이전 Section에서 소개한 Bellman Error를 기반으로 이번 Section과 다음 Section에 걸쳐 가장 많이 쓰이는 목적 함수를 소개하고 그 한계를 알아볼 것입니다. 결론부터 말하자면 이 방법들은 좋은 접근 방식이기는 하나, 좋은 학습 알고리즘은 생성하지 못합니다. 어째서 이러한 결론이 나오지는지는 차근차근히 일아보도록 하겠습니다.

가장 먼저 Bellman Error 대신 TD Error를 먼저 다시 살펴보겠습니다. Discount가 포함된 1-step TD Error는 다음과 같습니다.

$$\delta_t = R_{t+1} + \gamma \hat{v} (S_{t+1}, \mathbf{w}) - \hat{v} (S_t, \mathbf{w})$$

이 때 가능한 목적 함수는 다음과 같은 Mean Square TD Error로 볼 수 있습니다.

$$ \begin{align}
\overline{\text{TDE}} (\mathbf{w}) &= \sum_{s \in \mathcal{S}} \mu(s) \mathbb{E} \left[ \delta_t^2 | S_t = s, A_t \sim \pi \right] \\ \\
&= \sum_{s \in \mathcal{S}} \mu(s) \mathbb{E} \left[ \rho_t \delta_t^2 | S_t = s, A_t \sim b \right] \\ \\
&= \mathbb{E}_b \left[ \rho_t \delta_t^2 \right] \quad ( \text{if } \mu \text{ is the distribution encountered under } b )
\end{align} $$

위의 마지막 방정식이 바로 SGD에 필요한 형태입니다. Behavior Policy $b$를 토대로 Sampling할 수 있는 기대값이 목적이 됩니다. 따라서 표준 SGD 접근 방식에 따라 이 기대값의 Sample을 토대로 단계별 Update를 유도할 수 있습니다.

$$ \begin{align}
\mathbf{w}_{t+1} &= \mathbf{w}_t - \frac{1}{2} \alpha \nabla (\rho_t \delta_t^2) \\ \\
&= \mathbf{w}_t - \alpha \rho_t \delta_t \nabla \delta_t \\ \\
&= \mathbf{w}_t + \alpha \rho_t \delta_t \big( \nabla \hat{v} (S_t, \mathbf{w}_t) - \gamma \nabla \hat{v} (S_{t+1}, \mathbf{w}) \big) \tag{11.23}
\end{align} $$

재밌는 점은 식 (11.23)에서 Discount Factor $\gamma$가 붙은 항만 제외하면 식 (11.2)의 Semi-gradient TD 알고리즘과 동일하다는 것입니다. 이 추가적인 항은 진정한 SGD 알고리즘으로 만드는 역할을 합니다. Update에 식 (11.23)을 사용하는 알고리즘을 <span style="color:red">Naive Residual-gradient Algorithm</span>이라고 부릅니다. (Baird, 1995) Naive Residual-gradient Algorithm은 강력하게 수렴하지만, 반드시 원하는 위치로 수렴하지는 않습니다. 다음 예제를 통해 이게 무슨 의미인지 이해할 수 있습니다.

**Example 11.2) A-split example, showing the naiveté of the naive residual-gradient algorithm**

아래 그림과 같이 3개의 State로 이루어진 Episodic MRP를 가정해보겠습니다. Episode는 항상 State A에서 시작한 다음, 확률적으로 Split됩니다. 50% 확률로 B로 간 다음 1의 Reward를 받고 종료되는 분기와, 50% 확률로 C로 간 다음 0의 Reward를 받고 종료되는 분기가 있습니다. A에서 B를 가는 것과 C를 가는 것 자체는 모두 0의 Reward를 받게 설계되어 있습니다. 이것은 Episodic Task이기 때문에 $\gamma$를 1로 간주할 수 있습니다. 또한 $\rho_t$가 항상 1이 될 수 있게 On-policy라고 가정하고, Tabular Function Approximation을 사용하도록 하겠습니다. 문제 설정만 보면 굉장히 간단한 것처럼 보입니다.

![](/assets/images/RL/011/06.jpg){: .align-center}

이 문제에서 State A의 Value를 구해보면 50% 확률로 1의 Reward를 받고 50% 확률로 0의 Reward를 받기 때문에 A의 Value는 $1/2$이라고 쉽게 계산할 수 있습니다. 마찬가지로 State B의 Value는 1, State C의 Value는 0이 됩니다.

그런데 만약 이 문제에 Naive Residual-gradient Algorithm을 사용하게 되면 다른 결과가 나옵니다. State B의 Value는 $3/4$로, State C의 Value는 $1/4$로 수렴합니다. 다행히 State A의 Value는 똑같이 $1/2$로 수렴합니다. 이 추정한 Value들은 실제로 $\overline{\text{TDE}}$를 최소화하는 값입니다.

이 Value를 사용하여 $\overline{\text{TDE}}$를 계산해봅시다. 각 Episode의 첫 번째 Transition은 A의 Value $1/2$에서 B의 Value $3/4$로 변해 그 차이가 $1/4$이 되거나 C의 Value $1/4$로 변해 그 차이가 $-1/4$이 됩니다. 이 Transition 자체의 보상은 0이고 $\gamma = 1$ 이므로 첫 번째 Transition에서 TD Error의 제곱은 항상 $1/16$ 입니다. 두 번째 Transition 또한 B의 경우 $3/4 \to 1$, C의 경우 $1/4 \to 0$이므로 TD Error의 제곱은 마찬가지로 $1/16$ 입니다. 따라서 두 단계 모두 $\overline{\text{TDE}}$는 $1/16$ 임을 알 수 있습니다.

이제 Real Value를 사용하여 $\overline{\text{TDE}}$를 계산해보겠습니다. 이 경우에는 첫 번째 Transition에서 B로 갈 경우 $1/2 \to 1$, C로 갈 경우 $1/2 \to 0$ 입니다. 두 경우 모두 TD Error의 제곱은 $1/4$ 입니다. 두 번째 Transition은 State의 Value와 Reward가 동일하기 때문에 둘 다 TD Error가 0입니다. 따라서 TD Error의 제곱은 첫 번째 Transition에서 $1/4$, 두 번째 Transition에서 0이 됩니다. 따라서 평균적으로 TD Error의 제곱은 $1/8$이므로 방금 전에 계산한 $1/16$보다 크기 때문에 $\overline{\text{TDE}}$ 관점에서 더 나쁜 해법이라고 볼 수 있습니다. 이 간단한 문제에서도 Real Value는 가장 작은 $\overline{\text{TDE}}$를 갖지 않는다는 것을 알 수 있습니다.

<p style="text-align:right">□</p>

A-split 예제에서는 Tabular 방법을 사용했기 때문에 State의 Real Value를 정확하게 표현할 수 있었지만, Naive Residual-gradient Algorithm은 State의 Value를 Real Value와 다르게 추정했고, 이 Value를 사용했을 때 Real Value보다 $\overline{\text{TDE}}$가 더 낮았습니다. 이것이 바로 지금까지 Mean Square TD Error를 최소화하는 것을 목적으로 하지 않았던 이유입니다.

이전 장에서 배운 Mean Square Bellman Error $\overline{\text{BE}}$는 Real Value를 학습하면 모든 지점에서 Error가 0이었습니다. 따라서 Bellman Error를 최소화하는 알고리즘은 A-split 예제에서 문제가 없어야 합니다. 일반적으로 Bellman Error가 0이 될 것이라고 기대할 수는 없지만, Real Value Function을 찾는데 관련이 있기 때문입니다. State에 대한 Bellman Error는 해당 State에서의 평균 TD Error이기 때문에 Update 식을 유도해보겠습니다.

$$ \begin{align}
\mathbf{w}_{t+1} &= \mathbf{w}_t - \frac{1}{2} \alpha \nabla (\mathbb{E}_{\pi} [\delta_t]^2) \\ \\
&= \mathbf{w}_t - \frac{1}{2} \alpha \nabla (\mathbb{E}_{\pi} [\rho_t \delta_t]^2) \\ \\
&= \mathbf{w}_t - \alpha \mathbb{E}_b \left[ \rho_t \delta_t \right] \nabla \mathbb{E}_b \left[ \rho_t \delta_t \right] \\ \\
&= \mathbf{w}_t - \alpha \mathbb{E}_b \left[ \rho_t ( R_{t+1} + \gamma \hat{v} (S_{t+1}, \mathbf{w}) - \hat{v} (S_t, \mathbf{w})) \right] \mathbb{E}_b \left[ \rho_t \nabla \delta_t \right] \\ \\
&= \mathbf{w}_t + \alpha \bigg[ \mathbb{E}_b \left[ \rho_t (R_{t+1} + \gamma \hat{v} (S_{t+1}, \mathbf{w})) \right] - \hat{v}(S_t, \mathbf{w}) \bigg] \bigg[ \nabla \hat{v} (S_t, \mathbf{w}) - \gamma \mathbb{E}_b \left[ \rho_t \nabla \hat{v} (S_{t+1}, \mathbf{w}) \right] \bigg]
\end{align} $$

이 Update와 이것을 Sampling하는 방법들을 <span style="color:red">Residual-gradient Algorithm</span>이라고 합니다. 모든 기대값에서 단순한 Sample을 사용한 경우 위의 식은 식 (11.23)의 Naive Residual-gradient Algorithm과 거의 정확하게 감소합니다. 하지만 이 식이 식 (11.23)과 다른 점은 다음 State $S_{t+1}$과 함께 곱해지는 두 개의 평균값입니다. Bias되지 않는 Sample을 얻기 위해서는 다음 State에서 두 개의 독립적인 Sample이 필요하지만, Environment와의 상호작용에서 얻는 Sample은 한 개 뿐입니다. 여기서 구현의 문제가 발생합니다.

Residual-gradient Algorithm을 구현하기 위한 두 가지 방법이 있습니다. 하나는 Environment가 Deterministic으로 주어진 경우입니다. Deterministic Environment라면 다음 State로 Transition하는 두 개의 Sample은 같을 수밖에 없기 때문입니다. 또 다른 방법은 $S_t$에서 다음 State인 $S_{t+1}$의 두 개의 독립된 Sample을 얻는 것입니다. 하나는 위의 식에서 첫 번째 평균에 대한 것이고, 다른 하나는 두 번째 평균에 대한 것입니다. Environment와 실제로 상호작용할 때 이렇게 2개의 Sample을 얻는 것은 불가능하지만, Simulated Environment라면 가능합니다. 이러한 경우에 Residual-gradient Algorithm은 Step-size Parameter가 일반적인 조건일 때 $\overline{\text{BE}}$의 최소값으로 수렴하는 것이 보장됩니다. 진짜 SGD 방법으로써 이 수렴은 강력하며, Linear 및 non-Linear Function Approximation 방법 모두에 적용이 가능합니다. Linear인 경우라면 수렴은 항상 $\overline{\text{BE}}$를 최소화하는 고유한 $\mathbf{w}$를 생성합니다.

하지만 그럼에도 불구하고 Residual-gradient Algorithm의 문제점은 적어도 3가지가 남아 있습니다.

첫 번째 문제는 Semi-gradient 방법보다 훨씬 느리다는 것입니다. 이를 해결하기 위한 아이디어로 초기에 Semi-gradient 방법을 사용하고, 나중에 Residual-gradient Algorithm으로 전환하여 수렴을 보장시키는 방법이 제안되었습니다. (Baird and Moore, 1999)

두 번째 문제는 Naive Residual-gradient Algorithm처럼 몇몇 경우에 잘못된 값으로 수렴한다는 것입니다. 이 문제의 예시는 다음과 같이 A-split 문제의 변형에서 확인할 수 있습니다.

**Example 11.3) A-presplit example, a counterexample for the $\overline{\text{BE}}$**

아래 그림과 같은 3개의 State A, B, C로 이루어진 Episodic MRP가 있습니다. Episode는 동일한 확률로 A1 또는 A2에서 시작합니다. 그러나 State A1, A2는 Function Approximation을 수행할 때 A라는 동일한 State로 간주됩니다.

![](/assets/images/RL/011/07.jpg){: .align-center}

Function Approximation 방법의 매개변수는 3가지 구성요소를 갖고 있습니다. 하나는 State B의 Value, 하나는 State C의 Value, 나머지 하나는 State A (=A1과 A2)의 Value를 표현합니다. 초기 State를 제외하고 시스템은 Deterministic입니다. Episode가 A1에서 시작하면 0의 Reward를 받고 B로 Transition되고, 1의 Reward를 받은 다음 Episode가 종료됩니다. 마찬가지로 A2에서 시작하는 경우에는 0의 Reward를 받고 C로 Transition되고, 0의 Reward를 받고 Episode가 종료됩니다.

외부적으로 보았을 때 이 예제는 A-split 예제와 동일한 것처럼 보입니다. A-split 예제와 마찬가지로 B와 C의 Real Value는 각각 1과 0이고, A는 $1/2$입니다. A-split 예제에서, Semi-gradient TD는 이 Real Value로 수렴하지만, Naive Residual-gradient Algorithm은 B와 C의 Value는 각각 $3/4$와 $1/4$로 수렴합니다. 모든 State Transition은 Deterministic이기 때문에 Residual-gradient Algorithm 또한 이 값으로 수렴합니다.

따라서 Naive Residual-gradient Algorithm도 $\overline{\text{BE}}$를 최소화하는 해법이 됩니다. Deterministic 문제에서 Bellman Error와 TD Error는 동일하므로, $\overline{\text{BE}}$가 $\overline{\text{TDE}}$와 동일한 것입니다. 이 예제에서 $\overline{\text{BE}}$를 최적화하면 A-split 예제와 마찬가지로 잘못된 Value로 수렴함을 알 수 있습니다.

<p style="text-align:right">□</p>

세 번째 문제는 바로 다음 Section에서 설명합니다. 간단하게 설명하자면, $\overline{\text{BE}}$를 최소화하는 알고리즘에 문제가 있는 것이 아니라, $\overline{\text{BE}}$를 목표로 하는 것 자체에 문제가 있습니다.

## The Bellman Error is Not Learnable

이번 Section의 제목에 Learnable이 있습니다만, 이것은 일반적으로 기계학습에서 사용하는 Learnable과는 다른 개념입니다. 일반적인 Learnable 용어에 대해서는 다음 포스트를 참고해주시기 바랍니다.

- [[기계학습] 2. Is Learning Feasible?](/ml/is-learning-feasible/)

이 Section에서 Learnable은 **무한한 양의 Sample을 갖고 있다고 해도 학습이 불가능하다는 의미**로 사용하겠습니다. 지난 Section에서 다루었던 $\overline{\text{BE}}$는 이러한 의미에서 학습할 수 없다는 것을 밝힐 것입니다.

Learnable의 개념을 명확하게 하기 위해 몇 가지 간단한 예부터 시작하겠습니다. 다음과 같은 두 개의 Markov Reward Process (MRP)를 가정해봅시다.

![](/assets/images/RL/011/08.jpg){: .align-center}

위의 두 MRP에서 Edge는 모두 동일한 확률로 발생하는 것으로 가정하고, Edge에 있는 숫자는 그 Transition이 일어났을 때 받게 되는 Reward를 의미합니다. 모든 State는 단일 성분 Feature Vector $x = 1$과 $w$로 포함됩니다. 따라서 MRP에서 유일하게 변화하는 부분은 Reward의 순서입니다. 왼쪽 MRP는 계속 같은 State에 있으면서 각각 0.5의 확률로 0이나 2의 Reward를 받습니다. 오른쪽 MRP는 같은 확률로 다른 State로 움직이거나 같은 State에 있는데, Reward는 한 State에서는 무조건 0이고 다른 State에서는 무조건 2입니다. 두 MRP가 다르게 설계되어 있지만, Reward를 관찰하게 되면 두 MRP 모두 0, 2, 2, 0, 2, 0, 0, 0, ... 과 같은 Sequence로 나오게 됩니다. 따라서 무한한 양의 데이터가 주어진다고 하더라도 이 Sequence이 주어졌을 때 두 MRP중 어느 곳에서 생성된 MRP인지 알 수 없습니다. 심지어, 데이터로부터 MRP의 State가 1개인지 2개인지, Stochastic인지 Deterministic인지조차 알 수 없습니다. 이런 것을 <span style="color:red">Not Learnable</span>이라고 합니다.

이 예시는 식 (9.1)과 같은 $\overline{\text{VE}}$ 또한 학습할 수 없습니다. $\gamma = 0$이면 예시의 MRP에서 State의 Real Value는 왼쪽부터 1, 0, 2입니다. 만약 $w = 1$이라고 가정하면, $\overline{\text{VE}}$는 왼쪽 MRP에서 0이고, 오른쪽 MRP에서 0입니다. 두 문제에서 $\overline{\text{VE}}$는 다르지만 생성된 데이터의 Distribution이 동일하기 때문에 $\overline{\text{VE}}$를 학습할 수 없습니다.

목표를 학습할 수 없기 때문에 $\overline{\text{VE}}$를 왜 사용하는건가라는 의문이 듭니다. 그런데 만약 $w = 1$이라는 해법을 구한다면 그 해법은 예시의 두 MRP에 대해 최적입니다. 즉, $\overline{\text{VE}}$는 학습할 수는 없지만 이를 최적화하는 매개변수는 학습이 가능합니다. 따라서 $\overline{\text{VE}}$는 여전히 사용 가능한 목표입니다.

이것을 설명하기 위해 또 다른 목적 함수를 하나 정의하도록 하겠습니다. 항상 관찰할 수 있는 한 가지 Error는 각 시점에서의 Estimated Value와 그 시점의 Return 사이의 차이입니다. 이것을 <span style="color:red">Mean Square Return Error $\overline{\text{RE}}$</span>로 정의하며, On-policy의 경우에는 다음과 같이 나타낼 수 있습니다.

$$ \begin{align}
\overline{\text{RE}} (\mathbf{w}) &= \mathbb{E} \Big[ \big( G_t - \hat{v} (S_t, \mathbf{w}) \big)^2 \Big] \\ \\
&= \overline{\text{VE}} (\mathbf{w}) + \mathbb{E} \Big[ \big( G_t - v_{\pi} (S_t) \big)^2 \Big] \tag{11.24}
\end{align} $$

식 (11.24)를 보면 $\overline{\text{RE}}$와 $\overline{\text{VE}}$는 매개변수 Vector $\mathbf{w}$에 의존하지 않는 항을 제외하고는 동일합니다. 따라서 두 목표는 동일한 최적의 매개변수 $\mathbf{w}$가 필요합니다. 이 둘의 관계는 아래 그림을 보시면 더 이해가 쉬울 것입니다.

![](/assets/images/RL/011/09.jpg){: .align-center}

이제 다시 $\overline{\text{BE}}$로 돌아가보면, $\overline{\text{RE}}$는 MDP에 대한 지식을 토대로 계산하는 것이 가능하지만, 데이터에서 학습할 수 없다는 점에서 $\overline{\text{VE}}$와 유사합니다. 하지만 $\overline{\text{BE}}$가 $\overline{\text{VE}}$와 다른 점은 최적화하는 해법을 학습할 수 없다는 점입니다. 바로 아래의 반례를 통해 그것을 알 수 있습니다.

**Example 11.4) Counterexample to the learnability of the Bellman error**

이번에는 앞에서 다루었던 예시보다 약간 더 복잡한 MRP가 필요합니다. 반례에 사용할 두 개의 MRP는 다음과 같습니다.

![](/assets/images/RL/011/10.jpg){: .align-center}

먼저 왼쪽 MRP에는 서로 구분되는 두 개의 State가 있습니다. 하지만 오른쪽 MRP는 세 가지 State가 있는데, 그 중 B와 B'은 동일한 State로 판단되기 때문에 동일한 Value로 추정해야 합니다. 구체적으로 매개변수 Vector $\mathbf{w}$는 2개의 성분이 있으며, State A의 Value는 첫 번째 성분에 의해 표현되고, B와 B'의 Value는 두 번째 성분에 의해 표현됩니다. 두 번째 MRP는 세 State 모두 동일한 시간이 소요되도록 설계되었으므로 모든 State에 대해 $\mu(s) = 1/3$임을 쉽게 알 수 있습니다.

역시 이전 예제와 마찬가지로 관찰 가능한 데이터의 분포는 두 MRP가 동일합니다. 두 MRP 모두 State A 다음에는 0의 Reward를 얻으며 State B로 이동하는 것을 알 수 있습니다. State B는 State A로 Transition될 때 1의 Reward를 받고, 그 이외에는 모두 -1의 Reward를 받습니다. 두 MRP는 통계적으로 다른 정보도 동일합니다. 예를 들어, State B가 $k$번 나타날 확률은 둘 다 $2^{-k}$입니다.

만약 $\mathbf{w} = \mathbf{0}$이라고 가정해 보겠습니다. 첫 번째 MRP에서 이것은 정확한 해법이고 $\overline{\text{BE}}$는 0입니다. 두 번째 MRP에서 이 해법은 $\overline{\text{BE}} = \mu(B) 1 + \mu(B')1 = 2/3$이 되도록 B와 B' 모두 Error의 제곱을 1로 생성합니다. 동일한 데이터 분포를 생성하는 두 MRP에서 $\overline{\text{BE}}$가 다르므로, $\overline{\text{BE}}$는 학습할 수 없습니다.

게다가 $\mathbf{w}$를 최소화하는 값은 두 MRP가 다르게 나타납니다. 첫 번째 MRP의 경우 $\mathbf{w} = \mathbf{0}$은 $\gamma$에 대해 $\overline{\text{BE}}$를 최소화합니다. 그런데 두 번째 MRP에서는 $\gamma \to 1$이 될 때 $\mathbf{w} = (-1/2, 0)^{\sf T}$이 됩니다. 따라서 $\overline{\text{BE}}$를 최소화하는 해법은 데이터만으로 추정할 수 없습니다. 데이터에 드러난 것 이상으로 MRP에 대한 추가적인 지식이 필요합니다. 따라서 $\overline{\text{BE}}$를 학습의 목적으로 추구하는 것은 불가능합니다.

여기서 놀라운 점은 두 번째 MRP에서 State A의 $\overline{\text{BE}}$ 최소화 값이 0과 상당히 차이난다는 것입니다. State A는 Transition할 때 무조건 0의 Reward를 얻고, 거의 0의 Value를 갖는 State로 Transition합니다. 따라서 $v_{\mathbf{w}}(A)$는 0이어야 한다는 뜻입니다. 그런데 그렇게 나오지 않은 이유는 $v_{\mathbf{w}}(A)$를 음수로 만들었을 때 State B에서 A에 도달할 때 Error가 감소하기 때문입니다. 이 Deterministic Transition의 Reward는 1이며, 이것은 State B가 State A보다 더 큰 값을 가져야함을 의미합니다. State B의 Value가 0에 가깝기 때문에 State A의 Value는 -1에 가까워집니다. 따라서 $\overline{\text{BE}}$의 최소화 값은 State A를 $-1/2$로 추정함으로써 State A를 떠날 때와 돌아올 때의 Error의 차이를 줄이는 것입니다.

<p style="text-align:right">□</p>

서로 다른 두 개의 MRP는 동일한 데이터를 생성하지만 최소화하는 매개변수 Vector가 서로 다릅니다. 이 때 최적의 매개변수 Vector가 데이터에 대한 함수가 아니기 때문에 데이터에서 학습할 수 없다는 것이 증명됩니다. 지금까지 고려한 다른 Bootstrapping 목표인 $\overline{\text{PBE}}$와 $\overline{\text{TDE}}$는 학습 가능한 데이터에서 결정될 수 있으며, 일반적으로 $\overline{\text{BE}}$를 최소화함으로써 최적의 해법을 구할 수 있습니다. 다시 위의 그림으로 돌아가보면 이것이 요약되어 있습니다.

어쨌든 $\overline{\text{BE}}$는 학습이 불가능합니다. 즉, Feature Vector나 관찰 가능한 데이터를 토대로 추정할 수 없습니다. 따라서 $\overline{\text{BE}}$는 Model에 기반한 환경으로 제한될 수밖에 없다는 결론을 낼 수 있습니다.

## Gradient-TD Methods

이제 $\overline{\text{PBE}}$를 최소화하기 위한 SGD 방법을 논의하겠습니다. 진짜 SGD 방법으로써 Gradient TD 방법은 Off-policy 학습 및 non-Linear Function Approximation에서도 강력한 수렴을 보장합니다. 만약 Linear Function Approximation이라면 $\overline{\text{PBE}}$가 0인 TD Fixed-point $\mathbf{w}_{\text{TD}}$가 항상 존재합니다. 이 해법은 Section 9.8에서 다룬 LSTD로 구할 수 있지만, 매개변수의 수 $d$에 대해 $O(d^2)$의 시간 복잡도를 갖습니다. 여기서는 이 방법 대신 계산이 복잡하더라도 $O(d)$의 시간 복잡도를 갖는 방법인 Gradient-TD에 대해 알아보겠습니다.

먼저 목적인 $\overline{\text{PBE}}$의 식 (11.22)를 행렬식으로 표현해보겠습니다.

$$ \begin{align}
\overline{\text{PBE}} (\mathbf{w}) &= || \Pi \bar{\delta}_{\mathbf{w}} ||_{\mu}^2 \\ \\
&= (\Pi \bar{\delta}_{\mathbf{w}})^{\sf T} \mathbf{D} \Pi \bar{\delta}_{\mathbf{w}} \tag{from (11.14)} \\ \\
&= \bar{\delta}_{\mathbf{w}}^{\sf T} \Pi^{\sf T} \mathbf{D} \Pi \bar{\delta}_{\mathbf{w}}
\end{align} $$

위 식을 식 (11.13)과 항등식 $\Pi^{\sf T} \mathbf{D} \Pi = \mathbf{D} \mathbf{X} \big( \mathbf{X}^{\sf T} \mathbf{D} \mathbf{X} \big)^{-1} \mathbf{X}^{\sf T} \mathbf{D}$를 이용하면 다음과 같이 수정할 수 있습니다.

$$ \begin{align}
&= \bar{\delta}_{\mathbf{w}}^{\sf T} \mathbf{D} \mathbf{X} \big( \mathbf{X}^{\sf T} \mathbf{D} \mathbf{X} \big)^{-1} \mathbf{X}^{\sf T} \mathbf{D} \bar{\delta}_{\mathbf{w}} \tag{11.25} \\ \\
&= \big( \mathbf{X}^{\sf T} \mathbf{D} \bar{\delta}_{\mathbf{w}} \big)^{\sf T} \big( \mathbf{X}^{\sf T} \mathbf{D} \mathbf{X} \big)^{-1} \big( \mathbf{X}^{\sf T} \mathbf{D} \bar{\delta}_{\mathbf{w}} \big) \tag{11.26}
\end{align} $$

식 (11.26)을 $\mathbf{w}$에 대해 미분하면 Gradient는 다음과 같습니다.

$$\nabla \overline{\text{PBE}} (\mathbf{w}) = 2 \nabla \left[ \mathbf{X}^{\sf T} \mathbf{D} \bar{\delta}_{\mathbf{w}} \right]^{\sf T} \big( \mathbf{X}^{\sf T} \mathbf{D} \mathbf{X} \big)^{-1} \big( \mathbf{X}^{\sf T} \mathbf{D} \bar{\delta}_{\mathbf{w}} \big)$$

이것을 SGD 방법으로 바꾸기 위해서 이 값을 기대값으로 갖는 모든 시간 단계에서 무언가를 Sampling해야 합니다. Behavior Policy에 따라 방문한 State의 Distribution을 $\mu$라고 했을 때, 위의 식에서 3개의 항(여기서는 괄호로 구분된 부분) 모두를 이 Distribution에서 기대값으로 쓸 수 있습니다. 예를 들어서, 마지막 항 $\mathbf{X}^{\sf T} \mathbf{D} \bar{\delta}_{\mathbf{w}}$은 다음과 같이 쓸 수 있습니다.

$$\mathbf{X}^{\sf T} \mathbf{D} \bar{\delta}_{\mathbf{w}} = \sum_s \mu(s) \mathbf{x} \bar{\delta}_{\mathbf{w}} (s) = \mathbb{E} \left[ \rho_t \delta_t \mathbf{x}_t \right]$$

이것은 Semi-gradient TD(0)의 Update 식 (11.2)의 기대값에 불과합니다. $\nabla \overline{\text{PBE}} (\mathbf{w})$의 첫 번째 항은 이 식에 Transpose를 붙이고 미분한 값이므로, 다음과 같이 정리할 수 있습니다.

$$ \begin{align}
\nabla \mathbb{E} \left[ \rho_t \delta_t \mathbf{x}_t \right]^{\sf T} &= \mathbb{E} \left[ \rho_t \nabla \delta_t^{\sf T} \mathbf{x}_t^{\sf T} \right] \\ \\
&= \mathbb{E} \left[ \rho_t \nabla (R_{t+1} + \gamma \mathbf{w}^{\sf T} \mathbf{w}_{t+1} - \mathbf{w}^{\sf T} \mathbf{x}_t )^{\sf T} \mathbf{x}_t^{\sf T} \right] \\ \\
&= \mathbb{E} \left[ \rho_t ( \gamma \mathbf{x}_{t+1} - \mathbf{x}_t ) \mathbf{x}_t^{\sf T} \right]
\end{align} $$

여기서 $\delta_t$는 Episodic Task라고 가정합니다. 마지막으로, 가운데 항은 다음과 같이 Feature Vector의 Outer Product 기대값으로 간단하게 표현이 가능합니다.

$$\mathbf{X}^{\sf T} \mathbf{D} \mathbf{X} = \sum_s \mu (s) \mathbf{x} (s) \mathbf{x} (s)^{\sf T} = \mathbb{E} \left[ \mathbf{x}_t \mathbf{x}_t^{\sf T} \right]$$

이렇게 기대값으로 표현한 식을 이용하여 $\overline{\text{PBE}}$의 Gradient 식 $\nabla \overline{\text{PBE}} (\mathbf{w})$을 다시 작성하면 다음과 같이 정리할 수 있습니다.

$$\nabla \overline{\text{PBE}} (\mathbf{w}) = 2 \mathbb{E} \left[ \rho_t \nabla \delta_t^{\sf T} \mathbf{x}_t^{\sf T} \right] \mathbb{E} \left[ \mathbf{x}_t \mathbf{x}_t^{\sf T} \right]^{-1} \mathbb{E} \left[ \rho_t \delta_t \mathbf{x}_t \right] \tag{11.27}$$

식 (11.27)을 보면 첫 항과 마지막 항이 Feature Vector $\mathbf{x}_{t+1}$에 의존하기 때문에, 단순히 Sampling한 데이터의 기대값으로 Residual-gradient Algorithm을 적용하면 편향된 추정값이 나오게 됩니다.

다른 방법을 생각해보면, 3개의 기대값을 각각 개별적으로 추정한 다음 결합하여 Bias되지 않은 추정치를 생성할 수도 있습니다. 괜찮은 방법이기는 하지만, $d \times d$ 행렬인 처음 두 개 항의 기대값을 계산하고, 두 번째 항의 역행렬을 계산하기 위해서는 많은 계산 자원이 필요합니다. Section 9.8에서와 같이 계산량을 줄이는 방법이 있긴 하지만, 그럼에도 불구하고 여전히 시간 복잡도는 $O(d^2)$입니다.

또 다른 방법으로는 일부 추정값을 별도로 저장한 다음 결합하는 것을 생각해 볼 수 있습니다. 이번 Section에서 다루는 Gradient-TD가 이 방법을 사용하는데, 식 (11.27)에서 두 번째 항과 세 번째 항을 곱한 결과를 추정합니다. 두 번째 항이 $d \times d$ 행렬이고, 세 번째 항이 $d \times 1$ Vector이기 때문에 곱셈의 결과는 $d \times 1$ 크기가 됩니다. 이 Vector를 다음과 같이 $\mathbf{v}$로 표현합니다.

$$\mathbf{v} \approx \mathbb{E} \left[ \mathbf{x}_t \mathbf{x}_t^{\sf T} \right]^{-1} \mathbb{E} \left[ \rho_t \delta_t \mathbf{x}_t \right] \tag{11.28}$$

식 (11.28)과 같은 형태는 Linear Supervised Learning에서 자주 보던 형태입니다. Feature에서 $\rho_t \delta_t$를 근사하기 위한 Linear Least Square 문제의 해법입니다. 이것은 다음과 같이 Importance Sampling Ratio가 포함된 식 $(\mathbf{v}^{\sf T} \mathbf{x}_t - \rho_t \delta_t)^2$의 Expected Squared Error를 최소화하는 Vector $\mathbf{v}$를 점진적으로 계산하는 표준 SGD 방법으로 구할 수 있으며, 이 방법을 <span style="color:red">Least Mean Square (LMS)</span>라고 합니다.

$$\mathbf{v}_{t+1} \doteq \mathbf{v}_t + \beta \rho_t \big( \delta_t - \mathbf{v}_t^{\sf T} \mathbf{x}_t \big) \mathbf{x}_t$$

위의 식에서 $\beta > 0$은 또 다른 Step-size Parameter입니다. 이런 Update 방법을 사용하면 식 (11.28)을 $O(d)$의 시간 복잡도로 계산할 수 있습니다.

이렇게 식 (11.28)에서 $\mathbf{v}_t$를 계산하고 나면 식 (11.27)을 기반으로 하는 SGD 방법을 사용하여 매개변수 $\mathbf{w}_t$를 Update할 수 있습니다. 이 과정을 정리하면 다음과 같습니다.

$$ \begin{align}
\mathbf{w}_{t+1} &= \mathbf{w}_t - \frac{1}{2} \alpha \nabla \overline{\text{PBE}} (\mathbf{w}_t) \tag{the general SGD rule} \\ \\
&= \mathbf{w}_t - \frac{1}{2} \alpha 2 \mathbb{E} \left[ \rho_t \nabla \delta_t^{\sf T} \mathbf{x}_t^{\sf T} \right] \mathbb{E} \left[ \mathbf{x}_t \mathbf{x}_t^{\sf T} \right]^{-1} \mathbb{E} \left[ \rho_t \delta_t \mathbf{x}_t \right] \tag{from (11.27)} \\ \\
&= \mathbf{w}_t + \alpha \mathbb{E} \left[ \rho_t \nabla \delta_t^{\sf T} \mathbf{x}_t^{\sf T} \right] \mathbb{E} \left[ \mathbf{x}_t \mathbf{x}_t^{\sf T} \right]^{-1} \mathbb{E} \left[ \rho_t \delta_t \mathbf{x}_t \right] \tag{11.29} \\ \\
& \approx \mathbf{w}_t + \alpha \mathbb{E} \left[ \rho_t \nabla \delta_t^{\sf T} \mathbf{x}_t^{\sf T} \right] \mathbf{v}_t \tag{based on (11.28)} \\ \\
& \approx \mathbf{w}_t + \alpha \rho_t (\mathbf{x}_t - \gamma \mathbf{x}_{t+1}) \mathbf{x}_t^{\sf T} \mathbf{v}_t \tag{sampling}
\end{align} $$

위와 같은 Update 식을 사용한 알고리즘을 <span style="color:red">GTD2</span>라고 합니다. 만약 마지막의 Inner Product $\mathbf{x}_t^{\sf T} \mathbf{v}_t$가 먼저 수행되면 전체 알고리즘은 $O(d)$의 시간 복잡도로 계산할 수 있습니다.

머리를 더 쓴다면, 식 (11.29) 부분에서 $\mathbf{v}_t$로 대체하기 전에 몇 가지 단계를 더 거쳐 약간 더 나은 알고리즘으로 만들 수도 있습니다.

$$ \begin{align}
\mathbf{w}_{t+1} &= \mathbf{w}_t + \alpha \mathbb{E} \left[ \rho_t \nabla \delta_t^{\sf T} \mathbf{x}_t^{\sf T} \right] \mathbb{E} \left[ \mathbf{x}_t \mathbf{x}_t^{\sf T} \right]^{-1} \mathbb{E} \left[ \rho_t \delta_t \mathbf{x}_t \right] \\ \\
&= \mathbf{w}_t + \alpha \big( \mathbb{E} \left[ \rho_t \mathbf{x}_t \mathbf{x}_t^{\sf T} \right] - \gamma \mathbb{E} \left[ \rho_t \mathbf{x}_{t+1} \mathbf{x}_t^{\sf T} \right] \big) \mathbb{E} \left[ \mathbf{x}_t \mathbf{x}_t^{\sf T} \right]^{-1} \mathbb{E} \left[ \rho_t \delta_t \mathbf{x}_t \right] \\ \\
&= \mathbf{w}_t + \alpha \big( \mathbb{E} \left[ \mathbf{x}_t \mathbf{x}_t^{\sf T} \right] - \gamma \mathbb{E} \left[ \rho_t \mathbf{x}_{t+1} \mathbf{x}_t^{\sf T} \right] \big) \mathbb{E} \left[ \mathbf{x}_t \mathbf{x}_t^{\sf T} \right]^{-1} \mathbb{E} \left[ \rho_t \delta_t \mathbf{x}_t \right] \\ \\
&= \mathbf{w}_t + \alpha \big( \mathbb{E} \left[ \rho_t \delta_t \mathbf{x}_t \right] - \gamma \mathbb{E} \left[ \rho_t \mathbf{x}_{t+1} \mathbf{x}_t^{\sf T} \right] \big) \mathbb{E} \left[ \mathbf{x}_t \mathbf{x}_t^{\sf T} \right]^{-1} \mathbb{E} \left[ \rho_t \delta_t \mathbf{x}_t \right] \\ \\
& \approx \mathbf{w}_t + \alpha \big( \mathbb{E} \left[ \rho_t delta_t \mathbf{x}_t \right] - \gamma \mathbb{E} \left[ \rho_t \mathbf{x}_{t+1} \mathbf{x}_t^{\sf T} \right] \mathbf{v}_t \big) \tag{based on (11.28)} \\ \\
& \approx \mathbf{w}_t + \alpha \rho_t \big( \delta_t \mathbf{x}_t - \gamma \mathbf{x}_{t+1} \mathbf{x}_t^{\sf T} \mathbf{v}_t \big) \tag{sampling}
\end{align} $$

마찬가지로, 마지막 곱셈 부분인 $(\mathbf{x}_t^{\sf T} \mathbf{v}_t)$가 먼저 수행되면 시간 복잡도는 $O(d)$가 됩니다. 이 알고리즘은 <span style="color:red">TD(0) with Gradient Correction (TDC)</span> 또는 <span style="color:red">GTD(0)</span>라고 부릅니다.

![](/assets/images/RL/011/11.jpg){: .align-center}

위의 그림은 Baird's Counterexample에 대한 Sample과 TDC의 추정 결과를 보여줍니다. 의도했던 대로 $\overline{\text{PBE}}$는 0으로 감소하지만 매개변수 Vector $\mathbf{w}$의 구성 요소들은 0에 접근하지 않습니다. 그래프를 보면 최적의 해법인 $\hat{v} = 0$과는 거리가 멀며, 다른 최적의 해법이라도 $\mathbf{w}$가 $(1, 1, 1, 1, 1, 1, 4, -2)^{\sf T}$에 비례해야 하는데, 1000번의 반복 후에도 그것에 가깝게 수렴하지 않습니다. 사실 실제로 최적의 해법으로 수렴을 하고 있긴 하지만, $\overline{\text{PBE}}$가 이미 0에 너무 가깝기 때문에 수렴 속도가 너무 느릴 뿐입니다.

GTD2와 TDC는 $\mathbf{w}$를 학습하는 프로세스(1차 프로세스)와 $\mathbf{v}$를 학습하는 프로세스(2차 프로세스)로 나눌 수 있습니다. 1차 프로세스는 2차 프로세스에 의존하는 반면, 2차 프로세스는 독립적으로 진행됩니다. 이렇게 비대칭적으로 의존하는 성질을 <span style="color:red">Cascade</span>라고 부릅니다.

Cascade에서는 보통 2차 프로세스가 더 빠르게 진행되므로 항상 1차 프로세스를 지원할 준비가 되어 있고, 정확한 값에 점근적이라고 가정합니다. Cascade에 대한 수렴 증명은 보통 이렇게 명시적으로 가정합니다. 이런 증명 방법을 <span style="color:red">Two-time-scale 증명</span>이라고 합니다. **Fast time scale**은 2차 프로세스를 의미하며, **Slower time scale**은 1차 프로세스를 의미합니다. 만약 1차 프로세스의 Step-size Parameter를 $\alpha$, 2차 프로세스의 Step-size Parameter를 $\beta$라고 한다면 수렴에 대한 증명은 보통 $\beta \to 0$과 $\frac{\alpha}{\beta} \to 0$이라는 조건이 필요합니다.

Gradient-TD 방법은 현재 가장 널리 사용되는 안정적인 Off-policy 방법입니다. 이에 대한 여러 연구가 많이 이루어졌는데, 대표적으로 Semi-gradient TD와 Gradient-TD 방법을 융합한 Hybrid-TD 방법이 있습니다. (Hackman, 2012; White and White, 2016) Hybrid-TD 방법은 Target Policy와 Behavior Policy가 동일한 State에서는 Semi-gradient TD 처럼 동작하고, 그렇지 않은 State에서는 Gradient-TD 처럼 동작하는 방법입니다. 마지막으로, 이 외에도 Gradient TD 방법의 아이디어는 Proximal 방법이나 Control 방법에 융합한 연구도 있습니다. (Mahadevan et al., 2014; Du et al., 2017)

## Emphatic-TD Methods

이제 두 번째 아이디어로 넘어가서, 특별한 Distribution에 의존하지 않는 새로운 Gradient 방법을 알아보겠습니다.

Section 9.4에서 Linear Semi-gradient TD 방법은 On-policy Distribution에서 훈련될 때 효율적이고 안정적임을 배웠습니다. 이것은 식 (9.11)의 행렬 $\mathbf{A}$가 Positive Definiteness인 것, On-policy의 State Distribution $\mu_{\pi}$, Target Policy 하에 State Transition 확률 $p(s \mid s, a)$과 관련이 있었습니다. Off-policy에서는 Importance Sampling을 사용하여 State Transition에 대한 Weight를 부여하여 Target Policy를 학습하였으나, State Distribution은 여전히 Behavior Policy로부터 나왔었습니다.

이것을 해결하는 방법은 일부 State를 강조하고, 나머지 State를 덜 강조하여 Update Distribution을 On-policy Distribution으로 만드는 것입니다. 그렇게 하면 안정성과 수렴성이 뒤따를 것이기 때문입니다. 이것이 이번 Section에서 배울 Emphatic-TD 방법의 핵심 아이디어입니다.

사실 On-policy Distribution는 여러 개가 있고, 그 중 어떤 것이든 안정성을 보장하는데 충분하기 때문에 **On-policy Distribution**이라는 개념은 맞지 않습니다.

Discount가 없는 Episodic Task를 가정해봅시다. 여기서 Episode가 종료되는 방식은 Transition Probability에 의해 결정되지만, Episode가 시작되는 방법은 여러 방법이 있을 수 있습니다. 그러나 Episode가 시작되고, 만약 모든 State Transition이 Target Policy에 의해 일어난다면 State Distribution은 On-policy Distribution에 의한 결과라고 볼 수 있습니다.

그리고 Episode가 어디에서 시작하는지에 따라 방문하는 State의 수가 달라질 것이라고 예상할 수 있습니다. 만약 Episode가 Terminal State에 가까운 곳에서 시작한다면 종료 전까지 몇 개의 State만 방문하고 끝나겠지만, Terminal State에서 먼 곳에서 시작한다면 많은 State를 방문할 수 있기 때문입니다. 두 경우 모두 On-policy Distribution이며, Semi-gradient 방법으로 안정적인 학습을 보장할 수 있습니다. 하지만 프로세스가 시작되면, On-policy Distribution은 Episode가 종료될 때까지 방문하는 모든 State를 Update 하는 것과 같은 결과를 갖습니다.

만약 Discount가 있는 경우 이러한 목적을 위해 부분적으로, 또는 확률적으로 Episode가 종료하게 만들 수 있습니다. 예를 들어, Discount Factor를 $\gamma = 0.9$로 설정한다면 모든 시간 단계에서 $0.1$의 확률로 Episode가 종료되고 Transition된 State에서 새로운 Episode로 시작한다는 것으로 볼 수 있습니다. 즉, Discount를 사용한 문제는 모든 시간 단계에서 $1 - \gamma$ 확률로 Episode가 종료되고 다시 시작되는 문제나 마찬가지입니다. Discount를 이러한 관점으로 보는 것은 <span style="color:red">Pseudo Termination</span>에 대한 일반적인 개념의 한 예시입니다. Pseudo Termination에서 Episode의 종료는 State Transition의 순서에 영향을 미치지 않지만, 학습 과정과 학습의 양에는 영향을 미친다는 의미입니다. 이러한 종류의 Pseudo Termination은 Off-policy 학습에 중요합니다. 왜냐하면 원하는 방식으로 Episode를 다시 시작할 수 있기 때문입니다. Pseudo Termination으로 인해 On-policy Distribution을 토대로 방문한 State를 유지할 필요성이 줄어듭니다. 즉, 만약 새 State를 다시 시작한 Episode로 간주하지 않으면 Discounting을 통해 빠르게 On-policy Distribution이 제한됩니다.

Episodic State-Value를 학습하기 위한 1-step Emphatic-TD 알고리즘은 다음과 같이 정의됩니다.

$$ \begin{align}
\delta_t &= R_{t+1} + \gamma \hat{v} (S_{t+1}, \mathbf{w}) - \hat{v} (S_t, \mathbf{w}) \\ \\
\mathbf{w}_{t+1} &= \mathbf{w}_t + \alpha M_t \rho_t \delta_t \nabla \hat{v} (S_t, \mathbf{w}_t) \\ \\
M_t &= \gamma \rho_{t-1} M_{t-1} + I_t
\end{align} $$

위 식에서 Interest $I_t$는 임의의 초기값을 갖고, Emphasis $M_t$는 $M_{-1} = 0$으로 초기화됩니다. 아래 그림은 Baird’s counterexample에서 Parameter Vector의 구성 요소 값이 어떻게 변하는지 나타내고 있습니다. (이 그래프는 모든 시간 단계 $t$에 대해서 $I_t = 1$로 설정되어 있다고 가정했습니다) 그래프 중간에서 약간의 출렁임이 보이긴 하지만, 결국 모든 값은 특정 값으로 수렴하며 $\overline{\text{VE}}$는 0에 가까워집니다.

![](/assets/images/RL/011/12.jpg){: .align-center}

이러한 Trajectory는 Transition나 Reward에 대한 Sampling으로 인한 Variance 없이, Parameter Vector Trajectory의 기대값을 반복적으로 계산해서 얻습니다. 안타깝게도 Emphatic-TD 알고리즘을 직접 적용한다면 Baird’s counterexample에서 Variance가 너무 크기 때문에 계산 실험에서 일관된 결과를 얻는 것이 불가능합니다. 알고리즘은 이 문제에 대해 이론적으로 최적의 해법으로 수렴하지만, 실제로는 그렇지 않습니다. 다음 Section에서는 이런 알고리즘의 Variance를 어떻게 줄일 수 있을지에 대해 논의합니다.

## Reducing Variance

Off-policy 학습은 On-policy 학습보다 본질적으로 Variance가 더 클 수밖에 없습니다. 왜냐하면 Policy와 덜 관련있는 데이터를 토대로 학습할수록, Policy의 Value를 그만큼 덜 학습하기 때문입니다. 극단적인 경우를 가정한다면 데이터를 토대로 아무것도 학습하지 못할 수도 있습니다. 결국, Target Policy와 Behavior Policy가 어느 정도는 관련이 있어야만 유사한 State를 방문하고, 유사한 Action을 취하면서 Off-policy 학습을 진행할 수 있습니다.

다른 한편으로는, 방문한 State와 선택한 Action이 상당히 겹치지만 동일하지는 않은 유사한 Policy가 많이 있습니다. Off-policy 학습의 존재 이유는 이러한 많은 Policy에 일반화를 가능하게 하는 것입니다. 문제는 주어진 경험을 어떻게 최대한 활용하는지에 대한 것입니다. Step-size Parameter가 올바르게 설정된 경우 Expected Value를 안정적으로 구할 몇 가지 방법이 있으므로, 이제는 Estimated Value의 Variance를 줄여보겠습니다. 이에 대한 많은 아이디어가 있지만, 여기서는 그 중 일부만 소개합니다.

먼저 Importance Sampling을 기반으로 하는 Off-policy 방법에서 Variance를 제어하는 것이 중요한 이유를 논의해보겠습니다. 지금까지 알아본 Importance Sampling에는 종종 Policy Ratio의 곱셈이 포함됩니다. 이 떄의 Ratio는 항상 식 (5.13)과 같은 예상치이지만, 매우 높거나 0에 가까울 정도로 낮을 수도 있습니다. 연속적인 Ratio들은 서로 상관 관계가 없기 때문에 곱셈의 기대값이 항상 1이지만, Variance는 매우 높을 수 있습니다. 이 비율은 SGD 방법에서의 Step-size를 곱하기 때문에 Variance가 크다는 것은 Step-size가 크게 달라지는 단계를 수행한다는 의미가 됩니다. 이것은 때때로 매우 큰 Step-size를 가질 수 있기 때문에 SGD에 문제가 생길 수 있습니다. SGD 방법은 여러 단계의 평균에 의존하기 때문에 단일 Sample에서 크게 이동하면 신뢰할 수 없기 때문입니다.

이를 해결하는 방법으로 가장 먼저 떠올릴 수 있는 것은 이 문제를 방지할 수 있을 정도로 Step-size Parameter를 작게 설정하는 것입니다. 문제는 이렇게 할 경우 학습 속도가 매우 느려질 수 있다는 것입니다. 따라서 문제가 생길 만한 몇몇 Sample에서만 Step-size Parameter를 조절하는 방법이 연구되었습니다. 대표적으로 매개변수 Vector에 따라 Step-size Parameter를 적응적으로 설정하는 방법이 있습니다. (Jacobs, 1988; Sutton, 1992b, c)

또는 5장에서 Weighted Importance Sampling이 일반적인 Importance Sampling보다 Variance Update가 낮을 때 훨씬 더 잘 작동한다는 사실을 배웠습니다. 하지만 Weighted Importance Sampling을 Function Approximation에 적용하는 것은 어려운 일이며, $O(d)$의 시간 복잡도에서만 대략적으로 수행할 수 있습니다. (Mahmood and Sutton, 2015)

Section 7.5에서 배운 Tree-backup 알고리즘은 Importance Sampling을 사용하지 않고 일부 Off-policy 학습을 수행할 수 있었습니다. 이 아이디어는 Munos, Stepleton, Harutyunyan 및 Bellemare(2016)와 Mahmood, Yu 및 Sutton(2017)에 의해 보다 안정적이고 효율적인 Off-policy Policy에 확장되었습니다.

마지막으로, Target Policy가 부분적으로 Behavior Policy에 의해 결정되도록 만들어서 Importance Sampling Ratio가 비교적 크지 않도록 만드는 방법이 있습니다. (Precup et al., 2006)

## Summary

Off-policy 방법은 On-policy와는 다르게 Policy이 Target Policy와 Behavior Policy로 분리되어 Value Function을 학습합니다. Tabular Q-learning을 배웠을 때 Off-policy 학습은 쉬운 것처럼 보였고, Expected Sarsa 및 Tree-backup 알고리즘으로 자연스럽게 일반화까지 해냈습니다. 그러나 이번 장에서 보았듯이 이 아이디어를 Function Approximation, 특히 Linear Function Approximation로 확장하는 것은 생각보다 어려운 일이며, 강화학습에 대한 심도 깊은 이해를 필요로 합니다.

Off-policy 알고리즘을 찾는 이유 중 하나는 Exploration과 Exploitation 사이의 Trade-off를 처리하는 데 유연성을 제공하기 위해서입니다. 또 다른 이유는 학습으로부터 Action을 분리하여 Target Policy에 얶매이지 않기 위해서입니다. TD 학습은 동시에 여러 작업을 해결하기 위해 하나의 경험을 사용하여 여러가지를 병렬로 학습할 수 있는 가능성을 보여줍니다. 모든 경우에 그런 것은 아니지만, 특별한 경우에는 원하는 만큼 효율적으로 이 작업을 수행할 수 있습니다.

이번 장에서는 Off-policy 학습에서 Function Approximation을 위한 해결 방법을 두 부분으로 나누었습니다. 첫 번째 부분에서는 Behavior Policy에 대한 학습 목표를 수정하여 Tabular에서 고안된 기술로 간단하게 처리했습니다. 다만 이 방법은 Update의 Variance를 증가시켜 학습 속도를 느리게 만드는 단점이 있었습니다. Off-policy 학습에서 높은 Variance는 아직까지도 완전히 해결되지 않은 부분이며, 앞으로도 많은 연구자들의 목표로 남을 것입니다.

두 번째 부분에서는 Off-policy 학습에서 Bootstrapping을 포함한 Semi-gradient TD 방법의 불안정성을 다루었습니다. Function Approximation, Off-policy 학습, Bootstrapping이라는 3가지 위험 요소가 있고, 이 3가지 요소 중 최소한 한 개 이상을 포기해야 불안정성을 제거할 수 있습니다. 이번 장에서 다룬 알고리즘 중 가장 널리 쓰이는 방법은 Bellman Error를 토대로 진짜 SGD 방법을 수행하는 것입니다.

그러나 이어지는 분석을 통해 이 방법은 많은 경우에 매력적인 목표가 아니며, 결국 학습 알고리즘으로 완성하는 것이 불가능하다는 결론이 나왔습니다. 또 다른 접근 방식인 **Gradient-TD** 방법은 Projected Bellman Error를 토대로 SGD를 수행합니다. $\overline{\text{PBE}}$의 Gradient는 $O(d)$의 시간 복잡도로 학습할 수 있지만, 두 번째 Step-size와 두 번째 매개변수 Vector가 필요했습니다. 최신 방법으로 **Emphatic-TD** 방법은 Update에 Weight를 부여하여 일부 State를 강조하는 방식으로 On-policy 학습처럼 만들었습니다. 이로 인해 계산적으로 간단한 Semi-gradient 방법을 사용할 수 있게끔 유도하였습니다.

마지막으로 정리해보면, Off-policy 학습은 아직도 새로운 영역이며, 불안정합니다. 어떤 방법이 가장 좋을지, 또는 적절할지 명확하지 않습니다. 이번 장에서 소개한 방법이 과연 현실적이며, 필요한 방법인지, 소개한 방법 외에 더 좋은 방법이 있는 것은 아닌지와 같은 연구가 현재도 진행중이기 때문입니다.

11장에 대한 내용은 여기서 마치겠습니다. 읽어주셔서 감사합니다!