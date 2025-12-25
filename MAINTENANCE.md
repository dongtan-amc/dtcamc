# 🩺 24시 동탄시티 동물의료센터 웹사이트 유지보수 가이드

> **사이트 URL**: https://www.dtctamc.com/  
> **배포 플랫폼**: Vercel  
> **도메인 만료일**: 2026-02-08

---

## 📋 목차

1. [프로젝트 개요](#프로젝트-개요)
2. [기술 스택](#기술-스택)
3. [프로젝트 구조](#프로젝트-구조)
4. [주요 섹션 및 컴포넌트](#주요-섹션-및-컴포넌트)
5. [상수 데이터 (Constants)](#상수-데이터-constants)
6. [콘텐츠 업데이트 가이드](#콘텐츠-업데이트-가이드)
7. [개발 환경 설정](#개발-환경-설정)
8. [배포 프로세스](#배포-프로세스)
9. [외부 서비스 연동](#외부-서비스-연동)
10. [알려진 이슈 및 TODO](#알려진-이슈-및-todo)

---

## 프로젝트 개요

24시 동탄시티 동물의료센터의 공식 웹사이트입니다. 병원 소개, 의료진 정보, 진료 클리닉 안내, 보유 장비, 진료 시간, 오시는 길, 채용 안내 등의 정보를 제공하는 **서버 사이드 렌더링(SSR)** 기반 웹사이트입니다.

### 주요 기능
- 🏥 병원 소개 및 인사말
- 👨‍⚕️ 수의사 프로필
- 🔬 전문 클리닉 안내 (정형외과, 간담도, 신장투석, 종양치료, CT)
- 🛠️ 보유 장비 소개
- 📍 오시는 길 (카카오맵 연동)
- 📧 채용 문의 (이메일 발송)
- 📱 반응형 디자인 (모바일/데스크탑)

---

## 기술 스택

| 분야 | 기술 |
|------|------|
| **프레임워크** | Next.js 14+ (App Router) |
| **언어** | TypeScript |
| **스타일링** | TailwindCSS 3.x |
| **UI 컴포넌트** | Radix UI, shadcn/ui |
| **애니메이션** | Framer Motion |
| **지도** | Kakao Maps SDK |
| **이메일** | Resend |
| **폼 검증** | React Hook Form + Zod |
| **캐러셀** | Embla Carousel |
| **패키지 관리** | pnpm |
| **배포** | Vercel |

---

## 프로젝트 구조

```
dtcamc/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # 루트 레이아웃 (SEO, 폰트, 분석)
│   ├── page.tsx                  # 메인 페이지 (12개 섹션)
│   ├── globals.css               # 글로벌 CSS 변수
│   ├── api/
│   │   └── send/route.ts         # 채용 이메일 API
│   ├── robots.ts                 # SEO robots.txt
│   ├── sitemap.ts                # SEO sitemap
│   └── SCDream*.otf              # 커스텀 폰트 파일
├── components/
│   ├── common/                   # 공용 컴포넌트
│   │   ├── container.tsx         # 레이아웃 컨테이너
│   │   ├── divider-*.tsx         # 섹션 구분선
│   │   └── loading.tsx           # 로딩 스피너
│   ├── navbar/                   # 네비게이션 바
│   │   ├── navbar.tsx            # 메인 네비바
│   │   ├── menu.tsx              # 데스크탑 메뉴
│   │   ├── mobile-menu.tsx       # 모바일 메뉴
│   │   └── main-logo.tsx         # 로고
│   ├── sections/                 # 페이지 섹션 컴포넌트
│   │   ├── landing/              # 랜딩 섹션 (캐러셀)
│   │   ├── intro/                # 인사말 섹션
│   │   ├── vets/                 # 수의사 소개
│   │   ├── orthopedic/           # 정형외과 클리닉
│   │   ├── biliary/              # 간담도 클리닉
│   │   ├── dialysis/             # 신장투석 클리닉
│   │   ├── oncology/             # 종양치료 클리닉
│   │   ├── ct/                   # 영상진단센터
│   │   ├── tools/                # 보유 장비
│   │   ├── map/                  # 오시는 길
│   │   ├── info/                 # 진료안내
│   │   ├── employment/           # 채용안내
│   │   ├── facilities/           # 시설 안내
│   │   ├── section-layout.tsx    # 섹션 레이아웃
│   │   ├── section-title.tsx     # 섹션 제목
│   │   └── section-image.tsx     # 섹션 이미지
│   ├── ui/                       # shadcn/ui 컴포넌트
│   │   ├── button.tsx
│   │   ├── carousel.tsx
│   │   ├── dialog.tsx
│   │   ├── form.tsx
│   │   ├── toast.tsx
│   │   └── ...
│   ├── footer.tsx                # 푸터
│   ├── mobile-bottom-buttons.tsx # 모바일 하단 버튼
│   └── scroll-top-button.tsx     # 스크롤 탑 버튼
├── constants/                    # 상수 데이터
│   ├── general-info.ts           # 병원 기본 정보
│   ├── sections.ts               # 섹션 네비게이션
│   ├── tools.ts                  # 장비 정보
│   ├── employment.ts             # 채용 폼 스키마
│   └── base-url.ts               # 기본 URL
├── hooks/
│   └── useScrollPosition.tsx     # 스크롤 위치 훅
├── lib/
│   └── utils.ts                  # 유틸리티 함수 (cn, 마크다운)
├── public/                       # 정적 자산
│   ├── logo.png                  # 로고
│   ├── vets/                     # 수의사 사진
│   ├── tools/                    # 장비 사진
│   ├── landing/                  # 랜딩 이미지
│   ├── sections/                 # 섹션 이미지
│   └── icons/                    # 아이콘
├── tailwind.config.ts            # Tailwind 설정
├── next.config.js                # Next.js 설정
├── package.json
└── pnpm-lock.yaml
```

---

## 주요 섹션 및 컴포넌트

메인 페이지(`app/page.tsx`)는 다음 12개 섹션으로 구성됩니다:

| 순서 | 섹션 | 컴포넌트 경로 | 설명 |
|------|------|--------------|------|
| 1 | 랜딩 | `sections/landing/` | 메인 배너 캐러셀 |
| 2 | 인사말 | `sections/intro/` | 병원 소개 및 특장점 |
| 3 | 수의사 | `sections/vets/` | 의료진 프로필 |
| 4 | 정형외과 | `sections/orthopedic/` | 정형외과 클리닉 |
| 5 | 간담도 | `sections/biliary/` | 간담도 클리닉 |
| 6 | 신장투석 | `sections/dialysis/` | 신장투석 클리닉 |
| 7 | 종양치료 | `sections/oncology/` | 종양치료 클리닉 |
| 8 | CT | `sections/ct/` | 영상진단센터 |
| 9 | 보유장비 | `sections/tools/` | 장비 목록 |
| 10 | 오시는 길 | `sections/map/` | 카카오맵 |
| 11 | 진료안내 | `sections/info/` | 진료시간 안내 |
| 12 | 채용안내 | `sections/employment/` | 채용 폼 |

### 섹션 해시 (네비게이션)
섹션 이동에 사용되는 해시는 `constants/sections.ts`에서 관리됩니다:

```typescript
export const SECTIONS = [
  { sectionTitle: "병원소개", hash: "#intro" },
  { sectionTitle: "정형외과클리닉", hash: "#orthopedic" },
  { sectionTitle: "간담도클리닉", hash: "#biliary" },
  { sectionTitle: "신장투석클리닉", hash: "#dialysis" },
  { sectionTitle: "종양치료클리닉", hash: "#oncology" },
  { sectionTitle: "영상진단센터", hash: "#ct" },
  { sectionTitle: "보유장비", hash: "#tools" },
  { sectionTitle: "진료안내", hash: "#time" },
  { sectionTitle: "채용안내", hash: "#employment" },
];
```

---

## 상수 데이터 (Constants)

### 1. 병원 기본 정보 (`constants/general-info.ts`)

```typescript
export const NAME = "24시 동탄시티 동물의료센터";
export const ADDRESS = "경기도 화성시 동탄지성로 126, 정일 프라자 2층";
export const BOSS = "고재진";
export const BUSINESS_NUMBER = "247-49-00461";
export const PHONE = "031-8003-7533";
export const EMAIL = "dtctamc@gmail.com";
export const DAY_TIME = "오전 9시 - 오후 9시";
export const NIGHT_TIME = "오후 9시 - 오전 9시";
export const LUNCH_TIME = "오후 12시 - 오후 1시";
```

### 2. 장비 정보 (`constants/tools.ts`)
23개의 의료 장비 정보를 배열로 관리합니다.

### 3. 채용 폼 (`constants/employment.ts`)
Zod 스키마로 채용 지원 폼을 검증합니다:
- 지원 직종: 수의사, 동물보건과(자격유/무), 리셉션, 원무과

---

## 콘텐츠 업데이트 가이드

### 🩺 수의사 정보 수정

**파일**: `components/sections/vets/vet-section.tsx`

```typescript
const VETS = [
  {
    name: "고재진",
    title: "대표원장",
    subjects: ["중환자치료(Critical Care)", "중환자수술(Trauma Surgery)"],
    image: vet1,  // public/vets/ 폴더의 이미지
    history: [...],
    expert: [...],
  },
  // ... 다른 수의사
];
```

**수정 순서**:
1. 새 수의사 사진을 `public/vets/` 폴더에 추가
2. `vet-section.tsx` 상단에 이미지 import 추가
3. `VETS` 배열에 새 수의사 정보 추가 또는 수정

---

### 🛠️ 장비 정보 수정

**파일**: `constants/tools.ts`

```typescript
export const TOOLS = [
  {
    image: ct,
    name: "Aquilion CX/128 slice CT",
    description: "64 채널 CT 촬영을 통해서...",
  },
  // ... 다른 장비
];
```

**수정 순서**:
1. 새 장비 사진을 `public/tools/` 폴더에 추가
2. `tools.ts` 상단에 이미지 import 추가
3. `TOOLS` 배열에 새 장비 정보 추가

---

### 📞 병원 기본 정보 수정

**파일**: `constants/general-info.ts`

전화번호, 주소, 진료시간 등 변경 시 이 파일만 수정하면 됩니다.

---

### 🖼️ 랜딩 배너 이미지 수정

**파일**: `components/sections/landing/landing-carousel.tsx`  
**이미지 폴더**: `public/landing/`

---

### 📧 채용 이메일 수신자 변경

**파일**: `app/api/send/route.ts`

```typescript
to: "dtctamc3@gmail.com",  // 이 부분 수정
```

---

## 개발 환경 설정

### 사전 요구사항
- Node.js 18+
- pnpm

### 설치 및 실행

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 빌드
pnpm build

# 프로덕션 실행
pnpm start
```

### 환경 변수 (.env)

```env
# 카카오맵 API 키 (필수)
KAKAO_APP_JS_KEY=your_kakao_js_key

# Resend 이메일 API 키 (채용 기능에 필수)
RESEND_API_KEY=your_resend_api_key
```

---

## 배포 프로세스

### Vercel 자동 배포

1. `main` 브랜치에 push하면 자동 배포됩니다.
2. Vercel 대시보드에서 빌드 로그 확인 가능
3. 환경 변수는 Vercel 프로젝트 설정에서 관리

### 수동 배포

```bash
# 빌드 테스트
pnpm build

# Git 커밋 및 푸시
git add .
git commit -m "업데이트 내용"
git push origin main
```

---

## 외부 서비스 연동

### 1. 카카오맵
- **용도**: 오시는 길 지도 표시
- **설정**: `KAKAO_APP_JS_KEY` 환경 변수
- **관리 콘솔**: https://developers.kakao.com/

### 2. Resend (이메일)
- **용도**: 채용 지원 이메일 발송
- **설정**: `RESEND_API_KEY` 환경 변수
- **관리 콘솔**: https://resend.com/

### 3. Google Analytics
- **Tracking ID**: `G-RWR6CGRP6V`
- **설정 위치**: `app/layout.tsx`

### 4. Naver 웹마스터 도구
- **인증 코드**: `03cc0cb9f6b79e54b2cd62ecf6287c7db8e3fd6e`
- **설정 위치**: `app/layout.tsx`

### 5. Naver 프리미엄 로그 (WCS)
- **WA 코드**: `s_5203609c9751`
- **설정 위치**: `app/layout.tsx`

---

## 알려진 이슈 및 TODO

> 기존 README.md에 기록된 항목들:

- [ ] 동영상 자동재생 가끔씩 안됨
- [ ] 이미지 최적화 필요
- [ ] 안쓰는 사진 정리 필요
- [ ] 안쓰는 파일 정리 필요  
- [ ] 이미지 크기 조절 필요
- [ ] 드릴 이미지 위아래 크롭 필요
- [ ] 슬라이드 크기 조절 필요

---

## 📞 연락처

**장비/수의사 업데이트 관련 문의**:  
- 010-5651-4187 (이정우)

---

## 📅 업데이트 이력

| 날짜 | 내용 |
|------|------|
| 2024.04.27 | 오른쪽 floating 메뉴 삭제, 글자 크게 변경 |

---

*이 문서는 2024년 12월 작성되었습니다.*
