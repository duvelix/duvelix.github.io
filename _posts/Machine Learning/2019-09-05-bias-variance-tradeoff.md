---
title: "Bias-Variance Tradeoff"
toc: true
toc_label: "Table of Contents"
toc_sticky: true
categories:
  - studies
tags:
  - machine learning
---

![](/images/Machine Learning/8. Bias-Variance Tradeoff/ML 08-02.png){: .align-center}

8장에서는 Bias와 Variance에 대해 배웁니다. Bias-Variance는 지난 장에서 배운 VC 처럼 Error에 대해 분석하는 방법이지만, 직접적인 관련은 없으므로 VC를 제대로 이해하지 못하셨더라도 이번 장을 배우는 것에는 큰 무리가 없습니다.

## Outline

![](/images/Machine Learning/8. Bias-Variance Tradeoff/ML 08-03.png){: .align-center}

이번 장은 크게 2개의 소주제로 구성되어 있습니다. 먼저 Bias와 Variance가 무엇인지 배우고, 이것이 어떤 의지를 가지는지를 예제를 통해 설명합니다. 아무래도 새로운 개념과 예제까지 다루다보니 대부분의 슬라이드는 여기에 할당되어 있고, 두번째 소주제는 VC를 사용한 분석과 어떤 차이가 있는지 Linear Regression의 예를 통해 살펴보게 됩니다.

![](/images/Machine Learning/8. Bias-Variance Tradeoff/ML 08-04.png){: .align-center}

지금까지의 학습의 목적은 Out of Sample Error를 줄이는 것이었습니다. 이 말은 즉슨, Target Function $f$와 유사한 가설을 찾는 것입니다.

가설을 좀 더 복잡하게 설정할수록(ex. 다항함수에서 차수를 늘림) $f$에 근사하도록 만들기 쉬워지지만, 가설을 간단하게 설정할수록(ex. 다항함수의 차수를 줄임) Out of Sample을 일반화하기 쉬워집니다. 물론, $f$ 자체를 가설로 설정할 수 있다면 더할 나위 없게 됩니다. (실제로는 불가능하지만요)

![](/images/Machine Learning/8. Bias-Variance Tradeoff/ML 08-05.png){: .align-center}

지난 시간에 배운 VC를 통해 Out of Sample Error는 In Sample Error에 $\Omega$를 더한 값 이하인 것을 알고 있습니다. ($\Omega$는 7장의 마지막 부분에서 VC Inequality 식으로부터 유도된 값입니다)

Bias-Variance 분석은 이와 다르게 Out of Sample Error를 2가지로 나누어 분석합니다. **가설 집합 $\mathcal{H}$가 얼마나 Target Function $f$에 근사하였는가**와 **가설 집합 $\mathcal{H}$가 집합 내에서 좋은 가설 $h$를 뽑을 수 있는가**를 계산하게 됩니다.

이 방법은 Regression과 같이 실수의 값을 가지는 Target에 적용할 수 있으며 Error Measure로 Squared Error를 사용하게 됩니다.

![](/images/Machine Learning/8. Bias-Variance Tradeoff/ML 08-06.png){: .align-center}

기계학습은 기본적으로 주어진 데이터를 가지로 수행하게 되므로, Out of Sample Error를 구하는 식을 살짝 변형시켜 보겠습니다. 무작위로 주어진 Dataset을 $\mathcal{D}$라 하면 $g^{(\mathcal{D})}$는 Dataset $\mathcal{D}$로 얻어진 Final Hypothesis $g$로 정의할 수 있습니다.

$g^{(\mathcal{D})}$를 사용해 Squared Error를 구하려면, $g^{(\mathcal{D})}$와 Target Function $f$의 차이를 제곱함으로써 얻을 수 있습니다. 다만 $\mathcal{D}$는 전체 Dataset $\mathbf{x}$에서 임의로 뽑은 Dataset이므로 어떻게 뽑는지에 따라 달라지기 때문에 Squared Error의 평균값을 사용하게 됩니다.

그 후 식을 간단하게 정리하기 위해 양변에 $\mathcal{D}$에 대한 평균을 취합니다. 우변의 경우 $(g^{(\mathcal{D})}(\mathbf{x})-f(\mathbf{x}))^2$이 항상 0보다 크기 때문에 $\mathbb{E}\_{\mathcal{D}}$와 $\mathbb{E}\_{\mathbf{x}}$의 순서를 바꿀 수 있습니다.

![](/images/Machine Learning/8. Bias-Variance Tradeoff/ML 08-07.png){: .align-center}

이제는 $\mathbb{E}_{\mathcal{D}}[(g^{(\mathcal{D})}(\mathbf{x})-f(\mathbf{x}))^2]$에 집중해봅시다.

먼저 가설 $g$의 평균으로 $\bar{g}$라는 것을 새롭게 정의합니다. $\bar{g}(\mathbf{x})$는 $g^{(\mathcal{D})}(\mathbf{x})$를 확률변수 $\mathcal{D}$로 평균낸 값입니다. $\mathcal{D}$는 원래 정의대로 전체 Dataset에서 무작위로 추출한 Dataset입니다.

이런 추출 작업을 $K$번 반복했다고 하면 총 $K$개의 Dataset이 생기는데, $\bar{g}(\mathbf{x})$는 가설들의 평균이므로 $g^{(\mathcal{D}_k)}(\mathbf{x})$를 모두 더한 다음 $K$로 나눈 값이 됩니다.

![](/images/Machine Learning/8. Bias-Variance Tradeoff/ML 08-08.png){: .align-center}

정의는 잠시 제쳐 놓고, 구하려고 하던 $\mathbb{E}\_{\mathcal{D}}[(g^{(\mathcal{D})}(\mathbf{x})-f(\mathbf{x}))^2]$를 전개해보도록 합시다. 오른쪽 항 $\mathbb{E}\_{\mathcal{D}}$의 내부에 $\bar{g}$를 빼고 다시 더해줍니다. 똑같은 함수를 빼고 더했으니 원래의 식과 동일합니다. 그런 다음, 조금 번거롭지만 제곱식을 풀어준 다음 정리하도록 합시다.

$$\mathbb{E}_{\mathcal{D}}[(g^{(\mathcal{D})}(\mathbf{x})-\bar{g}(\mathbf{x})+\bar{g}(\mathbf{x})-f(\mathbf{x}))^2]$$

$$=\mathbb{E}_{\mathcal{D}}[g^{(\mathcal{D})}(\mathbf{x})^2-g^{(\mathcal{D})}(\mathbf{x})\bar{g}(\mathbf{x})+g^{(\mathcal{D})}(\mathbf{x})\bar{g}(\mathbf{x})-g^{(\mathcal{D})}(\mathbf{x})f(\mathbf{x})-g^{(\mathcal{D})}(\mathbf{x})\bar{g}(\mathbf{x})+\bar{g}(\mathbf{x})^2-\bar{g}(\mathbf{x})^2+\bar{g}(\mathbf{x})f(\mathbf{x})+g^{(\mathcal{D})}(\mathbf{x})\bar{g}(\mathbf{x})-\bar{g}(\mathbf{x})^2+\bar{g}(\mathbf{x})^2-\bar{g}(\mathbf{x})f(\mathbf{x})-g^{(\mathcal{D})}(\mathbf{x})f(\mathbf{x})+\bar{g}(\mathbf{x})f(\mathbf{x})-\bar{g}(\mathbf{x})f(\mathbf{x})+f(\mathbf{x})^2]$$

(전개식 추가)

## Bias and variance

![](/images/Machine Learning/8. Bias-Variance Tradeoff/ML 08-09.png){: .align-center}

이전 슬라이드에서 정리한 식에 각각 이름을 붙여봅시다.

먼저 오른쪽 항의 두번째 부분은 가설 $g$의 평균 $\bar{g}$와 Target Function $f$의 Squared Error입니다. 이 부분은 정답과 가설들의 평균이 얼마나 떨어져 있는지, 즉, 정답에 대해 얼마나 편향적인지를 나타내는 지표로 해석할 수 있습니다. 따라서 이 부분을 Bias라고 부릅니다.

첫번째 부분은 가설 집합 내의 특정 가설이 가설의 평균과 얼마나 떨어져 있는지를 측정하여 그것을 평균낸 값이 됩니다. 즉, 이 부분은 가설들이 얼마나 흩어져 있는지를 나타내는 지표로 해석할 수 있습니다. 그러므로 이 부분을 Variance로 부릅니다.

결론적으로, 임의의 Dataset $\mathcal{D}$에 대해 가설 $g$의 Out of Sample Error는 Bias와 Variance의 합으로 나타낼 수 있습니다.

![](/images/Machine Learning/8. Bias-Variance Tradeoff/ML 08-10.png){: .align-center}

이것을 그림으로 표현한다면 더 직관적으로 표현이 가능합니다. 왼쪽의 그림은 전체 가설의 집합인 $\mathcal{H}$내에 최종 가설 $g^{(\mathcal{D})}$이 단 한개만 존재하여 그 자체가 평균 $\bar{g}$가 되는 극단적인 경우를 나타내고 있습니다. 이 때 그 점인 $\bar{g}$와 Target Function $f$의 거리가 Bias가 됩니다. 점이 단 하나밖에 없기 때문에, Variance는 0이 됩니다.

오른쪽 그림은 전체 가설 집합 $\mathcal{H}$이 매우 큰 경우입니다. 포함된 점들도 매우 많고 Target Function $f$도 $\mathcal{H}$ 내에 존재합니다. 이 때는 최종 가설의 평균 $\bar{g}$과 $f$의 거리가 매우 가깝기 때문에 거리가 0에 수렴하므로, Bias는 0이라고 볼 수 있습니다. 반대로, $\bar{g}$와 나머지 점들의 거리는 왼쪽 그림에 비해 상대적으로 큰편이고, 특히 $\bar{g}$와 반대쪽에 있는 점들과의 거리는 매우 멀기 때문에 Variance는 매우 크게 나올 것임을 알 수 있습니다

따라서 **$\mathcal{H}$를 크게 만들수록 Bias는 작아지고, Variance는 커진다**는 결론을 얻을 수 있습니다.

![](/images/Machine Learning/8. Bias-Variance Tradeoff/ML 08-11.png){: .align-center}

구체적인 예제를 보면서 Bias와 Variance를 계산하여 어떤 가설이 더 좋은가를 판단하는 법을 알아보겠습니다. Target Function $f$를 사인함수로 가정하고, 정의역의 범위는 -1부터 1까지로 잡겠습니다. 그리고 상수함수 모델을 가설로 한 $\mathcal{H}_0$, 일차함수 모델을 가설로 한 $\mathcal{H}_1$ 단 2개의 가설만 존재하는 상황을 가정하겠습니다. 과연 이 두 가설 중 "더 나은 것"은 무엇일까요?

![](/images/Machine Learning/8. Bias-Variance Tradeoff/ML 08-12.png){: .align-center}

"**더 나은 것**"을 찾기 위해서는 어떤 것더 나은지에 대한 기준을 먼저 잡아야합니다. 지금까지 "더 낫다" 라는 것은 일반적으로 "**Out of Sample Error가 낮다**"로 이해했기 때문에 Out of Sample Error를 계산해봅시다.

Error Measure는 Square Error로 할 경우, 각 가설에서 Out of Sample Error가 가장 낮게 나오는 함수는 $\mathcal{H}_0$에서의 초록색 선, $\mathcal{H}_1$에서 빨간색 선으로 나타난 함수가 됩니다. Square Error 계산은 $f(x)$에서 방금 구한 함수를 뺀 제곱을 -1부터 1까지 적분하면 됩니다. 그렇게 하면 $\mathcal{H}_0$의 Out of Sample Error는 0.5, $\mathcal{H}_1$의 Out of Sample Error는 0.2가 되기 때문에 $\mathcal{H}_1$이 "더 낫다"라고 말할 수 있습니다.

![](/images/Machine Learning/8. Bias-Variance Tradeoff/ML 08-13.png){: .align-center}

방금 전의 계산은 Target Function $f(x)$ 자체를 안다는 기준으로 계산했지만, 이번에는 모른다고 가정해보겠습니다. 대신 $f(x)$ 위에 있는 점 2개를 무작위로 추출하여 그 데이터를 가장 잘 표현하는 각 가설의 함수를 찾도록 합니다.

$\mathcal{H}_0$은 어차피 상수함수이기 때문에 두 점을 받았을 때 그 중간을 지나는 직선이 가설임을 쉽게 알 수 있습니다. 가설 $\mathcal{H}_1$도 마찬가지로 일차함수이기 때문에 두 점을 지나는 직선을 긋게 되면 바로 가설을 구할 수 있습니다.

![](/images/Machine Learning/8. Bias-Variance Tradeoff/ML 08-14.png){: .align-center}

이런 방법으로 두 점을 뽑는 과정을 여러번 반복합니다. 위 슬라이드의 왼쪽 그림은 임의의 두 점으로 만들 수 있는 가설 $\mathcal{H}_0$을 모두 그린 것이고, 오른쪽 그림은 그것들을 통해 가설 $\mathcal{H}_0$의 평균인 $\bar{g}$를 구하고, 가설들이 평균치 주변에서 주로 발생한다는 것을 나타낸 것입니다.

![](/images/Machine Learning/8. Bias-Variance Tradeoff/ML 08-15.png){: .align-center}

가설 $\mathcal{H}_1$에서도 똑같은 작업을 수행한 모습입니다. $\mathcal{H}_0$와 비교해보면 가설이 발생하는 영역이 더 큰 것을 알 수 있습니다.

![](/images/Machine Learning/8. Bias-Variance Tradeoff/ML 08-16.png){: .align-center}

두 결과를 가지고 Bias와 Variance를 구해봅시다. Bias는 Target Function $f$와 가설의 평균인 $\bar{g}$의 차이를 계산하면 되니 Out of Sample Error를 계산할 때처럼 두 함수의 차이를 적분해주면 됩니다. $\mathcal{H}_0$의 경우 이전과 같은 0.5이고, $\mathcal{H}_1$도 약간의 차이는 있지만 Out of Sample Error를 구할 때와 큰 차이가 없습니다.

문제는 Variance인데, $\mathcal{H}_0$에서는 가설이 발생하는 영역이 오밀조밀하여 Variance가 크지 않지만, $\mathcal{H}_0$에서는 가설이 발생하는 영역이 이보다 훨씬 넓기 때문에 $\mathcal{H}_0$에 비해 Variance가 매우 크게 나옴을 알 수 있습니다. Bias와 Variance를 더하게 되면 0.75 < 1.9이므로 $\mathcal{H}_0$이 $\mathcal{H}_1$보다 더 좋은 가설임을 알 수 있습니다.

![](/images/Machine Learning/8. Bias-Variance Tradeoff/ML 08-17.png){: .align-center}

왜 이런 결과가 나왔을까요? 그 이유는 모델의 복잡도는 <span style="color:red">Target Function이 얼마나 복잡한가</span>가 아니라 **데이터**를 기준으로 잡아야하기 때문입니다.

방금의 예제에서는 데이터가 단 2개의 점으로만 주어졌습니다. 점 2개를 가지로 구할 수 있는 함수는 매우 한정적이기 때문에 모델의 복잡도가 낮은 $\mathcal{H}_0$이 더 뛰어난 성능을 보인 것입니다.

만약 똑같은 Target Function을 가지고 점이 더 많이 주어진다면, $\mathcal{H}_1$이 더 뛰어난 성능을 보일 것입니다.

## Learning curves

![](/images/Machine Learning/8. Bias-Variance Tradeoff/ML 08-18.png){: .align-center}

이번에는 데이터 집합의 크기에 따라 In Sample Error와 Out of Sample Error가 어떤 곡선을 그리는지 알아보겠습니다.

![](/images/Machine Learning/8. Bias-Variance Tradeoff/ML 08-19.png){: .align-center}

데이터 집합 $\mathcal{D}$의 크기를 $N$이라 정의합니다. 이 때, Out of Sample Error의 평균은 $\mathbb{E}\_{\mathcal{D}}[E\_{out}(g^{\mathcal{D}})]$가 되고 In Sample Error의 평균은 $\mathbb{E}\_{\mathcal{D}}[E\_{in}(g^{\mathcal{D}})]$가 됩니다. 이 두 평균이 $N$에 따라 어떻게 변하는지를 알아보겠습니다.

![](/images/Machine Learning/8. Bias-Variance Tradeoff/ML 08-20.png){: .align-center}

여기서는 간단한 모델과 복잡한 모델로 나누어 실험하였습니다. 우선 공통적인 부분은 두 모델 모두 $N$이 충분히 커진다면 In Sample Error와 Out of Sample Error가 비슷해짐을 알 수 있습니다. 다만 간단한 모델은 더 빠르게 두 곡선이 만나게 됩니다.

간단한 모델의 경우 머릿속으로 생각해왔던 당연한 그림의 결과이기 때문에 논할 것이 없지만, 복잡한 모델의 곡선은 조금 특이합니다. $N$이 작을때 Out of Sample Error가 매우 커지는 것은 당연해보이지만, In Sample Error는 0이 되어 버립니다. 이렇게 되는 이유는 복잡한 모델은 주어진 데이터가 적을 때 그 데이터를 완전히 커버하는 것이 가능하기 때문입니다. 이전에 했던 사인 함수 예제에서 점이 2개 주어진 경우를 생각해보시면, 상대적으로 복잡한 모델인 일차함수의 경우 주어진 2개의 점을 지나는 함수를 구할 수 있기 때문에 In Sample Error가 0이었던 것으로 이해하시면 됩니다.

![](/images/Machine Learning/8. Bias-Variance Tradeoff/ML 08-21.png){: .align-center}

이번에는 똑같은 곡선을 지난 장에서 배운 VC Analysis와 이번 장에서 배운 Bias-Variance Analysis의 관점으로 각각 살펴보겠습니다. VC Analysis에서는 Out of Sample Error를 In Sample Error와 Generalization Error(=$\Omega$)를 더한 값 이하로 표현하였습니다. 반대로 Bias-Variance Analysis에서는 Out of Sample Error를 Bias와 Variance의 합으로 표현하였습니다.

그림을 통해 알 수 있는 유사점은 $N$이 커질수록 In Sample Error와 Out of Sample Error가 비슷해지기 때문에 Generalization Error와 Variance가 0에 수렴한다는 것이지만, VC Analysis는 $N$이 작을때 In Sample Error가 0에 가깝기 때문에 제 기능을 할 수 없는 단점이 있다는 것을 알 수 있습니다.

![](/images/Machine Learning/8. Bias-Variance Tradeoff/ML 08-22.png){: .align-center}

이해하기 쉽게 특정한 케이스를 예로 들어봅시다.

이전에 배운 Linear Regression 문제에서 Target에 Noise가 낀 상황입니다. 데이터 집합의 크기는 $N$이고, 3장에서 배운 Pseudo-Inverse를 사용하여 최적의 Weight Vector $\mathbf{w}^{*}$를 찾도록 합시다.

Input Vector를 $X$라고 하면 $X\mathbf{w}$와 Output Vector $y$의 차이가 In Sample Error Vector가 됩니다. 이 문제에서, Target에는 Noise가 추가되었기 때문에 주어진 데이터 집합 바깥에는 주어진 데이터 집합과 동일한 Input을 가지고 다른 Output를 가지는 데이터가 존재합니다.

따라서 Out of Sample Error는 주어진 데이터 집합과 동일한 Input Vector $X$와 주어진 데이터 집합과 다른 Output Vector $y'$를 사용하여 계산합니다.

![](/images/Machine Learning/8. Bias-Variance Tradeoff/ML 08-23.png){: .align-center}

이 예제를 가지고 슬라이드 20에 나온 곡선을 분석해봅시다.

먼저, Noise의 분산을 $\sigma^2$이라 하면, $N$이 커질수록 In Sample/Out of Sample Error는 Noise의 분산에 수렴함을 쉽게 알 수 있습니다.

Pseudo-Inverse에서는 $d+1$의 크기를 가지는 행렬로 계산했기 때문에 $N$이 $d+1$와 같은 상황에서는 주어진 데이터에 오차없이 가설을 구할 수 있습니다.

$N$이 $d+1$보다 커지는 상황에서는, 주어진 점에 완전히 일치하는 가설을 찾을 수 없기 때문에 In Sample Error가 점점 늘어납니다. 이를 수식화하게 되면, $\sigma^2$을 기준으로 $N$이 $d+1$와 같을 때 0이되고, "Linear" Regression 문제이므로 $\sigma^{2}(1-\frac{d+1}{N})$이라는 식을 구할 수 있습니다.

Out of Sample Error도 같은 방법으로 구할 수 있습니다. Generalization Error는 슬라이드 20에서 Out of Sample Error와 In Sample Error의 차이였기 때문에 간단하게 구할 수 있습니다.

이번 장은 여기까지입니다. 읽어주셔서 감사합니다.