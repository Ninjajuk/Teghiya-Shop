

'use client'
const products = [
    {
      id: 120,
      name: 'Leather Long Wallet',
      color: 'Natural',
      price: '75',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg',
      imageAlt: 'Hand stitched, orange leather long wallet.',
    },
    {
        id: 121,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35',
        color: 'Black',
      },
      {
        id: 122,
        name: 'Earthen Bottle',
        href: '#',
        price: '48',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 123,
        name: 'Nomad Tumbler',
        href: '#',
        price: '35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },

  ]
  
  export default function TrendingProducts() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Trending products</h2>
            <a href="#" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
              Shop the collection
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
  
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative flex flex-col justify-between">
                <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80 ">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  <a href={product.href}>
                    <span className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                <p className="mt-1 text-sm font-medium text-gray-900">₹{product.price}</p>
                <div className="mt-2 mb-3 w-full ring-1 hover:shadow-2xl  ring-sky-800 text-center rounded-md "><button className="px-2 py-2 ">Add</button></div>
              </div>
            ))}
          </div>
  
          <div className="mt-8 text-sm md:hidden">
            <a href="#" className="font-medium text-sky-800 hover:text-indigo-500">
              Shop the collection
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    )
  }