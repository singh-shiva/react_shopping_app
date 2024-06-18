import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add,remove} from "../redux/Slices/CartSlice";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { addWish, removeWish } from "../redux/Slices/WishlistSlice";
const Product = ({post}) => {
  const{cart} = useSelector((state)=>state);
  const{wishlist} = useSelector((state)=>state);
  const dispatch = useDispatch();
  const addToCart = ()=>{
    dispatch(add(post));
    toast.success("Item added to cart");
  }
  const removeFromCart = ()=>{
    dispatch(remove(post.id));
    toast.success("Item removed from cart");
  }
  const removeFromWishlist = ()=>{
    dispatch(removeWish(post.id));
    toast.error("Item Removed from Wishlist");
  }
  const addToWishlist = ()=>{
    dispatch(addWish(post));
    toast.success("Item Added to Wishlist");
  }
  return(
    <div className="flex flex-col items-center justify-between
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").splice(0,10).join(" ")+"..."}</p>
      </div>
      <div className="h-[180px] flex flex-row items-end space-x-4">
        <div className="h-full">
        <img src={post.image} className="h-full w-full"/>
        </div>
        <div className="text-[20px] cursor-pointer">
        {
        wishlist.some((p)=>p.id === post.id)?
        (<FaHeart onClick={removeFromWishlist}/>):
        (<FaRegHeart onClick={addToWishlist}/>)
        }
        </div>
      </div>
      <div className="flex justify-between gap-12 items-center w-full mt-5">
      <div>
        <p className="text-green-600 font-semibold">${post.price}</p>
      </div>
      {
        cart.some((p)=> p.id === post.id)?
        (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
        text-[12px] p-1 px-3 uppercase
        hover:bg-gray-700
        hover:text-white transition duration-300 ease-in" onClick={removeFromCart}>
          Remove Item
        </button>):
        (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
          text-[12px] p-1 px-3 uppercase
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in" onClick={addToCart}>
          Add to Cart
        </button>)
      }
      </div>
    </div>
  )
};

export default Product;
