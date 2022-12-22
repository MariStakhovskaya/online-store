import { useParams } from 'react-router-dom';
import style from './DetailsProduct.module.css';
import { ProductType } from '../../../App';

type DetailsProductType = {
  ducks: ProductType[];
};

function DetailsProduct(props: DetailsProductType) {
  const { id } = useParams<{ id: string }>();
  const duckDetail = props.ducks.find((item) => (id ? item.id === +id : ''));
  console.log(duckDetail);
  return (
    <div className={style.wrapperProductDetails}>
      {duckDetail && (
        <div className={style.detailsBlock}>
          <div className={style.imgBlock}>
            <img src={duckDetail.image} alt={duckDetail.alt} />
            <img src={duckDetail.image} alt={duckDetail.alt} />
            <img src={duckDetail.image2} alt={duckDetail.alt} />
          </div>
          <div>
            <span>{duckDetail.name}</span>
            <span>{duckDetail.description}</span>
            <span>Категория: {duckDetail.category}</span>
            <span>Пол: {duckDetail.gender}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailsProduct;
