
import './App.css';
import H1 from "./component/H1/H1";
import Header from "./component/Header/Header";
import H3 from "./component/H3/H3";
import Search from "./component/Search/Search";
import Pargraph from "./component/Pargraph/Pargraph";
import Card from "./component/Card/Card";
import Button from "./component/Button/Button";
import Link from "./component/Link/Link";

function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <H1/>
      <H3/>
      <Pargraph/>
      <Card/>
      <Button/>
      <Link/>
    </div>
  );
}

export default App;
