import s from './FormComponent.module.scss';
import { Formik, ErrorMessage } from 'formik';
import { callbackValidationSchema } from '../../../helpers/validation/callbackValidation';
import { AlertIcon } from '../../../assets/icons/Form/Alert';

const FormComponent = () => {
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
      }}
      validationSchema={callbackValidationSchema}
      validateOnBlur
      onSubmit={(values, { resetForm }) => {
        console.log('values', values);
        resetForm();
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <>
            <label className={s.form__label}>
              <input
                type="text"
                name="username"
                autoComplete="off"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="username"
                className={s.input}
              />
              <ErrorMessage
                component="div"
                name="username"
                className={s.errorMessage}
              />
            </label>
            <br />

            <label className={s.form__label}>
              <input
                type="email"
                name="email"
                autoComplete="off"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter email*"
                className={s.input}
              />
              <ErrorMessage
                component="div"
                name="email"
                className={s.errorMessage}
                InputProps={{
                  endAdornment: <AlertIcon />,
                }}
              />
            </label>
          </>

          <button type="submit" className={s.formButton}>
            <span className={s.formButton__text}>Send</span>
          </button>
        </form>
      )}
    </Formik>
  );
};

export default FormComponent;
