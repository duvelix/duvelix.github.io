var store = [{
        "title": "Introduction",
        "excerpt":"안녕하세요, 오늘은 Machine Learning 카테고리에 대해 말씀드리려 합니다. 이 카테고리에는 제가 예전에 기계학습을 공부하며 이해한 내용을 정리하는 식으로 진행하려고 합니다. Textbook 작성된 글의 기반은 위의 사진에 나와있는 Learning From Data라는 교재입니다. 책의 저자이신 Abu-Mostafa 교수님은 칼텍 소속으로 실제로 Machine Learning 수업을 강의하실 때 이 교재를 사용하는 것으로 알고 있습니다. 강의자료는...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/studies/introduction/",
        "teaser": null
      },{
        "title": "The Learning Problem",
        "excerpt":"첫 번째 장은 어떤 것이 Learning Problem인가에 대해 설명하는 강의입니다. 타이틀 슬라이드의 오른쪽 아래를 보시면 무언가 기하학적인 모양이 나와있는 그림이 있는데, 저번 글과 비교해 보시면 교재 표지에 똑같은 그림이 나와있다는 것을 알 수 있습니다. 이 그림은 추후 또 나올 그림이니 기억해 두시길 바랍니다. 나중에 이 그림이 다시 나왔을 때 또...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/studies/the-learning-problem/",
        "teaser": null
      },{
        "title": "Is Learning Feasible?",
        "excerpt":"두 번째 장은 지난 장의 마지막 이슈였던 “학습은 가능한 것인가?” 라는 의문을 해결하는 강의입니다. Outline 이번 장은 총 4부분으로 구성되어 있습니다. 먼저 확률론적으로 예제를 통해 접근하고, 이를 기계학습과 연결하는 과정을 거칩니다. 하지만 이 과정에서 몇 가지의 문제가 생기는데, 이 원인과 그 해결책은 무엇인지까지 다루게 됩니다. Probability to the rescue 가장...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/studies/is-learning-feasible/",
        "teaser": null
      },{
        "title": "Linear Models I",
        "excerpt":"세 번째 장에서는 새로운 이슈인 선형 모델(Linear Model)에 대해서 알아보는 시간입니다. Introduction에서도 언급했었지만, 본 교재와 강의자료의 순서가 다른 부분이 조금 있는데, 오늘 할 Linear Models 부분이 바로 그런 부분입니다. 교재에서는 Linear Models 파트가 한 장으로 묶여 있는데, 강의에서는 두 부분으로 나누어 앞부분을 3장에 넣고, 뒷부분을 9장에 배치하였습니다. 왜 이렇게 만들었는가...","categories": ["studies"],
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
      }]
