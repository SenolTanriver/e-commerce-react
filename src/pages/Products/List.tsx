
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { getProducts } from '../../services/products';
import { RootState } from '../../store';
import { Link } from 'react-router-dom';
import { filterProducts } from '../../store/features/products/productsSlice';
import { Pagination, Rating } from '@mui/material';
import { setCurrentPage } from '../../store/features/filter/filterSlice';

const List = () => {
  const dispatch = useDispatch();
  const filteredList = useSelector((state: RootState) => state.products.filteredList);
  const filteredCount = useSelector((state: RootState) => state.products.filteredCount);
  const list = useSelector((state: RootState) => state.products.list);
  const filter = useSelector((state: RootState) => state.filter);
  

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    dispatch(filterProducts({ filter, list }));
  }, [filter]);

  return (
    <>
      <div className="products">
        {
          filteredList.map((product: any) => (
            <div className="card-01" key={"product" + product.id}>
              <Link to={"/product/" + product.id}>
                <img className="c-item-01" src={product.thumbnail} alt={product.title} />
              </Link>
              <Link to={"/product/" + product.id}>
                <h5 className="c-item-02">{product.title}</h5>

              </Link>
              <p className="c-item-03">{product.description}</p>
              <p className="c-item-03"><h3>Fiyat: ${product.price}</h3> </p>
              <div style={{display:"flex", justifyContent:"center"}}>
                <Rating name="read-only" value={product.rating} readOnly precision={0.1} />
                </div>

            </div>



          ))
        }

        {
          filteredList.length === 0 &&
          <>Aradığınız kriterlerde ürün bulunamadı.</>
        }



      </div>
      {

        filteredList.length > 0 &&
        <div>
          <Pagination count={Math.round(filteredCount / filter.size)} color="primary"
            onChange={(e, value) => {
              dispatch(setCurrentPage(value - 1))
            }} />
        </div>

      }
    </>
  );
}

export default List;
