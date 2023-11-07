import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Book from "./pages/Books";
import Booklist from "./pages/Booklist";
import Protected from "./pages/Protected";
import Login from "./pages/Login";

export default function App() {
    return (
        <div>
            {/*<CustomHook/>*/}
            <nav>
                <ul>
                    <li>
                        {/*<Link to="/"> Layout </Link>*/}
                        <Link to="/home"> Home </Link>
                        <Link to="/blogs"> Blogs </Link>
                        <Link to="/contact"> Contacts </Link>
                        <Link to="/login"> Login </Link>
                        <Link to="/books"> Booklist </Link>
                        <Link to="/books/:id"> books </Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/home" element={<Protected component={Home}/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/books" element={<Protected component={Booklist}/>}/>
                    <Route path="/books/:id" element={<Protected component={Book}/>}/>
                    <Route path="/blogs" element={<Protected component={Blogs}/>}/>
                    <Route path="/contact" element={<Protected component={Contact}/>}/>
                    <Route path="*" element={<Protected component={NoPage}/>}/>

                </Route>


            </Routes>
        </div>
);
}