# Tech Stack

## 우리가 사용하는 기술 스택

::: warning
아직 작성중입니다.
:::

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






