---
meta:
  - name: description
    content: husky 와 commitlint를 활용하여 Conventional Commits 설정법에 대하여 설명합니다.
  - name: keywords
    content: 쿡앱스 cookapps scm git conventional comit husky commitlint code 코딩 컨벤션
---

# Conventional Commits

## 개요

[Conventional Commits](https://www.conventionalcommits.org/)이란 git 으로 commit 시에 일괄된 양식을 유지하고 그 양식을 바탕으로 버전 관리나 Change Log 를 만들어 냄을 의미합니다. 컨벤션의 일환이지만 npm 모듈을 통하여 강제로 적용하여 실수가 일어나지 않게 합니다.

전체적인 흐름은 git commit > git hook > husky > commitlint 순서로 진행됩니다. commit 을 하게 되면 git hook 이 발생하고 husky 가 트리거를 받아서 commitlint 실행하게 하게 되고 규칙에 맞는 commit 로그 일 경우 통과 시키고 그러지 않으면 commit 을 실패 시킵니다.

* [husky](https://www.npmjs.com/package/husky): git hook 을 트리거 하는 용도
* [commitlint](https://conventional-changelog.github.io/commitlint): commit 에 대한 lint를 확인하여 성공/실패를 리턴합니다.

commitlint 를 직접 작성 할 수도 있지만 Google(Angular)등에서 사용하는 이미 정의된 설정을 사용하고 필요에 의해서 확장하여 사용합니다.

## 설치

```bash
yarn add husky @commitlint/cli @commitlint/config-conventional -D
```

::: warning
husky가 githook 을 덮어쓰기 때문에 husky 설정 이전에 repo를 먼저 초기화 해야 합니다.
:::

## 설정

11-20 라인을 추가합니다.

```json{11-20}
// package.json
{
  "name": "test-conventionalcommits",
  "description": "test-conventionalcommits",
  "private": true,
  "devDependencies": {
    "@commitlint/cli": "^7.5.2",
    "@commitlint/config-conventional": "^7.5.0",
    "husky": "^1.3.1"
  },
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "commitlint": {
    "extends": [
      "@commitlint/config-conventional"
    ]
  }
}
```

## 사용법

기본적으로 Conventional Commits은 SemVer를 따르기 때문에 MAGER.MINOR.PATCH 에 해당하는 type을 사용하고 나머지는 Version 을 올리지 않습니다.

다음과 같은 형식으로 commit을 합니다. description 작성시 동사를 현재형으로 사용합니다.

```
<type>[optional scope]: <description>

# Examples

fix: allow login without uid
feat: add chat function
BREAKING CHANGE: 'extend' > 'inherit', must fix all the codes

# Examples with optional scope

fix(chat): broken emoji
feat(auth): add Google Play Auth
```

| Type            | SemVer | Description                         |
| --------------- | ------ | ----------------------------------- |
| fix             | PATCH  | Bug Fix, API 변경 사항 없이 내부 수정 |
| feat            | MINOR  | 기능 추가, API 변경(하위 호환)        |
| BREAKING CHANGE | MAGER  | API 의 변경, 큰 변화                 |
| refactor        |        | 내부적인 리펙토링                    |
| docs            |        | 문서                                |
| test            |        | 테스트 코드                          |
| chore           |        | 그외 자잘한 수정 사항들               |

형식에 맞지 않는 commit message 를 사용할 경우 commit이 실패 합니다.

버전은 차후 [Lerna](https://lernajs.io/)를 통해 자동으로 올라갑니다.
