import { useState } from "react"

export default function Contact() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
        isChecked: false
    })
    const [errorMsg, setErrorMsg] = useState("")
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (formData.message === "") {
            setErrorMsg("Please enter a message")
        } else {
            setErrorMsg("")
        }

    }

    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            <form onSubmit={handleSubmit} >
                <div className="input-group">
                    <div className="input">
                        <label htmlFor="first_name">First Name:</label>
                        <input
                            type="text"
                            name="firstname"
                            id="first_name"
                            placeholder="Enter your first name"
                            value={formData.firstname}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="input">
                        <label htmlFor="last_name">Last Name:</label>
                        <input type="text"
                            name="lastname"
                            id="last_name"
                            placeholder="Enter your last name"
                            value={formData.lastname}
                            onChange={handleChange}
                            required />
                    </div>
                </div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Yourname@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required />
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    cols={10}
                    className={errorMsg === "" ? "" : "err"}
                    placeholder="Send me a message and I'll reply you as soon as possible..."
                />
                <p className="errormsg">{errorMsg}</p>

                <label htmlFor="check" className="checkbox">
                    <input
                        type="checkbox"
                        name="isChecked"
                        id="check"
                        onChange={handleChange}
                    />You agree to providing your data to  who may contact you.</label>
                <button type="submit" id="btn_submit">Send Message</button>
            </form>
        </div>
    )
}
