import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '쇼핑몰 라이프사이클 시스템 구축 및 고도화',
      startedAt: '2022-11',
      where: 'NHN Commerce 쇼핑몰 도메인 BE 개발',
      descriptions: [
        {
          content: '프로젝트 개요',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '레거시 PHP 시스템의 효율성 및 확장성 한계를 해결하기 위해 Kotlin, Spring 으로 리아키텍처링 진행',
            },
          ],
        },
        {
          content: '2025년 쇼핑몰 이전 기능 개발',
          weight: 'MEDIUM',
        },
        {
          content: '2025년 쇼핑몰 신청/설치 속도 최적화',
          weight: 'MEDIUM',
        },
        {
          content: '2024년 쇼핑몰 실시간 설치 진행률 제공 기능 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'SSE(Server-Sent Events) 도입하여 실시간 설치 진행률 제공',
            },
          ],
        },
        {
          content: '2024년 디스크 사용량 기반 과금 시스템 개발',
          weight: 'MEDIUM',
        },
        {
          content: '2024년 쇼핑몰 삭제 배치 개발',
          weight: 'MEDIUM',
        },
        {
          content: '2024년 쇼핑몰 신청 현황 및 라이브 상점 통계 기능 개발',
          weight: 'MEDIUM',
        },
        {
          content: '2023년 정기결제 기반 연장 기능 개발',
          weight: 'MEDIUM',
        },
        {
          content: '2023년 쇼핑몰 라인업 업그레이드/다운그레이드 기능 개발',
          weight: 'MEDIUM',
        },
        {
          content: '2023년 쇼핑몰 신규 신청 기능 개발',
          weight: 'MEDIUM',
        },
      ],
    },
    {
      title: 'CMDB 구축',
      startedAt: '2024-06',
      endedAt: '2024-12',
      where: 'NHN Commerce CMDB 관리 시스템 개발',
      descriptions: [
        {
          content: '프로젝트 개요',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '쇼핑몰의 DB 계정 yml 하드코딩에 따른 ISMS 보안 결함 발생',
            },
          ],
        },
        {
          content: 'Vault 기반 DB 접근 계정 권한 자동화',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'DB 계정을 Vault 로 통합관리하고, 서버 변경시 권한 자동 동기화',
            },
          ],
        },
        {
          content: 'CMDB 모니터링 시스템 구축',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '서버 변경 이력 추적 및 감사 로그 제공',
            },
            {
              content: '무결성 검증 배치 기반으로 데이터 불일치 시 자동 알림 시스템 구축',
            },
          ],
        },
      ],
    },
    {
      title: '신규 백오피스 시스템 구축 및 유지보수',
      startedAt: '2023-07',
      endedAt: '2024-06',
      where: 'NHN Commerce 백오피스 도메인 개발',
      descriptions: [
        {
          content: '프로젝트 개요',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'NHN Commerce 사내 업무를 위한 백오피스 플랫폼 신규 구축 및 운영',
            },
            {
              content: '정책, 메뉴, 권한 등 도메인 전반의 구조화 및 고도화',
            },
          ],
        },
        {
          content: '2024년 망분리 PC 제어 시스템 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '각 메뉴/기능별 정책에 따른 망분리(내부/외부망) PC 제어 기능 구현',
            },
          ],
        },
        {
          content: '2024년 인사정보 기반 계정 관제 배치 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '신규 입사자/퇴사자 계정 정보 자동 동기화',
            },
            {
              content: '미로그인 임직원 계정 자동 비활성화',
            },
          ],
        },
        {
          content: '2023년 1:1 문의 기능 리팩토링 및 통계 시스템 개발',
          weight: 'MEDIUM',
        },
        {
          content: '2023년 SSO(사내 인증 시스템) 로그인 연동 기능 개발',
          weight: 'MEDIUM',
        },
        {
          content: '2023년 메뉴 권한 제어 및 이력 관리 기능 개발',
          weight: 'MEDIUM',
        },
      ],
    },
  ],
};

export default project;
