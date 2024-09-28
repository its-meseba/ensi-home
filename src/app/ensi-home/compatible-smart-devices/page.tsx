import { IntroFeature } from '@/components/common/intro-feature'; // Import IntroFeature
import { Button } from '@/components/ui/button';

export default function MobileAppPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <IntroFeature
        platform="Compatible Devices"
        title="Connect Your Smart Devices"
        description="Easily integrate a variety of smart devices with Ensi Home."
        checkPoints={[
          {
            title: 'Wide Compatibility',
            description: 'Supports numerous brands.',
          },
          {
            title: 'User-Friendly',
            description: 'Simple setup and management.',
          },
        ]}
        imageUrl="/path/to/image.jpg" // Provide the correct image URL
      />
      <Button>Download App</Button>
    </div>
  );
}
