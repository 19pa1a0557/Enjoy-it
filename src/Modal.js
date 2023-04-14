import discount from "./discount.json";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { Component }  from 'react';

export default function MyVerticallyCenteredModal(props) {
    var localdata = props.data;
    console.log(localdata);
    var disccoup = []
    for(var i=0;i<discount.length;i++){
        if(localdata.Restaurant==discount[i].Restaurant){
            disccoup.push(discount[i])
        }
    }
    console.log(disccoup);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className='modalcontent'>
        <div className='slots'>
            <div>
                <p className="restaurantname">
                    {localdata.Restaurant}
                </p>
                <p className="itemname">
                    {localdata.fooditem}(<i className="fa fa-rupee" style={{fontSize:"14px",color:"#6B6B6B"}}></i>{localdata.price})
                </p>
                <img style={{borderRadius:"10px"}} src="https://b.zmtcdn.com/data/dish_photos/4b3/ad949d80558028587d274bd56aff24b3.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"/>
            </div>
            <div className="disc1">
                <img className="discountlogo" src="https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo.png"/>
                <p className="itemname">{disccoup[0].Discount}</p>
                <p className="coup">
                    use coupon : 
                </p>
                <span style={{color:"white",backgroundColor:"#538CEE",borderRadius:"5px",padding:"5px",fontSize:"13px"}} >{disccoup[0].coupon}</span>
            </div>
            <div className="disc1">
                <img className="discountlogo" src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png"/>
                <p className="itemname">{disccoup[1].Discount}</p>
                <p>
                    use coupon : 
                </p>
                <span style={{color:"white",backgroundColor:"#538CEE",borderRadius:"5px",padding:"5px",fontSize:"13px"}} >{disccoup[1].coupon}</span>
            </div>
            <div className="disc1">
                <p style={{fontSize:"30px",marginBottom:"22px"}}>
                    Amar Services
                </p>
                <p className="itemname">{disccoup[2].Discount}</p>
                <p>
                    use coupon : 
                </p>
                <span style={{color:"white",backgroundColor:"#538CEE",borderRadius:"5px",padding:"5px",fontSize:"13px"}} >{disccoup[2].coupon}</span>
            </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}