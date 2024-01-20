import React, { useEffect, useState } from 'react';
import Button from '../Button';
import Data from '../../data/portfolio.json';
import { useTheme } from 'next-themes';

const Socials = ({ className }) => {
  const { theme, systemTheme, loading } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (loading || !isMounted) {
    return <div>Loading...</div>;
  }

  const effectiveTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {Data.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          {social.icon && (
            <img
              src={
                effectiveTheme === 'dark' ? social.darkModeIcon : social.icon
              }
              alt={`${social.title} icon`}
              className='inline-block mr-2'
              style={{ width: '40px', height: '40px' }}
            />
          )}
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
