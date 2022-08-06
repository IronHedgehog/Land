import s from './Hero.module.scss';
import HeroBG from './HeroBG/HeroBG';

const Hero = () => {
  return (
    <section className={s.heroSection}>
      
      <HeroBG />
    </section>
  );
};

export default Hero;
