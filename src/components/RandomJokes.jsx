import React, { useEffect, useState } from 'react'

const RandomJokes = () => {

    const [joke, setJoke] = useState("")

    const fetchJokes = () => {
        fetch(`https://official-joke-api.appspot.com/random_joke`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                setJoke(data)
            })
            .catch((error) => console.log(error))
    }

    useEffect(()=>{
        fetchJokes();
    },[])

    return (
        <div className='jokes-bg'>
            <h1>Jokes Genrater</h1>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
            <button className="btn btn-outline-danger" onClick={fetchJokes}>Click</button>
        </div>
    )
}

export default RandomJokes