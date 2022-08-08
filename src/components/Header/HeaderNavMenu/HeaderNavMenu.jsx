import s from './HeaderNavMenu.module.scss';

const HeaderNavMenu = () => {
  return (
    <nav className={s.NavBlock} id="NavBlock">
      <ul className={s.NavBlock__List}>
        <li className={s.NavBlock__item}>
          <a className={s.NavBlock__link} href="#Home">
            Home
          </a>
        </li>
        <li className={s.NavBlock__item}>
          <a className={s.NavBlock__link} href="#About">
            About
          </a>
        </li>
        <li className={s.NavBlock__item}>
          <a className={s.NavBlock__link} href="#Cases">
            Cases
          </a>
        </li>
        <li className={s.NavBlock__item}>
          <a className={s.NavBlock__link} href="#Blog">
            Blog
          </a>
        </li>
        <li className={s.NavBlock__item}>
          <a className={s.NavBlock__link} href="#Contacts">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavMenu;
