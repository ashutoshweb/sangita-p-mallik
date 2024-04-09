
import Image from 'next/image'

import portraitImage from '@/images/sangita/sangitamallik-linkedin-pic.jpeg'
import heroImage from '@/images/sangita/luke-richardson-dI7vfR1Bqcg-unsplash.jpg'

//eugene-kuznetsov-JnmkSNU8QGE-unsplash.jpg
//luke-richardson-dI7vfR1Bqcg-unsplash.jpg
//tyler-casey-ficbiwfOPSo-unsplash.jpg




const profile = {
  name: 'Sangita P. Mallik',
  email: 'ricardo.cooper@example.com',
  avatar:
  portraitImage,
  backgroundImage:heroImage,
  fields: [
    ['Phone', '(555) 123-4567'],
    ['Email', 'ricardocooper@example.com'],
    ['Title', 'Senior Front-End Developer'],
    ['Team', 'Product Development'],
    ['Location', 'San Francisco'],
    ['Sits', 'Oasis, 4th floor'],
    ['Salary', '$145,000'],
    ['Birthday', 'June 8, 1990'],
  ],
}

export  function Hero() {
  return (
      <div >
        <div>
          <Image className="h-96 w-full object-cover lg:h-96" src={profile.backgroundImage} alt="" />
        </div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-center sm:space-x-5">
            <div className="flex">
              <Image className="h-24 w-24 rounded-full ring-4 ring-white sm:h-48 sm:w-48" src={profile.avatar} alt="" />
            </div>
            <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
                <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
              </div>

            </div>
          </div>
          <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
            <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
          </div>
        </div>
      </div>
  )
}

