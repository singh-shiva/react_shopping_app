import { useEffect, useState } from 'react';
import adver1 from '../images/adver1.jpg';
import adver2 from '../images/adver2.jpg';
import adver3 from '../images/adver3.jpg';
import adver4 from '../images/adver4.jpg';
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import './Advertise.css';
const Advertise = ()=>{
    const images = [adver1,adver2,adver3,adver4];
    const[imageIndex,setImageIndex] = useState(0);
    function leftArrowHandler(){
        setImageIndex((prevIndex)=>(prevIndex>0)?(prevIndex-1):(images.length-1));
    }
    function rightArrowHandler(){
        setImageIndex((prevIndex)=>(prevIndex<images.length-1)?(prevIndex+1):(0));
    }
    useEffect(()=>{
        const interval = setInterval(()=>{
            setImageIndex((prevIndex)=>(prevIndex+1)%images.length);
            console.log("start");
        },3000)
        return()=>{
            clearInterval(interval); 
        }
    },[])
    return(
        <div>
            <div className='adver-cont'>
            <div className='left-arw'>
            <SlArrowLeft onClick={leftArrowHandler}/>
            </div>
            <div className='img-cont'>
            <img src={images[imageIndex]}/>
            </div>
            <div className='right-arw'>
            <SlArrowRight onClick={rightArrowHandler}/>
            </div>
            </div>
        </div>
    )
}
export default Advertise;