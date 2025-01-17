import cardStyles from "./Card.module.scss";
import React from "react";

export default function Card({ onFavorite, price, title, imageURL, onPlus }) {
    const [isAdded, setIsAdded] = React.useState(false);
    const onClickPlusHandle = () => {
        onPlus({ title, imageURL, price });
        setIsAdded(!isAdded);
    }

    return (
        <div className={cardStyles.card}>
            <div className={cardStyles.favorite} onClick={onFavorite}>
                <img src="/images/svg/heart-default-button.svg" alt="heart button"/>
            </div>
            <img width={132} height={112} src={imageURL}
                 alt={title}/>
            <p>{title}</p>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span className="price">Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img
                    className={cardStyles.plusButton}
                    src={ isAdded ? "/images/svg/check.svg" : "/images/svg/plus.svg" }
                    alt="add to card"
                    onClick={onClickPlusHandle}
                />
            </div>
        </div>
    );
}
