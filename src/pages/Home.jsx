import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spineer from "../components/Spineer";
import Advertise from "./Advertise";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const[loading, setLoading] = useState(false);
  const[posts, setPosts] = useState([]);
  async function fetchProductData(){
    setLoading(true);
    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    }
    catch(error){
      console.log("Error occured");
      setPosts([]);
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchProductData();
  },[])
  return(
    <div>
      <div>
        {
          <Advertise/>
        }
      </div>
      <div>
      {
        loading?(<Spineer/>):
        ((posts.length === 0)?(<div>no output</div>):
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            (posts.map((post)=>(<Product post={post} key={post.id}/>)))
          }
        </div>
        )
      }
      </div>
    </div>
  )
};

export default Home;
