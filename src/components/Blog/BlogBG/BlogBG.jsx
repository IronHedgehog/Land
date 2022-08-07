import s from './BlogBG.module.scss';

const BlogBG = () => {
  let DPR = window.devicePixelRatio;
  return <div className={DPR === 1 ? s.blockBG : s.blockBG__retina}></div>;
};

export default BlogBG;
