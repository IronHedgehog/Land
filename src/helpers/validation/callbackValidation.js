import * as Yup from 'yup';

export const callbackValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'more then 2 symbols')
    .max(50, 'Max 50 symbols'),
  email: Yup.string()
    .email('Invalid email')
    .min(2, 'more then 2 symbols')
    .max(80, ' Max 80 symbols')
    .required('Email required'),
});
