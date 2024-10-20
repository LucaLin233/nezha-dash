"use client";

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function AuthWrapper({
    children,
    isLoggedIn
}: {
    children: React.ReactNode;
    isLoggedIn: boolean;
}) {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!isLoggedIn && pathname !== '/login') {
            router.push('/login');
        }
    }, [isLoggedIn, pathname, router]);

    // Allow access to login page even when not logged in
    if (!isLoggedIn && pathname !== '/login') {
        return null;
    }

    return <>{children}</>;
}
