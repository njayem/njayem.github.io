---
title: ""
permalink: /
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<br>

# Hello there, I'm Nadine!

<br>

<!-- Responsive Photo Frame -->
<div class="animate__animated animate__swing" style="text-align: center;">
  <div class="photo-frame">
    <img src="/images/academic-headshot.png" alt="Visual of Parkinson's research pipeline from voice to machine learning model" class="photo-img">
  </div>
</div>

<style>
  .page__content {
    color: #000;
  }
  .photo-frame {
    position: relative;
    display: inline-block;
    width: 90vw;
    max-width: 400px;
    aspect-ratio: 1 / 1;
    border: 12px solid black;
    box-sizing: content-box;
    overflow: visible;
    background: #fff;
  }
  .photo-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .page__content h2 {
    color: #000000 !important;
    margin-top: 2em;
    margin-bottom: 0.8em;
    padding-bottom: 0.35em;
    border-bottom: 1px solid #e6e6e6;
    font-weight: 800;
    letter-spacing: 0.2px;
  }
  .page__content h2:first-of-type {
    margin-top: 2em;
  }
  .page__content h3 {
    display: block;
    font-size: 1.05em;
    font-weight: 900;
    margin-top: 0;
    margin-bottom: 0.8em;
    color: #000000;
    letter-spacing: 0.03em;
  }
  .page__content h3.badge-heading {
    display: inline-block;
    padding: 0.28em 0.65em;
    border-radius: 4px;
    background: #111;
    color: #ffffff;
    border: 1.5px solid #ffffff;
    transition: color 0.2s ease;
  }
  .page__content h3.badge-heading:hover {
    color: #ffffc5;
    cursor: pointer;
  }
  .page__content ul {
    margin-top: 0.6em;
    margin-bottom: 1.2em;
  }
  .page__content ul li {
    margin-bottom: 0.55em;
  }
  .page__content table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.95em;
  }
  .page__content th,
  .page__content td {
    padding: 10px 12px;
    border: 1px solid #e6e6e6 !important;
    vertical-align: top;
  }
  .page__content th {
    background: #f2f2f2;
    font-weight: 700;
  }
  .affiliation-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0px 14px;
    text-decoration: none !important;
    transition: transform 0.2s ease;
  }
  .affiliation-tag:hover {
    transform: scale(1.08);
    cursor: pointer;
  }
  .affiliation-logo {
    height: 48px;
    width: auto;
    object-fit: contain;
    display: block;
  }
  .affiliation-marquee {
    overflow: hidden;
    width: 100%;
    padding: 1em 1em 0.6em 1em;
  }
  .affiliation-marquee:hover .affiliation-track { animation-play-state: paused; }
  @keyframes affScroll { 0% { transform: translateX(calc(-1 * var(--set-w, 50%))); } 100% { transform: translateX(0); } }
  .affiliation-track {
    display: inline-flex;
    width: max-content;
    animation: affScroll 24s linear infinite;
    --set-w: 50%;
  }
  .affiliation-set {
    display: inline-flex;
    gap: 24px;
    padding-right: 24px;
  }
  .page__content p {
    line-height: 1.65;
    margin-bottom: 0.8em;
  }
  .research-tag {
    background: #2D5016;
    color: white;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 0.8em;
    font-weight: 600;
    display: inline-block;
    transition: transform 0.2s ease, background 0.2s ease;
    cursor: default;
  }
  .research-tag:hover {
    transform: translateY(-3px) scale(1.05);
    background: #3a6b1e;
  }
  .research-section-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 0.8em 0 2em 0;
  }
  .page__content a { color: #328de7; }
  .tag-douglas {
    background: #102e70;
    color: white;
    padding: 5px 14px;
    border-radius: 20px;
    font-size: 0.8em;
    font-weight: 800;
    display: inline-block;
  }
  .tag-aplab {
    background: #3f968a;
    color: white;
    padding: 5px 14px;
    border-radius: 20px;
    font-size: 0.8em;
    font-weight: 800;
    display: inline-block;
  }
  .tag-mila {
    background: #63287d;
    color: white;
    padding: 5px 14px;
    border-radius: 20px;
    font-size: 0.8em;
    font-weight: 800;
    display: inline-block;
  }
  .table-btn {
    display: inline-block;
    background: #8a8a8a;
    color: #fff !important;
    font-weight: 700;
    font-size: 0.8em;
    padding: 5px 14px;
    border-radius: 20px;
    text-decoration: none !important;
    transition: background 0.18s ease, transform 0.18s ease;
  }
  .table-btn:hover {
    background: #707070;
    transform: scale(1.06);
    color: #fff !important;
    text-decoration: none !important;
  }
  .page__content table th {
    background: #808080 !important;
    color: #fff !important;
    font-weight: 800 !important;
  }
</style>

## Research Topics

<div>
  <span>AI and Healthcare · AI and Cybersecurity · Conversational AI · Responsible AI · Human-Computer Interaction</span>
</div>

## Affiliation

<div class="affiliation-marquee" aria-label="Affiliations">
  <div class="affiliation-track" id="affiliation-track">
   <div class="affiliation-set" id="affiliation-set-a">
    <a href="https://www.concordia.ca/" class="affiliation-tag" target="_blank"><img src="/images/concordia-logo.png" alt="Concordia University" class="affiliation-logo"></a>
    <a href="https://crblm.ca/" class="affiliation-tag" target="_blank"><img src="/images/crblm-logo.png" alt="CRBLM" class="affiliation-logo"></a>
    <a href="https://mila.quebec/en" class="affiliation-tag" target="_blank"><img src="/images/mila-logo.png" alt="Mila" class="affiliation-logo"></a>
    <a href="https://sites.google.com/site/mircoravanelli/students" class="affiliation-tag" target="_blank"><img src="/images/conversational-ai-lab-logo.png" alt="Conversational AI Lab" class="affiliation-logo"></a>
    <a href="https://ap-lab.ca/" class="affiliation-tag" target="_blank"><img src="/images/ap-lab-logo.png" alt="Applied Perception Lab" class="affiliation-logo"></a>
    <a href="https://douglas.research.mcgill.ca/" class="affiliation-tag" target="_blank"><img src="/images/drc-logo.png" alt="The Douglas Research Centre" class="affiliation-logo"></a>
   </div>
   <div class="affiliation-set" aria-hidden="true">
    <a href="https://www.concordia.ca/" class="affiliation-tag" target="_blank" aria-hidden="true"><img src="/images/concordia-logo.png" alt="Concordia University" class="affiliation-logo"></a>
    <a href="https://crblm.ca/" class="affiliation-tag" target="_blank" aria-hidden="true"><img src="/images/crblm-logo.png" alt="CRBLM" class="affiliation-logo"></a>
    <a href="https://mila.quebec/en" class="affiliation-tag" target="_blank" aria-hidden="true"><img src="/images/mila-logo.png" alt="Mila" class="affiliation-logo"></a>
    <a href="https://sites.google.com/site/mircoravanelli/students" class="affiliation-tag" target="_blank" aria-hidden="true"><img src="/images/conversational-ai-lab-logo.png" alt="Conversational AI Lab" class="affiliation-logo"></a>
    <a href="https://ap-lab.ca/" class="affiliation-tag" target="_blank" aria-hidden="true"><img src="/images/ap-lab-logo.png" alt="Applied Perception Lab" class="affiliation-logo"></a>
    <a href="https://douglas.research.mcgill.ca/" class="affiliation-tag" target="_blank" aria-hidden="true"><img src="/images/drc-logo.png" alt="The Douglas Research Centre" class="affiliation-logo"></a>
   </div>
   <div class="affiliation-set" aria-hidden="true">
    <a href="https://www.concordia.ca/" class="affiliation-tag" target="_blank" aria-hidden="true"><img src="/images/concordia-logo.png" alt="Concordia University" class="affiliation-logo"></a>
    <a href="https://crblm.ca/" class="affiliation-tag" target="_blank" aria-hidden="true"><img src="/images/crblm-logo.png" alt="CRBLM" class="affiliation-logo"></a>
    <a href="https://mila.quebec/en" class="affiliation-tag" target="_blank" aria-hidden="true"><img src="/images/mila-logo.png" alt="Mila" class="affiliation-logo"></a>
    <a href="https://sites.google.com/site/mircoravanelli/students" class="affiliation-tag" target="_blank" aria-hidden="true"><img src="/images/conversational-ai-lab-logo.png" alt="Conversational AI Lab" class="affiliation-logo"></a>
    <a href="https://ap-lab.ca/" class="affiliation-tag" target="_blank" aria-hidden="true"><img src="/images/ap-lab-logo.png" alt="Applied Perception Lab" class="affiliation-logo"></a>
    <a href="https://douglas.research.mcgill.ca/" class="affiliation-tag" target="_blank" aria-hidden="true"><img src="/images/drc-logo.png" alt="The Douglas Research Centre" class="affiliation-logo"></a>
   </div>
  </div>
</div>

<script>
(function () {
  var track = document.getElementById('affiliation-track');
  var setA = document.getElementById('affiliation-set-a');
  if (!track || !setA) return;
  function updateSetWidth() {
    var w = setA.getBoundingClientRect().width;
    if (w > 0) {
      track.style.setProperty('--set-w', w + 'px');
    }
  }
  updateSetWidth();
  window.addEventListener('load', updateSetWidth);
  var imgs = setA.querySelectorAll('img');
  imgs.forEach(function (img) {
    if (!img.complete) img.addEventListener('load', updateSetWidth);
  });
  if (window.ResizeObserver) {
    new ResizeObserver(updateSetWidth).observe(setA);
  } else {
    window.addEventListener('resize', updateSetWidth);
  }
})();
</script>

<script>
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var sectionColors = [{ hex: '102e70', color: '#102e70' }, { hex: '3f968a', color: '#3f968a' }, { hex: '63287d', color: '#63287d', driveOverride: '#328de7' }];
    document.querySelectorAll('.page__content span').forEach(function(span) {
      var style = span.getAttribute('style') || '';
      sectionColors.forEach(function(def) {
        if (style.indexOf(def.hex) !== -1) {
          var parent = span.parentElement;
          var next = parent ? parent.nextElementSibling : null;
          if (next && next.tagName === 'P') {
            next.querySelectorAll('a').forEach(function(a) {
              if (def.driveOverride && a.href.indexOf('drive.google.com') !== -1) { a.style.color = def.driveOverride; } else { a.style.color = def.color; }
            });
          }
        }
      });
    });
  });
})();
</script>


## About Me

My academic journey began with a Bachelor of Engineering in Software Engineering from [Concordia University](https://www.concordia.ca/), where I built a solid foundation in problem-solving, critical thinking, and human-centered systems design. I am now an interdisciplinary researcher and Master's student at Concordia University and [Mila](https://mila.quebec/en), under the supervision of [Dr. Mirco Ravanelli](https://scholar.google.com/citations?hl=en&user=-6Pj3IYAAAAJ) and [Dr. Marta Kersten-Oertel](https://scholar.google.com/citations?user=fy4CeBoAAAAJ&hl=en), where my thesis focuses on speech-based Parkinson's disease detection.

My interests have grown well beyond that. I have never been able to look at a technical problem without also seeing its social and ethical dimensions. Technology is not a neutral artifact, and once you understand that, the questions follow naturally. Why does this fail for certain populations? What moral values are embedded in the systems we are building? Who gets to define what responsible deployment actually looks like? That curiosity is what keeps pulling me across so many different disciplines. The work I care about most lives at the intersection of all of them.

<span style="color: #102e70; font-weight: 900; font-size: 1.15em; text-transform: uppercase; letter-spacing: 0.07em; display: block; margin-top: 0; margin-bottom: 0.8em; -webkit-text-stroke: 0.7px #102e70;">The Douglas Research Centre</span>

I am currently a Research Assistant at the [Douglas Research Centre](https://douglas.research.mcgill.ca/), Canada's second largest mental health research centre with over 400 scientific publications per year, under the supervision of [Dr. Alban Voppel](https://scholar.google.nl/citations?user=eb-aB2kAAAAJ&hl=en), Assistant Professor in AI and Psychiatry at McGill University, and [Dr. Lena Palaniyappan](https://scholar.google.com/citations?user=rDdsjwwAAAAJ&hl=en), Inaugural Director of the Centre of Excellence in Youth Mental Health and Monique H. Bourgeois Chair in Neurodevelopmental Disorders. My work focuses on powering the Voici Speech Bank by engineering and maintaining pipelines to clean, align, and structure longitudinal clinical speech and transcript data across diverse multisite studies, and maintaining data collection workflows using REDCap. I also run rigorous statistical analyses to detect anomalies and patterns across patient cohorts and controls. This infrastructure supports research into speech and language biomarkers of psychosis and relapse risk, enabling multimodal analyses that bring together acoustic, lexical, and discourse features to study the relationships between speech, symptoms, and cognitive state, accounting for demographic and clinical confounds, part of which feeds into work currently under review on ASR performance in psychiatric speech.

<div class="research-section-tags">
  <span class="tag-douglas">AI for Psychiatry</span>
  <span class="tag-douglas">Speech Processing</span>
  <span class="tag-douglas">NLP</span>
  <span class="tag-douglas">Clinical Data Management</span>
  <span class="tag-douglas">Data Science</span>
</div>

<span style="color: #3f968a; font-weight: 900; font-size: 1.15em; text-transform: uppercase; letter-spacing: 0.07em; display: block; margin-top: 0; margin-bottom: 0.8em; -webkit-text-stroke: 0.7px #3f968a;">The Applied Perception Lab</span>

Dr. Kersten-Oertel recognized potential in me before I had the language to name it myself. In 2022, she invited me to pursue my first research project through an [NSERC USRA](https://www.nserc-crsng.canada.ca/Students-Etudiants/UG-PC/USRA-BRPC_eng.asp), a federal undergraduate research award, exploring surgeons' workflow challenges in ventriculostomy, one of neurosurgery's most error-prone procedures, and developing prototypes to reduce misplacement and improve surgical precision. That work culminated in a [publication](https://link.springer.com/chapter/10.1007/978-3-031-23223-7_5) at [MICCAI 2022](https://conferences.miccai.org/2022/en/MICCAI2022-WORKSHOPS.html)'s [EPIMI](https://sites.google.com/view/epimi) workshop, and it was where I discovered that I loved research. What began as a single project grew into a mentorship I never outgrew, one that has played a defining role in the kind of interdisciplinary researcher I am today. Rather than put me in one box, she gave me room to explore while staying close enough to guide and challenge me. I am now a Research Assistant and Master's student at the [Applied Perception Lab](https://ap-lab.ca/), where my interests have expanded from HCI into responsible AI, governance, and ethics. The most consequential design decisions are rarely the obviously good or the obviously harmful ones. They are the ones that advance some values while quietly eroding others. Left unresolved, those tensions accumulate until they become the structural conditions of care. I combine stakeholder deliberation, value-sensitive design, and empirical methods to make them visible before deployment rather than after.

<div class="research-section-tags">
  <span class="tag-aplab">HCI</span>
  <span class="tag-aplab">Responsible AI</span>
  <span class="tag-aplab">Human Values</span>
  <span class="tag-aplab">AI Governance</span>
  <span class="tag-aplab">Value-Sensitive Design</span>
</div>

<span style="color: #63287d; font-weight: 900; font-size: 1.15em; text-transform: uppercase; letter-spacing: 0.07em; display: block; margin-top: 0; margin-bottom: 0.8em; -webkit-text-stroke: 0.7px #63287d;">Mila</span>

Dr. Ravanelli recognized my curiosity, ambition, and the work I put into his Machine Learning course, and invited me to join his lab as an intern in fall 2024. I spent that time building a custom Parkinson's speech dataset from the ground up, including the scripts and metadata to construct and reproduce it from scratch, and reaching out to research groups and clinical consortia across the world to bring in data that is as clinically and demographically diverse as possible. Working alongside clinicians through this process shifted something in how I think. They bring questions that no model can answer on its own, grounding the work in real use, real constraints, and real people. That clinical grounding is what brought fairness and explainability to the centre of my thesis. That internship eventually grew into a longer-term mentorship and collaboration. I am now a collaborating researcher and Master's student at [Mila](https://mila.quebec/en), Quebec's AI Institute, working in the Conversational AI Lab. This field runs on collaboration, and I have come to believe that deeply. It takes a village to advance science at this scale, and I got a first glimpse of what that looks like through Dr. Ravanelli and the community he built around [SpeechBrain](https://speechbrain.github.io/). I have also served as a Teaching Assistant for Concordia's Machine Learning course (COMP 432), something that reflects a belief I have long carried and that Dr. Ravanelli embodies in how he leads his lab. You only truly know a subject when you can explain it to someone else. Supporting students in building intuition for core ML concepts and giving them honest, constructive feedback has been as much a part of my own learning as theirs.

<div class="research-section-tags">
  <span class="tag-mila">AI and Healthcare</span>
  <span class="tag-mila">Conversational AI</span>
  <span class="tag-mila">Explainable AI</span>
  <span class="tag-mila">Algorithmic Fairness</span>
</div>

<span style="color: #000; font-weight: 900; font-size: 1.15em; text-transform: uppercase; letter-spacing: 0.07em; display: block; margin-top: 0; margin-bottom: 0.8em; -webkit-text-stroke: 0.7px #000;">Emerging Interests</span>

As my work in ethics, governance, and responsible AI has grown, so has my curiosity about the intersection of AI and cybersecurity, particularly around agentic AI systems, resilient infrastructures, and cyber-physical systems. As AI becomes more autonomous and more deeply embedded in critical infrastructure, the questions of how these systems fail, how they are attacked, and how they are made robust feel both urgent and underexplored. This is an area I am actively learning in and hope to contribute to. Earlier interests, including participation in the [Climate Change AI Summer School](https://drive.google.com/file/d/13m7Vtn1vXnPvK0c-UG-B_teOFsR2jd6E/view?usp=sharing), shaped how I think about systems-level risk and the societal consequences of technological decisions, a thread that runs through everything I work on today.

## Honors & Awards
<div style="margin-top: 20px;"></div>

<table border="1">
  <tr style="background-color: #000; color: #fff;">
    <th style="color: #fff;">Award</th>
    <th style="color: #fff;">Issuer</th>
    <th style="color: #fff;">Date</th>
    <th style="color: #fff;"></th>
  </tr>
  <tr>
    <td>Power Corporation Of Canada Graduate Fellowship Graduate Award</td>
    <td>Concordia University</td>
    <td>Jun 2026</td>
    <td><a href="https://www.concordia.ca/gradstudies/funding/in-program/donor-awards.html" target="_blank" class="table-btn">View</a></td>
  </tr>
  <tr>
    <td>Arbour Foundation Master's Scholarship</td>
    <td>Fondation Arbour</td>
    <td>Sep 2025</td>
    <td><a href="https://www.fondationarbour.com/en/" target="_blank" class="table-btn">View</a></td>
  </tr>
  <tr>
    <td>Concordia University Special Entrance Award</td>
    <td>Concordia University</td>
    <td>Oct 2024</td>
    <td><a href="https://www.concordia.ca/gradstudies/funding/external/special-entrance.html" target="_blank" class="table-btn">View</a></td>
  </tr>
  <tr>
    <td>NSERC Canada Graduate Scholarship – Master's (CGS-M)</td>
    <td>Natural Sciences and Engineering Research Council of Canada</td>
    <td>Apr 2024</td>
    <td><a href="https://nserc-crsng.canada.ca/en/funding-opportunity/canada-graduate-research-scholarship-masters-program" target="_blank" class="table-btn">View</a></td>
  </tr>
  <tr>
    <td>Bourse d'Excellence en Génie</td>
    <td>Quebec Ministry of Education</td>
    <td>Jun 2022</td>
    <td><a href="https://www.quebec.ca/education/etudier-quebec/aide-financiere-etudiants-internationaux/bourses-excellence-gouvernement-quebec" target="_blank" class="table-btn">View</a></td>
  </tr>
  <tr>
    <td>NSERC Undergraduate Student Research Award (USRA)</td>
    <td>Natural Sciences and Engineering Research Council of Canada</td>
    <td>May 2022</td>
    <td><a href="https://nserc-crsng.canada.ca/en/funding-opportunity/undergraduate-student-research-awards" target="_blank" class="table-btn">View</a></td>
  </tr>
</table>


## Leadership, Service and Engagement
<div style="margin-top: 20px;"></div>

<table border="1">
  <tr style="background-color: #000; color: #fff;">
    <th style="color: #fff;">Role</th>
    <th style="color: #fff;">Affiliation</th>
    <th style="color: #fff;">Dates of Service</th>
    <th style="color: #fff;"></th>
  </tr>
  <tr>
    <td>Member</td>
    <td>Arabs in Neuroscience (AiN)</td>
    <td>Apr 2026 – Present</td>
    <td><a href="https://www.arabsinneuro.org/about/" target="_blank" class="table-btn">Link</a></td>
  </tr>
  <tr>
    <td>Member</td>
    <td>The Levantines</td>
    <td>Feb 2026 – Present</td>
    <td><a href="https://levantine-connect--thelevantines.replit.app/" target="_blank" class="table-btn">Link</a></td>
  </tr>
  <tr>
    <td>Member</td>
    <td>Association Étudiante de Mila (AÉM), Mila - Quebec AI Institute</td>
    <td>Oct 2025 – Present</td>
    <td><a href="https://www.concordia.ca/about/administration-governance/board-senate/senate/membership.html" target="_blank" class="table-btn">Link</a></td>
  </tr>
  <tr>
    <td>Subcommittee Member</td>
    <td>Standing Committee on Research, Graduate Students' Association (GSA), Concordia University</td>
    <td>Sep 2025 – Present</td>
    <td><a href="https://www.concordia.ca/about/administration-governance/board-senate/senate/membership.html" target="_blank" class="table-btn">Link</a></td>
  </tr>
  <tr>
    <td>Member</td>
    <td>Arbour Foundation Scholars</td>
    <td>Sep 2025 – Present</td>
    <td><a href="https://www.fondationarbour.com/en/" target="_blank" class="table-btn">Link</a></td>
  </tr>
  <tr>
    <td>Member</td>
    <td>Golden Key International Honour Society</td>
    <td>Sep 2025 – Present</td>
    <td><a href="https://www.goldenkey.org/" target="_blank" class="table-btn">Link</a></td>
  </tr>
  <tr>
    <td>Organizer</td>
    <td>Brainhack MTL, Concordia University x McGill University</td>
    <td>Jul 2025 – Present</td>
    <td><a href="https://brainhackmtl.github.io/winter2026/" target="_blank" class="table-btn">Link</a></td>
  </tr>
  <tr>
    <td>Subcommittee Member</td>
    <td>Concordia Council on Student Life (CCSL), Graduate Students' Association (GSA), Concordia University</td>
    <td>Jan 2025 – Apr 2025</td>
    <td><a href="https://www.concordia.ca/offices/ccsl.html" target="_blank" class="table-btn">Link</a></td>
  </tr>
  <tr>
    <td>Mentee</td>
    <td>GEMinAI Program, Concordia University's Applied AI Institute</td>
    <td>Oct 2024 – May 2025</td>
    <td><a href="https://www.concordia.ca/research/applied-ai-institute/initiatives/geminai.html" target="_blank" class="table-btn">Link</a></td>
  </tr>
  <tr>
    <td>Ambassador</td>
    <td>School of Graduate Studies, Concordia University</td>
    <td>Sep 2024 – May 2026</td>
    <td><a href="https://api.unibuddy.co/og/concordia-university-postgraduate/buddies/students/66df5f6635b519411372b26b?buddyPosition=share" target="_blank" class="table-btn">Link</a></td>
  </tr>
</table>


