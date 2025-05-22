import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().trim().required('Имя обязательно'),
  lastName: Yup.string().trim().required('Фамилия обязательна'),
  email: Yup.string()
    .email('Неверный email,укажите @ в адрес электронной почты')
    .required('Email обязателен')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Пожалуйста, укажите @ в адрес электронной почты'),
  password: Yup.string()
    .trim()
    .required('Пароль обязателен')
    .min(8, 'Пароль слишком короткий — минимум 8 символов.')
    .matches(/[a-zA-Z]/, 'Пароль может содержать только латинские буквы.')
    .matches(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву.')
    .matches(/[a-z]/, 'Пароль должен содержать хотя бы одну заглавную букву.')
    .matches(/\d/, 'Пароль должен содержать цифры')
    .matches(
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
      'Пароль должен содержать хотя бы один спец. символ'
    ),
});

export const validationSchemaForgotPass = Yup.object().shape({
  email: Yup.string()
    .email('Неверный email,укажите @ в адрес электронной почты')
    .required('Email обязателен')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Пожалуйста, укажите @ в адрес электронной почты'),
});

export const validationAuthorizationShema = Yup.object().shape({
  email: Yup.string()
    .email('Неверный email,укажите @ в адрес электронной почты')
    .required('Email обязателен')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Пожалуйста, укажите @ в адрес электронной почты'),
  password: Yup.string().trim().required('Пароль обязателен'),
});

export const validationSchemaResetPassword = Yup.object().shape({
  password: Yup.string()
    .trim()
    .required('Пароль обязателен')
    .min(8, 'Пароль слишком короткий — минимум 8 символов.')
    .matches(/[a-zA-Z]/, 'Пароль может содержать только латинские буквы.')
    .matches(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву.')
    .matches(/[a-z]/, 'Пароль должен содержать хотя бы одну заглавную букву.')
    .matches(/\d/, 'Пароль должен содержать цифры')
    .matches(
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
      'Пароль должен содержать хотя бы один спец. символ'
    ),
  confirmPassword: Yup.string()
    .required('Подтверждение пароля обязательно')
    .oneOf([Yup.ref('password')], 'Пароли должны совпадать'),
});

export const validationEditUserShema = Yup.object().shape({
  firstName: Yup.string().required('Имя обязательно').trim(),
  lastName: Yup.string().required('Фамилия обязательна').trim(),
  bornDate: Yup.string().trim(),
  company: Yup.string().trim(),
  title: Yup.string().trim(),
  institution: Yup.string().trim(),
  specialization: Yup.string().trim(),
  location: Yup.string().trim(),
  languages: Yup.array(),
  ahubLink: Yup.string().trim(),
});

export const validationEditContactInfoSchema = Yup.object().shape({
  contactInfo: Yup.object().shape({
    phone: Yup.string().trim(),
    ahubMarketLink: Yup.string().trim(),
  }),
});

export const validationEditCompanySchema = Yup.object().shape({
  companyName: Yup.string().required('Название компании обязательно').trim(),
  phoneNumber: Yup.string()
    .matches(/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/, 'Некорректный номер телефона')
    .required('Номер телефона обязателен')
    .trim(),
  website: Yup.string().url('Введите корректный URL').trim(),
  ahubCompanyLink: Yup.string().url('Введите корректный URL').trim(),
  industry: Yup.array(),
  companyType: Yup.array(),
  companySize: Yup.array(),
  companyLocation: Yup.string().trim(),
  aboutCompany: Yup.string().trim(),
  isRepresentative: Yup.boolean()
    .oneOf([true], 'Вы должны подтвердить, что являетесь представителем компании')
    .required(),
});

export const validationEditAboutMeSchema = Yup.object().shape({
  aboutMe: Yup.string().trim(),
});
