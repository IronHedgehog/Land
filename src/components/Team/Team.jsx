import PhotoCards from './PhotoCards/PhotoCards';
import s from './Team.module.scss';

const Team = () => {
  return (
    <section className={s.team__Section}>
      <p className={s.team__Section__beforeTitle}>Who we are</p>
      <h2 className={s.team__Section__Title}>Our Professional Team</h2>
      <p className={s.team__Section__text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>

      <ul className={s.list}>
        <PhotoCards />
      </ul>
    </section>
  );
};

export default Team;
