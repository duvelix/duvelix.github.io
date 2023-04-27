---
title: "Git 설치하기"
permalink: /git/install-git/
toc: true
toc_label: "Table of Contents"
toc_sticky: true
categories:
  - studies
tags:
  - git
---

Git 및 GitHub를 사용하기 위해서는 먼저 Git을 설치해주어야 합니다. Git을 설치하는 방법은 그렇게 어렵지 않지만, Windows 환경과 Mac 환경이 조금 다르기 때문에 각각 다른 환경에서 설치하는 방법을 보여드릴 예정입니다. 이번 포스트에서는 Git을 설치하고, 사용자 등록까지 하는 과정을 다루려고 합니다.

## Git 설치하기

![](/assets/images/Git/001/01.png){: .align-center}

Git을 설치하기 위해서는 [Git 공식 홈페이지](https://git-scm.com/)에 방문해야 합니다. 홈페이지에 방문하시면 바로 첫 페이지 오른쪽에 있는 모니터 화면을 보시면 Windows를 위한 Git을 <span style="color:red">다운로드</span> 버튼이 보입니다. 이 버튼을 클릭합니다. 저는 이 글을 쓰는 시점에서 2.24.1이 최신버전이었지만, 이 포스트를 보실 때 보이는 버전은 이보다 높을 수 있습니다.

![](/assets/images/Git/001/02.png){: .align-center}

버튼을 누르시면 다운로드 페이지로 넘어가게 됩니다. 여기서도 똑같이 모니터 화면에 나와있는 <span style="color:red">Download</span> 버튼을 클릭합니다. 버튼을 클릭하시면 설치 파일을 받을 수 있는데, 원하는 곳에 저장하신 다음 실행합니다.

![](/assets/images/Git/001/03.png){: .align-center}

Git 설치 과정이 시작되었습니다. 간단하지만, 의외로 단계가 꽤 많습니다. 대부분의 경우 Next 버튼만 클릭하면 되지만, 몇몇 부분은 약간 바꿔줘야 하는 부분도 있기 때문에 조심하셔야 합니다. 일단 이 화면에서는 <span style="color:red">Next</span> 버튼을 클릭합니다.

![](/assets/images/Git/001/04.png){: .align-center}

설치 경로를 지정하는 단계가 나옵니다. 딱히 건드릴 부분이 없으므로 <span style="color:red">Next</span> 버튼을 클릭합니다.

![](/assets/images/Git/001/05.png){: .align-center}

설치할 요소를 선택하는 화면입니다. 이 부분도 건드릴 것이 없으니 <span style="color:red">Next</span> 버튼을 클릭합니다.

![](/assets/images/Git/001/06.png){: .align-center}

시작 메뉴에 설치할 때 폴더 이름을 지정하는 곳입니다. 이 부분도 건드릴 것이 없으니 <span style="color:red">Next</span> 버튼을 클릭합니다.

![](/assets/images/Git/001/07.png){: .align-center}

이 부분은 건드릴 필요가 있습니다. Git의 기본 에디터로 어떤 에디터를 사용할 지 선택하는 부분인데, 기본으로 **Vim**이 설정되어 있습니다. Vim은 리눅스에서 사용하는 텍스트 에디터인데, 리눅스 환경에서 프로그래밍을 해보지 않으신 분들에게는 사용하기 조금 어려울 수도 있습니다.

선택할 수 있는 에디터가 많지만, 저는 그 중에서도 **Notepad++**를 추천드립니다. 텍스트 에디터로써의 기능은 다 있으며 프로그램이 가볍기 때문에 편집할 때 사용하기 편합니다. 게다가 무료라는 장점도 있습니다. [Notepad++ 공식 홈페이지](https://notepad-plus-plus.org/downloads/)에 방문하시면 다운로드 받을 수 있습니다. 이 외에도 다양한 텍스트 에디터를 지원하니, 목록에서 보고 원하는 편집기를 선택하신 후, <span style="color:red">Next</span> 버튼을 클릭합니다.

![](/assets/images/Git/001/08.png){: .align-center}

다음으로는 Git 환경변수를 추가할 것인지를 물어보는 화면이 나옵니다. 만약에 Git Bash에서만 작업하실 예정이라면 첫 번째 옵션을 선택하시면 되는데, 저는 콘솔창에서 Git을 사용하는 것이 불편하다고 생각되기 때문에 두 번째 옵션을 선택하였습니다. 서드 파티 프로그램을 이용하여 Git을 사용하실 예정이라면 저처럼 두 번째 옵션을 선택하시면 됩니다. 그 다음 <span style="color:red">Next</span> 버튼을 클릭합니다.

![](/assets/images/Git/001/09.png){: .align-center}

다음으로 SSH에 대한 옵션을 선택하는 부분인데, 이건 딱히 중요하지 않으니 그냥 <span style="color:red">Next</span> 버튼을 클릭합니다.

![](/assets/images/Git/001/10.png){: .align-center}

HTTPS에 대한 설정 화면이 나오는데, 이 부분도 건드릴 것이 없으니 기본 설정대로 놔두시고 <span style="color:red">Next</span> 버튼을 클릭합니다.

![](/assets/images/Git/001/11.png){: .align-center}

이 부분은 옵션을 건드리지는 않지만, 어떤 내용인지는 알아둬야 하기 때문에 간단하게 설명하고 넘어가도록 하겠습니다. 문자를 출력하다보면 줄 바꿈을 해야될 때가 오는데, 이 줄 바꿈에 대한 형식이 운영체제마다 다르다는 문제가 있습니다.

윈도우 계열 운영체제에서는 줄 바꿈을 처리할 때 **캐리지 리턴(Carriage Return ; CR)**과 **라인 피드(Line Feed ; LF)**를 같이 사용합니다. 프로그래밍으로 문자열 처리를 해보신 분이라면, 윈도우에서 아스키 코드로 줄 바꿈 처리를 할 때 \r\n 을 사용하셨을 겁니다. 여기서 캐리지 리턴이 \r이고 라인 피드가 \n을 의미합니다.

하지만 유닉스 계열 운영체제(리눅스, 맥)에서는 줄 바꿈을 라인 피드로만 사용합니다. 이 차이점으로 인해 여러 운영체제로 작업하는 경우(즉, 크로스 플랫폼으로 프로젝트를 수행하는 경우) 문제가 생길 수 있습니다.

따라서 이 화면에서는 이러한 문제를 해결하는 옵션을 제공하고 있습니다. 기본적으로 선택되어 있는 첫 번째 옵션은 윈도우에서 작업을 하는 경우 줄 바꿈이 \r\n으로 처리되므로, 실제로 Commit을 수행할 때 이를 \n으로 수정해주는 것입니다. 왜 하필 기준이 윈도우 계열이 아니라 유닉스 계열인지 궁금하실 텐데, 기본적으로 Git은 리눅스 운영체제에서 사용하는 것을 전제로 만들어진 도구이기 때문입니다. 아시는 분은 아시겠지만, 리누스 토르발즈는 리눅스를 만든 것으로도 유명합니다.

![](/assets/images/Git/001/12.png){: .align-center}

다음 부분은 Git Bash에 사용할 터미널을 어떤 것을 사용할지 물어보는 화면입니다. 두 번째 옵션을 선택하게 되면 윈도우에 기본적으로 설치되어 있는 cmd를 사용하게 되고, 위의 옵션을 선택하면 MinTTY를 사용하게 됩니다. 큰 차이는 없으나 기본 설정이 첫 번째 옵션이므로, 건드리지 않고 <span style="color:red">Next</span> 버튼을 클릭하여 넘어가도록 하겠습니다.

![](/assets/images/Git/001/13.png){: .align-center}

다음으로는 추가 옵션을 선택하는 부분인데, 이 부분도 건드릴 부분이 없으므로 <span style="color:red">Next</span> 버튼을 바로 클릭합니다.

![](/assets/images/Git/001/14.png){: .align-center}

Git에서 아직 실험중에 있는 옵션을 미리 사용해보고 싶은지 물어보는 화면인데, 저는 이 기능까지는 필요가 없기 때문에 그대로 놔두고 <span style="color:red">Install</span> 버튼을 클릭하였습니다.

![](/assets/images/Git/001/15.png){: .align-center}

기나긴 옵션 선택이 끝나고 설치를 시작합니다. 이 화면에서 잠시만 기다리시면 설치 완료 화면으로 넘어갑니다.

![](/assets/images/Git/001/16.png){: .align-center}

드디어 Git 설치가 완료되었습니다. Launch Git Bash를 체크하고 Finish를 누르셔도 되지만, 여기서는 그냥 Finish를 클릭하도록 하겠습니다. <span style="color:red">Finish</span> 버튼을 클릭하시면 Release Note가 나오는데, 굳이 읽지 않으셔도 상관 없습니다.

## Git 사용자 등록하기

Git을 설치하였으니, 본격적으로 Git을 사용하기 위해 사용자 등록을 하도록 하겠습니다. 사용자 등록은 Git에서 Commit을 할 때 누가 했는지를 나타내기 위해 필요합니다. 닉네임과 이메일 주소가 필요한데, 추후 GitHub에 가입할 것을 고려하여 그 때 사용할 닉네임과 이메일 주소를 사용하는 것이 좋습니다.

![](/assets/images/Git/001/17.png){: .align-center}

사용자 등록을 하기 위해서는 Git Bash에 들어가야 합니다. 시작 버튼을 누르거나 키보드에서 윈도우 키를 누르게 되면 시작 메뉴가 나옵니다. 가장 위에 최근에 설치한 앱을 보시면 Git 관련 프로그램들이 보이는데, 이 중 <span style="color:red">Git Bash</span>를 클릭합니다.

![](/assets/images/Git/001/18.png){: .align-center}

Git Bash를 실행하게 되면 윈도우의 cmd와 비슷한 화면이 나옵니다. 사용 방법도 크게 다르지 않습니다.

![](/assets/images/Git/001/19.png){: .align-center}

먼저 닉네임을 등록하도록 하겠습니다. 화면에 나오는 커서에 `git config --global user.name "닉네임"` 을 입력하고 <span style="color:red">Enter</span> 키를 누릅니다. 화면에 아무것도 출력되지 않지만, 정상이니 신경쓰지 않으셔도 됩니다.

![](/assets/images/Git/001/20.png){: .align-center}

다음으로 이메일을 등록하도록 하겠습니다. 화면에 나오는 커서에 `git config --global user.email "이메일 주소"` 를 입력하고 <span style="color:red">Enter</span> 키를 누릅니다. 역시 화면에 아무것도 출력되지 않습니다만, 문제가 아니므로 걱정하지 않으셔도 됩니다. 이렇게 윈도우 환경에서 Git을 설치하고 사용자 등록까지 완료하였습니다.

## Mac 환경에서 Git 설치하기

Mac에서 Git을 설치하는 것은 윈도우와 크게 다르지 않습니다만, 만약 이미 기존에 Mac을 사용해서 프로그래밍을 하셨던 분이라면 따로 설치하실 필요가 없습니다. 왜냐하면 Mac의 IDE인 Xcode를 설치할 때 Git이 같이 설치되기 때문입니다.

![](/assets/images/Git/001/21.png){: .align-center}

자신의 Mac에 Git이 설치되어 있는지를 모른다면, 터미널을 열어서 `git --version` 명령어를 입력해보시면 됩니다. 저처럼 Git 버전이 출력된다면, 바로 사용자 등록을 하시면 됩니다.

![](/assets/images/Git/001/22.png){: .align-center}

Mac에서의 사용자 등록 방법은 윈도우와 마찬가지로 `git config --global user.name "닉네임"` 과 `git config --global user.email "이메일 주소"` 를 입력하시면 됩니다.

![](/assets/images/Git/001/23.png){: .align-center}

만약 Git이 설치되어 있지 않다면 Xcode를 설치하시거나, 아니면 Windows와 똑같이 Git 공식 홈페이지에 방문하셔서 설치 파일을 다운로드 하시면 됩니다. 기본적인 과정은 크게 다르지 않습니다.

다음 포스트에서는 GitHub 가입 방법과 원격 저장소 생성 방법에 대해 포스팅하도록 하겠습니다.