---
title: "네이버, 다음 검색 엔진 등록하기"
permalink: /wordpress/regist-search-engine/
classes: wide
toc: true
toc_label: "Table of Contents"
categories:
  - studies
tags:
  - wordpress
---

지난 시간에 구글 서치 콘솔을 사용하여 구글에 사이트가 검색될 수 있도록 등록하였습니다. 하지만 아직도 한국에서 네이버와 다음의 점유율은 낮지 않기 때문에 이곳에서도 사이트가 검색되어야 더 많은 방문자를 모을 수 있습니다. 그렇기 때문에 오늘은 네이버와 다음에서 자신의 웹 사이트를 등록해보도록 하겠습니다.

## 네이버 서치 어드바이저 등록하기

![](/assets/images/WP/011/01.png){: .align-center}

구글에 사이트를 등록했던 것과 마찬가지로, 네이버에 로그인한 다음 [네이버 서치 어드바이저 사이트](https://searchadvisor.naver.com/)에 방문합니다. 오른쪽 상단에 보면 <span style="color:red">웹 마스터 도구</span> 버튼이 보이는데, 이 버튼을 클릭합니다.

![](/assets/images/WP/011/02.png){: .align-center}

네이버 서치 어드바이저는 구글과 다르게 URL을 사용한 등록만 가능합니다. 이 말은 http와 https를 각각 따로 등록해야한다는 뜻입니다. 우선 http 사이트를 먼저 등록해보도록 하겠습니다. 사이트 주소를 입력하고, 오른쪽의 <span style="color:red">추가</span> 버튼을 클릭합니다.

![](/assets/images/WP/011/03.png){: .align-center}

구글 때와 마찬가지로 사이트 소유 확인을 하는 절차가 있습니다. 네이버 서치 어드바이저에서 지원하는 소유권 확인은 두 가지 방법이 있는데, **HTML 파일**을 직접 업로드하는 것과 **HTML 태그**를 추가하는 것입니다. 네이버 서치 어드바이저에서 권장하는 방법은 HTML 파일 업로드이기 때문에, 여기서는 이 방법으로 소유권을 확인해 보겠습니다.

<span style="color:red">HTML 확인 파일</span>을 클릭하시면 HTML 파일 하나를 다운받을 수 있습니다. 이를 컴퓨터에 잘 저장해 놓고, FTP에 접속합니다.

![](/assets/images/WP/011/04.png){: .align-center}

FTP에 접속하는 방법은 많지만, 여기서는 **FileZila**를 사용하겠습니다. FileZila는 오픈 소스 프로그램이기 때문에 개발자들이 많이 사용하는 FTP 프로그램입니다. FTP에 접속하는 방법은 추후에 다른 게시물로 작성하도록 하겠습니다.

방금 다운로드 받으신 HTML 파일을 업로드해야 하는데, 주의하실 점은 도메인의 루트 디렉토리가 아닌 <span style="color:red">public_html</span> 아래에 업로드해야 합니다.

![](/assets/images/WP/011/05.png){: .align-center}

HTML 파일 업로드가 완료되었다면, 다시 네이버 서치 어드바이저 페이지로 돌아와서 <span style="color:red">확인</span> 버튼을 클릭합니다.

![](/assets/images/WP/011/06.png){: .align-center}

HTML 파일이 제대로 올라갔다면, 위처럼 소유 확인이 완료되었다는 메시지가 나옵니다.

![](/assets/images/WP/011/07.png){: .align-center}

소유 확인이 끝났다면 등록이 완료되었습니다. 같은 방법으로 https에 대한 등록도 해주셔야 합니다. 위 스크린샷처럼 http와 https가 모두 보인다면 성공적으로 등록하신겁니다.

## RSS 및 사이트맵 등록하기

![](/assets/images/WP/011/08.png){: .align-center}

사이트 등록을 한 후에 **RSS**와 **사이트맵** 등록을 해주어야 합니다. RSS는 업데이트가 빈번한 웹 사이트의 정보를 제공하는 기능입니다. 이전의 연동 사이트 목록에서 사이트 주소를 클릭하시면 위와 같은 화면이 나오는데, 왼쪽에 있는 <span style="color:red">요청</span> 메뉴를 클릭합니다.

![](/assets/images/WP/011/09.png){: .align-center}

요청 메뉴를 클릭하시면 서브 메뉴가 펼쳐집니다. 이 중에서 <span style="color:red">RSS 제출</span>을 클릭합니다. 워드프레스에서는 RSS URL을 기본으로 제공하기 때문에 사이트맵처럼 플러그인을 사용할 필요는 없습니다. 자신의 RSS URL은 **(사이트 주소)/feed** 로 제공됩니다. RSS 제출 화면에서 이 주소를 입력한 후, <span style="color:red">확인</span> 버튼을 클릭합니다.

![](/assets/images/WP/011/10.png){: .align-center}

RSS가 성공적으로 등록된 것을 볼 수 있습니다. 다음으로 사이트맵을 제출하기 위해 왼쪽에서 <span style="color:red">사이트맵 제출</span> 버튼을 클릭합니다.

![](/assets/images/WP/011/11.png){: .align-center}

사이트맵 주소는 구글 서치 콘솔에 등록했던 주소를 그대로 사용하시면 됩니다. 사이트맵 주소를 입력하고 <span style="color:red">확인</span> 버튼을 클릭하시면 됩니다. 혹시 워드프레스에서 사이트맵 주소를 생성하는 법이 궁금하시면 아래 포스트를 참고하시기 바랍니다.

- [[워드프레스] 구글 서치 콘솔 등록하기](/wordpress/regist-google-search-console/)

![](/assets/images/WP/011/12.png){: .align-center}

위 스크린샷처럼 사이트맵이 제출되었다면 성공입니다. 구글 때와 마찬가지로, 일주일 정도 기다리시면 페이지가 순차적으로 크롤링됩니다.

## 다음 검색 등록하기

최근 국내 검색 엔진은 네이버에 밀려 다음이 많이 사용되는 편은 아니지만, 그럼에도 불구하고 다음의 유입량은 무시할 수 없는 수준입니다. 이전에 티스토리 블로그를 운영했을 때 유입량을 관찰한 결과 다음의 유입량은 정말 많았습니다. 물론 티스토리와 다음이 모두 카카오의 소유이기 때문이기도 하지만, 다음에 사이트를 등록하면 카카오톡의 샵검색에도 노출이 될 수 있기 때문에 가급적이면 해주시는 것이 좋습니다.

![](/assets/images/WP/011/13.png){: .align-center}

[다음 검색 등록 페이지](https://register.search.daum.net/index.daum)에 접속합니다. 특이하게 다음은 로그인을 하지 않아도 사이트를 등록할 수 있습니다. 등록 절차도 굉장히 간편합니다. 화면에 보이는 URL 창에 주소를 입력하고 <span style="color:red">확인</span>을 클릭합니다.

![](/assets/images/WP/011/14.png){: .align-center}

신규 등록을 하려면 몇 가지 약관에 동의해야합니다. 어차피 안하면 넘어갈 수가 없으니 모두 <span style="color:red">동의</span>를 하고 넘어갑니다.

![](/assets/images/WP/011/15.png){: .align-center}

입력해야할 내용은 많지 않습니다. **제목**과 **설명**, **디렉토리**, **신청자 정보**만 입력하시면 됩니다. 네이버나 구글과 달리 사이트 소유 확인을 하지 않는다는 것이 특이합니다. 정보를 모두 기입하신 다음 <span style="color:red">확인</span>을 클릭합니다.

![](/assets/images/WP/011/16.png){: .align-center}

이렇게 간단하나 싶을 정도로 사이트 등록이 끝납니다. 구글 애널리틱스를 확인하니 다음 관리자 페이지에서 유입 경로가 나오는 것을 보았습니다. 다음은 관리자가 사이트를 하나하나 검토 후에 등록하는 것 같습니다.