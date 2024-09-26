import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="text-muted-foreground mt-auto w-full py-4 text-center text-sm">
      © {new Date().getFullYear()} By{' '}
      <Button variant="link" className="p-0" asChild>
        <a href="https://ensihome.com/">Ensi Home</a>
      </Button>
    </footer>
  );
};
