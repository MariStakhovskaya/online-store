import style from './Button.module.css';

type ButtonType = {
  name: string;
  callback: () => void;
};

export const Button = (props: ButtonType) => {
  const onClickHandler = () => {
    props.callback();
  };
  return (
    <button className={style.buttonCustom} onClick={onClickHandler}>
      {props.name}
    </button>
  );
};
