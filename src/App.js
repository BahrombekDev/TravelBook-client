import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import AddBook from "./pages/AddBook";
import UpdateBook from "./pages/UpdateBook";
import {BrowserRouter,Route,Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <Routes>
              <Route path="/" element = {<Main/>}></Route>
              <Route path="/add" element = {<AddBook/>}></Route>
              <Route path="/update/:id" element = {<UpdateBook/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
