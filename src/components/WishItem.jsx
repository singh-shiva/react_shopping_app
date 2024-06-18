import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { removeWish } from "../redux/Slices/WishlistSlice";
import toast from "react-hot-toast";
const WishItem = ({item})=>{
    const dispatch = useDispatch();
    function removeFromWishlist(){
        dispatch(removeWish(item.id));
        toast.error("Item removed from Wishlist");
    }
    return(
    <div className="flex flex-col items-center justify-between
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
      <div className="h-[180px]">
        <img src={item.image} className="h-full w-full"/>
      </div>
    <div>
      <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</p>
    </div>
    <div>
      <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").splice(0,10).join(" ")+"..."}</p>
    </div>
    <div className="flex justify-between gap-12 items-center w-full mt-5">
    <div>
      <p className="text-green-600 font-semibold">${item.price}</p>
    </div>
    <div>
    <FcDeleteDatabase onClick={removeFromWishlist} className="cursor-pointer"/>
    </div>
    </div>
  </div>
    )
}
export default WishItem;