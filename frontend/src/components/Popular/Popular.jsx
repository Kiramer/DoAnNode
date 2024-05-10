import React from "react";
import './Popular.css';
import data_product from '../../assets/data';
import Item from '../Item/Item';

const Popular = () =>{
    return(
        <div className="popular">
            <h1>SẢN PHẨM NỔI BẬT</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item)=>{
                    return <Item key={item} id={item.id} image={item.image} name={item.name} price={item.price}/>
                })}
            </div>
        </div>
    );
};

export default Popular;