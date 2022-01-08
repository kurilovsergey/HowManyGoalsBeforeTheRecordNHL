import s from './ScoresStyle.module.css';
import WC_logo from '../assets/WC_logo.png';
import hockey_puck from '../assets/hockey-puck.png'

export const LastGame = (props) => {
return (
<div className={s.card}>
<div className={s.info}>
Последняя игра
<hr/>
<div>
<div className={s.data}>03.07.2020</div>
<div className={s.score}>
<div><img className={s.logo} alt="logo washington capitals" src={WC_logo}/></div>
<div className={s.gameScore}>3 - 3</div>
<div><img className={s.logo} alt="logo washington capitals" src={WC_logo}/></div>
</div>
</div>
</div>
<div>
<img className={s.punk} src={hockey_puck} alt="puck"/>
<img className={s.punk} src={hockey_puck} alt="puck"/>
</div>
</div>
     )
    }