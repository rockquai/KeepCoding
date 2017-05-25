###### 하코사 Front-End 스터디

# DAY 06
## Front-End
- Git & Github
- CLI
- IntelliJ 사용법

---

### [Git이란?](https://git-scm.com/) <br>
: `svn`란 같은 VCS(Version Control System) 버전 관리 시스템

#### Git vs SVN
: git의 최대장점 -> `오프라인 작업`이 가능하다. <br>

Git | SVN
------| ---------
어렵다 | 덜 어렵다
빠르다 | 덜 빠르다
오프라인 작업 가능 | 오프라인 상태에서만 작업 가능
풍부한 브랜치 가능 | 브랜치 기능 미비

#### [github](https://ko.wikipedia.org/wiki/%EA%B9%83%ED%97%88%EB%B8%8C)
- 분산 버전 관리 툴인 깃(Git)을 사용하는 프로젝트를 지원하는 웹호스팅 서비스
- 루비 온 레일스로 작성
- GitHub는 영리적인 서비스와 오픈소스를 위한 무상 서비스를 모두 제공
- [github.com](https://github.com/)

#### Git 이름 & 이메일 설정

```CLI
$ git config user.name 이름 --global
$ git config user.email 이메일 --global
```

#### 작업 디렉토리(Working directory)
- 1차 저장소
- 사람이 직접 파일을 변경하는 곳
- 에디터, IDE 등을 통해 파일 내용을 직접 변경할 수 있다

#### 로컬 저장소(Repositories)
- 작업 디렉토리의 작업 변경 내용을 저장하는 곳
- git 명령어로만 생성 및 조작 가능
- 내 컴퓨터에 숨김폴더로 저장됨

### 원격 저장소(Remote)
- 로컬 저장소를 서버에 복사해서 저장하는 곳을 원격 저장소라고 한다
- 여려 명을 협업하기 위해서 필요하고
- 로컬 저장소가 없어졌을 때 복구하기 위해서도 필요하다
- push로컬 저장소를 원격 저장소에 저장, pull 원격 저장소를 로컬 저장소에 저장

### Git 참고
- [누구나 쉽게 이해할 수 있는 Git 입문](https://backlogtool.com/git-guide/kr/)
- [git - 간편 안내서](https://rogerdudler.github.io/git-guide/index.ko.html)

---

### CLI
- CLI(Command Line Interface) : 명령어(커멘드)를 기반으로 조작
- GUI(Graphical User Interface) : 그래픽 사용자 인터페이스 (예. 윈도우 탐색기)

#### CLI 명령어
- `cd`                이동 <br>
- `cd ~`              사용자 홈 디렉토리로 이동 <br>
- `pwd`               현재 디렉토리 표시 <br>
- `mkdir`             새로운 디렉토리 생성 <br>
- `ls`                현재 디렉토리의 내용을 보여줌 <br>
- `cat`               파일 내용 표시 <br>
- `history`           명령어 이력 표시 <br>
- `cp`, `mv`, `rm`    파일복사, 이동, 삭제 <br>
- `echo`, `touch`     파일 생성  <br>
- `ls`, `ll`, `ls -1` 목록 출력 <br>
- `say`               음성 출력 <br>

---

### [IntelliJ IDEA](https://ko.wikipedia.org/wiki/IntelliJ_IDEA)
- JetBrains사에서 제작한 상용 자바 통합 개발 환경이다. 줄여서 IntelliJ 혹은 IDEA로도 불린다. <br>
- 이클립스 재단 의 이클립스와 썬 마이크로시스템즈의 넷빈즈로 대표되는 무료 자바 통합개발환경에서 볼랜드(/코드기어)의 제이빌더(JBuilder)와 함께 얼마 안 되는 상용 개발 도구 가운데 하나이다.
- [다운로드](https://www.jetbrains.com/idea/nextversion/)
