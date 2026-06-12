import React from "react";
import "./FeatureCard.css";
import { FaTruck, FaShieldAlt, FaChartLine } from "react-icons/fa";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="icon-circle">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default function Features() {
  return (
    <section className="features-container" id="services" aria-labelledby="services-title">
      <div className="features-header">
        <h2 className="features-title" id="services-title">Why NestedlooP.space?</h2>
        <p className="features-subtitle">A lean website service for founders and sellers who need a credible page quickly.</p>
      </div>
      
      <div className="features-cards">
        <FeatureCard
          icon={<FaTruck />}
          title="Fast Delivery — 48 hours"
          description="Get the first working version quickly, with mobile layout and core sections already in place."
        />
        <FeatureCard
          icon={<FaShieldAlt />}
          title="Pay After Work — Risk-free"
          description="Review the website first. Pay only after the page matches the agreed scope."
        />
        <FeatureCard
          icon={<FaChartLine />}
          title="AI-powered designs & custom code"
          description="Use practical AI workflows for faster copy, layout options, and clean custom implementation."
        />
      </div>
    </section>
  );
}
