
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { getProducts } from '../../services/products';
import { RootState } from '../../store';
import { Link } from 'react-router-dom';
import { filterProducts, setCategories } from '../../store/features/products/productsSlice';
import { Chip, Rating } from '@mui/material';
import { ICategory } from '../../store/features/products/model';
import { setSelectedCategories } from '../../store/features/filter/filterSlice';

const Chips = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filter);
  const categories = useSelector((state: RootState) => state.products.categories);
  const filteredCategories = useSelector((state: RootState) => state.products.filteredCategories);

  const handleDelete = (ctg: string) => {

    let _ctg: Array<ICategory> = [...categories];
    const index = categories.findIndex(x => x.name === ctg);
    _ctg[index] = { name: ctg, selected: false };

    let _filteredCategories: Array<ICategory> = [...filteredCategories];
    const _index = filteredCategories.findIndex(x => x.name === ctg);
    _filteredCategories[_index] = { name: ctg, selected: false };


    dispatch(setCategories({
      categories: _ctg,
      filteredCategories: _filteredCategories
    }));

    dispatch(setSelectedCategories(_ctg.filter(x => x.selected).map(x => x.name)));

  };

  return (
    <div className="chips">
      {
        filter.selectedCategories.map((ctg) => (
          <Chip label={ctg} onDelete={() => handleDelete(ctg)} />
        ))

      }

      <Chip label={"Temizle"} onDelete={() => {
        const defaultCategories = [...categories.map((x: ICategory) => { return { name: x.name, selected: false } })];
        dispatch(setCategories({
          categories: defaultCategories,
          filteredCategories: defaultCategories
        }));

        dispatch(setSelectedCategories([]));

      }} />


    </div>
  );
}

export default Chips;
