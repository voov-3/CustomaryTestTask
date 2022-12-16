import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import * as PropTypes from "prop-types";
import {PATHS} from "./common/constants/routes";
import SignIn from "./Auth/SignIn/SignIn";
import {MainAuth} from "./Auth";

function Routes(props) {
    return null;
}

Routes.propTypes = {children: PropTypes.node};

function App() {
  return (
    <div className="App">
        <Routes>
            {/** AUTH **/}
            <Route element={<MainAuth />}>
                /TODO
                {/*<Route path={PATHS.AUTH.LOGIN} element={<Login />} />*/}
                <Route path={PATHS.AUTH.SIGN_IN} element={<SignIn />} />
            </Route>

            {/** MAIN components **/}
            <Route
                path="/*"
                element={
                        <Main />
                }
            />

            {/** Service routes **/}
            /TODO
            {/*<Route path={PATHS.LOGOUT} element={<Logout />} />*/}
            {/*<Route path="*" element={<Navigate to={PATHS.AUTH.LOGIN} />} />*/}
        </Routes>
      {/*<Navbar/>*/}
        <div>
            <Header/>
            <Main/>
        </div>
    </div>
  );
}

export default App;
