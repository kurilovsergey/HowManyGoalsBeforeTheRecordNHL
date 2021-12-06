import hockey_puck from './assets/hockey-puck.png'
import s from './HockeyPunk.module.css'

export const HockeyPunk = (props) => {
    let arr = new Array(props.goalOvi).fill({});
    
 return (
  <>
  <div className={s.hockeypunk}>
      {arr.map((i) =>
       <div className={s.block} key={i}>
          <img className={s.punk} src={hockey_puck}/>
      </div>)}
  </div>
  </>
 )
}