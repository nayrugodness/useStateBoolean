import React from 'react';

export const Imagen = ({url, clase, id}) => {
  return(
      <div className='img'>
          <img id={id} className={clase} src={url} alt='' />
      </div>
  );
};
