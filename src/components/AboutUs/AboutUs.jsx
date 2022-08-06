import AboutUsBG from './AboutUsBg/AboutUsBg';
import s from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <section className={s.aboutUs__section}>
      <AboutUsBG />
      <div className={s.aboutUs__section__textBlock}>
        <p className={s.textBlock__beforeTitle}>What you are looking for</p>
        <h2 className={s.textBlock__Title}>We provide bespoke solutions</h2>
        <p className={s.textBlock__text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>

        <a href="/" className={s.textBlock__button}>
          <span className={s.textBlock__button__text}>Read More</span>
        </a>
      </div>
    </section>
  );
};

export default AboutUs;
