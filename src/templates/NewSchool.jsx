import React, { useState } from 'react';
import { ArrowRight, Download, BookOpen, Users, Calendar, Award, ChevronDown, GraduationCap, Sparkles, Activity, FileText, Ticket } from 'lucide-react';
import { LINKS, ABOUT_MENU_ITEMS, CONTACT_INFO, FOOTER_LINKS } from '../data';

function NewSchool() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="app-container">
      

      <header style={{ borderBottom: 'var(--border-width) solid var(--color-text-dark)', position: 'sticky', top: 0, background: 'var(--color-bg-light)', zIndex: 100 }}>
        <div className="container flex-responsive" style={{ justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem var(--spacing-sm)', gap: '1rem' }}>
          <a href="/" className="bold-heading text-center-mobile" style={{ fontSize: '1.5rem', display: 'flex', flexDirection: 'column', lineHeight: 0.9 }}>
            <span>MUMBAI SCIENCE</span><span>TEACHER'S ASSOCIATION</span>
          </a>
          <nav className="nav-links" style={{ fontWeight: 600, textTransform: 'uppercase', fontFamily: 'var(--font-heading)', fontSize: '0.9rem' }}>
            <a href="/" className="hover-lift">Home</a>
            <div style={{ position: 'relative' }} onMouseEnter={() => setActiveMenu('about')} onMouseLeave={() => setActiveMenu(null)}>
              <button style={{ background: 'none', border: 'none', fontWeight: 600, textTransform: 'uppercase', fontFamily: 'var(--font-heading)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer' }}>
                About Us <ChevronDown size={14} />
              </button>
              {activeMenu === 'about' && (
                <div style={{ position: 'absolute', top: '100%', left: 0, background: 'var(--color-bg-light)', border: '2px solid var(--color-text-dark)', minWidth: '220px', display: 'flex', flexDirection: 'column', padding: '0.5rem', boxShadow: '4px 4px 0 var(--color-text-dark)' }}>
                  {ABOUT_MENU_ITEMS.map((item) => (
                    <a key={item.link} href={item.link} className="hover-lift" style={{ padding: '0.5rem' }}>{item.label}</a>
                  ))}
                </div>
              )}
            </div>
            <a href="https://msta.in/contents/" className="hover-lift">Authentic Book</a>
            <a href="https://msta.in/students-corner/" className="hover-lift">Students Corner</a>
            <a href="https://msta.in/downloads/" className="hover-lift">Downloads</a>
            <a href="https://msta.in/science-enritchment-programme-preparation-for-ijso/" className="hover-lift">IJSO</a>
            <a href="http://www.facebook.com/Balvaidnyaniks" className="hover-lift">Facebook</a>
          </nav>
        </div>
      </header>

      <main>
        <section style={{ borderBottom: 'var(--border-width) solid var(--color-text-dark)', background: 'var(--color-bg-light)' }}>
          <div className="flex-responsive">
            <div style={{ padding: 'var(--spacing-xl) var(--spacing-sm)', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: 'var(--border-width) solid var(--color-text-dark)', flex: 1 }}>
              <h1 className="bold-heading hero-text" style={{ lineHeight: 0.9, marginBottom: 'var(--spacing-md)' }}>
                SHAPING <span style={{ color: 'var(--color-primary)' }}>YOUNG</span><br />SCIENTISTS.
              </h1>
              <p style={{ fontSize: '1.25rem', maxWidth: '600px', marginBottom: 'var(--spacing-lg)' }}>
                Dr. Homi Bhabha Balvaidnyanik Competition is conducted by The Greater Bombay Science Teachers’ Association since 1981 to explore the world of science for students of std VI and IX of English and Marathi medium.
              </p>
            </div>
            <div className="hero-image-container" style={{ flex: 1, background: '#111', position: 'relative' }}>
              <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80" alt="Students in laboratory" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.2) brightness(0.7)' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(90deg, rgba(255,255,255,0.1), rgba(238,27,36,0.3))' }}></div>
            </div>
          </div>
        </section>

        <section style={{ borderBottom: 'var(--border-width) solid var(--color-text-dark)', background: 'var(--color-bg-light)' }}>
          <div className="grid-auto-fit-250" style={{ gap: 0 }}>
            <article style={{ background: '#1DBF60', color: '#fff', padding: 'var(--spacing-lg) var(--spacing-md)', textAlign: 'center', borderRight: 'var(--border-width) solid var(--color-text-dark)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <GraduationCap size={48} style={{ marginBottom: '1rem' }} />
              <h3 className="bold-heading" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>STUDENTS CORNER</h3>
              <p style={{ marginBottom: '2rem', flexGrow: 1 }}>Dr. Homi Bhabha Balvaidnyanik Competition is conducted by The Greater Bombay Science Teachers' Association since 1981 to...</p>
              <button className="btn hover-lift" style={{ borderColor: '#fff', color: '#fff' }}>Read More</button>
            </article>
            <article style={{ background: '#FCBE12', color: '#fff', padding: 'var(--spacing-lg) var(--spacing-md)', textAlign: 'center', borderRight: 'var(--border-width) solid var(--color-text-dark)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Sparkles size={48} style={{ marginBottom: '1rem' }} />
              <h3 className="bold-heading" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>HOMI BHABHA EXAMS</h3>
              <p style={{ marginBottom: '2rem', flexGrow: 1 }}>Dr. Homi Bhabha Balvaidnyanik Competition is conducted by The Mumbai Science Teachers Association science 1981 for the student...</p>
              <button className="btn hover-lift" style={{ borderColor: '#fff', color: '#fff' }}>Read More</button>
            </article>
            <article style={{ background: '#2F7BE2', color: '#fff', padding: 'var(--spacing-lg) var(--spacing-md)', textAlign: 'center', borderRight: 'var(--border-width) solid var(--color-text-dark)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Activity size={48} style={{ marginBottom: '1rem' }} />
              <h3 className="bold-heading" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>ACTIVITIES DETAILS</h3>
              <p style={{ marginBottom: '2rem', flexGrow: 1 }}>Dr. Homi Bhabha Balvaidnyanik Spardha is truly the highlight of M.S.T.A.'s achievements. This competition was started in 1981...</p>
              <button className="btn hover-lift" style={{ borderColor: '#fff', color: '#fff' }}>Read More</button>
            </article>
            <article style={{ background: '#EE2AAB', color: '#fff', padding: 'var(--spacing-lg) var(--spacing-md)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <BookOpen size={48} style={{ marginBottom: '1rem' }} />
              <h3 className="bold-heading" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>SCIENCE ENRICHMENT PROG</h3>
              <p style={{ marginBottom: '2rem', flexGrow: 1 }}>The Greater Bombay Science Teachers' Association (GBSTA) announces programme for gifted 'Young Scientists! Explore the world...</p>
              <button className="btn hover-lift" style={{ borderColor: '#fff', color: '#fff' }}>Read More</button>
            </article>
          </div>
        </section>

        <section className="section-padding" style={{ borderBottom: 'var(--border-width) solid var(--color-text-dark)', background: '#f4f4f4' }}>
          <div className="container">
            <h2 className="bold-heading" style={{ fontSize: 'clamp(2rem, 6vw, 2.5rem)', marginBottom: 'var(--spacing-md)', paddingBottom: '0.5rem', borderBottom: '2px solid var(--color-text-dark)', display: 'inline-block' }}>DR HOMI BHABHA BALVAIDAYANIK EXAM</h2>
            <div className="grid-auto-fit-300" style={{ gap: '1rem', marginTop: '1rem' }}>
              <a href="#" className="hover-lift" style={{ background: '#4FB2D8', color: '#fff', padding: '1.5rem', textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100px', border: '2px solid var(--color-text-dark)', boxShadow: '4px 4px 0 var(--color-text-dark)' }}>BIO-DATA for Third and Fourth <br/> Round Competition</a>
              <a href="#" className="hover-lift bold-heading" style={{ background: '#EC00A5', color: '#fff', padding: '1.5rem', textAlign: 'center', fontSize: '1.3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100px', border: '2px solid var(--color-text-dark)', boxShadow: '4px 4px 0 var(--color-text-dark)' }}>VIEW RESULT OF DHBBVC</a>
              <a href="#" className="hover-lift" style={{ background: '#F29F29', color: '#111', padding: '1.5rem', textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100px', border: '2px solid var(--color-text-dark)', boxShadow: '4px 4px 0 var(--color-text-dark)' }}>Apply online for <br/> Dr. Homi Bhabha <br/> Balvaidnyanik Competition</a>
              <a href="#" className="hover-lift" style={{ background: '#D9AA1F', color: '#fff', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', minHeight: '100px', border: '2px solid var(--color-text-dark)', boxShadow: '4px 4px 0 var(--color-text-dark)' }}>
                 <div style={{ background: '#111', color: '#F29F29', padding: '0.5rem', borderRadius: '50%', border: '4px dashed #D9AA1F', outline: '2px solid #111' }}><Ticket size={32} /></div>
                 <div style={{ textAlign: 'left' }}><div style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>Center &</div><div style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>Hall Ticket</div><div style={{ fontSize: '0.8rem', marginTop: '0.2rem' }}>Click here to know more &gt;</div></div>
              </a>
            </div>

            <div style={{ marginTop: 'var(--spacing-lg)' }}>
              <h3 className="bold-heading" style={{ fontSize: 'clamp(1.5rem, 5vw, 1.8rem)', marginBottom: '1rem' }}>Science Enrichment Programme</h3>
              <div style={{ position: 'relative', height: '250px', border: '2px solid var(--color-text-dark)', overflow: 'hidden', background: '#ccc' }}>
                <img src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80" alt="Students experimenting" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '1rem', right: '1rem' }}><button className="btn btn-dark" style={{ border: 'none', background: '#000', color: '#fff' }}>Read more</button></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding" style={{ background: 'var(--color-bg-dark)', color: 'var(--color-text-light)' }}>
          <div className="container">
            <h2 className="bold-heading" style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', marginBottom: '1rem', borderBottom: '2px solid rgba(255,255,255,0.2)', paddingBottom: '1rem' }}>Latest News</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <div style={{ border: '2px solid rgba(255,255,255,0.2)', padding: 'var(--spacing-md)', background: 'var(--color-text-dark)' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 'bold', marginBottom: '1rem' }}>
                  <Award size={24} /> 
                  <a href="https://msta.in/" style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }} className="hover-lift">Results of DHBBVC 2023-24 Practical Competition</a>
                </div>
                <div style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                  <p style={{ marginBottom: '1rem' }}>Results of DHBBVC ... (View Full Website for details)</p>
                </div>
              </div>
              <div style={{ border: '2px solid rgba(255,255,255,0.2)', padding: 'var(--spacing-md)', background: 'var(--color-text-dark)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 'bold', marginBottom: '1rem' }}>
                  <FileText size={24} />
                  <a href="http://www/msta.in" style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }} className="hover-lift">Official Authentic Book for DHBBC</a>
                </div>
                <div style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                  <p style={{ marginBottom: '1rem' }}>Our <strong>Official Authentic Book for DHBBC published by Menaka Prakashan</strong> is now available.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding" style={{ borderBottom: 'var(--border-width) solid var(--color-text-dark)', background: '#ffffff' }}>
          <div className="container">
            <h2 className="bold-heading" style={{ fontSize: 'clamp(1.8rem, 5vw, 4rem)', marginBottom: 'var(--spacing-lg)', textAlign: 'center' }}>WHAT ARE YOU LOOKING FOR?</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: 'var(--spacing-lg)' }}>
              <a href="http://msta.in/instruction-for-the-interview/" className="btn btn-dark hover-lift">Interview Information</a>
              <a href="https://msta.in/wp-content/uploads/2025/06/list-of-coordinators-2025-2026.pdf" className="btn btn-dark hover-lift">List of Coordinators</a>
            </div>
            <div className="grid-auto-fit-300" style={{ gap: '0' }}>
              {LINKS.map((item, idx) => (
                <a key={idx} href={item.link} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 2rem', border: 'var(--border-width) solid var(--color-text-dark)', marginRight: '-var(--border-width)', marginBottom: '-var(--border-width)', transition: 'all 0.3s ease', background: 'var(--color-bg-light)', color: 'var(--color-text-dark)' }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'var(--color-text-dark)'; e.currentTarget.style.color = 'var(--color-text-light)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'var(--color-bg-light)'; e.currentTarget.style.color = 'var(--color-text-dark)'; }}>
                  <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>{item.title}</span><Download size={20} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer style={{ background: 'var(--color-bg-dark)', color: 'var(--color-text-light)', paddingTop: 'var(--spacing-xl)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
            <div>
              <h3 className="bold-heading" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)', lineHeight: 0.9 }}>MSTA</h3>
              <p style={{ color: '#aaaaaa', marginBottom: '1.5rem', maxWidth: '300px', fontSize: '1.1rem' }}>For the Cause of Science Education and Science Talent Search since 1981</p>
            </div>
            <div>
              <h4 style={{ fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '0.05em', color: '#ffffff' }}>Important Links</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#aaaaaa' }}>
                {FOOTER_LINKS.map((item) => (
                  <li key={item.link}><a href={item.link} className="hover-lift">{item.label}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default NewSchool;
