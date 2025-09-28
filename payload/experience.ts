import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'NHN Commerce',
      positions: [
        {
          title: 'Backend Developer (서비스 개발팀)',
          startedAt: '2022-09',
          descriptions: [
            'B2B 쇼핑몰 솔루션을 제공하는 SaaS 기업',
            '쇼핑몰 라이프사이클 관리 시스템 BE 개발 및 고도화',
            '신규 백오피스 시스템 구축 및 운영',
          ],
          skillKeywords: [
            'Kotlin',
            'Spring Boot',
            'Spring Webflux',
            'MySQL',
            'Redis',
            'Kafka',
            'MongoDB',
            'Coroutine',
            'Docker',
            'Kubernetes',
          ],
        },
      ],
    },
  ],
};

export default experience;
