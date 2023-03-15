---
title: "Java Programming Basics (2)"
permalink: /java/java-programming-basics-2/
classes: wide
toc: true
toc_label: "Table of Contents"
toc_sticky: true
categories:
  - studies
tags:
  - java
---

## String

<span style="color:red">문자열(String)</span>은 문자(Character)를 나열한 자료형입니다. 정확히는 자료형이라기보단 String이라는 클래스로 존재합니다. 문자열 변수를 선언하게 되면, String 클래스의 객체로 선언되는 것과 동일하다는 의미입니다.

String 클래스는 자바의 기본 라이브러리에 존재하는 클래스이기 때문에 미리 구현되어 있는 여러 가지 기능이 존재합니다. 대표적으로, +를 사용해 문자열을 연결할 수 있습니다.

{% highlight java linenos %}
public class dtStrPlus {
    public static void main(String[] args){
        String s = "Ja";
        s = s + "va";
        System.out.println(s);
        s = "square of 2 : " + 2*2;
        System.out.println(s);
        s = "Unicode of A : " + (int)'A';
        System.out.println(s);
    }
}
{% endhighlight %}

재미있는 점은, 만약 String이 아닌 다른 자료형과 + 연산을 수행하게 되면, 연산을 수행하는 자료형이 자동으로 String으로 형변환이 일어납니다. 예를 들어, 위와 같이 String 자료형 **square of 2 :** 와 정수 자료형 4를 더하면, 4가 문자열 자료형으로 변환되어 s에는 **square of 2 : 4** 라는 문자열이 대입되게 됩니다.

String은 **클래스**이기 때문에 미리 정의된 메소드 또한 존재합니다. 메소드의 종류가 많기 때문에 자주 사용하는 것 위주로 소개해드리도록 하겠습니다.

### Join Method

join 메소드는 String에서 + 연산과 비슷한 역할을 합니다. 사용하는 방법은 다음과 같습니다.

```java
String.join(구분 문자열, 연결할 문자열 list 또는 array);
```

이 메소드는 연결하고자 하는 문자열 사이사이에 구문 문자열을 삽입하여 하나의 문자열로 만들어줍니다. 예를 들어, 다음과 같이 사용할 수 있습니다.

{% highlight java linenos %}
public class dtStrJoin {
    public static void main(String[] args){
        String names = String.join(", ", "Peter", "Paul", "Mary");
        System.out.println(names);
    }
}
{% endhighlight %}

### Substring Method

substring 메소드는 String 중 일부 구간만을 반환하는 메소드입니다. C언어에서의 substr 함수와 비슷한 역할을 한다고 생각하시면 됩니다. 사용하는 방법은 다음과 같습니다.

```java
(문자열 객체).substring(복사할 문자열의 시작 번호, 복사할 문자열의 끝 번호)
```

단, 끝 번호는 적지 않아도 무관합니다. 끝 번호를 적지 않는다면 시작 번호부터 문자열 끝까지 복사합니다. 사용 예는 아래 프로그램을 참고하시기 바랍니다.

{% highlight java linenos %}
public class dtStrSubstring {
    public static void main(String[] args){
        String greeting = "Hello, World!";
        String location = greeting.substring(7, 12);
        System.out.println(location);
        String endless = greeting.substring(3);
        System.out.println(endless);
    }
}
{% endhighlight %}

substring 메소드를 사용할 때 문자열의 index를 가져오는 것 때문에 배열처럼 index로 문자열에 접근할 수 있을 것 같이 보이지만, C언어와는 다르게 컴파일 에러가 나므로 주의하셔야 합니다. 예를 들어, 아래의 dtStrIndex 클래스는 컴파일 에러를 일으킵니다.

{% highlight java linenos %}
public class dtStrIndex {
    public static void main(String[] args){ 
        String greeting = "Hello, World!"; 
        char ch = greeting[3]; // Compile Error 
        System.out.println(ch); 
    } 
}
{% endhighlight %}

### Split Method

split 메소드는 join 메소드의 반대 버전이라고 생각하시면 됩니다. 주어진 문자열에서 해당 구분자를 찾아 String Array로 반환합니다. 사용 방법은 다음과 같습니다.

```java
(구분할 문자열).split(구분 문자열);
```

사용 예는 아래 프로그램을 참고하시면 됩니다. 주의하실 점은, split 메소드의 결과는 String Array로 반환되기 때문에, 이를 받아줄 String 객체도 Array로 선언하셔야 합니다.

{% highlight java linenos %}
import java.util.Arrays;

public class dtStrSplit{
    public static void main(String[] args){
        String names = "Peter, Paul, Mary";
        String[] result = names.split(", ");
        System.out.println(Arrays.toString(result));
    }
}
{% endhighlight %}

result가 String Array 객체이기 때문에, 출력할 때는 위와 같이 java.util.Arrays 라이브러리에 있는 toString 메소드를 사용해주어야 합니다.

### Equals Method

equals 메소드는 두 문자열이 서로 같은지, 다른지를 알려주는 기능을 갖고 있습니다. 만약 두 문자열이 같으면 true, 그렇지 않으면 false를 반환합니다. 사용 방법은 다음과 같습니다.

```java
(문자열 객체).equals(문자열);
```

주의하실 점은, 두 문자열이 같을 조건은 공백 하나 없이 똑같아야 한다는 점입니다. 무슨 말이냐 하면, 다음 예제 프로그램을 참고하시기 바랍니다.

{% highlight java linenos %}
public class dtStrEquals {
    public static void main(String[] args){
        String name = "Mario";
        System.out.println(name.equals("Mario"));
        System.out.println(name.equals("Luigi"));
        System.out.println(name.equals("Mario "));
    }
}
{% endhighlight %}

위의 dtStrEquals 클래스를 보시면, 두 번째 출력은 Luigi로 다르기 때문에 false가 나오는 것은 당연합니다. 그런데 세 번째 출력은 앞 부분이 똑같이 Mario이고 뒤에 공백 하나만 있을 뿐인데도 false가 나옵니다. equals 메소드는 이렇게 미세한 차이만 있어도 완전히 다른 문자열로 인식함을 유의하시기 바랍니다.

### ToString / ParseInt Method

사실 이 두 메소드는 String 클래스의 메소드가 아닙니다. 다만 String 클래스의 다른 메소드와 함께 사용할 일이 많다보니 같이 소개하고자 합니다.

toString 메소드는 정수형 객체나 실수형 객체를 문자열 객체로 변환해주는 역할을 하고, parseInt 메소드는 그 반대의 역할을 수행하는 메소드입니다. 사용 방법은 프로그램으로 바로 보여드리도록 하겠습니다.

{% highlight java linenos %}
public class dtStrToString {
    public static void main(String[] args){
        int age = 30;
        double pi = 3.14;
        String str;

        /* String <-> Int */
        str = Integer.toString(age);
        System.out.println(str);
        age = Integer.parseInt(str);
        System.out.println(age);

        /* String <-> Double */
        str = Double.toString(pi);
        System.out.println(str);
        pi = Double.parseDouble(str);
        System.out.println(pi);
    }
}
{% endhighlight %}

위와 같이 문자열 객체에서 정수형 객체 뿐만이 아니라 실수형 객체로도 자유롭게 변환이 가능한 것을 확인할 수 있습니다.

### Other Methods

지금까지 소개한 메소드 이외에도 String 관련 메소드는 매우 많습니다. 여기서 이걸 모두 소개해드릴 순 없으니, 대략 이런 것들이 있다 정도로만 보시면 될 것 같습니다.

- boolean startsWith(String str)
- boolean endsWith(String str)
- boolean contains(CharSequence str)
- int indexOf(String str)
- int lastIndexOf(String str)
- int indexOf(String str, int fromIndex)
- int lastIndexOf(String str, int fromIndex)
- String replace(CharSequence oldString, CharSequence newString)
- String toUpperCase()
- String toLowerCase()
- String trim()

## Inputs and Outputs

### Inputs

Java에서 표준 입력을 받을 때는 Scanner 클래스를 사용합니다. Scanner 클래스를 사용하기 위해서는 `java.util.Scanner` 라이브러리를 호출해야 합니다. 사용 방법은 지난 포스트에서 소개했던 Random 클래스와 비슷하게 Scanner 객체를 먼저 선언해주어야 합니다.

입력을 받는 방법은 크게 4가지입니다. 하나하나 소개해드리면,

- **nextLine()** : 한 줄을 입력받음 (= Enter키를 칠 때까지의 입력)
- **next()** : 한 단어를 입력받음 (= 여러 단어를 써도 띄어쓰기가 나오면 그 이후로 끊김)
- **nextInt()** : 정수형 숫자를 입력받음
- **nextDouble()** : 실수형 숫자를 입력받음

보통 nextLine()을 가장 많이 사용합니다. 어차피 숫자로 바꾸는 거야 위에서 소개한 parseInt 메소드 같은 것을 사용하면 되니까요. 사용 방법은 아래와 같습니다.

{% highlight java linenos %}
import java.util.Scanner;

public class inputTest {
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);

        /* 한 줄 입력 */
        System.out.println("당신의 이름은?");
        String name = in.nextLine();
        System.out.println("입력 : " + name);

        /* 정수 입력 */
        System.out.println("정수를 입력해 보세요.");
        int integer = in.nextInt();
        System.out.println("입력 : " + integer);

        /* 실수 입력 */
        System.out.println("실수를 입력해 보세요.");
        double real = in.nextDouble();
        System.out.println("입력 : " + real);

        /* 한 단어 입력 */
        System.out.println("단어를 입력해 보세요.");
        String word = in.next();
        System.out.println("입력 : " + word);
    }
}
{% endhighlight %}

Scanner 객체를 선언할 때, 괄호 안에 들어있는 System.in은 표준 입력을 받는다는 뜻입니다.

주의하실 점은, 여러 입력을 받을 때 next()를 중간에 넣으시면 공백 뒤 짤린 부분이 다음 입력으로 들어갈 수 있습니다. 예를 들어, Input 프로그램에서 한 단어 입력 부분을 맨 위로 올리고 똑같이 Hello World!를 입력해보시면 런타임 에러가 발생합니다. 그래서 저는 next()를 선호하지 않고, 단어를 자를 필요가 있을 때는 Split 메소드를 더 선호합니다.

### Outputs

Java에서 표준 출력 방식도 3가지나 존재합니다. 다만 입력에서의 종류만큼 큰 차이는 없습니다. 다음은 출력 방법의 간단한 설명입니다.

- **System.out.print** : 숫자 또는 문자열들을 출력함.
- **System.out.println** : print와 기본적인 것은 동일하나, 출력 후 다음 줄로 넘어감.
- **System.out.printf** : C언어에서의 printf처럼 형식화된 출력 방법.

형식화된 출력(Formatted Output)은 아래와 같이 사용할 수 있습니다.

```java
System.out.printf(“Hello, %s. Next year, you will be %d.\n”, name, age);
```

위의 코드는 Hello 같은 문자열은 그대로 출력하고, %s에 name, %d에 age 변수를 대입하여 출력한다는 의미입니다. % 다음에 들어오는 문자에 따라, 이곳에 어떤 객체가 들어올 지 결정됩니다. 이것도 종류가 많기 때문에, 아래에 정리해 놓겠습니다.

- **%d** : 정수
- **%f** : 실수
- **%c** : 문자
- **%s** : 문자열
- **%b** : 불리언
- **%x** : 16진수 숫자

이 중, 실수를 출력할 때는 여러가지 옵션을 줄 수 있습니다. 이것 또한 종류가 많기 때문에... 간단하게 정리해 보겠습니다.

- **\+** : 양수/음수에 따라 부호를 표시
- **\-** : 숫자를 왼쪽으로 정렬
- **0X** : 숫자의 자리수가 X보다 낮다면, 그 차이만큼 0을 채웁니다.
- **\(** : 음수를 표현할 때 - 기호 대신 괄호를 사용
- **,** : 금액을 표시할 때처럼 세 자리수 마다 쉼표로 구분

출력에는 이렇게 다양한 방법과 옵션이 있지만, 쓰다 보면 어느정도 몸에 익어서 굳이 외우려고 노력할 필요는 없습니다. 사실 %b나 ( 같은 기호는 저도 이 글을 쓰면서 처음 봤습니다. 그리고 자바에서는 printf를 쓸 일이 그렇게 많지 않으니 어려워 보이더라도 걱정하지 않으셔도 됩니다.

사용 방법을 대략적으로 보여드리기 위해, 아래와 같은 예제를 하나 만들어봤습니다. 예제에 대한 설명은 굳이 달 필요가 없을 것 같아 생략하겠습니다.

{% highlight java linenos %}
public class outputTest {
    public static void main(String[] args){
        System.out.printf("%05d\n", 10);
        System.out.printf("%(d\n", -125);
        System.out.printf("%-3.4f\n", 12.34);
        System.out.printf("%,+.2f", 100000.0/3.0);
    }
}
{% endhighlight %}

## Control Flow

<span style="color:red">제어문(Control Flow)</span>은 사실 어떤 언어인가에 상관 없이 대부분 비슷한 구조를 가지고 있습니다. 다만 Java 강의는 프로그래밍 언어를 처음 배우는 분들을 기준으로 잡고 있기 때문에, 하나하나 차근차근 소개하도록 하겠습니다.

### If block

```java
if (조건) {
    조건을 만족했을 때 수행할 코드
}
else {
    조건을 만족하지 못했을 때 수행할 코드
}
```

If 문은 조건문으로도 불립니다. if 뒤에 나오는 조건을 만족했을 때와 만족하지 못했을 때의 수행 코드가 달라지는 구조입니다. 단, 위의 구조를 꼭 그대로 맞출 필요는 없습니다. else 문은 생략이 가능하고, 또 else 다음에 바로 if 문을 붙여 if - else if - else 와 같이 연결할 수도 있습니다. 다음은 난수와 조건문을 사용한 간단한 예제 프로그램입니다.

{% highlight java linenos %}
import java.util.Random;

public class If {
    public static void main(String[] args) {
        Random number = new Random();
        int n = number.nextInt(201) - 100;  /* -100 ~ 100 Random Number */

        System.out.println("Random Number : " + n);

        if (n == 0)
            System.out.println("Exactly the middle number!");

        if (n > 0)
            System.out.println("Positive.");
        else if (n < 0)
            System.out.println("Negative.");
        else
            System.out.println("It is neither positive nor negative.");
    }
}
{% endhighlight %}

### For loop

```java
for (카운터 초기화; 반복 조건; 카운터 증감){
    반복시킬 코드
}
```

for 문은 반복문 중 하나입니다. 반복문에서는 얼마나 반복시킬지 결정하는 것이 가장 중요하기 때문에 for 문 다음에 나오는 괄호에서는 모두 반복에 대해서만 설정하고 있습니다. 반복문에서는 보통 정수형 변수를 카운터로 사용하여 한번 코드를 수행할 때마다 카운터를 증가시키고, 카운터의 값이 특정 조건을 만족한다면 또 수행하는 구조를 갖고 있습니다. 반복문의 사용 예시는 아래와 같습니다.

{% highlight java linenos %}
public class For {
    public static void main(String[] args) {
        int i, sum = 0;

        for (i = 1 ; i <= 10 ; i++) {
            if ( i == 10)
                System.out.print(i);
            else
                System.out.print(i + " + ");
            sum += i;
        }
        System.out.println(" = " + sum);
    }
}
{% endhighlight %}

반복문은 조건 부분을 생략하거나 반복 조건이 항상 참인 코드를 넣어 무한 루프를 돌게 만들 수 있습니다. 무한 루프는 프로그램이 계속 돌아야하거나, 알고리즘 상 끝나는 시점이 확실하지 않은 프로그램(ex. 라스베가스 알고리즘)에 사용합니다. 무한 루프는 아래와 같은 방법으로 사용할 수 있습니다.

```java
for(;;) {
    반복시킬 코드
}
```

### While loop

while 문은 for 문과 같은 반복문의 하나입니다. 사용법만 조금 다를 뿐, 하는 역할은 같기 때문에 선호하는 방법을 사용하시면 됩니다. 저는 보통 카운터의 초기화나 증감을 복잡하게 설정할 때 while 문을 사용합니다. 사용 방법은 다음과 같습니다.

```java
while (조건) {
    반복시킬 코드
}
```

아래 프로그램은 for 문에서의 예제를 while 문으로 바꾼 프로그램입니다.

{% highlight java linenos %}
public class While {
    public static void main(String[] args) {
        int i = 1, sum = 0;

        while ( i <= 10 ) {
            if ( i == 10)
                System.out.print(i);
            else
                System.out.print(i + " + ");
            sum += i;
            i++;
        }
        System.out.println(" = " + sum);
    }
}
{% endhighlight %}

while문에서의 무한 루프는 조건 부분에 true만 적어주시면 됩니다. C언어와는 다르게 while(1)은 컴파일 에러가 나므로 주의하시기 바랍니다.

### Do-while loop

do-while 문은 while 문과 비슷하지만, 딱 하나의 차이가 있습니다. while 문은 만약 조건 부분이 처음부터 만족하지 않다면 아예 실행하지 않고 넘어가지만, do-while 문은 그런 경우에 최소 한번은 반드시 실행하고 넘어갑니다. 사용 방법은 다음과 같습니다.

```java
do {
    반복시킬 코드
}
while (조건);
```

다음은 for 문과 while 문에서 사용했던 프로그램을 do-while을 사용하여 변형한 프로그램입니다.

{% highlight java linenos %}
public class DoWhile {
    public static void main(String[] args) {
        int i = 11, sum = 0;

        do {
            if (i > 10)
                i = 0;
            else if ( i == 10)
                System.out.print(i);
            else
                System.out.print(i + " + ");
            sum += i;
            i++;
        }
        while ( i <= 10 );
        System.out.println(" = " + sum);
    }
}
{% endhighlight %}

위의 프로그램은 이전과 달리 카운터 i가 11로 초기화되어 있습니다. while 부분의 조건이 i가 10 이하이므로 조건을 만족하지 않는다는 것을 바로 알 수 있습니다. 일반적인 while 문이라면 반복 부분이 아예 실행되지 않지만, do-while 문에서는 do 부분이 한번은 반드시 실행되므로, if 문의 조건에 걸려 i가 0으로 초기화됩니다. 그 이후로는 i가 10 이하라는 조건에 만족되기 때문에 반복문이 정상적으로 실행되는 것입니다.

do-while 문에서도 조건을 true로 두면 무한 루프를 사용할 수 있지만, 일반적으로 무한 루프는 for 문이나 while 문을 사용하지 굳이 do-while 문을 사용하진 않습니다.

### Switch block

if 문은 유용하지만, 조건을 세분화할 때는 프로그램이 너무 길어질 우려가 있습니다. 예를 들어, 주사위 게임에서 어떤 숫자가 나오느냐에 따라 다른 결과를 구현하고 싶은데, if 문을 사용한다면 if - else if - else if - ... - else 와 같이 조건문을 반복해서 사용해야 합니다. 이렇게 구현한다고 해서 틀린 것은 아니지만, switch 문을 사용하면 더 깔끔하게 구현할 수 있습니다. 사용 방법은 다음과 같습니다.

```java
switch (조건) {
    case 1 : 조건이 1일 때 수행할 코드, break;
    case 2 : 조건이 2일 때 수행할 코드, break;
    ...
    default : 만족하는 case가 하나도 없을 때 수행할 코드
}
```

각각의 case 뒤에는 조건이 어떤 값인지에 따라 다른 결과를 줄 수 있지만, 반드시 각 case의 끝에는 break; 문을 삽입해주어야 합니다. 만약 case 1 끝에 break;를 삽입하지 않는다면, case 1을 수행한 다음, case 2의 코드가 연속으로 실행되기 때문입니다. 예를 들어, 다음 프로그램은 break;를 사용했을 때와 사용하지 않았을 때 어떤 차이가 나는지 보여주고 있습니다.

{% highlight java linenos %}
import java.util.Random;

public class Switch {
    public static void main(String[] args) {
        Random number = new Random();
        int n = number.nextInt(6) + 1;  /* 1 ~ 6 Random Number */

        switch (n){
            case 1 : System.out.println("Number 1");
            case 2 : System.out.println("Number 2"); break;
            case 3 : System.out.println("Number 3"); break;
            case 4 : System.out.println("Number 4"); break;
            case 5 : System.out.println("Number 5"); break;
            case 6 : System.out.println("Number 6"); break;
            default:
        }
    }
}
{% endhighlight %}

Switch 클래스에서는 case 1에만 break;를 삽입하지 않았습니다. 그 결과 case 1에서는 case 2의 출력까지 같이 나오는 것을 알 수 있습니다.

### Break / Continue

break와 continue는 특별한 상황에서 제어문에 변화를 줄 때 사용합니다. break는 switch 문에서 보셨다시피, 제어문을 빠져나가는 역할을 합니다. continue는 반복문에서만 사용하는데, 반복문을 수행하다 continue를 만나면 그 아래의 코드는 다 무시하고 다음 반복으로 넘어가는 기능을 합니다. break와 continue를 사용하면 다음과 같은 프로그램을 구현할 수 있습니다.

{% highlight java linenos %}
public class BreakContinue {
    public static void main(String[] args) {
        int i = 1;

        while(i <= 10){

            if ( i == 4 ){
                i++;
                continue;
            } else if ( i == 8 ){
                break;
            }
            System.out.println("The value of i is " + i);
            i++;
        }
    }
}
{% endhighlight %}

BreakContinue 클래스는 원래 1부터 10까지 출력하는 프로그램입니다. 여기에 조건문을 사용해 i가 4일 때는 패스하고, i가 8이 되면 빠져나오게끔 만들었습니다. break와 continue는 이렇게 특정 조건을 만족하면 다른 결과를 얻고 싶을 때 주로 사용합니다.

## Arrays

Java에서 <span style="color:red">배열(Array)</span>은 객체를 만드는 것과 같습니다. 배열을 선언하는 방법 또한 다양합니다. 예를 들어, 크기가 5인 int형 배열을 선언할 때, 다음과 같은 방법이 모두 통용됩니다.

```java
int [] a = new int[5];
int a[] = new int[5];
int a[] = {1, 3, 5, 7, 9};
```

이 중 3번째 방법은 선언과 동시에 값 대입까지 수행합니다. 만약 첫 번째나 두 번째 같이 초기값을 설정하지 않는 경우, C언어에서는 쓰레기 값이 들어가지만 Java에서는 자료형에 따라 자동으로 초기값이 설정됩니다. int, double과 같은 숫자형 변수에는 0, boolean은 false, char는 ASCII 코드 0, String 같은 문자열 변수는 NULL이 됩니다.

만약 실수로 배열의 범위 밖에 있는 index를 접근한 경우, 컴파일은 정상적으로 가능하나 런타임 에러가 발생합니다. 이런 경우를 방지하기 위해, 배열의 index를 접근할 때는 상수를 사용하는 것보다 length라는 <span style="color:red">속성(Attribute)</span>을 사용하는 것이 편리합니다. 속성은 메소드와 다르게, 뒤에 ()가 붙지 않습니다.

{% highlight java linenos %}
public class ArrayLength {
    public static void main(String[] args) {
        int a[] = {1, 3, 5, 7, 9};
        int b[] = new int[a.length];
        int i;

        b = a;
        for (i = 0 ; i < a.length ; i++)
            System.out.println(a[i] + " " + b[i]);

        b[2] = 10;

        for (i = 0 ; i < a.length ; i++)
            System.out.println(a[i] + " " + b[i]);

    }
}
{% endhighlight %}

ArrayLength 클래스는 배열 b를 선언할 때 그 크기를 a.length로 설정했고, `b = a`라는 표현을 사용했습니다. 주의하실 점은 `b = a`는 배열의 복사가 아니라 주소의 복사입니다. 무슨말이냐 하면, b의 원소를 수정했을 때 a의 원소도 같이 변경된다는 뜻입니다. a와 b의 주소가 같기 때문입니다.

만약 배열을 복사할 때, 값만 복사하고 싶거나 특정한 범위의 원소만 복사하고 싶을 때는 arraycopy라는 메소드를 사용하시면 됩니다. 사용 방법은 아래와 같습니다.

```java
System.arraycopy(복사할 배열, 복사할 배열의 시작 index, 복사 받을 배열, 복사 받을 배열의 시작 index, 복사할 원소의 수);
```

다음은 arraycopy 메소드를 사용하여 배열 a 중 a[1] ~ a[3]의 값을 배열 b의 b[2] ~ b[4]에 복사하는 프로그램입니다.

{% highlight java linenos %}
public class ArrayCopy {
    public static void main(String[] args) {
        int a[] = {11, 13, 15, 17, 19, 21, 23};
        int b[] = new int[a.length];
        int i;

        System.arraycopy(a, 1, b, 2, 3);

        for (i = 0; i < a.length; i++) {
            System.out.println(a[i] + " " + b[i]);
        }
    }
}
{% endhighlight %}

Java에서는 1차원 배열 뿐만 아니라 다차원 배열을 선언할 수도 있습니다. 예를 들어, 2차원 배열을 사용하고 싶을 때는 아래와 같이 선언할 수 있습니다. 사용 방법은 1차원 배열과 크게 다르지 않으니 설명은 생략하도록 하겠습니다.

```java
int a[][] = new int[3][4];
int [][] a = new int[3][4];
int a[][] = {% raw %}{{10, 11, 12}, {20, 21, 22}, {30, 31, 32}, {40, 41, 42}}{% endraw %};
```