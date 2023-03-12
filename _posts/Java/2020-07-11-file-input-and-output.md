---
title: "File Input & Output"
permalink: /java/file-input-and-output/
classes: wide
toc: true
toc_label: "Table of Contents"
toc_sticky: true
categories:
  - studies
tags:
  - java
---

## File Output : FileOutputStream

먼저 Java에서 파일 출력 방법을 알아보겠습니다. 코드를 보여드리면서 설명하는 것이 편할 것 같아, 파일 출력의 예제 코드를 보여드리고 한 줄씩 설명하도록 하겠습니다. 아래 프로그램은 Hello World!라는 문장이 들어있는 output.txt 파일을 생성하는 프로그램입니다.

{% highlight java linenos %}
import java.io.FileOutputStream;
import java.io.IOException;

public class FileOutput {
    public static void main(String[] args) throws IOException {
        FileOutputStream output = new FileOutputStream("src/output.txt");
        String str = "Hello World!";
        byte[] bytes = str.getBytes();
        output.write(bytes);
        output.close();
    }
}
{% endhighlight %}

Line 1~2

파일 출력을 위해서는 출력을 위한 클래스가 정의되어 있는 FileOutputStream 라이브러리를 먼저 불러와야 합니다. 또한 입출력에서의 예외 처리를 위한 라이브러리인 IOException 라이브러리도 불러와야하는데, 예외 처리에 대한 것은 추후 자세히 다뤄보도록 하고 일단은 이게 입출력에 대한 예외 처리가 담겨있는 라이브러리이구나 라고만 짚고 넘어가도록 하겠습니다.

Line 5

main 메소드를 정의할 때, 뒷 부분에 throws IOException이 붙은 것을 볼 수 있습니다. 이 부분이 바로 예외 처리를 설정한 부분입니다. Java에서 예외가 발생할 수 있는 메소드에서는 이렇게 직접 예외 처리를 해주어야 합니다. main 메소드에서 파일 출력을 할 예정이니, "파일 출력에 대한 예외가 발생할 수도 있다"라고 선언한 거라고 생각하시면 됩니다.

Line 6

파일 출력을 위한 객체를 생성하는 부분입니다. FileOutputStream은 첫째 줄에서 호출한 라이브러리에 정의된 파일 출력에 관한 클래스입니다. FileOutputStream 객체를 생성할 때 들어가는 매개변수는 파일을 생성할 경로가 됩니다.

파일 생성 경로의 표현 방법으로는 상대 경로(Relative Path)와 절대 경로(Absolute Path)가 있습니다. 상대 경로는 현재 프로그램의 위치를 기반해서 정하는 경로이고, 절대 경로는 해당 파일이 가지고 있는 고유 경로를 말합니다. 위의 프로그램에서는 상대 경로를 채택했는데, 만약 이것을 절대 경로로 표기한다면 C:\Users\Username\Java\src와 같은 형식이 됩니다.

어떤 경로를 사용할지는 프로그래머의 취향이지만, 일반적으로는 상대 경로를 더 많이 사용하고 권장됩니다. 절대 경로를 잘 사용하지 않는 이유는 프로그램을 여러 기기에서 실행할 때 각 기기마다 환경이 다를 수 있기 때문입니다. 현재 프로그램의 위치를 기반으로 경로를 정하게 되면 어떤 환경에서 실행해도 경로로 인한 문제가 발생하지 않기 때문에 가급적이면 상대 경로를 사용하는 것을 추천드립니다.

Line 7~8

이 부분은 파일에 쓰여질 문장을 정하는 부분입니다. 7번째 줄에서 String 객체로 Hello World! 라는 문자열을 대입하였는데, 8번째 줄에서는 String 클래스에 미리 정의되어 있는 getBytes라는 메소드를 사용하여 String 객체를 byte형 객체로 변환하는 것을 볼 수 있습니다. 굳이 byte형 객체로 변환하는 이유는 9번째 줄에서 설명드리겠습니다.

Line 9

9번째 줄은 매개변수로 넣은 문자열을 파일에 직접 쓰는 부분입니다. 이전에 문자열을 byte형 객체로 변환하였는데, FileOutputStream 객체의 write 메소드가 아래와 같이 정의되어 있기 때문입니다.

void write(byte buf[])

이렇게 write 메소드의 매개변수가 byte형 배열로 정의되어 있기 때문에 파일에 입력할 때는 byte형 객체로 변환하는 과정이 필요합니다.

Line 10

10번째 줄은 파일에 대한 쓰기가 끝나고 파일을 닫는 부분입니다. 이 과정을 생략해도 컴파일 에러나 런타임 에러가 발생하는 것은 아니고, 프로그램이 종료될때 알아서 닫아주긴 하지만 가급적이면 프로그래머가 스스로 닫아주는 것이 좋습니다.

## File Output : FileWriter

방금 배운 FileOutputStream 라이브러리를 사용한 파일 출력을 하게 되면 byte 형식으로만 쓰기가 가능하기 때문에 String 객체를 바로 파일에 작성하지 못한다는 단점이 있습니다. 그렇기 때문에 파일 출력에는 FileWrite라는 라이브러리가 존재하는데, 이 라이브러리를 사용하면 String 객체를 바로 파일에 쓸 수 있습니다. 사용 방법은 역시 코드를 먼저 보여드리고 한 줄씩 설명하도록 하겠습니다.

{% highlight java linenos %}
import java.io.FileWriter;
import java.io.IOException;

public class FileWrite {
    public static void main(String[] args) throws IOException {
        FileWriter fw = new FileWriter("src/output.txt");
        String str = "Hello World!";
        fw.write(str);
        fw.close();
    }
}
{% endhighlight %}

Line 1~2

FileOutputStream 라이브러리를 사용할 때와 마찬가지로, FileWriter 역시 라이브러리를 불러와야 합니다. FileWriter 또한 입출력에 관한 라이브러리이다 보니, 예외 처리를 위한 IOException 라이브러리를 불러와야 합니다.

Line 5

이 부분 역시 FileOutputStream를 사용할 때와 마찬가지로 main 메소드 뒷 부분에 throws IOException을 붙임으로써 예외 처리를 설정해 주어야 합니다.

Line 6

파일 출력을 위한 객체를 생성하는 부분입니다. FileWriter는 첫째 줄에서 호출한 라이브러리에 정의된 파일 출력에 관한 클래스입니다. FileOutputStream 객체와 마찬가지로 FileWriter 객체를 생성할 때 들어가는 매개변수는 파일을 생성할 경로가 됩니다.

Line 7~8

파일에 쓰여질 문장을 정의하고 파일에 쓰는 부분입니다. 7번째 줄에서 String 객체로 Hello World! 라는 문자열을 정의하고 별 다른 변환 없이 8번째 줄에서 바로 write라는 메소드를 사용하여 파일에 쓰는 것을 볼 수 있습니다. FileWriter의 write 메소드는 아래와 같이 정의되어 있습니다.

void write(String str)

다만 여러 줄을 작성할 때는 꼭 \r\n을 붙여야하는 단점이 있습니다. \r\n는 Carriage Return과 Line Feed를 의미하는데, 이것은 다음 줄로 넘긴다는 의미입니다.

Line 9

FileOutputStream 때와 마찬가지로 파일을 닫아주는 부분입니다.

## File Output : PrintWriter

FileWriter도 충분히 편리한 라이브러리이지만, 많은 줄의 프로그램을 작성할 때는 일일이 문장 끝마다 \r\n를 붙여야 하는 불편함이 있습니다. 이에 대한 대안으로 PrintWriter라는 또 다른 파일 출력 라이브러리가 존재합니다. 사용 방법은 아래와 같습니다.

{% highlight java linenos %}
import java.io.PrintWriter;
import java.io.IOException;

public class PrintWrite {
    public static void main(String[] args) throws IOException {
        PrintWriter pw = new PrintWriter("src/output.txt");
        String str = "Hello World!";
        pw.println(str);
        pw.close();
    }
}
{% endhighlight %}

언뜻 보면 FileWriter와 큰 차이가 보이지 않습니다. 차이점은 첫 줄의 라이브러리 선언과 PrintWriter 객체 선언, 그리고 write 메소드 대신 println 메소드가 쓰인 부분입니다. FileWriter와 큰 차이는 없지만, 여러 줄을 입력할 때 \r\n을 사용하지 않아도 되는 편리함이 있습니다.

## File Output : Appending to a file

파일 쓰기를 할 때, 새로운 파일이 아닌 기존에 열었던 파일에 이어서 작성하고 싶은 경우가 있습니다. 하지만 파일 출력 관련 객체를 선언할 때는 항상 새로운 빈 파일이 먼저 생성되기 때문에 이전에 작성한 내용이 날아가는 문제점이 있습니다. 예를 들어, 다음 프로그램을 실행해보면 첫 번째의 출력문은 날아가는 것을 알 수 있습니다.

{% highlight java linenos %}
import java.io.FileWriter;
import java.io.IOException;

public class AppendingFile {
    public static void main(String[] args) throws IOException {
        FileWriter fw = new FileWriter("src/output.txt");
        fw.write("First Sentence.\r\n");
        fw.close();

        FileWriter fw2 = new FileWriter("src/output.txt");
        fw2.write("Second Sentence.\r\n");
        fw2.close();
    }
}
{% endhighlight %}

이 문제를 해결하기 위해서는 두 번째 FileWriter 객체를 호출할 때, true라는 새로운 매개변수를 추가하면 됩니다. 이 부분은 이전 파일에 이어서 쓸 것인지, 아니면 새로운 파일에 작성할 것인지를 나타내는 부분인데, 아무 입력을 하지 않았을 때는 기본적으로 false로 설정되어 있습니다. 아래처럼 true 매개변수를 추가하게 되면 정상적으로 원하는 결과가 출력됨을 알 수 있습니다.

{% highlight java linenos %}
import java.io.FileWriter;
import java.io.IOException;

public class AppendingFileSolution {
    public static void main(String[] args) throws IOException {
        FileWriter fw = new FileWriter("src/output.txt");
        fw.write("First Sentence.\r\n");
        fw.close();

        FileWriter fw2 = new FileWriter("src/output.txt", true);
        fw2.write("Second Sentence.\r\n");
        fw2.close();
    }
}
{% endhighlight %}

PrintWriter를 사용해서도 비슷한 결과를 얻을 수 있지만, 파일을 이어서 쓰는 기능이 FileWriter에만 있기 때문에 조금 번거롭게 간접적으로 객체를 생성해야 하는 단점이 있습니다. 아래는 PrintWriter와 FileWriter를 같이 사용하여 파일을 이어쓴 예제입니다.

{% highlight java linenos %}
import java.io.FileWriter;
import java.io.PrintWriter;
import java.io.IOException;

public class AppendingFileSolution2 {
    public static void main(String[] args) throws IOException {
        PrintWriter pw = new PrintWriter("src/output.txt");
        pw.println("First Sentence.");
        pw.close();

        PrintWriter pw2 = new PrintWriter(new FileWriter("src/output.txt", true));
        pw2.println("Second Sentence.");
        pw2.close();
    }
}
{% endhighlight %}

## File Input : FileInputStream

다음으로는 파일 입력 방법입니다. 파일 입력 때도 출력과 마찬가지로 이미 정의된 라이브러리를 호출하여 사용합니다. 가장 먼저 소개할 방법은 FileInputStream 라이브러리를 이용한 방법입니다. 역시 예제 코드를 먼저 보여드리고 한 줄씩 설명하도록 하겠습니다.

{% highlight java linenos %}
import java.io.FileInputStream;
import java.io.IOException;

public class FileInput {
    public static void main(String[] args) throws IOException {
        byte[] b = new byte[1024];
        FileInputStream input = new FileInputStream("src/output.txt");
        input.read(b);
        System.out.println(new String(b));
        input.close();
    }
}
{% endhighlight %}

Line 1~2

역시 파일 입력을 위한 라이브러리를 호출하는 부분입니다. 이번에는 FileInputStream 이라는 기본적인 파일 입력 라이브러리와 예외 처리를 위한 IOException 라이브러리를 호출합니다.

Line 5

파일 입력에서의 예외 처리도 필요하기에, 파일 입력을 수행하는 main 메소드에서 예외 처리를 해준 모습입니다.

Line 6

이 부분은 파일로부터 읽어들인 문자열을 저장하는 부분입니다. FileOutputStream과 마찬가지로 FileInputStream도 byte 자료형 단위로 문자를 받기 때문에 byte형 배열로 선언한 모습입니다. 이렇게 파일로부터 읽어들인 문자열을 저장하는 곳을 버퍼(Buffer)라 부릅니다.

Line 7

파일 입력에 대한 객체를 선언하는 부분입니다. FileInputStream의 매개변수로는 읽을 파일이 위치한 경로가 됩니다. 만약 해당 경로에 파일이 없다면 예외가 발생하게 됩니다.

Line 8

파일 입력 객체의 read 메소드를 사용하여 미리 선언해둔 버퍼 b에 데이터를 저장하는 부분입니다.

Line 9

파일을 읽고 저장해둔 버퍼 b를 표준 출력으로 출력하는 부분입니다. 버퍼 b는 byte형으로 선언되어 있기 때문에, String 형 메소드로 타입을 변환한 후 출력해야 합니다.

FileInputStream에서는 버퍼 b의 크기 만큼의 데이터만 저장할 수 있기 때문에, 만약 읽어들일 파일의 내용이 버퍼 b의 크기를 넘어간다면 그 초과분만큼의 데이터는 출력할 수 없다는 문제점이 있습니다. 이 문제점을 개선하려면 아래와 같이 수정할 수 있습니다.

{% highlight java linenos %}
import java.io.FileInputStream;
import java.io.IOException;

public class FileInputModified {
    public static void main(String[] args) throws IOException {
        byte[] b = new byte[1024];
        FileInputStream input = new FileInputStream("src/output.txt");
        while(input.read(b) != -1) {
            System.out.println(new String(b));
        }
        input.close();
    }
}
{% endhighlight %}

## File Input : FileReader and BufferedReader

FileInputModified와 같은 방법을 통해 파일의 크기가 버퍼의 크기보다 크더라도 모든 내용을 출력하게 만들 수 있지만, 파일 크기 만큼 while문이 계속 돌기 때문에 하드웨어에 부담을 주게 됩니다. 그렇기 때문에 나온 대안이 FileReader 라이브러리와 BufferedReader 라이브러리입니다.

BufferedReader는 파일을 한 줄씩 읽을 수 있게 만드는 readLine 메소드를 가지고 있기 때문에, FileInputStream처럼 사용자가 직접 버퍼를 할당할 필요가 없는 장점이 있습니다. 사용 예제는 아래와 같습니다.

{% highlight java linenos %}
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class FileBufferReader {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new FileReader("src/output.txt"));
        while(true) {
            String line = br.readLine();
            if(line == null) break;
            System.out.println(line);
        }
        br.close();
    }
}
{% endhighlight %}

대부분은 기존의 파일 입출력과 크게 다르지 않기 때문에 요점만 짚고 넘어가겠습니다.

7번째 줄에서 BufferedReader 객체를 선언하는데, 이 때 FileReader 객체와 같이 선언해야 합니다. BufferedReader 자체에는 파일 입력을 받을 수 있는 기능이 존재하지 않기 때문입니다. 그 이후에는 while문을 돌며 프로그램이 끝날 때까지 파일을 출력할 수 있습니다. readLine 메소드는 파일에 더이상 내용이 없다면 null을 반환합니다.

이 방법의 또 다른 장점은 byte형으로 입력을 받는 FileInputStream과 달리, String 형으로 입력을 받는다는 것입니다. 객체 선언 자체는 FileInputStream보다 조금 복잡할 수도 있지만, 사용 방법이나 데이터 처리에는 훨씬 간편하기 때문에, 별 다른 이유가 없다면 이 방법을 권장하고 싶습니다.