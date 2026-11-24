import React from 'react';
import CeremonyArt from '../CeremonyArt';
export default function Mehndi(){return <>
 <p className="ritual-kicker">मेहंदी के रंग</p>
 <h1 className="ritual-title">मेहंदी समारोह</h1>
 <p className="tagline">मेहंदी रचे, प्रेम के रंग सजे</p>
 <div className="art-halo ritual-art"><CeremonyArt type="mehndi"/></div>
 <div className="ritual-date"><span>बुधवार</span><strong>09 दिसंबर 2026</strong><span>सायंकाल</span></div>
 <p className="ceremony-quote">मेहंदी की लाली, रिश्तों की खुशहाली।<br/>हर रंग में बस जाए याद निराली॥</p>
 <div className="dress ritual-dress"><div className="ritual-swatches"><i style={{background:'#285c38'}}/><i style={{background:'#a5c35d'}}/></div><div><b>Dress Code</b><small>Green & Mehndi Green</small></div></div>
 <p className="closing">आइए, मेहंदी की महक और अपनों के संग इस शाम में भरें खुशियों के रंग।</p>
 </>}
