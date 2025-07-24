import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useInView, animated, useTrail } from '@react-spring/web';

export const Community_Summary: React.FC = () => {
  const { t } = useTranslation();

  const [ref, springs] = useInView(
    () => ({
      from: { opacity: 0, scale: 0.95 },
      to: { opacity: 1, scale: 1 },
      config: { mass: 2, tension: 300, friction: 25 }
    }),
    { once: true, rootMargin: '-20% 0%' }
  );

  const items = [t('community.title'), t('community.subtitle'), t('community.text')];
  
  const trail = useTrail(items.length, {
    config: { mass: 1, tension: 200, friction: 25 },
    opacity: 1,
    y: 0,
    from: { opacity: 0, y: 40 },
    delay: 300
  });

  return (
    <animated.section ref={ref} style={springs} className="relative w-full h-80 md:h-96 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center z-0 before:absolute before:inset-0 before:bg-black before:opacity-50"
           style={{ backgroundImage: 'url(/img/community_summary.jpeg)' }}>
        <animated.div className="absolute inset-0 bg-opacity-20" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8 lg:px-16">
        {trail.map(({ y, ...rest }, index) => (
          <animated.div
            key={index}
            style={{ ...rest, transform: y.to(y => `translateY(${y}px)`) }}
            className={index === 1 ? "mb-4 md:mb-6 max-w-lg" : index === 2 ? "mb-6 md:mb-8 max-w-xl" : "mb-2 md:mb-3"}
          >
            {index === 0 && <h3 className="font-montserrat text-subtitle text-[#FEC40D]">{items[index]}</h3>}
            {index === 1 && <h2 className="font-montserrat font-bold text-section text-[#FEC40D]">{items[index]}</h2>}
            {index === 2 && <p className="font-montserrat text-paragraph text-white">{items[index]}</p>}
          </animated.div>
        ))}
        
        <animated.div style={trail[trail.length - 1]}>
          <Link
            to="/valores"
            className="px-6 py-2 bg-[#74AADB] rounded-md font-montserrat font-bold text-button text-white hover:bg-[#5D8CB0] transition-colors cursor-pointer"
          >
            {t('community.button')}
          </Link>
        </animated.div>
      </div>
    </animated.section>
  );
};