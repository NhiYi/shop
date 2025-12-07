import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/Frontend_Assets/star_icon.png';
import star_dull_icon from '../Assets/Frontend_Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" className="" />
                <img src={product.image} alt="" className="" />
                <img src={product.image} alt="" className="" />
                <img src={product.image} alt="" className="" />
            </div>
            <div className="productdisplay-img">
                <img src={product.image} alt="" className="productdisplay-main-img" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1 className="">{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" className="" />
                <img src={star_icon} alt="" className="" />
                <img src={star_icon} alt="" className="" />
                <img src={star_icon} alt="" className="" />
                <img src={star_dull_icon} alt="" className="" />
                <p className="">{122}</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                A lightweight, usually knitted, pullover shirt, 
                close-fitting and with a round neckline and short 
                sleeves, worn as an undershirt or outer garment.
            </div>
            <div className="productdisplay-right-size">
                <h1 className="">Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div className="">S</div>
                    <div className="">M</div>
                    <div className="">L</div>
                    <div className="">XL</div>
                    <div className="">XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}} className="">ADD TO CART</button>
            <p className="productdisplay-right-cattegory">
                <span className="">Category :</span> Women, T-Shirt, Crop Top
            </p>
            <p className="productdisplay-right-cattegory">
                <span className="">Tags :</span> Modern, Latest
            </p>
        </div>
    </div>
  )
}

export default ProductDisplay;