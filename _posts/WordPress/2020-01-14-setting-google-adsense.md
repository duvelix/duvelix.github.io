---
title: "Google AdSense 설정하기"
permalink: /wordpress/setting-google-adsense/
classes: wide
toc: true
toc_label: "Table of Contents"
toc_sticky: true
categories:
  - studies
tags:
  - wordpress
---

구글 애드센스는 구글에서 컨텐츠 제공자들이 수익을 얻을 수 있게 만드는 광고 게제 서비스입니다. 구글 계정을 통해 가입하여, 제공 받은 광고 태그를 블로그나 유튜브에 삽입하면 방문자들이 광고를 보거나 클릭한 수에 따라 보수가 지급되는 방식입니다. 국내에서 많은 블로거가 사용하는 네이버 블로그는 구글 애드센스 광고를 삽입할 수 없기 때문에 몇 년 전만 해도 인지도가 높지 않았지만, 유튜브의 시청자가 크게 증가함에 따라 자연스레 구글 애드센스에 대한 관심도가 증가하였습니다.

사람마다 구글 애드센스에 가입을 하는 목적은 조금씩 다르지만, 크게 나누자면 블로그, 유튜브, 구글 플레이스토어에서의 수익 창출일 것입니다. 어떤 목적이든 구글 애드센스에 가입을 한 후, 광고 게제 승인이 떨어져야 수익 창출이 가능하지만, 생각보다 승인 기준이 높은 편입니다. 블로그의 경우에는 기준은 명확하지 않으나 컨텐츠가 적절해야 하고, 유튜브에서는 구독자 1000명 이상과 최근 1년간 시청 시간이 4000시간 이상이 되어야 합니다.

저는 기존에 운영하던 블로그가 있었기 때문에 그 블로그를 통해 승인을 받았는데, 이 포스트에서는 구글 애드센스 가입부터 수익 창출 승인을 받는 과정을 설명드리려고 합니다.

## 구글 애드센스 가입하기

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/016/01.png?raw=true){: .align-center}

먼저 [구글 애드센스 홈페이지](https://www.google.com/intl/ko_kr/adsense/start/)에 방문합니다. 홈페이지에 접속하면 바로 보이는 화면에서 <span style="color:red">지금 가입하기</span> 버튼을 클릭하고 구글 계정에 가입하거나 로그인합니다.

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/016/02.png?raw=true){: .align-center}

구글 계정이 있더라도 애드센스에 가입하기 위해서는 여러 정보를 입력해야 합니다. 가장 먼저 광고를 게시할 사이트와 주로 사용하는 이메일 주소를 적습니다. 이메일 주소는 굳이 구글 이메일이 아니여도 됩니다. 아래에는 애드센스에 대한 유용한 정보를 받겠냐는 선택지가 있는데, 필요하지 않다면 **아니요**를 선택하신 후 <span style="color:red">저장하고 계속하기</span> 버튼을 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/016/03.png?raw=true){: .align-center}

다음으로는 사용자의 국가와 이용약관에 대한 동의가 필요합니다. 동의하지 않으면 가입할 수 없으니, **동의**에 체크하고 <span style="color:red">계정 만들기</span> 버튼을 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/016/04.png?raw=true){: .align-center}

이렇게 구글 애드센스 계정은 만들었지만, 광고를 게시하기 위해서는 먼저 간단한 설정을 해주어야 합니다. 계정을 만들게 되면 위처럼 바로 애드센스 관리자 화면으로 페이지가 넘어가게 되는데, <span style="color:red">시작하기</span> 버튼을 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/016/05.png?raw=true){: .align-center}

가장 먼저 수익금을 받을 주소를 입력해야 합니다. 예전에는 우편으로 수표를 보내줬기 때문에 주소가 중요했는데, 요즘에는 수익금을 계좌로 입금해주기 때문에 사실 크게 중요하진 않습니다. 그래도 추후 문제가 생길 수도 있으니 올바르게 주소를 적어줍시다. 작성을 완료한 후 <span style="color:red">제출</span>을 클릭합니다.

## 구글 애드센스 계정 활성화하기

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/016/06.png?raw=true){: .align-center}

구글 애널리틱스를 연결했을 때와 같이 사이트에 구글에서 제공하는 코드를 입력해야 합니다. 먼저 중간에 <span style="color:red">복사하기</span> 버튼을 눌러 코드를 복사합니다. 이미 구글 애널리틱스를 연결해보신 분이라면 똑같이 주어진 코드를 <HEAD>와 </HEAD> 사이에 붙여넣으면 됩니다.

워드프레스에서는 코드를 붙여넣는 방법이 여러 가지인데, 저는 워드프레스의 뉴스페이퍼 테마를 사용하고 있으므로, 이 테마를 기준으로 설명드리겠습니다. 참고로 위의 WordPress 사용자인가요?에 나온 도움말은 [여기](https://support.google.com/adsense/answer/7527509?hl=ko)에서 확인하실 수 있습니다. 요약해서 말씀드리자면, 구글에서 만든 [Site Kit 플러그인](https://wordpress.org/plugins/google-site-kit/)을 사용하면 간단하는 이야기입니다. 추후에 기회가 되면 이 플러그인에 대한 사용법도 포스팅하도록 하겠습니다.

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/016/07.png?raw=true){: .align-center}

뉴스페이퍼 테마의 **Theme panel**에 들어가시면 메뉴 중 **ANALYTICS/JS CODES** 부분이 있는데, 여기서 **HEADER SCRIPT CODE**의 <span style="color:red">PASTE YOUR CODE HERE</span> 부분에 코드를 붙여넣으시면 됩니다. 참고로 이곳은 구글 애널리틱스 코드를 붙여넣는 곳과 동일한 부분입니다.

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/016/08.png?raw=true){: .align-center}

다시 구글 애드센스 관리자 화면으로 돌아와서, 코드를 사이트에 붙여넣었습니다에 **체크**한 후 <span style="color:red">완료</span> 버튼을 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/016/09.png?raw=true){: .align-center}

코드를 입력했다고 바로 사용할 수 있는 것은 아니고, 계정 활성화가 되어야 합니다. <span style="color:red">확인</span> 버튼을 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/016/10.png?raw=true){: .align-center}

계정 활성화에는 하루 정도 걸린다고 나와있는데, 사이트 검토에는 최대 2주가 소요된다고 합니다. 완료되면 이메일로 연락이 옵니다.

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/016/11.png?raw=true){: .align-center}

검토가 완료되면 위와 같이 승인 메일이 옵니다. 저는 꽤 오래 기다려야할 줄 알았는데, 하루 만에 승인 메일이 도착했습니다.

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/016/12.png?raw=true){: .align-center}

승인 후 구글 애드센스에 로그인하면 계정이 활성화되었다는 안내가 나옵니다. 가운데에 있는 <span style="color:red">광고 설정</span> 버튼을 클릭합니다.

## ads.txt 업로드하기

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/016/13.png?raw=true){: .align-center}

구글 애드센스 관리자 페이지로 넘어오면 이전과는 다른 화면이 나옵니다. 팝업으로 광고에 대한 팁이 나오는데, 적당히 읽어보시고 화살표 버튼을 눌러 닫습니다.

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/016/14.png?raw=true){: .align-center}

사이트에 광고를 달기 전에, 제 호스트 계정에 **ads.txt** 파일이 없다는 경고문이 나옵니다. 수익에 영향이 갈 수 있다고 하니, 업로드 하는 것이 좋을 것 같습니다. <span style="color:red">지금 해결하기</span>를 클릭하면 ads.txt 파일 만들기라는 안내가 나오는데, <span style="color:red">다운로드</span>를 클릭하면 바로 ads.txt를 받을 수 있습니다.

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/016/15.png?raw=true){: width="600"}{: .align-center}

받은 ads.txt를 위처럼 자신의 웹 호스팅 최상위 경로에 업로드하면 됩니다. 저는 **FileZilla**를 사용하여 업로드 했는데, 어떤 FTP 프로그램을 사용해도 문제는 없습니다. 사실 이 글을 쓰면서 생각난건데, 대부분의 웹 호스팅 사이트에서는 관리자 패널에서 웹 FTP를 지원하기 때문에 굳이 이렇게 번거롭게 업로드할 필요가 없습니다.

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/016/16.png?raw=true){: .align-center}

ads.txt를 업로드했다고 바로 경고창이 사라지지는 않습니다. 아마 확인하는데 시간이 좀 걸리는 듯 합니다. 며칠 후에 확인해보시면 위처럼 경고창이 깔끔하게 사라진 것을 볼 수 있습니다.

원래 이 포스트에 광고 게제 방법까지 같이 올리려고 했는데, 포스트가 너무 길어지다보니 그 부분은 다음 포스트에 이어서 올리도록 하겠습니다. 읽어주셔서 감사합니다.