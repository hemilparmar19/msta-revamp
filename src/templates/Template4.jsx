import React, { useState } from 'react';
import { ArrowRight, Download, BookOpen, Users, Calendar, Award, ChevronDown, GraduationCap, Sparkles, Activity, FileText, Ticket } from 'lucide-react';
import { LINKS, ABOUT_MENU_ITEMS, CONTACT_INFO, FOOTER_LINKS, BIO_DATA_PDF } from '../data';

function Template4() {
  const [activeMenu, setActiveMenu] = useState(null);

  // Vibrant / Tech / Esports Theme Constants
  const colors = {
    bgBase: '#0b0c10',
    bgLight: '#1f2833',
    neonCyan: '#66fcf1',
    neonTeal: '#45a29e',
    white: '#ffffff',
    textMuted: '#c5c6c7',
    accentPink: '#ff007f', // Secondary energetic color
    accentPurple: '#7c00ff'
  };

  const fonts = {
    heading: '"Inter", sans-serif', 
    body: '"Inter", sans-serif'
  };

  const glassStyle = {
    background: 'rgba(31, 40, 51, 0.65)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(102, 252, 241, 0.1)',
  };

  return (
    <div style={{ fontFamily: fonts.body, backgroundColor: colors.bgBase, color: colors.white, minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* Dynamic Background Glows */}
      <div style={{ position: 'fixed', top: '-20%', left: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: `radial-gradient(circle, ${colors.accentPurple}44 0%, transparent 70%)`, pointerEvents: 'none', zIndex: 0, filter: 'blur(60px)' }}></div>
      <div style={{ position: 'fixed', bottom: '-20%', right: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: `radial-gradient(circle, ${colors.neonTeal}33 0%, transparent 70%)`, pointerEvents: 'none', zIndex: 0, filter: 'blur(60px)' }}></div>

      {/* Styled Components CSS Injection */}
      <style>
        {`
          .glowing-text {
            text-shadow: 0 0 10px ${colors.neonCyan}88, 0 0 20px ${colors.neonCyan}44;
          }
          .skew-btn {
            transform: skewX(-10deg);
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            position: relative;
            overflow: hidden;
          }
          .skew-btn:hover {
            transform: skewX(-10deg) translateY(-3px);
            box-shadow: 0 10px 20px -5px ${colors.neonCyan}66;
          }
          .skew-btn > * {
            transform: skewX(10deg);
            display: inline-block;
          }
          .skew-btn::before {
            content: '';
            position: absolute;
            top: 0; left: -100%; width: 100%; height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s ease;
          }
          .skew-btn:hover::before {
            left: 100%;
          }
          .glass-card {
            transition: all 0.4s ease;
          }
          .glass-card:hover {
            transform: translateY(-8px);
            border-color: ${colors.neonCyan};
            box-shadow: 0 10px 30px -10px ${colors.neonCyan}55;
          }
          .nav-link {
            position: relative;
          }
          .nav-link::after {
            content: ''; position: absolute; bottom: -4px; left: 0; width: 0%; height: 2px;
            background: ${colors.neonCyan}; transition: width 0.3s ease;
          }
          .nav-link:hover::after { width: 100%; }
        `}
      </style>

      {/* Futuristic Utility Header */}
      <div style={{ ...glassStyle, position: 'relative', zIndex: 101, borderBottom: `1px solid rgba(255,255,255,0.05)`, padding: '0.5rem 0', fontSize: '0.8rem', color: colors.textMuted }}>
        <div className="container utility-bar">
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href={`mailto:${CONTACT_INFO.email}`} style={{ color: colors.textMuted, textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color=colors.white} onMouseOut={e=>e.currentTarget.style.color=colors.textMuted}>Email Us</a>
            <a href={CONTACT_INFO.facebook} target="_blank" rel="noreferrer" style={{ color: colors.textMuted, textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color=colors.white} onMouseOut={e=>e.currentTarget.style.color=colors.textMuted}>Facebook</a>
          </div>
        </div>
      </div>

      {/* Main Glass Header */}
      <header style={{ position: 'sticky', top: 0, zIndex: 100, ...glassStyle, borderBottom: `1px solid rgba(102, 252, 241, 0.2)` }}>
        <div className="container flex-responsive" style={{ justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem 1rem', gap: '1rem' }}>
          
          {/* Logo Area */}
          <a href="/" className="text-center-mobile" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontSize: '1.8rem', fontWeight: 900, color: colors.white, letterSpacing: '1px' }}>
              MSTA<span style={{ color: colors.neonCyan }}>.in</span>
            </span>
            <span style={{ fontSize: '0.7rem', color: colors.textMuted, textTransform: 'uppercase', letterSpacing: '2px', marginTop: '4px' }}>Mumbai Science Teachers</span>
          </a>
          
          <nav className="nav-links" style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
            <a href="/" className="nav-link" style={{ color: colors.white, textDecoration: 'none' }}>Home</a>
            
            {/* Dropdown Menu */}
            <div style={{ position: 'relative' }} onMouseEnter={() => setActiveMenu('about')} onMouseLeave={() => setActiveMenu(null)}>
              <button style={{ background: 'none', border: 'none', color: colors.white, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer', outline: 'none' }} className="nav-link">
                About Us <ChevronDown size={14} color={colors.neonCyan} />
              </button>
              {activeMenu === 'about' && (
                <div style={{ position: 'absolute', top: '200%', left: '50%', transform: 'translateX(-50%)', background: colors.bgLight, border: `1px solid ${colors.neonCyan}44`, borderRadius: '12px', minWidth: '220px', display: 'flex', flexDirection: 'column', padding: '0.5rem', boxShadow: `0 15px 35px rgba(0,0,0,0.5)`, overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: '10%', width: '80%', height: '1px', background: `linear-gradient(90deg, transparent, ${colors.neonCyan}, transparent)` }}></div>
                  {ABOUT_MENU_ITEMS.map((sub) => (
                    <a key={sub.link} href={sub.link} style={{ padding: '0.8rem 1rem', color: colors.textMuted, textDecoration: 'none', borderRadius: '8px', transition: 'all 0.2s' }}
                      onMouseOver={e=>{ e.currentTarget.style.backgroundColor = 'rgba(102, 252, 241, 0.1)'; e.currentTarget.style.color = colors.neonCyan; e.currentTarget.style.paddingLeft = '1.5rem'; }}
                      onMouseOut={e=>{ e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = colors.textMuted; e.currentTarget.style.paddingLeft = '1rem'; }}
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="https://msta.in/contents/" className="nav-link" style={{ color: colors.white, textDecoration: 'none' }}>Authentic Book</a>
            <a href="https://msta.in/students-corner/" className="nav-link" style={{ color: colors.white, textDecoration: 'none' }}>Students Corner</a>
            <a href="https://msta.in/downloads/" className="nav-link" style={{ color: colors.white, textDecoration: 'none' }}>Downloads</a>
            <a href="https://msta.in/science-enritchment-programme-preparation-for-ijso/" className="skew-btn" style={{ backgroundColor: colors.accentPink, color: colors.white, padding: '0.5rem 1.5rem', textDecoration: 'none', display: 'inline-block' }}>
               <span>IJSO</span>
            </a>
          </nav>
        </div>
      </header>

      <main style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Dynamic Hero Section */}
        <section style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', padding: '4rem 0', position: 'relative' }}>
          
          {/* Abstract Tech Graphic Background */}
          <div style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', opacity: 0.15, mixBlendMode: 'screen', pointerEvents: 'none', filter: 'hue-rotate(90deg)' }}>
            <svg width="600" height="600" viewBox="0 0 100 100" fill="none">
               <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" stroke={colors.neonCyan} strokeWidth="0.5" fill="none"/>
               <path d="M50 10 L80 25 L80 75 L50 90 L20 75 L20 25 Z" stroke={colors.accentPink} strokeWidth="0.5" fill="none"/>
               <circle cx="50" cy="50" r="30" stroke={colors.neonTeal} strokeWidth="1" strokeDasharray="2 4"/>
               <line x1="0" y1="50" x2="100" y2="50" stroke={colors.neonCyan} strokeWidth="0.2" />
               <line x1="50" y1="0" x2="50" y2="100" stroke={colors.neonCyan} strokeWidth="0.2" />
            </svg>
          </div>

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'inline-block', border: `1px solid ${colors.neonCyan}`, padding: '0.5rem 1rem', borderRadius: '100px', color: colors.neonCyan, fontSize: '0.8rem', fontWeight: 600, letterSpacing: '2px', marginBottom: '2rem', backgroundColor: 'rgba(102, 252, 241, 0.05)' }}>
              &#x25B6; DR. HOMI BHABHA BALVAIDNYANIK COMPETITION
            </div>
            
            <h1 style={{ fontSize: 'clamp(2rem, 8vw, 6rem)', fontWeight: 900, lineHeight: 1.1, margin: '0 0 2rem 0', letterSpacing: '-1px' }}>
              Empowering the <br/>
              <span className="glowing-text" style={{ color: colors.neonCyan }}>Next Generation</span> <br/>
              of Scientists.
            </h1>
            
            <p style={{ fontSize: '1.2rem', color: colors.textMuted, maxWidth: '600px', lineHeight: 1.6, marginBottom: '3rem' }}>
              Conducted by The Greater Bombay Science Teachers’ Association since 1981 to explore the world of science for students of std VI and IX of English and Marathi medium.
            </p>
            
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <button className="skew-btn" style={{ backgroundColor: colors.neonCyan, color: colors.bgBase, border: 'none', padding: '1.2rem 2.5rem', fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer' }}>
                <span>Explore Exams</span>
              </button>
              <button className="skew-btn" style={{ backgroundColor: 'transparent', color: colors.white, border: `2px solid rgba(255,255,255,0.2)`, padding: '1.2rem 2.5rem', fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer' }}>
                <span>Latest News</span>
              </button>
            </div>
          </div>
        </section>

        {/* 4 Neon Cards Grid */}
        <section style={{ padding: '2rem 0 6rem 0' }}>
          <div className="container">
            <div className="grid-auto-fit-250" style={{ gap: '2rem' }}>
              
              <article className="glass-card" style={{ ...glassStyle, padding: '2.5rem', borderRadius: '20px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: `radial-gradient(circle, ${colors.neonCyan}44 0%, transparent 70%)`, filter: 'blur(20px)' }}></div>
                <GraduationCap size={40} color={colors.neonCyan} style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: colors.white }}>STUDENTS CORNER</h3>
                <p style={{ color: colors.textMuted, lineHeight: 1.6, marginBottom: '2rem', flexGrow: 1, fontSize: '0.95rem' }}>Dr. Homi Bhabha Balvaidnyanik Competition is conducted by MSTA since 1981 to explore the world of science for students.</p>
                <a href="#" style={{ color: colors.neonCyan, textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Launch Portal <ArrowRight size={16}/></a>
              </article>

              <article className="glass-card" style={{ ...glassStyle, padding: '2.5rem', borderRadius: '20px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: `radial-gradient(circle, ${colors.accentPink}44 0%, transparent 70%)`, filter: 'blur(20px)' }}></div>
                <Sparkles size={40} color={colors.accentPink} style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: colors.white }}>HOMI BHABHA EXAMS</h3>
                <p style={{ color: colors.textMuted, lineHeight: 1.6, marginBottom: '2rem', flexGrow: 1, fontSize: '0.95rem' }}>Conducted by The Mumbai Science Teachers Association since 1981 for the student of std VI and IX of English and Marathi.</p>
                <a href="#" style={{ color: colors.accentPink, textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>View Exams <ArrowRight size={16}/></a>
              </article>

              <article className="glass-card" style={{ ...glassStyle, padding: '2.5rem', borderRadius: '20px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: `radial-gradient(circle, ${colors.accentPurple}44 0%, transparent 70%)`, filter: 'blur(20px)' }}></div>
                <Activity size={40} color={colors.accentPurple} style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: colors.white }}>ACTIVITIES DETAILS</h3>
                <p style={{ color: colors.textMuted, lineHeight: 1.6, marginBottom: '2rem', flexGrow: 1, fontSize: '0.95rem' }}>Truly the highlight of M.S.T.A.'s achievements. This competition was started in 1981 in Marathi medium.</p>
                <a href="#" style={{ color: colors.accentPurple, textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Read More <ArrowRight size={16}/></a>
              </article>

              <article className="glass-card" style={{ ...glassStyle, padding: '2.5rem', borderRadius: '20px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: `radial-gradient(circle, ${colors.neonTeal}44 0%, transparent 70%)`, filter: 'blur(20px)' }}></div>
                <BookOpen size={40} color={colors.neonTeal} style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: colors.white }}>SCIENCE ENRICHMENT</h3>
                <p style={{ color: colors.textMuted, lineHeight: 1.6, marginBottom: '2rem', flexGrow: 1, fontSize: '0.95rem' }}>GBSTA announces programme for gifted 'Young Scientists! Explore the immense world of possibilities.</p>
                <a href="#" style={{ color: colors.neonTeal, textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Discover <ArrowRight size={16}/></a>
              </article>

            </div>
          </div>
        </section>

        {/* Exams Action Block (Interactive Pill Layout) */}
        <section style={{ padding: '6rem 0', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', background: `linear-gradient(90deg, transparent, ${colors.neonCyan}44, transparent)` }}></div>
          
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
              <div style={{ height: '2px', flexGrow: 1, background: `linear-gradient(90deg, transparent, ${colors.textMuted}33)` }}></div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px' }}>Exam <span style={{ color: colors.neonCyan }}>Actions</span></h2>
              <div style={{ height: '2px', flexGrow: 1, background: `linear-gradient(90deg, ${colors.textMuted}33, transparent)` }}></div>
            </div>

            <div className="grid-auto-fit-250" style={{ gap: '1.5rem' }}>
              
              <a href="#" className="glass-card" style={{ ...glassStyle, padding: '1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1.5rem', textDecoration: 'none', color: colors.white }}>
                <div style={{ backgroundColor: 'rgba(102, 252, 241, 0.1)', padding: '1rem', borderRadius: '12px', color: colors.neonCyan }}><FileText size={32}/></div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.2rem' }}>Bio-Data Form</h4>
                  <p style={{ color: colors.textMuted, fontSize: '0.85rem', margin: 0 }}>Rounds 3 & 4</p>
                </div>
              </a>

              <a href="#" className="glass-card" style={{ ...glassStyle, borderColor: colors.neonCyan, padding: '1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1.5rem', textDecoration: 'none', color: colors.white, background: 'rgba(102, 252, 241, 0.05)' }}>
                <div style={{ backgroundColor: colors.neonCyan, padding: '1rem', borderRadius: '12px', color: colors.bgBase }}><Award size={32}/></div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 900, marginBottom: '0.2rem', color: colors.neonCyan }}>View Results</h4>
                  <p style={{ color: colors.textMuted, fontSize: '0.85rem', margin: 0 }}>DHBBVC 2023-24</p>
                </div>
              </a>

              <a href="#" className="glass-card" style={{ ...glassStyle, padding: '1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1.5rem', textDecoration: 'none', color: colors.white }}>
                <div style={{ backgroundColor: 'rgba(255, 0, 127, 0.1)', padding: '1rem', borderRadius: '12px', color: colors.accentPink }}><Calendar size={32}/></div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.2rem' }}>Apply Online</h4>
                  <p style={{ color: colors.textMuted, fontSize: '0.85rem', margin: 0 }}>New registrations</p>
                </div>
              </a>

              <a href="#" className="glass-card" style={{ ...glassStyle, padding: '1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1.5rem', textDecoration: 'none', color: colors.white }}>
                <div style={{ backgroundColor: 'rgba(124, 0, 255, 0.1)', padding: '1rem', borderRadius: '12px', color: colors.accentPurple }}><Ticket size={32}/></div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.2rem' }}>Hall Ticket</h4>
                  <p style={{ color: colors.textMuted, fontSize: '0.85rem', margin: 0 }}>Center information</p>
                </div>
              </a>

            </div>

            {/* Vibrant Banner Component */}
            <div style={{ marginTop: '4rem', ...glassStyle, borderRadius: '24px', padding: '3rem', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: `linear-gradient(45deg, ${colors.bgLight}, transparent)`, zIndex: 0 }}></div>
              <img src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80" alt="Students" style={{ position: 'absolute', right: 0, top: 0, height: '100%', width: '50%', objectFit: 'cover', opacity: 0.3, zIndex: 0, maskImage: 'linear-gradient(to right, transparent, black)', WebkitMaskImage: 'linear-gradient(to right, transparent, black)' }} />
              
              <div style={{ position: 'relative', zIndex: 1, maxWidth: '500px' }}>
                <div style={{ display: 'inline-block', backgroundColor: colors.accentPurple, padding: '0.3rem 0.8rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>Featured</div>
                <h3 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.1 }}>Science Enrichment Programme</h3>
                <p style={{ color: colors.textMuted, lineHeight: 1.6 }}>Accelerate your journey. Exclusive programs for the brightest minds.</p>
              </div>
              <button className="skew-btn" style={{ position: 'relative', zIndex: 1, backgroundColor: colors.white, color: colors.bgBase, border: 'none', padding: '1rem 2rem', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', cursor: 'pointer' }}>
                <span>Discover</span>
              </button>
            </div>
          </div>
        </section>

        {/* Latest News & Resources Section */}
        <section style={{ padding: '6rem 0', backgroundColor: '#0d1117' }}>
          <div className="container grid-auto-fit-300" style={{ gap: '4rem' }}>
            
            {/* News Feed */}
            <div>
               <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                 <span style={{ color: colors.neonCyan }}>///</span> LATEST LOGS
               </h2>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div className="glass-card" style={{ ...glassStyle, padding: '2rem', borderRadius: '16px', borderLeft: `4px solid ${colors.neonCyan}` }}>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem', color: colors.white, display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Award size={20} color={colors.neonCyan}/> Results of DHBBVC Practical</h4>
                    <p style={{ color: colors.textMuted, fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>Results of DHBBVC 2023-24 Practical Competition will be announced on Friday 9th February 2024 @ 7 PM. View the result on our website using your login credentials.</p>
                    <a href="#" style={{ color: colors.neonCyan, fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '1px' }}>Read More &gt;</a>
                  </div>

                  <div className="glass-card" style={{ ...glassStyle, padding: '2rem', borderRadius: '16px', borderLeft: `4px solid ${colors.accentPink}` }}>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem', color: colors.white, display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FileText size={20} color={colors.accentPink}/> Official Authentic Book Published</h4>
                    <p style={{ color: colors.textMuted, fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>Our Official Authentic Book for DHBBC published by Menaka Prakashan is now available with all leading book stores from all over maharashtra.</p>
                    <a href="#" style={{ color: colors.accentPink, fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '1px' }}>Buy Now &gt;</a>
                  </div>
               </div>
            </div>

            {/* Matrix Data Bank */}
            <div>
               <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'space-between' }}>
                 <span><span style={{ color: colors.accentPurple }}>///</span> DATA VAULT</span>
                 <span style={{ fontSize: '0.8rem', color: colors.textMuted, fontWeight: 400 }}>{LINKS.length} Files Found</span>
               </h2>
               
               <div style={{ ...glassStyle, padding: '1rem', borderRadius: '16px', maxHeight: '500px', overflowY: 'auto' }}>
                  {LINKS.map((item, idx) => (
                    <a key={idx} href={item.link} style={{ 
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
                      padding: '1.2rem', borderBottom: idx === LINKS.length - 1 ? 'none' : `1px solid rgba(255,255,255,0.05)`,
                      textDecoration: 'none', color: colors.textMuted, transition: 'all 0.2s ease', borderRadius: '8px'
                    }}
                    onMouseOver={e => { e.currentTarget.style.backgroundColor = 'rgba(102, 252, 241, 0.05)'; e.currentTarget.style.color = colors.white; e.currentTarget.style.paddingLeft = '2rem' }}
                    onMouseOut={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = colors.textMuted; e.currentTarget.style.paddingLeft = '1.2rem' }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{item.title}</span>
                      <Download size={16} />
                    </a>
                  ))}
               </div>
            </div>

          </div>
        </section>

      </main>

      {/* Futuristic Footer */}
      <footer style={{ ...glassStyle, position: 'relative', zIndex: 10, paddingTop: '5rem', paddingBottom: '2rem', borderTop: `1px solid rgba(102, 252, 241, 0.2)` }}>
        <div className="container">
          <div className="grid-auto-fit-250" style={{ gap: '4rem', marginBottom: '4rem' }}>
            
            <div>
              <h3 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: 900, marginBottom: '1rem', letterSpacing: '1px', color: colors.white }}>MSTA<span style={{ color: colors.neonCyan }}>.in</span></h3>
              <p style={{ color: colors.textMuted, lineHeight: 1.6, marginBottom: '2rem', maxWidth: '300px' }}>{CONTACT_INFO.tagline}.</p>
              <a href={`mailto:${CONTACT_INFO.email}`} style={{ display: 'inline-block', color: colors.neonCyan, border: `1px solid ${colors.neonCyan}`, padding: '0.8rem 1.5rem', borderRadius: '100px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', transition: 'all 0.3s' }} onMouseOver={e=>{e.currentTarget.style.background=colors.neonCyan; e.currentTarget.style.color=colors.bgBase;}} onMouseOut={e=>{e.currentTarget.style.background='transparent'; e.currentTarget.style.color=colors.neonCyan;}}>Contact Support</a>
            </div>

            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: colors.white, marginBottom: '2rem' }}>Core System</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {FOOTER_LINKS.map((item) => (
                  <li key={item.link}><a href={item.link} style={{ color: colors.textMuted, textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color=colors.neonCyan} onMouseOut={e=>e.currentTarget.style.color=colors.textMuted}>&gt; {item.label}</a></li>
                ))}
                <li><a href="https://msta.in/privacy-policy/" style={{ color: colors.textMuted, textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color=colors.neonCyan} onMouseOut={e=>e.currentTarget.style.color=colors.textMuted}>&gt; Privacy Protocol</a></li>
                <li><a href="https://msta.in/refund-policy/" style={{ color: colors.textMuted, textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color=colors.neonCyan} onMouseOut={e=>e.currentTarget.style.color=colors.textMuted}>&gt; Refund Policy</a></li>
              </ul>
            </div>

            <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '220px', border: `1px solid rgba(255,255,255,0.1)` }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: `${colors.neonTeal}44`, mixBlendMode: 'color', zIndex: 1 }}></div>
              <img src="public/school_building_exterior_1772616261891.png" alt="HQ" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.2)' }} />
            </div>

          </div>

          <div style={{ paddingTop: '2rem', borderTop: `1px solid rgba(255,255,255,0.05)`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <p style={{ color: colors.textMuted, fontSize: '0.85rem' }}>// {new Date().getFullYear()} M.S.T.A SYSTEM ONLINE. ALL RIGHTS RESERVED.</p>
            <a href={BIO_DATA_PDF} style={{ color: colors.white, fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600, backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '100px' }}>Extract Bio-Data.pdf</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Template4;
