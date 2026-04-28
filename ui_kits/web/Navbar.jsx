// Navbar.jsx — TourIstmo floating pill navbar
const Navbar = ({ currentPage, onNavigate, isLoggedIn }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [searchVal, setSearchVal] = React.useState('');

  const links = [
    { label: 'Destinos', page: 'destinations' },
    { label: 'Planes', page: 'plans' },
    { label: 'Nosotros', page: 'about' },
    { label: 'Ayuda', page: 'help' },
  ];

  return (
    <nav style={navbarStyles.nav}>
      {/* Left links */}
      <div style={navbarStyles.left}>
        {links.map(l => (
          <a key={l.page} href="#" onClick={e => { e.preventDefault(); onNavigate(l.page); }}
            style={{ ...navbarStyles.link, ...(currentPage === l.page ? navbarStyles.linkActive : {}) }}>
            {l.label}
          </a>
        ))}
      </div>

      {/* Center logo */}
      <a href="#" onClick={e => { e.preventDefault(); onNavigate('home'); }} style={navbarStyles.center}>
        <img src="../../assets/logo.svg" alt="TourIstmo" style={{ width: 44, height: 44 }} />
        <span style={navbarStyles.logoText}>TourIstmo</span>
      </a>

      {/* Right */}
      <div style={navbarStyles.right}>
        <div style={navbarStyles.searchWrap}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.8)" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            value={searchVal}
            onChange={e => setSearchVal(e.target.value)}
            placeholder="Buscar destinos..."
            style={navbarStyles.searchInput}
          />
        </div>
        {isLoggedIn ? (
          <div style={{ display:'flex', gap:8, alignItems:'center' }}>
            <a href="#" onClick={e => { e.preventDefault(); onNavigate('profile'); }} style={navbarStyles.cta}>Mi Perfil</a>
            <a href="#" onClick={e => { e.preventDefault(); onNavigate('dashboard'); }} style={{ ...navbarStyles.cta, background:'rgba(255,255,255,.15)' }}>Dashboard</a>
          </div>
        ) : (
          <a href="#" onClick={e => { e.preventDefault(); onNavigate('login'); }} style={navbarStyles.cta}>Ingresar</a>
        )}
      </div>
    </nav>
  );
};

const navbarStyles = {
  nav: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#588684',
    borderRadius: 50,
    padding: '0 28px',
    height: 70,
    width: '95%',
    margin: '20px auto',
    boxShadow: '0 15px 35px rgba(40,57,81,.2)',
    boxSizing: 'border-box',
    zIndex: 100,
  },
  left: { display: 'flex', gap: 4, alignItems: 'center', flex: 1 },
  link: {
    color: '#E2E1E0', fontWeight: 700, fontSize: 13,
    padding: '6px 12px', borderRadius: 10, textDecoration: 'none',
    transition: 'all .2s',
  },
  linkActive: { color: '#fff', background: 'rgba(255,255,255,.18)' },
  center: {
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%,-50%)',
    display: 'flex', alignItems: 'center', gap: 6,
    textDecoration: 'none',
  },
  logoText: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 20, color: '#fff' },
  right: { display: 'flex', alignItems: 'center', gap: 10, flex: 1, justifyContent: 'flex-end' },
  searchWrap: {
    display: 'flex', alignItems: 'center', gap: 6,
    background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.2)',
    borderRadius: 20, padding: '6px 14px',
  },
  searchInput: {
    background: 'transparent', border: 'none', outline: 'none',
    color: '#fff', fontSize: 12, width: 140,
  },
  cta: {
    background: '#D57133', color: '#fff',
    padding: '7px 18px', borderRadius: 50,
    fontSize: 13, fontWeight: 600, textDecoration: 'none',
    transition: 'all .2s',
  },
};

Object.assign(window, { Navbar });
