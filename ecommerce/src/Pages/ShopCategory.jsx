import React, { useContext,useEffect} from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const ShopCategory = (props) => {
    const {all_product,setAllProducts} = useContext(ShopContext);
    const fetchInfo = () => { 
        fetch('http://localhost:4000/allproducts') 
                .then((res) => res.json()) 
                .then((data) => setAllProducts(data));
        }
    
        useEffect(() => {
          fetchInfo();
        }, [])

    return (
        <div className="shop-category">
            <Navbar/>
            <img className="shopcategory-banner" src={props.banner} alt="" />  
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item,i)=>{
                    if(props.category===item.category) {
                        return <Item id={item.id} key={i} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
                    }
                    else{
                        return null;
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">
            <Link to='/' style={{ textDecoration: 'none' }}>Explore More</Link>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default ShopCategory