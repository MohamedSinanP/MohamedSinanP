'use client';

import SectionHead from './SectionHead';
import ExperienceContent from './ExperienceContent';
import { experiences } from '@/config/experienceConfig';

const ExperienceSection = () => {
  return (
    <section id='experience' className='scroll-mt-[80px] mt-20'>
      <SectionHead>My Experience</SectionHead>
      <ol className="relative border-s border-gray-700 mx-auto w-auto md:w-3/4 lg:w-2/3">
        {experiences.map((e) => (
          <ExperienceContent
            key={e.id}
            company={e.company}
            logo={e.logoAssetName}
            designation={e.designation}
            tenure={e.tenure}
            location={e.location}
            isCurrent={e.isCurrent}
            description={e.description}
          />
        ))}
      </ol>
    </section>
  );
};

export default ExperienceSection;