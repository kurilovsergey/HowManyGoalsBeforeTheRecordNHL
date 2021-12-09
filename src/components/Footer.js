import NHL_logo from './assets/NHL_logo.png'
import WC_logo from './assets/WC_logo.png'
import s from './Logo.module.css'

export const Footer = (props) => {
    
    
 return (
  <>
 <hr/>
        <div><a href="https://www.instagram.com/kurilovsergey/">Made by Kurilov Sergey ❄️</a></div>
      {props.isRuss ?  <div>For partnership agreement, development and marketing write to kurilovsergey7@gmail.com</div> 
      : <div>По вопросам сотрудничетсва, рекламы и разработки пишите kurilovsergey7@gmail.com</div> }
    
  </>
 )
}