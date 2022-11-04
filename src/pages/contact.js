export default function Contact() {
    const placeholderText = "Send me a message and I'll reply you as soon as possible..."
    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            <div className="input-container">
                <label htmlFor="first_name">First Name</label>
                <input type="text" id="first_name" placeholder="Enter your first name" />
                <label htmlFor="last_name">Last Name</label>
                <input type="text" id="last_name" placeholder="Enter your last name" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Yourname@email.com" />
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder={placeholderText}></textarea>
                <button id="btn_submit"></button>
            </div>
        </div>
    )
}
