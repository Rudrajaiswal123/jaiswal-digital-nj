'use client';

import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  showCompanyField?: boolean;
  showSubjectField?: boolean;
  emailServiceId: string;
  emailTemplateId: string;
  emailPublicKey?: string;
  buttonText?: string;
  onSuccess?: () => void;
  className?: string;
}

interface FormData {
  name: string;
  company: string;
  email: string;
  mobile: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  company: '',
  email: '',
  mobile: '',
  subject: '',
  message: ''
};

export default function ContactForm({
  title = 'Send us a message',
  subtitle = 'Please feel free to send us any questions.',
  showCompanyField = true,
  showSubjectField = false,
  emailServiceId,
  emailTemplateId,
  emailPublicKey = '',
  buttonText = 'SEND MESSAGE',
  onSuccess,
  className = ''
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (emailPublicKey) {
      emailjs.init(emailPublicKey);
    }
  }, [emailPublicKey]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name: formData.name,
      company: formData.company,
      email: formData.email,
      mobile: formData.mobile,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(emailServiceId, emailTemplateId, templateParams as unknown as Record<string, unknown>);
      setSuccess(true);
      setFormData(initialFormData);
      toast.success('Message sent successfully!', {
        icon: '✅',
      });
      onSuccess?.();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again.', {
        icon: '❌',
      });
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSuccess(false);
  };

  return (
    <div className={`contact-form ${className}`}>
      {title && <h2>{title}</h2>}
      {subtitle && <p>{subtitle}</p>}
      
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          {/* Name Field */}
          <div className="col-md-6">
            <label htmlFor="name" className="form-label text-light">Name</label>
            <input 
              type="text" 
              placeholder="Enter your full name" 
              className="form-control" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
              suppressHydrationWarning
            />
          </div>

          {/* Company Field */}
          {showCompanyField && (
            <div className="col-md-6">
              <label htmlFor="company" className="form-label text-light">Company</label>
              <input 
                type="text" 
                placeholder="Enter your Company" 
                className="form-control" 
                id="company" 
                name="company"
                value={formData.company}
                onChange={handleChange}
                suppressHydrationWarning
              />
            </div>
          )}

          {/* Mobile Field */}
          <div className="col-md-6">
            <label htmlFor="mobile" className="form-label text-light">Mobile</label>
            <input 
              type="tel" 
              placeholder="Enter your mobile number" 
              className="form-control" 
              id="mobile" 
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required 
              suppressHydrationWarning
            />
          </div>

          {/* Email Field */}
          <div className="col-md-6">
            <label htmlFor="email" className="form-label text-light">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="form-control" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
              suppressHydrationWarning
            />
          </div>

          {/* Subject Field */}
          {showSubjectField && (
            <div className="col-12">
              <label htmlFor="subject" className="form-label text-light">Subject</label>
              <input 
                type="text" 
                placeholder="Subject" 
                className="form-control" 
                id="subject" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                suppressHydrationWarning
              />
            </div>
          )}

          {/* Message Field */}
          <div className="col-12">
            <label htmlFor="message" className="form-label text-light">Message</label>
            <textarea 
              rows={4} 
              placeholder="Write your message here..." 
              className="form-control" 
              id="message" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              suppressHydrationWarning
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-12">
            <button 
              className="btn-gradient w-100" 
              type="submit"
              disabled={loading}
            > 
              {loading ? 'SENDING...' : buttonText}
            </button>
          </div>
        </div>
        
        {success && (
          <p className="successMsg mt-3">Message sent successfully ✅</p>
        )}
      </form>
    </div>
  );
}

// Re-export the form for easy use with different configurations
export { ContactForm };

