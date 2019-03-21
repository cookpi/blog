---
tags: ['vscode', 'ide']
---
# vscode

## 왜 VS Code 를 사용하나요?

::: warning
작성중
:::

## VS Code 유용한 플러그인들

### EditorConfig for VS Code [](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

IDE 수준에서 간단한 포멧팅<br>
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
