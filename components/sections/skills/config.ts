import { Skill } from '@/types/skill';
import {
  CodeIcon,
  DatabaseIcon,
  LayoutIcon,
  SmartphoneIcon,
  Cloud
} from 'lucide-react';

const skills: Skill[] = [
  {
    name: 'Modeling',
    description:
      'I would say that coding in Python and R, building machine learning models, is my bread and butter.',
    Icon: CodeIcon
  },
  {
    name: 'Data stuff',
    description:
      'I am comfortable in a wide variety of data stores from SQL to NoSQL, single node to distributed. I have worked in databases, data warehouses, data lakes, and lakehouses across a variety of vendors. Just point me in the direction and I likely have used it!',
    Icon: DatabaseIcon
  },
  {
    name: 'ML Ops',
    description:
      'I have helped other data scientists and machine learning engineers create solutions for ML monitoring and deployment including dashboards',
    Icon: LayoutIcon
  },
  {
    name: 'Cloud',
    description:
      'I am comfortable across the three main cloud providers. I am certified in a few of them.',
    Icon: Cloud
  },
  {
    name: 'Mobile and Web Development',
    description:
      'I have been learning fullstack web development skills. This portfolio website is Next JS and some of my projects started as technical solutions that were looking for problems. ',
    Icon: SmartphoneIcon
  }
];

export { skills };
