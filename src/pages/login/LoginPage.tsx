// import  { useState } from 'react';
// import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
// import { illustrationCard4, logo } from '../../assets';

// const LoginPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [keepLoggedIn, setKeepLoggedIn] = useState(false);
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = () => {
//     // Handle login logic here
//     console.log('Login attempt:', formData);
//   };

//   return (
//     <div className="min-h-screen bg-primary flex flex-col justify-between p-8">
//       {/* Logo */}
//       <div>
//         <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
//       </div>

//       {/* Center */}
//       <div className="flex w-full max-w-3xl mx-auto lg:flex-row flex-col gap-6 items-center justify-center relative">
//         {/* Login Form */}
//         <div className="bg-white rounded-3xl p-5 shadow-2xl w-full max-w-md min-h-[360px] flex flex-col justify-center z-20">
//           <div className="text-center mb-5">
//             <h1 className="text-lg font-bold text-gray-900 mb-2">
//               Nice to have you here!
//             </h1>
//           </div>

//           <div className="space-y-4">
//             {/* Username Input */}
//             <div>
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Type Username"
//                 value={formData.username}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
//               />
//             </div>

//             {/* Password Input */}
//             <div className="relative">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 name="password"
//                 placeholder="Enter Password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors pr-10"
//               />
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//               >
//                 {showPassword ? (
//                   <MdVisibilityOff className="w-5 h-5" />
//                 ) : (
//                   <MdVisibility className="w-5 h-5" />
//                 )}
//               </button>
//             </div>

//             <div className="text-xs text-gray-500 flex items-start space-x-2">
//               <div className="w-2 h-2 bg-gray-300 rounded-full mt-1 flex-shrink-0"></div>
//               <span>
//                 Password must not contain your name and must be 8 characters long
//               </span>
//             </div>

//             {/* Keep me logged in & Forgot password */}
//             <div className="flex items-center justify-between">
//               <label className="flex items-center space-x-2 cursor-pointer">
//                 <input
//                   type="checkbox"
//                   checked={keepLoggedIn}
//                   onChange={(e) => setKeepLoggedIn(e.target.checked)}
//                   className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
//                 />
//                 <span className="text-sm text-gray-700">Keep me Logged In</span>
//               </label>
//               <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
//                 Forgot Password?
//               </button>
//             </div>

//             {/* Login Button */}
//             <button
//               onClick={handleSubmit}
//               className="w-full bg-primary text-white py-2 rounded-xl font-semibold hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
//             >
//               Login
//             </button>
//           </div>
//         </div>

//         {/* Illustration */}
//         <div className="hidden lg:flex items-center justify-center px-5 py-2 bg-gray/10 rounded-3xl shadow-2xl w-full max-w-xs h-[260px] -ml-10 z-10">
//           <img src={illustrationCard4} alt="Illustration" className="w-full h-auto" />
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="text-center">
//         <p className="text-white/60 text-sm">
//           EMP Development global all Copyrights Reserved © 2025
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



import Logo from '../../components/login_components/Logo';
import LoginFooter from '../../components/login_components/LoginFooter';
import LoginForm from '../../components/login_components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary flex flex-col justify-between p-8">
      {/* Logo */}
      <Logo />
      {/* Center */}
      <LoginForm/>
      {/* Footer */}
      <LoginFooter/>
    </div>
  );
};

export default LoginPage;
