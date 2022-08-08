import s from './FooterContent.module.scss';

import Social from '../Social/Social';

const FooterContent = () => {
  return (
    <section className={s.container}>
      <Social type={'footer'} />
      <p className={s.footerText}>Copyright © 2021 - FinanceLedger</p>
    </section>
  );
};

export default FooterContent;
