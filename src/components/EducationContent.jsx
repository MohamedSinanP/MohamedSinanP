import React from 'react';
import Image from 'next/image';

const EducationContent = () => {
  const details = [
    {
      id: 1,
      college: 'Guru Nanak College',
      year: '2018 - 2021',
      course: 'BCA',
      gpa: 9.42,
      asset: 'gnc.webp'
    },
    {
      id: 2,
      college: 'Jain University - Online',
      year: '2024 - 2026',
      course: 'MCA',
      gpa: 9.00,
      asset: 'jain.webp'
    }
  ];
  return (
    <div className='grid lg:grid-cols-2 gap-1'>
      {details.map((d) => (
        <div key={d.id} className="flex flex-col items-center bg-gray-800 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
          <Image
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={`/assets/${d.asset}`}
            alt={d.college}
            width={48}
            height={96}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{d.course}</h5>
            <p className="mb-3 font-normal text-gray-400">{d.year}</p>
          </div>
        </div>
      ))}
      {/* <div className="flex flex-col items-center bg-gray-800 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
        <Image
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="/assets/gnc.webp"
          alt="Guru Nanak College"
          width={48}
          height={96}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BCA - Computer Applications</h5>
          <p className="mb-3 font-normal text-gray-400">2018 - 2021</p>
        </div>
      </div>
      <div className="flex flex-col items-center bg-gray-800 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
        <Image
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="/assets/jain.webp"
          alt="Guru Nanak College"
          width={48}
          height={96}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">MCA - Full Stack Development</h5>
          <p className="mb-3 font-normal text-gray-400">2024 - 2026</p>
        </div>
      </div> */}
    </div>
  );
};

export default EducationContent;