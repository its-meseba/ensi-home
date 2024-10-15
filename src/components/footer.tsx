import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-primary-foreground mt-auto w-full bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">Ensi Home</h3>
            <p className="text-sm">
              Akıllı ev sistemleri için yenilikçi çözümler sunan lider teknoloji
              şirketi.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Button
                  variant="link"
                  className="text-primary-foreground h-auto p-0"
                  asChild
                >
                  <a href="/ensi-home">Anasayfa</a>
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  className="text-primary-foreground h-auto p-0"
                  asChild
                >
                  <a href="/ensi-home/ai-voice-assistant">AI Sesli Asistan</a>
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  className="text-primary-foreground h-auto p-0"
                  asChild
                >
                  <a href="/ensi-home/box">Ensi Box</a>
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  className="text-primary-foreground h-auto p-0"
                  asChild
                >
                  <a href="/ensi-home/mobile-application">Mobil Uygulama</a>
                </Button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">İletişim</h3>
            <p className="text-sm">
              AYAZAĞA MAH. KEMERBURGAZ CAD. VADI ISTANBUL PARK SİTESİ 7A BLOK
              NO: 7B. KAT 2. SOLACE. SARIYER / İSTANBUL [^3]
            </p>
            <p className="mt-2 text-sm">Email: solace@solace.com.tr [^3]</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Bizi Takip Edin</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Facebook">
                  <Facebook className="size-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="size-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Instagram">
                  <Instagram className="size-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="size-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <Separator className="bg-primary-foreground/20 my-6" />
        <div className="flex flex-col items-center justify-between text-sm md:flex-row">
          <p>© {currentYear} Ensi Home. Tüm hakları saklıdır.</p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <Button
              variant="link"
              className="text-primary-foreground h-auto p-0"
              asChild
            >
              <a href="/privacy-policy">Gizlilik Politikası</a>
            </Button>
            <Button
              variant="link"
              className="text-primary-foreground h-auto p-0"
              asChild
            >
              <a href="/terms-of-service">Kullanım Şartları</a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
