import Image from 'next/image';

const ContentSection = () => {
  return (
    <>
      <section className='bg-gray-100 dark:bg-gray-900 rounded-md'>
        <div className='container px-6 py-10 mx-auto'>
          <h1 className='text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white'>
            Read Through Amazing Stories from Gordon&apos;s Bay
          </h1>
            <p className='mt-4 text-gray-500 dark:text-gray-300'>We are Gordon&apos;s Bay Residents Assiciation. Our goal is to provide a Beautiful environment for everyone living here to makes sure you are at peace. We are not affiliated to any political party. Whether you run business or just visiting, we will make ure you get the best experience ever </p>
          <div className='grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2'>
            <div className='lg:flex'>
              <Image
                className='object-cover w-full h-56 rounded-lg lg:w-64'
                src='/image/gallery1.jpg'
                alt=''
                width={500}
                height={500}
              />

              <div className='flex flex-col justify-between py-6 lg:mx-6'>
                <a
                  href='#'
                  className='text-xl font-semibold text-gray-800 hover:underline dark:text-white '
                >
                  How to use sticky note for problem solving
                </a>

                <span className='text-sm text-gray-500 dark:text-gray-300'>
                  On: 20 October 2019
                </span>
              </div>
            </div>

            <div className='lg:flex'>
            <Image
                className='object-cover w-full h-56 rounded-lg lg:w-64'
                src='/image/gallery1.jpg'
                alt=''
                width={500}
                height={500}
              />

              <div className='flex flex-col justify-between py-6 lg:mx-6'>
                <a
                  href='#'
                  className='text-xl font-semibold text-gray-800 hover:underline dark:text-white '
                >
                  How to use sticky note for problem solving
                </a>

                <span className='text-sm text-gray-500 dark:text-gray-300'>
                  On: 20 October 2019
                </span>
              </div>
            </div>

            <div className='lg:flex'>
            <Image
                className='object-cover w-full h-56 rounded-lg lg:w-64'
                src='/image/gallery1.jpg'
                alt=''
                width={500}
                height={500}
              />

              <div className='flex flex-col justify-between py-6 lg:mx-6'>
                <a
                  href='#'
                  className='text-xl font-semibold text-gray-800 hover:underline dark:text-white '
                >
                  Morning routine to boost your mood
                </a>

                <span className='text-sm text-gray-500 dark:text-gray-300'>
                  On: 25 November 2020
                </span>
              </div>
            </div>

            <div className='lg:flex'>
            <Image
                className='object-cover w-full h-56 rounded-lg lg:w-64'
                src='/image/gallery1.jpg'
                alt=''
                width={500}
                height={500}
              />

              <div className='flex flex-col justify-between py-6 lg:mx-6'>
                <a
                  href='#'
                  className='text-xl font-semibold text-gray-800 hover:underline dark:text-white '
                >
                  All the features you want to know
                </a>

                <span className='text-sm text-gray-500 dark:text-gray-300'>
                  On: 30 September 2020
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentSection;
