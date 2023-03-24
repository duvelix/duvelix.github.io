---
title: "Branch 만들기"
permalink: /git/create-branch/
classes: wide
toc: false
categories:
  - studies
tags:
  - git
---

프로젝트를 하다 보면 프로그램에서 새로운 기능을 추가하거나 실험을 해보고 싶을 때가 있습니다. 이 때는 원본 프로그램을 직접 수정하기 보다 원본 프로그램을 복사하여 먼저 테스트해보고, 괜찮다고 생각되면 원래 프로그램에 추가하는 것이 훨씬 안전한 방법입니다. 만약에 Git 같은 버전 관리 시스템을 쓰지 않는다면 프로젝트 폴더를 통째로 복사해서 이런 과정을 거쳐야 하지만, Git에서는 이미 이를 간단하게 만들어주는 기능을 제공합니다.

Git에서 제공하는 이러한 기능을 <span style="color:red">브랜치(Branch)</span>라고 합니다. 브랜치의 사전적인 의미는 (나뭇)가지입니다. 이를 기반으로 Git에서 브랜치의 의미를 해석해 보면, 같은 뿌리에서 출발한 서로 다른 독립적인 저장소라는 뜻이 됩니다.

## Branch 생성하기

![](/images/Git/4. Create Branch/Git 04-01.png){: .align-center}

지난 시간에 Git을 사용했던 경로에서 Git Bash를 실행합니다. `git branch` 명령어를 입력하시면 현재 어떤 브랜치가 존재하는지 알 수 있습니다. 기본적으로 아무런 브랜치를 만들지 않았다면 위 그림처럼 master 브랜치 하나만 존재합니다.

![](/images/Git/4. Create Branch/Git 04-02.png){: .align-center}

새로운 브랜치를 하나 만들어보겠습니다. `git branch` 명령어 뒤에 새로 만들 브랜치 이름을 입력하면 그 이름을 가지는 브랜치가 생성됩니다. 저는 **another**라는 이름을 가지는 브랜치를 만들어보겠습니다.

![](/images/Git/4. Create Branch/Git 04-03.png){: .align-center}

another 브랜치를 만들고, 브랜치가 제대로 생성되었는지 확인하려면 처음 입력했던 `git branch` 명령어를 입력하면 됩니다. 이전에는 master 브랜치 하나만 나왔지만, another 브랜치를 생성한 이후에는 master 브랜치와 another 브랜치 2개가 보이는 것을 알 수 있습니다.

![](/images/Git/4. Create Branch/Git 04-04.png){: .align-center}

another 브랜치에서 작업하기 위해서는 작업 환경을 바꾸어주어야 합니다. 명령어 맨 뒤를 보시면 (master) 라고 나오는데, 이것은 현재 master 브랜치에서 작업하고 있다는 뜻입니다. 다른 브랜치 환경으로 변경하는 명령어는 git checkout 브랜치이름 입니다. 예를 들어, another 브랜치로 작업 환경을 변경하는 명령어는 `git checkout another` 가 됩니다.

명령어를 입력하고 Enter 키를 누르면 Switched to branch 'another' 라는 메시지가 나오며, 맨 뒤에 (master) 라고 나와 있던 부분이 **(another)**로 변경된 것을 볼 수 있습니다. 이런 식으로 나오면 정상적으로 브랜치 작업 환경이 변경된 것입니다.

![](/images/Git/4. Create Branch/Git 04-05.png){: .align-center}

현재 another 브랜치에서 소스 코드를 수정해 보겠습니다. 지난번에 커밋과 푸시를 했던 HelloWorld.java 파일을 열어서 한줄을 추가해보겠습니다. 이것은 This is only visible on the 'another' branch. 라는 문장을 출력하는 코드입니다.

![](/images/Git/4. Create Branch/Git 04-06.png){: .align-center}

HelloWorld.java 파일을 수정하고 저장한 다음, 커밋을 해주도록 하겠습니다. 커밋을 하는 방법은 지난 포스트에서 다루었기 때문에 따로 설명하지는 않겠습니다. 커밋에 대해 더 정보를 알고 싶다면 아래의 포스트를 참고하시기 바랍니다.

- [[Git] 3. Commit과 Push 하기](/git/commit-and-push/)

![](/images/Git/4. Create Branch/Git 04-07.png){: .align-center}

커밋 메시지는 위와 같이 간단하게 another 브랜치에서 수정한 것임을 나타내도록 작성하였습니다.

![](/images/Git/4. Create Branch/Git 04-08.png){: .align-center}

커밋 메시지 입력을 마치고 나가면 정상적으로 커밋이 되었다는 메시지가 출력됩니다.

![](/images/Git/4. Create Branch/Git 04-09.png){: .align-center}

GitHub에서 수정사항을 확인할 수 있도록 푸시까지 하겠습니다.

![](/images/Git/4. Create Branch/Git 04-10.png){: .align-center}

GitHub에 업로드 할 때 another 브랜치가 현재 업로드 되지 않았기 때문에 새로운 브랜치를 업로드했다는 메시지도 같이 출력됩니다.

![](/images/Git/4. Create Branch/Git 04-11.png){: .align-center}

GitHub 원격 저장소를 방문해보면 최근 another 브랜치가 푸시되었다는 메시지가 나옵니다.

![](/images/Git/4. Create Branch/Git 04-12.png){: .align-center}

하지만 저장소를 확인해보면 소스코드가 바뀌지 않았습니다. 당연한 것이, 제가 수정한 것은 another 브랜치이고, 현재 보이는 화면은 master 브랜치이기 때문입니다. 빨간색 박스를 보시면 현재 보고 있는 브랜치가 master 브랜치라는 것을 알 수 있습니다. 빨간색 박스를 클릭합니다.

![](/images/Git/4. Create Branch/Git 04-13.png){: .align-center}

빨간색 박스를 클릭하면 현재 저장소에 푸시된 브랜치의 목록이 나옵니다. 현재는 기본적으로 있던 master 브랜치와 방금 만든 another 브랜치가 보입니다. another 브랜치를 클릭합니다.

![](/images/Git/4. Create Branch/Git 04-14.png){: .align-center}

another 브랜치 시점으로 넘어가며 방금 수정한 소스코드가 보이는 것을 확인할 수 있습니다.