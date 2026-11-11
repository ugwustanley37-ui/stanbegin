(function(){
"use strict";
const LINKS={
  upwork:"https://www.upwork.com/freelancers/~01f8ae848efd1f339c",
  fiverr:"https://www.fiverr.com/s/7j1Qo3y",
  linkedin:"https://www.linkedin.com/in/charles-carmichael-3774a830b",
  consult:"https://www.upwork.com/services/consultation/development-it-charles-2094987335659403910"
};
const M="media/";
const WEBSITES=[
 {slug:"restore-rock",name:"White Rock Chiropractic",client:"Dr. Larry W. Parent · Dallas, Texas",industry:"Chiropractic",group:"health",platform:"Base44",url:"https://restore-rock-living.base44.app/",
  intro:"A full website for a Dallas chiropractic clinic that has served its community since 1992. The goal was a site that feels as experienced as the practice itself and turns visitors into booked appointments.",
  body:"The homepage leads with one clear promise, Get Back to Living, and puts the phone number and Book Now button in front of every visitor. Dedicated service pages cover auto accident care, sports injuries and rehabilitation, so patients can find their exact problem. A seasonal campaign with a live countdown keeps the site timely.",
  feats:["Appointment booking on every page","Service pages for auto accident, sports and rehab","Patient resources and blog","Seasonal promotion with live countdown","Click-to-call phone number"]},
 {slug:"sydney-spine",name:"Sydney Chiropractic & Massage",client:"Kieran Finnegan · Sydney CBD",industry:"Chiropractic",group:"health",platform:"Base44",url:"https://sydney-spine-sync.base44.app/",
  intro:"A premium website for a Sydney CBD chiropractor and bodyworker whose approach goes beyond the spine. The design uses deep greens and editorial type to stand apart from typical clinic sites.",
  body:"Visitors meet the core idea straight away, The spine isn't the whole story, followed by social proof from 216 five-star Google reviews. The site explains conditions treated, includes an interactive Neck IQ section, an FAQ and a blog, and runs a holiday offer with gift vouchers and a countdown.",
  feats:["Online booking","Conditions and services library","Interactive Neck IQ section","Google reviews showcase","Holiday gift voucher campaign"]},
 {slug:"maverik-legal",name:"Maverik Law AI",client:"Legal AI platform",industry:"Legal tech",group:"business",platform:"Base44",url:"https://maverik-legal-flow.base44.app/",
  intro:"A website for a company that helps law firms get discovered and recommended by AI assistants. The brand needed to feel as trustworthy as the firms it serves.",
  body:"The site opens with a strong statement, We Help AI Discover Your Law Firm, and explains a new problem in plain language: clients now ask AI who to hire. Deep navy, classical imagery and clear calls to book an intro session give it the authority a legal audience expects.",
  feats:["Positioning for a new category","Solutions and about pages","Intro session booking","Classic, authoritative visual identity"]},
 {slug:"claudie-coach",name:"Claudie Reine Fitness",client:"Online fitness coach for busy women",industry:"Fitness coaching",group:"health",platform:"Base44",url:"https://claudie-coach-fit.base44.app/",
  intro:"A conversion-focused website for an online fitness coach who helps busy women lose weight and build confidence.",
  body:"Every section points to two actions: join the free 5-Day Workout Challenge or book a discovery call. Transformation stories, a running count of women coached, coaching packages, resources and a blog build trust before the visitor ever speaks to Claudie.",
  feats:["Free 5-day challenge funnel","Discovery call booking","Transformations gallery","Coaching programs","Blog and resources"]},
 {slug:"nicole-glow",name:"Nicole Duraliza Coaching",client:"Online weight loss & fitness coach",industry:"Fitness coaching",group:"health",platform:"Base44",url:"https://nicole-glow-method.base44.app/",
  intro:"A soft, confident website for a weight loss coach whose message is simple: no restrictive diets, no exhausting routines.",
  body:"The headline Lose Weight. Build Confidence. Create Habits That Last. sets the tone. The page walks visitors from her story to her coaching, a free challenge, success stories and resources, with a calm palette that matches her approach.",
  feats:["Lead-generating free challenge","Discovery call booking","Success stories","Coaching packages","Resources hub"]},
 {slug:"tetra-health",name:"Tetra Health",client:"DeMarcus Thompson · Holistic health coach",industry:"Health coaching",group:"health",platform:"Base44",url:"https://tetra-health-axis.base44.app/",
  intro:"A website for a holistic health coach who helps busy professionals restore their gut-brain axis.",
  body:"Dark forest tones and gold type give the brand a calm, premium feel. The site explains his Tetra Health Model and gut-brain approach in clear steps and guides visitors to start their reset.",
  feats:["Method explainer pages","Start-your-reset call to action","Coaching programs","About and contact"]},
 {slug:"karina-wellness",name:"Karina Morris Wellness",client:"Health coach · Australia",industry:"Wellness",group:"health",platform:"Base44",url:"https://karina-wellness-flow.base44.app/",
  intro:"A warm, inclusive website for a health coach who works with individuals, communities and people of all abilities.",
  body:"The site brings together one-to-one coaching, community wellbeing programs and NDIS and inclusion services, each with its own page, so every audience can find the right path quickly.",
  feats:["Coaching, community and NDIS sections","Programs overview","Work with Karina booking","Accessible, calm design"]},
 {slug:"sweet-crumb",name:"Sweet Crumb Bakery",client:"Boutique bakery · Est. 2014",industry:"Food & hospitality",group:"business",platform:"Base44",url:"https://elite-sweet-crumb-hearth.base44.app/",
  intro:"An elegant website for a boutique bakery known for slow fermentation and stone-milled flour.",
  body:"Generous white space and refined serif type let the product speak. The site tells the bakery's story, presents the menu and puts Order Now within reach on every screen.",
  feats:["Menu pages","Online ordering call to action","Brand story","Minimal editorial design"]},
 {slug:"portfolio-5",name:"FirstChoice Travel Booking",client:"Hotel & flight booking",industry:"Travel",group:"apps",platform:"Bubble.io",url:"https://portfolio-5.bubbleapps.io/version-test?debug_mode=true",
  intro:"A travel booking web app built on Bubble.io with hotel search, member pricing and curated picks.",
  body:"Visitors choose a destination, date and number of guests from a single search bar, browse hand-picked resorts with prices and reviews, and see payment partners up front for trust.",
  feats:["Destination, date and guest search","Hotel listings with reviews","Member discounts banner","Login and sign up"]},
 {slug:"tour",name:"Travelly",client:"Tour packages",industry:"Travel",group:"apps",platform:"Bubble.io",url:"https://tour1-79229.bubbleapps.io/version-test?debug_mode=true",
  intro:"A tour packages website built on Bubble.io that sells the feeling of travel before it sells the trip.",
  body:"A full-width aerial hero and an inspiring quote lead into tour packages with prices and destinations. Behind it sits a full admin dashboard where the owner manages website details, destinations, tours, the team, bookings and customer feedback without touching code.",
  feats:["Tour package listings","Destination pages","Video hero","Admin dashboard for destinations, tours and team","Bookings and feedback management"]},
 {slug:"portfolio-2",name:"Crimson Academy",client:"School portal",industry:"Education",group:"apps",platform:"Bubble.io",url:"https://portfolio-2-59792.bubbleapps.io/version-test?debug_mode=true",
  intro:"A school portal web app built on Bubble.io with separate teacher and student experiences.",
  body:"Users sign up as a teacher or a student, with email or Google, and land in a dashboard built for their role. Teachers manage their student list, create tests and review results. Students see their active and upcoming tests and their results in one place.",
  feats:["Role-based sign up and login (teacher / student)","Teacher dashboard with student list and test creation","Student dashboard with active and upcoming tests","Tests list and results pages","Google sign in and password recovery"]},
 {slug:"music",name:"Trend Listening",client:"Music streaming app",industry:"Entertainment",group:"apps",platform:"Bubble.io",url:"https://music-87832.bubbleapps.io/version-test?debug_mode=true",
  intro:"A music streaming web app built on Bubble.io with top songs, liked songs, search and user profiles.",
  body:"The app is laid out like a modern streaming service, with a dark interface, top songs, a liked songs library, search and account pages.",
  feats:["Top songs chart","Liked songs library","Search","User accounts"]}
];
const A=window.AUTOMATIONS||[], REVIEWS=window.REVIEWS||[];
const PHOTOS={ring:M+"me/ring.webp",studio:M+"me/studio.webp",outdoor:M+"me/outdoor.webp",hallway:M+"me/hallway.webp"};
const hasG=!!window.gsap;
if(hasG && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
const fine=matchMedia("(pointer:fine)").matches;
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const view=$("#view");
const STAR=`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z"/></svg>`;

/* ---------- smooth scroll ---------- */
let lenis=null;
if(window.Lenis && !reduce){
  try{
    lenis=new Lenis({lerp:.1,smoothWheel:true});
    if(hasG){lenis.on("scroll",()=>window.ScrollTrigger&&ScrollTrigger.update());gsap.ticker.add(t=>lenis.raf(t*1000));gsap.ticker.lagSmoothing(0);}
    else{const raf=t=>{lenis.raf(t);requestAnimationFrame(raf)};requestAnimationFrame(raf);}
  }catch(e){lenis=null}
}
const toTop=()=>{ if(lenis) lenis.scrollTo(0,{immediate:true}); window.scrollTo(0,0); };

/* ---------- shared pieces ---------- */
const NAME="Charles Chukwuma";
const badge=p=>`<span class="badge ${p==="Claude"?"claude":p==="n8n"?"n8n":"make"}">${p==="Claude"?"✺ Claude":esc(p)}</span>`;
const thumb=a=>`<img src="${a.imgs[0]}" alt="${esc(a.title)} screenshot" loading="lazy">`;
const acard=a=>`<a class="acard" href="#a-${a.id}" data-cursor="Open" data-tilt data-reveal data-g="${a.platform}">
  <div class="thumb"><span style="position:absolute;left:12px;top:12px;z-index:2;display:flex;gap:6px">${badge(a.platform)}${a.vids.length?`<span class="badge">▶ Video</span>`:""}</span>${thumb(a)}</div>
  <div><span class="mono muted">${esc(a.industry)}</span><h3 style="margin-top:8px">${esc(a.title)}</h3></div>
  <p>${esc(a.desc)}</p></a>`;
const host=w=>w.url.replace(/^https?:\/\//,"").replace(/\?.*/,"");
const frame=(w,video=true)=>`<div class="frame" data-vframe><div class="bar"><i></i><i></i><i></i><em>${esc(host(w))}</em></div>
  <img src="${M}web/${w.slug}-hero.webp" alt="${esc(w.name)} website" loading="lazy">${video?`<video muted loop playsinline preload="none" src="${M}web/${w.slug}.mp4"></video>`:""}</div>`;
const wcard=w=>`<article class="wcard" data-reveal data-g="${w.group}">
  <a href="#w-${w.slug}" data-cursor="View">${frame(w)}</a>
  <div class="wmeta"><div><h3><a href="#w-${w.slug}">${esc(w.name)}</a></h3><span class="mono muted">${esc(w.industry)} · ${esc(w.platform)}</span></div>
  <a class="live" href="${w.url}" target="_blank" rel="noopener" data-cursor="Visit"><i></i>Live site ↗</a></div></article>`;
const marquee=(words,cls="")=>{const s=words.map((w,i)=>i%2?`<em>${w}</em>`:w).join(` ${STAR} `);
  return `<div class="marquee ${cls}" data-marquee><div class="mq-track"><span>${s} ${STAR}</span><span>${s} ${STAR}</span></div></div>`};
const TOOLS=[
  ["Website builders",["Framer","Webflow","GoHighLevel","Base44","Lovable","Bubble.io","Claude Design","HTML / CSS / JS"]],
  ["AI & agents",["Claude Code","Claude Cowork","Claude API","MCP servers","OpenAI","Claude Skills"]],
  ["Automation",["n8n","Make.com","Zapier","Webhooks & APIs","Google Apps Script"]],
  ["CRM & business",["GoHighLevel","HubSpot","Salesforce","Monday.com","Kajabi","Shopify"]],
  ["Data & messaging",["Python","Node.js","Supabase","Google Workspace","WhatsApp Business API","Twilio"]]
];
const TOOL_COLORS=["#FF5A1F","#F2EEE8","#EA4B71","#6D00CC","#1F8A5B","#0A66C2","#F5B700"];
const monogram=t=>t.replace(/[^A-Za-z0-9 ]/g," ").trim().split(/\s+/).map(x=>x[0]).join("").slice(0,2).toUpperCase();
const toolsBlock=()=>`<div class="tool-grid">${TOOLS.map(([cat,list],ci)=>`<div class="tool-col" data-reveal>
   <div class="tool-head"><span class="mono">${String(ci+1).padStart(2,"0")}</span><h3>${cat}</h3><span class="mono muted">${list.length} tools</span></div>
   <ul>${list.map((t,i)=>`<li><b style="--tc:${TOOL_COLORS[(ci+i)%TOOL_COLORS.length]}">${monogram(t)}</b><span>${esc(t)}</span><i>↗</i></li>`).join("")}</ul></div>`).join("")}</div>`;
const plats=()=>`<div class="plats">
  <a class="plat" href="${LINKS.upwork}" target="_blank" rel="noopener" style="--pc:#14A800;--pt:#fff" data-cursor="Hire"><span class="mono">Hire me on</span><div class="row"><h3>Upwork</h3><span class="arrow">↗</span></div></a>
  <a class="plat" href="${LINKS.fiverr}" target="_blank" rel="noopener" style="--pc:#1DBF73;--pt:#0B0B0C" data-cursor="Hire"><span class="mono">Order a gig on</span><div class="row"><h3>Fiverr</h3><span class="arrow">↗</span></div></a>
  <a class="plat" href="${LINKS.linkedin}" target="_blank" rel="noopener" style="--pc:#0A66C2;--pt:#fff" data-cursor="Talk"><span class="mono">Talk to me on</span><div class="row"><h3>LinkedIn</h3><span class="arrow">↗</span></div></a></div>`;
const footer=()=>`<footer class="foot gut">
  <div class="foot-grid">
    <div><p class="h-md" style="max-width:16ch">Need a website, app, automation or AI agent? Let's build it.</p><a class="pill solid" style="margin-top:24px" href="#contact" data-magnetic>Start a project <span class="arr">→</span></a></div>
    <div><span class="mono muted">Pages</span><a href="#home">Home</a><a href="#projects">Projects</a><a href="#about">About</a><a href="#contact">Contact</a></div>
    <div><span class="mono muted">Hire me</span><a href="${LINKS.upwork}" target="_blank" rel="noopener">Upwork ↗</a><a href="${LINKS.fiverr}" target="_blank" rel="noopener">Fiverr ↗</a><a href="${LINKS.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a><a href="${LINKS.consult}" target="_blank" rel="noopener">Book a consultation ↗</a></div>
    <div><span class="mono muted">Based in</span><p style="font-weight:600;margin-top:4px">Lagos, Nigeria<br>Working with clients worldwide</p></div>
  </div>
  <div class="foot-big" aria-hidden="true">Chukwuma</div>
  <div class="foot-base mono muted"><span>© 2026 ${NAME}</span><button data-top>Back to top ↑</button></div>
</footer>`;

/* ---------- pages ---------- */
function pageHome(){
  const feat=A.filter(a=>a.featured).slice(0,6);
  const prev=id=>(A.find(a=>a.id===id)||{imgs:[""]}).imgs[0];
  return `
  <section class="hero gut">
    <canvas id="net" aria-hidden="true"></canvas>
    <div class="hero-photo" data-hero-photo><img src="${PHOTOS.ring}" alt="${NAME}"></div>
    <div class="hero-meta">
      <p class="lead" data-fade>I use AI to build <span class="rot" data-rot><span class="on">websites</span><span>web apps</span><span>automations</span><span>AI agents</span></span><br>that make your life easier.</p>
      <div class="hero-tags mono" data-fade><div><i></i>Available for new projects</div><div>AI developer &amp; web designer</div><div>Websites · Apps · Automations · Agents</div></div>
      <div class="scroll-cue mono" data-fade><span>Scroll</span><b></b></div>
    </div>
    <h1 class="hero-name" aria-label="${NAME}">
      <div class="row" data-hero-row><span>Charles</span></div>
      <div class="row" data-hero-row><span>Chukwuma</span></div>
    </h1>
  </section>
  ${marquee(["Websites","Web Apps","AI Automations","AI Agents","Framer","Webflow","Claude Code","n8n"],"ember-band")}
  <section class="sec gut">
    <span class="eyebrow mono">What I do</span>
    <p class="statement" data-fill>I use AI to make life easier for my clients. I build <span class="chip"><img src="${PHOTOS.studio}" alt=""></span> websites, web apps, automations and AI agents that bring in customers and take the busywork off your plate.</p>
    <div class="stats">
      <div class="stat"><b data-count="${WEBSITES.length}">${WEBSITES.length}</b><span class="muted">Websites &amp; web apps launched</span></div>
      <div class="stat"><b data-count="${A.length}">${A.length}</b><span class="muted">Automations &amp; AI agents built</span></div>
      <div class="stat"><b data-count="${REVIEWS.length+1}">${REVIEWS.length+1}</b><span class="muted">Client reviews on Upwork &amp; Fiverr</span></div>
      <div class="stat"><b>24/7</b><span class="muted">Your systems keep working while you sleep</span></div>
    </div>
  </section>
  <section class="sec light gut" id="services">
    <div class="sec-head"><div><span class="eyebrow mono">Services</span><h2 class="h-xl" data-split>What I<br>build</h2></div>
      <p class="muted" style="max-width:34ch;font-size:1.1em">One person for the whole job. Your website, your app, your automations and your AI agents, built with AI and built to work together.</p></div>
    <div class="svc-list">
      <a class="svc" href="#projects" data-prev="${M}web/restore-rock-hero.webp" data-cursor="Explore">
        <div><h3>Websites</h3><div class="tags"><span>Framer</span><span>Webflow</span><span>GoHighLevel</span><span>Base44</span><span>Lovable</span><span>Claude Design</span></div></div>
        <p class="muted">Bold, fast websites designed with AI and built to turn visitors into calls, bookings and sales.</p><span class="go">→</span></a>
      <a class="svc" href="#projects" data-prev="${M}web/portfolio-5-hero.webp" data-cursor="Explore">
        <div><h3>Web Apps</h3><div class="tags"><span>Bubble.io</span><span>Base44</span><span>Lovable</span><span>Supabase</span></div></div>
        <p class="muted">Booking systems, portals, dashboards and SaaS products with logins, payments and real data.</p><span class="go">→</span></a>
      <a class="svc" href="#automations" data-prev="${prev("1990419794000945152")}" data-cursor="Explore">
        <div><h3>Automations</h3><div class="tags"><span>n8n</span><span>Make.com</span><span>Zapier</span><span>GoHighLevel</span></div></div>
        <p class="muted">Workflows that capture leads, send follow-ups, publish content and sync your tools, 24/7.</p><span class="go">→</span></a>
      <a class="svc" href="#automations" data-prev="${prev("2079175961759051776")}" data-cursor="Explore">
        <div><h3>AI Agents</h3><div class="tags"><span>Claude Code</span><span>Claude Cowork</span><span>MCP</span><span>WhatsApp</span></div></div>
        <p class="muted">Custom AI agents that answer customers, enrich leads, create content and plug into your CRM.</p><span class="go">→</span></a>
    </div>
  </section>
  <section class="sec" style="padding-bottom:clamp(40px,6vw,90px)">
    <div class="sec-head gut"><div><span class="eyebrow mono">Projects · Websites</span><h2 class="h-xl" data-split>Websites<br>that sell</h2></div>
      <a class="pill big" href="#websites" data-magnetic>All ${WEBSITES.length} websites <span class="arr">→</span></a></div>
    <div class="hs" data-hs><div class="hs-track">${WEBSITES.slice(0,7).map(wcard).join("")}</div></div>
  </section>
  <section class="sec gut">
    <div class="sec-head"><div><span class="eyebrow mono">How an automation works</span><h2 class="h-lg" data-split>Your business,<br>on autopilot</h2></div>
      <p class="muted" style="max-width:36ch">Something happens, AI understands it, and the right actions run across your tools in seconds.</p></div>
    <div class="flow-wrap" data-flow>${flowSVG()}</div>
  </section>
  <section class="sec gut" style="padding-top:0">
    <div class="sec-head"><div><span class="eyebrow mono">Projects · Automations &amp; agents</span><h2 class="h-xl" data-split>AI that<br>works</h2></div>
      <a class="pill big solid" href="#automations" data-magnetic>All ${A.length} automations <span class="arr">→</span></a></div>
    <div class="agrid">${feat.map(acard).join("")}</div>
  </section>
  ${marquee(TOOLS.flatMap(t=>t[1]).filter((v,i,a)=>a.indexOf(v)===i).slice(0,16))}
  ${testimonials()}
  <section class="sec light gut">
    <div class="split">
      <div class="photo tall" data-img-reveal><img src="${PHOTOS.studio}" alt="${NAME} smiling" data-parallax></div>
      <div><span class="eyebrow mono">About me</span><h2 class="h-lg" data-split>Hi, I'm<br>Charles</h2>
        <p style="font-size:clamp(19px,1.3vw + 6px,26px);line-height:1.45;margin-top:28px;max-width:30ch;font-weight:500" data-fade>A computer science graduate from Lagos who uses AI to build websites, web apps, automations and AI agents for businesses around the world.</p>
        <a class="pill big" style="margin-top:36px;border-color:var(--ink)" href="#about" data-magnetic>More about me <span class="arr">→</span></a></div>
    </div>
  </section>
  ${ctaBlock()}
  ${footer()}`;
}
function flowSVG(){
  const nodes=[["Trigger","New lead or message"],["AI Agent","Claude reads & decides"],["Enrich","CRM, Sheets, APIs"],["Act","Email, WhatsApp, booking"],["Report","Slack or Telegram"]];
  const W=212,G=30,X=i=>10+i*(W+G);
  let s=`<svg viewBox="0 0 ${X(5)} 270" role="img" aria-label="Automation flow from trigger to AI agent to actions and report">`;
  for(let i=0;i<nodes.length-1;i++){const x1=X(i)+W,x2=X(i+1),d=`M${x1},130 L${x2},130`;
    s+=`<path class="fl" d="${d}" stroke="#FF5A1F" stroke-width="2.5" fill="none"/><circle r="5" fill="#FF5A1F"><animateMotion dur="${1.4+i*.2}s" repeatCount="indefinite" path="${d}"/></circle>`;}
  s+=`<path d="M${X(2)+W/2},170 C${X(2)+W/2},230 ${X(3)},236 ${X(3)+20},236" stroke="rgba(242,238,232,.3)" stroke-width="1.5" fill="none" stroke-dasharray="5 6"/><text x="${X(3)+30}" y="240" class="sub">+ logs every run to Google Sheets</text>`;
  nodes.forEach((n,i)=>{const on=i===1;s+=`<g class="fn"><rect x="${X(i)}" y="90" width="${W}" height="80" rx="18" fill="${on?"#FF5A1F":"#1E1E21"}" stroke="${on?"#FF5A1F":"rgba(242,238,232,.22)"}" stroke-width="1.5"/>
    <text x="${X(i)+20}" y="124" style="font-weight:700;font-size:15px;${on?"fill:#0B0B0C":""}">${n[0]}</text><text x="${X(i)+20}" y="148" class="sub" style="${on?"fill:#3a1405":""}">${n[1]}</text></g>`});
  return s+`</svg>`;
}
function rvCard(r,cls=""){
  const t=r.text.length>380?r.text.slice(0,r.text.lastIndexOf(" ",370))+"…":r.text;
  return `<blockquote class="rv ${cls}" data-reveal style="margin:0"><div class="rv-top"><span class="stars">★★★★★</span><span class="src-badge ${r.source.toLowerCase()}">${r.source}</span></div><q>${esc(t)}</q>
    <footer><span class="mono muted">${esc(r.title.length>60?r.title.slice(0,58)+"…":r.title)}</span><span class="mono muted">${r.source}${r.date?" · "+r.date:""}</span></footer></blockquote>`;
}
function testimonials(){
  const top=REVIEWS.slice(0,4), rest=REVIEWS.slice(4);
  return `<section class="sec gut">
    <div class="sec-head"><div><span class="eyebrow mono">Client reviews · Upwork &amp; Fiverr</span><h2 class="h-xl" data-split>Don't take<br>my word</h2></div>
      <div style="display:flex;gap:10px;flex-wrap:wrap"><a class="pill" href="${LINKS.upwork}" target="_blank" rel="noopener" data-magnetic>Upwork reviews <span class="arr">↗</span></a><a class="pill" href="${LINKS.fiverr}" target="_blank" rel="noopener" data-magnetic>Fiverr reviews <span class="arr">↗</span></a></div></div>
    <div class="tgrid">
      <div class="vid" data-video data-cursor="Play" data-reveal>
        <video src="${M}me/adam-testimonial.mp4" poster="${M}me/adam-poster.jpg" playsinline preload="metadata"></video>
        <div class="play"><b>Play ▶</b></div>
        <div class="cap"><div><span class="stars">★★★★★</span><p style="font-weight:700;font-size:1.2em;margin-top:6px">Adam</p><span class="mono muted">Client video review</span></div></div>
      </div>
      <div class="rv-stack">${top.map(r=>rvCard(r)).join("")}</div>
    </div>
    ${rest.length?`<div class="rv-row-head"><span class="mono muted">More reviews · drag or scroll →</span></div><div class="rv-row" data-drag>${rest.map(r=>rvCard(r,"rv-mini")).join("")}</div>`:""}
  </section>`;
}
function ctaBlock(){
  return `<section class="sec cta gut" id="hire">
    <span class="eyebrow mono">Let's work together</span>
    <h2 class="cta-title" data-split>Let's<br><span class="ember">build it.</span></h2>
    <div class="split" style="margin-top:clamp(30px,4vw,60px);align-items:end">
      <p style="font-size:clamp(19px,1.3vw + 6px,26px);line-height:1.45;max-width:32ch;font-weight:500" data-fade>Tell me what you need, a website, an app, an automation or an AI agent. I'll reply with ideas and a clear plan. Pick the platform you prefer:</p>
      <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:flex-end"><a class="pill" href="${LINKS.consult}" target="_blank" rel="noopener" data-magnetic>Book a consultation <span class="arr">↗</span></a></div>
    </div>
    ${plats()}
  </section>`;
}
function pageProjects(tab){
  tab=tab||"all";
  const tabs=[["all","All projects",WEBSITES.length+A.length],["websites","Websites & web apps",WEBSITES.length],["automations","Automations & AI agents",A.length]];
  const wgroups=[["all","All"],["health","Health & wellness"],["business","Business"],["apps","Web apps"]];
  const ps=[["all","All"],["Claude","Claude Code & Cowork"],["n8n","n8n"],["Make.com","Make.com"]];
  return `<section class="phead gut">
    <span class="eyebrow mono">Projects</span>
    <h1 data-split>Projects<sup>(${WEBSITES.length+A.length})</sup></h1>
    <div class="intro"><p data-fade>Websites you can visit, and the AI systems I've built behind businesses. Everything here was made with AI to make someone's work easier.</p>
      <div class="ptabs" data-tabs>${tabs.map(t=>`<button class="${t[0]===tab?"on":""}" data-t="${t[0]}"><span>${t[1]}</span><sup>${t[2]}</sup></button>`).join("")}</div></div>
  </section>
  <section class="gut" data-panel="websites" ${tab==="automations"?"hidden":""} style="padding-bottom:clamp(60px,8vw,120px)">
    <div class="sec-head" style="margin-bottom:28px"><h2 class="h-lg">Websites &amp; apps<sup class="mono ember" style="font-size:16px;vertical-align:top;margin-left:8px">${WEBSITES.length}</sup></h2>
      <div class="filters" data-filters="w" style="margin:0">${wgroups.map((g,i)=>`<button class="${i?"":"on"}" data-f="${g[0]}">${g[1]}<sup>${g[0]==="all"?WEBSITES.length:WEBSITES.filter(w=>w.group===g[0]).length}</sup></button>`).join("")}</div></div>
    <p class="muted" style="margin-bottom:clamp(30px,4vw,56px);max-width:60ch">Every site is live. Hover to watch it scroll, open it for screenshots and the full story, or visit the real site.</p>
    <div class="wgrid" data-grid="w">${WEBSITES.map(wcard).join("")}</div>
  </section>
  <section class="gut" data-panel="automations" ${tab==="websites"?"hidden":""} style="padding-bottom:clamp(80px,10vw,160px)">
    <div class="sec-head" style="margin-bottom:28px"><h2 class="h-lg">Automations &amp; agents<sup class="mono ember" style="font-size:16px;vertical-align:top;margin-left:8px">${A.length}</sup></h2>
      <div class="filters" data-filters="a" style="margin:0">${ps.map((p,i)=>`<button class="${i?"":"on"}" data-f="${p[0]}">${p[1]}<sup>${p[0]==="all"?A.length:A.filter(a=>a.platform===p[0]).length}</sup></button>`).join("")}</div></div>
    <div class="conf" style="margin:0 0 clamp(30px,4vw,56px)"><span class="ember">🔒</span><p class="muted" style="font-size:.95em">Client systems are private, so each one is shown with screenshots, demo videos and a write-up instead of a live link.</p></div>
    <div class="agrid" data-grid="a">${A.map(acard).join("")}</div>
  </section>
  ${marquee(["Websites","Web apps","Automations","AI agents"],"ember-band")}
  ${ctaBlock()}${footer()}`;
}
function pageWebsite(slug){
  const i=WEBSITES.findIndex(w=>w.slug===slug); if(i<0) return pageProjects("websites");
  const w=WEBSITES[i], nx=WEBSITES[(i+1)%WEBSITES.length];
  const G=(window.GALLERY||{})[w.slug]||[];
  const desk=G.filter(x=>!x.endsWith("|m")), mob=G.filter(x=>x.endsWith("|m")).map(x=>x.slice(0,-2));
  return `<section class="dhero gut">
    <a class="back mono" href="#websites">← All websites</a>
    <h1 class="dtitle" data-split>${esc(w.name)}</h1>
    <div class="dmeta">
      <div><span class="mono muted">Client</span><b>${esc(w.client)}</b></div>
      <div><span class="mono muted">Industry</span><b>${esc(w.industry)}</b></div>
      <div><span class="mono muted">Built with</span><b>${esc(w.platform)} + AI</b></div>
      <div><span class="mono muted">Live site</span><a class="live" style="justify-self:start" href="${w.url}" target="_blank" rel="noopener" data-cursor="Visit"><i></i>Visit site ↗</a></div>
    </div>
    <div class="big-frame" data-img-reveal><div class="frame playing" data-autoplay><div class="bar"><i></i><i></i><i></i><em>${esc(host(w))}</em></div>
      <img src="${M}web/${w.slug}-hero.webp" alt="${esc(w.name)} homepage"><video muted loop playsinline autoplay preload="auto" src="${M}web/${w.slug}.mp4"></video></div></div>
  </section>
  <section class="sec gut"><div class="body-grid">
    <div><span class="eyebrow mono">The project</span><div class="prose"><p data-fade style="font-weight:600">${esc(w.intro)}</p><p data-fade class="muted">${esc(w.body)}</p></div>
      <div style="margin-top:40px"><span class="eyebrow mono">What's included</span><ul class="feat-list">${w.feats.map(f=>`<li data-reveal>${esc(f)}</li>`).join("")}</ul></div>
      <a class="pill big solid" style="margin-top:40px" href="${w.url}" target="_blank" rel="noopener" data-magnetic>Open the live site <span class="arr">↗</span></a></div>
    <div><span class="eyebrow mono">Full page · hover to scroll</span><div class="scroller" data-scroller data-cursor="Scroll"><img src="${M}web/${w.slug}-full.webp" alt="Full page of ${esc(w.name)}"></div></div>
  </div></section>
  <section class="sec gut" style="padding-top:0">
    <div class="sec-head"><div><span class="eyebrow mono">Screenshots · ${desk.length+mob.length}</span><h2 class="h-lg" data-split>Inside the<br>site</h2></div><p class="muted">Click any screenshot to enlarge it.</p></div>
    <div class="shots">${desk.map((s,j)=>`<button class="shot" data-lb="${s}" data-cursor="Zoom" data-reveal aria-label="Enlarge desktop screenshot ${j+1}"><img src="${s}" alt="${esc(w.name)} desktop section ${j+1}" loading="lazy"></button>`).join("")}</div>
    ${mob.length?`<div class="phones">${mob.map((s,j)=>`<button class="phone" data-lb="${s}" data-cursor="Zoom" data-reveal aria-label="Enlarge mobile screenshot ${j+1}"><img src="${s}" alt="${esc(w.name)} on mobile ${j+1}" loading="lazy"></button>`).join("")}<div class="phones-note"><span class="eyebrow mono">Mobile</span><p class="h-md">Built to look sharp on every phone.</p></div></div>`:""}
  </section>
  <a class="next gut" href="#w-${nx.slug}" data-cursor="Next"><span class="mono muted">Next website</span><h2>${esc(nx.name)} →</h2></a>
  ${footer()}`;
}
function pageAutomation(id){
  const i=A.findIndex(a=>a.id===id); if(i<0) return pageProjects("automations");
  const a=A[i], nx=A[(i+1)%A.length];
  const paras=a.desc.split(/\n+/).filter(Boolean);
  return `<section class="dhero gut">
    <a class="back mono" href="#automations">← All automations &amp; agents</a>
    <div style="margin-bottom:22px;display:flex;gap:8px">${badge(a.platform)}${a.vids.length?`<span class="badge">▶ Demo video</span>`:""}</div>
    <h1 class="dtitle" data-split style="font-size:clamp(40px,7vw,140px)">${esc(a.title)}</h1>
    <div class="dmeta">
      <div><span class="mono muted">Industry</span><b>${esc(a.industry)}</b></div>
      <div><span class="mono muted">Platform</span><b>${esc(a.platform==="Claude"?"Claude Code & Cowork":a.platform)}</b></div>
      <div style="grid-column:span 2"><span class="mono muted">Tools</span><b>${a.tools.map(esc).join(" · ")}</b></div>
    </div>
    ${a.vids.length?`<div class="avids">${a.vids.map(v=>`<div class="avid" data-img-reveal><video src="${v}" muted loop playsinline autoplay preload="metadata" controls></video></div>`).join("")}</div>`:""}
  </section>
  <section class="sec gut" style="padding-top:clamp(40px,5vw,80px)"><div class="body-grid">
    <div><span class="eyebrow mono">What I built</span><div class="prose">${paras.map((p,j)=>`<p data-fade ${j?'class="muted"':'style="font-weight:600"'}>${esc(p)}</p>`).join("")}</div>
      <div class="conf"><span class="ember">🔒</span><p class="muted" style="font-size:.95em">This is a private client system, so there is no public link. Want something similar? <a href="#contact" class="ember" style="font-weight:700">Let's talk.</a></p></div></div>
    <div><span class="eyebrow mono">Screenshots · ${a.imgs.length}</span><div class="gallery">${a.imgs.map((s,j)=>`<button data-lb="${s}" data-cursor="Zoom" data-reveal aria-label="Enlarge screenshot ${j+1}"><img src="${s}" alt="${esc(a.title)} screenshot ${j+1}" loading="lazy"></button>`).join("")}</div></div>
  </div></section>
  <a class="next gut" href="#a-${nx.id}" data-cursor="Next"><span class="mono muted">Next project</span><h2 style="font-size:clamp(34px,6vw,120px)">${esc(nx.title)} →</h2></a>
  ${footer()}`;
}
function pageAbout(){
  return `<section class="phead gut">
    <span class="eyebrow mono">About</span>
    <div class="about-hero"><h1 data-split>I'm<br>Charles<span class="ember">.</span></h1>
      <div class="photo tall" data-img-reveal style="max-width:520px;justify-self:end;width:100%"><img src="${PHOTOS.studio}" alt="${NAME} portrait" data-parallax></div></div>
  </section>
  <section class="sec gut" style="padding-top:clamp(20px,3vw,40px)">
    <p class="statement" data-fill style="max-width:26ch">I use AI to make life easier for my clients, by building the websites, web apps, automations and AI agents their business runs on.</p>
  </section>
  <section class="sec light gut"><div class="split">
    <div class="photo tall" data-img-reveal><img src="${PHOTOS.outdoor}" alt="Charles outdoors" data-parallax></div>
    <div style="min-width:0"><span class="eyebrow mono">My story</span><h2 class="h-lg" data-split>From code<br>to clients</h2>
      <div class="prose" style="margin-top:30px"><p data-fade>I'm ${NAME}, a developer and designer based in Lagos, Nigeria. I studied Computer Science at Obafemi Awolowo University and trained in Claude AI and Claude Code through Anthropic Academy.</p>
      <p data-fade>AI is how I work. I use it to design and build websites on Framer, Webflow, GoHighLevel, Base44, Lovable, Bubble and Claude Design; to build web apps with logins, dashboards and payments; to create automations in n8n and Make.com; and to build custom AI agents with Claude Code and Claude Cowork.</p>
      <p data-fade>I've worked with law firms, clinics, coaches, dealerships, agencies, finance firms and startups around the world. What they all wanted was the same thing: less busywork and more customers. That's what I build.</p></div></div>
  </div></section>
  <section class="sec gut"><span class="eyebrow mono">How I work</span><h2 class="h-lg" data-split style="margin-bottom:clamp(40px,5vw,80px)">Four simple<br>steps</h2>
    <ol class="steps"><li data-reveal><h3>Discovery call</h3><p class="muted">We talk through your business and what you need: a website, an app, an automation or an agent.</p></li>
    <li data-reveal><h3>Plan &amp; quote</h3><p class="muted">You get a clear scope, timeline and price, with the quickest wins first.</p></li>
    <li data-reveal><h3>Build with AI</h3><p class="muted">I design and build fast with AI, show progress as I go and test every step with real data.</p></li>
    <li data-reveal><h3>Launch &amp; support</h3><p class="muted">I launch, document it, train your team and stay on hand for changes.</p></li></ol></section>
  <section class="sec tools-sec gut"><div class="sec-head"><div><span class="eyebrow mono">Toolkit</span><h2 class="h-xl" data-split>Tools I<br>build with</h2></div>
    <p class="muted" style="max-width:34ch;font-size:1.1em">The platforms I use to design, build and connect everything, picked for each client's needs.</p></div>
    ${toolsBlock()}</section>
  <section class="sec gut"><div class="body-grid">
    <div style="min-width:0"><span class="eyebrow mono">Experience</span><h2 class="h-lg" data-split>Where I've<br>worked</h2></div>
    <div class="tl">
      <div data-reveal><h4>AI Agent Developer (Claude Code &amp; Cowork)</h4><p class="muted">Welch Ventures · AI agent workflows for a legal AI platform and a biologics research firm</p></div>
      <div data-reveal><h4>Website Designer &amp; Developer</h4><p class="muted">Clinics, coaches, law firms and small businesses · websites on Base44, Framer, Webflow and more</p></div>
      <div data-reveal><h4>Bubble.io SaaS &amp; Web App Developer</h4><p class="muted">Startups in Canada and the US · app builds, stabilisation and workflow fixes</p></div>
      <div data-reveal><h4>Fractional AI Automation &amp; Process Engineer</h4><p class="muted">Home services operations · reporting and process automation</p></div>
      <div data-reveal><h4>Claude Code AI Implementation</h4><p class="muted">Outsourced finance firm · agentic workflows connected to Xero</p></div>
      <div data-reveal><h4>Weekly Claude Code Instructor</h4><p class="muted">Live build, review and troubleshooting sessions on AI agent architecture</p></div>
    </div></div>
    <div class="body-grid" style="margin-top:clamp(60px,8vw,120px)">
    <div><span class="eyebrow mono">Education</span><h2 class="h-lg" data-split>Learning</h2></div>
    <div class="tl">
      <div data-reveal><h4>BSc Computer Science</h4><p class="muted">Obafemi Awolowo University</p></div>
      <div data-reveal><h4>Claude AI &amp; Prompt Engineering</h4><p class="muted">Anthropic Academy</p></div>
      <div data-reveal><h4>Claude Code Automation &amp; Application Development</h4><p class="muted">Anthropic Academy</p></div>
    </div></div></section>
  ${testimonials()}
  ${ctaBlock()}${footer()}`;
}
function pageContact(){
  return `<section class="phead gut" style="padding-bottom:0">
    <span class="eyebrow mono">Contact</span>
    <div class="about-hero"><h1 data-split>Let's<br>talk<span class="ember">.</span></h1>
      <div class="photo tall" data-img-reveal style="max-width:440px;justify-self:end;width:100%"><img src="${PHOTOS.hallway}" alt="${NAME}" data-parallax></div></div>
    <div class="intro"><p data-fade>Need a website, a web app, an automation or an AI agent? Hire me or message me on the platform you already use.</p>
      <div style="display:flex;justify-content:flex-end"><a class="pill big solid" href="${LINKS.consult}" target="_blank" rel="noopener" data-magnetic>Book a consultation <span class="arr">↗</span></a></div></div>
  </section>
  <section class="sec gut" style="padding-top:clamp(40px,5vw,80px)">${plats()}</section>
  ${marquee(["Upwork","Fiverr","LinkedIn","Let's build"],"ember-band")}
  ${footer()}`;
}

/* ---------- router ---------- */
const ROUTES={home:pageHome,projects:()=>pageProjects("all"),websites:()=>pageProjects("websites"),automations:()=>pageProjects("automations"),work:()=>pageProjects("all"),about:pageAbout,contact:pageContact};
const LABEL={home:"Home",projects:"Projects",websites:"Websites",automations:"Automations",work:"Projects",about:"About",contact:"Contact"};
const NAVKEY={websites:"projects",automations:"projects",work:"projects"};
function resolve(){
  const h=(location.hash||"").slice(1);
  if(h.startsWith("w-")) return {html:pageWebsite(h.slice(2)),label:(WEBSITES.find(w=>w.slug===h.slice(2))||{}).name||"Website",key:"projects"};
  if(h.startsWith("a-")) return {html:pageAutomation(h.slice(2)),label:"Project",key:"projects"};
  const k=ROUTES[h]?h:"home"; return {html:ROUTES[k](),label:LABEL[k],key:NAVKEY[k]||k};
}

let busy=false, first=true;
function render(){
  const r=resolve();
  if(hasG && window.ScrollTrigger) ScrollTrigger.getAll().forEach(t=>t.kill());
  stopLoops();
  view.innerHTML=r.html; toTop();
  $$(".nav-links a").forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+r.key));
  document.title = NAME;
  wire(view);
  if(hasG && window.ScrollTrigger) requestAnimationFrame(()=>ScrollTrigger.refresh());
}
function go(){
  closeMenu();
  if(first||!hasG||reduce){first=false;render();intro();return}
  if(busy) return; busy=true;
  const r=resolve();
  $("#wipeLabel").textContent=r.label;
  const tl=gsap.timeline({onComplete:()=>{busy=false}});
  tl.set(["#wipe","#wipe2"],{yPercent:100,y:0,visibility:"visible"})
    .to("#wipe2",{yPercent:0,duration:.55,ease:"power4.inOut"})
    .to("#wipe",{yPercent:0,duration:.55,ease:"power4.inOut"},"-=.42")
    .from("#wipeLabel",{yPercent:60,opacity:0,duration:.4,ease:"power3.out"},"-=.2")
    .add(()=>{render()})
    .to("#wipe",{yPercent:-100,duration:.7,ease:"power4.inOut"},"+=.15")
    .to("#wipe2",{yPercent:-100,duration:.7,ease:"power4.inOut"},"-=.6")
    .add(()=>intro(),"-=.45").set(["#wipe","#wipe2"],{visibility:"hidden"});
}
window.addEventListener("hashchange",go);

/* ---------- preloader ---------- */
function boot(){
  const pl=$("#preloader");
  if(!hasG||reduce){pl.remove();go();return}
  const o={v:0};
  gsap.timeline()
    .to(o,{v:100,duration:1.5,ease:"power2.inOut",onUpdate:()=>{$("#plNum").textContent=Math.round(o.v);$("#plBar").style.transform=`scaleX(${o.v/100})`}})
    .add(()=>{first=true;go()})
    .to(pl,{clipPath:"inset(0 0 100% 0)",duration:.9,ease:"power4.inOut"},"+=.1")
    .add(()=>pl.remove());
}

/* ---------- intro animation for a fresh view ---------- */
function intro(){
  if(!hasG||reduce) return;
  const rows=$$("[data-hero-row] span", view);
  if(rows.length){
    $$("[data-hero-row]",view).forEach(r=>r.style.overflow="hidden");
    gsap.from(rows,{yPercent:105,duration:1.2,ease:"power4.out",stagger:.08,delay:.05});
    gsap.from("[data-hero-photo]",{scale:.6,opacity:0,rotate:-12,duration:1.4,ease:"power4.out",delay:.2});
    gsap.from($$("[data-fade]",$(".hero",view)),{y:30,opacity:0,duration:1,ease:"power3.out",stagger:.1,delay:.5});
  }
  const ph=$(".phead h1, .dhero h1",view);
  if(ph&&ph.dataset.split===undefined){}
}

/* ---------- wiring per view ---------- */
let loops=[];
function stopLoops(){loops.forEach(f=>f());loops=[]}
function splitLines(el){
  // split by <br> into lines, then words inside a masked line
  const parts=el.innerHTML.split(/<br\s*\/?>/i);
  el.innerHTML=parts.map(p=>`<span class="split-line"><span>${p}</span></span>`).join("");
  return $$(".split-line>span",el);
}
function wire(root){
  const ST=hasG&&window.ScrollTrigger&&!reduce;
  // headings
  $$("[data-split]",root).forEach(el=>{
    const inner=splitLines(el);
    if(ST) gsap.from(inner,{yPercent:110,rotate:3,duration:1.1,ease:"power4.out",stagger:.09,scrollTrigger:{trigger:el,start:"top 88%",once:true}});
  });
  if(ST){
    $$("[data-fade]",root).forEach(el=>{ if(el.closest(".hero")) return; gsap.from(el,{y:40,opacity:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 90%",once:true}})});
    ScrollTrigger.batch($$("[data-reveal]",root),{start:"top 92%",once:true,onEnter:b=>gsap.from(b,{y:60,opacity:0,duration:1,ease:"power3.out",stagger:.08,overwrite:true})});
    $$("[data-img-reveal]",root).forEach(el=>{
      gsap.fromTo(el,{clipPath:"inset(18% 10% 18% 10% round 22px)"},{clipPath:"inset(0% 0% 0% 0% round 22px)",duration:1.4,ease:"power4.out",scrollTrigger:{trigger:el,start:"top 85%",once:true}});
    });
    $$("[data-parallax]",root).forEach(img=>{gsap.fromTo(img,{scale:1.18,yPercent:-6},{yPercent:6,ease:"none",scrollTrigger:{trigger:img.parentElement,start:"top bottom",end:"bottom top",scrub:true}})});
    // statement word fill
    $$("[data-fill]",root).forEach(el=>{
      const walk=n=>{[...n.childNodes].forEach(c=>{
        if(c.nodeType===3){const f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(w=>{if(!w)return;if(/^\s+$/.test(w))f.append(w);else{const s=document.createElement("span");s.className="w";s.textContent=w;f.append(s)}});c.replaceWith(f)}
        else if(c.nodeType===1&&!c.classList.contains("chip")) walk(c)})};
      walk(el);
      gsap.to($$(".w",el),{opacity:1,stagger:.1,ease:"none",scrollTrigger:{trigger:el,start:"top 80%",end:"bottom 45%",scrub:true}});
    });
    // counters
    $$("[data-count]",root).forEach(el=>{const n=+el.dataset.count,o={v:0};
      gsap.to(o,{v:n,duration:2,ease:"power2.out",scrollTrigger:{trigger:el,start:"top 90%",once:true},onUpdate:()=>el.textContent=Math.round(o.v)})});
    // flow path draw
    $$("[data-flow]",root).forEach(el=>{
      $$(".fl",el).forEach(p=>{const L=p.getTotalLength();p.style.strokeDasharray=p.getAttribute("stroke-dasharray")||L;if(!p.getAttribute("stroke-dasharray")){p.style.strokeDashoffset=L;gsap.to(p,{strokeDashoffset:0,ease:"none",scrollTrigger:{trigger:el,start:"top 80%",end:"bottom 60%",scrub:true}})}});
      gsap.from($$(".fn",el),{opacity:0,y:30,stagger:.12,duration:.8,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 80%",once:true}});
    });
    // horizontal pinned websites
    const hs=$("[data-hs]",root);
    if(hs && innerWidth>900){
      const track=$(".hs-track",hs);
      const dist=()=>Math.max(0,track.scrollWidth-innerWidth);
      gsap.to(track,{x:()=>-dist(),ease:"none",scrollTrigger:{trigger:hs,start:"center center",end:()=>"+="+dist(),pin:true,scrub:1,invalidateOnRefresh:true,anticipatePin:1}});
    }
    // nav hide on scroll down
    ScrollTrigger.create({start:120,end:"max",onUpdate:s=>$("#nav").classList.toggle("hide",s.direction===1&&s.scroll()>300)});
  }
  // marquees (velocity aware)
  $$("[data-marquee]",root).forEach(m=>{
    const tr=$(".mq-track",m); let x=0,last=performance.now(),vel=0,dir=m.classList.contains("ember-band")?-1:1,raf;
    const half=()=>tr.scrollWidth/2;
    if(window.ScrollTrigger&&!reduce) ScrollTrigger.create({trigger:m,start:"top bottom",end:"bottom top",onUpdate:s=>{vel=Math.min(Math.abs(s.getVelocity())/300,8);}});
    let init=false;
    const tick=t=>{const dt=Math.min(t-last,50);last=t;vel*=.94;const h=half();
      if(h){ if(!init){x=dir>0?-h:0;init=true}
        x+=dir*(.06+vel*.06)*dt; if(dir<0&&x<=-h)x+=h; if(dir>0&&x>=0)x-=h; }
      tr.style.transform=`translate3d(${x}px,0,0)`;raf=requestAnimationFrame(tick)};
    if(!reduce){raf=requestAnimationFrame(tick);loops.push(()=>cancelAnimationFrame(raf))}
  });
  // rotating words
  $$("[data-rot]",root).forEach(r=>{const s=$$("span",r);let i=0;if(reduce||!hasG)return;
    const id=setInterval(()=>{const a=s[i],b=s[(i+1)%s.length];gsap.to(a,{yPercent:-110,duration:.6,ease:"power3.in"});gsap.fromTo(b,{yPercent:110},{yPercent:0,duration:.7,ease:"power3.out",delay:.25});i=(i+1)%s.length},2300);
    s.forEach((x,j)=>{x.classList.remove("on");gsap.set(x,{yPercent:j?110:0,opacity:1})});loops.push(()=>clearInterval(id))});
  // hero network canvas
  const cv=$("#net",root); if(cv) net(cv);
  // hero photo mouse parallax
  const hp=$("[data-hero-photo]",root);
  if(hp&&fine&&hasG){const mv=e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;gsap.to(hp,{x:x*40,y:y*30,rotate:x*6,duration:1.2,ease:"power3.out"})};addEventListener("mousemove",mv);loops.push(()=>removeEventListener("mousemove",mv))}
  // video previews on hover
  $$("[data-vframe]",root).forEach(f=>{const v=$("video",f);if(!v)return;const host=f.closest(".wcard")||f;
    host.addEventListener("mouseenter",()=>{f.classList.add("playing");v.play().catch(()=>{})});
    host.addEventListener("mouseleave",()=>{f.classList.remove("playing");v.pause()})});
  $$("[data-autoplay] video, .avid video",root).forEach(v=>v.play().catch(()=>{}));
  // video testimonial
  $$("[data-video]",root).forEach(b=>{const v=$("video",b);b.addEventListener("click",()=>{if(v.paused){v.play();b.classList.add("on");v.controls=true}});v.addEventListener("ended",()=>{b.classList.remove("on");v.controls=false})});
  // full page scroller
  $$("[data-scroller]",root).forEach(s=>{const img=$("img",s);let anim;
    const run=()=>{const d=img.offsetHeight-s.clientHeight;if(d<=0)return;const dur=Math.min(d/350,18);img.style.transition=`transform ${dur}s cubic-bezier(.45,0,.55,1)`;img.style.transform=`translateY(${-d}px)`};
    const back=()=>{img.style.transition="transform 1.2s cubic-bezier(.7,0,.2,1)";img.style.transform="translateY(0)"};
    s.addEventListener("mouseenter",run);s.addEventListener("mouseleave",back);
    if(!fine){s.style.overflowY="auto"}});
  // filters
  $$("[data-tabs]",root).forEach(tb=>tb.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;
    $$("button",tb).forEach(x=>x.classList.toggle("on",x===b));const t=b.dataset.t;
    $$("[data-panel]",root).forEach(p=>{p.hidden=!(t==="all"||p.dataset.panel===t)});
    if(hasG&&!reduce)gsap.fromTo($$("[data-panel]:not([hidden])",root),{opacity:0,y:30},{opacity:1,y:0,duration:.6,ease:"power3.out",clearProps:"all"});
    if(window.ScrollTrigger)ScrollTrigger.refresh();}));
  $$("[data-filters]",root).forEach(fl=>{const grid=$(`[data-grid="${fl.dataset.filters}"]`,root);
    fl.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;$$("button",fl).forEach(x=>x.classList.toggle("on",x===b));const f=b.dataset.f;
      const items=$$("[data-g]",grid);
      const apply=()=>{items.forEach(it=>it.hidden=!(f==="all"||it.dataset.g===f));if(window.ScrollTrigger)ScrollTrigger.refresh()};
      if(hasG&&!reduce){gsap.to(grid,{opacity:0,y:20,duration:.25,onComplete:()=>{apply();gsap.set(items,{clearProps:"opacity,transform"});gsap.to(grid,{opacity:1,y:0,duration:.5,ease:"power3.out"})}})}else apply();
    })});
  // drag-scroll rows
  $$("[data-drag]",root).forEach(el=>{let down=false,sx=0,sl=0;
    el.addEventListener("pointerdown",e=>{if(e.pointerType!=="mouse")return;down=true;sx=e.clientX;sl=el.scrollLeft;el.classList.add("dragging")});
    addEventListener("pointerup",()=>{down=false;el.classList.remove("dragging")});
    el.addEventListener("pointermove",e=>{if(down)el.scrollLeft=sl-(e.clientX-sx)})});
  // lightbox
  $$("[data-lb]",root).forEach(b=>b.addEventListener("click",()=>{$("#lbImg").src=b.dataset.lb;$("#lb").hidden=false;if(hasG)gsap.from("#lbImg",{scale:.9,opacity:0,duration:.5,ease:"power3.out"})}));
  // service previews
  const fp=$("#floatPrev"),fi=$("#floatImg");
  $$("[data-prev]",root).forEach(r=>{ if(!r.dataset.prev) return;
    r.addEventListener("mouseenter",()=>{fi.src=r.dataset.prev;fp.classList.add("on")});
    r.addEventListener("mouseleave",()=>fp.classList.remove("on"))});
  // back to top
  $$("[data-top]",root).forEach(b=>b.addEventListener("click",()=>lenis?lenis.scrollTo(0,{duration:1.6}):window.scrollTo({top:0,behavior:"smooth"})));
  // magnetic + tilt + platform spotlight
  if(fine){
    $$("[data-magnetic]",root.parentElement||root).forEach(magnet);
    $$("[data-tilt]",root).forEach(tilt);
    $$(".plat",root).forEach(p=>p.addEventListener("mousemove",e=>{const r=p.getBoundingClientRect();p.style.setProperty("--mx",(e.clientX-r.left)+"px");p.style.setProperty("--my",(e.clientY-r.top)+"px")}));
  }
  cursorTargets(root);
}
function magnet(el){ if(el._mag) return; el._mag=1;
  el.addEventListener("mousemove",e=>{const r=el.getBoundingClientRect();const x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;if(hasG)gsap.to(el,{x:x*.3,y:y*.35,duration:.6,ease:"power3.out"})});
  el.addEventListener("mouseleave",()=>{if(hasG)gsap.to(el,{x:0,y:0,duration:.9,ease:"elastic.out(1,.4)"})});
}
function tilt(el){
  el.addEventListener("mousemove",e=>{const r=el.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform=`perspective(900px) rotateY(${x*7}deg) rotateX(${-y*7}deg) translateZ(0)`});
  el.addEventListener("mouseleave",()=>{el.style.transform=""});
}

/* ---------- hero network ---------- */
function net(cv){
  const ctx=cv.getContext("2d");let w,h,dpr,pts=[],raf,mx=-999,my=-999,vis=true;
  const size=()=>{dpr=Math.min(devicePixelRatio||1,2);w=cv.clientWidth;h=cv.clientHeight;cv.width=w*dpr;cv.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
    const n=Math.round(Math.min(110,w*h/14000));pts=Array.from({length:n},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:Math.random()*1.8+.6}))};
  size();
  const onR=()=>size();addEventListener("resize",onR);
  const onM=e=>{const r=cv.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top};addEventListener("mousemove",onM);
  const io=new IntersectionObserver(([en])=>vis=en.isIntersecting);io.observe(cv);
  const D=130;
  const tick=()=>{raf=requestAnimationFrame(tick);if(!vis)return;ctx.clearRect(0,0,w,h);
    for(const p of pts){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;
      const dx=mx-p.x,dy=my-p.y,dd=Math.hypot(dx,dy);if(dd<180){p.x-=dx/dd*.6;p.y-=dy/dd*.6}}
    for(let i=0;i<pts.length;i++){const a=pts[i];
      for(let j=i+1;j<pts.length;j++){const b=pts[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<D){ctx.strokeStyle=`rgba(255,90,31,${(1-d/D)*.35})`;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}}
      const md=Math.hypot(a.x-mx,a.y-my);
      ctx.fillStyle=md<180?"#FF5A1F":"rgba(242,238,232,.45)";ctx.beginPath();ctx.arc(a.x,a.y,a.r+(md<180?1.5:0),0,7);ctx.fill();
      if(md<180){ctx.strokeStyle=`rgba(255,90,31,${(1-md/180)*.6})`;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(mx,my);ctx.stroke()}}};
  if(reduce){tick();cancelAnimationFrame(raf)}else tick();
  loops.push(()=>{cancelAnimationFrame(raf);removeEventListener("resize",onR);removeEventListener("mousemove",onM);io.disconnect()});
}

/* ---------- cursor ---------- */
const cur=$("#cursor"),dot=$("#cursorDot"),lab=$("#cursorLabel");
if(fine){
  document.body.classList.add("has-cursor");
  let x=innerWidth/2,y=innerHeight/2,cx=x,cy=y;
  addEventListener("mousemove",e=>{x=e.clientX;y=e.clientY;dot.style.transform=`translate(${x}px,${y}px) translate(-50%,-50%)`;$("#floatPrev").style.left=x+"px";$("#floatPrev").style.top=y+"px"});
  const loop=()=>{cx+=(x-cx)*.18;cy+=(y-cy)*.18;cur.style.transform=`translate(${cx}px,${cy}px) translate(-50%,-50%)`;requestAnimationFrame(loop)};loop();
  document.addEventListener("mouseover",e=>{const t=e.target.closest("[data-cursor]");const l=e.target.closest("a,button");
    cur.classList.toggle("is-label",!!t);if(t)lab.textContent=t.dataset.cursor;cur.classList.toggle("is-hover",!t&&!!l)});
}
function cursorTargets(){}

/* ---------- menu & lightbox ---------- */
const menu=$("#menu");
function closeMenu(){menu.classList.remove("open")}
$("#burger").addEventListener("click",()=>{menu.classList.add("open");if(hasG)gsap.from($$("a.big",menu),{yPercent:100,opacity:0,stagger:.06,duration:.8,ease:"power4.out",delay:.2})});
$("#menuClose").addEventListener("click",closeMenu);
const lb=$("#lb");$("#lbClose").addEventListener("click",()=>lb.hidden=true);lb.addEventListener("click",e=>{if(e.target===lb)lb.hidden=true});
addEventListener("keydown",e=>{if(e.key==="Escape"){lb.hidden=true;closeMenu()}});
$$("[data-magnetic]",$("#nav")).forEach(el=>fine&&magnet(el));
// same-hash clicks should still scroll to top
document.addEventListener("click",e=>{const a=e.target.closest('a[href^="#"]');if(a&&a.getAttribute("href")===location.hash){e.preventDefault();lenis?lenis.scrollTo(0,{duration:1.2}):scrollTo({top:0,behavior:"smooth"})}});
addEventListener("resize",()=>{if(window.ScrollTrigger)ScrollTrigger.refresh()});

boot();
})();
