import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io"

function AddYouth() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [cellNumber, setCellNumber] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const youth = { name, surname, cellNumber, email }

        const response = await fetch('https://amabe-env.eba-5iepkthj.us-east-1.elasticbeanstalk.com/youth', {
            method: 'POST',
            body: JSON.stringify(youth),
            header: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setName('')
            setSurname('')
            setCellNumber('')
            setEmail('')
            setError(null)
            console.log("New Youth Added")
        }
    }


    return (
        <div>
            <form className="create" onSubmit={handleSubmit}>
                <div className='addYouthFormHead'>
                    <h3>Add New Youth</h3>
                    <div><IoMdClose /></div>
                </div>

                <label>Name and Surname</label>
                <input
                    type={"text"}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Name"
                />
                <input
                    type={"text"}
                    onChange={(e) => setSurname(e.target.value)}
                    value={surname}
                    placeholder="Surname"
                />

                <label>Cell Number</label>
                <input
                    type={"text"}
                    onChange={(e) => setCellNumber(e.target.value)}
                    value={cellNumber}
                    placeholder="Name"
                />

                <label>Email</label>
                <input
                    type={"text"}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Name"
                />

                <button>Add Youth</button>
            </form>
        </div>
    )
}

export default AddYouth



