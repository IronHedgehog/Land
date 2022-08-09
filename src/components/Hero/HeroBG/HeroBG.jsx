import s from './HeroBG.module.scss';
import { ArrowRight } from '../../../assets/icons/arrowRight';
import MediaQuery from 'react-responsive';

const HeroBG = () => {
  let DPR = window.devicePixelRatio;

  return (
    <div className={DPR === 1 ? s.bg : s.bg__retina}>
      <h1 className={s.heroSection__Title}>The Sky Is The Limit</h1>
      <p className={s.heroSection__Text}>
        We provide world class financial assistance
      </p>
      <a
        href="/"
        className={s.heroSection__ReadMoreButton}
        rel={('noreferrer', 'noopener')}
      >
        <MediaQuery minWidth={768}>
          <span className={s.arrowWrapper}>
            <ArrowRight />
          </span>
        </MediaQuery>
        <span className={s.ReadMoreButton__text}>Read More</span>
      </a>
    </div>
  );
};

export default HeroBG;
