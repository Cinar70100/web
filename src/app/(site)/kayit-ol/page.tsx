import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  MailCheck,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Üye Ol",
  description:
    "Karaman Ev Bul'a hemen üye olun, ilanlarınızı profesyonel araçlarla yönetin ve yeni müşterilere ulaşın.",
};

const membershipOptions = [
  {
    id: "bireysel",
    title: "Bireysel Üyelik",
    description: "Tekil ilan verenler için hızlı başvuru ve temel istatistik takibi.",
    icon: ShieldCheck,
    perks: ["Sınırsız ilan taslağı", "Favorilere ekleme", "Temel raporlama"],
  },
  {
    id: "kurumsal",
    title: "Kurumsal Üyelik",
    description: "Emlak ofisleri için ekip yönetimi ve gelişmiş entegrasyonlar.",
    icon: Building2,
    perks: ["Çoklu danışman", "API entegrasyonu", "Öncelikli destek"],
  },
];

const reassurance = [
  {
    icon: MailCheck,
    title: "7/24 destek",
    description: "Canlı destek ekibimiz her adımda yanınızda.",
  },
  {
    icon: Smartphone,
    title: "Mobil uyumlu panel",
    description: "Tüm işlemleri telefonunuzdan dahi yönetebilirsiniz.",
  },
  {
    icon: CheckCircle2,
    title: "Güvenli ödeme",
    description: "KVKK ve 3D Secure uyumlu ödeme altyapısı.",
  },
];

export default function RegisterPage() {
  return (
    <div className="relative isolate overflow-hidden pb-16 pt-10 sm:pt-16">
      <div className="absolute inset-x-0 top-[-10%] -z-10 transform-gpu overflow-hidden blur-3xl">
        <div
          className="mx-auto aspect-[1155/678] w-[72rem] bg-gradient-to-tr from-blue-500 via-sky-400 to-cyan-300 opacity-20"
          style={{
            clipPath:
              "polygon(26% 12%, 74% 5%, 100% 30%, 94% 68%, 65% 100%, 32% 92%, 0 66%, 4% 30%)",
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)] lg:px-8">
        <section className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-8 text-slate-100 shadow-xl">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
              Üyelik avantajları
            </span>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Karaman Ev Bul topluluğuna katılın, ilanlarınızı modern panel ile yönetin.
            </h1>
            <p className="max-w-xl text-base text-slate-200/80">
              Eski sistemde kullandığınız tüm fonksiyonlar daha hızlı, güvenli ve esnek bir Next.js altyapısına taşındı. Şimdi
              kayıt olun, portföyünüzü dakikalar içinde yayına hazırlayın.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {reassurance.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <item.icon className="mb-3 h-5 w-5 text-blue-200" />
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-200/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-slate-200/70">
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider">
              <CheckCircle2 className="h-4 w-4 text-emerald-300" />
              Kayıt sonrası ücretsiz onboarding
            </div>
            <div className="flex items-center gap-2 text-sm">
              <ShieldCheck className="h-5 w-5 text-blue-200" />
              <span>KVKK uyumlu veri saklama</span>
            </div>
          </div>
        </section>

        <section className="flex items-stretch">
          <div className="w-full rounded-3xl bg-white p-6 shadow-2xl shadow-blue-900/10 ring-1 ring-slate-200/80 sm:p-8">
            <header className="space-y-2 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">3 adımda üyelik</p>
              <h2 className="text-2xl font-semibold text-slate-900">Yeni hesap oluşturun</h2>
              <p className="text-sm text-slate-500">
                Bilgilerinizi girin, üyelik tipinizi seçin ve aktivasyon e-postasını onaylayın.
              </p>
            </header>

            <form className="mt-8 space-y-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="fullName" className="text-sm font-medium text-slate-700">
                    Ad Soyad
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
                    placeholder="Örn. Mehmet Kara"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">
                    E-posta Adresi
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
                    placeholder="ornek@karamanevbul.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                    Telefon Numarası
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
                    placeholder="5XX XXX XX XX"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="text-sm font-medium text-slate-700">
                    Firma / Ofis Adı
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
                    placeholder="İsteğe bağlı"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="text-sm font-medium text-slate-700">
                    Şifre
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
                    placeholder="••••••••"
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="text-sm font-medium text-slate-700">
                    Şifre (Tekrar)
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <fieldset className="space-y-3">
                <legend className="text-sm font-semibold text-slate-800">Üyelik Tipi</legend>
                <p className="text-xs text-slate-500">
                  Eski sistemdeki üyelik bilgileriniz otomatik aktarılacaktır. Yeni üyeler için paket seçimi aşağıdan yapılır.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {membershipOptions.map((option) => (
                    <label
                      key={option.id}
                      htmlFor={option.id}
                      className="group relative flex cursor-pointer flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-500 hover:bg-white"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-600">
                            <option.icon className="h-5 w-5" />
                          </span>
                          <span className="text-sm font-semibold text-slate-900">{option.title}</span>
                        </div>
                        <input
                          id={option.id}
                          name="membership"
                          type="radio"
                          value={option.id}
                          className="h-4 w-4 border-blue-200 text-blue-600 focus:ring-blue-500"
                          defaultChecked={option.id === "bireysel"}
                        />
                      </div>
                      <p className="text-xs text-slate-500">{option.description}</p>
                      <ul className="space-y-1 text-xs text-slate-500">
                        {option.perks.map((perk) => (
                          <li key={perk} className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                            <span>{perk}</span>
                          </li>
                        ))}
                      </ul>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="space-y-3 text-xs text-slate-500">
                <label className="flex items-start gap-3 text-left">
                  <input type="checkbox" name="kvkk" required className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                  <span>
                    <strong className="text-slate-700">KVKK Aydınlatma Metni</strong> ve <strong className="text-slate-700">Üyelik Sözleşmesi</strong>ni okudum, kabul ediyorum.
                  </span>
                </label>
                <label className="flex items-start gap-3 text-left">
                  <input type="checkbox" name="marketing" className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                  <span>Yeni özellikler ve kampanyalar hakkında bilgilendirme almak istiyorum.</span>
                </label>
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:from-blue-500 hover:via-sky-500 hover:to-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                Kayıt Formunu Gönder
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>

            <footer className="mt-8 space-y-3 text-center text-xs text-slate-500">
              <p>
                Zaten hesabınız var mı? {""}
                <Link href="/giris-yap" className="font-semibold text-blue-600 hover:text-blue-500">
                  Hemen giriş yapın
                </Link>
              </p>
              <p>
                Yardım mı lazım? <Link href="tel:+903382255555" className="font-semibold text-slate-700">0 (338) 225 55 55</Link> numaralı ofis hattımızı arayabilir ya da
                <Link href="mailto:destek@karamanevbul.com" className="font-semibold text-slate-700"> destek@karamanevbul.com</Link> adresine e-posta gönderebilirsiniz.
              </p>
            </footer>
          </div>
        </section>
      </div>
    </div>
  );
}
