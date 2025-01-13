export default function Card(props) {
    const onClickButton = () => {
        alert(props.title);
    };

    return (
        <div className="card mt-40">
            <div className="favorite">
                <img src="/images/svg/heart-default-button.svg" alt="heart button"/>
            </div>
            <img width={132} height={112} src={props.imageURL}
                 alt={props.title}/>
            <p>{props.title}</p>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span className="price">Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className="button" onClick={onClickButton()}>
                    <img width={11} height={11} src="/images/svg/plus.svg" alt="plus"/>
                </button>
            </div>
        </div>
    );
}
