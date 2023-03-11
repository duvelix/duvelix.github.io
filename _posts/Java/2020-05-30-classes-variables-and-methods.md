---
title: "Classes, Variables, and Methods"
permalink: /java/classes-variables-and-methods/
classes: wide
toc: true
toc_label: "Table of Contents"
toc_sticky: true
categories:
  - studies
tags:
  - java
---

## Java: An Object-Oriented Language

3장에서도 언급했듯이 Java에서는 대부분이 객체로 이루어져 있습니다. 객체를 처음 설명드릴 때 클래스의 인스턴스가 객체라고 말씀드렸는데, 어떻게 보면 클래스 또안 객체의 타입이라고 볼 수 있습니다. 그렇다면 가장 먼저 클래스가 무엇인지 다음 예제를 보며 설명하도록 하겠습니다.

{% highlight java linenos %}
class Employee {
    String name;
    public void setName(String name) {
        this.name = name;
    }
    public String getName() {
        return this.name;
    }
}

public class Main {
    public static void main(String[] args) {
        Employee m = new Employee();
        Employee n = new Employee();
        m.setName("Peter");
        n.setName("John");
        System.out.println(m.getName());
        System.out.println(n.getName());
    }
}
{% endhighlight %}

### Class

위의 Lecture 프로그램은 Employee와 Main이라는 2개의 클래스가 정의되어 있습니다. 그런데 Main 클래스는 Employee 클래스와 다르게 public이 붙어있습니다.

Java에서 한 파일에 여러 클래스를 정의할 수는 있지만, public class는 파일에 단 한 개만 존재할 수 있습니다. 또한 다른 언어와는 다르게, 파일 이름은 반드시 public class의 이름과 같아야만 합니다. 즉, 만약에 위의 프로그램에서 소스는 그대로 두고 파일 이름만 변경해도 컴파일 에러가 발생한다는 뜻입니다. 즉, 위의 프로그램을 다른 컴파일러에서 실행시키려면 반드시 파일 이름을 Main.java로 저장하셔야만 합니다.

클래스는 변수(Variable)와 메소드(Method)로 이루어져 있습니다. Employee 클래스를 예로 들면, name은 String 자료형으로 선언된 변수이고, setName, getName은 메소드입니다.

### Instance Variable

인스턴스 변수(Instance Variable)는 간단하게 설명하면 static이 붙지 않은 변수를 말합니다. 가령 위의 Employee 클래스의 name은 인스턴스 변수입니다.

인스턴스 변수의 특징은, 클래스의 객체를 만들 때 인스턴스 변수는 그 객체에 종속됩니다. 무슨 말인가 하면, Main 클래스의 main 메소드를 보시면, Employee 클래스의 객체로 m과 n을 선언합니다. 즉, m의 name과 n의 name은 서로 독립적인 다른 변수로 정의되어 있다는 뜻입니다.

인스턴스 변수를 선언할 때 초기값을 설정할 수도 있습니다. 예를 들어, Employee 클래스의 name 변수는 String name = "Kim";처럼 선언이 가능합니다. 초기값을 설정하지 않는다면, int, double과 같은 숫자 변수는 0, boolean 변수는 false, 기타 다른 객체들은 null로 초기값이 설정됩니다.

단, 주의하실 점은 지역 변수(Local Variable)는 초기값을 설정하지 않고 사용한다면 컴파일 에러가 발생하기 때문에 반드시 초기값을 설정해줘야 합니다. 예를 들어, 다음 프로그램은 main 메소드의 local_var의 초기값을 설정해주지 않았기 때문에 컴파일 에러가 발생합니다.

{% highlight java linenos %}
class Employee {
    int salary;
    public int getSalary() {
        return this.salary;
    }
}

public class Main {
    public static void main(String[] args) {
        int local_var;
        Employee m = new Employee();
        System.out.println(m.getSalary());
        System.out.println(local_var);  // Compile Error
    }
}
{% endhighlight %}

### Methods

메소드(Method)는 클래스의 인스턴스에 관련된 동작을 일컫는 말이지만, 간단히 생각하면 그냥 클래스에 포함된 함수라고 생각하시면 됩니다. 실제로 함수와 비슷하게 매개변수와 반환값 등을 갖고 있습니다.

메소드의 정의는 접근지정자 + 반환 자료형 + 메소드 이름 + 매개변수의 형태를 갖고 있습니다. 위의 예제에서 setName의 메소드 정의를 보시면, public void setName(String name)으로 정의되어 있는데, public이 접근 지정자, void는 반환값이 없다는 의미, 메소드 이름은 setName, 그리고 매개변수는 String 자료형 name이라는 뜻입니다.

마찬가지로 getName 메소드 정의는 public String getName()로 되어 있는데, 이것은 접근 지정자 public, 반환 자료형이 String, 메소드 이름은 getName, 매개변수는 없다는 뜻이 됩니다.

매개변수(argument) 전달 방법은 자료형 + 변수 이름으로 표현합니다. 만약 매개변수가 여러 개라면, 각 매개변수를 쉼표(,)로 구분해 표기합니다.

만약 반환 값이 있는 메소드라면 메소드 내에 return 명령어가 존재해야만 합니다. 예제의 setName 메소드는 반환 값이 없이 정의되어 있기 때문에 return 명령어가 없지만, getName은 반환 값이 String으로 지정되어 있기 때문에 String 자료형이 반드시 return 되어야만 합니다.

메소드에서 자신이 속한 객체를 호출할 때는 this를 사용하여 표현합니다. 예제에서 this.name의 의미는, "내가(=메소드가) 포함된 객체의 인스턴스 변수인 name을 의미한다"라는 뜻입니다. this를 생략해도 문제는 없지만, 가급적이면 명시해주는 것이 가독성 측면에서 권장됩니다.

메소드를 호출할 때는 해당 메소드를 가지고 있는 오브젝트 다음에 메소드 이름과 매개변수를 작성해주시면 됩니다. Lecture 클래스의 main 메소드를 보시면 m.setName("Peter");라는 메소드 호출을 보실 수 있는데, 이것은 객체 m이 가지고 있는 setName 메소드를 매개변수 Peter를 넘겨주는 방식으로 호출하겠다는 뜻이 됩니다.

### Static Variable & Static Method

인스턴스 변수에 static이란 접두어를 붙이게 되면, 해당 변수는 인스턴스 변수가 아니라 정적 변수가 됩니다. 인스턴스 변수는 각각의 인스턴스(즉, 객체)에 종속되어 있다고 설명드린 바 있는데, 예제에서 Employee 클래스의 객체인 m과 n에서의 name은 서로 다른 변수라고 설명드린 바 있습니다. 하지만 static을 붙이게 되면, 이 두 객체에서 name 변수는 동일한 변수로 바뀌게 됩니다.

{% highlight java linenos %}
class Employee {
    private static String static_name;
    public void setName(String name) {
        static_name = name;
    }
    public String getName() {
        return static_name;
    }
}

public class Main {
    public static void main(String[] args) {
        Employee m = new Employee();
        Employee n = new Employee();
        m.setName("Peter");
        n.setName("John");
        System.out.println(m.getName());
        System.out.println(n.getName());
    }
}
{% endhighlight %}

LectureStatic의 결과를 보시면 쉽게 이해가 되실겁니다. static으로 선언된 static_name은 두 객체 m과 n에서 같이 사용하는 변수이기 때문에, 한 객체에서 그 변수를 건드리게 되면, 다른 객체도 영향을 받게 됩니다.

메소드 또한 마찬가지입니다. static 접두어를 붙이게 되면, 해당 메소드는 정적 메소드가 되고 객체가 아닌 클래스에 종속됩니다. 그런데 저희는 static으로 선언된 메소드를 많이 봐왔습니다. 바로 main 메소드입니다. main 메소드는 언제나 static으로 선언되어 있습니다.

정적 메소드에서 정적 변수를 호출하는 것도 물론 가능합니다. 하지만 주의하실 점은, 지금까지 메소드에서 인스턴스 변수를 호출할 때 this를 사용했던 것과 달리, 정적 메소드에서는 this를 사용한 호출은 사용할 수 없습니다. this는 객체에 대해서 사용하는 것인데, 정적 메소드는 객체에 독립적이기 때문입니다. 게다가 정적 메소드에서 인스턴스 변수는 아예 접근이 불가능합니다. 예를 들어, Employee 클래스를 다음과 같이 수정하면 많은 부분에서 컴파일 에러가 발생합니다.

{% highlight java linenos %}
class Employee {
    private int val = 0;
    private static String static_name;
    public void setName(String name) {
        static_name = name;
    }
    public static String getName() {
        this.val = 1;    // Compile Error
        return this.static_name;    // Compile Error
    }
}
{% endhighlight %}

첫 번째 컴파일 에러의 원인은 인스턴스 변수에 접근했기 때문이고, 두 번째 컴파일 에러의 원인은 this를 사용하여 정적 변수에 접근했기 때문입니다.

### Final Instance Variable

인스턴스 변수에 final이란 접두어를 붙이게 되면 상수처럼 사용할 수 있습니다. 정확히는, final을 붙이게 되면 해당 인스턴스 변수는 생성자에서만 값을 바꿀 수 있고, 그 외의 영역에서 바꾸려고 하면 컴파일 에러가 발생합니다.

예를 들어, Employee 클래스를 다음과 같이 수정한다고 가정해봅시다.

{% highlight java linenos %}
class Employee {
    private final String name;
    public Employee() {
        this.name = "Donald";
    }
    public void setName(String name) {
        this.name = name;  // Compile Error
    }
}
{% endhighlight %}

위의 Employee 클래스는 final로 선언된 인스턴스 변수 name을 생성자가 아닌 setName이란 메소드에서 수정을 시도했기 때문에 컴파일 에러가 발생합니다.

static과 final 접두어는 동시에 사용할 수도 있습니다. 주로 이것은 클래스의 어떤 객체이든 동일하게 사용하는 상수를 정의할 때 사용합니다. 예를 들어, Java의 기본 라이브러리 중 하나인 Math 클래스의 PI는 다음과 같은 방식으로 정의되어 있습니다.

```
public class Math {
    public static final double PI = 3.14159265358979323846;
}
```

이것은 기본 라이브러리이기 때문에 PI를 사용할 때 프로그래머가 따로 정의해줄 필요가 없습니다. 궁금하신 분은 Math 클래스의 선언 없이 System.out.println(Math.PI);코드만 한번 작성해보세요. 아마 컴파일 에러 없이 바로 PI 값이 출력될 것입니다.

### Access Modifiers

인스턴스 변수와 메소드에는 접근 지정자(Access Modifier)를 설정하여 접근할 수 있는 범위를 제한할 수 있습니다. 예제의 Employee 클래스의 String name은 아무런 접근 지정자를 붙이지 않은 상태입니다. 접근 지정자에는 어떤 종류가 있고, 어느 곳에서 접근할 수 있는지 정리하면 아래와 같습니다.

- 접근 지정자 없음 : 같은 패키지(Package)에 포함된 클래스에서 접근 가능
- public : 어느 클래스에서나 접근 가능
- protected : 같은 패키지에 포함된 클래스, 그리고 해당 클래스의 서브 클래스(Subclass)에서 접근 가능
- private : 해당 클래스에서만 접근 가능

접근 지정자는 인스턴스 변수를 선언할 때 가장 앞에 붙이는 방식으로 정의합니다. 예를 들어 String name을 protected로 설정하고 싶다면, 정의할 때 protected String name으로 정의하면 됩니다.

접근 지정자를 설정하는 이유는 캡슐화(Encapsulation) 때문입니다. 캡슐화는 Java를 비롯한 객체 지향 프로그래밍에서의 주요 원칙 중 하나입니다. 캡슐화에 대한 원칙을 지키려면 다음과 같은 사항을 준수해야 합니다.

- 필요한 것만 보이게하고, 다른 모든 것은 숨깁니다.
- 클래스 외부에서 호출해야하는 메소드만 public으로 정의합니다.
- 다른 메소드 및 변수는 private으로 정의합니다.

캡슐화의 원칙에 맞게 Lecture 프로그램을 수정하면 다음과 같습니다.

{% highlight java linenos %}
class Employee {
    private String name;
    public void setName(String name) {
        this.name = name;
    }
    public String getName() {
        return this.name;
    }
}

public class Main {
    public static void main(String[] args) {
        Employee m = new Employee();
        Employee n = new Employee();
        m.setName("Peter");
        n.setName("John");
        System.out.println(m.getName());
        System.out.println(n.getName());
    }
}
{% endhighlight %}

프로그램 전체적으로는 큰 차이가 없고, 프로그램의 수행 과정 및 결과 또한 동일합니다. 바뀐 부분은 Employee 클래스의 인스턴스 변수 name 앞에 접근 지정자 private가 붙은 것입니다. 인스턴스 변수 name은 Employee 클래스 내에서만 호출되고, 그 밖에서는 이 변수를 호출하지 않기 때문에 캡슐화 원칙에 맞게 private로 정의한 것입니다.

### Object

객체(Object)의 생성은 new 라는 명령어를 통해 수행합니다. Lecture.java 프로그램에서 Employee m = new Employee(); 부분이 바로 객체의 생성 부분입니다. 이 코드의 의미는 Employee 클래스 형태의 객체 m을 생성한다는 뜻입니다.

Java의 장점은 메모리 누수(Memory Leak)를 걱정할 필요가 없다는 것입니다. 메모리 누수란, 사용하지 않는 객체가 계속 메모리 공간을 차지하고 있어 생기는 낭비를 말합니다. 비슷한 객체 지향 프로그래밍 언어인 C++에서는 객체를 더이상 사용하지 않을 때 delete 명령어를 통해 객체를 직접 삭제해야하지만, Java에서는 쓰레기 수집(Garbage Collection)을 통해 자동으로 사용하지 않는 객체를 삭제해주기 때문에 신경쓸 필요가 없습니다.

만약 객체를 배열(Array)로 선언하고 싶다면, 주의할 점이 있습니다. 객체를 배열로 선언한다고 해도, 배열의 원소를 각각 다시 정의해주어야 합니다. 이게 무슨 뜻인가 하면, 다음의 예제를 보면서 설명드리겠습니다.

{% highlight java linenos %}
class Employee {
    private String name = "NoName";
    public Employee(String name) {
        this.name = name;
    }
    public String getName() {
        return this.name;
    }
}

public class Main {
    public static void main(String[] args) {
        Employee m[] = new Employee[3];
        m[0] = new Employee("Mario");
        m[1] = new Employee("Luigi");
        m[2] = new Employee("Toad");
        System.out.println(m[0].getName());
        System.out.println(m[1].getName());
        System.out.println(m[2].getName());
    }
}
{% endhighlight %}

위의 LectureArrayObject 프로그램에서 13-15줄에 있는 코드를 의미하는 것입니다. 만약 13-15줄의 코드가 한 줄만이라도 빠진다면, 런타임 에러가 발생합니다. 이것이 빠지더라도 컴파일 단계에서는 에러 체크가 되지 않기 때문에, 반드시 유의하셔야 합니다.

### Constructor

객체가 생성될 때는 생성자(Constructor)가 같이 호출됩니다. 생성자는 클래스의 이름과 동일한 메소드로 정의하는데, 반환 자료형은 설정하지 않습니다. 생성자를 반드시 작성해야할 필요는 없으며, 생성자가 없다면 기본 생성자가 자동으로 호출됩니다. 이 때, 기본 생성자는 객체의 생성 외에 아무것도 수행하지 않습니다. Lecture 프로그램의 Employee 클래스는 생성자가 없는 경우입니다.

생성자가 있는 경우를 보여드리기 위해, Lecture 프로그램을 수정하여 생성자를 만들어 보겠습니다.

{% highlight java linenos %}
class Employee {
    private String name;
    public Employee() {
        this.name = "NoName";
    }
    public String getName() {
        return this.name;
    }
}

public class Main {
    public static void main(String[] args) {
        Employee m = new Employee();
        System.out.println(m.getName());
    }
}
{% endhighlight %}

LectureConstructor 프로그램은 Employee 클래스에 대한 객체를 생성하게 되면 자동으로 생성자를 실행하게 됩니다. 생성자의 역할은 해당 객체의 인스턴스 변수 name에 NoName이란 값을 대입합니다. 그렇기 때문에 main 메소드에서 객체 m을 생성한 다음 getName 메소드를 통해 name 변수를 출력하게 되면, 아무 값도 넣지 않았지만 NoName이 출력됩니다.

생성자를 하나가 아닌 여러 개를 만드는 것이 가능합니다. 단, 이 때는 각 생성자의 매개변수를 모두 다르게 설정해야 하며, 객체를 어떻게 생성하느냐에 따라 그에 맞는 생성자가 호출됩니다. 다음의 예제를 보면서 설명드리겠습니다.

{% highlight java linenos %}
class Employee {
    private String name;
    public Employee() {
        this.name = "NoName";
    }
    public Employee(String name) {
        this.name = name;
    }
    public String getName() {
        return this.name;
    }
}

public class Main {
    public static void main(String[] args) {
        Employee m = new Employee("Harry Potter");
        Employee n = new Employee();
        System.out.println(m.getName());
        System.out.println(n.getName());
    }
}
{% endhighlight %}

LectureOverloading 프로그램은 매개변수가 없는 Employee()와 String 자료형 매개변수 1개를 갖는 Emplolyee(String name) 두 개의 생성자가 존재합니다. Employee()는 인스턴스 변수 name에 NoName을 대입하고, Emplolyee(String name)은 인스턴스 변수 name에 매개변수로 받은 name을 대입합니다.

Main 클래스의 main 메소드에서는 같은 Employee 클래스로 2개의 객체 m, n을 생성합니다. 이 때, m은 Harry Potter라는 매개변수를 지정하고, n은 지정하지 않았습니다. 각각의 객체 생성에 맞게, m은 Emplolyee(String name)가 호출되고 n은 Employee()가 호출됩니다. 이런 식으로 같은 이름의 "메소드"를 매개변수에만 차이를 두게 만드는 기법을 오버로딩(Overloading)이라 부릅니다. "메소드" 라고 강조한 이유는, 생성자 뿐만이 아니라 모든 메소드에서 오버로딩이 가능하기 때문입니다.

재미있게도, 오버로딩 된 메소드를 해당 메소드 안에서 선언하는 것도 가능합니다. 이 때는 this 라는 명령어를 사용하는데, LectureOverloading 프로그램에서 Employee 클래스만 다음과 같이 수정해도 동일한 프로그램으로 볼 수 있습니다. Employee 클래스를 예로 들면 아래와 같습니다.

{% highlight java linenos %}
class Employee {
    private String name;
    public Employee() {
        this("NoName");
    }
    public Employee(String name) {
        this.name = name;
    }
    public String getName() {
        return this.name;
    }
}
{% endhighlight %}

## Java : Call by Value

Java에서 메소드를 호출할 때는 값에 의한 호출(Call by Value) 방식을 사용합니다. 값에 의한 호출은 메소드가 호출되어 매개변수를 넘겨줄 때, 매개변수의 값만 넘겨준다는 뜻입니다. 매개변수의 값만 넘겨주므로, 매개변수의 값을 수정해도 원래의 값은 변하지 않는다는 특징을 가지고 있습니다.

{% highlight java linenos %}
public class Main {
    public static void swap(int a, int b) {
        int temp = a;
        a = b;
        b = temp;
    }

    public static void main(String[] args) {
        int a1 = 10;
        int a2 = 20;
        swap(a1, a2);
        System.out.println(a1 + " " + a2);
    }
}
{% endhighlight %}

CallByValue 프로그램을 보시면 매개변수로 받은 두 값 a, b의 순서를 바꾸는 swap이라는 메소드가 있습니다. main에서 10이란 값을 가진 a1과 20이란 값을 가진 a2 변수를 swap 메소드에 매개변수로 넣었는데, 프로그램 수행 결과를 보시면 두 값은 순서가 바뀌지 않은 채 그대로 유지됩니다. 이 이유는 값에 의한 호출 방식으로 인해 a1, a2가 매개변수로 넘어간 것이 아니라, 그 '값'인 10, 20이 매개변수로 넘어갔기 때문입니다.

{% highlight java linenos %}
public class Main {
    public static void swap(int [] x) {
        int temp = x[0];
        x[0] = x[1];
        x[1] = temp;
    }

    public static void main(String[] args) {
        int [] a = new int[2];
        a[0] = 10;
        a[1] = 20;
        swap(a);
        System.out.println(a[0] + " " + a[1]);
    }
}
{% endhighlight %}

단, 똑같은 방식이라도 배열이나 객체를 메소드의 매개변수로 넘길 때는 결과가 바뀐 것을 볼 수 있습니다. 배열이나 객체를 매개변수로 넘길 때 주소 '값'을 넘겨주기 때문입니다.