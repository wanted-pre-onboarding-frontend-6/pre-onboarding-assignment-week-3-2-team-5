# 댓글 프로젝트

## 📌 프로젝트 소개

### 목표
API 서버와 통신해서 작동하는 댓글 프로젝트를 Redux를 통해 구현

### 개발 기간
`2022/09/16 ~ 2022/09/19`

<br/>

## 📌 배포

https://comments-fe-5.netlify.app/

<br />

## 📌 프로젝트 설치 및 시작

#### 프로젝트 클론

```shell
$ git clone https://github.com/wanted-pre-onboarding-frontend-6/pre-onboarding-assignment-week-3-2-team-5.git
```

#### 패키지 설치

```shell
$ npm install
```

#### 서버 실행

```shell
$ npm run api
$ npm run start
```
<br/>

## 📌 팀원 소개

<br/>

<table align="center">
<tr >
<td align="center"><a href="https://github.com/LoggingCo"><img  src="https://avatars.githubusercontent.com/LoggingCo" width="100%"  height="50%"/></a></td>
<td align="center"><a href="https://github.com/sming0112"><img src="https://avatars.githubusercontent.com/sming0112" width="100%"  height="50%"/></a></td>
<td align="center"><a href="https://github.com/YSBINN"><img src="https://avatars.githubusercontent.com/YSBINN" width="100%" height="50%" /></a></td>
<td align="center"><a href="https://github.com/Leejha"><img src="https://avatars.githubusercontent.com/Leejha" width="100%"  height="50%"/></a></td>
<td align="center"><a href="https://github.com/seriparkdev"><img src="https://avatars.githubusercontent.com/seriparkdev" width="100%"  height="50%"/></a></td>
</tr>
<tr>
<td align="center"><b>김성용(팀장)</b></td>
<td align="center"><b>성민규</b></td>
<td align="center"><b>임상빈</b></td>
<td align="center"><b>이재하</b></td>
<td align="center"><b>박세리</b></td>
</tr>
<tr>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
</tr>
</table>

<br/>

## 📌프로젝트 과정 소개

- [Git 전략](https://github.com/wanted-pre-onboarding-frontend-6/Assign-1/wiki/Git-%EC%A0%84%EB%9E%B5)

- [커밋 컨벤션 및 코딩 컨벤션](https://github.com/wanted-pre-onboarding-frontend-6/Assign-1/wiki/%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98-%EB%B0%8F-%EC%BD%94%EB%94%A9-%EC%BB%A8%EB%B2%A4%EC%85%98)


<br/>

## 📌 프로젝트 구조

<details>
<summary>open</summary>

```
├─apis
├─components
│  ├─Button
│  ├─Input
│  └─Select
├─context
├─hooks
├─pages
│  └─components
├─reducer
├─saga
├─store
├─types
│  ├─api
│  └─style
└─utils
```

</details>

<br/>

## 📌기술 스택
 
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) 
![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) 
![](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
<img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"/>
<img src="https://img.shields.io/badge/Redux--toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white"/>
<img src="https://img.shields.io/badge/Redux saga-999999?style=for-the-badge&logo=reduxsaga&logoColor=white"/>

<br/>

## 📌 요구 사항
- [x] 댓글 불러오기, 작성, 수정, 삭제가 동작하도록 기능 구현
- [x] 페이지네이션
- [x] 댓글 작성, 수정, 삭제 후 동작
    - [x] 댓글 작성하고 난 뒤: 다른 페이지에 위치하고 있었더라도 1페이지로 이동, 입력 폼 초기화
    - [x] 댓글 수정하고 난 뒤: 현재 보고있는 페이지 유지, 입력 폼 초기화
    - [x] 삭제하고 난 뒤: 1페이지로 이동
- [x] Redux logger, Redux-Devtools 설정 필수
- [x] Redux를 이용한 비동기 처리 필수

<br/>

## 📌 Best Practice

### 💡redux-toolkit을 사용했습니다.
redux를 사용할 때면 프로젝트가 크지 않음에도 복잡한 코드를 작성해야 합니다. store를 설정해주는 과정이 복잡하고, redux를 좀 더 편하게 사용하기 위해서는 패키지를 많이 설치해야하며, boilerplate 코드가 비효율적으로 깁니다. 그렇기 때문에 이번 프로젝트에서 redux를 효율적으로 관리하기 위해서 redux-toolkit을 사용했습니다.

redux-toolkit의 `createSlice`는 자동적으로 immer를 내부적으로 사용하기 때문에 불변성을 편리하게 관리할 수 있고 reducer를 더 쉽고 간단하게 작성할 수 있습니다.

### 💡redux-thunk 대신 redux-saga를 사용했습니다.
redux-thunk를 사용할 때 고차함수 작성 등 코드 복잡도가 더 높다고 느껴지기 때문에 redux-saga를 선택하게 되었습니다. 그리고 api 작업 실패 시 재요청, 발생한 액션에 따라서 원하는 액션 디스패치 등 saga로는 thunk보다 비동기처리를 다양하게 처리할 수도 있습니다.
