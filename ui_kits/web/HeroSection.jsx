// HeroSection.jsx — About, Help, Company Profile, Plan Form screens

// ─── ABOUT SCREEN ────────────────────────────────────────────────
const AboutScreen = ({ onNavigate }) => {
  const team = [
    { name:'Miriam Angulo', role:'Full-Stack Developer', photo:'../../assets/sample-user.avif', desc:'Expertise en bases de datos, backend y frontend. Java, Spring Boot y microservicios.' },
    { name:'Carlos Delgado', role:'Backend Developer', photo:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face', desc:'Lógica de negocio y gestión de datos. Java, Spring Boot y arquitecturas escalables.' },
    { name:'Diego Jaen', role:'Database Analyst', photo:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face', desc:'MySQL, PostgreSQL y optimización de consultas. Diseño de estructuras de datos eficientes.' },
    { name:'David Pimentel', role:'DevOps Engineer', photo:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face', desc:'Full-stack developer. JavaScript, Node.js, integración continua y despliegue automatizado.' },
    { name:'Elbis Vallejos', role:'Frontend Developer', photo:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face', desc:'UX y lógica de aplicación. JavaScript, Node.js y metodologías ágiles.' },
  ];

  return (
    <div className="fade-in">
      {/* Hero */}
      <section style={{ background:'linear-gradient(135deg,#283951,#588684)', padding:'80px 32px 60px', textAlign:'center', borderRadius:16, margin:'0 32px', color:'#fff' }}>
        <h1 style={{ fontFamily:"'Poppins',sans-serif", fontSize:'clamp(2rem,5vw,3rem)', fontWeight:700, marginBottom:12 }}>Conoce a Nuestro Equipo</h1>
        <p style={{ fontSize:17, opacity:.9, maxWidth:600, margin:'0 auto', lineHeight:1.6 }}>
          Somos un grupo de desarrolladores apasionados por crear experiencias digitales excepcionales que conecten a las personas con las maravillas turísticas de Panamá.
        </p>
      </section>

      <div style={{ maxWidth:1000, margin:'0 auto', padding:'48px 32px' }}>
        {/* Our Story */}
        <section style={{ textAlign:'center', marginBottom:48 }}>
          <h2 style={aboutSt.h2}>Nuestra Historia</h2>
          <p style={{ color:'#5A6B7D', lineHeight:1.7, maxWidth:700, margin:'0 auto 32px', fontSize:15 }}>
            TourIstmo nació como un proyecto semestral con la visión de revolucionar la forma en que las personas descubren y experimentan los destinos turísticos de Panamá. Combinamos tecnología moderna con un profundo amor por nuestro país para crear una plataforma que inspire y facilite aventuras inolvidables.
          </p>
          <div style={{ display:'flex', justifyContent:'center', gap:32, flexWrap:'wrap' }}>
            {[['5','Desarrolladores'],['1','Semestre'],['∞','Pasión'],['100%','Compromiso']].map(([num,label]) => (
              <div key={label} style={{ textAlign:'center' }}>
                <div style={{ fontSize:32, fontWeight:700, color:'#D57133', fontFamily:"'Poppins',sans-serif" }}>{num}</div>
                <div style={{ fontSize:13, color:'#5A6B7D', fontWeight:600 }}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section>
          <h2 style={{ ...aboutSt.h2, marginBottom:28 }}>Nuestro Equipo</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:20 }}>
            {team.map(m => (
              <div key={m.name} style={aboutSt.teamCard}>
                <img src={m.photo} alt={m.name} style={aboutSt.avatar} />
                <h3 style={{ fontFamily:"'Poppins',sans-serif", fontSize:16, fontWeight:600, color:'#283951', margin:'12px 0 2px' }}>{m.name}</h3>
                <p style={{ color:'#D57133', fontSize:12, fontWeight:600, marginBottom:8 }}>{m.role}</p>
                <p style={{ color:'#5A6B7D', fontSize:13, lineHeight:1.5 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech */}
        <section style={{ marginTop:48, textAlign:'center' }}>
          <h2 style={aboutSt.h2}>Tecnologías que Utilizamos</h2>
          <div style={{ display:'flex', justifyContent:'center', gap:20, flexWrap:'wrap', marginTop:20 }}>
            {[['HTML5 & CSS3','Estructura y diseño moderno','⟨/⟩'],['JSP','Backend robusto y escalable','⚙'],['Oracle MySQL','Base de datos confiable','⛁']].map(([name,desc,icon]) => (
              <div key={name} style={{ background:'#fff', borderRadius:12, padding:'24px 20px', border:'1px solid #E1E8ED', width:200, textAlign:'center' }}>
                <div style={{ fontSize:28, marginBottom:8, color:'#588684' }}>{icon}</div>
                <h3 style={{ fontFamily:"'Poppins',sans-serif", fontSize:14, fontWeight:600, color:'#283951', marginBottom:4 }}>{name}</h3>
                <p style={{ fontSize:12, color:'#5A6B7D' }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ marginTop:48, textAlign:'center', background:'linear-gradient(135deg,#588684,#8BAD65)', borderRadius:16, padding:'40px 32px', color:'#fff' }}>
          <h2 style={{ fontFamily:"'Poppins',sans-serif", fontSize:22, fontWeight:700, marginBottom:8 }}>¿Tienes alguna pregunta?</h2>
          <p style={{ opacity:.9, marginBottom:20, fontSize:14 }}>Estamos aquí para ayudarte. Contáctanos en cualquier momento.</p>
          <a href="#" onClick={e => { e.preventDefault(); onNavigate('help'); }} style={{ background:'#fff', color:'#283951', padding:'11px 28px', borderRadius:50, fontWeight:700, fontSize:14, display:'inline-block', textDecoration:'none' }}>Centro de Ayuda</a>
        </section>
      </div>
    </div>
  );
};

const aboutSt = {
  h2: { fontFamily:"'Poppins',sans-serif", fontSize:22, fontWeight:700, color:'#283951', textAlign:'center', marginBottom:14 },
  teamCard: { background:'#fff', borderRadius:16, padding:'24px 20px', border:'1px solid #E1E8ED', textAlign:'center' },
  avatar: { width:72, height:72, borderRadius:'50%', objectFit:'cover', border:'3px solid #588684' },
};

// ─── HELP SCREEN ─────────────────────────────────────────────────
const HelpScreen = ({ onNavigate }) => {
  const [openIdx, setOpenIdx] = React.useState(null);

  const sections = [
    { title:'Cuenta y Registro', items:[
      ['¿Cómo creo una cuenta en TourIstmo?','Haz clic en "Ingresar" en la barra de navegación y luego en "Regístrate aquí". Completa el formulario con tu nombre, apellidos, fecha de nacimiento, sexo y correo electrónico.'],
      ['¿Olvidé mi contraseña, qué hago?','En la pantalla de inicio de sesión, haz clic en "¿Olvidaste tu contraseña?" e ingresa tu correo electrónico. Te enviaremos un enlace para restablecerla.'],
      ['¿Cómo actualizo mi perfil?','Inicia sesión y accede a "Mi Perfil" en el menú de navegación. Desde allí puedes editar tu información personal y foto de perfil.'],
    ]},
    { title:'Destinos y Planes', items:[
      ['¿Cómo busco destinos turísticos?','Usa la barra de búsqueda en la parte superior del sitio o navega a la sección "Destinos". Puedes filtrar por provincia, tipo y precio.'],
      ['¿Cómo reservo un plan turístico?','Explora la sección "Planes", selecciona el que te interese y haz clic en el botón de reserva. Serás dirigido al sistema de pago del proveedor.'],
      ['¿Puedo guardar destinos favoritos?','Sí. En cada tarjeta de destino verás un ícono de corazón. Haz clic para guardar el destino en tu lista de favoritos (requiere iniciar sesión).'],
    ]},
    { title:'Empresas y Proveedores', items:[
      ['¿Cómo publico un destino o plan turístico?','Accede a "Agregar Destino" o "Formulario de Planes" desde el menú. Completa la información requerida y envía para revisión. El equipo administrativo aprobará tu publicación.'],
      ['¿Cuánto tiempo tarda la aprobación?','El equipo de TourIstmo revisa las solicitudes en un plazo de 1 a 3 días hábiles. Recibirás una notificación por correo con el resultado.'],
    ]},
  ];

  let globalIdx = 0;

  return (
    <div className="fade-in">
      {/* Hero */}
      <div style={{ background:'linear-gradient(135deg,#283951,#588684)', padding:'80px 32px 50px', textAlign:'center', color:'#fff', borderRadius:16, margin:'0 32px' }}>
        <h1 style={{ fontFamily:"'Poppins',sans-serif", fontSize:30, fontWeight:700, marginBottom:8 }}>Centro de Ayuda</h1>
        <p style={{ fontSize:15, opacity:.85 }}>Encuentra respuestas a las preguntas más frecuentes</p>
      </div>

      <div style={{ maxWidth:780, margin:'0 auto', padding:'32px 32px 64px' }}>
        <button onClick={() => onNavigate('home')} style={{ background:'none', border:'none', color:'#588684', fontWeight:600, fontSize:14, cursor:'pointer', marginBottom:24 }}>← Volver</button>

        {sections.map(sec => (
          <div key={sec.title} style={{ marginBottom:32 }}>
            <h2 style={{ fontFamily:"'Poppins',sans-serif", fontSize:18, fontWeight:700, color:'#283951', marginBottom:14 }}>{sec.title}</h2>
            {sec.items.map(([q,a]) => {
              const idx = globalIdx++;
              const isOpen = openIdx === idx;
              return (
                <div key={idx} style={{ background:'#fff', border:'1px solid #E1E8ED', borderRadius:12, marginBottom:8, overflow:'hidden' }}>
                  <button onClick={() => setOpenIdx(isOpen ? null : idx)}
                    style={{ width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'14px 18px', background:'none', border:'none', cursor:'pointer', fontSize:14, fontWeight:500, color:'#283951', textAlign:'left', gap:12, fontFamily:'inherit' }}>
                    <span>{q}</span>
                    <span style={{ fontSize:11, transition:'transform .2s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', flexShrink:0 }}>▼</span>
                  </button>
                  {isOpen && <div style={{ padding:'0 18px 16px', color:'#5A6B7D', fontSize:14, lineHeight:1.7 }}>{a}</div>}
                </div>
              );
            })}
          </div>
        ))}

        {/* Contact Cards */}
        <div style={{ marginTop:32 }}>
          <h2 style={{ fontFamily:"'Poppins',sans-serif", fontSize:18, fontWeight:700, color:'#283951', marginBottom:16 }}>¿Necesitas más ayuda?</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:14 }}>
            {[['✉️','Correo Electrónico','soporte@touristmo.com'],['📱','WhatsApp','+507 6000-0000'],['🕐','Horario','Lun–Vie 8am–5pm']].map(([icon,title,desc]) => (
              <div key={title} style={{ background:'#fff', border:'1px solid #E1E8ED', borderRadius:12, padding:'20px 16px', textAlign:'center' }}>
                <div style={{ fontSize:28, marginBottom:8 }}>{icon}</div>
                <h3 style={{ fontSize:14, fontWeight:600, color:'#283951', marginBottom:4 }}>{title}</h3>
                <p style={{ fontSize:13, color:'#5A6B7D' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── COMPANY PROFILE ─────────────────────────────────────────────
const CompanyProfile = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = React.useState('todos');
  const tabs = ['todos','naturaleza','urbano','cultural','tropical'];

  const plans = [
    { id:101, nombre:'Tour Casco Viejo', provincia:'Panamá', tipo:'Cultural', precio:65, rating:4.6, imagen:'../../assets/casco-viejo.webp' },
    { id:102, nombre:'Snorkel Bocas', provincia:'Bocas del Toro', tipo:'Acuático', precio:95, rating:4.8, imagen:'../../assets/playa-la-miel.webp' },
    { id:103, nombre:'Senderismo El Valle', provincia:'Coclé', tipo:'Aventura', precio:45, rating:4.5, imagen:'../../assets/el-valle.webp' },
  ];

  return (
    <div className="fade-in" style={{ maxWidth:1200, margin:'0 auto', padding:'24px 32px 64px', display:'grid', gridTemplateColumns:'260px 1fr 260px', gap:24 }}>
      {/* Left sidebar */}
      <aside>
        <div style={compSt.sideCard}>
          <div style={{ width:80, height:80, borderRadius:'50%', overflow:'hidden', margin:'0 auto 12px', border:'3px solid #588684', background:'#fff' }}>
            <img src="../../assets/getpanama.png" alt="Get Panamá" style={{ width:'100%', height:'100%', objectFit:'contain' }} />
          </div>
          <h2 style={{ fontFamily:"'Poppins',sans-serif", fontSize:18, fontWeight:700, color:'#283951', marginBottom:4 }}>Get Panamá</h2>
          <p style={{ color:'#8A9BA8', fontSize:13, marginBottom:16 }}>@get.panama</p>
        </div>
        <div style={compSt.sideCard}>
          <h3 style={{ fontSize:14, fontWeight:600, color:'#283951', marginBottom:12 }}>Información General</h3>
          {[['Teléfono','+507 6123-4567'],['Email','info@panamaget.com'],['Facebook','@getpanama'],['Instagram','@get.panama']].map(([k,v]) => (
            <div key={k} style={{ marginBottom:10 }}>
              <div style={{ fontSize:11, color:'#8A9BA8', fontWeight:600, marginBottom:2 }}>{k}</div>
              <div style={{ fontSize:13, color:'#283951' }}>{v}</div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main */}
      <main>
        {/* Cover */}
        <div style={{ borderRadius:16, overflow:'hidden', height:200, position:'relative', marginBottom:24 }}>
          <img src="../../assets/coiba.webp" alt="Get Panamá" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(0deg,rgba(40,57,81,.65) 0%,rgba(40,57,81,.15) 60%)', display:'flex', alignItems:'flex-end', padding:24 }}>
            <div>
              <h2 style={{ fontFamily:"'Poppins',sans-serif", fontSize:24, fontWeight:700, color:'#fff', marginBottom:6 }}>Get Panamá</h2>
              <button onClick={() => window.open && window.open('#','_blank')} style={{ background:'#D57133', color:'#fff', padding:'8px 18px', borderRadius:50, border:'none', fontWeight:600, fontSize:13, cursor:'pointer' }}>Conócenos</button>
            </div>
          </div>
        </div>

        {/* Plans nav */}
        <div style={{ marginBottom:20 }}>
          <h2 style={{ fontFamily:"'Poppins',sans-serif", fontSize:18, fontWeight:700, color:'#283951', marginBottom:12 }}>Planes Activos</h2>
          <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setActiveTab(t)}
                style={{ padding:'6px 14px', border:'none', borderRadius:50, fontSize:12, fontWeight:600, cursor:'pointer', background: activeTab===t ? '#588684' : '#fff', color: activeTab===t ? '#fff' : '#5A6B7D', border: activeTab===t ? 'none' : '1px solid #E1E8ED' }}>
                {t.charAt(0).toUpperCase()+t.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:16 }}>
          {plans.map(p => <DestinationCard key={p.id} item={p} onClick={() => onNavigate('plan-detail', p)} />)}
        </div>
      </main>

      {/* Right sidebar */}
      <aside>
        <div style={compSt.sideCard}>
          <h3 style={{ fontSize:14, fontWeight:600, color:'#283951', marginBottom:10 }}>Sobre Nosotros</h3>
          <p style={{ fontSize:13, color:'#5A6B7D', lineHeight:1.6, marginBottom:16 }}>
            Ser reconocidos como el principal operador de turismo de aventura en Panamá, ofreciendo experiencias únicas que conecten a los viajeros con la naturaleza y la cultura.
          </p>
          <a href="#" onClick={e => { e.preventDefault(); onNavigate('plan-form'); }}
            style={{ background:'#D57133', color:'#fff', padding:'9px 18px', borderRadius:50, fontSize:13, fontWeight:600, display:'inline-block', textDecoration:'none' }}>
            Registra un plan
          </a>
        </div>
        <div style={{ ...compSt.sideCard, marginTop:12 }}>
          <h3 style={{ fontSize:14, fontWeight:600, color:'#283951', marginBottom:10 }}>Estadísticas</h3>
          {[['Planes activos','3'],['Valoración promedio','4.6 ★'],['Clientes atendidos','240+']].map(([k,v]) => (
            <div key={k} style={{ display:'flex', justifyContent:'space-between', padding:'6px 0', borderBottom:'1px solid #F8F9FA', fontSize:13 }}>
              <span style={{ color:'#5A6B7D' }}>{k}</span>
              <span style={{ fontWeight:600, color:'#D57133' }}>{v}</span>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

const compSt = {
  sideCard: { background:'#fff', borderRadius:16, padding:20, border:'1px solid #E1E8ED', textAlign:'center', marginBottom:0 },
};

// ─── PLAN FORM (multi-step) ──────────────────────────────────────
const PlanFormScreen = ({ onNavigate }) => {
  const [step, setStep] = React.useState(1);
  const [submitted, setSubmitted] = React.useState(false);
  const totalSteps = 4;

  const steps = ['Información Básica','Descripción y Fechas','Imagen del Plan','Confirmación'];

  const handleSubmit = () => { setSubmitted(true); setTimeout(() => { setSubmitted(false); onNavigate('company-profile'); }, 1800); };

  return (
    <div className="fade-in" style={{ display:'flex', minHeight:'80vh' }}>
      {/* Left panel */}
      <div style={{ width:340, background:'linear-gradient(135deg,#283951,#588684)', padding:'40px 28px', display:'flex', flexDirection:'column', justifyContent:'space-between', borderRadius:'16px 0 0 16px', margin:'24px 0 24px 32px', color:'#fff' }}>
        <div>
          <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:28 }}>
            <div style={{ width:36, height:36, background:'rgba(255,255,255,.15)', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', fontSize:16 }}>🌴</div>
            <span style={{ fontFamily:"'Poppins',sans-serif", fontWeight:700, fontSize:17 }}>TourPlan</span>
          </div>
          <h2 style={{ fontFamily:"'Poppins',sans-serif", fontSize:18, fontWeight:600, marginBottom:24 }}>Crear Plan Turístico</h2>

          <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
            {steps.map((s,i) => (
              <div key={s} style={{ display:'flex', alignItems:'center', gap:12, opacity: i+1 <= step ? 1 : .5 }}>
                <div style={{ width:28, height:28, borderRadius:'50%', background: i+1 <= step ? '#D57133' : 'rgba(255,255,255,.2)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:12, fontWeight:700 }}>{i+1}</div>
                <span style={{ fontSize:13, fontWeight: i+1 === step ? 600 : 400 }}>{s}</span>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div style={{ marginTop:24, background:'rgba(255,255,255,.2)', borderRadius:50, height:6, overflow:'hidden' }}>
            <div style={{ width:`${(step/totalSteps)*100}%`, height:'100%', background:'#D57133', borderRadius:50, transition:'width .3s' }}></div>
          </div>
        </div>
        <p style={{ fontSize:12, opacity:.6 }}>Tu plan se unirá a nuestra colección de experiencias increíbles</p>
      </div>

      {/* Right panel */}
      <div style={{ flex:1, background:'#fff', borderRadius:'0 16px 16px 0', margin:'24px 32px 24px 0', padding:'40px 36px', display:'flex', flexDirection:'column' }}>
        <h1 style={{ fontFamily:"'Poppins',sans-serif", fontSize:22, fontWeight:700, color:'#283951', marginBottom:4 }}>{steps[step-1]}</h1>
        <p style={{ color:'#5A6B7D', fontSize:14, marginBottom:28 }}>
          {step === 1 && 'Ingresa los datos principales de tu plan turístico'}
          {step === 2 && 'Añade una descripción detallada y las fechas disponibles'}
          {step === 3 && 'Sube una imagen atractiva para tu plan'}
          {step === 4 && 'Revisa la información antes de enviar'}
        </p>

        <div style={{ flex:1 }}>
          {step === 1 && (
            <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
              <div><label style={pfSt.label}>Nombre del Plan</label><input style={pfSt.input} placeholder="Ej: Tour por Casco Viejo, Aventura en Volcán Barú..." /></div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
                <div><label style={pfSt.label}>Precio (USD)</label><input style={pfSt.input} type="number" placeholder="150.00" /></div>
                <div><label style={pfSt.label}>Duración</label><input style={pfSt.input} placeholder="Ej: 3 días / 2 noches" /></div>
              </div>
              <div><label style={pfSt.label}>Provincia</label>
                <select style={pfSt.input}>
                  <option>Selecciona una provincia</option>
                  {['Bocas del Toro','Coclé','Colón','Chiriquí','Darién','Herrera','Los Santos','Panamá','Panamá Oeste','Veraguas'].map(p => <option key={p}>{p}</option>)}
                </select>
              </div>
            </div>
          )}
          {step === 2 && (
            <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
              <div><label style={pfSt.label}>Descripción</label><textarea style={{ ...pfSt.input, height:100, resize:'none' }} placeholder="Describe el plan, itinerario, qué incluye..."></textarea></div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
                <div><label style={pfSt.label}>Fecha inicio</label><input style={pfSt.input} type="date" /></div>
                <div><label style={pfSt.label}>Fecha fin</label><input style={pfSt.input} type="date" /></div>
              </div>
              <div><label style={pfSt.label}>Datos de contacto</label><input style={pfSt.input} placeholder="Email o teléfono del proveedor" /></div>
            </div>
          )}
          {step === 3 && (
            <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
              <div><label style={pfSt.label}>URL de imagen</label><input style={pfSt.input} placeholder="https://..." /></div>
              <div style={{ background:'#F8F9FA', border:'2px dashed #E1E8ED', borderRadius:16, padding:'40px 32px', textAlign:'center' }}>
                <div style={{ fontSize:36, marginBottom:8, color:'#8A9BA8' }}>📷</div>
                <p style={{ color:'#5A6B7D', fontSize:14, marginBottom:4 }}>Arrastra una imagen aquí</p>
                <p style={{ color:'#8A9BA8', fontSize:12 }}>o ingresa la URL arriba</p>
              </div>
              <div><label style={pfSt.label}>URL del sitio web (opcional)</label><input style={pfSt.input} placeholder="https://..." /></div>
            </div>
          )}
          {step === 4 && (
            <div style={{ background:'#F8F9FA', borderRadius:16, padding:28 }}>
              <h3 style={{ fontFamily:"'Poppins',sans-serif", fontSize:16, fontWeight:600, color:'#283951', marginBottom:16 }}>Resumen del Plan</h3>
              {[['Nombre','Tour Volcán Barú'],['Provincia','Chiriquí'],['Precio','$55.00'],['Duración','2 días / 1 noche'],['Estado','Pendiente de revisión']].map(([k,v]) => (
                <div key={k} style={{ display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid #E1E8ED', fontSize:14 }}>
                  <span style={{ color:'#5A6B7D' }}>{k}</span>
                  <span style={{ fontWeight:600, color:'#283951' }}>{v}</span>
                </div>
              ))}
              <p style={{ marginTop:16, fontSize:12, color:'#8A9BA8', fontStyle:'italic' }}>
                Al enviar, tu plan será revisado por el equipo de TourIstmo en 1–3 días hábiles.
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div style={{ display:'flex', justifyContent:'space-between', marginTop:28 }}>
          {step > 1 ? (
            <button onClick={() => setStep(s => s-1)} style={pfSt.btnOutline}>← Anterior</button>
          ) : (
            <button onClick={() => onNavigate('home')} style={pfSt.btnOutline}>Cancelar</button>
          )}
          {step < totalSteps ? (
            <button onClick={() => setStep(s => s+1)} style={pfSt.btnPrimary}>Siguiente →</button>
          ) : (
            <button onClick={handleSubmit} style={pfSt.btnPrimary}>Enviar Plan</button>
          )}
        </div>
      </div>

      {submitted && (
        <div style={{ position:'fixed', inset:0, background:'rgba(40,57,81,.8)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:9999 }}>
          <div style={{ background:'#fff', borderRadius:16, padding:40, textAlign:'center' }}>
            <div style={{ width:56, height:56, background:'#4CAF50', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 16px' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h2 style={{ fontFamily:"'Poppins',sans-serif", fontSize:20, color:'#283951', marginBottom:6 }}>¡Plan enviado!</h2>
            <p style={{ color:'#5A6B7D', fontSize:14 }}>Será revisado por el equipo.</p>
          </div>
        </div>
      )}
    </div>
  );
};

const pfSt = {
  label: { display:'block', fontSize:12, fontWeight:600, color:'#283951', marginBottom:5 },
  input: { width:'100%', padding:'11px 14px', border:'2px solid #E1E8ED', borderRadius:12, fontSize:14, fontFamily:'inherit', color:'#283951', outline:'none', boxSizing:'border-box' },
  btnPrimary: { padding:'12px 28px', background:'#D57133', color:'#fff', border:'none', borderRadius:50, fontWeight:700, fontSize:14, cursor:'pointer', fontFamily:'inherit' },
  btnOutline: { padding:'12px 24px', background:'transparent', color:'#588684', border:'2px solid #588684', borderRadius:50, fontWeight:600, fontSize:14, cursor:'pointer', fontFamily:'inherit' },
};

Object.assign(window, { AboutScreen, HelpScreen, CompanyProfile, PlanFormScreen });
