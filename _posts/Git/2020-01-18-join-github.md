---
title: "GitHub 가입하기"
permalink: /git/join-github/
classes: wide
toc: true
toc_label: "Table of Contents"
categories:
  - studies
tags:
  - git
---

Git을 제대로 사용하기 위해서는 원격 저장소가 필요합니다. 원격 저장소를 사용하지 않더라도 Git 기능을 사용할 수는 있지만, 이 경우 다른 컴퓨터에서 작업을 이어 하는 것도 귀찮아지고 무엇보다 남들에게 자신의 결과물을 공개할 수 없습니다. 대표적인 원격 저장소로는 이번 포스트에서 소개할 <span style="color:red">GitHub</span>가 있습니다.

Git 원격 저장소로는 GitHub 외에도 GitLab 등 다른 곳도 몇몇 있으나, 대부분의 개발자들은 GitHub을 사용하고 있으므로, Git을 처음 시작하신다면 GitHub를 사용하시는 게 좋습니다. 특히 최근에는 GitHub 계정이 포트폴리오처럼 사용되기도 하므로, 공부한 흔적을 GitHub 계정에 남기시는 것이 추후 큰 도움이 될 수도 있습니다.

이번 포스트에서는 GitHub에 가입하는 것과 <span style="color:red">Repository (저장소)</span>를 만드는 것까지를 다룰 것입니다. 원래 계획은 Commit과 Push까지 다루려고 했으나, 포스트가 너무 길어져서 그 부분은 다음에 포스팅하도록 하겠습니다.

## GitHub 가입하기

![](/assets/images/Git/002/01.png){: .align-center}

먼저 [GitHub 홈페이지](https://github.com/)에 방문해야 합니다. GitHub 홈페이지의 메인 화면은 페이스북과 유사하게 바로 가입을 할 수 있게 폼이 마련되어 있습니다. 가입 방법도 매우 단순하게 닉네임, 이메일 주소, 비밀번호만 요구합니다. 모두 입력하신 다음, <span style="color:red">Sign up for GitHub</span> 버튼을 클릭합니다.

![](/assets/images/Git/002/02.png){: .align-center}

가입 방법이 단순하다보니 봇을 방지하기 위해 사람인지 테스트하는 간단한 퍼즐이 있습니다. 검증하기 버튼을 누르면 금방 해결할 수 있는 퍼즐 문제가 나오고, 이를 풀면 통과합니다. 퍼즐을 해결하신 후, <span style="color:red">Next : Select a plan</span> 버튼을 클릭합니다.

![](/assets/images/Git/002/03.png){: .align-center}

다음으로는 GitHub의 요금제를 선택하는 부분입니다. GitHub는 무료 서비스와 유료 서비스를 갖고 있는데, 아마 저를 포함해 대부분의 분들은 무료 서비스면 충분할 것입니다. 추후에 전환도 가능하므로, 유료 서비스를 생각하고 계시더라도 일단 무료 서비스를 먼저 사용해 보시는 것을 권장합니다. <span style="color:red">Choose Free</span> 버튼을 클릭합니다.

![](/assets/images/Git/002/04.png){: .align-center}

다음으로는 간단한 설문조사가 있습니다. 유저가 얼마나 프로그래밍을 잘 하는지, GitHub에 가입한 이유는 무엇인지 등등을 묻습니다.

![](/assets/images/Git/002/05.png){: .align-center}

설문조사를 마치신 후, 스크롤을 쭉 내리시면 <span style="color:red">Complete setup</span> 버튼이 있는데, 이걸 누르시면 됩니다. 귀찮으신 분들은 그냥 바로 Skip this step을 누르셔도 무방합니다.

![](/assets/images/Git/002/06.png){: .align-center}

가입을 마치고 나면 위와 같이 이메일 인증이 필요하다고 합니다. 가입 시 입력했던 이메일로 로그인하시면 인증 메일이 도착해 있는 것을 확인할 수 있습니다.

![](/assets/images/Git/002/07.png){: .align-center}

승인 이메일은 위와 같은 내용으로 도착합니다. 바로 가운데에 보이는 <span style="color:red">Verify email address</span> 버튼을 클릭하면 이메일 인증이 완료됩니다.

## 저장소 만들기

![](/assets/images/Git/002/08.png){: .align-center}

승인을 완료하면 바로 저장소(Repository)를 만드는 화면으로 넘어갑니다. 저장소는 일반적으로 프로젝트와 거의 동일한 의미입니다. 보통 저장소 하나에 프로젝트 하나를 담는다고 생각하시면 됩니다. 저장소에는 이름이 반드시 필요하며, 위의 Repository name 부분에 입력하시면 됩니다.

공개 프로젝트의 경우 방문자를 위해 Description을 작성할 수도 있는데, 이는 필수가 아니므로 개인 프로젝트 용도라면 적지 않으셔도 무방합니다. 일단은 저는 테스트용도로 저장소를 하나 만드려고 합니다. 저는 테스트 용이라서 test라고 이름을 지었습니다. 이름 입력을 완료하신 후, <span style="color:red">Create repository</span> 버튼을 클릭합니다.

![](/assets/images/Git/002/09.png){: .align-center}

저장소를 만드는 방법은 이것이 끝입니다. 저장소를 만들고 나면 위처럼 저장소의 주소와 어떻게 저장소에 push를 하는 지 설명하는 안내문이 나옵니다. 다음 포스트에 이어서 Commit과 Push하는 방법을 다루도록 하겠습니다.