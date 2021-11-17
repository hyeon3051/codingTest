import React from "react"
import ContentBorad from "./component/ContentBorad";
import Header from './component/Header';
import TitleAndFilter from "./component/TitleAndFilter";

const App: React.FC = () => {
  return (
    <div>
      <Header></Header>
      <TitleAndFilter></TitleAndFilter>
    </div>
  );
}

export default App;
