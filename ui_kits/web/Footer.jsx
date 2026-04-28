// Footer.jsx — TourIstmo teal footer
const Footer = ({ onNavigate }) => (
  <footer style={footerStyles.footer}>
    <div style={{ height: 4, background: 'linear-gradient(135deg,#D57133,#E8955A)', opacity: .8, position:'absolute', top:0, left:0, right:0 }}></div>
    <div style={footerStyles.container}>
      <div style={footerStyles.grid}>
        <div>
          <a href="#" onClick={e => { e.preventDefault(); onNavigate('home'); }} style={footerStyles.logoWrap}>
            <img src="../../assets/logowhite.png" alt="TourIstmo" style={{ width:36, height:36, objectFit:'contain' }} />
            <span style={footerStyles.logoText}>TourIstmo</span>
          </a>
          <p style={footerStyles.desc}>Explora, comparte y disfruta de los mejores destinos turísticos de Panamá. Tu aventura comienza aquí.</p>
        </div>
        <div>
          <h4 style={footerStyles.colHead}>TourIstmo</h4>
          <ul style={footerStyles.linkList}>
            {['Inicio','Destinos','Planes Turísticos','Agregar Destino'].map(l => (
              <li key={l}><a href="#" style={footerStyles.footLink}>{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={footerStyles.colHead}>Colabora</h4>
          <ul style={footerStyles.linkList}>
            {['Únete al equipo','Publica tus planes'].map(l => (
              <li key={l}><a href="#" style={footerStyles.footLink}>{l}</a></li>
            ))}
          </ul>
          <h4 style={{ ...footerStyles.colHead, marginTop: 16 }}>Soporte</h4>
          <ul style={footerStyles.linkList}>
            {['Términos y Condiciones','Privacidad','Ayuda'].map(l => (
              <li key={l}><a href="#" style={footerStyles.footLink}>{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={footerStyles.colHead}>Descarga la App</h4>
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" style={{ height:32, borderRadius:6 }} />
        </div>
      </div>
      <div style={footerStyles.bottom}>
        <p style={footerStyles.copy}>© 2025 TourIstmo. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);

const footerStyles = {
  footer: { background: '#588684', color: '#fff', position: 'relative', overflow: 'hidden', marginTop: 64 },
  container: { maxWidth: 1200, margin: '0 auto', padding: '48px 32px', position: 'relative', zIndex: 2 },
  grid: { display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 32, marginBottom: 32 },
  logoWrap: { display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: '#fff', marginBottom: 12 },
  logoText: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 20, color: '#fff' },
  desc: { color: 'rgba(255,255,255,.85)', fontSize: 13, lineHeight: 1.6 },
  colHead: { fontSize: 14, fontWeight: 600, color: '#fff', fontFamily: "'Poppins',sans-serif", marginBottom: 12, paddingBottom: 6, borderBottom: '2px solid #D57133', display: 'inline-block' },
  linkList: { listStyle: 'none', padding: 0, margin: 0 },
  footLink: { color: 'rgba(255,255,255,.8)', textDecoration: 'none', fontSize: 13, display: 'block', padding: '3px 0' },
  bottom: { borderTop: '1px solid rgba(255,255,255,.15)', paddingTop: 16 },
  copy: { color: 'rgba(255,255,255,.7)', fontSize: 13, textAlign: 'center' },
};

Object.assign(window, { Footer });
