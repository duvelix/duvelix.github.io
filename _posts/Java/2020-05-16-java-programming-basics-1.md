---
title: "Java Programming Basics (1)"
permalink: /java/java-programming-basics-1/
toc: true
toc_label: "Table of Contents"
toc_sticky: true
categories:
  - studies
tags:
  - java
---

## A "Hello, World!" Program

Java는 객체 지향 프로그래밍(Object Oriented Programming) 언어입니다. 이것은 Java의 모든 것들은 <span style="color:red">객체(Object)</span>로 이루어져 있다는 뜻입니다. 객체라는 것은 <span style="color:red">클래스(Class)</span>의 <span style="color:red">인스턴스(Instance)</span>를 의미합니다. 이해를 돕기 위해, Java IDE를 설치할 때 테스트했던 HelloWorld 프로그램을 예로 들어보겠습니다.

{% highlight java linenos %}
public class Main { 
    public static void main(String[] args){ 
        // TODO Auto-generated method stub 
        System.out.println("Hello World!"); 
    } 
}
{% endhighlight %}

프로그램 첫 줄 `public class Main`을 통해 이 프로그램은 Main 라는 이름의 클래스를 갖고 있음을 알 수 있습니다. 클래스 안에는 <span style="color:red">메소드(Method)</span>라는 것을 가질 수 있는데, 메소드는 클래스에서 생성된 인스턴스와 관련된 동작을 의미합니다. 쉽게 말하자면 C언어에서의 사용자 정의 함수와 비슷하다고 보시면 됩니다. 이 프로그램에서는 main 메소드 하나가 존재합니다.

main 메소드는 프로그램이 실행될 때 가장 먼저 시작되는 부분입니다. main 바로 앞에 붙은 void는 이 메소드가 아무런 반환값(return)이 없다는 의미이고, 그 앞에 붙은 static은 인스턴스가 필요하지 않는다는 뜻입니다. 이런 메소드를 <span style="color:red">정적 메소드(Static Method)</span>라고 부릅니다.

HelloWorld 클래스와 main 메소드 맨 앞에 붙은 public은 <span style="color:red">접근 지정자(Access Modifier)</span>라고 부르는데, 이 부분은 중요한 부분이니 나중에 따로 설명하도록 하겠습니다. 일단 클래스와 메소드 앞에는 주로 public으로 선언된다 정도만 알고 넘어갑시다.

main 메소드 다음 줄에 있는 `//`는 <span style="color:red">주석(Comment)</span>을 의미합니다. 주석이라는 것은 프로그래머가 자신, 또는 타인을 위해 설명을 달아놓는 것으로 프로그램 실행에서는 무시되는 부분입니다.  주석을 한 줄만 달 때는 `//`로 표시하지만, 여러 줄을 만들고 싶은 경우에는 `/* */`를 사용하시면 됩니다. 이것은 `/*`부터 `*/`까지 모든 내용을 주석으로 처리하겠다는 의미입니다.

주석 다음줄에 있는 `System.out.println("Hello World!");` 또한 메소드입니다. 앞에 붙은 System.out은 표준 출력(Standard Output)을 의미합니다. 표준 출력이라 함은 프로그램이 출력 데이터를 기록하는 스트림으로써, 쉽게 얘기하면 터미널에 출력하는 것을 의미합니다. 이 프로그램에서는 Hello World! 라는 문자열(String)을 출력하기 위해 사용되었습니다.

실행 결과는 지난 포스트에서도 보셨다시피 Hello World!가 출력됩니다.

## Calling Methods in Java

JAVA에서는 모든 것들이 객체로 이루어져 있다고 했는데, 상수 문자열 역시 예외는 아닙니다. HelloWorld 프로그램에서 "Hello World!" 부분 또한 String 클래스의 인스턴스로 분류됩니다. 따라서 이런 문자열에서도 String 클래스에 들어있는 메소드를 호출할 수 있습니다. 예를 들어, 다음과 같이 상수 문자열에서 메소드를 호출하는 것도 가능합니다.

{% highlight java linenos %}
public class Main {
    public static void main(String[] args){
        System.out.println("Hello World!".length());
    }
}
{% endhighlight %}

`length()` 라는 메소드는 문자열 인스턴스의 길이를 출력해주는 기능을 갖고 있습니다. 그러므로  HelloWorld2 프로그램을 실행시켜보면, Hello World! 문자열의 길이인 12가 출력됨을 알 수 있습니다.

System.out 같은 메소드는 이미 만들어진 메소드이기 때문에 어떤 Java 프로그램에서든 바로 사용할 수 있지만, 그렇지 않은 메소드들은 사용할 때마다 일일이 선언해주어야 합니다. 다행히도, 자주 사용하는 클래스와 메소드는 이미 만들어져 있기 때문에, 원하는 기능이 포함된 라이브러리를 불러오기만 하면 바로 사용할 수 있습니다.

예를 들어서, 프로그램에서 많이 쓰이는 난수 생성을 구현해봅시다. 난수 생성에 관련된 클래스는 Random으로, 이 클래스를 갖고있는 `java.util.Random` 라이브러리를 불러오면 바로 사용할 수 있습니다. 라이브러리를 불러오는 방법은 import 라는 명령어 뒤에 원하는 라이브러리의 이름을 넣으면 됩니다. 이를 통해 간단한 난수 생성 프로그램을 구현해보면 다음과 같습니다.

{% highlight java linenos %}
import java.util.Random;

public class Main {
    public static void main(String[] args){
        Random number = new Random();
        System.out.println(number.nextInt());
    }
}
{% endhighlight %}

MyRandom 프로그램은 가장 먼저 java.util.Random 라이브러리를 불러온 다음, main 메소드에서 Random 클래스의 새로운 인스턴스인 number 객체를 생성합니다. Random 클래스에는 무작위 정수를 반환하는 nextInt()라는 메소드가 존재하므로, Random 클래스의 인스턴스인 number에서 nextInt() 메소드를 호출합니다. MyRandom 프로그램을 여러번 실행해보시면, 실행할 때마다 무작위 정수가 출력되는 것을 확인할 수 있습니다.

이렇게 라이브러리를 불러올 때는 반드시 **프로그램 맨 위**에서 불러와야 한다는 것에 주의하시기 바랍니다.

## Primitive Types

Java에서는 대부분의 변수 또한 객체이지만, 그렇다고 해서 일반적인 변수가 없는 것은 아닙니다. 대부분의 프로그래밍 언어와 비슷하게 변수의 자료형이 존재합니다. 예를 들어 정수 자료형은 다음과 같이 byte, short, int, long으로 나눌 수 있습니다.

- byte (1 byte) : -128 ~ 127
- short (2 bytes) : -32,768 ~ 32,767
- int (4 bytes) : -2,147,483,648 ~ 2,147,483,647
- long (8 bytes) : -9,223,372,036,854,775,808 ~ 9,223,372,036,854,775,807

사실 이렇게 다양한 정수 자료형이 존재하지만, 가장 많이 사용하는 자료형은 int입니다. 요즘에는 변수 크기에 신경쓰지 않아도 프로그램이 돌아가는데 지장이 없기 때문에 작은 숫자만 사용한다고 하더라도 그냥 int를 사용하는 경우가 많습니다. 물론 시험 문제를 내기에는 아주 좋기 때문에 자료형의 범위에 관련된 시험문제는 자주 보이는 편입니다. 예를 들어, 아래와 같이 프로그램이 주어지고 그 결과가 무엇인지를 쓰는 문제가 있습니다.

{% highlight java linenos %}
public class Main {
    public static void main(String[] args) {
        byte b = 125;
        for(int i = 1; i <= 6; i++)
            System.out.print(b++ + " ");
    }
}
{% endhighlight %}

위의 프로그램은 127까지의 정수만 표현할 수 있는 byte형 변수 b에 125를 대입하고, 1씩 더해나가면서 그 결과를 출력하는 프로그램입니다. 125, 126, 127까지는 정상적으로 출력될텐데, 그 이후로는 어떤 숫자가 출력될까요?

dtByte 프로그램을 실행시켜보면 재밌게도 127 다음에 -128이 출력되는 것을 볼 수 있습니다. 이는 해당 변수가 가질 수 있는 최대의 값을 넘는 <span style="color:red">오버플로(Overflow)</span>가 일어났기 때문입니다. 예를 들어, 2진수 숫자 1111에 1을 더하면 10000이 되어야 하지만, 표현할 수 있는 비트의 한계로 0000으로 표현되는 것과 같은 이치입니다.

Java에는 정수 자료형 뿐만 아니라 실수 자료형 또한 존재합니다. 정수 자료형처럼 다양하지는 않고, float와 double 타입만 존재합니다. float는 4바이트, double은 8바이트의 크기를 차지하는데, 재밌게도 Java에서는 실수 입력에 대해서 기본적으로 double로 인식합니다.

그 외에 문자 자료형(char)과 불 자료형(boolean)이 존재합니다만, 그렇게 많이 사용하지는 않습니다. C언어와는 다르게 Java에서는 문자열을 저장하는 String이 따로 있기 때문에 char는 특별한 경우 외에는 잘 쓰이지 않고, boolean에서 true/false는 1과 0에 대응하지 않기 때문에 역시 잘 쓰이지 않습니다. 게다가 불 자료형은 정수 자료형으로 변환할 수도 없기 때문에 더욱 외면받곤 합니다.

## Variables

Java에서 변수를 사용하려면 사용하기 전에 반드시 선언을 먼저 해주어야 합니다. 변수 선언 방법은 C언어와 유사한데, 아래와 같은 방법이 모두 허용됩니다.

```java
int number;
int number = 10; // 선언 후 초기화
int number = 10, sum; // 여러 선언을 한 줄에 표현
Random number = new Random(); // 선언 후 클래스 인스턴스화
```

변수 이름은 <span style="color:red">영문자</span>와 <span style="color:red">숫자</span>, 그리고 <span style="color:red">_ (언더바)</span>와 <span style="color:red">$</span>를 사용할 수 있습니다. 단, 첫 글자에 숫자를 사용할 수는 없습니다. 변수 이름을 짓는 것은 순전히 프로그래머 마음이긴 하지만, 여러 명이 작업하는 환경에서는 가독성을 위해 암묵적인 규칙을 정해놓았습니다. 몇몇 예시를 소개해드리면 아래와 같습니다.

1. 변수 이름과 메소드 이름은 영어 소문자로 시작하고, 단어의 구분이 필요할 때는 첫 글자를 대문자로 작성합니다. 언더바는 사용하지 않습니다. ex) `int myVar;` `int myMethod()`
2. 상수 이름은 모든 글자를 대문자로 표현하고, 단어의 구분은 언더바를 사용합니다. ex) `final int MY_CONST = 1;`
3. 클래스 이름은 대문자로 시작하고 단어의 구분은 첫 글자를 대문자로 작성합니다. 언더바는 사용하지 않습니다. ex) `public class MyClassName`

이 외에도 주석이나 중괄호에 대한 규칙도 있습니다만, 내용이 길어 여기에 작성하지는 않겠습니다. 자세하게 알아보고 싶으신 분은 아래 사이트를 참고하시기 바랍니다.

- [How To Document and Organize your Java Code (영문)](http://www.edparrish.net/common/javadoc.html)

## Arithmetic Operators

Java에서 사용되는 연산자 또한 다른 프로그래밍 언어와 매우 유사합니다. = 기호는 수학적인 의미의 등호가 아니라 대입에 사용됩니다. 예를 들어 `a = 10;` 은 a라는 변수에 10을 대입한다는 뜻이 됩니다. 이러한 연산자의 종류는 매우 많고, 우선 순위의 문제도 있어 복잡하므로, 하나하나 자세히 소개하도록 하겠습니다.

### Unary Operators

<span style="color:red">단항 연산자(Unary Operator)</span>는 해당 변수의 값을 증가시키는 ++과 감소시키는 --가 있는데, 연산자를 어디에 붙이느냐에 따라 결과가 달라집니다. 만약 ++/--를 변수 앞에 붙인다면 그 즉시 연산을 수행하고, 변수 뒤에 붙인다면 해당 줄이 끝날 때 연산이 수행됩니다. 예를 들어, a라는 변수에 10이 저장되어 있다고 가정했을 때 `b = a++;`를 수행하면 b에 a의 값인 10을 대입한 다음 a가 1 증가하지만, `b = ++a;`를 수행하면 a가 먼저 1 증가한다음 b에는 11이 들어가게 됩니다.

이러한 증감 연산자의 위치 문제는 간단하지만 충분히 헷갈릴 수 있는 문제이기 때문에, 역시 시험 문제로 단골 출제되는 문제입니다. 아래 프로그램의 출력이 무엇일지 한번 생각해보세요.

{% highlight java linenos %}
public class opPlus {
    public static void main(String[] args) {
        int x=1;
        System.out.println("x:" + x);
        for (int i=1 ; i<=3 ; i++)
            System.out.print("x:" + x++ + " ");
        System.out.println("\nx:" + x);
        x = x*10;
        System.out.println("\nx:" + x);
        for (int i=1 ; i<=3 ; i++)
            System.out.print("x:" + ++x + " ");
        System.out.println("\nx:" + x);
    }
}
{% endhighlight %}

opPlus 클래스를 직접 실행해보기 전에 한줄 한줄 따라가보며 어떤 출력이 나오는지 알아봅시다. 변수 x는 1로 초기화가 되었고, 그 아래에는 for 라는 함수가 나옵니다. 이것은 반복문으로써, 동일한 동작을 반복한다는 의미입니다. 일단은 for 바로 다음 줄(7번째 줄)에 있는 코드가 3번 반복 실행된다는 것만 알고 넘어갑시다.

7번째 줄에 있는 코드를 보니 x++를 출력하는 부분이 있습니다. 위에서 말했듯이 증감 연산자가 변수 뒤에 붙으면 해당 줄이 끝나고 증감이 일어납니다. 즉, 처음 7번째 줄이 실행될 때는 x가 1로 출력됩니다. 두 번째는 2, 그 다음에는 3이 출력 되겠죠.

3이 출력된 다음에도 그 줄이 끝났을 때 ++가 실행되므로 8번째 줄에서는 x가 4로 출력됩니다. 9번째 줄에서는 x에 10을 곱해주니, x에는 40이 들어가게 됩니다. 9번째 줄에서 x의 현재 값을 출력하니 40이 출력되겠고, 그 다음에는 7번째 줄과 마찬가지로 또 반복문이 들어왔습니다.

여기에서도 12번째 줄을 3번 실행시키는데, 이번에는 증감 연산자가 변수 앞에 붙었습니다. 증감 연산자가 앞에 붙으면 연산이 먼저 일어나므로, 41, 42, 43이 차례로 출력됩니다. 13번째 줄에서는 현재의 x값을 출력하니 43이 그대로 출력될 것입니다.

### Binary Operators

<span style="color:red">이항 연산자(Binary Operator)</span>는 흔히 알고 있는 **+(덧셈)**, **-(뻴셈)**, ***(곱셈)**, **/(나눗셈)**, **%(나머지)** 등이 있습니다. 이항 연산자에서 하나 주의하실 점은, 변수가 어떤 자료형인지에 따라 결과 값의 자료형이 바뀌게 됩니다. 만약에 double로 선언된 변수가 하나라도 있을 경우, 연산의 결과값은 double로 처리됩니다. 같은 이유로, float + int 같은 경우도 float로 처리되고 long + int라고 해도 long으로 처리됩니다.

이 말은 결과를 저장하는 변수가 반드시 해당 자료형으로 선언되어야만 한다는 뜻입니다. 그렇게 하지 않으면 어떻게 될까요? 아래 dtDouble 프로그램을 봅시다.

{% highlight java linenos %}
public class dtDouble {
    public static void main(String[] args) {
        int a = 4;
        double b = 3.14;
        int c = a + b;
        System.out.println("c: " + c);
    }
}
{% endhighlight %}

dtDouble 클래스는 int 변수 a와 double 변수 b를 더한 다음, 그 결과를 int 변수 c에 넣고 그 결과를 출력하는 프로그램입니다. C언어에서 이런 프로그램을 구현한다면 그냥 소수점 아래 부분만 생략되고 정상적으로 프로그램이 돌아가지만, Java에서는 아예 컴파일 에러를 일으킵니다.

이 오류를 해결하기 위해서는 변수 c를 double로 선언하거나, 아니면 <span style="color:red">자료형 변환(Type Casting)</span>을 사용해야 합니다. 자료형 변환은 강제적으로 자료형을 바꿔주는 역할로, 해당 값 앞에 (자료형)을 선언해주면 됩니다. dtDouble에서 자료형 변환을 사용한다면 아래와 같습니다.

{% highlight java linenos %}
public class dtDouble2 {
    public static void main(String[] args) {
        int a = 4;
        double b = 3.14;
        int c = (int)(a + b);
        System.out.println("c: " + c);
    }
}
{% endhighlight %}

dtDouble2에서 수정된 부분은 (a+b)의 연산을 먼저 수행한 다음, (int)를 붙여줌으로써 결과 값을 강제로 int 자료형으로 변환한 부분입니다. int 자료형으로 변환이 된다면, int 자료형 변수인 c에 정상적으로 대입이 가능하므로 오류가 나오지 않습니다. dtDouble2를 실행해보시면 변수 c에 7이 저장되는 것을 확인할 수 있습니다.

### Logical Operators

<span style="color:red">논리 연산자(Logical Operator)</span>는 주로 조건문에서 많이 쓰이는 연산자입니다. 논리형 연산자의 결과는 무조건 불 자료형인 **true** 또는 **false** 로만 나옵니다. 종류가 꽤 많은데, 대부분 직관적으로 이해 가능한 표현입니다.

- == (equal)
- != (not equal)
- < (less than)
- \> (greater than)
- <= (less than or equal)
- \>= (grater than or equal)
- && (logical AND)
- \|\| (logical OR)
- ! (logical NOT)

이 중 logical AND/logical OR 연산자의 경우 주의하실 점이 있습니다. 만약에 왼쪽 항만으로도 결과를 낼 수 있을 경우, 오른쪽 항은 실행되지 않고 그냥 넘어갑니다.

{% highlight java linenos %}
public class opLogical {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        int c = 30;
        System.out.println( (a < b) || (++a < c) );
        System.out.println( "a : " + a);
    }
}
{% endhighlight %}

opLogical 클래스는 (a < b) 와 (++a < c)의 논리합의 결과를 출력하고, 다음 줄에 a의 값을 출력하는 프로그램입니다. 논리합은 둘 중 하나만 true라면 결과가 true가 됩니다. 여기서는 a가 10이고, b가 20이니 a < b라는 명제가 true이므로, 첫 줄에서는 true라는 결과가 출력될 것입니다.

문제는 (++a < c) 부분 입니다. ++a 코드로 인해 a는 1이 증가한 11의 값을 갖고 있어야 합니다. 하지만 실제로 이 프로그램을 실행해보면 a의 값은 그대로 10임을 확인할 수 있습니다.

따라서 논리합/논리곱 연산자에서는 가급적이면 증감 연산자를 추가하지 않는 것이 좋습니다.

### Assignment Operators

<span style="color:red">대입 연산자(Assignment Operators)</span>는 말 그대로 대입을 하기 위한 연산자입니다. 이전에 대입을 위해서는 =가 쓰인다고 말했지만, =에 다른 연산자를 추가함으로써 증감 연산을 한번에 수행할 수 있습니다.

가장 많이 쓰이는 응용 대입 연산자는 사칙연산을 섞은 대입 연산자입니다. 종류로 +=, -=, *=, /=, %=가 있는데, 이것은 원래 변수에 해당 값을 더한 다음 다시 대입을 시킨다는 의미입니다. 예를 들어 `a *= 10;` 의 뜻은 변수 a에 10을 곱한 다음, 그 값을 다시 a에 대입한다는 뜻입니다.

대입 연산자를 한 번에 여러번 사용할 수도 있기 때문에, 이걸로 재밌는 문제를 만들 수도 있습니다. 아래의 프로그램을 보시고 어떤 결과가 나올지 예상해보세요.

{% highlight java linenos %}
public class opAssignment {
    public static void main(String[] args) {
        int a = 10, b = 10, c = 10, d = 10;

        a += b -= c *= d /= 5;

        System.out.println("a : " + a);
        System.out.println("b : " + b);
        System.out.println("c : " + c);
        System.out.println("d : " + d);
    }
}
{% endhighlight %}

opAssignment 클래스는 먼저 4개의 변수 a, b, c, d를 10으로 정의하고 한번에 여러 대입 연산자를 사용하고 있습니다. 이렇게 대입 연산자가 한 줄에 여러개 쓰일 때는 가장 오른쪽부터 계산해주시면 됩니다. `d /= 5` 는 d를 5로 나눈 값을 다시 d에 넣으니 2가 저장이 되고, 다음으로 `c *= d` 를 계산하면 c에 2를 곱한 결과인 20을 c에 넣게 되는 방식입니다. 이런식으로 a까지 계산을 순차적으로 처리합니다. 결과는 위의 Run을 누르셔서 직접 확인해보시기 바랍니다.

대입 연산자에는 >>= 등의 비트 대입 연산자도 있습니다만, 특별한 경우가 아니라면 잘 사용하지 않으니 이 부분은 생략하도록 하겠습니다.

### Conditional Operators

<span style="color:red">조건 연산자(Conditional Operators)</span>는 조건에 따라 어떤 값을 넣을지 정하는 연산자입니다. 시험에서는 많이 나오긴 하지만, 저는 개인적으로 불편해서 조건문을 쓰지 조건 연산자를 사용하진 않습니다. 조건 연산자는 `time < 12 ? “am” : “pm”` 와 같이 사용합니다. ?를 기준으로 왼쪽이 조건, 오른쪽이 결과에 따른 값을 나타낸 것입니다. : 왼쪽에 있는 부분은 조건이 true일 때의 결과, 오른쪽은 조건이 false일 때의 결과입니다. 위의 조건 연산자를 해석하면, time이라는 변수가 12보다 작으면 결과가 am이 나오고, 크면 pm이 나오게 됩니다.

{% highlight java linenos %}
public class opConditional {
    public static void main(String[] args) {
        int x = 30, y = 10, z;
        char op;

        System.out.println("x : " + x + " y : " + y);

        op = '-';
        z = (op == '+') ? x+y : x-y;
        System.out.println("z : " + z);
    }
}
{% endhighlight %}

opConditional 클래스는 조건 연산자의 사용 예시를 보여주고 있습니다. x에 30, y에 10으로 정의한 다음, op에 -를 대입합니다. 10번째 줄에서는 op가 +라면 `x + y`를 수행하고, 그렇지 않으면 `x - y`를 수행해서 그 결과를 z에 대입하게 됩니다.

### Operator Priority

지금까지 여러 종류의 연산자를 알아보았습니다. 그런데 연산자는 하나만 쓸 때보다 여러 연산자를 섞어 쓸 때가 많습니다. 연산자의 종류가 굉장히 많기 때문에, 각각의 연산자마다 우선순위를 정해주어야 정상적인 계산이 가능합니다. 연산자의 우선순위를 알아두는 것 자체도 중요하고, 시험에서도 안나올 수가 없는 문제이기 때문에 전부는 아니더라도 대략적으로는 알아두시는 것이 좋습니다.

이 부분은 교재에 잘 정리되어 있어서 교재 그대로 Java 교재에 나와있는 연산자 우선순위 그림을 삽입하였습니다. 마침 [교재 사이트](https://introcs.cs.princeton.edu/java/11precedence/)에도 나와있어 쉽게 가져올 수 있었습니다.

![](https://github.com/JoonsuRyu/images/blob/master/Java/003/01.png?raw=true){: .align-center}

시험에서 연산자의 우선순위를 물어볼 때는 보통 다음과 같이 출제합니다. 아래 opPriority 클래스의 결과가 무엇이 나올지 한번 생각해보시기 바랍니다.

{% highlight java linenos %}
public class opPriority {
    public static void main(String[] args) {
        int x = 1, y = 2, z;
        z = x + y * 2 - ++x + (y += 3);
        System.out.println("x:" + x + " y:" + y + " z:" + z);
        System.out.println("x / y * z : " + (x / y * z));
        System.out.println("x = y += z : " + (x = y += z));
    }
}
{% endhighlight %}

이 문제는 우선순위 표를 보시면 쉽게 계산할 수 있기 때문에 따로 해설을 달진 않겠습니다. 프로그램을 직접 실행해보기 전에 예상한 값과 일치한지 확인해보시기 바랍니다.