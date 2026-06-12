import React from "react";
import "./FeaturesSection.css";

export default function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="text-center mb-12">
          <h2 className="features-title">Why NestedloopP.space?</h2>
          <p className="features-subtitle">We're not just another development shop. We're your partner in innovation.</p>
        </div>

        <div className="features-grid">
          {/* Card 1 - Fast Delivery */}
          <article className="feature-card">
            <div className="feature-card-content">
              <div className="feature-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M3 13H16V8H20L23 12V18H21" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="7.5" cy="18.5" r="1.6" fill="white"/>
                  <circle cx="18.5" cy="18.5" r="1.6" fill="white"/>
                </svg>
              </div>
              <div className="feature-text">
                <h3>Fast Delivery — 48 hours</h3>
                <p>Get your project delivered within 48 hours, ensuring rapid deployment and quick turnaround times.</p>
              </div>
            </div>
          </article>

          {/* Card 2 - Pay After Work */}
          <article className="feature-card">
            <div className="feature-card-content">
              <div className="feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 2L4 5v6c0 5 4 9 8 11 4-2 8-6 8-11V5l-8-3z" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.5 12.5l1.8 1.8L15 10" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="feature-text">
                <h3>Pay After Work — Risk-free</h3>
                <p>Only pay after you're completely satisfied with the work, ensuring a risk-free experience.</p>
              </div>
            </div>
          </article>

          {/* Card 3 - AI-powered */}
          <article className="feature-card">
            <div className="feature-card-content">
              <div className="feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M22 2L11 13" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 4l2 2" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 14l4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 11l-3 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="feature-text">
                <h3>AI-powered designs & custom code</h3>
                <p>Leverage AI to generate designs and custom code, optimizing efficiency and creativity.</p>
              </div>
            </div>
          </article>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-50 to-orange-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust us with their digital presence. 
              No upfront payment, just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-gradient">
                Start My Website
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="bg-white text-gray-700 px-8 py-3 rounded-lg font-semibold border-2 border-gray-300 hover:border-gray-400 transition-all duration-300">
                See Samples
              </button>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="features-spacer"></div>
      </div>
    </section>
  );
}
