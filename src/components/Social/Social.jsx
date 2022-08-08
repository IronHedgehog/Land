import s from './Social.module.scss';
import { FacebookIcon } from '../../assets/icons/socialIcons/Facebook.js';
import { LinkIcon } from '../../assets/icons/socialIcons/Link.js';
import { TwitterIcon } from '../../assets/icons/socialIcons/Twitter.js';
import { YoutubeIcon } from '../../assets/icons/socialIcons/Youtube.js';

const Social = ({ type }) => {
  return (
    <ul className={type !== 'footer' ? s.socialList : s.socialList__footer}>
      <li className={s.socialList__item}>
        <a href="/">
          <FacebookIcon />
        </a>
      </li>
      <li className={s.socialList__item}>
        <a href="/">
          <TwitterIcon />
        </a>
      </li>
      <li className={s.socialList__item}>
        <a href="/">
          <YoutubeIcon />
        </a>
      </li>
      <li className={s.socialList__item}>
        <a href="/">
          <LinkIcon />
        </a>
      </li>
    </ul>
  );
};

export default Social;
