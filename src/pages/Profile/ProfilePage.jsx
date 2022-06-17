import React from 'react'
import "./profilestyles.css"
import profileImg from "../../images/profile.png"
import p from "../../images/pencil.svg"
function ProfilePage() {
  return (
    <div className='wrapper'>
        <div className='profile__wrapper' >
            <div className='paddings'>
                <h2>Кубанычбеков Бектур</h2>
                <div className='frame1'>
                    <img src={profileImg}></img>
                    <div className='user__unfo1'>

                      <p className='user__name'>Кубанычбеков Бектур Кубанычбекович</p>
                      <button className='pencil'><img src={p}></img></button>
                      
                      <p className='user__role'>Окушер-гинеколог</p>
                    </div>
                   
                </div>
                <div>
                  <div className='info2 m'>
                    <p className='info__name'>Номер телефона</p>
                    <p className='info__info'>+996551552770</p>
                  </div>
                  <div className='info2 m'>
                    <p className='info__name'>Дата рождения</p>
                    <p className='info__info'>28.09.1992</p>
                  </div>
                  <div className='info2 '>
                    <p className='info__name'>График работы</p>
                    <p className='info__info'>9:00 - 12:00</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage