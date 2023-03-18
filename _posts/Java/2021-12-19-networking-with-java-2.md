---
title: "Networking with Java (2)"
permalink: /java/networking-with-java-2/
classes: wide
toc: true
toc_label: "Table of Contents"
toc_sticky: true
categories:
  - studies
tags:
  - java
---

이번 포스트는 지난번에 이어 Java로 네트워크 프로그램을 만드는 주제입니다. 지난 포스트에서는 InetAddress 클래스와 URL 클래스를 위주로 다뤘는데, 오늘은 그보다 조금 어려운 TCP/UDP Socket에 대해 배워보도록 하겠습니다.

## TCP Socket Programming

TCP는 Transmission Control Protocol의 약자로 신뢰성 있는 전송을 보장하는 프로토콜입니다. OSI 7 계층 중 4번째 계층인 Transport 계증에 포함되어 있습니다. 통신 전 connection을 확보하는 특징이 있으며 주로 1:1 통신에 사용합니다. Java에서 TCP와 관련된 클래스로는 Socket 클래스와 ServerSocket 클래스가 있습니다.

TCP Socket은 클라이언트-서버 형태로 통신하는데, 그 과정은 다음과 같습니다.

서버는 ServerSocket을 사용하여 포트을 열어 수신을 대기하고 클라이언트가 연결하는 요청을 기다린다.
클라이언트는 서버의 IP 주소와 포트 번호를 이용하여 Socket을 생성하고 서버에 연결을 요청한다.
ServerSocket이 클라이언트의 연결 요청을 받으면 클라이언트에 대한 새로운 Socket을 만들고 클라이언트의 Socket과 연결을 확보한다.
연결이 확보되면 두 개의 소켓이 양방향으로 데이터를 보낼 수 있는 상태가 된다.

Socket 클래스는 두 프로세스 간의 통신을 관리하는 역할을 하는 클래스입니다. InputStream을 사용하여 데이터를 수신하고 OutputStream을 사용하여 데이터를 송신합니다. 두 프로세스가 통신할 때의 상황을 그림으로 표현하면 다음과 같습니다.

![](/images/Java/16. Networking with Java (2)/Java 16-01.png){: .align-center}

ServerSocket 클래스는 포트에서 클라이언트의 연결 요청을 기다리는 역할을 하는 클래스입니다. 클라이언트에서 연결 요청이 들어오면, 새로운 Socket을 만들어 클라이언트의 Socket과 연결되어 통신이 가능해집니다.

TCP Socket 프로그램은 서버 프로그램과 클라이언트 프로그램이 각각 구분됩니다. 예제를 통해 각각의 프로그램이 어떤 식으로 구성되는지 알아봅시다. 먼저 서버에서의 프로그램부터 보여드리도록 하겠습니다.

{% highlight java linenos %}
import java.io.IOException;
import java.net.Socket;
import java.net.ServerSocket;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.io.OutputStream;
import java.io.DataOutputStream;


public class Main {
    static String getTime() {
        SimpleDateFormat f = new SimpleDateFormat("[hh:mm:ss]");
        return f.format(new Date());
    }
    public static void main(String args[]) {
        ServerSocket serverSocket = null;
        try {
            serverSocket = new ServerSocket(7777);
            System.out.println(getTime() + "server is ready.");
        } catch(IOException e) { e.printStackTrace(); }
        while(true) {
            try {
                System.out.println(getTime() + "waiting for clients.");
                Socket socket = serverSocket.accept();
                System.out.println(getTime() + "connection request from " + socket.getInetAddress());
                OutputStream out = socket.getOutputStream();
                DataOutputStream dos = new DataOutputStream(out);
                dos.writeUTF("[Notice] Test Message1 from Server.");
                System.out.println(getTime() + "sent message.");
                dos.close();
                socket.close();
            } catch (IOException e) { e.printStackTrace(); }
        }
    }
}
{% endhighlight %}

간단한 프로그램이지만 불러와야할 라이브러리가 매우 많습니다. 11번째 Line의 getTime() 메소드는 현재 시간을 출력하는 기능을 하는 메소드입니다. 통신의 경우 서버와 클라이언트의 시간을 표현하는 것이 좋기 때문에 추가하였습니다.

main 메소드에서는 먼저 서버의 Socket을 새로 생성합니다. 예제에서는 7777번 포트를 사용하였는데, 포트를 사용할 수 없는 경우가 있기 때문에 예외 처리가 필요합니다.

21번째 Line부터 나오는 무한루프 부분은 클라이언트의 연결 요청을 기다리는 부분입니다. 서버는 클라이언트가 언제 연결 요청을 할지 모르기 때문에, 이렇게 무한정 대기를 하도록 설계하였습니다. 만약 클라이언트쪽에서 연결 요청이 오면, 24번~25번 Line에서 새로운 Socket을 만들고 클라이언트와 연결이 되었다는 메시지를 출력합니다. 클라이언트쪽에서도 연결이 되었다는 메시지를 송신해야 하므로 28번째 Line에서 테스트 메시지를 송신합니다.

마지막으로 DataOutputStream과 Socket을 닫고 프로그램을 종료합니다.

{% highlight java linenos %}
import java.io.IOException;
import java.net.ConnectException;
import java.net.Socket;
import java.io.InputStream;
import java.io.DataInputStream;


public class Main {
    public static void main(String[] args) {
        try {
            String serverIp = "127.0.0.1";
            System.out.println("connecting to server, IP: " + serverIp);
            Socket socket = new Socket(serverIp, 7777);
            InputStream in = socket.getInputStream();
            DataInputStream dis = new DataInputStream(in);
            System.out.println("message from server: " + dis.readUTF());
            System.out.println("disconnecting...");
            dis.close();
            socket.close();
            System.out.println("disconnected from server.");
        } catch(ConnectException ce) {
            ce.printStackTrace();
        } catch(IOException ie) {
            ie.printStackTrace();
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}
{% endhighlight %}

다음은 클라리언트쪽 예제입니다. 서버의 프로그램과 연결하기 위해서는 IP 주소가 필요하므로 11번째 Line에서 서버의 IP 주소를 설정하였습니다. 지금은 한 컴퓨터에서 서버와 클라이언트 프로그램을 같이 실행하므로 Localhost의 IP 주소를 입력했지만, 만약에 두 개의 컴퓨터에서 각각 서버와 클라이언트 프로그램을 실행하신다면 그에 맞는 IP 주소를 입력하시면 됩니다.

13번째 Line에서는 서버의 IP와 포트 번호를 입력하여 Socket을 생성하는 부분입니다. 서버쪽 프로그램이 실행되지 않았거나 IP 주소를 잘못 입력했을 경우를 대비하여 예외 처리가 필요합니다. 그 후에는 서버와 마찬가지로 InputStream/DataInputStream을 열고, 서버에서 연결이 되었다는 메시지를 수신한다음 DataInputStream과 Socket을 닫아 프로그램을 종료하는 순서입니다.

## InputStream & OutputStream

이전에 File Input & Output 포스트에서 FileInputStream 클래스와 FileOutputStream 클래스를 다룬 적이 있습니다. 다시 간단히 설명드리면 FileInputStream 클래스는 파일로부터 컨텐츠를 읽는데 사용했었고, FileOutputStream 클래스는 파일로 컨텐츠를 쓰는데 사용했습니다.

InputStream은 이름에서부터 유추할 수 있듯이 FileInputStream의 추상 슈퍼클래스(Abstract Superclass)입니다. 무언가로부터 데이터를 읽는데 사용합니다. 어떤 것으로부터 읽는가에 따라 파생 클래스가 달라집니다. (파일, 네트워크 등등) 마찬가지로 OutputStream도 FileOutputStream의 추상 슈퍼클래스가 됩니다.

위의 Socket 프로그램 예제에서 나온 DataInputStream과 DataOutputStream 또한 InputStream과 OutputStream의 파생 클래스입니다. 이름 그대로 Stream으로부터 데이터를 읽고 쓰는데 사용합니다. 먼저 DataInputStream에 어떤 메소드가 있는지를 보여드리도록 하겠습니다.

- boolean readBoolean() : 1 byte 입력을 받고 해당 byte가 0이면 false 그 외에는 true를 반환한다.
- byte readByte() : 1 byte 입력을 받고 반환한다.
- char readChar() : 2 byte 입력을 받고 char 자료형으로 반환한다.
- short readShort() : 2 byte 입력을 받고 short 자료형으로 반환한다.
- int readInt() : 4 byte 입력을 받고 int 자료형으로 반환한다.
- long readLong() : 8 byte 입력을 받고 long 자료형으로 반환한다.
- float readFloat() : 4 byte 입력을 받고 float 자료형으로 반환한다.
- double readDouble() : 8 byte 입력을 받고 double 자료형으로 반환한다.
- void readFully(byte[] b) : Input Stream으로 입력받아 byte 배열 b에 저장한다.
- void readFully(byte[] b, int off, int len) : Input Stream으로 매개변수 len 만큼 byte로 입력받아 byte 배열 b에 저장한다.
- String readLine() : Input Stream으로 다음 줄의 텍스트를 입력받고 String 자료형으로 반환한다.
- int readUnsignedByte() : 1 byte 입력을 받고 Unsigned Integer로 반환한다. (0~255)
- int readUnsignedShort() : 2 byte 입력을 받고 Unsigned Integer로 반환한다. (0~65535)
- String readUTF() : 수정된 UTF-8 포멧으로 인코딩된 문자열 입력을 받고 String 자료형으로 반환한다.
- int skipBytes(int n) : Input Stream에서 매개변수로 들어온 n byte 만큼 데이터를 건너뛰고, 건너뛴 바이트를 버린다.

다음은 DataOutputStream의 메소드입니다.

- void write(byte[] b) : Output Stream에 매개변수로 들어온 byte 배열 b의 모든 바이트를 쓴다.
- void write(byte[] b, int off, int len) : Output Stream에 매개변수로 들어온 byte 배열 b의 바이트를 len 만큼 쓴다.
- void write(int b) : Output Stream에 매개변수 b의 하위 8 bit를 쓴다.
- void writeBoolean(boolean v) : Output Stream에 boolean 매개변수 v를 쓴다.
- void writeByte(boolean v) : Output Stream에 매개변수 v의 하위 8 bit를 쓴다.
- void writeBytes(String s) : Output Stream에 매개변수 String을 쓴다.
- void writeChar(int v) : 2 byte로 구성된 char 매개변수 v 를 Output Stream에 쓴다.
- void writeChars(String s) : 매개변수 String s의 모든 문자를 문자당 2 byte씩 순서대로 Output Stream에 쓴다.
- void writeDouble(double v) : 8 byte로 구성된 double 매개변수 v 를 Output Stream에 쓴다.
- void writeFloat(float v) : 4 byte로 구성된 float 매개변수 v 를 Output Stream에 쓴다.
- void writeInt(int v): 4 byte로 구성된 int 매개변수 v 를 Output Stream에 쓴다.
- void writeLong(long v) : 8 byte로 구성된 long 매개변수 v 를 Output Stream에 쓴다.
- void writeShort(int v) : 2 byte로 구성된 short 매개변수 v 를 Output Stream에 쓴다.
- void writeUTF(String s) : 2 byte로 구성된 길이 정보를 Output Stream에 쓴다. 그 후 매개변수로 들어온 String s의 모든 문자를 수정된 UTF-8 포멧으로 쓴다.

## TCP Server using Threads

처음 다룬 서버-클라이언트 예제는 서버와 클라이언트가 1:1로 통신하는 경우만 가정하였습니다. 하지만 서버가 다수의 클라이언트와 연결하기 위해서는 각각의 클라이언트에 대응할 수 있도록 다수의 쓰레드(Thread)가 필요합니다. 쓰레드에 대해서는 다음 포스트에서 자세하게 다루기 때문에 여기서는 동시에 여러 일을 처리할 수 있는 기능이라고만 이해하시면 됩니다. Java에서 쓰레드에 관련된 기능으로는 Thread 클래스와 Runnable 인터페이스가 있는데, 여기에서는 Runnable 인터페이스를 사용하도록 하겠습니다.

이번에는 쓰레드를 사용하여 하나의 서버와 다수의 클라이언트를 연결할 수 있는 프로그램을 구성해보도록 하겠습니다. 클라이언트쪽 프로그램은 그대로 사용할 수 있으니 서버 프로그램만 보여드리도록 하겠습니다.

{% highlight java linenos %}
import java.io.IOException;
import java.io.OutputStream;
import java.io.DataOutputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Main implements Runnable {
    ServerSocket serverSocket;
    Thread[] threadArr;
    static String getTime() {
        String name = Thread.currentThread().getName();
        SimpleDateFormat f = new SimpleDateFormat("[hh:mm:ss]");
        return f.format(new Date()) + " " + name + ": ";
    }
    public Main(int num) {
        try {
            serverSocket = new ServerSocket(7777);
            System.out.println(getTime() + "server is ready.");
            threadArr = new Thread[num];
        } catch(IOException e) {
            e.printStackTrace();
        }
    }
    public static void main(String[] args) {
        Main server = new Main(5);
        server.start();
    }
    public void start() {
        for(int i=0; i<threadArr.length; i++) {
            threadArr[i] = new Thread(this);
            threadArr[i].start();
        }
    }
    public void run() {
        while(true) {
            try {
                System.out.println(getTime() + "waiting for clients...");
                Socket socket = serverSocket.accept();
                System.out.println(getTime() + "connection request from " + socket.getInetAddress());
                OutputStream out = socket.getOutputStream();
                DataOutputStream dos = new DataOutputStream(out);
                dos.writeUTF("[Notice] Test Message1 from Server.");
                System.out.println(getTime() + "sent message");
                dos.close();
                socket.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
{% endhighlight %}

Example 1의 서버 프로그램에서 변경된 부분만 정리하겠습니다. 먼저 9번째 Line은 쓰레드를 사용하기 위해 Runnable 인터페이스를 확장하여 Main 클래스를 선언하였습니다. 11번째 Line은 각 쓰레드를 관리하기 위해 쓰레드를 배열로 정의한 부분입니다.

이전 서버 프로그램에서는 Socket을 생성하는 부분이 main 메소드에 있었으나, 이번에는 생성자를 따로 만들었습니다. 생성자에서는 정수형 매개변수를 받아, 그 숫자만큼의 쓰레드를 생성합니다. main 메소드에서는 생성자를 사용하여 몇 개의 쓰레드를 만들 것인지 결정하고, start 메소드를 통해 반복문을 사용하여 쓰레드를 생성합니다. 마지막으로 run 메소드는 이전과 마찬가지로 클라이언트의 연결 요청을 기다린 다음, 요청이 들어오면 연결이 되었다는 메시지를 송신하고 종료하는 기능을 갖고 있습니다.

## Example : Chat Program

지금까지 배운 내용을 응용하여 채팅 프로그램을 만들어보도록 하겠습니다. 지금까지는 서버와 클라이언트가 연결되면 연결되었다는 메시지를 송신하고 바로 종료하였지만, 채팅 프로그램에서는 서버 프로그램을 계속 실행시켜 클라이언트가 언제든지 연결 및 종료를 할 수 있도록 만드는 차이점이 있습니다. 또한 클라이언트는 실시간으로 메시지를 송신/수신하고, 서버 또한 클라이언트에 메시지를 송신하거나 수신할 수 있도록 구성해야 합니다. 이런 구조를 이해하고 먼저 서버 프로그램을 설계하도록 하겠습니다.

{% highlight java linenos %}
import java.util.Scanner;
import java.io.IOException;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class Main {
    public static void main(String args[]) {
        ServerSocket serverSocket = null;
        Socket socket = null;
        try {
            serverSocket = new ServerSocket(7777);
            System.out.println("server is ready.");
            socket = serverSocket.accept();
            Sender sender = new Sender(socket);
            Receiver receiver = new Receiver(socket);
            sender.start();
            receiver.start();
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}

class Sender extends Thread {
    Socket socket;
    DataOutputStream out;
    String name;
    Sender(Socket socket) {
        this.socket = socket;
        try {
            out = new DataOutputStream(socket.getOutputStream());
            name = "["+socket.getInetAddress()+":"+socket.getPort()+"]";
        } catch(Exception e) {}
    }
    public void run() {
        Scanner scanner = new Scanner(System.in);
        while (out != null) {
            try {
                out.writeUTF(name+scanner.nextLine());
            } catch(IOException e) {}
        }
    }
}

class Receiver extends Thread {
    Socket socket;
    DataInputStream in;
    Receiver(Socket socket) {
        this.socket = socket;
        try {
            in = new DataInputStream(socket.getInputStream());
        } catch(IOException e) {}
    }
    public void run() {
        while ( in != null ) {
            try {
                System.out.println(in.readUTF());
            } catch(IOException e) {}
        }
    }
}
{% endhighlight %}

먼저 main 메소드는 이전과 크게 차이가 없습니다. 7777번 포트를 열고 ServerSocket을 연 다음 Sender와 Receiver의 Socket을 각각 생성합니다. 그 후 Sender와 Receiver의 start 메소드를 실행시키는 것이 전부입니다.

Sender 클래스는 Thread 클래스로부터 상속받은 메소드입니다. 방금 전의 예제에서는 Runnable 인터페이스를 사용하고 필요한 메소드를 직접 구현하였으나, 여기서는 Thread 클래스 내의 메소드를 사용하고자 합니다. Sender 클래스는 메시지를 클라이언트에게 전달해주는 역할을 합니다. 서버에서 입력받은 메시지를 소켓에 넣음으로써 클라이언트는 메시지를 수신할 수 있습니다. 마찬가지로 Receiver 클래스 또한 클라이언트의 Socket으로 데이터를 읽어 서버가 볼 수 있도록 화면에 출력해주는 역할입니다.

{% highlight java linenos %}
import java.util.Scanner;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.Socket;
import java.net.ConnectException;

public class Main {
    public static void main(String args[]) {
        try {
            String serverIp = "127.0.0.1";
            Socket socket = new Socket(serverIp, 7777);
            System.out.println("connected to server.");
            Sender sender = new Sender(socket);
            Receiver receiver = new Receiver(socket);
            sender.start();
            receiver.start();
        } catch(ConnectException ce) {
            ce.printStackTrace();
        } catch(IOException ie) {
            ie.printStackTrace();
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}

class Sender extends Thread {
    Socket socket;
    DataOutputStream out;
    String name;
    Sender(Socket socket) {
        this.socket = socket;
        try {
            out = new DataOutputStream(socket.getOutputStream());
            name = "["+socket.getInetAddress()+":"+socket.getPort()+"]";
        } catch(Exception e) {}
    }
    public void run() {
        Scanner scanner = new Scanner(System.in);
        while (out != null) {
            try {
                out.writeUTF(name+scanner.nextLine());
            } catch(IOException e) {}
        }
    }
}

class Receiver extends Thread {
    Socket socket;
    DataInputStream in;
    Receiver(Socket socket) {
        this.socket = socket;
        try {
            in = new DataInputStream(socket.getInputStream());
        } catch(IOException e) {}
    }
    public void run() {
        while ( in != null ) {
            try {
                System.out.println(in.readUTF());
            } catch(IOException e) {}
        }
    }
}
{% endhighlight %}

클라이언트 프로그램도 서버와 비슷합니다. 클라이언트 프로그램 또한 메시지를 송신/수신하는 기능이 필요하므로 서버 프로그램과 동일한 Sender/Receiver 클래스를 사용합니다.

위의 클라이언트 프로그램은 서버와 같은 컴퓨터에서 돌리는 것을 가정했기 때문에 IP 주소에 Localhost 주소를 넣었으나, 다른 컴퓨터를 사용한다면 서버 컴퓨터의 IP 주소를 대신 입력하시면 됩니다.

## Example : Chat Program with Multiple Users

방금 보여드린 채팅 프로그램 예제는 클라이언트와 서버가 1:1로만 통신할 수 있습니다. 1:1 채팅도 카카오톡 같은 메신저에서 많이 사용하지만, 다수의 유저가 참여하는 채팅방 또한 널리 사용되고 있습니다. 마침 오늘 배운 쓰레드를 사용한다면 이러한 채팅방을 어렵지 않게 만들 수 있습니다. 먼저 서버 프로그램을 보여드린다음 설명하도록 하겠습니다.

{% highlight java linenos %}
import java.util.*;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class Main {
    HashMap<String, DataOutputStream> clients;

    Main() {
        clients = new HashMap<>();
        Collections.synchronizedMap(clients);
    }

    public void start() {
        ServerSocket serverSocket = null;
        Socket socket = null;
        try {
            serverSocket = new ServerSocket(7777);
            System.out.println("server has started.");
            while (true) {
                socket = serverSocket.accept();
                System.out.println("a new connection from [" + socket.getInetAddress() + ":" +
                        socket.getPort() + "]");
                ServerReceiver thread = new ServerReceiver(socket);
                thread.start();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    void sendToAll(String msg) {
        Iterator<String> it = clients.keySet().iterator();
        while (it.hasNext()) {
            try {
                DataOutputStream out = (DataOutputStream) clients.get(it.next());
                out.writeUTF(msg);
            } catch (IOException e) {
            }
        }
    }

    public static void main(String args[]) {
        new Main().start();
    }

    class ServerReceiver extends Thread {
        Socket socket;
        DataInputStream in;
        DataOutputStream out;

        ServerReceiver(Socket socket) {
            this.socket = socket;
            try {
                in = new DataInputStream(socket.getInputStream());
                out = new DataOutputStream(socket.getOutputStream());
            } catch (IOException e) {
            }
        }

        public void run() {
            String name = "";
            try {
                name = in.readUTF();
                sendToAll("#" + name + " has joined.");
                clients.put(name, out);
                System.out.println("Current number of users: " + clients.size());
                while (in != null) {
                    sendToAll(in.readUTF());
                }
            } catch (IOException e) {
            } finally {
                sendToAll("#" + name + " has left.");
                clients.remove(name);
                System.out.println("[" + socket.getInetAddress() + ":" + socket.getPort() + "]" + " has disconnected.");
                System.out.println("Current number of users: " + clients.size());
            }
        }
    }
}
{% endhighlight %}

이전에는 쓰레드 배열을 사용하여 다수의 유저가 연결할 수 있도록 구성하였습니다. 하지만 배열은 유동적으로 갯수가 변하는 데이터를 관리하기 어려운 자료구조입니다. 그렇기 때문에 여기에서는 클라이언트를 관리하는데 HashMap을 사용하였습니다. HashMap은 클라이언트의 수가 늘어나면 크기가 유동적으로 변하기 때문에 클라이언트의 수가 늘어나더라도 문제가 생기지 않고, 동기식으로 작동하기 때문에 클라이언트 프로그램 또한 유저 수가 변하는 것을 빠르게 알 수 있다는 장점이 있습니다.

다음으로 sendToAll 메소드는 HashMap을 사용하여 모든 클라이언트에게 메시지를 전달해주는 기능을 갖고 있습니다. 하지만 이 메소드는 한 가지 문제점이 있습니다. 클라이언트 중 하나가 메시지를 보냈을 때, 해당 클라이언트에도 메시지가 전달되어 중복으로 출력되는 문제입니다. 이 문제를 해결하기 위해서는 ServerReceiver 클래스를 수정하여 메시지를 수신하는 생성자에서 누가 메시지를 보냈는지 체크한 다음 run()에서 해당 클라이언트를 제외하고 메시지를 보내게끔 수정하시면 됩니다. 이 부분을 직접 수정해보시기 바랍니다.

{% highlight java linenos %}
import java.util.*;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.Socket;
import java.net.ConnectException;

public class Main {
    static class ClientSender extends Thread {
        Socket socket;
        DataOutputStream out;
        String name;
        ClientSender(Socket socket, String name) {
            this.socket = socket;
            try {
                out = new DataOutputStream(socket.getOutputStream());
                this.name = name;
            } catch(Exception e) {}
        }
        @SuppressWarnings("all")
        public void run() {
            Scanner scanner = new Scanner(System.in);
            try {
                if (out != null) {
                    out.writeUTF(name);
                }
                while (out != null) {
                    out.writeUTF("["+name+"]"+scanner.nextLine());
                }
            } catch(IOException e) {}
        }
    }
    static class ClientReceiver extends Thread {
        Socket socket;
        DataInputStream in;
        ClientReceiver(Socket socket) {
            this.socket = socket;
            try {
                in = new DataInputStream(socket.getInputStream());
            } catch(IOException e) {}
        }
        public void run() {
            while (in != null) {
                try {
                    System.out.println(in.readUTF());
                } catch(IOException e) {}
            }
        }
    }
    public static void main(String args[]) {
        if(args.length != 1) {
            System.out.println("usage: java #filename username");
            System.exit(0);
        }
        try {
            String serverIp = "127.0.0.1";
            Socket socket = new Socket(serverIp, 7777);
            System.out.println("connected to server.");
            Thread sender = new Thread(new ClientSender(socket, args[0]));
            Thread receiver = new Thread(new ClientReceiver(socket));
            sender.start();
            receiver.start();
        } catch(ConnectException ce) {
            ce.printStackTrace();
        } catch(Exception e) {}
    }
}
{% endhighlight %}

다음은 클라이언트 프로그램입니다. 클라이언트 프로그램은 이전과 큰 차이가 있지는 않습니다. ClientSender 클래스는 Main 클래스 안에 포함된 클래스로 서버로 데이터를 보내는 역할을 하는 클래스입니다. ClientReceiver 클래스는 서버로부터 데이터를 받는데 사용됩니다.

main 메소드는 프로그램 실행 시 대화명을 argument로 입력하는 방식으로 클라이언트의 대화명을 설정하며, 대화명을 제대로 입력하지 않은 경우 프로그램이 바로 종료됩니다. 이후로는 이전과 마찬가지로 서버의 IP 주소를 사용하여 서버에 접속하고, 송신용 쓰레드와 수신용 쓰레드를 각각 생성하여 메시지를 주고받는 형태로 구성되어 있습니다.

## UDP Socket Programming

통신에는 지금까지 다루었던 TCP 프로토콜 외에도 UDP 프로토콜이 있습니다. UDP는 스타크래프트를 즐겨했던 분이라면 익숙한 단어일 것입니다. PC방에서 친구들과 스타크래프트를 플레이할 때 항상 마지막에 있는 UDP 프로토콜을 사용해서 플레이했었기 때문입니다.

![](/images/Java/16. Networking with Java (2)/Java 16-02.png){: .align-center}

UDP는 TCP와 다르게 연결을 확보하지 않고 메시지의 신뢰성을 보장하지 않습니다. 즉, 데이터 손실을 어느정도 감수하고 빠르게 데이터는 전송하는데 목적이 있는 프로토콜입니다. 예를 들어 Youtube처럼 동영상 데이터를 전송하는 경우, 픽셀 몇 개가 누락된다고 해서 동영상을 감상하는데 큰 문제가 생기지 않기 때문에 UDP 프로토콜을 사용하는 것이 좋습니다. Java에서는 UDP 프로토콜에 관련된 클래스로 DatagramSocket, DatagramPacket, MulticastSocket이 존재합니다.

그렇다면 UDP 프로토콜을 사용한 서버 프로그램과 클라이언트 프로그램이 TCP에서의 프로그램과 어떻게 다른지 확인해보도록 하겠습니다. 먼저 UDP 프로토콜의 서버 프로그램 예제입니다.

{% highlight java linenos %}
import java.util.*;
import java.text.SimpleDateFormat;
import java.io.IOException;
import java.net.DatagramSocket;
import java.net.DatagramPacket;
import java.net.InetAddress;

public class Main {
    @SuppressWarnings("all")
    public void start() throws IOException {
        DatagramSocket socket = new DatagramSocket(7777);
        DatagramPacket inPacket, outPacket;
        byte[] inMsg = new byte[10];
        byte[] outMsg;
        while(true) {
            inPacket = new DatagramPacket(inMsg, inMsg.length);
            socket.receive(inPacket);
            InetAddress address = inPacket.getAddress();
            int port = inPacket.getPort();
            SimpleDateFormat sdf = new SimpleDateFormat("[hh:mm:ss]");
            String time = sdf.format(new Date());
            outMsg = time.getBytes();
            outPacket = new DatagramPacket(outMsg, outMsg.length, address, port);
            socket.send(outPacket);
        }
    }
    public static void main(String args[]) {
        try {
            new Test().start();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
{% endhighlight %}

UDP 서버 프로그램은 TCP와 다르게 try-catch 문이 한 개만 사용되었습니다. 연결을 확립하지 않으므로 연결이 되었는지 확인해야하는 예외 처리가 필요 없기 때문입니다. 메시지가 수신되면 UDP 서버 프로그램은 메시지를 보낸 클라이언트에게 현재 날짜가 포함된 메시지를 보냅니다.

UDP Socket을 통해 메시지를 보내려면 DatagramPacket 인스턴스를 만들고, DatagramSocket을 통해 DatagramPacket을 보내야 합니다. DatagramPacket 인스턴스를 생성하기 위해 목적지의 IP 주소 및 포트 번호를 확인해야 하는데, getAddress()와 getPort() 메소드를 사용하여 클라이언트의 정보를 얻습니다.

다음은 UDP 클라이언트 프로그램의 예제입니다.

{% highlight java linenos %}
import java.io.IOException;
import java.net.DatagramSocket;
import java.net.DatagramPacket;
import java.net.InetAddress;
import java.net.UnknownHostException;

public class Main {
    @SuppressWarnings("all")
    public void start() throws IOException, UnknownHostException {
        DatagramSocket datagramSocket = new DatagramSocket();
        InetAddress serverAddress = InetAddress.getByName("127.0.0.1");
        byte[] msg = new byte[100];
        DatagramPacket outPacket = new DatagramPacket(msg, 1, serverAddress, 7777);
        DatagramPacket inPacket = new DatagramPacket(msg, msg.length);
        datagramSocket.send(outPacket);
        datagramSocket.receive(inPacket);
        System.out.println("current server time: " + new String(inPacket.getData()));
    }
    public static void main(String args[]) {
        try {
            new Main().start();
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}
{% endhighlight %}

UDP 클라이언트 프로그램은 Socket을 만들고 서버에 1바이트 메시지를 전송합니다. 그 후 서버로부터 송신되는 메시지를 기다리는 단순한 구조입니다.

원래라면 서버 프로그램을 먼저 실행시키고 클라이언트 프로그램을 실행시켜야 하는데, 만약 클라이언트 프로그램을 먼저 실행시키면 어떻게 될까요? TCP에서는 연결을 확립시키지 못하면 예외 처리에 걸려서 서버와 클라이언트 프로그램이 모두 종료되지만, UDP에서는 그렇지 않기 때문에 서버와 클라이언트 프로그램이 하염없이 대기하는 상태로 남아 있게 됩니다.

이것으로 Java Networking 주제도 끝이 났습니다. 다음 포스트에서는 Java의 마지막 주제인 멀티쓰레드 프로그래밍을 다루도록 하겠습니다. 읽어주셔서 감사합니다!