import s from './CasesLib.module.scss';

const CaseLib = ({ normal, big, alt }) => {
  return (
    <>
      <li className={s.gallery_list}>
        <a href={big} data-lightbox={'1'} data-title={alt} data-alt={alt}>
          <img src={normal} alt={alt} data-source={big} />
        </a>
      </li>
    </>
  );
};

export default CaseLib;
