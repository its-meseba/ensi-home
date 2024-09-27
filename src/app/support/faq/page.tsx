import { IntroFeature } from '@/components/common/intro-feature'; // Import IntroFeature
import { Button } from '@/components/ui/button';

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-6 text-4xl font-bold">Frequently Asked Questions</h1>
      <p className="mb-6 text-lg">
        Find answers to common questions about Ensi Home.
      </p>
      <IntroFeature
        platform="FAQ"
        title="Your Questions Answered"
        description="Explore our FAQ section for quick answers."
        checkPoints={[
          {
            title: 'Common Issues',
            description: 'Solutions to frequent problems.',
          },
          {
            title: 'Product Information',
            description: 'Details about our products.',
          },
        ]}
        imageUrl="/path/to/image.jpg" // Provide the correct image URL
      />
      <Button>Start Discovering</Button>
    </div>
  );
}
