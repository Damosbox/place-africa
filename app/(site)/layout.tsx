import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/common/WhatsAppFab";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="overflow-x-clip">{children}</main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
