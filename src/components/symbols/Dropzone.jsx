import React from 'react';
import {useDroppable} from '@dnd-kit/core';
import "../../styles/app.scss";
const Dropzone = (props) => {
    const {setNodeRef} = useDroppable({
        id: props.id,
      });
      
      
      return (
        <div ref={setNodeRef} className={props.className}>
        <span className='background-text'>{props.id}</span>
          {props.children}
        </div>
      );
}
 
export default Dropzone;