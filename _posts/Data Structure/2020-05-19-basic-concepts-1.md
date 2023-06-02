---
title: "Basic Concepts (1)"
permalink: /ds/basic-concepts-1/
classes: wide
toc: true
toc_label: "Table of Contents"
categories:
  - studies
tags:
  - data structure
---

## Goals

자료구조 교재의 첫 시작은 이 과목의 목적이 무엇인지, 왜 배우는지에 대한 설명이 나와 있습니다. 원문은 그대로 옮기면 다음과 같습니다.

> To provide the tools and techniques necessary to design and implement large-scale computer systems.

해석하면, 규모가 큰 컴퓨터 시스템을 디자인하고 구현하는데 필요한 도구와 기술을 제공하는 것입니다. 구체적으로는 이번 시간에는 **데이터 추상화(Data Abstraction)**, **알고리즘 명세(Algorithm Specification)**, 그리고 **성능 분석 및 평가(Performance Analysis and Measurement)**가 무엇인지를 배우게 됩니다.

## System Life Cycle

<span style="color:red">시스템 생명 주기(System Life Cycle)</span>란 프로그램의 개발 단계를 의미합니다. 시스템 생명 주기는 **요구사항(Requirement)**, **분석(Analysis)**, **설계(Design)**, **정제와 코딩(Refinement and Coding)**, 그리고 **검증(Verification)** 과정으로 구성되어 있습니다. 각각의 과정은 독립적인 것처럼 보이지만, 실제로는 상호 밀접한 관계를 갖고 있습니다. 하나하나 살펴보도록 하겠습니다.

### Requirement

요구사항은 프로젝트를 시작할 때 구체적으로 어떤 입력과 출력이 필요한지 정의하는 것입니다. 이 과목에서는 여러 명이 투입되는 큰 프로젝트 상황을 가정하기 때문에 모두가 이해할 수 있는 명확한 명세서를 작성해야 합니다.

### Analysis

시스템 요구사항을 기술한 후에는 커다란 문제를 작은 단위의 문제로 나누어 다루기 쉽게 만들어야 합니다. 예를 들어 계산기 프로그램을 만드는 프로젝트라면, 이를 인터페이스 디자인 , 연산 기능, 결과 출력 방법 등으로 나누어서 접근하는 방식입니다. 분석 방법에는 작은 단위부터 생각하는 **상향식(Bottom-up)** 접근 방법과 최종 프로그램을 잘개 쪼개는 **하향식(Top-down)** 접근 방법이 있는데, 현재는 하향식 접근 방법을 더 많이 사용하고 있습니다.

### Design

설계 단계에서는 프로그램에서 필요한 자료 객체와 수행할 연산들이 무엇인지를 고안하는 단계입니다. 구체적으로 알고리즘의 명세와 그 알고리즘의 설계 기법을 고려하는 것입니다. 교재에서는 이를 대학의 일정 시스템을 설계하는 것을 예로 들었는데, 자료 객체로는 학생, 과목, 교수 등이 있고 수행할 연산으로는 객체의 삽입(신입생, 신임 교수 등), 삭제(졸업, 자퇴, 퇴직 등), 그리고 검색 등이 있다고 설명하고 있습니다.

단, 설계를 고안하는 것과 어떤 프로그래밍 언어를 사용할지는 다른 문제이기 때문에 구현에 대한 내용은 이 때 다루지 않습니다. 예를 들어, 학생의 데이터를 저장하는데 배열을 쓸지, 아니면 연결 리스트 같은 다른 자료구조를 쓸 지는 이 단계에서 고려하지 않습니다.

### Refinement and Coding

이 단계에서는 자료 객체에 대한 표현을 선택하고 수행하는 연산에 대한 알고리즘을 작성합니다. 특히 자료 객체의 표현 방법은 알고리즘의 효율성을 결정하기 때문에 매우 중요합니다. 자료구조 과목에서 핵심적으로 다루는 부분이 바로 이 부분입니다.

### Verification

검증 단계에서는 프로그램이 올바르게 구현되었는지 증명하고, 여러 입력 케이스를 대입하여 프로그램을 테스트해보아야 합니다. 증명은 보통 수학적인 방법을 사용하기 때문에 학부 수준에서는 거의 다루지 않고, 대학원에서 알고리즘 관련 과목을 들을 때 많이 하게 됩니다. 학부 과목에서는 보통 다양한 입력 케이스를 대입하는 방법을 사용하는데, 일반적인 입력보다는 극단적인 케이스를 넣어야 정확한 평가가 될 수 있습니다.

## Algorithm Specification

알고리즘이란 특정한 일을 수행하는 명령어들의 유한 집합입니다. 모든 알고리즘은 다음 5가지의 조건을 모두 만족해야만 합니다.

1. **입력(Input)** : 외부에서 제공하는 데이터가 0개 이상 존재한다.
2. **출력(Output)** : 적어도 하나의 결과를 생성해야 한다.
3. **명확성(Definiteness)** : 각 명령들은 명확하고 모호하지 않아야 한다.
4. **유한성(Finiteness)** : 알고리즘의 명령대로 수행하면 어떤 경우에도 반드시 종료되어야 한다.
5. **유효성(Effectiveness)** : 모든 명령들은 종이와 연필만으로도 수행가능해야만 한다.

많은 사람들이 알고리즘 = 프로그램이라고 생각하지만, 실제로 이 둘은 다르기 때문에 구별해야만 합니다. 프로그램은 보통 위의 조건 중 유한성을 만족하지 않기 때문입니다. 예를 들어 운영체제(Operating System)는 프로그램이지만, 유한성 조건에 어긋나기 때문에 알고리즘은 아닙니다. 다만 이 교재에서는 반드시 유한성을 만족하는 (= 항상 종료되는) 프로그램만을 다루기 때문에 프로그램과 알고리즘을 같은 의미로 사용합니다.

알고리즘을 표현하는 방법은 **자연어(Natural Language)**, **순서도(Flowchart)**, 그리고 **프로그래밍 언어(Programming Language)** 등이 있습니다. 이 교재에서는 책 제목에서도 알 수 있다시피 대부분 C언어로 표현하였습니다. 다음 두 예제를 통해 어떻게 문제를 알고리즘으로 해결하고, 그것을 C언어로 변환하는지를 보도록 하겠습니다.

### Example 1 - Selection Sort

<span style="color:red">선택 정렬(Selection Sort)</span>은 정렬 알고리즘 중 하나로써, 정렬되지 않은 정수들 중에서 가장 작은 값을 찾아 정렬된 리스트 뒤에 놓는 방법입니다. 먼저 이 문제를 정확하게 명세하면 다음과 같습니다.

**Example 1.1. [Selection Sort]** Sorting a set of $n \ge 1$ integers. From those integers that are currently unsorted, find the smallest and place it next in the sorted list.

이 문제를 해결하는 방법을 C언어와 자연어가 섞인 알고리즘으로 표현하면 다음과 같습니다.

```
for (i = 0; i < n; i++){
    list[i]에서부터 list[n-1]까지의 정수 중 가장 작은 정수를 list[min]이라 한다;
    list[i]와 list[min]의 위치를 바꾼다;
}
```

자연어와 C언어가 섞여있기 때문에 이를 완전한 C 프로그램으로 변환하기 위해서는 자연어로 표현된 부분을 매크로나 함수를 사용해서 바꿔주어야 합니다. 이 알고리즘의 3번째 줄을 C언어 함수로 바꾸면 아래와 같습니다.

```c
void swap(int *x, int *y)
/* x와 y는 정수형 변수 */
{
    int temp = *x;  /* 정수형 변수 temp를 선언하고 x가 가리키는 값을 대입 */
    *x = *y;        /* x가 가리키는 주소에 y가 가리키는 주소의 값을 저장함 */
    *y = temp;      /* y가 가리키는 주소에 temp의 값을 저장 */
}
```

이 함수를 사용하여 Example 1.1 알고리즘의 3번째 줄을 C언어 코드로 대체한다면 `swap(&a, &b);` 로 호출할 수 있습니다. 만약 함수가 아니라 매크로를 사용한다면 다음과 같이 작성이 가능합니다.

```c
#define SWAP(x,y,t) ((t) = (x), (x) = (y), (y) = (t))
```

매크로를 사용해서 선택 정렬 프로그램을 C언어로만 작성한다면 아래와 같은 코드로 구현할 수 있습니다.

{% highlight c linenos %}
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#define MAX_SIZE 101
#define SWAP(x, y, t)  ((t) = (x), (x) = (y), (y) = (t))

void sort(int [], int);  /* 선택 정렬 */

int main(){
    int i, n;
    int list[MAX_SIZE];
    
    printf("생성할 숫자의 갯수를 입력하시오 : ");
    scanf("%d", &n);
    
    srand((unsigned int)time(NULL));     /* 난수 시드 생성 */
    
    if( (n < 1) || n > MAX_SIZE) {       /* 비정상적인 입력에 대한 예외처리 */
        fprintf(stderr, "적절하지 않은 n값입니다.");
        exit(EXIT_FAILURE);
    }
    
    printf("정렬 전 : ");
    for(i = 0; i < n; i++){        /* 입력한 수 만큼 0부터 999까지의 난수 생성 */
        list[i] = rand() % 1000 ;
        printf("%d ", list[i]);
    }
    
    sort(list, n);                 /* 선택 정렬 수행 */
    
    printf("\n정렬 후 : ");         /* 정렬 결과 출력 */
    for(i = 0; i < n; i++)
        printf("%d ", list[i]);
    printf("\n");
    
    return 0;
}

void sort(int list[], int n){
    int i, j, min, temp;
    for (i = 0; i < n-1; i++){
        min = i;
        for (j = i+1; j < n; j++){
            if (list[j] < list[min])
                min = j;
        }
        SWAP(list[i], list[min], temp);
    }
}
{% endhighlight %}

교재에 나온 프로그램과 약간 차이가 있는데, 제가 테스트했을 때 몇 가지 컴파일 에러가 발생하여 수정하였습니다. 참고로 저는 애플의 LLVM 컴파일러를 사용하였습니다.

프로그램을 작성하고나면, 이 프로그램이 목적에 맞게 정확한 결과를 도출하는지 증명해야합니다. 사실 학부 과목에서 알고리즘에 대한 증명은 보통 넘어가곤 하지만, 어떤 것인지를 보여드리기 위해 이번에만 짚고 넘어가도록 하겠습니다.

**Theorem 1.1** 함수 `sort(list, n)`은 $n \ge 1$개의 정수를 정확하게 정렬하여, 그 결과는 list[0] $\le$ list[1] $\le ... \le$ list[n-1]이 된다.

**Proof**    $n$보다 작은 $i = q$에 대해, sort()의 첫 번째 for문이 완료되면 $q \lt r \lt n$인 $r$에 대해 list[q] $\le$ list[r]이 성립한다. 또한 다음 for문에서는 $i$가 $q$보다 커지고, list[0]부터 list[q]까지는 변하지 않는다. 따라서 첫 번째 for문을 마지막까지 수행하고 나면, (즉, $i = n -2$까지 수행하고 나면) list[0] $\le$ list[1] $\le ... \le$ list[n-1]이 된다.

<p style="text-align:right">□</p>

### Example 2 - Binary Search

다음 예제는 탐색 알고리즘 중 하나인 <span style="color:red">이진 탐색(Binary Search)</span>입니다. 리스트를 절반씩 나누어 원하는 숫자가 리스트 안에 있는지 찾는 알고리즘입니다. 이 문제를 정확하게 명세하면 아래와 같습니다.

**Example 1.2 [Binary Search]** Find out if an integer searchnum is in a sorted list. If so, return $i$ such that list[i] = searchnum, Otherwise, return -1.

이진 탐색에서는 배열 list가 (오름차순으로) 정렬되어있기 때문에, 왼쪽 끝을 left, 오른쪽 끝을 right로 정의하여 이 구간을 줄여나가는 방식으로 숫자를 찾는 방법을 사용합니다. 초기 값을 left = 0, right = n - 1로 놓고, 중간 위치 middle = (left + right)/2로 설정하여 list[middle]과 searchnum을 비교하여 다음과 같은 경우 중 하나를 고려합니다.

1. searchnum $<$ list[middle] : 이 경우에는 searchnum이 list[0]과 list[middle - 1] 사이에 있다는 뜻이므로 right = middle - 1로 설정한다.
2. searchnum $=$ list[middle] : searchnum과 동일한 숫자를 찾았으므로 middle을 반환하면 된다.
3. searchnum $>$ list[middle] : 첫 번째와는 반대로 searchnum이 list[middle + 1]과 list[n - 1] 사이에 있다는 뜻이므로 left = middle + 1로 설정한다.

이를 C언어와 자연어가 섞인 알고리즘으로 표현한다면 아래와 같습니다.

```c
while ( 확인할 정수가 남아있다면 ) {
    middle = (left + right) / 2;
    if (searchnum < list[middle])
        right = middle - 1;
    else if (searchnum == list[middle])
        return middle;
    else
        left = middle + 1;
}
```

이 알고리즘을 C언어로 완전히 변환하려면 while 문 안의 조건만 C언어로 바꾸어주면 됩니다. 알고리즘대로 반복한다면 searchnum을 찾지 못한 경우 left는 점점 커지고, right는 점점 작아지기 때문에 결국에는 searchnum을 찾던가, 아니면 인덱스가 어긋나서 left가 right보다 커지는 상황이 발생하게 됩니다. left와 right는 탐색 범위를 나타내기 때문에 이것들이 어긋나면 검사할 원소가 없다는 뜻이 됩니다. 따라서 여기서는 비교 연산을 통해 while문 내의 조건을 구현할 것입니다.

비교 연산은 선택 정렬의 `swap()`처럼 함수로 구현할 수도 있고 매크로로 구현할 수도 있습니다. 먼저 함수로 구현하게 되면 다음과 같습니다.

```c
int compare(int x, int y)
/* x와 y를 비교하여 x가 y보다 크면 1, 같으면 0, 작으면 -1을 반환한다 */
{
    if (x < y)
        return -1;
    else if (x == y)
        return 0;
    else
        return 1;
}
```

매크로를 사용하면 이렇게 표현할 수 있습니다.

```c
#define COMPARE(x, y) (((x) < (y)) ? -1 : ((x) == (y)) ? 0 : 1)
```

이 교재에서는 데이터 타입에 제한이 없는 매크로를 사용하겠다고 말하고 있습니다. 저는 프로그램을 만들 때 가독성의 문제로 매크로를 잘 사용하지 않는 편인데, 이 책이 매크로를 선호하므로 저자의 의견을 존중하여 매크로를 기준으로 설명하겠습니다.

매크로를 사용하여 이진 탐색을 완전한 C 프로그램으로 구현하면 다음과 같이 작성할 수 있습니다.

{% highlight c linenos %}
#include <stdio.h>
#define MAX_SIZE 101
#define COMPARE(x, y)  (((x) < (y)) ? -1 : ((x) == (y)) ? 0 : 1)

int binsearch(int [], int, int, int);  /* 이진 탐색 */

int main(){
    int i, n;
    int list[MAX_SIZE], result;
    
    for(i = 0; i < MAX_SIZE; i++){     /* list에 0부터 (MAX_SIZE-1) * 2까지의 짝수 대입 */
        list[i] = i * 2;
    }
    
    printf("찾는 숫자를 입력하시오 : ");
    scanf("%d", &n);
    
    result = binsearch(list, n, 0, MAX_SIZE - 1);  /* 이진 탐색 수행 후 결과를 저장 */
    if(result == -1)    /* 탐색 결과 출력 */
        printf("해당 숫자는 list에 존재하지 않습니다.\n");
    else
        printf("해당 숫자는 list[%d]에 존재합니다.\n", result);
    
    return 0;
}

int binsearch(int list[], int searchnum, int left, int right){
/* 오름차순으로 정렬된 list에서 searchnum을 탐색 후, 찾으면 그 위치를 반환하고 그렇지 않으면 -1을 반환 */
    int middle;
    while (left <= right) {
        middle = (left + right)/2;
        switch (COMPARE(list[middle], searchnum)) {
            case -1 : left = middle + 1;
                break;
            case 0 : return middle;
            case 1 : right = middle - 1;
        }
    }
    return -1;
}
{% endhighlight %}

교재에는 `binsearch()` 함수만 수록되어 있지만, 저도 연습할겸 완전한 프로그램으로 만들어서 보여드리는 것이 좋을 것 같아 전체 프로그램을 구현해 봤습니다. `main()` 함수는 선택 정렬 프로그램과 비슷하게 작성했습니다. 프로그램을 실행해보기 전에 searchnum을 찾았을 때와 그렇지 않았을 때 어떤 방식으로 동작하는지 생각해보시기 바랍니다.

## Recursive Algorithms

<span style="color:red">재귀(Recursive)</span>는 함수의 제어 방법 중 하나입니다. 재귀에는 두 종류가 있는데, 함수의 수행이 완료되기 전에 자기 자신을 다시 호출하는 <span style="color:red">직접 재귀(Direct Recursion)</span>와 호출 함수를 다시 호출하게 되어 있는 <span style="color:red">간접 재귀(Indirect Recursion)</span> 방법이 있습니다.

재귀를 사용할 때 가장 문제가 되는 부분은 **어떤 문제에서 재귀를 사용할 수 있나?** 입니다. 보통 문제 자체가 재귀적으로 정의되어 있다면, 그 문제는 재귀 알고리즘을 사용해서 해결할 수 있습니다. 예를 들어, 이항 계수(Binomial Coefficient)를 구하는 문제가 있습니다. 이항 계수의 공식은 다음과 같습니다.

$${n \choose r} = \frac{n!}{r!(n-r)!}$$

하지만 파스칼의 삼각형(Pascal's Triangle)을 사용한다면, 이항 계수를 다음과 같이 재귀적으로 표현할 수 있습니다.

$${n \choose r} = {n-1 \choose r} + {n-1 \choose r-1}$$

따라서 이항 계수를 구하는 문제는 재귀 알고리즘으로 해결할 수 있습니다.

### Example 3 - Recursive Binary Search

보다 구체적인 예시로, 이전에 사용했던 이진 탐색 알고리즘을 재귀 방법으로 바꿔보겠습니다.

**Example 1.3 [Binary Search by Recursion]** Example 1.2의 알고리즘을 재귀 방법으로 변환한다.

이 알고리즘을 재귀 방식으로 변환하기 위해서는 두 가지를 고려해야 합니다. 첫째로 언제 재귀 호출이 끝나는지 탈출 조건을 정해주어야 합니다. 이진 탐색에서는 함수가 끝나는 조건으로 list[middle] = searchnum이 되어 탐색에 성공한 경우와, left가 right보다 커져 탐색에 실패하는 경우가 있습니다. 탐색에 성공한 경우에는 이미 return을 사용했기 때문에 수정할 필요가 없지만, 탐색에 실패한 경우는 조건문을 통해 종료 조건을 설정해줘야만 합니다. 따라서 이진 탐색을 재귀 호출할 때, left와 right를 매개변수로 넣어줘야만 합니다.

둘째로, 재귀 함수가 호출될 때마다 해답에 점점 가까워져야 합니다. 이것은 매번 이진 탐색을 할 때 left나 right의 값을 변화시키면서 범위를 줄이므로, 이전과 마찬가지로 매개변수에 넣기만 하면 간단하게 해결할 수 있습니다. 다음은 이진 탐색을 재귀 방법으로 변환한 프로그램입니다.

{% highlight c linenos %}
#include <stdio.h>
#define MAX_SIZE 101
#define COMPARE(x, y)  (((x) < (y)) ? -1 : ((x) == (y)) ? 0 : 1)

int binsearch(int [], int, int, int);  /* 이진 탐색 */

int main(){
    int i, n;
    int list[MAX_SIZE], result;
    
    for(i = 0; i < MAX_SIZE; i++){  /* list에 0부터 (MAX_SIZE-1) * 2까지의 짝수 대입 */
        list[i] = i * 2;
    }
    
    printf("찾는 숫자를 입력하시오 : ");
    scanf("%d", &n);
    
    result = binsearch(list, n, 0, MAX_SIZE - 1);  /* 이진 탐색 수행 후 결과를 저장 */
    if(result == -1)
        printf("해당 숫자는 list에 존재하지 않습니다.\n");
    else
        printf("해당 숫자는 list[%d]에 존재합니다.\n", result);
    
    return 0;
}

int binsearch(int list[], int searchnum, int left, int right){
/* 오름차순으로 정렬된 list에서 searchnum을 탐색 후, 찾으면 그 위치를 반환하고 그렇지 않으면 -1을 반환 */
    int middle;
    if (left <= right) {
        middle = (left + right)/2;
        switch (COMPARE(list[middle], searchnum)) {
            case -1 : return binsearch(list, searchnum, middle + 1, right);
            case 0 : return middle;
            case 1 : return binsearch(list, searchnum, left, middle - 1);
        }
    }
    return -1;
}
{% endhighlight %}

`main()` 함수는 그대로이고 `binsearch()` 함수의 내용만 조금 바뀌었습니다. while문이 if문으로 바뀌었고, switch문의 각 케이스가 모두 반환 값을 가진 모습입니다. binsearch를 호출할 때마다 left 또는 right가 수정되어 범위가 점점 좁아짐을 알 수 있습니다.

### Example 4 - Permutations

이번에는 재귀를 사용해 처음부터 문제를 해결해보겠습니다. 이번 예제에서는 순열을 구하는 문제를 재귀 방법으로 해결하는 과정을 보여줍니다.

이번에는 재귀를 사용해 처음부터 문제를 해결해보겠습니다. 이번 예제에서는 순열을 구하는 문제를 재귀 방법으로 해결하는 과정을 보여줍니다.

**Example 1.4 [Permutations]** $n \ge 1$개의 원소를 가진 집합이 주어졌을 때, 이 집합의 모든 가능한 순열을 출력한다.

순열은 주어진 원소를 나열하는 경우의 수를 모두 구하는 문제입니다. 예를 들어 주어진 집합이 $\\{a, b, c \\}$라면, 순열의 집합은 $\\{(a, b, c), (a, c, b), (b, a, c), (b, c, a), (c, a, b), (c, b, a) \\}$입니다. $n$개의 원소에 대해 $n!$개의 서로 다른 결과가 나오는 것을 알 수 있습니다.

만약 4개의 원소 $\\{a, b, c, d \\}$로 된 집합에서 순열을 구하는 알고리즘을 생각해봅시다. 첫 문자가 어떤 문자인지에 따라 경우의 수를 나누면 아래와 같이 문제를 나눌 수 있습니다.

1. $a$로 시작하는 $\\{b, c, d \\}$의 모든 순열
2. $b$로 시작하는 $\\{a, c, d \\}$의 모든 순열
3. $c$로 시작하는 $\\{a, b, d \\}$의 모든 순열
4. $d$로 시작하는 $\\{a, b, c \\}$의 모든 순열

이 뜻은, $(n - 1)$개의 원소를 가진 집합에 대해 순열을 구하는 알고리즘이 있다면,  $n$개의 원소를 가진 집합에 대해 순열을 구하는 알고리즘도 계산할 수 있다는 것을 의미합니다. 그렇다면 가장 간단하게 $i = 1$부터 $i = n$까지 역순으로 순열을 재귀 생성하면 해결이 가능합니다. 이를 C언어로 구현하면 다음과 같습니다.

{% highlight c linenos %}
#include <stdio.h>
#include <stdlib.h>
#define ALPHABET 26
#define SWAP(x, y, t)  ((t) = (x), (x) = (y), (y) = (t))

void perm(char *, int, int);

int main(){
    int i, n;
    char list[ALPHABET];
    
    printf("집합 원소의 갯수를 입력하시오 : ");
    scanf("%d", &n);
    
    if( (n < 1) || n > ALPHABET) {      /* 비정상적인 입력에 대한 예외처리 */
        fprintf(stderr, "적절하지 않은 n값입니다.");
        exit(EXIT_FAILURE);
    }
    
    printf("주어진 집합 : ");
    for(i = 0; i < n; i++){             /* a부터 차례대로 list에 삽입 및 출력 */
        list[i] = 'a' + i;
        printf("%c ", list[i]);
    }
    printf("\n순열의 집합 : ");
    
    perm(list, 0, n - 1);
    
    printf("\n");
    return 0;
}

void perm(char *list, int i, int n){
    /* list[i]부터 list[n]까지의 모든 순열을 생성 */
    int j, temp;
    if (i == n) {
        for (j = 0; j <= n; j++){
            printf("%c", list[j]);
        }
        printf("   ");
    }
    else {
        /* list[i]부터 list[n]까지 한 개 이상의 순열이 존재한다면, 재귀를 통해 생성 */
        for(j = i; j <= n; j++) {
            SWAP(list[i], list[j], temp);
            perm(list, i+1, n);
            SWAP(list[i], list[j], temp);
        }
    }
}
{% endhighlight %}

교재에는 `perm()` 함수만 나와있지만, 제가 임의로 `main()` 함수를 포함한 전체 프로그램을 구현했습니다. 입력으로 26 이하의 숫자를 받아, 그 개수만큼의 알파벳을 가지는 집합을 생성합니다. 예를 들어, 3을 입력하면 $\\{a, b, c \\}$가 되는 방식입니다.

이후로는 `perm()` 함수를 호출하여 순열을 구합니다. `main()` 함수에서 처음 호출할 때는 `perm(list, 0, n-1);`을 사용하고, `perm()` 함수에서는 else 부분으로 넘어가게 됩니다. 이 곳의 for문이 조금 비직관적이므로 손으로 어떤 순서대로 `perm()` 함수가 호출되는지 직접 종이로 그려가며 분석해보시는 것을 추천드립니다. 확인해보시면 어떤 방식으로 순열을 호출하는지 눈에 들어옵니다. 저는 처음 이 프로그램을 보았을 때 굉장히 신기했습니다.