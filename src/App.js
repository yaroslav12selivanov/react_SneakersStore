import Card from "./components/Card";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React, {useState} from "react";

export default function App() {
    const [items, setItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [cartItems, setCartItems] = useState([]);
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
        axios.post("https://678a5b1bdd587da7ac29cb6c.mockapi.io/Cart", obj);
        setCartItems((prev) => [...prev, obj]);
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
            { cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/> : null }
            <Header
                onClickCart={() => setCartOpened(true)}
            />
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>{ searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки" }</h1>
                    <div className="search-block d-flex align-center">
                        <img src="/images/svg/search.svg" alt="search input"/>
                        <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск..."/>
                        {searchValue && (
                            <img
                                onClick={() => setSearchValue('')}
                                className="cu-p"
                                src="/images/svg/close-hover-button.svg"
                                alt="clear button"
                            />
                        )}
                    </div>
                </div>
                <div className="sneakers d-flex flex-wrap">
                    {items.filter(item => item.title.includes(searchValue.toLowerCase())).map((item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            price={item.price}
                            imageURL={item.imageURL}
                            onFavorite={() => console.log("Вы добавили в закладки")}
                            onPlus={(obj) => onAddToCart(obj)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}