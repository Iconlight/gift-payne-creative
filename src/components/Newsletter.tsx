import { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending...');

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formsubmit.co/giftpaynekenya@gmail.com', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                form.reset();
                setTimeout(() => setStatus(''), 3000);
            } else {
                setStatus('Failed to send. Please try again.');
            }
        } catch (error) {
            setStatus('Error sending message. Please try again.');
        }
    };

    return (
        <section className="newsletter" id="contact">
            <div className="newsletter-content">
                <h2>GET IN <span className="highlight">TOUCH</span></h2>
                <p>Have a project in mind? Let's create something amazing together.</p>

                <form className="newsletter-form" onSubmit={handleSubmit}>
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value={window.location.href} />

                    <input
                        type="text"
                        name="name"
                        placeholder="YOUR NAME"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="YOUR EMAIL"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="YOUR MESSAGE"
                        rows={4}
                        required
                    />
                    <button type="submit">SEND MESSAGE</button>
                    {status && <p className="form-status">{status}</p>}
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
