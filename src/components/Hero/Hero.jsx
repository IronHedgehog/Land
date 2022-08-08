import s from './Hero.module.scss';
import HeroBG from './HeroBG/HeroBG';

const Hero = () => {
  return (
    <section className={s.heroSection} id="Home">
      <HeroBG />
    </section>
  );
};

export default Hero;
