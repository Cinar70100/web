import type { Metadata } from "next";
import ListingWizard from "@/components/listing/ListingWizard";

export const metadata: Metadata = {
  title: "İlan Ver | Karaman Ev Bul",
  description:
    "Karaman Ev Bul ilan sihirbazı ile dakikalar içinde kategori seçin, detayları girin ve ilanınızı yayınlayın. Güvenli ödeme seçenekleri ve profesyonel destek.",
};

export default function CreateListingPage() {
  return <ListingWizard />;
}
