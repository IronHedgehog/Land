import Button from '../Button/Button';
import s from './TextBlock.module.scss';

const TextBlock = ({ type, text1, title, text2, button_text }) => {
  return (
    <div
      className={
        type !== '1'
          ? s.blog__section__textBlock
          : s.aboutUs__section__textBlock
      }
    >
      <p className={type !== '1' ? s.textBlock_date : s.textBlock__beforeTitle}>
        {text1}
      </p>
      <h2
        className={type !== '1' ? s.textBlock_Title_Blog : s.textBlock__Title}
      >
        {title}
      </h2>
      <p className={type !== '1' ? s.textBlock_Text_Blog : s.textBlock__text}>
        {text2}
      </p>
      {button_text && <Button button_text={button_text} />}
    </div>
  );
};

export default TextBlock;
