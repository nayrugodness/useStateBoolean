import React from 'react'

export const Botones = ({nombre, id, event, clase}) => {
  return(
    <button onClick={event} id={id} className={clase}>{nombre}</button>
  );
};
