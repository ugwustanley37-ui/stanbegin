/* =====================================================================
   EDIT HERE: contact details and projects.
   type: "chiro" or "wellness". holiday:true adds the Holiday campaign tag.
   ===================================================================== */
window.ME={
  name:"Charles Chukwuma",
  email:"",   /* add your email to show it on the Contact page */
  upwork:"https://www.upwork.com/freelancers/~01f8ae848efd1f339c",
  fiverr:"https://www.fiverr.com/s/7j1Qo3y",
  linkedin:"https://www.linkedin.com/in/charles-carmichael-3774a830b",
  book:"https://www.upwork.com/services/consultation/development-it-charles-2094987335659403910"
};

const OLD_SITES=[
 {slug:"sydney-spine",type:"chiro",holiday:true,name:"Sydney Chiropractic & Massage",client:"Kieran Finnegan",place:"Sydney CBD, Australia",platform:"Base44",
  url:"https://sydney-spine-sync.base44.app/",
  intro:"A premium site for a Sydney CBD chiropractor and bodyworker whose approach goes beyond the spine. Deep greens and editorial type set it apart from typical clinic sites.",
  body:"Visitors meet his core idea straight away, The spine isn't the whole story, backed by 216 five-star Google reviews. Patients can browse conditions treated, try the interactive Neck IQ section and read the FAQ and blog. A holiday campaign sells gift vouchers with a live countdown.",
  feats:["Online booking","Conditions and services library","Interactive Neck IQ section","Google reviews showcase","Holiday gift voucher campaign"]},
 {slug:"restore-rock",type:"chiro",holiday:true,name:"White Rock Chiropractic",client:"Dr. Larry W. Parent",place:"Dallas, Texas",platform:"Base44",
  url:"https://restore-rock-living.base44.app/",
  intro:"A full website for a Dallas chiropractic clinic that has served its community since 1992. The site needed to feel as experienced as the practice and turn visitors into booked appointments.",
  body:"The homepage leads with one promise, Get Back to Living, and keeps the phone number and Book Now button in front of every visitor. Separate pages cover auto accident care, sports injuries and rehabilitation, so patients find their exact problem fast. A seasonal campaign with a live countdown keeps the site timely.",
  feats:["Appointment booking on every page","Auto accident, sports and rehab pages","Patient resources and blog","Seasonal promotion with live countdown","Click-to-call phone number"]},
 {slug:"tetra-health",type:"wellness",name:"Tetra Health",client:"DeMarcus Thompson",place:"Holistic health coach",platform:"Base44",
  url:"https://tetra-health-axis.base44.app/",
  intro:"A calm, premium website for a holistic health coach who helps busy professionals restore their gut-brain axis.",
  body:"Dark forest tones and gold type give the brand a premium feel. The site explains the Tetra Health Model step by step and guides visitors to start their reset.",
  feats:["Method explainer pages","Start-your-reset call to action","Coaching programs","About and contact"]},
 {slug:"karina-wellness",type:"wellness",name:"Karina Morris Wellness",client:"Karina Morris",place:"Health coach · Australia",platform:"Base44",
  url:"https://karina-wellness-flow.base44.app/",
  intro:"A warm, inclusive website for a health coach who works with individuals, communities and people of all abilities.",
  body:"One-to-one coaching, community wellbeing programs and NDIS and inclusion services each have their own page, so every visitor finds the right path quickly.",
  feats:["Coaching, community and NDIS sections","Programs overview","Work with Karina booking","Accessible, calm design"]},
 {slug:"nicole-glow",type:"wellness",name:"Nicole Duraliza Coaching",client:"Nicole Duraliza",place:"Online weight loss & fitness coach",platform:"Base44",
  url:"https://nicole-glow-method.base44.app/",
  intro:"A soft, confident website for a weight loss coach whose message is simple: no restrictive diets, no exhausting routines.",
  body:"The headline Lose Weight. Build Confidence. Create Habits That Last. sets the tone. Visitors move from her story to her coaching, a free challenge, success stories and resources.",
  feats:["Free challenge lead magnet","Discovery call booking","Success stories","Coaching packages","Resources hub"]}
];

const OLD_GALLERY={
 "sydney-spine":["d0","d1","d2","d3","d4","d5","m0|m","m1|m","m2|m"],
 "restore-rock":["d0","d1","d2","d3","d4","d5","m0|m","m1|m","m2|m"],
 "tetra-health":["d0","d1","d2","d3","d4","m0|m","m1|m","m2|m"],
 "karina-wellness":["d0","d1","d2","d3","m0|m","m1|m","m2|m"],
 "nicole-glow":["d0","d1","d2","d3","d4","d5","m0|m","m1|m","m2|m"]
};

window.REVIEWS=[{"title": "Kajabi patient acquisition funnel", "source": "Fiverr", "date": "", "text": "Kajabi is a strategic customer acquisition tool that meets the need of warming leads in a “trust recession” economy. This contract integrated a Kajabi Results bonus into a patient acquisition and ascension funnel. I truly couldn’t have managed the details of this build without Charles’s support. It’s great to leave the tech details to the experts when mental bandwidth is low and technostress is high.", "stars": 5}, {"title": "ScoreApp build", "source": "Fiverr", "date": "", "text": "Charles was incredible to work with. When you're trying to accomplish something that's important to you, but you don't have all of the technology tools to know how, finding someone you can trust to not only do the job but do it well is so key. Charles is that person! He knows ScoreApp very well, and he's so easy to work with! When I create again, he'll definitely be the person I come back to!", "stars": 5}, {"title": "Bubble io Developer Needed to Build SaaS Website with Reporting Workflows, Verification Logic", "text": "Charles was really solid on this project. We came in needing a Bubble website with a lot more going on behind it than a normal front-end build. There were different user types, report submission, verification steps, and a dashboard that needed to only show approved data. He understood that pretty fast and helped make the whole thing feel much more organized. What I liked was that he didn’t overcomplicate communication. He just got into the build, kept me updated, and made smart decisions around the structure. The end result looked clean, worked well, and felt a lot more thought through than what we had in mind at the start. Also worth mentioning, the site looked good across screens, which we cared about a lot. Overall, good experience and I’d work with him again.", "date": "2026-05", "source": "Upwork", "stars": 5}, {"title": "oscartorres", "source": "Fiverr", "date": "", "text": "Charles was professional, responsive, and highly committed throughout the project. The work involved multiple integrations across Airtable, Claude, Twilio, Stripe, and WhatsApp, and he stayed engaged until the entire workflow was validated end-to-end. He communicated clearly, explained technical decisions well, and remained solution-oriented whenever challenges appeared. His technical knowledge is strong, and I would confidently recommend him for automation, integrations, workflow architecture, Airtable, Claude, and WhatsApp projects. I look forward to working with him again on future phases.", "stars": 5}, {"title": "Experienced Bubble io Developer Needed to Improve Existing SaaS Workflow Platform", "text": "Charles helped us stabilize and improve a Bubble platform that had become increasingly difficult to manage internally. What we appreciated most was that he approached the project strategically instead of just making surface-level fixes. He quickly understood how the workflows, dashboards, and user roles connected together and reorganized the structure in a way that made the entire platform feel more controlled and scalable. The app now feels significantly cleaner both visually and functionally. Dashboard behavior makes more sense, workflow logic is easier to manage, and responsiveness across devices improved noticeably during the process. He also communicated well throughout the engagement without overexplaining things or creating unnecessary delays. Updates were clear, progress was consistent, and it genuinely felt like he understood Bubble architecture at a deeper level than most developers we have worked with. Strong experience overall and we would absolutely hire him again for future Bubble io saas development and web development work.", "date": "2026-05", "source": "Upwork", "stars": 5}, {"title": "Make.com & reporting automation", "source": "Fiverr", "date": "", "text": "Charles was a truly exceptional communicator. Because of his depth and understanding, I realized that I needed to use a different output platform than I initially contracted him for. He had already made all the pulls so easy and taught me so much along the way. Because of him, I knew I needed to step back and rethink reporting and even go back to some of the system admins to update the APIs etc. I can't emphasize enough how great of a communicator and how understanding he was. Really great support and I'd work with him again for make.com and other automations.", "stars": 5}, {"title": "Bubble.io Developer Needed for AI-Powered Internal SaaS Workflow Automation and System Fixes", "text": "Charles did a great job as a Bubble io Developer diagnosing and fixing issues in our AI-powered internal SaaS application. We were having workflow problems that were affecting how different parts of the system handled internal actions, dashboard processes, and automation. He was able to trace the issue properly, identify where the logic was breaking down, and improve the workflow structure so everything ran more reliably. What stood out was that he did not treat it like a quick patch. He approached it like a true Bubble.io Developer with a strong understanding of backend logic, workflow automation, and scalable system structure. He explained what was causing the issue clearly and fixed it in a way that made the platform feel more stable and better organized overall. If you need a Bubble io Developer for workflow automation, internal SaaS systems, backend logic, or app optimization, he knows what he is doing.", "date": "2026-04", "source": "Upwork", "stars": 5}, {"title": "Claude Code Developer to Fix Claude AI Automation Bug", "text": "Charles really knows his stuff. He is a true Claude Code expert and figured out an issue that had me completely stuck. Instead of rushing into changes, he took the time to diagnose the automation properly, explained what he was finding in simple terms, and kept me updated from start to finish. The fix was completed much faster than I expected, and everything is working perfectly again. If you need someone who genuinely understands Claude Code, Charles is the person to hire.", "date": "2026-08", "source": "Upwork", "stars": 5}, {"title": "Claude Code Developer | Claude Code Expert Needed to Debug an Existing Claude AI Automation", "text": "Second time working with Charles and just as smooth as the first. This time it was a Claude Code issue with one of our support automations pulling stale ticket data. He diagnosed it almost immediately just from how I described the symptoms, confirmed it once he saw the code, and had it fixed and tested the same day. He's communicated clearly at every step, and clearly understands both the business side and the technical side of what he's building. Already planning to bring him in for more of our Claude Code work going forward.", "date": "2026-07", "source": "Upwork", "stars": 5}, {"title": "Claude Code Setup & Configuration for Existing Development Environment", "text": "Charles made the entire setup process simple and stress-free. Communication was excellent, he guided me through everything step by step, and made sure everything in Claude Code was configured correctly before wrapping up. The whole experience was smooth from start to finish. Highly recommended!", "date": "2026-07", "source": "Upwork", "stars": 5}, {"title": "Looking for People with a Claude Console Account", "text": "Great experience working with Charles. He communicated clearly, followed the instructions carefully, and completed the task accurately and efficiently. Would be happy to work with him again.", "date": "2026-09", "source": "Upwork", "stars": 5}];

const NEW_SITES=[
 {
  "slug": "nurachiropractic",
  "type": "family",
  "name": "NÜRA Chiropractic",
  "client": "Bilingual chiropractic clinic",
  "place": "Dr. Phillips, Orlando, FL",
  "url": "https://www.nurachiropractic.com/",
  "intro": "A warm, bilingual website for an Orlando chiropractic clinic that cares for patients in English and Spanish.",
  "body": "The homepage opens with a $79 new-patient experience and the promise Get back to feeling like yourself. Patients see the conditions treated, a clear four-step first visit, patient stories and a 5.0 Google rating, with the Spanish version one click away.",
  "feats": [
   "$79 new-patient offer banner",
   "English and Spanish versions",
   "Four-step first visit explainer",
   "Conditions and patient stories",
   "Online booking"
  ],
  "featured": true
 },
 {
  "slug": "optimalwellnesstx",
  "type": "family",
  "name": "Optimal Wellness & Chiropractic",
  "client": "Dr. James Stubbs Jr., D.C.",
  "place": "South Austin, TX",
  "url": "https://www.optimalwellnesstx.com/",
  "intro": "A clean, trustworthy site for a South Austin chiropractor with 301 five-star Google reviews.",
  "body": "Live the life you deserve leads into one-click booking with no forms, a simple three-step start and specialties from back pain to auto injury. Office hours, location and HSA/FSA acceptance are right at the top.",
  "feats": [
   "One-click booking",
   "301 Google reviews showcased",
   "Back, neck, sports and auto injury pages",
   "3-step new patient journey",
   "Neighborhood service pages"
  ],
  "featured": true
 },
 {
  "slug": "firstwellnessaustin",
  "type": "family",
  "name": "First Wellness Family Chiropractic",
  "client": "Dr. Owen",
  "place": "Central Austin, TX",
  "url": "https://firstwellnessaustin.com/",
  "intro": "A friendly site for a family chiropractic practice that has served Austin for over 20 years.",
  "body": "The hero splits visitors into new patients, who book a $49 consultation, and returning patients, who schedule a follow-up. Trust markers sit right below: 20+ years, 10K+ patients and a 4.9 Google rating.",
  "feats": [
   "$49 new-patient consultation",
   "New and returning patient paths",
   "Family care from infants to seniors",
   "Meet the doctor and testimonials",
   "FAQ and blog"
  ],
  "featured": false
 },
 {
  "slug": "twinwaveschiro",
  "type": "family",
  "name": "Twin Waves Chiropractic & Wellness",
  "client": "Chiropractic & wellness",
  "place": "Jacksonville Beach, FL",
  "url": "https://www.twinwaveschiro.com/",
  "intro": "A coastal-themed site for a Jacksonville Beach practice: Ride the wave towards optimal health.",
  "body": "New Patients Start Here sits in the hero. The page explains care for all ages, from back pain to car accident injuries, with chiropractic, acupuncture, massage, laser and shockwave therapy under one roof.",
  "feats": [
   "New Patients Start Here path",
   "Ocean-inspired visual identity",
   "All services under one roof",
   "Car accident injury care",
   "Patient reviews"
  ],
  "featured": true
 },
 {
  "slug": "innersunchiroaustin",
  "type": "family",
  "name": "Inner Sun Chiropractic",
  "client": "Gentle chiropractic care",
  "place": "Austin, TX",
  "url": "https://www.innersunchiroaustin.com/",
  "intro": "A warm, sunlit site for an Austin chiropractor offering gentle care focused on long-term healing.",
  "body": "The coral hero promises lasting pain relief, with Book Your Appointment and Call Now side by side. A dedicated SoftWave Therapy section explains the clinic's tissue regeneration treatment.",
  "feats": [
   "Book or call from the hero",
   "SoftWave Therapy feature",
   "Conditions treated",
   "Meet the team"
  ],
  "featured": true
 },
 {
  "slug": "austin-chiropractor",
  "type": "family",
  "name": "West End Chiropractic",
  "client": "Dr. Casey Morgan, D.C.",
  "place": "Austin, TX · since 1994",
  "url": "https://austin-chiropractor.com/",
  "intro": "Austin's Hometown Chiropractor: a site for a West Austin clinic serving patients since 1994.",
  "body": "The page answers the questions patients really ask, Is pain affecting your life? Can chiropractic help me?, and highlights in-network insurance, free parking off MoPac and a $47 first visit.",
  "feats": [
   "$47 first visit offer",
   "In-network insurance and free parking",
   "Pain-point sections",
   "Simple How It Works steps",
   "Google reviews widget"
  ],
  "featured": false
 },
 {
  "slug": "twohandschiropractic",
  "type": "family",
  "name": "Two Hands Chiropractic",
  "client": "Multidisciplinary chiropractic",
  "place": "Austin, TX",
  "url": "https://www.twohandschiropractic.com/",
  "intro": "A confident site for an Austin practice: You want the best chiropractor in Austin, we are here for your optimal health.",
  "body": "A complimentary consultation offer leads into proof points, 6 years serving and 100K+ patients helped, then a clear what-to-expect sequence from consultation and exam to X-rays and report of findings.",
  "feats": [
   "Complimentary consultation offer",
   "Proof-point counters",
   "What-to-expect sequence",
   "Insurance information",
   "Multiple locations"
  ],
  "featured": false
 },
 {
  "slug": "motusatx",
  "type": "sports",
  "name": "Mōtus Chiropractic",
  "client": "Dr. Mike Isseks",
  "place": "South Austin, TX",
  "url": "https://motusatx.com/",
  "intro": "A bold, minimal site for a South Austin chiropractor whose patients want to move, train and live without limitation.",
  "body": "Large statement typography carries the brand idea, Move Consciously, down the page. The site explains the root-cause process, from range-of-motion testing to pre- and post-care X-rays, with Schedule Your Visit in every section.",
  "feats": [
   "Statement-led brand design",
   "Root-cause care process",
   "Movement-focused messaging",
   "Schedule button in every section"
  ],
  "featured": false
 },
 {
  "slug": "limitlesschiroatx",
  "type": "sports",
  "name": "Limitless Chiropractic",
  "client": "Austin Fit Magazine's Best Chiropractor 2024",
  "place": "Austin, TX",
  "url": "https://www.limitlesschiroatx.com/",
  "intro": "An energetic site for an Austin sports and spine clinic voted Austin's Best Chiropractor 2024 by Austin Fit Magazine.",
  "body": "A scrolling banner pushes the NEW97 new-patient code, and the homepage walks through the first appointment: history, digital X-rays, movement assessment and a full-body adjustment. Dedicated pages cover cranial facial release and spinal decompression.",
  "feats": [
   "$97 new-patient promo banner",
   "First-visit walkthrough",
   "Spinal decompression and cranial facial release pages",
   "Testimonials and FAQ",
   "Online scheduling"
  ],
  "featured": true
 },
 {
  "slug": "structuralhealth",
  "type": "sports",
  "name": "Structural Health",
  "client": "Chiropractic & massage clinic",
  "place": "North Austin, TX",
  "url": "https://www.structuralhealth.net/",
  "intro": "A clean site for a North Austin chiropractic and massage clinic built around optimized performance for your body.",
  "body": "The page leads with Schedule now and the phone number, then lists the insurance networks the clinic works with, from Blue Cross to Medicare, so patients know right away they're covered.",
  "feats": [
   "Schedule now on every screen",
   "Insurance networks listed",
   "Chiropractic and massage services",
   "Location and contact details"
  ],
  "featured": false
 },
 {
  "slug": "performancedrivencenters",
  "type": "sports",
  "name": "Performance Driven Centers",
  "client": "Dr. Alvin Green",
  "place": "Orlando, FL",
  "url": "https://www.performancedrivencenters.com/",
  "intro": "A high-energy site for an Orlando sports massage and functional chiropractic clinic for athletes and active people.",
  "body": "Separate buttons book sports chiropractic or sports massage. The page qualifies visitors with You're in the right place if and This may not be the right fit, then explains dry needling, cupping and IASTM.",
  "feats": [
   "Separate booking for chiro and massage",
   "Ideal-patient qualifier section",
   "Dry needling, cupping and IASTM pages",
   "Team profiles",
   "FAQ"
  ],
  "featured": true
 },
 {
  "slug": "chirofx",
  "type": "specialty",
  "name": "chiroFX",
  "client": "Corrective care chiropractic",
  "place": "Austin, TX",
  "url": "https://chirofx.net/",
  "intro": "A site for an Austin corrective-care clinic built around one message: the right doctor makes all the difference.",
  "body": "Visitors can text or call from the top bar, browse an interactive model of conditions treated, from migraines and TMJ to disc injuries, and request a consultation from any section.",
  "feats": [
   "Text or call top bar",
   "Interactive conditions model",
   "Services and patient resources",
   "Request a consultation forms"
  ],
  "featured": false
 },
 {
  "slug": "gonstead-atx",
  "type": "specialty",
  "name": "Gonstead Chiropractic & Wellness ATX",
  "client": "Gonstead system & regenerative care",
  "place": "Austin, TX",
  "url": "https://gonstead-atx.com/",
  "intro": "A comprehensive site for an Austin clinic that combines Gonstead chiropractic with regenerative and anti-aging care.",
  "body": "A deep menu covers dozens of service pages, from spinal decompression and shockwave to PRP, IV therapy and hormone therapy, each written for Austin search. A $99 new-patient special and accessibility tools are built in.",
  "feats": [
   "Gonstead system explainer",
   "Large service-page library",
   "$99 new-patient special",
   "Accessibility toolbar",
   "Video testimonials"
  ],
  "featured": false
 },
 {
  "slug": "austinlifechiro",
  "type": "specialty",
  "name": "Austin Life Chiropractic",
  "client": "Upper cervical chiropractors",
  "place": "Austin, TX",
  "url": "https://austinlifechiro.com/",
  "intro": "A site for an Austin upper cervical practice with the tagline Health. Different.",
  "body": "Visitors can schedule a free consultation, explore family, pediatric, upper cervical and perinatal care, and read patient results. The team speaks English, Spanish and Portuguese.",
  "feats": [
   "Free consultation booking",
   "Family, pediatric and perinatal pages",
   "Upper cervical explainer",
   "Patient results",
   "Multilingual team"
  ],
  "featured": false
 },
 {
  "slug": "voyagechiropractic",
  "type": "specialty",
  "name": "Voyage Chiropractic",
  "client": "Torque Release Technique",
  "place": "Jacksonville, FL",
  "url": "https://www.voyagechiropractic.com/",
  "intro": "A family-focused site for a Jacksonville practice using the neurologically based Torque Release Technique.",
  "body": "Quality care, one family at a time. The site explains the practice's mission and technique, with a new-patient offer, team introduction and reviews one click away.",
  "feats": [
   "New patient offer",
   "Torque Release Technique explainer",
   "Meet the team",
   "Reviews and blog"
  ],
  "featured": false
 },
 {
  "slug": "complete-care",
  "type": "multi",
  "name": "Complete Care",
  "client": "30+ injury recovery clinics",
  "place": "Central Florida",
  "url": "https://www.complete-care.com/",
  "intro": "A large multi-location site for an injury recovery network with 30+ clinics across Central Florida.",
  "body": "Built for people hurt in car accidents and slip-and-falls, the site offers same-day appointments, a location finder, injury and treatment pages, and plain-language help with PIP insurance.",
  "feats": [
   "Location finder for 30+ clinics",
   "Injury and accident type pages",
   "PIP insurance guidance",
   "Find a doctor and refer a patient",
   "Request an appointment"
  ],
  "featured": true
 },
 {
  "slug": "pavlikhealth",
  "type": "multi",
  "name": "Pavlik Health + Wellness",
  "client": "Dr. Daniel Pavlik & Dr. Daniel Pavlik Jr.",
  "place": "Orlando, FL",
  "url": "https://pavlikhealth.com/",
  "intro": "A website for a four-decade Orlando chiropractic practice that has grown into Pavlik Health + Wellness.",
  "body": "The site tells the expansion story and brings together chiropractic, primary medical care, massage, exercise therapy and acupuncture. Patients book chiropractic or medical visits, choose a provider and pick a date online.",
  "feats": [
   "Chiropractic and medical booking",
   "Provider selection",
   "Online payment and patient portal",
   "Expansion story",
   "Office hours and location"
  ],
  "featured": true
 },
 {
  "slug": "risechiropracticmandarin",
  "type": "multi",
  "name": "Rise Chiropractic & Acupuncture",
  "client": "Dr. David Klosterman",
  "place": "Mandarin, Jacksonville, FL",
  "url": "https://risechiropracticmandarin.com/",
  "intro": "A site for a Jacksonville chiropractic and acupuncture practice known for treating neuropathy.",
  "body": "An $87 new-patient special runs across the top, with address, phone, email and hours in the header. The page offers a virtual tour, conditions treated and a dedicated neuropathy section.",
  "feats": [
   "$87 new-patient special",
   "Virtual tour",
   "Neuropathy page",
   "Conditions treated",
   "Online booking"
  ],
  "featured": false
 },
 {
  "slug": "bakerfamilychiro",
  "type": "multi",
  "name": "Baker Family Chiropractic",
  "client": "Orlando Weekly's Best Chiropractor",
  "place": "Orlando, FL",
  "url": "https://bakerfamilychiro.com/",
  "intro": "A site for an award-winning Orlando chiropractic wellness center, named Best Chiropractor by Orlando Weekly five times.",
  "body": "Award badges lead the hero, followed by chiropractic, shockwave therapy, acupuncture and massage services, patient reviews and a new-patient section.",
  "feats": [
   "Award badges up front",
   "Shockwave Therapy pages",
   "Acupuncture and massage",
   "Patient reviews",
   "New patient section"
  ],
  "featured": false
 }
];
const NEW_GALLERY={"nurachiropractic": ["d0", "d1", "d2", "d3", "d4", "m0|m", "m1|m", "m2|m"], "optimalwellnesstx": ["d0", "d1", "d2", "d3", "d4", "m0|m", "m1|m", "m2|m"], "firstwellnessaustin": ["d0", "d1", "d2", "d3", "d4", "m0|m", "m1|m", "m2|m"], "twinwaveschiro": ["d0", "d1", "d2", "d3", "m0|m", "m1|m", "m2|m"], "innersunchiroaustin": ["d0", "d1", "d2", "d3", "d4", "m0|m", "m1|m", "m2|m"], "austin-chiropractor": ["d0", "d1", "d2", "d3", "d4", "m0|m", "m1|m", "m2|m"], "twohandschiropractic": ["d0", "d1", "d2", "m0|m", "m1|m", "m2|m"], "motusatx": ["d0", "d1", "d2", "d3", "d4", "m0|m", "m1|m", "m2|m"], "limitlesschiroatx": ["d0", "d1", "d2", "d3", "d4", "m0|m", "m1|m", "m2|m"], "structuralhealth": ["d0", "m0|m", "m1|m", "m2|m"], "performancedrivencenters": ["d0", "d1", "d2", "d3", "d4", "m0|m", "m1|m", "m2|m"], "chirofx": ["d0", "d1", "d2", "d3", "d4", "m0|m", "m1|m", "m2|m"], "gonstead-atx": ["d0", "d1", "d2", "d3", "d4", "m0|m", "m1|m", "m2|m"], "austinlifechiro": ["d0", "d1", "d2", "d3", "m0|m", "m1|m", "m2|m"], "voyagechiropractic": ["d0", "d1", "d2", "d3", "m0|m", "m1|m", "m2|m"], "complete-care": ["d0", "d1", "d2", "d3", "d4", "m0|m", "m1|m", "m2|m"], "pavlikhealth": ["d0", "d1", "d2", "d3", "d4", "m0|m", "m1|m", "m2|m"], "risechiropracticmandarin": ["d0", "d1", "d2", "d3", "d4", "m0|m", "m1|m", "m2|m"], "bakerfamilychiro": ["d0", "d1", "d2", "d3", "d4", "m0|m", "m1|m", "m2|m"]};
OLD_SITES.forEach(s=>{s.type=s.type==="chiro"?"family":s.type==="wellness"?"coach":s.type});
window.SITES=NEW_SITES.concat(OLD_SITES);
window.GALLERY=Object.assign({},OLD_GALLERY,NEW_GALLERY);
