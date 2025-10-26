import React from 'react';

export default function CloudServices(){
  return (
    <div style={{marginTop:72}}>
      <section style={{background:'linear-gradient(135deg, var(--brand1), var(--brand2))', color:'#fff', padding:'70px 0', textAlign:'center'}}>
        <div className="container"><h1>Cloud Services & Migration</h1><p>Inventory, plan, migrate, optimize—securely and efficiently.</p></div>
      </section>
      <section className="section">
        <div className="container">
          <h2>What We Deliver</h2>
          <ul>
            <li>Cloud readiness and cost modeling</li>
            <li>Landing zones, IAM, network and security baselines</li>
            <li>Data and app migration with encryption and testing</li>
            <li>FinOps, backups, DR, and continuous optimization</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
