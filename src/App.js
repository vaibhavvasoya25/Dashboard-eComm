import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import List from "./Components/List";
import Create from "./Components/Create";
import Detail from "./Components/Detail";
import Search from "./Components/Search";
import Update from "./Components/Update";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Protected from "./Components/Protected";

function App() {
  return (
    <div className="App">
      <div>
        <Protected exact path="/" component={Home} />
        <Protected exact path="/list" component={List} />
        <Protected exact path="/create" component={Create} />
        <Protected exact path="/detail" component={Detail} />
        <Protected exact path="/search" component={Search} />
        <Protected exact path="/update/:id/" component={Update} />
        <Protected exact path="/update" component={Update} />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
