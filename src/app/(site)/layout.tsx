import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50/40">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
