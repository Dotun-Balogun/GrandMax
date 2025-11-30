'use client';

import React from 'react';

interface ConsultationModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-black/60" 
        onClick={onClose}
      />

      {/* ConsultationModal content */}
      <div className="
        relative bg-white w-[90%] max-w-md mx-auto rounded-lg p-6 
        shadow-2xl animate-fadeIn
      ">
        {/* Close button */}
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
};

export default ConsultationModal;
