'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'my'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.rental': 'Rental',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.whatsapp': 'WhatsApp Us',

    // Hero
    'hero.title': 'Premium Electric Wheelchairs in Malaysia',
    'hero.subtitle': 'Rent from',
    'hero.perMonth': '/month',
    'hero.orBuy': 'or Buy with Free Delivery',
    'hero.feature1': 'Foldable & Lightweight Designs',
    'hero.feature2': '1 Year Warranty Included',
    'hero.feature3': 'Delivery Across Malaysia',
    'hero.viewProducts': 'View Products',
    'hero.partner': 'Your Mobility Partner',

    // Products
    'products.title': 'Our Products',
    'products.subtitle': 'Quality electric wheelchairs and mobility scooters available for purchase or rental',
    'products.buy': 'Buy:',
    'products.rent': 'Rent:',
    'products.enquire': 'Enquire Now',

    // Product Items
    'product1.name': 'Foldable Electric Wheelchair',
    'product1.desc': 'Lightweight and portable, perfect for travel. Easy folding mechanism.',
    'product2.name': 'Heavy Duty Electric Wheelchair',
    'product2.desc': 'For users up to 150kg. Enhanced comfort and stability.',
    'product3.name': 'Reclining Electric Wheelchair',
    'product3.desc': 'Full recline feature for maximum comfort. Ideal for long-term use.',
    'product4.name': 'Compact Mobility Scooter',
    'product4.desc': 'Easy to maneuver in tight spaces. Great for indoor and outdoor use.',

    // Features
    'feature.foldable': 'Foldable',
    'feature.lightweight': 'Lightweight',
    'feature.range20': '20km Range',
    'feature.capacity': '150kg Capacity',
    'feature.comfortable': 'Comfortable',
    'feature.range25': '25km Range',
    'feature.recline': 'Full Recline',
    'feature.headrest': 'Headrest',
    'feature.range30': '30km Range',
    'feature.compact': 'Compact',
    'feature.indoor': 'Indoor/Outdoor',
    'feature.range22': '22km Range',

    // Why Choose Us
    'why.title': 'Why Choose Us?',
    'why.subtitle': 'We are committed to providing the best mobility solutions with excellent service',
    'why.warranty.title': '1 Year Warranty',
    'why.warranty.desc': 'All our products come with a comprehensive 1-year warranty for peace of mind.',
    'why.delivery.title': 'Fast Delivery',
    'why.delivery.desc': 'Quick delivery across Malaysia. We ensure your wheelchair reaches you promptly.',
    'why.service.title': 'Free Servicing',
    'why.service.desc': 'Enjoy complimentary servicing and maintenance support for your wheelchair.',
    'why.rental.title': 'Flexible Rental',
    'why.rental.desc': 'Affordable monthly rental options starting from RM400. No long-term commitment.',

    // Rental
    'rental.title': 'Rental Plans',
    'rental.subtitle': 'Flexible rental options to suit your needs. No long-term commitment required.',
    'rental.popular': 'Most Popular',
    'rental.getStarted': 'Get Started',
    'rental.basic': 'Basic',
    'rental.premium': 'Premium',
    'rental.deluxe': 'Deluxe',
    'rental.basic.f1': 'Standard Electric Wheelchair',
    'rental.basic.f2': 'Free Delivery',
    'rental.basic.f3': 'Basic Support',
    'rental.basic.f4': 'Monthly Payment',
    'rental.premium.f1': 'Heavy Duty Wheelchair',
    'rental.premium.f2': 'Free Delivery & Setup',
    'rental.premium.f3': 'Priority Support',
    'rental.premium.f4': 'Free Maintenance',
    'rental.deluxe.f1': 'Reclining Wheelchair',
    'rental.deluxe.f2': 'Free Delivery & Setup',
    'rental.deluxe.f3': '24/7 Support',
    'rental.deluxe.f4': 'Free Maintenance & Replacement',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': "Have questions? We're here to help. Reach out to us through any of the channels below.",
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',
    'contact.chat': 'Chat with us on WhatsApp',
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Name',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.phone': 'Phone',
    'contact.form.phonePlaceholder': 'Your phone number',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'How can we help you?',
    'contact.form.send': 'Send Message',

    // Footer
    'footer.tagline': 'Your trusted partner for quality electric wheelchairs and mobility solutions in Malaysia.',
    'footer.quickLinks': 'Quick Links',
    'footer.products': 'Products',
    'footer.contact': 'Contact',
    'footer.electricWheelchairs': 'Electric Wheelchairs',
    'footer.mobilityScooters': 'Mobility Scooters',
    'footer.wheelchairParts': 'Wheelchair Parts',
    'footer.accessories': 'Accessories',
    'footer.copyright': 'Electric Wheelchair Malaysia. All rights reserved.',
  },
  my: {
    // Navigation
    'nav.home': 'Utama',
    'nav.products': 'Produk',
    'nav.rental': 'Sewa',
    'nav.about': 'Tentang Kami',
    'nav.contact': 'Hubungi',
    'nav.whatsapp': 'WhatsApp Kami',

    // Hero
    'hero.title': 'Kerusi Roda Elektrik Premium di Malaysia',
    'hero.subtitle': 'Sewa dari',
    'hero.perMonth': '/bulan',
    'hero.orBuy': 'atau Beli dengan Penghantaran Percuma',
    'hero.feature1': 'Rekaan Boleh Lipat & Ringan',
    'hero.feature2': 'Waranti 1 Tahun Disertakan',
    'hero.feature3': 'Penghantaran Seluruh Malaysia',
    'hero.viewProducts': 'Lihat Produk',
    'hero.partner': 'Rakan Mobiliti Anda',

    // Products
    'products.title': 'Produk Kami',
    'products.subtitle': 'Kerusi roda elektrik dan skuter mobiliti berkualiti untuk dibeli atau disewa',
    'products.buy': 'Beli:',
    'products.rent': 'Sewa:',
    'products.enquire': 'Tanya Sekarang',

    // Product Items
    'product1.name': 'Kerusi Roda Elektrik Boleh Lipat',
    'product1.desc': 'Ringan dan mudah alih, sesuai untuk perjalanan. Mekanisme lipatan mudah.',
    'product2.name': 'Kerusi Roda Elektrik Tugas Berat',
    'product2.desc': 'Untuk pengguna sehingga 150kg. Keselesaan dan kestabilan yang dipertingkatkan.',
    'product3.name': 'Kerusi Roda Elektrik Rebah',
    'product3.desc': 'Ciri rebah penuh untuk keselesaan maksimum. Sesuai untuk kegunaan jangka panjang.',
    'product4.name': 'Skuter Mobiliti Kompak',
    'product4.desc': 'Mudah dikendalikan di ruang sempit. Sesuai untuk kegunaan dalam dan luar.',

    // Features
    'feature.foldable': 'Boleh Lipat',
    'feature.lightweight': 'Ringan',
    'feature.range20': 'Jarak 20km',
    'feature.capacity': 'Kapasiti 150kg',
    'feature.comfortable': 'Selesa',
    'feature.range25': 'Jarak 25km',
    'feature.recline': 'Rebah Penuh',
    'feature.headrest': 'Sandaran Kepala',
    'feature.range30': 'Jarak 30km',
    'feature.compact': 'Kompak',
    'feature.indoor': 'Dalam/Luar',
    'feature.range22': 'Jarak 22km',

    // Why Choose Us
    'why.title': 'Mengapa Pilih Kami?',
    'why.subtitle': 'Kami komited untuk menyediakan penyelesaian mobiliti terbaik dengan perkhidmatan cemerlang',
    'why.warranty.title': 'Waranti 1 Tahun',
    'why.warranty.desc': 'Semua produk kami dilengkapi dengan waranti komprehensif 1 tahun untuk ketenangan fikiran.',
    'why.delivery.title': 'Penghantaran Pantas',
    'why.delivery.desc': 'Penghantaran pantas ke seluruh Malaysia. Kami memastikan kerusi roda anda sampai dengan cepat.',
    'why.service.title': 'Servis Percuma',
    'why.service.desc': 'Nikmati servis dan sokongan penyelenggaraan percuma untuk kerusi roda anda.',
    'why.rental.title': 'Sewa Fleksibel',
    'why.rental.desc': 'Pilihan sewa bulanan mampu milik bermula dari RM400. Tiada komitmen jangka panjang.',

    // Rental
    'rental.title': 'Pelan Sewa',
    'rental.subtitle': 'Pilihan sewa fleksibel untuk memenuhi keperluan anda. Tiada komitmen jangka panjang diperlukan.',
    'rental.popular': 'Paling Popular',
    'rental.getStarted': 'Mulakan',
    'rental.basic': 'Asas',
    'rental.premium': 'Premium',
    'rental.deluxe': 'Deluxe',
    'rental.basic.f1': 'Kerusi Roda Elektrik Standard',
    'rental.basic.f2': 'Penghantaran Percuma',
    'rental.basic.f3': 'Sokongan Asas',
    'rental.basic.f4': 'Bayaran Bulanan',
    'rental.premium.f1': 'Kerusi Roda Tugas Berat',
    'rental.premium.f2': 'Penghantaran & Pemasangan Percuma',
    'rental.premium.f3': 'Sokongan Keutamaan',
    'rental.premium.f4': 'Penyelenggaraan Percuma',
    'rental.deluxe.f1': 'Kerusi Roda Rebah',
    'rental.deluxe.f2': 'Penghantaran & Pemasangan Percuma',
    'rental.deluxe.f3': 'Sokongan 24/7',
    'rental.deluxe.f4': 'Penyelenggaraan & Penggantian Percuma',

    // Contact
    'contact.title': 'Hubungi Kami',
    'contact.subtitle': 'Ada soalan? Kami sedia membantu. Hubungi kami melalui mana-mana saluran di bawah.',
    'contact.address': 'Alamat',
    'contact.phone': 'Telefon',
    'contact.email': 'Emel',
    'contact.whatsapp': 'WhatsApp',
    'contact.chat': 'Berbual dengan kami di WhatsApp',
    'contact.form.title': 'Hantar mesej kepada kami',
    'contact.form.name': 'Nama',
    'contact.form.namePlaceholder': 'Nama anda',
    'contact.form.phone': 'Telefon',
    'contact.form.phonePlaceholder': 'Nombor telefon anda',
    'contact.form.message': 'Mesej',
    'contact.form.messagePlaceholder': 'Bagaimana kami boleh membantu anda?',
    'contact.form.send': 'Hantar Mesej',

    // Footer
    'footer.tagline': 'Rakan dipercayai anda untuk kerusi roda elektrik dan penyelesaian mobiliti berkualiti di Malaysia.',
    'footer.quickLinks': 'Pautan Pantas',
    'footer.products': 'Produk',
    'footer.contact': 'Hubungi',
    'footer.electricWheelchairs': 'Kerusi Roda Elektrik',
    'footer.mobilityScooters': 'Skuter Mobiliti',
    'footer.wheelchairParts': 'Alat Ganti Kerusi Roda',
    'footer.accessories': 'Aksesori',
    'footer.copyright': 'Electric Wheelchair Malaysia. Hak cipta terpelihara.',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
