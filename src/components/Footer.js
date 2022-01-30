

export const Footer = (props) => {
    
    
 return (
  <>
 <hr/>
        <div><a href="https://www.instagram.com/kurilovsergey/">Made by Kurilov Sergey ❄️</a></div>
      {props.isRuss ? <div>Проект некоммерческий. По вопросам сотрудничетсва пишите kurilovsergey7@gmail.com</div>
      : <div>Non-profit project. For partnership write to kurilovsergey7@gmail.com</div>
       }
    
  </>
 )
}