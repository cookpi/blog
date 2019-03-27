---
tags: ['yarn']
---

# yarn

## yarn global

yarn 바로 뒤에 global 을 붙여서 전역 커멘드를 실행(순서 주의 꼭 yarn 바로 다음에 나와야 함)

```bash
yarn global [COMMAND]
```

## yarn init

package.json 생성

```bash
yarn init [OPTIONS] # (npm init)

# Examples
yarn init -y
```

### OPTIONS

| Name | Default | Description |
| ---- | ------- | ----------- |
| -y   |         | 기본값으로 바로 생성 |

## yarn list

설치된 패키지 리스트 확인

```bash
yarn list
yarn global list
```

## yarn config set [key] [value]

yarn 설정

```bash
# 모듈에서 요구하는 node 버전 에러를 무시: @google-cloud/functions-emulator 설치시 유용
yarn config set ignore-engines true
```

## yarn link

```
...
```

### link list 확인

win: C:/Users/[name]/AppData/Local/Yarn/Data/link
mac:

::: warning
작성중
:::
