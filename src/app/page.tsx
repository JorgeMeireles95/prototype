"use client";
import Logo from './images/logo.png';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Home() {
  const [user, setUser] = useState('user39');
  const [password, setPassword] = useState('senha');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const isLoggedIn = await fakeLogin(user, password);
    if (isLoggedIn) {
      router.push('/dashboard');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  }


  const fakeLogin = async (user: string, password: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return user === 'user39' && password === 'senha';
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Image src={Logo}  alt="Logo" width={80} height={80} className="rounded-full" />
        </div>
         <h1 className="text-2xl font-bold text-center mb-6">Portal do Cliente</h1> 
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Usuário</Label>
            <Input id="email" type="text" placeholder="user39" value={user} onChange={(e) => setUser(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <Button type="submit" className="w-full">Entrar</Button>
        </form>
      
      </div>
    </div>
  );
}
