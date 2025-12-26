// FILE: src/Contect.jsx  (or Contact.jsx)
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'; 
import { Mail, MapPin, Send, Linkedin, Github } from 'lucide-react';

// I changed the name from 'Email' to 'Contact' to match your Profile.js import
const Contact = () => {
    const formRef = useRef(); 
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // PASTE YOUR EMAILJS KEYS HERE
        emailjs.sendForm(
            'service_g586rht',   // Your Service ID
            'template_87zyqac',  // <--- You still need to add this!
            formRef.current,
            'st2wUiThKsbnZv5I9'    // <--- You still need to add this!
        )
        .then((result) => {
            console.log(result.text);
            setStatus('success');
            alert("Message Sent!");
            e.target.reset(); 
        }, (error) => {
            console.log(error.text);
            setStatus('error');
            alert("Failed to send.");
        });
    };

    return (
        // The id="contact" here allows the "Let's Talk" button to find this section
        <section id="contact" className="relative min-h-screen bg-slate-950 py-24 px-4 md:px-0">
            
            {/* Background elements... */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-900/20 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                
                {/* Header */}
                 <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Together</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    
                    {/* Left Column: Info */}
                    <div className="space-y-8 text-white">
                        <h3 className="text-2xl font-bold">Get in touch</h3>
                        <p className="text-slate-400">I'm currently available for freelance work or full-time positions.</p>
                        <div className="flex gap-4">
                             {/* Add your social icons or details here if needed */}
                        </div>
                    </div>

                    {/* Right Column: FORM */}
                    <div className="relative">
                        <form 
                            ref={formRef} 
                            onSubmit={handleSubmit} 
                            className="relative bg-slate-900 border border-slate-800 p-8 md:p-10 rounded-3xl shadow-2xl"
                        >
                            <div className="space-y-6"> 
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                                    <input type="text" name="user_name" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                                    <input type="email" name="user_email" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Your Message</label>
                                    <textarea name="message" rows="4" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none" placeholder="Tell me about your project..."></textarea>
                                </div>

                                <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-xl hover:opacity-90 flex items-center justify-center gap-2">
                                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                                    <Send size={18} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;