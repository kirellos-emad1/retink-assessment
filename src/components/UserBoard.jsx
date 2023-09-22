import "./main.css";
import editIcon from '../images/Edit.svg'
import productIcon from '../images/basil_edit-outline.svg'
import articleIcon from '../images/Text Bullet List Square Edit.svg'
import UserContent from "./UserContent";

const cards = [
  {
    id: 1,
    image:[{src:editIcon ,alt: 'icon'}],
    header: "Blog writing",
    subText:
      "Generate the best blog post to fit your audience with just few clicks of a button",
  },
  {
    id: 2,
    image: [{src: productIcon ,alt: 'icon'}],
    header: "Product description",
    subText: "Instantly generate engaging product descriptions that sell",
  },
  {
    id: 3,
    image: [{src: articleIcon,alt: 'icon'}],
    header: "Article writer",
    subText:
      "Automatically create unique factual articles at the touch of a button",
  },
];

export default function UserBoard() {
  return (
    <div className="user--board">
      
      <UserContent category={"Social media"} cards={cards}></UserContent>
      <UserContent category={"Social media"} cards={cards}></UserContent>
      <UserContent category={"Social media"} cards={cards}></UserContent>
      <div className="mobile-btn"></div>

    </div>
  );
}
