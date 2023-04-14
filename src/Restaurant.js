import { useEffect,useState } from "react";
import{useNavigate} from "react-router-dom";
import data from "./datanew.json";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import discount from "./discount.json";
import MyVerticallyCenteredModal from "./Modal";
import React from "react";


export default function Restaurant(){

    const navigate  = useNavigate();

    const [modalShow, setModalShow] = useState(false);

    const[items,setItems] = useState(data);

    const[res,setRes] = useState({});

    const[newdata,setNewdata] = useState(false);

    const handleChange = (event) => {
        var x = event.target.value;
        console.log(x);
        var li = []
       for(var i=0;i<data.length;i++){
        var tmp = data[i].fooditem;
        if(tmp.includes(x)){
            li.push(data[i]);
        }
       }
       setItems(prevState=> li);
    }

    const handleClick = (i)=>{
        setNewdata(i);
        setModalShow(true);
    }
    
    return(
        <div>
            <div className="headersection">
            </div>
            {newdata && <MyVerticallyCenteredModal
                        show={modalShow}
                        data={newdata}
                        onHide={() => setModalShow(false)}
                    />}
            <div className="itemscontainer">
                <div className="itemsinside">
                    <div className="searchcont">
                        <span className="searchicon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#828282" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iwHbVQ"><title>Search</title><path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path></svg>
                        </span>
                        <input placeholder="Search for cuisine or a dish" type="text" onChange={handleChange}/>
                    </div>
                    <br/>
                    <br/>
                    <div className="scroll">
                    {
                        items.map((i,j)=>{
                                return(
                                    <div onClick={()=>handleClick(i)} key={j} className="items">
                                        <div className="itemss">
                                        <div>
                                            <img src="https://b.zmtcdn.com/data/dish_photos/4b3/ad949d80558028587d274bd56aff24b3.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"/>
                                        </div>
                                        <div>
                                        <p className="restaurantname">
                                            {i.Restaurant}
                                        </p>
                                        <p className="itemname">
                                            {i.fooditem}
                                        </p>
                                        <span className="rating">
                                            {i.rating}<i className="fa fa-star" style={{fontSize:"14px",color:"white",marginLeft:"3px"}}></i>
                                        </span>
                                        <p className="pricing">
                                            <i className="fa fa-rupee" style={{fontSize:"14px",color:"black"}}></i> {i.price}
                                        </p>
                                        </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}