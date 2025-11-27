import React from 'react'
import { LeafletMap } from '@/components/LeafletMap'
import ContactForm from '@/app/auth/ContactForm'

const ContactPage = () => {
  return (
    <div className="min-h-screen  text-whit">
      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2 bg-secondary p-6 rounded-lg shadow-md flex flex-col">
            <p className="mb-4 text-gray-100">
              Send us a message and we&apos;ll get back to you as soon as possible.
            </p>
            <ContactForm />
          </div>

          {/* Map */}
          <div className="md:w-1/2 rounded-lg overflow-hidden h-72 md:h-auto">
            <LeafletMap lat={6.5244} lng={3.3792} zoom={12} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage