import ScaleLoader from 'react-spinners/ScaleLoader';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <ScaleLoader
        color="#f4c550"
        cssOverride={{}}
        height={35}
        loading
        margin={2}
        radius={2}
        speedMultiplier={1}
        width={4}
      />
      <p className={css.loader}>Loading... please wait...</p>
    </div>
  );
};

export default Loader;
