import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { updateData } from "../redux/Slices/SearchSlice";
import shoplogo from '../images/shoplogo.png';
import './Navbar.css';
const Navbar = (props) => {
  let isLoggedin = props.isLoggedin;
  let setLoggedin = props.setLoggedin;
  const{cart} = useSelector((state)=>state);
  const{wishlist} = useSelector((state)=>state);
  const dispatch = useDispatch();
  function onChangeHandler(event){
    dispatch(updateData(event.target.value));
  }
  function LogoutHandler(){
    setLoggedin(false);
  }
  return(
    <div className="nav">
      <div className="nav-container">
        <div className="logo-container">
        <NavLink to="/">
          <img src={shoplogo} className="web-logo"/>
        </NavLink>
        </div>
        <div className="search-container">
        <input type="text" placeholder="Search the Product" name="search_bar" onChange={onChangeHandler} className="search-input"/>
        <NavLink to="/Search">
        <button className="btn">Search</button>
        </NavLink>
        </div>
        <div className="nav-link-container">
          <NavLink to="/" className={({isActive})=>(isActive?'active-link':' ')}>
          <p>Home</p>
          </NavLink>
          <div className="cart-cont">
          <NavLink to="/Cart" className={({isActive})=>(isActive?'active-link':' ')}>
          <span><FaShoppingCart className="cart-logo"/></span>
          </NavLink>
          {
            cart.length>0 &&
            <div className="cart-len">{cart.length}</div>
          }
          </div>
          <div className="wish-cont">
          <NavLink to="/Wishlist" className={({isActive})=>(isActive?'active-link':' ')}>
          <FaHeart className="wish-logo"/>
          </NavLink>
          {
            wishlist.length>0 &&
            <div className="wish-len">{wishlist.length}</div>
          }
          </div>
          <NavLink to="/category/:category" className={({isActive})=>(isActive?'active-link':' ')}>
          <TbCategory2 />
          </NavLink>
          {
            !isLoggedin && <NavLink to="/Login" className={({isActive})=>(isActive?'active-link':' ')}>Log in
            </NavLink>
          }
          {
            !isLoggedin && <NavLink to="/Signup" className={({isActive})=>(isActive?'active-link':' ')}>Sign up
            </NavLink>
          }
          {
            isLoggedin && <NavLink to="/" onClick={LogoutHandler} className={({isActive})=>(isActive?'active-link':' ')}>Log Out
            </NavLink>
          }
        </div>
      </div>
    </div>
  )
};

export default Navbar;
