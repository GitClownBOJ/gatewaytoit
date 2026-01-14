import React, { useState } from 'react';
// import { supabase } from '../lib/supabaseClient';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loading = false; // Mock
  const error = null;    // Mock

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#1c4d6e]">
      {/* Background decoration */}
      <img 
        src="https://discord.com/assets/f9e794f3478988636402.png" 
        alt="" 
        className="absolute -left-[50px] bottom-0 hidden h-full w-full object-cover opacity-100 lg:block"
      />

      <div className="z-10 flex w-full max-w-[784px] flex-col rounded-[5px] bg-[#313338] shadow-lg md:flex-row md:h-[408px]">
        
        <div className="flex w-full flex-col justify-center px-12 py-8 md:flex-1 md:max-w-[480px]">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-2xl font-bold text-[#F2F3F5]">Welcome back!</h2>
            <p className="text-[16px] text-[#B5BAC1]">We're so excited to see you again!</p>
          </div>

          <form onSubmit={handleLogin} className="w-full">
            {/* Email Field */}
            <div className="mb-4" style={{marginLeft: '40px', marginRight: '40px'}}>
              <label className={`mb-2 block text-xs font-bold uppercase tracking-wide ${error ? 'text-[#FA777C]' : 'text-[#B5BAC1]'}`}>
                Email or Phone Number {error && <span className="font-medium italic normal-case"> - {error}</span>}
                <span className="ml-1 text-[#FA777C]">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-[40px] w-full rounded-[3px] bg-[#1E1F22] px-6 text-[#dbdee1] outline-none transition-all focus:bg-[#1E1F22] focus:ring-1 focus:ring-[#00A8FC]"
              />
            </div>

            {/* Password Field */}
            <div className="mb-4" style={{marginLeft: '40px', marginRight: '40px'}}>
              <label className={`mb-2 block text-xs font-bold uppercase tracking-wide ${error ? 'text-[#FA777C]' : 'text-[#B5BAC1]'}`}>
                Password <span className="ml-1 text-[#FA777C]">*</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-[40px] w-full rounded-[3px] bg-[#1E1F22] px-6 text-[#dbdee1] outline-none transition-all focus:bg-[#1E1F22] focus:ring-1 focus:ring-[#00A8FC]"
              />
              <div className="mt-1">
                <button type="button" className="text-xs font-medium text-[#00A8FC] hover:underline">
                  Forgot your password?
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mb-2" style={{ marginLeft: '40px', marginRight: '40px' }}>
            <button
             type="submit"
              disabled={loading}
              className={`w-full rounded-[3px] py-2.5 text-[16px] font-medium text-white transition-colors
              ${loading ? 'cursor-not-allowed bg-[#2596be]/70' : 'bg-[#2596be] hover:bg-[#6cc8d8] active:bg-[#3C45A5]'}
              `}
              >
              {loading ? 'Logging In...' : 'Log In'}
            </button>
            </div>
            
            <div className="text-sm text-[#949BA4]" style={{marginLeft: '40px', marginRight: '40px'}}>
              Need an account? <span className="cursor-pointer text-[#00A8FC] hover:underline">Register</span>
            </div>
          </form>
        </div>

        <div className="relative hidden w-[294px] shrink-0 flex-col items-center justify-center p-10 text-center md:flex">
             {/* Vertical Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#3F4147]/50"></div>

            <div className="group relative mb-8 flex h-[176px] w-[176px] items-center justify-center overflow-hidden rounded bg-white p-2">
                <div className="relative h-full w-full">
                   <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://discord.com/login" 
                      alt="Scan me" 
                      className="h-full w-full object-contain opacity-100 transition-opacity group-hover:opacity-80"
                   />
                   <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                      <div className="rounded-full bg-white p-1">
                        <img 
                          src="https://assets-global.website-files.com/6257adef93867e56f84d3109/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" 
                          alt="Logo" 
                          className="h-8 w-8"
                        />
                      </div>
                   </div>
                </div>
            </div>

            <h3 className="mb-2 text-2xl font-bold text-[#F2F3F5]">Log in with QR Code</h3>
            <p className="text-[16px] text-[#B5BAC1]">
                Scan this with the <strong>2FA mobile app</strong> to log in instantly.
            </p>
        </div>
      </div>
    </div>
  );
};