import toast from "react-hot-toast";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
const CartItem = ({item,itemIndex}) => {
  const dispatch = useDispatch();
  const removeFromCart = ()=>{
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }
  return(
  <div className="flex">
    <div>
      <img src={item.image} className="h-[180px]"/>
    </div>
    <div>
      <div>
      <p className="text-gray-700 font-semibold text-lg text-left mt-1">{item.title}</p>
      </div>
      <div>
      <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").splice(0,10).join(" ")+"..."}</p>
      </div>
      <div className="flex">
        <div>
          <p>{item.price}</p>
        </div>
        <div>
          <FcDeleteDatabase onClick={removeFromCart} />
        </div>
      </div>
    </div>
  </div>)
};

export default CartItem;
