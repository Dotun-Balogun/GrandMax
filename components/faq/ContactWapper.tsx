import ContactForm from "@/app/auth/ContactForm";

export default function ContactFormWrapper() {
  return (
    <div className="bg-white rounded-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-red-500 rounded flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900">Ask us</h2>
      </div>

      <p className="text-gray-600 text-sm mb-8 leading-relaxed">
        We look with care and attention at all elements, your specific situation and your wishes. From glass walls, floors, finishes, ceilings or even the design of a room. We turn every project into a unique project by working with stylish, high-quality materials.
      </p>

      <ContactForm/>
    </div>
  );
}