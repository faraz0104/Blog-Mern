import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import "./Setting.css"

const Setting = () => {
  return (
    <div className='setting'>
        <div className='settingWrapper'>
            <div className='settingTitle'>
                <span className='settingUpdateTitle'>Update Your Account</span>
                <span className='settingDeleteTitle'>Delete Account</span>
            </div>
            <form className='settingForm'>
                <label>Profile Picture </label>
                 <div className='settingPP'>
                    <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="sf" />
                    <label htmlFor="fileInput">
              <i className="settingPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingPPInput"
            />
                 </div>
                 <label>Username</label>
          <input type="text" placeholder="Safak" name="name" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingSubmitButton" type="submit">
            Update
          </button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Setting