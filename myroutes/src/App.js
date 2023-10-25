import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Book from "./pages/Books";
import Booklist from "./pages/Booklist";
import Products from "./products/Products";
import CustomHook from "./CustomHook";
import Product1 from "./products/Product1";
import Product2 from "./products/Product2";

export default function App() {
    return (
        <div>
            {/*<CustomHook/>*/}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Layout </Link>
                        <Link to="/home">Home </Link>
                        <Link to="/blogs">Blogs </Link>
                        <Link to="/contact">Contacts </Link>
                        <Link to="/books">booklist</Link>
                        <Link to="/books/:id">books</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/books" element={<Booklist/>}/>
                    <Route path="/books/:id" element={<Book/>}/>
                    <Route path="/blogs" element={<Blogs/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<NoPage/>}/>

                </Route>




                {/*<Route path="/products/products">*/}
                {/*    <Route path="/product1" element={<Product1/>}/>*/}
                {/*    <Route path="/product2" element={<Product2/>}/>*/}
                {/*    <Route/>*/}


            </Routes>
        </div>
);
}