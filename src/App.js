import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {Route, Routes} from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";

function App() {
  return (
    <div className="App">
            <Routes>
                <Route path="/signIn" element={<SignIn/>} />
                <Route path="/main" element={<>
                 <Header/>
                <Main/>
                </>}
                />
            </Routes>
    </div>
  );
}

export default App;
