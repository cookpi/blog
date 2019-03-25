---
meta:
  - name: description
    content: VSCode + Editor Config 설정
  - name: keywords
    content: 쿡앱스 cookapps vscode editor config lint code format
---

# Editor Config

## 개요

[EditorConfig 플러그인](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)은 별다른 lint 설정 없이 IDE 수준에서 간단한 포멧팅을 지원합니다.

코딩시 누구는 intend를 tab 으로 사용하고 누구는 띄어쓰기를 하며, 띄어쓰기 간격을 4자로 하는 사람도 있고 2자로 하는 사람도 있고 다양합니다. 이런 파편화는 코드를 통일성 있게 유지하기가 힘듭니다. [EditConfig(공식 홈)](https://editorconfig.org/)는 특정 VSCode 와 같은 특정 IDE에 종속적인 내용은 아닙니다. 개발자마다 스타일을 달리하여 일관성을 가지기 힘들기 때문에 표준 같은 규약을 만들고 거기에 맞춰서 각자 IDE에 맞는 플러그인들을 제작하여, 다른 IDE 와 다른 언어를 사용하더라도 기본 포멧팅은 동일하게 저장이 되게끔 플러그인 차원에서 지원이 되고 있으며 현재 다양한 IDE 에서 사용 할 수 있습니다. 차후 lint를 적용하더라도 해당 설정은 유지하는 것이 좋습니다.

## 설치 및 설정

1. [플러그인](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) 설치(이미 설치 되어 있으면 생략)
2. 프로젝트 루트에 .editorconfig 파일을 생성
3. IDE에서 save하면 자동으로 포멧팅 적용

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

* indent_style: yml 은 기본적으로 indent 를 space로 사용합니다. js, c# 코딩시에 동일하게 적용해도 무방하여 기본 설정으로 적용합니다.
* indent_size: 중첩된 블럭이 많아 질수록 코드가 옆으로 길어지는 경향이 있기 때문에 짧게 2로 설정합니다.
* end_of_line: mac 과의 호환성을 고려하여 lf 로 설정합니다.
* insert_final_newline: 파일 마지막에 일관된 newline 을 설정합니다.
* trim_trailing_whitespace: 불필요한 공백을 제거합니다.


