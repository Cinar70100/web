import React from 'react'; 
import {
  LayoutDashboard,
  Settings,
  List,
  Megaphone,
  Columns,
  LayoutList,
  Users,
  UserCog,
  FileText,
  Languages,
  HelpCircle,
  ShieldAlert,
  Building,
  ShoppingCart,
  Map,
  Newspaper,
  Book,
  ClipboardList,
  Landmark, 
  PictureInPicture, // GÜNCELLEME: Virgül eklendi
  Cog, 
  BarChart2, 
  // GÜNCELLEME: Fazladan alt çizgi (_) karakteri kaldırıldı
} from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
  icon?: React.ReactNode; 
  children?: NavItem[];
}

// Tam menü yapısı
export const navigationData: NavItem[] = [
  {
    title: 'Yönetici Paneli',
    href: '/dashboard',
    icon: <LayoutDashboard size={18} />, 
  },
  {
    title: 'Ayarlar',
    href: '/dashboard/ayarlar',
    icon: <Settings size={18} />, 
    children: [
      { title: 'Güncelleme Kontrolü', href: '/dashboard/ayarlar/guncelleme' },
      { title: 'Site Ayarları', href: '/dashboard/ayarlar/site' },
      { title: 'Renk Ayarları', href: '/dashboard/ayarlar/renk' },
      { title: 'Bağlantı Ayarları', href: '/dashboard/ayarlar/baglanti' },
      { title: 'Ana Sayfa Ayarları', href: '/dashboard/ayarlar/anasayfa' },
      { title: 'Resim Ayarları', href: '/dashboard/ayarlar/resim' },
      { title: 'Üye Ayarları', href: '/dashboard/ayarlar/uye' },
      { title: 'İlan Ayarları', href: '/dashboard/ayarlar/ilan' },
      { title: 'İletişim Ayarları', href: '/dashboard/ayarlar/iletisim' },
      { title: 'Sosyal Ağ Ayarları', href: '/dashboard/ayarlar/sosyal-ag' },
      { 
        title: 'Ücret Ayarları', 
        href: '/dashboard/ayarlar/ucret', 
        children: [
           { title: 'Emlak Ofisi Ücretleri', href: '/dashboard/ayarlar/ucret/emlak-ofisi' },
        ]
      }, 
    ],
  },
  {
    title: 'İlan Yönetimi',
    href: '/dashboard/ilan-yonetimi',
    icon: <List size={18} />, 
    children: [
      { title: 'Tüm İlanlar', href: '/dashboard/ilanlar' },
      { title: 'Onay Bekleyen İlanlar', href: '/dashboard/ilanlar/onay-bekleyen' },
      { title: 'Acil İlanlar', href: '/dashboard/ilanlar/acil' },
      { title: 'Fiyatı Düşen İlanlar', href: '/dashboard/ilanlar/fiyati-dusen' },
      { title: 'Süresi Biten İlanlar', href: '/dashboard/ilanlar/suresi-biten' },
    ],
  },
  {
    title: 'Reklam Yönetimi',
    href: '/dashboard/reklam-yonetimi',
    icon: <Megaphone size={18} />, 
    children: [
      { title: 'Reklam Ekle', href: '/dashboard/reklam/yeni' },
      { title: 'Tüm Reklamlar', href: '/dashboard/reklam' },
      { title: 'Süresi Biten Reklamlar', href: '/dashboard/reklam/suresi-biten' },
    ],
  },
  {
    title: 'Özel Alan Yönetimi',
    href: '/dashboard/ozel-alan-yonetimi',
    icon: <Columns size={18} />, 
    children: [
      { title: 'Özel Alan Ekle', href: '/dashboard/ozel-alan/yeni' },
      { title: 'Tüm Özel Alanlar', href: '/dashboard/ozel-alan' },
    ],
  },
  {
    title: 'Kategori Yönetimi',
    href: '/dashboard/kategori-yonetimi',
    icon: <LayoutList size={18} />, 
    children: [
      { title: 'Yeni Ana Kategori Ekle', href: '/dashboard/kategori/yeni' },
      { title: 'Tüm Kategoriler', href: '/dashboard/kategori' },
    ],
  },
  {
    title: 'Üye Yönetimi',
    href: '/dashboard/uye-yonetimi',
    icon: <Users size={18} />, 
    children: [
      { title: 'Tüm Üyeler', href: '/dashboard/uyeler' },
      { title: 'Engellenen Üyeler', href: '/dashboard/uyeler/engellenen' },
      { title: 'Onaysız Üyeler', href: '/dashboard/uyeler/onaysiz' },
    ],
  },
  {
    title: 'Yönetici Yönetimi',
    href: '/dashboard/yonetici-yonetimi',
    icon: <UserCog size={18} />, 
    children: [
      { title: 'Yönetici Ekle', href: '/dashboard/yoneticiler/yeni' },
      { title: 'Tüm Yöneticiler', href: '/dashboard/yoneticiler' },
    ],
  },
  {
    title: 'Sayfa Yönetimi',
    href: '/dashboard/sayfa-yonetimi',
    icon: <FileText size={18} />, 
    children: [
      { title: 'Sayfa Ekle', href: '/dashboard/sayfalar/yeni' },
      { title: 'Tüm Sayfalar', href: '/dashboard/sayfalar' },
    ],
  },
  {
    title: 'Dil Yönetimi',
    href: '/dashboard/dil-yonetimi',
    icon: <Languages size={18} />, 
    children: [
      { title: 'Dil Ekle', href: '/dashboard/diller/yeni' },
      { title: 'Tüm Diller', href: '/dashboard/diller' },
    ],
  },
  {
    title: 'Yardım İçerik Yönetimi',
    href: '/dashboard/yardim-yonetimi',
    icon: <HelpCircle size={18} />, 
    children: [
      { title: 'Yardım İçeriği Ekle', href: '/dashboard/yardim/yeni' },
      { title: 'Tüm Yardım İçerikleri', href: '/dashboard/yardim' },
    ],
  },
  {
    title: 'Şikayet Yönetimi',
    href: '/dashboard/sikayet-yonetimi',
    icon: <ShieldAlert size={18} />, 
    children: [
      { title: 'Tüm İlan Şikayetleri', href: '/dashboard/sikayetler' },
    ],
  },
  {
    title: 'Emlak Ofisi Yönetimi',
    href: '/dashboard/emlak-ofisi-yonetimi',
    icon: <Building size={18} />, 
    children: [
      { title: 'Tüm Emlak Ofisleri', href: '/dashboard/ofisler' },
      { title: 'Süresi Biten Emlak Ofisleri', href: '/dashboard/ofisler/suresi-biten' },
    ],
  },
  {
    title: 'Sipariş Yönetimi',
    href: '/dashboard/siparis-yonetimi',
    icon: <ShoppingCart size={18} />, 
    children: [
      { title: 'Tüm Siparişler', href: '/dashboard/siparisler' },
      { title: 'Ödenmeyen Siparişler', href: '/dashboard/siparisler/odenmeyen' },
    ],
  },
  {
    title: 'Bölge Yönetimi',
    href: '/dashboard/bolge-yonetimi',
    icon: <Map size={18} />, 
    children: [
      { title: 'Bölge Ekle', href: '/dashboard/bolgeler/yeni' },
      { title: 'Tüm Bölgeler', href: '/dashboard/bolgeler' },
    ],
  },
  {
    title: 'Haber Yönetimi',
    href: '/dashboard/haber-yonetimi',
    icon: <Newspaper size={18} />, 
    children: [
      { title: 'Haber Kategorileri', href: '/dashboard/haber-kategorileri' },
      { title: 'Haber Ekle', href: '/dashboard/haberler/yeni' },
      { title: 'Tüm Haberler', href: '/dashboard/haberler' },
    ],
  },
  {
    title: 'Proje Yönetimi',
    href: '/dashboard/proje-yonetimi',
    icon: <Landmark size={18} />, 
    children: [
      { title: 'Proje Ekle', href: '/dashboard/projeler/yeni' },
      { title: 'Tüm Projeler', href: '/dashboard/projeler' },
    ],
  },
  {
    title: 'Slayt Yönetimi',
    href: '/dashboard/slayt-yonetimi',
    icon: <PictureInPicture size={18} />, 
    children: [
      { title: 'Slayt Ekle', href: '/dashboard/slaytlar/yeni' },
      { title: 'Tüm Slaytlar', href: '/dashboard/slaytlar' },
    ],
  },
  {
    title: 'Araçlar',
    href: '/dashboard/araclar',
    icon: <Cog size={18} />, 
    children: [
      { title: 'Üyelere E-Mail Gönder', href: '/dashboard/araclar/email-gonder' },
      { title: 'Üyelere SMS Gönder', href: '/dashboard/araclar/sms-gonder' },
      { title: 'Site Haritası Oluştur', href: '/dashboard/araclar/sitemap' },
      { title: 'News Site Haritası', href: '/dashboard/araclar/news-sitemap' },
      { title: 'Önbellek Temizle', href: '/dashboard/araclar/cache' },
      { title: 'İlanları Dışa Aktar', href: '/dashboard/araclar/disa-aktar' },
      { title: 'İlanları İçe Aktar', href: '/dashboard/araclar/ice-aktar' },
    ],
  },
  {
    title: 'İstatistikler',
    href: '/dashboard/istatistikler',
    icon: <BarChart2 size={18} />, 
    children: [
      { title: 'Genel İstatistikler', href: '/dashboard/istatistikler/genel' },
      { title: 'Ziyaretçi İstatistikleri', href: '/dashboard/istatistikler/ziyaretci' },
      { title: 'Sipariş İstatistikleri', href: '/dashboard/istatistikler/siparis' },
      { title: 'İlan İstatistikleri', href: '/dashboard/istatistikler/ilan' },
    ],
  },
];