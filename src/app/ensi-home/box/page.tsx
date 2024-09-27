// import { IntroHeaderWithModel } from '@/components/common/intro-header';
import { IntroFeatureWithModel } from '@/components/common/intro-feature'; // Import IntroFeatureWithModel component
import { Case1 } from '@/components/common/sliding-cases';

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
        title="Our Partners"
        logos={logos}
        interval={3000} // Adjust the interval as needed
      />
    </div>
  );
}
