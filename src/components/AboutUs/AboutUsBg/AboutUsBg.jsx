import s from './AboutUsBg.module.scss';

const AboutUsBG = () => {
  let DPR = window.devicePixelRatio;

  return (
    <div className={s.wrapper}
    >

      <div className={DPR === 1 ? s.AboutUsBG : s.AboutUsBG__retina}></div>
    </div>
  );
};

export default AboutUsBG;
