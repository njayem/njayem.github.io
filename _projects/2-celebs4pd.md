---
title: "Celebs4PD: A Demographically Matched Corpus of Longitudinal, In-the-Wild Speech for Responsible Parkinson’s Detection"
permalink: /projects/celebs4pd/
project_card: false
order: 3
excerpt: "A demographically matched corpus of longitudinal, in-the-wild speech for responsible Parkinson’s detection."
share: false
comments: false
trail:
  - title: "Projects"
    url: "/projects/"
  - title: "HEARD"
    url: "/projects/heard/"
trail_current: "Celebs4PD"
---

{% include project-page-style.html %}
<div class="heard proj-page" markdown="0">

<div class="proj-hero">
  <img src="/images/celebs4pd-dataset.gif" alt="Celebs4PD dataset overview">
</div>
<p class="proj-authors"><b>Authors:</b> <span><strong>El-Mufti, N.</strong>, Kersten-Oertel, M., &amp; Ravanelli, M.</span></p>
<p class="proj-soon"><span>Coming soon</span></p>

<div class="proj-desc">
<p class="proj-desc-label">Project description</p>
<div class="proj-desc-text">
<p>Celebs4PD is a corpus of longitudinal, in-the-wild speech from 60 public figures, 30 with Parkinson’s disease and 30 without, drawn from publicly available media recorded between 1959 and 2025. Each person with Parkinson’s disease is matched to a control on sex, birth year, race and profession, and only the target speaker’s speech is kept, so that what a model learns comes from the disease rather than from demographic confounders. The corpus holds 700 recordings and 138.64 hours of speech, mostly in English with some in French, and most participants with Parkinson’s disease have recordings from both before and after their reported diagnosis.</p>
<p>This study will test whether pretraining on Celebs4PD improves the detection of Parkinson’s disease from clinical speech. A classification head on a frozen speech foundation model will be pretrained on Celebs4PD, then fine-tuned on five clinical datasets in Arabic, English, French, Italian and Spanish, and compared with the same model trained without pretraining and with one pretrained on ParkCeleb, an existing corpus of celebrity speech.</p>
<p>Clinical participants will be matched on age, sex and recording conditions, and a few-shot experiment will measure how much clinical data pretraining can save. The final models will be evaluated on external datasets never used during development, and the corpus will be released with full documentation to support its responsible use.</p>
</div>
</div>
</div>
