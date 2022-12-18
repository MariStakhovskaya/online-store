import style from '../page404/Page404.module.css';
import image404 from '../../assets/img/page404.png';
import { Button } from '../custom/button/Button';

function Error404() {
  const goHome = () => {
    alert('go home');
}
  return (
    <div className={style.wrapper}>
      <div className={style.image}>
        <img src={image404} alt="page 404" />
      </div>
      <div className={style.errorText}>Oops, This page does not exist</div>
      <Button name={'go to homepage'} callback={goHome}></Button>
    </div>
  );
}

export default Error404;
