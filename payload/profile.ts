import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faDev } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  image: 'https://i.postimg.cc/yNMfcqYD/IMG-7564.jpg',
  name: {
    title: '홍영진',
    small: '(Wade)',
  },
  contact: [
    {
      title: 'hyjinn1003@gmail.com',
      link: 'mailto:hyjinn1003@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://to-gatsby.tistory.com/',
      icon: faDev,
    },
  ],
};

export default profile;
