import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
function showItemList() {
  ReactDOM.render(<App />, document.getElementById("root"));
}

function IndexApp() {
  
  return (
    <div className="container">
      <div className="row">
        <div className="col">
        <div className="title_div">
          Kilograms
          <button title="Click to see the List" className="balance_scale_btn" onClick={showItemList}>
            <img
              className="balance_scale_image"
              src="images/balance_scale.png"
              alt=""
            />
          </button>
          </div>
          
        </div>
      </div>
      <div className="row">
        <div className="col-sm sub_title_div">
          <h2>A solution to one of the most crucial task of the weekends. </h2><br></br>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-lg pantry_image_left_div">
          <img className="pantry_image" src="images/pantry.jpg" alt="" />
        </div>
        <div className="col-sm-12 col-lg description_div">
          An<br/> Automated Shopping List
        </div>
        <div className="col pantry_image_right_div">
          <img className="pantry_image" src="images/pantry.jpg" alt="" />
        </div>

        <div className="row">
          <div className="col-sm idea-detail"><br/>
            No need to dig into the pantry and make a list of item to buy.
            Kilograms is providing you with a digital scale that can stick to
            your pantry jars and keep you updated about the weight of the item
            it has in the jar, and much more! Next time when you go to grocery shopping
            and see your favourite cereal on discount but not sure if you really
            need it or not, you can check your shopping list in the kilograms app.
          </div>
        </div>
      </div>
    </div>
  );
}
export default IndexApp;
