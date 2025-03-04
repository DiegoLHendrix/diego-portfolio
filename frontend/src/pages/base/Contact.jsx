import { useForm } from "@formspree/react";
import "../../styles/base/Contact.css";

const Contact = () => {
    const formID = import.meta.env.VITE_FORM_ID;
    const [state, handleSubmit] = useForm(formID);

    if (state.succeeded) {
        return <p className="success-message">Thank you! Your message has been sent.</p>;
    }

    return (
        <main role="main">
            <div className="contact-container">
                <h1 className="text-center">Contact Me</h1>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input id="name" type="text" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input id="email" type="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required />
                    </div>
                    <button type="submit" disabled={state.submitting}>
                        {state.submitting ? "Sending..." : "Send"}
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Contact;
