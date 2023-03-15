
import Categories from './Categories';
import List from './List';
import Search from './Search';
import Sort from './Sort';
import { useDispatch, useSelector } from "react-redux"
import { RootState } from '../../store';
import Chips from './Chips';

const Products = () => {
    const filter = useSelector((state: RootState) => state.filter);

    return (
        <>

            <div className='section-01'>
                <div className='c-wrapper'>
                    <Categories />

                    <div className='list-container'>

                        <div className='sort-search-container'>
                            <Sort />
                            <Search />
                        </div>

                        {
                            filter.selectedCategories.length > 0 &&
                            <Chips />
                        }

                        <List />
 

                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;
