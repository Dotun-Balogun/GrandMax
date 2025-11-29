'use client';

import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface FormData {
  name: string;
  email: string;
  subject: string;
  department: string;
  question: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      department: 'Business Department',
      question: ''
    }
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', data);
      
      // Success toast
      toast.success('Message sent successfully!', {
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
        
      });
      
      // Reset form after successful submission
      reset();
      
      // Example API call:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });
      // if (!response.ok) throw new Error('Failed to send message');
      
    } catch (error) {
      // Error toast
      toast.error('Failed to send message', {
        description: 'Please try again later or contact us directly.',
        duration: 5000,
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
            Your Name (*)
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { 
              required: 'Name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' }
            })}
            className={`text-white w-full border-b-2 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } focus:border-red-500 outline-none py-2 transition-colors`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
            Your Email (*)
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className={`w-full text-white  border-b-2 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } focus:border-red-500 outline-none py-2 transition-colors`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-sm text-gray-700 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          {...register('subject')}
          className="w-full border-b-2 text-white border-gray-300 focus:border-red-500 outline-none py-2 transition-colors"
        />
      </div>

      {/* Department Field */}
      <div>
        <label htmlFor="department" className="block text-sm text-gray-700 mb-2">
          Department
        </label>
        <select
          id="department"
          {...register('department')}
          className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2 bg-white transition-colors"
        >
          <option>Business Department</option>
          <option>Design Department</option>
          <option>Project Management</option>
          <option>Customer Service</option>
        </select>
      </div>

      {/* Question Field */}
      <div>
        <label htmlFor="question" className="block text-sm text-gray-700 mb-2">
          Your Question
        </label>
        <textarea
          id="question"
          rows={6}
          {...register('question', {
            required: 'Please enter your question',
            minLength: { value: 10, message: 'Question must be at least 10 characters' }
          })}
          className={`w-full border-b-2  text-white ${
            errors.question ? 'border-red-500' : 'border-gray-300'
          } focus:border-red-500 outline-none py-2 resize-none transition-colors`}
        />
        {errors.question && (
          <p className="text-red-500 text-xs mt-1">{errors.question.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="button"
        onClick={handleSubmit(onSubmit)}
        disabled={isSubmitting}
        className="bg-red-500 hover:bg-red-600 disabled:bg-red-300 disabled:cursor-not-allowed text-white px-8 py-3 rounded transition-colors font-medium"
      >
        {isSubmitting ? 'Sending...' : 'Ask'}
      </button>
    </div>
  );
}
