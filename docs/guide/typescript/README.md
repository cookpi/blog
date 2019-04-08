---
meta:
  - name: description
    content: Typescript 와 tslint 설정입니다.
  - name: keywords
    content: 쿡앱스 cookapps typescript tslint
---

# Typescript

본 포스팅의 완성 된 [예제 소스](https://github.com/cookpi/example-typescript.git)는 GitHub에 올려져 있습니다.

::: warning
작성중
:::

## 설정


### tslint

[tslint 플러그인](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin) 설치


tsconfig 설정

```json
"plugins": [
  { "name": "typescript-tslint-plugin" }
]
```


autofix on save: vscode > settings(Ctrl + ,) > add text

```json
"editor.codeActionsOnSave": {
  "source.fixAll.tslint": true
}
```

### tscpaths

[tscpaths](https://github.com/joonhocho/tscpaths)는 컴파일 타임에 절대 경로를 상대 경로로 변경 시켜주는 모듈입니다.

예를 들어 `import format from '../../utils/format'` 구문을 `import format '@/utils/format'` 같은 형식으로 사용할 수 있게 됩니다.

tscpaths를 사용하기 위해 다음 파일에 config을 추가합니다.

```json
// tsconfig.js
{
    /* 생략 */
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

```json
// package.json - tsc 컴파일 후 tcspaths를 통해 js파일의 절대 경로를 상대 경로로 변경
{
  "scripts": {
    "path": "tscpaths -p tsconfig.json -s ./src -o ./lib",
    "build": "tsc --project tsconfig.json && npm run path",
    "watch": "tsc-watch --outDir ./lib --onSuccess 'npm run path' --compiler typescript/bin/tsc"
  }
}
```

::: tip
Typescript를 사용할 경우 `tsc -w` 명령어로 코드 수정 시 바로 컴파일이 되도록 하는 것이 일반적입니다.
하지만 이 명령어는 tsc 컴파일 이후 tscpaths까지 동작 시키지는 않습니다.
이 문제를 해결하기 위해 [tsc-watch](https://www.npmjs.com/package/tsc-watch)를 설치 한 후 onSuccess Hook을 통해 소스 수정 후 tscpaths를 실행하게 할 수 있습니다.
:::






