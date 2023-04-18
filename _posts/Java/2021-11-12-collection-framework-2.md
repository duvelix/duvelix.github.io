---
title: "Collection Framework (2)"
permalink: /java/collection-framework-2/
toc: true
toc_label: "Table of Contents"
toc_sticky: true
categories:
  - studies
tags:
  - java
---

안녕하세요, 이번 포스트에서는 지난 포스트에 이어 Collection Framework에 대해 조금 더 살펴보도록 하겠습니다. 이번 포스트의 주제는 크게 **Iterator**, **Arrays**, **Comparable**, 그리고 **Comparator**로 나뉘어 있습니다.

## Iterator

<span style="color:red">Iterator</span>는 Java에서 Collection Framework에 대한 반복적인 작업을 용이하게 처리할 수 있는 메소드를 갖고 있는 인터페이스입니다. 구체적으로 Collection에 저장된 데이터를 읽어오는 방법을 표준화하기 위한 역할입니다. Iterator는 아래와 같이 정의되어 있습니다.

```java
public interface Iterator<E> {
...
    boolean hasNext();
    E next();
    void remove();
}
```

Collection 인터페이스에서는 Iterator를 반환하는 `iterator()` 메소드가 있습니다. `iterator()` 메소드는 List, Set에 구현되어 있지만 Map에는 구현되어 있지 않습니다. `iterator()` 메소드는 아래처럼 정의되어 있습니다.

```java
public interface Collection<E> {
...
    public Iterator iterator();
...
}
```

Iterator 인터페이스에는 3개의 메소드가 정의되어 있습니다.

- boolean hasNext() : 반복문에 다음 원소가 있다면 true를 반환한다.
- E next() : 반복문의 다음 원소를 반환한다.
- default void remove() : 이 반복문에 마지막으로 반환된 원소를 Collection에서 제거한다.

Iterator를 어떻게 사용하는지 보여드리기 위한 예제를 준비했습니다. 아래는 list의 원소를 Iterator를 사용하여 출력하는 것을 보여주고 있습니다.

{% highlight java linenos %}
import java.util.*;

class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<String>();
        list.add("1");
        list.add("2");
        list.add("3");
        list.add("4");
        list.add("5");
        Iterator<String> it = list.iterator();
        while(it.hasNext()) {
            String str = it.next();
            System.out.println(str);
        }
    }
}
{% endhighlight %}

## ListIterator

<span style="color:red">ListIterator</span>는 Iterator 인터페이스를 확장한 인터페이스로써, Iterator에서 추가된 여러 메소드를 가지고 있습니다. 추가된 메소드는 List에서 정방향 및 역방향으로 탐색할 수 있는 기능들을 가지고 있습니다. **List**가 붙은 만큼 ArrayList나 LinkedList처럼 List 인터페이스로 구현된 클래스에서만 사용할 수 있습니다.

ListIterator<E> 인터페이스에 구현된 메소드들은 다음과 같습니다.

- void add(E e) : List에 원소 e를 삽입한다.
- boolean hasNext() : ListIterator가 정방향으로 탐색할 때 다음 원소가 있다면 true를 반환한다.
- boolean hasPrevious() : ListIterator가 역방향으로 탐색할 때 다음 원소가 있다면 true를 반환한다.
- E next() : List의 다음 원소를 반환하고 커서를 앞으로 이동한다.
- int nextIndex() : next()를 호출했을 때 해당되는 원소의 index를 반환한다.
- E previous() : List의 이전 원소를 반환하고 커서를 뒤로 이동한다.
- int previousIndex() : previous()를 호출했을 때 해당되는 원소의 index를 반환한다.
- void remove() : next()나 previous()로 인해 반환된 마지막 원소를 제거한다.
- void set(E e) : next()나 previous()로 인해 반환된 마지막 원소를 e로 변경한다.

다음 프로그램은 List의 원소를 정방향과 역방향 순서대로 각각 출력하는 간단한 예제입니다.

{% highlight java linenos %}
import java.util.*;

class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<String>();
        list.add("1");
        list.add("2");
        list.add("3");
        list.add("4");
        list.add("5");
        ListIterator<String> it = list.listIterator();
        while(it.hasNext()) {
            System.out.print(it.next());
        }
        System.out.println();
        while(it.hasPrevious()) {
            System.out.print(it.previous());
        }
        System.out.println();
    }
}
{% endhighlight %}

## Arrays

<span style="color:red">Array</span> 클래스는 Collection Framework의 포함된 클래스로써, 이름대로 배열(Array)에 관련된 메소드를 제공하고 있습니다. 배열 자체는 기본적인 자료구조이니 자세한 설명은 생략하도록 하고, 어떤 메소드들이 있는지 하나씩 알아보도록 하겠습니다.

- opyOf() : 원래의 배열에서 원소를 복사해 새 배열을 만듭니다.
- copyOfRange() : copyOf() 메소드와 기능적으로 유사하지만, 배열 전체가 아닌 특정한 범위의 요소들만 복사할 수 있다는 차이점이 있습니다.
- fill() : 배열의 원소를 특정 값으로 가득 채웁니다.
- setAll() : 배열의 원소를 특정 함수로 가득 채웁니다. 예를 들어, Math.random() 메소드를 같이 사용하여 배열의 원소를 무작위 값으로 채울 수 있습니다.
- sort() : 특정 배열을 오름차순으로 정렬합니다.
- binarySearch() : 이진 탐색(Binary Search)를 사용하여 배열에서 특정 값을 검색합니다. 이진 탐색을 사용하므로 배열은 반드시 정렬된 상태여야 합니다.
- toString() : 모든 원소를 문자열(String)로 변환합니다. 만약 배열이 2차원 이상이라면 deepToString()을 대신 사용합니다.
- equals() : 두 배열을 비교하여 원소가 모두 동일한지 확인합니다. 만약 배열이 2차원 이상이라면 deepEquals()를 대신 사용합니다.

다음 프로그램은 Array의 메소드를 이용한 간단한 예제입니다.

{% highlight java linenos %}
import java.util.*;

class Main {
    public static void main(String[] args) {
        int[] arr = {0, 1, 2, 3, 4};
        int[][] arr2D = {% raw %}{{11, 12, 13}, {21, 22, 23}}{% endraw %};
        System.out.println("arr=" + Arrays.toString(arr));
        System.out.println("arr2D=" + Arrays.deepToString(arr2D));
        int[] arr2 = Arrays.copyOf(arr, arr.length);
        int[] arr3 = Arrays.copyOf(arr, 3);
        int[] arr4 = Arrays.copyOf(arr, 7);
        int[] arr5 = Arrays.copyOfRange(arr, 2, 4);
        int[] arr6 = Arrays.copyOfRange(arr, 0, 7);
        System.out.println("arr2=" + Arrays.toString(arr2));
        System.out.println("arr3=" + Arrays.toString(arr3));
        System.out.println("arr4=" + Arrays.toString(arr4));
        System.out.println("arr5=" + Arrays.toString(arr5));
        System.out.println("arr6=" + Arrays.toString(arr6));
        int[] arr7 = new int[5];
        Arrays.fill(arr7, 9);
        System.out.println("arr7=" + Arrays.toString(arr7));
        Arrays.setAll(arr7, i -> (int) (Math.random() * 6) + 1);
        System.out.println("arr7=" + Arrays.toString(arr7));
        for (int i : arr7) {
            char[] graph = new char[i];
            Arrays.fill(graph, '*');
            System.out.println(new String(graph) + i);
        }
        String[][] str2D = new String[][]{% raw %}{{"aaa", "bbb"}, {"AAA", "BBB"}}{% endraw %};
        String[][] str2D2 = new String[][]{% raw %}{{"aaa", "bbb"}, {"AAA", "BBB"}}{% endraw %};
        System.out.println(Arrays.equals(str2D, str2D2));
        System.out.println(Arrays.deepEquals(str2D, str2D2));
        char[] chArr = {'A', 'D', 'C', 'B', 'E'};
        System.out.println("chArr=" + Arrays.toString(chArr));
        System.out.println("index of B=" + Arrays.binarySearch(chArr, 'B'));
        System.out.println("=== After sorting ===");
        Arrays.sort(chArr);
        System.out.println("chArr=" + Arrays.toString(chArr));
        System.out.println("index of B=" + Arrays.binarySearch(chArr, 'B'));
    }
}
{% endhighlight %}

## Comparable

Array 클래스가 sort 메소드를 호출한다고 가정해 봅시다. 원소가 int나 float 같은 기본적인 자료형인 경우 두 원소를 비교하여 순서를 쉽게 정렬할 수 있습니다. 그러나 원소가 Object일 경우, 어떻게 두 원소를 비교하여 정렬할 지에 대한 기준이 필요합니다. 즉, 두 원소가 <span style="color:red">비교가능(Comparable)</span>할 때만 정렬이 가능합니다.

Java에서 Sort 메소드는 `Comparable<T>` 인터페이스가 구현되었을 때만 가능합니다. 예를 들어, Integer 클래스 또한 `Comparable<T>` 인터페이스로 구현된 클래스입니다. `Comparable<T>` 인터페이스에는 `compareTo` 메소드가 정의되어 있고, `Arrays.sort()`가 호출되면 `compareTo` 메소드에 정의에 따라 원소들이 정렬됩니다. `compareTo` 메소드는 아래와 같이 정의되어 있습니다.

```java
public final class Integer extends Number implements Comparable<Integer> {
...
    public int compareTo(Integer anotherInteger) {
        int thisVal = this.value;
        int anotherVal = anotherInteger.value;
        return (thisVal < anotherVal ? -1 : (thisVal == anotherVal ? 0 : 1));
    }
...
}
```

## Comparator

<span style="color:red">Comparator</span>는 정렬하는 방법을 정의하는 인터페이스입니다. 예를 들자면 오름차순으로 정렬할 것인지, 내림차순으로 정렬할 것인지, 아니면 그 외의 방법으로 정렬할 것인지를 정의할 수 있습니다. `Array.sort` 메소드는 오름차순으로 정렬하도록 정의되어 있습니다. 실수는 물론, 문자열을 정렬해봐도 알파벳순으로 정렬되는 것을 쉽게 확인할 수 있습니다. (대소문자가 섞여있을 때는 대문자 -> 소문자 순서대로 정렬됩니다)

{% highlight java linenos %}
import java.util.*;

public class Main {
    public static void main(String[] args) {
        String[] strArr = {"lion", "DOG", "TIGER", "cat"};
        System.out.println("strArr = " + Arrays.toString(strArr));
        Arrays.sort(strArr);
        System.out.println("strArr = " + Arrays.toString(strArr));
    }
}
{% endhighlight %}

만약 다른 방법으로 정렬하고 싶다면 Comparator 인터페이스를 사용하여 클래스를 직접 구현하면 됩니다. 작성한 클래스에서 compare 메소드를 재정의함으로써 직접 어떤 방법을 사용할지 결정할 수 있습니다. 만약 위의 프로그램을 내림차순 정렬로 바꾸고 싶다면 아래처럼 프로그램을 작성해주시면 됩니다.

{% highlight java linenos %}
import java.util.*;

class Descending<T> implements Comparator<T> {
    public int compare(T o1, T o2) {
        if(o1 instanceof Comparable && o2 instanceof Comparable) {
            Comparable c1 = (Comparable)o1;
            Comparable c2 = (Comparable)o2;
            return c1.compareTo(c2) * -1; // reverse order
        }
        return -1; // undefined
    }
}

public class Main {
    public static void main(String[] args) {
        String[] strArr = {"lion", "DOG", "TIGER", "cat"};
        System.out.println("strArr = " + Arrays.toString(strArr));
        Arrays.sort(strArr, new Descending());
        System.out.println("strArr = " + Arrays.toString(strArr));
    }
}
{% endhighlight %}

만약 대소문자에 상관없이 정렬을 원한다면 `CASE_INSENSITIVE_ORDER`를 사용하시면 됩니다. Java에서는 아래처럼 선언되어 있습니다.

```java
public static final Comparator<String> CASE_INSENSITIVE_ORDER = new CaseInsensitiveComparator();

private static class CaseInsensitiveComparator implements Comparator<String>, java.io.Serializable {
    private static final long serialVersionUID = 8575799808933029326L;
    public int compare(String s1, String s2) {
        byte v1[] = s1.value;
        byte v2[] = s2.value;
        if(s1.coder() == s2.coder()) {
            return s1.isLatin1() ? StringLatin1.compareToCI(v1, v2) : StringUTF16.compareToCI(v1, v2);
        }
        return s1.isLatin() ? StringLatin1.compareToCI_UTF16(v1, v2) : StringUTF16.compareToCI_Latin1(v1, v2);
    }
    private Object readResolve() { return CASE_INSENSITIVE_ORDER; }
}
```

`CASE_INSENSITIVE_ORDER`를 아래와 같이 사용함으로써 대소문자를 섞어서 정렬할 수 있습니다.

{% highlight java linenos %}
import java.util.*;

public class Main {
    public static void main(String[] args) {
        String[] strArr = {"lion", "DOG", "TIGER", "cat"};
        System.out.println("strArr = " + Arrays.toString(strArr));
        Arrays.sort(strArr, String.CASE_INSENSITIVE_ORDER);
        System.out.println("strArr = " + Arrays.toString(strArr));
    }
}
{% endhighlight %}

이번 포스트는 여기까지입니다. Collection Framework가 아직 많이 남아있기 때문에 다음 포스트에 이어서 작성하도록 하겠습니다. 읽어주셔서 감사합니다!