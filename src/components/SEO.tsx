import { Helmet } from 'react-helmet-async';
import { useLang } from '../contexts/LanguageContext';
import { t } from '../data/translations';
import { faqItems, allMenuItems } from '../data/menu';
import { heritageStories } from '../data/heritage';

export default function SEO() {
  const { lang } = useLang();

  // 1. Basic Metadata
  const title = t(lang, 'hero_headline') + ' | Dapur Pusaka Nusantara';
  const description = t(lang, 'hero_subheadline');
  const siteUrl = 'https://dapurpusakanusantara.com'; // Hypothetical for prototype

  // 2. Structured Data: Restaurant Entity
  const restaurantSchema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    'name': 'Dapur Pusaka Nusantara',
    'image': 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200',
    '@id': siteUrl,
    'url': siteUrl,
    'telephone': '+622155550000',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Jl. Kemang Raya No. 10',
      'addressLocality': 'Jakarta Selatan',
      'addressRegion': 'DKI Jakarta',
      'postalCode': '12730',
      'addressCountry': 'ID',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': -6.2575, // Sample coordinates for Kemang
      'longitude': 106.8183,
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
      ],
      'opens': '10:00',
      'closes': '22:00',
    },
    'servesCuisine': ['Indonesian', 'Traditional', 'Halal-friendly'],
    'priceRange': 'RP',
    'acceptsReservations': 'True',
    'hasMenu': `${siteUrl}#menu`,
    'knowsAbout': heritageStories.map(s => lang === 'id' ? s.titleId : s.titleEn),
  };

  // 3. Structured Data: FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqItems.map((item) => ({
      '@type': 'Question',
      'name': lang === 'id' ? item.questionId : item.questionEn,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': (lang === 'id' ? item.answerIdLines : item.answerEnLines).join(' '),
      },
    })),
  };

  // 4. Structured Data: Local Menu Items
  const menuSchema = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    'name': 'Main Menu',
    'mainEntityOfPage': `${siteUrl}#menu`,
    'hasMenuItem': allMenuItems.slice(0, 10).map((item) => ({
      '@type': 'MenuItem',
      'name': lang === 'id' ? item.nameId : item.nameEn,
      'description': lang === 'id' ? item.descId : item.descEn,
      'offers': {
        '@type': 'Offer',
        'price': item.price,
        'priceCurrency': 'IDR',
      },
    })),
  };

  // 5. Structured Data: Articles/Heritage
  const heritageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': heritageStories.map((story, idx) => ({
      '@type': 'ListItem',
      'position': idx + 1,
      'item': {
        '@type': 'Article',
        'headline': lang === 'id' ? story.titleId : story.titleEn,
        'image': story.imageUrl,
        'dateModified': story.lastUpdated,
        'author': {
          '@type': 'Organization',
          'name': 'Dapur Pusaka Nusantara'
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'Dapur Pusaka Nusantara',
          'logo': 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'
        }
      }
    }))
  };

  return (
    <Helmet>
      {/* Dynamic Title & Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Social */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={lang === 'id' ? 'id_ID' : 'en_US'} />

      {/* JSON-LD Structured Data Injection */}
      <script type="application/ld+json">
        {JSON.stringify(restaurantSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(menuSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(heritageSchema)}
      </script>
    </Helmet>
  );
}
