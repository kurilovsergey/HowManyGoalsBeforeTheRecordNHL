import NHL_logo from './assets/NHL_logo.png'
import WC_logo from './assets/WC_logo.png'
import s from './Logo.module.css'

export const Logo = (rops) => {
    
    
 return (
  <>
    <div className={s.logo_block}>
    <img className={s.logoNHL} src={NHL_logo}/>
     <img className={s.logoWC} src={WC_logo}/>
     </div>
  </>
 )
}