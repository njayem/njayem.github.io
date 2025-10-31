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

<!-- Animate.css (keep this to enable animations) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

<!-- Responsive Photo Frame with Tape -->
<div class="animate__animated animate__swing" style="text-align: center;">
  <div class="photo-frame">
    <img src="/images/website-photo-2.jpg" alt="Visual of Parkinson's research pipeline from voice to machine learning model" class="photo-img">
    <div class="tape"></div>
  </div>
</div>

<!-- Caption Quote Below Image -->
<div style="text-align: center; font-style: italic; margin-top: 1em; font-size: 1.2em;">
  <span style="font-size: 2.5em; line-height: 0; vertical-align: top;">“</span>
  Her voice shakes, not with weakness but with everything left unsaid.
  <span style="font-size: 2.5em; line-height: 0; vertical-align: bottom;">”</span>
  <br>
  <span style="font-size: 0.75em; color: #fff; background: #CC3D34; padding: 5px 12px; border-radius: 15px; display: inline-block; margin-top: 0.6em;">
    <strong> Source: My own creation! </strong>
  </span>
</div>

<!-- Blockquote Text Description -->
<div style="max-width: 1200px; margin: 2em auto; padding: 0 1em;">
  <blockquote style="border-left: 4px solid #ccc; padding-left: 1em; color: #555; margin: 1em 0; line-height: 1.6;">
    Parkinson’s disease affects individuals from all walks of life, often around the age of 60. Yet, in the struggles of those affected, research tends to amplify men's voices over others. <strong>“Through her Voice”</strong> transforms silence into a symphony. A woman’s lips become a voice recorder, capturing untold stories in the tremble of her voice. Behind her sits a wall of vertical speech waves — the same pattern that coats her lips — symbolizing how machine learning algorithms translate voices into insights, unraveling Parkinson’s complex layers and aiding in early diagnosis. The red tulip, a symbol for Parkinson’s, honors the struggles of those affected. This piece goes beyond disease; it’s about inclusion. By recognizing diverse voices, our research bridges the gap between human fragility and technology’s potential. <em>Through her voice — and his, and theirs — we hear not just the disease, but hope.</em>
  </blockquote>
</div>

<!-- Responsive Styling -->
<style>
  .photo-frame {
    position: relative;
    display: inline-block;
    width: 90vw;               /* Responsive width */
    max-width: 400px;          /* Limits size on desktop */
    aspect-ratio: 1 / 1;       /* Keeps image square */
    border: 2.5px solid black;
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
My academic journey began with a Bachelor of Engineering (B.Eng.) in Software Engineering from [Concordia University](https://www.concordia.ca/), where I built a strong foundation in problem-solving, critical thinking, and human-centered systems design. I’m now expanding on that foundation in my Master’s research at Concordia and [Mila](https://mila.quebec/en), under the supervision of [Dr. Mirco Ravanelli](https://sites.google.com/site/mircoravanelli/) and [Dr. Marta Kersten-Oertel](https://www.concordia.ca/next-gen/kersten-oertel.html).

My research focuses on developing responsible clinical AI systems that leverage speech as a biomarker — with the goal of supporting early disease detection, continuous monitoring, and equitable care delivery. I work closely with clinicians and researchers to ensure these systems are grounded in real-world workflows, co-designed with their users, and never positioned to replace clinical judgment. While my primary thesis work explores diffusion models and counterfactual reasoning in voice-based diagnostics, I’m also contributing to multimodal efforts that integrate medical speech and imaging for comprehensive decision support.

This work sits at the intersection of machine learning, medicine, and ethics — with an emphasis on building explainable, uncertainty-aware systems that can adapt to diverse patient populations. I’m especially passionate about creating technologies that prioritize collaboration over automation, and care over convenience.

Earlier this year, I received the [NSERC CGS-M](https://www.nserc-crsng.gc.ca/Students-Etudiants/PG-CS/CGSM-BESCM_eng.asp) federal award to support my research, further affirming my commitment to using AI to make healthcare more inclusive, accessible, and accountable.

### Shaping Technology and Research with Ethics, Accountability, and Inclusion 🏛️
As a committed [Tech Steward](https://credentials.techstewardship.com/en/verify/88109651148606), I strive to advance my understanding of systemic bias in tech and promote the ethical development of transformative technologies. By deepening my knowledge, challenging limited narratives, and practicing deliberate values, I aim to shape a more responsible and inclusive technological future. I am dedicated to using technology for social transformation and addressing pressing social issues. In addition to my work in tech ethics, I hold a [TCPS 2: CORE-2022](https://drive.google.com/file/d/1rCDIrcQ7AjrW7oXkmqn8QLVimUWgWjr2/view?usp=sharing) certification in research ethics, focusing on the ethical conduct of research involving human participants. This certification reinforces my commitment to conducting data collection in an inclusive, ethical, and transparent manner, while incorporating diverse perspectives to achieve equitable outcomes.

### Climate Change Initiatives ♻️
Other research interests include leveraging machine learning to address Climate Change, a cause deeply important to me. This focus not only tackles environmental concerns but also aligns with the United Nations' Sustainable Development Goals (SDGs), highlighting how addressing Climate Change can solve multiple global issues. My journey in sustainability has been ongoing, and I have actively pursued sustainability initiatives at Concordia University since 2019. This commitment led me to participate in a hands-on AI for Climate Change program through [Climate Change AI](https://www.climatechange.ai/), where I'm witnessing the transformative power of Machine Learning to analyze climate data and influence environmental policy through actionable insights.

### Research Experience 🔍  
In 2025, I joined the [Centre of Excellence in Youth Mental Health (CEYMH)](https://ceymh-cesmj.ca/) as a Research Assistant under the supervision of [Dr. Lena Palaniyappan](https://scholar.google.com/citations?user=rDdsjwwAAAAJ&hl=en) and [Dr. Alban Voppel](https://scholar.google.nl/citations?user=eb-aB2kAAAAJ&hl=en). I contribute to a multi-site initiative focused on the early detection of relapse in youth experiencing psychosis.

My role involves curating and analyzing bilingual clinical speech data to support the development of speech-based diagnostic tools. I coordinate multisite data collection using REDCap workflows and help power the **Québec Speech Bank** by engineering pipelines to clean, align, and structure longitudinal speech recordings across diverse studies. This work enables multimodal insights into the relationship between voice, symptoms, and cognition, paving the way for more predictive, compassionate mental health care.

These efforts contribute to the **MOTS+ initiative**, a digital relapse detection platform funded by [CIHR](https://cihr-irsc.gc.ca/e/193.html), [FRQS](https://frq.gouv.qc.ca/en/), and the [Wellcome Trust](https://wellcome.org/), with a strong emphasis on clinical relevance, accessibility, and innovation in youth mental health.

In 2022, I received an [NSERC USRA](https://www.nserc-crsng.gc.ca/Students-Etudiants/UG-PC/USRA-BRPC_eng.asp) federal award to pursue a research project under the supervision of Dr. Marta Kersten-Oertel at her Applied Perception Lab in Montreal, Quebec. The project focused on identifying and addressing surgeons' workflow challenges, developing Ventriculostomy prototypes to improve surgical workflow efficiency. The project culminated in a [publication](https://link.springer.com/chapter/10.1007/978-3-031-23223-7_5) for [MICCAI's 2022](https://conferences.miccai.org/2022/en/MICCAI2022-WORKSHOPS.html) [EPIMI](https://sites.google.com/view/epimi) workshop, where my team and I presented a comprehensive User-Centered Design approach to identify and address Ventriculostomy surgeons' workflow challenges to improve surgical efficiency.

As an advocate for social justice, I’m passionate about AI applications that drive social impact. At the [Applied Perception Lab](https://ap-lab.ca/), I drive research at the intersection of AI, ethics, and equity, diversity, and inclusion (EDI) to develop actionable frameworks that address pressing societal challenges and advance responsible, human-centered healthcare technology. Additionally, at [Mila](https://mila.quebec/en/directory/nadine-el-mufti), I lead novel research in Medical Machine Learning focusing on early disease detection through speech analysis, covering the entire ML lifecycle from dataset curation to model training, evaluation, optimization, and deployment, to improve diagnostic accuracy.

### Leadership, Service and Engagement 🌟
<div style="margin-top: 20px;"></div>

<table border="1">
  <tr style="background-color: #f2f2f2;">
    <th>Role</th>
    <th>Affiliation</th>
    <th>Dates of Service</th>
  </tr>
  <tr>
    <td><a href="https://www.concordia.ca/about/administration-governance/board-senate/senate/membership.html">Member</a></td>
    <td> Membre de l’Association Étudiante de Mila (AÉM), Mila - Quebec AI Institute</td>
    <td>Oct 2025 – Present</td>
  </tr>
  <tr>
    <td><a href="https://www.concordia.ca/about/administration-governance/board-senate/senate/membership.html">Member</a></td>
    <td> Senate Standing Committee on Research, Concordia University</td>
    <td>Sep 2025 – Present</td>
  </tr>
    <tr>
    <td><a href="">Arbour Foundation Scholar</a></td>
    <td> Fondation Arbour</td>
    <td>Sep 2025 – Present</td>
  </tr>  
  <tr>
    <td><a href="">Organizer</a></td>
    <td> BrainHack MTL 2026, Concordia University x McGill University x Mila</td>
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
