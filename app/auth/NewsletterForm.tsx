'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Replace with your actual API endpoint
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus('success');
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div>
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={status === 'loading'}
          className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors disabled:opacity-50"
        />
        <button
          type="button"
          onClick={handleSubmit}
          disabled={status === 'loading' || !email}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Subscribe"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
      
      {status === 'success' && (
        <p className="text-green-400 text-xs mt-2">
          Successfully subscribed!
        </p>
      )}
      
      {status === 'error' && (
        <p className="text-red-400 text-xs mt-2">
          Subscription failed. Please try again.
        </p>
      )}
    </div>
  );
}


