

export const Footer = (props) => {
    
    
 return (
  <>
 <hr/>
        <div><a href="https://www.instagram.com/kurilovsergey/">Made by Kurilov Sergey ❄️</a></div>
      {props.isRuss ? <div>По вопросам сотрудничетсва, рекламы и разработки пишите kurilovsergey7@gmail.com</div> 
      : <div>For partnership agreement, development and marketing write to kurilovsergey7@gmail.com</div> 
       }
    
  </>
 )
}