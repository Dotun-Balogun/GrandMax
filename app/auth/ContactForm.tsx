// components/faq/ContactForm.tsx (Client Component)
'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  department: string;
  question: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    department: 'Business Department',
    question: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission (API call, etc.)
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
            Your Name (*)
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
            Your Email (*)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2 transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm text-gray-700 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2 transition-colors"
        />
      </div>

      <div>
        <label htmlFor="department" className="block text-sm text-gray-700 mb-2">
          Department
        </label>
        <select
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2 bg-white transition-colors"
        >
          <option>Business Department</option>
          <option>Design Department</option>
          <option>Project Management</option>
          <option>Customer Service</option>
        </select>
      </div>

      <div>
        <label htmlFor="question" className="block text-sm text-gray-700 mb-2">
          Your Question
        </label>
        <textarea
          id="question"
          name="question"
          rows={6}
          value={formData.question}
          onChange={handleChange}
          className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2 resize-none transition-colors"
        />
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded transition-colors font-medium"
      >
        Ask
      </button>
    </div>
  );
}
