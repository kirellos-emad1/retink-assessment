import { useState } from "react";
import "./littlenav.css";
export default function LittleNav() {
    const [isSelected, setIsSelected] = useState(false)
    const [isNotificationSelected, setIsNotificationSelected] = useState(false)
    const [isProfileSelected, setIsProfileSelected] = useState(false)

    function handleClick() {
        setIsSelected(isSelected=>!isSelected)
        setIsNotificationSelected(false)
        setIsProfileSelected(false)
    }
    function handleNotification() {
        setIsSelected(false)
        setIsNotificationSelected(isNotificationSelected=>!isNotificationSelected)
        setIsProfileSelected(false)
    }
    function handleProfile() {
        setIsSelected(false)
        setIsNotificationSelected(false)
        setIsProfileSelected(isProfileSelected=>!isProfileSelected)
    }


  return (
    <div className="little-nav">
      <div className={isSelected?"calender-clicked": 'calender'} onClick={handleClick}></div>
      <div className={isNotificationSelected?"notification-clicked": 'notification'} onClick={handleNotification}></div>
      <div className={isProfileSelected?"profile-clicked": 'profile'} onClick={handleProfile}></div>
    </div>
  );
}
