import { ShoppingCartCheckout } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux'
import { RootState } from "../store";
import { useEffect, useState } from "react";

const Layout = () => {
    const basket = useSelector((state: RootState) => state.basket);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setIsScrolled(window.scrollY > 0);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div>

            <header className="header-01">

                <div className="c-wrapper">

                    <Link className="c-item-02" to="/">
                        {isScrolled ? <h2>Anasayfa</h2> : <img src="bird.png" alt="Logo" />}
                    </Link>

                    <h1>E-ticaret sitesi</h1>


                    <div className="basket">

                        <Link to="/basket">
                            <Badge badgeContent={basket.items.length} color="error">
                                <ShoppingCartCheckout />
                            </Badge>
                        </Link>

                    </div>

                </div>

            </header>

            <main>
                <Outlet />
            </main>

            <footer className="footer-01">

            </footer>

        </div>
    )
};

export default Layout;
