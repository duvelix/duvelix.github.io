---
title: "Google Analytics와 Search Console 연결하기"
permalink: /wordpress/connect-analytics-search-console/
classes: wide
toc: true
toc_label: "Table of Contents"
toc_sticky: true
categories:
  - studies
tags:
  - wordpress
---

이전 포스트에서 구글 애널리틱스와 서치 콘솔 세팅 방법을 설명드린 바 있습니다. 구글 애널리틱스는 사이트의 방문 통계를 제공하고, 서치 콘솔은 사이트가 검색이 더 잘되도록 도와줍니다. 구글 애널리틱스와 서치 콘솔 모두 구글의 서비스이기 때문에, 이 둘을 연결함으로써 더 발전된 서비스를 받을 수 있습니다. 예를 들어, 사용자가 구글 검색으로 사이트를 방문한 경우, 어떤 검색어를 사용했는지에 대한 구체적인 통계를 알 수 있습니다.

## 구글 애널리틱스에서 서치 콘솔 연결하기

![](/images/WordPress/14. Connect Analytics Search Console/WP 14-01.png){: .align-center}

먼저 구글 애널리틱스에 방문하고, 로그인합니다. 왼쪽 맨 아래를 보시면 <span style="color:red">관리</span> 메뉴가 보이는데, 이것을 클릭합니다.

![](/images/WordPress/14. Connect Analytics Search Console/WP 14-02.png){: .align-center}

관리 화면에는 크게 계정, 속성, 보기로 나뉘어 있습니다. 이 중 가운데의 속성에서 <span style="color:red">모든 제품</span> 메뉴를 클릭합니다.

![](/images/WordPress/14. Connect Analytics Search Console/WP 14-03.png){: .align-center}

모든 제품 메뉴에는 구글과 연관된 많은 서비스 목록이 나옵니다. 스크롤을 쭉 내리시면 맨 아래에 **Search Console** 항목이 보입니다. 이 항목에서 <span style="color:red">Search Console 연결</span> 버튼을 클릭하시면 됩니다.

![](/images/WordPress/14. Connect Analytics Search Console/WP 14-04.png){: .align-center}

버튼을 클릭하시면 새 탭으로 화면이 넘어가고, 동일한 구글 계정에 연결된 Search Console 속성이 나옵니다. 이 속성을 선택하신 다음 <span style="color:red">저장</span> 버튼을 클릭하시면 됩니다.

![](/images/WordPress/14. Connect Analytics Search Console/WP 14-05.png){: .align-center}

연결을 정말 할 것인지를 물어보는 창이 나오는데, <span style="color:red">확인</span> 버튼을 클릭합니다.

![](/images/WordPress/14. Connect Analytics Search Console/WP 14-06.png){: .align-center}

확인 버튼을 누르셔도 화면 자체는 바뀌지 않는데, 새로고침(F5)을 한번 누르시면 구글 애널리틱스와 서치 콘솔이 연결된 것을 볼 수 있습니다.

![](/images/WordPress/14. Connect Analytics Search Console/WP 14-07.png){: .align-center}

구글 애널리틱스 화면으로 넘어가도, 바로 바뀌어 보이지 않기 때문에 역시 새로고침(F5)을 한번 눌러주셔야 합니다. 새로고침 후 위처럼 정상적으로 연결되었다는 화면이 나오면 <span style="color:red">저장</span> 버튼을 클릭하시면 됩니다.

## 확인한 사이트가 없습니다라고 나오는 경우

![](/images/WordPress/14. Connect Analytics Search Console/WP 14-08.png){: .align-center}

만약에 구글 서치 콘솔에 등록했을 때 저처럼 도메인 속성으로 등록하신 경우에는 위처럼 확인한 사이트가 없습니다라고 나옵니다. 이 경우에는 구글 서치 콘솔 관리자 화면으로 가서, 새로운 속성을 추가해주셔야 합니다.

![](/images/WordPress/14. Connect Analytics Search Console/WP 14-09.png){: .align-center}

위의 화면 처럼 URL 접두어를 사용하여 속성을 추가해주면 서치 콘솔과 구글 애널리틱스를 연결할 수 있습니다. 서치 콘솔에서 도메인 속성이 최근에 나온 옵션이다보니 아직 애널리틱스와 연결하는 것을 지원하지 않는 것 같습니다.