import "./main.css";
export default function UserContent(props) {

  const cardElement =
    props.cards &&
    props.cards.map((card) => {
      return (
        <div className="kk"  key={card.id}>
          <img src={card.image[0].src} alt={card.image[0].alt} style={{ width:'20px'}} />
          <h2>{card.header}</h2>
          <p>{card.subText}</p>
        </div>
      );
    });

  return (
    <div className="hhh">
      <h2 className="category-text">{props.category}</h2>
      <div className="zft">{cardElement}</div>
    </div>
  );
}
