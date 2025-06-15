'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    // Create mailto link with subject and body
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    const mailtoLink = `mailto:subhankardey648@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
          >
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-8 text-primary text-center">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <FaEnvelope className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a 
                      href="mailto:subhankardey648@gmail.com" 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      subhankardey648@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center space-y-2">
                  <FaPhone className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <a 
                      href="tel:+919134347738" 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +91 9134347738
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center space-y-2">
                  <FaMapMarkerAlt className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-muted-foreground">Bangalore, India</p>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="pt-6 border-t border-border">
                  <h4 className="text-2xl font-semibold mb-8 text-primary text-center">Connect with me</h4>
                  <div className="flex justify-center space-x-6">
                    <a
                      href="https://github.com/subhankardey11"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub className="w-6 h-6" />
                    </a>
                    <a
                      href="https://linkedin.com/in/subhankardey11"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="w-6 h-6" />
                    </a>
                   
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 