import Card from "../Card"

export default function Favorites({ items, onAddToFavorite }) {
    return(
        <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>Мои закладки</h1>
                </div>
                <div className="sneakers d-flex flex-wrap">
                    {items.map((item, index) => (
                        <Card 
                            key={index} 
                            title={item.title} 
                            price={item.price}
                            imageURL={item.imageURL} 
                            favorited={true} 
                            onAddToFavorite={onAddToFavorite}
                        />                    
                    ))}
                </div>
        </div>
    )
}
