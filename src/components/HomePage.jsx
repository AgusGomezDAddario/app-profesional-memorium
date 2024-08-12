import './HomePage.css'
import logo from '../images/logo_memorium_white.png'
import OutlinedCard from './material-ui/Card'

export const HomePage = () => {

  return (
    <>
        <h1 className='welcome-text'>Bienvenido a Memorium!</h1>
        <h2 className='welcome-text'>Este es tu centro de seguimiento de pacientes</h2>
        <img src={logo} className="logo" alt="Memorium logo" />
        <OutlinedCard />
    </>
  )
}

