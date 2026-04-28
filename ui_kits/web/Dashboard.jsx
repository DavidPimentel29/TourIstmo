// Dashboard.jsx — Admin moderation dashboard
const Dashboard = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = React.useState('destinations');
  const [items, setItems] = React.useState([
    { id:1, nombre:'Playa Venao', tipo:'Playa', provincia:'Veraguas', submitter:'María López', status:'pending', fecha:'2025-07-10' },
    { id:2, nombre:'Sendero El Imposible', tipo:'Aventura', provincia:'Darién', submitter:'Carlos Ruiz', status:'pending', fecha:'2025-07-11' },
    { id:3, nombre:'Mercado Público de David', tipo:'Cultural', provincia:'Chiriquí', submitter:'Ana Torres', status:'approved', fecha:'2025-07-08' },
    { id:4, nombre:'Archipiélago de Perlas', tipo:'Paradisíaco', provincia:'Panamá', submitter:'Pedro Gómez', status:'rejected', fecha:'2025-07-07' },
    { id:5, nombre:'Bosque del Darién', tipo:'Natural', provincia:'Darién', submitter:'Luisa Mora', status:'approved', fecha:'2025-07-06' },
  ]);

  const stats = {
    pending: items.filter(i => i.status === 'pending').length,
    approved: items.filter(i => i.status === 'approved').length,
    rejected: items.filter(i => i.status === 'rejected').length,
  };

  const approve = id => setItems(prev => prev.map(i => i.id === id ? { ...i, status:'approved' } : i));
  const reject = id => setItems(prev => prev.map(i => i.id === id ? { ...i, status:'rejected' } : i));

  const statusColors = {
    pending:  { bg:'rgba(255,167,38,.15)', color:'#ef6c00', label:'Pendiente' },
    approved: { bg:'rgba(76,175,80,.15)',  color:'#2e7d32', label:'Aprobado' },
    rejected: { bg:'rgba(231,76,60,.15)',  color:'#c0392b', label:'Rechazado' },
  };

  return (
    <div style={{ background:'#F8F9FA', minHeight:'100vh' }}>
      {/* Admin header */}
      <div style={dashStyles.adminHeader}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'24px 32px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div>
            <h1 style={dashStyles.adminTitle}>Panel Administrativo</h1>
            <p style={{ color:'rgba(255,255,255,.8)', fontSize:14 }}>Gestión de Solicitudes de Destinos</p>
          </div>
          <div style={{ display:'flex', gap:24 }}>
            {[
              { label:'Pendientes', count:stats.pending, color:'#FFA726' },
              { label:'Aprobados', count:stats.approved, color:'#4CAF50' },
              { label:'Rechazados', count:stats.rejected, color:'#E74C3C' },
            ].map(s => (
              <div key={s.label} style={{ textAlign:'center' }}>
                <div style={{ fontSize:28, fontWeight:700, color:s.color }}>{s.count}</div>
                <div style={{ fontSize:12, color:'rgba(255,255,255,.8)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Nav tabs */}
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 32px', display:'flex', gap:4 }}>
          {[['destinations','Solicitudes Destinos'],['plans','Solicitudes Planes']].map(([key,label]) => (
            <button key={key} onClick={() => setActiveTab(key)}
              style={{ ...dashStyles.navTab, ...(activeTab === key ? dashStyles.navTabActive : {}) }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div style={{ maxWidth:1200, margin:'0 auto', padding:32 }}>
        <div style={dashStyles.tableCard}>
          <div style={dashStyles.tableHeader}>
            <h2 style={{ fontSize:17, fontWeight:600, color:'#283951', margin:0 }}>Solicitudes {activeTab === 'destinations' ? 'de Destinos' : 'de Planes'}</h2>
            <span style={{ background:'rgba(88,134,132,.12)', color:'#3f6b69', padding:'3px 10px', borderRadius:20, fontSize:12, fontWeight:600 }}>{items.length} total</span>
          </div>
          <table style={dashStyles.table}>
            <thead>
              <tr style={{ borderBottom:'2px solid #E1E8ED' }}>
                {['Nombre','Tipo','Provincia','Solicitante','Fecha','Estado','Acciones'].map(h => (
                  <th key={h} style={dashStyles.th}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map(item => {
                const s = statusColors[item.status];
                return (
                  <tr key={item.id} style={dashStyles.tr}
                    onMouseEnter={e => e.currentTarget.style.background='#F8F9FA'}
                    onMouseLeave={e => e.currentTarget.style.background=''}>
                    <td style={dashStyles.td}><strong style={{ color:'#283951' }}>{item.nombre}</strong></td>
                    <td style={dashStyles.td}><span style={{ background:'rgba(88,134,132,.1)', color:'#3f6b69', padding:'2px 8px', borderRadius:10, fontSize:12 }}>{item.tipo}</span></td>
                    <td style={dashStyles.td}><span style={{ color:'#5A6B7D', fontSize:13 }}>{item.provincia}</span></td>
                    <td style={dashStyles.td}><span style={{ color:'#5A6B7D', fontSize:13 }}>{item.submitter}</span></td>
                    <td style={dashStyles.td}><span style={{ color:'#8A9BA8', fontSize:12 }}>{item.fecha}</span></td>
                    <td style={dashStyles.td}>
                      <span style={{ background:s.bg, color:s.color, padding:'3px 10px', borderRadius:20, fontSize:11, fontWeight:700 }}>{s.label}</span>
                    </td>
                    <td style={dashStyles.td}>
                      {item.status === 'pending' ? (
                        <div style={{ display:'flex', gap:6 }}>
                          <button onClick={() => approve(item.id)} style={dashStyles.btnApprove}>Aprobar</button>
                          <button onClick={() => reject(item.id)} style={dashStyles.btnReject}>Rechazar</button>
                        </div>
                      ) : (
                        <span style={{ color:'#8A9BA8', fontSize:12 }}>—</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Stats cards */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16, marginTop:24 }}>
          {[
            { label:'Destinos Registrados', value:'47', icon:'📍', color:'#588684' },
            { label:'Planes Publicados', value:'23', icon:'🗺', color:'#D57133' },
            { label:'Usuarios Activos', value:'1,204', icon:'👥', color:'#8BAD65' },
          ].map(s => (
            <div key={s.label} style={dashStyles.statCard}>
              <div style={{ fontSize:28, marginBottom:8 }}>{s.icon}</div>
              <div style={{ fontSize:28, fontWeight:700, color:s.color }}>{s.value}</div>
              <div style={{ fontSize:13, color:'#5A6B7D' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const dashStyles = {
  adminHeader: { background:'linear-gradient(135deg,#283951,#588684)', paddingBottom:0 },
  adminTitle: { fontFamily:"'Poppins',sans-serif", fontSize:24, fontWeight:700, color:'#fff', margin:'0 0 4px' },
  navTab: { padding:'10px 20px', background:'transparent', border:'none', color:'rgba(255,255,255,.7)', fontSize:13, fontWeight:600, cursor:'pointer', borderRadius:'8px 8px 0 0' },
  navTabActive: { background:'#F8F9FA', color:'#283951' },
  tableCard: { background:'#fff', borderRadius:16, border:'1px solid #E1E8ED', overflow:'hidden' },
  tableHeader: { padding:'16px 24px', borderBottom:'1px solid #E1E8ED', display:'flex', alignItems:'center', justifyContent:'space-between' },
  table: { width:'100%', borderCollapse:'collapse' },
  th: { padding:'10px 16px', textAlign:'left', fontSize:11, fontWeight:700, color:'#8A9BA8', textTransform:'uppercase', letterSpacing:.5 },
  tr: { borderBottom:'1px solid #E1E8ED', transition:'background .15s' },
  td: { padding:'12px 16px', fontSize:13 },
  btnApprove: { padding:'4px 12px', background:'rgba(76,175,80,.12)', color:'#2e7d32', border:'1px solid rgba(76,175,80,.3)', borderRadius:20, fontSize:11, fontWeight:700, cursor:'pointer' },
  btnReject: { padding:'4px 12px', background:'rgba(231,76,60,.1)', color:'#c0392b', border:'1px solid rgba(231,76,60,.2)', borderRadius:20, fontSize:11, fontWeight:700, cursor:'pointer' },
  statCard: { background:'#fff', borderRadius:12, padding:'20px 24px', border:'1px solid #E1E8ED', textAlign:'center' },
};

Object.assign(window, { Dashboard });
