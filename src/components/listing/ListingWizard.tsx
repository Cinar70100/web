'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  Banknote,
  Building2,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  Home,
  Layers,
  Loader2,
  MapPin,
  Rocket,
  ShieldCheck,
  Sparkles,
  Tag,
  UploadCloud,
} from 'lucide-react';
import Link from 'next/link';

const STEPS = [
  {
    id: 'category',
    title: 'Kategori Seçimi',
    description: 'İlanınızın ait olduğu ana kategori, alt kategori ve tip seçimini yapın.',
    icon: Layers,
  },
  {
    id: 'details',
    title: 'İlan Detayları',
    description: 'Başlık, açıklama, fiyat ve temel özellikleri girin.',
    icon: ClipboardList,
  },
  {
    id: 'doping',
    title: 'Doping',
    description: 'İlanınızı öne çıkaracak paketleri tercih edin.',
    icon: Sparkles,
  },
  {
    id: 'media',
    title: 'Görseller & Konum',
    description: 'Fotoğrafları yükleyin, video ekleyin ve konumu işaretleyin.',
    icon: UploadCloud,
  },
  {
    id: 'publish',
    title: 'Yayınla',
    description: 'Önizlemeyi kontrol edin ve ilanınızı yayınlayın.',
    icon: Rocket,
  },
] as const;

type StepId = (typeof STEPS)[number]['id'];

const STEP_SECTION_IDS: Record<StepId, string> = {
  category: 'kategori-secimi',
  details: 'ilan-detaylari',
  doping: 'doping',
  media: 'media',
  publish: 'publish',
};

const CATEGORY_TREE = [
  {
    id: 'emlak',
    name: 'Emlak',
    icon: Building2,
    children: [
      {
        id: 'konut',
        name: 'Konut',
        children: [
          { id: 'daire', name: 'Daire' },
          { id: 'rezidans', name: 'Rezidans' },
          { id: 'villa', name: 'Villa' },
          { id: 'mustakil', name: 'Müstakil Ev' },
          { id: 'ciftlik', name: 'Çiftlik Evi' },
          { id: 'koy', name: 'Köy Evi' },
        ],
      },
      {
        id: 'is-yeri',
        name: 'İş Yeri',
        children: [
          { id: 'dukkan', name: 'Dükkan' },
          { id: 'ofis', name: 'Ofis' },
          { id: 'atolye', name: 'Atölye' },
          { id: 'depo', name: 'Depo & Antrepo' },
        ],
      },
      {
        id: 'arsa',
        name: 'Arsa',
        children: [
          { id: 'tarla', name: 'Tarla' },
          { id: 'bag', name: 'Bağ & Bahçe' },
          { id: 'sanayi', name: 'Sanayi Arsası' },
          { id: 'konut-arsa', name: 'Konut Arsası' },
        ],
      },
      {
        id: 'gunluk-kiralik',
        name: 'Günlük Kiralık',
        children: [
          { id: 'apart', name: 'Apart' },
          { id: 'bungalov', name: 'Bungalov' },
          { id: 'yazlik', name: 'Yazlık' },
          { id: 'tiny', name: 'Tiny House' },
        ],
      },
    ],
  },
  {
    id: 'otomotiv',
    name: 'Otomotiv',
    icon: Tag,
    children: [
      {
        id: 'arac',
        name: 'Araç',
        children: [
          { id: 'otomobil', name: 'Otomobil' },
          { id: 'ticari', name: 'Ticari Araç' },
          { id: 'arazi', name: 'Arazi / SUV' },
          { id: 'motosiklet', name: 'Motosiklet' },
        ],
      },
      {
        id: 'kiralik-arac',
        name: 'Kiralık Araç',
        children: [
          { id: 'gunluk-arac', name: 'Günlük Kiralık Araç' },
          { id: 'uzun-donem', name: 'Uzun Dönem Kiralama' },
        ],
      },
    ],
  },
  {
    id: 'hizmet',
    name: 'Hizmet',
    icon: ShieldCheck,
    children: [
      {
        id: 'tadilat',
        name: 'Tadilat & Dekorasyon',
        children: [
          { id: 'boya', name: 'Boya Badana' },
          { id: 'mutfak', name: 'Mutfak Yenileme' },
          { id: 'banyo', name: 'Banyo Yenileme' },
        ],
      },
      {
        id: 'profesyonel',
        name: 'Profesyonel Hizmetler',
        children: [
          { id: 'avukat', name: 'Avukat' },
          { id: 'muhendis', name: 'Mühendislik' },
          { id: 'danisman', name: 'Emlak Danışmanı' },
        ],
      },
    ],
  },
] as const;

type CategoryNode = (typeof CATEGORY_TREE)[number];

type ChildNode = CategoryNode['children'][number];

type LeafNode = ChildNode['children'][number];

const BASIC_FEATURES = [
  'Merkezi Isıtma',
  'Sıcak Su',
  'Balkon',
  'Otopark',
  'Ebeveyn Banyosu',
  'Güvenlik',
  'Asansör',
  'Depo',
];

const SOCIAL_FEATURES = [
  'Oyun Parkı',
  'Yürüyüş Parkuru',
  'Spor Salonu',
  'Açık Yüzme Havuzu',
  'Kapalı Yüzme Havuzu',
  'Site İçi Servis',
  'Misafir Parkı',
];

const ENVIRONMENT_FEATURES = [
  'Market',
  'Eczane',
  'Okul',
  'Toplu Taşıma',
  'Park',
  'Cami',
  'Sağlık Ocağı',
];

const DOPING_PACKAGES = [
  {
    id: 'homepage-showcase',
    title: 'Anasayfa Vitrini',
    description: 'İlanınız 7 gün boyunca anasayfanın üst bölümünde vitrin alanında görünür.',
    price: '349,00 TL',
    badge: 'En Popüler',
  },
  {
    id: 'highlighted',
    title: 'Vurgulu Liste',
    description: 'Kategori sayfasında renkli arka plan ve rozet ile daha fazla dikkat çeker.',
    price: '189,00 TL',
  },
  {
    id: 'urgent',
    title: 'Acil İlan Rozeti',
    description: 'İlan başlığının yanında "Acil" etiketi ve kırmızı ikon çıkar.',
    price: '99,00 TL',
  },
];

const PAYMENT_OPTIONS = [
  { id: 'card', title: 'Kredi Kartı', description: '3D Secure ile güvenli ödeme yapın.', icon: CreditCard },
  { id: 'transfer', title: 'Banka Havalesi', description: 'Havale/EFT ile ödeme yapmak isteyenler için.', icon: Banknote },
  { id: 'office', title: 'Ofiste Ödeme', description: 'Karaman merkez ofisimizde yüz yüze ödeme.', icon: Home },
];

export default function ListingWizard() {
  const [activeStep, setActiveStep] = useState<StepId>('category');
  const [primaryCategoryId, setPrimaryCategoryId] = useState<CategoryNode['id']>(CATEGORY_TREE[0].id);
  const [secondaryCategoryId, setSecondaryCategoryId] = useState<ChildNode['id']>(CATEGORY_TREE[0].children[0].id);
  const [tertiaryCategoryId, setTertiaryCategoryId] = useState<LeafNode['id']>(
    CATEGORY_TREE[0].children[0].children[0].id,
  );

  const primaryCategory = useMemo(
    () => CATEGORY_TREE.find((category) => category.id === primaryCategoryId) ?? CATEGORY_TREE[0],
    [primaryCategoryId],
  );

  const secondaryCategories = primaryCategory.children ?? [];

  const secondaryCategory = useMemo(
    () => secondaryCategories.find((category) => category.id === secondaryCategoryId) ?? secondaryCategories[0],
    [secondaryCategories, secondaryCategoryId],
  );

  const tertiaryCategories = secondaryCategory?.children ?? [];

  useEffect(() => {
    if (!secondaryCategories.some((category) => category.id === secondaryCategoryId)) {
      const fallback = secondaryCategories[0];
      if (fallback) {
        setSecondaryCategoryId(fallback.id);
        if (fallback.children?.length) {
          setTertiaryCategoryId(fallback.children[0].id);
        }
      }
    }
  }, [secondaryCategories, secondaryCategoryId]);

  useEffect(() => {
    if (!tertiaryCategories.some((category) => category.id === tertiaryCategoryId)) {
      const fallback = tertiaryCategories[0];
      if (fallback) {
        setTertiaryCategoryId(fallback.id);
      }
    }
  }, [tertiaryCategories, tertiaryCategoryId]);

  const selectedCategoryLabel = `${primaryCategory?.name ?? ''} › ${secondaryCategory?.name ?? ''} › ${
    tertiaryCategories.find((item) => item.id === tertiaryCategoryId)?.name ?? ''
  }`;

  const handleStepSelect = (stepId: StepId) => {
    setActiveStep(stepId);
    const sectionId = STEP_SECTION_IDS[stepId];
    if (sectionId && typeof document !== 'undefined') {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-slate-50 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white">
        <div className="absolute inset-0 bg-[url(/patterns/grid.svg)] bg-cover bg-center opacity-20" aria-hidden="true" />
        <div className="container relative mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex rounded-full border border-white/40 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
              İlan Yayınla
            </p>
            <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
              Karaman’da dakikalar içinde ilanınızı yayınlayın
            </h1>
            <p className="mt-4 text-lg text-sky-100">
              Akıllı adım adım sihirbazımız ile doğru kategoriyi seçin, fotoğraflarınızı yükleyin ve ilanınızı
              güvenle yayına alın. Gerekirse Karaman Ev Bul ekibi her adımda yanınızda.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-sky-100/90">
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <CheckCircle2 className="h-4 w-4 text-lime-300" />
                Güvenli ödeme ve sözleşme onayı
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <ShieldCheck className="h-4 w-4 text-lime-300" />
                Kimlik doğrulaması & danışman desteği
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <Loader2 className="h-4 w-4 animate-spin text-white/70" />
                Ortalama yayın süresi 5 dakika
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-white/30 bg-blue-950/80 text-white">
        <div className="container mx-auto grid gap-4 px-4 py-4 md:grid-cols-5">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            const isActive = step.id === activeStep;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => handleStepSelect(step.id)}
                className={`rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:border-white/40 hover:bg-white/10 ${
                  isActive ? 'ring-2 ring-white/60' : ''
                }`}
                aria-current={isActive ? 'step' : undefined}
                aria-controls={STEP_SECTION_IDS[step.id]}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.25em] text-white/70">Adım {index + 1}</span>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <p className="mt-2 text-sm font-semibold text-white">{step.title}</p>
                <p className="mt-1 text-xs text-white/80">{step.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto -mt-12 px-4">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,1fr)]">
          <div className="space-y-10">
            <section
              id="kategori-secimi"
              className="rounded-3xl bg-white p-8 shadow-xl shadow-blue-950/5"
              onMouseEnter={() => setActiveStep('category')}
              onFocusCapture={() => setActiveStep('category')}
            >
              <header className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-6">
                <div>
                  <p className="text-sm font-medium text-blue-600">Adım 1</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-900">Kategori seçimini yapın</h2>
                  <p className="mt-2 text-sm text-slate-600">
                    Doğru kategoriyi seçmek, ilanınızın doğru kitleye ulaşmasının ilk adımıdır. Aşağıdaki çok seviyeli
                    menüden ihtiyacınıza uygun seçenekleri belirleyin.
                  </p>
                </div>
                <div className="rounded-2xl bg-blue-50 px-4 py-3 text-xs font-medium text-blue-600">
                  Seçili kategori: <span className="font-semibold">{selectedCategoryLabel}</span>
                </div>
              </header>

              <div className="mt-6 grid gap-6 lg:grid-cols-3">
                <CategoryColumn
                  label="Ana kategori"
                  description="İlanın ana türünü seçin"
                  options={CATEGORY_TREE.map((category) => ({
                    id: category.id,
                    name: category.name,
                    icon: category.icon,
                  }))}
                  selectedId={primaryCategoryId}
                  onSelect={(id) => setPrimaryCategoryId(id as CategoryNode['id'])}
                />

                <CategoryColumn
                  label="Alt kategori"
                  description="Daha spesifik bir alan seçin"
                  options={(secondaryCategories ?? []).map((category) => ({
                    id: category.id,
                    name: category.name,
                  }))}
                  selectedId={secondaryCategoryId}
                  onSelect={(id) => setSecondaryCategoryId(id as ChildNode['id'])}
                />

                <CategoryColumn
                  label="Kategori tipi"
                  description="İlanınızın tipini belirleyin"
                  options={(tertiaryCategories ?? []).map((category) => ({
                    id: category.id,
                    name: category.name,
                  }))}
                  selectedId={tertiaryCategoryId}
                  onSelect={(id) => setTertiaryCategoryId(id as LeafNode['id'])}
                />
              </div>
            </section>

            <section
              id="ilan-detaylari"
              className="rounded-3xl bg-white p-8 shadow-xl shadow-blue-950/5"
              onMouseEnter={() => setActiveStep('details')}
              onFocusCapture={() => setActiveStep('details')}
            >
              <header className="border-b border-slate-100 pb-6">
                <p className="text-sm font-medium text-blue-600">Adım 2</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">İlan detaylarını girin</h2>
                <p className="mt-2 text-sm text-slate-600">
                  İlan başlığınızı, açıklamalarınızı, fiyat ve temel bilgilerinizi girerek potansiyel alıcıların aradığı
                  bilgilere hızlıca ulaşmasını sağlayın.
                </p>
              </header>

              <div className="mt-6 space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <InputField label="İlan Başlığı" placeholder="Ör. Karaman Merkezde 3+1 Satılık Daire" />
                  <InputField label="Referans Kodu" placeholder="Opsiyonel" optional />
                </div>
                <TextareaField
                  label="İlan Açıklaması"
                  placeholder="İlanınızı öne çıkaracak bilgileri paylaşın. Konum, bina durumu, çevre olanakları ve öne çıkan avantajları detaylandırın."
                />
                <div className="grid gap-4 md:grid-cols-3">
                  <InputField label="İlan Fiyatı" placeholder="Ör. 2.750.000 TL" />
                  <InputField label="Metrekare" placeholder="Ör. 145 m²" />
                  <InputField label="Oda Sayısı" placeholder="Ör. 3+1" />
                </div>
                <div className="grid gap-4 md:grid-cols-4">
                  <InputField label="Bina Yaşı" placeholder="Ör. 5" />
                  <InputField label="Bulunduğu Kat" placeholder="Ör. 5" />
                  <InputField label="Isıtma Tipi" placeholder="Ör. Doğalgaz" />
                  <InputField label="Aidat" placeholder="Opsiyonel" optional />
                </div>
                <fieldset className="rounded-2xl border border-slate-200 p-6">
                  <legend className="px-2 text-sm font-semibold text-slate-800">Öne çıkan özellikler</legend>
                  <p className="mt-2 text-xs text-slate-500">
                    Bu özellikler ilan kartınızda rozet olarak gösterilir.
                  </p>
                  <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                    {BASIC_FEATURES.map((feature) => (
                      <label key={feature} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50">
                        <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                        {feature}
                      </label>
                    ))}
                  </div>
                </fieldset>
                <div className="grid gap-6 md:grid-cols-2">
                  <FeatureChecklist
                    label="Sosyal olanaklar"
                    description="Site içinde sunduğunuz ortak alanları seçin"
                    features={SOCIAL_FEATURES}
                  />
                  <FeatureChecklist
                    label="Çevre & ulaşım"
                    description="Yürüme mesafesindeki kritik noktalar"
                    features={ENVIRONMENT_FEATURES}
                  />
                </div>
              </div>
            </section>

            <section
              id="doping"
              className="rounded-3xl bg-white p-8 shadow-xl shadow-blue-950/5"
              onMouseEnter={() => setActiveStep('doping')}
              onFocusCapture={() => setActiveStep('doping')}
            >
              <header className="border-b border-slate-100 pb-6">
                <p className="text-sm font-medium text-blue-600">Adım 3</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">Doping paketleri ile öne çıkın</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Dilerseniz ilanınızı belirli sürelerle ön plana çıkarabilir, acil etiketleriyle daha hızlı geri dönüş
                  alabilirsiniz.
                </p>
              </header>

              <div className="mt-6 grid gap-6 md:grid-cols-3">
                {DOPING_PACKAGES.map((pkg) => (
                  <label
                    key={pkg.id}
                    className="group relative flex h-full cursor-pointer flex-col rounded-3xl border border-slate-200 bg-gradient-to-b from-white via-white to-slate-50 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10"
                  >
                    {pkg.badge ? (
                      <span className="absolute right-4 top-4 inline-flex rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                        {pkg.badge}
                      </span>
                    ) : null}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        className="mt-1 h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                        aria-label={`${pkg.title} paketini seç`}
                      />
                      <div>
                        <p className="text-base font-semibold text-slate-900">{pkg.title}</p>
                        <p className="mt-2 text-sm text-slate-600">{pkg.description}</p>
                      </div>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-6 text-sm font-semibold text-blue-600">
                      <span>{pkg.price}</span>
                      <Sparkles className="h-4 w-4" />
                    </div>
                  </label>
                ))}
              </div>
            </section>

            <section
              id="media"
              className="rounded-3xl bg-white p-8 shadow-xl shadow-blue-950/5"
              onMouseEnter={() => setActiveStep('media')}
              onFocusCapture={() => setActiveStep('media')}
            >
              <header className="border-b border-slate-100 pb-6">
                <p className="text-sm font-medium text-blue-600">Adım 4</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">Görseller ve konum bilgilerini ekleyin</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Kaliteli fotoğraflar ve doğru lokasyon bilgisi ilanınızın güvenilirliğini artırır. En az 5 fotoğraf
                  eklemenizi öneririz.
                </p>
              </header>

              <div className="mt-6 space-y-6">
                <div className="rounded-3xl border-2 border-dashed border-blue-200 bg-blue-50/60 p-8 text-center text-blue-700">
                  <UploadCloud className="mx-auto h-12 w-12 text-blue-500" />
                  <p className="mt-4 text-lg font-semibold">Fotoğraflarınızı sürükleyip bırakın</p>
                  <p className="mt-2 text-sm text-blue-700/80">
                    En fazla 30 fotoğraf, her biri maksimum 10 MB. JPEG, PNG ve HEIC formatlarını destekliyoruz.
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-3">
                    <label className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-blue-500">
                      Dosya Seç
                      <input type="file" className="hidden" multiple accept="image/*" />
                    </label>
                    <button type="button" className="rounded-full border border-blue-200 px-5 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300">
                      Galeriden Seç
                    </button>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <fieldset className="rounded-2xl border border-slate-200 p-6">
                    <legend className="px-2 text-sm font-semibold text-slate-800">Video & Sanal Tur</legend>
                    <div className="space-y-4">
                      <InputField label="Video URL" placeholder="YouTube veya Vimeo bağlantısı" />
                      <InputField label="Sanal Tur URL" placeholder="Matterport veya 360° tur bağlantısı" optional />
                    </div>
                  </fieldset>

                  <fieldset className="rounded-2xl border border-slate-200 p-6">
                    <legend className="px-2 text-sm font-semibold text-slate-800">Konum Bilgisi</legend>
                    <div className="grid gap-3 md:grid-cols-2">
                      <InputField label="İl" placeholder="Karaman" />
                      <InputField label="İlçe" placeholder="Merkez" />
                      <InputField label="Mahalle" placeholder="Ör. Alişahane" />
                      <InputField label="Adres" placeholder="Cadde, sokak ve bina no" />
                    </div>
                    <button type="button" className="mt-4 inline-flex items-center gap-2 rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300">
                      <MapPin className="h-4 w-4" />
                      Harita Üzerinde Konum Seç
                    </button>
                  </fieldset>
                </div>
              </div>
            </section>

            <section
              id="publish"
              className="rounded-3xl bg-white p-8 shadow-xl shadow-blue-950/5"
              onMouseEnter={() => setActiveStep('publish')}
              onFocusCapture={() => setActiveStep('publish')}
            >
              <header className="border-b border-slate-100 pb-6">
                <p className="text-sm font-medium text-blue-600">Adım 5</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">Ödeme ve yayınlama</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Ödeme yöntemini seçip ilanınızı önizledikten sonra onaylayın. Yayın öncesi tüm bilgileri tekrar
                  kontrol etmek için özet panelinden yararlanabilirsiniz.
                </p>
              </header>

              <div className="mt-6 grid gap-6 md:grid-cols-3">
                {PAYMENT_OPTIONS.map((option) => {
                  const Icon = option.icon;
                  return (
                    <label
                      key={option.id}
                      className="flex cursor-pointer flex-col gap-3 rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10"
                    >
                      <div className="flex items-center gap-3">
                        <input type="radio" name="payment" className="h-5 w-5 border-slate-300 text-blue-600 focus:ring-blue-500" />
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-slate-900">{option.title}</p>
                        <p className="mt-2 text-sm text-slate-600">{option.description}</p>
                      </div>
                    </label>
                  );
                })}
              </div>

              <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6 text-sm text-blue-700">
                <p className="font-semibold">Son kontrol</p>
                <p className="mt-2">
                  "Önizlemeyi Aç" butonu ile ilanınızı ziyaretçilerinizin göreceği şekilde görüntüleyin. Her şey hazır
                  olduğunda "Yayınla" butonuna tıklayarak ilanınızı aktif hale getirebilirsiniz.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button type="button" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-100">
                    Önizlemeyi Aç
                  </button>
                  <button type="button" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-blue-500">
                    İlanı Yayınla
                  </button>
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28">
            <div className="rounded-3xl border border-blue-100 bg-white/70 p-6 shadow-lg shadow-blue-500/10 backdrop-blur">
              <h3 className="text-lg font-semibold text-slate-900">İlan özeti</h3>
              <p className="mt-2 text-sm text-slate-600">
                Formu doldurdukça bilgileriniz burada canlı olarak özetlenecek. Şu an için varsayılan bilgileri
                görmektesiniz.
              </p>
              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex items-start justify-between gap-3">
                  <dt className="text-slate-500">Kategori</dt>
                  <dd className="text-right font-medium text-slate-800">{selectedCategoryLabel}</dd>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <dt className="text-slate-500">İlan Başlığı</dt>
                  <dd className="text-right font-medium text-slate-800">Karaman Merkezde 3+1 Satılık Daire</dd>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <dt className="text-slate-500">Fiyat</dt>
                  <dd className="text-right font-medium text-slate-800">2.750.000 TL</dd>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <dt className="text-slate-500">Öne Çıkan Özellikler</dt>
                  <dd className="text-right font-medium text-slate-800">Merkezi Isıtma, Balkon, Otopark</dd>
                </div>
              </dl>
              <div className="mt-6 rounded-2xl bg-blue-50 p-4 text-sm text-blue-700">
                <p className="font-semibold">İpucu</p>
                <p className="mt-2">
                  Fotoğraflarınızı gün ışığında ve yüksek çözünürlükte çekmek ilanınızın daha fazla görüntülenmesini
                  sağlar.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Destek & Yardım</h3>
              <p className="mt-2 text-sm text-slate-600">
                İlan yayınlama sürecinde desteğe ihtiyaç duyarsanız, uzman ekibimiz size yardımcı olmak için hazır.
              </p>
              <div className="mt-4 space-y-3 text-sm">
                <Link href="tel:+903382030707" className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-slate-700 transition hover:border-blue-200 hover:text-blue-600">
                  <span>Çağrı Merkezi</span>
                  <span className="font-semibold">0 (338) 203 07 07</span>
                </Link>
                <Link href="mailto:destek@karamanevbul.com" className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-slate-700 transition hover:border-blue-200 hover:text-blue-600">
                  <span>E-posta</span>
                  <span className="font-semibold">destek@karamanevbul.com</span>
                </Link>
                <Link href="/yardim" className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3 text-slate-700 transition hover:border-blue-200 hover:text-blue-600">
                  <span>Yardım Merkezi</span>
                  <span className="font-semibold">SSS</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

type CategoryColumnProps = {
  label: string;
  description: string;
  options: { id: string; name: string; icon?: React.ComponentType<{ className?: string }>; }[];
  selectedId: string;
  onSelect: (id: string) => void;
};

function CategoryColumn({ label, description, options, selectedId, onSelect }: CategoryColumnProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-5">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{label}</p>
        <p className="mt-1 text-sm text-slate-600">{description}</p>
      </div>
      <div className="space-y-2">
        {options.map((option) => {
          const Icon = option.icon;
          const isSelected = option.id === selectedId;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelect(option.id)}
              className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition ${
                isSelected
                  ? 'border-blue-400 bg-white text-blue-700 shadow shadow-blue-200'
                  : 'border-transparent bg-white/70 text-slate-700 hover:border-blue-200 hover:bg-white'
              }`}
            >
              <span className="flex items-center gap-3">
                {Icon ? <Icon className="h-4 w-4 text-blue-500" /> : null}
                <span className="text-sm font-semibold">{option.name}</span>
              </span>
              <CheckCircle2
                className={`h-5 w-5 transition ${isSelected ? 'text-blue-500' : 'text-slate-300'}`}
                aria-hidden="true"
              />
            </button>
          );
        })}
        {options.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-slate-200 bg-white/70 px-4 py-6 text-center text-sm text-slate-500">
            Bu kategori için seçenek bulunamadı.
          </p>
        ) : null}
      </div>
    </div>
  );
}

type InputFieldProps = {
  label: string;
  placeholder?: string;
  optional?: boolean;
};

function InputField({ label, placeholder, optional }: InputFieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold text-slate-700">
        {label}
        {optional ? <span className="ml-2 text-xs font-medium text-slate-400">(Opsiyonel)</span> : null}
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
      />
    </label>
  );
}

type TextareaFieldProps = {
  label: string;
  placeholder?: string;
  optional?: boolean;
};

function TextareaField({ label, placeholder, optional }: TextareaFieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold text-slate-700">
        {label}
        {optional ? <span className="ml-2 text-xs font-medium text-slate-400">(Opsiyonel)</span> : null}
      </span>
      <textarea
        rows={5}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
      />
    </label>
  );
}

type FeatureChecklistProps = {
  label: string;
  description?: string;
  features: string[];
};

function FeatureChecklist({ label, description, features }: FeatureChecklistProps) {
  return (
    <fieldset className="rounded-2xl border border-slate-200 p-6">
      <legend className="px-2 text-sm font-semibold text-slate-800">{label}</legend>
      {description ? <p className="mt-2 text-xs text-slate-500">{description}</p> : null}
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {features.map((feature) => (
          <label
            key={feature}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50"
          >
            <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
            {feature}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
