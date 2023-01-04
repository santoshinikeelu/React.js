import React, { useState } from "react"
import './User.css'

const ListComponent = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState('')
    const [gender, setGender] = useState("")
    const [country, setCountry] = useState("")
    const [submit, setSubmit] = useState(false)
    const [error, setError] = useState(false)

    const HandleFirstName = (event) => {
        setName(event.target.Value)

    }
    const HandleLastName = (event) => {
        setName(event.target.Value)

    }

    const HandleEmail = (event) => {
        setEmail(event.target.Value)

    }

    const HandleGender = (event) => {
        setGender(event.target.Value)

    }
    const HandleCountry = (event) => {
        setCountry(event.target.Value)
    }
    const HandleProfileImage = (event) => {
        setImage(event.target.Value)
    }
    const HandleforSubmit = (event) => {
        event.preventDefault()
        if(name===''||email===''||gender===''||country===''||image===''){
            setError(true)
            console.log("error")
        }
        else{
            setSubmit(true)
            setError(false)
            console.log("user registred")
        }
        
        
    }
    return (
        <div className="list-form">
            <h2>User</h2>
            <form
                onSubmit={(event) => { HandleforSubmit(event) }}>
                <label>FirstName:  </label>
                <input
                    placeholder="enter FirstName"
                    type="text"
                    onChange={HandleFirstName} />
                <br />
                <label>LastName:  </label>
                <input
                    placeholder="enter LastName"
                    type="text"
                    onChange={HandleLastName} />
                <br />
                <label>Email_id:  </label>
                <input
                    placeholder="enter email"
                    type="text"
                    onChange={HandleEmail} />
                <br />
               
                <label>Gender:  </label>
                <input
                    placeholder="M/F"
                    type="text"
                    onChange={HandleGender} />
                <br />
                <label>Country:  </label>
                <input
                    placeholder=" "
                    type="text"
                    onChange={HandleCountry} />
                <br />

                <label>ProfileImage:  </label>
                <input
                    placeholder="upload Image"
                    type="file"
                    onChange={HandleProfileImage} />
                <br />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}
export default ListComponent