import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import items from "./../data/items.json";
import Item from "./Item.jsx";
import ModalShoppingList from "./Modal.jsx";
import api from "./../api/app.js";
import { Modal} from 'react-bootstrap';

//<Modal show={show} onClose={showModal} onChecked={deleteItem}/>
function App(){ 
  const isModalLoaded = useState(false);
  const itemFromShoppingList=[];
  const [show, showModal] = useState({shoppingItems:itemFromShoppingList,toShow:false});

  function addItem(newItemName) {
    console.log(api.getAllItems());
    
    api.getAllItems().then((a,b)=>{b= a.data.data.filter(b=>b.name === newItemName);
      if(b.length===0){api.insertItem({name:newItemName}).then(res => {
        console.log(`Item inserted successfully`);
      })}else{console.log("Item already exists")}}).catch(error => {
        if(error.response.status === 404){
          showModal(()=>{
            return {shoppingItems:[],toShow:false};
          }); 
          setShow(false);
          api.insertItem({name:newItemName}).then(res => {
            console.log(`Item inserted successfully`);
          })
        }
        })
    

    /*api.insertItem({name:newItemName}).then(res => {
      console.log(`Item inserted successfully`);
    })*/
    var anItem=[];
    console.log(api.getAllItems());
    api.getAllItems().then(items =>
      {(items.data.data.map(a=> {return anItem.push({name:a.name,id:a._id});}));
      showModal(()=>{
        return {shoppingItems:anItem,toShow:false};
      }); })
  }
  
  function handleClick(){
    var anItem=[];
    console.log(api.getAllItems());
    api.getAllItems().then(items =>
      {(items.data.data.map(a=> {return anItem.push({name:a.name,id:a._id});}));
      showModal(()=>{
        return {shoppingItems:anItem,toShow:false};
      }); }).catch(error => {
        if(error.response.status === 404){
          showModal(()=>{
            return {shoppingItems:[],toShow:false};
          }); 
          setShow(false);
            console.log("Shopping list is empty");
        }
        })
  }
  
  function loadShoppingList(){
    var anItem=[];
    api.getAllItems().then(items =>
      {(items.data.data.map(a=> {return anItem.push({name:a.name,id:a._id});}));
      ; }).catch(error => {
        if(error.response.status === 404){
            console.log("Shopping list is empty");
        }
        })
  }

  function deleteItem(index) {
    console.log(index);
   api.deleteItemById(index);

   var anItem=[];
   console.log(api.getAllItems());
    api.getAllItems().then(items =>
      {(items.data.data.map(a=> {return anItem.push({name:a.name,id:a._id});}));
      showModal(()=>{
        return {shoppingItems:anItem,toShow:false};
      }); }).catch(error => {
        if(error.response.status === 404){
          showModal(()=>{
            return {shoppingItems:[],toShow:false};
          }); 
          setShow(false);
            console.log("Shopping list is empty");
        }
        })
  }
  
  const [show1, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {handleClick();setShow(true)};
    return (
    <div className="container">
    <div className="row">
      <div className="col-sm title_div">
        Kilograms<img className="balance_scale_image" src="images/balance_scale.png" alt="" />
      </div>
    </div>
    <div className="row">
      <div className="col-sm-11 pantry_status_heading" >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your Pantry Status
      </div>
      <div className="col-sm top_button_right_cells"><img src="images/plus.png" style={{width:"2em"}} alt="addItemImage"/>&nbsp;&nbsp;&nbsp;
        <img src="images/date.png" style={{width:"2em"}} onClick={handleShow} alt="shoppingListImage"/>
        <Router>
        <Switch>
        <Route pathname="/shoppinglist"
                    exact
                    component={() => 
                    <ModalShoppingList isLoaded={isModalLoaded} show={show} onClose={showModal} onChecked={deleteItem} onLoad={loadShoppingList}/>}
                />
                </Switch>
                </Router>
               

                <Modal  show={show1} onHide={handleClose}>
        <Modal.Header className="shoppinListModalTitle" closeButton>
          <Modal.Title >Shopping List</Modal.Title>
        </Modal.Header>
        <Modal.Body className="shoppinListModal">{show.shoppingItems.map((a,index)=> <li onClick={(e) => {
        deleteItem(a.id);
        }} key={a.id}>{a.name}</li> )}</Modal.Body>
      </Modal>
      </div>
    </div>

    <div className="row">
    
      {items.map((anItem) => {
        return (
          <div className="col-sm-6" key={anItem.id}><Item onAdd={addItem}
      currWeight={anItem.currWeight}
      name={anItem.name}
      minWeightReq={anItem.minWeightReq}
      image={anItem.image}
          /></div>
        );
      })}
   
     
    </div>
    
</div>
);
}
export default App;
