import { useParams } from 'react-router-dom';
import style from './DetailsProduct.module.css';

function DetailsProduct() {
  const { id } = useParams();
  return (
    <div className={style.wrapperProduct}>
      <div>{id}</div>
    </div>
  );
}

export default DetailsProduct;
