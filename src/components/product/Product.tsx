import { useState } from 'react';
import { Button } from '../custom/button/Button';
import style from './Product.module.css';
import { ProductType } from '../../App';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addDuck, removeDuck } from '../../redux/slices/basketSlice';

export type ProductDuckType = {
  duck: ProductType;
  isGrid: boolean;
};

function Product({ duck, isGrid }: ProductDuckType) {
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
    <div className={isGrid ? style.wrapperProduct : style.wrapperListproduct}>
      <Link key={duck.id} to={`details/${duck.id}`}>
        <div className={isGrid ? '' : style.listView}>
          <div className={isGrid ? '' : style.imgBlock}>
            <img className={style.imgProduct} src={duck.image} alt={duck.alt} />
          </div>
          <div className={isGrid ? style.descriptinBlock : style.descriptList}>
            <div className={style.name}> {duck.name} </div>
            <div className={style.line}></div>
            <div className={style.descriptinBlock}>
              <div className={style.desc}> {duck.description} </div>
              <div> В наличии: {duck.stock} </div>
              <div> Рейтинг: {duck.raiting} </div>
            </div>
          </div>
        </div>
      </Link>
      <div className={isGrid ? style.buttonBlock : style.buttonList}>
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
