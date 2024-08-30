import './HomePage.css'
import logo from '../images/logo_memorium_white.png'
import image from '../images/image_brain.png'
import OutlinedCard from './material-ui/Card'

export const HomePage = () => {

  return (
    <>
        <h1 className='welcome-text'>Bienvenido a Memorium!</h1>
        <h2 className='welcome-text'>Este es tu centro de seguimiento de pacientes</h2>
        <img src={logo} className="logo" alt="Memorium logo" />
        <OutlinedCard />
        <h3 className='welcome-text'>Memorium te ayuda a seguir de cerca el progreso de tus pacientes y a guiarlos hacia una mejora en su calidad de vida</h3>
        <h3 className='welcome-text'>Explora nuestras herramientas diseñadas para apoyar tu práctica clínica y facilitar el seguimiento de tratamientos</h3>
        <img src={image} className="imagen_central" alt="Imagen de cerebro con un celular" />
        <h2 className='welcome-text'>Descubra el universo Memorium y la variedad de herramientas que ofrecemos para el tratamiento en la pérdida de la memoria de trabajo</h2>
    </>
  )
}

