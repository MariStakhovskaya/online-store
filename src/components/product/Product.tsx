import { useState } from 'react';
import { Button } from '../custom/button/Button';
import style from './Product.module.css';
import { ProductType } from '../../App';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addDuck, removeDuck } from '../../redux/slices/basketSlice';

export type ProductDuckType = {
  duck: ProductType;
};

function Product({ duck }: ProductDuckType) {
  const dispatch = useDispatch();
  const [addCart, setAddCart] = useState(false);

  const addToCart = () => {
    setAddCart(true);
    dispatch(addDuck(duck));
  };
  const dropFromCart = () => {
    setAddCart(false);
    dispatch(removeDuck(duck));
  };
  return (
    <div className={style.wrapperProduct}>
      <Link key={duck.id} to={`details/${duck.id}`}>
        <div>
          <img className={style.imgProduct} src={duck.image} alt={duck.alt} />
        </div>
        <div>{duck.name}</div>
        <div className={style.descriptinBlock}>
          <div className={style.description}>{duck.description}</div>
          <div>На складе: {duck.stock}</div>
          <div>Рейтинг: {duck.raiting}</div>
        </div>
      </Link>
      <div className={style.buttonBlock}>
        <div className={style.price}>{duck.price} $</div>
        <div>
          {addCart ? (
            <Button name={'В корзине'} callback={dropFromCart} />
          ) : (
            <Button name={'Купить'} callback={addToCart} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
