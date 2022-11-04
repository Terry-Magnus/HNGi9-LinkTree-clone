export default function Contact() {
    return (
        <div className="input-container">
            <input type="text" id="first_name" placeholder="First Name" />
            <input type="text" id="last_name" placeholder="Last Name" />
            <input type="email" id="email" placeholder="Email" />
            <textarea id="message"></textarea>
            <button id="btn_submit"></button>
        </div>
    )
}
