import s from './PhotoCards.scss';
import johnDoe1x from '../../../assets/images/Team/mob/team1-mob-1x-min.jpg';
import johnDoe2x from '../../../assets/images/Team/mob/team1-mob-2x-min.jpg';
import JaneDoe1x from '../../../assets/images/Team/mob/team2-mob-1x-min.jpg';
import JaneDoe2x from '../../../assets/images/Team/mob/team2-mob-2x-min.jpg';
import SteveSmith1x from '../../../assets/images/Team/mob/team3-mob-1x-min.jpg';
import SteveSmith2x from '../../../assets/images/Team/mob/team3-mob-2x-min.jpg';

const PhotoCards = () => {
  return (
    <>
      <li>
        <img
          className={s.picture}
          src={johnDoe1x}
          srcSet={`${johnDoe2x} 2x`}
          alt={'President'}
        />
        <h3 className={s.name}>John Doe</h3>
        <p className={s.role}>President</p>
      </li>
      <li>
        <img
          className={s.picture}
          src={JaneDoe1x}
          srcSet={`${JaneDoe2x} 2x`}
          alt={'Vice President'}
        />
        <h3 className={s.name}>Jane Doe</h3>
        <p className={s.role}>Vice President</p>
      </li>
      <li>
        <img
          className={s.picture}
          src={SteveSmith1x}
          srcSet={`${SteveSmith2x} 2x`}
          alt={'Marketing Head'}
        />
        <h3 className={s.name}>Steve Smith</h3>
        <p className={s.role}>Marketing Head</p>
      </li>
    </>
  );
};

export default PhotoCards;
