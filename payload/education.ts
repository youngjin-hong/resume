import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '한양대학교 ERICA',
      subTitle: '소프트웨어학과 (편입 및 학사 졸)',
      startedAt: '2023-02',
      endedAt: '2020-03',
    },
    {
      title: '선문대학교',
      subTitle: '기계 ICT 공학과 (수료)',
      startedAt: '2016-03',
      endedAt: '2022-02',
    },
  ],
};

export default education;
