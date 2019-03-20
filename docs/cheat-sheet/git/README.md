---
tags: ['git']
---

# git

## ssh key 생성 및 등록

```
ssh-keygen -t rsa -b 4096 -C "company-name-pcname"
```

GitHub, GitLab 등에 등록하는 용도로 ssh 를 만들때 사용합니다.
ssh 이름에 -C 옵션을 사용하여 코멘트로 ssh-key 이름을 구분합니다.

ssh 는 가급적 모든 디바이스나 용도에 따라 분리하는 것이 좋습니다.

개인 프로젝트와 회사 프로젝트 혹은 여러 회사의 프로젝트를 사용하거나 PC와 노트북등 여러 컴퓨터를 사용할때 구분하기 쉽습니다.
