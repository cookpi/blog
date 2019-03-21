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

::: warning
작성중
:::
