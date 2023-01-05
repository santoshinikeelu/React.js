import React, { useState } from "react"

const StudentForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    return (
        <div>
            <form className="student-form"
                onSubmit={(event) => event.preventDefault()}>
                <div>
                    <label>Name:  </label>
                    <input value={name} onChange={(event) => { setName(event.target.value) }}
                    />
                </div>
                <div>
                    <label>Email_id:  </label>
                    <input value={email} onChange={(event) => { setEmail(event.target.value) }}
                    />
                </div>
                <div>
                    <label>Mobile no.:  </label>
                    <input value={mobile} onChange={(event) => { setMobile(event.target.value) }}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <div>
                <p>registred</p>

            </div>
        </div>

    )
}

export default StudentForm