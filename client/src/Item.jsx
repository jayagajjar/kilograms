import React from "react";

function Item({onAdd, name, isItemAdded, image, currWeight, minWeightReq}) {
  
  function clickHandler(event) {
    onAdd(name);
  }
  let src, tooltip;
  if(isItemAdded){
   src= "images/list.png"
   tooltip= "Added"
}
  else{
    src= "images/add.png"
    tooltip="Add to List"
  }
  
  return (
    <div className="col one_item_status">
      <div className="row">
        <div className="col-4 item_icon_div">
        <img
className="item_icon_image"
src={"images/" + image + ".jpg"}
alt=""
/>
        </div>
        <div className="col-5 item_details">
<div className="row">
<div className="col"><b>{name}</b></div>
</div>
<div className="row">
<div className="col">Current Weight {currWeight}</div>
</div>
<div className="row">
<div className="col">Minimum Limit Weight {minWeightReq}</div>
</div>
</div>
        <div className="col-3 add_to_list_div">
<button
onClick={clickHandler}
className="add_to_list_btn"
type="button"
title={tooltip}
>
<img className="add_to_list_img" src={src} alt="add to list"/>
</button>
</div>
      </div>
    </div>
  );
}

export default Item;
