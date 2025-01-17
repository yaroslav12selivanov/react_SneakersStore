export default function Drawer({ onClose, items = [] }) {
    return (
        <div className="overlay">
            <div className="drawer d-block">
                <h2 className="mb-20 d-flex align-center justify-between">
                    Коризна
                    <img
                        className="removeBtn"
                        src="/images/svg/close-hover-button.svg"
                        alt="close button"
                        onClick={onClose}
                    />
                </h2>
                <div className="items">
                    {
                        items.map((obj) => (
                            <div className="cartItem d-flex align-center">
                                <div style={
                                    {backgroundImage: `url(${obj.imageURL})`}
                                } className="cartItemImg"></div>
                                <div className="mr-20 flex d-flex align-center">
                                    <div>
                                        <p className="mb-5">{obj.title}</p>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                    <img className="removeBtn" src="/images/svg/close-hover-button.svg" alt="close button"/>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="cartTotalBlock mt-50">
                    <ul>
                        <li className="d-flex">
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li className="d-flex">
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className="greenButton">
                        <span>Оформить заказ</span>
                        <img src="/images/svg/left-arrow.svg" alt=""/>
                    </button>
                </div>
            </div>
        </div>
    )
}
