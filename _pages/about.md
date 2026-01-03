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

# 👋🏼 Hello there, I'm Nadine!

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

<!-- Responsive Styling -->
<style>
  .photo-frame {
    position: relative;
    display: inline-block;
    width: 90vw;               /* Responsive width */
    max-width: 400px;          /* Limits size on desktop */
    aspect-ratio: 1 / 1;       /* Keeps image square */
    border: 15.5px solid black;
    overflow: visible;
  }

  .photo-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .tape {
    position: absolute;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    width: 25%;              /* Proportional to container */
    height: 8%;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
  }

  /* Affiliation tags base styles */
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

  /* Marquee container: hides native scroll, no user interaction needed */
  .affiliation-marquee {
    overflow: hidden;
    width: 100%;
    padding: 1em 0;
  }

  /* Track: two copies of the content placed inline for seamless loop */
  .affiliation-track {
    display: inline-flex;
    gap: 12px;
    width: max-content;
    padding: 0 1em;
    will-change: transform;
    animation: marquee-ltr 28s linear infinite;
  }

  /* Move left -> right forever using duplicated content */
  @keyframes marquee-ltr {
    0%   { transform: translateX(-50%); }
    100% { transform: translateX(0%); }
  }

  /* Pause on hover/focus for accessibility */
  .affiliation-marquee:hover .affiliation-track,
  .affiliation-marquee:focus-within .affiliation-track {
    animation-play-state: paused;
  }

  /* Respect reduced-motion preference */
  @media (prefers-reduced-motion: reduce) {
    .affiliation-track {
      animation: none;
      transform: none;
    }
  }
</style>

## About Me

### Academic Background ✨
My academic journey began with a Bachelor of Engineering (B.Eng.) in Software Engineering from [Concordia University](https://www.concordia.ca/), where I built a strong foundation in problem-solving, critical thinking, and human-centered systems design. I am now expanding on that foundation through my Master’s research at Concordia University and [Mila](https://mila.quebec/en), under the supervision of [Dr. Mirco Ravanelli](https://sites.google.com/site/mircoravanelli/) and [Dr. Marta Kersten-Oertel](https://www.concordia.ca/next-gen/kersten-oertel.html), where I design clinically grounded AI systems that leverage speech as a biomarker across a range of physical and mental health conditions, with a focus on early detection, continuous monitoring, and equitable care delivery. I work closely with clinicians and researchers to ensure these systems are grounded in real-world workflows, co-designed with their users, and never positioned to replace clinician or human judgment.

My work sits at the intersection of machine learning, medicine, and ethics, with an emphasis on building explainable, uncertainty-aware systems that can adapt to diverse patient populations. I am especially passionate about creating technologies that prioritize collaboration over automation, and care over convenience. As an advocate for social impact, I am driven by projects that use AI not just to optimize, but to care.

My thesis is supported by the [NSERC CGS-M](https://www.nserc-crsng.gc.ca/Students-Etudiants/PG-CS/CGSM-BESCM_eng.asp) federal award and the [Arbour Foundation](https://www.fondationarbour.com/en/), reflecting the rigor, originality, and broader significance of this research in advancing clinically responsible AI.

### Shaping Technology and Research with Ethics, Accountability, and Inclusion 🏛️

My approach to technology and research is shaped by formal training and hands-on learning in ethics, governance, and responsible AI. As a committed [Tech Steward](https://credentials.techstewardship.com/en/verify/88109651148606), I developed a deeper understanding of systemic bias in technology and the role of values-driven practice in shaping more responsible and inclusive technological systems.

I hold a [TCPS 2: CORE-2022](https://drive.google.com/file/d/1rCDIrcQ7AjrW7oXkmqn8QLVimUWgWjr2/view?usp=sharing) certification in research ethics, where I learned best practices for the ethical conduct of research involving human participants, including informed consent, privacy, and fairness. This training directly informs how I approach data collection and participant-centered research in practice.

Through the World Health Organization (WHO) Academy course [Ethics and Governance of Artificial Intelligence for Health](https://whoacademy.org/achievements/b51dcc17-84cc-47f3-b5b5-cd6b7f8e4a1e), I gained exposure to global ethical principles, governance frameworks, and regulatory considerations guiding the design and deployment of AI systems in healthcare, with an emphasis on human rights and public benefit.

In addition, I participated in [Mila’s Trustworthy and Responsible AI Learning (TRAIL) program](https://www.virtualbadge.io/certificate-validator?credential=dc595055-6e7c-485b-a3c9-bb7fd8eec548), where I learned to integrate ethical reflection, impact assessment, and risk mitigation throughout the machine learning research lifecycle, from problem formulation to downstream evaluation.

### Research Experience 🔍  

I am currently a Research Assistant with the [Centre of Excellence in Youth Mental Health (CEYMH)](https://ceymh-cesmj.ca/) at the [Douglas Research Centre](https://douglas.research.mcgill.ca/), working under the supervision of [Dr. Lena Palaniyappan](https://scholar.google.com/citations?user=rDdsjwwAAAAJ&hl=en) and [Dr. Alban Voppel](https://scholar.google.nl/citations?user=eb-aB2kAAAAJ&hl=en). I contribute to a multi-site research initiative focused on the early detection of relapse in youth experiencing psychosis.

My role involves coordinating multisite data collection using REDCap workflows, processing and analyzing bilingual clinical speech data, and supporting the **Québec Speech Bank** by engineering and analyzing pipelines to clean, align, and structure longitudinal speech recordings across diverse studies. This work enables multimodal analyses of the relationships between voice, symptoms, and cognition, with the goal of supporting more predictive and compassionate mental health care.

Alongside this work, I am engaged in research at the [Applied Perception Lab](https://ap-lab.ca/) focused on the future of AI-driven surgical innovation and the ethical principles that should guide its development. This work explores how rapid advances in surgical AI raise questions about values, trade-offs, and decision-making as these technologies move from research into clinical practice.

My introduction to healthcare research began in 2022, when I received an [NSERC USRA](https://www.nserc-crsng.gc.ca/Students-Etudiants/UG-PC/USRA-BRPC_eng.asp) federal award to pursue my first research project under the supervision of [Dr. Marta Kersten-Oertel](https://www.concordia.ca/next-gen/kersten-oertel.html) at the Applied Perception Lab in Montreal. This project focused on understanding surgeons’ workflow challenges through a user-centered design approach, including the development of ventriculostomy prototypes to improve surgical efficiency.

The project culminated in a [publication](https://link.springer.com/chapter/10.1007/978-3-031-23223-7_5) presented at [MICCAI 2022](https://conferences.miccai.org/2022/en/MICCAI2022-WORKSHOPS.html)’s [EPIMI](https://sites.google.com/view/epimi) workshop. Through this work, I developed an interest in applied healthcare research and in examining how design choices, evaluation practices, and decision-making processes shape who benefits from clinical technologies and whose perspectives are represented.

### Climate Change Initiatives ♻️
Other research interests include applying machine learning to address climate change, an area I have actively engaged with through both academic and hands-on experiences. I am particularly interested in how data-driven approaches can support environmental decision-making while aligning with the United Nations’ Sustainable Development Goals (SDGs), recognizing climate action as a lever for addressing interconnected global challenges.

My engagement with sustainability has been ongoing, including involvement in sustainability initiatives at Concordia University since 2019. More recently, I participated in a hands-on AI for Climate Change program through [Climate Change AI](https://www.climatechange.ai/), where I explored how machine learning can be used to analyze climate data, surface actionable insights, and inform evidence-based environmental policy.

### Leadership, Service and Engagement 🌟
<div style="margin-top: 20px;"></div>

<table border="1">
  <tr style="background-color: #f2f2f2;">
    <th>Role</th>
    <th>Affiliation</th>
    <th>Dates of Service</th>
  </tr>
  <tr>
    <td><a href="https://www.concordia.ca/about/administration-governance/board-senate/senate/membership.html">Membre</a></td>
    <td>Association Étudiante de Mila (AÉM), Mila - Quebec AI Institute</td>
    <td>Oct 2025 – Present</td>
  </tr>
  <tr>
    <td><a href="https://www.concordia.ca/about/administration-governance/board-senate/senate/membership.html">Member</a></td>
    <td> Senate Standing Committee on Research, Concordia University</td>
    <td>Sep 2025 – Present</td>
  </tr>
    <tr>
    <td><a href="https://www.fondationarbour.com/en/">Arbour Foundation Scholar</a></td>
    <td> Fondation Arbour</td>
    <td>Sep 2025 – Present</td>
  </tr>  
  <tr>
    <td><a href="https://brainhackmtl.github.io/winter2026/">Organizer</a></td>
    <td> Brainhack MTL 2026, Concordia University x McGill University x Mila</td>
    <td>July 2025 – Present</td>
  </tr>    
  <tr>
    <td><a href="https://www.concordia.ca/research/applied-ai-institute/initiatives/geminai.html">Member</a></td>
    <td>Concordia Council on Student Life (CCSL) Subcommittee, Concordia University</td>
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

<h2>Affiliation ✨</h2>

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
