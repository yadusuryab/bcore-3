"use client";

import { useState } from "react";
import { MessageCircle, X, Phone, Mail, MapPin } from "lucide-react";

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<"phone" | "email" | "form">("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for your message! We'll be in touch soon.");
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-30 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 hover:from-blue-700 hover:to-blue-800 group"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
      </button>

      {/* Contact Modal */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
            onClick={() => setIsOpen(false)}
          />

          <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
              <h2 className="text-xl font-bold text-white">Get in Touch</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Contact Method Tabs */}
            <div className="flex border-b border-gray-100">
              <button
                onClick={() => setSelectedMethod("form")}
                className={`flex-1 py-3 px-4 text-sm font-semibold transition-all duration-200 border-b-2 ${
                  selectedMethod === "form"
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-500 border-transparent hover:text-gray-700"
                }`}
              >
                Message
              </button>
              <button
                onClick={() => setSelectedMethod("email")}
                className={`flex-1 py-3 px-4 text-sm font-semibold transition-all duration-200 border-b-2 ${
                  selectedMethod === "email"
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-500 border-transparent hover:text-gray-700"
                }`}
              >
                Email
              </button>
              <button
                onClick={() => setSelectedMethod("phone")}
                className={`flex-1 py-3 px-4 text-sm font-semibold transition-all duration-200 border-b-2 ${
                  selectedMethod === "phone"
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-500 border-transparent hover:text-gray-700"
                }`}
              >
                Call
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {selectedMethod === "form" && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help..."
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200 resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-2 rounded-lg hover:shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-blue-800"
                  >
                    Send Message
                  </button>
                </form>
              )}

              {selectedMethod === "email" && (
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          Email us
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          bcorece@gmail.com
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          We&apos;ll respond within 24 hours
                        </p>
                      </div>
                    </div>
                  </div>
                  <a
                    href="mailto:info@coursesplatform.com"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-2 rounded-lg hover:shadow-lg transition-all duration-200 block text-center hover:from-blue-700 hover:to-blue-800"
                  >
                    Open Email Client
                  </a>
                </div>
              )}

              {selectedMethod === "phone" && (
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          Call us
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          +91 9447082101
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          Monday - Saturday, 9 AM - 6 PM EST
                        </p>
                      </div>
                    </div>
                  </div>
                  <a
                    href="tel:+15551234567"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-2 rounded-lg hover:shadow-lg transition-all duration-200 block text-center hover:from-blue-700 hover:to-blue-800"
                  >
                    Call Now
                  </a>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default ContactButton;