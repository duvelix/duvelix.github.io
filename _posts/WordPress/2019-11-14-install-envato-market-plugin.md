---
title: "Envato Market 플러그인 설치하기"
permalink: /wordpress/install-envato-market-plugin/
classes: wide
toc: true
toc_label: "Table of Contents"
toc_sticky: true
categories:
  - studies
tags:
  - wordpress
---

워드프레스 유료 테마는 굉장히 자주 업데이트가 이루어집니다. Newspaper 같은 경우는 1년에 한번 정도 메이저 업데이트, 그 외에는 비정기적으로 마이너 업데이트가 제공됩니다. 테마를 업데이트하기 위해서는 FTP에 파일을 직접 업로드하는 것이 일반적인 방법인데, 이것이 여간 귀찮은 것이 아닙니다. 그렇기 때문에 Envato Market에서는 워드프레스 플러그인으로 이것을 편하게 해주는 방법을 제공합니다. 초기 설정이 조금 귀찮긴 하지만, 한번만 설정해 놓으면 그 이후로는 워드프레스 관리자 페이지에서 업데이트를 할 수 있기 때문에, 저는 이 방법을 사용해보기로 했습니다.

## Envato Market 플러그인 다운로드

![](/images/WordPress/7. Install Envato Market Plugin/WP 07-01.png){: .align-center}

가장 먼저 Envato Market에서 제공하는 플러그인을 받아야 합니다. 아쉽게도 워드프레스 플러그인 메뉴에서 검색으로는 찾을 수 없고, 공식 홈페이지에서 직접 받아 업로드해야 합니다. 접속하신 후, Download Latest Version 버튼을 클릭하시면 바로 다운로드를 받을 수 있습니다.

![](/images/WordPress/7. Install Envato Market Plugin/WP 07-02.png){: .align-center}

바탕화면에 위와 같은 압축파일을 받을 수 있습니다. 압축을 풀지 마시고 이 상태로 놔둡니다.

## Envato Market 플러그인 설치하기

![](/images/WordPress/7. Install Envato Market Plugin/WP 07-03.png){: .align-center}

플러그인 파일을 받은 후 워드프레스 관리자 화면으로 들어와서, 왼쪽 메뉴의 플러그인에 마우스를 올리면 서브 메뉴가 펼쳐집니다. 새로 추가를 클릭합니다.

![](/images/WordPress/7. Install Envato Market Plugin/WP 07-04.png){: .align-center}

플러그인을 직접 업로드하기 위해, 플러그인 업로드 버튼을 클릭합니다.

![](/images/WordPress/7. Install Envato Market Plugin/WP 07-05.png){: .align-center}

버튼을 누르시면, 파일을 업로드할 수 있는 화면이 나옵니다. 파일 선택 버튼을 눌러, 아까 받은 Envato Market 플러그인 압축 파일을 업로드합니다.

![](/images/WordPress/7. Install Envato Market Plugin/WP 07-06.png){: .align-center}

업로드가 완료되면, 지금 설치 버튼을 클릭합니다.

![](/images/WordPress/7. Install Envato Market Plugin/WP 07-07.png){: .align-center}

잠시 기다리시면 플러그인 설치가 완료됩니다. 플러그인 활성화 버튼을 클릭합니다.

![](/images/WordPress/7. Install Envato Market Plugin/WP 07-08.png){: .align-center}

플러그인이 활성화되면, 왼쪽 메뉴에 Envato Market 이라는 새로운 메뉴가 추가된 것을 볼 수 있습니다. Envato Market 메뉴를 클릭합니다.

## Envato Market 플러그인 활성화하기

![](/images/WordPress/7. Install Envato Market Plugin/WP 07-09.png){: .align-center}

Envato Market 메뉴를 들어가시면, Envato Market 계정과 연동을 지어야 한다고 나옵니다. 계정 연동을 시키기 위해선 토큰을 받아야 하는데, 가운데의 clicking this link를 클릭합니다.

![](/images/WordPress/7. Install Envato Market Plugin/WP 07-10.png){: .align-center}

Envato Account 페이지가 나옵니다. 지난번에 테마를 구입할 때 가입했던 아이디와 비밀번호를 넣으시고 로그인하시면 됩니다.

![](/images/WordPress/7. Install Envato Market Plugin/WP 07-11.png){: .align-center}

토큰을 생성하는 화면이 나오는데, 토큰 이름을 입력해야하고 어떤 권한을 줄 것인지 정해주어야 합니다. 토큰 이름은 아무거나 상관 없습니다. 여기서는 My WordPress site로 입력하겠습니다.

![](/images/WordPress/7. Install Envato Market Plugin/WP 07-12.png){: .align-center}

스크롤을 조금 내리시면 권한을 정할 수 있는데, 반드시 체크해야될 부분은 Download the user's purchased items와 List purchases the user has made입니다. 나머지는 굳이 체크할 필요가 없습니다.

![](/images/WordPress/7. Install Envato Market Plugin/WP 07-13.png){: .align-center}

맨 아래로 내리신 후, 약관에 동의한다는 체크를 하시고 Create Token 버튼을 클릭합니다.

![](/images/WordPress/7. Install Envato Market Plugin/WP 07-14.png){: .align-center}

토큰이 생성된 것을 확인할 수 있습니다. 가운데에 나온 토큰을 잘 복사해 놓습니다. (메모장 같은 곳에 붙여놓으시는 것이 좋습니다.) 그리고 아래에 체크를 하고 Woohoo! Got it. 버튼을 클릭합니다.

![](/images/WordPress/7. Install Envato Market Plugin/WP 07-15.png){: .align-center}

다시 워드프레스 관리자 화면으로 돌아와, 복사한 토큰을 붙여넣고 아래의 Save Changes 버튼을 클릭합니다.

![](/images/WordPress/7. Install Envato Market Plugin/WP 07-16.png){: .align-center}

또는 오른쪽의 Add Item 버튼을 클릭하셔도 됩니다.

![](/images/WordPress/7. Install Envato Market Plugin/WP 07-17.png){: .align-center}

버튼을 클릭하시면 위와 같은 팝업이 뜨는데, 이 곳에도 마찬가지로 토큰을 붙여넣고, Item ID에 테마의 Item ID를 입력하시면 됩니다. 참고로 Newspaper 테마의 Item ID는 5489609 입니다. 입력을 다 하셨다면 Save 버튼을 클릭합니다.

## Newspaper 테마 업데이트하기

![](/images/WordPress/7. Install Envato Market Plugin/WP 07-18.png){: .align-center}

저는 보여드리기 위해 두 개를 모두 다 등록했지만, 둘 중 하나만 등록하셔도 상관 없습니다. 토큰을 성공적으로 활성화했다면 위에 Themes 탭이 추가되는데, 이 탭을 클릭합니다.

![](/images/WordPress/7. Install Envato Market Plugin/WP 07-19.png){: .align-center}

제가 Newspaper 테마를 처음 설치했을 때의 버전은 9 버전이었는데, 이 Envato Market 플러그인을 설치하던 시점에는 10 버전으로 업데이트 되었습니다. 만약에 새로운 패치 버전이 나왔다면, Update Available을 클릭하시면 됩니다.

![](/images/WordPress/7. Install Envato Market Plugin/WP 07-20.png){: .align-center}

테마 업데이트는 완료했는데, 메이저 업데이트이다보니 9버전에서 사용하던 Newspaper 플러그인이 호환이 되질 않습니다. plugin section 버튼을 클릭하시면 플러그인을 업데이트 할 수 있는 화면으로 넘어갑니다.

![](/images/WordPress/7. Install Envato Market Plugin/WP 07-21.png){: .align-center}

깜빡하고 업데이트 하기 전의 화면을 캡쳐하지 못했는데, 문제가 생긴 플러그인은 UPDATE 버튼이 생길 것입니다. 그 버튼을 누르시면 플러그인이 최신 버전으로 업데이트되고, 테마 업데이트의 모든 과정이 끝나게 됩니다.

![](/images/WordPress/7. Install Envato Market Plugin/WP 07-22.png){: .align-center}

Newspaper 메인 화면으로 가면 10.1 버전으로 업데이트가 된 것을 볼 수 있습니다.