---
title: "Generic Programming"
permalink: /java/generic-programming/
toc: true
toc_label: "Table of Contents"
toc_sticky: true
categories:
  - studies
tags:
  - java
---

지난 Java 포스트를 쓴지도 벌써 1년이 훌쩍 지났습니다. 작년에 모바일 게임만 시작하지 않았어도 여가 시간에 계속 포스트를 작성했을 텐데, 한번 시작한 뒤로 지금까지 접지를 못해서 블로그를 거의 방치하고 있었습니다. 아무래도 공부 내용을 정리하는 포스트는 작성하는데 시간도 꽤 걸리기 때문에 귀찮았기도 했구요. 그런데 계속 이렇게 냅두다보면 블로그를 만든 이유가 사라지는 것 같아 이제부터라도 다시 포스트를 작성하고자 합니다.

## Generic Programming

Generic Programming이 무엇인지 설명하기 전에, 먼저 아래의 두 클래스를 봅시다.

```java
class BoxA {
    A item;
    void setItem(A item) { this.item; }
    A getItem() { return item; }
}

class BoxB {
    B item;
    void setItem(B item) { this.item; }
    B getItem() { return item; }
}
```

BoxA와 BoxB은 거의 동일함을 알 수 있습니다. 두 클래스의 유일한 차이는 BoxA는 class A의 object를 사용하고, BoxB는 class B의 object를 사용한다는 것입니다. 이 차이로 인해 클래스를 각각 구현했지만, 이렇게 동일한 기능을 하는 클래스를 중복으로 작성하는 것은 여러모로 낭비입니다.

이에 대한 대안으로 아래처럼 Object라는 Super Class를 통해 해결하는 방법이 있습니다.

```java
class Box {
    Object item;
    void setItem(Object item) { this.item; }
    Object getItem() { return item; }
}
```

Object는 모든 class의 Super Class이기 때문에 동일한 코드를 중복으로 사용하지 않아도 되긴 하지만, 항상 변수 item이 class A의 object인지, class B의 object인지 표기를 해줘야하는 단점이 있습니다. 즉, item 변수를 다른 변수에 assign할 때 아래 예제처럼 반드시 **Type Casting**이 필요하다는 뜻입니다.

```java
Box b = new Box();
b.setItem(new Object());
b.setItem("ABC");
String item = (String)b.getItem();
System.out.println(item);
```

## Generic Classes

이 문제를 해결하는 또 다른 방법으로는 오늘 다룰 <span style="color:red">Generic Programming</span> 방법이 있습니다. Generic Programming을 한 문장으로 정의하면 다음과 같습니다.

> A TECHNIQUE FOR REUSING THE SAME CODE FOR VARIOUS TYPES OF OBJECTS.

즉, Generic Programming은 같은 코드를 여러 자료형에 대해 재사용할 수 있게 만드는 기술입니다. C++에서의 Template과 비슷하다고 보시면 됩니다. 사용법도 거의 동일한데요, 클래스 이름 뒤에 <T>를 붙여주고, 상황에 따라 변경되는 자료형은 T로 선언하시면 됩니다. 예를 들어, Box 클래스를 Generic class로 변경하면 다음과 같습니다.

```java
class Box<T> {
    T item;
    void setItem(T item) { this.item; }
    T getItem() { return item; }
}
```

이렇게 변경한 Box<T>를 <span style="color:red">Generic Class</span>라고 합니다. 부를 때는 **T Box** 또는 **Box of T** 라고 부릅니다. T는 <span style="color:red">Type Variable</span>, 그리고 Box는 아직 type이 정해지지 않았다고 해서 <span style="color:red">Raw Type</span>이라고 부릅니다. Generic Class에 대한 객체를 생성할 때는 자료형을 같이 선언해야 하는데, Box 클래스를 String 자료형 객체로 생성하고 싶다면 아래와 같이 작성해주시면 됩니다.

```java
Box<String> b = new Box<String>();
```

이렇게 String type으로 선언했을 때 String을 <span style="color:red">Parameterized Type</span>이라 부릅니다. 주의점으로는 String으로 선언한 이후, 다른 자료형을 대입하게 되면 오류가 발생합니다.

```java
Box<String> b = new Box<String>();
b.setItem(new Object()); // error
```

또한 Box를 String으로 선언하면, 자연스레 T로 선언된 변수는 모두 String 자료형으로 치환되므로 Type Casting이 필요하지 않습니다.

```java
Box<String> b = new Box<String>();
b.setItem("ABC");
String item = b.getItem();
```

Generic Class는 하나 뿐만이 아니라 여러 타입의 자료형으로도 선언이 가능합니다. 이 때는 기존과 마찬가지로 객체 생성 시 어떤 자료형으로 대입할 것이지만 제대로 표기해주면 됩니다. 만약 컴파일러가 어떤 자료형인지 이해할 수 있다면 생략이 가능합니다. 아래 예제에서는 2개의 Type Variable을 갖고 있는 Generic Class를 정의하고 객체 생성 시 자료형을 생략하는 것을 보여줍니다.

{% highlight java linenos %}
class Entry<K, V> {
    private K key;
    private V value;
    public Entry(K key, V value) {
        this.key = key;
        this.value = value;
    }
    public K getKey() { return key; }
    public V getValue() { return value; }
}

public class Main {
    public static void main(String[] args) {
        Entry<String, Integer> a = new Entry<String, Integer>("Duvelix", 100);
        Entry<String, Integer> b = new Entry<>("KEEPMIND", 10000);
        System.out.println("Entry a : " + a.getKey() + " " + a.getValue());
        System.out.println("Entry b : " + b.getKey() + " " + b.getValue());
    }
}
{% endhighlight %}

## Notes

이제부터 Generic class를 사용할 때 유의점에 대해 알아보겠습니다.

**1. Type variable로는 Static variable로 선언할 수 없다.**

Static variable은 모든 인스턴스에서 공유하고 있는 변수입니다. Type variable은 인스턴스에 따라 자료형이 다르기 때문에 Static variable로 선언된다면 어떤 자료형인지 알 수 없겠죠.

**2. Type Variable은 new, instanceof를 사용할 수 없다.**

컴파일 시 Type variable은 Object로 치환되기 때문에 new나 instanceof 등을 사용하면 논리적 오류가 발생합니다.

**3. Generic Array를 만들 수 없다.**

**4. Primitive Type을 Parameterized Type으로 사용할 수 없다.**

## Example : Generic Class

아례 예제는 Fruit 클래스와 Fruit 클래스를 상속받은 Apple, Grape 클래스, 그리고 Toy 클래스와 Generic class인 Box 클래스를 구현한 코드입니다.

```java
import java.util.ArrayList;
class Fruit { public String toString() { return "Fruit"; } }
class Apple extends Fruit { public String toString() { return "Apple"; } }
class Grape extends Fruit { public String toString() { return "Grape"; } }
class Toy { public String toString() { return "Toy" ; } }
class Box<T> {
    ArrayList<T> list = new ArrayList<T>();
    void add(T item) { list.add(item); }
    T get(int i) { return list.get(i); }
    int size() { return list.size(); }
    public String toString() { return list.toString(); }
}
```

이 코드를 기반으로 main 메소드에서 객체를 생성하거나 호출할 때, 어떤 유의점이 있는지 하나하나 알아보도록 하겠습니다.

**1. 인스턴스를 생성할 때, Parameterized Type은 생성자와 일치해야 한다.**

```java
Box<Apple> appleBox = new Box<Apple>(); // OK
Box<Grape> appleBox = new Box<Apple>(); // Error
```

**2. Parameterized Type이 Super-Sub Class의 관계라도 Parameterized Type이 다르면 오류가 발생한다.**

```java
Box<Fruit> appleBox = new Box<Apple>(); // Error
```

**3. 그러나 Parameterized Type이 같다면, Sub Class의 Raw Type으로 인스턴스를 생성하는 것은 가능하다.**

```java
Box<Apple> appleBox = new FruitBox<Apple>();  // OK
```

**4. Parameterized Type은 반드시 일치해야하기 때문에, 생략이 가능하다다.**

```java
Box<Apple> appleBox = new Box<Apple>();
Box<Apple> appleBox = new Box<>();
```

**5. 인스턴스 메소드 add를 호출할 때, Parameterized Type은 반드시 일치해야 한다. 단, Sub Class는 할당할 수 있다.**

```java
Box<Apple> appleBox = new Box<Apple>();
appleBox.add(new Apple()); // OK
appleBox.add(new Grape()); // Error
fruitBox.add(new Fruit()); // OK
fruitBox.add(new Apple()); // OK
```

## Limiting Types

원래 Type variable은 객체 생성 시 아무 Type으로 지정할 수 있지만, 원한다면 프로그래머가 이를 제한할 수 있습니다. 이전 예제 프로그램에 이어서, 아래와 같이 Generic Class인 FruitBox 클래스를 구현했다고 가정해봅시다.

```java
class FruitBox<T> {
    ArrayList<T> list = new ArrayList<T>();
    void add(T item) { list.add(item); }
    T get(int i) { return list.get(i); }
    int size() { return list.size(); }
    public String toString() { return list.toString(); }
}
```

만약 FuitBox 클래스를 Toy에 대한 객체로 생성한다면, 아래와 같이 선언할 수 있습니다.

```java
FruitBox<Toy> fruitBox = new FruitBox<Toy>();
fruitBox.add(new Toy());
```

그런데 만약 Type Variable 자체를 특정 Type으로 제한하고 싶다면, 클래스를 선언할 때 아래처럼 변경해주시면 됩니다.

```java
class FruitBox<T extends Fruit> {
    ArrayList<T> list = new ArrayList<T>();
    void add(T item) { list.add(item); }
    T get(int i) { return list.get(i); }
    int size() { return list.size(); }
    public String toString() { return list.toString(); }
}
```

이렇게 선언하면 Fruit 클래스의 Sub Class만 Type으로 지정해줄 수 있습니다. 또한 이렇게 선언할 경우, FruitBox 클래스의 add 메소드의 매개변수 또한 Fruit 클래스의 Sub Class만 사용할 수 있습니다.

```java
FruitBox<Fruit> fruitBox = new FruitBox<Fruit>();
fruitBox.add(new Apple()); // OK
fruitBox.add(new Grape()); // OK
```

Java는 C++과 다르게 다중상속이 불가능하고, 이를 대신하는 것이 인터페이스라는 이야기를 한 적이 있습니다. 그렇기 때문에 Generic Class의 Type 제한을 인터페이스로 설정하는 것도 가능합니다. 아래 예시는 FruitBox라는 Generic Class가 Eatable이라는 인터페이스로 Type 제한을 설정하는 것을 보여줍니다.

```java
interface Eatable {}
class FruitBox<T extends Eatable> { ... }
```

마지막으로, 이러한 제한들을 혼용할 수도 있습니다.

```java
class FruitBox<T extends Fruit & Eatable> { ... }
```

## Inheriting Generic Class

이번에는 Generic Class를 상속할 때 유의할 점을 알아보도록 하겠습니다.

**1. Generic Class는 Generic Class가 아닌 Class를 상속받을 수 있다.**

```java
class Shape { }
class FruitBox<T> extends Shape { }
```

**2. Generic Class는 Generic Class로부터 상속받을 수 있다. 단, 이 때 Type Variable은 동일해야 한다.**

```java
class Box<T> {
    ArrayList<T> list = new ArrayList<T>();
    void add(T item) { list.add(item); }
    T get(int i) { return list.get(i); }
    int size() { return list.size(); }
    public String toString() { return list.toString(); }
}
class FruitBox<T> extends Box<T> { }
```

**3. Generic Class를 상속할 때 Type을 제한하는 것 또한 가능하다.**

```java
class Box<T> { ... }
class FruitBox<T extends Fruit> extends Box<T> { }
```

**4. 만약 Super Class가 Type을 제한한다면, Sub Class 또한 Type이 제한된다.**

```java
class Box<T extends Fruit> { ... }
class FruitBox<T> extends Box<T> { ... } // Error

class Box<T extends Fruit> { ... }
class FruitBox<T extends Fruit> extends Box<T> { ... } // OK
```

## Generic Classes : Wild Card

이번에는 굉장히 특이한 사용법을 소개하도록 하겠습니다. 아래 소스를 보시면 Juicer 클래스는 Generic Class가 아닙니다. 하지만 Juicer 클래스에 포함된 정적 메소드(Static method) makeJuice를 보시면 Type Variable이 사용된 것을 알 수 있습니다.

```java
class Juicer {
    static Juice makeJuice(FruitBox<Fruit> box) {
        String tmp = "";
        for(Fruit f : box.getList()) tmp += f + " ";
        return new Juice(tmp);
    }
}
```

Juicer 클래스는 Generic Class가 아니지만, makeJuice 메소드의 파라미터에는 Type Variable이 지정되어 있기 때문에 FruitBox<Fruit> 인스턴스만 통과할 수 있습니다. 아래의 소스는 Type Variable이 다른 경우 오류가 발생한다는 것을 나타내고 있습니다.

```java
FruitBox<Fruit> fruitBox = new FruitBox<Fruit>();
FruitBox<Apple> appleBox = new FruitBox<Apple>();
fruitBox = new FruitBox<Fruit>();
appleBox = new FruitBox<Apple>();
System.out.println(Juicer.makeJuice(fruitBox)); // OK
System.out.println(Juicer.makeJuice(appleBox)); // Error
```

Java에서는 array, ArrayList 같은 반복가능한 객체를 이용하는 특별한 for loop 구문이 존재합니다. 이 것은 C언어에는 없는 내용이기 때문에 예제를 통해 보여드리도록 하겠습니다.

```java
String[] numbers = {"one", "two", "three"};
for(int i=0; i<numbers.length; i++) {
    System.out.println(numbers[i]);
}
```

이렇게 문자열 배열의 길이를 알려주는 length 메소드를 이용하여 반복문을 작성하는 것이 가능합니다. 또는 아래와 같이 특이하게 반복문을 사용할 수도 있습니다.

```java
String[] numbers = {"one", "two", "three"};
for(String number: numbers) {
    System.out.println(number);
}
```

언뜻 보면 어떻게 동작을 하는지 이해가 잘 되지 않는데요, 이것은 매 반복때마다 numbers 객체에 들어있는 element를 number라는 String 변수에 대입한다는 뜻입니다.

Generic Class의 기능을 설명하다 갑자기 왜 이런 이야기를 하는지 궁금하실 겁니다. 왜냐하면 이번 예시에 관련이 있기 때문입니다. 위에 보여드린 Juicer 클래스에는 FruitBox<Fruit>으로 매개변수 Type이 제한된 makeJuice 메소드가 있습니다. 물론 이것을 사용하여 방금 알려드린 for문을 사용할 수도 있겠죠. 그런데 만약 Juicer 클래스에 매개변수 Type만 다른 makeJuice 메소드를 추가하면 어떻게 될까요? 아래와 같이 말입니다.

```java
class Juicer {
    static Juice makeJuice(FruitBox<Fruit> box) {
        String tmp = "";
        for(Fruit f : box.getList()) tmp += f + " ";
        return new Juice(tmp);
    }
    static Juice makeJuice(FruitBox<Apple> box) { // Error
        String tmp = "";
        for(Fruit f : box.getList()) tmp += f + " ";
        return new Juice(tmp);
    }
}
```

이렇게 매개변수만 변경된 메소드를 추가하면 컴파일 에러가 발생합니다. 매개변수 Type만 변경되는 Generic Class는 Java에서 허용되지 않기 때문입니다. 만약에 여러 Type을 지원하게 만들고 싶다면,  Wild Card '?' 기호를 사용하는 방법이 있습니다. Wild Card를 사용하여 Juicer 클래스를 여러 Type으로 사용 가능하도록 수정하면 아래와 같습니다.

```java
class Juicer {
    static Juice makeJuice(FruitBox<? extends Fruit> box) {
        String tmp = "";
        for(Fruit f : box.getList()) tmp += f + " ";
        return new Juice(tmp);
    }
}
```

makeJuice 메소드의 매개변수 부분에서 <? extends Fruit>는 Fruit 클래스와 Fruit 클래스의 Sub Class만을 허용한다는 뜻입니다. 만약 반대로 Fruit 클래스의 Super Class를 허용하고 싶다면 <? super Fruit> 을 사용하면 됩니다. <?>를 사용하면 모든 타입을 매개변수로 받을 수 있으며, <? extends Object>로 사용하는 것과 동일합니다.

```java
FruitBox<Fruit> fruitBox = new FruitBox<Fruit>();
FruitBox<Apple> appleBox = new FruitBox<Apple>();
fruitBox = new FruitBox<Fruit>();
appleBox = new FruitBox<Apple>();
System.out.println(Juicer.makeJuice(fruitBox)); // OK
System.out.println(Juicer.makeJuice(appleBox)); // OK!
```

Wild Card를 사용하면 이전과 달리 Juicer 클래스의 makeJuice 메소드가 fruitBox Type 외에도 FruitBox의 Sub Class인 appleBox 또한 문제없이 매개변수로 받을 수 있음을 알 수 있습니다.

## Example : Wild Card

방금 배운 Wild Card를 사용한 프로그램 예제입니다. 돌려보시기 전에 먼저 프로그램을 읽어보시고 분석하는 것을 추천드립니다.

{% highlight java linenos %}
import java.util.ArrayList;
class Fruit { public String toString() { return "Fruit"; } }
class Apple extends Fruit { public String toString() { return "Apple"; } }
class Grape extends Fruit { public String toString() { return "Grape"; } }
class Juice {
    String name;
    Juice(String name) { this.name = name + "Juice"; }
    public String toString() { return name; }
}
class Juicer {
    static Juice makeJuice(FruitBox<? extends Fruit> box) {
        String tmp = "";
        for(Fruit f : box.getList()) tmp += f + " ";
        return new Juice(tmp);
    }
}
class Box<T> {
    ArrayList<T> list = new ArrayList<T>();
    void add(T item) { list.add(item); }
    T get(int i) { return list.get(i); }
    ArrayList<T> getList() { return list; }
    int size() { return list.size(); }
    public String toString() { return list.toString(); }
}
class FruitBox<T extends Fruit> extends Box<T> { }

public class Main {
    public static void main(String[] args) {
        FruitBox<Fruit> fruitBox = new FruitBox<Fruit>();
        FruitBox<Apple> appleBox = new FruitBox<Apple>();
        fruitBox.add(new Apple());
        fruitBox.add(new Grape());
        appleBox.add(new Apple());
        appleBox.add(new Apple());
        System.out.println(Juicer.makeJuice(fruitBox));
        System.out.println(Juicer.makeJuice(appleBox));
    }
}
{% endhighlight %}

## Generic Method

클래스와 마찬가지로 메소드 또한 Generic으로 선언할 수 있습니다. 메소드를 선언할 때 반환 자료형 앞에 선언해주는 방식으로 사용할 수 있는데요, 예를 들어 위에서 작성한 Juicer 클래스의 makeJuice 메소드를 Generic 메소드로 변환하면 아래와 같습니다.

```java
class Juicer {
    static <T extends Fruit> Juice makeJuice(FruitBox<T> box) {
        String tmp = "";
        for(Fruit f : box.getList()) tmp += f + " ";
        return new Juice(tmp);
    }
}
```

Generic 메소드를 호출할 때는 메소드 이름 앞에 Type을 작성해주시면 됩니다. 아래는 `<Fruit> Type`과 `<Apple> Type`으로 호출한 예시입니다. Generic Class와 마찬가지로 만약 컴파일러가 어떤 Type인지 확실하게 구분할 수 있는 경우, Type은 생략이 가능합니다.

```java
FruitBox<Fruit> fruitBox = new FruitBox<Fruit>();
FruitBox<Apple> appleBox = new FruitBox<Apple>();
fruitBox = new FruitBox<Fruit>();
appleBox = new FruitBox<Apple>();
System.out.println(Juicer.<Fruit>makeJuice(fruitBox));
System.out.println(Juicer.<Apple>makeJuice(appleBox));
```

## Casting Generic Types

Java에서 자료형을 강제로 바꾸기 위해서는 Type Casting을 사용해야합니다. 언뜻 보면 Generic Class와 메소드에서도 Type Casting을 통해 Type을 바꿀 수 있을 것 같지만, 안타깝게도 이는 불가능합니다.

```java
Box<Object> objBox = null;
Box<String> strBox = null;
objBox = (Box<Object>)strBox; // Error
strBox = (Box<String>)objBox; // Error
```

String은 분명히 Object의 Sub Class이지만, Type Casting을 통한 변환이 불가능함을 알 수 있습니다. 만약 굳이 Type Casting을 사용하고 싶다면, 처음 선언할 때 Wild Card를 통해 선언해주어야만 합니다.

```java
Box<? extends Object> objBox = new Box<String>(); // OK
```

다시 Box/FruitBox 클래스로 돌아가봅시다. 다시 간단하게 설명하자면, FruitBox는 Generic Class인 Box로부터 상속받은 클래스입니다. 이 때, Type은 Fruit과 Fruit의 Sub Class로만 제한하도록 정의하였습니다.

```java
class Box<T> { }
class FruitBox<T extends Fruit> extends Box<T> { }
```

이렇게 Box/FruitBox 클래스를 정의한 후, Wild Card를 사용하여 FruitBox 클래스에 대한 객체를 생성합니다. Type을 Fruit으로 정의하는 것은 당연히 가능하고, Apple은 Fruit의 Sub Class이기 때문에 역시 가능합니다.

```java
FruitBox<? extends Fruit> box = new FruitBox<Fruit>(); // OK
FruitBox<? extends Fruit> box = new FruitBox<Apple>(); // OK
```

만약 이 상황에서 Fruit Type으로 정의된 box 객체를 Type Casting을 통해 강제로 Apple Type으로 바꾼다면, 오류는 발생하지 않지만 warning이 발생합니다. waring 내용은 Type의 안정성을 보장할 수 없다는 의미로 **unchecked cast from FruitBox<? extends Fruit> to FruitBox\<Apple>** 라고 출력됩니다.

```java
FruitBox<? extends Fruit> box = new FruitBox<Fruit>();
FruitBox<Apple> appleBox = (FruitBox<Apple>)box;
```

## Erasure of Generic Type

Java 컴파일러는 Source 파일에서 Generic Type을 찾은 다음 각 객체별로 적절한 Type으로 변환합니다. 즉, object 파일(.class)에는 Generic Type이 모두 지워져 존재하지 않습니다. 컴파일러를 통해 Generic Type이 변화하는 과정을 보여드리도록 하겠습니다. Generic 클래스를 처음 설명드렸을 때 사용한 Entry 클래스를 예제로 사용하겠습니다.

```java
public class Entry<K, V> {
    private K key;
    private V value;
    public Entry(K key, V value) {
        this.key = key;
        this.value = value;
    }
    public K getKey() { return key; }
    public V getValue() { return value; }
}
```

먼저, 컴파일러는 Generic Type을 먼저 특정한 클래스로 변환합니다. 일반적인 Type은 모두 아래처럼 Object 클래스로 변환됩니다.

```java
public class Entry {
    private Object key;
    private Object value;
    public Entry(Object key, Object value) {
        this.key = key;
        this.value = value;
    }
    public Object getKey() { return key; }
    public Object getValue() { return value; }
}
```

이후에 만약 Type Casting이 필요하다면 Type Casting 처리를 해줌으로써 Generic Class를 사용하지 않은 일반 프로그램으로 변환됩니다.

```java
Entry<String, Integer> entry = ...;
String key = (String)entry.getKey();
```

이번 포스트는 여기까지입니다. 다음 포스트부터는 Collection Framework에 대해 알아보도록 하겠습니다. 읽어주셔서 감사합니다!