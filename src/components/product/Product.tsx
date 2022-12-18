import { useState } from 'react';
import { Button } from '../custom/button/Button';
import style from './Product.module.css';

function Product() {
  const [addCart, setAddCart] = useState(false);

  const addToCart = () => {
    setAddCart(true);
  };
  const dropFromCart = () => {
    setAddCart(false);
  };
  return (
    <div className={style.wrapperProduct}>
      <div>
        <img
          className={style.imgProduct}
          src="https://i.ibb.co/8m9STkd/fire1.jpg"
          alt="aaa"
        />
      </div>
      <div>"Пожарник"</div>
      <div className={style.descriptinBlock}>
        <div className={style.description}>Уточка для дедлайнов</div>
        <div>In stock: 25</div>
        <div>Rating: 6</div>
      </div>
      <div className={style.buttonBlock}>
        <div className={style.price}>125 $</div>
        <div>
          {addCart ? (
            <Button name={'Drop from cart'} callback={dropFromCart} />
          ) : (
            <Button name={'Add to cart'} callback={addToCart} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
