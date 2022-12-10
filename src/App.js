import { Routes, Route } from "react-router-dom";
import Layout from "./Page/Layout";
import Main from "./Page/Main";
import Program from "./Page/Program";
import NoPage from "./Page/NoPage";
import About from "./Page/About";
import Contact from "./Page/Contact";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/Portfolio/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="Programming" element={<Program />} />
                    <Route path='About' element={<About/>} />
                    <Route path='Contact' element={<Contact/>} />
                    <Route path="*" element={<NoPage/>} ></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
