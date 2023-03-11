---
title: "IDE 설치하기"
permalink: /java/install-ide/
classes: wide
toc: true
toc_label: "Table of Contents"
toc_sticky: true
categories:
  - studies
tags:
  - java
---

지난 시간에 Java 언어를 사용하기 위해서 JDK를 설치하였습니다. Java 언어를 코딩할 때 메모장이나 EditPlus 같은 간단한 문서 편집 프로그램을 사용해도 되지만, 지원하는 기능이 많지 않다보니 그렇게 추천하는 환경은 아닙니다. 다른 언어도 마찬가지이지만, 가급적이면 코딩을 할 때는 IDE에서 하시는게 좋습니다. IDE는 Integrated Development Environment (통합 개발 환경)이라는 뜻입니다.

IDE는 프로그램마다 조금씩 다르기 때문에 자신의 취향대로 선택하면 됩니다. Java IDE는 대표적으로 Eclipse, Netbeans, IntelliJ IDEA 등이 있습니다. 이 중 Eclipse를 많이 사용하긴 하지만 NetBeans나 IntelliJ IDEA의 사용자도 적지 않기 때문에, 하나하나 설치 후 사용 방법을 알려드리고자 합니다. 저는 참고로 원래 Eclipse를 사용했습니다만, 최근에는 IntelliJ IDEA를 사용하고 있습니다.

## Eclipse 설치하기

![](/images/Java/2. Install IDE/Java 02-01.png){: .align-center}

Eclipse는 Eclipse Foundation에서 제작/관리하는 IDE입니다. 그렇기 때문에 Eclipse를 다운받기 위해서는 Eclipse Foundation의 홈페이지를 방문하셔야 합니다. Eclipse 다운로드 페이지로 가신 후, Download 64-bit 버튼을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-02.png){: .align-center}

Eclipse 설치 파일을 다운 받으셔서 원하는 곳에 저장하시고, 더블 클릭하여 실행합니다. 실행하시면 위와 같은 Eclipse Installer 창이 나오는데, 이 중 가장 위에 있는 Eclipse IDE for Java Developers를 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-03.png){: .align-center}

이 화면은 JDK의 경로와 Eclipse 설치 경로를 설정하는 화면입니다. Eclipse 설치 경로는 딱히 건드릴 것이 없지만, JDK의 경로는 지난 시간에 설치한 JDK 경로가 맞는지 확인해보시기 바랍니다. 이상이 없다면, INSTALL 버튼을 클릭합니다.

혹시라도 JDK를 설치하지 않고 이 포스트를 보고계시다면, 아래의 포스트를 참고하셔서 JDK를 먼저 설치하시기 바랍니다.

- [JAVA] 1. JDK 설치하기

![](/images/Java/2. Install IDE/Java 02-04.png){: .align-center}

INSTALL 버튼을 누르시면 위 화면과 같이 설치가 시작됩니다. 잠시 기다리시면 설치가 완료됩니다.

![](/images/Java/2. Install IDE/Java 02-05.png){: .align-center}

설치 화면이 위와 같이 바뀐다면 설치가 완료된 것입니다. LAUNCH 버튼을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-06.png){: .align-center}

Eclipse가 실행되고 Workspace(작업 경로)를 설정하는 화면이 나옵니다. 기본적으로는 윈도우의 사용자 폴더로 지정되어 있습니다. Browse 버튼을 클릭하시면 Workspace 경로를 변경할 수 있는데, 저는 바탕화면이 편리하여 바탕화면으로 지정하였습니다. 물론 그냥 놔두셔도 상관 없습니다.

이 창은 Eclipse를 실행할 때마다 계속 나오는데, 그것이 싫으신 분은 아래쪽의 Use this as the default and do not ask again을 체크하시면 더이상 나오지 않습니다. 마지막으로 Launch 버튼을 클릭하시면 됩니다.

![](/images/Java/2. Install IDE/Java 02-07.png){: .align-center}

Launch를 클릭하시면 위와 같이 로딩 화면이 나옵니다. 예전에는 Eclipse 버전 이름이 Mars 같은 행성 이름이거나 Oxygen 같은 원자 이름으로 정했었는데, 이제는 연도-월 방식으로 정하고 있습니다.

## Eclipse에서 프로젝트, 클래스 생성하기

![](/images/Java/2. Install IDE/Java 02-08.png){: .align-center}

Eclipse가 실행되면 Welcome 페이지가 나옵니다. 이 화면에서 할 것은 없으니 X를 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-09.png){: .align-center}

이제 간단하게 Java 프로젝트를 만들고 간단한 프로그램을 만들어서 테스트를 해봅시다. 왼쪽에 나오는 Create a Java project를 누르셔도 되고, 위의 메뉴에서 File을 클릭하셔도 됩니다. 저는 File을 클릭해보겠습니다.

![](/images/Java/2. Install IDE/Java 02-10.png){: .align-center}

File을 클릭하시면 메뉴가 펼쳐지는데, 이 중 New에 마우스를 올려두면 서브 메뉴가 펼쳐집니다. 서브 메뉴 중 Java Project를 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-11.png){: .align-center}

새로운 Java 프로젝트를 만드는 창이 나옵니다. 가장 위에서는 프로젝트 이름을 정할 수 있습니다. 지금은 테스트만 간단하게 할 예정이기 때문에 test로 입력하였습니다. 두 번째는 JRE (Java Runtime Environment)를 선택하는 부분인데, 두 번째 항목을 클릭하셔서 이전에 설치한 JDK로 설정하시면 됩니다. Finish 버튼을 클릭하시면 프로젝트가 생성됩니다.

![](/images/Java/2. Install IDE/Java 02-12.png){: .align-center}

다음으로 module-info 파일을 만들 것인지를 물어보는 창이 나옵니다. 이것은 Java 프로그램을 모듈화 할 때 쓰는 부분인데, 지금은 딱히 필요가 없으므로 Don't Create 버튼을 클릭하시면 됩니다.

![](/images/Java/2. Install IDE/Java 02-13.png){: .align-center}

프로젝트를 만들었으면 다음으로 클래스를 만들어야 합니다. 프로젝트를 만들때와 똑같이 상단의 File을 클릭하셔서 New - Class를 클릭하시면 됩니다.

![](/images/Java/2. Install IDE/Java 02-14.png){: .align-center}

프로젝트를 만들 때와 똑같이 클래스의 이름을 정해주어야 합니다. 여기서는 간단하게 HelloWorld로 정하겠습니다. main 메소드를 만들어야 하니 public static void main(String[] args)를 체크합니다. 설정을 마친 후 Finish 버튼을 클릭하시면 됩니다.

![](/images/Java/2. Install IDE/Java 02-15.png){: .align-center}

프로젝트와 클래스를 모두 만든 화면입니다. 이와 비슷한 화면이 나오신다면 올바르게 따라오신 겁니다.

![](/images/Java/2. Install IDE/Java 02-16.png){: .align-center}

이제 간단한 프로그램을 하나 만들어보겠습니다. main 메소드 (public static void main) 안에 위 처럼 System.out.println("Hello World!"); 를 입력합니다. 반드시 맨 앞글자 S를 대문자로 작성하셔야 하고 맨 오른쪽에 ; (세미콜론)을 붙여주셔야만 합니다. 이것은 Hello World!를 출력하는 코드입니다.

![](/images/Java/2. Install IDE/Java 02-17.png){: .align-center}

방금 만든 프로그램을 컴파일하고 실행하기 위해서는 메뉴 중 Refactor 아래에 있는 Run (재생 모양 아이콘)을 클릭하시면 됩니다.

![](/images/Java/2. Install IDE/Java 02-18.png){: .align-center}

Run 아이콘을 클릭하시면 방금 만든 프로그램을 저장할 것인지 물어보는 창이 나옵니다. OK 버튼을 누르시면 됩니다.

![](/images/Java/2. Install IDE/Java 02-19.png){: .align-center}

Eclipse 맨 아래쪽을 보시면 Console 창이 있는데, 이곳에 방금 만든 프로그램이 실행된 결과를 볼 수 있습니다. Hello World! 가 출력된 것을 확인할 수 있습니다.

## NetBeans 설치하기

두 번째로 소개해드릴 IDE는 NetBeans (넷빈즈) 입니다. 사실 저는 NetBeans를 들어보기만 했지, 실제로 써본 적은 없습니다. Eclipse나 IntelliJ IDEA에 비해 오래된데다 업데이트 등의 지원도 부실하기 때문에 지금 Java를 공부하시는 분께는 추천하지 않는 IDE입니다. 하지만 초기 Java 언어 개발 도구로써 많이 사용되어 왔고, 지금도 NetBeans만을 고집하는 개발자나 회사도 있기 때문에, 어떻게 사용해야하는지는 알아두는 것이 좋을 것 같습니다.

![](/images/Java/2. Install IDE/Java 02-20.png){: .align-center}

NetBeans는 Apache (아파치)에서 관리하고 있습니다. 아마 웹 서버를 돌려본 적이 있는분이라면 Apache라는 단어에 익숙하실 겁니다. Apache는 이 외에도 여러 오픈 소스 프로젝트를 관리하고 있습니다.

그렇기 때문에 NetBeans를 설치하기 위해서는 Apache 홈페이지로 접속해야 합니다. 링크를 타고 가시면 바로 위와 같은 다운로드 페이지로 넘어가실 수 있습니다. 또는 그냥 구글에 NetBeans라고 검색하셔도 바로 링크가 나옵니다. 위와 같은 화면이 나오셨다면, Find out more 버튼을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-21.png){: .align-center}

이 글을 쓰는 시점의 NetBeans의 최신 버전은 11.2라고 나옵니다. Download 버튼을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-22.png){: .align-center}

사용하는 운영체제에 맞는 설치 파일을 선택할 수 있습니다. 저는 현재 윈도우에서 작업하고 있기 때문에 첫 번째 설치 파일을 클릭하겠습니다.

![](/images/Java/2. Install IDE/Java 02-23.png){: .align-center}

서버가 여러 곳으로 나뉘어 있는지 설치 파일을 받을 수 있는 경로가 다양합니다. 맨 위의 링크를 추천한다고 하니 그것을 클릭하여 받도록 하겠습니다.

![](/images/Java/2. Install IDE/Java 02-24.png){: .align-center}

설치 파일을 다운 받고 실행하면 위와 같은 설치 마법사가 나옵니다. 하나 눈에 띄는 점은 왼쪽 아래를 보시면 NetBeans IDE의 로고가 상당히 저화질입니다. 제대로 관리가 되지 않는 것 같은 느낌이 들긴 하지만, 설치를 해야 하니 Next 버튼을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-25.png){: .align-center}

사용 약관이 나오고, 이것에 동의를 해야 넘어갈 수 있습니다. I accept the terms in the lincense agreement에 체크를 하고 Next 버튼을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-26.png){: .align-center}

NetBeans의 설치 경로를 정할 수 있고, NetBeans에 어떤 JDK를 사용할 것인지 선택하는 화면이 나옵니다. 설치 경로는 딱히 변경할 필요가 없고, JDK는 지난 번에 설치했던 경로가 맞는지 확인해 봅시다. 만약 JDK를 아직 설치하지 않으셨다면, 아래의 포스트를 참고하셔서 JDK를 먼저 설치하시기 바랍니다.

- [JAVA] 1. JDK 설치하기

설치 경로와 JDK 경로에 문제가 없다면, Next 버튼을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-27.png){: .align-center}

업데이트를 주기적으로 체크할 것인지와 설치했을 때 용량이 어느 정도인지 표시해주고 있습니다. 건드릴 부분은 없으니 Install 버튼을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-28.png){: .align-center}

Install 버튼을 클릭하시면 위와 같은 화면이 나오고, 잠시 기다리시면 설치가 완료됩니다.

![](/images/Java/2. Install IDE/Java 02-29.png){: .align-center}

설치가 완료되었습니다. Finish 버튼을 눌러 설치 마법사를 종료한 다음, NetBeans를 실행시켜 간단하게 테스트해보도록 하겠습니다.

## NetBeans 프로젝트 생성하기

![](/images/Java/2. Install IDE/Java 02-30.png){: .align-center}

NetBeans를 실행시키면 위와 같은 로고가 나오며 약간의 로딩 시간이 있습니다. 여담으로 NetBeans의 로고가 예능 프로그램인 더 지니어스의 가넷과 비슷하네요.

![](/images/Java/2. Install IDE/Java 02-31.png){: .align-center}

위의 화면이 NetBeans IDE의 메인 화면입니다. 저도 NetBeans는 이 포스트를 작성하며 처음 설치해보는데, 2019년에 사용하는 프로그램이라고는 믿기지 않는 디자인입니다. 제가 처음에 C언어를 배울 때 사용했던 Visual Studio 6.0과 비슷한 디자인입니다.

어쨌든 프로젝트를 만들어야 하니, 상단 메뉴에 있는 File을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-32.png){: .align-center}

File을 클릭하시면 메뉴가 펼쳐지는데, 이 중 New Project를 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-33.png){: .align-center}

NetBeans의 Java 프로젝트는 Eclipse에 비해서 종류가 다양합니다. Category에서는 Maven, Gradle, Ant 중 하나를 선택할 수 있는데, 여기서는 기본 옵션인 Ant를 선택하겠습니다. Maven과 Gradle은 Apache에서 만든 빌드 도구인데, 아직은 신경쓰지 않으셔도 됩니다.

Projects에서는 Java Application을 선택하시면 됩니다. 선택을 완료하신 후, Next 버튼을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-34.png){: .align-center}

다른 IDE와 다르게 뭔가를 활성화하는 과정이 필요하다고 나옵니다. Activate 버튼을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-35.png){: .align-center}

이제 Project 이름을 정할 수 있습니다. 지금은 간단하게 테스트만 할 예정이니 test 라고 정하고, 프로젝트 경로를 정할 수 있습니다. 기본적으로는 Eclipse와 유사하게 NetBeans의 프로젝트 폴더로 설정되어 있는데, 저는 바탕화면으로 변경하겠습니다.

아래의 Create Main Class는 자동으로 체크 되어있는데, 이것이 체크 되어 있다면 자동으로 기본 클래스가 생성됩니다. 따로 Class를 만들어 줄 수도 있지만, 귀찮으니 그냥 체크하고 넘어가겠습니다. 프로젝트 이름을 정하고 경로를 설정하셨으면 Finish 버튼을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-36.png){: .align-center}

프로젝트와 클래스가 만들어진 화면입니다. 딱 봐도 Eclipse에 비해 약간 촌스러운 인터페이스 입니다. 제대로 설치되었는지 확인하기 위해, Eclipse를 설치했을 때처럼 간단한 프로그램을 작성해 실행해 보겠습니다.

![](/images/Java/2. Install IDE/Java 02-37.png){: .align-center}

//TODO code application logic here 아래에 System.out.println("Hello World!"); 를 입력합니다. Hello World! 라는 문장을 출력하는 Java 코드입니다. 위의 메뉴 중 재생 버튼을 클릭하시면 자동으로 컴파일 후 실행이 됩니다.

![](/images/Java/2. Install IDE/Java 02-38.png){: .align-center}

아래 Console 화면에 Hello World! 가 정상적으로 출력된 것을 볼 수 있습니다.

## JetBrain 학생 라이선스 발급받기

세 번째로 소개해드릴 IDE는 IntelliJ IDEA입니다. IntelliJ IDEA는 JetBrain에서 개발한 IDE로, 최근 급속도로 사용자가 늘어 이클립스보다도 높은 점유율을 차지하고 있습니다. 저는 처음 Java를 배울때부터 Eclipse를 사용하기 때문에 아직도 Eclipse를 주로 사용하기는 하지만, 주변에서 Eclipse보다 훨씬 더 뛰어난 기능을 보유하고 있다고 추천하여 조금씩 사용해보고자 합니다. JetBrain은 이 외에도 파이썬 개발을 위한 IDE인 Pycharm을 개발하기도 했습니다.

IntelliJ IDEA는 이전에 소개해드린 두 IDE와 다르게 무료 버전인 Community와 유료 버전인 Ultimate 2가지 버전이 존재합니다. Community 버전도 기본적인 Java 개발은 충분히 가능하고 상업적으로 이용할 수도 있기 때문에 이것을 사용해도 괜찮지만, 학생이라면 Ultimate 버전을 무료료 사용할 수 있기 때문에 이왕이면 Ultimate 버전을 사용하는 것이 좋습니다. 그렇기 때문에 이번에는 JetBrain 학생 라이선스를 얻는 과정부터 시작하겠습니다.

![](/images/Java/2. Install IDE/Java 02-39.png){: .align-center}

먼저 JetBrains 홈페이지에 접속합니다. 지금 확인해보니 한글 페이지도 따로 존재하던데, 스크린샷을 찍을 때는 그걸 몰라서 영어 페이지로 접속했습니다. 과정은 다르지 않으니 편하신 페이지에서 작업하시면 될 것 같습니다. 상단 메뉴 중에 Support 메뉴에 마우스를 올리거나 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-40.png){: .align-center}

마우스를 올리거나 클릭하시면 서브 메뉴가 펼쳐지는데, 이 중 Education을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-41.png){: .align-center}

무료 교육용 라이선스를 발급 받을 수 있는 페이지로 넘어옵니다. APPLY FOR FREE STUDENT PACK 버튼을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-42.png){: .align-center}

무료 교육용 라이선스를 발급받을 수 있는 자격과 방법이 안내되어 있습니다. 오른쪽 아래에 보이는 APPLY NOW 버튼을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-43.png){: .align-center}

학생 인증을 받기 위한 방법은 4가지가 있는데, 제일 무난한 방법은 학교 이메일을 통해 인증을 받는 것입니다. 학교에서 이메일을 제공하지 않는 경우에는 OFFICIAL DOCUMENT 등의 방법을 통해서 인증을 받아야 하지만, 우선 저는 학교 이메일이 있기 때문에 이 방법으로 인증을 하겠습니다.

안내되어 있는대로 선택하거나 작성하신 뒤, 가운데에 있는 약관 동의에 체크를 하시면 됩니다. 그 아래에 있는 내용은 이메일로 JetBrains의 소식을 받아볼 것인지 물어보는 항목인데, 굳이 체크를 하지 않으셔도 됩니다. 마지막으로 APPLY FOR FREE PRODUCTS를 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-44.png){: .align-center}

학생 라이선스 신청이 완료되었습니다. 하지만 신청한 라이선스를 사용하기 위해서는 신청할 때 기입했던 학교 이메일 주소에 로그인하여 확인하는 과정을 거쳐야 합니다. 학교 이메일 계정에 로그인합니다.

![](/images/Java/2. Install IDE/Java 02-45.png){: .align-center}

학교 이메일 계정에 로그인하시면 위와 같은 이메일이 도착해 있는 것을 확인할 수 있습니다. 이메일에 포함된 링크 중 Confirm Request를 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-46.png){: .align-center}

교육용 라이선스에서 TOOLBOX에 대한 구독에 동의해야 한다는 화면이 나옵니다. 선택의 여지가 없으니 오른쪽 아래의 I Accept 버튼을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-47.png){: .align-center}

드디어 학생용 라이선스를 발급하는데 성공했습니다. 하지만 저는 JetBrains 계정이 없기 때문에 만드는 과정이 필요합니다. 오른쪽의 Create JetBrains Account 항목에 방금 라이선스를 받은 이메일 주소를 입력하고 Sign Up 버튼을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-48.png){: .align-center}

회원가입 화면으로 넘어오면 이메일 주소와 이름은 이미 기입되어 있고, 사용할 Username과 비밀번호만 입력하시면 됩니다. 입력을 다 하셨으면 약관 동의 항목에 체크를 하시고, Submit 버튼을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-49.png){: .align-center}

회원가입을 마치면 자동으로 라이센스 보유 페이지로 넘어가게 됩니다. 방금 발급 받은 JetBrains 학생 라이선스가 발급된 것을 확인할 수 있습니다. 이 라이센스로 사용할 수 있는 제품의 목록이 나오는데, 이 중 IntelliJ IDEA Ultimate를 클릭하면 다운로드 페이지로 넘어갈 수 있습니다.

## IntelliJ IDEA 설치하기

![](/images/Java/2. Install IDE/Java 02-50.png){: .align-center}

IntelliJ IDEA 페이지로 넘어오면 바로 다운로드를 할 수 있는 버튼이 보입니다. DOWNLOAD 버튼을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-51.png){: .align-center}

다운로드 페이지에서는 Ultimate 버전과 Community 버전을 선택하여 다운로드 받을 수 있는데, 저희는 방금 Ultimate 라이선스를 발급받았으니 Ultimate 버전으로 다운로드 받겠습니다. Download 버튼을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-52.png){: .align-center}

다운받은 설치 파일을 실행하시면 설치 마법사가 실행됩니다. Next 버튼을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-53.png){: .align-center}

설치 경로를 지정하는 부분입니다. Next 버튼을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-54.png){: .align-center}

설정 부분도 건드릴 부분이 딱히 없습니다. Next 버튼을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-55.png){: .align-center}

시작 메뉴 폴더를 만드는 부분입니다. Install 버튼을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-56.png){: .align-center}

IntelliJ IDEA 설치를 시작합니다. NetBeans나 Eclipse와 비교했을 때 설치 시간이 좀 걸리는 편입니다.

![](/images/Java/2. Install IDE/Java 02-57.png){: .align-center}

기다리시면 위처럼 설치가 완료되었다는 메시지가 나옵니다. Run IntelliJ IDEA에 체크하시고 Finish 버튼을 클릭하시면 바로 IntelliJ IDEA를 실행할 수 있습니다.

## IntelliJ IDEA 기본 설정하기

![](/images/Java/2. Install IDE/Java 02-58.png){: .align-center}

IntelliJ IDEA를 처음 실행하면 이전에 사용하던 설정이 있으면 불러올 수 있는 화면이 나옵니다. 만약에 처음 설치하는 분이라면 딱히 불러올 설정이 없으니 그냥 OK 버튼을 클릭하시면 됩니다.

![](/images/Java/2. Install IDE/Java 02-59.png){: .align-center}

약관 동의 화면이 나옵니다. IntelliJ IDEA를 사용하려면 당연히 동의해야하니 동의에 체크하시고 Continue 버튼을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-60.png){: .align-center}

다음으로 테마를 고를 수 있는 화면이 나옵니다. 기본적으로 Dracula 테마가 선택되어 있고, 실제로도 이 테마를 사용하는 분이 많은데 저는 개인적으로 흰 화면이 좋아서 Light 테마를 선택하였습니다. 원하는 테마를 선택하신 다음, Next: Default plugins 버튼을 클릭하시면 됩니다.

![](/images/Java/2. Install IDE/Java 02-61.png){: .align-center}

IntelliJ IDEA의 기본 플러그인을 설정할 수 있는 화면이 나옵니다. 아직은 건드릴 부분이 없어 보이므로 Next: Featured plugins 버튼을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-62.png){: .align-center}

IntelliJ IDEA에 추가할 플러그인을 설치할 수 있는 화면이 나옵니다. 역시 이 부분도 건드릴 것이 없기 때문에 Start using IntelliJ IDEA 버튼을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-63.png){: .align-center}

다음으로는 Ultimate 버전에 대한 라이선스를 인증하는 화면이 나옵니다. 인증하기 위한 수단으로 3가지 방법이 있는데, 지금까지의 과정을 올바르게 따라오셨다면 학생 라이선스가 인증된 JetBrains 계정이 있을테니 그것으로 로그인하시면 됩니다.

![](/images/Java/2. Install IDE/Java 02-64.png){: .align-center}

로그인에 성공하시면 위처럼 1년간 학생 라이선스로 활성화되었다는 안내가 나옵니다. Continue 버튼을 클릭합니다.

## IntelliJ IDEA 프로젝트 생성하기

![](/images/Java/2. Install IDE/Java 02-65.png){: .align-center}

이제 힘들게 설치한 IntelliJ IDEA로 이전처럼 간단한 프로그램을 하나 만들어서 테스트해보겠습니다. Create New Project를 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-66.png){: .align-center}

프로젝스 설정 화면이 나옵니다. 왼쪽 메뉴에서 Java를 선택하시고, 상단의 Project SDK는 이전에 설치한 JDK를 선택합니다. 만약 JDK를 아직 설치하지 않으셨다면, 아래의 포스트를 참고하셔서 JDK를 먼저 설치하시기 바랍니다.

- [JAVA] 1. JDK 설치하기

설정을 마치셨으면 Next 버튼을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-67.png){: .align-center}

다음으론 기존의 템플릿을 사용해서 프로젝트를 생성할 것인지 물어보는 화면인데, 체크를 하고 Next 버튼을 클릭하도록 하겠습니다.

![](/images/Java/2. Install IDE/Java 02-68.png){: .align-center}

프로젝트 이름과 프로젝트 경로를 설정할 수 있는 화면입니다. 원하시는 이름과 경로를 설정하시면 됩니다. 저는 프로젝트 이름을 test로 하고 경로를 바탕화면으로 변경하였습니다. 설정을 마치신 후 Finish 버튼을 클릭합니다.

![](/images/Java/2. Install IDE/Java 02-69.png){: .align-center}

이제 프로젝트 화면이 나옵니다. Main.java 파일이 미리 만들어져 있는 것을 볼 수 있습니다. Eclipse나 NetBeans와 다르게 프로젝트 화면이 보이지 않는데, 왼쪽의 Project를 클릭하면 프로젝트 디렉토리가 나옵니다.

![](/images/Java/2. Install IDE/Java 02-70.png){: .align-center}

이전과 마찬가지로 Hello World! 를 출력하는 프로그램을 만들어 보겠습니다. // write your code here 아래에 System.out.println("Hello World!"); 를 입력합니다.

![](/images/Java/2. Install IDE/Java 02-71.png){: .align-center}

오른쪽 위에 있는 재생 버튼 (Run)을 클릭하면 컴파일과 실행을 할 수 있습니다.

![](/images/Java/2. Install IDE/Java 02-72.png){: .align-center}

아래쪽의 Console 창을 보시면 Hello World! 가 정상적으로 출력된 것을 볼 수 있습니다.