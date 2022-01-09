import React from 'react'
import '../phoneBook.css'

const Notification = ({type, message} : {type: string, message: string}) => {
  return (
    <div className={"notification " + type}>
      {message}
    </div>
  );
};

export default Notification;