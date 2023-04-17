---
title: "Commit과 Push 하기"
permalink: /git/commit-and-push/
classes: wide
toc: true
toc_label: "Table of Contents"
toc_sticky: true
categories:
  - studies
tags:
  - git
---

지난 시간에 GitHub에 가입하고, 원격 저장소를 만드는 것까지 다루었습니다. 오늘은 로컬 저장소에서 Commit을 하는 방법과 로컬 저장소의 내용을 원격 저장소에 옮기는 Push 방법을 소개하도록 하겠습니다.

## Commit

<span style="color:red">커밋(Commit)</span>은 버전 관리 시스템에서 변경 사항을 반영 시키는 것을 뜻합니다. 예를 들어, 자신이 현재 1.0 버전을 작업하고 있는데, 아무리 많은 부분을 수정하였더라도 커밋을 하지 않으면 변경 사항이 기록되지 않습니다. 커밋을 하지 않는다고 로컬 시스템에 저장한 내용까지 사라지는 것은 아니지만, 버전 관리 시스템에서는 변경 사항을 기록한다는 점이 핵심이므로, 프로젝트를 수정하였다면 반드시 커밋을 해주시는 것이 좋습니다.

![](https://github.com/JoonsuRyu/images/blob/master/Git/003/01.png?raw=true){: .align-center}

먼저 로컬 시스템에서 Git을 사용할 장소를 만들어 보겠습니다. 굳이 저처럼 따로 전용 공간을 만들 필요는 없지만, 경로를 이곳저곳 옮겨다니는 것이 상당히 귀찮기 때문에 하나의 폴더에 몰아넣는다면 조금 더 편리하게 사용할 수 있습니다. 어떤 장소에 만들어도 상관없지만, C 드라이브 바로 아래에 폴더를 만드는 것이 접근하기 편합니다. 저는 **test**라는 이름의 폴더를 하나 만들었습니다.

![](https://github.com/JoonsuRyu/images/blob/master/Git/003/02.png?raw=true){: .align-center}

커밋을 하려면 먼저 커밋을 할 파일이 필요한데, 지금은 테스트용 커밋을 할 것이기 때문에 저는 기존에 Java 관련 포스트를 작성할 때 만들었던 **HelloWorld.java** 파일을 사용하도록 하겠습니다. 이 파일의 내용이 궁금하시다면 아래의 포스트를 참고하시기 바랍니다.

- [[JAVA] 2. IDE 설치하기](/java/install-ide/)

![](https://github.com/JoonsuRyu/images/blob/master/Git/003/03.png?raw=true){: .align-center}

test 폴더에 커밋을 할 파일을 옮겨놓고, 빈 공간에 마우스 오른쪽 버튼을 클릭하면 위의 화면처럼 서브 메뉴가 펼쳐집니다. 이 중 <span style="color:red">Git Bash Here</span>을 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/Git/003/04.png?raw=true){: .align-center}

Git Bash Here 메뉴를 클릭하면 명령 프롬프트와 비슷한 화면이 나옵니다. 이 화면에서 바로 `git init`을 입력하고 엔터를 누릅니다. 위처럼 Initialized ~~ 라는 메시지가 출력되면 정상적으로 처리된 것입니다.

![](https://github.com/JoonsuRyu/images/blob/master/Git/003/05.png?raw=true){: .align-center}

다음으로 Git에 사용할 파일을 추가해야 합니다. 방금 옮긴 HelloWorld.java를 Git에 사용할 것이기 때문에 `git add HelloWorld.java` 라고 입력합니다. 다른 파일을 사용하시는 분들은 HelloWorld.java 대신에 추가할 파일 이름을 작성하시면 됩니다.

![](https://github.com/JoonsuRyu/images/blob/master/Git/003/06.png?raw=true){: .align-center}

이제 커밋을 하도록 하겠습니다. 커밋은 간단하게 `git commit` 이라고 명령어를 입력하시면 됩니다. 저는 지금 파일 한개만 추가하고 커밋을 했지만, 여러 개의 파일을 동시에 커밋할 수 있기 때문에 다수의 파일을 커밋한다고 해도 하나하나 따로따로 커밋을 할 필요는 없습니다.

## Commit 메시지 작성하기

![](https://github.com/JoonsuRyu/images/blob/master/Git/003/07.png?raw=true){: .align-center}

커밋을 시작하면 위의 스크린샷처럼 화면이 바뀝니다. 이 곳은 커밋 메시지를 입력하는 부분입니다. Git을 설치하셨을 때 Vim 편집기를 선택하셨다면 위와 같이 Vim 편집기가 나옵니다. 윈도우에 익숙하신 분들은 이런 환경이 익숙하지 않으실 수도 있습니다. (만약 그런 경우 Git 설치 포스트에서도 언급했지만 Notepad++ 등을 사용하시면 됩니다) Vim 편집기에서 편집을 시작할 때는 키보드의 `i`를 입력해야 합니다.

![](https://github.com/JoonsuRyu/images/blob/master/Git/003/08.png?raw=true){: .align-center}

커밋 메시지에는 사실 아무거나 입력해도 상관은 없지만, 하나의 프로젝트를 다수의 개발자가 참여하는 경우가 많기 때문에 작성 규칙이 있습니다. 혼자 프로젝트를 하는 경우라면 자신만 알아보면 되지만, 커밋 메시지를 입력하는 것도 습관이 들어야 하기 때문에 가급적이면 혼자만 프로젝트를 수행하더라도 커밋 메시지 규칙을 따르는 것이 좋습니다. 커밋 메시지 규칙은 [이 링크](https://chris.beams.io/posts/git-commit/)를 참고하시기 바랍니다.

저도 커밋 메시지 규칙에 따라 간단하게 작성해 보았습니다.

![](https://github.com/JoonsuRyu/images/blob/master/Git/003/09.png?raw=true){: .align-center}

작성을 마친 후에는 저장한 다음 이전의 화면으로 돌아가야 합니다. vim 에서 명령을 내릴 때는 먼저 키보드의 `ESC` 키를 누르고, `wq` 를 입력한 다음 `Enter` 키를 누르시면 됩니다. `wq` 는 저장 후 종료라는 명령어입니다. 저장만 하실 때는 `w` 를 입력하시면 되고, 변경사항을 저장하지 않고 강제로 종료하려면 `q!` 를 입력하시면 됩니다.

![](https://github.com/JoonsuRyu/images/blob/master/Git/003/10.png?raw=true){: .align-center}

커밋 메시지를 작성하고 나오면 커밋이 완료되었다는 메시지가 나옵니다.

사실 이런 귀찮은 과정을 생략하고 그냥 `git commit -m "커밋 메시지"` 이렇게 한 줄로 끝내는 방법도 있습니다.

## Push

푸쉬(Push)는 로컬 저장소의 작업을 원격 저장소에 업로드하는 것을 말합니다. 방금 커밋을 완료했지만, 푸쉬를 하지 않으면 자신의 로컬 저장소에서만 수정내역이 저장됩니다. 여러 명이 하나의 프로젝트를 작업할 때는 반드시 원격 저장소에 저장해야 하고, 혼자 프로젝트를 수행한다고 하더라도 결과물을 타인에게 보여주기 위해서는 원격 저장소에 저장해야합니다.

![](https://github.com/JoonsuRyu/images/blob/master/Git/003/11.png?raw=true){: .align-center}

지난 포스트에서 GitHub에 가입하고 원격 저장소까지 만들었기 때문에, 그 과정은 이번 포스트에서 생략하도록 하겠습니다. 혹시라도 원격 저장소를 생성하는 과정이 궁금하시다면 아래의 포스트를 참고하시기 바랍니다.

- [[Git] 2. GitHub 가입하기](/git/join-github/)

만들었던 원격 저장소에 가보시면, **Quick setup** 부분에 주소가 하나 보입니다. 이 주소가 업로드를 위한 경로이므로 복사해둡시다.

![](https://github.com/JoonsuRyu/images/blob/master/Git/003/12.png?raw=true){: .align-center}

아까 커밋을 할 때처럼 Git Bash를 엽니다. 그리고 `git remote add origin (복사한 주소)` 를 입력하고 `Enter` 키를 입력합니다. 아무런 메시지가 나오지 않아도 정상입니다.

![](https://github.com/JoonsuRyu/images/blob/master/Git/003/13.png?raw=true){: .align-center}

다음으론 푸쉬 명령어를 입력해야 합니다. `git push origin --all` 를 작성하고 `Enter` 키를 누릅니다. 뒤의 origin --all의 의미는 origin 저장소에 모든 로컬 <span style="color:red">브랜치(Branch)</span>를 푸쉬한다는 뜻입니다. 브랜치란 저장소에 있던 내용을 동일하게 복사한 저장소를 일컫습니다. 브랜치의 내용을 수정해도 원래 저장소의 내용이 바뀌지 않기 때문에 뭔가 실험을 하고 싶다거나 할 때 주로 사용하게 됩니다. 추후 브랜치에 대해서도 따로 포스트를 작성할 예정이기 때문에 일단은 이렇구나 하고만 넘어가시면 됩니다.

![](https://github.com/JoonsuRyu/images/blob/master/Git/003/14.png?raw=true){: .align-center}

푸쉬를 하게 되면 GitHub에 로그인하라는 새로운 창이 나옵니다. 푸쉬를 GitHub 저장소에 주인임을 검증해야 하기 때문에 그 과정이라고 생각하시면 됩니다.

![](https://github.com/JoonsuRyu/images/blob/master/Git/003/15.png?raw=true){: .align-center}

로그인을 하시면 바로 푸쉬가 시작되고, 잠시만 기다리시면 커밋한 결과가 원격 저장소에 모두 업로드됩니다.

![](https://github.com/JoonsuRyu/images/blob/master/Git/003/16.png?raw=true){: .align-center}

정상적으로 업로드 되었는지 확인하려면 GitHub의 원격 저장소를 방문하시면 됩니다. 보시면 커밋했던 HelloWorld.java가 업로드되었고, 커밋 메시지도 제가 입력한 그대로 나와있음을 알 수 있습니다.

![](https://github.com/JoonsuRyu/images/blob/master/Git/003/17.png?raw=true){: .align-center}

HelloWorld.java 파일을 클릭하면 파일의 내용까지 볼 수 있습니다.