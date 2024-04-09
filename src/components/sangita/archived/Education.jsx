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


export  function Education() {
    return (
        <div className="relative isolate bg-green-700">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 ">
                <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/1">
                            <svg
                                className="absolute inset-0 h-full w-full stroke-gray-400 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                                aria-hidden="true"
                            >
                                <defs>
                                    <pattern
                                        id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                                        width={200}
                                        height={200}
                                        x="100%"
                                        y={-1}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <path d="M130 200V.5M.5 .5H200" fill="none" />
                                    </pattern>
                                </defs>
                                <svg x="100%" y={-1} className="overflow-visible fill-gray-800/20">
                                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                                </svg>
                                <rect width="100%" height="100%" strokeWidth={0} fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" />
                            </svg>
                            <div
                                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                                aria-hidden="true"
                            >
                                <div
                                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                                    style={{
                                        clipPath:
                                            'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                                    }}
                                />
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-white">Get in touch</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Sangita P. Mallik's journey from a curious child fascinated
                            by the wonders of nature and technology to becoming a luminary
                            in the energy sector is a testament to the power of education, determination, and vision.
                            Born and raised in a family that valued education and community service above all,
                            Sangita's early life was imbued with lessons on the importance of hard work, perseverance,
                            and the pursuit of knowledge for the betterment of society.
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
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
