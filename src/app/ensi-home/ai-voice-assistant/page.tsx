import { IntroFeatureWithRiveModel } from '@/components/common/intro-feature'; // Import IntroFeature
import AiAssistant from '@/components/pages/box/ai-assistant';
import { Button } from '@/components/ui/button';

export default function DiscoverPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <IntroFeatureWithRiveModel
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
      />
      <Button>Start Discovering</Button>
      <AiAssistant />
    </div>
  );
}
