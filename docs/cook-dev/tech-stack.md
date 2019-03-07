# Tech Stack <Badge text="jwkim2"/>

::: warning
작성중입니다.
:::

저희 팀에서 사용하는 기술 스택에 대하여 왜 각 기술들을 선택하였는지에 대하여 설명합니다.

## SCM(Source Code Management)

SCM 의 경우는 **Git**을 사용합니다.<br>
아직도 CVS, SVN등을 SCM 메인으로 쓰고 있다면 해당 팀 탈출을 권장 드립니다. (ㅠㅠ) 예전 회사에 타팀 개발자분이 "우리팀은 딱히 버전 관리를 안하니까 Git 까지 필요 없고 SVN 정도면 되는거 아니야?" 라고 하시길래, 제가 "Git을 포기하시면 버전 관리를 포기하는 것이 아니고 Git과 연결된 모든 생태계를 포기하는 것입니다." 라고 했는데 당시 마음에 와닫지는 않았던것 같습니다. Git이 소스코드 버전 관리용도로만 알고 계시면 큰 착각입니다. 오픈 소스 최대 생태계인 GitHub, NPM, Docker Hub 등등 이 모든 서비스들이 Git을 기반으로 하고 있고 DevOps 의 CI/CD 도 Git을 기반으로 하고 있습니다. Git을 안쓴다는 말은 그 거대한 모든 생태계를 모두 포기한다는 것과 동일하다고 해도 과언이 아닙니다.(물론 Git을 몰라도 NPM, Docker 등을 활용 할 수 있지만, 제대로 활용하기 위해서는 Git이 필수적입니다.)

### Git (클라우드) 서비스

Git은 어찌보면 단순히 도구에 불과할 뿐이고 실질적으로 Git을 사용하게 되면 Git을 호스팅(?) 해주는 서비스를 선택해야 합니다. Git 이라는 것인 기본적으로 로컬에서 돌아가지만 팀으로 작업을 하기 위해서는 Remote Repository 필요합니다. 이를 호스팅 또는 운영 해주는 대표적인 서비스는 [GitHub](https://http://github.com), [GitLab](https://http://gitlab.com), [BitBucket](https://bitbucket.org) 이 있습니다.

#### 주요 Git 클라우드 서비스 비교

| | GitHub | GitLab | BitBucket |
| - | - | - | - |
| 특징 | 오픈 소스 최대 허브<br>NPM, Docker Hub등 타 오픈 소스 생태계와 연결되어 있음 | 서비스 자체가 오픈 소스 | Jira, Confluence 등 [Atlassian](https://www.atlassian.com) 계열 서비스들과 연동이 편리 |
| Public Repo  | 무료 | 무료 | 무료 |
| Private Repo | **Free**<br>없음<br><br>**Individuals**<br>$7/user/month<br><br>**Teams**<br>$9/user/month<br>Starts at $25 / month and includes your first 5 users<br><br>**Enterprise**<br>$21/user/month<br>Self-hosted or cloud / month and includes your first 5 users | **Free**<br>$0/user/month<br>CI 2000 mins /group/month<br><br>**Bronze**<br>$4/user/month<br>CI 2000 mins /group/month<br><br>**Silver**<br>$19/user/month<br>CI 10,000 mins /group/month<br><br>**Gold**<br>$99/user/month<br>CI 50,000 mins /group/month<br><br> | **Free**<br>$0/user/month<br>Up to 5 users<br>CI 50 mins/month<br><br>**Standard**<br>$2/user/month<br>Start at $10/month<br>CI 500 mins/month<br><br>**Premium**<br>$5/user/month<br>Start at $25/month<br>CI 1000 mins/month<br><br> |
| Self-hosted  | **Enterprise Plan**<br>$21/user/month | **오픈 소스(무료)** | **유료(라이선스)**<br>$10/up to 10 users<br>$2500/up to 25 users<br>$4500/up to 50 users<br>$8300/up to 100 users<br>$16,500/up to 250 users |

Git 클라우드 서비스들이 지원하는 내용은 다 비슷비슷하기 때문에 서비스상의 큰 차이는 없습니다. 단, 오픈 소스의 경우 이미 대부분의 오픈 소스 생태계가 GitHub를 중심으로 구축이 되어 있기 때문에 GitHub를 사용해야 합니다. 실질적으로 어떤 Git 서비스를 선택하여야 하나는 이어지는 CI와 함께 알아보도록 하겠습니다.

## CI/CD

DevOps 개발 환경과 더불어 요즘 CI/CD는 필수 사항입니다.(현재 CI/CD 를 안쓴다고 해당 회사를 탈출하라고까지 권하진 않겠습니다. 다만, 팀장급이나 CTO가 활용 할 줄 모른다면 탈출 하시기 바랍니다.)
여지껏 CI/CD 를 활용하지 않고 DevOps 와 친숙하지 않다고 하더라도 차후 연재 될 DevOps 및 CI/CD 포스팅을 보시고 적극 활용하시기를 바랍니다.

CI/CD 서비스를 비교하기 위해서는 우선 CI/CD 가 무엇인지를 알아야 하기에 아직 개념이 익숙하지 않는 분들을 위해 간단히 설명드리겠습니다.<br>

**CI(Continuous Integration)** : 지속적인 통합<br>
**CD(Continuous Delivery)** : 지속적인 배포

쉽게 설명하면, **자동으로 여러 시스템이 통합이 되고 배포가 된다.**<br>
영문 표현의 지속적이라는 단어 보다는 사실 **자동으로**가 더 중요한 부분인 것 같아 수정하였습니다. 그럼 무엇이 통합이되고 무엇이 배포가 어떤 식으로 된다는거지? 라는 의문을 가지게 될 것입니다. 구체적인 사래를 들어서 설명하겠습니다.

A라는 웹 개발자는 작업이 완료되면, 변경 사항을 Change Log 라는 파일에 기입하고 버전을 올리고 [gulp](https://gulpjs.com) 또는 [webpack](https://webpack.js.org/)을 통해서 웹소스를 번들링하고 번들링 된 파일을 ftp 를 열어서 서버에 업로드를 하고 업로드가 완료되면 Blue/Green 배포를 하기 위해 기존의 소스와 업데이트한 소스의 라우팅을 스왑합니다. 팀원들에게 공지를 하기 위해서 Slack 을 열어서 관련된 채팅방을 찾고 해당 방에 업데이트 사항을 공유합니다.

B라는 앱 개발자는 작업이 완료되면, 안드로이드와 iOS를 각각 빌드하고 각 빌드가 완료될때까지 기다렸다가 완료가 되면 구글 플레이 스토어와 앱스토어를 각각 열고 업데이트 파일을 일일히 올리고 마찬가지로 변경사항을 기록하고 팀원들에게 Slack 으로 공지를 합니다.

중요한건 이런 일을 둘다 개발중에 수백번 이상하게 된다는 것입니다.

다음은 CI/CD를 사용하는 경우입니다.

A,B 둘다 git에 커밋 합니다. **끝입니다.** 위에 언급한 모든 일련의 과정들이 자동화 되어 최종적으로 Slack 에 공유가 되고 배포 실패의 경우도 배포 실패 사유와 함께 알림이 옵니다.

이것이 CI/CD 를 사용하는 이유입니다. 이 모든 과정이 어떻게 자동화 되는거지? 궁금하실 수 있는데 CI/CD 는 일반적으로 CI 서버가 소스를 받고 소스와 동봉된(?) 스크립트를 실행하게 되어 있습니다.
스크립트는 bash 가 될 수도 있고, node, PowerShell등 설정한 환경에 따라서 무엇이든 될 수 있습니다. 스크립트를 실행하게 된다는 것은 스크립트내에서 내가 하고 싶은 무엇이든 할 수 있다는 뜻이 됩니다.
그것이 문서를 갱신하거나 FTP 에 업로드를 하거나 스토어에 배포하는 등 원하는 자동화 내용을 명시하기만 하면 됩니다.
사실 어짜피 통합과 배포가 같이 이루어짐으로 CI와 CD를 따로 생각하는 것이 큰 의미가 없기에, 앞으로는 CI라고만 표현하도록 하겠습니다. (CI 활용법 차후 포스팅 하겠습니다.)

### CI 서비스 비교

CI 라는 것이 사실 특정 서비스에 종속적인 것은 아니나 각 Git 서비스별로 해당 서비스에서 공식으로 지원하거나 Git 서비스 자체에 내장되어 있는 CI 서비스들이 있습니다.
다음은 주요 CI 서비스 비교입니다.

|         | Travis       | GitLab CI | BitBucket Pipeline | Jenkins |
| ------- | ------------ | --------- | --------------------------- | ------- |
| Git 서비스 | GitHub       | GitLab    | BitBucket                   | 없음      |
| 특징 | iOS 빌드 지원 | Self hosted CI Runner 지원 | Atlassian 연동 용이 | 인프라 배포 가능 |
| Build Script <br>소스에 포함 | 포함 | 포함 | 포함 | 미포함 |
| 가격      | **무료**<br>오픈소스만 해당<br><br>**Bootstrap**<br>$69/month<br>1 Concurrent job<br><br>**Startup**<br>$129/month<br>2 Concurrent job<br><br>**Small Business**<br>$249/month<br>5 Concurrent job<br><br>**Premium**<br>$489/month<br>10 Concurrent job<br><br> | Plan별 기본 제공 시간 + <br>Self hosted CI Runner(무료) | Plan별 기본 제공 시간 + <br>$10/month for 1000 mins | 설치형으로 빌드에 따른 비용이 없고 직접 호스팅하는 비용 |
| Self Hosting | 불가 | 가능 | 불가 | 가능 |
<small>Butbucket 의 Self Hosting CI Bamboo 는 제외하였습니다.</small>

CI 서비스 또한 Git 서비스들 처럼 큰 차이를 가지고 있지는 않습니다만 약간의 서로다른 특징들을 보유하고 있습니다.

#### Travis

GitHub 와 별도의 서비스로 존재하나 GitHub와 연동이 거의 원클릭 수준으로 편리하게 되어 있고 Hook 등의 별도 설정을 하지 않아도 자동으로 인식합니다. 원래 별도 회사였다가 GitHub에서 인수한 것으로 알고 있습니다.(GitHub는 최근에 MS 가 인수하였습니다.) 클라우드 서비스 중에서는 Travis 만이 유일하게 iOS 빌드를 지원합니다. Self Hosting 경우 직접 Mac에 설치하면 iOS 빌드가 가능합니다만 클라우드상에서 iOS 빌드를 바로 뽑아 내고 싶다고하면 Travis 가 유일합니다. 오픈 소스용 무료 [travis.org](https://travis.org) 와 Private Repo 를 위한 유료 [travis.com](https://travis.com) 을 별도로 운영하고 있고 내용상은 동일합니다. Travis는 설치형을 지원하고 있지 않습니다.

#### GitLab CI

GitLab 서비스에 내장되어 있습니다. GitLab CI 만이 유일하게 Runner 를 직접 호스팅 할 수 있게 지원합니다. Runner란 repo로 부터 소스를 받고 해당 스크립트를 돌리는 작업을 하는 역할을 합니다. 타 서비스들은 CI가 돌아가는 Runner 들을 서비스들이 직접 호스팅을 하고 있으나 GitLab의 경우 Shared Runner 를 이용하여 Plan 에 해당하는 만큼 사용할 수 있고 별도의 나만의 Dedicate Runner 를 두어서 추가로 이용하거나 더 높은 성능 혹은 자사에 특화 된 환경에서 실행을 할 수 있게 지원하고 있습니다. 이는 단순히 Runner 만 별도 운영함으로써 무제한 고성능 CI를 활용 할 수 있게 됩니다. GitLab 설치형 서비스와 해깔릴 수가 있는데 GitLab을 설치할 경우 CI는 내장되어 같이 설치가 되고, 굳이 설치를 하지 않고 GitLab의 클라우드 서비스를 사용하면서도 Runner 만 따로 빼서 운용 할 수도 있습니다.

#### BitBucket Pipeline

BitBucket 서비스에 내장되어 있습니다. 솔직히 GitLab에 비해서 Plan 별로 주어지는 CI 시간이 너무 짭니다.(ㅠㅠ) GitLab Free Plan으로 기본 2,000분/월의 시간을 주는데, BitBucket은 50분/월뿐이 안됩니다. 유료 Plan 으로 올려도 500분/월 뿐이 되지 않습니다. 게다가 추가 1000분당 $10 를 지불해야 합니다. 안정적으로 호스팅해주고 서버들 운영해주고 그런 클라우드 서비스를 쓰는 입장에서 해당 가격이 부당하다고 생각이 되지는 않으나 GitLab 에 비해서 너무 짜다보니 비교가 될 수 밖에 없습니다. BitBucket 에도 설치형 CI Bamboo 라는 것이 존재하는데 유료임에 불구하고 무료인 Jenkin 나 GitLab CI 에 비해서 딱히 장점이 없어서 따로 명시하지 않았습니다.

#### Jenkins

Jenkins는 JAVA 기반의 오픈 소스로서 CI의 아버지로 봐도 무방합니다. 사실 CI들이 이만큼 발전한 것은 Jenkins 의 공이 큽니다. 예전에 Git 클라우드 서비스들이 CI를 내장하고 있지 않을때부터 시작하여 다양한 환경을 통합하고 빌드 자동화를 지원하기 시작했고 많은 사람들이 사용하기 시작하면서 CI/CD 에 대한 인식을 많이 퍼트리는 역할을 했습니다. 제일 오래 되었기 때문에 여전히 사용자도 많고 다양한 플러그인들이 존재합니다.

보통 CI 라는고 하면 Jenkins 를 많이 떠올리고 실제로 많이들 사용하시는데 사실 다른 CI 서비스들 제대로 써본적이 없고 다들 Jenkins, Jenkins 하니깐 그냥 시작하는 경우를 많이 보았습니다.
하지만 현재 Git 클라우드 서비스에서 제공하는 CI 들의 수준도 높아지고 사용성도 편리해져서 정말 Jenkins 가 필요해서 쓰는 상황이 아니라면 추천하고 싶지는 않습니다.(자세한 이유는 다음 단락에 나옵니다.)

### Git 및 CI 서비스 정리

필자는 상위 언급한 Git 서비스 뿐 아니라 MS등 다른 Vendor 들 서비스와 설치형 Git 서비스들 및 언급한 모든 CI 와 CI 전용 타 Vendor 까지 모두 직접 설치 또는 설정 운영해서 사용해본 결과,
각 서비스별 장단점 및 선택의 이유가 몇가지로 정리 되어 있습니다.

우선 사내 인프라팀이 따로 존재하는 경우를 제외하고 Self Hosting 은 잘 사용하지 않습니다. 인프라를 직접 구축할 경우, 본 작업인 프로젝트 개발에 쏟아야 할 시간을 인프라 설치, 운영, 관리 쪽으로 분산 되게 됩니다. 공용 인프라 팀이 IDC를 통해서 제대로 인프라를 관리하지 않고 사내에서 간의로 인프라를 구축하여 사용하다가 물리적인 서버가 고장이 나거나 정전이 나거나 회사가 이사를 가는 등 다양한 형태에 의해서 개발에 쏟아야 할 시간이 분산됩니다. 인프라팀이 구축을 하더라도 제대로된 보안을 위해서는 VPN 등을 통해서만 사내 인프라가 접근이 가능하게끔 해야 하는데 그 정도가 갖춰져 있지 않다면 클라우드를 사용하는 것과 큰 차이가 없습니다. 비용적인 측면에서도 무료로 사용 할 수 있는 클라우드 서비스들이 있기 때문에 굳이 감가상각이 들어가는 장비를 구매하여 사용할 이유가 없습니다. 클라우드 서비스라고 문제가 없겠냐만은 직접 운영하는 것보다 사고가 적고 대응도 빠릅니다. Git과 CI 같이 개발의 코어적인 부분은 최대한 안정성을 확보해야 하기 때문에 클라우드 서비스를 선택하였습니다.(물론 인프라팀에서 제공해주면 "땡큐"하고 사용합니다. 망분리의 경우는 당연히 설치형입니다. 혹시나 AWS등에 인프라를 구축해서 사용중이면 직접 운영보다 돈 많이 나옵니다.)

CI에서 Build Script 가 소스코드에 포함되지 않는 서비스는 제외합니다. Travis, GitLab CI 는 소스코드상에 빌드에 필요한 스크립트를 포함시키도록 되어 있습니다. 소스 코드에 Build Script 가 포함되어 있으면 Git에 의해 자연스럽게 버전 관리가 되어 집니다. Git으로 예전 소스를 돌려본다고 해도 해당 시점의 빌드 환경을 스크립트에서 그대로 있어 재현이 가능합니다. Jenkins 의 큰 단점은 소스 따로 빌드 스크립트 따로 라는 점입니다. 소스는 Git에 있고 빌드에 대한 스크립트 및 환경은 Jenkins 에 있습니다. Jenkins 서버가 날라가 버리면 빌드 환경도 읽어 버리게 됩니다. 물론 Jenkins 도 별도의 백업이 가능하나 소스에 자연스럽게 해당 버전에 맞는 빌드 스크립트가 들어가있는 것과는 비교 할 수가 없습니다.(지금은 Jenkins 도 플러그인을 통해 소스코드의 빌드 스크립트를 활용 할 수 있다는 것 같긴 한데 확인해 보지는 않았습니다.) Build Script 가 소스코드에 같이 있고 클라우드 서비스를 사용하고 있으면 CI 의 Vendor 교체도 매우 쉬워집니다. 예를 들면, Travis CI 와 GitLab CI는 Build Script의 양식이 비슷합니다. 약간의 포멧만 수정하면 GitLab 에서 돌던 CI를 Travis 에서 돌릴수도 있고 반대도 가능하고 동시에도 가능합니다. 한쪽에 장애가 생겨도 다른 쪽 활용이 가능하며, 완전히 이전에도 비용이 크지 않습니다.

Git 클라우드 서비스에 종속된 CI를 사용합니다. Jenkins 의 경우 설치하고 각 개별 서비스들과 인증하고 Hook 설정하고 번거롭습니다.(물론 플러그인이 다 해주지만) Travis 는 원클릭 인증, GitLab CI는 두개가 붙어 있어서 따로 개발자가 설정해줘야 하는 인증 및 Hook 설정 조차 없이 그냥 바로 작동합니다.

Jenkins 를 꼭 써야 하는 예외의 경우도 있습니다. 항상 기술은 환경에 따라서 선택하는 것이기 때문에, 지금은 게임 개발팀이지만 만약 인프라팀에 있다고 하면 180도 달라집니다. 다른 CI 다 버리고 Jenkins 만 사용 할 것입니다. 클라우드 서비스들에서 제공하는 CI 들은 보통 프로젝트에 초점이 되어 있습니다. 프로젝트를 빌드하고 배포하고를 담당하는데 인프라팀은 Kubernetese등을 통해 Orchestration 기반으로 프로젝트가 아니라 인프라 자체를 배포하고 관리를 합니다. 인프라 단위의 컨트롤에서는 Jenkins가 궁합이 더 맞습니다.(인프라팀이 아니라면 본 내용은 별로 신경쓰지 않으셔도 됩니다. 일반적인 경우는 Jenkins 보다는 클라우드 서비스에 내장된 CI들이 맞습니다.)

제가 생각하는 Git 및 CI 서비스를 선택하는 기준에 대하여 설명을 드리겠습니다.

#### 학생, 취준생: GitHub(무료) + Travis(무료)

가급적 모든 소스를 공개하고 경험을 쌓고 포트폴리오로 제출하는 것이 좋습니다. 가끔 자기 소스가 부끄러워서 공개를 안하는 경우가 있는데, 공개를 하고 더 신경써서 작업하는 것이 본인에게 유리합니다. 소스가 모두 공개 되기 때문에 보안에 관련된 내용은 .gitignore 를 활용하거나 Secret Value 를 활용하면 됩니다.

#### 1인 개발, 스타트업: GitLab(무료) + GitLab CI(무료 + @)

Private Repo 가 인원이 늘어나도 무료이기 때문에 비용 부담이 없고, BitBucket 에 비해서 넉넉한 CI 시간을 제공합니다. 개인이나 작은 회사의 경우 얼마 안되는 돈이라도 매달 고정 비용이 부담이 되기 마련입니다. CI가 부족하거나 iOS 가 필요한 경우 남는 컴퓨터(?)를 활용하여 Runner 만 별도로 돌립니다.(열심히 돈벌어서 GitHub 유료 씁시다!)

#### 일반 회사: GitHub($9/user/month) + Travis($69 ~ $129/month ~ More)

오픈 소스와 사내 프로젝트를 한 곳에서 관리하기 용이합니다.("우리 회사는 오픈 소스 안만드는데?" 제발 좀 만드세요. 지금 당신이 쓰고 있는 모든 오픈 소스가 이런 노력으로 만들어진 것입니다.)<br>
일반 회사에서 인당 $9 는 직접 인프라를 구축하고 관리하는 비용과 안정성을 생각하면 오히려 저렴하다고도 볼 수 있습니다. Travis 의 경우는 시작이 월 $69라 작은 회사의 부담이 될수도 있지만 iOS 빌드를 위한 맥 구매 비용과 감가상각 및 안정성을 생각하면 큰 차이가 나지 않습니다. 규모가 있는 회사면 사용량에 맞는 Travis Plan 을 이용하면 됩니다.

가격 편향적이긴 한데, 현재 Git 및 CI 서비스들이 대부분 큰 차이 없이 잘 되어 있어 굳이 따지자면 가성비를 들 수 밖에 없습니다.(가심비로는 GitHub 입니다.^^;) 생태계 호환성을 보았을때는 GitHub > 넘사벽 > BitBucket > GitLab 순이긴 한데 CI 통해 우회가 가능하기 때문에 어느 서비스를 선택하여도 사용하는 입장에서 큰 문제는 없습니다.(예를 들면, AWS에서 Lambda 배포를 공식적으로 GitHub만 지원하나 CI를 통해서 GitLab, BitBucket 에서도 배포 할 수 있습니다. <small>- 이 글을 읽는 시점에서 BitBucket 을 지원하고 있을 수도 있습니다. 그런 건 중요한 부분이 아니니 넘어 갑시다.-</small>)


## 정리중

### SCM & Package 관리

Git: gitflow, [Conventional Commits](https://www.conventionalcommits.org)

Git Service:
* Github: (public)오픈 소스 repo
* Gitlab: (private) 프로젝트 repo

> Github 유료로 통합 하면 좋지만 비용 절감을 위해 public/private repo 를 나눠서 사용중

npm: 오픈 소스 모듈 등록

yarn: 패키지 관리

[leana](https://lernajs.io/): 모듈 버전 관리 및 Chage History




### DevOps

travis: github open source project

gitlab-ci: private project

docker: ci/cd

### Cloud

Firebase: 프로젝트 메인
* Auth: 인증
* Realtime Database: 채팅 및 간단한 실시간 기능
* Firestore: 메인 Database
* Analytics: 앱 이벤트
* Hosting: 간단한 웹 어드민

> 앱 이벤트를 위해서 클라가 다중으로 Facebook, appsflyer 등을 사용하고 있지만 Firebase Analytics 가 raw 데이터 접근이 가능하여 차후 다양한 분석이 가능함

GCP: IO 서버 및 Schduler

> Firebase 는 frequency 높은 실시간 io 처리가 부적합하여 GCP를 활용하여 io 서버 구축<br>

AWS: Lambda, GameLift

> Firebase에 스케줄러 기능이 없어서 스케줄링이 필요한 경우 사용<br>
> Dedicated Server 방식의 게임 개발에 활용<br>

### API

express: 오래 된 프로젝트

Graphql: 신규 프로젝트

### Web

vue: quasar 를 위한 기반 지식, 순수 vue 를 사용 하지 않음

quasar: vue 기반 css 내장 프레임워크

### Engine

unity

### Docs

swagger: rest api

graphql: graphql api

lerna: Change History

vuepress: wiki

### Language

Javascript, Typescript, python, c#(Unity), Java(android native), swift(iOS Native)

> 기본적으로 Node 기반 개발<br>
> Java 및 swift 는 Unity Native 플러그인 개발에만 사용

### Misc

생산성 향상, 비용 및 관리 코스트를 줄이기 위해 모든 서버는 기본 적으로 Serverless<br>
단, session 을 유지해야 하는 io 서버 제외<br>
Data Driven 개발 방식을 위해 기본적으로 NoSQL 사용<br>
Aggregation 필요한 경우 Big Query 또는 RDB 사용






