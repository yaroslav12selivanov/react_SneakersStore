import Card from "../Card"

export default function Home(props) {
    return(
        <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>{ props.searchValue ? `Поиск по запросу: ${props.searchValue}` : "Все кроссовки" }</h1>
                    <div className="search-block d-flex align-center">
                        <img src="/images/svg/search.svg" alt="search input"/>
                        <input onChange={props.onChangeSearchInput} value={props.searchValue} type="text" placeholder="Поиск..."/>
                        {props.searchValue && (
                            <img
                                onClick={() => props.setSearchValue('')}
                                className="cu-p"
                                src="/images/svg/close-hover-button.svg"
                                alt="clear button"
                            />
                        )}
                    </div>
                </div>
                <div className="sneakers d-flex flex-wrap">
                    {props.items.filter(item => item.title.includes(props.searchValue.toLowerCase())).map((item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            price={item.price}
                            imageURL={item.imageURL}
                            onFavorite={(obj) => props.onAddToFavorite(obj)}
                            onPlus={(obj) => props.onAddToCart(obj)}
                        />
                    ))}
                </div>
        </div>
    )
}
