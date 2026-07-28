export const site = {
  name: 'BITSTREAM',
  domain: 'bit-stream.uz',
  phoneDisplay: '+998 93 311 31 99',
  phone: '+998933113199',
  email: 'info@bit-stream.uz',
  telegram: 'https://t.me/bitstreamuz_bot?start=website',
  instagram: 'https://instagram.com/bitstreamuz',
  locations: ['Tashkent', 'Uzbekistan'],
} as const;

export type Lang = 'en' | 'ru' | 'uz';

export const paths: Record<Lang, string> = { en: '/en/', ru: '/ru/', uz: '/uz/' };
