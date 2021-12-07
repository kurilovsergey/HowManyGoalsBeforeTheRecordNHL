import NHL_logo from './assets/NHL_logo.png'
import WC_logo from './assets/WC_logo.png'
import s from './Logo.module.css'

export const Logo = (rops) => {
    
    
 return (
  <>
    <div className={s.logo_block}>
    <img className={s.logoNHL} alt="logo NHL" src={NHL_logo}/>
     <img className={s.logoWC} alt="logo washington capitals" src={WC_logo}/>
     </div>
  </>
 )
}