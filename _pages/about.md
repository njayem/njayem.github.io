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

<!-- Animate.css (keep this to enable animations)
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/> -->

<!-- Responsive Photo Frame with Tape -->
<div class="animate__animated animate__swing" style="text-align: center;">
  <div class="photo-frame">
    <img src="/images/academic-headshot.png" alt="Visual of Parkinson's research pipeline from voice to machine learning model" class="photo-img">
    <div class="tape"></div>
  </div>
</div> 

<!-- Caption Quote Below Image
<div style="text-align: center; font-style: italic; margin-top: 1em; font-size: 1.2em;">
  <span style="font-size: 2.5em; line-height: 0; vertical-align: top;">“</span>
  Her voice shakes, not with weakness but with everything left unsaid.
  <span style="font-size: 2.5em; line-height: 0; vertical-align: bottom;">”</span>
  <br>
  <span style="font-size: 0.75em; color: #fff; background: #CC3D34; padding: 5px 12px; border-radius: 15px; display: inline-block; margin-top: 0.6em;">
    <strong> Source: My own creation! </strong>
  </span>
</div> -->

<!-- Blockquote Text Description -->
<!-- <div style="max-width: 1200px; margin: 2em auto; padding: 0 1em;">
  <blockquote style="border-left: 4px solid #ccc; padding-left: 1em; color: #555; margin: 1em 0; line-height: 1.6;">
    Parkinson’s disease affects individuals from all walks of life, often around the age of 60. Yet, in the struggles of those affected, research tends to amplify men's voices over others. <strong>“Through her Voice”</strong> transforms silence into a symphony. A woman’s lips become a voice recorder, capturing untold stories in the tremble of her voice. Behind her sits a wall of vertical speech waves — the same pattern that coats her lips — symbolizing how machine learning algorithms translate voices into insights, unraveling Parkinson’s complex layers and aiding in early diagnosis. The red tulip, a symbol for Parkinson’s, honors the struggles of those affected. This piece goes beyond disease; it’s about inclusion. By recognizing diverse voices, our research bridges the gap between human fragility and technology’s potential. <em>Through her voice — and his, and theirs — we hear not just the disease, but hope.</em>
  </blockquote>
</div> -->


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
    border: 6.5px solid black;
    overflow: visible;
    background: #fff;
  }

  .photo-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .tape {
    position: absolute;
    z-index: 2;
    pointer-events: none;
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
    border-radius: 2px;
    width: 26%;
    height: 9%;
    left: 50%;
    top: 0;
    transform: translate(-50%, -58%);
  }

  .page__content h2 {
    color: #000000 !important;
    margin-top: 2.6em;
    margin-bottom: 0.9em;
    padding-bottom: 0.35em;
    border-bottom: 1px solid #e6e6e6;
    font-weight: 800;
    letter-spacing: 0.2px;
  }

  .page__content h2:first-of-type {
    margin-top: 1.6em;
  }

  .page__content h3 {
    display: inline-block;
    font-size: 1.05em;
    font-weight: 900;
    margin-top: 1.7em;
    margin-bottom: 0.9em;
    padding: 0.28em 0.65em;
    border-radius: 4px;
    background: #111;
    color: #ffffff;
    border: 1.5px solid #ffffff;
    letter-spacing: 0.03em;
    transition: color 0.2s ease;
  }

  .page__content h3:hover {
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
    font-size: 0.8em;
    color: white;
    padding: 6px 14px;
    border-radius: 20px;
    display: inline-block;
    margin: 0px 7px;
    text-decoration: none !important;
    transition: transform 0.2s ease, background 0.2s ease;
    white-space: nowrap;
  }

  .affiliation-tag:hover {
    transform: scale(1.08);
    cursor: pointer;
    font-weight: bold;
    text-decoration: underline;
  }

  .concordia { background: #922338; }
  .crblm { background: #244883; }
  .convai { background: #328de7; }
  .mila { background: #63287d; }
  .aplab { background: #3f968a; }
  .drc { background: #102e70; }

  .affiliation-marquee {
    overflow: hidden;
    width: 100%;
    padding: 1em 0;
  }

  .affiliation-track {
    display: inline-flex;
    gap: 12px;
    width: max-content;
    padding: 0 1em;
    will-change: transform;
    animation: marquee-ltr 28s linear infinite;
  }

  @keyframes marquee-ltr {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0%); }
  }

  .affiliation-marquee:hover .affiliation-track,
  .affiliation-marquee:focus-within .affiliation-track {
    animation-play-state: paused;
  }

  @media (prefers-reduced-motion: reduce) {
    .affiliation-track {
      animation: none;
      transform: none;
    }
  }

  .page__content p {
    line-height: 1.65;
    margin-bottom: 1em;
  }

</style>


<h2> About Me </h2>

### Academic Background
My academic journey began with a Bachelor of Engineering (B.Eng.) in Software Engineering from [Concordia University](https://www.concordia.ca/), where I built a strong foundation in problem-solving, critical thinking, and human-centered systems design. I am now expanding on that foundation through my Master’s research at Concordia University and [Mila](https://mila.quebec/en), under the supervision of [Dr. Mirco Ravanelli](https://sites.google.com/site/mircoravanelli/) and [Dr. Marta Kersten-Oertel](https://www.concordia.ca/next-gen/kersten-oertel.html), where I design clinically grounded AI systems that leverage speech as a biomarker across a range of physical and mental health conditions, with a focus on early detection, continuous monitoring, and equitable care delivery. I work closely with clinicians and researchers to ensure these systems are grounded in real-world workflows, co-designed with their users, and never positioned to replace clinician or human judgment.

My work sits at the intersection of machine learning, medicine, and ethics, with an emphasis on building explainable, uncertainty-aware systems that can adapt to diverse patient populations. I am especially passionate about creating technologies that prioritize collaboration over automation, and care over convenience. As an advocate for social impact, I am driven by projects that use AI not just to optimize, but to care.

This research is generously supported by the [NSERC CGS-M](https://www.nserc-crsng.gc.ca/Students-Etudiants/PG-CS/CGSM-BESCM_eng.asp) federal award and the [Arbour Foundation](https://www.fondationarbour.com/en/).


### Shaping Technology and Research with Ethics, Accountability, and Inclusion

My approach to technology and research is shaped by formal training and hands-on learning in ethics, governance, and responsible AI. As a committed [Tech Steward](https://credentials.techstewardship.com/en/verify/88109651148606), I developed a deeper understanding of systemic bias in technology and the role of values-driven practice in shaping more responsible and inclusive technological systems.

I hold a [TCPS 2: CORE-2022](https://drive.google.com/file/d/1rCDIrcQ7AjrW7oXkmqn8QLVimUWgWjr2/view?usp=sharing) certification in research ethics, where I learned best practices for the ethical conduct of research involving human participants, including informed consent, privacy, and fairness. This training directly informs how I approach data collection and participant-centered research in practice.

Through the World Health Organization (WHO) Academy course [Ethics and Governance of Artificial Intelligence for Health](https://whoacademy.org/achievements/b51dcc17-84cc-47f3-b5b5-cd6b7f8e4a1e), I gained exposure to global ethical principles, governance frameworks, and regulatory considerations guiding the design and deployment of AI systems in healthcare, with an emphasis on human rights and public benefit.

In addition, I participated in [Mila’s Trustworthy and Responsible AI Learning (TRAIL) program](https://www.virtualbadge.io/certificate-validator?credential=dc595055-6e7c-485b-a3c9-bb7fd8eec548), where I learned to integrate ethical reflection, impact assessment, and risk mitigation throughout the machine learning research lifecycle, from problem formulation to downstream evaluation.


### Research Experience  

I am currently a Research Assistant with the [Centre of Excellence in Youth Mental Health (CEYMH)](https://ceymh-cesmj.ca/) at the [Douglas Research Centre](https://douglas.research.mcgill.ca/), working under the supervision of [Dr. Lena Palaniyappan](https://scholar.google.com/citations?user=rDdsjwwAAAAJ&hl=en) and [Dr. Alban Voppel](https://scholar.google.nl/citations?user=eb-aB2kAAAAJ&hl=en). I contribute to a multi-site research initiative focused on the early detection of relapse in individuals experiencing psychosis.

My role involves coordinating multisite data collection using REDCap workflows, processing and analyzing bilingual clinical speech data, and supporting the **Québec Speech Bank** by engineering and analyzing pipelines to clean, align, and structure longitudinal speech recordings across diverse studies. This work enables multimodal analyses of the relationships between voice, symptoms, and cognition, with the goal of supporting more predictive and compassionate mental health care.

Alongside this work, I am engaged in research at the [Applied Perception Lab](https://ap-lab.ca/) focused on the future of AI-driven surgical innovation and the ethical principles that should guide its development. This work explores how rapid advances in surgical AI raise questions about values, trade-offs, and decision-making as these technologies move from research into clinical practice.

My introduction to healthcare research began in 2022, when I received an [NSERC USRA](https://www.nserc-crsng.canada.ca/Students-Etudiants/UG-PC/USRA-BRPC_eng.asp) federal award to pursue my first research project under the supervision of [Dr. Marta Kersten-Oertel](https://www.concordia.ca/next-gen/kersten-oertel.html) at Concordia's Applied Perception Lab. This project focused on understanding surgeons’ workflow challenges through a user-centered design approach, including the development of ventriculostomy prototypes to improve surgical efficiency.

The project culminated in a [publication](https://link.springer.com/chapter/10.1007/978-3-031-23223-7_5) presented at [MICCAI 2022](https://conferences.miccai.org/2022/en/MICCAI2022-WORKSHOPS.html)’s [EPIMI](https://sites.google.com/view/epimi) workshop. Through this work, I developed an interest in applied healthcare research and in examining how design choices, evaluation practices, and decision-making processes shape who benefits from clinical technologies and whose perspectives are represented.


### Climate & Sustainability
Beyond clinical AI, I am deeply interested in how machine learning can support climate resilience and environmental decision-making. I am particularly drawn to interdisciplinary efforts that align technical innovation with the United Nations’ Sustainable Development Goals (SDGs), recognizing climate action as interconnected with public health, equity, and long-term systems sustainability.

My engagement with sustainability has included involvement in Concordia-led initiatives since 2019 and participation in a hands-on AI for Climate Change program through [Climate Change AI](https://www.climatechange.ai/). These experiences strengthened my belief that responsible AI must extend beyond healthcare and actively engage with global challenges that shape collective wellbeing.


## Honors & Awards

<a href="https://www.fondationarbour.com/en/">
  <strong>Arbour Foundation Master’s Scholarship</strong>
</a>  
Fondation Arbour  
September 2025  

<a href="https://nserc-crsng.canada.ca/en/funding-opportunity/canada-graduate-research-scholarship-masters-program">
  <strong>NSERC Canada Graduate Scholarship – Master’s (CGS-M)</strong>
</a>  
Natural Sciences and Engineering Research Council of Canada  
April 2024  

<a href="https://www.concordia.ca/gradstudies/funding/external/special-entrance.html">
  <strong>Concordia University Special Entrance Award</strong>
</a>  
Concordia University  
October 2024  

<a href="https://www.quebec.ca/education/etudier-quebec/aide-financiere-etudiants-internationaux/bourses-excellence-gouvernement-quebec">
  <strong>Bourse d’Excellence en Génie</strong>
</a>  
Quebec Ministry of Education  
June 2022  

<a href="https://nserc-crsng.canada.ca/en/funding-opportunity/undergraduate-student-research-awards">
  <strong>NSERC Undergraduate Student Research Award (USRA)</strong>
</a>  
Natural Sciences and Engineering Research Council of Canada  
May 2022  


## Leadership, Service and Engagement
<div style="margin-top: 20px;"></div>

<table border="1">
  <tr style="background-color: #f2f2f2;">
    <th>Role</th>
    <th>Affiliation</th>
    <th>Dates of Service</th>
  </tr>
  <tr>
    <td><a href="https://levantine-connect--thelevantines.replit.app/">Member</a></td>
    <td>The Levantines</td>
    <td>Feb 2026 – Present</td>
  </tr>
  <tr>
    <td><a href="https://www.concordia.ca/about/administration-governance/board-senate/senate/membership.html">Member</a></td>
    <td>Association Étudiante de Mila (AÉM), Mila - Quebec AI Institute</td>
    <td>Oct 2025 – Present</td>
  </tr>
  <tr>
    <td><a href="https://www.concordia.ca/about/administration-governance/board-senate/senate/membership.html">Subcommittee Member</a></td>
    <td>Standing Committee on Research, Graduate Students' Association (GSA), Concordia University</td>
    <td>Sep 2025 – Present</td>
  </tr>
  <tr>
    <td><a href="https://www.fondationarbour.com/en/">Member</a></td>
    <td>Arbour Foundation Scholars</td>
    <td>Sep 2025 – Present</td>
  </tr>  
  <tr>
    <td><a href="https://www.goldenkey.org/">Member</a></td>
    <td>Golden Key International Honour Society</td>
    <td>Sep 2025 – Present</td>
  </tr>  
  <tr>
    <td><a href="https://brainhackmtl.github.io/winter2026/">Organizer</a></td>
    <td>Brainhack MTL, Concordia University x McGill University</td>
    <td>July 2025 – Present</td>
  </tr>    
  <tr>
    <td><a href="https://www.concordia.ca/offices/ccsl.html">Subcommittee Member</a></td>
    <td>Concordia Council on Student Life (CCSL), Graduate Students' Association (GSA), Concordia University</td>
    <td>January 2025 – April 2025</td>
  </tr>  
  <tr>
    <td><a href="https://www.concordia.ca/research/applied-ai-institute/initiatives/geminai.html">Mentee</a></td>
    <td>GEMinAI Program, Concordia University's Applied AI Institute</td>
    <td>October 2024 – April 2025</td>
  </tr>
  <tr>
    <td><a href="https://api.unibuddy.co/og/concordia-university-postgraduate/buddies/students/66df5f6635b519411372b26b?buddyPosition=share">Ambassador</a></td>
    <td>School of Graduate Studies, Concordia University</td>
    <td>September 2024 – Present</td>
  </tr>
</table>


## Licenses & Certifications

<a href="https://whoacademy.org/achievements/b51dcc17-84cc-47f3-b5b5-cd6b7f8e4a1e">
  <strong>Ethics and Governance of Artificial Intelligence for Health</strong>
</a>  
WHO Academy  
January 2026  

<a href="https://verified.sertifier.com/en/verify/14899124979984/">
  <strong>Quebec Scientific Entrepreneurship Program (QcSE)</strong>
</a>  
V1 Studio  
June 2025  

<a href="https://www.virtualbadge.io/certificate-validator?credential=dc595055-6e7c-485b-a3c9-bb7fd8eec548">
  <strong>TRAIL Research: Trustworthy and Responsible AI Learning Certificate</strong>
</a>  
Mila – Quebec AI Institute  
March 2025  

<a href="https://app-ca.clickdimensions.com/blob/concordiaca-a8jj7/files/nadineelmufti_spct.pdf">
  <strong>Strategic Public Communications Training</strong>
</a>  
GradProSkills, Concordia University  
March 2025  

<a href="https://drive.google.com/file/d/1rCDIrcQ7AjrW7oXkmqn8QLVimUWgWjr2/view?usp=sharing">
  <strong>TCPS 2: CORE-2022 (Research Ethics Certification)</strong>
</a>  
Government of Canada  
January 2025  

<a href="https://drive.google.com/file/d/13m7Vtn1vXnPvK0c-UG-B_teOFsR2jd6E/view?usp=sharing">
  <strong>Climate Change AI Summer School</strong>
</a>  
Climate Change AI  
September 2024  

<a href="https://credentials.techstewardship.com/en/verify/88109651148606">
  <strong>Tech Stewardship Practice Program (TSPP)</strong>
</a>  
Tech Stewardship  
July 2024  

<a href="https://www.credly.com/badges/93d98be4-1b0e-42cc-9e97-2227a0296959/public_url">
  <strong>Enterprise Design Thinking Practitioner</strong>
</a>  
IBM  
August 2022  


<h2>Affiliation</h2>

<!-- Image -->
<div style="text-align: center; margin: 1em auto 0;">
  <img src="/images/website-footer.png" alt="Visual of Parkinson's research pipeline from voice to machine learning model" style="max-width: 100%; height: auto; padding: 0;">
</div>

<!-- Affiliation marquee: smooth left-to-right loop -->
<div class="affiliation-marquee" aria-label="Affiliations">
  <div class="affiliation-track">
    <!-- 1st copy -->
    <a href="https://www.concordia.ca/" class="affiliation-tag concordia" target="_blank">Concordia University</a>
    <a href="https://crblm.ca/" class="affiliation-tag crblm" target="_blank">CRBLM</a>
    <a href="https://mila.quebec/en" class="affiliation-tag mila" target="_blank">Mila</a>
    <a href="https://sites.google.com/site/mircoravanelli/students" class="affiliation-tag convai" target="_blank">Conversational AI Lab</a>
    <a href="https://ap-lab.ca/" class="affiliation-tag aplab" target="_blank">Applied Perception Lab</a>
    <a href="https://douglas.research.mcgill.ca/" class="affiliation-tag drc" target="_blank">The Douglas Research Centre</a>

    <!-- 2nd copy (duplicate for seamless loop) -->
    <a href="https://www.concordia.ca/" class="affiliation-tag concordia" target="_blank" aria-hidden="true">Concordia University</a>
    <a href="https://crblm.ca/" class="affiliation-tag crblm" target="_blank" aria-hidden="true">CRBLM</a>
    <a href="https://mila.quebec/en" class="affiliation-tag mila" target="_blank" aria-hidden="true">Mila</a>
    <a href="https://sites.google.com/site/mircoravanelli/students" class="affiliation-tag convai" target="_blank" aria-hidden="true">Conversational AI Lab</a>
    <a href="https://ap-lab.ca/" class="affiliation-tag aplab" target="_blank" aria-hidden="true">Applied Perception Lab</a>
    <a href="https://douglas.research.mcgill.ca/" class="affiliation-tag drc" target="_blank" aria-hidden="true">The Douglas Research Centre</a>
  </div>
</div>