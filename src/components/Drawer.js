import "../index.scss";

export default function Drawer({ onClose, onRemove, items = [] }) {
    const totalAmount = 21498; // Replace with dynamic calculation if needed
    const taxAmount = (totalAmount * 0.05).toFixed(2); // Example for 5% tax

    return (
        <div className="overlay">
            <div className="drawer d-block">
                <h2 className="mb-20 d-flex align-center justify-between">
                    Корзина
                    <img
                        className="removeBtn"
                        src="/images/svg/close-hover-button.svg"
                        alt="close button"
                        onClick={onClose}
                    />
                </h2>

                {items.length > 0 ? (
                    <div className="items">
                        {items.map((obj) => (
                            <div key={obj.id} className="cartItem d-flex align-center">
                                <div style={{ backgroundImage: `url(${obj.imageURL})` }} className="cartItemImg"></div>
                                <div className="mr-20 flex d-flex align-center">
                                    <div>
                                        <p className="mb-5">{obj.title}</p>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                    <img
                                        onClick={() => onRemove(obj.id)}
                                        className="removeBtn"
                                        src="/images/svg/close-hover-button.svg"
                                        alt="close button"
                                    />
                                </div>
                            </div>
                        ))}
                        <div className="cartTotalBlock mt-50">
                            <ul>
                                <li className="d-flex">
                                    <span>Итого:</span>
                                    <div></div>
                                    <b>{totalAmount} руб.</b>
                                </li>
                                <li className="d-flex">
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b>{taxAmount} руб.</b>
                                </li>
                            </ul>
                            <button className="greenButton">
                                <span>Оформить заказ</span>
                                <img src="/images/svg/left-arrow.svg" alt="" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img className="mb-20" width="120px" height="120px" src="/images/png/pngwing.com.png" alt="empty cart"/>
                        <h2>Корзина пуста</h2>
                        <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы получить возможность сделать заказ</p>
                        <button onClick={onClose} className="greenButton">
                            <img src="/images/svg/left-arrow.svg" alt="arrow"/> Вернуться назад
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
