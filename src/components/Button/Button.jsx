import s from './Button.module.scss';

const Button = ({ button_text }) => {
  return (
    <a href="/" className={s.textBlock__button}>
      <span className={s.textBlock__button__text}>{button_text}</span>
    </a>
  );
};

export default Button;
