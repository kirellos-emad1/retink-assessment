import "./App.css";
import Main from "./components/Main";

import SideNav from "./components/SideNav";

function App() {
  return (
      <div className="flex-container">
        <SideNav></SideNav>
        <Main></Main>
      </div>
  );
}

export default App;
