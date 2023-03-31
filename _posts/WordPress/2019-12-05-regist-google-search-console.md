---
title: "Google Search Console 등록하기"
permalink: /wordpress/regist-google-search-console/
classes: wide
toc: true
toc_label: "Table of Contents"
toc_sticky: true
categories:
  - studies
tags:
  - wordpress
---

힘들게 블로그를 만들었으면, 이제 방문자를 유치할 방법을 찾아야합니다. 구글이나 네이버 등의 검색엔진은 굳이 사이트를 등록하지 않아도 시간이 지나면 검색이 가능하지만, 자신의 사이트를 직접 등록하게 되면 좀 더 효과적으로 검색 결과에 노출이 될 수 있습니다. 모든 검색 엔진에 각각 등록하는 과정을 거쳐야 하기 때문에 약간은 귀찮은 작업이긴 합니다.

가장 먼저 오늘은 <span style="color:red">구글 서치 콘솔(Google Search Console)</span>에 등록하는 방법을 알아보겠습니다. 최근 네이버나 다음과 같은 국내 검색 엔진은 검색 기능이 구글에 비해 많이 뒤쳐졌기 때문에 많은 이용자가 구글로 넘어오고 있습니다. 특히 제 블로그처럼 전문 지식을 다루는 블로그는 구글에서의 사용자를 유치하는 것이 중요합니다. 전공자들은 네이버보다는 구글에서 검색을 훨씬 더 많이하기 때문입니다.

## 구글 서치 콘솔 시작하기

![](/images/WordPress/10. Regist Google Search Console/WP 10-01.png){: .align-center}

먼저 구글에 로그인한 상태로 [구글 서치 콘솔 사이트](https://search.google.com/search-console/)를 방문합니다. 구글에 검색하셔도 맨 위에 나오니 찾기 쉽습니다. <span style="color:red">시작하기</span> 버튼을 클릭합니다.

![](/images/WordPress/10. Regist Google Search Console/WP 10-02.png){: width="600"}{: .align-center}

구글 서치 콘솔을 시작하는 방법은 두 가지가 있습니다. 하나는 **URL 접두어**를 사용하는 방법이고 다른 하나는 **도메인**을 사용하는 방법입니다. URL 접두어를 사용하는 방법은 http와 https를 따로 등록해야 하므로 한번에 등록을 하고 싶다면 도메인으로 등록하시는 것이 좋습니다. 자신의 도메인을 입력하고, <span style="color:red">계속</span> 버튼을 클릭합니다.

![](/images/WordPress/10. Regist Google Search Console/WP 10-03.png){: width="600"}{: .align-center}

그 다음에는 도메인의 소유권을 확인해야 한다는 팝업창이 나옵니다. 타인의 도메인을 자기 맘대로 등록하는 것을 막기 위한 조치입니다. 도메인의 txt 레코드를 등록해야하는데, 일단 <span style="color:red">복사</span> 버튼을 눌러 레코드를 복사합니다.

![](/images/WordPress/10. Regist Google Search Console/WP 10-04.png){: .align-center}

txt 레코드를 등록하기 위해서는 도메인의 네임서버에서 등록을 해야합니다. 저는 Namecheap에서 도메인을 구매하고, SiteGround에서 웹 호스팅을 등록했으므로 현재 SiteGround의 네임서버를 사용하고 있습니다. 이런 경우에는 SiteGround에서 txt 레코드를 등록해야 합니다.

SiteGround를 기준으로 설명드리면, 로그인을 한 후 <span style="color:red">SITE TOOL</span> 버튼을 누르시면 위와 같은 화면이 나오는데, 여기서 <span style="color:red">DOMAIN</span> 메뉴, <span style="color:red">DNS Zone Editor</span> 메뉴를 차례로 클릭합니다. 화면이 바뀌면 **Create New Record**의 여러 탭 중 <span style="color:red">TXT</span>를 클릭하시면 됩니다.

![](/images/WordPress/10. Regist Google Search Console/WP 10-05.png){: .align-center}

이 화면으로 오시면 나머지는 건드릴 필요가 없고, **Value** 부분에 복사해놓은 TXT 레코드를 붙여넣습니다. 정상적으로 복사되었음을 확인하고, <span style="color:red">CREATE</span> 버튼을 클릭합니다.

![](/images/WordPress/10. Regist Google Search Console/WP 10-06.png){: .align-center}

위와 같이 TXT record가 생성되었다는 화면이 나오면 성공입니다. 다시 구글 서치 콘솔 화면으로 돌아갑니다.

![](/images/WordPress/10. Regist Google Search Console/WP 10-07.png){: width="600"}{: .align-center}

다시 이 화면으로 돌아왔으면, <span style="color:red">확인</span> 버튼을 클릭합니다.

![](/images/WordPress/10. Regist Google Search Console/WP 10-08.png){: width="600"}{: .align-center}

정상적으로 소유권이 확인되었다는 메시지가 나옵니다. 구글 서치 콘솔을 계속 사용하기 위해서는 방금 등록한 TXT 레코드를 삭제하시면 안됩니다. <span style="color:red">속성으로 이동</span>을 누르시면 관리자 화면으로 넘어갈 수 있습니다.

![](/images/WordPress/10. Regist Google Search Console/WP 10-09.png){: .align-center}

구글 서치 콘솔의 관리자 화면으로 넘어가면 사용해주셔서 감사하다는 팝업이 나옵니다. <span style="color:red">시작</span>을 클릭하면 이것 저것 확인할 수 있지만, 등록한지 얼마 안된 상태에서는 애널리틱스와 마찬가지로 크게 볼 것이 없습니다. 블로그에 올린 새 글이 빠르게 구글 검색에 노출되고 싶다면 구글 서치 콘솔이 자신의 블로그를 쉽게 크롤링 할 수 있도록 사이트맵을 제공해야 합니다.

## 구글 서치 콘솔에 사이트맵 제공하기

워드프레스 자체는 사이트맵을 생성하는 기능이 없기 때문에, 사이트맵을 만들어주는 플러그인이나 타 사이트를 이용해야 합니다. 다행히, 지난 시간에 설치한 Yoast SEO에서는 사이트맵을 생성해주는 기능이 포함되어 있으므로 저는 이것을 사용하도록 하겠습니다.

![](/images/WordPress/10. Regist Google Search Console/WP 10-10.png){: .align-center}

워드프레스 관리자 화면으로 가신 후, <span style="color:red">SEO</span> 메뉴를 클릭하시고 상단의 <span style="color:red">Features</span> 탭을 클릭하시면 **XML sitemaps** 라는 옵션이 있습니다. 기본적으로 On으로 설정되어있지만, 만약에 Off라고 설정되어 있다면 On으로 바꿔줍시다. 그리고 오른쪽의 <span style="color:red">?</span> 버튼을 클릭합니다.

![](/images/WordPress/10. Regist Google Search Console/WP 10-11.png){: .align-center}

? 버튼을 클릭하시면 Yoast SEO에서 제공하는 XML 사이트맵을 확인할 수 있습니다. <span style="color:red">See the XML sitemap</span>을 클릭합니다.

![](/images/WordPress/10. Regist Google Search Console/WP 10-12.png){: .align-center}

새 화면으로 사이트맵이 나오는 것을 볼 수 있습니다. 주소창에 나와있는 사이트맵 주소를 복사합니다. 기본적으로 **(자신의 도메인)/sitemap_index.xml** 로 생성됩니다.

![](/images/WordPress/10. Regist Google Search Console/WP 10-13.png){: .align-center}

구글 서치 콘솔 관리자 화면으로 가시면 왼쪽에 <span style="color:red">Sitemaps</span> 메뉴가 보입니다. 이것을 클릭하신 다음 새 사이트맵 추가를 보시면 주소를 입력할 수 있는데, 이곳에 방금 복사한 사이트맵 주소를 붙여넣습니다. 그리고 <span style="color:red">제출</span> 버튼을 클릭하시면 사이트맵이 등록됩니다.

![](/images/WordPress/10. Regist Google Search Console/WP 10-14.png){: .align-center}

아래의 제출된 사이트맵에 성공적으로 사이트맵이 등록되었다고 나옵니다. 다만 등록하고 바로 모든 페이지가 크롤링되지는 않습니다. 일주일 정도 기다리시면 순차적으로 크롤링됩니다.