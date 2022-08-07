import s from './Cases.module.scss';
import galleryItems from '../../assets/images/Library/mob/libArr';
import CaseLib from './CasesLib/CasesLib';
import { v4 as uuidv4 } from 'uuid';

const Cases = () => {
  return (
    <section className={s.cases}>
      <p className={s.cases__beforeTitle}>This is what we do</p>
      <h2 className={s.cases__Title}>Business Cases</h2>
      <p className={s.cases__text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>

      <ul className={s.cases__gallery}>
        {galleryItems.length > 0
          ? galleryItems.map(({ preview, original, description }) => (
              <CaseLib
                key={uuidv4()}
                normal={preview}
                big={original}
                alt={description}
              />
            ))
          : null}
      </ul>
    </section>
  );
};

export default Cases;
