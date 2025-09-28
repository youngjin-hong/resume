import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt, author } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요. 대규모 쇼핑몰 서비스의 아키텍처 개선과 성능 최적화, 실서비스 운영, 보안까지 전 단계를 직접 경험하며, 문제 해결에 강점이 있는 백엔드 개발자 홍영진입니다.',
    'Kotlin, Spring Boot, WebFlux, Coroutine, Kafka 등 최신 기술을 기반으로 레거시 시스템을 점진적으로 마이그레이션하고, 쿼리 속도 개선, ISMS 보안 결함 해결 등 정량적 성과를 달성했습니다.',
    '아키텍처 설계부터 실시간 장애 대응 및 지식 문서화까지, 주도적으로 개선책을 실현해 팀의 생산성과 개발 문화 향상에도 기여하고 있습니다.',
  ],
  sign: author.name,
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
