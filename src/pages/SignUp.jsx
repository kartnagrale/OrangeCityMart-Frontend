import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import shoppingcart from '../assets/shoppingcart.png';

const SignupPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 p-8">
        <img
          src={shoppingcart}
          alt="Shopping Cart with Phone"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      
      <div className="w-full md:w-1/2 p-8">
        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-6">
              {isLogin ? 'Login' : 'Create an account'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full p-2 border rounded-md"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email or Phone Number
                </label>
                <input
                  type="text"
                  name="email"
                  className="w-full p-2 border rounded-md"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  className="w-full p-2 border rounded-md"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors"
              >
                {isLogin ? 'Login' : 'Create Account'}
              </button>
              
              <button
                type="button"
                className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
              >
                <img
                  src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                Sign up with Google
              </button>
              
              <p className="text-center text-sm text-gray-600">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                  type="button"
                  className="text-orange-500 hover:underline"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? 'Sign up' : 'Log in'}
                </button>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignupPage;