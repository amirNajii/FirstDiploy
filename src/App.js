import ListUser from "./components/ListUser";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Welcome from "./components/Welcome";
import{BrowserRouter,Routes,Route} from 'react-router-dom'



function App() {

  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<ListUser/>}></Route>
        <Route path="/add" element={<AddUser/>}></Route>
        <Route path="/login" element={<Welcome/>}></Route>
        <Route path="/edit/:id" element={<EditUser/>}></Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
