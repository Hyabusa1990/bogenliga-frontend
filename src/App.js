import './App.css';
import {NavigationBar} from "./components/NavigationBar";
import {Route, Routes} from "react-router-dom";
import {HomeScreen} from "./screens/HomeScreen";
import {NotFoundScreen} from "./screens/NotFoundScreen";

function App() {
    return (
        <div className="App">
            <NavigationBar></NavigationBar>
            <div className="MainContainer">
                <Routes>
                    <Route path="/" element={<HomeScreen/>}/>
                    <Route path="*" element={<NotFoundScreen/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
