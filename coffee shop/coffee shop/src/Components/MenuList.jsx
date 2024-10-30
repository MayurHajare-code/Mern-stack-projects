import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import MenuCard from "./MenuCard";
import './style/common.css';

const MenuList = () => {

    const [menu, setMenu] = useState([]);

    const fetchMenu = (setMenu) => {
        axios.get("http://localhost:5000/menus")
            .then((res) => {
                setMenu(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchMenu(setMenu);
    }, []);

    return (
        <>
            <div className="container-fluid mt-5 p-5 menuContainer">
                <div className="row my-3">
                    <h1>Coffee Ko's popular menus</h1>
                </div>
                <div className="row my-3">
                    <div className="container">
                        <ul className="Menu-block">
                            {
                                menu.length > 0 ?
                                    (
                                        menu.map((menuData) => (
                                            <li key={menuData.id}>
                                                <MenuCard
                                                    img={menuData.img}
                                                    name={menuData.name}
                                                    description={menuData.description}
                                                    price={menuData.price} />
                                            </li>
                                        ))
                                    ) : (
                                        <h2 className='h2-text'>Menu Items not founds</h2>
                                    )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MenuList;