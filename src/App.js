import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React, {useState} from "react";

export default function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);

    React.useEffect(() => {
        fetch("https://678a5b1bdd587da7ac29cb6c.mockapi.io/items").then(res => {
            return res.json();
        }).then(json => {
            setItems(json);
        });
    }, []);

    const onAddToCart = (obj) => {
        setCartItems((prev) => {
            const itemExists = prev.some(item => item.id === obj.id);

            if (itemExists) {
                return prev.filter(item => item.id !== obj.id);
            } else {
                return [...prev, obj];
            }
        });
    };

    return (
        <div className="wrapper clear">
            { cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} /> : null }
            <Header
                onClickCart={() => setCartOpened(true)}
            />
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex align-center">
                        <img src="/images/svg/search.svg" alt="search input"/>
                        <input type="text" placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="sneakers d-flex flex-wrap">
                    {items.map((item) => (
                        <Card
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