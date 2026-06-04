import type { Lang } from '../types';

export type TranslationKey =
  | 'prototype_disclaimer'
  | 'prototype_short'
  | 'nav_menu'
  | 'nav_family'
  | 'nav_location'
  | 'nav_faq'
  | 'order_btn'
  | 'reserve_btn'
  | 'hero_headline'
  | 'hero_subheadline'
  | 'hero_trust1'
  | 'hero_trust2'
  | 'hero_trust3'
  | 'hero_cta_order'
  | 'hero_cta_reserve'
  | 'bestseller_title'
  | 'bestseller_subtitle'
  | 'menu_title'
  | 'menu_subtitle'
  | 'menu_tab_bestseller'
  | 'menu_tab_mains'
  | 'menu_tab_soup'
  | 'menu_tab_vegetables'
  | 'menu_tab_snacks'
  | 'menu_tab_drinks'
  | 'menu_cta'
  | 'menu_pricing_note'
  | 'menu_spice_none'
  | 'menu_spice_mild'
  | 'menu_spice_medium'
  | 'menu_spice_hot'
  | 'menu_allergen_peanut'
  | 'menu_allergen_seafood'
  | 'menu_add_wa'
  | 'family_title'
  | 'family_subtitle'
  | 'family_cta'
  | 'social_title'
  | 'social_subtitle'
  | 'social_rating_label'
  | 'social_review_note'
  | 'social_cta'
  | 'location_title'
  | 'location_subtitle'
  | 'location_address_label'
  | 'location_hours_label'
  | 'location_hours_value'
  | 'location_phone_label'
  | 'location_maps_cta'
  | 'location_call_cta'
  | 'location_ig_cta'
  | 'location_cta'
  | 'faq_title'
  | 'faq_subtitle'
  | 'faq_cta_confirm'
  | 'faq_cta_btn'
  | 'final_title'
  | 'final_subtitle'
  | 'final_cta_order'
  | 'final_cta_reserve'
  | 'footer_tagline'
  | 'footer_disclaimer'
  | 'footer_hours'
  | 'footer_address'
  | 'footer_links_title'
  | 'footer_proto_note'
  | 'footer_copyright';

type Translations = Record<TranslationKey, string>;

const id: Translations = {
  prototype_disclaimer:
    'Website ini adalah PROTOTYPE untuk demo. Bukan situs resmi. Harga, menu, lokasi, & kontak hanya contoh.',
  prototype_short: 'Prototype / Demo',

  nav_menu: 'Menu',
  nav_family: 'Paket Keluarga',
  nav_location: 'Lokasi',
  nav_faq: 'FAQ',
  order_btn: 'Pesan via WhatsApp',
  reserve_btn: 'Reservasi',

  hero_headline: 'Cita Rasa Nusantara, Langsung ke Hati',
  hero_subheadline:
    'Masakan rumahan Indonesia, hangat, kaya rempah, bikin kangen. Resep turun-temurun dari Ibu Ratna Kartasari.',
  hero_trust1: 'Resep Turun-Temurun',
  hero_trust2: 'Halal-Friendly',
  hero_trust3: 'Buka 10:00–22:00 WIB',
  hero_cta_order: 'Pesan Sekarang via WhatsApp',
  hero_cta_reserve: 'Reservasi Meja',

  bestseller_title: 'Menu Terlaris',
  bestseller_subtitle: 'Pilihan favorit pelanggan setia kami, disiapkan dengan resep otentik setiap hari.',

  menu_title: 'Daftar Menu Lengkap',
  menu_subtitle: 'Dari hidangan utama hingga minuman segar, semua dibuat dengan bahan segar pilihan.',
  menu_tab_bestseller: 'Terlaris',
  menu_tab_mains: 'Nasi & Lauk',
  menu_tab_soup: 'Sup & Kuah',
  menu_tab_vegetables: 'Sayuran',
  menu_tab_snacks: 'Camilan',
  menu_tab_drinks: 'Minuman',
  menu_cta: 'Pesan via WhatsApp',
  menu_pricing_note: 'Harga contoh (prototype). Ketersediaan bisa berubah.',
  menu_spice_none: 'Tidak Pedas',
  menu_spice_mild: 'Agak Pedas',
  menu_spice_medium: 'Pedas Sedang',
  menu_spice_hot: 'Sangat Pedas',
  menu_allergen_peanut: 'Kacang',
  menu_allergen_seafood: 'Seafood',
  menu_add_wa: 'Tambah ke WhatsApp',

  family_title: 'Paket Keluarga',
  family_subtitle:
    'Hemat lebih banyak dengan paket spesial kami. Cocok untuk makan bersama keluarga atau teman.',
  family_cta: 'Pesan Paket via WhatsApp',

  social_title: 'Kata Mereka',
  social_subtitle: 'Dipercaya ratusan keluarga Jakarta setiap harinya.',
  social_rating_label: '4.8/5 (Demo) · 1.200+ ulasan (Demo)',
  social_review_note: 'Ulasan ini contoh untuk prototype.',
  social_cta: 'Pesan via WhatsApp',

  location_title: 'Lokasi & Jam Buka',
  location_subtitle: 'Kami siap menyambut Anda di Kemang, Jakarta Selatan.',
  location_address_label: 'Alamat',
  location_hours_label: 'Jam Buka',
  location_hours_value: 'Setiap hari, 10:00–22:00 WIB',
  location_phone_label: 'Telepon',
  location_maps_cta: 'Lihat di Google Maps',
  location_call_cta: 'Hubungi Kami',
  location_ig_cta: 'Instagram Kami',
  location_cta: 'Pesan via WhatsApp',

  faq_title: 'Pertanyaan Umum',
  faq_subtitle: 'Ada pertanyaan? Kami siap membantu.',
  faq_cta_confirm: 'Chat WhatsApp untuk konfirmasi.',
  faq_cta_btn: 'Chat WhatsApp',

  final_title: 'Siap Menikmati Masakan Nusantara?',
  final_subtitle:
    'Pesan sekarang via WhatsApp atau reservasi meja Anda. Sambal segar dibuat setiap hari, jangan sampai kehabisan!',
  final_cta_order: 'Pesan Sekarang via WhatsApp',
  final_cta_reserve: 'Reservasi Meja',

  footer_tagline: 'Masakan rumahan Indonesia, hangat, kaya rempah, bikin kangen.',
  footer_disclaimer:
    'Website ini adalah PROTOTYPE untuk demo. Bukan situs resmi. Harga, menu, lokasi, & kontak hanya contoh.',
  footer_hours: 'Senin–Minggu, 10:00–22:00 WIB',
  footer_address: 'Jl. Kemang Raya No. 10, Jakarta Selatan',
  footer_links_title: 'Tautan Cepat',
  footer_proto_note: 'Prototype / Demo | Bukan situs resmi.',
  footer_copyright: '© 2024 Dapur Pusaka Nusantara. Prototype untuk tujuan demo.',
};

const en: Translations = {
  prototype_disclaimer:
    'This website is a PROTOTYPE for demo purposes. Not an official site. Prices, menu, location & contacts are placeholders.',
  prototype_short: 'Prototype / Demo',

  nav_menu: 'Menu',
  nav_family: 'Family Sets',
  nav_location: 'Location',
  nav_faq: 'FAQ',
  order_btn: 'Order via WhatsApp',
  reserve_btn: 'Reserve',

  hero_headline: 'The Taste of Nusantara, Straight from the Heart',
  hero_subheadline:
    'Indonesian comfort food, warm, spice-rich, and nostalgic. Heritage family recipes from Ibu Ratna Kartasari.',
  hero_trust1: 'Heritage Family Recipes',
  hero_trust2: 'Halal-Friendly',
  hero_trust3: 'Open 10:00 AM–10:00 PM',
  hero_cta_order: 'Order Now via WhatsApp',
  hero_cta_reserve: 'Reserve a Table',

  bestseller_title: 'Best Sellers',
  bestseller_subtitle: "Our customers' top picks, prepared fresh daily with authentic recipes.",

  menu_title: 'Full Menu',
  menu_subtitle: 'From mains to refreshing drinks, everything made with fresh, hand-selected ingredients.',
  menu_tab_bestseller: 'Best Seller',
  menu_tab_mains: 'Rice & Mains',
  menu_tab_soup: 'Soup & Broth',
  menu_tab_vegetables: 'Vegetables',
  menu_tab_snacks: 'Snacks',
  menu_tab_drinks: 'Drinks',
  menu_cta: 'Order via WhatsApp',
  menu_pricing_note: 'Sample prices (prototype). Availability may vary.',
  menu_spice_none: 'Not Spicy',
  menu_spice_mild: 'Mildly Spicy',
  menu_spice_medium: 'Medium Spicy',
  menu_spice_hot: 'Very Spicy',
  menu_allergen_peanut: 'Peanuts',
  menu_allergen_seafood: 'Seafood',
  menu_add_wa: 'Add to WhatsApp',

  family_title: 'Family Sets',
  family_subtitle:
    'Save more with our special bundles, perfect for sharing meals with family or friends.',
  family_cta: 'Order Set via WhatsApp',

  social_title: 'What They Say',
  social_subtitle: 'Trusted by hundreds of Jakarta families every day.',
  social_rating_label: '4.8/5 (Demo) · 1,200+ reviews (Demo)',
  social_review_note: 'These reviews are sample for the prototype.',
  social_cta: 'Order via WhatsApp',

  location_title: 'Location & Hours',
  location_subtitle: "We're waiting for you in Kemang, South Jakarta.",
  location_address_label: 'Address',
  location_hours_label: 'Hours',
  location_hours_value: 'Every day, 10:00 AM – 10:00 PM WIB',
  location_phone_label: 'Phone',
  location_maps_cta: 'View on Google Maps',
  location_call_cta: 'Call Us',
  location_ig_cta: 'Our Instagram',
  location_cta: 'Order via WhatsApp',

  faq_title: 'Frequently Asked Questions',
  faq_subtitle: "Have questions? We're here to help.",
  faq_cta_confirm: 'Chat on WhatsApp to confirm.',
  faq_cta_btn: 'Chat on WhatsApp',

  final_title: 'Ready to Enjoy Indonesian Comfort Food?',
  final_subtitle:
    'Order now via WhatsApp or reserve your table. Fresh sambal made daily, order before it runs out!',
  final_cta_order: 'Order Now via WhatsApp',
  final_cta_reserve: 'Reserve a Table',

  footer_tagline: 'Indonesian comfort food, warm, spice-rich, and nostalgic.',
  footer_disclaimer:
    'This website is a PROTOTYPE for demo purposes. Not an official site. Prices, menu, location & contacts are placeholders.',
  footer_hours: 'Mon–Sun, 10:00 AM – 10:00 PM WIB',
  footer_address: 'Jl. Kemang Raya No. 10, South Jakarta',
  footer_links_title: 'Quick Links',
  footer_proto_note: 'Prototype / Demo | Not an official site.',
  footer_copyright: '© 2024 Dapur Pusaka Nusantara. Prototype for demo purposes.',
};

const translations: Record<Lang, Translations> = { id, en };

export function t(lang: Lang, key: TranslationKey): string {
  return translations[lang][key] ?? key;
}
