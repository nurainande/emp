import React, { useState, useEffect } from "react";
import { amico1, amico2, amico3 } from "../../assets";
import { useNavigate } from "react-router-dom";

const ForgotPasswordForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [amico1, amico2, amico3];

  // Auto slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Forgot Password request:", formData);
    navigate('/password-sent');
  };

  return (
    <div className="flex w-full max-w-4xl mx-auto lg:flex-row flex-col gap-6 items-center justify-center relative">
      {/* Forgot Password Form */}
      <div className="bg-white rounded-3xl p-6 shadow-2xl w-full max-w-lg min-h-[400px] flex flex-col justify-center z-20">
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold text-gray-900 mb-2">
            Forgot Password?
          </h1>
        </div>

        <div className="space-y-5">
          {/* Username Input */}
          <div>
            <input
              type="text"
              name="username"
              placeholder="Type Username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            />
          </div>

          {/* Reset Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-primary text-white py-2.5 rounded-xl font-semibold hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Illustration Slider */}
      <div className="hidden lg:flex flex-col items-center justify-center px-5 py-2 bg-gray/10 rounded-3xl border border-white/30 shadow-2xl w-full max-w-xs h-[260px] -ml-10 z-10">
        <div className="flex-1 flex items-center justify-center">
          <img
            src={images[currentIndex]}
            alt="Illustration"
            className="max-h-[200px] max-w-[100%] object-contain"
          />
        </div>

        {/* Dots */}
        <div className="flex space-x-2 mt-2">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`w-2 h-2 rounded-full ${
                idx === currentIndex ? "bg-primary" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
