import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
    {title: "Кроссовки Puma X Aka Boku Future Rider", price: "7.890", imageURL: "/images/jpg/puma-x-aka.jpg"},
    {title: "Мужские Кроссовки Nike Blazer Mid Suede", price: "12.900", imageURL: "/images/jpg/nike-blazer.jpg"},
    {title: "Мужские Кроссовки Nike Blazer Mid Suede", price: "12.000", imageURL: "/images/jpg/nike-blazer-2.jpg"},
    {title: "Мужские Кроссовки Nike Lebron XVIII Low", price: "13.999", imageURL: "/images/jpg/nike-lebron.jpg"},
];

export default function App() {
    return (
        <div className="wrapper clear">
            <div style={{
                display: "none",
            }} className="overlay">
                <Drawer />
            </div>
            <Header />
            <div className="content p-40">
                <div className="d-flex align-center justify-between">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex align-center">
                        <img src="/images/svg/search.svg" alt="search input"/>
                        <input type="text" placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="sneakers d-flex flex-wrap">
                    {arr.map((obj) => (
                        <Card
                            title={obj.title}
                            price={obj.price}
                            imageURL={obj.imageURL}
                            onCkick={() => console.log(obj)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}