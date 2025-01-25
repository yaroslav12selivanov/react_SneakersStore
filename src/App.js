// import Card from "./components/Card";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React, { useState } from "react";
import Home from "./components/pages/Home"
import Favorites from "./components/pages/Favorites"


export default function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [cartOpened, setCartOpened] = useState(false);

    React.useEffect(() => {
        axios.get("https://678a5b1bdd587da7ac29cb6c.mockapi.io/items").then((res) => {
            setItems(res.data);
        });
        axios.get("https://678a5b1bdd587da7ac29cb6c.mockapi.io/Cart").then((res) => {
            setCartItems(res.data);
        });
    }, []);

    const onAddToCart = (obj) => {
        if (cartItems.find((item) => Number(item.obj) === Number(obj.id))) {
            setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
        } else {
            axios.post("https://678a5b1bdd587da7ac29cb6c.mockapi.io/Cart", obj);
            setCartItems((prev) => [...prev, obj]);
        }
    };

    const onAddToFavorite = async (obj) => {
        try {
            if (favorites.find((favObj) => favObj.id === obj.id)) {
                axios.delete(`/favorites/${obj.id}`);
            } else {
                const { data } = await axios.post("/favorites", obj);
                setFavorites((prev) => [...prev, obj]);
            }
        } catch (error) {
            alert("Не удалось добавить товар в фавориты")
        }
    };

    const onRemoveItem = async (id) => {
        try {
            await axios.delete(`https://678a5b1bdd587da7ac29cb6c.mockapi.io/Cart/${id}`);
            setCartItems((prev) => prev.filter(item => item.id !== id));
        } catch (error) {
            console.error("Error deleting item:", error.response);
        }
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className="wrapper clear">
            {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} /> : null}

            <Header onClick={() => setCartOpened(true)} />

            <Routes>
                <Route path="/" exact element={<Home
                    items={items}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    onChangeSearchInput={onChangeSearchInput}
                    onAddToFavorite={onAddToFavorite}
                    onAddToCart={onAddToCart}
                />} />
            </Routes>

            <Routes>
                <Route path="/favorites" exact element={<Favorites
                    items={favorites}
                    onAddToFavorite={onAddToFavorite}
                />} />
            </Routes>

        </div>
    );
}
