import { useParams } from 'react-router-dom';
import style from './DetailsProduct.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../redux/store';
import Breadcrumbs from '../../breadcrumbs/Breadcrumbs';

function DetailsProduct() {
  const ducksData = useSelector((state: RootState) => state.ducks.ducks);
  const { id } = useParams<{ id: string }>();
  const duckDetail = ducksData.find((item) => (id ? item.id === +id : ''));
  const [image, setImage] = useState<string | undefined>(duckDetail?.image);

  const onClickImg = (src: string) => {
    setImage(src);
  };

  return (
    <div className={style.wrapperProductDetails}>
      <Breadcrumbs />
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
