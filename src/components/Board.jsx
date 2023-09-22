import "./main.css";
export default function Board(props) {
  return (
    <div className="main--board">
      <div className="left-div">
        <h1 className="welcome-text">Hey {props.name}</h1>
        <p className="text">Lets create something awesome today ✨💫</p>
        <button className="create-button">Start Creating</button>
      </div>
      <div className="right-div">
        <select className="drop-down">
          <option value="Zara ventures">Zara ventures</option>
        </select>
        <div className="text-container">
          <p>
            You should have more engagement by 6pm today, try posting then. 📆{" "}
          </p>
          <p>Try our SEO optimization tool to increase engagement by 40% 🔥</p>
        </div>
      </div>
    </div>
  );
}
