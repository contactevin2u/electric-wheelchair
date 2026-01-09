'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Rental() {
  const { t } = useLanguage()

  const rentalPlans = [
    {
      nameKey: 'rental.basic',
      price: 'RM 400',
      features: [
        'rental.basic.f1',
        'rental.basic.f2',
        'rental.basic.f3',
        'rental.basic.f4',
      ],
      popular: false,
    },
    {
      nameKey: 'rental.premium',
      price: 'RM 550',
      features: [
        'rental.premium.f1',
        'rental.premium.f2',
        'rental.premium.f3',
        'rental.premium.f4',
      ],
      popular: true,
    },
    {
      nameKey: 'rental.deluxe',
      price: 'RM 650',
      features: [
        'rental.deluxe.f1',
        'rental.deluxe.f2',
        'rental.deluxe.f3',
        'rental.deluxe.f4',
      ],
      popular: false,
    },
  ]

  return (
    <section id="rental" className="py-20 bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('rental.title')}
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            {t('rental.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {rentalPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-white shadow-2xl scale-105'
                  : 'bg-white/90 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="bg-accent text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                  {t('rental.popular')}
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{t(plan.nameKey)}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">{plan.price}</span>
                <span className="text-gray-500">{t('hero.perMonth')}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">{t(feature)}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/601128322452"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-primary hover:bg-blue-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                {t('rental.getStarted')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
