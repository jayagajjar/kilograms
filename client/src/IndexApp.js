import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
function showItemList(){
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}
function IndexApp(){ 
  
    return (
      <div className="container">
      <div className="row">
        <div className="col-sm title_div">
          <h1>Kilograms</h1>
        </div>
        <div className="col-sm balance_scale_div">
        <button onClick={showItemList}>
        <img className="balance_scale_image" src="images/balance_scale.png" alt=""/></button>
       </div>
      </div>
      <div className="row">
        <div className="col-sm sub_title_div">
  
  <h2>
          A solution to one of the most crucial task of the weekends.  </h2> 
          </div>
      </div>
      <div className="row">
        <div className="col-sm"><br/>
          <img className="pantry_image" src="images/pantry.jpg" alt=""/>
  </div>
      
  <div className="row">
    <div className="col-sm idea-detail">
      No need to dig into the pantry and make a list of item to buy.
      Kilograms is providing you with a digital scale that can stick to your pantry jars and keep you updated about the weight of the item it has in the jar, and much more!
      or when you go to grovery shopping and see your favourite cereal on discount but not sure if you really need it or not.
  
    </div>
    </div>
  </div>
  </div>
     
);
}
export default IndexApp;
