import React from 'react'
import { useRouter } from 'next/router'

export default function MainView() {
    const router = useRouter()
    return (
        <div>
            <div class="jumbotron">
                <h1 class="display-4">Cats, World</h1>
                <p class="lead">Find your beautiful friend </p>
                <hr class="my-4" />
                <p>This is cat menu website to choose your favourite cat from list. Good luck </p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" onClick={()=> router.push("/cats")} role="button">Menu</a>
                </p>
            </div>
        </div>
    )
}
