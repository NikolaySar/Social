import facebook from '@images/facebook.svg';
import google from '@images/google.svg';
import inlogo from '@images/in.svg';
import twitter from '@images/twitter.svg';
import user from '@images/user.svg';
import users from '@images/users.svg';
import bookmark from '@images/bookmark.svg';
import folow from '@images/folow.svg';
import settings from '@images/settings.svg';
import logout from '@images/log-out.svg';
import services from '@images/services.svg';
import twitter_footer from '@images/twitter-footer.svg';
import insta from '@images/instagram-footer.svg';
import facebook_footer from '@images/facebook-footer.svg';
import inlogo_footer from '@images/linkedin-footer.svg';
import printer from '@images/printer.svg';
import download_cloud from '@images/download-cloud.svg';
import image from '@images/image.svg';
import trash from '@images/trash.svg';

export const socialMediaLinks = [
  { src: google, alt: '', link: 'google.com' },
  { src: facebook, alt: '', link: 'facebook.com' },
  { src: inlogo, alt: '', link: 'inlogo.com' },
  { src: twitter, alt: '', link: 'twitter.com' },
];

export const menuItems = [
  { id: 1, icon: user, text: 'Мой профиль' },
  { id: 2, icon: users, text: 'Подписчики' },
  { id: 3, icon: bookmark, text: 'Избранное' },
  { id: 4, icon: folow, text: 'Подписки' },
  { id: 5, icon: settings, text: 'Настройки' },
  { id: 6, divider: true },
  { id: 7, icon: logout, text: 'Выйти' },
];

export const menuMoreButton = [
  { id: 1, icon: printer, text: 'Распечатать резюме' },
  { id: 2, icon: download_cloud, text: 'Скачать PDF резюме' },
  { id: 3, icon: image, text: 'Загрузить обложку' },
  { id: 4, icon: image, text: 'Изменить обложку' },
  { id: 5, icon: trash, text: 'Удалить обложку' },
];

export const menuFeedItems = [
  { text: 'Компании', linkTo: '' },
  { text: 'Люди', linkTo: 'users' },
  { text: 'События', linkTo: '' },
  { icon: services, text: 'Сервисы', linkTo: '' },
];

export const userTabs = (postCount: number) => [
  { text: 'Профиль' },
  { text: `Лента ${postCount}` },
  { text: 'Резюме' },
  { text: 'Избранное' },
];

export const companyTabs = (postCount: number) => [
  { text: 'о компании' },
  { text: `Лента ${postCount}` },
  { text: 'товары 10' },
  { text: 'вакансии 10' },
  { text: 'люди' },
  { text: 'trade 10' },
];

export const menuCreateItems = [{ text: 'Пост' }, { text: 'Компанию' }, { text: 'Событие' }];

export const progressColors = {
  default: {
    backgroundColor: '#fff',
  },
  weak: {
    backgroundColor: '#FF2B2B',
  },
  medium: {
    backgroundColor: '#FDE910',
  },
  strong: {
    backgroundColor: '#66FF00',
  },
};

export const footerSocialMediaLinks = [
  { src: twitter_footer, alt: '', link: 'twitter.com' },
  { src: insta, alt: '', link: 'instagram.com' },
  { src: facebook_footer, alt: '', link: 'facebook.com' },
  { src: inlogo_footer, alt: '', link: 'inlogo.com' },
];

export const profileTabs = (postCount: number) => [
  { text: 'Профиль' },
  { text: `Лента ${postCount}` },
  { text: 'Резюме' },
  { text: 'Избранное' },
];

export const fileAcceptedTypes: { [key: string]: string } = {
  all: `
    image/png,
    image/jpeg,
    video/mp4,
    application/doc,
    application/pdf,
    application/vnd.openxmlformats-officedocument.wordprocessingml.document,
    application/vnd.sun.xml.writer
  `,
  image: `
    image/png,
    image/jpeg,
  `,
  video: `video/mp4,`,
  application: `
    application/doc,
    application/pdf,
    application/vnd.openxmlformats-officedocument.wordprocessingml.document,
    application/vnd.sun.xml.writer
  `,
};

export const imageAcceptedTypes = `
  image/png,
  image/jpeg,
`;

export const videoAcceptedTypes = `
  video/mp4,
`;

export const documentAcceptedTypes = `
  application/doc,
  application/pdf,
  text/plain,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document,
  application/vnd.sun.xml.writer
`;
