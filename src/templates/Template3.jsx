import React, { useState } from 'react';
import { ArrowRight, Download, BookOpen, Users, Calendar, Award, ChevronDown, GraduationCap, Sparkles, Activity, FileText, Ticket } from 'lucide-react';
import { LINKS, ABOUT_MENU_ITEMS, CONTACT_INFO, FOOTER_LINKS } from '../data';

function Template3() {
  const [activeMenu, setActiveMenu] = useState(null);

  // Maximalist / theartcenter.nyc derived constants
  const colors = {
    black: '#0A0A0A',
    white: '#FFFFFF',
    neonPink: '#FF0055',
    brightYellow: '#FFEA00',
    electricBlue: '#0033FF',
    neonGreen: '#00FF66'
  };

  const fonts = {
    display: '"Outfit", sans-serif', // Using the existing super bold font
    body: '"Inter", monospace'
  };

  const thickBorder = `4px solid ${colors.black}`;
  const solidShadow = `8px 8px 0px ${colors.black}`;

  return (
    <div style={{ fontFamily: fonts.body, backgroundColor: colors.brightYellow, color: colors.black, minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* Marquee Utility Bar */}
      <div style={{ backgroundColor: colors.neonPink, color: colors.white, padding: '0.75rem 0', fontWeight: 900, textTransform: 'uppercase', fontSize: '1.2rem', borderBottom: thickBorder, whiteSpace: 'nowrap', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'inline-block', animation: 'marquee 20s linear infinite', paddingLeft: '100%' }}>
          EMAIL: {CONTACT_INFO.email.toUpperCase()} &nbsp;&nbsp;★&nbsp;&nbsp; JOIN US ON FACEBOOK &nbsp;&nbsp;★&nbsp;&nbsp; EMAIL: {CONTACT_INFO.email.toUpperCase()}
        </div>
        <style>
          {`
            @keyframes marquee {
              0% { transform: translate(0, 0); }
              100% { transform: translate(-100%, 0); }
            }
            .brutalist-button:hover { transform: translate(-4px, -4px); box-shadow: ${solidShadow}; }
            .brutalist-card:hover { transform: translate(-4px, -4px); box-shadow: ${solidShadow}; }
          `}
        </style>
      </div>

      {/* Massive Brutalist Header */}
      <header style={{ backgroundColor: colors.white, borderBottom: thickBorder, position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem', gap: '1.5rem', alignItems: 'center' }}>
          
          <a href="/" style={{ textDecoration: 'none', color: colors.black, display: 'inline-block' }}>
            <h1 className="text-center-mobile" style={{ fontFamily: fonts.display, fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 900, lineHeight: 0.85, margin: 0, letterSpacing: '-0.05em', WebkitTextStroke: `2px ${colors.black}` }}>
              MSTA.<br />
              <span style={{ color: colors.electricBlue }}>SCIENCE</span>
            </h1>
          </a>
          
          <nav className="nav-links" style={{ width: '100%' }}>
            {[
              { label: 'HOME', link: '/' },
              { label: 'AUTHENTIC BOOK', link: 'https://msta.in/contents/' },
              { label: 'STUDENTS CORNER', link: 'https://msta.in/students-corner/' },
              { label: 'DOWNLOADS', link: 'https://msta.in/downloads/' },
              { label: 'IJSO', link: 'https://msta.in/science-enritchment-programme-preparation-for-ijso/' },
            ].map((item, i) => (
              <a key={i} href={item.link} className="brutalist-button" style={{ 
                backgroundColor: i % 2 === 0 ? colors.neonGreen : colors.brightYellow, 
                color: colors.black, 
                border: thickBorder, 
                padding: '0.5rem 1rem', 
                fontWeight: 900, 
                textDecoration: 'none', 
                fontSize: '1.2rem',
                textTransform: 'uppercase',
                transition: 'all 0.1s'
              }}>
                {item.label}
              </a>
            ))}

            {/* Brutalist Dropdown */}
            <div style={{ position: 'relative' }} onMouseEnter={() => setActiveMenu('about')} onMouseLeave={() => setActiveMenu(null)}>
              <button className="brutalist-button" style={{ backgroundColor: colors.neonPink, color: colors.white, border: thickBorder, padding: '0.5rem 1rem', fontWeight: 900, fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', transition: 'all 0.1s' }}>
                ABOUT US <ChevronDown size={20} />
              </button>
              {activeMenu === 'about' && (
                <div style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: colors.white, border: thickBorder, minWidth: '250px', display: 'flex', flexDirection: 'column', zIndex: 50, boxShadow: solidShadow, marginTop: '0.5rem' }}>
                  {ABOUT_MENU_ITEMS.map((sub) => (
                    <a key={sub.link} href={sub.link} style={{ padding: '1rem', color: colors.black, textDecoration: 'none', fontWeight: 800, borderBottom: thickBorder, fontSize: '1.1rem', backgroundColor: '#fff' }}
                      onMouseOver={e => e.currentTarget.style.backgroundColor = colors.brightYellow}
                      onMouseOut={e => e.currentTarget.style.backgroundColor = '#fff'}
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* Chaotic Hero Section */}
        <section style={{ borderBottom: thickBorder, backgroundColor: colors.electricBlue, position: 'relative', overflow: 'hidden', minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
          
          <div style={{ position: 'absolute', right: '-10%', top: '-20%', opacity: 0.5, pointerEvents: 'none', mixBlendMode: 'multiply' }}>
            <Sparkles size={600} color={colors.neonPink} strokeWidth={1} />
          </div>

          <div className="container" style={{ padding: '4rem 2rem', zIndex: 10, display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
            <div style={{ backgroundColor: colors.white, border: thickBorder, padding: 'clamp(1rem, 4vw, 2rem)', display: 'inline-block', boxShadow: solidShadow, maxWidth: '800px', transform: 'rotate(-2deg)' }}>
              <h2 style={{ fontFamily: fonts.display, fontSize: 'clamp(2rem, 10vw, 8rem)', fontWeight: 900, lineHeight: 0.9, margin: 0, color: colors.black }}>
                SHAPING <br/> <span style={{ color: colors.neonPink, WebkitTextStroke: `2px ${colors.black}` }}>YOUNG</span> <br/> SCIENTISTS.
              </h2>
            </div>
            
            <div style={{ backgroundColor: colors.brightYellow, border: thickBorder, padding: '1.5rem', marginTop: '2rem', maxWidth: '600px', boxShadow: solidShadow, transform: 'rotate(1deg)', marginLeft: 'auto' }}>
              <p style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, lineHeight: 1.5 }}>
                Dr. Homi Bhabha Balvaidnyanik Competition is conducted by The Greater Bombay Science Teachers’ Association since 1981 to explore the world of science for students of std VI and IX of English and Marathi medium.
              </p>
            </div>
          </div>
          
          {/* Overlapping Image */}
          <div style={{ height: '30vh', width: '100%', borderTop: thickBorder, borderBottom: thickBorder, marginTop: 'auto', backgroundColor: colors.black, position: 'relative' }}>
             <img 
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80" 
              alt="Lab" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.5) sepia(1) hue-rotate(-50deg) saturate(3)' }} 
            />
          </div>
        </section>

        {/* 4 Brutalist Cards Grid */}
        <section style={{ borderBottom: thickBorder, backgroundColor: colors.white }}>
          <div className="grid-auto-fit-300">
            
            <article className="brutalist-card" style={{ backgroundColor: colors.neonPink, color: colors.black, padding: '3rem 2rem', borderRight: thickBorder, borderBottom: thickBorder, display: 'flex', flexDirection: 'column', transition: 'all 0.2s', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 10, right: 10, backgroundColor: colors.white, border: thickBorder, borderRadius: '50%', padding: '0.5rem' }}><GraduationCap size={40}/></div>
              <h3 style={{ fontFamily: fonts.display, fontSize: '2.5rem', fontWeight: 900, marginTop: '2rem', marginBottom: '1rem', lineHeight: 1 }}>STUDENTS<br/>CORNER</h3>
              <p style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '2rem', flexGrow: 1 }}>Dr. Homi Bhabha Balvaidnyanik Competition is conducted by MSTA since 1981 to explore...</p>
              <button style={{ backgroundColor: colors.black, color: colors.white, padding: '1rem', fontWeight: 900, border: 'none', fontSize: '1.2rem', textTransform: 'uppercase', cursor: 'pointer' }}>Read More &rarr;</button>
            </article>

            <article className="brutalist-card" style={{ backgroundColor: colors.neonGreen, color: colors.black, padding: '3rem 2rem', borderRight: thickBorder, borderBottom: thickBorder, display: 'flex', flexDirection: 'column', transition: 'all 0.2s', position: 'relative' }}>
               <div style={{ position: 'absolute', top: 10, right: 10, backgroundColor: colors.white, border: thickBorder, borderRadius: '50%', padding: '0.5rem' }}><Sparkles size={40}/></div>
              <h3 style={{ fontFamily: fonts.display, fontSize: '2.5rem', fontWeight: 900, marginTop: '2rem', marginBottom: '1rem', lineHeight: 1 }}>HOMI BHABHA<br/>EXAMS</h3>
              <p style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '2rem', flexGrow: 1 }}>Conducted by The Mumbai Science Teachers Association since 1981 for students of std VI and IX.</p>
              <button style={{ backgroundColor: colors.black, color: colors.white, padding: '1rem', fontWeight: 900, border: 'none', fontSize: '1.2rem', textTransform: 'uppercase', cursor: 'pointer' }}>Read More &rarr;</button>
            </article>

            <article className="brutalist-card" style={{ backgroundColor: colors.electricBlue, color: colors.white, padding: '3rem 2rem', borderRight: thickBorder, borderBottom: thickBorder, display: 'flex', flexDirection: 'column', transition: 'all 0.2s', position: 'relative' }}>
               <div style={{ position: 'absolute', top: 10, right: 10, backgroundColor: colors.white, border: thickBorder, borderRadius: '50%', padding: '0.5rem', color: colors.black }}><Activity size={40}/></div>
              <h3 style={{ fontFamily: fonts.display, fontSize: '2.5rem', fontWeight: 900, marginTop: '2rem', marginBottom: '1rem', lineHeight: 1 }}>ACTIVITIES<br/>DETAILS</h3>
              <p style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '2rem', flexGrow: 1 }}>Truly the highlight of M.S.T.A.'s achievements. Started in 1981 in Marathi medium.</p>
              <button style={{ backgroundColor: colors.black, color: colors.white, padding: '1rem', fontWeight: 900, border: `2px solid ${colors.white}`, fontSize: '1.2rem', textTransform: 'uppercase', cursor: 'pointer' }}>Read More &rarr;</button>
            </article>

            <article className="brutalist-card" style={{ backgroundColor: colors.brightYellow, color: colors.black, padding: '3rem 2rem', borderBottom: thickBorder, display: 'flex', flexDirection: 'column', transition: 'all 0.2s', position: 'relative' }}>
               <div style={{ position: 'absolute', top: 10, right: 10, backgroundColor: colors.white, border: thickBorder, borderRadius: '50%', padding: '0.5rem' }}><BookOpen size={40}/></div>
              <h3 style={{ fontFamily: fonts.display, fontSize: '2.5rem', fontWeight: 900, marginTop: '2rem', marginBottom: '1rem', lineHeight: 1 }}>SCIENCE<br/>ENRICHMENT</h3>
              <p style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '2rem', flexGrow: 1 }}>GBSTA announces programme for gifted 'Young Scientists! Explore the world...</p>
              <button style={{ backgroundColor: colors.black, color: colors.white, padding: '1rem', fontWeight: 900, border: 'none', fontSize: '1.2rem', textTransform: 'uppercase', cursor: 'pointer' }}>Read More &rarr;</button>
            </article>

          </div>
        </section>

        {/* Exams Action Block (Wild Shapes) */}
        <section style={{ backgroundColor: colors.black, padding: '6rem 2rem', borderBottom: thickBorder }}>
          <div className="container" style={{ position: 'relative' }}>
             
            <h2 style={{ fontFamily: fonts.display, fontSize: 'clamp(1.8rem, 7vw, 5rem)', fontWeight: 900, color: colors.neonPink, marginBottom: '3rem', textAlign: 'center', WebkitTextStroke: `1px ${colors.white}` }}>
              EXAMINATIONS // ACTIONS
            </h2>

            <div className="grid-auto-fit-300" style={{ gap: '2rem' }}>
              
              <a href="#" className="brutalist-card" style={{ backgroundColor: colors.white, color: colors.black, padding: '2.5rem', border: thickBorder, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', textDecoration: 'none', fontWeight: 800, fontSize: '1.4rem' }}>
                <div style={{ backgroundColor: colors.brightYellow, padding: '1rem', border: thickBorder, borderRadius: '50%', marginBottom: '1rem', transform: 'rotate(-10deg)' }}><FileText size={48}/></div>
                BIO-DATA FOR THIRD AND FOURTH ROUND COMP.
              </a>

               <a href="#" className="brutalist-card" style={{ backgroundColor: colors.electricBlue, color: colors.white, padding: '2.5rem', border: thickBorder, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', textDecoration: 'none', fontWeight: 900, fontSize: '1.6rem' }}>
                <div style={{ backgroundColor: colors.neonPink, padding: '1rem', border: thickBorder, borderRadius: '50%', marginBottom: '1rem', color: colors.black, transform: 'rotate(10deg)' }}><Award size={48}/></div>
                VIEW RESULT OF DHBBVC
              </a>

              <a href="#" className="brutalist-card" style={{ backgroundColor: colors.neonGreen, color: colors.black, padding: '2.5rem', border: thickBorder, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', textDecoration: 'none', fontWeight: 800, fontSize: '1.4rem' }}>
                <div style={{ backgroundColor: colors.white, padding: '1rem', border: thickBorder, borderRadius: '0', marginBottom: '1rem', transform: 'scale(1.1)' }}><Calendar size={48}/></div>
                APPLY ONLINE FOR COMPETITION
              </a>

              <a href="#" className="brutalist-card" style={{ backgroundColor: colors.neonPink, color: colors.white, padding: '2.5rem', border: thickBorder, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', textDecoration: 'none', fontWeight: 800, fontSize: '1.4rem' }}>
                <div style={{ backgroundColor: colors.black, padding: '1rem', border: `4px dashed ${colors.white}`, borderRadius: '50%', marginBottom: '1rem' }}><Ticket size={48}/></div>
                CENTER & HALL TICKET ACCESS
              </a>

            </div>

          </div>
        </section>

        {/* Latest News & Resources (Information Overload Grid) */}
        <section className="flex-responsive" style={{ backgroundColor: colors.white }}>
          
          {/* News Stream - 50% */}
          <div style={{ flex: '1 1 500px', borderRight: thickBorder, padding: '4rem 2rem', backgroundColor: '#EFEFEF' }}>
            <h2 style={{ fontFamily: fonts.display, fontSize: 'clamp(2rem, 8vw, 4rem)', fontWeight: 900, borderBottom: thickBorder, paddingBottom: '1rem', margin: '0 0 2rem 0' }}>LATEST_NEWS</h2>
            
            <article style={{ border: thickBorder, marginBottom: '2rem', backgroundColor: colors.white, boxShadow: solidShadow }}>
              <div style={{ backgroundColor: colors.neonPink, color: colors.white, padding: '1rem', borderBottom: thickBorder, display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 900, fontSize: '1.2rem' }}>
                <Award /> RESULTS OF DHBBVC PRACTICAL
              </div>
              <div style={{ padding: '2rem', fontWeight: 600, fontSize: '1.1rem', lineHeight: 1.5 }}>
                <p>Announced on Friday 9th February 2024 @ 7 PM.</p>
                <div style={{ backgroundColor: colors.brightYellow, padding: '1rem', border: thickBorder, marginTop: '1rem', fontSize: '1rem' }}>
                  <strong>TO VIEW RESULT:</strong><br/>
                  1. Click View Result<br/>
                  2. RESULT LOGIN (Yellow)<br/>
                  3. Enter Theory Roll<br/>
                  4. GET RESULT
                </div>
              </div>
            </article>

            <article style={{ border: thickBorder, backgroundColor: colors.white, boxShadow: solidShadow }}>
              <div style={{ backgroundColor: colors.electricBlue, color: colors.white, padding: '1rem', borderBottom: thickBorder, display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 900, fontSize: '1.2rem' }}>
                <BookOpen /> OFFICIAL AUTHENTIC BOOK
              </div>
              <div style={{ padding: '2rem', fontWeight: 600, fontSize: '1.1rem', lineHeight: 1.5 }}>
                <p>Published by Menaka Prakashan. Available with leading book stores in Maharashtra.</p>
                <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#555' }}>CONTACT: books@menakaprakashan.com OR 9823696960</p>
              </div>
            </article>

          </div>

          {/* Resources Directory - 50% */}
          <div style={{ flex: '1 1 500px', padding: '4rem 2rem', backgroundColor: colors.brightYellow }}>
             <h2 style={{ fontFamily: fonts.display, fontSize: 'clamp(2rem, 8vw, 4rem)', fontWeight: 900, borderBottom: thickBorder, paddingBottom: '1rem', margin: '0 0 2rem 0' }}>RESOURCES.DAT</h2>
             
             <div style={{ border: thickBorder, backgroundColor: colors.white, maxHeight: '800px', overflowY: 'auto' }}>
                {LINKS.map((item, idx) => (
                  <a key={idx} href={item.link} style={{ 
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
                    padding: '1.2rem 1.5rem', borderBottom: idx === LINKS.length - 1 ? 'none' : thickBorder,
                    textDecoration: 'none', color: colors.black, fontWeight: 700,
                    transition: 'all 0.1s ease', backgroundColor: idx % 2 === 0 ? colors.white : '#FAFAFA'
                  }}
                  onMouseOver={e => { e.currentTarget.style.backgroundColor = colors.neonGreen }}
                  onMouseOut={e => { e.currentTarget.style.backgroundColor = idx % 2 === 0 ? colors.white : '#FAFAFA' }}>
                    <span>&gt;&gt; {item.title}</span><Download size={24} />
                  </a>
                ))}
             </div>
          </div>
        </section>

      </main>

      {/* Brutalist Footer */}
      <footer style={{ backgroundColor: colors.black, color: colors.white, borderTop: thickBorder, padding: '6rem 2rem 2rem 2rem' }}>
        <div className="container">
           <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', justifyContent: 'space-between', marginBottom: '4rem' }}>
              
              <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ fontFamily: fonts.display, fontSize: '5rem', fontWeight: 900, margin: '0 0 1rem 0', color: colors.brightYellow, lineHeight: 0.8 }}>MSTA</h3>
                <p style={{ fontSize: '1.2rem', fontWeight: 600, maxWidth: '400px' }}>For the Cause of Science Education and Science Talent Search since 1981.</p>
                <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href={`mailto:${CONTACT_INFO.email}`} style={{ backgroundColor: colors.white, color: colors.black, padding: '0.8rem 1.5rem', fontWeight: 800, textDecoration: 'none', border: thickBorder }}>MAIL US</a>
                  <a href={CONTACT_INFO.facebook} style={{ backgroundColor: colors.electricBlue, color: colors.white, padding: '0.8rem 1.5rem', fontWeight: 800, textDecoration: 'none', border: thickBorder }}>FACEBOOK</a>
                </div>
              </div>

              <div style={{ flex: '1 1 250px' }}>
                <h4 style={{ fontSize: '2rem', fontFamily: fonts.display, fontWeight: 900, marginBottom: '2rem', borderBottom: `4px solid ${colors.white}`, paddingBottom: '0.5rem', display: 'inline-block' }}>LINKS</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.2rem', fontWeight: 700 }}>
                  {FOOTER_LINKS.map((item, i) => {
                    const linkColors = [colors.neonGreen, colors.neonPink, colors.brightYellow];
                    return (
                      <a key={item.link} href={item.link} style={{ color: linkColors[i % linkColors.length], textDecoration: 'none' }}>&gt;&gt; {item.label}</a>
                    );
                  })}
                  <a href="https://msta.in/privacy-policy/" style={{ color: colors.white, textDecoration: 'none' }}>&gt;&gt; Privacy Policy</a>
                  <a href="https://msta.in/refund-policy/" style={{ color: colors.white, textDecoration: 'none' }}>&gt;&gt; Refund Policy</a>
                </div>
              </div>

           </div>

           <div style={{ borderTop: `4px solid #333`, paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', fontWeight: 600, fontFamily: fonts.display }}>
             <span>{new Date().getFullYear()} © MUMBAI SCIENCE TEACHER'S ASSOCIATION.</span>
             <a href="#" style={{ color: colors.brightYellow }}>BIO-DATA FORMAT DL</a>
           </div>
        </div>
      </footer>
    </div>
  );
}

export default Template3;
