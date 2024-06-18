import { NavLink,useLocation } from 'react-router-dom';
import electronic from '../images/electronic.jpeg';
import jewel from '../images/jewel.jpeg';
import men from '../images/men.jpeg';
import women from '../images/women.jpeg';
import { baseUrl } from '../baseUrl';
import { useEffect, useState } from 'react';
import Product from '../components/Product';
import Spineer from '../components/Spineer';
const Category = ()=>{
    const location = useLocation();
    const[loading,setLoading] = useState(false);
    const[posts,setPosts] = useState([]);
    const[cat,setCat] = useState(true);
    async function fetchPostsData(){
        setLoading(true);
        let url='';
        if(location.pathname.includes("category")){
            const category = location.pathname.split("/").at(-1);
            if(category !== ':category'){
                url = `${baseUrl}/category/${category}`;
                try{
                    const res = await fetch(url);
                    const data = await res.json();
                    setPosts(data);
                }
                catch(error){
                    console.log("error occured");
                    setPosts([]);
                }
                setCat(false);
            }
            else{
                setCat(true);
            }
        }
        setLoading(false);
    }
    useEffect(()=>{
        fetchPostsData();
    },[location.pathname]);
    return(
        <div>
            {
                cat?(
                <div className='flex flex-col items-center justify-between max-w-[800px] mx-auto space-y-11 mt-6 h-[100vh]'>
                <NavLink to="/category/electronics">
                <div className='flex flex-col items-center space-y-12'>
                <h2 className='inline-block font-bold text-3xl border-b-4 border-blue-500 p-2 text-center transition-transform transform hover:scale-110 hover:text-blue-600'>ELECTRONICS</h2>
                <img src={electronic} className='w-[800px] h-[350px] rounded-3xl
                hover:scale-105 transition-all duration-700 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'/>
                </div>
                </NavLink>
                <NavLink to="/category/jewelery">
                <div className='flex flex-col items-center space-y-12'>
                <h2 className='inline-block font-bold text-3xl border-b-4 border-blue-500 p-2 text-center transition-transform transform hover:scale-110 hover:text-blue-600'>JEWELLERY</h2>
                <img src={jewel} className='w-[800px] h-[350px] rounded-3xl
                hover:scale-105 transition-all duration-700 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'/>
                </div>
                </NavLink>
                <NavLink to="/category/men's clothing">
                <div className='flex flex-col items-center space-y-12'>
                <h2 className='inline-block font-bold text-3xl border-b-4 border-blue-500 p-2 text-center transition-transform transform hover:scale-110 hover:text-blue-600'>MEN'S CLOTHING</h2>
                <img src={men} className='w-[800px] h-[350px] rounded-3xl
                hover:scale-105 transition-all duration-700 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'/>
                </div>
                </NavLink>
                <NavLink to="/category/women's clothing">
                <div className='flex flex-col items-center space-y-12'>
                <h2 className='inline-block font-bold text-3xl border-b-4 border-blue-500 p-2 text-center transition-transform transform hover:scale-110 hover:text-blue-600'>WOMEN'S CLOTHING</h2>
                <img src={women} className='w-[800px] h-[350px] rounded-3xl
                hover:scale-105 transition-all duration-700 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'/>
                </div>
               </NavLink>
               </div>
                ):
                (
                    <div>
                    {
                    loading?(<Spineer/>):
                    <div>
                    {
                        (posts.length === 0?(<div>No output</div>):
                        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                        {
                            posts.map((post)=>(<Product key={post.id} post={post}/>))
                        }
                        </div>
                        )
                    }
                    </div>
                    }
                    </div>
                )
            }
        </div>
    )
}
export default Category;