import cardStyles from "./Card.module.scss";
import React, {useState} from "react";

export default function Card({ id, onFavorite, price, title, imageURL, onPlus, favorited=false }) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = useState(favorited);

    const onClickPlusHandle = () => {
        onPlus({ id, title, imageURL, price });
        setIsAdded(!isAdded);
    }

    const onClickFavorite = () => {
        onFavorite({ title, imageURL, price });
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={cardStyles.card}>
            <div className={cardStyles.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? "/images/svg/heart-hover-button.svg" : "/images/svg/heart-default-button.svg"} alt="heart button"/>
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
