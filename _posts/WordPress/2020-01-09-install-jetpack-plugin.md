---
title: "JetPack 플러그인 설치하기"
permalink: /wordpress/install-jetpack-plugin/
classes: wide
toc: true
toc_label: "Table of Contents"
toc_sticky: true
categories:
  - studies
tags:
  - wordpress
---

오늘은 워드프레스 플러그인 중 하나인 Jetpack을 설치하는 법을 설명하려고 합니다. Jetpack은 워드프레스에서 공식으로 제공하는 플러그인으로, 워드프레스에서 기본적으로 제공하지 않는 보안 설정이나 사이트 관리 도구를 모아놓은 플러그인입니다.

워드프레스에서 공식으로 제공하기 때문에 기본적으로 한글이 지원되며, 무료 서비스와 유료 서비스로 나뉘어 있습니다. 무료 서비스에서도 기본적인 기능은 제공하지만, 자동 백업이나 스팸 필터링 등의 서비스를 받기 위해서는 유료 서비스를 사용해야 합니다. 가격대별로 제공하는 서비스가 조금씩 차이나는데, 구체적인 비교를 보고 싶으시면 Jetpack 공식 홈페이지를 참고하시기 바랍니다.

하지만 많은 기능을 지원하는 만큼, Jetpack 플러그인을 사용하게 되면 그만큼 속도가 느려진다는 단점이 있습니다. 저는 처음에 외국의 웹 호스팅을 사용하고 있어서 사이트 로딩 속도가 느린 줄 알았는데, Jetpack 플러그인을 비활성화해보니 사이트 로딩 속도가 상당히 개선된 것을 느낄 수 있었습니다. 그렇기 때문에 Jetpack 플러그인의 기능 중 대부분이 필요한 경우가 아니라면, 사용을 그다지 추천드리지 않는 플러그인이기도 합니다.

다만 워드프레스의 공식 플러그인인 만큼 지속적인 지원이 보장되며, 워드프레스와의 호환성도 굉장히 뛰어나기 때문에 이 플러그인을 선호하는 분들도 많습니다. 현재도 사용자만큼은 굉장히 많으니, Jetpack이 지원하는 기능들이 본인에게 유용하고, 이 기능들을 여러 플러그인으로 나눠 설치하기 번거롭다고 생각하신다면 사용하시는 것도 나쁘지는 않습니다.

## Jetpack 플러그인 설치하기

![](/images/WordPress/15. Install JetPack Plugin/WP 15-01.png){: .align-center}

플러그인 설치는 다른 플러그인 설치 과정과 크게 다르지 않습니다. 워드프레스 관리자 화면에서 플러그인 - 새로 추가 항목으로 들어가시면 됩니다. 검색창에 Jetpack으로 검색하셔도 되고, 인기 플러그인 목록을 보시면 첫 페이지에 Jetpack 플러그인이 보이므로 이것을 바로 설치하셔도 됩니다. 저는 두 번째 방법으로 설치해 보겠습니다. 워드프레스닷컴 젯팩 플러그인에서 지금 설치 버튼을 클릭하시면 바로 설치됩니다.

![](/images/WordPress/15. Install JetPack Plugin/WP 15-02.png){: .align-center}

설치를 마치게 되면 지금 설치 버튼이 활성화 버튼으로 바뀌게 되는데, 이것을 눌러주셔야 플러그인 활성화가 됩니다.

## Jetpack 플러그인 설정하기

![](/images/WordPress/15. Install JetPack Plugin/WP 15-03.png){: .align-center}

Jetpack 플러그인을 활성화하게 되면, Jetpack 플러그인을 사용하기 위한 설정 화면이 나옵니다. 가운데에 나와있는 젯팩 설정 버튼을 클릭하세요.

![](/images/WordPress/15. Install JetPack Plugin/WP 15-04.png){: width="600"}{: .align-center}

Jetpack을 사용하기 위해서는 계정을 만들어야 합니다. 또는 구글이나 애플 계정을 사용할 수도 있습니다. 워드프레스와 애플과는 별 관련이 없어보이는데, 통합 계정을 사용하는 것이 신기하네요. 저는 새 계정을 만들어서 사용하도록 하겠습니다.

![](/images/WordPress/15. Install JetPack Plugin/WP 15-05.png){: width="600"}{: .align-center}

로그인을 하게 되면 해당 아이디로 연결한다는 화면이 나옵니다. 잠시만 기다리시면 다음 화면으로 넘어갑니다.

![](/images/WordPress/15. Install JetPack Plugin/WP 15-06.png){: .align-center}

서론에서도 언급했듯이, Jetpack은 무료 요금제와 유료 요금제로 서비스가 나뉘어 있습니다. 유료 요금제에서는 꽤 괜찮은 옵션들을 제공하긴 하지만, 다른 플러그인을 통해서도 비슷한 혜택을 받을 수 있기 때문에 저는 무료 서비스를 사용하도록 하겠습니다. 맨 아래에 있는 무료로 시작 버튼을 클릭합니다.

![](/images/WordPress/15. Install JetPack Plugin/WP 15-07.png){: .align-center}

무료 시작 버튼을 클릭하시면 가입형 워드프레스 관리자 화면과 비슷한 화면이 나오게 됩니다. Jetpack 플러그인을 만든 곳이 가입형 워드프레스를 만든 곳과 동일하기 때문인 것으로 보입니다. 계속 버튼을 클릭합니다.

![](/images/WordPress/15. Install JetPack Plugin/WP 15-08.png){: .align-center}

여기서는 설정할 내용이 없으므로 다시 워드프레스 관리자 화면으로 돌아갑시다. 왼쪽에 있는 WP 관리자 메뉴를 클릭합니다.

![](/images/WordPress/15. Install JetPack Plugin/WP 15-09.png){: .align-center}

워드프레스 관리자 화면으로 돌아가면 Jetpack의 알림판(Dashboard) 화면으로 자동으로 넘어오는데, 바로 아래에 있는 설정 메뉴를 클릭하시면 Jetpack 플러그인의 어떤 기능을 사용할 것인지 설정을 할 수 있습니다.

## Jetpack의 기능 살펴보기

이제 Jetpack 설정의 각 항목들을 보면서 어떠한 기능들이 있는지를 하나하나 살펴보겠습니다.

![](/images/WordPress/15. Install JetPack Plugin/WP 15-10.png){: .align-center}

보안 탭에서는 사이트의 접속이 끊겼을 때 알려주는 기능과 공격자가 무차별 대입 방법으로 사이트를 공격할 때 이를 막아주는 기능이 들어있습니다. 하지만 SiteGround 같은 믿을 만한 웹 호스팅을 사용할 경우 다운시간 모니터링 기능은 쓸모가 없습니다. 무차별 공격 대입 방어도 워드프레스 홈페이지에서 그렇게 쓸모있는 기능이라고는 생각하지 않습니다.

사이트 자동 백업은 유료 요금제에서만 지원하는 기능이긴 하지만, 웹 호스팅 자체에서 이것을 지원하는 경우도 있습니다. 저는 SiteGround의 GrowBig 요금제를 사용하고 있는데, 자동으로 매일 백업을 해주는 기능을 제공합니다.

![](/images/WordPress/15. Install JetPack Plugin/WP 15-11.png){: .align-center}

성능 탭에서는 속도에 관한 설정을 할 수 있습니다. 사이트 가속기나 Lazy 로드 설정을 할 수 있는데, 저는 SiteGround에서 제공하는 플러그인인 SG Optimizer에서 동일한 기능을 제공하고 있기 때문에 저에게는 딱히 필요가 없습니다.

![](/images/WordPress/15. Install JetPack Plugin/WP 15-12.png){: .align-center}

쓰기 탭에서는 글을 쓸 때 필요한 옵션을 설정할 수 있습니다. 기본적으로 워드프레스의 고전 편집기가 글쓰기에 필요한 기능들을 많이 포함하고 있고, 추가 기능이 필요하다면 TinyMCE Advanced 등의 플러그인이 훨씬 유용합니다.

![](/images/WordPress/15. Install JetPack Plugin/WP 15-13.png){: .align-center}

공유에서는 포스트를 SNS에 공유할 수 있도록 만드는 기능이나, 좋아요 버튼을 만들 수 있습니다. 이 옵션은 관련 플러그인을 찾기 쉽지 않기 때문에 유용하긴 하나, 제가 사용하고 있는 Newspaper 테마에서 이 기능을 제공하고 있습니다. Newspaper 테마를 구매하고 적용하는 방법은 아래의 포스트를 참고하시기 바랍니다.

- [[WordPress] Newspaper 테마 구매 및 적용하기](/wordpress/buy-newspaper-theme/)

![](/images/WordPress/15. Install JetPack Plugin/WP 15-14.png){: .align-center}

토론 탭에서는 트위터, 페이스북, 그리고 구글 아이디를 사용하여 댓글을 달 수 있는 기능을 추가할 수 있습니다. 워드프레스 기본 댓글 시스템이 별로라서 이 기능은 저도 필요하긴 한데, 이 기능 하나만을 위해 Jetpack을 설치하기는 꺼려저셔 다른 플러그인을 알아보고 있습니다.

![](/images/WordPress/15. Install JetPack Plugin/WP 15-15.png){: .align-center}

마지막으로 트래픽 탭에서는 글 하단에 관련 포스트를 보여주는 기능을 추가할 수 있습니다. 제가 사용하고 있는 Newspaper 테마에서 이와 동일한 기능을 제공하고 있습니다. Jetpack 유료 서비스를 구매한다면 검색 엔진 최적화(SEO) 도구를 사용할 수 있는데, 이미 우수한 SEO 도구인 Yoast SEO를 사용하고 있기 때문에 굳이 돈을 내면서까지 사용할 필요는 없어 보입니다.