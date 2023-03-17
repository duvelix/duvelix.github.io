---
title: "Exception Handling"
permalink: /java/exception-handling/
classes: wide
toc: true
toc_label: "Table of Contents"
toc_sticky: true
categories:
  - studies
tags:
  - java
---

지난 포스트에서 Java의 파일 입출력에 대해 다루었습니다. 파일 입출력을 할 때는 예외 상황(ex. 해당 경로에 파일이 존재하지 않는 경우)이 발생할 수 있기 때문에 예외 처리를 반드시 해주어야 한다고 했었고, 그로 인해 IOException이라는 라이브러리를 호출한 다음, 파일 입출력을 실행하는 메소드에서 예외 처리 구현을 해줬습니다.

이렇게 Java에서는 예외가 발생할 수 있는 경우에서는 모두 예외 처리를 일일이 해줘야합니다. 이번 포스트에서는 예외가 언제 발생하고, 그 예외에 대해 어떻게 처리를 해줘야하는지 다뤄보겠습니다.

## Errors in Programs

프로그램에서 발생할 수 있는 에러는 3 종류가 있습니다. 각각의 에러는 발생하는 이유와 그 해결방법이 모두 다릅니다. 하나씩 소개하면 아래와 같습니다.

- **컴파일 에러(Compile-Time Error)** : 프로그램을 컴파일 하는 과정(=목적 프로그램을 만드는 과정)에서 발생하는 에러로써, 주로 문법 오류로 인해 발생한다. 컴파일 자체가 실패하기 때문에 목적 프로그램이 생성되지 않는다.
- **런타임 에러(Run-Time Error)** : 프로그램을 컴파일 하는데 문제가 없으므로 목적 프로그램이 생성되고, 실행도 가능하지만 프로그램 실행 도중 문제가 발생해 프로그램이 강제로 종료되는 에러. 예를 들면 인스턴스가 할당되지 않은 객체의 메소드에 접근하려고 할 때 생긴다.
- **논리적 에러(Logical Error)** : 프로그램을 컴파일 하는데도 문제가 없고, 실행하는 것도 문제가 없으나 프로그램의 잘못된 구현으로 인해 프로그래머가 원하는 결과가 나오지 않는 에러. 주로 수식을 잘못쓰는 등의 프로그래머의 실수로 인해 발생한다.

오늘 다룰 예외 처리는 이 중 런타임 에러 문제를 해결하기 위한 방법입니다.

## Run-Time Error

런타임 에러는 컴파일러가 잡아낼 수 없는 에러이기 때문에 결국 프로그래머가 해결해야만 합니다. 하지만 컴파일러조차 발견하지 못한 문제를 눈으로 코드를 한줄한줄 보면서 해결하는 것은 굉장히 어렵습니다. 특히 프로그램 길이가 길다면 에러를 잡느라 하루종일 걸릴수도 있습니다.

만약 런타임 에러 중 **메모리 에러(Out of Memory)**나 **스택 오버플로우(Stack Overflow)** 문제라면 그나마 발견하기 쉽지만, **Arithmetic Exception**, **Class Cast Exception**, **Null Pointer Exception**, **Index out-of-bound Exception** 등의 다양한 원인으로 발생하는 런타임 에러는 프로그래머를 피곤하게 만듭니다.

Java에서는 이 문제를 해결하기 위해, 애초에 프로그램에서 예외가 발생할 수 있는 경우에는 무조건 예외처리를 하도록 만들었습니다.

## Errors and Exceptions

Java에서는 <span style="color:red">오류(Error)</span>와 <span style="color:red">예외(Exception)</span>를 클래스로써 정의합니다. 사전 정의된 **Object**라는 클래스의 서브 클래스인 **Throwable** 이란 클래스가 있는데, 예외에 사용되는 클래스는 모두 Throwable 클래스의 서브 클래스입니다. 예외에 대한 클래스는 크게 두 가지로 나뉘는데, **RuntimeExcpetion** 클래스의 서브 클래스와 그렇지 않은 것들로 나뉩니다. 이 관계를 그림으로 표현하면 아래와 같습니다.

![](/images/Java/9. Exception Handling/Java 09-01.png){: .align-center}

RuntimeExcpetion으로 분류되는 예외는 주로 프로그래머의 실수로 인해 발생하는 문제를 의미합니다. 몇 가지만 소개하면 아래와 같습니다.

- ArrayIndexOutOfBoundsException
- NullPointerException
- ClassCastException
- ArithmeticException

그 외로 분류되는 예외로는 주로 환경으로 인해 발생하는 문제를 의미합니다. 역시 예를 들면 아래와 같은 오류들이 있습니다.

- FileNotFoundException
- ClassNotFoundException
- DataFormatException

## Exception Handling: try-catch

오류(Error)는 프로그래머가 직접 처리할 수 없지만, 예외(Exception)는 처리할 수 있습니다. Java에서는 예외 상황을 <span style="color:red">try-catch</span>를 사용해 처리합니다. 사용 방법은 아래와 같습니다.

```java
try {
    // 예외가 일어날 수 있는 코드
} catch (Exception1 e1) {
    //Exception1이 발생했을 때 실행할 코드
} catch (Exception2 e2) {
    //Exception2가 발생했을 때 실행할 코드
  try { } catch (Exception3 e3) { }
    // try-catch 내부에 또 다른 try-catch문 사용 가능. 단, 이 때 e2와 e3은 반드시 달라야 함
} catch (ExceptionN eN) {
    //ExceptionN이 발생했을 때 실행할 코드
}
```

예외 처리를 하기 위해서는 먼저 어디서 예외가 발생할 수 있는지를 프로그래머가 예측할 수 있어야 합니다. 예를 들어, 다음 프로그램에서 예외가 언제 발생할 수 있는지를 생각해봅시다.

{% highlight java linenos %}
public class Main {
    public static void main(String[] args) {
        int number;

        number = 100 / (int)(Math.random() * 10);
        System.out.println(number);
    }
}
{% endhighlight %}

위의 프로그램은 언뜻 보기에 전혀 문제가 없어 보입니다. 하지만 `Math.random()`은 0~1 사이의 난수를 생성하기 때문에, 10을 곱한다고 하더라도 결과가 0이 나올 수 있습니다. 그런 상황이 발생한다면 100에서 0을 나눌 수 없기 때문에, 예외 상황이 발생했다는 오류 메시지가 출력됩니다.

오류 메시지를 확인해보면 **ArithmeticException**이라는 예외가 발생했다고 나옵니다. 따라서 이 경우에는 아래처럼 ArithmeticException에 대한 예외 처리를 해주면 해결할 수 있습니다.

{% highlight java linenos %}
public class Main {
    public static void main(String[] args) {
        int number;

        try {
            number = 100 / (int) (Math.random() * 10);
            System.out.println(number);
        } catch (ArithmeticException e){
            System.out.println("0");
        }
    }
}
{% endhighlight %}

위의 프로그램은 ArithmeticException이 발생하면 0을 출력하게끔 수정한 결과입니다. 이렇게 예외 처리를 하게 되면 0을 나누게 되는 상황에서도 더 이상 프로그램이 죽는 문제가 발생하지 않습니다.

try-catch를 사용하게 되면 일반적인 경우에는 `try { }` 부분이 실행되고, 예외 상황이 발생할 경우에만 `catch { }` 부분이 실행되므로 두 부분이 동시에 실행되는 경우는 없습니다. `try { }` 부분이 실행되었다면, `catch { }` 부분이 무시되며, 그 반대의 경우도 마찬가지입니다.

## The Catch Block

catch는 ( ) 부분에서 명시한 예외가 발생할 때만 실행됩니다. 위의 예외 처리 예제에서는 ArithmeticException이 발생할 때만 catch 부분이 실행되는데, 만약 try 부분에서 ArithmeticException이 아닌 예외가 발생한다면 예외 처리를 하지 않은 것으로 간주되어 프로그램이 죽게 됩니다.

그렇기 때문에 어떤 예외가 발생할지 모른다면, 아래처럼 특정한 예외를 명시하지 않고 그냥 Exception으로 퉁치는 것도 하나의 해결 방법이 될 수 있습니다. Exception은 모든 예외의 슈퍼 클래스이기 때문에, 어떤 예외가 발생하더라도 해당되기 때문입니다.

{% highlight java linenos %}
public class Main {
    public static void main(String[] args) {
        int number;

        try {
            System.out.println(0/0);
        } catch (Exception e){
            System.out.println(0);
        }
    }
}
{% endhighlight %}

또는 ArithmeticException과 Exception 상황을 모두 가정할 수 있습니다. 이 때는 ArithmeticException 부분에 걸리게 되면 바로 ArithmeticException 부분이 실행되고, 그 외에는 Exception 부분이 실행됩니다.

{% highlight java linenos %}
public class Main {
    public static void main(String[] args) {
        int number;

        try {
            System.out.println(0 / 0);
        } catch (ArithmeticException e){
            System.out.println("ArithmeticException");
        } catch (Exception e){
            System.out.println("Exception");
        }
    }
}
{% endhighlight %}

주의하실 점은, 이렇게 사용할 경우 ArithmeticException을 반드시 먼저 선언해줘야 합니다. Exception을 먼저 선언하고 ArithmeticException을 선언한다면, 이미 예외 처리되었다는 경고 메시지가 나오며 컴파일 에러가 발생합니다.

{% highlight java linenos %}
public class Main {
    public static void main(String[] args) {
        int number;

        try {
            System.out.println(0 / 0);
        } catch (Exception e){
                System.out.println("Exception");
        } catch (ArithmeticException e){    // Compile Error!
            System.out.println("ArithmeticException");
        }
    }
}
{% endhighlight %}

try-catch를 사용하더라도 프로그래머는 왜 예외가 발생했는지 이유를 모를 수도 있습니다. 짧고 쉬운 프로그램이야 눈으로도 예외가 발생하는 부분을 쉽게 찾을 수 있지만, 프로그램의 길이가 길고 복잡하면 예외는 어찌어찌 처리한다 쳐도, 어디서 발생하는지 찾기가 힘듭니다.

이런 상황에는 와 `printStackTrace()`나 `getMessage()` 메소드를 사용하면 됩니다. 이 두 메소드는 <span style="color:red">디버깅(Debugging)</span>을 위해 사용되는 메소드로, `printStackTrace()`는 예외가 발생했을 때 출력되는 경고 메시지를 저장해두었다가 출력해주는 메소드이고, `getMessage()`는 예외가 발생하는 이유를 저장해두는 메소드입니다. 출력되는 방식은 아래 예제를 참고하시면 됩니다.

{% highlight java linenos %}
public class Main {
    public static void main(String[] args) {
        try {
            System.out.println(0 / 0);
        } catch (ArithmeticException e) {
            e.printStackTrace();
            System.out.println(e.getMessage());
        }
    }
}
{% endhighlight %}

이 프로그램을 실행해보시면 `printStackTrace()`는 예외 처리를 하지 않았을 때 출력되는 경고 메시지를 출력하고, `getMessage()`는 단순히 예외가 발생하는 이유만을 저장해두는 것을 알 수 있습니다.

## Generating an Exception

예외는 보통 의도치 않게 발생하지만, 프로그래머가 고의적으로 예외를 발생시킬 수도 있습니다. Java에서 예외를 Exception 클래스로써 정의하기 때문인데요, 예외를 생성하는 방법은 간단하게 Exception 클래스에 대한 객체를 생성하면 됩니다.

Exception 객체를 생성할 때 바로 예외로 넘어가는 것은 아니고, throw 문을 사용하여 해당 예외를 호출해야 합니다. 예외 처리는 이전과 같이 try-catch 문을 사용하시면 됩니다. 사용 예제는 아래와 같습니다.

{% highlight java linenos %}
public class Main {
    public static void main(String[] args) {
        try {
            Exception e = new Exception("Make Exception!");
            throw e;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        }
        System.out.println("End of Program.");
    }
}
{% endhighlight %}

하지만 예외를 임의로 발생시킬 때, 그에 대한 처리를 하지 않는다면 컴파일 에러가 발생합니다. 정확히는 RuntimeException을 제외한 나머지 Exception에 대해서만 그렇습니다. 따라서 아래의 예제는 컴파일 에러가 발생합니다.

{% highlight java linenos %}
public class Main {
    public static void main(String[] args) {

        throw new Exception("Make Exception!");    // Compile Error!

    }
}
{% endhighlight %}

이렇게 예외를 발생시켰을 때, 반드시 예외 처리를 해야만 하는 예외를 <span style="color:red">Checked Exceptions</span>라고 부릅니다. 반대로 처리를 하지 않아도 괜찮은 예외는 <span style="color:red">Unchecked Exceptions</span>라고 부릅니다. 사용하는 방법은 당연히 RuntimeException에 속한 예외를 발생시키는 것입니다. 아래의 예제는 위와 거의 비슷한 프로그램이지만, 정상적으로 작동합니다.

{% highlight java linenos %}
public class Main {
    public static void main(String[] args) {

        throw new ArithmeticException("Make Exception!");

    }
}
{% endhighlight %}

## Methods that throw Exceptions

지금까지는 main 메소드의 try-catch 문을 사용해서 주로 예외를 처리했지만, 클래스에 속해있는 메소드 자체에서도 예외를 처리할 수 있습니다. 메소드 이름 뒤에 `throws Exception`을 붙이게 되면, 해당 메소드에서 예외가 발생할 수 있다는 의미가 됩니다. 만약 다른 메소드에서 예외 처리가 된 메소드를 호출할 때는 호출한 메소드에서도 꼭 예외를 처리해줘야 합니다. 예를 들어, 아래와 같은 프로그램은 컴파일 에러가 발생합니다.

{% highlight java linenos %}
public class Main {
    public static void main(String[] args) {
        method1();
    }
    static void method1() {
        method2();    // Compile Error! 
    }
    static void method2() throws Exception {
        throw new Exception();
    }
}
{% endhighlight %}

위의 프로그램를 보시면 method2에서 예외를 처리해주었습니다. 그런데 method1에서 method2를 호출하는데, method1은 예외를 처리하지 않았기 때문에 컴파일 에러가 발생합니다.

이 프로그램이 제대로 동작할 수 있게 수정해봅시다. method1을 정의할 때 `throws Exception`을 붙여주면 끝날 것 같지만, 문제는 main에서도 method1을 호출하고 있기 때문에, main 메소드에서도 마찬가지로 `throws Exception`을 붙여줘야만 합니다.

{% highlight java linenos %}
public class Main {
    public static void main(String[] args) throws Exception {
        method1();
    }
    static void method1() throws Exception {
        method2();
    }
    static void method2() throws Exception {
        throw new Exception();
    }
}
{% endhighlight %}

이렇게 수정해주면 더 이상 컴파일 에러는 발생하지 않지만, 실행을 해보면 런타임 에러가 발생하는 것을 알 수 있습니다. 런타임 에러가 발생하는 이유는 예외를 호출하긴 하나, 제대로 처리되지 않았기 때문입니다.

이 프로그램을 정상적으로 동작하게 수정하는 방법은 두 가지가 있습니다. method1에서 try-catch를 사용해서 예외를 처리하는 방법과, method1에서는 예외를 호출만 하고 main 메소드에서 try-catch를 사용해서 예외를 처리하는 방법이 있습니다. 아래에 두 가지 해결 방법을 모두 소개하겠습니다.

**1) method1 메소드에서 예외를 처리하는 방법**

{% highlight java linenos %}
public class Main {
    public static void main(String[] args) {

        method1();
    }
    static void method1() {
        try {
            method2();
        } catch(Exception e) {
            System.out.println("Exception handling in method1.");
            e.printStackTrace();
        }
    }
    static void method2() throws Exception {
        throw new Exception();
    }
}
{% endhighlight %}

**2) main 메소드에서 예외를 처리하는 방법**

{% highlight java linenos %}
public class Main {
    public static void main(String[] args) {
        try {
            method1();
        } catch(Exception e) {
            System.out.println("Exception handling in main");
            e.printStackTrace();
        }
    }
    static void method1() throws Exception{
        method2();
    }
    static void method2() throws Exception {
        throw new Exception();
    }
}
{% endhighlight %}

눈치가 빠르신 분이라면 지난 포스트에서 파일 입출력을 다룰 때, 메인 메소드에서 예외 처리를 해준 것을 기억하실 수도 있습니다. 당시에는 IOException이라는 예외에 대해 throw를 해 줬는데, 그 이유는 FileOutputStream의 생성자가 `public FileOutputStream(String name) throws FileNotFoundException` 로 정의되어 있기 때문입니다.

하지만 지금 다시 생각을 해보면, 지난 포스트에서 IOException을 throw만 했지, 이번 포스트에서 배운 것처럼 try-catch문을 사용해서 예외 처리를 제대로 해주진 않았습니다. 따라서 지난 포스트에서 구현한 프로그램은 문제가 있고, FileNotFoundException이 발생한다면 프로그램이 죽게 됩니다. 지난 포스트의 프로그램 중 FileInput.java를 try-catch문을 사용하여 수정한다면 아래와 같습니다.

{% highlight java linenos %}
import java.io.FileInputStream;
import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        byte[] b = new byte[1024];
        try{
            FileInputStream input = new FileInputStream("src/input.txt");
            input.read(b);
            System.out.println(new String(b));
            input.close();
        } catch (IOException e){
            System.out.println("File Not Found!");
        }
    }
}
{% endhighlight %}

## The finally Block

try-catch문에는 finally라는 블록을 추가할 수 있습니다. finally 블록은 예외 상황이 발생하는 것과 상관 없이 무조건 마지막에 실행되는 블록입니다. **그럼 그냥 try-catch문 다음에 작성하면 되는 것 아닌가?** 라고 의문이 드실 텐데, finally 블록의 재밌는 점은 정말 **무조건** 실행된다는 점입니다. 다음 프로그램을 보시면 이것이 무슨 말인지 알 수 있습니다.

{% highlight java linenos %}
public class FinallyBlock {
    public static void main(String[] args) {
        System.out.println("Call method1.");
        Main.method1();
        System.out.println("Return main.");
    }

    static void method1() {
        try {
            System.out.println("Code in try block.");
            return;
        } catch(Exception e) {
            e.printStackTrace();
        } finally {
            System.out.println("Code in finally block.");
        }
    }
}
{% endhighlight %}

FinallyBlock.java의 실행 결과를 보면 try 블록에서 출력 후 return을 통해 메소드를 강제로 종료하는데, 그럼에도 불구하고 finally 블록 안의 코드가 실행됨을 알 수 있습니다.

## try-with-resources

지금까지는 try-catch를 사용할 때, 예외가 발생할 수 있는 코드를 try 블록 안에 넣는 방식으로 예외 처리를 수행했습니다. 그런데 이런 방식으로 파일 입출력을 구현할 때는 예외 처리가 상당히 복잡합니다. 예를 들어, 파일의 내용을 읽어 출력하는 프로그램을 작성한다고 가정해봅시다. 그 과정을 정리하면 다음과 같습니다.

1. InputStream을 통해서 파일을 읽는다.
2. read 메소드를 사용하여 파일의 내용을 버퍼에 받고 출력한다.
3. close 메소드를 사용하여 파일을 닫는다.

이 과정에서 예외는 1번에서만 발생될 것이라고 생각할 수 있지만, 실제로는 3번 과정에서도 예외가 발생할 수 있습니다. 파일을 닫는데 실패할 수도 있기 때문입니다. 따라서 메소드에서 IOException을 사용하지 않고 일반적인 try-catch로 이 과정을 구현하게 되면 구현이 조금 복잡해집니다.

{% highlight java linenos %}
import java.io.FileInputStream;
import java.io.IOException;

public class Main {

    public static void main(String[] args) {
        byte[] b = new byte[1024];
        FileInputStream input = null;
        try {
            input = new FileInputStream("src/input.txt");
            input.read(b);
            System.out.println(new String(b));
        } catch(IOException e) {
            e.printStackTrace();
        } finally {
            try {
                input.close();
            } catch(Exception e) {
                e.printStackTrace();
            }
        }
    }
}
{% endhighlight %}

일단 위의 코드는 정상적으로 구현된 프로그램입니다. 하지만 try-catch를 통해 파일을 읽고, 파일을 닫는 과정에서 또다시 try-catch를 사용했기 때문에 쓸데없이 복잡해지는 문제가 생깁니다.

이럴 때는 try 블록에서 ( )를 사용할 수 있습니다. ( ) 안에서 파일을 연다면 try 블록이 끝날 때 자동으로 close 메소드가 호출되어 파일이 닫히기 때문에 파일을 닫는 구현을 또 해줄 필요가 없습니다. 위의 코드를 이와 같은 방법으로 수정하면 다음과 같습니다.

{% highlight java linenos %}
import java.io.FileInputStream;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        byte[] b = new byte[1024];
        try (FileInputStream input = new FileInputStream("src/input.txt")) {
            input.read(b);
            System.out.println(new String(b));
        } catch(IOException e) {
            e.printStackTrace();
        }
    }
}
{% endhighlight %}

## Creating Custom Exceptions

Java에서는 이미 구현되어있는 예외가 많지만, 직접 예외를 구현하고 싶은 경우가 생길 수 있습니다. 새로운 예외는 Exception 클래스를 상속받아 서브 클래스를 구현하는 방식으로 만들 수 있습니다. 일반적인 사용자 정의 예외의 형태는 아래와 같습니다.

```java
class MyException extends Exception {
     MyException(String msg) {
         super(msg);
     }
 }
```

사용자 정의 예외는 다른 예외처럼 사용할 수 있습니다. 만약 사용자 정의 예외를 RuntimeException으로부터 상속받아 구현한다면 Unchecked Exception이 되고, Exception으로부터 상속받아 구현한다면 Checked Exception이 됩니다.

사용자 정의 예외를 구현한 예제는 다음과 같습니다. 이 예제는 Exception으로부터 상속받아 만들어 봤습니다.

{% highlight java linenos %}
class MyException extends Exception {
    MyException(String msg) {
        super(msg);
    }
}

public class Main {
    public static void main(String[] args) {
        try {
            method1();
        } catch(MyException e) {
            System.out.println(e.getMessage());
        }
    }
    
    static void method1() throws MyException {
        throw new MyException("My Exception!");
    }
}
{% endhighlight %}

이번 포스트는 여기까지입니다. 다음 시간에는 Generic Programming에 대해 알아보도록 하겠습니다.