var store = [{
        "title": "Introduction",
        "excerpt":"안녕하세요, 오늘은 Machine Learning 카테고리에 대해 말씀드리려 합니다. 이 카테고리에는 제가 예전에 기계학습을 공부하며 이해한 내용을 정리하는 식으로 진행하려고 합니다. Textbook 작성된 글의 기반은 위의 사진에 나와있는 Learning From Data라는 교재입니다. 책의 저자이신 Abu-Mostafa 교수님은 칼텍 소속으로 실제로 Machine Learning 수업을 강의하실 때 이 교재를 사용하는 것으로 알고 있습니다. 강의자료는...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/studies/introduction/",
        "teaser": null
      },{
        "title": "The Learning Problem",
        "excerpt":"1장은 어떤 것이 Learning Problem인가에 대해 설명하는 강의입니다. 타이틀 슬라이드의 오른쪽 아래를 보시면 무언가 기하학적인 모양이 나와있는 그림이 있는데, 저번 글과 비교해 보시면 교재 표지에 똑같은 그림이 나와있다는 것을 알 수 있습니다. 이 그림은 추후 또 나올 그림이니 기억해 두시길 바랍니다. 나중에 이 그림이 다시 나왔을 때 또 언급하겠습니다. Outline...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/studies/the-learning-problem/",
        "teaser": null
      },{
        "title": "Is Learning Feasible?",
        "excerpt":"2장은 지난 장의 마지막 이슈였던 학습은 가능한 것인가? 라는 의문을 해결하는 강의입니다. Outline 이번 장은 총 4부분으로 구성되어 있습니다. 먼저 확률론적으로 예제를 통해 접근하고, 이를 기계학습과 연결하는 과정을 거칩니다. 하지만 이 과정에서 몇 가지의 문제가 생기는데, 이 원인과 그 해결책은 무엇인지까지 다루게 됩니다. Probability to the rescue 가장 먼저, 위...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/studies/is-learning-feasible/",
        "teaser": null
      },{
        "title": "Linear Models I",
        "excerpt":"3장에서는 새로운 이슈인 Linear Model (선형 모델)에 대해서 알아보는 시간입니다. Introduction에서도 언급했었지만, 본 교재와 강의자료의 순서가 다른 부분이 조금 있는데, 오늘 할 Linear Model 부분이 바로 그런 부분입니다. 교재에서는 Linear Model 파트가 한 장으로 묶여 있는데, 강의에서는 두 부분으로 나누어 앞부분을 3장에 넣고, 뒷부분을 9장에 배치하였습니다. 왜 이렇게 만들었는가 궁금했는데,...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/studies/linear-models-1/",
        "teaser": null
      },{
        "title": "Error and Noise",
        "excerpt":"4장에서는 Error와 Noise에 대해 알아보겠습니다. Outline 이번 장의 구성은 총 4개로 나뉩니다. 먼저 지난 장 마지막에 다루었던 Nonlinear Transformation에 대해 좀 더 이야기해보고, 다음으로 Error를 측정하는 방법, 그리고 Noise가 발생하는 이유와 모델에 적용하는 법, 마지막으로 앞으로 이런 문제를 어떻게 접근할지에 대한 간단한 정리를 하며 마치게 됩니다. Nonlinear transformation (continued) 지난...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/studies/error-and-noise/",
        "teaser": null
      },{
        "title": "Training versus Testing",
        "excerpt":"5장에서는 Training과 Testing이 어떻게 다른지 다루게 됩니다. 핵심은 2장에서 다루었던 Hypothesis의 수인 $M$을 어떻게 효과적으로 줄일 수 있는가 하는 것입니다. Outline 이번 장의 구성은 제목과 같이 Training에서 Testing으로 넘어가면서 생기는 문제에 대해 알아보고, Hypothesis의 수를 줄이기 위해 Dichotomies, Growth function 등의 개념을 설명합니다. 그 다음에는 예제를 통해 Growth function을 계산하는...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/studies/training-versus-testing/",
        "teaser": null
      },{
        "title": "Theory of Generalization",
        "excerpt":"6장에서는 지난 장에서 다루었던 $m_{\\mathcal{H}}$에 대한 증명들을 배우게 됩니다. 증명을 다루는 만큼, 이번 장은 가장 이론적인 내용을 담고 있습니다. 수학식이 많이 나오기 때문에 다소 지루할 수 있다는 것을 미리 말씀드립니다. Outline 이번 장의 증명은 크게 두 가지로 나뉘어 있습니다. 첫째는 $m_{\\mathcal{H}}$가 다항 함수인 것을 증명하는 것이고, 두 번째는 $m_{\\mathcal{H}}$가 Hoeffding’s...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/studies/theory-of-generalization/",
        "teaser": null
      },{
        "title": "VC Dimension",
        "excerpt":"7장에서는 지난 장 마지막에 배운 Vapnic-Chervonenkis (VC) Dimension에 대해 자세히 알아보겠습니다. Outline 이번 장은 4개의 소주제로 나뉘어 있습니다. 먼저 VC Dimension의 정의를 배우고, Perceptron에서의 VC Dimension이 어떻게 되는지 예제를 통해 알아봅니다. 세 번째로는 VC Dimension이 수학적으로/기계학습에서 어떤 의미를 가지는지 알아보고 마지막으로는 Hoeffding’s Inequality를 변형한 VC Inequality에서 각종 변수의 상한/하한점을 찾게...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/studies/VC-demension/",
        "teaser": null
      },{
        "title": "Bias-Variance Tradeoff",
        "excerpt":"8장에서는 Bias와 Variance에 대해 배웁니다. Bias-Variance는 지난 장에서 배운 VC 처럼 Error에 대해 분석하는 방법이지만, 직접적인 관련은 없으므로 VC를 제대로 이해하지 못하셨더라도 이번 장을 배우는 것에는 큰 무리가 없습니다. Outline 이번 장은 크게 2개의 소주제로 구성되어 있습니다. 먼저 Bias와 Variance가 무엇인지 배우고, 이것이 어떤 의지를 가지는지를 예제를 통해 설명합니다. 아무래도...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/studies/bias-variance-tradeoff/",
        "teaser": null
      },{
        "title": "Linear Model II",
        "excerpt":"9장은 3장에 이어서 선형 모델을 배우게 됩니다. 교재에서는 3장과 9장의 내용이 하나의 장으로 구성되어 있지만, 인터넷 강의에서는 이론적인 내용을 연속해서 다루기보다 중간에 구체적인 예시를 추가하기 위하여 두 장으로 나누었다고 합니다. 따라서 이번 장을 공부하기 전에 3장을 다시 한번 복습하시는 것을 추천합니다. Outline 3장에서 다루었던 것과 이번 장에서 다룰 것을 정리해봅시다....","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/studies/linear-models-2/",
        "teaser": null
      },{
        "title": "Neural Networks",
        "excerpt":"10장은 인공신경망(Neural Network)에 대해 배우게 됩니다. 현재 인공신경망 모델은 기계학습의 대세가 되어 많은 관심을 받고 있습니다. Outline 이번 장의 구성은 3개로 나뉘어 있습니다. 지난 장에서 배운 경사하강법(Gradient Descent)의 변형인 확률적 경사하강법(Stochastic Gradient Descent)를 배우고, 본격적인 인공신경망 모델에 대해서 배운 다음, 마지막으로 인공신경망 모델의 학습 알고리즘인 역전파(Backpropagation) 알고리즘을 배우게 됩니다. Stochastic...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/studies/neural-networks/",
        "teaser": null
      },{
        "title": "Overfitting",
        "excerpt":"11장은 Overfitting에 대해 배우게 됩니다. 단어의 뜻만 봐도 이게 무엇을 의미하는지 대충 알 수 있습니다. 예를 들면 옷 가게에서 Fitting Room은 옷이 자기한테 잘 맞는지를 확인하는 곳입니다. Fit의 의미는 맞다이고 Over는 무언가 과다한 상태의 형용사이기 때문에, Overfit은 과다하게 맞다라고 해석이 가능합니다. 기계학습에서 Overfitting도 이와 비슷한 의미입니다. Outline 이번 장의 구성은...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/studies/overfitting/",
        "teaser": null
      },{
        "title": "Regularization",
        "excerpt":"12장은 지난 시간에 배웠던 문제점인 Overfitting을 해결하는 방법 중 Regularization (정규화)에 대해 배우게 됩니다. Outline 이번 장에서는 먼저 직관적인 접근 방식으로 정규화가 무엇인지 알아보고, 그 후에 수학적인 방법으로 정규화가 정확하게 무엇인지 알아봅니다. 그 후 정규화에서 중요한 Weight Decay가 무엇인지 배운 다음, Regularizer를 선택하는 방법을 공부하게 됩니다. Regularization - informal 정규화에...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/studies/regularization/",
        "teaser": null
      },{
        "title": "Validation",
        "excerpt":"13장에서는 Overfitting을 해결하는 방법 중 Validation (검증)이라는 방법을 배우게 됩니다. Outline 이번 장은 Validation Set (검증 집합), Model Selection (모델 선택), Cross Validation (교차 검증) 순서대로 배우게 됩니다. Validation이 무엇인지 알지 못하는 지금은 소제목을 봐도 이해가 쉽지 않으니 일단 넘어가도록 합시다. The validation set 기본적으로 Out of Sample Error는 In...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/studies/validation/",
        "teaser": null
      },{
        "title": "Support Vector Machines",
        "excerpt":"14장은 새로운 기계학습의 방법인 Support Vector Machine을 배우게 됩니다. 지금처럼 Neural Network가 유명해지기 전까지는 가장 널리 쓰이던 방법이었습니다. Outline 이번 장은 Classification 문제에서 Margin을 최대화하는 것부터 시작해서, 그것을 찾는 해법, 그리고 Nonlinear Transform에 응용하는 방법까지를 다루게 됩니다. Maximizing the margin 먼저, 선형 분리가 가능한 데이터 집합이 있다고 가정해봅시다. 간단하게 표현하기...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/studies/support-vector-machines/",
        "teaser": null
      },{
        "title": "Kernel Methods",
        "excerpt":"15장은 Kernel Method를 배우게 됩니다. 지난 시간에 배웠던 Support Vector Machine에서 이어지는 내용입니다. Outline 이번 장은 크게 두 주제로 나뉘어 있습니다. 비선형 변환을 처리하기 위한 Kernel Trick이 무엇인지를 먼저 배우고, SVM의 방법 중 하나인 Soft-margin SVM을 배우게 됩니다. 두 주제가 서로 연관이 되어있지는 않지만, 두 주제 모두 비선형 문제를 해결하기...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/studies/kernel-methods/",
        "teaser": null
      },{
        "title": "Radial Basis Functions",
        "excerpt":"16장은 Radial Basis Function을 배우게 됩니다. 이것으로 데이터에 Label이 없는 Unsupervised Learning을 해결하는 방법을 배우게 됩니다. Outline 이번 장에서 다룰 내용은 총 4가지인데, 첫 번째 주제를 제외한 나머지는 짧게 다루기 때문에 분량은 다른 장들과 비슷합니다. 첫 번째로 Radial Basis Function 표준 모델을 배우고 Nearest Neighbors Algorithm과 비교합니다. 두 번째로는 Neural...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/studies/radial-basis-functions/",
        "teaser": null
      },{
        "title": "Three Learning Principles",
        "excerpt":"17장은 기계학습에서 중요한 3가지 원칙에 대해 소개합니다. Outline 각각의 주제는 이번 장의 제목과 같이 3가지 원칙을 하나씩 나열하고 있습니다. Occam’s Razor는 Learning Model과 관련이 있는 주제이고 Sampling Bias는 데이터 수집(Collecting), Data Snooping은 데이터 처리(Handling)에 관련이 있는 주제입니다. Occam’s Razor Occam’s Razor를 설명하기 전에, 먼저 아인슈타인의 말을 인용하면서 시작합니다. “데이터에 대한...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/studies/three-learning-principles/",
        "teaser": null
      },{
        "title": "Epilogue",
        "excerpt":"드디어 대망의 마지막 장입니다. 이번 장에서는 지금까지 배웠던 기계학습을 정리하고 강의에서 다루지 못했던 기계학습에 대해 간략하게 설명하고 마무리합니다. Outline 이번 장은 크게 4가지의 소주제로 이루어져 있습니다. 가장 먼저 지금까지 배운 기계학습을 간단하게 정리하고, 본 강의에서 다루지 못했던 기계학습 중 Baysian Learning과 Aggregation Methods를 간략하게 소개합니다. 마지막으로는 강의에 큰 도움을 줬던...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/studies/epilogue/",
        "teaser": null
      },{
        "title": "Prologue",
        "excerpt":"안녕하세요, 2022년에는 새로운 주제로 글을 써볼까 합니다. 예전부터 제가 공부하고 있던 강화학습(Reinforcement Learning) 내용을 정리해보고 싶었는데, 이런 저런 일들로 여건이 되지 않아 미루고 있었습니다. 한동안 다른 문제로 골머리를 썩히다가 이번에 논문 때문에 강화학습을 다시 공부할 일이 생겨 겸사겸사 내용을 정리하고자 합니다. 강화학습 포스트에 참고할 교재는 대부분 학교에서 널리 사용하고 있는...","categories": ["studies"],
        "tags": ["reinforcement learning"],
        "url": "/studies/prologue/",
        "teaser": null
      },{
        "title": "The Reinforcement Learning Problem",
        "excerpt":"사람은 여러 환경과 상호 작용하며 많은 것을 학습합니다. 맛있는 음식을 먹으면 기분이 좋다는 것을 통해 먹는 것을 좋아하게 되며 날카로운 것에 찔리고 나서는 날카로운 것을 멀리하게 되는 것이 그 예입니다. 이렇게 원인과 결과를 학습하게 되고 행동으로부터 어떤 결과가 나오는 지 알게 되며 목표를 달성하기 위해 무엇을 해야하는지 알게 됩니다. 이러한...","categories": ["studies"],
        "tags": ["reinforcement learning"],
        "url": "/studies/the-reinforcement-learning-problem/",
        "teaser": null
      },{
        "title": "Multi-armed Bandits",
        "excerpt":"Part I: Tabular Solution Methods 이 책은 크게 두 부분으로 나뉘어져 있습니다. 첫 번째는 강화학습에서 State와 Action을 Table에 정리하는 방법입니다. Table을 사용하는 Tabular Method는 대부분의 문제에서 Optimal Policy를 정확하게 찾을 수 있다는 것을 보장하지만 State의 집합과 Action의 집합이 Table을 사용할 수 있을만큼 충분히 작아야 한다는 단점이 있습니다. 두 번째는 Table을...","categories": ["studies"],
        "tags": ["reinforcement learning"],
        "url": "/studies/multi-armed-bandits/",
        "teaser": null
      },{
        "title": "Finite Markov Decision Processes",
        "excerpt":"이번 장에서는 이 책에서 해결하고자 하는 목표인 Finite Markov Decision Processes (Finite MDP)에 대해 소개합니다. $k$-armed bandit 문제에서는 즉각적인 Reward에 대한 피드백만 고려하였으나, MDP는 즉각적인 Reward와 더불어 이어지는 State와 미래에 받을 Reward 등을 모두 포함한 의사 결정이 필요합니다. 수식으로 표현하면 bandit 문제에서는 각각의 Action $a$에 대하여 $q_* (a)$를 추정하였으나, MDP에서는...","categories": ["studies"],
        "tags": ["reinforcement learning"],
        "url": "/studies/finite-markov-decision-processes/",
        "teaser": null
      },{
        "title": "Dynamic Programming",
        "excerpt":"Dynamic Programming은 Markov Decision Process (MDP)와 같이 완벽한 Environment Model이 주어졌을 때 Optimal Policy을 계산할 수 있는 알고리즘입니다. Dynamic Programming은 학부 알고리즘 수업에서도 다루는 중요한 알고리즘이지만, 완벽한 Model이 주어져야 한다는 가정과 막대한 계산 비용으로 인해 강화학습에 직접적으로 적용하기는 힘든 단점이 있습니다. 다만 Dynamic Programming으로 강화학습 문제를 해결하는 과정은 다른 강화학습...","categories": ["studies"],
        "tags": ["reinforcement learning"],
        "url": "/studies/dynamic-programming/",
        "teaser": null
      },{
        "title": "Monte Carlo Methods",
        "excerpt":"이번 장에서는 지난 장과 마찬가지로 가치 함수를 추정하고 최적의 정책을 찾기 위한 방법을 다루지만, 지난 장과는 달리 MDP에 대한 완전한 정보를 알고 있다고 가정하지 않습니다. Monte Carlo (몬테 카를로) 방법은 환경과의 상호 작용을 통해 얻은 경험을 기반으로 최적의 정책을 찾는 방법입니다. 이 때 환경과의 상호 작용은 실제로 이루어지는 경험 뿐만이...","categories": ["studies"],
        "tags": ["reinforcement learning"],
        "url": "/studies/monte-carlo-methods/",
        "teaser": null
      },{
        "title": "Temporal-Difference Learning",
        "excerpt":"이번 장은 강화학습의 핵심 아이디어인 시간차 학습(Temporal-Difference Learning ; TD Learning)을 다루게 됩니다. 시간차 학습은 환경에 대한 정확한 모델 없이 경험을 통해 학습한다는 몬테 카를로 아이디어와 최종 결과를 기다리지 않고(Bootstrapping) 학습된 다른 추정치를 기반으로 추정치를 업데이트한다는 동적 프로그래밍 아이디어를 결합하여 만들어졌습니다. 이번 장의 시작은 이전 장들과 같이 주어진 정책 $\\pi$에...","categories": ["studies"],
        "tags": ["reinforcement learning"],
        "url": "/studies/temporal-difference-learning/",
        "teaser": null
      },{
        "title": "n-step Bootstrapping",
        "excerpt":"이번 장에서는 5장에서 배운 몬테 카를로 방법과 6장에서 배운 시간차 방법을 융합하여 만든 새로운 방법을 소개합니다. 몬테 카를로 방법은 항상 에피소드가 끝난 후에야 학습이 가능했고, 시간차 방법은 1단계만 행동하면 학습이 가능했습니다. 그렇다면 그 사이의 단계인 $n$번째 단계까지 행동한 다음 학습을 하게 되면 조금 더 일반화된 학습이 가능하지 않을까라는 아이디어가 떠오르게...","categories": ["studies"],
        "tags": ["reinforcement learning"],
        "url": "/studies/n-step-bootstrapping/",
        "teaser": null
      }]
