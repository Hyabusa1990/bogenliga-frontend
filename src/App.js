import './App.css';
import {NavigationBar} from "./components/NavigationBar";
import {Route, Routes} from "react-router-dom";
import {InformationScreen} from "./screens/InformationScreen";
import {NotFoundScreen} from "./screens/NotFoundScreen";
import {TitleBannerScreen} from "./screens/TitleBannerScreen";
import {Suspense} from "react";

function App() {
    return (
        <Suspense fallback="loading">
            <div className="App">
                <NavigationBar></NavigationBar>
                <TitleBannerScreen></TitleBannerScreen>
                <div className="MainContainer">
                    <Routes>
                        <Route path="/" element={<InformationScreen/>}/>
                        <Route path="*" element={<NotFoundScreen/>}/>
                    </Routes>
                </div>
            </div>
        </Suspense>
    );
}

export default App;
