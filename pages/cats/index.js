import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Card from '../../components/card/card'

export default function Cats() {
    const [cats, setCats] = useState([])

    const fetchData = async () => {
        const res = await fetch("/api/cats");
        const data = await res.json();
        setCats(data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <Navbar />
            <div className='container mt-5'>
                <div className='row'>
                {
                    cats.map((cat) => (
                        <Card id = {cat.id} image = {cat.image} name = {cat.name} phone ={cat.phone} email = {cat.email} />

                    ))
                }
                </div>
                
            </div>
        </div>
    )
}
