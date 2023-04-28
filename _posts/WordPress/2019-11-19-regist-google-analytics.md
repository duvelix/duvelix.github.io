---
title: "Google Analytics 등록하기"
permalink: /wordpress/regist-google-analytics/
classes: wide
categories:
  - studies
tags:
  - wordpress
---

어떤 블로그를 운영하더라도 통계를 확인하는 일은 중요합니다. 왜냐하면 통계로부터 내 블로그가 어디에서 많이 유입되었는지를 분석하고, 그에 맞는 컨텐츠를 생산하는 것이 많은 방문자를 끌어모을 수 있기 때문입니다.

서비스형 블로그는 보통 이러한 기능을 자체적으로 내장하고 있습니다. 이전에 운영하던 티스토리 블로그 또한 아래와 같이 방문자 통계와 함께 유입 경로를 보여주고 있습니다.

![](/assets/images/WP/008/01.png){: .align-center}

하지만 설치형 블로그인 워드프레스의 경우에는 이러한 유입 경로를 포함한 통계를 확인할 수 없습니다. 그렇기 때문에 구글 애널리틱스 등과 같은 다른 방법을 통해 방문자를 분석해야 합니다. 다행히도 워드프레스의 플러그인 중 <span style="color:red">MonsterInsights</span>를 사용하면 간편하게 구글 애널리틱스를 연결할 수 있습니다. 이번 시간에는 MonsterInsights를 사용하여 워드프레스 블로그를 구글 애널리틱스에 연결하는 과정을 다루어보도록 하겠습니다.

![](/assets/images/WP/008/02.png){: .align-center}

만약 저처럼 SiteGround에서 워드프레스를 설치하셨다면 이미 MonsterInsights 플러그인이 설치되어있을 것입니다. 설치되어있지 않더라도 플러그인 새로 추가에서 MonsterInsights로 검색하시면 바로 나오기 때문에 설치에 어려움은 없을 것이라고 생각합니다. 역시나 그냥 설치만 하면 끝나는 것이 아니라 추가로 설정해줄 부분이 있으니, 상단의 <span style="color:red">Connect MonsterInsights and Setup Website Analytics</span> 버튼을 클릭합니다.

![](/assets/images/WP/008/03.png){: width="600"}{: .align-center}

설정창에는 사용자의 웹 사이트가 어떤 카테고리인지를 알려달라고 합니다. 저는 블로그이기 때문에 가운데의 **Publisher (Blog)**를 선택했습니다. 원하시는 카테고리를 선택하신 후, 아래의 <span style="color:red">Save and Continue</span> 버튼을 클릭합니다.

![](/assets/images/WP/008/04.png){: .align-center}

MonsterInsights 플러그인은 기본적으로 무료지만, Pro버전으로 업그레이드 함으로써 더 많은 기능을 사용할 수 있습니다. 문제는 Pro 버전의 가격이 연간 200달러나 된다는 점입니다. 통계를 알려주는 것 치고는 너무 비싼 금액입니다. 블로그 정도라면 기본 기능이면 충분하니, 그냥 <span style="color:red">Connect MonsterInsights</span> 버튼을 클릭합시다.

![](/assets/images/WP/008/05.png){: .align-center}

구글 애널리틱스에 연결하는 플러그인이므로, 구글 로그인 화면이 나옵니다. 연결하실 구글 계정을 입력하고 로그인하시면 됩니다.

![](/assets/images/WP/008/06.png){: .align-center}

로그인 하시면 MonsterInsights 플러그인에 구글 애널리틱스 권한을 허용해달라는 화면이 나옵니다. <span style="color:red">허용</span> 버튼을 누르시면 됩니다.

![](/assets/images/WP/008/07.png){: .align-center}

권한 설정을 마치면 구글 애널리틱스 화면으로 나옵니다. 먼저 워드프레스 사이트를 구글 애널리틱스에 등록해야하니, 가운데에 있는 <span style="color:red">속성 만들기</span> 버튼을 클릭합니다.

![](/assets/images/WP/008/08.png){: .align-center}

속성 만들기에서는 여러 종류의 통계를 확인할 수 있습니다. 워드프레스 블로그는 웹 항목밖에 해당되지 않으므로 **웹**을 선택하신 후 <span style="color:red">계속</span> 버튼을 클릭합니다.

![](/assets/images/WP/008/09.png){: .align-center}

그 다음으로 웹 사이트의 속성을 설정해야 합니다. 운영하고 있는 웹 사이트에 맞게 설정해야 하는데, 제가 작성한 예시처럼 입력하시면 됩니다. 입력을 완료하셨으면 <span style="color:red">만들기</span> 버튼을 클릭하세요.

![](/assets/images/WP/008/10.png){: .align-center}

속성이 만들어지면 구글 애널리틱스를 통해 통계를 제공받을 수 있는 소스코드가 주어집니다. 어떤 사이트를 막론하고 이 소스코드가 웹 사이트에 들어가지 않으면 통계자료를 제공받지 못합니다. 이 소스코드를 잘 복사해 놓습니다.

![](/assets/images/WP/008/11.png){: .align-center}

다시 MonsterInsights 설정창으로 돌아오면, 구글 애널리틱스에 연결하는 화면이 나옵니다. 방금 만든 속성을 선택하고, <span style="color:red">Complete Connection</span> 버튼을 클릭합니다.

![](/assets/images/WP/008/12.png){: .align-center}

잠시 기다리면 연결이 완료됩니다.

![](/assets/images/WP/008/13.png){: .align-center}

다음으로는 MonsterInsights 플러그인의 설정이 나오는데, 따로 건드릴 필요는 없으니 한번 쭉 훑어보면서 스크롤을 아래로 내립니다.

![](/assets/images/WP/008/14.png){: .align-center}

스크롤을 아래로 내리시면 <span style="color:red">Save and continue</span> 버튼이 보입니다. 이 버튼을 클릭합니다.

![](/assets/images/WP/008/15.png){: .align-center}

Pro 버전으로 업그레이드하면 이런 기능이 추가된다는 광고문구가 또 나옵니다. 저는 Pro로 업그레이드할 생각이 없으니 그냥 스크롤을 아래로 내렸습니다.

![](/assets/images/WP/008/16.png){: .align-center}

스크롤을 아래로 내리시면 바로 보이는 <span style="color:red">Save and continue</span> 버튼을 클릭합니다.

![](/assets/images/WP/008/17.png){: .align-center}

설정이 완료되었다는 문구가 나옵니다. <span style="color:red">Finish Setup & Exit Wizard</span> 버튼을 누르시면 워드프레스 관리자 화면으로 돌아갈 수 있습니다.

![](/assets/images/WP/008/18.png){: .align-center}

이 화면이 나오면 구글 애널리틱스와 연결이 성공적으로 이루어진 것입니다. 앞으로는 구글 애널리틱스를 워드프레스 관리자 화면에서 확인할 수 있습니다.

![](/assets/images/WP/008/19.png){: .align-center}

아직 끝난 것이 아닙니다. 구글 애널리틱스의 통계를 정상적으로 수집하기 위해서는, 아까 속성을 만들고 나서 주어진 소스 코드를 워드프레스 홈페이지에 넣어야 합니다. 다행히도 Newspaper 테마는 쉽게 구글 애널리틱스 소스를 넣을 수 있는 기능을 제공합니다. 왼쪽 메뉴에서 Newspaper에 마우스를 올리시면 나오는 <span style="color:red">Theme panel</span> 메뉴를 클릭합니다.

![](/assets/images/WP/008/20.png){: .align-center}

Theme panel에서 <span style="color:red">ANALYTICS/JS CODES</span> 버튼을 클릭합니다.

![](/assets/images/WP/008/21.png){: .align-center}

이 화면이 바로 Newspaper 테마에서 구글 애널리틱스 소스를 넣을 수 있는 부분입니다. PASTE YOUR CODE HERE 부분에 아까 복사해둔 구글 애널리틱스 소스 코드를 붙여넣고, <span style="color:red">SAVE SETTINGS</span>를 클릭하시면 모든 설정이 끝납니다.

![](/assets/images/WP/008/22.png){: .align-center}

MonsterInsights가 제공하는 통계는 이런 식으로 나옵니다. 한글이 지원되지 않는 점은 아쉽지만, 그래도 구글 애널리틱스의 기본 인터페이스보다는 확실히 눈에 잘 들어옵니다. 스크롤을 아래로 내리면 세부적인 내용도 확인이 가능하고, 요약된 통계를 클릭하면 더 자세히 볼 수 있도록 구글 애널리틱스로 바로 연결해줍니다. 아직은 블로그의 방문자가 많지 않아 볼게 별로 없지만, 나중에는 매일 통계를 보는 재미가 생길지도 모르겠습니다.