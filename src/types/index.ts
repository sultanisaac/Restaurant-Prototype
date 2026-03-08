export type Lang = 'id' | 'en';

export type MenuTab = 'bestseller' | 'mains' | 'soup' | 'vegetables' | 'snacks' | 'drinks';

export interface MenuItem {
  id: string;
  nameId: string;
  nameEn: string;
  descId: string;
  descEn: string;
  price: number;
  spice: 0 | 1 | 2 | 3;
  allergens: ('peanut' | 'seafood')[];
  tabs: MenuTab[];
}

export interface AddOn {
  id: string;
  nameId: string;
  nameEn: string;
  price: number;
}

export interface FamilySet {
  id: string;
  nameId: string;
  nameEn: string;
  descId: string;
  descEn: string;
  price: number;
  itemsId: string[];
  itemsEn: string[];
  badge?: string;
}

export interface Testimonial {
  id: string;
  nameId: string;
  nameEn: string;
  textId: string;
  textEn: string;
  rating: number;
  locationId: string;
  locationEn: string;
}

export interface FaqItem {
  id: string;
  questionId: string;
  questionEn: string;
  answerIdLines: string[];
  answerEnLines: string[];
}
