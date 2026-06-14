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

<!-- Responsive Photo Frame with Tape -->
<div class="animate__animated animate__swing" style="text-align: center;">
  <div class="photo-frame">
    <img src="/images/academic-headshot.png" alt="Visual of Parkinson's research pipeline from voice to machine learning model" class="photo-img">
    <div class="tape"></div>
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
    display: block;
    font-size: 1.05em;
    font-weight: 900;
    margin-top: 1.7em;
    margin-bottom: 0.9em;
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

</style>


## Research Topics

<div>
  Applied Clinical AI · Speech Processing · Interpretability & XAI · Fairness & Equity · AI Governance ·<br>
  AI & Cybersecurity · HCI
</div>

## Affiliation

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


<h2> About Me </h2>

<h3 class="badge-heading">Academic Background</h3>
My academic journey began with a Bachelor of Engineering (B.Eng.) in Software Engineering from [Concordia University](https://www.concordia.ca/), where I built a strong foundation in problem-solving, critical thinking, and human-centered systems design. I am now expanding on that foundation through my Master's research at Concordia University and [Mila](https://mila.quebec/en), under the supervision of [Dr. Mirco Ravanelli](https://scholar.google.com/citations?hl=en&user=-6Pj3IYAAAAJ) and [Dr. Marta Kersten-Oertel](https://scholar.google.com/citations?user=fy4CeBoAAAAJ&hl=en), where I design clinically grounded AI systems that leverage speech as a biomarker across a range of physical and mental health conditions, with a focus on early detection, continuous monitoring, and equitable care delivery. I work closely with clinicians and researchers to ensure these systems are grounded in real-world workflows, co-designed with their users, and never positioned to replace clinician or human judgment.

My work sits at the intersection of machine learning, medicine, and ethics, with an emphasis on building explainable, uncertainty-aware systems that can adapt to diverse patient populations. I am especially passionate about creating technologies that prioritize collaboration over automation, and care over convenience. As an advocate for social impact, I am driven by projects that use AI not just to optimize, but to care.

This research is generously supported by the [NSERC CGS-M](https://www.nserc-crsng.gc.ca/Students-Etudiants/PG-CS/CGSM-BESCM_eng.asp) federal award and the [Arbour Foundation](https://www.fondationarbour.com/en/).


<h3 class="badge-heading">Research Experience</h3>

I am currently a Research Assistant at the [Centre of Excellence for Youth Mental Health (CEYMH)](https://ceymh-cesmj.ca/), Douglas Research Centre, McGill University, working under the supervision of [Dr. Lena Palaniyappan](https://scholar.google.com/citations?user=rDdsjwwAAAAJ&hl=en) and [Dr. Alban Voppel](https://scholar.google.nl/citations?user=eb-aB2kAAAAJ&hl=en). My work focuses on powering the **Voici Speech Bank** by engineering and maintaining pipelines to clean, align, and structure longitudinal clinical speech data across diverse multisite studies, and maintaining data collection workflows using REDCap. This infrastructure supports research into speech-based markers of psychosis and relapse risk, enabling multimodal analyses of the relationships between voice, symptoms, and cognition. Alongside this, I co-authored a paper evaluating the performance of state-of-the-art ASR models on psychiatric speech across clinical populations, demographic groups, and task types, currently under review at Digital Psychiatry and Neuroscience (Nature Portfolio).

At the [Applied Perception Lab](https://ap-lab.ca/), I am engaged in two concurrent AI governance projects examining whose values get embedded in clinical AI systems, and what it takes to make those conflicts visible and actionable before they become crises. One investigates anticipatory fairness in surgical AI futures through speculative design methods. The other develops empirical ethical personas for healthcare AI governance, derived from data collected across a deliberately diverse set of stakeholders spanning patients, clinicians, students, and technologists. Both are grounded in the conviction that governance cannot be an afterthought.

My introduction to healthcare research began in 2022, when I received an [NSERC USRA](https://www.nserc-crsng.canada.ca/Students-Etudiants/UG-PC/USRA-BRPC_eng.asp) federal award to pursue my first research project under the supervision of [Dr. Marta Kersten-Oertel](https://www.concordia.ca/next-gen/kersten-oertel.html) at Concordia's Applied Perception Lab. This project focused on understanding surgeons' workflow challenges through a user-centered design approach, including the development of ventriculostomy prototypes to improve surgical efficiency. The project culminated in a [publication](https://link.springer.com/chapter/10.1007/978-3-031-23223-7_5) presented at [MICCAI 2022](https://conferences.miccai.org/2022/en/MICCAI2022-WORKSHOPS.html)'s [EPIMI](https://sites.google.com/view/epimi) workshop. Through this work, I developed an enduring interest in how design choices and evaluation practices shape who benefits from clinical technologies and whose perspectives are represented.


## Honors & Awards
<div style="margin-top: 20px;"></div>

<table border="1">
  <tr style="background-color: #f2f2f2;">
    <th>Award</th>
    <th>Issuer</th>
    <th>Date</th>
  </tr>
  <tr>
    <td><a href="https://www.concordia.ca/gradstudies/funding/in-program/donor-awards.html">Power Corporation Of Canada Graduate Fellowship Graduate Award</a></td>
    <td>Concordia University</td>
    <td>Jun 2026</td>
  </tr>
  <tr>
    <td><a href="https://www.fondationarbour.com/en/">Arbour Foundation Master's Scholarship</a></td>
    <td>Fondation Arbour</td>
    <td>Sep 2025</td>
  </tr>
  <tr>
    <td><a href="https://www.concordia.ca/gradstudies/funding/external/special-entrance.html">Concordia University Special Entrance Award</a></td>
    <td>Concordia University</td>
    <td>Oct 2024</td>
  </tr>
  <tr>
    <td><a href="https://nserc-crsng.canada.ca/en/funding-opportunity/canada-graduate-research-scholarship-masters-program">NSERC Canada Graduate Scholarship – Master's (CGS-M)</a></td>
    <td>Natural Sciences and Engineering Research Council of Canada</td>
    <td>Apr 2024</td>
  </tr>
  <tr>
    <td><a href="https://www.quebec.ca/education/etudier-quebec/aide-financiere-etudiants-internationaux/bourses-excellence-gouvernement-quebec">Bourse d'Excellence en Génie</a></td>
    <td>Quebec Ministry of Education</td>
    <td>Jun 2022</td>
  </tr>
  <tr>
    <td><a href="https://nserc-crsng.canada.ca/en/funding-opportunity/undergraduate-student-research-awards">NSERC Undergraduate Student Research Award (USRA)</a></td>
    <td>Natural Sciences and Engineering Research Council of Canada</td>
    <td>May 2022</td>
  </tr>
</table>


<h3 class="badge-heading">Ethics, Governance & Responsible AI</h3>

My approach to technology and research is shaped by formal training and hands-on learning in ethics, governance, and responsible AI. As a committed [Tech Steward](https://credentials.techstewardship.com/en/verify/88109651148606), I developed a deeper understanding of systemic bias in technology and the role of values-driven practice in shaping more responsible and inclusive technological systems.

I hold a [TCPS 2: CORE-2022](https://drive.google.com/file/d/1rCDIrcQ7AjrW7oXkmqn8QLVimUWgWjr2/view?usp=sharing) certification in research ethics, where I learned best practices for the ethical conduct of research involving human participants, including informed consent, privacy, and fairness. This training directly informs how I approach data collection and participant-centered research in practice.

Through the World Health Organization (WHO) Academy course [Ethics and Governance of Artificial Intelligence for Health](https://whoacademy.org/achievements/b51dcc17-84cc-47f3-b5b5-cd6b7f8e4a1e), I gained exposure to global ethical principles, governance frameworks, and regulatory considerations guiding the design and deployment of AI systems in healthcare, with an emphasis on human rights and public benefit.

In addition, I participated in [Mila's Trustworthy and Responsible AI Learning (TRAIL) program](https://www.virtualbadge.io/certificate-validator?credential=dc595055-6e7c-485b-a3c9-bb7fd8eec548), where I learned to integrate ethical reflection, impact assessment, and risk mitigation throughout the machine learning research lifecycle, from problem formulation to downstream evaluation.

I actively keep up with evolving best practices in responsible AI through continued certification, most recently completing [Foundations in Responsible AI & AI Ethics](https://www.udemy.com/certificate/UC-5ff80b22-9c07-4620-892c-dbea70246ebc/) through Mila and [Master AI Tools for Research](https://learn.wiseupcommunications.com/verify/Certificate1295) through WiseUp Communications. This is an area I treat as ongoing practice, not a checkbox.


<h3 class="badge-heading">Emerging Interests</h3>
I am increasingly drawn to the intersection of AI and cybersecurity, particularly around agentic AI systems, resilient infrastructures, and cyber-physical systems. As AI becomes more autonomous and more deeply embedded in critical infrastructure, the questions of how these systems fail, how they are attacked, and how they are made robust feel both urgent and underexplored. This is an area I am actively learning in and hope to contribute to. Earlier interests, including participation in the [Climate Change AI Summer School](https://drive.google.com/file/d/13m7Vtn1vXnPvK0c-UG-B_teOFsR2jd6E/view?usp=sharing), shaped how I think about systems-level risk and the societal consequences of technological decisions — a thread that runs through everything I work on today.


## Leadership, Service and Engagement
<div style="margin-top: 20px;"></div>

<table border="1">
  <tr style="background-color: #f2f2f2;">
    <th>Role</th>
    <th>Affiliation</th>
    <th>Dates of Service</th>
  </tr>
  <tr>
    <td><a href="https://www.arabsinneuro.org/about/">Member</a></td>
    <td>Arabs in Neuroscience (AiN)</td>
    <td>Apr 2026 – Present</td>
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
    <td>October 2024 – May 2025</td>
  </tr>
  <tr>
    <td><a href="https://api.unibuddy.co/og/concordia-university-postgraduate/buddies/students/66df5f6635b519411372b26b?buddyPosition=share">Ambassador</a></td>
    <td>School of Graduate Studies, Concordia University</td>
    <td>September 2024 – May 2026</td>
  </tr>
</table>


## Licenses & Certifications

<a href="https://learn.wiseupcommunications.com/verify/Certificate1295">
  <strong>Master AI Tools for Research</strong>
</a>  
WiseUp Communications  
June 2026   

<a href="https://www.udemy.com/certificate/UC-5ff80b22-9c07-4620-892c-dbea70246ebc/">
  <strong>Foundations in Responsible AI & AI Ethics</strong>
</a>  
Mila – Quebec AI Institute  
May 2026   

<a href="https://drive.usercontent.google.com/download?id=1SUeRwVuyuFKPxJKPpHpWoUmnoTlIysZK&authuser=0&acrobatPromotionSource=gdrive_chrome-list">
  <strong>Bell x Mila x Buzz HPC x Kids Help Phone Hackathon</strong>
</a>  
Mila – Quebec AI Institute  
April 2026   

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
