import style from './Button.module.css';

type ButtonType = {
  name: string;
  callback?: () => void | undefined;
};

export const Button = (props: ButtonType) => {
  const onClickHandler = () => {
    if (props.callback) props.callback();
  };
  return (
    <button className={style.buttonCustom} onClick={onClickHandler}>
      {props.name}
    </button>
  );
};
