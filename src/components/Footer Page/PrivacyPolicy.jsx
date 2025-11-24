import React from "react";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen text-gray-200 py-10 px-5">
            <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold text-pink-400 mb-6">
                    Privacy Policy
                </h1>

                <p className="mb-4">
                    Last updated: <span className="font-semibold">19 November 2025</span>
                </p>

                <p className="mb-6">
                    This Privacy Policy outlines how we collect, use, and protect your
                    information when you use our website. By accessing or using our
                    service, you agree to the terms described below.
                </p>

                {/* --- Information We Collect --- */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-pink-300 mb-2">
                        Information We Collect
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Personal information (name, email, phone number)</li>
                        <li>Usage data (browser type, device information, pages visited)</li>
                        <li>Cookies and tracking technologies</li>
                    </ul>
                </section>

                {/* --- How We Use Your Information --- */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-pink-300 mb-2">
                        How We Use Your Information
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>To provide and maintain our service</li>
                        <li>To improve user experience</li>
                        <li>To communicate updates & promotional messages</li>
                        <li>To ensure website security</li>
                    </ul>
                </section>

                {/* --- Cookies --- */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-pink-300 mb-2">Cookies</h2>
                    <p>
                        We use cookies to improve your browsing experience. You can disable
                        cookies anytime through your browser settings.
                    </p>
                </section>

                {/* --- Third Party Services --- */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-pink-300 mb-2">
                        Third-Party Services
                    </h2>
                    <p>
                        We may use third-party services (Google Analytics, payment gateways)
                        that collect data to enhance our services. They follow their own
                        privacy policies.
                    </p>
                </section>

                {/* --- Data Security --- */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-pink-300 mb-2">
                        Data Security
                    </h2>
                    <p>
                        We use modern security measures to protect your data. However,
                        no online method is 100% secure.
                    </p>
                </section>

                {/* --- Your Rights --- */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-pink-300 mb-2">
                        Your Rights
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Access, update or delete your personal data</li>
                        <li>Withdraw consent for data processing</li>
                        <li>Request information about how your data is used</li>
                    </ul>
                </section>

                {/* --- Contact --- */}
                <section>
                    <h2 className="text-xl font-semibold text-pink-300 mb-2">Contact Us</h2>
                    <p>
                        If you have any questions, contact us at:
                        <span className="text-pink-400 font-semibold"> your-email@example.com</span>
                    </p>
                </section>
            </div>
        </div>
    );
}
