---
title: "Yoast SEO 플러그인 설치하기"
permalink: /wordpress/install-yoast-plugin/
classes: wide
toc: true
toc_label: "Table of Contents"
toc_sticky: true
categories:
  - studies
tags:
  - wordpress
---

어떤 웹 사이트를 만들더라도 방문자를 많이 유치하는 것은 중요합니다. 새로운 방문자를 유치하기 위해서는 무엇보다 포털 사이트에서 검색이 잘 되어야 합니다. 검색 엔진 상위에 뜨기 위해서는 웹 사이트를 검색 엔진에 최적화 시켜주어야 하는데, 이것을 <span style="color:red">Search Engine Optimization (SEO)</span>이라고 합니다.

워드프레스는 SEO에 유리한 구조를 갖고 있지만, 그것만을 마냥 믿을 수는 없습니다. 특히 저처럼 블로그를 시작한지 얼마 안된 사람들은 글을 쓸 때 검색에 대해서 크게 고민하지 않기 때문입니다. 똑같은 내용의 글을 써도 검색이 더 잘되는 작성법이 있는데, 몇몇 워드프레스 플러그인들은 이것을 도와줍니다.

SEO에 관련된 플러그인 중, 가장 많이 사용하는 플러그인은 **All In One SEO**와 **Yoast SEO**입니다. Yoast SEO가 더 많은 기능을 제공하지만 더 무겁다고 합니다. 저는 SiteGround에서 워드프레스를 만들 때, Yoast SEO 플러그인을 자동으로 설치해주었기 때문에 이 플러그인을 이용하려자 합니다.

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/009/01.png?raw=true){: .align-center}

저는 Yoast 플러그인이 이미 설치되었지만, 만약 설치하지 않으신 분들은 워드프레스 관리자 화면에서 플러그인 - 새로 추가를 통해 쉽게 설치할 수 있습니다. 플러그인 설치는 지금까지 여러 포스트에서 보여드렸기 때문에 여기서는 설치 과정을 생략하도록 하겠습니다.

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/009/02.png?raw=true){: .align-center}

Yoast SEO 플러그인을 설치하고 활성화하면, 왼쪽 메뉴에 SEO 라는 항목이 추가됩니다. 마우스를 **SEO**에 올리면 서브 메뉴가 펼쳐지는데, 이 중 <span style="color:red">General</span>를 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/009/03.png?raw=true){: .align-center}

Yoast SEO를 설치하고 처음 사용하는 것이기 때문에 설정 마법사를 실행해주어야 합니다. Dashboard에서 바로 보이는 <span style="color:red">configuration wizard</span>를 클릭합니다.

## Yoast SEO 설정 마법사

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/009/04.png?raw=true){: .align-center}

configuration wizard를 클릭하면 바로 설정 마법사로 넘어갑니다. 가장 먼저 웹 사이트의 환경을 설정해주어야 합니다. 두 가지 옵션이 있는데, 만약 현재 블로그가 정상적으로 운영중이라면 **Option A**를, 아직 공사중일 경우에는 **Option B**를 선택하시면 됩니다. 알맞은 옵션을 선택하신 후, <span style="color:red">Next</span>를 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/009/05.png?raw=true){: .align-center}

다음으로는 웹 사이트가 어떤 목적인지 선택해야합니다. 저는 블로그이기 때문에 **A Blog**를 선택했습니다. 목록을 보시고, 운영하고 있는 웹 사이트의 목적을 선택하시면 됩니다. 선택하셨다면 <span style="color:red">Next</span>를 클릭하세요.

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/009/06.png?raw=true){: width="600"}{: .align-center}

이제는 웹 사이트가 **Person (개인)**인지, **Organization (단체)**인지를 선택해주어야 합니다. 저는 이 부분에서 고민을 좀 했는데, 제 블로그는 KEEPMIND라는 브랜드로 운영하고 있기 때문에 Organization으로 선택했습니다. Organization을 선택했다면 위처럼 로고를 업로드할 수 있습니다.

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/009/07.png?raw=true){: .align-center}

마우스 스크롤을 아래로 내리면 운영하고 있는 SNS 또한 입력할 수 있습니다. 저는 페이스북, 인스타그램, 유튜브의 주소를 입력하였습니다. 입력을 마쳤으면 <span style="color:red">Next</span>를 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/009/08.png?raw=true){: .align-center}

4번째 단계는 검색 엔진에 노출시킬 부분을 정하는 부분입니다. 당연히 게시한 글은 Yes로 체크해야 검색 엔진에 노출됩니다. 제 블로그의 홈 화면은 페이지로 만들었기 때문에 페이지도 **Yes**로 체크했습니다. Cloud Templates는 Newspaper 테마를 사용하고 계신 분들에게만 나올 텐데, 이 부분은 테마에만 영향을 주는 부분이기 때문에 **No**를 선택하였습니다. 선택을 하셨으면 <span style="color:red">Next</span>를 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/009/09.png?raw=true){: .align-center}

다음 단계는 웹 사이트의 글쓴이가 여러 명인지를 물어보는 항목입니다. 저는 혼자서 글을 쓰고 있기 때문에 **No**를 선택하였습니다. 선택을 하시고 <span style="color:red">Next</span>를 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/009/10.png?raw=true){: .align-center}

6번째 단계에서는 웹 사이트의 이름을 설정하고, 웹 사이트와 게시글의 구분 문자를 어떤 것으로 정할지 선택하는 부분입니다. 저는 그냥 기본 설정인 '-'로 설정하였습니다. 예를 들어, 홈 화면에서는 페이지 이름이 Home - KEEPMIND 로 나오게 되는 형식입니다. 선택을 하셨으면 <span style="color:red">Next</span>를 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/009/11.png?raw=true){: .align-center}

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/009/12.png?raw=true){: .align-center}

다음으로 Yoast에서 보내는 이메일을 받을 것인지 물어봅니다. 저는 딱히 필요 없을 것 같아 선택하지 않았습니다. 스크롤을 아래로 내리고 <span style="color:red">Next</span>를 클릭합니다.

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/009/13.png?raw=true){: .align-center}

드디어 길고 긴 설정이 끝났습니다. <span style="color:red">Close</span>를 클릭하시면 다시 워드프레스의 관리자 화면으로 돌아갑니다.

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/009/14.png?raw=true){: .align-center}

워드프레스 관리자 화면으로 돌아오시면 SEO 세팅이 끝났다는 메시지가 나옵니다. 이제 글을 쓸 때 SEO가 얼마나 좋은지, 글을 얼마나 잘 썼는지를 알 수 있습니다.

## Yoast SEO 사용 예시

![](https://github.com/JoonsuRyu/images/blob/master/WordPress/009/15.png?raw=true){: .align-center}

글을 작성하실 때 맨 아래로 가시면 위와 같은 SEO 분석이 나옵니다. SEO 탭은 해당 글의 **Focus keyphrase (핵심 문구)**를 적을 수 있고, Focus keyphrase가 얼마나 적절한지 알려줍니다. 아직 입력하지 않았을 경우 위처럼 회색의 원으로 표시됩니다.

가장 많이 신경쓰게 되는 부분은 두 번째 탭인 **Readability**입니다. 이것은 내가 쓴 글이 얼마나 가독성이 좋은지를 나타내는 지표입니다. 티스토리 블로그를 운영할 때는 이런 지표가 없었기 때문에 그냥 되는대로 글을 썼는데, 워드프레스 블로그로 글을 옮길 때 가장 문제가 되었던 부분입니다. Yoast SEO는 문단의 길이가 길면 **Subheading (부제)**를 적을 것과 한 문장에 20개 이하의 단어를 가급적 넘지 말 것을 권고하고 있습니다. Subheading이야 중간중간에 넣으면 되지만, 한 문장에 20개 이하의 단어만 쓰는 것은 굉장히 어려웠습니다. 그래도 SEO 권고 기준을 맞춰야 더 많은 사용자가 방문할 수 있으니, 가급적이면 모든 포스트를 초록색 불이 들어오도록 바꾸는 것이 좋을 것 같습니다.

다만 제가 아무리 글을 다듬어도 초록색 불만 들어오게 하는건 거의 불가능했습니다. 특히, 한 문장에 20개 이하의 단어만 사용하는 것이 어려웠습니다. 제 생각에는 Yoast SEO는 영어 문장을 기준으로 만들어진 것이기 때문에, 한글의 경우 기준이 더 빡빡하게 적용된 것이 아닌가 싶습니다. 또는 한글은 한 문자에 2바이트이기 때문에 그런 것일 수도 있겠습니다. 저는 결국 그 부분은 포기했습니다.