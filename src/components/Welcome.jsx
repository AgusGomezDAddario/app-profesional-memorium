import './Welcome.css'
import logo from '../images/logo_memorium.png'
import ClickableLinks from './material-ui/ClickableLinks'

export const Welcome = () => {

  return (
    <>
      <div id='root'>
        <h1 className='welcome-text'>Bienvenido a Memorium!</h1>
        <h2 className='welcome-text'>Este es tu centro de seguimiento de pacientes</h2>
            <img src={logo} className="logo" alt="Memorium logo" />
            <ClickableLinks />
      </div>
    </>
  )
}

