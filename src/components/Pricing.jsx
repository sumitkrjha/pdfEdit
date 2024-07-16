import React from "react";

const Pricing = () => {
  const plan = {
    individual: {
      free: {
        description: "Ideal for occasional PDF users.",
        features: [
          "Basic editing: Edit text and images in simple PDFs.",
          "Annotation tools: Add highlights, comments, and drawings.",
          "Limited conversions: Convert a few PDFs per month to common formats.",
          "Limited cloud storage: Store a small amount of documents online.",
        ],
      },
      pro: {
        price: 4.99,
        currency: "USD",
        billing_cycle: "monthly",
        description: "Ideal for regular PDF users who need more features.",
        features: [
          "All features of the Free Plan",
          "Advanced editing: Edit complex PDFs with greater control.",
          "Unlimited conversions: Convert PDFs to various formats without limitations.",
          "More cloud storage: Store a moderate amount of documents online.",
          "OCR (Optical Character Recognition): Convert scanned PDFs into editable text.",
        ],
      },
    },
    business: {
      starter: {
        price: 9.99,
        currency: "USD",
        billing_cycle: "yearly",
        description: "Ideal for small teams who need to collaborate on PDFs.",
        features: [
          "All features of the Pro Plan",
          "Team collaboration: Share and edit documents with team members in real-time.",
          "Advanced security features: Password protection and document encryption.",
          "Larger cloud storage: Store a significant amount of documents per team.",
          "Priority customer support: Get faster response times for any issues.",
        ],
      },
      pro: {
        price: 14.99,
        currency: "USD",
        billing_cycle: "yearly",
        description: "Ideal for larger teams with advanced PDF needs.",
        features: [
          "All features of the Business Starter Plan",
          "Custom branding: Add your company logo and branding to documents.",
          "Advanced analytics: Track user activity and document usage.",
          "Dedicated account manager: Get personalized support from a dedicated representative.",
          "Bulk processing: Convert and compress large batches of PDFs efficiently.",
        ],
      },
    },
  };

  return (
    <>
      <div id="plans">
        <div id="planype">
          <p></p>
        </div>
      </div>
    </>
  );
};

export default Pricing;
