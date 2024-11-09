import React from 'react';
import {useDroppable} from '@dnd-kit/core';
import "../../styles/app.scss";
const Dropzone = (props) => {
    const {isOver, setNodeRef} = useDroppable({
        id: props.id,
      });
      const style = {
        color: isOver ? 'green' : undefined,
      };
      
      
      return (
        <div ref={setNodeRef} className={props.className} style={style}>
        <span className='background-text'>{props.id}</span>
          {props.children}
        </div>
      );
}
 
export default Dropzone;