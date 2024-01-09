import React from 'react';
import { useRouter } from 'next/router';

const ToolbarComponents = ({ showBackArrow, title }) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div><div style={{ backgroundColor: "var(--toolbar-background-color)", height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 16px' }}>
      {showBackArrow && (
        <div onClick={handleBackClick} style={{ cursor: 'pointer', marginRight: '8px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 19L5 12L12 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
      <span style={{ flex: 1, textAlign: 'center', color: '#36728B', fontSize: '24px', fontFamily: "'Roboto', sans-serif", fontWeight: '800', textTransform: 'uppercase' }}>{title}</span>
    </div>

    </div>
  );
};

export default ToolbarComponents;
