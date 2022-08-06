import s from './HeaderNavMenu.module.scss';

const HeaderNavMenu = () => {
  return (
    <nav className={s.NavBlock}>
      <ul className={s.NavBlock__List}>
        <li className={s.NavBlock__item}>Home</li>
        <li className={s.NavBlock__item}>About</li>
        <li className={s.NavBlock__item}>Cases</li>
        <li className={s.NavBlock__item}>Blog</li>
        <li className={s.NavBlock__item}>Contact</li>
      </ul>
    </nav>
  );
};

export default HeaderNavMenu;
