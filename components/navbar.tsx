'use server'
import Link from 'next/link';

export default async function Navbar() {
    return (
    <header className="sm:justify-start sm:flex-nowrap w-full bg-navbar py-9 pb-4">
        <nav className="max-w-340 w-full mx-auto sm:flex sm:items-center sm:justify-between">
            <Link className="font-serif text-3xl" href="/">CartLog</Link>
            <div className="sm:flex space-x-1 md:flex md:space-x-4 list-none inline-block">
                    <Link href="/home" className="text-base underline underline-offset-10 font-normal list-none hover:decoration-2 decoration-gray-500 hover:text-gray-600">
                        Home
                    </Link>
                    <Link href="/upload" className="text-base underline underline-offset-10 font-normal list-none hover:decoration-2 decoration-gray-500 hover:text-gray-600">
                        Upload
                    </Link>
                    <Link href="/metrics" className="text-base underline underline-offset-10 font-normal list-none hover:decoration-2 decoration-gray-500 hover:text-gray-600">
                        Metrics
                    </Link>
            </div>
        </nav>
    </header>

    )
}