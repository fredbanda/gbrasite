import Image from 'next/image';

export default function AboutComponent() {
  return (
    <div className='container py-16'>
      <div className='flex items-center justify-between pb-4'>
        <a
          className='py-4 text-3xl font-extrabold leading-tight text-gray-800 lg:text-5xl'
          href=''
        >
          breathtaking views  <br />
          coupled with friendly people
        </a>
        <p className='tracking-wider text-gray-400'>Mother City</p>
      </div>
      <div className='grid lg:grid-cols-2 place-items-center '>
        <div>
          <Image
            src='/image/aboveheroimg.jpg'
            width={900}
            height={400}
            alt=''
            className='max-md:hidden rounded-md'
          />
        </div>

        <div className='items-center'>
          <p className='px-12 pb-4 '>
          We are Gordon&apos;s Bay Residents Assiciation. Our goal is to provide a Beautiful environment for everyone living here to makes sure you are at peace. We are not affiliated to any political party. Whether you run business or just visiting, we will make ure you get the best experience ever
          </p>
          <div className='flex px-12 pt-4 gap-x-4 '>
            <Image
              src='/image/awards.png'
              width={100}
              height={80}
              alt=''
              className=' h-[100px] w-auto'
              
            />
            <Image
              src='/image/awards1.png'
              width={100}
              height={80}
              alt=''
              className=' h-[100px] w-auto'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
