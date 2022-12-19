import style from '../page404/Page404.module.css';
import image404 from '../../assets/img/page404.png';
import { Button } from '../custom/button/Button';
import { Navigate, NavLink } from 'react-router-dom';

function Page404() {
  return (
    <div className={style.wrapper}>
      <div className={style.image}>
        <div className={style.errorText}>Oops, This page does not exist</div>
        <img className={style.img} src={image404} alt="page 404" />
      </div>
      <NavLink to={'/'}>
        <Button name={'go to homepage'}></Button>
      </NavLink>
    </div>
  );
}

export default Page404;
