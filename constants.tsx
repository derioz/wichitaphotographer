import { Review, PricingPackage, GalleryImage } from './types';

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Tristan Dean',
    date: 'July 7, 2024',
    content: "These two are amazing! Highly recommend. My guest still rave about my photographers. If you are unsure on a photographer 10/10 hire this amazing team!!!",
    rating: 5
  },
  {
    id: '2',
    author: 'Cari Harper',
    date: 'July 23, 2023',
    content: "Aron and Ashley worked so hard on my daughter and her husbands wedding. Very professional and personable! I can't wait to receive the photos! I can tell they took great shots of the memorable moments!",
    rating: 5
  },
  {
    id: '3',
    author: 'Lori Carra-Denton',
    date: 'August 7, 2019',
    content: "Ashley did a perfect job with our pictures. Our Wedding was awesome. Thank you.",
    rating: 5
  },
  {
    id: '4',
    author: 'Ashley Brooks',
    date: 'April 17, 2018',
    content: "Aron and Ashly are amazing!! They did a beautiful job with our engagement photos which we used as centerpieces for our wedding. They stayed the entire night of our wedding and got some of the best shots I could have dreamed up!! We HIGHLY recommend this power couple to do your photos!!",
    rating: 5
  },
  {
    id: '5',
    author: 'Tamarah Leggio',
    date: 'January 21, 2018',
    content: "Aron captured a young couple in love. I was able to relive Prom through his creativity & fun poses. The photos jump off each print & canvas I had made. I love his triple P demeanor — Professional, Perfectionist, & Patient. ICT's finest!",
    rating: 5
  },
  {
    id: '6',
    author: 'Brent Hightower',
    date: 'January 21, 2018',
    content: "The Wichita Area is blessed with many professional, talented and hard-working photographers. My experience with Aron & Ashley Simpson over the past 7-8 years has been overwhelmingly positive. They go the extra steps to make sure the bride is the center of attention on her special day.",
    rating: 5
  },
  {
    id: '7',
    author: 'Tonya Conrad',
    date: 'January 21, 2018',
    content: "Does a wonderful job! Top quality photos! Takes pride in his work!",
    rating: 5
  }
];

export const PACKAGES: PricingPackage[] = [
  {
    id: 'silver',
    name: 'Silver Package',
    price: '$1,800',
    features: [
      '6 Hours of Wedding Day Coverage',
      'One Photographer',
      'Online Gallery with High-Res Images',
      'Print Release',
      'Timeline Assistance'
    ]
  },
  {
    id: 'diamond',
    name: 'Diamond Package',
    price: '$2,800',
    isFeatured: true,
    description: "The Diamond Package includes a complimentary engagement session, allowing us to capture your love story well before the big day. A comprehensive experience with no time limits on your wedding day.",
    features: [
      'ENGAGEMENT: 2-3 hour shoot (unlimited outfits/locations)',
      '1 framed 11x14 print & 4 (8x10) prints',
      'All Engagement Photos on Flash Drive w/ Rights',
      'WEDDING: 2 Photographers (Aron & Ashly) - No Time Limit',
      'Prep, Ceremony, and Reception Coverage',
      'Complimentary Timeline Consultation',
      'Prints: 3 (11x14), 10 (8x10), 50 (4x6)',
      '20-page Hard Cover 11x14 Book (~50 photos)',
      'All Wedding Photos on Flash Drive w/ Rights',
      'Sneak Peek within 48 hours',
      '25% Deposit required to hold the date'
    ]
  },
  {
    id: 'gold',
    name: 'Gold Package',
    price: '$2,400',
    features: [
      '8 Hours of Wedding Day Coverage',
      'Two Photographers',
      'Online Gallery with High-Res Images',
      'Print Release',
      'Timeline Assistance',
      '$100 Print Credit'
    ]
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  // Wedding Photos
  { id: 'w1', url: '/portfolio/weddings/37823716_1791410360946183_4406294325781069824_n.jpg', alt: 'Wedding Ceremony', category: 'wedding', span: 'row-span-2' },
  { id: 'w2', url: '/portfolio/weddings/509419683_10025064550914015_3962554335892343388_n.jpg', alt: 'Bride & Groom Portrait', category: 'wedding' },
  { id: 'w3', url: '/portfolio/weddings/509602394_10025064827580654_627120726932645715_n.jpg', alt: 'Wedding Day Moment', category: 'wedding' },
  { id: 'w4', url: '/portfolio/weddings/509608706_10025064704247333_4889099147569891184_n.jpg', alt: 'Couple Photo', category: 'wedding' },
  { id: 'w5', url: '/portfolio/weddings/510333021_10047392025347934_6122791691812826445_n.jpg', alt: 'Wedding Celebration', category: 'wedding', span: 'col-span-2' },
  { id: 'w6', url: '/portfolio/weddings/510632961_10048093791944424_1485840815238820771_n.jpg', alt: 'Reception Moment', category: 'wedding' },
  { id: 'w7', url: '/portfolio/weddings/510786199_10025064707580666_5151618660150088201_n.jpg', alt: 'Wedding Details', category: 'wedding' },
  { id: 'w8', url: '/portfolio/weddings/511772104_10047392068681263_9127509740328735450_n.jpg', alt: 'Wedding Party', category: 'wedding', span: 'row-span-2' },
  { id: 'w9', url: '/portfolio/weddings/512886992_10048261921927611_5626538798448746241_n.jpg', alt: 'Special Wedding Moment', category: 'wedding' },

  // Portraits & Action Photos
  { id: 'l1', url: '/portfolio/lifestyle/92020538_2878862768867598_4375662043500380160_n.jpg', alt: 'Family Portrait', category: 'portraits', span: 'row-span-2' },
  { id: 'l2', url: '/portfolio/lifestyle/92208923_2878882922198916_2333139433345253376_n.jpg', alt: 'Lifestyle Session', category: 'portraits' },
  { id: 'l3', url: '/portfolio/lifestyle/92466027_2878861028867772_4045465468885008384_n.jpg', alt: 'Portrait Photography', category: 'portraits' },
  { id: 'l4', url: '/portfolio/lifestyle/92692684_2878883105532231_7638504863835357184_n.jpg', alt: 'Natural Light Portrait', category: 'portraits', span: 'col-span-2' },
  { id: 'l5', url: '/portfolio/lifestyle/93322032_2901035316650343_9042506407059914752_n.jpg', alt: 'Outdoor Session', category: 'portraits' },
  { id: 'l6', url: '/portfolio/lifestyle/93430280_2901035863316955_5532989407163842560_n.jpg', alt: 'Candid Moment', category: 'portraits' },
  { id: 'l7', url: '/portfolio/lifestyle/93875340_2901035923316949_6622590170271055872_n.jpg', alt: 'Creative Portrait', category: 'portraits', span: 'row-span-2' },
  { id: 'l8', url: '/portfolio/lifestyle/93908261_2901035283317013_1454213898507911168_n.jpg', alt: 'Lifestyle Photography', category: 'portraits' },

  // Engagement Photos (using existing)
  { id: 'e1', url: '/engagement.jpg', alt: 'Engagement Session', category: 'engagement', span: 'row-span-2' },
  { id: 'e2', url: '/wedding.jpg', alt: 'Romantic Moment', category: 'engagement' },
];