import React from 'react';

export default function Industries(){
  const inds = ['Healthcare', 'BFSI', 'Pharmaceutical', 'ITeS', 'Government / PSU', 'Retail & E‑commerce', 'Technology'];
  return (
    <div style={{marginTop:72}} className="section">
      <div className="container">
        <h1>Industries</h1>
        <p style={{color:'var(--muted)'}}>Solutions tailored for regulatory requirements and mission‑critical needs.</p>
        <div style={{display:'grid', gap:20, gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', marginTop:12}}>
          {inds.map(x => <div key={x} style={{background:'#fff', padding:20, borderRadius:10, boxShadow:'0 10px 24px rgba(0,0,0,.06)'}}>{x}</div>)}
        </div>
      </div>
    </div>
  );
}
