---
title: "Introduction"
permalink: /ml/introduction/
toc: true
toc_label: "Table of Contents"
toc_sticky: true
categories:
  - studies
tags:
  - machine learning
---


안녕하세요, 오늘은 Machine Learning 카테고리에 대해 말씀드리려 합니다. 이 카테고리에는 제가 예전에 기계학습을 공부하며 이해한 내용을 정리하는 식으로 진행하려고 합니다.

## Textbook

![](https://github.com/JoonsuRyu/images/blob/master/ML/000/01.png?raw=true){: width="300"}{: .align-center}

작성된 글의 기반은 위의 사진에 나와있는 Learning From Data라는 교재입니다. 책의 저자이신 Abu-Mostafa 교수님은 칼텍 소속으로 실제로 Machine Learning 수업을 강의하실 때 이 교재를 사용하는 것으로 알고 있습니다. 강의자료는 모두 [Caltech](https://work.caltech.edu/textbook.html)에서 무료로 다운로드 받을 수 있고 강의 영상까지 [Caltech Youtube](https://www.youtube.com/watch?v=mbyG85GZ0PI&list=PLD63A284B7615313A&ab_channel=caltech)에 게시되어 있기 때문에 독학하시기에 좋은 교재라고 생각합니다. 강의 영상이 영어로만 나오고 따로 한글 자막이 존재하는 것은 아니지만, 영어 자막이 제공되기 때문에 영어 듣기에 익숙하지 않은 분들도 영상을 보는데 크게 문제가 있지는 않으실 것이라 생각됩니다.

일반적으로 언급이 많이 되는 교재로 Murphy의 [Machine Learning : A Probabilistic Perspective](https://www.amazon.com/Machine-Learning-Probabilistic-Perspective-Computation/dp/0262018020/ref=sr_1_1?crid=194TGT6A3GLWG&keywords=Machine+Learning+%3A+A+Probabilistic+Perspective&qid=1677073873&sprefix=machine+learning+a+probabilistic+perspective%2Caps%2C234&sr=8-1) 교재나 Bishop의 [Pattern Recognition & Machien Learning](https://www.amazon.com/Pattern-Recognition-Learning-Information-Statistics/dp/0387310738/ref=sr_1_1?crid=12XEZA5LW172R&keywords=pattern+recognition+%26+machine+learning&qid=1677074201&sprefix=machine+learning+a+probabilistic+perspective%2Caps%2C1023&sr=8-1) 교재가 있습니다만, 책의 두께도 무지막지할 뿐더러 내용도 만만치 않기 때문에 기계학습에 입문하시기에는 적절하지 않을 것이라 생각합니다. (저는 Murphy 교재나 Bishop 교재는 통독을 하기 보다는 사전처럼 모르는 내용이 있을 때 찾아보는 용도로 사용하고 있습니다) 대신 제가 추천드리는 Learning From Data 교재는 책이 얇고 각 장(Chapter)의 길이가 그다지 길지 않아 읽는 지루함을 좀 덜을 수 있는 장점이 있습니다.

물론 그렇다고 이 책이 완벽한 것은 아닙니다. 책이 짧은 만큼 Murphy 책이나 Bishop 책과 비교하면 설명이 미흡한 부분이 존재하고, 심지어는 강의자료에는 있지만 책에는 없는 내용까지 존재합니다. 본 교재의 칼텍 강의자료/유튜브 강의 영상을 보시면 Neural Networks (Lecture 10), Support Vector Machines (Lecture 14), Kernel Methods (Lecture 15), Radial Basis Functions (Lecture 16) 강의가 분명 존재하지만, 책에는 이 부분들이 생략되어 있습니다. 정말 아쉽게도 이 부분은 강의자료와 강의영상만 보시면서 공부하셔야 합니다. 사실 한 장 당 약 100분 정도만 강의하시는데 이정도 분량이면 충분히 책에 넣을만 하지 않았을까라는 의문이 들기도 합니다만…

![](https://github.com/JoonsuRyu/images/blob/master/ML/000/02.png?raw=true){: .align-center}

책이 얇기 때문에 하드커버임에도 약 4만원 정도면 구할 수 있습니만, 이 교재는 국내에서 많이 유명한 책이 아니다보니 구하기가 어렵습니다. 이 책을 수입해서 파는 서점이 거의 없어 아마존 등을 통해 직구하셔야 합니다. 강의 자료도 제공되고 강의 영상의 질도 좋기 때문에 정 구하기 어려우시면 책을 구입하시지 않으셔도 되지만, Neural Networks와 Support Vector Machines 부분은 책을 구입하시게 되면 책에 나와있는 비밀 계정(?)으로 pdf파일을 제공해줍니다.

장점이 있는 만큼 이런저런 단점도 존재하지만 그나마 짧고 쉬운 책으로 기계학습을 입문하시기에는 Learning From Data 교재가 최고라고 생각합니다. 해외에서는 유명한지 구글링을 좀 해보시면 교재의 프로그래밍 연습문제도 Github에 많이 올라와 있어서 참고 자료도 풍부한 편입니다. 다만 이 책으로는 어디까지나 입문으로 생각하셔야지, 이 책 한 권으로 기계학습을 마스터하겠다! 라는 생각을 하시면 조금 곤란합니다. 앞서 소개드린 Murphy 교재나 Bishop 교재에 비해 생략되거나 간소화된 내용이 많아 제대로 공부하시기 위해서는 다른 교재 또한 참고하시는 것을 추천드립니다.

## Outline of the course

공부하실 때 주의하실 점은 책의 순서와 칼텍의 강의자료의 순서가 조금 다릅니다. (대표적으로 Linear Model 부분) 다만 강의자료의 내용이 교재보다 커버하는 부분이 넓다 보니 제가 작성할 글은 칼텍의 강의자료를 기준으로 할 예정입니다. 강의자료의 구성은 아래 그림과 같습니다.

![](https://github.com/JoonsuRyu/images/blob/master/ML/000/03.png?raw=true){: .align-center}

강의자료는 위와 같이 총 18개의 장으로 이루어져 있습니다. 빨간색 장은 수학적인 내용 위주, 파란색 장은 기술적인 내용 위주로 구성되어 있으며 초록색 장은 개념과 용어에 대해 설명하는 부분입니다. 아무래도 수학적인 부분 때문에 걱정이 되시는 분들도 계실 텐데요, 학부에서 미적분학, 선형대수학, 공업수학, 통계학 등을 익히셨다면 이해하는데 큰 문제는 없습니다. 강의 중 벡터 연산 같이 복잡한 부분도 있으나, 보통 증명 부분에서 많이 나오고, 증명 부분은 굳이 전부 이해하지 않아도 괜찮습니다.

다음 포스트부터 한 장씩 다루도록 하겠습니다.