"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function PasswordForm() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password }),
        });

        if (response.ok) {
            router.push('/');
            router.refresh(); // This is important to update the session state
        } else {
            setError('Incorrect password');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full"
            />
            <Button type="submit" className="w-full">
                Submit
            </Button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
    );
}
