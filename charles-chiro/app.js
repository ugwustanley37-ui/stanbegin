(function(){
"use strict";
const ME=window.ME, SITES=window.SITES||[], REVIEWS=window.REVIEWS||[], GAL=window.GALLERY||{};
const M="media/";
const PH={ring:M+"me/ring.webp",studio:M+"me/studio.webp",outdoor:M+"me/outdoor.webp",hallway:M+"me/hallway.webp"};
const NAME=ME.name;
const hasG=!!window.gsap;
if(hasG&&window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
const fine=matchMedia("(pointer:fine)").matches;
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const view=$("#view");
const STAR=`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z"/></svg>`;
const TYPE={family:"Family chiropractic",sports:"Sports & performance",specialty:"Specialty technique",multi:"Multidisciplinary",coach:"Wellness coaching",chiro:"Chiropractic",wellness:"Wellness"};
const GROUPS=[["all","All"],["family","Family"],["sports","Sports"],["specialty","Specialty technique"],["multi","Multidisciplinary"],["coach","Wellness coaching"]];
const VERT=[..."1234567"].map(n=>"C"+n).concat(Array.from({length:12},(_,i)=>"T"+(i+1)),[..."12345"].map(n=>"L"+n));

/* smooth scroll */
let lenis=null;
if(window.Lenis&&!reduce){try{lenis=new Lenis({lerp:.1,smoothWheel:true});
  if(hasG){lenis.on("scroll",()=>window.ScrollTrigger&&ScrollTrigger.update());gsap.ticker.add(t=>lenis.raf(t*1000));gsap.ticker.lagSmoothing(0)}
  else{const raf=t=>{lenis.raf(t);requestAnimationFrame(raf)};requestAnimationFrame(raf)}}catch(e){lenis=null}}
const toTop=()=>{if(lenis)lenis.scrollTo(0,{immediate:true});window.scrollTo(0,0)};

/* holidays */
function holidays(){
  const now=new Date(), y=now.getFullYear();
  const thanks=yr=>{const d=new Date(yr,10,1);const off=(4-d.getDay()+7)%7;return new Date(yr,10,1+off+21)};
  const list=[];
  [y,y+1].forEach(yr=>{list.push({n:"Thanksgiving",d:thanks(yr)},{n:"Christmas",d:new Date(yr,11,25)},{n:"New Year",d:new Date(yr+1,0,1)})});
  return list.filter(h=>h.d>now).sort((a,b)=>a.d-b.d).slice(0,3);
}
const fmtD=d=>d.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});

/* pieces */
const host=s=>(s.url||"").replace(/^https?:\/\//,"").replace(/\/$/,"")||"link coming soon";
const tags=s=>`<span class="tag"><span class="chip-t">${TYPE[s.type]||"Wellness"}</span>${s.holiday?'<span class="chip-t hol">Holiday campaign</span>':""}</span>`;
const frame=(s,video=true)=>`<div class="frame" data-vframe><div class="bar"><i></i><i></i><i></i><em>${esc(host(s))}</em></div>${tags(s)}
  <img src="${M}web/${s.slug}-hero.webp" alt="${esc(s.name)} website" loading="lazy">${video?`<video muted loop playsinline preload="none" src="${M}web/${s.slug}.mp4"></video>`:""}</div>`;
const liveBtn=(s,label="Live site")=>s.url?`<a class="live" href="${esc(s.url)}" target="_blank" rel="noopener" data-cursor="Visit"><i></i>${label} ↗</a>`:"";
const wcard=s=>`<article class="wcard" data-reveal data-g="${s.type}">
  <a href="#w-${s.slug}" data-cursor="View">${frame(s)}</a>
  <div class="wmeta"><div><h3><a href="#w-${s.slug}">${esc(s.name)}</a></h3><span class="mono muted">${esc(s.client)} · ${esc(s.place)}</span></div>${liveBtn(s)}</div></article>`;
const marquee=(words,cls="")=>{const s=words.map((w,i)=>i%2?`<em>${w}</em>`:w).join(` ${STAR} `);
  return `<div class="marquee ${cls}" data-marquee><div class="mq-track"><span>${s} ${STAR}</span><span>${s} ${STAR}</span></div></div>`};
const plats=()=>`<div class="plats">
  <a class="plat" href="${ME.linkedin}" target="_blank" rel="noopener" style="--pc:#0A66C2" data-cursor="Message"><span class="mono">Message me</span><div class="row"><h3>LinkedIn</h3><span class="arrow">↗</span></div></a>
  <a class="plat" href="${ME.upwork}" target="_blank" rel="noopener" style="--pc:#14A800" data-cursor="Hire"><span class="mono">Hire me on</span><div class="row"><h3>Upwork</h3><span class="arrow">↗</span></div></a>
  <a class="plat" href="${ME.fiverr}" target="_blank" rel="noopener" style="--pc:#1DBF73;--pt:#0E0B0A" data-cursor="Order"><span class="mono">Order on</span><div class="row"><h3>Fiverr</h3><span class="arrow">↗</span></div></a></div>`;
const mailbox=()=>ME.email?`<div class="mailbox"><span class="mono muted">Email</span><code id="em">${esc(ME.email)}</code><button id="copyEm" type="button">Copy</button></div>`:"";
const footer=()=>`<footer class="foot gut">
  <div class="foot-grid">
    <div><p class="h-md" style="max-width:17ch">Your practice deserves a website as good as your care.</p><a class="pill solid" style="margin-top:24px" href="#contact" data-magnetic>Get a free site review <span class="arr">→</span></a></div>
    <div><span class="mono muted">Pages</span><a href="#home">Home</a><a href="#projects">Projects</a><a href="#about">About</a><a href="#contact">Contact</a></div>
    <div><span class="mono muted">Find me</span><a href="${ME.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a><a href="${ME.upwork}" target="_blank" rel="noopener">Upwork ↗</a><a href="${ME.fiverr}" target="_blank" rel="noopener">Fiverr ↗</a></div>
  </div>
  <div class="foot-big" aria-hidden="true" data-fit><span>CHARLES CHUKWUMA</span></div>
  <div class="foot-base mono muted"><span>© 2026 ${NAME}</span><span>Websites for chiropractors &amp; wellness</span><button data-top class="mono">Back to top ↑</button></div>
</footer>`;
function rvCard(r){
  const t=r.text.length>380?r.text.slice(0,r.text.lastIndexOf(" ",370))+"…":r.text;
  const ttl=r.title.length>56?r.title.slice(0,54)+"…":r.title;
  return `<blockquote class="rv" data-reveal><div class="rv-top"><span class="stars">★★★★★</span><span class="src-badge ${r.source.toLowerCase()}">${r.source}</span></div><q>${esc(t)}</q>
    <footer><span class="mono muted">${esc(ttl)}</span><span class="mono muted">${r.source}${r.date?" · "+r.date:""}</span></footer></blockquote>`;
}
function testimonials(){
  const top=REVIEWS.slice(0,3), rest=REVIEWS.slice(3);
  return `<section class="sec light peach gut">
    <div class="sec-head"><div><span class="eyebrow mono">Client reviews · Upwork &amp; Fiverr</span><h2 class="h-xl" data-split>Clients<br>say it best</h2></div>
      <div style="display:flex;gap:10px;flex-wrap:wrap"><a class="pill" href="${ME.upwork}" target="_blank" rel="noopener" data-magnetic>Upwork profile <span class="arr">↗</span></a><a class="pill" href="${ME.fiverr}" target="_blank" rel="noopener" data-magnetic>Fiverr profile <span class="arr">↗</span></a></div></div>
    <div class="tgrid">
      <div class="vid" data-video data-cursor="Play" data-reveal>
        <video src="${M}me/adam-testimonial.mp4" poster="${M}me/adam-poster.jpg" playsinline preload="metadata"></video>
        <div class="play"><b>Play ▶</b></div>
        <div class="cap"><span class="stars">★★★★★</span><p style="font-weight:700;font-size:1.2em;margin-top:6px">Adam</p><span class="mono muted">Client video review</span></div>
      </div>
      <div class="rv-stack">${top.map(rvCard).join("")}</div>
    </div>
    ${rest.length?`<div class="rv-row-head"><span class="mono muted">More reviews · drag or scroll →</span></div><div class="rv-row" data-drag>${rest.map(rvCard).join("")}</div>`:""}
  </section>`;
}
function ctaBlock(){
  return `<section class="sec gut" style="overflow:hidden">
    <span class="eyebrow mono">Free website review</span>
    <h2 class="cta-title" data-split>Let's get<br><span class="ember">aligned.</span></h2>
    <div class="split" style="margin-top:clamp(30px,4vw,60px);align-items:end">
      <p style="font-size:clamp(19px,1.3vw + 6px,26px);line-height:1.45;max-width:34ch;font-weight:500" data-fade>Send me your practice name and your current website, or tell me you don't have one yet. I'll reply with a free review, ideas for the holiday season and a fixed quote.</p>
      <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:flex-end"><a class="pill big solid" href="${ME.book}" target="_blank" rel="noopener" data-magnetic>Book a call <span class="arr">↗</span></a></div>
    </div>
    ${mailbox()}
    ${plats()}
  </section>`;
}

/* pages */
function pageHome(){
  const H=holidays(), nx=H[0];
  return `
  <section class="hero gut">
    <canvas id="spine" aria-hidden="true"></canvas>
    <div>
      <div class="hero-kicker mono"><span class="live-dot"><i></i>Booking holiday redesigns now</span><span class="muted">Chiropractic · Wellness · Physio</span></div>
      <h1 class="hero-title" aria-label="Websites that book patients">
        <span class="row" data-hero-row><span>Websites</span></span>
        <span class="row" data-hero-row><span>that <span class="outline">book</span></span></span>
        <span class="row" data-hero-row><span class="glow">patients.</span></span>
      </h1>
      <div class="hero-lead">
        <p data-fade>I design websites for <span class="rot" data-rot><span class="on">chiropractors</span><span>wellness clinics</span><span>massage therapists</span><span>physical therapists</span></span><br>that turn visitors into booked appointments.</p>
      </div>
      <div class="hero-ctas" data-fade><a class="pill solid big" href="#projects" data-magnetic>See the work <span class="arr">→</span></a><a class="pill big" href="#contact" data-magnetic>Free site review</a></div>
    </div>
    <div class="hero-photo" data-hero-photo>
      <div class="ring"></div><div class="disc"><img src="${PH.ring}" alt="${NAME}"></div>
      <div class="hero-badge"><span class="st">★★★★★</span><b>${REVIEWS.length+1} reviews</b><span>Upwork &amp; Fiverr</span></div>
    </div>
    <div class="hero-align mono muted" aria-hidden="true">Spinal alignment<b id="alignNum">62%</b><span>scroll to align ↓</span></div>
  </section>
  ${marquee(["Chiropractors","Wellness clinics","Massage","Physical therapy","Holiday redesigns","Online booking"],"ember-band")}
  <section class="sec light gut">
    <span class="eyebrow mono">Why it matters</span>
    <p class="statement" data-fill>Patients judge your practice by your website before they ever lie on your table. I design <span class="chip"><img src="${PH.studio}" alt=""></span> sites that look as skilled as your hands, and make booking an adjustment <span class="hl">one tap.</span></p>
    <div class="stats">
      <div class="stat"><b data-count="${SITES.length}">${SITES.length}</b><span class="muted">Chiropractic &amp; wellness websites live</span></div>
      <div class="stat"><b data-count="${REVIEWS.length+1}">${REVIEWS.length+1}</b><span class="muted">Client reviews on Upwork &amp; Fiverr</span></div>
      <div class="stat"><b>5.0<sup>★</sup></b><span class="muted">Average client rating</span></div>
    </div>
  </section>
  <section class="sec light peach gut">
    <div class="sec-head"><div><span class="eyebrow mono">How I help</span><h2 class="h-xl" data-split>What I<br>build</h2></div>
      <p class="muted" style="max-width:34ch;font-size:1.1em">Whether you have no website, an old one, or one that needs a holiday push, there's a clear next step.</p></div>
    <div class="svc-list">
      <a class="svc" href="#projects" data-prev="${M}web/sydney-spine-hero.webp" data-cursor="Explore">
        <span class="for">No website yet</span>
        <div><h3>New practice website</h3><div class="tags"><span>Online booking</span><span>Condition pages</span><span>Google reviews</span><span>Mobile first</span></div></div>
        <p class="muted">A complete site that explains what you treat, builds trust fast and puts the booking button on every page.</p><span class="go">→</span></a>
      <a class="svc" href="#projects" data-prev="${M}web/restore-rock-hero.webp" data-cursor="Explore">
        <span class="for">Have a website</span>
        <div><h3>Holiday redesign</h3><div class="tags"><span>Countdown banners</span><span>Gift vouchers</span><span>New Year offers</span><span>Fresh design</span></div></div>
        <p class="muted">A modern refresh for Thanksgiving, Christmas and the New Year, so holiday traffic turns into bookings.</p><span class="go">→</span></a>
      <a class="svc" href="#contact" data-prev="${M}web/tetra-health-hero.webp" data-cursor="Start">
        <span class="for">Ready to grow</span>
        <div><h3>Patient funnels</h3><div class="tags"><span>New-patient offers</span><span>Lead magnets</span><span>Email follow-up</span><span>Kajabi</span></div></div>
        <p class="muted">Landing pages and follow-up that turn first-time visitors into first appointments.</p><span class="go">→</span></a>
    </div>
  </section>
  <section class="sec light paper" style="padding-bottom:clamp(60px,8vw,120px)">
    <div class="sec-head gut"><div><span class="eyebrow mono">Selected work · ${SITES.length} sites in total</span><h2 class="h-xl" data-split>Clinic<br>websites</h2></div>
      <a class="pill" href="#projects" data-magnetic>All projects <span class="arr">→</span></a></div>
    <div class="hs" data-hs><div class="hs-track">${SITES.filter(s=>s.featured).slice(0,8).map(wcard).join("")}</div></div>
  </section>
  <section class="sec ember-sec gut">
    <div class="hol-grid">
      <div><span class="eyebrow mono">Holiday season ${new Date().getFullYear()}</span>
        <h2 class="h-lg hol-title" data-split>${esc(nx.n)}<br>is coming</h2>
        <div class="count" id="count" data-target="${nx.d.getTime()}">
          <div><b data-u="d">00</b><span class="mono">Days</span></div><div><b data-u="h">00</b><span class="mono">Hours</span></div><div><b data-u="m">00</b><span class="mono">Mins</span></div><div><b data-u="s">00</b><span class="mono">Secs</span></div>
        </div></div>
      <div style="display:grid;gap:24px">
        <p style="font-size:clamp(19px,1.3vw + 6px,25px);line-height:1.4;font-weight:600" data-fade>The holidays are when patients buy gift vouchers, use up their year-end benefits and set New Year health goals. I'll have your site ready before the rush.</p>
        <ul class="hol-list">${H.map((h,i)=>`<li class="${i?"":"next"}">${esc(h.n)}<span>${fmtD(h.d)}</span></li>`).join("")}</ul>
        <div><a class="pill big" style="border-color:var(--ink)" href="#contact" data-magnetic>Plan my holiday refresh <span class="arr">→</span></a></div>
      </div>
    </div>
  </section>
  <section class="sec light gut">
    <span class="eyebrow mono">How it works</span><h2 class="h-lg" data-split style="margin-bottom:clamp(40px,5vw,80px)">Four simple<br>steps</h2>
    <ol class="steps">
      <li data-reveal><h3>Free review</h3><p class="muted">Send your current site, or tell me about your practice if you don't have one yet.</p></li>
      <li data-reveal><h3>Plan &amp; quote</h3><p class="muted">You get a clear page list, timeline and fixed price before any work starts.</p></li>
      <li data-reveal><h3>Design &amp; build</h3><p class="muted">I share a working draft early and refine it with your feedback.</p></li>
      <li data-reveal><h3>Launch</h3><p class="muted">I connect your domain and booking, test on phones, and stay on hand for edits.</p></li>
    </ol>
  </section>
  ${testimonials()}
  ${marquee(["Get back to living","Book online","Feel better","Move better"],"ember-band")}
  ${ctaBlock()}
  ${footer()}`;
}

function pageProjects(){
  const n=t=>SITES.filter(s=>t==="all"||s.type===t).length;
  return `<section class="phead light gut"><div class="phead-glow"></div>
    <span class="eyebrow mono">Projects</span>
    <h1 data-split>Clinic<br>work<sup>${String(SITES.length).padStart(2,"0")}</sup></h1>
    <div class="intro"><p data-fade>Every site here is live. Open one on your phone and try booking an appointment the way your patients would.</p>
      <div class="filters" data-filters="w" style="justify-content:flex-end" data-fade>
        ${GROUPS.filter(([k])=>n(k)).map(([k,l],i)=>`<button data-f="${k}" class="${i?"":"on"}">${l}<sup>${n(k)}</sup></button>`).join("")}
      </div></div>
  </section>
  <section class="sec light gut" style="padding-top:clamp(20px,3vw,40px)"><div class="wgrid" data-grid="w">${SITES.map(wcard).join("")}</div></section>
  ${marquee(["Chiropractors","Wellness clinics","Massage","Physical therapy"],"ember-band")}
  ${ctaBlock()}${footer()}`;
}

function pageWebsite(slug){
  const i=SITES.findIndex(s=>s.slug===slug); if(i<0) return pageProjects();
  const s=SITES[i], nx=SITES[(i+1)%SITES.length];
  const G=(GAL[s.slug]||[]).map(x=>{const m=x.endsWith("|m");return {src:`${M}web/g/${s.slug}-${m?x.slice(0,-2):x}.webp`,m}});
  const desk=G.filter(x=>!x.m).map(x=>x.src), mob=G.filter(x=>x.m).map(x=>x.src);
  return `<section class="dhero light gut">
    <a class="back mono" href="#projects">← All projects</a>
    <h1 class="dtitle" data-split>${esc(s.name)}</h1>
    <div class="dmeta">
      <div><span class="mono muted">Client</span><b>${esc(s.client)}</b></div>
      <div><span class="mono muted">Where</span><b>${esc(s.place)}</b></div>
      <div><span class="mono muted">Type</span><b>${TYPE[s.type]||"Wellness"}${s.holiday?" · Holiday campaign":""}</b></div>
      <div><span class="mono muted">Live site</span>${liveBtn(s,"Visit site")||"<b>Coming soon</b>"}</div>
    </div>
    <div class="big-frame" data-img-reveal><div class="frame playing"><div class="bar"><i></i><i></i><i></i><em>${esc(host(s))}</em></div>
      <img src="${M}web/${s.slug}-hero.webp" alt="${esc(s.name)} homepage"><video muted loop playsinline autoplay preload="auto" src="${M}web/${s.slug}.mp4"></video></div></div>
  </section>
  <section class="sec light gut"><div class="body-grid">
    <div><span class="eyebrow mono">The project</span><div class="prose"><p data-fade style="font-weight:600">${esc(s.intro)}</p><p data-fade class="muted">${esc(s.body)}</p></div>
      <div style="margin-top:40px"><span class="eyebrow mono">What's included</span><ul class="feat-list">${s.feats.map(f=>`<li data-reveal>${esc(f)}</li>`).join("")}</ul></div>
      ${s.url?`<a class="pill big solid" style="margin-top:40px" href="${esc(s.url)}" target="_blank" rel="noopener" data-magnetic>Open the live site <span class="arr">↗</span></a>`:""}</div>
    <div><span class="eyebrow mono">Full page · ${fine?"hover":"swipe"} to scroll</span><div class="scroller" data-scroller data-cursor="Scroll"><img src="${M}web/${s.slug}-full.webp" alt="Full page of ${esc(s.name)}"></div></div>
  </div></section>
  ${desk.length?`<section class="sec light peach gut" style="padding-top:0">
    <div class="sec-head"><div><span class="eyebrow mono">Screenshots · ${desk.length+mob.length}</span><h2 class="h-lg" data-split>Inside the<br>site</h2></div><p class="muted">Click any screenshot to enlarge it.</p></div>
    <div class="shots">${desk.map((d,j)=>`<button class="shot" data-lb="${d}" data-cursor="Zoom" data-reveal aria-label="Enlarge screenshot ${j+1}"><img src="${d}" alt="${esc(s.name)} section ${j+1}" loading="lazy"></button>`).join("")}</div>
    ${mob.length?`<div class="phones">${mob.map((d,j)=>`<button class="phone" data-lb="${d}" data-cursor="Zoom" data-reveal aria-label="Enlarge mobile screenshot ${j+1}"><img src="${d}" alt="${esc(s.name)} on mobile ${j+1}" loading="lazy"></button>`).join("")}<div class="phones-note"><span class="eyebrow mono">Mobile</span><p class="h-md">Most patients book from their phone. Every page is built for it.</p></div></div>`:""}
  </section>`:""}
  <a class="next light paper gut" href="#w-${nx.slug}" data-cursor="Next"><span class="mono muted">Next project</span><h2>${esc(nx.name)} →</h2></a>
  ${footer()}`;
}

function pageAbout(){
  return `<section class="phead light gut"><div class="phead-glow"></div>
    <div class="split" style="align-items:end">
      <div><span class="eyebrow mono">About</span><h1 class="about-name" data-split>Hi, I'm<br>Charles<br><span class="ember">Chukwuma</span></h1></div>
      <div class="photo tall" data-img-reveal style="max-width:440px;justify-self:end;width:100%"><img src="${PH.studio}" alt="${NAME}" data-parallax></div>
    </div>
  </section>
  <section class="sec light peach gut" style="padding-top:clamp(20px,3vw,40px)">
    <span class="eyebrow mono">What I do</span>
    <p class="statement" data-fill>I design websites for <span class="hl">chiropractors</span> and wellness practices, so the people who need your care can find you, trust you and book you.</p>
  </section>
  <section class="sec light paper gut"><div class="split">
    <div class="photo tall" data-img-reveal><img src="${PH.outdoor}" alt="Charles outdoors" data-parallax></div>
    <div><span class="eyebrow mono">My story</span><h2 class="h-lg" data-split>Design that<br>feels like care</h2>
      <div class="prose" style="margin-top:30px">
        <p data-fade>I'm ${NAME}, a web designer and developer based in Lagos, Nigeria. I studied Computer Science at Obafemi Awolowo University, and I work with practices in the US, Australia and around the world.</p>
        <p data-fade>Your patients are often in pain, in a hurry and on their phone. The site has to tell them in seconds what you treat, why they can trust you and how to book. That's what I design for.</p>
        <p data-fade>I build fast with modern tools and AI, so you see a working draft in days. I handle the design, the writing, the booking setup and the launch, and I stay around for changes afterwards.</p>
      </div>
      <div class="facts">
        <div><span class="mono muted">Based in</span><b>Lagos, Nigeria</b></div>
        <div><span class="mono muted">Clients</span><b>Worldwide</b></div>
        <div><span class="mono muted">Focus</span><b>Chiropractic &amp; wellness</b></div>
        <div><span class="mono muted">Rating</span><b>5.0 from ${REVIEWS.length+1} reviews</b></div>
      </div>
      <p class="mono muted" style="margin-top:36px;margin-bottom:14px">Platforms I build on</p>
      <div class="tools"><span>Framer</span><span>Webflow</span><span>GoHighLevel</span><span>Base44</span><span>Lovable</span><span>Bubble</span><span>Kajabi</span><span>Claude Design</span></div>
    </div>
  </div></section>
  ${marquee(["New websites","Holiday redesigns","Patient funnels","Online booking"],"ember-band")}
  ${testimonials()}
  ${ctaBlock()}${footer()}`;
}

function pageContact(){
  return `<section class="phead light gut"><div class="phead-glow"></div>
    <span class="eyebrow mono">Contact</span>
    <div class="split" style="align-items:end"><h1 data-split>Let's<br>talk<span class="ember">.</span></h1>
      <div class="photo tall" data-img-reveal style="max-width:420px;justify-self:end;width:100%"><img src="${PH.hallway}" alt="${NAME}" data-parallax></div></div>
    <div class="intro"><p data-fade>Tell me your practice name and send your current website if you have one. I'll reply with a free review, holiday ideas and a fixed quote.</p>
      <div style="display:flex;justify-content:flex-end"><a class="pill big solid" href="${ME.book}" target="_blank" rel="noopener" data-magnetic>Book a call <span class="arr">↗</span></a></div></div>
    ${mailbox()}
  </section>
  <section class="sec light gut" style="padding-top:clamp(20px,3vw,40px)">${plats()}</section>
  ${marquee(["LinkedIn","Upwork","Fiverr","Let's build"],"ember-band")}
  ${footer()}`;
}

/* router */
const ROUTES={home:pageHome,projects:pageProjects,about:pageAbout,contact:pageContact};
const LABEL={home:"Home",projects:"Projects",about:"About",contact:"Contact"};
function resolve(){
  const h=(location.hash||"").slice(1);
  if(h.startsWith("w-")){const s=SITES.find(x=>x.slug===h.slice(2));return {html:pageWebsite(h.slice(2)),label:s?s.name:"Project",key:"projects"}}
  const k=ROUTES[h]?h:"home"; return {html:ROUTES[k](),label:LABEL[k],key:k};
}
let busy=false, first=true;
function render(){
  const r=resolve();
  if(hasG&&window.ScrollTrigger) ScrollTrigger.getAll().forEach(t=>t.kill());
  stopLoops(); view.innerHTML=r.html; toTop();
  $$(".nav-links a").forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+r.key));
  wire(view);
  if(hasG&&window.ScrollTrigger) requestAnimationFrame(()=>ScrollTrigger.refresh());
}
function go(){
  closeMenu();
  if(first||!hasG||reduce){first=false;render();intro();return}
  if(busy) return; busy=true;
  const r=resolve(); $("#wipeLabel").textContent=r.label;
  gsap.timeline({onComplete:()=>{busy=false}})
    .set(["#wipe","#wipe2"],{yPercent:100,visibility:"visible"})
    .to("#wipe2",{yPercent:0,duration:.55,ease:"power4.inOut"})
    .to("#wipe",{yPercent:0,duration:.55,ease:"power4.inOut"},"-=.42")
    .from("#wipeLabel",{yPercent:60,opacity:0,duration:.4,ease:"power3.out"},"-=.2")
    .add(render)
    .to("#wipe",{yPercent:-100,duration:.7,ease:"power4.inOut"},"+=.15")
    .to("#wipe2",{yPercent:-100,duration:.7,ease:"power4.inOut"},"-=.6")
    .add(intro,"-=.45").set(["#wipe","#wipe2"],{visibility:"hidden"});
}
addEventListener("hashchange",go);

/* preloader: a spine assembling C1 to L5 */
function boot(){
  const pl=$("#preloader"), sp=$("#plSpine");
  sp.innerHTML=VERT.map((v,i)=>`<i style="width:${16+i*1.6}px"></i>`).join("");
  const bars=$$("i",sp);
  if(!hasG||reduce){pl.remove();go();return}
  const o={v:0};
  gsap.timeline()
    .to(o,{v:100,duration:1.6,ease:"power2.inOut",onUpdate:()=>{const v=Math.round(o.v);$("#plNum").textContent=v;
      const k=Math.min(VERT.length,Math.round(o.v/100*VERT.length));bars.forEach((b,i)=>b.classList.toggle("on",i<k));
      $("#plLabel").textContent=k>=VERT.length?"Aligned ✓":"Aligning "+VERT[Math.max(0,k-1)]}})
    .add(()=>{first=true;go()})
    .to(pl,{clipPath:"inset(0 0 100% 0)",duration:.9,ease:"power4.inOut"},"+=.15")
    .add(()=>pl.remove());
}
function intro(){
  if(!hasG||reduce) return;
  const rows=$$("[data-hero-row]>span",view);
  if(rows.length){
    gsap.from(rows,{yPercent:110,duration:1.2,ease:"power4.out",stagger:.09,delay:.05});
    gsap.from("[data-hero-photo]",{scale:.6,opacity:0,rotate:-14,duration:1.4,ease:"power4.out",delay:.2});
    gsap.from($$(".hero [data-fade], .hero-kicker, .hero-align",view),{y:30,opacity:0,duration:1,ease:"power3.out",stagger:.1,delay:.5});
  }
}

/* wiring */
let loops=[];
function stopLoops(){loops.forEach(f=>f());loops=[]}
function splitLines(el){const parts=el.innerHTML.split(/<br\s*\/?>/i);el.innerHTML=parts.map(p=>`<span class="split-line"><span>${p}</span></span>`).join("");return $$(".split-line>span",el)}
function wire(root){
  const ST=hasG&&window.ScrollTrigger&&!reduce;
  $$("[data-split]",root).forEach(el=>{const inner=splitLines(el);
    if(ST) gsap.from(inner,{yPercent:110,rotate:3,duration:1.1,ease:"power4.out",stagger:.09,scrollTrigger:{trigger:el,start:"top 88%",once:true}})});
  if(ST){
    $$("[data-fade]",root).forEach(el=>{if(el.closest(".hero"))return;gsap.from(el,{y:40,opacity:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 92%",once:true}})});
    ScrollTrigger.batch($$("[data-reveal]",root),{start:"top 94%",once:true,onEnter:b=>gsap.from(b,{y:60,opacity:0,duration:1,ease:"power3.out",stagger:.08,overwrite:true})});
    $$("[data-img-reveal]",root).forEach(el=>gsap.fromTo(el,{clipPath:"inset(18% 10% 18% 10% round 22px)"},{clipPath:"inset(0% 0% 0% 0% round 22px)",duration:1.4,ease:"power4.out",scrollTrigger:{trigger:el,start:"top 88%",once:true}}));
    $$("[data-parallax]",root).forEach(img=>gsap.fromTo(img,{scale:1.18,yPercent:-6},{yPercent:6,ease:"none",scrollTrigger:{trigger:img.parentElement,start:"top bottom",end:"bottom top",scrub:true}}));
    $$("[data-fill]",root).forEach(el=>{
      const walk=n=>{[...n.childNodes].forEach(c=>{
        if(c.nodeType===3){const f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(w=>{if(!w)return;if(/^\s+$/.test(w))f.append(w);else{const s=document.createElement("span");s.className="w";s.textContent=w;f.append(s)}});c.replaceWith(f)}
        else if(c.nodeType===1&&!c.classList.contains("chip")) walk(c)})};
      walk(el);
      gsap.to($$(".w",el),{opacity:1,stagger:.1,ease:"none",scrollTrigger:{trigger:el,start:"top 80%",end:"bottom 45%",scrub:true}});
    });
    $$("[data-count]",root).forEach(el=>{const n=+el.dataset.count,o={v:0};
      gsap.to(o,{v:n,duration:2,ease:"power2.out",scrollTrigger:{trigger:el,start:"top 92%",once:true},onUpdate:()=>el.textContent=Math.round(o.v)})});
    const hs=$("[data-hs]",root);
    if(hs&&innerWidth>900){const track=$(".hs-track",hs);const dist=()=>Math.max(0,track.scrollWidth-innerWidth);
      gsap.to(track,{x:()=>-dist(),ease:"none",scrollTrigger:{trigger:hs,start:"center center",end:()=>"+="+dist(),pin:true,scrub:1,invalidateOnRefresh:true,anticipatePin:1}})}
    ScrollTrigger.create({start:120,end:"max",onUpdate:s=>$("#nav").classList.toggle("hide",s.direction===1&&s.scroll()>300)});
  }else{
    $$("[data-fill] ",root).forEach(el=>el.style.opacity=1);
  }
  // marquees
  $$("[data-marquee]",root).forEach(m=>{
    const tr=$(".mq-track",m);let x=0,last=performance.now(),vel=0,dir=m.classList.contains("ember-band")?-1:1,raf,init=false;
    const half=()=>tr.scrollWidth/2;
    if(window.ScrollTrigger&&!reduce) ScrollTrigger.create({trigger:m,start:"top bottom",end:"bottom top",onUpdate:s=>{vel=Math.min(Math.abs(s.getVelocity())/300,8)}});
    const tick=t=>{const dt=Math.min(t-last,50);last=t;vel*=.94;const h=half();
      if(h){if(!init){x=dir>0?-h:0;init=true}x+=dir*(.06+vel*.06)*dt;if(dir<0&&x<=-h)x+=h;if(dir>0&&x>=0)x-=h}
      tr.style.transform=`translate3d(${x}px,0,0)`;raf=requestAnimationFrame(tick)};
    if(!reduce){raf=requestAnimationFrame(tick);loops.push(()=>cancelAnimationFrame(raf))}
  });
  // rotating words
  $$("[data-rot]",root).forEach(r=>{const s=$$("span",r);let i=0;if(reduce||!hasG)return;
    s.forEach((x,j)=>{x.classList.remove("on");gsap.set(x,{yPercent:j?110:0,opacity:1})});
    const id=setInterval(()=>{const a=s[i],b=s[(i+1)%s.length];gsap.to(a,{yPercent:-110,duration:.6,ease:"power3.in"});gsap.fromTo(b,{yPercent:110},{yPercent:0,duration:.7,ease:"power3.out",delay:.25});i=(i+1)%s.length},2300);
    loops.push(()=>clearInterval(id))});
  // spine
  const cv=$("#spine",root); if(cv) spine(cv);
  // countdown
  const cd=$("#count",root);
  if(cd){const T=+cd.dataset.target;const u=k=>$(`[data-u="${k}"]`,cd);
    const upd=()=>{let d=Math.max(0,T-Date.now());const D=Math.floor(d/864e5);d-=D*864e5;const h=Math.floor(d/36e5);d-=h*36e5;const m=Math.floor(d/6e4);d-=m*6e4;const s=Math.floor(d/1e3);
      u("d").textContent=String(D).padStart(2,"0");u("h").textContent=String(h).padStart(2,"0");u("m").textContent=String(m).padStart(2,"0");u("s").textContent=String(s).padStart(2,"0")};
    upd();const id=setInterval(upd,1000);loops.push(()=>clearInterval(id))}
  // photo mouse parallax
  const hp=$("[data-hero-photo]",root);
  if(hp&&fine&&hasG&&!reduce){const mv=e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;gsap.to(hp,{x:x*40,y:y*30,rotate:x*6,duration:1.2,ease:"power3.out"})};addEventListener("mousemove",mv);loops.push(()=>removeEventListener("mousemove",mv))}
  // video previews
  $$("[data-vframe]",root).forEach(f=>{const v=$("video",f);if(!v)return;const host=f.closest(".wcard")||f;
    host.addEventListener("mouseenter",()=>{f.classList.add("playing");v.play().catch(()=>{})});
    host.addEventListener("mouseleave",()=>{f.classList.remove("playing");v.pause()})});
  $$(".big-frame video",root).forEach(v=>v.play().catch(()=>{}));
  $$("[data-video]",root).forEach(b=>{const v=$("video",b);b.addEventListener("click",()=>{if(v.paused){v.play();b.classList.add("on");v.controls=true}});v.addEventListener("ended",()=>{b.classList.remove("on");v.controls=false})});
  // full-page scroller
  $$("[data-scroller]",root).forEach(s=>{const img=$("img",s);
    if(!fine){s.style.overflowY="auto";return}
    s.addEventListener("mouseenter",()=>{const d=img.offsetHeight-s.clientHeight;if(d<=0)return;const dur=Math.min(d/350,18);img.style.transition=`transform ${dur}s cubic-bezier(.45,0,.55,1)`;img.style.transform=`translateY(${-d}px)`});
    s.addEventListener("mouseleave",()=>{img.style.transition="transform 1.2s cubic-bezier(.7,0,.2,1)";img.style.transform="translateY(0)"})});
  // filters
  $$("[data-filters]",root).forEach(fl=>{const grid=$(`[data-grid="${fl.dataset.filters}"]`,root);
    fl.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;$$("button",fl).forEach(x=>x.classList.toggle("on",x===b));const f=b.dataset.f;const items=$$("[data-g]",grid);
      const apply=()=>{items.forEach(it=>it.hidden=!(f==="all"||it.dataset.g===f));if(window.ScrollTrigger)ScrollTrigger.refresh()};
      if(hasG&&!reduce){gsap.to(grid,{opacity:0,y:20,duration:.25,onComplete:()=>{apply();gsap.set(items,{clearProps:"opacity,transform"});gsap.to(grid,{opacity:1,y:0,duration:.5,ease:"power3.out"})}})}else apply()})});
  // drag rows
  $$("[data-drag]",root).forEach(el=>{let down=false,sx=0,sl=0;
    el.addEventListener("pointerdown",e=>{if(e.pointerType!=="mouse")return;down=true;sx=e.clientX;sl=el.scrollLeft;el.classList.add("dragging")});
    const up=()=>{down=false;el.classList.remove("dragging")};addEventListener("pointerup",up);loops.push(()=>removeEventListener("pointerup",up));
    el.addEventListener("pointermove",e=>{if(down)el.scrollLeft=sl-(e.clientX-sx)})});
  // lightbox
  $$("[data-lb]",root).forEach(b=>b.addEventListener("click",()=>{$("#lbImg").src=b.dataset.lb;$("#lb").hidden=false;if(hasG)gsap.from("#lbImg",{scale:.9,opacity:0,duration:.5,ease:"power3.out"})}));
  // hover previews
  const fp=$("#floatPrev"),fi=$("#floatImg");
  $$("[data-prev]",root).forEach(r=>{r.addEventListener("mouseenter",()=>{fi.src=r.dataset.prev;fp.classList.add("on")});r.addEventListener("mouseleave",()=>fp.classList.remove("on"))});
  // copy email
  const ce=$("#copyEm",root);
  if(ce) ce.addEventListener("click",()=>{const p=navigator.clipboard?navigator.clipboard.writeText(ME.email):Promise.reject();
    p.then(()=>ce.textContent="Copied",()=>{const r=document.createRange();r.selectNodeContents($("#em"));const s=getSelection();s.removeAllRanges();s.addRange(r);ce.textContent="Selected, press copy"})});
  $$("[data-top]",root).forEach(b=>b.addEventListener("click",()=>lenis?lenis.scrollTo(0,{duration:1.6}):scrollTo({top:0,behavior:"smooth"})));
  fitText(root); if(document.fonts&&document.fonts.ready) document.fonts.ready.then(()=>fitText(root));
  if(fine){
    $$("[data-magnetic]",root).forEach(magnet);
    $$(".plat",root).forEach(p=>p.addEventListener("mousemove",e=>{const r=p.getBoundingClientRect();p.style.setProperty("--mx",(e.clientX-r.left)+"px");p.style.setProperty("--my",(e.clientY-r.top)+"px")}));
  }
}
/* scale big outline text so it always fits its row */
function fitText(root){$$("[data-fit]",root).forEach(el=>{const s=el.firstElementChild;if(!s)return;
  el.style.fontSize="";const fs=parseFloat(getComputedStyle(el).fontSize),avail=el.clientWidth,need=s.getBoundingClientRect().width;
  if(need>0&&avail>0) el.style.fontSize=(fs*avail/need*.98)+"px"})}
function magnet(el){if(el._mag)return;el._mag=1;
  el.addEventListener("mousemove",e=>{const r=el.getBoundingClientRect();if(hasG)gsap.to(el,{x:(e.clientX-r.left-r.width/2)*.3,y:(e.clientY-r.top-r.height/2)*.35,duration:.6,ease:"power3.out"})});
  el.addEventListener("mouseleave",()=>{if(hasG)gsap.to(el,{x:0,y:0,duration:.9,ease:"elastic.out(1,.4)"})});
}

/* hero spine: 24 vertebrae, crooked at rest, straightening as you scroll or hover near it */
function spine(cv){
  const ctx=cv.getContext("2d");let w,h,dpr,raf,mx=-999,my=-999,vis=true,mis=1,t0=performance.now();
  const size=()=>{dpr=Math.min(devicePixelRatio||1,2);w=cv.clientWidth;h=cv.clientHeight;cv.width=w*dpr;cv.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0)};
  size();
  const onR=()=>size();addEventListener("resize",onR);
  const onM=e=>{const r=cv.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top};addEventListener("mousemove",onM);
  const io=new IntersectionObserver(([en])=>vis=en.isIntersecting);io.observe(cv);
  const num=$("#alignNum");
  const rr=(x,y,ww,hh,r)=>{ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+ww,y,x+ww,y+hh,r);ctx.arcTo(x+ww,y+hh,x,y+hh,r);ctx.arcTo(x,y+hh,x,y,r);ctx.arcTo(x,y,x+ww,y,r);ctx.closePath()};
  const draw=now=>{
    const time=(now-t0)/1000, narrow=w<900;
    const cx=narrow?w*.88:w*.555, top=h*(narrow?.1:.12), bot=h*.94, L=bot-top, n=VERT.length, step=L/n;
    const prog=Math.min(1,(window.scrollY||0)/(h*.55));
    const near=Math.abs(mx-cx)<170&&my>top&&my<bot;
    const target=Math.max(0,1-prog*1.2)*(near?0:1);
    mis+=(target-mis)*.06;
    if(num) num.textContent=Math.round(100-mis*38)+"%";
    ctx.clearRect(0,0,w,h);
    // plumb line
    ctx.setLineDash([4,8]);ctx.strokeStyle="rgba(245,237,228,.14)";ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(cx,top-30);ctx.lineTo(cx,bot+20);ctx.stroke();ctx.setLineDash([]);
    const amp=Math.min(w,h)*(narrow?.05:.052), pulse=(time*.22)%1.4-.2, sc=narrow?.7:1;
    const pts=[];
    for(let i=0;i<n;i++){const t=i/(n-1);
      const off=amp*mis*Math.sin(t*Math.PI*2.1+time*.7)+amp*.18*Math.sin(t*Math.PI*1.0);
      pts.push({x:cx+off,y:top+t*L+step/2,t})}
    for(let i=0;i<n;i++){const p=pts[i],a=pts[Math.max(0,i-1)],b=pts[Math.min(n-1,i+1)];
      const ang=Math.atan2(b.x-a.x,b.y-a.y);
      const vw=(20+p.t*30)*sc, vh=step*.6, glow=Math.max(0,1-Math.abs(p.t-pulse)*7);
      const md=Math.hypot(mx-p.x,my-p.y), hot=md<120?1-md/120:0;
      ctx.save();ctx.translate(p.x,p.y);ctx.rotate(-ang);
      // transverse processes
      ctx.strokeStyle=`rgba(255,90,31,${.25+glow*.5+hot*.4})`;ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(-vw*.5,0);ctx.lineTo(-vw*.95,-vh*.15);ctx.moveTo(vw*.5,0);ctx.lineTo(vw*.95,-vh*.15);ctx.stroke();
      // body
      rr(-vw/2,-vh/2,vw,vh,Math.min(6,vh/2));
      ctx.fillStyle=`rgba(255,${90+glow*70|0},31,${.08+glow*.45+hot*.3})`;ctx.fill();
      ctx.strokeStyle=`rgba(255,${120+glow*60|0},60,${.45+glow*.5+hot*.4})`;ctx.lineWidth=1.2;ctx.stroke();
      if(glow>.2){ctx.shadowColor="rgba(255,90,31,.9)";ctx.shadowBlur=24*glow;ctx.stroke();ctx.shadowBlur=0}
      // disc
      if(i<n-1){ctx.fillStyle=`rgba(255,161,74,${.35+glow*.5})`;ctx.beginPath();ctx.ellipse(0,vh/2+(step-vh)/2,vw*.32,Math.max(1.2,(step-vh)*.28),0,0,7);ctx.fill()}
      ctx.restore();
      // labels
      if(!narrow&&(step>15||i%2===0)){ctx.font="500 10px 'JetBrains Mono',monospace";ctx.fillStyle=`rgba(245,237,228,${.28+glow*.6+hot*.5})`;ctx.fillText(VERT[i],p.x+vw*.95+12,p.y+3)}
    }
  };
  const tick=now=>{raf=requestAnimationFrame(tick);if(vis)draw(now)};
  if(reduce){mis=.4;draw(performance.now())}else raf=requestAnimationFrame(tick);
  loops.push(()=>{cancelAnimationFrame(raf);removeEventListener("resize",onR);removeEventListener("mousemove",onM);io.disconnect()});
}

/* cursor */
const cur=$("#cursor"),dot=$("#cursorDot"),lab=$("#cursorLabel");
if(fine){
  document.body.classList.add("has-cursor");
  let x=innerWidth/2,y=innerHeight/2,cx=x,cy=y;
  addEventListener("mousemove",e=>{x=e.clientX;y=e.clientY;dot.style.transform=`translate(${x}px,${y}px) translate(-50%,-50%)`;const fp=$("#floatPrev");fp.style.left=x+"px";fp.style.top=y+"px"});
  const loop=()=>{cx+=(x-cx)*.18;cy+=(y-cy)*.18;cur.style.transform=`translate(${cx}px,${cy}px) translate(-50%,-50%)`;requestAnimationFrame(loop)};loop();
  document.addEventListener("mouseover",e=>{const t=e.target.closest("[data-cursor]");const l=e.target.closest("a,button");
    cur.classList.toggle("is-label",!!t);if(t)lab.textContent=t.dataset.cursor;cur.classList.toggle("is-hover",!t&&!!l)});
}

/* menu, lightbox */
const menu=$("#menu");
$("#menuFoot").innerHTML=`<a href="${ME.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a><a href="${ME.upwork}" target="_blank" rel="noopener">Upwork ↗</a><a href="${ME.fiverr}" target="_blank" rel="noopener">Fiverr ↗</a>`;
function closeMenu(){menu.classList.remove("open")}
$("#burger").addEventListener("click",()=>{menu.classList.add("open");if(hasG&&!reduce)gsap.from($$("a.big",menu),{yPercent:100,opacity:0,stagger:.06,duration:.8,ease:"power4.out",delay:.2})});
$("#menuClose").addEventListener("click",closeMenu);
const lb=$("#lb");$("#lbClose").addEventListener("click",()=>lb.hidden=true);lb.addEventListener("click",e=>{if(e.target===lb)lb.hidden=true});
addEventListener("keydown",e=>{if(e.key==="Escape"){lb.hidden=true;closeMenu()}});
if(fine)$$("[data-magnetic]",$("#nav")).forEach(magnet);
document.addEventListener("click",e=>{const a=e.target.closest('a[href^="#"]');if(a&&a.getAttribute("href")===location.hash){e.preventDefault();closeMenu();lenis?lenis.scrollTo(0,{duration:1.2}):scrollTo({top:0,behavior:"smooth"})}});
addEventListener("resize",()=>{fitText(document);if(window.ScrollTrigger)ScrollTrigger.refresh()});
boot();
})();
