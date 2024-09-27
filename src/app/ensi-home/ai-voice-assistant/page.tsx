import { IntroFeature } from '@/components/common/intro-feature'; // Import IntroFeature
import { Button } from '@/components/ui/button';

export default function DiscoverPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <IntroFeature
        platform="AI Voice Assistant"
        title="Voice Control at Your Fingertips"
        description="Experience seamless voice control with Ensi Home."
        checkPoints={[
          { title: 'Easy Setup', description: 'Get started in minutes.' },
          {
            title: 'Smart Integration',
            description: 'Works with your favorite devices.',
          },
        ]}
        imageUrl="/path/to/image.jpg" // Provide the correct image URL
      />
      <Button>Start Discovering</Button>
    </div>
  );
}
