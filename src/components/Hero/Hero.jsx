import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

const Hero = () => {
  return (
    <section className={css.section}>
      <div className={css.wrapper}>
        <h1 className={css.title}>
          Unlock your potential with the best language tutors
        </h1>
        <p className={css.text}>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your <span>language</span> proficiency to new heights by
          connecting with highly qualified and experienced tutors.
        </p>
        <Link to="/teachers" className={css.btn}>
          Get started
        </Link>
      </div>
      <div className={css.background}></div>
    </section>
  );
};

export default Hero;
