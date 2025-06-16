import React from 'react';
import { CircleX } from 'lucide-react';

const LoginModal = ({isOpen, onClose, children}) => {
  if(!isOpen){
    return null;
  }
  return (
    <div className='fixed top-0 left-0 min-h-screen w-full flex justify-center items-center'>
    <div className='bg-black/80 w-1/4 relative px-5 py-5'>
      <CircleX color="#ffffff" className='top-2 right-2 absolute cursor-pointer' onClick={onClose}/>
      {children}
    </div>
    </div>
  )
}

export default LoginModal