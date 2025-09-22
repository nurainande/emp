import React from 'react';
import { checkCircle } from '../../assets';

const PasswordSentCard = () => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md w-full">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Password Sent!
        </h1>
        
        {/* Green check icon placeholder - Replace with your image */}
        <div className="w-20 h-20 mx-auto mb-6">
          {/* This is where your green check image goes */}
          {/* <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center"> */}
            {/* <span className="text-gray-400 text-xs">Your Image Here</span> */}
            <img src={checkCircle} alt="Check Icon" className="w-12 h-12"/>
          {/* </div> */}
        </div>
        
        {/* Message */}
        <p className="text-gray-700 mb-6">
          Your Password has been emailed to{' '}
          <span className="font-semibold">will...62@gmail.com</span>
        </p>
        
        {/* Success Button */}
        <button className="text-green-600 hover:text-green-700 font-medium transition-colors">
          Okay, thank you
        </button>
      </div>
    </div>
  );
};

export default PasswordSentCard;