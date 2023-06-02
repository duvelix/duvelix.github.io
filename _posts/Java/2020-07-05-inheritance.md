---
title: "Inheritance"
permalink: /java/inheritance/
classes: wide
toc: true
toc_label: "Table of Contents"
categories:
  - studies
tags:
  - java
---

## Four Principles of Objected Oriented Programming

지금까지 객체 지향 프로그래밍에서의 4가지 요소인 **캡슐화(Encapsulation)**, **추상화(Abstraction)**, **상속(Inheritance)**, **다형성(Polymorphism)**을 소개하고, 그 중 캡슐화와 추상화에 대해 자세히 알아보았습니다. Java 언어에서 추상화는 인터페이스를 통해 구현되어, 인터페이스의 사용법과 그 응용법을 다뤘습니다.

오늘은 나머지 요소 중 하나인 상속에 대해 배우게 됩니다. 상속은 이전 챕터에서 설명드린바와 같이 두 객체간의 관계를 정의하는 것입니다. 그렇기 때문에 객체 A와 객체 B의 관계를 영어로는 **A is a B** 또는 **A has a B** 같이 표현할 수 있는데, 이런 이유로 상속은 **is-a** 또는 **has-a** 관계라고 불리기도 합니다.

Java에서 상속은 이미 구현되어 있는 클래스의 인스턴스 변수와 메소드를 새로운 클래스에 이어받아 구현하는 것을 말합니다.

## Extending a Class

Java에서 상속을 사용하는 방법은 클래스 정의 뒤에 extends (상속받을 클래스 이름)을 붙이면 됩니다. 예를 들어, `class B extends A`라고 정의하게 되면 클래스 B는 클래스 A를 상속받아 만들어지는 클래스라는 뜻입니다. 구체적인 사용 방법을 보여드리기 위해 아래와 같이 간단한 예제 프로그램을 만들어 봤습니다.

{% highlight java linenos %}
class Employee {
    private String name;
    private int salary;
    public Employee() {
        this.name = "NoName";
        this.salary = 0;
    }
    public String getName() { return this.name; }
    public void setName(String name) { this.name = name; }
    public int getSalary() { return this.salary; }
    public void setSalary(int salary) { this.salary = salary; }
}

class Manager extends Employee {
    private int bonus;
    public void setBonus(int bonus) { this.bonus = bonus; }
}

public class Inheritance {
    public static void main(String[] args) {
        Manager m = new Manager();
        m.setName("Duvelix");
        m.setSalary(5000);
        System.out.println(m.getName() + " " + m.getSalary());
    }
}
{% endhighlight %}

이 프로그램은 Employee 클래스를 상속받아 새로운 클래스인 Manager 클래스를 정의하고 있습니다. main 메소드를 보시면 Manager 클래스에서 정의하지 않은 setName과 setSalary 메소드를 호출하는데, 이는 Manager 클래스가 Employee의 모든 인스턴스 변수와 메소드를 상속받았기 때문입니다. 이렇게 상속은 기존에 정의한 클래스를 확장시켜 새로운 클래스를 정의하는 방식으로 사용됩니다.

Employee 클래스와 같이 상속을 해준 클래스는 <span style="color:red">슈퍼 클래스(Superclass)</span>라고 부르고, Manager 클래스와 같이 상속을 받은 클래스는 <span style="color:red">서브 클래스(Subclass)</span>라고 부릅니다.

## Method Overriding

방금 Java에서 상속을 사용하는 방법을 배웠는데, 이렇게 상속을 사용할 때 슈퍼 클래스의 메소드를 서브 클래스에서 수정하고 싶은 상황이 생길 수 있습니다. 이런 경우에는 서브 클래스에서 슈퍼 클래스에서 정의한 메소드를 재정의할 수 있는데, 이를 <span style="color:red">메소드 오버라이딩(Method Overriding)</span>이라고 합니다.

메소드 오버라이딩을 할 때는 반드시 메소드의 이름과 매개변수가 동일해야 합니다. 그렇기 때문에 서브 클래스에서 오버라이딩을 할 때, 슈퍼 클래스의 해당 메소드를 호출하고 싶다면 super라는 접두사를 붙여야합니다. 이름이 동일하기 때문에 메소드 이름만 보고서는 어떤 메소드인지 구분되지 않기 때문입니다. 아래 예제를 통해 오버라이딩을 구체적으로 알아보겠습니다.

{% highlight java linenos %}
class Employee {
    private String name;
    private int salary;
    public Employee() {
        this.name = "NoName";
        this.salary = 0;
    }
    public String getName() { return this.name; }
    public void setName(String name) { this.name = name; }
    public int getSalary() { return this.salary; }
    public void setSalary(int salary) { this.salary = salary; }
}

class Manager extends Employee {
    private int bonus;
    public void setBonus(int bonus) { this.bonus = bonus; }
    public int getSalary() {
        return super.getSalary() + bonus;
    }
}

public class MethodOverriding {
    public static void main(String[] args) {
        Manager m = new Manager();
        m.setName("Duvelix");
        m.setSalary(5000);
        m.setBonus(1000);
        System.out.println(m.getName() + " " + m.getSalary());
    }
}
{% endhighlight %}

이전과 마찬가지로 Manager 클래스는 Employee 클래스로부터 상속받아 만든 클래스입니다. 다른 점은 Employee 클래스에서 정의했던 getSalary 메소드를 Manager 클래스에서 재정의했다는 것입니다. 이 때 Manager 클래스의 getSalary 메소드에서는 Employee 클래스의 getSalary 메소드를 호출하는데, 이를 구분하기 위해 앞에 super라는 접두사를 붙인 것을 확인할 수 있습니다. 즉, 이를 해석하면 Manager 클래스의 getSalary 메소드는 Employee 클래스의 getSalary 메소드를 호출하여 이것과 bonus의 값을 더한 후 반환하게 됩니다.

이 과정을 보고 **그냥 인스턴스 변수 salary를 호출해서 사용하면 되는 것 아닌가?** 라는 의문이 생길 수도 있습니다. 하지만 이것은 불가능한데, salary가 접근지정자 private로 정의되었기 때문입니다. private로 정의된 인스턴스 변수는 정의한 클래스에서만 접근할 수 있습니다. 만약 인스턴스 변수 salary를 서브 클래스에서도 호출이 가능하도록 정의하고 싶다면, public이나 protected로 정의해야 합니다. 접근지정자에 대해서는 아래의 포스트에서 더 자세히 다루고 있습니다.

- [[Java] 5. Classes, Variables, and Methods](/java/classes-variables-and-methods/)

### @Override

메소드 오버라이딩을 할 때 가끔 메소드의 매개변수를 변경한다던가 하는 실수를 할 때가 있습니다. 이런 경우에는 당연히 오버라이딩이 되지 않는데, 문제는 이것이 문법상 오류가 아니기 때문에 실수를 하더라도 눈치채기가 어렵습니다. 컴파일러 입장에서는 그저 이름만 같을 뿐 완전히 다른 메소드로 인식하기 때문입니다. 따라서 프로그래머의 의도대로 오버라이딩이 제대로 이루어졌는지 확인하는 방법이 있는데, 오버라이딩이 된 메소드 위에 `@Override`라는 명령어를 삽입하는 것입니다. 만약 이 명령어를 사용하고 오버라이딩이 일어나지 않는다면, 컴파일러가 오류로 인식하기 때문에 가급적이면 오버라이딩을 사용할때는 꼭 붙여주시는 것이 좋습니다.

아래의 프로그램은 `@Override` 명령어를 사용하여 오버라이딩이 일어나지 않는 상황에서 컴파일 에러가 일어나도록 만든 예제입니다. 아래 프로그램에서 `@Override` 명령어만 삭제한다면 컴파일 에러가 발생하지 않는 것을 확인할 수 있습니다.

{% highlight java linenos %}
class Employee {
    private String name;
    protected Employee supervisor;
    public Employee() {
        this.name = "NoName";
    }
    public boolean worksFor(Employee supervisor) {
        System.out.println("Employee.worksFor");
        return (this.supervisor == supervisor);
    }
}
class Manager extends Employee {
    @Override // Compile Error
    public boolean worksFor(Manager supervisor) {
        System.out.println("Manager.worksFor");
        return (this.supervisor == supervisor);
    }
}


public class OverrideError {
    public static void main(String[] args) {
        boolean rv;
        Manager m = new Manager();
        Manager n = new Manager();
        Employee e = new Employee();
        rv = m.worksFor(n);
        rv = m.worksFor(e);
    }
}
{% endhighlight %}

주의할 점은, 메소드 오버라이딩을 할 때 **반환 자료형(Return Type)**은 변경할 수 있습니다. 위의 프로그램을 조금 수정해서 반환 자료형만 다르게 만들어주면, 컴파일 에러 없이 정상적으로 작동하는 것을 알 수 있습니다.

{% highlight java linenos %}
class Employee {
    private String name;
    protected Employee supervisor;
    public Employee() {
        this.name = "NoName";
    }
    public Employee getSupervisor() {
        System.out.println("Employee");
        return supervisor;
    }
}
class Manager extends Employee {
    @Override  // OK
    public Manager getSupervisor() {
        System.out.println("Manager");
        return (Manager)supervisor;
    }
}

public class OverrideReturnType {
    public static void main(String[] args) {
        Manager m = new Manager();
        System.out.println(m.getSupervisor());
        Employee e = new Employee();
        System.out.println(e.getSupervisor());
    }
}
{% endhighlight %}

또 한가지 주의할 점으로는 슈퍼 클래스의 메소드를 오버라이딩 할 때, 서브 클래스에서 재정의한 메소드의 접근 지정자는 슈퍼 클래스에서 정의한 메소드보다 더 접근성이 높아야 합니다. 무슨 말인가 하면, 먼저 아래 예제 프로그램을 먼저 보여드리겠습니다.

{% highlight java linenos %}
class Employee {
    private String name;
    protected Employee supervisor;
    public Employee() {
        this.name = "NoName";
    }
    public Employee getSupervisor() {
        System.out.println("Employee");
        return supervisor;
    }
}
class Manager extends Employee {
    @Override
    protected Manager getSupervisor() { // Compile Error
        System.out.println("Manager");
        return (Manager)supervisor;
    }
}

public class OverrideAccessibility {
    public static void main(String[] args) {
        Manager m = new Manager();
        System.out.println(m.getSupervisor());
        Employee e = new Employee();
        System.out.println(e.getSupervisor());
    }
}
{% endhighlight %}

OverrideAccessibility 프로그램에서는 Employee 클래스에서는 getSupervisor 메소드를 public으로 선언하고, 상속받은 Manager 클래스에서는 getSupervisor 메소드를 protected로 선언하였습니다. 접근지정자 protected는 public에 비해 접근할 수 있는 위치가 더 적으므로, 컴파일 에러가 발생하게 됩니다. 접근지정자의 범위 순서는 **private < (없음) < protected < public** 입니다.

## Creating a Subclass

클래스에 대한 객체를 생성할 때, 해당 클래스의 생성자가 같이 실행된다는 것을 이미 배웠습니다. 그런데 상속 받은 클래스에 대한 객체를 생성한다면, 해당 클래스의 생성자 뿐만 아니라 상속을 해준 클래스의 생성자도 같이 실행됩니다. 이는 아래와 같은 간단한 프로그램으로 확인할 수 있습니다.

{% highlight java linenos %}
class SuperClass {
    public SuperClass() {
        System.out.println("SuperClass Constructor");
    }
}

class SubClass extends SuperClass{
    public SubClass() {
        System.out.println("SubClass Constructor");
    }
}

public class InheritanceConstructor {
    public static void main(String[] args) {
        SubClass obj = new SubClass();
    }
}
{% endhighlight %}

InheritanceConstructor.java 프로그램의 main 메소드에서 SubClass 클래스의 객체 obj를 생성하는데, 이 과정에서 SuperClass의 생성자가 먼저 실행되고, 그 다음에 SubClass의 생성자가 실행되는 것을 확인할 수 있습니다.

만약 이 과정을 명시적으로 표현하고 싶다면 `super()`명령어를 사용하시면 됩니다. 다음 예제에서는 서브 클래스의 생성자에서 슈퍼 클래스의 생성자를 명시적으로 호출한 예시입니다.

{% highlight java linenos %}
class SuperClass {
    public SuperClass() {
        System.out.println("SuperClass Constructor");
    }
}

class SubClass extends SuperClass{
    public SubClass() {
        super();
        System.out.println("SubClass Constructor");
    }
}

public class SuperConstructor {
    public static void main(String[] args) {
        SubClass obj = new SubClass();
    }
}
{% endhighlight %}

주의하실 점으로 슈퍼 클래스의 생성자를 명시적으로 호출 할 때는, 반드시 서브 클래스 생성자의 첫 줄에만 작성해야 한다는 것입니다. 그렇지 않은 경우에는 컴파일 에러가 발생합니다.

만약 생성자에 매개변수가 있을 경우, 매개변수 또한 기입해주어야 합니다. 하지만 매개변수가 있는 생성자만 있고, 일반적인 생성자가 없을 경우에는 반드시 명시적으로 `super()`를 사용하여 호출해주어야 합니다. 아래 프로그램은 `super()` 부분을 주석으로 처리했기 때문에 컴파일 에러가 발생합니다.

{% highlight java linenos %}
class SuperClass {
    public SuperClass(int a, int b) {
        System.out.println("SuperClass Constructor");
    }
}

class SubClass extends SuperClass{
    public SubClass() {
        //super(10, 20);  // Must NEED
        System.out.println("SubClass Constructor");
    }
}

public class SuperConstructorwithParameter {
    public static void main(String[] args) {
        SubClass obj = new SubClass();
    }
}
{% endhighlight %}

## Dynamic Method Lookup

인터페이스와 비슷하게, 슈퍼 클래스형으로 선언된 객체에 서브 클래스형 객체를 대입할 수 있습니다. 만약 이 상태에서 서브 클래스에서 메소드 오버라이딩이 된 메소드를 호출하게 되면, 슈퍼 클래스에서 정의한 메소드가 호출될까요, 아니면 서브 클래스에서 재정의한 메소드가 호출될까요? 정답은 아래 예제를 통해 확인해보도록 하겠습니다.

{% highlight java linenos %}
class SuperClass {
    public void fun1() {
        System.out.println("SuperClass fun1");
    }
}

class SubClass extends SuperClass{
    public void fun1() {
        System.out.println("SubClass fun1");
    }
}

public class DynamicMethodLookup {
    public static void main(String[] args) {
        SubClass obj = new SubClass();
        SuperClass obj2 = obj;
        obj2.fun1();
    }
}
{% endhighlight %}

실행 결과를 보면 슈퍼 클래스형으로 선언된 객체라도 서브 클래스형 객체를 대입하면 서브 클래스의 메소드가 호출됨을 알 수 있습니다. 이것을 <span style="color:red">동적 메소드 탐색(Dynamic Method Lookup)</span>이라 부릅니다.

동적 메소드 탐색을 잘못 사용하여도 JVM에서는 런타임 때 수행하기 때문에, 일반적으로 컴파일 에러는 거의 발생하지 않습니다. 하지만 아래와 같이 서브 클래스에서만 정의된 메소드를 슈퍼 클래스로 정의된 객체에 사용할 때는 컴파일 에러가 발생하게 됩니다.

{% highlight java linenos %}
class SuperClass {
    public void fun1() {
        System.out.println("SuperClass fun1");
    }
}

class SubClass extends SuperClass{
    public void fun1() {
        System.out.println("SubClass fun1");
    }
    public void fun2() {
        System.out.println("SubClass fun2");
    }
}

public class LookupError {
    public static void main(String[] args) {
        SubClass obj = new SubClass();
        SuperClass obj2 = obj;
        obj2.fun2();    // Compile Error
    }
}
{% endhighlight %}

만약 이 컴파일 에러를 없애고 싶다면 `instanceof` 명령어와 간접적인 메소드 호출을 사용하시면 됩니다. LookupError.java 프로그램을 이렇게 수정한다면 아래와 같습니다.

{% highlight java linenos %}
class SuperClass {
    public void fun1() {
        System.out.println("SuperClass fun1");
    }
}

class SubClass extends SuperClass{
    public void fun1() {
        System.out.println("SubClass fun1");
    }
    public void fun2() {
        System.out.println("SubClass fun2");
    }
}

public class LookupErrorSolution {
    public static void main(String[] args) {
        SubClass obj = new SubClass();
        SuperClass obj2 = obj;
        if(obj2 instanceof SubClass) {
            SubClass obj3 = (SubClass) obj2;
            obj3.fun2();
        }
    }
}
{% endhighlight %}

## Final Method

인스턴스 변수에 final 접두사를 붙이면 해당 인스턴스 변수는 프로그램 내에서 수정이 불가능하다고 배웠습니다. 이와 마찬가지로 메소드에도 final 접두사를 붙일 수 있는데, 기능 역시 비슷합니다. final 접두사를 붙이게 되면 해당 메소드는 오버라이딩이 불가능하게 됩니다.

final 접두사가 붙은 메소드를 오버라이딩 하려고 시도하면 아래처럼 컴파일 에러가 발생합니다.

{% highlight java linenos %}
class SuperClass {
    public final void fun1() {
        System.out.println("SuperClass fun1");
    }
}

class SubClass extends SuperClass{
    public void fun1() {    // Compile Error
        System.out.println("SubClass fun1");
    }
}

public class FinalMethod {
    public static void main(String[] args) {
        SubClass obj = new SubClass();
        obj.fun1();
    }
}
{% endhighlight %}

라이브러리에 구현된 메소드 중 final로 선언된 메소드의 예로는 **getClass** 메소드가 있습니다.

## Final Class

인스턴스 변수나 메소드와 마찬가지로 클래스 또한 final 접두사를 붙일 수 있습니다. 기능은 역시 비슷하게 final로 선언된 클래스는 상속하는 것 자체가 불가능하게 됩니다. 상속을 시도하게 되면 역시 아래와 같이 컴파일 에러가 발생합니다.

{% highlight java linenos %}
final class SuperClass {
    public void fun1() {
        System.out.println("SuperClass fun1");
    }
}

class SubClass extends SuperClass{      // Compile Error
    public void fun1() {
        System.out.println("SubClass fun1");
    }
}

public class FinalClass {
    public static void main(String[] args) {
        SubClass obj = new SubClass();
        obj.fun1();
    }
}
{% endhighlight %}

라이브러리에 구현된 클래스 중 final로 선언된 클래스의 예로는 **String** 클래스가 있습니다.

## Abstract Method and Abstract Class

클래스나 메소드를 정의할 때, abstract 접두사를 붙이게 되면 구현을 하지 않고 선언만 해 둔채로 남겨둘 수 있습니다. 이런 클래스나 메소드를 <span style="color:red">추상 클래스(Abstract Class)</span>, <span style="color:red">추상 메소드(Abstract Method)</span>라고 부릅니다. C언어에서 함수의 프로토타입을 코드 위쪽에 미리 정의해두는 것과 비슷합니다. 보통 슈퍼 클래스에서는 선언만 해 두고, 서브 클래스에서 상속받아 구현을 할 때 사용합니다.

추상 클래스는 지난 시간에 다룬 인터페이스와 유사하다고 볼 수 있습니다. 추상 클래스와 인터페이스의 차이점은 인스턴스 변수와 생성자를 포함할 수 있냐 없냐의 차이입니다. 추상 클래스에서는 둘 다 포함할 수 있지만, 인터페이스에서는 둘 다 포함할 수 없습니다.

추상 클래스는 인터페이스와 마찬가지로 구현이 되지 않은 클래스이기 때문에, 추상 클래스로 객체를 선언할 수 없습니다. 다만 추상 클래스로 객체를 선언한 후, 추상 클래스의 서브 클래스를 대입하는 것은 가능합니다. 아래 프로그램에서는 컴파일 에러가 발생하는 부분과 정상적인 부분을 비교해서 주석으로 표시했습니다.

{% highlight java linenos %}
abstract class SuperClass {
    private int number;
    public abstract void fun1();
}

class SubClass extends SuperClass {
    @Override
    public void fun1(){
        System.out.println("SubClass fun1");
    }
}

public class AbstractClass {
    public static void main(String[] args) {
        //SuperClass obj = new SuperClass(); // Causes a Compile Error
        SuperClass obj = new SubClass();
        obj.fun1();
    }
}
{% endhighlight %}

## Superclass and Interface

인터페이스는 하나만 넘겨받을 수도 있지만, 여러 개의 인터페이스를 하나의 클래스에 넘겨받는 것도 가능합니다. 하지만 상속은 오로지 단 하나의 클래스만 상속받을 수 있습니다. 이 것은 객체 지향 프로그래밍 언어마다 다른데, C++에서는 <span style="color:red">다중 상속(Multiple Inheritance)</span>을 지원하지만 Java에서는 지원하지 않습니다. 이것은 Java에서 누락한 것이 아니라 **고의적으로** 다중 상속을 제한한 것입니다.

이렇게 고의적으로 다중 상속이 불가능하게 만든 이유는 **죽음의 다이아몬드(The Deadly Diamond of Death)**라는 문제 때문입니다. 이 문제가 왜 발생하는지는 다음 프로그램을 통해 살펴보도록 하겠습니다.

{% highlight java linenos %}
class SuperClass {
    public void fun1(){
        System.out.println("SuperClass fun1");
    }
}

class AClass extends SuperClass {
    public void fun1(){
        System.out.println("AClass fun1");
    }
}

class BClass extends SuperClass {
    public void fun1(){
        System.out.println("BClass fun1");
    }
}

class SubClass extends AClass, BClass {     // Compile Error

}

public class DeadlyDiamond {
    public static void main(String[] args) {
        SubClass obj = new SubClass();
        obj.fun1();
    }
}
{% endhighlight %}

위의 프로그램을 보시면 SuperClass로부터 AClass와 BClass가 상속을 받고, 그 두 클래스로부터 SubClass가 상속을 받습니다. 그런데 이 때 SubClass는 fun1을 정의하지 않았으므로 상속해 준 클래스로부터 fun1이 정의되는데, AClass와 BClass 모두 이 메소드를 정의한 것이 문제입니다. 이렇게 되면 SubClass에서는 AClass의 fun1을 상속받을지, BClass의 fun1을 상속받을지 모호해집니다. Java에서는 이러한 상황을 막기 위해 문법적으로 다중 상속 자체를 막아놓았습니다.

만약 Java에서 다중상속을 구현하고 싶다면 인터페이스를 사용하는 수밖에 없습니다. 상속과 인터페이스는 서로 모호함이 발생하지 않기 때문에 동시에 가능합니다. 위의 프로그램에서 컴파일 에러가 발생하지 않게 수정하려면 아래처럼 인터페이스를 섞어주면 됩니다.

{% highlight java linenos %}
class SuperClass {
    public void fun1(){
        System.out.println("SuperClass fun1");
    }
}

class AClass extends SuperClass {
    public void fun1(){
        System.out.println("AClass fun1");
    }
}

interface BClass {
    void fun1();
}

class SubClass extends AClass implements BClass {

}

public class DeadlyDiamondSolution {
    public static void main(String[] args) {
        SubClass obj = new SubClass();
        obj.fun1();
    }
}
{% endhighlight %}

결과를 보면 알 수 있듯이, 상속과 인터페이스를 동시에 사용하게 되면 상속의 우선순위가 더 높습니다. 왜냐하면 인터페이스는 구현을 하기 전까지는 사용이 불가능하기 때문입니다.

## class Object : Superclass of all classes

Java에서 모든 클래스는 Object라는 클래스로부터 암묵적으로 상속받고 있습니다. 즉, 아무 상속도 받지 않는 클래스는 `extends Object`라는 코드가 생략된 것과 마찬가지입니다. 다만 다른 클래스를 상속받는다고 해도 Object 클래스를 상속받지 않는 것은 아닙니다. 이 암묵적인 상속은 다중 상속으로 인식되지 않습니다.

Object 클래스에서 정의된 메소드 중 자주 쓰이는 메소드를 몇 개만 정리해서 알려드리겠습니다.

- **String toString()** : 객체를 문자열로 변환한 결과를 반환합니다.
- **boolean equals(Object obj)** : 호출한 객체와 obj 객체가 동일하면 true를 반환하고, 다르면 false를 반환합니다.
- **int hashCode()** : 해당 객체의 해시코드를 반환합니다. 해시코드는 고유한 값으로써, 만약 객체가 같다면 해쉬코드도 같습니다. 다만 그 반대는 성립하지 않는데, 해시값이 중복되는 경우가 발생할 수 있기 때문입니다.
- **Class<?> getClass()** : 이 객체가 어느 클래스의 객체인지 그 클래스를 반환합니다.

물론 이렇게 사전 정의된 메소드도 오버라이딩이 가능합니다. 아래 프로그램은 위의 사전 정의된 메소드의 사용 예제와 오버라이딩한 예제를 나타내고 있습니다.

{% highlight java linenos %}
class SuperClass {
    
}

class SubClass extends SuperClass {
    @Override
    public String toString() {
        return "Overriding toString";
    }
}

public class ClassObject {
    public static void main(String[] args) {
        SubClass obj1 = new SubClass();
        SuperClass obj2 = obj1;

        System.out.println(obj1.toString());
        System.out.println(obj2.toString());
        System.out.println(obj1.equals(obj2));
        System.out.println(obj2.equals(obj1));
        System.out.println(obj1.hashCode());
        System.out.println(obj2.hashCode());
        System.out.println(obj1.getClass());
        System.out.println(obj2.getClass());

    }
}
{% endhighlight %}