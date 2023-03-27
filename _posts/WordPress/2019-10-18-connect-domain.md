---
title: "도메인과 웹 호스팅 서버 연결하기"
permalink: /wordpress/connect-domain/
classes: wide
toc: true
toc_label: "Table of Contents"
toc_sticky: true
categories:
  - studies
tags:
  - wordpress
---

지금까지 도메인과 웹 호스팅을 구매하였지만, 각각 다른 회사에서 구매하였기 때문에 도메인과 웹 호스팅을 연결해주는 작업이 필요합니다. 도메인과 웹 호스팅을 같이 구매하면 연결을 자동으로 해주는 곳도 있으나, 보통은 도메인은 가장 싼 곳, 웹 호스팅은 가장 안정적인 곳을 많이 사용합니다.

저는 **네임칩(NameCheap)**에서 도메인을 구입했기 때문에 네임칩을 기준으로 설명을 드리지만, 다른 곳에서 구매하셨더라도 방법 자체는 크게 다르지 않기 때문에 참고하시면 도움이 될 것 같습니다.

## NameCheap에서 도메인 관리하기

![](/images/WordPress/3. Connect Domain/WP 03-01.png){: .align-center}

먼저 [네임칩 홈페이지](https://www.namecheap.com/)로 접속합니다. 도메인을 관리하기 위해선 로그인을 해야 하니, 왼쪽 상단에 있는 <span style="color:red">SIGN IN</span>을 클릭하시고 ID와 비밀번호를 입력해 로그인합니다.

![](/images/WordPress/3. Connect Domain/WP 03-02.png){: .align-center}

로그인을 하면 바로 소유하고 있는 도메인을 볼 수 있는 화면이 나옵니다. 원하는 도메인을 선택해 <span style="color:red">MANAGE</span> 버튼을 클릭합니다. 저는 여기서 **keepmind.net** 도메인을 관리하겠습니다.

![](/images/WordPress/3. Connect Domain/WP 03-03.png){: .align-center}

도메인 관리창을 보시면 여러 옵션들이 나오는데, 가장 중요한 곳은 **NAME SERVERS** 부분입니다. 이 부분은 도메인이 어느 곳을 가리키는지를 나타내는 부분이기 때문에 우리는 이곳을 수정해야 합니다. 현재는 **Namecheap BasicDNS**로 설정된 것을 보실 수 있습니다.

## SiteGround에서 네임 서버 확인하기

![](/images/WordPress/3. Connect Domain/WP 03-04.png){: .align-center}

네임서버를 확인하기 위해서는 웹 호스팅을 구매한 곳을 방문해야 합니다. 저는 **사이트그라운드(SiteGround)**에서 호스팅 서비스를 받고 있었기 때문에 그곳을 기준으로 설명드리겠습니다. [사이트그라운드 홈페이지](https://siteground.com/)에서 로그인을 한 후, 상단 메뉴에서 <span style="color:red">Websites</span>를 클릭합니다.

![](/images/WordPress/3. Connect Domain/WP 03-05.png){: .align-center}

이 화면은 지난 시간의 마지막 부분에서도 볼 수 있었던 부분입니다. 여기서 <span style="color:red">SITE TOOLS</span> 버튼을 클릭합니다.

![](/images/WordPress/3. Connect Domain/WP 03-06.png){: .align-center}

그럼 바로 나오는 **DASHBOARD**에서 네임서버를 확인할 수 있습니다. 네임서버는 보통 2개가 제공됩니다. **ns1.~\~**, **ns2.~\~** 와 같은 형식으로 표현된다면 올바르게 찾은 겁니다. 네임서버 주소를 메모장 같은 곳에 잘 복사해 둡시다.

## NameCheap에서 네임서버 변경하기

![](/images/WordPress/3. Connect Domain/WP 03-07.png){: .align-center}

다시 네임칩의 도메인 관리창으로 돌아와서, **NAME SERVERS**의 **Namecheap BasicDNS**를 <span style="color:red">Custom DNS</span>로 바꾸어 줍니다. 그 후, 아래의 입력칸에 사이트그라운드에서 봤던 네임서버를 똑같이 입력해주고, 오른쪽의 초록색 <span style="color:red">✓</span> 버튼을 누릅니다.

![](/images/WordPress/3. Connect Domain/WP 03-08.png){: .align-center}

✓ 버튼까지 누르고 나면 이제 도메인을 호스팅 서버에 연결하는 작업이 끝난 겁니다. 다만 이렇게 설정했다고 바로 적용되는 것은 아니고, 도메인 연결을 위한 작업이 끝날때까지 기다리셔야 합니다. 최대 48시간까지 걸릴 수 있으니, 넉넉하게 2일 정도는 다른 작업을 하시면서 기다리시면 됩니다.

## NameCheap에서 도메인 리디렉션 설정하기

제 도메인 리스트를 보시면 아시겠지만, keepmind.net 이외에도 몇 개의 도메인을 더 구입하였습니다. 원래 블로그에 연결하기 위한 목적으로 구입한 것은 아니지만, 당분간 연결할 곳이 딱히 없다보니 keepmind.net에 연결해놓으려고 합니다.

이 경우에는 이전의 방법과는 조금 다릅니다. keepmind.net은 사이트 자체의 주소지만, 이 외의 주소는 리디렉션으로 등록할 것이기 때문입니다. 리디렉션을 할 때는 네임서버를 호스팅 서버로 하지 않아도 된다는 차이점이 있습니다.

![](/images/WordPress/3. Connect Domain/WP 03-09.png){: .align-center}

이번에는 keepmind.me 주소를 keepmind.net에 연결해 보겠습니다. 이전과 똑같이 도메인 관리 페이지로 넘어가서, NAME SERVERS는 건드리지 않으셔야 합니다. 그 바로 아래에 가시면 **REDIRECT DOMAIN** 이라는 부분이 있는데, www를 붙인 도메인과 붙이지 않은 도메인 2개를 입력하시고 (여기서는 keepmind.me) 그 주소의 목적지를 리디렉션으로 넘길 주소를 (여기서는 www.keepmind.net) 적어주시면 됩니다.

입력을 완료하신 후, 상단의 <span style="color:red">Advanced DNS</span> 버튼을 클릭하세요.

![](/images/WordPress/3. Connect Domain/WP 03-10.png){: .align-center}

가운데를 보시면 **Type**에 **CNAME Record** 라는 부분이 보입니다. 리디렉션에서는 이 부분이 필요없기 때문에 오른쪽의 <span style="color:red">휴지통 아이콘</span>을 클릭하시면 모든 설정이 끝납니다.

이제 기본적인 도메인과 호스팅의 세팅이 모두 끝났습니다. 다음 시간에는 본격적으로 워드프레스를 설치하는 것부터 시작해 보겠습니다.