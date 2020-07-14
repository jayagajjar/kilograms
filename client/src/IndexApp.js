import React,{useState} from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Modal} from 'react-bootstrap';

function showItemList() {
  ReactDOM.render(<App />, document.getElementById("root"));
}

function IndexApp() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);
  
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
      

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title className="title_div_modal">Kilograms <img
              className="balance_scale_image"
              src="images/balance_scale.png"
              alt=""
            /></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <b>Product Description</b><br/>
A hypothetical device to measure the weight of any box. Assuming, 
a miniature digital scale that can stick on any pantry box. 
The Kilograms app will give you the updated status of your pantry, 
whenever you take out or put in the item in the box, 
the digital scale will update the weight on the server and you will know the status through the app.<br/><br/>

I came up with this idea after struggling to find any such device in the market, 
and I planned to make the Web App first, this app is under development.<br/><br/>

<b>Web App Technical Description</b><br/>
This web app is deployed on Heroku, the backend(api) is separate and also deployed on Heroku. 
Backend is using expressJS and mongoose(MongoDB database). On Heroku, the database is connected through mLab, 
where the shopping list database is hosted in MongoDB. Front end is using React.</Modal.Body>
        <Modal.Footer>
          
          <input type="button" className="modal-close-btn" value="Close" onClick={handleClose}/>

        </Modal.Footer>
      </Modal>
      <div className="row">
        <div className="col-sm sub_title_div">
          <h2>A solution to one of the most crucial task of the weekends. </h2><br></br>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-lg pantry_image_left_div">
        <button title="Click to see the List" className="balance_scale_btn" onClick={showItemList}>
          <img className="pantry_image" src="images/pantry.jpg" alt="" /></button>
        </div>
        <div className="col-sm-12 col-lg description_div"><a href="#" onClick={showItemList}>
          An<br/> Automated <br/>Shopping List</a>
        </div>
        <div className="col pantry_image_right_div">
          <button title="Click to see the List" className="balance_scale_btn" onClick={showItemList}>
          <img className="app_image" src="images/app_image.jpg" alt="" /></button>
        </div>

        <div className="row">
          <div className="col-sm idea-detail"><br/>
            No need to dig into the pantry and make a list of item to buy.
            Kilograms is providing you with a digital scale that can stick to
            your pantry jars and keep you updated about the weight of the item
            it has in the jar, and much more. Update your pantry with these digital scales and next time when you go to grocery shopping
            and see your favourite cereal on discount but not sure if you really
            need it or not, simply check your shopping list in the kilograms app!
            <br/><br/>
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default IndexApp;
