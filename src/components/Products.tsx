'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Products() {
  const { t } = useLanguage()

  const products = [
    {
      id: 1,
      nameKey: 'product1.name',
      descKey: 'product1.desc',
      price: 'RM 3,500',
      rentalPrice: 'RM 400/month',
      features: ['feature.foldable', 'feature.lightweight', 'feature.range20'],
    },
    {
      id: 2,
      nameKey: 'product2.name',
      descKey: 'product2.desc',
      price: 'RM 5,500',
      rentalPrice: 'RM 550/month',
      features: ['feature.capacity', 'feature.comfortable', 'feature.range25'],
    },
    {
      id: 3,
      nameKey: 'product3.name',
      descKey: 'product3.desc',
      price: 'RM 6,800',
      rentalPrice: 'RM 650/month',
      features: ['feature.recline', 'feature.headrest', 'feature.range30'],
    },
    {
      id: 4,
      nameKey: 'product4.name',
      descKey: 'product4.desc',
      price: 'RM 4,200',
      rentalPrice: 'RM 480/month',
      features: ['feature.compact', 'feature.indoor', 'feature.range22'],
    },
  ]

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('products.title')}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {t(product.nameKey)}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{t(product.descKey)}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {t(feature)}
                    </span>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-500 text-sm">{t('products.buy')}</span>
                    <span className="text-primary font-bold">{product.price}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-500 text-sm">{t('products.rent')}</span>
                    <span className="text-green-600 font-bold">{product.rentalPrice}</span>
                  </div>
                  <a
                    href="https://wa.me/601128322452"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-primary hover:bg-blue-700 text-white text-center py-2 rounded-lg font-medium transition-colors"
                  >
                    {t('products.enquire')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
