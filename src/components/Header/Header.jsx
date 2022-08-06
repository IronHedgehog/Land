import { GreenBook } from '../../assets/icons/GreenBook';
import HeaderNavMenu from './HeaderNavMenu/HeaderNavMenu';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.sectionHeader}>
      <div className={s.sectionHeader__TitleBlock}>
        <GreenBook />
        <h2 className={s.sectionHeader__Title}>
          <span className={s.sectionHeader__TitleActive}>Finance</span>
          Ledger
        </h2>
      </div>
      <HeaderNavMenu />
    </header>
  );
};

export default Header;