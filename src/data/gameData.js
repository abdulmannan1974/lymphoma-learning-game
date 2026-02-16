export const GAME_DATA = {
  clinicalScenarios: [
    {
      id: 1,
      title: "The Rapidly Growing Mass",
      vignette: "A 58-year-old man presents with a 3-week history of a rapidly enlarging right cervical mass, drenching night sweats, and 5 kg weight loss. Examination reveals a 6 cm firm, non-tender cervical node. LDH is 450 U/L (elevated). PET-CT shows FDG-avid disease in cervical, mediastinal, and para-aortic nodes. Bone marrow biopsy is negative.",
      question: "Excisional biopsy shows large B-cells with a diffuse growth pattern. IHC: CD20+, CD10+, BCL6+, MUM1\u2212. FISH is negative for MYC and BCL2 rearrangements. What is the most appropriate initial treatment?",
      options: [
        { text: "R-CHOP \u00d7 6 cycles", correct: true, explanation: "This is advanced-stage DLBCL (GCB subtype by Hans algorithm: CD10+). The IPI score is \u22652 (elevated LDH, advanced stage). R-CHOP-21 for 6 cycles remains the standard of care. Pola-R-CHP could also be considered given IPI \u22652." },
        { text: "DA-EPOCH-R \u00d7 6 cycles", correct: false, explanation: "The CALGB 50303 study showed similar response rates between R-CHOP and DA-EPOCH-R with more toxicity in DA-EPOCH-R. This regimen is preferred for PMBCL and double-hit lymphoma, not standard DLBCL." },
        { text: "R-CHOP \u00d7 3 + IFRT", correct: false, explanation: "This approach is for limited-stage (I-II) DLBCL with bulky disease (\u226510 cm). This patient has advanced-stage disease (multiple nodal regions above and below the diaphragm)." },
        { text: "R-CHOP \u00d7 4 cycles only", correct: false, explanation: "Abbreviated R-CHOP \u00d7 4 is used in limited-stage, nonbulky DLBCL when PET-CR is achieved after cycle 3 (per SWOG S1001). This patient has advanced-stage disease requiring 6 cycles." }
      ],
      category: "DLBCL",
      difficulty: "Standard",
      teachingPoint: "For advanced-stage DLBCL, R-CHOP-21 \u00d7 6 remains standard. The POLARIX trial showed Pola-R-CHP is superior in 2-year PFS for patients with IPI \u22652, particularly ABC subtype and IPI 3-5."
    },
    {
      id: 2,
      title: "The Young Woman with Chest Pain",
      vignette: "A 32-year-old woman presents with progressive cough, chest pain, and facial swelling over 4 weeks. CT chest reveals a 12 cm anterior mediastinal mass with superior vena cava compression. Biopsy shows large B-cells with sclerosis. IHC: CD19+, CD20+, weak CD30+, surface Ig negative. Gene expression profiling shows similarity to classical Hodgkin lymphoma.",
      question: "What is the most appropriate frontline regimen for this patient?",
      options: [
        { text: "DA-EPOCH-R without radiation", correct: true, explanation: "This is primary mediastinal large B-cell lymphoma (PMBCL). DA-EPOCH-R without radiation is preferred based on the Dunleavy et al. phase 2 study showing only 2/51 patients required RT, sparing this young woman from long-term radiation risks (breast cancer, cardiopulmonary disease)." },
        { text: "R-CHOP \u00d7 6 + consolidative RT", correct: false, explanation: "While R-CHOP yields 5-year PFS of ~70% in PMBCL, ~20% have primary induction failure, and most require consolidative radiation. This exposes young women to unacceptable late radiation risks." },
        { text: "ABVD \u00d7 6 cycles", correct: false, explanation: "ABVD is for classical Hodgkin lymphoma. Although PMBCL shares gene expression features with cHL, DLBCL-type regimens (DA-EPOCH-R or R-CHOP) show higher remission rates." },
        { text: "R-CHOP + ibrutinib \u00d7 6", correct: false, explanation: "Adding ibrutinib to R-CHOP did not improve outcomes and increased toxicity, particularly in patients >60 years. This combination is not recommended for any DLBCL subtype." }
      ],
      category: "PMBCL",
      difficulty: "Standard",
      teachingPoint: "PMBCL is molecularly distinct from DLBCL but shares features with cHL. The 9p24.1 amplification (PD-L1) can be therapeutically targeted. For relapsed/refractory cases, CAR-T (axi-cel or liso-cel) and pembrolizumab are FDA-approved options."
    },
    {
      id: 3,
      title: "The Explosive Abdominal Mass",
      vignette: "A 25-year-old HIV-negative man presents with a 5-day history of rapidly increasing abdominal distension, nausea, and vomiting. CT abdomen reveals a massive ileocaecal mass with ascites. LDH is 2,400 U/L. Uric acid is 12 mg/dL. Biopsy shows medium-sized cells with diffuse growth, very high mitotic rate (Ki-67 ~100%), and a 'starry sky' pattern. IHC: CD20+, CD10+, BCL6+. FISH: t(8;14) positive.",
      question: "What is the critical IMMEDIATE management priority, and what is the best treatment regimen?",
      options: [
        { text: "Tumour lysis precautions + DA-EPOCH-R with IT CNS prophylaxis", correct: true, explanation: "This is Burkitt lymphoma. Immediate priorities: hydration, rasburicase/allopurinol for tumour lysis syndrome, then intensive chemotherapy. DA-EPOCH-R is well-tolerated with >90% 5-year EFS and is preferred especially in older adults. Intrathecal CNS prophylaxis is mandatory with each cycle." },
        { text: "R-CHOP \u00d7 6 with IV methotrexate CNS prophylaxis", correct: false, explanation: "CHOP-based chemotherapy is INSUFFICIENT for Burkitt lymphoma. Intensified regimens with alkylating agents and CNS prophylaxis are required. R-CHOP would result in inferior outcomes." },
        { text: "Urgent surgical debulking followed by chemotherapy", correct: false, explanation: "Surgical debulking is not indicated. Quick initiation of intensive chemotherapy with tumour lysis precautions is essential. A prephase with glucocorticoids, vincristine, and cyclophosphamide can be considered to reduce tumour bulk." },
        { text: "Tumour lysis precautions + R-CHOP \u00d7 6 cycles", correct: false, explanation: "While tumour lysis precautions are correct, R-CHOP is inadequate for Burkitt lymphoma. Intensified regimens (CODOX-M/IVAC or DA-EPOCH-R) are needed." }
      ],
      category: "Burkitt",
      difficulty: "Standard",
      teachingPoint: "Burkitt lymphoma: Ki-67 ~100%, cMYC translocation t(8;14), 'starry sky' pattern. CHOP is insufficient. Use CODOX-M/IVAC (2-year EFS 92%) or DA-EPOCH-R (5-year EFS >90%). Relapsed BL has a dismal prognosis (median OS 3-4 months)."
    },
    {
      id: 4,
      title: "The Relapsing Giant",
      vignette: "A 52-year-old man was treated with R-CHOP \u00d7 6 for advanced-stage DLBCL and achieved complete remission. Eight months later, he presents with new cervical lymphadenopathy and B symptoms. Repeat biopsy confirms DLBCL. PET-CT shows widespread disease. He has no significant comorbidities and ECOG PS 1.",
      question: "What is the most appropriate next step in management?",
      options: [
        { text: "CAR T-cell therapy (axi-cel or liso-cel)", correct: true, explanation: "For primary refractory DLBCL or relapse within 12 months, two randomised studies demonstrated superiority of CAR-T (axi-cel or liso-cel) over second-line chemotherapy + HDC/ASCT. This patient relapsed at 8 months \u2014 CAR-T in the second-line setting is indicated." },
        { text: "R-ICE salvage \u2192 HDC/ASCT if responsive", correct: false, explanation: "For relapse <12 months, randomised data now favour CAR-T therapy over the traditional approach of salvage chemo + ASCT. R-ICE/R-DHAP \u2192 ASCT remains appropriate for relapse >12 months in transplant-eligible patients." },
        { text: "Epcoritamab as single agent", correct: false, explanation: "Bispecific T-cell engagers (epcoritamab, glofitamab) are approved for R/R DLBCL after \u22652 prior lines of therapy. They are not first-line salvage options." },
        { text: "Tafasitamab + lenalidomide", correct: false, explanation: "This combination (L-MIND study) is for R/R DLBCL patients not eligible for HDC/ASCT. This 52-year-old with good performance status is transplant-eligible and should receive CAR-T based on the early relapse (<12 months)." }
      ],
      category: "R/R DLBCL",
      difficulty: "Advanced",
      teachingPoint: "The 12-month threshold is critical: Relapse <12 months \u2192 CAR-T (2nd line). Relapse >12 months + transplant-eligible \u2192 Salvage chemo (R-ICE/R-DHAP/R-GDP) \u2192 HDC/ASCT. Non-transplant-eligible \u2192 Tafasitamab/lenalidomide, Pola-BR, or newer agents."
    },
    {
      id: 5,
      title: "The Confused Professor",
      vignette: "A 62-year-old university professor presents with progressive confusion, word-finding difficulty, and right-sided weakness over 3 weeks. MRI brain shows a ring-enhancing lesion in the left frontoparietal region. His GP started dexamethasone 2 days ago. CSF cytology is pending. Slit-lamp examination is normal.",
      question: "What is the most important concern about the steroid use, and what is the central component of frontline therapy?",
      options: [
        { text: "Steroids may reduce biopsy yield; high-dose methotrexate is central to therapy", correct: true, explanation: "Steroids should be withheld if CNS lymphoma is suspected as they can cause rapid tumour regression making stereotactic biopsy non-diagnostic. HD-MTX (3-8 g/m\u00b2) is central to frontline therapy for PCNSL, with 5-year OS of 30-40%." },
        { text: "Steroids may mask infection; whole-brain radiotherapy is the standard treatment", correct: false, explanation: "While WBRT has a 90% response rate, median survival is only 12 months and patients develop significant cognitive dysfunction. HD-MTX-based chemotherapy is the standard, not WBRT alone." },
        { text: "Steroids are appropriate; R-CHOP is the standard treatment", correct: false, explanation: "R-CHOP has poor CNS penetration and is not effective for PCNSL. 95% of PCNSL are DLBCL, typically ABC subtype with CD79B, MYD88, and PIM1 mutations. HD-MTX-based regimens are required." },
        { text: "Steroids are fine; proceed directly to CAR-T therapy", correct: false, explanation: "While CAR-T has shown efficacy in R/R PCNSL, it is not first-line therapy. PCNSL was initially excluded from pivotal CAR-T trials. HD-MTX-based regimens remain the frontline standard." }
      ],
      category: "CNS Lymphoma",
      difficulty: "Advanced",
      teachingPoint: "PCNSL pearls: Withhold steroids before biopsy. HD-MTX is the backbone. Consolidation options: WBRT, HDC/ASCT (less neurotoxicity, favoured in eligible patients per CALGB 51101), or chemotherapy. MATRix regimen (MTX, Ara-C, thiotepa, rituximab) is another intensive option."
    },
    {
      id: 6,
      title: "The Double Trouble",
      vignette: "A 55-year-old woman presents with stage IV DLBCL. IHC shows MYC (70% positive) and BCL2 (90% positive) protein expression. FISH reveals MYC and BCL2 gene rearrangements. She has an IPI score of 4.",
      question: "How should this patient be classified and treated?",
      options: [
        { text: "High-grade B-cell lymphoma with MYC and BCL2 rearrangements \u2014 treat with DA-EPOCH-R + CNS prophylaxis", correct: true, explanation: "This is a double-hit lymphoma (DHL) \u2014 now classified as high-grade B-cell lymphoma with MYC and BCL2 rearrangements (WHO-HAEM5). R-CHOP is inadequate (median OS ~2 years). DA-EPOCH-R is recommended (NCCN guidelines). CNS prophylaxis should be considered given higher CNS risk." },
        { text: "DLBCL, double expressor \u2014 treat with R-CHOP \u00d7 6", correct: false, explanation: "Double expressor (MYC + BCL2 by IHC only, no FISH rearrangements) has inferior prognosis but is still classified as DLBCL-NOS. This patient has actual gene rearrangements by FISH, making it a true DHL, not just double expressor." },
        { text: "Burkitt lymphoma \u2014 treat with CODOX-M/IVAC", correct: false, explanation: "While DHL has features intermediate between DLBCL and BL, it is a distinct entity. CODOX-M/IVAC results may not be generalisable due to selection bias. DA-EPOCH-R is well-tolerated even in older adults." },
        { text: "DLBCL-NOS \u2014 treat with Pola-R-CHP \u00d7 6", correct: false, explanation: "DHL is not classified as DLBCL-NOS. It is a separate entity requiring more intensive therapy than R-CHOP-based regimens. R-CHOP yields a median OS of only ~2 years in DHL." }
      ],
      category: "DHL",
      difficulty: "Advanced",
      teachingPoint: "Key distinction: Double-hit (FISH rearrangements) vs double-expressor (IHC protein expression only). DHL = high-grade B-cell lymphoma (WHO-HAEM5). Double-expressor (30% of DLBCL) has worse prognosis than other DLBCL but better than DHL."
    },
    {
      id: 7,
      title: "The Elderly Gentleman",
      vignette: "A 72-year-old man with MCL (t(11;14) confirmed, Ki-67 35%, MIPI intermediate risk, TP53 wild-type) presents with generalised lymphadenopathy, splenomegaly, and lymphomatous polyposis on colonoscopy. He has moderate COPD and is not a transplant candidate.",
      question: "What is the most appropriate first-line treatment?",
      options: [
        { text: "Bendamustine-rituximab (BR)", correct: true, explanation: "For older/non-transplant-eligible MCL patients, BR is the most widely used and well-tolerated regimen. The StiL and BRIGHT trials showed BR had superior median PFS vs R-CHOP (35 vs 22 months, P=.006) with fewer serious toxicities. MCL patients on BR were more likely to achieve CR (50% vs 27%)." },
        { text: "R-CHOP \u00d7 6 \u2192 maintenance rituximab", correct: false, explanation: "While R-CHOP is an option, BR demonstrated superior PFS and better tolerability in the StiL trial. R-CHOP has higher rates of alopecia, febrile neutropenia, and nausea." },
        { text: "R-maxi-CHOP/R-cytarabine \u2192 ASCT", correct: false, explanation: "This intensive Nordic protocol is for younger patients (\u226465) who are transplant candidates. This 72-year-old with COPD is not a transplant candidate." },
        { text: "Ibrutinib monotherapy", correct: false, explanation: "Ibrutinib's MCL label has been updated and it is no longer prescribed for MCL. BTK inhibitors (acalabrutinib, zanubrutinib) are used in the relapsed setting, not frontline." }
      ],
      category: "MCL",
      difficulty: "Standard",
      teachingPoint: "MCL frontline therapy is personalised: Young/fit \u2192 Cytarabine-containing induction + ASCT + rituximab maintenance (consider ibrutinib integration per TRIANGLE). Older/unfit \u2192 BR (preferred), VR-CAP, or R-CHOP. Always test TP53 \u2014 mutated MCL has median OS of only 1.8 years."
    },
    {
      id: 8,
      title: "The Post-Transplant Puzzle",
      vignette: "A 45-year-old man, 18 months post-cardiac transplant on tacrolimus and mycophenolate, presents with persistent diarrhoea and weight loss. Colonoscopy reveals multiple colonic masses. Biopsy shows monomorphic large B-cell proliferation, EBV-positive by EBER ISH. CD20 is positive.",
      question: "What is the recommended sequential approach to management?",
      options: [
        { text: "Reduce immunosuppression \u2192 rituximab \u2192 escalate to R-CHOP if incomplete response", correct: true, explanation: "This is monomorphic PTLD (EBV+). The sequential approach is: (1) reduce immunosuppression, (2) single-agent rituximab (ORR 40-75%). In a phase 2 response-adapted study, 25% achieved CR with rituximab alone and received consolidative rituximab; the remaining 75% were escalated to R-CHOP." },
        { text: "Immediate R-CHOP \u00d7 6 without immunosuppression changes", correct: false, explanation: "Reducing immunosuppressive therapy is the essential first step. Many patients respond to immunosuppression reduction alone or with rituximab, avoiding unnecessary chemotherapy toxicity." },
        { text: "Immediate CAR T-cell therapy", correct: false, explanation: "Evidence for CAR-T in PTLD is very limited. The sequential approach (reduce IS \u2192 rituximab \u2192 R-CHOP if needed) is well-established and should be followed." },
        { text: "Antiviral therapy + rituximab without immunosuppression reduction", correct: false, explanation: "While EBV is involved, antiviral therapy alone is not the standard. Reducing immunosuppression is the critical first step in PTLD management." }
      ],
      category: "PTLD",
      difficulty: "Advanced",
      teachingPoint: "PTLD key facts: Most important risk factor = pretransplant EBV mismatch. Higher rates in heart/lung (10-25%) vs kidney/liver (1-5%). EBV-negative PTLD has later onset (50-60 months vs 12 months), worse prognosis. Extranodal sites common: GI (~25%), allograft (10-15%), CNS (5-20%)."
    },
    /* ═══ NEW CLINICAL SCENARIOS FROM CHAPTER 45 ═══ */
    {
      id: 9,
      title: "The Limited-Stage Success",
      vignette: "A 42-year-old woman presents with a single 3 cm right inguinal lymph node. Excisional biopsy confirms DLBCL (GCB subtype). PET-CT shows only this single FDG-avid node (Ann Arbor Stage I). LDH is normal. ECOG PS 0. IPI score is 0. After 3 cycles of R-CHOP, interim PET-CT shows complete metabolic response (Deauville 2).",
      question: "What is the most appropriate next step?",
      options: [
        { text: "Complete 1 additional cycle of R-CHOP (total 4 cycles)", correct: true, explanation: "The SWOG S1001 study established R-CHOP \u00d7 4 as standard therapy for limited-stage nonbulky DLBCL with PET-CR after 3 cycles. Those with CR received 1 additional cycle of R-CHOP; those with PR received IFRT. Outcomes were excellent in both arms. The FLYER study also supported abbreviated therapy (4 cycles R-CHOP + 2 rituximab)." },
        { text: "Complete 3 more cycles of R-CHOP (total 6 cycles)", correct: false, explanation: "Six cycles of R-CHOP is standard for advanced-stage DLBCL. For limited-stage, nonbulky disease with a favourable IPI, abbreviated chemotherapy (4 cycles) is sufficient and non-inferior, reducing cumulative toxicity." },
        { text: "Add involved-field radiation therapy now", correct: false, explanation: "In SWOG S1001, IFRT was reserved for patients with incomplete response (PR) after 3 cycles, not for those achieving CR. Omitting radiation avoids late effects while maintaining excellent outcomes." },
        { text: "Switch to DA-EPOCH-R for remaining cycles", correct: false, explanation: "There is no indication to escalate therapy in a patient with limited-stage DLBCL who has achieved an excellent PET-CR after 3 cycles of R-CHOP." }
      ],
      category: "DLBCL",
      difficulty: "Standard",
      teachingPoint: "Limited-stage DLBCL (~45% of cases) is treated to maximise cure while minimising toxicity. R-CHOP \u00d7 4 (SWOG S1001) or R-CHOP \u00d7 4 + 2 rituximab (FLYER) are standard for nonbulky, favourable-prognosis disease. Bulky disease (\u226510 cm) may warrant R-CHOP \u00d7 3 + IFRT."
    },
    {
      id: 10,
      title: "The HIV-Positive Patient",
      vignette: "A 38-year-old HIV-positive man on antiretroviral therapy (CD4 count 320 cells/\u03bcL, undetectable viral load) presents with a rapidly enlarging cervical mass and B symptoms. Biopsy confirms DLBCL. PET-CT shows stage III disease. His haematologist is considering treatment options.",
      question: "What is the key consideration regarding the addition of rituximab to chemotherapy in HIV-associated lymphoma?",
      options: [
        { text: "Rituximab benefits patients with CD4 >50 cells/\u03bcL; avoid if CD4 <50 due to infectious deaths", correct: true, explanation: "In the AMC 010 trial, rituximab + CHOP did not improve outcomes overall and increased infectious deaths in patients with CD4 <50 cells/\u03bcL. However, a French study showed R-CHOP achieves a 2-year OS of 75% without increased life-threatening infections when CD4 >50 cells/\u03bcL. This patient with CD4 320 should receive R-CHOP." },
        { text: "Rituximab is absolutely contraindicated in all HIV patients", correct: false, explanation: "Rituximab is not contraindicated in HIV patients. With well-controlled HIV and CD4 counts above 200 cells/\u03bcL, outcomes parallel those of non-HIV patients. The key threshold is CD4 >50 cells/\u03bcL for safe rituximab use." },
        { text: "Always use rituximab regardless of CD4 count", correct: false, explanation: "The AMC 010 trial showed increased treatment-related infectious deaths when rituximab was added to CHOP in patients with very low CD4 counts (<50 cells/\u03bcL). CD4 count should guide rituximab use." },
        { text: "Antiretroviral therapy must be stopped during chemotherapy", correct: false, explanation: "Combining antiretroviral therapy with chemotherapy is tolerable and associated with better CR rates, faster immune recovery, and improved OS. Attention should be paid to potential drug interactions." }
      ],
      category: "HIV Lymphoma",
      difficulty: "Advanced",
      teachingPoint: "HIV-associated lymphoma: With CD4 >200 cells/\u03bcL, outcomes parallel non-HIV patients. Use R-CHOP (CD4 >50) or CHOP alone (CD4 <50). G-CSF and PJP prophylaxis are mandatory. CODOX-M/IVAC and DA-EPOCH-R are safe for HIV-associated BL. CNS prophylaxis is recommended due to higher CNS risk."
    },
    {
      id: 11,
      title: "The Frail Octogenarian",
      vignette: "An 82-year-old woman with heart failure and diabetes presents with a 4 cm axillary mass. Biopsy confirms DLBCL (ABC subtype). PET-CT shows stage II disease. LDH is mildly elevated. She is frail with ECOG PS 2-3 and would not tolerate standard-dose R-CHOP.",
      question: "What is the most appropriate dose-adapted approach?",
      options: [
        { text: "R-mini-CHOP (dose-attenuated R-CHOP)", correct: true, explanation: "R-mini-CHOP has been explored for elderly or frail patients, showing 2-year PFS of 47% with less toxicity. This is a reasonable option for frail patients who cannot tolerate full-dose R-CHOP, balancing efficacy with safety." },
        { text: "Standard R-CHOP \u00d7 6 with growth factor support", correct: false, explanation: "Standard R-CHOP would carry unacceptable toxicity risk in this frail 82-year-old with heart failure. Anthracycline cardiotoxicity combined with pre-existing heart failure could be fatal." },
        { text: "Radiation therapy alone", correct: false, explanation: "While radiation could provide local control, chemotherapy-based approaches are preferred for DLBCL to address potential systemic disease. A dose-attenuated regimen is more appropriate." },
        { text: "Best supportive care only", correct: false, explanation: "DLBCL is potentially curable even in elderly patients. A dose-adapted approach like R-mini-CHOP can provide meaningful benefit with manageable toxicity. Palliative care alone would not be appropriate as first-line management." }
      ],
      category: "DLBCL",
      difficulty: "Standard",
      teachingPoint: "R-mini-CHOP is an important option for frail/elderly DLBCL patients. R-CHOP-14 (every 14 days with G-CSF) showed no significant benefit over R-CHOP-21 but is a reasonable option for younger patients needing expedited therapy. Consolidative radiation may benefit patients with bulky disease (\u22657.5 cm), particularly with bone involvement."
    },
    {
      id: 12,
      title: "The Testicular Swelling",
      vignette: "A 68-year-old man presents with a painless left testicular swelling for 6 weeks. Ultrasound confirms a solid mass, and radical orchiectomy is performed. Pathology shows DLBCL. PET-CT shows no other sites of disease (stage IE). LDH is normal.",
      question: "What is the standard treatment approach for this patient, and what unique feature of testicular DLBCL must be addressed?",
      options: [
        { text: "R-CHOP \u00d7 6 + CNS prophylaxis + contralateral testis radiation", correct: true, explanation: "Primary testicular DLBCL is typically treated with 6 cycles of R-CHOP plus CNS prophylaxis AND contralateral testis radiation due to its unique recurrence patterns. The contralateral testis is a sanctuary site where chemotherapy penetration is poor, and relapse there is common without radiation." },
        { text: "R-CHOP \u00d7 4 only (limited-stage protocol)", correct: false, explanation: "Although this is stage IE, testicular DLBCL has unique biology with high rates of distant relapse (CNS, contralateral testis) that warrant 6 full cycles of R-CHOP plus prophylactic measures, not abbreviated therapy." },
        { text: "Orchiectomy alone with surveillance", correct: false, explanation: "Orchiectomy alone is insufficient. Testicular DLBCL is an aggressive lymphoma requiring systemic chemotherapy, CNS prophylaxis, and contralateral testicular radiation to prevent recurrence." },
        { text: "R-CHOP \u00d7 6 without any additional prophylaxis", correct: false, explanation: "R-CHOP alone is inadequate for testicular DLBCL. The high risk of CNS relapse and contralateral testicular relapse necessitates both CNS prophylaxis and contralateral testis radiation." }
      ],
      category: "DLBCL",
      difficulty: "Advanced",
      teachingPoint: "Testicular DLBCL: Unique entity with high CNS and contralateral testis relapse risk. Always give: (1) R-CHOP \u00d7 6, (2) CNS prophylaxis (intrathecal or systemic methotrexate), (3) contralateral testis radiation. Extranodal sites associated with higher CNS risk include testis, kidney/adrenal, and bone marrow."
    },
    {
      id: 13,
      title: "The Young Man with a Diagnostic Dilemma",
      vignette: "A 28-year-old man presents with a 14 cm anterior mediastinal mass. Biopsy shows large cells with overlapping features between cHL and DLBCL. IHC shows variable CD20, CD30+, CD15 focally positive, and PAX5+. The expert haematopathologist reports features that do not fit neatly into either classical Hodgkin lymphoma or primary mediastinal B-cell lymphoma.",
      question: "What is the most likely diagnosis and treatment approach?",
      options: [
        { text: "Mediastinal grey zone lymphoma \u2014 treat with DLBCL-type regimen (R-CHOP or DA-EPOCH-R)", correct: true, explanation: "This is mediastinal grey zone lymphoma (MGZL), which presents with overlapping features between cHL and DLBCL/PMBCL. It commonly affects young males aged 20-40. Clinical outcomes are inferior to both PMBCL and cHL. DLBCL-type regimens (R-CHOP or DA-EPOCH-R) have shown higher remission rates compared to Hodgkin lymphoma therapy." },
        { text: "Classical Hodgkin lymphoma \u2014 treat with ABVD", correct: false, explanation: "The mixed immunophenotype with features of both cHL and DLBCL, in combination with the clinical presentation, points to MGZL rather than classical cHL. ABVD shows lower remission rates than DLBCL-type therapy in MGZL." },
        { text: "PMBCL \u2014 treat with DA-EPOCH-R", correct: false, explanation: "While the anterior mediastinal location is suggestive, the mixed immunophenotype with CD15 and variable CD20 distinguishes this from typical PMBCL. Expert haematopathology review is essential for accurate classification of MGZL." },
        { text: "Anaplastic large cell lymphoma \u2014 treat with CHOP", correct: false, explanation: "ALCL is a T-cell lymphoma that is ALK+/\u2212 and typically CD30+ but lacks the mixed B-cell/Hodgkin phenotype seen here. The clinical and immunophenotypic features are consistent with MGZL." }
      ],
      category: "MGZL",
      difficulty: "Advanced",
      teachingPoint: "Mediastinal grey zone lymphoma: A diagnostic challenge with overlapping cHL and DLBCL/PMBCL features. Affects young males, age 20-40, with large mediastinal masses. Expert haematopathology review is essential. DLBCL-type therapy (R-CHOP, DA-EPOCH-R) produces higher remission rates than Hodgkin-directed therapy."
    },
    {
      id: 14,
      title: "The Non-Transplant Candidate with Relapse",
      vignette: "A 74-year-old woman with relapsed DLBCL after R-CHOP (achieved CR lasting 2 years) now has progressive disease. She has moderate renal impairment and is not eligible for HDC/ASCT or CAR-T therapy. Her biopsy shows CD30-negative, non-GCB DLBCL.",
      question: "Which of the following represents the most appropriate treatment option?",
      options: [
        { text: "Tafasitamab + lenalidomide", correct: true, explanation: "For non-transplant-eligible R/R DLBCL patients, the L-MIND study demonstrated tafasitamab (anti-CD19 monoclonal antibody) + lenalidomide with an ORR of 60% (CR 43%) and median DOR of almost 44 months. This is an established option for patients not eligible for intensive therapy." },
        { text: "Polatuzumab vedotin + BR", correct: false, explanation: "Pola-BR is another reasonable option (ORR 40%, CR 40%, median DOR 12.6 months) but her renal impairment may limit bendamustine dosing. The question specifically asks for the most appropriate option in a patient ineligible for ASCT." },
        { text: "Immediate epcoritamab", correct: false, explanation: "Bispecific T-cell engagers like epcoritamab (ORR 63%, CR 39%, median DOR 12 months) are approved for R/R DLBCL after \u22652 prior lines of therapy. This patient has only received one prior line." },
        { text: "R-CHOP re-treatment", correct: false, explanation: "Re-treating with the same regimen after relapse is generally not recommended. DLBCL that relapses after R-CHOP is unlikely to respond well to the same therapy. Novel agents are preferred." }
      ],
      category: "R/R DLBCL",
      difficulty: "Advanced",
      teachingPoint: "Non-transplant-eligible R/R DLBCL options: Tafasitamab + lenalidomide (L-MIND: ORR 60%, CR 43%), Pola-BR (ORR 40%), loncastuximab tesirine (ORR 48%), selinexor (ORR 28%). After \u22652 lines: bispecific T-cell engagers \u2014 epcoritamab (ORR 63%) and glofitamab (ORR 54%, 84% still in CR at 24 months)."
    },
    {
      id: 15,
      title: "The Fit Young MCL Patient",
      vignette: "A 52-year-old fit man is diagnosed with mantle cell lymphoma (t(11;14)+, cyclin D1+, Ki-67 40%, MIPI high-risk, TP53 wild-type). He has stage IV disease with generalised lymphadenopathy and bone marrow involvement. ECOG PS 0.",
      question: "Based on the TRIANGLE study and current evidence, what is the most appropriate frontline approach?",
      options: [
        { text: "Cytarabine-containing induction + ibrutinib \u2192 HDC/ASCT + maintenance ibrutinib and rituximab", correct: true, explanation: "The TRIANGLE study compared standard chemo-immunotherapy + ASCT + rituximab maintenance vs adding ibrutinib to induction/maintenance vs ibrutinib-containing induction without transplant. Results showed superior efficacy with ibrutinib addition to chemo-immunotherapy. The benefit of autologous SCT remains uncertain with ibrutinib integration." },
        { text: "BR \u00d7 6 cycles + maintenance rituximab", correct: false, explanation: "BR is the preferred option for older/unfit patients. This young, fit patient should receive intensive cytarabine-containing induction followed by ASCT consolidation, which produces the longest PFS and OS." },
        { text: "R-CHOP \u00d7 6 cycles only", correct: false, explanation: "R-CHOP alone without ASCT consolidation is inadequate for young, fit MCL patients. The 5-year PFS with cytarabine-containing regimens + ASCT (65%) is significantly better than R-CHOP-based approaches (40%)." },
        { text: "Ibrutinib monotherapy", correct: false, explanation: "Single-agent BTK inhibitors are reserved for the relapsed setting. Ibrutinib's MCL label has been updated; frontline therapy for fit patients requires intensive chemo-immunotherapy with or without ibrutinib integration (TRIANGLE study)." }
      ],
      category: "MCL",
      difficulty: "Advanced",
      teachingPoint: "TRIANGLE study: Three arms \u2014 (1) standard cytarabine chemo + ASCT + rituximab maintenance, (2) ibrutinib added to induction + ASCT + ibrutinib/rituximab maintenance, (3) ibrutinib added to induction WITHOUT ASCT + ibrutinib/rituximab maintenance. Ibrutinib addition showed superior efficacy; ASCT benefit remains uncertain with this approach."
    },
    {
      id: 16,
      title: "The Relapsed MCL Conundrum",
      vignette: "A 64-year-old man with MCL initially treated with BR achieved CR lasting 3 years. He now presents with progressive lymphadenopathy and rising LDH. Repeat biopsy confirms MCL relapse. Ki-67 is 50%, TP53 is mutated on sequencing. He is relatively fit with ECOG PS 1.",
      question: "What is the most appropriate treatment for this patient?",
      options: [
        { text: "Acalabrutinib or zanubrutinib (BTK inhibitor)", correct: true, explanation: "BTK inhibitors are the cornerstone of relapsed MCL management. Acalabrutinib (ORR 80%, CR 20%, median PFS 20 months) and zanubrutinib (ORR 87%, CR 30%) are both FDA-approved. Ibrutinib is no longer prescribed for MCL due to label updates. Despite TP53 mutation, BTK inhibitors remain active." },
        { text: "R-CHOP \u00d7 6 cycles", correct: false, explanation: "R-CHOP is not appropriate for relapsed MCL. MCL is considered incurable with conventional chemotherapy and becomes increasingly resistant with each relapse. BTK inhibitors offer superior outcomes in the relapsed setting." },
        { text: "Observation until symptomatic", correct: false, explanation: "Rising LDH and progressive lymphadenopathy indicate active disease requiring treatment. MCL with TP53 mutation and Ki-67 50% is particularly aggressive and warrants prompt therapy." },
        { text: "Repeat BR regimen", correct: false, explanation: "Re-treating with BR after a 3-year remission is suboptimal. BTK inhibitors have become the standard in relapsed MCL and offer better response rates. Novel agents should be used before repeating prior regimens." }
      ],
      category: "MCL",
      difficulty: "Advanced",
      teachingPoint: "Relapsed MCL: BTK inhibitors are the cornerstone \u2014 acalabrutinib (ORR 80%), zanubrutinib (ORR 87%). Pirtobrutinib (noncovalent BTKi) shows promise even after prior BTK exposure (ORR 87%, CR 30%). Duration of first remission <24 months = inferior outcome. R-BAC is highly active post-BTKi (ORR 83%). Brexucabtagene (KTE-X19) CAR-T: ORR 85%, CR 59%."
    },
    {
      id: 17,
      title: "The Secondary CNS Relapse",
      vignette: "A 56-year-old man was treated with R-CHOP for stage IV DLBCL involving the right kidney and bone marrow (IPI 4). He achieved complete remission but did not receive CNS prophylaxis. Fourteen months later, he presents with severe headaches and diplopia. MRI brain shows leptomeningeal enhancement. CSF cytology reveals large atypical B-cells.",
      question: "Regarding secondary CNS lymphoma and CNS-IPI risk stratification, which statement is most accurate?",
      options: [
        { text: "This patient had high-risk features (renal involvement, high IPI) that warranted CNS prophylaxis at diagnosis", correct: true, explanation: "Secondary CNS lymphoma occurs in ~4% of DLBCL patients. The CNS-IPI stratifies patients into low, intermediate, and high risk. Extranodal sites with higher CNS relapse risk include testicular, kidney/adrenal, and bone marrow involvement. This patient had renal and bone marrow involvement with high IPI \u2014 CNS prophylaxis should have been given." },
        { text: "CNS prophylaxis has been proven to prevent CNS relapse in randomised controlled trials", correct: false, explanation: "Retrospective data suggest systemic methotrexate (R-CHOP-M with HD-MTX on day 14) may be effective, but there are no randomised controlled studies proving CNS prophylaxis prevents relapse. The role remains controversial except for testicular DLBCL where it is standard." },
        { text: "Only 0.1% of DLBCL patients develop CNS involvement, so prophylaxis is rarely needed", correct: false, explanation: "Approximately 1% of DLBCL patients have CNS involvement at diagnosis, and ~4% will develop secondary CNS disease. In high-risk subgroups (high CNS-IPI score), the risk is even higher (10.2%). CNS prophylaxis should be considered in selected patients." },
        { text: "All DLBCL patients should receive routine CNS prophylaxis", correct: false, explanation: "CNS prophylaxis is not recommended for all DLBCL patients. The CNS-IPI helps identify high-risk patients. In the R-CHOP era, routine prophylaxis has not been shown to prevent CNS relapse and is therefore targeted to high-risk patients." }
      ],
      category: "CNS Lymphoma",
      difficulty: "Advanced",
      teachingPoint: "CNS-IPI risk factors: age >60, elevated LDH, ECOG >1, stage III-IV, >1 extranodal site, kidney/adrenal involvement. CNS relapse rates: low-risk 0.6%, intermediate 3.4%, high-risk 10.2%. Retrospective data support systemic methotrexate (R-CHOP-M) for high-risk patients. Testicular DLBCL always warrants CNS prophylaxis."
    },
    {
      id: 18,
      title: "The Indolent MCL Surprise",
      vignette: "A 58-year-old woman is found to have an absolute lymphocytosis of 12 \u00d7 10\u2079/L during routine blood work. She is completely asymptomatic with no lymphadenopathy, no hepatosplenomegaly, and a normal LDH. Flow cytometry shows CD5+, CD19+, CD20+, FMC7+, CD23\u2212, CD10\u2212. Cyclin D1 is positive. t(11;14) is confirmed. Ki-67 is 5%. SOX11 is negative.",
      question: "What is the most appropriate management approach?",
      options: [
        { text: "Observation with regular monitoring (watch and wait)", correct: true, explanation: "This is the clinically indolent variant of MCL, characterised by leukocytic non-nodal presentation, lacking SOX11 expression, and derived from post-germinal centre B cells. With no symptoms, low Ki-67, and no significant lymphadenopathy, observation is appropriate. These patients may have a prolonged indolent course." },
        { text: "Immediate BR followed by maintenance rituximab", correct: false, explanation: "Asymptomatic indolent MCL with low disease burden does not require immediate treatment. Observation may be suitable for patients with low tumour burden and the indolent variant, similar to the approach used for asymptomatic CLL." },
        { text: "Intensive induction with cytarabine + ASCT", correct: false, explanation: "This is reserved for symptomatic, high-risk, young/fit MCL patients. This patient has the indolent variant with no symptoms and does not require intensive therapy." },
        { text: "Single-agent ibrutinib", correct: false, explanation: "There is no indication to start treatment in an asymptomatic patient with indolent MCL. BTK inhibitors are used in the relapsed/refractory setting. Additionally, ibrutinib's MCL label has been updated and it is no longer prescribed for MCL." }
      ],
      category: "MCL",
      difficulty: "Advanced",
      teachingPoint: "Indolent MCL: Recognised clinically distinct variant lacking SOX11 expression, derived from post-germinal centre B cells. Typically presents with peripheral blood lymphocytosis and splenomegaly WITHOUT significant lymphadenopathy. Watch-and-wait is appropriate. TP53 mutation should always be tested \u2014 TP53-mutated MCL has a median OS of only 1.8 years regardless of treatment approach."
    },
    {
      id: 19,
      title: "The POLARIX Decision",
      vignette: "A 63-year-old man presents with stage IV DLBCL, ABC subtype by Hans algorithm (CD10\u2212, BCL6+, MUM1+). IPI score is 4 (elevated LDH, stage IV, age >60, ECOG PS 2). He has no significant neuropathy and is fit for intensive treatment. His oncologist is deciding between R-CHOP and the newer Pola-R-CHP regimen.",
      question: "Based on the POLARIX trial, which statement best guides the treatment decision?",
      options: [
        { text: "Pola-R-CHP showed superior 2-year PFS vs R-CHOP, especially in ABC subtype and IPI 3-5", correct: true, explanation: "The POLARIX trial (Tilly et al., NEJM 2022) demonstrated that Pola-R-CHP (polatuzumab vedotin replacing vincristine in R-CHP) showed superior 2-year PFS compared to R-CHOP in previously untreated advanced-stage DLBCL, particularly benefiting patients with ABC subtype and IPI 3-5. No significant OS difference was observed." },
        { text: "Pola-R-CHP showed superior overall survival vs R-CHOP", correct: false, explanation: "While Pola-R-CHP showed superior 2-year PFS (76.7% vs 70.2%), there was no significant difference in overall survival between the two arms. The PFS benefit was most pronounced in the ABC subtype and IPI 3-5 groups." },
        { text: "Pola-R-CHP is recommended for all DLBCL patients regardless of IPI", correct: false, explanation: "The benefit of Pola-R-CHP was most pronounced in patients with IPI 3-5 and ABC subtype. For patients with lower IPI scores (0-1), the incremental benefit may be smaller. Treatment decisions should be individualised." },
        { text: "Pola-R-CHP had significantly more toxicity, limiting its use", correct: false, explanation: "Toxicity was similar between the two arms, with more febrile neutropenia in the Pola-R-CHP group but no significant difference otherwise. Vincristine-related neuropathy is avoided since vincristine is replaced by polatuzumab vedotin." }
      ],
      category: "DLBCL",
      difficulty: "Advanced",
      teachingPoint: "POLARIX trial: Pola-R-CHP vs R-CHOP in untreated advanced DLBCL (IPI \u22652). 2-year PFS: 76.7% vs 70.2% (HR 0.73). Greatest benefit in ABC subtype and IPI 3-5. No OS difference. Polatuzumab vedotin targets CD79b on B-cells. Vincristine is omitted (compounded neuropathy risk avoided)."
    },
    {
      id: 20,
      title: "The T-cell/Histiocyte-Rich Puzzle",
      vignette: "A 50-year-old man presents with generalised lymphadenopathy, hepatosplenomegaly, and bone marrow involvement. Biopsy shows scattered large neoplastic B-cells comprising <10% of the cellular population, surrounded by a predominant background of T-cells and histiocytes. IHC: Neoplastic cells are CD20+, CD79a+. The background T-cells are CD3+. He had a previous diagnosis of nodular lymphocyte predominant Hodgkin lymphoma (NLPHL) 5 years ago.",
      question: "What is the diagnosis and recommended treatment?",
      options: [
        { text: "T-cell/histiocyte-rich large B-cell lymphoma \u2014 treat with R-CHOP", correct: true, explanation: "This is T-cell/histiocyte-rich DLBCL, a rare variant presenting at advanced stage with frequent liver, spleen, and bone marrow involvement. Neoplastic B-cells comprise <10% of the cellular population. It can arise as transformation from NLPHL. Treatment with R-CHOP produces results similar to DLBCL NOS. Notably, CAR T-cell therapy does not appear effective in relapsed/refractory cases of this subtype." },
        { text: "Peripheral T-cell lymphoma \u2014 treat with CHOP", correct: false, explanation: "Despite the T-cell-rich background, the neoplastic cells are B-cells (CD20+, CD79a+). The T-cells and histiocytes are reactive, not neoplastic. This is a B-cell lymphoma subtype, not a T-cell lymphoma." },
        { text: "Classical Hodgkin lymphoma \u2014 treat with ABVD", correct: false, explanation: "While this can histologically resemble nodular lymphocyte predominant Hodgkin lymphoma, the clinical presentation (advanced stage, hepatosplenomegaly, bone marrow involvement) and immunophenotype are consistent with T-cell/histiocyte-rich DLBCL." },
        { text: "Histiocytic sarcoma \u2014 treat with CHOP-based regimen", correct: false, explanation: "The neoplastic cells are B-cells (CD20+), not histiocytes. The histiocytes in T-cell/histiocyte-rich DLBCL are part of the reactive background, not the tumour population." }
      ],
      category: "T/HRLBCL",
      difficulty: "Advanced",
      teachingPoint: "T-cell/histiocyte-rich DLBCL: Rare variant with <10% neoplastic B-cells in a T-cell/histiocyte-rich background. Presents at advanced stage with liver, spleen, and bone marrow involvement. Can transform from NLPHL. Treat with R-CHOP (similar outcomes to DLBCL NOS). CAR-T therapy is NOT effective in relapsed/refractory T/HRLBCL cases."
    }
  ],
  quickFireQuestions: [
    /* ── Original 15 questions ── */
    { q: "What percentage of all NHLs does DLBCL constitute?", a: "~30%", options: ["~10%", "~20%", "~30%", "~50%"] },
    { q: "Which IHC markers define the Hans algorithm?", a: "CD10, BCL6, IRF4/MUM1", options: ["CD5, CD23, cyclin D1", "CD10, BCL6, IRF4/MUM1", "CD20, CD79a, PAX5", "CD10, BCL2, MYC"] },
    { q: "What is the 'starry sky' pattern pathognomonic for?", a: "Burkitt lymphoma", options: ["DLBCL", "Burkitt lymphoma", "MCL", "Follicular lymphoma"] },
    { q: "What translocation defines MCL?", a: "t(11;14) \u2014 cyclin D1 overexpression", options: ["t(8;14) \u2014 MYC", "t(14;18) \u2014 BCL2", "t(11;14) \u2014 cyclin D1 overexpression", "t(2;5) \u2014 ALK"] },
    { q: "What is the Ki-67 in Burkitt lymphoma?", a: "Nearly 100%", options: ["30-40%", "50-60%", "70-80%", "Nearly 100%"] },
    { q: "The POLARIX trial compared R-CHOP to which regimen?", a: "Pola-R-CHP", options: ["DA-EPOCH-R", "R-CHOP + ibrutinib", "Pola-R-CHP", "R-CHOP + lenalidomide"] },
    { q: "Median overall survival of relapsed Burkitt lymphoma?", a: "3-4 months", options: ["3-4 months", "6-8 months", "12 months", "18-24 months"] },
    { q: "What should be withheld before biopsy if PCNSL is suspected?", a: "Corticosteroids", options: ["Anticoagulants", "Corticosteroids", "Rituximab", "Methotrexate"] },
    { q: "What percentage of PCNSL cases are DLBCL?", a: "95%", options: ["60%", "75%", "85%", "95%"] },
    { q: "Which CAR-T product is approved for relapsed MCL?", a: "Brexucabtagene autoleucel (KTE-X19)", options: ["Axicabtagene ciloleucel", "Tisagenlecleucel", "Lisocabtagene maraleucel", "Brexucabtagene autoleucel (KTE-X19)"] },
    { q: "Preferred frontline regimen for PMBCL?", a: "DA-EPOCH-R", options: ["R-CHOP", "DA-EPOCH-R", "Pola-R-CHP", "R-ICE"] },
    { q: "What mutation is a poor prognostic marker in MCL?", a: "TP53", options: ["MYD88", "CD79B", "TP53", "BRAF V600E"] },
    { q: "The FLYER study showed R-CHOP \u00d7 4 + 2R was noninferior to R-CHOP \u00d7 6 in which setting?", a: "Limited-stage DLBCL with favourable prognosis", options: ["Advanced-stage DLBCL", "Limited-stage DLBCL with favourable prognosis", "PMBCL", "Double-hit lymphoma"] },
    { q: "What is the ORR of brexucabtagene autoleucel in relapsed MCL (ZUMA-2)?", a: "85%", options: ["52%", "68%", "85%", "92%"] },
    { q: "Which subtype of DLBCL has a worse prognosis regardless of IPI?", a: "ABC (activated B-cell)", options: ["GCB (germinal centre B-cell)", "ABC (activated B-cell)", "Unclassifiable", "T-cell/histiocyte-rich"] },
    /* ── NEW Quick-Fire Questions from Chapter 45 ── */
    { q: "What is the most important risk factor for PTLD?", a: "Pretransplant EBV mismatch", options: ["Type of immunosuppressive drug", "Age of recipient", "Pretransplant EBV mismatch", "HLA mismatch"] },
    { q: "Which organ transplant has the highest PTLD rate (10-25%)?", a: "Heart/lung", options: ["Kidney", "Liver", "Heart/lung", "Pancreas"] },
    { q: "What percentage of DLBCL cases are limited stage (I-II)?", a: "~45%", options: ["~15%", "~30%", "~45%", "~60%"] },
    { q: "What is the median onset of EBV-negative PTLD after transplant?", a: "50-60 months", options: ["6 months", "12 months", "24-36 months", "50-60 months"] },
    { q: "What drug targets CD79b on B-cells in the Pola-R-CHP regimen?", a: "Polatuzumab vedotin", options: ["Brentuximab vedotin", "Polatuzumab vedotin", "Loncastuximab tesirine", "Tafasitamab"] },
    { q: "In the CORAL study, prior rituximab exposure was associated with what response rate to salvage?", a: "51% (vs 83% rituximab-naïve)", options: ["51% (vs 83% rituximab-naïve)", "70% (vs 80% rituximab-naïve)", "40% (vs 60% rituximab-naïve)", "85% (vs 90% rituximab-naïve)"] },
    { q: "What is the response rate of WBRT in primary CNS lymphoma?", a: "90% (but median survival only 12 months)", options: ["50%", "70%", "90% (but median survival only 12 months)", "95% with durable responses"] },
    { q: "What is MATRix regimen composed of?", a: "MTX, Ara-C, thiotepa, rituximab", options: ["MTX, Ara-C, thioguanine, rituximab", "MTX, Ara-C, thiotepa, rituximab", "MTX, adriamycin, thiotepa, rituximab", "MTX, Ara-C, temozolomide, rituximab"] },
    { q: "Which CALGB study favoured HDC/ASCT over WBRT for PCNSL consolidation?", a: "CALGB 51101", options: ["CALGB 50303", "CALGB 51101", "CALGB 50402", "CALGB 10002"] },
    { q: "What percentage of DLBCL patients are double expressors (MYC + BCL2 by IHC)?", a: "~30%", options: ["~5%", "~15%", "~30%", "~50%"] },
    { q: "MCL represents what percentage of all NHLs?", a: "5-8%", options: ["1-2%", "5-8%", "15-20%", "25-30%"] },
    { q: "What is the MIPI score composed of?", a: "Age, performance status, LDH, WBC count", options: ["Age, LDH, stage, extranodal sites", "Age, performance status, LDH, WBC count", "Age, Ki-67, TP53, stage", "Age, beta-2 microglobulin, LDH, albumin"] },
    { q: "What marker is negative in indolent MCL variant?", a: "SOX11", options: ["Cyclin D1", "CD5", "SOX11", "CD20"] },
    { q: "Median OS of TP53-mutated MCL?", a: "1.8 years", options: ["6 months", "1.8 years", "5 years", "8 years"] },
    { q: "VR-CAP replaces which drug in R-CHOP for MCL?", a: "Vincristine (replaced by bortezomib)", options: ["Cyclophosphamide (replaced by bortezomib)", "Vincristine (replaced by bortezomib)", "Doxorubicin (replaced by bortezomib)", "Prednisone (replaced by bortezomib)"] },
    { q: "What is the ORR of tafasitamab + lenalidomide in R/R DLBCL (L-MIND)?", a: "60%", options: ["28%", "40%", "60%", "85%"] },
    { q: "Ocular involvement occurs in what percentage of PCNSL?", a: "10-20%", options: ["1-2%", "5-8%", "10-20%", "40-50%"] },
    { q: "What Burkitt translocation involves the heavy chain locus?", a: "t(8;14)", options: ["t(8;14)", "t(2;8)", "t(8;22)", "t(11;14)"] },
    { q: "What CD4 threshold increases infectious death risk with rituximab in HIV lymphoma?", a: "<50 cells/\u03bcL", options: ["<50 cells/\u03bcL", "<100 cells/\u03bcL", "<200 cells/\u03bcL", "<350 cells/\u03bcL"] },
    { q: "Pirtobrutinib is classified as what type of BTK inhibitor?", a: "Noncovalent (reversible)", options: ["Covalent irreversible", "Noncovalent (reversible)", "Allosteric", "Bispecific"] },
    { q: "How many WHO classification groups exist for PTLD?", a: "4", options: ["2", "3", "4", "6"] },
    { q: "The 9p24.1 amplification in PMBCL leads to overexpression of which ligand?", a: "PD-L1", options: ["CD30", "PD-L1", "CTLA-4", "CD79b"] },
    { q: "What is the 5-year PFS of the cytarabine-containing arm in the European MCL Network trial?", a: "65%", options: ["40%", "55%", "65%", "80%"] },
    { q: "R-BAC has shown an ORR of 83% in relapsed MCL especially after which prior therapy?", a: "BTK inhibitors", options: ["R-CHOP", "BTK inhibitors", "ASCT", "Lenalidomide"] },
    { q: "What common mutations characterise PCNSL?", a: "CD79B, MYD88, PIM1", options: ["TP53, ATM, NOTCH1", "CD79B, MYD88, PIM1", "BRAF, RAS, MYC", "BCL2, BCL6, IRF4"] },
    { q: "What percentage of DHL patients have MYC and BCL2 rearrangements?", a: "5-10% of all DLBCL", options: ["1-2% of all DLBCL", "5-10% of all DLBCL", "20-25% of all DLBCL", "40-50% of all DLBCL"] }
  ]
};

export const CATEGORY_COLORS = {
  "DLBCL":        { bg: "#1a365d", accent: "#63b3ed", glow: "rgba(99,179,237,0.12)" },
  "PMBCL":        { bg: "#44337a", accent: "#b794f4", glow: "rgba(183,148,244,0.12)" },
  "Burkitt":      { bg: "#742a2a", accent: "#fc8181", glow: "rgba(252,129,129,0.12)" },
  "R/R DLBCL":    { bg: "#744210", accent: "#f6ad55", glow: "rgba(246,173,85,0.12)" },
  "CNS Lymphoma": { bg: "#22543d", accent: "#68d391", glow: "rgba(104,211,145,0.12)" },
  "DHL":          { bg: "#7b341e", accent: "#ed8936", glow: "rgba(237,137,54,0.12)" },
  "MCL":          { bg: "#234e52", accent: "#4fd1c5", glow: "rgba(79,209,197,0.12)" },
  "PTLD":         { bg: "#521b41", accent: "#f687b3", glow: "rgba(246,135,179,0.12)" },
  "HIV Lymphoma": { bg: "#553c28", accent: "#f6e05e", glow: "rgba(246,224,94,0.12)" },
  "MGZL":         { bg: "#3c366b", accent: "#9f7aea", glow: "rgba(159,122,234,0.12)" },
  "T/HRLBCL":     { bg: "#2d3748", accent: "#a0aec0", glow: "rgba(160,174,192,0.12)" },
};

export function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
