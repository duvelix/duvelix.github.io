---
title: "닌텐도 스위치에서 5Ghz Wi-Fi 사용하기"
permalink: /Console/nintendo-switch-5ghz-wi-fi/
classes: wide
thumbnail: /assets/images/Console/002/00.jpg
categories:
  - interests
tags:
  - console
---

![](/assets/images/Console/002/00.jpg){: .align-center}

요즘 출시되는 공유기는 대부분 2.4Ghz와 5Ghz의 주파수 대역을 지원합니다. 공유기와 기기 사이의 거리가 가깝다면 5Ghz의 속도가 빠르기 때문에 5Ghz 대역폭을 주로 사용하실텐데, 스위치 물론 2.4Ghz와 5Ghz의 주파수 대역을 지원하기 때문에 거리만 가깝다면 5Ghz의 대역폭을 사용하는 것이 좋습니다. 그러나 스위치의 인터넷 설정을 보면 5Ghz 대역폭이 기본적으로 검색이 되지 않는데, 한국에서의 제어 채널이 다른 나라와 다르기 때문에 공유기의 설정을 바꿔줘야만 5Ghz 대역폭을 사용할 수 있습니다. 저는 ASUS 공유기를 기준으로 설명드리겠지만, 대부분의 공유기가 비슷한 설정을 갖고 있을테니 꼭 ASUS 공유기가 아니더라도 도움이 되리라 생각합니다.

![](/assets/images/Console/002/01.jpg){: .align-center}

먼저 공유기에 접속이 된 기기로 라우터에 접속해야 합니다. 아수스 공유기에서 관리자 모드로 들어가시려면 주소창에 **192.168.1.1**을 입력하시고 <span style="color:red">Enter</span>를 누르시면 됩니다. 그러면 위와 같이 관리자 계정으로 로그인 하는 화면이 뜹니다.

![](/assets/images/Console/002/02.jpg){: .align-center}

관리자 계정의 아이디와 비밀번호를 치고 들어가신 다음 왼쪽의 메뉴에서 **고급 설정** 첫번째에 있는 <span style="color:red">무선</span>을 클릭하시고, 상단의 <span style="color:red">고급사용자용</span> 탭으로 이동합니다.

![](/assets/images/Console/002/03.jpg){: .align-center}

**고급사용자용** 탭에서 맨 아래의 지역을 보시면 기본적으로 <span style="color:red">Korea (default)</span>로 설정되어 있습니다. 이것을 변경해주어야 합니다.

![](/assets/images/Console/002/04.jpg){: .align-center}

이렇게 **United States**로 바꿔주신 뒤, 아래의 <span style="color:red">적용</span> 버튼을 누릅니다.

![](/assets/images/Console/002/05.jpg){: .align-center}

적용 버튼을 누르면 위와 같이 기다리라는 창이 뜹니다. 환경에 따라 다르지만 대략 1~2분 정도 기다리시면 되는데, 이 때는 사용하고 있는 인터넷이 모두 끊기니 중요한 작업은 적용 버튼을 누르기 전에 미리 저장하시기 바랍니다. 작업이 완료되면 관리자 계정은 자동으로 로그아웃된 후 첫 번째 그림과 같은 화면이 뜨니, 다시 로그인을 해주셔야 합니다.

![](/assets/images/Console/002/06.jpg){: .align-center}

다시 로그인을 하신 다음 똑같이 **고급 설정**의 **무선**으로 가셔서 이번에는 <span style="color:red">일반</span> 탭으로 이동합니다. 일반 탭을 보시면 아래에 **제어 채널**이라는 부분이 있는데, 이것이 아마 자동 혹은 149로 설정되어 있을겁니다. 이것을 **40**으로 변경하신 다음, 아래의 <span style="color:red">적용</span> 버튼을 누릅니다.

![](/assets/images/Console/002/07.jpg){: .align-center}

지금까지의 과정을 성공적으로 따라오셨다면 스위치에서 5Ghz 대역폭을 사용하기 위한 설정이 모두 끝났습니다. 스위치의 인터넷 설정으로 가시면 이전과 다르게 5Ghz 대역폭이 잡히는 것을 볼 수 있습니다.

솔직히 저의 경우에는 5Ghz로 설정을 바꿨을 때 속도가 크게 체감이 되지는 않았습니다. 저는 슈퍼 마리오 메이커 2에서 저의 인터넷 속도가 문제가라고 뜨면서 온라인 매칭이 잡히지 않아 5Ghz로 바꿔본 것인데, 바꾼 후에도 동일한 증상이 발생하였습니다. 다만 스위치에서 eShop으로 게임을 구매하시는 분들은 컨텐츠를 다운받을 때 체감이 크다고 하니, DL로 게임을 자주 구입하신다면 5Ghz 대역폭으로 설정해 두시는게 편할 것 같습니다.