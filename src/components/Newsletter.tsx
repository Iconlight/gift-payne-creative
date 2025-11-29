import { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const mailtoLink = `mailto:giftpaynekenya@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;

        window.location.href = mailtoLink;
        setStatus('Opening your email client...');

        // Reset form
        setTimeout(() => {
            setFormData({ name: '', email: '', message: '' });
            setStatus('');
        }, 2000);
    };

    return (
        <section className="newsletter">
            <div className="newsletter-content">
                <h2>GET IN <span className="highlight">TOUCH</span></h2>
                <p>Have a project in mind? Let's create something amazing together.</p>

                <form className="newsletter-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="YOUR NAME"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                    <input
                        type="email"
                        placeholder="YOUR EMAIL"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                    <textarea
                        placeholder="YOUR MESSAGE"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
