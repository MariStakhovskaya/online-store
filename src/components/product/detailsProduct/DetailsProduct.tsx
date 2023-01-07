import { useParams } from 'react-router-dom';
import style from './DetailsProduct.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../redux/store';
import DetailsCategory from '../../category/detailsCategories/DetailsCategory';
import DetailsGender from '../../gender/detailsGender/DetailsGender';
import { Button } from '../../custom/button/Button';
//import Breadcrumbs from '../../breadcrumbs/Breadcrumbs';

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
      {/* <Breadcrumbs /> */}
      {duckDetail && (
        <div className={style.detailsBlock}>
          <div className={style.pictures}>
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
            <div className={style.imgBlock}>
              <img
                className={style.imgDetails}
                src={image}
                alt={duckDetail.alt}
              />
            </div>
          </div>
          <div className={style.description}>
            <h2 className={style.nameDetails}>{duckDetail.name}</h2>
            <div className={style.line}></div>
            <div className={style.shortDesc}>{duckDetail.description}</div>
            <div className={style.brand__and__category}>
              <div className={style.category}>
                <p> Категория </p>
                {id && <DetailsCategory id={parseInt(id)} />}
              </div>
              <div className={style.brand}>
                <p> Пол </p>
                {id && <DetailsGender id={parseInt(id)} />}
              </div>
            </div>
            <div className={style.price}>
              <div>
                <span> Цена: </span> {duckDetail.price} $
              </div>
              <Button name={'Купить'} callback={() => {}} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailsProduct;
