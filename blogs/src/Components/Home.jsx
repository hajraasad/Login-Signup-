import Searchbar from "./Searchbar";
import Bloglist from "./Bloglist";
import {data} from "./data";
import Header from "./Header";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";


function Home() {
    const blogs = useSelector(state => state?.blog?.blogsData)


    const [filteredBlogs, setFilteredBlogs] = useState(blogs);
    const [searchKey, setSearchKey] = useState('');

    // Search submit
    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
    };


    const handleSearchResults = () => {

        const filteredBlogs = blogs.filter((blog) =>
            blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
        );
        setFilteredBlogs(filteredBlogs);

    };

    return(
      <div>
          <Header/>
          <div style={{display: "flex", gap: "10px"}}>
              <Searchbar
                  value={searchKey}
                  formSubmit={handleSearchBar}
                  handleSearchKey={(e) => setSearchKey(e.target.value)}
              />

              <Link to={'/add-blog'}>Add a blog</Link>

          </div>

          <Bloglist blogs={blogs}/>
      </div>
    );

}
export default Home;