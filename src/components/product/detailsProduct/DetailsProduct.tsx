import { useParams } from 'react-router-dom';
import style from './DetailsProduct.module.css';
import { ProductType } from '../../../App';
import { useState } from 'react';

type DetailsProductType = {
  ducks: ProductType[];
};

function DetailsProduct(props: DetailsProductType) {
  const { id } = useParams<{ id: string }>();
  const duckDetail = props.ducks.find((item) => (id ? item.id === +id : ''));
  const [image, setImage] = useState<string | undefined>(duckDetail?.image);

  const onClickImg = (src: string) => {
    setImage(src);
  };

  return (
    <div className={style.wrapperProductDetails}>
      {duckDetail && (
        <div className={style.detailsBlock}>
          <div className={style.imgBlock}>
            <div>
              <img
                className={style.imgDetails}
                src={image}
                alt={duckDetail.alt}
              />
            </div>
            <div className={style.smallImgBlock}>
              <img
                onClick={() => onClickImg(duckDetail.image)}
                className={style.imgSmall}
                src={duckDetail.image}
                alt={duckDetail.alt}
              />
              <img
                onClick={() => onClickImg(duckDetail.image2)}
                className={style.imgSmall}
                src={duckDetail.image2}
                alt={duckDetail.alt}
              />
            </div>
          </div>
          <div>
            <h2 className={style.nameDetails}>{duckDetail.name}</h2>
            <div>{duckDetail.description}</div>
            <div>Категория: {duckDetail.category}</div>
            <div>Пол: {duckDetail.gender}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailsProduct;
