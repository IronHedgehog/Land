import s from './PhotoCards.module.scss';
import johnDoe1x from '../../../assets/images/Team/mob/team1-mob-1x-min.jpg';
import johnDoe2x from '../../../assets/images/Team/mob/team1-mob-2x-min.jpg';
import JaneDoe1x from '../../../assets/images/Team/mob/team2-mob-1x-min.jpg';
import JaneDoe2x from '../../../assets/images/Team/mob/team2-mob-2x-min.jpg';
import SteveSmith1x from '../../../assets/images/Team/mob/team3-mob-1x-min.jpg';
import SteveSmith2x from '../../../assets/images/Team/mob/team3-mob-2x-min.jpg';
import Social from '../../Social/Social';

const PhotoCards = () => {
  return (
    <>
      <li className={s.list__item}>
        <div className={s.imgContainer}>
          <img
            className={s.list__item__picture}
            src={johnDoe1x}
            srcSet={`${johnDoe2x} 2x`}
            alt={'President'}
          />
          <Social />
        </div>
        <h3 className={s.list__item__name}>John Doe</h3>
        <p className={s.list__item__role}>President</p>
      </li>
      <li className={s.list__item}>
        <div className={s.imgContainer}>
          <img
            className={s.list__item__picture}
            src={JaneDoe1x}
            srcSet={`${JaneDoe2x} 2x`}
            alt={'Vice President'}
          />
          <Social />
        </div>
        <h3 className={s.list__item__name}>Jane Doe</h3>
        <p className={s.list__item__role}>Vice President</p>
      </li>
      <li className={s.list__item}>
        <div className={s.imgContainer}>
          <img
            className={s.list__item__picture}
            src={SteveSmith1x}
            srcSet={`${SteveSmith2x} 2x`}
            alt={'Marketing Head'}
          />
          <Social />
        </div>
        <h3 className={s.list__item__name}>Steve Smith</h3>
        <p className={s.list__item__role}>Marketing Head</p>
      </li>
    </>
  );
};

export default PhotoCards;
