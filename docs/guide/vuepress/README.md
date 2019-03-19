---
tags: ["docs", "vuepress"]
---

# VuePress <Badge text="mhma" />

## 시작하기

본 페이지는 VuePress를 사용하여 웹 페이지를 구성하는 방법에 대해 가이드 하고 있습니다.<br>
VuePress를 처음 접하신다면 [VuePress Introduction](https://vuepress.vuejs.org/guide/)페이지를 참고 해주세요.

## 설치방법

VuePress 프로젝트를 설치할 폴더를 생성합니다.

```
$ mkdir vuepress-test
$ cd vuepress-test
```

yarn(or npm) 명령어로 VuePress 모듈을 설치합니다.<br>전역 설치를 원치 않을 경우 주석을 참고하여 Dev용으로 설치하세요.

```
$ yarn global add vuepress # OR yarn add vuepress -D
```

::: warning
글로벌 옵션으로 설치했을 경우 프로젝트 내에 아무 파일도 존재 하지 않을 것입니다.<br>
이 경우 기본 프로젝트 구성을 위해 yarn init 명령어를 입력해주세요.
:::

개발 환경 설정을 위해 프로젝트 내부 package.json 파일에 다음 구문을 추가합니다.<br>

```powershell
{
  "name": "blog",
  "version": "1.0.0",
  ## scripts 부분을 추가합니다
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  },
  "repository": "https://github.com/cookpi/blog.git",
  "author": "cookpi <cookpi@cookapps.com>",
  "license": "MIT",
  "devDependencies": {
    "vuepress": "^0.14.9"
  }
}
```

추가한 스크립트를 실행하여 정상적으로 구동되는지 확인합니다.<br>
정상적으로 접속이 되면 VuePress의 기본 설치가 끝난 것입니다.<br>
아직 페이지를 추가 하지 않아 404 메시지가 나올 것입니다.

```
$ yarn docs:dev
 DONE  [12:25:07] Build 3d47d0 finished in 123 ms! (http://localhost:8083/)
```

## 페이지 구성

### Root Page 구성

우리가 원하는 화면을 보기 위해 페이지 및 라우팅 구성을 합니다.<br>
하단 트리 구조와 같이 docs 폴더를 만든 후 README.md 및 .vuepress 폴더를 생성합니다.<br>
README.md 파일은 웹 서버에서 사용하는 index.html 역할을 합니다.<br>
이 파일은 root로 지정되어 있는 docs폴더의 index 페이지로 사용될 것입니다.

```
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
```

README.md 및 config.js를 수정합니다. 더 자세한 설정은 [VuePress basic-config](https://vuepress.vuejs.org/guide/basic-config.html#config-file) 섹션을 참고하세요

```
# README.md
---
home: true
---

# config.js
module.exports = {
  title: 'VuePress',
  description: 'Hello VuePress'
}
```

::: tip
Root README.md 파일은 [Front Matter](https://jekyllrb.com/docs/front-matter/) 방식으로 작성하고 하위 페이지는 [Markdown](https://ko.wikipedia.org/wiki/%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4)으로 작성하도록 합니다.<br>
[Front Matter](https://jekyllrb.com/docs/front-matter/)에 대해 자세히 알아보세요.
:::

#### 결과 화면

![result](/screenshot/vuepress_190228.png)
