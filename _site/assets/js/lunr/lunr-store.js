var store = [{
        "title": "Introduction",
        "excerpt":"안녕하세요, 오늘은 Machine Learning 카테고리에 대해 말씀드리려 합니다. 이 카테고리에는 제가 예전에 기계학습을 공부하며 이해한 내용을 정리하는 식으로 진행하려고 합니다. Textbook 작성된 글의 기반은 위의 사진에 나와있는 Learning From Data라는 교재입니다. 책의 저자이신 Abu-Mostafa 교수님은 칼텍 소속으로 실제로 Machine Learning 수업을 강의하실 때 이 교재를 사용하는 것으로 알고 있습니다. 강의자료는...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/ml/introduction/",
        "teaser": null
      },{
        "title": "The Learning Problem",
        "excerpt":"1장은 어떤 것이 Learning Problem인가에 대해 설명하는 강의입니다. 타이틀 슬라이드의 오른쪽 아래를 보시면 무언가 기하학적인 모양이 나와있는 그림이 있는데, 저번 글과 비교해 보시면 교재 표지에 똑같은 그림이 나와있다는 것을 알 수 있습니다. 이 그림은 추후 또 나올 그림이니 기억해 두시길 바랍니다. 나중에 이 그림이 다시 나왔을 때 또 언급하겠습니다. Outline...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/ml/the-learning-problem/",
        "teaser": null
      },{
        "title": "Is Learning Feasible?",
        "excerpt":"2장은 지난 장의 마지막 이슈였던 학습은 가능한 것인가? 라는 의문을 해결하는 강의입니다. Outline 이번 장은 총 4부분으로 구성되어 있습니다. 먼저 확률론적으로 예제를 통해 접근하고, 이를 기계학습과 연결하는 과정을 거칩니다. 하지만 이 과정에서 몇 가지의 문제가 생기는데, 이 원인과 그 해결책은 무엇인지까지 다루게 됩니다. Probability to the rescue 가장 먼저, 위...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/ml/is-learning-feasible/",
        "teaser": null
      },{
        "title": "Linear Models I",
        "excerpt":"3장에서는 새로운 이슈인 Linear Model (선형 모델)에 대해서 알아보는 시간입니다. Introduction에서도 언급했었지만, 본 교재와 강의자료의 순서가 다른 부분이 조금 있는데, 오늘 할 Linear Model 부분이 바로 그런 부분입니다. 교재에서는 Linear Model 파트가 한 장으로 묶여 있는데, 강의에서는 두 부분으로 나누어 앞부분을 3장에 넣고, 뒷부분을 9장에 배치하였습니다. 왜 이렇게 만들었는가 궁금했는데,...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/ml/linear-models-1/",
        "teaser": null
      },{
        "title": "Error and Noise",
        "excerpt":"4장에서는 Error와 Noise에 대해 알아보겠습니다. Outline 이번 장의 구성은 총 4개로 나뉩니다. 먼저 지난 장 마지막에 다루었던 Nonlinear Transformation에 대해 좀 더 이야기해보고, 다음으로 Error를 측정하는 방법, 그리고 Noise가 발생하는 이유와 모델에 적용하는 법, 마지막으로 앞으로 이런 문제를 어떻게 접근할지에 대한 간단한 정리를 하며 마치게 됩니다. Nonlinear transformation (continued) 지난...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/ml/error-and-noise/",
        "teaser": null
      },{
        "title": "Training versus Testing",
        "excerpt":"5장에서는 Training과 Testing이 어떻게 다른지 다루게 됩니다. 핵심은 2장에서 다루었던 Hypothesis의 수인 $M$을 어떻게 효과적으로 줄일 수 있는가 하는 것입니다. Outline 이번 장의 구성은 제목과 같이 Training에서 Testing으로 넘어가면서 생기는 문제에 대해 알아보고, Hypothesis의 수를 줄이기 위해 Dichotomies, Growth function 등의 개념을 설명합니다. 그 다음에는 예제를 통해 Growth function을 계산하는...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/ml/training-versus-testing/",
        "teaser": null
      },{
        "title": "Theory of Generalization",
        "excerpt":"6장에서는 지난 장에서 다루었던 $m_{\\mathcal{H}}$에 대한 증명들을 배우게 됩니다. 증명을 다루는 만큼, 이번 장은 가장 이론적인 내용을 담고 있습니다. 수학식이 많이 나오기 때문에 다소 지루할 수 있다는 것을 미리 말씀드립니다. Outline 이번 장의 증명은 크게 두 가지로 나뉘어 있습니다. 첫째는 $m_{\\mathcal{H}}$가 다항 함수인 것을 증명하는 것이고, 두 번째는 $m_{\\mathcal{H}}$가 Hoeffding’s...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/ml/theory-of-generalization/",
        "teaser": null
      },{
        "title": "VC Dimension",
        "excerpt":"7장에서는 지난 장 마지막에 배운 Vapnic-Chervonenkis (VC) Dimension에 대해 자세히 알아보겠습니다. Outline 이번 장은 4개의 소주제로 나뉘어 있습니다. 먼저 VC Dimension의 정의를 배우고, Perceptron에서의 VC Dimension이 어떻게 되는지 예제를 통해 알아봅니다. 세 번째로는 VC Dimension이 수학적으로/기계학습에서 어떤 의미를 가지는지 알아보고 마지막으로는 Hoeffding’s Inequality를 변형한 VC Inequality에서 각종 변수의 상한/하한점을 찾게...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/ml/VC-demension/",
        "teaser": null
      },{
        "title": "Bias-Variance Tradeoff",
        "excerpt":"8장에서는 Bias와 Variance에 대해 배웁니다. Bias-Variance는 지난 장에서 배운 VC 처럼 Error에 대해 분석하는 방법이지만, 직접적인 관련은 없으므로 VC를 제대로 이해하지 못하셨더라도 이번 장을 배우는 것에는 큰 무리가 없습니다. Outline 이번 장은 크게 2개의 소주제로 구성되어 있습니다. 먼저 Bias와 Variance가 무엇인지 배우고, 이것이 어떤 의지를 가지는지를 예제를 통해 설명합니다. 아무래도...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/ml/bias-variance-tradeoff/",
        "teaser": null
      },{
        "title": "Linear Model II",
        "excerpt":"9장은 3장에 이어서 선형 모델을 배우게 됩니다. 교재에서는 3장과 9장의 내용이 하나의 장으로 구성되어 있지만, 인터넷 강의에서는 이론적인 내용을 연속해서 다루기보다 중간에 구체적인 예시를 추가하기 위하여 두 장으로 나누었다고 합니다. 따라서 이번 장을 공부하기 전에 3장을 다시 한번 복습하시는 것을 추천합니다. Outline 3장에서 다루었던 것과 이번 장에서 다룰 것을 정리해봅시다....","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/ml/linear-model-2/",
        "teaser": null
      },{
        "title": "Neural Networks",
        "excerpt":"10장은 인공신경망(Neural Network)에 대해 배우게 됩니다. 현재 인공신경망 모델은 기계학습의 대세가 되어 많은 관심을 받고 있습니다. Outline 이번 장의 구성은 3개로 나뉘어 있습니다. 지난 장에서 배운 경사하강법(Gradient Descent)의 변형인 확률적 경사하강법(Stochastic Gradient Descent)를 배우고, 본격적인 인공신경망 모델에 대해서 배운 다음, 마지막으로 인공신경망 모델의 학습 알고리즘인 역전파(Backpropagation) 알고리즘을 배우게 됩니다. Stochastic...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/ml/neural-networks/",
        "teaser": null
      },{
        "title": "Overfitting",
        "excerpt":"11장은 Overfitting에 대해 배우게 됩니다. 단어의 뜻만 봐도 이게 무엇을 의미하는지 대충 알 수 있습니다. 예를 들면 옷 가게에서 Fitting Room은 옷이 자기한테 잘 맞는지를 확인하는 곳입니다. Fit의 의미는 맞다이고 Over는 무언가 과다한 상태의 형용사이기 때문에, Overfit은 과다하게 맞다라고 해석이 가능합니다. 기계학습에서 Overfitting도 이와 비슷한 의미입니다. Outline 이번 장의 구성은...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/ml/overfitting/",
        "teaser": null
      },{
        "title": "워드프레스를 시작했던 이유",
        "excerpt":"제가 블로그를 시작한 이유는 지금까지 공부했던 내용을 정리하기 위함이 목적이었습니다. 이공계 특성상 수학 수식이 거의 필수적으로 사용되는데, 티스토리에서는 LaTeX 문법 오류가 너무 잦았습니다. 특히 문법을 맞게 작성하더라도 아래 그림처럼 아예 작동조차 안하는 원인 모를 오류까지 자주 발생했습니다. 그렇기에 장기적으로 운영하기에는 티스토리 블로그가 맞지 않다고 생각하여 워드프레스 블로그로 이전하기로 결정했습니다. 예전에...","categories": ["studies"],
        "tags": ["wordpress"],
        "url": "/wordpress/introduction/",
        "teaser": null
      },{
        "title": "NameCheap에서 도메인 구입하기",
        "excerpt":"설치형 워드프레스를 시작하려고 하시는 분들이라면, 가장 먼저 도메인을 구매하시는 것이 좋습니다. 아무리 좋은 블로그 이름을 생각하였더라도 도메인이 선점되어 있다면 눈물을 머금고 이름을 바꿔야 하기 때문입니다. 저는 괜찮은 이름 몇 개를 생각해 놔서 한번 검색해 보았는데, 이미 선점되어 있었기 때문에 고민을 거듭한 끝에 KEEPMIND로 결정하였습니다. 도메인 이름을 정했다면 도메인을 어디서 구매할...","categories": ["studies"],
        "tags": ["wordpress"],
        "url": "/wordpress/buy-domain/",
        "teaser": null
      },{
        "title": "Regularization",
        "excerpt":"12장은 지난 시간에 배웠던 문제점인 Overfitting을 해결하는 방법 중 Regularization (정규화)에 대해 배우게 됩니다. Outline 이번 장에서는 먼저 직관적인 접근 방식으로 정규화가 무엇인지 알아보고, 그 후에 수학적인 방법으로 정규화가 정확하게 무엇인지 알아봅니다. 그 후 정규화에서 중요한 Weight Decay가 무엇인지 배운 다음, Regularizer를 선택하는 방법을 공부하게 됩니다. Regularization - informal 정규화에...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/ml/regularization/",
        "teaser": null
      },{
        "title": "SiteGround에서 웹 호스팅 서비스 구입하기",
        "excerpt":"지난 시간에 도메인을 구입했지만, 그것은 이름만을 구매한 것이기 때문에 워드프레스를 설치할 장소를 따로 구해주어야 합니다. 호스팅 서비스는 국내/외를 막론하고 많은 곳에서 제공하고 있고, 특히 워드프레스는 사용자가 많다보니 워드프레스에 맞춘 호스팅을 제공하는 업체도 상당히 많이 늘어났습니다. 워드프레스 공식 홈페이지에서는 블루호스트(Bluehost), 드림호스트(DreamHost), 그리고 사이트그라운드(SiteGround) 호스팅을 공식적으로 추천하고 있습니다. 저는 이 중 사이트그라운드의...","categories": ["studies"],
        "tags": ["wordpress"],
        "url": "/wordpress/buy-web-hosting/",
        "teaser": null
      },{
        "title": "Validation",
        "excerpt":"13장에서는 Overfitting을 해결하는 방법 중 Validation (검증)이라는 방법을 배우게 됩니다. Outline 이번 장은 Validation Set (검증 집합), Model Selection (모델 선택), Cross Validation (교차 검증) 순서대로 배우게 됩니다. Validation이 무엇인지 알지 못하는 지금은 소제목을 봐도 이해가 쉽지 않으니 일단 넘어가도록 합시다. The validation set 기본적으로 Out of Sample Error는 In...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/ml/validation/",
        "teaser": null
      },{
        "title": "도메인과 웹 호스팅 서버 연결하기",
        "excerpt":"지금까지 도메인과 웹 호스팅을 구매하였지만, 각각 다른 회사에서 구매하였기 때문에 도메인과 웹 호스팅을 연결해주는 작업이 필요합니다. 도메인과 웹 호스팅을 같이 구매하면 연결을 자동으로 해주는 곳도 있으나, 보통은 도메인은 가장 싼 곳, 웹 호스팅은 가장 안정적인 곳을 많이 사용합니다. 저는 네임칩(NameCheap)에서 도메인을 구입했기 때문에 네임칩을 기준으로 설명을 드리지만, 다른 곳에서 구매하셨더라도...","categories": ["studies"],
        "tags": ["wordpress"],
        "url": "/wordpress/connect-domain/",
        "teaser": null
      },{
        "title": "Support Vector Machines",
        "excerpt":"14장은 새로운 기계학습의 방법인 Support Vector Machine을 배우게 됩니다. 지금처럼 Neural Network가 유명해지기 전까지는 가장 널리 쓰이던 방법이었습니다. Outline 이번 장은 Classification 문제에서 Margin을 최대화하는 것부터 시작해서, 그것을 찾는 해법, 그리고 Nonlinear Transform에 응용하는 방법까지를 다루게 됩니다. Maximizing the margin 먼저, 선형 분리가 가능한 데이터 집합이 있다고 가정해봅시다. 간단하게 표현하기...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/ml/support-vector-machines/",
        "teaser": null
      },{
        "title": "워드프레스 기본 설정하기",
        "excerpt":"워드프레스 사용자가 점점 늘고 있다보니 최근 웹 호스팅 서비스에서는 워드프레스 설치 기능을 내장하는 경우가 많아졌습니다. 사이트그라운드(SiteGround)도 워드프레스를 간편하게 설치해주는 기능을 갖고 있습니다. 지난번에 웹 사이트를 만들 때 설치까지 끝냈지만, 제대로 사용하기 위해 워드프레스를 설정해보도록 하겠습니다. 먼저 사이트그라운드 홈페이지로 접속한 후, 로그인을 합니다. 그 후, 상단 메뉴의 Websites를 클릭합니다. 이 화면은...","categories": ["studies"],
        "tags": ["wordpress"],
        "url": "/wordpress/wordpress-setting/",
        "teaser": null
      },{
        "title": "Kernel Methods",
        "excerpt":"15장은 Kernel Method를 배우게 됩니다. 지난 시간에 배웠던 Support Vector Machine에서 이어지는 내용입니다. Outline 이번 장은 크게 두 주제로 나뉘어 있습니다. 비선형 변환을 처리하기 위한 Kernel Trick이 무엇인지를 먼저 배우고, SVM의 방법 중 하나인 Soft-margin SVM을 배우게 됩니다. 두 주제가 서로 연관이 되어있지는 않지만, 두 주제 모두 비선형 문제를 해결하기...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/ml/kernel-methods/",
        "teaser": null
      },{
        "title": "Newspaper 테마 구매 및 적용하기",
        "excerpt":"지난 시간에 워드프레스를 설치했습니다만, PHP 프로그래밍에 능숙한 분이 아니라면 워드프레스 테마를 직접 만들어서 운영하기 쉽지 않습니다. 그렇기 때문에 대부분의 사용자들은 전문가들이 제작한 워드프레스 테마를 사용하고 있습니다. 워드프레스 테마는 네이버 블로그나 티스토리 블로그의 스킨과 비슷하다고 생각하시면 됩니다. 워드프레스 테마는 크게 무료 테마와 유료 테마로 나눌 수 있습니다. 가벼운 블로그를 운영하실 계획이거나...","categories": ["studies"],
        "tags": ["wordpress"],
        "url": "/wordpress/buy-newspaper-theme/",
        "teaser": null
      },{
        "title": "Radial Basis Functions",
        "excerpt":"16장은 Radial Basis Function을 배우게 됩니다. 이것으로 데이터에 Label이 없는 Unsupervised Learning을 해결하는 방법을 배우게 됩니다. Outline 이번 장에서 다룰 내용은 총 4가지인데, 첫 번째 주제를 제외한 나머지는 짧게 다루기 때문에 분량은 다른 장들과 비슷합니다. 첫 번째로 Radial Basis Function 표준 모델을 배우고 Nearest Neighbors Algorithm과 비교합니다. 두 번째로는 Neural...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/ml/radial-basis-functions/",
        "teaser": null
      },{
        "title": "Newspaper 테마 데모 적용하기",
        "excerpt":"지난 시간에 Newspaper 테마를 구입하고, 적용하는 것까지 성공했습니다. 하지만 제대로 된 블로그를 만들기 위해서는 이것저것 건드려서 디자인을 해 주어야합니다. Newspaper 테마는 다행히도 tagDiv Composer라는 플러그인을 제공하여 초보자도 쉽게 화면을 꾸밀 수 있는 기능을 제공하고 있습니다. 그럼에도 불구하고 저처럼 워드프레스 자체가 처음인 사람은 그것조차도 쉽지 않습니다. 이런 경우에는 밑바닥부터 하나씩 만드는...","categories": ["studies"],
        "tags": ["wordpress"],
        "url": "/wordpress/newspaper-theme-demo/",
        "teaser": null
      },{
        "title": "Three Learning Principles",
        "excerpt":"17장은 기계학습에서 중요한 3가지 원칙에 대해 소개합니다. Outline 각각의 주제는 이번 장의 제목과 같이 3가지 원칙을 하나씩 나열하고 있습니다. Occam’s Razor는 Learning Model과 관련이 있는 주제이고 Sampling Bias는 데이터 수집(Collecting), Data Snooping은 데이터 처리(Handling)에 관련이 있는 주제입니다. Occam’s Razor Occam’s Razor를 설명하기 전에, 먼저 아인슈타인의 말을 인용하면서 시작합니다. “데이터에 대한...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/ml/three-learning-principles/",
        "teaser": null
      },{
        "title": "Envato Market 플러그인 설치하기",
        "excerpt":"워드프레스 유료 테마는 굉장히 자주 업데이트가 이루어집니다. Newspaper 같은 경우는 1년에 한번 정도 메이저 업데이트, 그 외에는 비정기적으로 마이너 업데이트가 제공됩니다. 테마를 업데이트하기 위해서는 FTP에 파일을 직접 업로드하는 것이 일반적인 방법인데, 이것이 여간 귀찮은 것이 아닙니다. (최근에는 자동 업데이트도 지원하긴 합니다) 다행히 Envato Market에서는 워드프레스 플러그인으로 이것을 편하게 해주는 방법을...","categories": ["studies"],
        "tags": ["wordpress"],
        "url": "/wordpress/install-envato-market-plugin/",
        "teaser": null
      },{
        "title": "Epilogue",
        "excerpt":"드디어 대망의 마지막 장입니다. 이번 장에서는 지금까지 배웠던 기계학습을 정리하고 강의에서 다루지 못했던 기계학습에 대해 간략하게 설명하고 마무리합니다. Outline 이번 장은 크게 4가지의 소주제로 이루어져 있습니다. 가장 먼저 지금까지 배운 기계학습을 간단하게 정리하고, 본 강의에서 다루지 못했던 기계학습 중 Baysian Learning과 Aggregation Methods를 간략하게 소개합니다. 마지막으로는 강의에 큰 도움을 줬던...","categories": ["studies"],
        "tags": ["machine learning"],
        "url": "/ml/epilogue/",
        "teaser": null
      },{
        "title": "Google Analytics 등록하기",
        "excerpt":"어떤 블로그를 운영하더라도 통계를 확인하는 일은 중요합니다. 왜냐하면 통계로부터 내 블로그가 어디에서 많이 유입되었는지를 분석하고, 그에 맞는 컨텐츠를 생산하는 것이 많은 방문자를 끌어모을 수 있기 때문입니다. 서비스형 블로그는 보통 이러한 기능을 자체적으로 내장하고 있습니다. 이전에 운영하던 티스토리 블로그 또한 아래와 같이 방문자 통계와 함께 유입 경로를 보여주고 있습니다. 하지만 설치형...","categories": ["studies"],
        "tags": ["wordpress"],
        "url": "/wordpress/regist-google-analytics/",
        "teaser": null
      },{
        "title": "Yoast SEO 플러그인 설치하기",
        "excerpt":"어떤 웹 사이트를 만들더라도 방문자를 많이 유치하는 것은 중요합니다. 새로운 방문자를 유치하기 위해서는 무엇보다 포털 사이트에서 검색이 잘 되어야 합니다. 검색 엔진 상위에 뜨기 위해서는 웹 사이트를 검색 엔진에 최적화 시켜주어야 하는데, 이것을 Search Engine Optimization (SEO)이라고 합니다. 워드프레스는 SEO에 유리한 구조를 갖고 있지만, 그것만을 마냥 믿을 수는 없습니다. 특히...","categories": ["studies"],
        "tags": ["wordpress"],
        "url": "/wordpress/install-yoast-plugin/",
        "teaser": null
      },{
        "title": "Introduction",
        "excerpt":"안녕하세요, 오늘은 새로운 카테고리를 하나 시작해볼까 합니다. 바로 Java 언어인데요, 저는 학부 시절 자바 수업을 듣기도 했고 대학원에서도 이 과목 조교를 2번이나 했으나 연구실에서 주로 쓰는 언어가 아니다보니 까먹은 내용이 너무 많아 복습할 겸 정리하고자 합니다. Java 언어는 많은 대학교에서 저학년에 가르치는 언어입니다. 최근에는 Python의 등장으로 선택 과목 정도로 비중이...","categories": ["studies"],
        "tags": ["java"],
        "url": "/java/introduction/",
        "teaser": null
      },{
        "title": "Google Search Console 등록하기",
        "excerpt":"힘들게 블로그를 만들었으면, 이제 방문자를 유치할 방법을 찾아야합니다. 구글이나 네이버 등의 검색엔진은 굳이 사이트를 등록하지 않아도 시간이 지나면 검색이 가능하지만, 자신의 사이트를 직접 등록하게 되면 좀 더 효과적으로 검색 결과에 노출이 될 수 있습니다. 모든 검색 엔진에 각각 등록하는 과정을 거쳐야 하기 때문에 약간은 귀찮은 작업이긴 합니다. 가장 먼저 오늘은...","categories": ["studies"],
        "tags": ["wordpress"],
        "url": "/wordpress/regist-google-search-console/",
        "teaser": null
      },{
        "title": "JDK 설치하기",
        "excerpt":"Java 언어를 사용하기 위해서는 가장 먼저 JDK (Java Development Kit)를 설치해야 합니다. 쉽게 말하자면 컴퓨터에서 Java 언어를 컴파일하기 위한 도구입니다. Java 언어는 썬 마이크로시스템즈가 개발했지만, 현재는 오라클에서 인수했기 때문에 Java 관련 도구들은 오라클 공식 홈페이지에서 받아야 합니다. Oracle JDK 설치하기 먼저 Oracle 홈페이지의 Download 페이지로 접속합니다. 아래의 Developer Downloads 항목을 보시면...","categories": ["studies"],
        "tags": ["java"],
        "url": "/java/install-jdk/",
        "teaser": null
      },{
        "title": "네이버, 다음 검색 엔진 등록하기",
        "excerpt":"지난 시간에 구글 서치 콘솔을 사용하여 구글에 사이트가 검색될 수 있도록 등록하였습니다. 하지만 아직도 한국에서 네이버와 다음의 점유율은 낮지 않기 때문에 이곳에서도 사이트가 검색되어야 더 많은 방문자를 모을 수 있습니다. 그렇기 때문에 오늘은 네이버와 다음에서 자신의 웹 사이트를 등록해보도록 하겠습니다. 네이버 서치 어드바이저 등록하기 구글에 사이트를 등록했던 것과 마찬가지로, 네이버에...","categories": ["studies"],
        "tags": ["wordpress"],
        "url": "/wordpress/regist-search-engine/",
        "teaser": null
      },{
        "title": "네이버 서치 어드바이저 수동 크롤링하기",
        "excerpt":"지난 시간에 네이버 서치 어드바이저를 통해 자신의 웹 사이트를 네이버 검색에 노출되도록 설정했습니다. 네이버 검색에 노출되기 위해서는 사이트의 모든 글이 네이버 서치 어드바이저에 의해 크롤링되어야 하는데, 저는 어떤 문제인지 몰라도 1주일째 단 1개의 글도 크롤링되지 않았습니다. 이런 경우에는 수동으로 일일이 작업을 해주어야 하는데, 혹시 저와 같은 문제가 발생한 분들을 위해...","categories": ["studies"],
        "tags": ["wordpress"],
        "url": "/wordpress/naver-webpage-collection/",
        "teaser": null
      },{
        "title": "Google Analytics에서 관리자 IP 제외하기",
        "excerpt":"지난번에 워드프레스 사이트를 구글 애널리틱스에 등록하여 방문 통계를 측정하는 방법을 알아봤습니다. 만약 워드프레스 사이트에 구글 애널리틱시를 등록하는 방법이 궁금하시다면 아래의 포스트를 참고하시기 바랍니다. [WordPress] 구글 애널리틱스 등록하기 구글 애널리틱스에 등록만 해도 기본적인 통계는 확인할 수 있지만, 관리자의 IP 주소를 필터링하지 않는다면 자신이 접속한 기록도 통계에 반영되기 때문에 정확한 통계를 알...","categories": ["studies"],
        "tags": ["wordpress"],
        "url": "/wordpress/exclude-admin-ip/",
        "teaser": null
      },{
        "title": "IDE 설치하기",
        "excerpt":"지난 시간에 Java 언어를 사용하기 위해서 JDK를 설치하였습니다. Java 언어를 코딩할 때 메모장이나 EditPlus 같은 간단한 문서 편집 프로그램을 사용해도 되지만, 지원하는 기능이 많지 않다보니 그렇게 추천하는 환경은 아닙니다. 다른 언어도 마찬가지이지만, 가급적이면 코딩을 할 때는 IDE에서 하시는게 좋습니다. IDE는 Integrated Development Environment (통합 개발 환경)이라는 뜻입니다. IDE는 프로그램마다 조금씩...","categories": ["studies"],
        "tags": ["java"],
        "url": "/java/install-ide/",
        "teaser": null
      },{
        "title": "Google Analytics와 Search Console 연결하기",
        "excerpt":"이전 포스트에서 구글 애널리틱스와 서치 콘솔 세팅 방법을 설명드린 바 있습니다. 구글 애널리틱스는 사이트의 방문 통계를 제공하고, 서치 콘솔은 사이트가 검색이 더 잘되도록 도와줍니다. 구글 애널리틱스와 서치 콘솔 모두 구글의 서비스이기 때문에, 이 둘을 연결함으로써 더 발전된 서비스를 받을 수 있습니다. 예를 들어, 사용자가 구글 검색으로 사이트를 방문한 경우, 어떤...","categories": ["studies"],
        "tags": ["wordpress"],
        "url": "/wordpress/connect-analytics-search-console/",
        "teaser": null
      },{
        "title": "Introduction",
        "excerpt":"Git이란? Git은 리누스 토르발즈가 만든 버전 관리 시스템(Version Control System)입니다. 버전 관리 시스템이 필요한 이유는, 여러 명이 하나의 프로그램을 개발할 때, 각각의 프로그래머가 어떤 부분을 수정했는지 쉽게 확인할 수 있기 때문입니다. 물론 협업할 때 뿐만이 아니라 혼자 개발할때도 유용합니다. 예를 들어, 저같은 경우는 연구실에서 코드를 작성하다가 퇴근 후 굳이 소스를...","categories": ["studies"],
        "tags": ["git"],
        "url": "/git/introduction/",
        "teaser": null
      },{
        "title": "JetPack 플러그인 설치하기",
        "excerpt":"오늘은 워드프레스 플러그인 중 하나인 Jetpack을 설치하는 법을 설명하려고 합니다. Jetpack은 워드프레스에서 공식으로 제공하는 플러그인으로, 워드프레스에서 기본적으로 제공하지 않는 보안 설정이나 사이트 관리 도구를 모아놓은 플러그인입니다. 워드프레스에서 공식으로 제공하기 때문에 기본적으로 한글이 지원되며, 무료 서비스와 유료 서비스로 나뉘어 있습니다. 무료 서비스에서도 기본적인 기능은 제공하지만, 자동 백업이나 스팸 필터링 등의 서비스를...","categories": ["studies"],
        "tags": ["wordpress"],
        "url": "/wordpress/install-jetpack-plugin/",
        "teaser": null
      },{
        "title": "Git 설치하기",
        "excerpt":"Git 및 GitHub를 사용하기 위해서는 먼저 Git을 설치해주어야 합니다. Git을 설치하는 방법은 그렇게 어렵지 않지만, Windows 환경과 Mac 환경이 조금 다르기 때문에 각각 다른 환경에서 설치하는 방법을 보여드릴 예정입니다. 이번 포스트에서는 Git을 설치하고, 사용자 등록까지 하는 과정을 다루려고 합니다. Git 설치하기 Git을 설치하기 위해서는 Git 공식 홈페이지에 방문해야 합니다. 홈페이지에...","categories": ["studies"],
        "tags": ["git"],
        "url": "/git/install-git/",
        "teaser": null
      },{
        "title": "Google AdSense 설정하기",
        "excerpt":"구글 애드센스는 구글에서 컨텐츠 제공자들이 수익을 얻을 수 있게 만드는 광고 게제 서비스입니다. 구글 계정을 통해 가입하여, 제공 받은 광고 태그를 블로그나 유튜브에 삽입하면 방문자들이 광고를 보거나 클릭한 수에 따라 보수가 지급되는 방식입니다. 국내에서 많은 블로거가 사용하는 네이버 블로그는 구글 애드센스 광고를 삽입할 수 없기 때문에 몇 년 전만 해도...","categories": ["studies"],
        "tags": ["wordpress"],
        "url": "/wordpress/setting-google-adsense/",
        "teaser": null
      },{
        "title": "Newspaper 테마에 Google AdSense 광고 삽입하기",
        "excerpt":"지난 포스트에서 구글 애드센스에 가입하고, 광고 게제 승인을 받은 후 ads.txt를 업로드하는 과정까지 마쳤습니다. 혹시 이 포스트를 보실 때, 이 과정을 아직 끝내지 않으신 분은 먼저 아래의 포스트를 참고해주시기 바랍니다. [WordPress] Google AdSense 설정하기 이번 포스트에서는 구글 애드센스 광고를 워드프레스 사이트에 게제하는 법을 알아보겠습니다. 광고 게제 방법에는 여러 가지가 있지만,...","categories": ["studies"],
        "tags": ["wordpress"],
        "url": "/wordpress/setup-newspaper-adsense/",
        "teaser": null
      },{
        "title": "GitHub 가입하기",
        "excerpt":"Git을 제대로 사용하기 위해서는 원격 저장소가 필요합니다. 원격 저장소를 사용하지 않더라도 Git 기능을 사용할 수는 있지만, 이 경우 다른 컴퓨터에서 작업을 이어 하는 것도 귀찮아지고 무엇보다 남들에게 자신의 결과물을 공개할 수 없습니다. 대표적인 원격 저장소로는 이번 포스트에서 소개할 GitHub가 있습니다. Git 원격 저장소로는 GitHub 외에도 GitLab 등 다른 곳도 몇몇...","categories": ["studies"],
        "tags": ["git"],
        "url": "/git/join-github/",
        "teaser": null
      },{
        "title": "워드프레스에서 수식 입력하기",
        "excerpt":"저처럼 공학을 주제로 한 블로그에서는 수식을 사용할 일이 많습니다. 다만 대부분의 플랫폼에서는 전문적인 지식을 다루는 블로거가 많지 않다보니 수식 입력을 기본으로 지원하지 않습니다. 네이버 블로그나 티스토리 블로그 같은 서비스형 블로그에서는 스크립트를 이용하여 수식 입력을 할 수 있지만, 제가 사용해본 결과 로딩 시간도 긴데다 원인 모를 이유로 수식이 제대로 보이지 않는...","categories": ["studies"],
        "tags": ["wordpress"],
        "url": "/wordpress/wordpress-type-formula/",
        "teaser": null
      },{
        "title": "Commit과 Push 하기",
        "excerpt":"지난 시간에 GitHub에 가입하고, 원격 저장소를 만드는 것까지 다루었습니다. 오늘은 로컬 저장소에서 Commit을 하는 방법과 로컬 저장소의 내용을 원격 저장소에 옮기는 Push 방법을 소개하도록 하겠습니다. Commit 커밋(Commit)은 버전 관리 시스템에서 변경 사항을 반영 시키는 것을 뜻합니다. 예를 들어, 자신이 현재 1.0 버전을 작업하고 있는데, 아무리 많은 부분을 수정하였더라도 커밋을 하지...","categories": ["studies"],
        "tags": ["git"],
        "url": "/git/commit-and-push/",
        "teaser": null
      },{
        "title": "가입형 워드프레스 시작하기",
        "excerpt":"저는 워드프레스 입문을 설치형 워드프레스로 시작했지만, 서비스형 블로그에 익숙하신 분들은 번거로운 초기 세팅으로 인해 설치형 워드프레스를 꺼리는 경우가 많습니다. 특히 아무리 간단한 블로그를 만들더라도 직접 웹 호스팅 서비스를 신청하고, 워드프레스 설치 파일을 업로드하기 위해 FTP를 어느정도 사용할 줄 알아야 하기 때문입니다. 그렇기 때문에 쉽게 워드프레스에 입문하는 하나의 대안으로, 가입형 워드프레스가...","categories": ["studies"],
        "tags": ["wordpress"],
        "url": "/wordpress/start-wordpress.com/",
        "teaser": null
      },{
        "title": "Branch 만들기",
        "excerpt":"프로젝트를 하다 보면 프로그램에서 새로운 기능을 추가하거나 실험을 해보고 싶을 때가 있습니다. 이 때는 원본 프로그램을 직접 수정하기 보다 원본 프로그램을 복사하여 먼저 테스트해보고, 괜찮다고 생각되면 원래 프로그램에 추가하는 것이 훨씬 안전한 방법입니다. 만약에 Git 같은 버전 관리 시스템을 쓰지 않는다면 프로젝트 폴더를 통째로 복사해서 이런 과정을 거쳐야 하지만, Git에서는...","categories": ["studies"],
        "tags": ["git"],
        "url": "/git/create-branch/",
        "teaser": null
      },{
        "title": "가입형 워드프레스에서 테마 적용하기",
        "excerpt":"지난 포스트에서 가입형 워드프레스를 시작하는 과정을 다루었습니다. 설치형 워드프레스와 마찬가지로, 가입형 워드프레스도 물론 테마를 변경할 수 있습니다. 관리자 페이지의 인터페이스가 조금 다르긴 하지만, 변경하는 과정이 어렵지는 않습니다. 가입형 워드프레스의 관리자 화면입니다. 보시다시피 설치형 워드프레스의 인터페이스와는 약간의 차이가 있습니다. 왼쪽에 있는 메뉴에서 디자인을 클릭하면 서브 메뉴가 펼쳐지는데, 이 중 테마 항목을...","categories": ["studies"],
        "tags": ["wordpress"],
        "url": "/wordpress/wordpress.com-theme/",
        "teaser": null
      },{
        "title": "Branch 병합하기",
        "excerpt":"지난 포스트에서 브랜치가 무엇인지 알아보고, 어떻게 만드는지도 알아보았습니다. 만약 브랜치에서 추가한 기능을 원래의 프로젝트(마스터 브랜치)에 반영하고 싶을 때는 굳이 마스터 브랜치를 직접 수정할 필요 없이, 병합(Merge)라는 기능을 통해 간단하게 해결할 수 있습니다. 브랜치 병합하기 브랜치를 병합하려면 먼저 마스터 브랜치 외의 다른 브랜치가 있어야 합니다. 저는 지난 포스트에서 만들었던 another 브랜치를...","categories": ["studies"],
        "tags": ["git"],
        "url": "/git/merge-branch/",
        "teaser": null
      },{
        "title": "전문연구요원 훈련소 후기 - Prologue",
        "excerpt":"훈련소를 수료하고 돌아온지도 거의 열흘이 지났습니다. 그 동안 밀려있던 일들을 처리하기도 하고 오랜만에(?) 느낀 사회의 자유를 즐기느라 포스트를 작성하지 못했습니다. 당분간은 정기적으로 작성해던 포스트의 주제보다 앞으로 가실 분들을 위해 후기와 팁 같은 것들을 정리해서 올려볼까 합니다. 까먹기 전에 정리할 목적도 있기 때문에 가급적이면 자세하게 작성할 예정입니다. 모든 내용을 하나의 포스트에...","categories": ["interests"],
        "tags": ["katc"],
        "url": "/katc/boot-camp-0/",
        "teaser": null
      },{
        "title": "전문연구요원 훈련소 후기 - 1주차",
        "excerpt":"지난 포스트에 이어서 입영심사대부터 1주차 일정을 자세히 적어보도록 하겠습니다. 입영심사대로 가면 사람이 굉장히 많습니다. 인파를 조금만 헤치고 들어가면 주차장 근처부터 조교들이 입영자 외에는 입장할 수 없게 통제합니다. 조교들이 통제하는 지역을 넘어가면 그 때부터 핸드폰을 꺼낼 수 없으므로 할 말이 있다면 미리 하고 들어가는 것이 좋습니다. 그 후에는 조교들의 통제를 받아...","categories": ["interests"],
        "tags": ["katc"],
        "url": "/katc/boot-camp-1/",
        "teaser": null
      },{
        "title": "전문연구요원 훈련소 후기 - 2주차",
        "excerpt":"1주차가 끝나면 본격적으로 훈련이 시작됩니다. 사실 1주차에서의 훈련(?)은 훈련 느낌이 제대로 들지 않는데, 2주차부터는 정말 군인같은 훈련들이 이어져 있기 때문에 기대하셔도 좋습니다. 2주차의 메인 훈련은 사격술입니다. 일주일 내내 사격을 한다고 생각하시면 됩니다. 교관에게 듣기로는 원래 이렇게 총을 많이 쏘지는 않았다고 하던데, 어느 순간부터 사격의 비중을 늘리라는 지침이 내려와서 현역/보충역을 막론하고...","categories": ["interests"],
        "tags": ["katc"],
        "url": "/katc/boot-camp-2/",
        "teaser": null
      },{
        "title": "전문연구요원 훈련소 후기 - 3주차",
        "excerpt":"훈련소 생활 3주차를 맞이하게 되면 슬슬 훈련소 일정에 적응이 됩니다. 일과표를 보지 않아도 하루 일과를 대충 꿰고 있으며, 오늘은 이정도 하고 쉬겠구나~ 하는 감이 슬슬 올 때입니다. 게다가 드디어 절반이 지나갔다는 생각에 안도감이 들기도 합니다. 문제는 본격적인 훈련은 이제 시작이라는 겁니다. 사실 시간만 2주가 지나갔을 뿐, 제대로 된 훈련은 사격술...","categories": ["interests"],
        "tags": ["katc"],
        "url": "/katc/boot-camp-3/",
        "teaser": null
      },{
        "title": "전문연구요원 훈련소 후기 - 4주차",
        "excerpt":"4주차는 훈련소에서 보내는 마지막 주입니다. 이때쯤이면 달력에 매직으로 X표를 칠 날이 얼마 남지 않았고, 슬슬 좀있으면 다시 사회로 돌아가겠구나라는 생각이 듭니다. 지금까지는 수료일까지 날짜를 셌다면, 이제는 시간 단위로 세는 시기가 옵니다. 분대장과 교관들도 이제 곧 나갈 사람임을 알기에, 대놓고 군기를 위반하지만 않는다면 크게 터치하지 않습니다. 이 때부터 훈련소 금기사항을 어기는...","categories": ["interests"],
        "tags": ["katc"],
        "url": "/katc/boot-camp-4/",
        "teaser": null
      },{
        "title": "Xcode에서 Git 사용하기",
        "excerpt":"안녕하세요, 오늘은 Xcode에서 Git을 사용하는 방법을 소개해드리도록 하겠습니다. Xcode는 macOS의 IDE (Integrated Development Environment) 입니다. Windows에서는 공식적인 C 컴파일러가 존재하지 않고, 리눅스는 개인용 컴퓨터에서 잘 사용하지 않기 때문에 컴퓨터공학 전공자라면 Xcode를 많이 사용합니다. C 언어 뿐만이 아니라 C++, Python 등의 언어도 지원하고, 무엇보다 iOS 앱을 프로그래밍하기 위해서는 반드시 사용해야 하는...","categories": ["studies"],
        "tags": ["git"],
        "url": "/git/xcode-git/",
        "teaser": null
      },{
        "title": "전문연구요원 훈련소 후기 - 식사 및 부식",
        "excerpt":"지난 포스트들을 통해 훈련소에서의 일정을 모두 소개했습니다. 이번 포스트부터는 훈련소 생활에서 궁금하실 사항들을 주제별로 정리해서 알려드리겠습니다. 첫 포스트는 먼저 훈련소에서의 식사 및 부식에 관한 이야기입니다. 훈련소의 식사 메뉴 (출처 : 서울신문) 아마 많은 분들이 가장 궁금해하실 사항일 것입니다. 군필자들이 공통적으로 하는 말이 군대 식사는 맛이 없다, 메뉴는 태반이 콩나물이라 질리도록...","categories": ["interests"],
        "tags": ["katc"],
        "url": "/katc/boot-camp-meal/",
        "teaser": null
      },{
        "title": "전문연구요원 훈련소 후기 - 불침번 및 전우조",
        "excerpt":"전문연구요원 훈련소 에필로그에서는 그동안 풀지 못했던 궁금해할만한 내용들은 하나씩 소개해드리는 포스트입니다. 지난 에필로그에서는 훈련소에서의 식사와 부식 등 먹는 이야기 위주로 이야기했는데, 오늘은 불침번과 전우조 시스템에 대해서 소개해보도록 하겠습니다. 불침번 (출처 : https://armynuri.tistory.com) 불침번은 다른 훈련병들이 자고 있을때 사고가 나지 않도록 감시하는 역할입니다. 불침번은 소대별로 순서가 돌아가며, 각 소대의 생활관 입구에서...","categories": ["interests"],
        "tags": ["katc"],
        "url": "/katc/boot-camp-vigil/",
        "teaser": null
      },{
        "title": "Introduction",
        "excerpt":"안녕하세요, 오랜만에 새로운 카테고리를 하나 시작할까 합니다. 그 동안 훈련소의 공백 때문에 밀려있는 일과, 학과에서 새로 진행중인 사업 제안서를 작성하느라 블로그에 공부 관련 글을 작성할 시간이 없었습니다. 작년에 블로그를 만들었을 때는 이맘때쯤 공부 관련 카테고리에 글이 한가득 있을 것이라 생각했는데, 계획대로 잘 되지 않았네요. 앞으로는 틈틈히 최대한 짬을 내서 원래의...","categories": ["studies"],
        "tags": ["data structure"],
        "url": "/ds/introduction/",
        "teaser": null
      },{
        "title": "Java Programming Basics (1)",
        "excerpt":"A “Hello, World!” Program Java는 객체 지향 프로그래밍(Object Oriented Programming) 언어입니다. 이것은 Java의 모든 것들은 객체(Object)로 이루어져 있다는 뜻입니다. 객체라는 것은 클래스(Class)의 인스턴스(Instance)를 의미합니다. 이해를 돕기 위해, Java IDE를 설치할 때 테스트했던 HelloWorld 프로그램을 예로 들어보겠습니다. 1 2 3 4 5 6 public class Main { public static void main(String[]...","categories": ["studies"],
        "tags": ["java"],
        "url": "/java/java-programming-basics-1/",
        "teaser": null
      },{
        "title": "전문연구요원 훈련소 후기 - 에필로그",
        "excerpt":"이번 포스트는 길고 길었던 전문연구요원 후기글의 마지막 포스트입니다. 지금까지 얘기하지 못했던 것 중 알고 있으면 좋을 만한 것들을 하나하나 정리해서 소개하도록 하겠습니다. 빨래 (출처 : 국방TV) 주어진 속옷, 양말과 티셔츠는 3벌밖에 없기 때문에 하루에 하나씩 입는다면 최소한 3일에 한번씩은 빨래를 해야합니다. 물론 이게 귀찮다고 속옷을 며칠씩이나 입는 훈련병도 있었지만, 아무래도...","categories": ["interests"],
        "tags": ["katc"],
        "url": "/katc/boot-camp-epilogue/",
        "teaser": null
      },{
        "title": "Basic Concepts (1)",
        "excerpt":"Goals 자료구조 교재의 첫 시작은 이 과목의 목적이 무엇인지, 왜 배우는지에 대한 설명이 나와 있습니다. 원문은 그대로 옮기면 다음과 같습니다. To provide the tools and techniques necessary to design and implement large-scale computer systems. 해석하면, 규모가 큰 컴퓨터 시스템을 디자인하고 구현하는데 필요한 도구와 기술을 제공하는 것입니다. 구체적으로는 이번 시간에는 데이터...","categories": ["studies"],
        "tags": ["data structure"],
        "url": "/ds/basic-concepts-1/",
        "teaser": null
      },{
        "title": "Java Programming Basics (2)",
        "excerpt":"String 문자열(String)은 문자(Character)를 나열한 자료형입니다. 정확히는 자료형이라기보단 String이라는 클래스로 존재합니다. 문자열 변수를 선언하게 되면, String 클래스의 객체로 선언되는 것과 동일하다는 의미입니다. String 클래스는 자바의 기본 라이브러리에 존재하는 클래스이기 때문에 미리 구현되어 있는 여러 가지 기능이 존재합니다. 대표적으로, +를 사용해 문자열을 연결할 수 있습니다. 1 2 3 4 5 6 7...","categories": ["studies"],
        "tags": ["java"],
        "url": "/java/java-programming-basics-2/",
        "teaser": null
      },{
        "title": "Basic Concepts (2)",
        "excerpt":"Data Abstraction C언어의 기본 데이터 타입(Data Type)은 int, float, char, … 등이 있습니다. 이러한 기본 데이터 타입을 그룹화하여 배열(Array)과 구조체(Structure)라는 방법으로 데이터 타입을 표현할 수도 있습니다. 그런데 데이터 타입의 명확한 정의는 무엇일까요? 교재에는 다음과 같이 정의하고 있습니다. Definition  A data type is a collection of objects and a set of...","categories": ["studies"],
        "tags": ["data structure"],
        "url": "/ds/basic-concepts-2/",
        "teaser": null
      },{
        "title": "Classes, Variables, and Methods",
        "excerpt":"Java: An Object-Oriented Language 3장에서도 언급했듯이 Java에서는 대부분이 객체로 이루어져 있습니다. 객체를 처음 설명드릴 때 클래스의 인스턴스가 객체라고 말씀드렸는데, 어떻게 보면 클래스 또안 객체의 타입이라고 볼 수 있습니다. 그렇다면 가장 먼저 클래스가 무엇인지 다음 예제를 보며 설명하도록 하겠습니다. 1 2 3 4 5 6 7 8 9 10 11 12...","categories": ["studies"],
        "tags": ["java"],
        "url": "/java/classes-variables-and-methods/",
        "teaser": null
      },{
        "title": "Basic Concepts (3)",
        "excerpt":"Asymptotic Notation 지난 포스트에서 시간 복잡도를 계산할 때, 프로그램 단계 수를 체크하여 실행 시간을 계산하였습니다. 이러한 계산의 목적은 같은 기능을 가진 다른 프로그램의 시간 복잡도를 비교하거나, 인스턴스 특성이 변화함에 따라 실행 시간이 어떻게 변하는지를 알아보기 위함이었습니다. 하지만 단순히 프로그램의 단계 수로 실행 시간을 계산하는 것은 정확하지 않을 가능성이 높습니다. 왜냐하면...","categories": ["studies"],
        "tags": ["data structure"],
        "url": "/ds/basic-concepts-3/",
        "teaser": null
      },{
        "title": "Abstraction using Interfaces",
        "excerpt":"Four Principles of Objected Oriented Programming Java를 포함한 객체 지향 프로그래밍의 공통점으로는 캡슐화(Encapsulation), 추상화(Abstraction), 상속(Inheritance), 다형성(Polymorphism) 4가지 원칙이 있다는 것입니다. 캡슐화에 대해서는 지난 시간에 다루었기 때문에 여기서는 생략하도록 하겠습니다. 캡슐화에 대해서는 아래 포스트를 참고하시기 바랍니다. [Java] 5. Classes, Variables, and Methods 추상화는 복잡한 자료, 모듈, 시스템 등으로부터 핵심적인 개념 또는...","categories": ["studies"],
        "tags": ["java"],
        "url": "/java/abstraction-using-interfaces/",
        "teaser": null
      },{
        "title": "Inheritance",
        "excerpt":"Four Principles of Objected Oriented Programming 지금까지 객체 지향 프로그래밍에서의 4가지 요소인 캡슐화(Encapsulation), 추상화(Abstraction), 상속(Inheritance), 다형성(Polymorphism)을 소개하고, 그 중 캡슐화와 추상화에 대해 자세히 알아보았습니다. Java 언어에서 추상화는 인터페이스를 통해 구현되어, 인터페이스의 사용법과 그 응용법을 다뤘습니다. 오늘은 나머지 요소 중 하나인 상속에 대해 배우게 됩니다. 상속은 이전 챕터에서 설명드린바와 같이 두...","categories": ["studies"],
        "tags": ["java"],
        "url": "/java/inheritance/",
        "teaser": null
      },{
        "title": "File Input & Output",
        "excerpt":"File Output : FileOutputStream 먼저 Java에서 파일 출력 방법을 알아보겠습니다. 코드를 보여드리면서 설명하는 것이 편할 것 같아, 파일 출력의 예제 코드를 보여드리고 한 줄씩 설명하도록 하겠습니다. 아래 프로그램은 Hello World!라는 문장이 들어있는 output.txt 파일을 생성하는 프로그램입니다. 1 2 3 4 5 6 7 8 9 10 11 12 import java.io.FileOutputStream;...","categories": ["studies"],
        "tags": ["java"],
        "url": "/java/file-input-and-output/",
        "teaser": null
      },{
        "title": "Exception Handling",
        "excerpt":"지난 포스트에서 Java의 파일 입출력에 대해 다루었습니다. 파일 입출력을 할 때는 예외 상황(ex. 해당 경로에 파일이 존재하지 않는 경우)이 발생할 수 있기 때문에 예외 처리를 반드시 해주어야 한다고 했었고, 그로 인해 IOException이라는 라이브러리를 호출한 다음, 파일 입출력을 실행하는 메소드에서 예외 처리 구현을 해줬습니다. 이렇게 Java에서는 예외가 발생할 수 있는 경우에서는...","categories": ["studies"],
        "tags": ["java"],
        "url": "/java/exception-handling/",
        "teaser": null
      },{
        "title": "Generic Programming",
        "excerpt":"지난 Java 포스트를 쓴지도 벌써 1년이 훌쩍 지났습니다. 작년에 모바일 게임만 시작하지 않았어도 여가 시간에 계속 포스트를 작성했을 텐데, 한번 시작한 뒤로 지금까지 접지를 못해서 블로그를 거의 방치하고 있었습니다. 아무래도 공부 내용을 정리하는 포스트는 작성하는데 시간도 꽤 걸리기 때문에 귀찮았기도 했구요. 그런데 계속 이렇게 냅두다보면 블로그를 만든 이유가 사라지는 것...","categories": ["studies"],
        "tags": ["java"],
        "url": "/java/generic-programming/",
        "teaser": null
      },{
        "title": "Collection Framework (1)",
        "excerpt":"이번 포스트부터 시작해서 앞으로 4개 정도의 포스트에서는 Collection Framework에 대해 다룰 예정입니다. Collection Framework는 Java의 자료구조라고 생각하시면 됩니다. 정확히는 다수의 데이터를 처리할 때 사용하는 미리 정의된 클래스의 집합입니다. Java에서는 크게 3가지 타입의 자료구조가 정의되어 있으며 Interface로 구현되어 있습니다. List List는 순서가 있는 데이터를 처리하며, 데이터의 중복을 허용한다. ex) 식당에서 대기하고...","categories": ["studies"],
        "tags": ["java"],
        "url": "/java/collection-framework-1/",
        "teaser": null
      },{
        "title": "Collection Framework (2)",
        "excerpt":"안녕하세요, 이번 포스트에서는 지난 포스트에 이어 Collection Framework에 대해 조금 더 살펴보도록 하겠습니다. 이번 포스트의 주제는 크게 Iterator, Arrays, Comparable, 그리고 Comparator로 나뉘어 있습니다. Iterator Iterator는 Java에서 Collection Framework에 대한 반복적인 작업을 용이하게 처리할 수 있는 메소드를 갖고 있는 인터페이스입니다. 구체적으로 Collection에 저장된 데이터를 읽어오는 방법을 표준화하기 위한 역할입니다. Iterator는...","categories": ["studies"],
        "tags": ["java"],
        "url": "/java/collection-framework-2/",
        "teaser": null
      },{
        "title": "Collection Framework (3)",
        "excerpt":"안녕하세요, 오늘은 Collection Framework 3번째 포스트입니다. 이번에 다룰 Collection Framwork는 HashSet과 TreeSet입니다. HashSet HashSet은 Set Interface를 구현한 클래스입니다. HashSet은 원소의 중복을 허용하지 않고(= e1.equals(e2)를 만족하는 e1, e2가 없음), 최대 1개의 null 원소가 존재할 수 있으며, 원소의 순서가 중요하지 않다는 특징을 가지고 있습니다. HashSet을 생성하는 방법은 다음 4가지가 있습니다. HashSet() :...","categories": ["studies"],
        "tags": ["java"],
        "url": "/java/collection-framework-3/",
        "teaser": null
      },{
        "title": "Collection Framework (4)",
        "excerpt":"안녕하세요, 드디어 길고 길었던 Collection Framework의 마지막 시간입니다. 오늘은 지난 포스트에 이어 HashMap과 TreeMap에 대해 알아보도록 하겠습니다. HashMap HashMap은 이름에서부터 유추할 수 있듯이 Map Interface에서 구현된 클래스입니다. HashSet과 마찬가지로 HashMap 또한 Hash에 쓰이며, 탐색(Search)에 좋은 성능을 보인다는 장점이 있습니다. 이와 비슷한 클래스로 Hashtable이 있는데, HashMap은 비동기식(asynchronous), Hashtable은 동기식(synchronized)이라는 차이점이 있습니다....","categories": ["studies"],
        "tags": ["java"],
        "url": "/java/collection-framework-4/",
        "teaser": null
      },{
        "title": "Networking with Java (1)",
        "excerpt":"지난 4개의 포스트로 Collection Framework는 마무리가 되었습니다. 글을 잘 쓰는 편이 아니라 혹시라도 이해가 안가는 부분이 있다면 댓글을 달아주시기 바랍니다. 최대한 아는 선에서 설명드릴 수 있도록 글을 보완해나가도록 하겠습니다. 이번에는 Java를 사용한 네트워크 프로그램을 다루는 주제입니다. 네트워크 프로그램을 다루기 위해서는 네트워크에 대한 배경지식이 필요한데, 이번 포스트에서는 그 배경지식과 함께 간단한...","categories": ["studies"],
        "tags": ["java"],
        "url": "/java/networking-with-java-1/",
        "teaser": null
      },{
        "title": "Networking with Java (2)",
        "excerpt":"이번 포스트는 지난번에 이어 Java로 네트워크 프로그램을 만드는 주제입니다. 지난 포스트에서는 InetAddress 클래스와 URL 클래스를 위주로 다뤘는데, 오늘은 그보다 조금 어려운 TCP/UDP Socket에 대해 배워보도록 하겠습니다. TCP Socket Programming TCP는 Transmission Control Protocol의 약자로 신뢰성 있는 전송을 보장하는 프로토콜입니다. OSI 7 계층 중 4번째 계층인 Transport 계증에 포함되어 있습니다. 통신...","categories": ["studies"],
        "tags": ["java"],
        "url": "/java/networking-with-java-2/",
        "teaser": null
      },{
        "title": "Multithreaded Programming with Java (1)",
        "excerpt":"안녕하세요, 지난 Networking with Java에 이은 마지막 주제는 Multithreaded Programming with Java입니다. 원래 순서는 Network 1 - Multithread 1 - Network 2 - Multithread 2 이지만 같은 주제는 묶어서 진행하는 것이 좋을 것 같아 임의로 순서를 변경하였습니다. 그로 인해 지난 Network 2번째 포스트에서 뜬금없이 쓰레드가 언급되었는데, 이번 포스트로 쓰레드에 대한...","categories": ["studies"],
        "tags": ["java"],
        "url": "/java/multithreaded-programming-with-java-1/",
        "teaser": null
      },{
        "title": "Multithreaded Programming with Java (2)",
        "excerpt":"안녕하세요, 이번 포스트는 Java 주제의 마지막 포스트입니다. 지난 포스트에 이어 멀티쓰레드 프로그래밍에 대해 더 알아보도록 하겠습니다. Thread States 각 쓰레드는 현재 어떤 일을 수행중인지 나타내기 위해 상태(State)가 존재합니다. NEW : 쓰레드를 처음 만들면 이 상태가 됩니다. 쓰레드를 실행하지 않은 상태입니다. RUNNABLE : 쓰레드가 실행할 준비가 된 상태입니다. 이 상태에서는 쓰레드가...","categories": ["studies"],
        "tags": ["java"],
        "url": "/java/multithreaded-programming-with-java-2/",
        "teaser": null
      },{
        "title": "Introduction",
        "excerpt":"안녕하세요, 2022년에는 새로운 주제로 글을 써볼까 합니다. 예전부터 제가 공부하고 있던 강화학습(Reinforcement Learning) 내용을 정리해보고 싶었는데, 이런 저런 일들로 여건이 되지 않아 미루고 있었습니다. 한동안 다른 문제로 골머리를 썩히다가 이번에 논문 때문에 강화학습을 다시 공부할 일이 생겨 겸사겸사 내용을 정리하고자 합니다. 강화학습 포스트에 참고할 교재는 대부분 학교에서 널리 사용하고 있는...","categories": ["studies"],
        "tags": ["reinforcement learning"],
        "url": "/rl/introduction/",
        "teaser": null
      },{
        "title": "The Reinforcement Learning Problem",
        "excerpt":"사람은 여러 환경과 상호 작용하며 많은 것을 학습합니다. 맛있는 음식을 먹으면 기분이 좋다는 것을 통해 먹는 것을 좋아하게 되며 날카로운 것에 찔리고 나서는 날카로운 것을 멀리하게 되는 것이 그 예입니다. 이렇게 원인과 결과를 학습하게 되고 행동으로부터 어떤 결과가 나오는 지 알게 되며 목표를 달성하기 위해 무엇을 해야하는지 알게 됩니다. 이러한...","categories": ["studies"],
        "tags": ["reinforcement learning"],
        "url": "/rl/the-reinforcement-learning-problem/",
        "teaser": null
      },{
        "title": "Multi-armed Bandits",
        "excerpt":"Part I: Tabular Solution Methods 이 책은 크게 두 부분으로 나뉘어져 있습니다. 첫 번째는 강화학습에서 State와 Action을 Table에 정리하는 방법입니다. Table을 사용하는 Tabular Method는 대부분의 문제에서 Optimal Policy를 정확하게 찾을 수 있다는 것을 보장하지만 State의 집합과 Action의 집합이 Table을 사용할 수 있을만큼 충분히 작아야 한다는 단점이 있습니다. 두 번째는 Table을...","categories": ["studies"],
        "tags": ["reinforcement learning"],
        "url": "/rl/multi-armed-bandits/",
        "teaser": null
      },{
        "title": "Finite Markov Decision Processes",
        "excerpt":"이번 장에서는 이 책에서 해결하고자 하는 목표인 Finite Markov Decision Processes (Finite MDP)에 대해 소개합니다. $k$-armed bandit 문제에서는 즉각적인 Reward에 대한 피드백만 고려하였으나, MDP는 즉각적인 Reward와 더불어 이어지는 State와 미래에 받을 Reward 등을 모두 포함한 의사 결정이 필요합니다. 수식으로 표현하면 bandit 문제에서는 각각의 Action $a$에 대하여 $q_* (a)$를 추정하였으나, MDP에서는...","categories": ["studies"],
        "tags": ["reinforcement learning"],
        "url": "/rl/finite-markov-decision-processes/",
        "teaser": null
      },{
        "title": "Dynamic Programming",
        "excerpt":"Dynamic Programming은 Markov Decision Process (MDP)와 같이 완벽한 Environment Model이 주어졌을 때 Optimal Policy을 계산할 수 있는 알고리즘입니다. Dynamic Programming은 학부 알고리즘 수업에서도 다루는 중요한 알고리즘이지만, 완벽한 Model이 주어져야 한다는 가정과 막대한 계산 비용으로 인해 강화학습에 직접적으로 적용하기는 힘든 단점이 있습니다. 다만 Dynamic Programming으로 강화학습 문제를 해결하는 과정은 다른 강화학습...","categories": ["studies"],
        "tags": ["reinforcement learning"],
        "url": "/rl/dynamic-programming/",
        "teaser": null
      },{
        "title": "Monte Carlo Methods",
        "excerpt":"이번 장에서는 지난 장과 마찬가지로 Value Function을 추정하고 Optimal Policy를 찾기 위한 방법을 다루지만, 지난 장과는 달리 MDP에 대한 완전한 정보를 알고 있다고 가정하지 않습니다. Monte Carlo Method는 Environment와의 상호 작용을 통해 얻은 경험을 기반으로 Optimal Policy를 찾는 방법입니다. 이 때 Environment와의 상호작용은 실제로 이루어지는 경험 뿐만이 아니라 시뮬레이션된 경험이라도...","categories": ["studies"],
        "tags": ["reinforcement learning"],
        "url": "/rl/monte-carlo-methods/",
        "teaser": null
      },{
        "title": "Temporal-Difference Learning",
        "excerpt":"이번 장은 강화학습의 핵심 아이디어인 Temporal-Difference (TD) Learning을 다루게 됩니다. TD Learning은 Environment에 대한 정확한 Model 없이 경험을 통해 학습한다는 Monte Carlo의 아이디어와 Bootstrap 하지 않고 학습된 다른 추정치를 기반으로 추정치를 업데이트한다는 Dynamic Programming 아이디어를 결합하여 만들어졌습니다. 이번 장의 시작은 이전 장들과 같이 주어진 Policy $\\pi$에 대한 Value Function $v_{\\pi}$를...","categories": ["studies"],
        "tags": ["reinforcement learning"],
        "url": "/rl/temporal-difference-learning/",
        "teaser": null
      },{
        "title": "$n$-step Bootstrapping",
        "excerpt":"이번 장에서는 5장에서 배운 Monte Carlo Method과 6장에서 배운 Temporal Difference (TD)를 융합하여 만든 새로운 방법을 소개합니다. Monte Carlo Method는 항상 Episode가 끝난 후에야 학습이 가능했고, TD는 1단계만 관찰하면 학습이 가능했습니다. 그렇다면 그 사이의 단계인 $n$번째 단계까지 관찰한 다음 학습을 하게 되면 조금 더 일반화된 학습이 가능하지 않을까하는 아이디어가 떠오르게...","categories": ["studies"],
        "tags": ["reinforcement learning"],
        "url": "/rl/n-step-bootstrapping/",
        "teaser": null
      },{
        "title": "Planning and Learning with Tabular Methods",
        "excerpt":"지금까지 배운 강화학습 방법에서 Dynamic Programming, Heuristic Search와 같이 Model이 필요한 방법을 Model-based라고 하고, Monte Carlo Method, Temporal Difference Learning과 같이 Model 없이 사용할 수 있는 방법을 Model-free라고 합니다. 해법을 구할 때 Model-based 방법은 Planning을 사용하지만 Model-free 방법은 Learning을 사용하는 차이점이 있습니다. 그러나 두 방법은 Value Function을 계산하는 과정에서 유사점이...","categories": ["studies"],
        "tags": ["reinforcement learning"],
        "url": "/rl/planning-and-learning-with-tabular-methods/",
        "teaser": null
      },{
        "title": "On-policy Prediction with Approximation",
        "excerpt":"Part II : Approximate Solution Methods 2부에서는 1부에서 사용한 Tabular Method를 확장하여 매우 큰 State Space를 가진 문제에 적용합니다. 예를 들어, 카메라 이미지의 가능한 수는 우주의 원자 수보다 훨씬 많습니다. 이렇게 방대한 State Space를 가진 문제의 경우에는 시간과 데이터가 부족하기 때문에 지금까지 배운 Optimal Policy나 Optimal Value Function를 찾을 수...","categories": ["studies"],
        "tags": ["reinforcement learning"],
        "url": "/rl/on-policy-prediction-with-approximation/",
        "teaser": null
      },{
        "title": "On-policy Control with Approximation",
        "excerpt":"지난 장에서 근사를 이용한 Value Function Approximation에 대해 알아보았습니다. 이번 장에서는 매개변수를 사용하여 Action-Value Function $\\hat{q}(s, a, \\mathbf{w}) \\approx q_* (s, a)$를 근사하는 Control 문제를 다루겠습니다. (Weight Vector $\\mathbf{w} \\in \\mathbb{E}^d$는 유한 차원 Vector입니다) 이번 장에서는 먼저 On-policy에만 집중하고, Off-policy의 문제는 다음 장에서 다룰 예정입니다. 가장 먼저 지난 장에서 다룬...","categories": ["studies"],
        "tags": ["reinforcement learning"],
        "url": "/rl/on-policy-control-with-approximation/",
        "teaser": null
      },{
        "title": "Off-policy Methods with Approximation",
        "excerpt":"이 책은 5장 이후로 Generalized Policy Iteration (GPI)에서 내재된 Exploitation과 Exploration 사이의 Trade-off를 처리하는 방법으로 On-policy와 Off-policy를 사용했습니다. 9장과 10장에서는 On-policy의 경우를 Function Approximation로 처리했으며, 이번 장에서는 Off-policy에서의 Function Approximation을 다룰 예정입니다. Off-policy 방법을 Function Approximation로 확장하는 것은 On-policy의 경우에서와 다른 점도 많고 어려운 점도 많습니다. 6장과 7장에서 소개한 Tabular...","categories": ["studies"],
        "tags": ["reinforcement learning"],
        "url": "/rl/off-policy-methods-with-approximation/",
        "teaser": null
      },{
        "title": "Eligibility Trace",
        "excerpt":"이번 장에서 새로 배우는 Eligibility Trace는 강화학습의 기본 메커니즘 중 하나입니다. 예를 들어, TD($\\lambda$)에서 $\\lambda$는 Eligibility Trace를 사용한다는 것을 의미합니다. Q-learning과 Sarsa를 포함한 대부분의 TD 방법은 Eligibility Trace와 결합하여 보다 효율적으로 학습할 수 있습니다. Eligibility Trace는 TD와 Monte Carlo Method를 통합하여 일반화하는 방법입니다. TD 방법을 Eligibility Trace를 사용하여 일반화하면 $\\lambda...","categories": ["studies"],
        "tags": ["reinforcement learning"],
        "url": "/rl/eligibility-traces/",
        "teaser": null
      },{
        "title": "Policy Gradient Methods",
        "excerpt":"이번 장은 드디어 마지막 장인 Policy Gradient입니다. 이번 장에서는 지금까지 이 교재에서 다룬 방법들과는 다르게, Policy 자체를 매개변수화하는 방법을 알아보겠습니다. 지금까지의 방법들은 Estimated Action-Value를 기반으로 Action을 선택했기 때문에 Action-Value를 추정하는 것이 중요했습니다. 하지만 이번 장에서 배울 새로운 방법인 Policy Gradient는 Action을 선택하는 데 Value Function을 사용하지 않습니다. 이번 장에서 사용할...","categories": ["studies"],
        "tags": ["reinforcement learning"],
        "url": "/rl/policy-gradient-methods/",
        "teaser": null
      }]
