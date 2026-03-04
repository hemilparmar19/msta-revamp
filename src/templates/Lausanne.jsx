import React, { useState } from 'react';
import { ArrowRight, Download, BookOpen, Users, Calendar, Award, ChevronDown, GraduationCap, Sparkles, Activity, FileText, Ticket } from 'lucide-react';

const LINKS = [
  { title: 'G.B.S.T.A. JOURNAL ( उत्प्रेरक )', link: 'https://msta.in/wp-content/uploads/2025/06/GBSTA-Pamphlet.pdf' },
  { title: 'Schedule for 2025 \u2013 2026', link: 'https://msta.in/schedule-2025-2026/' },
  { title: 'DHBBVC 2025-26 Information Circular', link: 'https://msta.in/wp-content/uploads/2025/06/GBSTA-Pamphlet.pdf' },
  { title: 'Cut-off for DHBBVC 2025-26', link: 'https://msta.in/wp-content/uploads/2025/12/REVISED-CUT-OFF-LIST-2025-2026.pdf' },
  { title: 'Std VI and IX practical cutoff list 2025-26', link: 'https://msta.in/wp-content/uploads/2026/02/PRACTICAL-CUT-OFF-2025-26.pdf' },
  { title: 'Information about DHBBVC 2022-23', link: 'http://msta.in/homi-bhabha-exams' },
  { title: 'DHBBVC 2025-26 VI REVISED ANSWER KEY', link: 'https://msta.in/wp-content/uploads/2025/11/Revised-Std-VI-English-Marathi-2025-26-1.pdf' },
  { title: 'DHBBVC 2025-26 IX REVISED ANSWER KEY', link: 'https://msta.in/wp-content/uploads/2025/11/Revised-Std-IX-English-Marathi-2025-26.pdf' },
  { title: 'Theory Question Paper IX English', link: 'https://msta.in/wp-content/uploads/2024/12/Revised-9th-English_1511_1824Hrs.pdf' },
  { title: 'Theory Question Paper IX Marathi', link: 'https://msta.in/wp-content/uploads/2024/12/Revised-9th-Marathi_1511_1824Hrs.pdf' },
  { title: 'Theory Question Paper VI English', link: 'https://msta.in/wp-content/uploads/2024/12/Revised-6th-English_1511_1500Hrs.pdf' },
  { title: 'Theory Question Paper VI Marathi', link: 'https://msta.in/wp-content/uploads/2024/12/Revised-6th-Marathi_1511_1500Hrs.pdf' },
  { title: 'Practical Examination Information', link: 'http://msta.in/practical-examination-information/' },
  { title: 'VI \u2013 Practical Sample Questions', link: 'http://msta.in/wp-content/uploads/2019/05/ExperimentsVI.pdf' },
  { title: 'IX \u2013 Practical Sample Questions', link: 'http://msta.in/wp-content/uploads/2016/06/practical_sample_papers.pdf' },
  { title: 'Action Research Topics 6th English 2025 \u2013 26', link: 'https://msta.in/wp-content/uploads/2026/01/Action-Report-6th-Standard-2025-26-1.pdf' },
  { title: 'Action Research Topics 6th Marathi 2025 \u2013 26', link: 'https://msta.in/wp-content/uploads/2026/01/Kruti-sanshodhan-6th-Standard-2025-26.pdf' },
  { title: 'Action Research Topics 9th English 2025 \u2013 26', link: 'https://msta.in/wp-content/uploads/2026/01/Action-Report-9th-standard-2025-26.pdf' },
  { title: 'Action Research Topics 9th Marathi 2025 \u2013 26', link: 'https://msta.in/wp-content/uploads/2026/01/Kruti-sanshodhan-9th-Standard-2025-26.pdf' }
];

function Lausanne() {
  const [activeMenu, setActiveMenu] = useState(null);

  // Lausanne Aesthetics Constants
  const colors = {
    navy: '#002B49',
    gold: '#CFB87C',
    lightGold: '#E8DAC8',
    white: '#FFFFFF',
    textDark: '#333333',
    bgLight: '#F8F9FA'
  };

  const fonts = {
    serif: '"Playfair Display", serif',
    sans: '"Inter", sans-serif'
  };

  return (
    <div style={{ fontFamily: fonts.sans, backgroundColor: colors.bgLight, color: colors.textDark }}>

      {/* Main Header */}
      <header style={{ backgroundColor: colors.white, padding: '1.5rem 0', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
        <div className="container flex-responsive" style={{ justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <a href="/" className="text-center-mobile" style={{ fontFamily: fonts.serif, fontSize: '2rem', color: colors.navy, textDecoration: 'none', fontWeight: 700, lineHeight: 1.1 }}>
            Mumbai Science <br /> <span style={{ color: colors.gold }}>Teacher's Association</span>
          </a>
          
          <nav className="nav-links" style={{ fontWeight: 500, fontSize: '1rem' }}>
            <a href="/" style={{ color: colors.navy, textDecoration: 'none' }}>Home</a>
            
            <div style={{ position: 'relative' }} onMouseEnter={() => setActiveMenu('about')} onMouseLeave={() => setActiveMenu(null)}>
              <button style={{ background: 'none', border: 'none', color: colors.navy, fontWeight: 500, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer', fontFamily: fonts.sans }}>
                About Us <ChevronDown size={14} />
              </button>
              {activeMenu === 'about' && (
                <div style={{ position: 'absolute', top: '100%', left: 0, background: colors.white, minWidth: '220px', display: 'flex', flexDirection: 'column', padding: '1rem 0', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', borderRadius: '4px' }}>
                  <a href="https://msta.in/about-us/" style={{ padding: '0.5rem 1.5rem', color: colors.textDark, textDecoration: 'none' }}>About Us</a>
                  <a href="https://msta.in/history/" style={{ padding: '0.5rem 1.5rem', color: colors.textDark, textDecoration: 'none' }}>History</a>
                  <a href="https://msta.in/vision-mission/" style={{ padding: '0.5rem 1.5rem', color: colors.textDark, textDecoration: 'none' }}>Vision / Mission</a>
                  <a href="https://msta.in/working-committee/" style={{ padding: '0.5rem 1.5rem', color: colors.textDark, textDecoration: 'none' }}>Working Committee</a>
                  <a href="https://msta.in/advisory-board/" style={{ padding: '0.5rem 1.5rem', color: colors.textDark, textDecoration: 'none' }}>Advisory Board</a>
                  <a href="https://msta.in/trustees/" style={{ padding: '0.5rem 1.5rem', color: colors.textDark, textDecoration: 'none' }}>Trustees</a>
                  <a href="https://msta.in/founder-members/" style={{ padding: '0.5rem 1.5rem', color: colors.textDark, textDecoration: 'none' }}>Founder Members</a>
                </div>
              )}
            </div>

            <a href="https://msta.in/contents/" style={{ color: colors.navy, textDecoration: 'none' }}>Authentic Book</a>
            <a href="https://msta.in/students-corner/" style={{ color: colors.navy, textDecoration: 'none' }}>Students Corner</a>
            <a href="https://msta.in/downloads/" style={{ color: colors.navy, textDecoration: 'none' }}>Downloads</a>
            <a href="https://msta.in/science-enritchment-programme-preparation-for-ijso/" style={{ color: colors.gold, fontWeight: 700, textDecoration: 'none' }}>IJSO</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section style={{ 
  position: 'relative', 
  minHeight: '80vh', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  color: colors.white, 
  textAlign: 'center', 
  overflow: 'hidden',
  backgroundImage: 'url(https://www.shutterstock.com/image-photo/modern-classroom-school-600nw-2492778895.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}}>
  <div style={{ 
    position: 'absolute', 
    inset: 0, 
    backgroundColor: 'rgba(0, 43, 73, 0.6)' 
  }} />

  <div className="container" style={{ position: 'relative', zIndex: 1, padding: '4rem 1rem', maxWidth: '800px' }}>
    <h1 style={{ fontFamily: fonts.serif, fontSize: 'clamp(2rem, 8vw, 5rem)', fontWeight: 400, marginBottom: '1.5rem', lineHeight: 1.1 }}>
      Inspiring the <br /><span style={{ color: colors.gold, fontStyle: 'italic' }}>Scientists</span> of Tomorrow
    </h1>
    <p style={{ fontSize: '1.25rem', lineHeight: 1.6, marginBottom: '3rem', fontWeight: 300 }}>
      Dr. Homi Bhabha Balvaidnyanik Competition is conducted by The Greater Bombay Science Teachers' Association since 1981 to explore the world of science for students of std VI and IX of English and Marathi medium.
    </p>
    <button style={{ backgroundColor: colors.gold, color: colors.navy, border: 'none', padding: '1rem 2.5rem', fontSize: '1.1rem', fontWeight: 600, borderRadius: '50px', cursor: 'pointer', transition: 'transform 0.2s ease, box-shadow 0.2s ease', boxShadow: '0 4px 15px rgba(207, 184, 124, 0.4)' }}>
      Explore Our Programs
    </button>
  </div>
</section>

        {/* Info Cards */}
        <section style={{ padding: '6rem 0', backgroundColor: colors.white }}>
          <div className="container">
            <div className="grid-auto-fit-250" style={{ gap: '2rem' }}>
              
              <article style={{ backgroundColor: colors.bgLight, padding: '3rem 2rem',border: '2px solid var(--color-text-dark)', borderRadius: '12px', textAlign: 'center', boxShadow: '0 10px 40px rgba(0,0,0,0.03)', transition: 'transform 0.3s ease', cursor: 'pointer' }}>
                <div style={{ backgroundColor: colors.navy, color: colors.gold, width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <GraduationCap size={32} />
                </div>
                <h3 style={{ fontFamily: fonts.serif, fontSize: '1.5rem', color: colors.navy, marginBottom: '1rem' }}>Students Corner</h3>
                <p style={{ color: '#666', lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '0.95rem' }}>Dr. Homi Bhabha Balvaidnyanik Competition is conducted by MSTA since 1981 to explore the world of science.</p>
                <a href="#" style={{ color: colors.gold, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>Read More <ArrowRight size={16}/></a>
              </article>

              <article style={{ backgroundColor: colors.bgLight, padding: '3rem 2rem',border: '2px solid var(--color-text-dark)', borderRadius: '12px', textAlign: 'center', boxShadow: '0 10px 40px rgba(0,0,0,0.03)', transition: 'transform 0.3s ease', cursor: 'pointer' }}>
                <div style={{ backgroundColor: colors.gold, color: colors.navy, width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <Sparkles size={32} />
                </div>
                <h3 style={{ fontFamily: fonts.serif, fontSize: '1.5rem', color: colors.navy, marginBottom: '1rem' }}>Homi Bhabha Exams</h3>
                <p style={{ color: '#666', lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '0.95rem' }}>Dr. Homi Bhabha Balvaidnyanik Competition is conducted for students of std VI and IX of English and Marathi medium.</p>
                <a href="#" style={{ color: colors.gold, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>Read More <ArrowRight size={16}/></a>
              </article>

              <article style={{ backgroundColor: colors.bgLight, padding: '3rem 2rem',border: '2px solid var(--color-text-dark)', borderRadius: '12px', textAlign: 'center', boxShadow: '0 10px 40px rgba(0,0,0,0.03)', transition: 'transform 0.3s ease', cursor: 'pointer' }}>
                <div style={{ backgroundColor: colors.navy, color: colors.gold, width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <Activity size={32} />
                </div>
                <h3 style={{ fontFamily: fonts.serif, fontSize: '1.5rem', color: colors.navy, marginBottom: '1rem' }}>Activities Details</h3>
                <p style={{ color: '#666', lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '0.95rem' }}>This competition is truly the highlight of M.S.T.A.'s achievements. Started in 1981 in Marathi medium.</p>
                <a href="#" style={{ color: colors.gold, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>Read More <ArrowRight size={16}/></a>
              </article>

              <article style={{ backgroundColor: colors.bgLight, padding: '3rem 2rem',border: '2px solid var(--color-text-dark)', borderRadius: '12px', textAlign: 'center', boxShadow: '0 10px 40px rgba(0,0,0,0.03)', transition: 'transform 0.3s ease', cursor: 'pointer' }}>
                <div style={{ backgroundColor: colors.gold, color: colors.navy, width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <BookOpen size={32} />
                </div>
                <h3 style={{ fontFamily: fonts.serif, fontSize: '1.5rem', color: colors.navy, marginBottom: '1rem' }}>Science Enrichment</h3>
                <p style={{ color: '#666', lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '0.95rem' }}>GBSTA announces programme for gifted Young Scientists. Explore the immense world of possibilities.</p>
                <a href="#" style={{ color: colors.gold, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>Read More <ArrowRight size={16}/></a>
              </article>

            </div>
          </div>
        </section>

        {/* Exams & Action Blocks */}
        <section style={{ padding: '5rem 0', backgroundColor: colors.navy, color: colors.white }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontFamily: fonts.serif, fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', marginBottom: '1rem', color: colors.gold }}>Dr Homi Bhabha Balvaidnyanik Exam</h2>
              <div style={{ width: '60px', height: '3px', backgroundColor: colors.gold, margin: '0 auto' }}></div>
            </div>

            <div className="grid-auto-fit-250" style={{ gap: '1.5rem' }}>
              
              <a href="#" style={{ display: 'block', backgroundColor: 'rgba(255,255,255,0.05)', border: `1px solid rgba(207,184,124,0.3)`, borderRadius: '8px', padding: '2rem', textDecoration: 'none', color: colors.white, transition: 'all 0.3s ease', textAlign: 'center' }}>
                <div style={{ color: colors.gold, marginBottom: '1rem' }}><FileText size={40} style={{ margin: '0 auto' }}/></div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Bio-Data Form</h4>
                <p style={{ color: '#aaa', fontSize: '0.9rem' }}>For Third and Fourth Round Competition</p>
              </a>

              <a href="#" style={{ display: 'block', backgroundColor: colors.gold, borderRadius: '8px', padding: '2rem', textDecoration: 'none', color: colors.navy, transition: 'all 0.3s ease', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                <div style={{ marginBottom: '1rem' }}><Award size={40} style={{ margin: '0 auto' }}/></div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem' }}>View Result</h4>
                <p style={{ color: colors.navy, opacity: 0.8, fontSize: '0.9rem' }}>Check your DHBBVC score online</p>
              </a>

              <a href="#" style={{ display: 'block', backgroundColor: 'rgba(255,255,255,0.05)', border: `1px solid rgba(207,184,124,0.3)`, borderRadius: '8px', padding: '2rem', textDecoration: 'none', color: colors.white, transition: 'all 0.3s ease', textAlign: 'center' }}>
                <div style={{ color: colors.gold, marginBottom: '1rem' }}><Calendar size={40} style={{ margin: '0 auto' }}/></div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Apply Online</h4>
                <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Register for the upcoming examination</p>
              </a>

              <a href="#" style={{ display: 'block', backgroundColor: 'rgba(255,255,255,0.05)', border: `1px solid rgba(207,184,124,0.3)`, borderRadius: '8px', padding: '2rem', textDecoration: 'none', color: colors.white, transition: 'all 0.3s ease', textAlign: 'center' }}>
                <div style={{ color: colors.gold, marginBottom: '1rem' }}><Ticket size={40} style={{ margin: '0 auto' }}/></div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Hall Ticket</h4>
                <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Center information and entry ticket</p>
              </a>

            </div>

            {/* Banner Integration */}
            <div style={{ marginTop: '4rem', borderRadius: '12px', overflow: 'hidden', position: 'relative', height: '300px', display: 'flex', alignItems: 'center' }}>
              <img src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80" alt="Students experimenting" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, #002B49 10%, transparent 100%)', zIndex: 1, opacity: 0.9 }}></div>
              <div style={{ position: 'relative', zIndex: 2, padding: '3rem', maxWidth: '600px' }}>
                <h3 style={{ fontFamily: fonts.serif, fontSize: 'clamp(1.5rem, 6vw, 2rem)', color: colors.white, marginBottom: '1rem' }}>Science Enrichment Programme</h3>
                <p style={{ color: colors.lightGold, marginBottom: '2rem' }}>Enhance your understanding of the world with our advanced enrichment studies designed exclusively for passionate students.</p>
                <button style={{ backgroundColor: 'transparent', color: colors.gold, border: `2px solid ${colors.gold}`, padding: '0.75rem 2rem', borderRadius: '50px', fontWeight: 600, cursor: 'pointer' }}>Discover More</button>
              </div>
            </div>

          </div>
        </section>

        {/* Latest News & Resources */}
        <section style={{ padding: '6rem 0', backgroundColor: colors.bgLight }}>
          <div className="container grid-auto-fit-300" style={{ gap: '4rem' }}>
            
            {/* News */}
            <div>
              <h2 style={{ fontFamily: fonts.serif, fontSize: 'clamp(1.8rem, 6vw, 2.5rem)', color: colors.navy, marginBottom: '2rem', borderBottom: `2px solid ${colors.gold}`, paddingBottom: '0.5rem', display: 'inline-block' }}>Latest News</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ backgroundColor: colors.white, borderRadius: '8px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', borderLeft: `4px solid ${colors.gold}` }}>
                  <h4 style={{ fontFamily: fonts.serif, fontSize: '1.3rem', color: colors.navy, marginBottom: '0.75rem' }}>Results of DHBBVC 2023-24 Practical Competition</h4>
                  <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>Results of DHBBVC 2023-24 Practical Competition will be announced on Friday 9th February 2024 @ 7 PM.</p>
                  <a href="#" style={{ color: colors.gold, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>Read Announcement <ArrowRight size={14}/></a>
                </div>

                <div style={{ backgroundColor: colors.white, borderRadius: '8px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', borderLeft: `4px solid ${colors.gold}` }}>
                  <h4 style={{ fontFamily: fonts.serif, fontSize: '1.3rem', color: colors.navy, marginBottom: '0.75rem' }}>Official Authentic Book for DHBBC</h4>
                  <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>Our Official Authentic Book for DHBBC published by Menaka Prakashan is now available with all leading book stores.</p>
                  <a href="#" style={{ color: colors.gold, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>View Details <ArrowRight size={14}/></a>
                </div>
              </div>
            </div>

            {/* Resources / Looking For */}
            <div>
              <h2 style={{ fontFamily: fonts.serif, fontSize: 'clamp(1.8rem, 6vw, 2.5rem)', color: colors.navy, marginBottom: '2rem', borderBottom: `2px solid ${colors.gold}`, paddingBottom: '0.5rem', display: 'inline-block' }}>Resources</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxHeight: '500px', overflowY: 'auto', paddingRight: '1rem' }}>
                {LINKS.slice(0, 10).map((item, idx) => (
                  <a key={idx} href={item.link} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem', backgroundColor: colors.white, borderRadius: '6px', textDecoration: 'none', color: colors.navy, boxShadow: '0 2px 10px rgba(0,0,0,0.02)', border: '1px solid #EBEBEB', transition: 'all 0.2s ease' }} 
                     onMouseOver={(e) => { e.currentTarget.style.borderColor = colors.gold; e.currentTarget.style.transform = 'translateY(-2px)' }}
                     onMouseOut={(e) => { e.currentTarget.style.borderColor = '#EBEBEB'; e.currentTarget.style.transform = 'translateY(0)' }}>
                    <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>{item.title}</span><Download size={16} color={colors.gold}/>
                  </a>
                ))}
              </div>
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <a href="#" style={{ color: colors.gold, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>View All Resources <ArrowRight size={16}/></a>
              </div>
            </div>

          </div>
        </section>

      </main>

      <footer style={{ backgroundColor: '#001b2e', color: colors.white, paddingTop: '5rem', paddingBottom: '2rem' }}>
        <div className="container">
          <div className="grid-auto-fit-250" style={{ gap: '3rem', marginBottom: '4rem' }}>
            
            <div>
              <h3 style={{ fontFamily: fonts.serif, fontSize: '2rem', marginBottom: '1.5rem', color: colors.gold }}>MSTA</h3>
              <p style={{ color: '#aaa', lineHeight: 1.6, marginBottom: '2rem' }}>For the Cause of Science Education and Science Talent Search since 1981</p>
              <a href="mailto:balvaidnyanik@gmail.com" style={{ color: colors.gold, textDecoration: 'none', fontSize: '1.1rem', borderBottom: `1px solid ${colors.gold}`, paddingBottom: '0.25rem' }}>balvaidnyanik@gmail.com</a>
            </div>

            <div>
              <h4 style={{ fontFamily: fonts.serif, fontSize: '1.2rem', color: colors.white, marginBottom: '1.5rem', letterSpacing: '0.05em' }}>Important Links</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li><a href="http://msta.in/activities/" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.2s' }}>Activities</a></li>
                <li><a href="http://msta.in/trustees/" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.2s' }}>Trustees</a></li>
                <li><a href="http://msta.in/working-committee/" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.2s' }}>Working Committee</a></li>
                <li><a href="https://msta.in/terms-and-conditions/" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.2s' }}>Terms and Conditions</a></li>
                <li><a href="https://msta.in/privacy-policy/" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.2s' }}>Privacy Policy</a></li>
                <li><a href="https://msta.in/refund-policy/" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.2s' }}>Refund Policy</a></li>
              </ul>
            </div>

            <div style={{ borderRadius: '8px', overflow: 'hidden', height: '275px' }}>
              <img 
                src="school_building_exterior_1772616261891.png" 
                alt="School building" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} 
              />
            </div>

          </div>

          <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <p style={{ color: '#888', fontSize: '0.9rem' }}>© {new Date().getFullYear()} Mumbai Science Teacher's Association. All rights reserved.</p>
            <a href="https://msta.in/wp-content/uploads/2025/03/BIO-DATA-FORM-INTERVIEW-STUDENTS-1.pdf" style={{ color: colors.gold, fontSize: '0.9rem', textDecoration: 'none' }}>Download BIO-DATA Format for Third & Fourth Round</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Lausanne;
