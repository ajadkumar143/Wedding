import React,{useState,useEffect,useRef,useLayoutEffect} from 'react';
import {createRoot} from 'react-dom/client';
import Welcome from './pages/Welcome';
import Haldi from './pages/Haldi';
import Mehndi from './pages/Mehndi';
import Wedding from './pages/Wedding';
import VidaiBhoj from './pages/VidaiBhoj';
import Location from './pages/Location';
import Decor from './Decor';
import {CeremonyAtmosphere} from './CeremonyArt';
import './style.css';

const pages=[['welcome','मंगल आमंत्रण',Welcome],['haldi','हल्दी',Haldi],['mehndi','मेहंदी',Mehndi],['wedding','शुभ विवाह',Wedding],['vidai','विदाई एवं बहुभोज',VidaiBhoj],['location','बारात प्रस्थान',Location]];
const SLIDE_MS=4000, FADE_MS=650;

function Scene({index,outgoing=false,entering=false}){
 const [theme,title,Page]=pages[index];
 const pageRef=useRef(null),contentRef=useRef(null),sceneRef=useRef(null);
 useLayoutEffect(()=>{if(sceneRef.current)sceneRef.current.inert=outgoing;},[outgoing]);
 useLayoutEffect(()=>{
  const page=pageRef.current,content=contentRef.current;if(!page||!content)return;
  const fit=()=>{const available=Math.max(1,page.clientHeight-8);content.style.setProperty('--fit',String(Math.min(1,available/Math.max(1,content.offsetHeight))));};
  fit();const observer=typeof ResizeObserver==='function'?new ResizeObserver(fit):null;observer?.observe(page);observer?.observe(content);window.addEventListener('resize',fit);
  return()=>{observer?.disconnect();window.removeEventListener('resize',fit)};
 },[]);
 return <article ref={sceneRef} className={'invitation '+theme+(outgoing?' scene-outgoing':'')+(entering?' scene-entering':'')} data-page={theme} aria-hidden={outgoing?true:undefined}>
  <Decor theme={theme}/><CeremonyAtmosphere type={theme}/>
  <section ref={pageRef} className="page" aria-label={title}><div ref={contentRef} className="content"><Page/></div></section>
 </article>;
}
function App(){
 const [{index,previous},setSlide]=useState({index:0,previous:null});
 const [visible,setVisible]=useState(!document.hidden);
 const touch=useRef(null),total=pages.length;
 const move=n=>setSlide(s=>s.previous!==null?s:{index:(s.index+n+total)%total,previous:s.index});
 useEffect(()=>{const update=()=>setVisible(!document.hidden);document.addEventListener('visibilitychange',update);return()=>document.removeEventListener('visibilitychange',update)},[]);
 useEffect(()=>{if(!visible)return;const t=setTimeout(()=>move(1),SLIDE_MS);return()=>clearTimeout(t)},[index,visible]);
 useEffect(()=>{if(previous===null)return;const t=setTimeout(()=>setSlide(s=>({...s,previous:null})),FADE_MS+45);return()=>clearTimeout(t)},[previous,index]);
 useEffect(()=>{const key=e=>{if(e.key==='ArrowRight')move(1);if(e.key==='ArrowLeft')move(-1)};window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key)},[]);
 return <main className={'stage'+(!visible?' hidden-tab':'')} style={{'--fade-ms':`${FADE_MS}ms`}}>
  <div className="slide-frame" onTouchStart={e=>{if(e.touches.length===1)touch.current=[e.touches[0].clientX,e.touches[0].clientY]}} onTouchCancel={()=>touch.current=null} onTouchEnd={e=>{if(!touch.current)return;const dx=e.changedTouches[0].clientX-touch.current[0],dy=e.changedTouches[0].clientY-touch.current[1];touch.current=null;if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.3)move(dx<0?1:-1)}}>
   {previous!==null&&<Scene key={previous} index={previous} outgoing/>}
   <Scene key={index} index={index} entering={previous!==null}/>
  </div>
 </main>;
}
createRoot(document.getElementById('root')).render(<App/>);
