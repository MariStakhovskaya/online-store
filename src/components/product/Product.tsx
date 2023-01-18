import { Button } from '../custom/button/Button';
import style from './Product.module.css';
import { ProductType } from '../../App';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addDuck, removeDuck } from '../../redux/slices/basketSlice';
import { countBasketduck } from '../../redux/selectors';

export type ProductDuckType = {
  duck: ProductType;
  isGrid: boolean;
};

function Product({ duck, isGrid }: ProductDuckType) {
  const dispatch = useDispatch();
  const countBasket = useSelector(countBasketduck);

  const countForButton = countBasket.find((el) => el.id === duck.id)?.count;

  const addToCart = () => {
    dispatch(addDuck(duck));
  };
  const dropFromCart = () => {
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
          {(countForButton !== undefined ? countForButton : 0) > 0 ? (
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
