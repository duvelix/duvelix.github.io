---
title: "Branch 병합하기"
permalink: /git/merge-branch/
classes: wide
toc: true
toc_label: "Table of Contents"
toc_sticky: true
categories:
  - studies
tags:
  - git
---

지난 포스트에서 브랜치가 무엇인지 알아보고, 어떻게 만드는지도 알아보았습니다. 만약 브랜치에서 추가한 기능을 원래의 프로젝트(마스터 브랜치)에 반영하고 싶을 때는 굳이 마스터 브랜치를 직접 수정할 필요 없이, 병합(Merge)라는 기능을 통해 간단하게 해결할 수 있습니다.

## 브랜치 병합하기

![](/images/Git/5. Merge Branch/Git 05-01.png){: .align-center}

브랜치를 병합하려면 먼저 마스터 브랜치 외의 다른 브랜치가 있어야 합니다. 저는 지난 포스트에서 만들었던 another 브랜치를 사용하려고 하는데, 만약 위와 같은 화면에서 마스터 브랜치 하나만 있는 경우에는 아래의 포스트를 참고해서 다른 브랜치를 먼저 만드시기 바랍니다.

- [Git] 4. Branch 사용하기

![](/images/Git/5. Merge Branch/Git 05-02.png){: .align-center}

먼저 항상 하던 것처럼 Git Bash 창을 열도록 합니다. `git branch` 명령어를 입력하면 존재하는 모든 브랜치의 목록을 볼 수 있습니다. 초록색으로 표시된 브랜치는 현재 작업 중인 브랜치를 의미합니다.

![](/images/Git/5. Merge Branch/Git 05-03.png){: .align-center}

another 브랜치에서 변경한 사항을 master 브랜치에 적용하려고 합니다. 이 때, "적용받을" 브랜치를 기준으로 작업해야 합니다. 그렇기 때문에 작업하는 브랜치를 master 브랜치로 이동해야 합니다. 작업할 브랜치를 이동하려면 `git checkout (브랜치이름)` 명령어를 입력하시면 됩니다. 이 명령어를 입력하고 나면 오른쪽에 하늘색 글씨로 (another) 이라고 나와있는 부분이 (master) 라고 변한 것을 알 수 있습니다.

![](/images/Git/5. Merge Branch/Git 05-04.png){: .align-center}

이제 병합하는 일만 남았습니다. 다른 브랜치의 내용을 현재 브랜치에 적용하기 위해서는 `git merge (브랜치이름)` 명령어를 입력하면 됩니다.

![](/images/Git/5. Merge Branch/Git 05-05.png){: .align-center}

병합 명령어를 실행시키니 작업하던 HelloWorld.java 파일이 변경되었다는 메시지가 출력됩니다.

![](/images/Git/5. Merge Branch/Git 05-06.png){: .align-center}

'병합' 이라는 어감으로 인해 병합을 하게 되면 another 브랜치가 없어지는 것처럼 생각할 수도 있지만, 실제로는 another 브랜치가 사라지지 않고 그대로 남아있습니다.

![](/images/Git/5. Merge Branch/Git 05-07.png){: .align-center}

![](/images/Git/5. Merge Branch/Git 05-08.png){: .align-center}

![](/images/Git/5. Merge Branch/Git 05-09.png){: .align-center}

![](/images/Git/5. Merge Branch/Git 05-10.png){: .align-center}

병합된 것을 확인하려면 git push 명령어까지 실행시켜주어야 합니다. 푸시를 하고 난 뒤, GitHub에서 파일을 확인해보시면, master 브랜치에 another 브랜치에서 작업했던 내용이 반영된 것을 알 수 있습니다.

## 브랜치 병합 시 충돌이 발생하는 경우

간혹 브랜치 병합 시 충돌이 일어나는 경우가 있습니다. 이런 문제는 보통 마스터 브랜치와 다른 브랜치를 같이 수정하는 경우 발생합니다. 어떤 경우에 충돌이 발생하는지 보여드리기 위해 고의적으로 충돌이 발생하는 상황을 만들어 보겠습니다.

![](/images/Git/5. Merge Branch/Git 05-11.png){: .align-center}

먼저 master 브랜치에서 HelloWorld.java 파일을 수정해보도록 하겠습니다. 간단하게, 이것은 마스터 브랜치에서만 볼 수 있다는 메시지를 출력하는 프로그램으로 변경해 보았습니다. 수정한 뒤, 파일을 저장합니다.

![](/images/Git/5. Merge Branch/Git 05-12.png){: .align-center}

master 브랜치에서 변경한 내용을 반영하기 위해 `git commit` 을 사용하여 커밋합니다.

![](/images/Git/5. Merge Branch/Git 05-13.png){: .align-center}

이번에는 another 브랜치로 이동하여 역시 HelloWorld.java 파일을 수정하겠습니다. master 브랜치에서 수정했던 것과 비슷하지만 다르다는 것을 알 수 있도록 수정했습니다.

![](/images/Git/5. Merge Branch/Git 05-14.png){: .align-center}

수정을 마친 후에 저장 후 커밋까지 완료합니다.

![](/images/Git/5. Merge Branch/Git 05-15.png){: .align-center}

이 상태에서, master 브랜치와 another 브랜치를 병합해보도록 하겠습니다. 결과를 보기 전에 생각해보면, master 브랜치와 another 브랜치에서 같은 파일, 같은 부분을 수정했기 때문에 "병합"을 수행하기 어렵다는 것을 눈치챌 수 있습니다.

![](/images/Git/5. Merge Branch/Git 05-16.png){: .align-center}

생각했던대로, 병합에서 충돌이 일어났다고 경고 메시지가 출력됩니다. 병합을 완료하려면, 충돌이 일어난 부분을 사용자가 직접 수정해주어야 합니다.

## 브랜치 병합 시 충돌 해결하기

![](/images/Git/5. Merge Branch/Git 05-17.png){: .align-center}

충돌이 발생하게 되면 Git 설치 시 선택했던 편집기로 충돌이 일어난 파일이 열리게 됩니다. 위의 스크린샷을 보시면 충돌이 일어난 부분이 표시되어 있습니다.

![](/images/Git/5. Merge Branch/Git 05-18.png){: .align-center}

이런 경우에는 파일을 직접 수정해주어야 합니다. <<<<<< ~ >>>>>> 구간을 수정한 다음, 저장하고 파일을 닫으면 끝납니다.

![](/images/Git/5. Merge Branch/Git 05-19.png){: .align-center}

병합 충돌 부분이 해결되었다는 메시지가 나옵니다. 푸시를 해서 확인해보면, 무사히 병합이 수행된 것을 확인할 수 있습니다.