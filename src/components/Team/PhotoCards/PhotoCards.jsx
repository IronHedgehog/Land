import s from './PhotoCards.module.scss';
import MediaQuery from 'react-responsive';
import johnDoe1x from '../../../assets/images/Team/mob/team1-mob-1x-min.jpg';
import johnDoe2x from '../../../assets/images/Team/mob/team1-mob-2x-min.jpg';
import johnDoeTab1x from '../../../assets/images/Team/tab/team1-tab-1x-min.jpg';
import johnDoeTab2x from '../../../assets/images/Team/tab/team1-tab-2x-min.jpg';
import johnDoeDesc1x from '../../../assets/images/Team/desc/Team1-desc-1x-min.jpg';
import johnDoeDesc2x from '../../../assets/images/Team/desc/team1-desc-2x-min.jpg';
import JaneDoe1x from '../../../assets/images/Team/mob/team2-mob-1x-min.jpg';
import JaneDoe2x from '../../../assets/images/Team/mob/team2-mob-2x-min.jpg';
import JaneDoeTab1x from '../../../assets/images/Team/tab/team2-tab-1x-min.jpg';
import JaneDoeTab2x from '../../../assets/images/Team/tab/team2-tab-2x-min.jpg';
import SteveSmith1x from '../../../assets/images/Team/mob/team3-mob-1x-min.jpg';
import SteveSmith2x from '../../../assets/images/Team/mob/team3-mob-2x-min.jpg';
import SteveSmithTab1x from '../../../assets/images/Team/tab/team3-tab-1x-min.jpg';
import SteveSmithTab2x from '../../../assets/images/Team/tab/team3-tab-2x-min.jpg';
import SteveSmithDesc1x from '../../../assets/images/Team/desc/Team3-desc-1x-min.jpg';
import SteveSmithDesc2x from '../../../assets/images/Team/desc/Team3-desc-2x-min.jpg';
import Social from '../../Social/Social';

const PhotoCards = () => {
  return (
    <>
      <li className={s.list__item}>
        <div className={s.imgContainer}>
          <MediaQuery maxWidth={767}>
            <img
              className={s.list__item__picture}
              src={johnDoe1x}
              srcSet={`${johnDoe2x} 2x`}
              alt={'President'}
            />
          </MediaQuery>
          <MediaQuery minWidth={768} maxWidth={1359}>
            <img
              className={s.list__item__picture}
              src={johnDoeTab1x}
              srcSet={`${johnDoeTab2x} 2x`}
              alt={'President'}
            />
          </MediaQuery>
          <MediaQuery minWidth={1360}>
            <img
              className={s.list__item__picture}
              src={johnDoeDesc1x}
              srcSet={`${johnDoeDesc2x} 2x`}
              alt={'President'}
            />
          </MediaQuery>
          <Social />
        </div>
        <h3 className={s.list__item__name}>John Doe</h3>
        <p className={s.list__item__role}>President</p>
      </li>
      <li className={s.list__item}>
        <div className={s.imgContainer}>
          <MediaQuery maxWidth={767}>
            <img
              className={s.list__item__picture}
              src={JaneDoe1x}
              srcSet={`${JaneDoe2x} 2x`}
              alt={'Vice President'}
            />
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <img
              className={s.list__item__picture}
              src={JaneDoeTab1x}
              srcSet={`${JaneDoeTab2x} 2x`}
              alt={'Vice President'}
            />
          </MediaQuery>
          <Social />
        </div>
        <h3 className={s.list__item__name}>Jane Doe</h3>
        <p className={s.list__item__role}>Vice President</p>
      </li>
      <li className={s.list__item}>
        <div className={s.imgContainer}>
          <MediaQuery maxWidth={767}>
            <img
              className={s.list__item__picture}
              src={SteveSmith1x}
              srcSet={`${SteveSmith2x} 2x`}
              alt={'Marketing Head'}
            />
          </MediaQuery>
          <MediaQuery minWidth={768} maxWidth={1359}>
            <img
              className={s.list__item__picture}
              src={SteveSmithTab1x}
              srcSet={`${SteveSmithTab2x} 2x`}
              alt={'Marketing Head'}
            />
          </MediaQuery>
          <MediaQuery minWidth={1360}>
            <img
              className={s.list__item__picture}
              src={SteveSmithDesc1x}
              srcSet={`${SteveSmithDesc2x} 2x`}
              alt={'President'}
            />
          </MediaQuery>
          <Social />
        </div>
        <h3 className={s.list__item__name}>Steve Smith</h3>
        <p className={s.list__item__role}>Marketing Head</p>
      </li>
    </>
  );
};

export default PhotoCards;
