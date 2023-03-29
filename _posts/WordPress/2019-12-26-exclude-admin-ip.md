---
title: "Google Analytics에서 관리자 IP 제외하기"
permalink: /wordpress/exclude-admin-ip/
classes: wide
categories:
  - studies
tags:
  - wordpress
---

지난번에 워드프레스 사이트를 구글 애널리틱스에 등록하여 방문 통계를 측정하는 방법을 알아봤습니다. 만약 워드프레스 사이트에 구글 애널리틱시를 등록하는 방법이 궁금하시다면 아래의 포스트를 참고하시기 바랍니다.

- [[WordPress] 구글 애널리틱스 등록하기](/wordpress/regist-google-analytics/)

구글 애널리틱스에 등록만 해도 기본적인 통계는 확인할 수 있지만, 관리자의 IP 주소를 필터링하지 않는다면 자신이 접속한 기록도 통계에 반영되기 때문에 정확한 통계를 알 수 없습니다. 오늘은 간단하게 구글 애널리틱스에서 자신의 IP 주소를 제외하는 방법을 알아보겠습니다.

![](/images/WordPress/13. Exclude Admin IP/WP 13-01.png){: .align-center}

먼저 [구글 애널리틱스](https://analytics.google.com/) 관리자 화면에 접속합니다. 접속하신 다음 왼쪽 아래에 있는 <span style="color:red">관리</span> 메뉴를 클릭합니다.

![](/images/WordPress/13. Exclude Admin IP/WP 13-02.png){: .align-center}

관리 화면에서 계정 부분에 있는 <span style="color:red">모든 필터</span>라는 메뉴를 클릭합니다.

![](/images/WordPress/13. Exclude Admin IP/WP 13-03.png){: .align-center}

모든 필터 화면에서 <span style="color:red">필터 추가</span> 버튼을 클릭합니다.

![](/images/WordPress/13. Exclude Admin IP/WP 13-04.png){: .align-center}

필터를 설정하는 화면이 나오는데, 이것을 입력하기 위해서는 먼저 **자신의 IP 주소**를 확인해야 합니다.

![](/images/WordPress/13. Exclude Admin IP/WP 13-05.png){: .align-center}

작업 표시줄의 시작 버튼 왼쪽에는 검색할 수 있는 부분이 있는데, 이곳에 <span style="color:red">cmd</span> 또는 <span style="color:red">명령 프롬프트</span>라고 입력하시면 윈도우의 기본 앱인 명령 프롬프트를 찾을 수 있습니다. 이것을 클릭해서 실행합니다.

![](/images/WordPress/13. Exclude Admin IP/WP 13-06.png){: .align-center}

명령 프롬프트 창이 열리면 이곳에 <span style="color:red">ipconfig</span>를 입력하고 Enter 키를 누릅니다.

![](/images/WordPress/13. Exclude Admin IP/WP 13-07.png){: .align-center}

현재 사용하고 있는 컴퓨터의 IP 주소가 어떻게 되어있는지 표시됩니다. 이것들 중에 <span style="color:red">IPv4</span> 주소 부분을 복사합니다.

만약 자신의 IP 주소가 192.168 로 시작하는 공유기 IP로 나오는 경우에는 원래의 IP 주소를 알아야만 합니다. [What is My IP?](https://www.whatismyip.com/) 에 접속하시면 자신의 진짜 IP를 확인할 수 있습니다.

![](/images/WordPress/13. Exclude Admin IP/WP 13-08.png){: .align-center}

다시 구글 애널리틱스로 돌아와서, **필터 이름**에는 원하는 이름을 입력하고 **필터 유형**은 <span style="color:red">제외</span>, **소스 또는 목적지 선택**은 <span style="color:red">해당 IP 주소에서 유입된 트래픽</span>, **표현식 선택**은 <span style="color:red">일치</span>를 선택합니다. 이렇게 선택하면 바로 아래에 IP 주소를 입력할 수 있는 공간이 나오는데, 이곳에 방금 확인한 IP 주소를 입력합니다.

다음으로 보기에 필터 적용에서는 **전체 웹 사이트 데이터**를 선택하고 <span style="color:red">추가</span> 버튼을 클릭합니다. 전체 웹사이트 데이터 항목이 오른쪽으로 넘어가야 합니다. 여기까지 설정을 완료한 후, <span style="color:red">저장</span> 버튼을 클릭합니다.

![](/images/WordPress/13. Exclude Admin IP/WP 13-09.png){: .align-center}

방금 등록한 필터가 추가된 것을 확인할 수 있습니다. 이제 해당 IP에서 접속한 기록은 통계에 추가되지 않습니다. 만약에 관리자 IP 주소가 여러 개인 경우, 같은 방법으로 여러번 등록하시면 됩니다.