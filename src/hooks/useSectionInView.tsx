import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import type { SectionNames } from '@/types/types';

const useSectionInView = (sectionName: SectionNames, threshold = 0.75) => {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold,
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, sectionName, timeOfLastClick]);

  return {
    ref,
  };
};

export default useSectionInView;
