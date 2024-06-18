import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import Spineer from "../components/Spineer";

const Search = () => {
  const searchData = useSelector((state) => state.search.searchData);
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log("Error occurred");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  useEffect(() => {
    if (searchData) {
      const filter = posts.filter((post) =>
        post.title.toLowerCase().includes(searchData.toLowerCase())
      );
      setFilteredPosts(filter);
    } else {
      setFilteredPosts(posts);
    }
  }, [searchData, posts]);
  return (
    <div>
      {loading ? (
        <Spineer/>
      ) : (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            filteredPosts.map((post) => <Product post={post} key={post.id} />)
          }
        </div>
      )}
    </div>
  );
};

export default Search;
