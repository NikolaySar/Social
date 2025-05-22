import calendar from '@images/calendar.svg';
import hash from '@images/hash.svg';

export const userInfoSections = [
  {
    title: 'Обо мне',
    text: 'Поделитесь информацией о себе',
  },
  {
    title: 'Интересы',
    text: 'Расскажите о своих интересах',
  },
];

export const companyInfoSections = [
  { title: 'Описание компании', text: 'Поделитесь информацией о компании' },
  { title: 'Интересы', text: 'Расскажите о интересах компании' },
];

export const actionSections = [
  {
    image: calendar,
    description: 'Вы не участвуете в событиях',
    buttonText: 'Найти',
  },
  {
    image: hash,
    description: 'Вы не подписаны на хэштеги',
    buttonText: 'смотреть ленту',
  },
];

export const defaultUserFormFalues = {
  firstName: '',
  lastName: '',
  bornDate: '',
  lastWork: {
    company: '',
    title: '',
  },
  education: {
    institution: '',
    specialization: '',
  },
  location: '',
  languages: [''],
  ahubLink: '',
  gender: '',
};
