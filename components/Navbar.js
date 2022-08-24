import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar bg-dark navbar-light bg-light">
                <div class="container-fluid">
                    <Link href='/' class="navbar-brand logo text-light  mb-0 h1">Navbar</Link>
                </div>
            </nav>
        </div>
    )
}
