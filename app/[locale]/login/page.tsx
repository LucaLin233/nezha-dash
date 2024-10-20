import PasswordForm from '@/components/PasswordForm'
import { getSession } from '@/lib/session'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
    const session = await getSession()

    // If user is already logged in, redirect to home page
    if (session.isLoggedIn) {
        redirect('/')
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
                <PasswordForm />
            </div>
        </div>
    )
}
