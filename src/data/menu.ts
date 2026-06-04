import type { MenuItem, AddOn, FamilySet, Testimonial, FaqItem } from '../types';

export const menuItems: MenuItem[] = [
  {
    id: 'rendang',
    nameId: 'Rendang Sapi',
    nameEn: 'Beef Rendang',
    descId: 'Daging sapi slow-cooked dalam santan & 40 rempah pilihan hingga kering dan meresap.',
    descEn: 'Slow-cooked beef in coconut milk with 40 selected spices until tender and deeply flavored.',
    price: 68000,
    spice: 2,
    allergens: [],
    tabs: ['bestseller', 'mains'],
  },
  {
    id: 'nasigoreng',
    nameId: 'Nasi Goreng Kampung',
    nameEn: 'Village Fried Rice',
    descId: 'Nasi goreng dengan kecap, bawang merah, dan telur ceplok, resep kampung yang tak lekang waktu.',
    descEn: 'Fried rice with sweet soy sauce, shallots, and a fried egg, a timeless village recipe.',
    price: 38000,
    spice: 1,
    allergens: [],
    tabs: ['bestseller', 'mains'],
  },
  {
    id: 'sate',
    nameId: 'Sate Ayam + Lontong',
    nameEn: 'Chicken Satay + Rice Cake',
    descId: 'Sate ayam bakar arang, disajikan dengan lontong dan saus kacang homemade yang gurih.',
    descEn: 'Charcoal-grilled chicken satay served with rice cake and homemade peanut sauce.',
    price: 45000,
    spice: 1,
    allergens: ['peanut'],
    tabs: ['bestseller', 'mains'],
  },
  {
    id: 'soto',
    nameId: 'Soto Ayam',
    nameEn: 'Chicken Soto',
    descId: 'Sup kuning ayam bening dengan soun, telur, dan taburan bawang goreng yang wangi.',
    descEn: 'Clear yellow chicken soup with glass noodles, egg, and fragrant crispy shallots.',
    price: 32000,
    spice: 0,
    allergens: [],
    tabs: ['bestseller', 'soup'],
  },
  {
    id: 'bakso',
    nameId: 'Bakso Urat',
    nameEn: 'Tendon Meatballs',
    descId: 'Bakso sapi berbumbu dengan isi urat kenyal, disajikan dalam kaldu bening gurih.',
    descEn: 'Spiced beef meatballs with chewy tendon, served in a savory clear broth.',
    price: 32000,
    spice: 0,
    allergens: [],
    tabs: ['bestseller', 'soup'],
  },
  {
    id: 'gadogado',
    nameId: 'Gado-Gado',
    nameEn: 'Gado-Gado Salad',
    descId: 'Sayuran segar rebus, tahu, tempe, dan telur dengan saus kacang khas Betawi.',
    descEn: 'Blanched fresh vegetables, tofu, tempeh, and egg with authentic Betawi peanut sauce.',
    price: 30000,
    spice: 1,
    allergens: ['peanut'],
    tabs: ['bestseller', 'vegetables'],
  },
  {
    id: 'ayampenyet',
    nameId: 'Ayam Penyet Sambal',
    nameEn: 'Smashed Chicken & Sambal',
    descId: 'Ayam goreng dipenyet dengan sambal ulek harian segar, terasi, dan lalapan renyah.',
    descEn: 'Fried chicken smashed and served with freshly made ulek sambal, terasi, and crispy greens.',
    price: 42000,
    spice: 3,
    allergens: [],
    tabs: ['bestseller', 'mains'],
  },
  {
    id: 'rawon',
    nameId: 'Rawon Daging',
    nameEn: 'Black Beef Soup (Rawon)',
    descId: 'Sup daging sapi khas Jawa Timur dengan kluwek, warna hitam pekat, dan cita rasa dalam.',
    descEn: 'East Javanese black beef soup with keluak nut, deeply flavorful and earthy.',
    price: 48000,
    spice: 1,
    allergens: [],
    tabs: ['mains', 'soup'],
  },
  {
    id: 'nasicampur',
    nameId: 'Nasi Campur Nusantara',
    nameEn: 'Nusantara Mixed Rice',
    descId: 'Nasi dengan aneka lauk pilihan: rendang, tempe, sayur, dan sambal dalam satu piring.',
    descEn: 'Rice served with a selection of sides: rendang, tempeh, vegetables, and sambal in one plate.',
    price: 55000,
    spice: 1,
    allergens: [],
    tabs: ['mains'],
  },
  {
    id: 'gudeg',
    nameId: 'Gudeg Jogja',
    nameEn: 'Yogyakarta Gudeg',
    descId: 'Nangka muda dimasak santan berjam-jam, disajikan dengan ayam, krecek, dan sambal goreng.',
    descEn: 'Young jackfruit slow-cooked in coconut milk, served with chicken, krecek, and fried sambal.',
    price: 40000,
    spice: 0,
    allergens: [],
    tabs: ['mains', 'vegetables'],
  },
];

export const addOns: AddOn[] = [
  { id: 'sambal', nameId: 'Sambal Extra', nameEn: 'Extra Sambal', price: 6000 },
  { id: 'kerupuk', nameId: 'Kerupuk', nameEn: 'Crackers', price: 5000 },
  { id: 'nasi', nameId: 'Nasi Putih', nameEn: 'Steamed Rice', price: 8000 },
  { id: 'esteh', nameId: 'Es Teh Manis', nameEn: 'Iced Sweet Tea', price: 12000 },
  { id: 'esjeruk', nameId: 'Es Jeruk', nameEn: 'Iced Orange Juice', price: 15000 },
];

export const drinkItems: MenuItem[] = [
  {
    id: 'esteh_menu',
    nameId: 'Es Teh Manis',
    nameEn: 'Iced Sweet Tea',
    descId: 'Teh hitam diseduh segar, disajikan dingin dengan gula aren pilihan.',
    descEn: 'Freshly brewed black tea, served chilled with palm sugar.',
    price: 12000,
    spice: 0,
    allergens: [],
    tabs: ['drinks'],
  },
  {
    id: 'esjeruk_menu',
    nameId: 'Es Jeruk',
    nameEn: 'Iced Orange Juice',
    descId: 'Jeruk peras segar, manis asam alami, menyegarkan di cuaca panas.',
    descEn: 'Fresh-squeezed orange juice, naturally sweet and tangy, perfect for the heat.',
    price: 15000,
    spice: 0,
    allergens: [],
    tabs: ['drinks'],
  },
];

export const snackItems: MenuItem[] = [
  {
    id: 'kerupuk_menu',
    nameId: 'Kerupuk Udang',
    nameEn: 'Prawn Crackers',
    descId: 'Kerupuk udang renyah, cocok sebagai pendamping hidangan utama.',
    descEn: 'Crispy prawn crackers, perfect as a side to any main dish.',
    price: 8000,
    spice: 0,
    allergens: ['seafood'],
    tabs: ['snacks'],
  },
];

export const allMenuItems: MenuItem[] = [...menuItems, ...drinkItems, ...snackItems];

export const familySets: FamilySet[] = [
  {
    id: 'family4',
    nameId: 'Paket Keluarga Ber-4',
    nameEn: 'Family Set for 4',
    descId: 'Lengkap untuk makan bersama keluarga kecil Anda.',
    descEn: 'Complete for a small family meal together.',
    price: 220000,
    itemsId: [
      'Rendang Sapi (2 porsi)',
      'Ayam Penyet Sambal (2 porsi)',
      '4 Nasi Putih',
      '1 Sayur Pilihan',
      '4 Es Teh Manis',
      'Bonus Sambal Kecil',
    ],
    itemsEn: [
      'Beef Rendang (2 servings)',
      'Smashed Chicken & Sambal (2 servings)',
      '4 Steamed Rice',
      '1 Vegetable Side',
      '4 Iced Sweet Tea',
      'Bonus Sambal',
    ],
    badge: 'Paling Populer',
  },
  {
    id: 'family6',
    nameId: 'Paket Keluarga Ber-6',
    nameEn: 'Family Set for 6',
    descId: 'Untuk keluarga besar atau makan bersama rekan kerja.',
    descEn: 'Perfect for a larger family or an office lunch together.',
    price: 320000,
    itemsId: [
      'Rendang Sapi (3 porsi)',
      'Sate Ayam + Lontong (3 porsi)',
      '6 Nasi Putih',
      '2 Sayur Pilihan',
      '6 Minuman Pilihan',
    ],
    itemsEn: [
      'Beef Rendang (3 servings)',
      'Chicken Satay + Rice Cake (3 servings)',
      '6 Steamed Rice',
      '2 Vegetable Sides',
      '6 Choice of Drinks',
    ],
  },
  {
    id: 'couple',
    nameId: 'Paket Hemat Berdua',
    nameEn: 'Couple Set',
    descId: 'Pilihan sempurna untuk makan berdua yang hemat dan kenyang.',
    descEn: 'The perfect choice for a satisfying meal for two.',
    price: 120000,
    itemsId: [
      'Nasi Goreng Kampung (1 porsi)',
      'Soto Ayam (1 porsi)',
      '2 Minuman Pilihan',
    ],
    itemsEn: [
      'Village Fried Rice (1 serving)',
      'Chicken Soto (1 serving)',
      '2 Choice of Drinks',
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    nameId: 'Dian Kusuma',
    nameEn: 'Dian Kusuma',
    textId:
      'Rendang di sini beneran bikin kangen masakan ibu di Solo. Bumbunya meresap sempurna, dagingnya empuk. Sudah jadi langganan setiap minggu!',
    textEn:
      "The rendang here truly reminds me of my mom's cooking back in Solo. The spices are perfectly absorbed, the meat so tender. I'm a weekly regular now!",
    rating: 5,
    locationId: 'Pelanggan Tetap · Jakarta Selatan',
    locationEn: 'Regular Customer · South Jakarta',
  },
  {
    id: 't2',
    nameId: 'Budi Santoso',
    nameEn: 'Budi Santoso',
    textId:
      'Paket keluarga ber-4 selalu jadi pilihan kami saat weekend. Porsinya pas, harganya bersahabat, dan pengirimannya cepat via WhatsApp. Highly recommended!',
    textEn:
      "The family set for 4 is always our go-to on weekends. Portions are just right, prices are friendly, and WhatsApp ordering is so fast. Highly recommended!",
    rating: 5,
    locationId: 'Pelanggan Tetap · Kemang',
    locationEn: 'Regular Customer · Kemang',
  },
  {
    id: 't3',
    nameId: 'Siti Rahayu',
    nameEn: 'Siti Rahayu',
    textId:
      'Ayam penyet sambel uleknya juara banget. Pedasnya pas, lalapannya segar. Ibu Ratna juga ramah sekali saat saya pesan lewat WhatsApp. Terima kasih!',
    textEn:
      'The smashed chicken with ulek sambal is absolutely top-notch. The spice level is perfect, the greens are fresh. Ibu Ratna was also so warm when I ordered via WhatsApp. Thank you!',
    rating: 5,
    locationId: 'Pelanggan Baru · Fatmawati',
    locationEn: 'New Customer · Fatmawati',
  },
];

export const faqItems: FaqItem[] = [
  {
    id: 'f1',
    questionId: 'Apakah Dapur Pusaka Nusantara melayani pesanan katering untuk acara atau kantor?',
    questionEn: 'Does Dapur Pusaka Nusantara provide catering for events or offices?',
    answerIdLines: [
      'Tentu! Kami melayani pesanan katering dan office catering.',
      'Harap hubungi kami minimal 1 hari sebelumnya untuk memastikan ketersediaan.',
      'Chat WhatsApp untuk konfirmasi.',
    ],
    answerEnLines: [
      'Absolutely! We accommodate catering and office orders.',
      'Please contact us at least 1 day in advance to ensure availability.',
      'Chat WhatsApp to confirm.',
    ],
  },
  {
    id: 'f2',
    questionId: 'Apakah ada pilihan menu yang tidak pedas di Dapur Pusaka Nusantara?',
    questionEn: 'Are there non-spicy menu options available at Dapur Pusaka Nusantara?',
    answerIdLines: [
      'Ya! Beberapa menu kami seperti Soto Ayam, Bakso Urat, dan Gudeg Jogja tidak pedas.',
      'Kami juga bisa menyesuaikan tingkat kepedasan sesuai permintaan.',
      'Chat WhatsApp untuk konfirmasi.',
    ],
    answerEnLines: [
      "Yes! Some of our dishes like Chicken Soto, Tendon Meatballs, and Gudeg are not spicy.",
      'We can also adjust spice levels upon request.',
      'Chat WhatsApp to confirm.',
    ],
  },
  {
    id: 'f3',
    questionId: 'Bisakah saya mencantumkan catatan alergi makanan saat memesan di Dapur Pusaka Nusantara?',
    questionEn: 'Can I include food allergy notes when ordering from Dapur Pusaka Nusantara?',
    answerIdLines: [
      'Tentu, Anda bisa menuliskan catatan alergi di kolom "Catatan" pada formulir pesan.',
      'Kami akan melakukan yang terbaik untuk membantu, namun harap diperhatikan bahwa dapur kami menggunakan bahan-bahan umum termasuk kacang dan udang.',
      'Chat WhatsApp untuk konfirmasi.',
    ],
    answerEnLines: [
      "Absolutely, you can note allergy information in the 'Notes' field of the order form.",
      'We will do our best to accommodate, but please note our kitchen uses common ingredients including peanuts and seafood.',
      'Chat WhatsApp to confirm.',
    ],
  },
  {
    id: 'f4',
    questionId: 'Area pengiriman mana saja di Jakarta yang dilayani oleh Dapur Pusaka Nusantara?',
    questionEn: 'Which delivery areas in Jakarta does Dapur Pusaka Nusantara serve?',
    answerIdLines: [
      'Kami melayani area Kemang, Fatmawati, Cilandak, Pondok Indah, dan sekitarnya.',
      'Untuk area di luar tersebut, silakan tanyakan ketersediaan.',
      'Chat WhatsApp untuk konfirmasi.',
    ],
    answerEnLines: [
      'We serve Kemang, Fatmawati, Cilandak, Pondok Indah, and surrounding areas.',
      'For areas outside this range, please inquire about availability.',
      'Chat WhatsApp to confirm.',
    ],
  },
  {
    id: 'f5',
    questionId: 'Berapa lama rata-rata waktu persiapan pesanan di Dapur Pusaka Nusantara?',
    questionEn: 'What is the average preparation time for an order at Dapur Pusaka Nusantara?',
    answerIdLines: [
      'Untuk dine-in dan pickup, umumnya 15–25 menit.',
      'Untuk delivery, harap tambahkan waktu estimasi pengiriman dari lokasi Anda.',
      'Pesanan katering membutuhkan minimal 1 hari persiapan.',
      'Chat WhatsApp untuk konfirmasi.',
    ],
    answerEnLines: [
      'For dine-in and pickup, generally 15–25 minutes.',
      'For delivery, please add estimated travel time from our location.',
      'Catering orders require at least 1 day of preparation.',
      'Chat WhatsApp to confirm.',
    ],
  },
  {
    id: 'f6',
    questionId: 'Bisakah reservasi mendadak atau kurang dari 1 jam sebelumnya?',
    questionEn: 'Can I make a last-minute reservation under 1 hour in advance?',
    answerIdLines: [
      'Kami akan berusaha mengakomodasi, namun tidak bisa menjamin ketersediaan meja.',
      'Reservasi lebih awal sangat disarankan, terutama di akhir pekan.',
      'Chat WhatsApp untuk konfirmasi.',
    ],
    answerEnLines: [
      "We'll try to accommodate, but cannot guarantee table availability.",
      'Earlier reservations are strongly recommended, especially on weekends.',
      'Chat WhatsApp to confirm.',
    ],
  },
  {
    id: 'f7',
    questionId: 'Metode pembayaran apa yang diterima?',
    questionEn: 'What payment methods are accepted?',
    answerIdLines: [
      'Catatan: Ini adalah website prototype, tidak ada pembayaran online nyata.',
      'Untuk pemesanan nyata, metode pembayaran akan dikonfirmasi via WhatsApp.',
      'Chat WhatsApp untuk konfirmasi.',
    ],
    answerEnLines: [
      'Note: This is a prototype website, no real online payments.',
      'For actual orders, payment methods will be confirmed via WhatsApp.',
      'Chat WhatsApp to confirm.',
    ],
  },
  {
    id: 'f8',
    questionId: 'Apakah harga sudah termasuk pajak?',
    questionEn: 'Are prices inclusive of tax?',
    answerIdLines: [
      'Harga yang tertera adalah harga contoh untuk prototype.',
      'Informasi pajak akan dikonfirmasi pada saat pemesanan nyata.',
      'Chat WhatsApp untuk konfirmasi.',
    ],
    answerEnLines: [
      'Listed prices are sample prices for this prototype.',
      'Tax information will be confirmed at the time of actual ordering.',
      'Chat WhatsApp to confirm.',
    ],
  },
  {
    id: 'f9',
    questionId: 'Apakah seluruh makanan di Dapur Pusaka Nusantara dijamin halal?',
    questionEn: 'Is all the food at Dapur Pusaka Nusantara guaranteed to be halal-friendly?',
    answerIdLines: [
      'Ya, kami berkomitmen untuk menyajikan masakan yang halal-friendly.',
      'Seluruh bahan baku kami dipilih dengan ketat.',
      'Chat WhatsApp untuk konfirmasi lebih lanjut.',
    ],
    answerEnLines: [
      'Yes, we are committed to serving halal-friendly food.',
      'All our ingredients are carefully selected.',
      'Chat WhatsApp for further confirmation.',
    ],
  },
  {
    id: 'f10',
    questionId: 'Apakah orang tua bisa meminta penyesuaian menu untuk anak-anak?',
    questionEn: 'Can parents request kid-friendly menu customizations?',
    answerIdLines: [
      'Tentu! Kami bisa menyesuaikan porsi dan mengurangi atau menghilangkan sambal untuk menu anak.',
      'Cukup sebutkan di kolom catatan saat memesan.',
      'Chat WhatsApp untuk konfirmasi.',
    ],
    answerEnLines: [
      'Absolutely! We can adjust portions and reduce or omit sambal for kids.',
      "Just mention it in the notes field when ordering.",
      'Chat WhatsApp to confirm.',
    ],
  },
];
