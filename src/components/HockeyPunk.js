import hockey_puck from './assets/hockey-puck.png'
import s from './HockeyPunk.module.css'



export const HockeyPunk = (props) => {
    let arr = new Array(props.difference).fill({});
    
 return (
    props.difference!=894 ?
  <>
  <div className={s.hockeypunk}>
      {arr.map((i, index) =>
       <div className={s.block} key={index}>
          <img className={s.punk} src={hockey_puck} alt="puck"/>
      </div>)}
  </div>
  </> : null
 )
}