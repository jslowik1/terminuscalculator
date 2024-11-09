import React from 'react';
import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

const Symbol = (props) => {
    const image = require(`../../assets/${props.id}.png`);
    
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: props.id,
        data: {
            image: image
        }
      });
      const style = {
        
        transform: CSS.Translate.toString(transform),
      }
    
      
      return (
        <button ref={setNodeRef} className={props.className} style={style} {...listeners} {...attributes}>
          <img className="image" src={image} alt={props.id} />
        </button>
      );
}
 
export default Symbol;