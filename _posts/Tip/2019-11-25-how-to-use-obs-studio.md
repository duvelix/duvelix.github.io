---
title: "OBS Studio로 녹화하기"
permalink: /tip/how-to-use-obs-studio/
classes: wide
toc: true
toc_label: "Table of Contents"
toc_sticky: true
categories:
  - interests
tags:
  - tip
---

게임을 할 때나, 컴퓨터로 복잡한 작업을 할 때는 기록을 위해 녹화를 하고 싶은 경우가 있습니다. 컴퓨터 화면을 녹화할 수 있는 프로그램은 Fraps, 반디캠, 오캠 등 여러 종류가 있지만, 무료 버전에서는 워터마크가 강제로 박히거나, 기능에 제한이 있습니다. 오늘 소개할 OBS Studio는 오픈 소스 프로그램이기 때문에 무료로 아무 제약 없이 사용이 가능합니다. OBS Studio는 개인 방송용 프로그램으로도 유명합니다.

특히 최근 비대면 수업이 늘어남에 따라, 비대면 수업의 시험 화면을 녹화하기 위한 용도로도 많이 사용하고 있습니다. 이번 포스트에서는 OBS Studio를 사용하여 화면을 녹화하는 방법을 소개하겠습니다.

## OBS Studio 설치하기

![](/images/Tip/003/01.png){: .align-center}

OBS Studio는 어떤 환경에서나 무료로 사용이 가능합니다. [OBS Studio 공식 홈페이지](https://obsproject.com/ko)에 방문하시면, 사용하고 있는 운영체제에 맞는 설치 파일을 받을 수 있습니다. 저는 지금 윈도우 환경에서 글을 쓰고 있기 때문에 윈도우를 기준으로 설명드리겠습니다. <span style="color:red">Windows</span> 버튼을 클릭해서 설치 파일을 받습니다.

![](/images/Tip/003/02.png){: .align-center}

설치 파일은 위와 비슷한 이름을 가지고 있을 것입니다. 더블 클릭하여 실행합니다.

![](/images/Tip/003/03.png){: .align-center}

프로그램을 설치할 때 자주 보는 설치 마법사가 실행됩니다. <span style="color:red">Next</span> 버튼을 클릭합니다.

![](/images/Tip/003/04.png){: .align-center}

사용 약관이 나오는데, 딱히 신경쓸 부분은 없으므로 <span style="color:red">I Agree</span> 버튼을 클릭합니다.

![](/images/Tip/003/05.png){: .align-center}

설치 경로를 정하시고 <span style="color:red">Next</span> 버튼을 클릭합니다. 저는 기본 설치 경로를 선택했습니다.

![](/images/Tip/003/06.png){: .align-center}

다음으로 추가 플러그인을 설치할지 물어보는 화면입니다. 만약에 인텔의 리얼센스 카메라를 보유하고 있다면 플러그인을 선택하시면 되고, 그 외에는 설치할 필요가 없습니다. <span style="color:red">Install</span> 버튼을 클릭합니다.

![](/images/Tip/003/07.png){: .align-center}

잠시 기다리시면 설치가 완료됩니다.

![](/images/Tip/003/08.png){: .align-center}

설치가 완료되었습니다. <span style="color:red">Finish</span> 버튼을 클릭해 OBS Studio를 실행합니다.

## OBS Studio 설정하기

![](/images/Tip/003/09.png){: .align-center}

OBS Studio를 처음 실행하면 위의 스크린샷처럼 구성 마법사를 실행하겠냐는 창이 나옵니다. 구성 마법사로 설정하면 간편하기 때문에, 저는 <span style="color:red">예</span>를 클릭하겠습니다.

![](/images/Tip/003/10.png){: .align-center}

OBS Studio를 어떤 목적으로 사용할 것인지를 물어봅니다. 저는 녹화만 할 생각이기 때문에 녹화 최적화를 선택했습니다. 선택을 완료하신 후, <span style="color:red">다음</span>을 클릭합니다.

![](/images/Tip/003/11.png){: .align-center}

기본 화면의 해상도를 선택하셔야 합니다. 저는 4K 모니터를 사용하고 있기 때문에 해상도를 3840 x 2160으로 선택하였고, 60프레임을 선택하였습니다. 자신의 시스템에 맞는 해상도와 프레임을 선택하신 후, <span style="color:red">다음</span>을 클릭합니다.

![](/images/Tip/003/12.png){: .align-center}

구성 마법사로 최적의 설정을 측정해서 표시해줍니다. 이 설정은 추후에 바꿀 수 있으니 원하는대로 설정되지 않았다고 다시 구성 마법사를 시작할 필요는 없습니다. <span style="color:red">설정 적용</span> 버튼을 누르시면 화면에 표시된대로 설정이 완료됩니다.

![](/images/Tip/003/13.png){: .align-center}

출력 설정은 완료되었지만, 어떤 화면을 출력할 것이지는 따로 설정해주어야 합니다. 소스 목록이 비어있기 때문에 현재 검은 화면만 출력되고 있습니다. 아래의 <span style="color:red">+</span> 버튼을 클릭합니다.

![](/images/Tip/003/14.png){: .align-center}

\+ 버튼을 누르시면 위처럼 서브 메뉴가 펼쳐집니다. 어떤 화면을 출력할 것인지 설정해야하는데, 저는 지금 모니터에 나오는 화면을 그대로 출력해보겠습니다. <span style="color:red">디스플레이 캡쳐</span>를 클릭합니다.

![](/images/Tip/003/15.png){: .align-center}

디스플레이 캡쳐를 누르시면 소스 만들기/선택이 나오는데 여기에서는 이름만을 설정해주면 됩니다. 아무 이름이나 원하는대로 적으시고, <span style="color:red">확인</span> 버튼을 클릭합니다.

![](/images/Tip/003/16.png){: .align-center}

다음으로는 어떤 디스플레이를 출력할 것인지 선택하는 화면입니다. 모니터를 여러 개 사용하시는 분들은 출력할 모니터를 선택하시면 됩니다. 저는 모니터가 1개밖에 없기 때문에 따로 선택할 필요가 없습니다. 녹화나 방송을 하실 때 마우스 커서를 출력하고 싶지 않으시다면 커서 캡쳐를 해제해주시면 됩니다. 선택을 마치셨으면 <span style="color:red">확인</span> 버튼을 클릭합니다.

![](/images/Tip/003/17.png){: .align-center}

위 스크린샷처럼 검은 화면이 있던 자리에 바탕화면이 출력된다면 성공입니다. 이제 녹화하기 위한 설정은 모두 끝났지만, 녹화할 때 OBS Studio 창을 띄우고 싶지 않을 수도 있습니다. 이럴 때는 녹화 시작/녹화 종료에 단축키를 설정하시는 것이 좋습니다. <span style="color:red">설정</span> 버튼을 클릭합니다.

![](/images/Tip/003/18.png){: .align-center}

설정 화면에서 단축키 탭으로 가시면 단축키를 지정할 수 있습니다. 다른 작업을 할 때 실수로 누르지 않도록, 잘 사용하지 않는 키로 설정하시는 것이 좋습니다. 저는 **Home**으로 녹화를 시작하고 **End**로 녹화를 종료하도록 설정하였습니다.