import React from "react";

function Item(props){ 
    
    function clickHandler(event){
        props.onAdd(props.name);
    }
    return (
    <div className="col-sm one_item_status">
        <div className="row">
        <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 item_icon_div"><img className="item_icon_image" src={"images/"+props.image+".jpg"} alt=""/>
    </div>
    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 item_details">
    <div className="row">
    <div className="col-sm">
    
    {props.name}
    </div>
    </div>
    <div className="row">
    <div className="col-sm"> 
    Current Weight {props.currWeight}
    </div>
    </div>
    <div className="row">
    <div className="col-sm">
    Minimum Limit Weight {props.minWeightReq}
    </div>
    </div>
    </div>
    <div className="col-sm-3 col-md-3 col-lg-3 col-xl-4" style={{alignSelf: "center"}}><button onClick={clickHandler} type="button" className="btn btn-primary add_to_list_btn">Add To List</button></div>
            </div></div>);
        }

export default Item;