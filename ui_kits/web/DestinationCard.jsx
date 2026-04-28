// DestinationCard.jsx — reusable card for destinations and plans
const DestinationCard = ({ item, onClick }) => {
  const [saved, setSaved] = React.useState(false);

  const typeColors = {
    'Histórico':   { bg:'#fff3e0', color:'#ef6c00', border:'#ffcc02' },
    'Playa':       { bg:'#e3f2fd', color:'#0277bd', border:'#90caf9' },
    'Natural':     { bg:'#e8f5e8', color:'#2e7d32', border:'#a5d6a7' },
    'Aventura':    { bg:'#fce4ec', color:'#c2185b', border:'#f8bbd9' },
    'Cultural':    { bg:'#f3e5f5', color:'#7b1fa2', border:'#ce93d8' },
    'Paradisíaco': { bg:'#e0f7fa', color:'#00838f', border:'#80deea' },
    'Ingeniería':  { bg:'#eceff1', color:'#546e7a', border:'#b0bec5' },
    'Exploración': { bg:'#e8f5e8', color:'#2e7d32', border:'#a5d6a7' },
    'Acuático':    { bg:'#e3f2fd', color:'#0277bd', border:'#90caf9' },
    'Relajación':  { bg:'#f3e5f5', color:'#7b1fa2', border:'#ce93d8' },
  };
  const tc = typeColors[item.tipo] || { bg:'#F8F9FA', color:'#5A6B7D', border:'#E1E8ED' };

  return (
    <div style={cardStyles.card} onClick={() => onClick && onClick(item)}
      onMouseEnter={e => { e.currentTarget.style.transform='translateY(-8px)'; e.currentTarget.style.boxShadow='0 15px 35px rgba(40,57,81,.2)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 1px 3px rgba(40,57,81,.08)'; }}>
      <div style={cardStyles.imgWrap}>
        <img src={item.imagen} alt={item.nombre} style={cardStyles.img} />
        <button style={{ ...cardStyles.saveBtn, ...(saved ? cardStyles.saveBtnSaved : {}) }}
          onClick={e => { e.stopPropagation(); setSaved(!saved); }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill={saved ? '#E74C3C' : 'none'} stroke={saved ? '#E74C3C' : '#8A9BA8'} strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div style={cardStyles.body}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:4 }}>
          <h4 style={cardStyles.title}>{item.nombre}</h4>
        </div>
        <div style={cardStyles.location}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#5A6B7D" strokeWidth="2">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          {item.provincia}
        </div>
        <span style={{ ...cardStyles.typeBadge, background:tc.bg, color:tc.color, border:`1px solid ${tc.border}` }}>
          {item.tipo}
        </span>
        <div style={cardStyles.meta}>
          <span style={cardStyles.rating}>★ {item.rating}</span>
          <span style={cardStyles.price}>{item.precio ? `$${item.precio}` : 'Gratis'}</span>
        </div>
      </div>
    </div>
  );
};

const cardStyles = {
  card: {
    background:'#fff', borderRadius:16, overflow:'hidden',
    border:'1px solid #E1E8ED', cursor:'pointer',
    boxShadow:'0 1px 3px rgba(40,57,81,.08)',
    transition:'transform .3s ease, box-shadow .3s ease',
  },
  imgWrap: { position:'relative', height:180, overflow:'hidden' },
  img: { width:'100%', height:'100%', objectFit:'cover', display:'block' },
  saveBtn: {
    position:'absolute', top:10, right:10,
    background:'rgba(255,255,255,.9)', border:'none', borderRadius:'50%',
    width:32, height:32, display:'flex', alignItems:'center', justifyContent:'center',
    cursor:'pointer', boxShadow:'0 1px 3px rgba(40,57,81,.1)',
  },
  saveBtnSaved: { background:'rgba(231,76,60,.1)' },
  body: { padding:14 },
  title: { fontFamily:"'Poppins',sans-serif", fontSize:14, fontWeight:600, color:'#283951', margin:0, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' },
  location: { fontSize:12, color:'#5A6B7D', display:'flex', alignItems:'center', gap:4, margin:'4px 0 8px' },
  typeBadge: { display:'inline-block', padding:'2px 10px', borderRadius:12, fontSize:11, fontWeight:500 },
  meta: { display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:10 },
  rating: { fontSize:12, fontWeight:600, color:'#D57133' },
  price: { fontSize:13, fontWeight:700, color:'#3f6b69' },
};

Object.assign(window, { DestinationCard });
