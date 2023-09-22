import Board from "./Board";
import UserBoard from "./UserBoard";
import Navigation from "./Navigation";
import "./main.css";

export default function Main(props) {
  return (
    <div className="main--container">
      <Navigation></Navigation>
      <div className="main-content">
        <Board name={"James"}></Board>
        <div className="tools">
          <h2>Most Popular Tools</h2>
          <p>Explore the trending tools to create your copies fast</p>
        </div>
        <UserBoard></UserBoard>
      </div>

    </div>
  );
}
