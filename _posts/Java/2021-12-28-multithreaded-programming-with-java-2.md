---
title: "Multithreaded Programming with Java (2)"
permalink: /java/multithreaded-programming-with-java-2/
toc: true
toc_label: "Table of Contents"
toc_sticky: true
categories:
  - studies
tags:
  - java
---

안녕하세요, 이번 포스트는 Java 주제의 마지막 포스트입니다. 지난 포스트에 이어 멀티쓰레드 프로그래밍에 대해 더 알아보도록 하겠습니다.

## Thread States

각 쓰레드는 현재 어떤 일을 수행중인지 나타내기 위해 <span style="color:red">상태(State)</span>가 존재합니다.

- NEW : 쓰레드를 처음 만들면 이 상태가 됩니다. 쓰레드를 실행하지 않은 상태입니다.
- RUNNABLE : 쓰레드가 실행할 준비가 된 상태입니다. 이 상태에서는 쓰레드가 실행 중이거나, 언제든지 실행이 가능합니다.
- BLOCKED : 다른 쓰레드가 크리티컬 섹션(Critical Section)에 접근했을 때, 접근 권한을 얻기 위해 대기하고 있는 상태입니다. 크리티컬 섹션은 지난 포스트에서 은행 계좌 예시를 들었을 때 처럼 동시에 접근할 수 없는 부분입니다.
- WAITING : 다른 쓰레드가 notify() 또는 notifyAll()을 호출하기를 기다리는 경우, 쓰레드는 이 상태에 있습니다. 쓰레드는 wait() 또는 join()을 호출하여 이 상태에 들어갑니다.
- TIMED_WAITING : 쓰레드가 대기 중이지만 시간 초과된 경우 이 상태에 있습니다. 쓰레드는 sleep()을 호출하여 이 상태에 들어갑니다. 또한 지정된 시간을 초과했을 때 wait() 메소드를 호출하면 쓰레드는 이 상태가 됩니다.
- TERMINATED : 쓰레드가 run() 메소드를 실행하고 나면 이 상태가 됩니다.

쓰레드는 상황에 따라 각 상태에 돌입하며, 이를 도식화하면 아래 그림과 같습니다.

![](/assets/images/Java/018/01.png){: .align-center}

Java에서는 쓰레드의 상태를 조절하는 메소드가 존재합니다. 각 상태를 설명했을 때 나온 `join()` 등이 그 예시입니다. 이러한 메소드를 하나씩 정리해보겠습니다.

## sleep()

`sleep()` 메소드는 지정된 시간 동안 쓰레드를 중지하는 기능을 가지고 있습니다. `sleep()`의 프로토타입은 다음과 같습니다.

```java
sleep(long millis)
static void sleep(long millis, int nanos)
```

매개변수는 하나, 또는 2개가 들어갈 수 있으며 1개를 넣을 경우 밀리세컨드(ms) 단위이며 2개를 넣을 경우 첫 번째 매개변수인 밀리세컨드와 두 번째 매개변수인 나노세컨드(ns)를 더한 만큼의 시간이 됩니다. 즉, 매개변수로 들어간 시간만큼 쓰레드를 중지합니다. 사용 예시는 다음과 같습니다.

{% highlight java linenos %}
class ThreadExample1 extends Thread {
    public void run() {
        try {
            Thread.sleep(1000);
        } catch(InterruptedException e) {}
        for(int i=0; i<300; i++) {
            System.out.print("a");
        }
        System.out.print("<<end of thread1>>");
    }
}
class ThreadExample2 extends Thread {
    public void run() {
        try {
            Thread.sleep(2000);
        } catch(InterruptedException e) {}
        for(int i=0; i<300; i++) {
            System.out.print("b");
        }
        System.out.print("<<end of thread2>>");
    }
}
public class Main {
    public static void main(String args[]) {
        ThreadExample1 thread1 = new ThreadExample1();
        ThreadExample2 thread2 = new ThreadExample2();
        thread1.start();
        thread2.start();
        try {
            thread1.sleep(3000);
        } catch(InterruptedException e) {}
        System.out.print("<<end of main>>");
    }
}
{% endhighlight %}

지난 포스트에서 보여드렸던 a와 b를 각각 300번씩 출력하는 예제에 `sleep()` 메소드를 추가한 프로그램입니다. thread1은 문자를 출력하기 전에 1초 (1000ms) 기다리고 thread2는 문자를 출력하기 전에 2초를 (2000ms) 기다립니다. `main()` 메소드에서는 끝났다는 문자를 출력하기 전에 3초를 (3000ms) 기다립니다.

`sleep()`이 호출되면 쓰레드는 TIMED_WAITING 상태가 됩니다. `sleep()`을 호출할 때 지정한 시간이 지나면 쓰레드의 상태는 RUNNABLE이 됩니다. 만약 `sleep()`이 동작하는 동안 쓰레드에서 `interrupt()`가 호출되면 InterruptedException이 발생하고 쓰레드는 RUNNABLE 상태로 돌아갑니다.

## interrupt()

`interrupt()` 메소드는 쓰레드를 중단시키는 기능을 갖고 있습니다. 관련 메소드로 현재 `interrupt()` 메소드가 동작하는 중인지 확인하는 `isInterrupted()`라는 메소드와 `interrupt()` 메소드가 동작하는 것을 중지하고 원래 상태로 복구하는 `interrupted()` 메소드도 있습니다. 각 메소드의 프로토타입은 다음과 같습니다.

```java
void interrupt()
boolean isInterrupted()
static boolean interrupted()
```

`isInterrupted()` 메소드와 `interrupted()` 메소드는 boolean 타입의 반환이 있습니다. 만약 쓰레드가 멈춘 상태라면 `isInterrupted()` 메소드는 true를 반환합니다.

{% highlight java linenos %}
import javax.swing.JOptionPane;

class ThreadExample extends Thread {
    public void run() {
        int i=10;
        while(i!=0 && !isInterrupted()) {
            System.out.println(i--);
            try {
                Thread.sleep(1000);
            } catch(InterruptedException e) {}
        }
        System.out.println("countdown complete.");
    }
}
public class Main {
    public static void main(String[] args) throws Exception {
        ThreadExample thread1 = new ThreadExample();
        thread1.start();
        String input = JOptionPane.showInputDialog("Enter any string.");
        System.out.println("You entered " + input);
        thread1.interrupt();
        System.out.println("isInterrupted(): " + thread1.isInterrupted());
    }
}
{% endhighlight %}

이 예제는 thread1을 `interrupt()` 메소드를 통해 중단한 다음, `isInterrupted()` 메소드가 true를 반환하는 것을 확인할 수 있는 프로그램입니다. 하지만 실행해보시면 `interrupt()` 메소드가 분명히 실행되고 `isInterrupted()` 메소드가 true를 반환했음에도 카운트다운이 멈추지 않는 것을 확인할 수 있습니다. (이 예제는 웹 컴파일러에서는 실행할 수 없으니 사용하고 계신 IDE를 사용해서 실행해보시기 바랍니다.)

그 이유는 Line 8의 예외처리 때문입니다. InterruptedException 예외로 인해 쓰레드가 중단된 상태에서 다시 원래 상태로 복귀됩니다. 정확히는 interrupt 상태가 'false'로 돌아온 것입니다.

## yield()

3개의 쓰레드 thread1, thread2, thread3이 모두 RUNNABLE 상태에 있고, 실행 큐(Queue)에 배치된다고 가정해봅시다. 만약 CPU의 코어가 1개라면 스케줄러는 CPU에서 쓰레드를 어떻게 실행할 것인지 결정합니다. 예를 들어 thread1을 1초 동안 실행한 후, thread2도 1초 동안 실행하고 thread3도 마찬가지로 1초 동안 실행하는 식입니다. thread1이 실행 중일 때 `yield()`가 호출되면 남은 CPU 시간을 포기하고 실행 큐로 돌아갑니다. 이 때 thread1 대신 CPU에서 어떤 쓰레드를 실행할 것인지는 스케줄러에 달려 있습니다. `yield()`의 프로토타입은 다음과 같습니다.

```java
static void yield()
```

## join()

`join()` 메소드가 호출되면 현재 쓰레드의 실행을 중지하고 다른 쓰레드가 실행을 마칠 때까지 기다립니다. 프로토타입은 다음 3가지 종류가 있습니다.

```java
void join()
void join(long millis)
void join(long millis, int nanos)
```

만약 매개변수를 넣고 호출하면 현재 쓰레드는 다른 쓰레드가 실행을 완료할 때까지 매개변수로 지정된 시간 동안 기다립니다. `interrupt()` 메소드와 비슷하게 메소드의 실행을 중지하지만, 다른 쓰레드를 반드시 먼저 수행해야할 때 주로 사용합니다. 아래 예제는 `join()` 메소드를 사용하여 `main()` 메소드에서 다른 쓰레드가 모두 끝나기 전까지 기다리는 프로그램입니다.

{% highlight java linenos %}
class Thread1 extends Thread {
    public void run() {
        for(int i=0; i<300; i++) {
            System.out.print(new String("a"));
        }
    }
}
class Thread2 extends Thread {
    public void run() {
        for(int i=0; i<300; i++) {
            System.out.print(new String("b"));
        }
    }
}
public class Main {
    static long startTime = 0;
    public static void main(String args[]) {
        Thread1 thread1 = new Thread1();
        Thread2 thread2 = new Thread2();
        thread1.start();
        thread2.start();
        startTime = System.currentTimeMillis();
        try {
            thread1.join();
            thread2.join();
        } catch(InterruptedException e) { }
        System.out.print("elapsed time: " + (System.currentTimeMillis() - Main.startTime));
    }
}
{% endhighlight %}

위의 예제는 다른 쓰레드가 모두 끝날때까지 `main()` 메소드가 기다리게 만드는 프로그램입니다.

## Daemon Thread

<span style="color:red">데몬 쓰레드(Daemon Thread)</span>는 데몬이 아닌 다른 모든 쓰레드가 실행을 마치면 자동으로 죽는 쓰레드입니다. 즉, 평범한 쓰레드가 아니라 보조적으로 사용하는 쓰레드라고 생각하시면 됩니다. 데몬 쓰레드는 일반적으로 무한 루프를 사용하여 백그라운드 작업을 수행합니다. 데몬 쓰레드의 가장 좋은 예시로 문서 편집 프로그램의 자동 저장 기능이 있습니다. 쓰레드를 데몬 쓰레드로 설정하려면 `start()`를 호출하기 전에 `setDaemon(true)`를 호출하면 됩니다.

예시에 맞게 데몬 쓰레드를 사용하여 자동 저장 시스템이 어떤 식으로 동작하는지 구현해보았습니다. 이 예제는 5초에 한번 자동 저장을 하는 프로그램입니다. (실제로 프로그램이 자동저장을 하지는 않고 자동 저장을 했다는 메시지만 출력됩니다.)

{% highlight java linenos %}
public class Main implements Runnable {
    static boolean autoSave = false;
    public static void main(String[] args) {
        Thread t = new Thread(new Main());
        t.setDaemon(true);
        t.start();
        for (int i = 1; i <= 10; i++) {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {}
            System.out.println(i);
            if (i == 5)
                autoSave = true;
        }
        System.out.println("Terminating program.");
    }
    public void run() {
        while (true) {
            try {
                Thread.sleep(3 * 1000);
            } catch (InterruptedException e) {}
            if (autoSave) autoSave();
        }
    }
    public void autoSave() {
        System.out.println("Your work is saved to a file.");
    }
}
{% endhighlight %}

위의 예제는 데몬 쓰레드를 사용하여 5초에 한번씩 `autoSave()` 메소드를 호출하는 간단한 프로그램입니다.

## Thread Synchronization

지난 포스트에서 쓰레드의 단점에 대해 설명할 때 은행 계좌 예시를 들었습니다. 입금과 출금이 거의 동시에 일어날 때 중요한 변수(잔액)을 동시에 읽어 잔액의 증감이 제대로 처리되지 않는 문제가 발생할 수도 있다는 설명이었습니다. 이렇게 여러 쓰레드가 같은 변수에 접근하고 수정이 가능한 상황에서 동시에 실행할 경우 문제가 발생하는 부분을 <span style="color:red">크리티컬 섹션(Critical Section)</span>이라고 합니다.

은행 계좌에서의 잔액처럼 여러 쓰레드가 동시에 크리티컬 섹션에 접근하면 문제가 발생할 수 있으므로 크리티컬 섹션은 한 쓰레드가 접근한 상황에서는 다른 쓰레드의 접근을 막아야 합니다. 쉽게 이해시켜드리기 위해, 고의적으로 두 개의 쓰레드가 동시에 크리티컬 섹션에 접근하여 오류가 생기게 유도하는 예제를 보여드리겠습니다.

{% highlight java linenos %}
class Account {
    private int balance = 1000;
    public int getBalance() {
        return balance;
    }
    public void withdraw(int money) {
        if(balance >= money) {
            try { Thread.sleep(1000); } catch(InterruptedException e) {}
            balance -= money;
        }
    }
}
class Withdraw implements Runnable {
    Account acc = new Account();
    public void run() {
        while(acc.getBalance() >= 200) {
            int money = 200;
            acc.withdraw(money);
            System.out.println("balance: " + acc.getBalance());
        }
    }
}
public class Main {
    public static void main(String[] args) {
        Runnable r = new Withdraw();
        new Thread(r).start();
        new Thread(r).start();
    }
}
{% endhighlight %}

위의 예제는 계좌 잔액이 1000원인 상황에서 잔액이 200원 이상이라면 200원을 출금하는 것을 반복하는 프로그램입니다. `main()` 메소드에서는 이 출금 기능을 두 개의 쓰레드에 각각 배정하여 동시에 출금하게 만들었습니다. 프로그램을 실행해보시면 정상적으로 동작하지 않고 있다는 것을 쉽게 알 수 있습니다.

첫 번째 쓰레드가 출금을 끝마치기 전에 두 번째 쓰레드가 잔액을 읽게 되므로 실제로 남아있는 잔액과 두 번째 쓰레드가 읽은 잔액이 다른 것이 원인입니다. 즉, 이 문제를 해결하기 위해서는 한 쓰레드가 출금을 하는 동안에는 다른 쓰레드가 접근하지 못하도록 프로그램을 수정해야합니다.

{% highlight java linenos %}
class Account {
    private int balance = 1000;
    public int getBalance() {
        return balance;
    }
    public synchronized void withdraw(int money) {
        if(balance >= money) {
            try { Thread.sleep(1000); } catch(InterruptedException e) {}
            balance -= money;
        }
    }
}
class Withdraw implements Runnable {
    Account acc = new Account();
    public void run() {
        while(acc.getBalance() >= 200) {
            int money = 200;
            acc.withdraw(money);
            System.out.println("balance: " + acc.getBalance());
        }
    }
}
public class Main {
    public static void main(String[] args) {
        Runnable r = new Withdraw();
        new Thread(r).start();
        new Thread(r).start();
    }
}
{% endhighlight %}

수정하는 부분은 간단합니다. 예제의 크리티컬 섹션에 해당하는 부분(Account 클래스의 withdraw 메소드)에 synchronized 접두사를 붙이게 되면 해당 구역은 한번에 한 개의 쓰레드만 접근할 수 있습니다.

## 마치며

이로써 Java 포스트의 내용은 모두 끝났습니다. 처음 Java 포스트를 작성한 것은 2019년 말이었는데, 2년이 지나서야 이 주제를 마무리하네요. 한동안 블로그 관리를 등한시하느라 포스트들이 많이 밀려있었는데, 우선 시작했던 주제부터 끝내야겠다고 마음먹었기 때문에 가장 쉬운 Java 주제를 마치기로 결정했습니다. 다행히 부지런히 작성한 덕에 2021년이 끝나기 전에 마무리를 할 수 있었네요.

Java 포스트 외에도 작성 중인 주제가 여럿 있지만 일단 그것들은 나중으로 미루려고 합니다. 대신 새해부터는 예전부터 꼭 쓰려고 다짐했던 강화학습 주제를 써보고자 합니다. 최근 강화학습 프로그램을 짤 일이 생겼는데, 복습할겸 이론도 정리하면서 소스 코드도 소개하는 시간이 되면 좋겠습니다. 그럼 남은 연말 잘 보내시기 바랍니다!