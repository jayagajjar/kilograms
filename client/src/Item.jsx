import React from "react";

function Item(props) {
  function clickHandler(event) {
    props.onAdd(props.name);
  }
  return (
    <div className="col one_item_status">
      <div className="row">
        <div className="col item_icon_div">
          <img
            className="item_icon_image"
            src={"images/" + props.image + ".jpg"}
            alt=""
          />
        </div>
        <div className="col item_details">
          <div className="row">
            <div className="col">{props.name}</div>
          </div>
          <div className="row">
            <div className="col">Current Weight {props.currWeight}</div>
          </div>
          <div className="row">
            <div className="col">Minimum Limit Weight {props.minWeightReq}</div>
          </div>
        </div>
        <div className="col add_to_list_div">
          <button
            onClick={clickHandler}
            className="add_to_list_btn"
            type="button"
            title="Add to List"
          >
            <img className="add_to_list_img" src="./images/add.png" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
