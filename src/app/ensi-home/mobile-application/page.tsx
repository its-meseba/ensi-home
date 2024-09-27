import { IntroFeature } from '@/components/common/intro-feature'; // Import IntroFeature
import { Button } from '@/components/ui/button';

export default function MobileAppPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <IntroFeature
        platform="Mobile Application"
        title="Control Your Home"
        description="Manage your smart devices seamlessly with our mobile app."
        checkPoints={[
          {
            title: 'Remote Access',
            description: 'Control your devices from anywhere.',
          },
          {
            title: 'User-Friendly Interface',
            description: 'Navigate easily with our intuitive design.',
          },
        ]}
        imageUrl="/path/to/image.jpg" // Provide the correct image URL
      />
      <Button>Download App</Button>
    </div>
  );
}
