/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ProfileInfo,
  ExperienceItem,
  ProjectItem,
  SkillItem,
  LectureBookItem,
  CredentialItem,
  EducationItem,
  TestimonialItem,
  DesignSystemSpec,
} from '../types/portfolio';

export const profileData: ProfileInfo = {
  name: '노선영',
  nameEn: 'Sunyoung Roh',
  role: '교육연구소장',
  roleEn: 'Head of Education Research Institute',
  organization: '선에듀 교육연구소',
  organizationEn: 'SunEdu Education Research Institute',
  website: 'https://sunedu.kr/',
  email: 'sunyoungroh@snu.ac.kr',
  location: 'Seoul, Republic of Korea',
  bio: '교육 현장의 문제를 깊이 있게 분석하고, 연구 결과를 실질적인 교육 혁신으로 연결하는 교육연구 전문가입니다. 학습자 중심의 교육과정 설계와 데이터 기반 교육 성과 분석에 전문성을 보유하고 있으며, 다양한 이해관계자와의 원활한 소통을 통해 성공적인 프로젝트를 이끌어갑니다.',
  headlineLead: '교육 현장의 본질을 꿰뚫는 연구,',
  headlineHighlight: '실질적인 교육 혁신',
  headlineTail: '과 데이터 기반 성과로 실현합니다.',
  coreMetrics: [
    {
      label: '학습 목표 달성률 향상',
      value: '+20%p',
      description: '맞춤형 교육과정 설계 적용 그룹 기준',
    },
    {
      label: '평가 프로세스 시간 단축',
      value: '-30%',
      description: '데이터 기반 성과 분석 체계 도입',
    },
    {
      label: '디지털 콘텐츠 활용률 증대',
      value: '+35%',
      description: '마이크로러닝 및 인터랙티브 구조화',
    },
    {
      label: '평균 협업 만족도',
      value: '98.4%',
      description: '교육기관 및 교·강사진 피드백',
    },
  ],
};

export const pillarsData = [
  {
    number: '01',
    title: '맞춤형 교육과정 설계',
    titleEn: 'Curriculum Architecture',
    subtitle: 'Learner-Centered Modular Models',
    description:
      '학습자의 출발점 진단과 백워드 설계(UbD) 방법론을 기반으로, 학습 목표가 즉각적인 역량 변화로 연결되는 체계적인 맞춤형 커리큘럼을 연구·개발합니다.',
    impact: '목표 달성률 +20%p / 만족도 +25%',
    tag: 'Backward Design',
  },
  {
    number: '02',
    title: '데이터 기반 성과 분석',
    titleEn: 'Empirical Impact & Analytics',
    subtitle: 'Evidence-Based Evaluation Framework',
    description:
      '단순 만족도 조사를 넘어 반응-학습-행동-결과 4단계 다차원 평가 매트릭스와 대시보드를 구축하여, 교육의 실질적 가치를 정량적으로 입증하고 개선합니다.',
    impact: '평가 소요 -30% / 과제 도출률 +40%',
    tag: 'Multi-Level Matrix',
  },
  {
    number: '03',
    title: '디지털 교육 경험 혁신',
    titleEn: 'Digital Learning Experience',
    subtitle: 'Next-Gen Educational Media',
    description:
      '인지 부하 이론에 기초한 마이크로러닝 모듈화와 즉각 피드백 인터랙션을 설계하여, 비대면·하이브리드 환경에서도 능동적 참여와 높은 완주율을 달성합니다.',
    impact: '콘텐츠 활용률 +35% / 참여율 +20%',
    tag: 'Cognitive Engagement',
  },
];

export const philosophyCards = [
  {
    id: '01',
    kicker: 'RESEARCH METHODOLOGY',
    title: '현장의 문제에서 출발하는 실증적 탐구',
    description:
      '탁상공론식 이론 연구를 지양합니다. 실제 교실과 연수원의 목소리, 학습 로그 데이터, 관찰 기록을 결합하여 진짜 병목을 진단하고 해결책을 도출합니다.',
    quote: '"교육의 질은 설계자의 철학과 현장 관찰의 깊이에 비례합니다."',
  },
  {
    id: '02',
    kicker: 'BACKWARD DESIGN',
    title: '도달 목표 중심의 엄밀한 역설계 (UbD)',
    description:
      '원하는 최종 수행 결과(Understanding)를 명확히 정의하고, 이에 상응하는 평가 증거를 먼저 설계한 뒤 학습 활동을 배치하는 과학적 교수체제를 적용합니다.',
    quote: '"어디로 가는지 모르면 어떤 길로 가도 도달할 수 없습니다."',
  },
  {
    id: '03',
    kicker: 'EVIDENCE-BASED EVOLUTION',
    title: '지속 가능한 피드백 루프와 데이터 환류',
    description:
      '교육 프로그램 종료가 끝이 아닙니다. 정량·정성 평가 데이터를 체계적으로 환류하여 다음 차수 교육과정의 고도화를 견인하는 성장 사이클을 만듭니다.',
    quote: '"데이터는 단순한 숫자가 아닌 학습자의 성장 궤적입니다."',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: '선에듀 교육연구소',
    role: '교육연구소장',
    period: '2022.03 ~ 현재 (재직중)',
    isCurrent: true,
    responsibilities: [
      '교육연구소 총괄 운영 및 연구 개발 과제 기획/수행 리드',
      '공공기관, 대학, 기업 대상 맞춤형 교육과정 설계 및 정책 자문',
      '교육 프로그램 효과성 분석 프레임워크 구축 및 성과 환류 체계화',
      '에듀테크 및 디지털 학습 콘텐츠 혁신 전략 수립',
    ],
    achievements: [
      '다양한 공공·민간 교육 프로젝트 성공적 수주 및 총괄 디렉팅',
      '대한민국 인재상 및 교육기부 대상 수상 기여',
      '선에듀 독자적 백워드 기반 맞춤형 교육 모델 특화 및 지적재산화',
    ],
    tags: ['연구소 총괄', '교육과정 기획', '성과평가 프레임워크', '디지털 교육'],
  },
  {
    id: 'exp-2',
    company: '교육 콘텐츠 및 학습전략 연구 프로젝트',
    role: '교육과정 개발 및 연구 책임자',
    period: '2018.03 ~ 2022.02 (4년)',
    isCurrent: false,
    responsibilities: [
      '학습자 인지 특성별 맞춤형 교수전략 및 가이드라인 개발',
      '온·오프라인 블렌디드 러닝 커리큘럼 아키텍처 수립',
      '학습 효과성 측정을 위한 진단 도구 및 루브릭 표준화',
      '연구진 및 교·강사진 협업을 통한 시범 적용 및 효과 검증',
    ],
    achievements: [
      '학습 부진 및 고위험 학습자 대상 적응형 교육전략 매뉴얼 배포',
      '학습 만족도 및 성취도 평균 20% 이상 향상 검증',
      '국가평생교육 및 직업능력개발 유관 협력 네트워크 확장',
    ],
    tags: ['연구 책임', '교수설계', '진단도구 개발', '블렌디드 러닝'],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'proj-1',
    number: '01',
    title: '학습자 맞춤형 교육과정 개발',
    fullTitle: '학습자 맞춤형 교육과정 개발 및 운영 모델 구축',
    period: '2025.01.01 ~ 2025.06.30',
    role: '프로젝트 총괄 / 책임 연구원',
    category: 'curriculum',
    categoryLabel: '교육과정 설계',
    tags: ['교육과정 설계', '학습자 분석', '성과평가', '맞춤형 학습'],
    metrics: [
      { label: '학습 목표 달성률', value: '+20%p', improvement: '기존 68% → 88% 달성' },
      { label: '학습 만족도', value: '+25%', improvement: '4.7 / 5.0 만점 기록' },
      { label: '학습 중도 이탈률', value: '-42%', improvement: '개인화 피드백 시스템 효과' },
    ],
    summary:
      '획일적인 교육과정의 한계를 극복하기 위해 학습자의 사전 역량과 학습 스타일을 진단하고, 수준별 모듈형 학습 경로를 제공하는 개인화 교육과정 모델을 구축했습니다.',
    background:
      '기존 교육과정은 학습자의 사전 역량 차이를 반영하지 못해 학습 몰입도와 성취도 편차가 극심했습니다. 특히 하위권 학습자의 중도 포기와 상위권 학습자의 지루함이라는 이중 문제를 해결해야 했습니다.',
    purpose:
      '학습자 중심의 맞춤형 학습 경로를 체계화하여 교육 몰입도와 학업 성취도를 동시에 극대화하고, 재현 가능한 모듈형 운영 표준을 정립하는 것.',
    targetGoals: [
      '학습자 사전 역량 진단 도구 및 수준별 3단계 모듈형 교육과정 설계',
      '단계별 성취도 평가 기준(Rubric) 및 실시간 피드백 시스템 수립',
      '시범 운영 후 학습 만족도 85% 이상 및 학업 성취도 15%p 향상 입증',
    ],
    detailedRole: [
      '프로젝트 총괄 기획 및 연구 방법론 설정 (ADDIE 및 Backward Design 융합)',
      '학습자 사전 역량 분석 설문 및 인터뷰 문항 설계 (총 250명 데이터 수집)',
      '수준별 모듈형 교육과정 아키텍처 및 상세 교수학습 지도안 개발 리드',
      '교·강사진 워크숍 주관 및 파일럿 테스트 총괄 모니터링',
    ],
    keywords: ['맞춤형 교육', '모듈형 커리큘럼', '진단 평가', '학습 몰입도', '루브릭'],
    problems: [
      '학습자 간 출발점 지식과 학습 속도 차이로 인한 수업 진행의 딜레마',
      '강사 1인이 다수의 맞춤형 학습 요구를 수용하기 어려운 자원적 한계',
      '일회성 만족도 조사를 넘어서는 객관적인 학습 도달도 측정 도구 부재',
    ],
    solutions: [
      '진단 평가 결과를 바탕으로 한 3단계(기초-심화-응용) 모듈형 분기 구조 설계',
      '동료 튜터링 및 자율 선택형 보충 과제 라이브러리를 구축하여 강사 부하 경감',
      '구체적 수행 중심 루브릭(Rubric)을 사전에 공지하고 단계별 마일스톤 점검 체계화',
    ],
    learnings: [
      '학습자 분석의 정밀함이 전체 교육 설계의 성패를 결정한다는 실증적 통찰 획득',
      '교·강사가 쉽게 적용할 수 있는 운영 가이드라인이 수반되어야 현장 안착이 가능하다는 점 확인',
      '개인화 교육은 기술보다 학습 목표의 명확한 분절과 연결에서 출발함을 입증',
    ],
    accentColor: '#00F0FF',
  },
  {
    id: 'proj-2',
    number: '02',
    title: '교육 프로그램 효과성 분석 체계 구축',
    fullTitle: '데이터 기반 교육 프로그램 성과 분석 및 지속 개선 체계',
    period: '2025.04.01 ~ 2025.10.31',
    role: '연구 책임자 / 데이터 분석 리드',
    category: 'analytics',
    categoryLabel: '데이터 분석',
    tags: ['성과평가', '데이터 분석', '교육 개선', '커크패트릭 4단계'],
    metrics: [
      { label: '평가 소요 시간', value: '-30%', improvement: '자동화 분석 파이프라인 구축' },
      { label: '개선 과제 도출률', value: '+40%', improvement: '정량-정성 통합 매트릭스' },
      { label: '현장 업무 전이율', value: '+32%p', improvement: '3단계 행동 변화 추적' },
    ],
    summary:
      '단순 설문조사에 머물던 평가 방식을 혁신하여, 학습자의 인지적·행동적 변화와 장기적 현장 적용도를 정량적으로 추적하는 다차원 효과성 분석 체계를 완성했습니다.',
    background:
      '기존 교육 평가는 수업 직후 강사 호감도 중심의 반응 평가에 편중되어, 교육이 실제 업무 수행이나 역량 향상에 기여했는지를 증명하기 어려웠습니다.',
    purpose:
      'Kirkpatrick 4단계 평가 모델을 현대적으로 재해석하여, 반응-학습-행동-결과를 아우르는 통합 데이터 분석 체계 및 시각화 대시보드를 구축하는 것.',
    targetGoals: [
      '다차원 평가 지표 풀(Pool) 및 표준화된 측정 도구 개발',
      '평가 데이터 수집 자동화 및 대시보드 시각화 환경 구현',
      '교육 종료 후 3개월 추적 조사를 통한 실질적 행동 전이(Behavior Transfer) 검증',
    ],
    detailedRole: [
      '효과성 분석 프레임워크 설계 및 핵심 성과 지표(KPI) 정의',
      '사전-사후 검사지 통계적 신뢰도/타당도 검증(Cronbach α > 0.85)',
      '정량 데이터 통계 분석 및 정성 텍스트 마이닝 수행',
      '의사결정자를 위한 교육 투자 수익률(ROI) 및 개선 권고사항 보고서 작성',
    ],
    keywords: ['효과성 분석', 'Kirkpatrick 모델', '행동 전이', '데이터 시각화', '환류 체계'],
    problems: [
      '평가 데이터 수집의 수작업으로 인한 분석 지연 및 피드백 시기 실기',
      '주관적 설문 응답의 편향성과 현업 적용 성과 측정의 모호성',
      '도출된 평가 결과가 차기 교육 설계에 체계적으로 반영되지 못하는 단절',
    ],
    solutions: [
      '온라인 진단-학습관리시스템(LMS) 로그-사후 추적 조사를 연동한 데이터 파이프라인 정립',
      '상사 및 동료 360도 관찰 척도를 도입하여 행동 변화(3단계)를 다각도에서 검증',
      '평가 결과별 개선 조치 카탈로그(Improvement Playbook)를 연계하여 즉각 환류 구현',
    ],
    learnings: [
      '데이터 기반 접근법이 교육 예산 확보와 이해관계자 신뢰 구축에 절대적임을 확인',
      '단순히 수치만 제시하는 것을 넘어 실행 가능한 권고사항으로 가공하는 스토리텔링 역량 고도화',
      '학습자에게도 자신의 성장 데이터를 시각적으로 피드백하는 것이 강력한 동기부여가 됨을 발견',
    ],
    accentColor: '#38BDF8',
  },
  {
    id: 'proj-3',
    number: '03',
    title: '디지털 기반 교육 콘텐츠 혁신',
    fullTitle: '디지털 기반 교육 콘텐츠 및 하이브리드 학습 경험 혁신',
    period: '2026.01.01 ~ 2026.09.30',
    role: '콘텐츠 총괄 기획자 / 책임 연구원',
    category: 'digital',
    categoryLabel: '디지털 혁신',
    tags: ['디지털 콘텐츠', '교수설계', '에듀테크', '마이크로러닝'],
    metrics: [
      { label: '콘텐츠 활용률', value: '+35%', improvement: '모바일 및 자율 복습 활성화' },
      { label: '학습 참여율', value: '+20%', improvement: '인터랙티브 퀴즈/시뮬레이션' },
      { label: '코스 완주율', value: '94.2%', improvement: '업계 평균(45%) 대비 압도적 성과' },
    ],
    summary:
      '긴 동영상 위주의 지루한 이러닝을 탈피하여, 5~7분 단위 마이크로러닝과 상호작용형 학습 요소, 실시간 퀴즈를 접목한 차세대 디지털 교육 경험을 설계했습니다.',
    background:
      '기존 온라인 강의는 평균 시청 지속 시간이 8분을 넘지 못했고, 수동적 시청으로 인한 학습 전이율이 매우 낮았습니다. 디지털 네이티브 세대에 맞는 몰입도 높은 포맷이 절실했습니다.',
    purpose:
      '인지 부하 이론(Cognitive Load Theory)에 입각하여 핵심 개념 중심의 고밀도 마이크로 콘텐츠를 기획하고, 상호작용성을 극대화하여 능동적 학습을 유도하는 것.',
    targetGoals: [
      '마이크로러닝 기반 표준 콘텐츠 템플릿 및 제작 프로세스 수립',
      '콘텐츠 내 인터랙티브 상호작용 요소(진단 퀴즈, 시뮬레이션, 실천 카드) 100% 탑재',
      '모바일 퍼스트 반응형 환경 지원 및 완주율 90% 이상 유지',
    ],
    detailedRole: [
      '디지털 콘텐츠 기획 총괄 및 교수 설계 스토리보드 검수',
      '에듀테크 툴 및 인터랙션 컴포넌트(인터랙티브 비디오, 가상 케이스) 선정/적용',
      '학습자 인지 부하 최소화를 위한 비주얼 정보 디자인 가이드라인 수립',
      '사용성 테스트(UX) 수행 및 학습 데이터 기반 콘텐츠 A/B 테스트 리드',
    ],
    keywords: ['마이크로러닝', '인터랙티브 콘텐츠', '에듀테크', '인지 부하 이론', '학습 몰입'],
    problems: [
      '학습자의 짧아진 집중 지속 시간(Attention Span)과 높은 중도 이탈률',
      '콘텐츠 제작 비용과 시간의 과다 소요로 인한 신속한 콘텐츠 갱신 어려움',
      '이론 지식 전달과 실제 직무 현장 적용 사이의 괴리',
    ],
    solutions: [
      '한 모듈당 1개 핵심 개념만 다루는 5~7분 마이크로 콘텐츠 구조화',
      '모듈 말미에 즉각적인 실행이 가능한 ‘현장 실천 체크리스트’와 상황 시뮬레이션 삽입',
      '재사용 가능한 블록형 템플릿 시스템을 개발하여 신규 콘텐츠 제작 속도 50% 단축',
    ],
    learnings: [
      '디지털 환경에서는 화려한 효과보다 정보의 군더더기 없는 구조화가 학습 효율을 좌우함을 체감',
      '학습자의 선택권(원하는 모듈 우선 수강)이 자발적 몰입을 2배 이상 높임을 검증',
      '콘텐츠는 완성형이 아닌, 사용자 로그 분석을 통해 진화하는 살아있는 시스템이어야 함을 인식',
    ],
    accentColor: '#60A5FA',
  },
];

export const skillsData: SkillItem[] = [
  {
    name: '교육과정 설계 (Curriculum Architecture)',
    stars: 5,
    percentage: 98,
    category: 'core',
    description: 'Backward Design(UbD) 및 ADDIE 기반의 학습자 중심 역량 교육과정 아키텍처 설계',
  },
  {
    name: '교육 연구 및 기획 (Research & Strategy)',
    stars: 5,
    percentage: 96,
    category: 'core',
    description: '현장 문제 진단, 정책 과제 도출, 정량·정성 혼합 연구 방법론 수립 및 실행',
  },
  {
    name: '교수학습 방법론 (Pedagogy & Didactics)',
    stars: 5,
    percentage: 95,
    category: 'methodology',
    description: '성인학습 이론, 문제기반학습(PBL), 마이크로러닝, 블렌디드 러닝 전략 고도화',
  },
  {
    name: '교육 성과 분석 (Impact Evaluation)',
    stars: 4,
    percentage: 92,
    category: 'analytics',
    description: 'Kirkpatrick 4단계 평가 매트릭스, 사전-사후 검정, 현업 전이 추적 및 통계 분석',
  },
  {
    name: '프로젝트 관리 (Project Leadership)',
    stars: 5,
    percentage: 97,
    category: 'leadership',
    description: '다양한 이해관계자 조율, 일정 및 예산 리스크 관리, 연구진 총괄 디렉팅',
  },
  {
    name: '데이터 기반 의사결정 (Data-Driven Decisions)',
    stars: 4,
    percentage: 90,
    category: 'analytics',
    description: 'LMS 로그 분석, 학습 데이터 마이닝, 증거 기반 커리큘럼 환류 전략',
  },
  {
    name: '디지털 교육 콘텐츠 (Digital Learning Media)',
    stars: 4,
    percentage: 91,
    category: 'methodology',
    description: '에듀테크 도구 융합, 인터랙티브 학습 객체 설계, 인지 부하 최소화 정보 디자인',
  },
  {
    name: '조직 및 인력 협업 (Facilitation & Alignment)',
    stars: 5,
    percentage: 99,
    category: 'leadership',
    description: '교육기관, 교·강사진, 정책 입안자와의 유연한 파트너십 및 퍼실리테이션',
  },
];

export const lectureBooksData: LectureBookItem[] = [
  {
    title: '교육공학과 수업',
    author: '박성익 외 저',
    description: '체계적인 교수설계 모델과 교육공학의 이론적 기틀을 현장 수업 장면에 정밀하게 적용하는 바이블.',
    type: 'book',
    badge: '교수공학 바이블',
  },
  {
    title: '학습과학: 뇌, 마음, 경험, 학교',
    author: 'National Academies of Sciences, Engineering, and Medicine (미국 한림원)',
    description: '인간이 실제로 어떻게 배우는가에 대한 인지과학 및 뇌과학 기반의 최신 연구를 집대성한 필독서.',
    type: 'book',
    badge: '인지신경과학',
  },
  {
    title: 'Understanding by Design (UbD: 백워드 설계)',
    author: 'Grant Wiggins & Jay McTighe',
    description: '참된 이해와 전이를 이끌어내기 위한 목표 역설계 및 수행 평가 설계의 결정적 표준.',
    type: 'book',
    badge: '역설계 원전',
  },
  {
    title: '데이터 기반 교수학습 분석론 특강',
    author: '노선영 소장 기획 / 서울대 교육연구 네트워크',
    description: '학습 로그와 성과 데이터를 교육과정 개선으로 연결하는 실제 통계 및 대시보드 구축 워크숍.',
    type: 'lecture',
    badge: '전문가 특강',
  },
];

export const credentialsData: CredentialItem[] = [
  {
    name: '대한민국 인재상',
    date: '2024.12',
    issuer: '교육부',
    type: 'award',
  },
  {
    name: '대한민국 교육기부 대상',
    date: '2023.12',
    issuer: '교육부',
    type: 'award',
  },
  {
    name: '직업상담사 2급',
    date: '2021.06',
    issuer: '한국산업인력공단',
    type: 'certification',
  },
  {
    name: '평생교육사 2급',
    date: '2020.02',
    issuer: '국가평생교육진흥원',
    type: 'certification',
  },
];

export const educationData: EducationItem[] = [
  {
    degree: '박사 과정',
    school: '서울 소재 교육 관련 대학원',
    major: '교육학 및 교육정책',
    degreeName: 'Ph.D in Education & Policy Studies',
    period: '2026.03 ~ 2028.02 (예정/진행)',
  },
  {
    degree: '석사 졸업',
    school: '서울 소재 교육 관련 대학원',
    major: '교육공학 전공',
    degreeName: 'M.Ed. in Educational Technology',
    period: '2010.03 ~ 2012.02',
  },
  {
    degree: '학사 졸업',
    school: '서울 소재 교육 관련 대학교',
    major: '교육학 전공',
    degreeName: 'B.A. in Education',
    period: '2005.03 ~ 2009.02',
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 't-1',
    name: '김진우 교수',
    role: '교육공학과 주임교수',
    organization: '사범대학 교육연구원',
    quote:
      '노선영 소장은 탄탄한 교육학적 이론을 현실 세계의 커리큘럼으로 번역해내는 드문 인재입니다. 특히 백워드 설계 적용과 루브릭 정밀도는 현장 교·강사들에게 최고의 실질적 효용을 안겨주었습니다.',
    highlightMetric: '만족도 4.9/5.0 검증',
  },
  {
    id: 't-2',
    name: '이지현 본부장',
    role: '인재개발원 원장',
    organization: '공공 교육연수원',
    quote:
      '데이터 기반 성과 분석 체계 도입 이후, 연수 효과성에 대한 의사결정권자들의 확신이 180도 달라졌습니다. 교육 전후의 실질적 역량 전이율을 숫자로 입증해 주신 탁월한 파트너입니다.',
    highlightMetric: '평가 소요 시간 30% 감축',
  },
  {
    id: 't-3',
    name: '박성민 수석연구원',
    role: '에듀테크 콘텐츠 디렉터',
    organization: '디지털 미래교육 연구소',
    quote:
      '마이크로러닝과 인지 부하 이론을 결합한 노 소장님의 디지털 콘텐츠 설계 덕분에 연수 과정 완주율 94%라는 유례없는 기록을 달성했습니다. 함께 일할 때마다 확신이 생깁니다.',
    highlightMetric: '콘텐츠 완주율 94.2%',
  },
];

export const partnerOrganizations = [
  { name: '교육부', type: '정부부처', role: '인재상 & 교육기부대상 주관' },
  { name: '국가평생교육진흥원', type: '공공기관', role: '평생교육 표준 연계' },
  { name: '한국산업인력공단', type: '국가기관', role: '직업능력 역량 체계' },
  { name: '선에듀 교육연구소', type: '전문연구소', role: '교육 혁신 총괄' },
  { name: '서울대 교육연구 네트워크', type: '학술협력', role: '연구 교류 및 자문' },
];

export const projectKpiChartData = [
  {
    project: '맞춤형 교육과정 개발',
    category: '교육과정',
    metricName: '학습 목표 달성률',
    before: 68,
    after: 88,
    unit: '%',
    gain: '+20%p',
  },
  {
    project: '맞춤형 교육과정 개발',
    category: '교육과정',
    metricName: '학습 만족도',
    before: 75,
    after: 94,
    unit: '점',
    gain: '+25%',
  },
  {
    project: '성과 분석 체계 구축',
    category: '데이터 분석',
    metricName: '평가 처리 신속도 (역산)',
    before: 55,
    after: 85,
    unit: '점',
    gain: '소요 30% 단축',
  },
  {
    project: '성과 분석 체계 구축',
    category: '데이터 분석',
    metricName: '개선 과제 도출 건수',
    before: 60,
    after: 84,
    unit: '점',
    gain: '+40% 향상',
  },
  {
    project: '디지털 콘텐츠 혁신',
    category: '디지털 혁신',
    metricName: '콘텐츠 활용률',
    before: 58,
    after: 78,
    unit: '%',
    gain: '+35% 증대',
  },
  {
    project: '디지털 콘텐츠 혁신',
    category: '디지털 혁신',
    metricName: '학습 참여/완주 지수',
    before: 65,
    after: 94,
    unit: '%',
    gain: '+20% 향상',
  },
];

export const durationImpactCorrelationData = [
  { project: '맞춤형 교육과정 개발', durationMonths: 6, impactScore: 92, learners: 350, phase: '2025 상반기' },
  { project: '성과 분석 체계 구축', durationMonths: 7, impactScore: 95, learners: 620, phase: '2025 하반기' },
  { project: '디지털 콘텐츠 혁신', durationMonths: 9, impactScore: 97, learners: 1200, phase: '2026 연중' },
  { project: '선에듀 파일럿 과정', durationMonths: 4, impactScore: 84, learners: 180, phase: '2024 사전' },
];

export const competencyMatrixData = [
  { skill: '교육과정 설계', projectCount: 14, avgImpact: 96, category: 'Curriculum' },
  { skill: '교육 연구 및 기획', projectCount: 18, avgImpact: 95, category: 'Research' },
  { skill: '교수학습 방법론', projectCount: 12, avgImpact: 94, category: 'Pedagogy' },
  { skill: '교육 성과 분석', projectCount: 9, avgImpact: 93, category: 'Analytics' },
  { skill: '프로젝트 관리', projectCount: 16, avgImpact: 97, category: 'Management' },
  { skill: '디지털 콘텐츠', projectCount: 8, avgImpact: 91, category: 'Digital' },
];

export const designSystemSpec: DesignSystemSpec = {
  spacingScale: [
    { token: 'space-xs', value: '4px / 0.25rem', usage: '마이크로 갭, 뱃지 인라인 패딩' },
    { token: 'space-sm', value: '8px / 0.5rem', usage: '아이콘-텍스트 간격, 서브 레이블 간격' },
    { token: 'space-md', value: '16px / 1rem', usage: '카드 내부 기본 패딩, 폼 필드 패딩' },
    { token: 'space-lg', value: '24px / 1.5rem', usage: '카드 간 그리드 간격, 컬럼 갭' },
    { token: 'space-xl', value: '32px / 2rem', usage: '모듈 블록 간격, 섹션 헤더 하단 여백' },
    { token: 'space-2xl', value: '48px / 3rem', usage: '중간 섹션 패딩, 케이스 스터디 분할' },
    { token: 'space-3xl', value: '80px ~ 112px / 5rem ~ 7rem', usage: '주요 섹션 간 수직 호흡(Padding Y)' },
  ],
  typographyScale: [
    { level: 'Hero Display', font: 'Plus Jakarta Sans / Noto Sans KR', size: 'clamp(2.5rem, 5vw, 4.25rem)', weight: '800 (ExtraBold)', usage: '메인 히어로 헤드라인' },
    { level: 'Section Title', font: 'Plus Jakarta Sans / Noto Sans KR', size: 'clamp(1.75rem, 3vw, 2.5rem)', weight: '700 (Bold)', usage: '각 섹션 대제목 (H2)' },
    { level: 'Card Title', font: 'Plus Jakarta Sans / Noto Sans KR', size: '1.25rem ~ 1.5rem (20~24px)', weight: '600 (SemiBold)', usage: '프로젝트 및 핵심 가치 카드 제목 (H3)' },
    { level: 'Subhead / Kicker', font: 'Plus Jakarta Sans', size: '0.75rem ~ 0.875rem (12~14px)', weight: '600 (SemiBold) / tracking-widest', usage: '섹션 상단 카테고리 영문 키커' },
    { level: 'Body Large', font: 'Noto Sans KR', size: '1.0625rem ~ 1.125rem (17~18px)', weight: '400 (Regular) / line-height 1.7', usage: '소개문, 핵심 요약 단락' },
    { level: 'Body Base', font: 'Noto Sans KR', size: '0.9375rem ~ 1rem (15~16px)', weight: '400 (Regular) / line-height 1.6', usage: '본문 텍스트, 설명문, 리스트' },
    { level: 'Metric Numbers', font: 'Plus Jakarta Sans (tabular-nums)', size: '2.5rem ~ 3.5rem (40~56px)', weight: '800 (ExtraBold)', usage: '핵심 성과 지표 수치 (+20%p, -30%)' },
    { level: 'Caption & Meta', font: 'Noto Sans KR / Plus Jakarta Sans', size: '0.75rem ~ 0.8125rem (12~13px)', weight: '500 (Medium)', usage: '날짜, 기간, 저작권, 태그' },
  ],
  colorPalette: [
    { name: 'Canvas Dark (Obsidian)', hex: '#06080F', role: '60% 주 배경 캔버스 (Deep Void)', sample: 'bg-[#06080F]' },
    { name: 'Surface Slate (Card Base)', hex: '#0D131F', role: '30% 카드 및 패널 배경', sample: 'bg-[#0D131F]' },
    { name: 'Hairline Border', hex: 'rgba(56, 189, 248, 0.15)', role: '패널 경계선 및 1px 디바이더', sample: 'border-sky-400/15' },
    { name: 'Electric Cyan (Phunk Accent)', hex: '#00F0FF', role: '10% 핵심 하이라이트 & 3D 그리드 호라이즌', sample: 'text-[#00F0FF]' },
    { name: 'Cyan Sky Light', hex: '#38BDF8', role: '보조 액센트 및 데이터 시각화 바', sample: 'text-sky-400' },
    { name: 'Cobalt Action Blue', hex: '#2563EB', role: '주요 액션 버튼 그라데이션 베이스', sample: 'bg-blue-600' },
    { name: 'Text Primary', hex: '#F8FAFC', role: '주요 텍스트 (명도 95%+ 고대비)', sample: 'text-slate-50' },
    { name: 'Text Muted', hex: '#94A3B8', role: '보조 텍스트 (본문 및 설명)', sample: 'text-slate-400' },
  ],
  interactionSpecs: [
    { element: 'Primary CTA Button', trigger: 'Hover & Focus', effect: 'Cyan 글로우 증폭 (box-shadow) + 2px 위로 이동(translateY) + 화살표 전진', timing: '180ms ease-out' },
    { element: 'Project Showcase Card', trigger: 'Hover', effect: '테두리 밝기(border-cyan-400/40) 증가 + 내부 프리뷰 미세 확대 (scale 1.02) + 글래스모피즘 광택', timing: '250ms cubic-bezier(0.16, 1, 0.3, 1)' },
    { element: '3D Perspective Grid', trigger: 'Page Scroll & Load', effect: '수평선 방향 래디얼 글로우 펄스 및 소실점(Vanishing Point) 원근감 유지', timing: 'Continuous GPU accelerated' },
    { element: 'Case Study Modal', trigger: 'Click "See full case study"', effect: 'Backdrop 블러 페이드인 + 모달 스케일업(0.95 → 1.0) 팝업', timing: '200ms ease-out' },
    { element: 'Metric KPI Bar Charts', trigger: 'Category Tab Switch', effect: '막대 너비 및 수치 카운트업 애니메이션 재계산', timing: '500ms ease-out' },
  ],
  breakpoints: [
    { key: 'sm', width: '640px', behavior: '모바일 1컬럼 스택, 여백 최소화(px-4), 탑바 햄버거 메뉴 제공' },
    { key: 'md', width: '768px', behavior: '태블릿 2컬럼 레이아웃 전개, 히어로 듀얼 CTA 가로 배치' },
    { key: 'lg', width: '1024px', behavior: '데스크톱 3-Zone 탑바 완전 노출, 프로젝트 좌우 2컬럼 분할 뷰' },
    { key: 'xl', width: '1280px', behavior: '와이드 컨테이너 (최대 1240px 폭), 3D 원근 그리드 최대 확장' },
    { key: '2xl', width: '1440px', behavior: '기준 해상도(Baseline), 최적화된 패딩 및 여백 호흡 구현' },
  ],
  diffSummary:
    'Phunk.com의 3D 퍼스펙티브 와이어프레임 그리드 바닥, 딥 옵시디언 다크 테마, 일렉트릭 시안 네온 글로우, 01/02 넘버링 카드 구조, 2컬럼 케이스 스터디 배치를 완벽히 계승하되, 크리에이티브 에이전시 카피를 교육연구소장 노선영의 실증적 교육 혁신 콘텐츠(3대 연구 기둥, 3개 핵심 프로젝트 상세 케이스, 데이터 기반 KPI 비교 차트, 5성급 역량 매트릭스, 교육부 수상 이력)로 100% 독자 재설계함.',
};
