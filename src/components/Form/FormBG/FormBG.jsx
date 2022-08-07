import s from './FormBG.module.scss';

const FormBG = () => {
  let DPR = window.devicePixelRatio;
  return <div className={DPR === 1 ? s.formBG : s.formBG__retina}></div>;
};

export default FormBG;
