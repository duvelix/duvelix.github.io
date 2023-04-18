---
title: "Abstraction using Interfaces"
permalink: /java/abstraction-using-interfaces/
toc: true
toc_label: "Table of Contents"
toc_sticky: true
categories:
  - studies
tags:
  - java
---

## Four Principles of Objected Oriented Programming

Java를 포함한 객체 지향 프로그래밍의 공통점으로는 **캡슐화(Encapsulation)**, **추상화(Abstraction)**, **상속(Inheritance)**, **다형성(Polymorphism)** 4가지 원칙이 있다는 것입니다. 캡슐화에 대해서는 지난 시간에 다루었기 때문에 여기서는 생략하도록 하겠습니다. 캡슐화에 대해서는 아래 포스트를 참고하시기 바랍니다.

- [[Java] 5. Classes, Variables, and Methods](/java/classes-variables-and-methods/)

추상화는 복잡한 자료, 모듈, 시스템 등으로부터 핵심적인 개념 또는 기능을 간추려 내는 것을 말합니다. Java에서 추상화는 <span style="color:red">인터페이스(Interface)</span>라는 것을 사용해서 구현합니다.

상속은 두 객체간의 관계를 정의하는 것입니다. 이것을 **is-a** 또는 **has-a** 라고 부르기도 하는데, Java에서는 <span style="color:red">서브 클래스(Sub class)</span>와 <span style="color:red">슈퍼 클래스(Super Class)</span>로 구현되어 있습니다.

다형성은 하나의 이름을 다른 여러 형태로 표현할 수 있는 것을 말합니다. Java에서는 다형성이 <span style="color:red">메소드 오버로딩(Method Overloading)</span>과 <span style="color:red">메소드 오버라이딩(Method Overriding)</span>으로 구현되어 있습니다. 메소드 오버로딩은 지난 포스트에서 소개했었고, 메소드 오버라이딩은 추후 소개할 예정입니다.

이번 포스트에서는 추상화가 Java에서 어떻게 구현되어 있는지 인터페이스에 대해 자세히 알아보겠습니다.

## Interface

정수 배열을 사용하여 처음 $n$개 숫자들의 평균을 구하는 프로그램을 만든다고 가정해봅시다. 지금까지 배운 방법을 사용하면 다음과 같이 구현이 가능할 것입니다.

{% highlight java linenos %}
class IntSequence {
    private int i;
    public boolean hasNext() {
        return true;
    }
    public int next() {
        i++;
        return i;
    }
}

public class Average {
    public static double average(IntSequence seq, int n) {
        int count = 0;
        double sum = 0;
        while(seq.hasNext() && count < n) {
            count++;
            sum += seq.next();
        }
        return count == 0 ? 0 : sum / count;
    }

    public static void main(String[] args){
        IntSequence sequence = new IntSequence();

        System.out.println(average(sequence, 4));
    }
}
{% endhighlight %}

IntSequence 클래스를 보시면 정수 배열을 조금 특이한 방법으로 구현하였습니다. 배열을 사용하지 않고 정수 배열을 만든 모습입니다. hasNext 메소드는 다음의 값이 존재하는지 여부를 확인하는 메소드인데, 항상 true만을 반환하므로 이는 끝이 없는 무한한 정수 수열을 의미합니다. next() 메소드는 다음 값을 반환하는데, 매번 이전의 값보다 1씩 큰 값을 반환합니다. 즉, 이것은 0부터 시작해서 1씩 증가하는 정수 배열을 의미합니다.

average 메소드는 IntSequence 객체와 n을 매개변수로 넘겨받아 IntSequence 객체에서 n번째 값까지의 평균을 구하는 메소드입니다. return을 조금 복잡하게 설정하긴 했는데, 이것은 count가 0일 경우 0으로 나눌 수 없기 때문에 예외 처리를 한 것입니다.

위의 IntSequence 클래스와 average 메소드는 아무런 문제가 없습니다. 다만 만약에 0부터 1씩 증가하는 정수 배열이 아니라 다른 배열을 사용하고 싶다면, 새로운 클래스를 정의해야할 필요가 있습니다. 그 뿐만이 아니라 각 클래스에 맞는 average 메소드 또한 새로 정의해야 합니다. 이런 배열들의 클래스는 전부 비슷한 모양을 하고 있기 때문에, 인터페이스(Interface)를 사용하면 하나의 average 메소드로 여러 타입의 수열을 계산할 수 있습니다.

인터페이스는 공통적으로 사용할 메소드를 미리 정의만 해 둔다음, 인터페이스를 통해 클래스를 구현할 때는 세부적인 것들만 구현하는 방식입니다. 예를 들어, IntSequence 클래스의 hasNext 메소드와 next 메소드는 굳이 정수 배열이 아니라도 반드시 필요한 메소드입니다. 이 때, 이 두 메소드를 인터페이스에서 미리 구현한 다음, 새로운 배열을 사용할 때 이를 넘겨받아 구현하는 것이 목적입니다.

인터페이스를 사용하여 Average 프로그램을 수정하면, 아래와 같습니다.

{% highlight java linenos %}
interface Sequence {
    boolean hasNext();
    int next();
}

class IntSequence implements Sequence{
    private int i;
    public boolean hasNext() {
        return true;
    }
    public int next() {
        i++;
        return i;
    }
}

class SquareSequence implements Sequence {
    private int i;
    public boolean hasNext() {
        return true;
    }
    public int next() {
        i++;
        return i*i;
    }
}

public class AverageUsingInterface {
    public static double average(Sequence seq, int n) {
        int count = 0;
        double sum = 0;
        while(seq.hasNext() && count < n) {
            count++;
            sum += seq.next();
        }
        return count == 0 ? 0 : sum / count;
    }

    public static void main(String[] args){
        IntSequence sequence1 = new IntSequence();
        SquareSequence sequence2 = new SquareSequence();
        System.out.println(average(sequence1, 4));
        System.out.println(average(sequence2, 4));
    }
}
{% endhighlight %}

수정한 프로그램은 Sequence라는 인터페이스를 정의한 다음, Sequence 인터페이스를 넘겨받은 IntSequence와 SquareSequence 클래스를 정의했습니다. 평균을 계산하던 average 메소드는 Sequence 형태의 객체를 넘겨받는 것으로 정의했기 때문에, 하나의 average 메소드로 IntSequence와 SquareSequence 형태의 객체에 모두 사용이 가능합니다.

물론 단순히 수열 형태뿐만이 아니라, 정수를 생성자의 매개변수로 받아 해당 정수의 각 자릿수의 평균을 구하는 방법으로도 응용할 수 있습니다.

{% highlight java linenos %}
interface Sequence {
    boolean hasNext();
    int next();
}

class DigitSequence implements Sequence {
    private int number;
    public DigitSequence(int n) {
        number = n;
    }
    public boolean hasNext() {
        return number != 0;
    }
    public int next() {
        int result = number % 10;
        number /= 10;
        return result;
    }
    public int rest() {
        return number;
    }
}

public class DigitSequenceAverage {
    public static double average(Sequence seq, int n) {
        int count = 0;
        double sum = 0;
        while(seq.hasNext() && count < n) {
            count++;
            sum += seq.next();
        }
        return count == 0 ? 0 : sum / count;
    }

    public static void main(String[] args){
        Sequence sequence = new DigitSequence(12345678);
        System.out.println(average(sequence, 6));
    }
}
{% endhighlight %}

이 프로그램에서 재밌는 점은 main 메소드에서 DigitSequence를 선언할 때, 객체의 형태를 인터페이스인 Sequence로 두었다는 점입니다. Sequence는 DigitSequence의 <span style="color:red">상위 타입(Super Type)</span>이기 때문에 가능합니다. 상위 타입의 반대말은 <span style="color:red">하위 타입(Sub Type)</span>입니다.

## Instance Of

인터페이스를 사용할 때 주의할 점으로, 정의할 때는 상위 타입에 하위 타입 형태로 객체를 생성하는 것이 가능하지만, 상위 타입으로 정의한 하위 타입 객체를 다른 하위 타입의 객체에 대입할 때는 반드시 위와 같은 <span style="color:red">타입 변환(Type Casting)</span>이 필요하다는 것입니다.

```java
Sequence sequence = new DigitSequence(12345678);
DigitSequence digits = (DigitSequence)sequence;
System.out.println(average(sequence, 6));
```

위의 코드에서는 Sequence 형 객체인 sequence에 DigitSequence형 객체를 할당한 뒤, 이를 다시 DigitSequence형 객체인 digits에 대입하는 부분입니다. sequence에 DigitSequence형 객체를 할당했기 때문에 타입 변환이 필요 없다고 생각하실 수 있지만, sequence는 엄연히 Sequence형 객체이므로 타입 변환이 반드시 필요합니다.

```java
Sequence sequence = new IntSequence();
SquareSequence square = (SquareSequence) sequence;
System.out.println(average(square, 4));
```

하지만 위와 같이 IntSequence의 객체를 SquareSequence 객체에 대입할 때, 타입 변환을 해도 런타임 에러가 일어납니다. 정확히는 **ClassCastException** 이라는 에러가 발생합니다. (런타임 에러의 종류는 후에 알아보도록 하겠습니다.)

런타임 에러이기 때문에 컴파일 과정에서 발견하기 힘든 문제가 있는데, 이것을 검사하기 위해 <span style="color:red">instanceof</span> 라는 명령어가 있습니다. 이것은 해당 객체가 이런 타입의 인스턴스인지 확인하는 역할을 합니다. 사용 방법은 객체이름 instanceof 클래스이름이며, 결과값은 true 또는 false로만 결정됩니다. 만약 객체가 해당 클래스의 객체면 true를 반환하고, 아니라면 false를 반환합니다.

다만 이 명령어로도 완벽하게 런타임 에러를 막을 수 있는 것은 아닙니다. 왜 그런지는 다음 예제들을 하나씩 보면서 확인해보도록 하겠습니다.

```java
Sequence sequence = new IntSequence();
if (sequence instanceof IntSequence) {
    IntSequence integer = (IntSequence)sequence;
    System.out.println(average(integer, 4));
}
```

첫 번째는 Sequence형 객체 sequence에 IntSequence형 객체를 할당한 후, instanceof 명령어로 sequence가 IntSequence형 객체인지 확인하는 경우입니다. 이 경우에는 IntSequence로 할당했기 때문에 instanceof의 결과가 true로 반환됩니다. 하지만 IntSequence형 객체인 integer에 sequence를 대입하기 위해서는 타입 변환이 필요합니다.

```java
Sequence sequence = new SquareSequence();
if (sequence instanceof IntSequence) {
    IntSequence integer = (IntSequence)sequence;
    System.out.println(average(integer, 4));
}
```

두 번째는 Sequence형 객체 sequence에 SquareSequence형 객체를 할당한 후, instanceof 명령어로 sequence가 IntSequence형 객체인지 확인하는 경우입니다. sequence는 SquareSequence로 할당했기 때문에 같은 인터페이스를 공유하더라도 IntSquence와는 다른 인스턴스로 판정됩니다. 즉, instanceof의 결과가 false로 반환되어 if 문 내부 명령어를 실행하지 않습니다.

```java
Sequence sequence = new SquareSequence();
if (sequence instanceof Sequence) {
    IntSequence integer = (IntSequence)sequence;
    System.out.println(average(integer, 4));
}
```

세 번째가 조금 골치아픈 경우입니다. Sequence형 객체 sequence에 SquareSequence형 객체를 할당한 후, instanceof 명령어로 sequence가 Sequence형 객체인지 확인하는 경우입니다. 당연히 sequence는 Sequence형 객체로 선언되었기 때문에 true가 반환됩니다. 문제는 if 문의 다음 줄인데, IntSequence형 객체인 integer에 sequence를 타입 변환으로 대입할 때, 런타임 에러가 발생합니다. 런타임 에러의 내용은 이전과 같이 **ClassCastException** 입니다. 사실 instanceof는 이런 식으로 사용하시면 안됩니다.

```java
SquareSequence sequence = new SquareSequence();
if (sequence instanceof Sequence) {
    SquareSequence square = (SquareSequence)sequence;
    System.out.println(average(square, 4));
}
```

네 번째는 SquareSequence형 객체 sequence에 SquareSequence형 객체를 할당한 후, instanceof 명령어로 sequence가 Sequence형 객체인지 확인하는 경우입니다. SquareSequence는 Sequence 인터페이스를 넘겨받은 클래스이기 때문에 true가 반환됩니다. 역시 이런식으로 instanceof를 사용하는 것을 권하지는 않습니다. 여기서 sequence는 이미 SquareSequence형 객체로 선언되었기 때문에, if 문 다음 줄에 있는 타입 변환은 굳이 필요하지 않습니다.

## Interface Application

### Extending Interface

Java에서는 인터페이스를 확장하여 새로운 인터페이스를 만드는 것 역시 가능합니다. 이 때는 인터페이스 정의 뒤에 extends를 붙이고 확장할 인터페이스 이름을 넣으면 됩니다. 인터페이스 **확장**이기 때문에 클래스를 구현할 때, 원본의 인터페이스 메소드도 같이 구현해주어야 합니다. 사용 예시는 아래와 같습니다.

{% highlight java linenos %}
interface Person {
    String retName();
}

interface Student extends Person {
    int retID();
}

class Undergrad implements Student {
    private String Name;
    private int ID;

    public Undergrad(String name, int num){
        this.Name = name;
        this.ID = num;
    }
    public String retName(){
        return this.Name;
    }
    public int retID(){
        return this.ID;
    }
}

public class ExtendInterface {
    public static void main(String[] args){
        Undergrad stu1 = new Undergrad("James", 2010);
        System.out.println("Name : " + stu1.retName());
        System.out.println("Student ID : " + stu1.retID());
    }
}
{% endhighlight %}

### Implement Multiple Interface

클래스에서 여러 개의 인터페이스를 넘겨받아 작성하는 것도 가능합니다. 이 때, 인터페이스의 구분은 쉼표를 사용합니다. 사용 예시는 아래와 같습니다.

{% highlight java linenos %}
interface Brand {
    String retCompany();
}

interface Design {
    String retColor();
}

class SmartPhone implements Brand, Design {
    private String brand, design;
    public SmartPhone(String name, String color){
        this.brand = name;
        this.design = color;
    }
    public String retCompany(){
        return this.brand;
    }
    public String retColor(){
        return this.design;
    }
}


public class MultipleInterface {
    public static void main(String[] args){
        SmartPhone myPhone = new SmartPhone("Galaxy Note 10+", "Aura White");
        System.out.println("My Phone Brand : " + myPhone.retCompany());
        System.out.println("My Phone Color : " + myPhone.retColor());
    }
}
{% endhighlight %}

### Variable Interface

지금까지는 인터페이스에서 메소드만을 사용했지만, 인터페이스에서 변수를 정의할 수도 있습니다. 하지만 인터페이스에서 선언하는 모든 변수는 자동으로 public static final 변수로 정의됩니다. 즉, 인스턴스 변수는 인터페이스에서 정의할 수 없습니다. C언어로 비유하면 #define으로 정의하는 것과 비슷합니다. 아래의 사용 예시를 보면 어떤 방식으로 인터페이스의 변수를 사용하는지 알 수 있습니다.

{% highlight java linenos %}
interface Motion {
    int NORTH = 1;
    int EAST = 2;
    int SOUTH = 3;
    int WEST = 4;
    void move(int direction);
    int getX();
    int getY();
}

class TwoDMotion implements Motion {
    private int posX, posY;
    public TwoDMotion() { posX = 0; posY = 0; }
    public void move(int direction) {
        if(direction == NORTH) posY--;
        else if(direction == SOUTH) posY++;
        else if(direction == EAST) posX++;
        else if(direction == WEST) posX--;
    }
    public int getX() { return posX; }
    public int getY() { return posY; }
}

public class VariableInterface {
    public static void main(String[] args){
        TwoDMotion Car = new TwoDMotion();
        System.out.println("Initial Position : (" + Car.getX() + ", " + Car.getY() + ")");
        Car.move(Motion.SOUTH);
        Car.move(Motion.EAST);
        Car.move(Motion.EAST);
        Car.move(Motion.SOUTH);
        System.out.println("Current Position : (" + Car.getX() + ", " + Car.getY() + ")");
    }
}
{% endhighlight %}

### Static Method

Java 버전 8 이전까지는 모든 인터페이스의 메소드는 <span style="color:red">추상 메소드(Abstract Method)</span>였습니다. 추상 메소드는 클래스로 구현이 되지 않은 메소드를 일컫는 말입니다.

하지만 Java 8/9 버전부터, 인터페이스에 새로운 메소드 형태들이 추가되었습니다. static과 default 메소드는 Java 8 버전에서, private 메소드는 Java 9 버전에서 추가되었습니다. 이 글을 쓰는 시점에서 최신 버전의 Java는 14입니다.

정적 메소드(Static Method)는 이전에 소개한 바와 같이, 해당 클래스로 선언된 모든 객체들이 공유하는 메소드입니다. 다만 인터페이스에서 정적 메소드를 사용할 때는 조금 특별하게 사용합니다. 일단 아래의 사용 예제를 먼저 보겠습니다.

{% highlight java linenos %}
interface Nintendo {
    static Nintendo Console(){
        return new Nintendo3DS();
    }
    boolean isPortable();
}

class Nintendo3DS implements Nintendo{
    public boolean isPortable(){
        return true;
    }
}

public class StaticMethod {
    public static void main(String[] args) {
        Nintendo Console = Nintendo.Console();
        System.out.println("Is the Nintendo 3DS portable? : " + Console.isPortable());
    }
}
{% endhighlight %}

보시면 Nintendo 인터페이스에서 정적 메소드로 `Console()`을 정의했는데, 반환 데이터형은 `Nintendo`, 반환값은 `new Nintendo3DS()`라는 객체 생성이 들어가 있습니다. 이렇게 인스턴스를 생성해서 반환하는 메소드를 <span style="color:red">공장 메소드(Factory Method)</span>라고 부릅니다. 공장 메소드는 보통 이렇게 인터페이스에서 정적 메소드로 사용합니다.

### Default Method

<span style="color:red">기본 메소드(Default Method)</span>는 인터페이스에서 메소드를 정의할 때, 기본 구현 내용을 미리 정의해놓는 것입니다. 만약 인터페이스를 넘겨받은 클래스에서 해당 메소드를 변경하고 싶다면 기존처럼 새로 정의하면 되고, 굳이 바꿀 필요를 느끼지 못한다면 정의를 생략해도 되는 특징이 있습니다. 사용 예시는 아래와 같습니다.

{% highlight java linenos %}
interface Input {
    default String KeyBoard() {
        return "Razer Blackwidow Elite";
    }
    String Mouse();
}

class Computer implements Input {
    public String Mouse(){
        return "Razer DeathAdder Elite";
    }
}

public class DefaultMethod {
    public static void main(String[] args) {
        Computer myComputer = new Computer();
        System.out.println("My Keyboard : " + myComputer.KeyBoard());
        System.out.println("My Mouse : " + myComputer.Mouse());
    }
}
{% endhighlight %}

기본 메소드를 사용하는 이유는, 인터페이스에 새로운 메소드를 추가할 일이 생길 경우 간단하게 처리하기 위해서입니다. 예를 들어, 인터페이스를 넘겨받은 A, B라는 클래스를 작성한 후 C라는 클래스를 새로 작성하고 있는데, 필요에 의해 갑자기 인터페이스에 새로운 메소드를 추가한다면 클래스 A와 B는 추가된 메소드를 정의하지 않았기 때문에 에러가 발생합니다. 이런 경우 새로 추가한 메소드를 기본 메소드로 정의한다면, 기존에 구현해두었던 클래스들을 건드리지 않아도 되는 장점이 있습니다.

기본 메소드를 사용할 때 중요한 점은 여러 인터페이스를 넘겨받을 때 기본 메소드와 동일한 메소드가 있는 경우입니다. 기본 메소드와 동일한 이름의 일반 메소드가 같이 있는 경우, 기본 메소드는 무시되며 일반 메소드로 인식되므로 반드시 넘겨받은 클래스에서 완성해주어야 합니다. 다음은 문제 없이 동일한 이름의 기본 메소드와 일반 메소드를 같이 사용한 예시입니다.

{% highlight java linenos %}
interface First {
    default int duplicate(){
        return 0;
    }
}

interface Second {
    int duplicate();
}

class Collision implements First, Second {
    public int duplicate() {
        return 1;
    }
}

public class DefaultMethodCollision {
    public static void main(String[] args) {
        Collision m = new Collision();
        System.out.println(m.duplicate());
    }
}
{% endhighlight %}

만약 Second 인터페이스에 있는 duplicate() 메소드를 기본 메소드로 정의하거나, Collision 클래스에서 duplicate() 메소드를 구현하지 않는 경우에는 에러가 발생하므로 주의하시기 바랍니다. 만약 동일한 이름이라도 매개변수가 다르게 정의된다면 이런 문제는 발생하지 않습니다.

### Private Method

인터페이스의 메소드에서도 접근 지정자로 private를 설정할 수 있습니다. private의 기본 특성답게 해당 인터페이스 내에서만 접근이 가능하며, 인터페이스를 넘겨받은 클래스는 해당 메소드에 접근이 불가능합니다. 따라서 private로 정의된 메소드도 기본 메소드처럼 인터페이스 내에 구현을 해야 하며, 기본 메소드와 차이점은 넘겨받은 클래스에서 재정의하는 것이 불가능하다는 점입니다.

만약 정적 메소드를 private로 사용하고 싶다면 주의해야할 점이 있습니다. private static으로 선언한다면 이 메소드는 인터페이스 내의 다른 메소드 모드에서 사용할 수 있지만, 그냥 private로 선언할 경우에는 정적 메소드에서 접근할 수 없습니다.

인터페이스에서 private 메소드의 사용은 복잡하기 때문에, 아래와 같이 여러 형태의 메소드를 섞은 예제를 보여드리겠습니다. `method4()`와 `method5()`가 각각 어떻게 정의되고 쓰였는지에 초점을 맞추시면 됩니다.

{% highlight java linenos %}
interface CustomInterface {
    public abstract void method1();
    public default void method2() {
        method4();
        method5();
        System.out.println("default method");
    }
    public static void method3() {
        method5();
        System.out.println("static method");
    }
    private void method4() {
        System.out.println("private method");
    }
    private static void method5() {
        System.out.println("private static method");
    }
}

public class PrivateMethod implements CustomInterface {
    public void method1() {
        System.out.println("abstract method");
    }

    public static void main(String[] args){
        CustomInterface instance = new PrivateMethod();
        instance.method1();
        instance.method2();
        CustomInterface.method3();
    }
}
{% endhighlight %}