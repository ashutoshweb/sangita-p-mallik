/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { GridPattern } from '@/components/GridPattern'


export  function Education3() {
    return (
        <div className="relative bg-green-700 py-16 sm:py-32 opacity-90">
            <div className="text-slate-900/10">
                <GridPattern x="50%" patternTransform="translate(0 80)" />
            </div>
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 ">
                <div className="relative px-6 pb-20 pt-24 sm:pt-12 lg:static lg:px-8 ">

                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">

                        <h2 className="text-3xl font-bold tracking-tight text-white">Get in touch</h2>
                        <p className="mt-6 text-lg leading-8 text-4xl font-medium tracking-tight text-black-900">
                            Sangita P. Mallik's journey from a curious child fascinated
                            by the wonders of nature and technology to becoming a luminary
                            in the energy sector is a testament to the power of education, determination, and vision.
                            Born and raised in a family that valued education and community service above all,
                            Sangita's early life was imbued with lessons on the importance of hard work, perseverance,
                            and the pursuit of knowledge for the betterment of society.
                        </p>
                        <p className="mt-6  leading-8 text-xl font-medium tracking-tight text-gray-300">
                            From a young age, Sangita exhibited an insatiable curiosity about the world around her.
                            She was particularly drawn to the sciences, where the laws of physics and chemistry explained
                            the mysteries of the natural world.
                            This early passion for science was nurtured by her family and teachers,
                            who recognized her potential and encouraged her to explore these interests further.
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Sangita's educational journey was marked by excellence and a relentless quest for knowledge.
                            She excelled in her studies, consistently standing out for her analytical skills and ability
                            to grasp complex concepts quickly.
                            Sangita's academic prowess earned her a place in a prestigious engineering college,
                            where she dove into the world of electrical engineering.
                            It was here that Sangita's path to becoming an energy sector innovator truly began.
                        </p>

                    </div>
                </div>

                <div  className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1">
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Sangita P. Mallik's journey from a curious child fascinated
                                by the wonders of nature and technology to becoming a luminary
                                in the energy sector is a testament to the power of education, determination, and vision.
                                Born and raised in a family that valued education and community service above all,
                                Sangita's early life was imbued with lessons on the importance of hard work, perseverance,
                                and the pursuit of knowledge for the betterment of society.
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Sangita P. Mallik's journey from a curious child fascinated
                                by the wonders of nature and technology to becoming a luminary
                                in the energy sector is a testament to the power of education, determination, and vision.
                                Born and raised in a family that valued education and community service above all,
                                Sangita's early life was imbued with lessons on the importance of hard work, perseverance,
                                and the pursuit of knowledge for the betterment of society.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
