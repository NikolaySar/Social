export const defaultCompanyEditFormValues = {
  companyName: '',
  phoneNumber: '',
  website: '',
  ahubCompanyLink: '',
  industry: [],
  companyType: [],
  companySize: [],
  companyLocation: '',
  aboutCompany: '',
  companyInterests: '',
  companyAvatarUrl: '',
  isRepresentative: false,
};

export const menuIndustry = [
  'Промышленность',
  'Сельское хозяйство',
  'Услуги',
  'Торговля',
  'Строительство',
  'Информационные технологии',
  'Медиа и развлечения',
  'Недвижимость',
  'Государственный сектор',
  'Некоммерческий сектор',
];

export const menuCompanyType = [
  'Частный предприниматель ',
  'Товарищества',
  'Корпорации ',
  'Корпорации типа S ',
  'Компания с ограниченной ответственностью ',
];

export const menuCompanySize = ['Микропредприятие', 'Малое предприятие', 'Среднее предприятие'];

export const inputCompanyFields = [
  {
    name: 'companyName',
    type: 'text',
    label: 'Название компании',
    required: true,
  },
  {
    name: 'phoneNumber',
    type: 'text',
    label: 'Номер телефона компании',
    required: true,
  },
  { name: 'website', type: 'text', label: 'Сайт' },
  { name: 'ahubCompanyLink', type: 'text', label: 'Cсылка AHUB' },
];

export const createDropdownsConfig = (
  menuIndustry: string[],
  industry: string[],
  setIndustry: React.Dispatch<React.SetStateAction<string[]>>,
  menuCompanyType: string[],
  companyType: string[],
  setCompanyType: React.Dispatch<React.SetStateAction<string[]>>,
  menuCompanySize: string[],
  companySize: string[],
  setCompanySize: React.Dispatch<React.SetStateAction<string[]>>
) => [
  {
    menuName: 'industry',
    menuLabel: 'Отрасль',
    menuOptions: menuIndustry,
    appliedOptions: industry,
    setState: setIndustry,
  },
  {
    menuName: 'companyType',
    menuLabel: 'Тип компании',
    menuOptions: menuCompanyType,
    appliedOptions: companyType,
    setState: setCompanyType,
  },
  {
    menuName: 'companySize',
    menuLabel: 'Размер компании',
    menuOptions: menuCompanySize,
    appliedOptions: companySize,
    setState: setCompanySize,
  },
];
