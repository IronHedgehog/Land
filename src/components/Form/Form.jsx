import s from './Form.module.scss';
import FormBG from './FormBG/FormBG';
import FormComponent from './FormComponent/FormComponent';

const Form = () => {
  return (
    <section>
      <FormBG />
      <div className={s.form}>
        <h2 className={s.sectionTitle}>Request Callback</h2>
        <FormComponent />
      </div>
    </section>
  );
};

export default Form;
