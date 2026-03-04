import React, { useState, useEffect } from 'react';
import NewSchool from './templates/NewSchool';
import Lausanne from './templates/Lausanne';
import Template3 from './templates/Template3';
import Template4 from './templates/Template4';

function App() {
  // Try to load saved template or default to '1'
  const [activeTemplate, setActiveTemplate] = useState(() => {
    return localStorage.getItem('msta-template') || '1';
  });

  // Save template choice
  useEffect(() => {
    localStorage.setItem('msta-template', activeTemplate);
  }, [activeTemplate]);

  return (
    <>
      {activeTemplate === '1' ? <NewSchool /> : 
       activeTemplate === '2' ? <Lausanne /> : 
       activeTemplate === '3' ? <Template3 /> : 
       <Template4 />}


      {/* Floating Template Switcher */}
      <div style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        backgroundColor: '#111',
        color: '#fff',
        padding: '0.5rem 1rem',
        borderRadius: '50px',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        zIndex: 9999,
        border: '2px solid rgba(255,255,255,0.2)'
      }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Design:</span>
        <button 
          onClick={() => setActiveTemplate('1')}
          style={{
            backgroundColor: activeTemplate === '1' ? '#EE1B24' : 'transparent',
            color: '#fff',
            border: 'none',
            padding: '0.4rem 0.8rem',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: activeTemplate === '1' ? 700 : 400,
            transition: 'all 0.2s ease',
            fontSize: '1rem',
            minWidth: '32px'
          }}
        >
          1
        </button>
        <button 
          onClick={() => setActiveTemplate('2')}
          style={{
            backgroundColor: activeTemplate === '2' ? '#CFB87C' : 'transparent',
            color: activeTemplate === '2' ? '#002B49' : '#fff',
            border: 'none',
            padding: '0.4rem 0.8rem',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: activeTemplate === '2' ? 700 : 400,
            transition: 'all 0.2s ease',
            fontSize: '1rem',
            minWidth: '32px'
          }}
        >
          2
        </button>
        <button 
          onClick={() => setActiveTemplate('3')}
          style={{
            backgroundColor: activeTemplate === '3' ? '#FF0055' : 'transparent',
            color: activeTemplate === '3' ? '#fff' : '#fff',
            border: 'none',
            padding: '0.4rem 0.8rem',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: activeTemplate === '3' ? 700 : 400,
            transition: 'all 0.2s ease',
            fontSize: '1rem',
            minWidth: '32px'
          }}
        >
          3
        </button>
        <button 
          onClick={() => setActiveTemplate('4')}
          style={{
            backgroundColor: activeTemplate === '4' ? '#00FF66' : 'transparent',
            color: activeTemplate === '4' ? '#0A0A0A' : '#fff',
            border: 'none',
            padding: '0.4rem 0.8rem',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: activeTemplate === '4' ? 700 : 400,
            transition: 'all 0.2s ease',
            fontSize: '1rem',
            minWidth: '32px'
          }}
        >
          4
        </button>
      </div>
    </>
  );
}

export default App;
