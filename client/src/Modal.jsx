import React, {useEffect} from "react";
function Modal({isLoaded, onLoad, show, onClose, onChecked}) {
    useEffect(() => {
        isLoaded[0] = true;
        onLoad(isLoaded);
      });

    if(!show.toShow){
        return null;
    }
    
    function clikHandler(e){
        e.persist();
        show.toShow = false;
        onClose(e);
    }
    return <div>{show.shoppingItems.map((a,index)=> {return <li onClick={(e) => {
        onChecked(a.id);
        }} key={a.id}>{a.name}</li>})}<div>
    <button
            onClick={clikHandler}>
            Close
          </button>
  </div>
  </div>

}

export default Modal;