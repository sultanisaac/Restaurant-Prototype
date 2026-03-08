import type { Lang } from '../types';

const WA_NUMBER = '6281234567890';

function buildUrl(text: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function getOrderUrl(lang: Lang, itemName?: string): string {
  if (lang === 'id') {
    const text = itemName
      ? `Halo Dapur Pusaka Nusantara, saya mau pesan:\n- Menu: ${itemName} (qty 1)\nMetode: Pickup / Dine-in / Delivery\nTanggal & jam: __\nNama: __\nAlamat (jika delivery): __\nCatatan: __`
      : `Halo Dapur Pusaka Nusantara, saya mau pesan:\n- Menu: __ (qty __)\nMetode: Pickup / Dine-in / Delivery\nTanggal & jam: __\nNama: __\nAlamat (jika delivery): __\nCatatan: __`;
    return buildUrl(text);
  }
  const text = itemName
    ? `Hi Dapur Pusaka Nusantara, I'd like to order:\n- Item: ${itemName} (qty 1)\nMethod: Pickup / Dine-in / Delivery\nDate & time: __\nName: __\nAddress (if delivery): __\nNotes: __`
    : `Hi Dapur Pusaka Nusantara, I'd like to order:\n- Item: __ (qty __)\nMethod: Pickup / Dine-in / Delivery\nDate & time: __\nName: __\nAddress (if delivery): __\nNotes: __`;
  return buildUrl(text);
}

export function getReservationUrl(lang: Lang): string {
  if (lang === 'id') {
    const text = `Halo, saya mau reservasi:\nTanggal: __ | Jam: __ | Orang: __\nNama: __ | Catatan (alergi/acara): __`;
    return buildUrl(text);
  }
  const text = `Hi, I'd like to reserve:\nDate: __ | Time: __ | Guests: __\nName: __ | Notes (allergies/event): __`;
  return buildUrl(text);
}

export function getFamilySetOrderUrl(lang: Lang, setName: string): string {
  if (lang === 'id') {
    const text = `Halo Dapur Pusaka Nusantara, saya mau pesan:\n- Paket: ${setName}\nMetode: Pickup / Dine-in / Delivery\nTanggal & jam: __\nNama: __\nAlamat (jika delivery): __\nCatatan: __`;
    return buildUrl(text);
  }
  const text = `Hi Dapur Pusaka Nusantara, I'd like to order:\n- Set: ${setName}\nMethod: Pickup / Dine-in / Delivery\nDate & time: __\nName: __\nAddress (if delivery): __\nNotes: __`;
  return buildUrl(text);
}

export const PHONE_NUMBER = '+62 21 5555 0000';
export const PHONE_RAW = '+622155550000';
export const MAPS_URL = 'https://maps.google.com/?q=Dapur+Pusaka+Nusantara+Kemang';
export const IG_URL = 'https://instagram.com/dapurpusaka.nusantara';
