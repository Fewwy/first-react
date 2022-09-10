import React, { useState } from 'react'

export const ButtonFC = () => {
    const [text, setText] = useState('Login')

    const loginHandler = () => {
        if(text === 'Login') {
            setText('Logout')
        } else {
            setText('Login')
        }
    }

    return (
        <button
      style={{
        height: "50px",
        width: "250px",
        fontSize: "25px",
        padding: "5px",
        }}
      onClick={loginHandler}
      >
        {text}
      </button>
    )
}