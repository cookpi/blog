# Overview <Badge text="jwkim2" />

## Serverless Framework 란?

Serverless라고 하면 물리(또는 가상화된) 서버를 직접 운영하지 않고 Function 기반의 서버 제작 및 운용을 얘기하나, 여기서 Serverless Framework란 그것을 쉽게 사용 할 수 있도록 도와주는 **오픈 소스 프레임워크**입니다.

::: warning
보통 "Serverless Framework 알아?" 라고 하면 대부분 전자인 Serverless 자체를 떠 올리며 안다고 하는 경우가 많은데, Serverless 의 개념이나 아키텍처가 아닌 Serverless Framework 오픈 소스 자체를 아는 것이 아닌 경우가 많습니다. 프레임워크의 이름을 Serverless 그 자체로 쓴 것인데 그것이 신의 한수인지 몰라도 대부분 안다고 하고 실제로는 모르는 경우가 많고 구글에서는 다른 비슷한 Serverless 를 지원하는 프레임워크중에 항시 첫번째로 검색 됩니다.
:::

> The open-source, application framework to easily build serverless architectures on AWS Lambda & more. Startups and Fortune 500 companies are using it to build incredibly efficient applications.<br><br>
> 오픈소스이며, 쉽게 서버리스 아키텍쳐를 AWS의 Lambda 및 다른 클라우드 서비스에서 빌드할 수 있는 어플리케이션 프레임워크이다. 스타트업과 포춘지 500여개의 회사가 효율적인 어플리케이션 빌딩에 사용하고 있다.

<div class="small">출처: https://serverless.com</div>

EA, 코카콜라, 익스피디아 등등 굴지의 다양한 기업들이 많이 사용하고 있는데 의외로 모르는 개발자도 많습니다. (AWS등을 쓰기 편하게 만들어 놓은 것인데 정작 AWS 직원과 만나서 물어보니 몰랐었습니다. ^^;)

**이 오픈 소스가 하는 일은 AWS, Azure, GCP등 기존에 클라우드 서비스를 추상화시켜 하나로 통합하고 더 쓰기 편하고 빠르게 개발을 할 수 있게 도와줍니다.**

각각의 클라우드 서비스는 동일한 목적의 비슷한 서비스들을 제공하고 있습니다. 다음은 비슷한 목적의 대표적인 클라우드 서비스들의 비교입니다.

| 구분      | AWS         | Azure         | GCP |
| ---       | ---         | ---           | --- |
| 저장소    | S3          | Blob Storage  | Cloud Storage |
| Compute   | EC2         | VM            | Compute Engine |
| Functions | Lambda      | Functions     | Functions |
| API 관리  | API Gateway | API Management | Cloud Endpoints |
| Stack 빌딩 | CloudFormation | Automation | Deployment Manager |

서비스들의 목적과 하는 일은 비슷하지만 각 서비스 플렛폼별 설정과 사용법이 다릅니다. Serverless Framework 는 이런 비슷한 기능들을 추상화하여 설정을 간편화하고 내부적으로는 각 서비스 플렛폼에 맞는 설정이 자동으로 만들어지고 배포 되게끔 만들어져 있습니다. 공통 기능뿐 아니라 각 플렛폼에 특화된 기능도 쉽게 사용 할 수 있도록 지원하고 있고, 서비스 플렛폼에서 기본적으로 지원하지 않는 추가적인 기능들도 지원하고 있습니다.

## Serverless Framework 를 왜 사용하나요?

매번 예기하지만 첫째로는 **생산성**이고, 둘째로는 **종속성** 때문입니다.

Serverless Framework를 왜 사용하는지는 사용하지 않을 때와 비교하면 쉽습니다.<br>
AWS를 통하여 아주 기본적인 http 를 통한 api 하나를 구현한다고 가정해 보겠습니다.

우선 코딩을 완료한 후 Lambda 를 만들고 소스를 압축하여 Lambda 에 업로드합니다. 이후 API Gateway 를 해당 Lambda 와 연결 작업하고 해당 EndPoint를 Router53을 통해 도메인과 연결하여 줍니다. 또한 각 서비스에 맞는 IAM 설정을 해줘야 합니다. 이 작업을 위해서는 매번 웹페이지 콘솔을 열고 해당 서비스 페이지에 접속하여 설정을 해야 하고 수정을 할 경우에도 동일한 작업을 반복해야 합니다.

Serverless Framework 로 작업한 경우에는 코딩 작업이 완료되면, "serverless deploy" 명령어로 배포합니다. 끝입니다. 위에서 언급한 일련의 작업들이 자동화 되어 진행되고 수정시에도 마찬가지로 명령어 한 줄이면 업데이트가 완료됩니다.

물론 약간의 악의적인(?) 편집이 존재하긴 하나 실제로 사용을 해보게 되면 프레임워크를 사용했을때가 수동으로 진행했을때 보다 훨씬 단순하다는 것을 느낄 것입니다. Serverless Framework 는 내부적으로 AWS의 CloudFormation을 이용하여 일련의 작업들을 자동화 하고, Azure의 경우 Automation 을 활용합니다. 개발자가 CloudFormation과 Automation 을 모르더라도 Serverless 에서 이미 제작되어있는 빌딩 스텍 프리셋을 통하여 배포가 자동화 되고 커스터마이징도 가능합니다.(상세 설정을 위해서는 해당 서비스 플렛폼에서 지원하는 내용을 알아야 합니다.)

두번째 이유는 종속성입니다. 정확히 말하면 **종속성을 피하기 위함**입니다. 위에 말한 악의적인 편집과 같이 AWS에도 이미 Serverless Framework 와 같은 단순한 명령줄 인터페이스인 SAM(Serverless Application Model)이 존재합니다. 하지만 이는 오로지 AWS를 위함이고 Azure와 GCP에서는 사용 할 수 없습니다. 평생 한가지 플렛폼만 파먹고 살 것이 아니라면(?) 가급적이면 종속성을 피해야 합니다. 각 클라우드의 자동화 시스템을 잘 알고 있다고 해도 따로따로 작업을 하는 것은 효율이 나지 않습니다. Serverless Framework를 활용하여 Cross Cloud Service 방식으로 제작을 하면 다양한 클라우드 서비스를 섞어서 사용하거나 서비스를 이전하는 것이 수월합니다.

