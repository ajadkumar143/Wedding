import React from 'react';

// Original vector ornaments; no photos or illustrations of people.
function Blossom({x,y,r=5,tone='cream',angle=0}){
 const palette={cream:['#fff4d9','#e5bd85','#ba793f'],rose:['#e17c83','#a92e50','#f6b5a1'],red:['#b52e46','#72182e','#ed8890']};
 const [light,dark,center]=palette[tone];
 return <g transform={`translate(${x} ${y}) rotate(${angle})`}>
  {Array.from({length:7},(_,i)=><ellipse key={i} cy={-r*.43} rx={r*.45} ry={r*.67} transform={`rotate(${i*360/7})`} fill={light} stroke={dark} strokeWidth=".45"/>)}
  {Array.from({length:5},(_,i)=><ellipse key={i} cy={-r*.22} rx={r*.22} ry={r*.36} transform={`rotate(${i*72+15})`} fill={dark} opacity=".8"/>)}<circle r={r*.18} fill={center}/>
 </g>;
}
function Spark({x,y,i=0}){return <g transform={`translate(${x} ${y})`}><path className="vivah-spark" style={{animationDelay:`${-i*.39}s`}} d="M0-5 1.2-1.2 5 0 1.2 1.2 0 5-1.2 1.2-5 0-1.2-1.2Z" fill="#fff5be"/></g>}
function Garland({x,flip=false}){
 const points=Array.from({length:27},(_,i)=>{let t=i*Math.PI/26;return [Math.cos(t)*25,Math.sin(t)*68]});
 return <g transform={`translate(${x} 36) scale(${flip?-1:1} 1)`}><g className="vivah-varmala" style={{animationDelay:flip?'-.9s':'0s'}}>
  <path d="M-25 0Q-25 68 0 68Q25 68 25 0" fill="none" stroke="#d7a75c" strokeWidth="2.5"/>
  {points.map(([px,py],i)=><Blossom key={i} x={px} y={py} r={i%4===0?5.4:4.6} tone={i%5===0?'red':i%5===1?'rose':'cream'} angle={i*37}/>)}
  <g transform="translate(0 70)"><path d="M0 0 4 6 0 12-4 6Z" fill="#e4b96b" stroke="#fff1bb"/><path d="M0 12v5" stroke="#ffe7a6"/><circle cy="19" r="2.4" fill="#f9df9c"/></g>
  <Spark x={-20} y={37} i={2}/><Spark x={16} y={52} i={4}/><Spark x={0} y={66} i={6}/>
 </g></g>;
}
function RoyalMandap(){return <svg className="royal-mandap" viewBox="0 0 320 134" aria-hidden="true">
 <defs>
  <linearGradient id="vivah-gold" x1="0" y1="0" x2="1" y2=".7"><stop stopColor="#a96a27"/><stop offset=".23" stopColor="#f4d28e"/><stop offset=".48" stopColor="#fff2c1"/><stop offset=".72" stopColor="#c39142"/><stop offset="1" stopColor="#f9de9e"/></linearGradient>
  <linearGradient id="vivah-silk" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#d06975"/><stop offset="1" stopColor="#6f1937"/></linearGradient>
  <radialGradient id="vivah-halo"><stop stopColor="#ffd18a" stopOpacity=".36"/><stop offset="1" stopColor="#ffd18a" stopOpacity="0"/></radialGradient>
 </defs>
 <ellipse cx="160" cy="69" rx="93" ry="64" fill="url(#vivah-halo)"/>
 <g fill="none" stroke="url(#vivah-gold)"><path d="M20 119V40Q20 32 32 30Q110 31 160 4Q210 31 288 30Q300 32 300 40V119" strokeWidth="3"/><path d="M28 113V45Q28 39 40 38Q112 39 160 13Q208 39 280 38Q292 39 292 45V113" strokeWidth=".8"/><path d="M12 121H52M268 121H308M12 125H52M268 125H308" strokeWidth="2"/></g>
 {[32,288].map((x,i)=><g key={x} transform={`translate(${x} 0) scale(${i?-1:1} 1)`}>
  <path d="M-9 40H19Q8 75 22 114H-9Z" fill="url(#vivah-silk)" stroke="#d9a963" strokeWidth=".7"/><path d="M-7 42Q4 68 0 111M1 42Q14 74 10 112" fill="none" stroke="#e49a9b" strokeOpacity=".55"/>
  <path d="M-7 79Q5 86 16 79" stroke="#f6dc9a" strokeWidth="3" fill="none"/><path d="M15 82v9" stroke="#f4d890"/><circle cx="15" cy="94" r="2" fill="#efd087"/>
 </g>)}
 {Array.from({length:25},(_,i)=>{const x=29+i*10.9;const y=29-17*Math.pow(1-Math.abs(x-160)/131,2);return <Blossom key={i} x={x} y={y} r={i%3===0?6:4.6} tone={i%3===0?'red':i%3===1?'cream':'rose'} angle={i*21}/>})}
 <Garland x={89}/><Garland x={231} flip/>
 <g transform="translate(160 0)"><path d="M0 22V40" stroke="#e7bd76"/><path d="M-10 40Q0 23 10 40L7 46H-7Z" fill="url(#vivah-gold)"/><path d="M-8 46H8" stroke="#fff0b2" strokeWidth="1.5"/><circle cy="49" r="2.2" fill="#fce4aa"/></g>
 <g fill="none" stroke="#f6d58a" strokeWidth=".65" opacity=".5"><circle cx="160" cy="82" r="32" strokeDasharray="2 3"/><circle cx="160" cy="82" r="28"/>{Array.from({length:8},(_,i)=><ellipse key={i} cx="160" cy="82" rx="11" ry="28" transform={`rotate(${i*45} 160 82)`}/>)}</g>
 <g className="vivah-fire"><path d="M145 104Q133 88 153 73Q149 87 158 89Q173 77 170 62Q190 87 175 104Z" fill="#ef8c43"/><path d="M151 104Q146 95 160 81Q156 96 168 91Q175 100 169 104Z" fill="#fff1a1"/></g>
 <path d="M137 104H183L178 116H142Z" fill="url(#vivah-gold)" stroke="#f7d99b" strokeWidth=".7"/><path d="M140 109H180M133 118H187M129 122H191" stroke="#eec980" strokeWidth="1.2"/>
 {[ [54,48],[121,38],[199,37],[265,52],[143,66],[177,61],[52,108],[269,108] ].map(([x,y],i)=><Spark key={i} x={x} y={y} i={i}/>)}
 </svg>}
export default function Wedding(){return <>
 <p className="vivah-kicker">सात वचन • जीवन भर का साथ</p>
 <h1 className="vivah-heading">शुभ विवाह</h1>
 <RoyalMandap/>
 <div className="vivah-names">
  <div className="vivah-person"><h2>रवि कुमार</h2><p><b>सुपुत्र —</b> श्री रामबली एवं श्रीमती उर्मिला देवी</p><p><b>पौत्र —</b> स्व० मुन्नर एवं स्व० सेवना देवी</p></div>
  <div className="vivah-union"><i/><span>संग</span><i/></div>
  <div className="vivah-person"><h2>पूनम कुमारी</h2><p><b>सुपुत्री —</b> श्री सिया राम एवं श्रीमती सुगना देवी</p></div>
 </div>
 <div className="vivah-date"><span>गुरुवार</span><strong>10 दिसंबर 2026</strong><span>रात्रि</span></div>
 <p className="ceremony-note">सप्तपदी के पावन बंधन में, प्रेम और विश्वास का नया सफर।</p><p className="vivah-wish">आपकी स्नेहमयी उपस्थिति ही हमारा सौभाग्य है।</p>
 </>}
