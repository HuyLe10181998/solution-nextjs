'use client';

import { login } from '@/actions/auth.action';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Login() {
    const router = useRouter();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);
        setError('');

        const formData = new FormData(event.currentTarget);
        const username = formData.get('username') as string;
        const password = formData.get('password') as string;

        try {
            const response = await login(username, password);
            console.log('response', response);
            if (response.error) {
                setError(response.error);
            } else {
                // setStorage('access_token', response.token);
                router.push('/admin'); 
            }
        } catch (err) {
            setError('An unexpected error occurred');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex h-screen">
        {/* Left Side - Login Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24">
            {/* Logo */}
          
            
            {/* Welcome Text */}
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome to Sky Solution
            </h1>
            <h2 className="text-2xl text-gray-700 mb-8">
                Sign in
            </h2>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                
                <div>
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Log In'}
                    </button>
                </div>

              
            </form>

            {error && (
                <div className="mt-4 text-red-500 text-center">
                    {error}
                </div>
            )}
        </div>

        {/* Right Side - Illustration */}
        <div   style={{ backgroundImage: "url('/assets/img/login-bg.jpg')" }} className="hidden bg-no-repeat object-cover lg:block bg-center lg:w-1/2 bg-gradient-to-br from-blue-500 to-blue-600">
           
        </div>
    </div>
    );
}