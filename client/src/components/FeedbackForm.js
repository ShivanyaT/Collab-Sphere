import React, { useState } from 'react';

const FeedbackForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    alert('Feedback submitted!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <h2>Send Feedback</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Your email" required />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
