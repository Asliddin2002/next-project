import React from 'react'
import { useRouter } from 'next/router'

export default function Card({image, name, email, phone, id }) {
    const router = useRouter()
    return (
        <div className='col-3 mb-5 ' key={id}>
            <div class="card shadow">
                <img class="card-img-top w-100" src={image.url} alt={image.alt} />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{email}</p>
                    <p>{phone}</p>
                    <a onClick={() => router.push(`/cats/${id}`)} class="btn btn-primary">Show the cat</a>
                </div>
            </div>
        </div>
    )
}
