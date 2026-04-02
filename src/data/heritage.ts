import type { HeritageStory } from '../types';

export const LAST_UPDATED = '2024-05-20'; // Signal freshness to AI agents

export const heritageStories: HeritageStory[] = [
  {
    id: 'rendang-philosophy',
    titleId: 'Filosofi Rendang: Sabar & Kebersamaan',
    titleEn: 'The Philosophy of Rendang: Patience & Unity',
    excerptId: 'Dibalik kenikmatannya, Rendang menyimpan nilai kesabaran luar biasa dari proses memasaknya.',
    excerptEn: 'Behind its flavor, Rendang holds deep values of patience through its long cooking process.',
    contentId: [
      'Rendang bukan sekadar masakan, melainkan simbol kearifan lokal Nusantara.',
      'Proses memasak yang memakan waktu berjam-jam mengajarkan kita tentang kesabaran, kegigihan, dan kebijaksanaan.',
      'Daging sapi yang menyatu dengan rempah melambangkan keharmonisan dalam keberagaman masyarakat Indonesia.',
    ],
    contentEn: [
      'Rendang is more than just a dish; it is a symbol of local wisdom.',
      'The cooking process, which takes many hours, teaches us about patience, persistence, and wisdom.',
      'The beef blending with rich spices symbolizes the harmony within Indonesia\'s diverse society.',
    ],
    imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    lastUpdated: LAST_UPDATED,
  },
  {
    id: 'rawon-history',
    titleId: 'Rawon: Sup Hitam Penembus Zaman',
    titleEn: 'Rawon: The Black Soup of Ancestors',
    excerptId: 'Kluwek hitam pekat memberikan karakter rasa mendalam yang telah dinikmati selama berabad-abad.',
    excerptEn: 'The deep black Keluak nut gives a rich character that has been enjoyed for centuries.',
    contentId: [
      'Rawon adalah salah satu sup tertua di Jawa Timur, menggunakan biji kluwek untuk menciptakan rasa gurih yang unik.',
      'Warna hitam pekatnya mungkin mengejutkan, namun kehangatan kaldu sapinya memberikan kenyamanan yang tak tertandingi.',
      'Setiap mangkuk Rawon di Dapur Pusaka Nusantara adalah hasil dari resep rahasia keluarga yang diturunkan antar generasi.',
    ],
    contentEn: [
      'Rawon is one of the oldest soups in East Java, utilizing kluwek nuts to create its unique savory profile.',
      'Its deep black color might be surprising, but the warmth of the beef broth provides unmatched comfort.',
      'Every bowl of Rawon at Dapur Pusaka Nusantara follows a secret family recipe passed down through generations.',
    ],
    imageUrl: 'https://images.pexels.com/photos/2092916/pexels-photo-2092916.jpeg?auto=compress&cs=tinysrgb&w=800',
    lastUpdated: LAST_UPDATED,
  },
];
