---
title: "JDK 설치하기"
permalink: /java/install-jdk/
toc: true
toc_label: "Table of Contents"
toc_sticky: true
categories:
  - studies
tags:
  - java
---

Java 언어를 사용하기 위해서는 가장 먼저 <span style="color:red">JDK (Java Development Kit)</span>를 설치해야 합니다. 쉽게 말하자면 컴퓨터에서 Java 언어를 컴파일하기 위한 도구입니다. Java 언어는 썬 마이크로시스템즈가 개발했지만, 현재는 오라클에서 인수했기 때문에 Java 관련 도구들은 오라클 공식 홈페이지에서 받아야 합니다.

## Oracle JDK 설치하기

![](https://github.com/JoonsuRyu/images/blob/master/Java/001/01.png?raw=true){: .align-center}

먼저 [Oracle 홈페이지의 Download 페이지](https://www.oracle.com/downloads/)로 접속합니다. 아래의 **Developer Downloads** 항목을 보시면 여러 카테고리가 나와있는데, 이 중 <span style="color:red">Java</span>를 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/Java/001/02.png?raw=true){: .align-center}

바로 Java와 관련된 도구들을 다운받을 수 있는 화면으로 스크롤이 쭉 내려갑니다. 이 중 <span style="color:red">Java (JDK) for Developers</span>를 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/Java/001/03.png?raw=true){: .align-center}

페이지가 넘어가면서 위와 같은 화면이 보입니다. Oracle JDK 아래에 있는 <span style="color:red">DOWNLOAD</span> 버튼을 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/Java/001/04.png?raw=true){: .align-center}

JDK를 사용하기 위해서는 라이센스에 동의해야 합니다. 주된 내용은 상업적인 사용을 할 때는 돈을 내야 한다는 것인데, 학생이라면 신경쓰지 않으셔도 됩니다. <span style="color:red">Accept License Agreement</span>를 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/Java/001/05.png?raw=true){: .align-center}

약관에 동의했으니 JDK를 다운받을 수 있습니다. OS에 따라 여러가지 버전이 존재하는데, 저는 윈도우에서 사용하고 있기 때문에 Windows에 있는 첫번째 항목을 클릭하였습니다. 보시는 시점에 따라 버전이 다를 수도 있기 때문에 13.0.1은 크게 신경 안쓰셔도 됩니다.

![](https://github.com/JoonsuRyu/images/blob/master/Java/001/06.png?raw=true){: .align-center}

클릭하시게 되면 설치 파일 하나를 다운 받게 되고, 아무데나 저장한 다음 바로 실행합시다. 위와 같은 JDK 설치 마법사가 실행되면 <span style="color:red">Next</span> 버튼을 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/Java/001/07.png?raw=true){: .align-center}

JDK 설치 경로를 정하는 화면이 나오는데, 딱히 변경하실 필요는 없습니다. <span style="color:red">Next</span> 버튼을 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/Java/001/08.png?raw=true){: .align-center}

위와 같은 화면이 나오고 잠시 기다리시면 설치가 완료됩니다.

![](https://github.com/JoonsuRyu/images/blob/master/Java/001/09.png?raw=true){: .align-center}

<span style="color:red">Close</span>를 클릭하시면 JDK 설치가 완료됩니다. 하지만 Java 언어를 사용하기 위해서는 추가로 설정해야할 부분이 있습니다.

## Java 환경 변수 설정하기

![](https://github.com/JoonsuRyu/images/blob/master/Java/001/10.png?raw=true){: .align-center}

Java 환경변수를 설정하기 위해서 먼저 탐색기를 여시고, 왼쪽에 보이는 <span style="color:red">내 PC</span> 항목을 오른쪽 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/Java/001/11.png?raw=true){: .align-center}

오른쪽 클릭을 하시게 되면 위와 같은 메뉴가 펼쳐지는데, 이 중 <span style="color:red">속성</span>을 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/Java/001/12.png?raw=true){: .align-center}

위와 같이 시스템 창이 나옵니다. 왼쪽의 <span style="color:red">고급 시스템 설정</span>을 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/Java/001/13.png?raw=true){: .align-center}

시스템 속성 창이 나오는데, 아래에 있는 <span style="color:red">환경 변수</span> 버튼을 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/Java/001/14.png?raw=true){: .align-center}

환경 변수 창으로 가시면 사용자 변수와 시스템 변수를 볼 수 있습니다. 저희는 이 중 시스템 변수를 건드려야 합니다. 시스템 변수 항목의 <span style="color:red">새로 만들기</span> 버튼을 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/Java/001/15.png?raw=true){: .align-center}

위와 같이 새 시스템 변수를 만들 수 있는 창이 나오는데, 변수 이름에는 **JAVA_HOME** 이라고 입력하시고, 변수 값에는 JDK의 설치 경로를 입력합니다. 만약에 JDK를 설치했을 때 경로를 건드리지 않으셨다면, 저와 동일하게 작성하시면 됩니다. 작성을 다 하셨으면 <span style="color:red">확인</span> 버튼을 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/Java/001/16.png?raw=true){: .align-center}

같은 방법으로 시스템 변수 하나를 더 추가합니다. 이번에는 변수 이름에 **CLASSPATH** 라고 적으시고 변수 값에는 **%JAVA_HOME%lib** 이라고 작성하신 다음, <span style="color:red">확인</span> 버튼을 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/Java/001/17.png?raw=true){: .align-center}

다음으로는 시스템 변수의 항목 중 Path를 수정해야 합니다. 스크롤을 아래로 내리시다 보면 **Path** 항목이 보이는데, 이것을 선택하고 <span style="color:red">편집</span> 버튼을 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/Java/001/18.png?raw=true){: .align-center}

환경 변수 편집 화면 창이 나오면, 오른쪽 맨 위에 있는 <span style="color:red">새로 만들기</span> 버튼을 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/Java/001/19.png?raw=true){: .align-center}

새로 만들기 버튼을 클릭하면 자동으로 스크롤이 맨 아래로 내려가고, 뭔가를 입력할 수 있는 칸이 나옵니다. 이곳에 **%JAVA_HOME%\bin** 을 입력한 후, <span style="color:red">확인</span> 버튼을 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/Java/001/20.png?raw=true){: .align-center}

이제 설정이 모두 끝났으니 <span style="color:red">확인</span> 버튼을 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/Java/001/21.png?raw=true){: .align-center}

또 다시 <span style="color:red">확인</span> 버튼을 클릭합니다.

## 설치 확인

![](https://github.com/JoonsuRyu/images/blob/master/Java/001/22.png?raw=true){: .align-center}

이제 Java가 정상적으로 설치되고 환경변수가 올바르게 설정되었는지 확인해보겠습니다. 작업 표시줄의 시작 버튼 왼쪽에는 검색할 수 있는 부분이 있는데, 이곳에 **cmd** 또는 **명령 프롬프트**라고 입력하시면 윈도우의 기본 앱인 <span style="color:red">명령 프롬프트</span>를 찾을 수 있습니다. 이것을 클릭해서 실행합니다.

![](https://github.com/JoonsuRyu/images/blob/master/Java/001/23.png?raw=true){: .align-center}

명령 프롬프트 창이 나오면 <span style="color:red">javac</span>을 입력하고 엔터를 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/Java/001/24.png?raw=true){: .align-center}

위와 같은 화면이 나온다면 정상적으로 설치가 완료된 것입니다. 혹시라도 이와 다른 화면이 나온다면 설치에 실패한 것이니, 다시 처음부터 차근차근 살펴보시고 어느 부분에서 틀렸는지를 확인해보시기 바랍니다.