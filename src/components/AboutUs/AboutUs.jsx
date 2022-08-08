import AboutUsBG from './AboutUsBg/AboutUsBg';
import s from './AboutUs.module.scss';
import TextBlock from '../TextBlock/TextBlock';

const AboutUs = () => {
  return (
    <section className={s.aboutUs__section} id="About">
      <AboutUsBG />
      <TextBlock
        type={'1'}
        text1={'What you are looking for'}
        title={'We provide bespoke solutions'}
        text2={
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?'
        }
        button_text={'Read More'}
      />
    </section>
  );
};

export default AboutUs;
