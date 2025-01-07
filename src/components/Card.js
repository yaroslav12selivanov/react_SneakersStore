export default function DefaultCardProduct() {
    return (
        <div className="card mt-40">
            <div className="favorite">
                <img src="/images/svg/heart-default-button.svg" alt="heart button"/>
            </div>
            <img width={132} height={112} src="/images/jpg/nike-air-max.jpg"
                 alt="Мужские Кроссовки Nike Air Max 270"/>
            <p>Мужские Кроссовки Nike Air Max 270</p>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span className="price">Цена:</span>
                    <b>12 990 руб.</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/images/svg/plus.svg" alt=""/>
                </button>
            </div>
        </div>
    );
}
