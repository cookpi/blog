---
tags: ['vscode', 'ide']
---
# VS Code

## 왜 VS Code 를 사용하나요?

::: warning
작성중
:::

## VS Code 유용한 플러그인들

### EditorConfig for VS Code

[EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)는 별다른 lint 설정 없이 IDE 수준에서 간단한 포멧팅을 지원합니다.

코딩시 누구는 intend를 tab 으로 사용하고 누구는 띄어쓰기를 하며, 띄어쓰기 간격을 4자로 하는 사람도 있고 2자로 하는 사람도 있고 다양합니다. 이런 파편화는 코드를 통일성 있게 유지하기가 힘듭니다. [EditConfig(공식 홈)](https://editorconfig.org/)는 특정 VSCode 와 같은 특정 IDE에 종속적인 내용은 아닙니다. 개발자마다 스타일을 달리하여 일관성을 가지기 힘들기 때문에 표준 같은 규약을 만들고 거기에 맞춰서 각자 IDE에 맞는 플러그인들을 제작하여, 다른 IDE 와 다른 언어를 사용하더라도 기본 포멧팅은 동일하게 저장이 되게끔 플러그인 차원에서 지원이 되고 현재 다양한 IDE 에서 사용 할 수 있습니다.

#### 사용법

플러그인 설치후 프로젝트 루트에 .editorconfig 파일을 생성

```bash
# .editorconfig
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```

### Markdown All in One [](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

markdown 편집시 유용<br>
테이블 포멧팅 기능 하나만 가지고도 해당 플러그인이 유용함(한글은 조금 라인이 안맞음)

| Feature          | Shortcuts       | Descriptions       |
| ---------------- | --------------- | ------------------ |
| Table Formatting | Alt + Shift + f | 테이블 모양이 자동으로 포멧팅 됨 |
