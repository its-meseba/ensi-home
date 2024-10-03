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

// Purpose: To present the AI Voice Assistant and its capabilities.

// Components:

// Hero Section:

// Headline: "Interact Naturally with Our AI Voice Assistant"
// Background Image: Illustration of a user speaking to a device.
// Assistant Overview:

// Explain the assistant's role in the ecosystem.
// Key Features:

// Natural language understanding.
// Multilingual support.
// Integration with all smart devices.
// Demonstration:

// Interactive component using AiAssistant to showcase voice commands.
// Benefits:

// Hands-free control.
// Accessibility.
// Personalization.
// Visuals:

// Videos or animations demonstrating use cases.
// Call to Action:

// CTA Button: "Learn More About Our AI Solutions" - links to contact or demo.
