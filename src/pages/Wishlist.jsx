import { useSelector } from "react-redux"
import WishItem from "../components/WishItem";
import { NavLink } from "react-router-dom";
const Wishlist = ()=>{
    const { wishlist } = useSelector((state) => state);
    return(
        <div>
            {
                wishlist.length >0?
                    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                    {
                        wishlist.map((item)=>{
                            return <WishItem key={item.id} item={item}/>
                        })
                    }
                    </div>
            :
                (
                    <div>
                        <h2>WishList is Empty</h2>
                        <NavLink to={"/"}>
                        <button>Add to WishList</button>
                        </NavLink>
                    </div>
                )
            }
        </div>
    );
}
export default Wishlist;