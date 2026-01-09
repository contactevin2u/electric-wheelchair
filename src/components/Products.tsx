'use client'

const products = [
  {
    id: 1,
    name: 'Foldable Electric Wheelchair',
    description: 'Lightweight and portable, perfect for travel. Easy folding mechanism.',
    price: 'RM 3,500',
    rentalPrice: 'RM 400/month',
    features: ['Foldable', 'Lightweight', '20km Range'],
    image: '/wheelchair-1.jpg',
  },
  {
    id: 2,
    name: 'Heavy Duty Electric Wheelchair',
    description: 'For users up to 150kg. Enhanced comfort and stability.',
    price: 'RM 5,500',
    rentalPrice: 'RM 550/month',
    features: ['150kg Capacity', 'Comfortable', '25km Range'],
    image: '/wheelchair-2.jpg',
  },
  {
    id: 3,
    name: 'Reclining Electric Wheelchair',
    description: 'Full recline feature for maximum comfort. Ideal for long-term use.',
    price: 'RM 6,800',
    rentalPrice: 'RM 650/month',
    features: ['Full Recline', 'Headrest', '30km Range'],
    image: '/wheelchair-3.jpg',
  },
  {
    id: 4,
    name: 'Compact Mobility Scooter',
    description: 'Easy to maneuver in tight spaces. Great for indoor and outdoor use.',
    price: 'RM 4,200',
    rentalPrice: 'RM 480/month',
    features: ['Compact', 'Indoor/Outdoor', '22km Range'],
    image: '/scooter-1.jpg',
  },
]

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Products
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Quality electric wheelchairs and mobility scooters available for purchase or rental
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-gray-400"
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
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-500 text-sm">Buy:</span>
                    <span className="text-primary font-bold">{product.price}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-500 text-sm">Rent:</span>
                    <span className="text-green-600 font-bold">{product.rentalPrice}</span>
                  </div>
                  <a
                    href="https://wa.me/60112832452"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-primary hover:bg-blue-700 text-white text-center py-2 rounded-lg font-medium transition-colors"
                  >
                    Enquire Now
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
