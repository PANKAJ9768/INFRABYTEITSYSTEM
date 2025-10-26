import React from 'react';

export default function Cybersecurity(){
  return (
    <div style={{marginTop:72}}>
      <section style={{background:'linear-gradient(135deg, var(--brand1), var(--brand2))', color:'#fff', padding:'70px 0', textAlign:'center'}}>
        <div className="container"><h1>Cybersecurity Solutions</h1><p>EDR, cloud security, audits, and vCISO with compliance at core.</p></div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Capabilities</h2>
          <ul>
            <li>Endpoint Detection & Response and threat intel</li>
            <li>Cloud security, CSPM, and workload protection</li>
            <li>Risk assessments, gap analysis, and policy frameworks</li>
            <li>vCISO guidance and regulatory alignment</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
