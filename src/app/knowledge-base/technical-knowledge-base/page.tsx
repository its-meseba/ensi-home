import { IntroFeature } from '@/components/common/intro-feature'; // Import IntroFeature
import { Button } from '@/components/ui/button';

export default function TechnicalSupportPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-6 text-4xl font-bold">Technical Support</h1>
      <p className="mb-6 text-lg">
        Get help and answers to your questions about Ensi Home products and
        services.
      </p>
      <IntroFeature
        platform="Technical Support"
        title="We're Here to Help"
        description="Access support resources and get assistance with your devices."
        checkPoints={[
          {
            title: '24/7 Support',
            description: "We're here whenever you need us.",
          },
          {
            title: 'Comprehensive Guides',
            description: 'Step-by-step instructions available.',
          },
        ]}
        imageUrl="/path/to/image.jpg" // Provide the correct image URL
      />
      <Button>Contact Support</Button>
    </div>
  );
}
// Purpose: To provide technical teams with detailed resources.

// Components:

// Resource Library:

// Installation Guides
// API Documentation
// Integration Manuals
// Downloadable PDFs and online readable content.
// Search and Filters:

// Allow users to find resources by category or keyword.
// Support Contact:

// Direct line or email for technical inquiries.
// Call to Action:

// CTA Button: "Need Further Assistance?" - links to /contact/
