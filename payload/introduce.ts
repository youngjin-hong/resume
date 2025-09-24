import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt, author } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요, 3년간 대규모 쇼핑몰 서비스 개발 및 운영을 담당하여 시스템 안정성과 성능 최적화에 강점을 쌓아온 백엔드 개발자 홍영진입니다. ',
    'Kotlin, Spring, MySQL 등을 기반으로 프로덕션 환경에서 웹 서비스 설계・개발해왔으며, 도메인 요구사항을 분석해 확장성과 유집소수성을 갖춘 시스템 구현에 집중해왔습니다.',
    '또한 단순히 개발에 그치지 않고, 트러블 슈팅 과정과 학습 내용을 문서화 및 블로그에 공유하며, 팀 내외의 지식 확산에 기여하고 있습니다.',
    '협업 과정에서는 다양항 직군과 원활히 소통하며 요구사항을 조율하고, 코드 리뷰와 기술 공유 세션을 통해 팀 생산성과 기술 역량을 함께 성장시키는 개발자입니다',
  ],
  sign: author.name,
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
