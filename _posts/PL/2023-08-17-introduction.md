---
title: "Introduction"
permalink: /pl/introduction/
classes: wide
categories:
  - studies
tags:
  - programming languages
---

안녕하세요, 이번에는 새로운 공부 카테고리인 프로그래밍 언어론을 시작하게 되었습니다. 사실 올해는 지난번에 작성하던 자료구조 관련 포스트를 마무리할 계획이었습니다. 게다가 프로그래밍 언어론은 제 전공과도 거리가 멀기 때문에 블로그에 정리할 생각이 없었는데, 제가 2023-2학기에 성신여대에서 이 과목을 담당하게 되어 복습도 할 겸 포스트를 남겨보고자 합니다. 저도 학부 시절 이 과목을 수강했었고 나름 성적도 괜찮게 받았았는데, 지금 다시 보니 기억이 거의 나지 않더라구요. 개강까지 얼마 남지 않았기 때문에 공부를 빡세게 해봐야할 것 같습니다.

프로그래밍 언어론은 컴퓨터공학과 과목에서 흔치 않은 이론 수업입니다. 대부분 컴퓨터공학과 과목들은 이론과 함께 실습을 통한 구현을 중요하게 생각하지만, 프로그래밍 언어론은 지금까지 배운 여러 프로그래밍 언어에 대한 지식을 토대로 프로그래밍 언어에 공통적으로 내제되어 있는 기능들에 대한 분석을 하는 과목입니다. 따라서 이 수업은 수강생들마다 호불호가 있는 과목입니다. 코딩에 자신이 없는 수강생들은 좋아하는 경우가 많지만, 코딩을 통한 구현을 즐기는 수강생들에게는 다소 지루할 수 있습니다.

프로그래밍 언어론을 다루는 교재는 여러 가지가 있지만, 서강대학교 기준으로는 Robert W. Sebesta 저자의 **Concepts of Programming Languages**라는 교재를 사용합니다. 이 교재는 작성 시점을 기준으로 12판까지 나왔는데, 아직까지 대부분의 학교에서는 10판을 사용하더라구요. 어차피 각 판쇄별 차이는 그다지 크지 않으니, 아무거나 읽으셔도 상관이 없을 것 같습니다. 

![](/assets/images/PL/000/01.jpg){: width="600"}{: .align-center}

다만 이 책은 교내 서점이 아니면 은근히 구하기 힘들다는 단점이 있습니다. 알라딘에서 찾아보니 12판의 가격이 10만원이 넘더라구요. 제가 학부 시절에 그렇게 비싸게 구매한 것 같지는 않은데 이상하네요. 구글에 찾아보니 10판 교재의 PDF 파일이 인터넷에 올라와 있긴 한데, 이게 합법적인 경로인지는 잘 모르겠습니다. 이것이 꺼림칙하시다면 번역본의 경우에는 합리적인 가격에 팔고 있으니 이걸 알아보시는 것도 좋을 것 같습니다. 아쉬운 점은 번역 품질이 그렇게 좋지는 않더라구요. 번역본의 경우 알라딘 기준 33,000원에 팔고 있습니다.

![](/assets/images/PL/000/02.jpg){: width="600"}{: .align-center}

또는 좀 더 간단한 교재를 이용하시는 방법도 있습니다. 제가 학부 때는 한빛아카데미에서 출판한 서적을 종종 읽으며 공부했었는데, 전공 교재에 비해서 확실히 쉽게 쓰여있었습니다. 다만 이 교재는 후반부의 객체 지향 프로그래밍 관련 내용이 많이 빠져있고, 이전 부분에도 전공 교재에 비해 생략한 부분이 종종 있기 때문에 조금 애매합니다. 비전공자의 경우에는 확실히 도움이 되지만, 이 책만 읽기보다는 이 책으로 개념을 정립한 후에 전공 서적을 읽으며 복습하시는 것을 추천드립니다. 가격은 이 책이 가장 저렴합니다. (알라딘 기준 20,000원)

![](/assets/images/PL/000/03.jpg){: width="600"}{: .align-center}

저는 Concepts of Programming Languages 교재를 기준으로 포스트를 작성하겠습니다. 해당 교재를 기반한 PPT 슬라이드가 있기 때문에, 이것을 같이 올리며 하나하나 설명하도록 하겠습니다. Concepts of Programming Languages의 10판 기준 목차는 다음과 같습니다.

1. **Preliminaries**
2. **Evolution of the Major Programming Languages**
3. Describing Syntax and Semantics
4. Lexical and Syntax Analysis
5. **Names, Bindings, and Scopes**
6. **Data Types**
7. **Expressions and Assignment Statements**
8. **Statement-Level Control Structures**
9. **Subprograms**
10. **Implementing Subprograms**
11. **Abstract Data Types and Encapsulation Constructs**
12. **Support for Object-Oriented Programming**
13. Concurrency
14. Exception Handling and Event Handling
15. Functional Programming Languages
16. Logic Programming Languages

물론 일반적으로 프로그래밍 언어론 수업에서 이 모든 것을 다루지는 않습니다. 대표적으로 3장과 4장은 Syntax에 관한 중요한 내용으로 구성되어 있지만, 이 부분은 컴퓨터공학과의 다른 과목인 컴파일러와 중복된 내용이기 때문에 다루지 않는 학교가 많습니다. 또한 13장, 14장은 객체 지향 프로그래밍 언어를 배울 때 다루는 내용이기 때문에 역시 생략하는 학교가 많고, 15, 16장은 특정 프로그래밍 언어에 관련된 내용이 많기 때문에 굳이 다룰 필요가 없는 부분입니다. 제가 포스트에서 다룰 부분은 볼드체로 표시해 놓았습니다.

과목 소개는 이것으로 마치고, 다음 포스트부터 각 장을 하나씩 정리하도록 하겠습니다. 감사합니다.