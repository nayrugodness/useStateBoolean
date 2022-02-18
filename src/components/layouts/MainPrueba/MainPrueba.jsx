import React, {useState, useEffect} from 'react'
import { Imagen } from '../../UI/Imagen/Imagen'
import { Botones } from '../../UI/Botones/Botones'
import ImagenA from '../../../assets/Images/verano.jpg'
import ImagenB from '../../../assets/Images/invierno.jpg'


export const MainPrueba = () => {

    const [cambio, setCambio] = useState(false)

    const efecto = () =>{ 
        setCambio(!cambio)
    }


    useEffect(()=>{
        
        const img1 = document.getElementById('imagen1')
        const img2 = document.getElementById('imagen2')
        const boton = document.getElementById('boton')

        if(cambio===true){
            img1.classList.remove('desactivado')
            img1.classList.add('activado')
            img2.classList.remove('desactivado')
            img2.classList.add('activado')
            boton.classList.remove('boton-desactivado')
            boton.classList.add('boton-activado')
            boton.textContent="Activado"
        }else{
            img1.classList.add('desactivado')
            img1.classList.remove('activado')
            img2.classList.add('desactivado')
            img2.classList.remove('activado')
            boton.classList.add('boton-desactivado')
            boton.classList.remove('boton-activado')
            boton.textContent="Desactivado"
        }
    },[cambio])

  return (
    <div className='main'>
        <div className='imagenes'>
            <Imagen id="imagen1" clase="desactivado" url={ImagenA}/>
            <Imagen id="imagen2" clase="desactivado" url={ImagenB}/>
        </div>
    
        <Botones id="boton" clase="boton-desactivado" event={efecto} nombre="cambiar"/>
    </div>
  )
}
