
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { RootState } from '../store';


const Home = () => {
    const filter = useSelector((state: RootState) => state.filter);

    return (
        <>
            <Link to={"/products"}>
                
                <Button variant="contained" size="large" style={{margin:"36px"}}>
                Products Page
                </Button>
            </Link>
        </>
    );
}

export default Home;
