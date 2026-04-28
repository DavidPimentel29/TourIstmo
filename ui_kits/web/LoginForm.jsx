// LoginForm.jsx — TourIstmo auth screens (login + register)
const LoginForm = ({ onNavigate, onLogin }) => {
  const [tab, setTab] = React.useState('login');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [showPass, setShowPass] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSuccess(true); setTimeout(() => { setSuccess(false); onLogin(); }, 1500); }, 1200);
  };

  return (
    <div style={loginStyles.page}>
      <div style={loginStyles.card}>
        {/* Top accent */}
        <div style={{ height:4, background:'linear-gradient(135deg,#D57133,#E8955A)', borderRadius:'16px 16px 0 0' }}></div>

        {/* Header */}
        <div style={loginStyles.header}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8, marginBottom:8 }}>
            <img src="../../assets/logo2.png" alt="TourIstmo" style={{ width:48, height:48, objectFit:'contain' }} />
            <span style={{ fontFamily:"'Poppins',sans-serif", fontWeight:700, fontSize:22, color:'#283951' }}>TourIstmo</span>
          </div>
          <h1 style={loginStyles.h1}>{tab === 'login' ? 'Bienvenido' : 'Crear cuenta'}</h1>
          <p style={loginStyles.sub}>{tab === 'login' ? 'Inicia sesión para continuar explorando' : 'Únete a la comunidad viajera de Panamá'}</p>
        </div>

        {/* Tab toggle */}
        <div style={loginStyles.tabRow}>
          {['login','register'].map(t => (
            <button key={t} onClick={() => setTab(t)}
              style={{ ...loginStyles.tabBtn, ...(tab === t ? loginStyles.tabActive : {}) }}>
              {t === 'login' ? 'Iniciar Sesión' : 'Registrarse'}
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={loginStyles.form}>
          {tab === 'register' && (
            <div style={loginStyles.group}>
              <label style={loginStyles.label}>Nombre completo</label>
              <input style={loginStyles.input} type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Tu nombre" required />
            </div>
          )}
          <div style={loginStyles.group}>
            <label style={loginStyles.label}>Correo electrónico</label>
            <input style={loginStyles.input} type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="usuario@email.com" required />
          </div>
          <div style={loginStyles.group}>
            <label style={loginStyles.label}>Contraseña</label>
            <div style={{ position:'relative' }}>
              <input style={loginStyles.input} type={showPass ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required />
              <button type="button" onClick={() => setShowPass(!showPass)}
                style={{ position:'absolute', right:12, top:'50%', transform:'translateY(-50%)', background:'none', border:'none', cursor:'pointer', color:'#8A9BA8' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                </svg>
              </button>
            </div>
          </div>
          {tab === 'login' && (
            <div style={{ display:'flex', justifyContent:'flex-end', marginBottom:16 }}>
              <a href="#" style={{ color:'#D57133', fontSize:13, fontWeight:600, textDecoration:'none' }}>¿Olvidaste tu contraseña?</a>
            </div>
          )}
          <button type="submit" disabled={loading}
            style={{ ...loginStyles.submitBtn, opacity: loading ? .7 : 1 }}>
            {loading ? 'Cargando...' : tab === 'login' ? 'Iniciar Sesión' : 'Crear cuenta'}
          </button>
        </form>

        {/* Divider */}
        <div style={loginStyles.divider}><span style={loginStyles.dividerText}>O continúa con</span></div>

        {/* Social */}
        <div style={{ padding:'0 32px 16px', display:'flex', flexDirection:'column', gap:10 }}>
          {[
            { name:'Google', color:'#4285F4' },
            { name:'Facebook', color:'#1877F2' },
          ].map(s => (
            <button key={s.name} style={loginStyles.socialBtn} onClick={() => { setLoading(true); setTimeout(() => { setLoading(false); onLogin(); }, 1000); }}>
              <span style={{ fontWeight:600, color:s.color }}>{s.name}</span>
            </button>
          ))}
        </div>

        {/* Signup link */}
        <div style={loginStyles.switchRow}>
          {tab === 'login'
            ? <p style={loginStyles.switchText}>¿No tienes una cuenta? <a href="#" onClick={e => { e.preventDefault(); setTab('register'); }} style={loginStyles.switchLink}>Regístrate aquí</a></p>
            : <p style={loginStyles.switchText}>¿Ya tienes cuenta? <a href="#" onClick={e => { e.preventDefault(); setTab('login'); }} style={loginStyles.switchLink}>Inicia sesión</a></p>
          }
        </div>
      </div>

      {/* Success overlay */}
      {success && (
        <div style={loginStyles.successOverlay}>
          <div style={loginStyles.successCard}>
            <div style={{ width:56, height:56, background:'#4CAF50', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 16px' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h2 style={{ fontFamily:"'Poppins',sans-serif", fontSize:20, color:'#283951', marginBottom:6 }}>¡{tab === 'login' ? 'Inicio de sesión exitoso' : 'Cuenta creada'}!</h2>
            <p style={{ color:'#5A6B7D', fontSize:14 }}>Redirigiendo...</p>
          </div>
        </div>
      )}
    </div>
  );
};

const loginStyles = {
  page: { minHeight:'80vh', display:'flex', alignItems:'center', justifyContent:'center', padding:32 },
  card: { background:'#fff', borderRadius:16, boxShadow:'0 15px 35px rgba(40,57,81,.15)', width:'100%', maxWidth:440, overflow:'hidden', position:'relative' },
  header: { padding:'28px 32px 16px', textAlign:'center', background:'linear-gradient(135deg,rgba(40,57,81,.02),rgba(88,134,132,.02))' },
  h1: { fontFamily:"'Poppins',sans-serif", fontSize:26, fontWeight:700, color:'#283951', margin:'0 0 4px' },
  sub: { color:'#5A6B7D', fontSize:14 },
  tabRow: { display:'flex', margin:'0 32px 20px', background:'#F8F9FA', borderRadius:10, padding:4 },
  tabBtn: { flex:1, padding:'8px', border:'none', borderRadius:8, fontSize:13, fontWeight:600, cursor:'pointer', background:'transparent', color:'#5A6B7D', transition:'all .2s' },
  tabActive: { background:'#fff', color:'#283951', boxShadow:'0 1px 4px rgba(40,57,81,.12)' },
  form: { padding:'0 32px' },
  group: { marginBottom:16 },
  label: { display:'block', fontSize:12, fontWeight:600, color:'#283951', marginBottom:4 },
  input: { width:'100%', padding:'11px 14px', border:'2px solid #E1E8ED', borderRadius:12, fontSize:14, fontFamily:'inherit', color:'#283951', outline:'none', boxSizing:'border-box' },
  submitBtn: { width:'100%', padding:13, background:'linear-gradient(135deg,#D57133,#E8955A)', color:'#fff', border:'none', borderRadius:12, fontSize:15, fontWeight:700, cursor:'pointer', marginBottom:20, fontFamily:'inherit' },
  divider: { position:'relative', textAlign:'center', margin:'0 32px 16px', borderTop:'1px solid #E1E8ED', paddingTop:0 },
  dividerText: { background:'#fff', padding:'0 12px', color:'#8A9BA8', fontSize:12, fontWeight:500, position:'relative', top:-10, display:'inline-block' },
  socialBtn: { padding:'11px 0', border:'2px solid #E1E8ED', borderRadius:12, background:'#fff', fontSize:13, fontWeight:500, cursor:'pointer', fontFamily:'inherit', display:'flex', alignItems:'center', justifyContent:'center', gap:8 },
  switchRow: { padding:'16px 32px 24px', textAlign:'center', borderTop:'1px solid #E1E8ED' },
  switchText: { color:'#5A6B7D', fontSize:13 },
  switchLink: { color:'#D57133', fontWeight:700, textDecoration:'none' },
  successOverlay: { position:'fixed', inset:0, background:'rgba(40,57,81,.8)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:9999 },
  successCard: { background:'#fff', borderRadius:16, padding:40, textAlign:'center', maxWidth:320 },
};

Object.assign(window, { LoginForm });
