import { useState } from 'react';
import ocmimage from '../assets/ocm.png';

export default function Footer() {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const toggleTermsModal = () => {
    setIsTermsModalOpen(!isTermsModalOpen);
  };

  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const togglePrivacyModal = () => {
    setIsPrivacyModalOpen(!isPrivacyModalOpen);
  };


  return (
    <footer className="bg-white p-10 font-[sans-serif] tracking-wide">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="lg:flex lg:items-center">
          <a href="#">
            <img src={ocmimage} alt="logo" className="w-52" />
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="lg:flex lg:items-center">
          <ul className="flex space-x-6">
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-gray-500 hover:fill-orange-600 w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-gray-500 hover:fill-orange-600 w-7 h-7"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="fill-gray-500 hover:fill-orange-600 w-7 h-7"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
              </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h4 className="text-lg font-semibold mb-6 text-gray-900">Contact Us</h4>
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-gray-600 hover:text-orange-600 text-sm">
                Email
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-orange-600 text-sm">
                Phone
              </a>
            </li>
          </ul>
        </div>

        {/* Information Section */}
        <div>
          <h4 className="text-lg font-semibold mb-6 text-gray-900">Information</h4>
          <ul className="space-y-4">
            <li>
              <button
                onClick={toggleTermsModal}
                className="text-gray-600 hover:text-orange-600 text-sm"
              >
                Terms & Conditions
              </button>
            </li>
            <li>
              <button
                onClick={togglePrivacyModal}
                className="text-gray-600 hover:text-orange-600 text-sm"
              >
                Privacy Policy
              </button>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-gray-600 text-sm mt-10">© OrangeCityMart. All rights reserved.</p>



      {/* Terms of Service Modal */}
      {isTermsModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          aria-hidden="true"
        >
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
            <div className="flex justify-between items-center border-b pb-4">
              <h3 className="text-xl font-semibold">Terms of Service</h3>
              <button
                onClick={toggleTermsModal}
                className="text-gray-500 hover:text-gray-900"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto"
      style={{ maxHeight: '400px', overflowY: 'auto' }}>    {/* making it scrollable */}
                <h2 className="text-3xl font-bold mb-6">Terms and Conditions for OrangeCityMart</h2>
                <p className="mb-4"><strong>Effective Date:</strong> 08/09/2024</p>

                <p className="mb-6">
                    Welcome to <strong>OrangeCityMart</strong>! By accessing or using our platform, you agree to be bound by these 
                    Terms and Conditions. If you do not agree to these terms, please refrain from using the platform.
                </p>

                <h3 className="text-xl font-semibold mb-4">1. Introduction</h3>
                <p className="mb-6">
                    OrangeCityMart (“we,” “us,” or “our”) operates an online marketplace exclusively for residents of 
                    <strong> Nagpur</strong>. Users can both <strong>buy and sell</strong> items and services through the platform. 
                    These terms govern your use of our services.
                </p>

                <h3 className="text-xl font-semibold mb-4">2. Eligibility</h3>
                <ul className="list-disc list-inside mb-6">
                    <li>You must be at least 18 years old to create an account and use the platform.</li>
                    <li>Users are responsible for providing accurate personal information during registration.</li>
                    <li>
                    OrangeCityMart reserves the right to suspend or terminate accounts if the provided information 
                    is found to be false or misleading.
                    </li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">3. User Accounts and Responsibilities</h3>
                <ul className="list-disc list-inside mb-6">
                    <li>Users must maintain the confidentiality of their login credentials.</li>
                    <li>Sellers are responsible for the accuracy, quality, and legality of listed items or services.</li>
                    <li>Buyers should inspect items and communicate with sellers before transactions.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">4. Prohibited Activities</h3>
                <ul className="list-disc list-inside mb-6">
                    <li>Selling illegal, hazardous, or prohibited goods.</li>
                    <li>Posting false or misleading information.</li>
                    <li>Using the platform for fraudulent activities, spamming, or harassment.</li>
                    <li>Arranging offline transactions to avoid platform fees or rules.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">5. Transactions and Payments</h3>
                <p className="mb-6">
                    OrangeCityMart facilitates communication between buyers and sellers but does not provide payment processing. 
                    Users are responsible for managing payments and ensuring secure transactions. We are not liable for disputes 
                    but encourage fair cooperation between users.
                </p>

                <h3 className="text-xl font-semibold mb-4">6. Content Ownership and License</h3>
                <p className="mb-6">
                    Users retain ownership of their posted content. By posting, users grant OrangeCityMart a non-exclusive, 
                    royalty-free license to display and distribute their content on the platform.
                </p>

                <h3 className="text-xl font-semibold mb-4">7. Liability and Disclaimer</h3>
                <p className="mb-6">
                    OrangeCityMart is not responsible for the quality, safety, or legality of items sold. We are not liable for 
                    financial losses or disputes arising between users. Users should act cautiously and communicate clearly.
                </p>

                <h3 className="text-xl font-semibold mb-4">8. Privacy Policy</h3>
                <p className="mb-6">
                    Your personal data will be handled according to our <strong>Privacy Policy</strong>, which outlines how we 
                    collect, use, and protect your information.
                </p>

                <h3 className="text-xl font-semibold mb-4">9. Termination of Account</h3>
                <ul className="list-disc list-inside mb-6">
                    <li>We reserve the right to terminate accounts for violations of these terms.</li>
                    <li>Suspicious, illegal, or fraudulent activities may result in account suspension.</li>
                    <li>User complaints can also trigger account termination.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">10. Changes to the Terms and Conditions</h3>
                <p className="mb-6">
                    OrangeCityMart reserves the right to update these Terms and Conditions at any time. Significant changes will 
                    be communicated through the platform. Continued use of the service after changes implies acceptance.
                </p>

                <h3 className="text-xl font-semibold mb-4">11. Governing Law and Dispute Resolution</h3>
                <p className="mb-6">
                    These Terms and Conditions are governed by the laws of <strong>India</strong>. Any disputes will be resolved 
                    through arbitration or mediation in <strong>Nagpur, Maharashtra</strong>.
                </p>

                <h3 className="text-xl font-semibold mb-4">12. Contact Us</h3>
                <p className="mb-6">
                    If you have questions, feel free to reach us at:
                </p>
                <ul className="list-disc list-inside mb-6">
                    <li><strong>Email:</strong> kartikknagrale@gmail.com</li>
                    <li><strong>Phone:</strong> +91 8920030000</li>
                    <li><strong>Address:</strong> 123, XYZ Street, Nagpur, Maharashtra</li>
                </ul>

                <p className="text-sm text-gray-600">
                    By using OrangeCityMart, you acknowledge that you have read, understood, and agree to these Terms and Conditions. 
                    Thank you for being part of our community!
                </p>
            </div>
            <div className="flex justify-end mt-6 space-x-4">
              <button
                onClick={toggleTermsModal}
                className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
              >
                I Accept
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {isPrivacyModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          aria-hidden="true"
        >
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
            <div className="flex justify-between items-center border-b pb-4">
              <h3 className="text-xl font-semibold">Privacy Policy</h3>
              <button
                onClick={togglePrivacyModal}
                className="text-gray-500 hover:text-gray-900"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto"
                 style={{ maxHeight: '400px', overflowY: 'auto' }} // Making it scrollable
            >
              <h2 className="text-3xl font-bold mb-6">Privacy Policy for OrangeCityMart</h2>
              <p className="mb-4"><strong>Effective Date:</strong> 08/09/2024</p>

              <p className="mb-6">
                This Privacy Policy outlines how OrangeCityMart collects, uses, and protects your personal information when you access our platform.
              </p>

              <h3 className="text-xl font-semibold mb-4">1. Information We Collect</h3>
              <ul className="list-disc list-inside mb-6">
                <li>Personal Information: Name, email address, phone number, and payment details.</li>
                <li>Non-Personal Information: Browser type, IP address, and device information.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">2. How We Use Your Information</h3>
              <p className="mb-6">
                We use your information to provide and improve our services, process transactions, and communicate with you.
              </p>

              <h3 className="text-xl font-semibold mb-4">3. Cookies and Tracking Technologies</h3>
              <p className="mb-6">
                We use cookies to enhance your experience and analyze our website traffic. You can control cookie preferences through your browser settings.
              </p>

              <h3 className="text-xl font-semibold mb-4">4. Data Sharing</h3>
              <p className="mb-6">
                We do not sell or rent your personal information. We may share your data with third-party service providers for the purpose of facilitating our services.
              </p>

              <h3 className="text-xl font-semibold mb-4">5. Data Security</h3>
              <p className="mb-6">
                We take reasonable measures to protect your personal information from unauthorized access or disclosure.
              </p>

              <h3 className="text-xl font-semibold mb-4">6. Your Rights</h3>
              <p className="mb-6">
                You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us.
              </p>

              <h3 className="text-xl font-semibold mb-4">7. Changes to This Privacy Policy</h3>
              <p className="mb-6">
                We may update this Privacy Policy from time to time. Significant changes will be communicated via our platform.
              </p>

              <h3 className="text-xl font-semibold mb-4">8. Contact Us</h3>
              <p className="mb-6">
                If you have any questions or concerns regarding this Privacy Policy, please contact us at:
              </p>
              <ul className="list-disc list-inside mb-6">
                <li><strong>Email:</strong> kartikknagrale@gmail.com</li>
                <li><strong>Phone:</strong> +91 8920030000</li>
                <li><strong>Address:</strong> 123, XYZ Street, Nagpur, Maharashtra</li>
              </ul>

              <p className="text-sm text-gray-600">
                By using OrangeCityMart, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>
            <div className="flex justify-end mt-6 space-x-4">
              <button
                onClick={togglePrivacyModal}
                className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
              >
                I Accept
              </button>
            </div>
          </div>
        </div>
      )}
      
    </footer>
  );
}
