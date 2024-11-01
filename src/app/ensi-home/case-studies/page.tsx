// Purpose: To detail the features and benefits of the Ensi Home Box (the brain device/hub).

// Components:

// Hero Section:

// Headline: "Ensi Home Box - The Brain of Smart Living"
// Background Image: 3D rendering of the Ensi Home Box.
// Product Overview:

// Describe what the Ensi Home Box is and its role.
// Emphasize its importance in the smart home ecosystem.
// Key Features:

// List features such as:
// Centralized control.
// High compatibility.
// Secure connectivity.
// Scalability.
// Technical Specifications:

// Provide detailed specs for technical teams.
// Downloadable PDF with full specifications.
// Integration Process:

// Explain how the box is installed during construction.
// Highlight ease of integration.
// Visuals:

// Interactive 3D model using GLTFViewer component.
// Images of the box in various settings.
// Call to Action:

// CTA Button: "Contact Us for Technical Details" - links to /contact/

import { IntroFeatureWithModel } from '@/components/common/intro-feature'; // Import IntroFeatureWithModel component
import { Case1 } from '@/components/common/sliding-cases';
import * as m from '@/paraglide/messages'; // Import messages

const logos = [
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  '/images/logo/small.svg',
  // Add more logo paths as needed
];

export default function BoxPage() {
  return (
    <div>
      <IntroFeatureWithModel
        platform="Smart Home"
        title="Unlock Your Home's Potential"
        description="Experience the future of home automation with Ensi Home Box."
        checkPoints={[
          {
            title: 'Seamless Integration',
            description: 'Integrate all your smart devices effortlessly.',
          },
          {
            title: 'Voice Control',
            description: 'Control your home with just your voice.',
          },
          {
            title: 'Real-time Monitoring',
            description: "Stay informed about your home's status in real-time.",
          },
        ]}
        modelUrl="/assets/models/ensi-home-box.glb" // Add the model URL
      />
      <Case1
        title={m.ensi_case_studies_our_partners()}
        logos={logos}
        interval={3000} // Adjust the interval as needed
      />
    </div>
  );
}
