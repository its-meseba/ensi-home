import { Button } from '@/components/ui/button';

export default function MobileAppPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-6 text-4xl font-bold">Ensi Home Mobile App</h1>
      <p className="mb-6 text-lg">
        Control your smart home from anywhere with our intuitive mobile
        application.
      </p>
      <Button>Download App</Button>
    </div>
  );
}
