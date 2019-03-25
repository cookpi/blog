---
meta:
  - name: description
    content: 쿡앱스에서 사용하는 컨벤션 리스트
  - name: keywords
    content: 쿡앱스 cookapps coding conventions 코딩 컨벤션 규칙 rules
tags: ['conventions']
---

# Conventions

저희 팀에서 사용하는 컨벤션 리스트입니다.

::: tip
컨벤션이란, 같이 작업을 하면서 통일성을 지키기 위해서 정한 규약입니다. 요즘은 [Lint](https://eslint.org/)등을 사용하여 코딩 컨벤션이 강제로 지켜지기 때문에, 면접때 "코딩 스타일은 잘 맞출수 있나요?" 이런 질문은 이제 옛날 얘기입니다.

하지만 코딩 스타일을 제외하고도 repo 이름, 커밋 로그 규칙, 서비스/프로젝트 이름, 파일/폴더 구조등 다양한 컨벤션이 아직 존재하고 lint 로써 해결 못하는 규칙들도 존재하기에 개발을 시작하기전에 제일 먼저 컨벤션을 작성하는 것이 기본입니다.
:::

대부분의 컨벤션은 엄마가 좋아? 아빠가 좋아? 같은 규칙입니다. 딱히 어떤 것이 정답이라는 것은 없지만 한쪽 방향으로 정하여 통일성을 부여하는 것은 중요합니다.

## 일반 사항

* 소문자, 숫자, -(Dash) 를 주로 사용합니다.
  - 소문자, 대문자를 섞어 쓰다보면 실수를 할 수 있습니다. 소문자만 사용하게 되면 불필요한 고민을 덜게 됩니다.
  - 요즘은 _(Underscore) 보다는 -(Dash)를 많이 사용합니다. github, npm, docker등 대부분이 _(Underscore) 대신 -(Dash)를 사용합니다. 또한 url도 -(Dash)를 많이 사용하는 추세입니다.
  - RDB의 경우 _(Underscore)를 사용합니다. 많은 사람들이 아직도 쿼리에는 대문자, 테이블 및 필드명에는 소문자를 주로 사용하기 때문입니다.
  - ORM을 사용하는 경우에는 대소문자를 사용합니다. 보통 클래스명은 대소문자를 섞어서 쓰는데 객체 클래스와 데이터가 1:1 로 맵핑이 되기때문에 굳이 소문자와 _(Underscore)로 바꾸는 것이 더 번거롭고 직관성이 떨어집니다.
  - 대부분의 경우, 이 룰을 따르며 예외의 경우 각 컨벤션에 명시되어 있습니다.
  - 굳이 이유에 대해서 더 따진다면 그냥 매번 Shift 키 한번 덜 눌러도 된다고 얘기하겠습니다.

* Prefix or Suffix
  - 서비스, 프로젝트, 파일명등을 지을때 공통된 키워드를 앞으로 놓을지 뒤로 놓을지에 대한 컨벤션입니다.
  - 알파벳으로 소팅해서 볼때 구분하기 쉬운 방법을 선택합니다.
    ```bash
    # Prefix 방식
    cookapps-project-a
    cookapps-project-b
    cookapps-project-c

    # Suffix 방식
    a-project-cookapps
    b-project-cookapps
    c-project-cookapps

    # Prefix가 좋은 경우: 내 서비스와 다른 서비스가 섞여서 한번에 보이는 경우
    cookapps-project-a
    cookapps-project-b
    cookapps-project-c
    cookpi-project-a
    cookpi-project-b
    cookpi-project-c

    # Suffix 좋은 경우: 내 서비스만 보이는 경우
    a-project-cookapps
    a-cookpi-project # 내 화면에 보이지 않음
    b-project-cookapps
    b-cookpi-project # 내 화면에 보이지 않음
    c-project-cookapps
    c-cookpi-project # 내 화면에 보이지 않음
    ```
    * 예시) GitHub 같이 다양한 repo 이름이 섞여 있는 경우 회사명을 prefix 하면 우리 회사 repo 만 필터링해서 보기 편합니다.
    * 예시) S3, Firebase 같이 이름은 Global Unique 해야 하나 내 콘솔에서는 내 서비스만 보이는 경우는 Suffix 방식을 사용합니다.
    * 예시) dev, prod 등 스테이지 방식은 suffix 를 사용합니다.
  - 각 서비스 및 네이밍에 대하여 Prefix, Suffix를 명시할 예정입니다.

## GitHub

### Account

GitHub 회원 가입시 다음과 같이 가입합니다. 회원명은 글로벌 유니크로써 겹치면 안되기 때문에 회사명을 뒤에 붙이고 앞에는 이메일을 사용합니다. 이미 가입한 사람도 변경이 가능합니다.(단, 개인 repo 주소가 변경되니 유의 바랍니다.)

```bash
[NAME]-[COMPANY]

# 예시
jinkim-cookapps
mhoh-cookapps
```

  - NAME: 회사 이메일의 앞자리를 사용합니다.
    * jinkim@cookapps.com  > jinkim-cookapps
    * mhoh@cookapps.com  > mhoh-cookapps
  - .(dot)이 허용이 되지 않기 때문에 .(dot) 이 있는 경우 생략합니다.

### Organization

GitHub 의 Repo 그룹 단위가 Organization 입니다. Team은 Organization 내에서 권한 설정을 위해서 사용합니다. 회사명을 Prefix 로하고 뒤에 팀명을 사용합니다. GitHub Repo 전체 검색시 전체 회사 프로젝트가 알파벳순으로 정렬되어 찾기 편합니다.

오픈 소스의 경우 오픈 소스명을 그대로 사용합니다.

```bash
[COMPANY]-[TEAM]

# 예시
cookapps-sandbox
cookapps-playgrounds
cookapps-ff
```

::: warning
작성중
:::
