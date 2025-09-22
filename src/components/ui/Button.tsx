import React from 'react'
type ButtonProps = {
  text:string;
  children: React.ReactNode;
}

const Button = ({children,text}:ButtonProps) =>  {
  return (
    <button className='bg-primary p-2 rounded' >
      {text}{children}
    </button>
  )
}

export default Button
