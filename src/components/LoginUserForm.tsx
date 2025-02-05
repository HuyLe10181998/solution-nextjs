"use client"
import { MdEmail, MdLock } from 'react-icons/md';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import {  useState } from 'react';
import toast from 'react-hot-toast';
import Profile from './ProfilePage';

function LoginUserForm({data}:any) {
    const [showPassword, setShowPassword] = useState(false);
    const [isLogin, setIsLogin] = useState(false)
    const profileData = {
      name: "Mahmud Saimon",
      businessName: "TechRabbit Digital",
      registeredDate: "14 March, 2024",
      contractExpiry: "14 March, 2025",
      licenseNumber: "B75KLYT3NM223",
      address: "House #323, Road #78, Block X/A, New York, NY, United States",
      website: "www.techrabbit.digital",
      email: "knock@techrabbit.digital",
      phone: "+8801303-602331",
      businessCategory: "Information & Technology",
      serviceType: "Design & Development"
    }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')
    const user = data.find((item:any) => item.email === email)

    if(user){
        if(user.password === password){
            toast.success('Login success')
            setIsLogin(true)
        }else{
            toast.error('Login failed')
            setIsLogin(false)
        }
    }else{
        toast.error('Email or password is incorrect')
        setIsLogin(false)
    }
  }

  if(isLogin){
    return <div className='py-12'><Profile setIsLogin={setIsLogin} data={profileData} /></div>
  }

  return (
    <div className='p-24'>
<div className="bg-white p-8 border border-gray-300 rounded-3xl shadow-lg w-full max-w-md space-y-8">
    <div className="text-center">
      <div className="mx-auto h-12 w-12 bg-gray-100 rounded-xl flex items-center justify-center">
        <MdEmail className="h-6 w-6 text-gray-600" />
      </div>
    </div>

    <div className="text-center">
      <h2 className="text-2xl font-semibold text-gray-900">Sign in with email</h2>
      <p className="mt-2 text-gray-600">
        Enter your credentials to access and view your information
      </p>
    </div>
    <form onSubmit={handleSubmit} className="space-y-6">
    {/* Email Input */}
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <MdEmail className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="email"
        placeholder="Email"
        required
        name='email'
        className="block w-full !text-primary-text pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>

    {/* Password Input */}
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <MdLock className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        required
        name='password'
        className="block w-full !text-primary-text pl-10 pr-10 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 pr-3 flex items-center"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <HiEyeOff className="h-5 w-5 text-gray-400" />
        ) : (
          <HiEye className="h-5 w-5 text-gray-400" />
        )}
      </button>
    </div>

    {/* Forgot Password */}
    {/* <div className="text-right">
      <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
        Forgot password?
      </a>
    </div> */}

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full py-3 px-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
    >
      Next
    </button>
  </form>
  </div>
    </div>
    
  )
}

export default LoginUserForm