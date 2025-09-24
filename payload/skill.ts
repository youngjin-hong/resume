import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'Kotlin',
      level: 3,
    },
    {
      title: 'Java',
      level: 2,
    },
    {
      title: 'Python',
      level: 2,
    },
    {
      title: 'JavaScript',
      level: 2,
    },
  ],
};

const frameworks: ISkill.Skill = {
  category: 'Frameworks & Libraries',
  items: [
    {
      title: 'Spring Boot',
      level: 3,
    },
    {
      title: 'Coroutine',
      level: 3,
    },
    {
      title: 'Airflow',
      level: 2,
    },
    {
      title: 'React',
      level: 2,
    },
  ],
};

const infrastructure: ISkill.Skill = {
  category: 'Infrastructure & Database',
  items: [
    {
      title: 'MySQL',
      level: 3,
    },
    {
      title: 'NoSQL(Redis, MongoDB)',
      level: 3,
    },
    {
      title: 'Web Servers(Apache, Nginx)',
      level: 3,
    },
    {
      title: 'Container(Docker, Kubernetes)',
      level: 2,
    },
  ],
};

const automation: ISkill.Skill = {
  category: 'Automation',
  items: [
    {
      title: 'Git',
      level: 3,
    },
    {
      title: 'IDEA (IntelliJ, VsCode)',
      level: 3,
    },
    {
      title: 'CI/CD Pipelines (Jenkins, ArgoCD, Helm)',
      level: 2,
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, frameworks, infrastructure, automation],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
