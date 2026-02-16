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
    /* ═══ ASH SAP 9th Ed Ch45 MCQ Questions ═══ */
    {
      id: 21,
      title: "PCNSL Consolidation Dilemma",
      vignette: "A 38-year-old man with no comorbidities presents with progressive left-sided weakness and is found to have a 6-cm enhancing right temporal lobe mass on MRI. A craniotomy and brain biopsy are performed, demonstrating diffuse large B-cell lymphoma, non-germinal centre subtype, and he is started on dexamethasone. A PET/CT scan shows no evidence of disease outside of the brain, and an eye examination shows no evidence of ocular involvement. He is treated with 4 cycles of rituximab, high-dose methotrexate, cytarabine, and thiotepa (MATRix). A repeat MRI at the end of treatment demonstrates a complete response to therapy.",
      question: "What is the most appropriate next step?",
      options: [
        { text: "Observation", correct: false, explanation: "Observation is not recommended after induction therapy for PCNSL, given the very high rate of relapse without consolidation. Studies consistently show that consolidation therapy improves progression-free survival." },
        { text: "Etoposide and cytarabine consolidation", correct: false, explanation: "While etoposide and cytarabine have activity, the CALGB 51101 trial showed that autologous SCT with thiotepa/carmustine conditioning was superior to etoposide/cytarabine consolidation (2-year PFS 73% vs 51%)." },
        { text: "Whole-brain radiation therapy", correct: false, explanation: "Consolidative WBRT has a 90% response rate but causes significant long-term cognitive impairment. The IELSG32 trial showed ASCT consolidation had comparable efficacy with significantly less neurotoxicity compared to WBRT." },
        { text: "Autologous stem cell transplantation with thiotepa/carmustine conditioning", correct: true, explanation: "The IELSG32 trial found MATRix therapy to be the superior induction regimen, and consolidation with autologous SCT with thiotepa/carmustine conditioning demonstrated comparable efficacy to WBRT but with significantly less cognitive toxicity. CALGB 51101 confirmed ASCT superiority over etoposide/cytarabine (2-year PFS 73% vs 51%)." },
        { text: "Rituximab and lenalidomide maintenance", correct: false, explanation: "Rituximab and lenalidomide maintenance has been studied in relapsed PCNSL but is not considered a standard initial consolidation strategy after MATRix induction." }
      ],
      category: "CNS Lymphoma",
      difficulty: "Advanced",
      teachingPoint: "PCNSL consolidation after MATRix induction: ASCT with thiotepa/carmustine is preferred over WBRT (less neurotoxicity, comparable efficacy — IELSG32 trial) and over etoposide/cytarabine (superior PFS — CALGB 51101). Observation alone carries an unacceptably high relapse rate."
    },
    {
      id: 22,
      title: "Low-Risk Burkitt Response",
      vignette: "A 61-year-old man presents with a 1-month history of rapidly progressive right axillary swelling and pain. A core biopsy is performed and demonstrates a CD10+ B-cell lymphoma with Ki-67 100% and a starry sky pattern consistent with Burkitt lymphoma. A PET/CT scan demonstrated a 7-cm FDG-avid axillary mass. Lactate dehydrogenase (LDH) was within normal limits, and a bone marrow aspiration and biopsy were negative for disease. He has no central nervous system symptoms, and a lumbar puncture was negative for lymphomatous involvement. Dose-adjusted rituximab, etoposide, prednisone, vincristine, cyclophosphamide, and doxorubicin (DA-R-EPOCH) therapy is started, and a follow-up PET/CT scan after 2 cycles demonstrates a complete response.",
      question: "What is the most appropriate next step?",
      options: [
        { text: "4 more cycles of DA-R-EPOCH", correct: false, explanation: "For low-risk Burkitt lymphoma achieving complete response after 2 cycles of DA-R-EPOCH, only 1 additional cycle is needed (total 3 cycles). More cycles add toxicity without improving outcomes." },
        { text: "1 more cycle of DA-R-EPOCH", correct: true, explanation: "This patient has low-risk Burkitt lymphoma (normal LDH, nonbulky, nonabdominal disease). For patients in complete response after 2 cycles of DA-R-EPOCH, a third cycle with no further consolidation is indicated. CNS prophylaxis is not needed in low-risk disease. Outcomes without consolidation radiation are excellent." },
        { text: "1 more cycle of DA-R-EPOCH followed by consolidation radiation", correct: false, explanation: "Consolidation radiation is not necessary in Burkitt lymphoma treated with DA-R-EPOCH. Outcomes without radiation have been excellent in published studies." },
        { text: "4 more cycles of DA-R-EPOCH with intrathecal methotrexate", correct: false, explanation: "Intrathecal CNS prophylaxis is not routinely needed in low-risk Burkitt lymphoma without CNS involvement. Furthermore, 4 additional cycles is excessive for a patient already in CR." },
        { text: "1 more cycle of DA-R-EPOCH followed by 2 cycles of high-dose methotrexate", correct: false, explanation: "High-dose methotrexate CNS prophylaxis is reserved for high-risk patients. This patient has low-risk disease with negative lumbar puncture, so additional CNS-directed therapy is not indicated." }
      ],
      category: "Burkitt",
      difficulty: "Advanced",
      teachingPoint: "Burkitt lymphoma risk stratification guides therapy duration with DA-R-EPOCH. Low-risk (normal LDH, nonbulky, nonabdominal): 3 total cycles if CR after 2. CNS prophylaxis is not needed in low-risk disease. Radiation consolidation is unnecessary with DA-R-EPOCH."
    },
    {
      id: 23,
      title: "The Leukemic Phase MCL",
      vignette: "A 63-year-old woman was referred to a haematologist after incidentally being found to have a significant leukocytosis with a white blood count of 21,000/mm³ before elective surgery. Flow cytometry of the peripheral blood demonstrated a κ-restricted B-cell population with CD5 expression. A bone marrow aspiration and biopsy were done, showing involvement of a CD5+ B-cell lymphoproliferative disorder; cyclin D1 was positive by immunohistochemistry, and a t(11;14) was identified on FISH analysis from the marrow aspirate. Ki-67 was 5%, and haemoglobin, platelets, and LDH were within normal limits. A staging PET/CT scan showed no evidence of lymphadenopathy, with mild splenomegaly measuring 13 cm.",
      question: "What is the most appropriate next step?",
      options: [
        { text: "Rituximab and bendamustine followed by autologous stem cell transplantation and rituximab maintenance", correct: false, explanation: "This patient has indolent, leukemic-phase MCL (low Ki-67 5%, no lymphadenopathy, likely SOX11-negative). Intensive induction therapy with ASCT is not warranted for asymptomatic indolent MCL." },
        { text: "Zanubrutinib", correct: false, explanation: "Zanubrutinib is a BTK inhibitor appropriate for relapsed MCL, but not for initial management of asymptomatic indolent MCL. This patient has low-risk disease that can be observed." },
        { text: "3 cycles of alternating R-CHOP/R-DHAP with ibrutinib added to R-CHOP", correct: false, explanation: "This is an intensive approach tested in the TRIANGLE study for symptomatic, higher-risk MCL. It is not appropriate for asymptomatic indolent MCL with low Ki-67." },
        { text: "R-CHOP for 6 cycles", correct: false, explanation: "R-CHOP alone is not the standard for MCL, and furthermore, this patient has asymptomatic indolent disease that does not require immediate treatment." },
        { text: "Observation", correct: true, explanation: "This patient has mantle cell lymphoma in a leukemic phase, given the immunophenotype and IGH-CCND1 fusion. She has low-risk disease, given the low Ki-67 (5%) and lack of lymphadenopathy; these cases are frequently SOX11-negative as well. Watch and wait (observation) is appropriate for asymptomatic indolent MCL." }
      ],
      category: "MCL",
      difficulty: "Advanced",
      teachingPoint: "Indolent leukemic-phase MCL: characterised by low Ki-67, frequently SOX11-negative, presenting with peripheral blood and bone marrow involvement WITHOUT lymphadenopathy. Observation is appropriate. This parallels the watch-and-wait approach used in asymptomatic CLL. Always test TP53 — mutated MCL has median OS of only 1.8 years."
    },
    {
      id: 24,
      title: "Advanced DLBCL Treatment Selection",
      vignette: "A 51-year-old man sought medical attention for a painless groin mass. On physical examination, he was found to have a 4-cm left inguinal mass that was fixed and nontender; a core biopsy specimen demonstrated diffuse large B-cell lymphoma (DLBCL), germinal centre subtype. FISH testing was negative for MYC and BCL2 rearrangements. A staging PET/CT scan identified lymphadenopathy above and below the diaphragm with no extranodal involvement. White blood count, haemoglobin, platelets, and serum lactate dehydrogenase are all within normal limits. He is asymptomatic from his disease and still working full-time.",
      question: "What is the most appropriate next step in management?",
      options: [
        { text: "R-CHOP for 6 cycles", correct: true, explanation: "This patient has advanced-stage DLBCL (nodal disease above and below the diaphragm). Standard therapy has long been R-CHOP for 6 cycles. DA-R-EPOCH was compared with R-CHOP in CALGB 50303 and conferred increased toxicity without clinical benefit. Pola-R-CHP showed superior PFS in the POLARIX trial, but only patients with IPI ≥2 were included; this patient has IPI 1, so R-CHOP remains the standard." },
        { text: "DA-EPOCH-R for 6 cycles", correct: false, explanation: "DA-EPOCH-R was compared with R-CHOP in the CALGB 50303 trial and did not show improved outcomes, with more toxicity. DA-EPOCH-R is preferred for PMBCL and double-hit lymphoma, not standard DLBCL." },
        { text: "R-CHOP plus ibrutinib for 6 cycles", correct: false, explanation: "Adding ibrutinib to R-CHOP did not improve outcomes and was associated with increased toxicity. This combination is not recommended for DLBCL." },
        { text: "R-CHOP for 4 cycles", correct: false, explanation: "Abbreviated R-CHOP (4 cycles) is for limited-stage, nonbulky DLBCL with favourable IPI. This patient has advanced-stage disease requiring 6 full cycles." },
        { text: "R-CHOP plus lenalidomide for 6 cycles", correct: false, explanation: "R-CHOP with lenalidomide was not superior to R-CHOP alone in the ROBUST trial for ABC-type DLBCL. This combination is not standard of care." }
      ],
      category: "DLBCL",
      difficulty: "Standard",
      teachingPoint: "Advanced-stage DLBCL with IPI 1: R-CHOP × 6 remains standard. POLARIX trial (Pola-R-CHP) showed PFS benefit primarily in IPI ≥2 and ABC subtype. CALGB 50303: DA-EPOCH-R = more toxicity, no benefit vs R-CHOP. ROBUST: R-CHOP + lenalidomide not superior in ABC-DLBCL."
    },
    {
      id: 25,
      title: "HIV-Associated Lymphoma Management",
      vignette: "A 39-year-old man presented to his primary care physician with fevers, night sweats, and a 50-lb (22.7-kg) weight loss over the preceding 6 months. On physical exam, he appeared to be emaciated, and was noted to have significant anaemia. Laboratory findings: Haemoglobin 9 g/dL, White blood cells 3000/mm³, Platelet count 400,000/mm³, Serum LDH 550 U/L. He had a palpable left supraclavicular lymph node, and an urgent core needle biopsy demonstrated germinal centre B-cell-like diffuse large B-cell lymphoma (DLBCL). A PET/CT scan demonstrated lymphadenopathy above and below the diaphragm. HIV testing is done, and he is found to be HIV-positive with a CD4 count of 65/mm³.",
      question: "What is the most appropriate next step?",
      options: [
        { text: "R-EPOCH with initiation of ART after completion of chemoimmunotherapy", correct: false, explanation: "Delaying ART until after chemotherapy is harmful. ART should be started concurrently with chemotherapy as it is associated with better CR rates, faster immune recovery, and improved overall survival." },
        { text: "R-CHOP with concurrent ART", correct: false, explanation: "R-CHOP is considered an inferior regimen compared with R-EPOCH in HIV-associated lymphomas. R-EPOCH is preferred in this setting due to better outcomes." },
        { text: "R-EPOCH for 6 cycles with concurrent ART", correct: true, explanation: "HIV-associated lymphomas are almost always DLBCL or Burkitt lymphoma and are typically at an advanced stage. R-CHOP is considered inferior compared with R-EPOCH in this setting. ART should be initiated concurrently — it improves CR rates and immune reconstitution. Although data suggest increased fatal complications with rituximab when CD4 <50/mm³, this patient has CD4 of 65, so rituximab should be included. Newer ART formulations have fewer drug-drug interactions." },
        { text: "R-CHOP with ART after completion of therapy", correct: false, explanation: "This has two problems: R-CHOP is inferior to R-EPOCH in HIV-associated lymphoma, and ART should never be delayed until after chemotherapy completion." },
        { text: "CODOX-M/IVAC with concurrent ART", correct: false, explanation: "CODOX-M/IVAC is an appropriate regimen for Burkitt lymphoma but is not a standard treatment option for DLBCL. This patient has GCB-type DLBCL." }
      ],
      category: "HIV Lymphoma",
      difficulty: "Advanced",
      teachingPoint: "HIV-associated DLBCL: R-EPOCH with concurrent ART is preferred. R-CHOP is inferior in this setting. ART should NEVER be delayed — concurrent use improves outcomes. Rituximab is safe with CD4 >50/mm³. CD4 <50 may increase fatal infectious complications with rituximab."
    },
    {
      id: 26,
      title: "Young Woman with PMBCL",
      vignette: "A 28-year-old woman presented to the emergency department with severe dyspnoea on exertion and chest pressure. A chest X-ray demonstrated a large mediastinal mass, and a CT angiogram of the chest demonstrated a 12-cm mediastinal mass with extensive thrombosis of both internal jugular veins. A core biopsy was performed and demonstrated a CD20+ B-cell lymphoma with concurrent expression of CD30+ and PD-L1, consistent with primary mediastinal B-cell lymphoma (PMBCL). She is given systemic steroids and anticoagulation and is discharged. A PET/CT scan done the following week demonstrates no evidence of disease outside of the mediastinum.",
      question: "What is the most appropriate therapy?",
      options: [
        { text: "DA-EPOCH-R for 6 cycles with planned consolidation radiation", correct: false, explanation: "With DA-EPOCH-R, most patients do NOT need consolidation radiation therapy. The phase 2 trial from NIH showed only 2/51 patients required RT. Planned consolidation radiation is unnecessary and exposes this young woman to late radiation risks." },
        { text: "DA-EPOCH-R for 6 cycles without consolidation radiation", correct: true, explanation: "This patient has newly diagnosed PMBCL. Treatment consists of 6 cycles of either R-CHOP or DA-R-EPOCH. Importantly, patients with DA-R-EPOCH largely do not need consolidation radiation therapy as per the NIH phase 2 trial. This spares a 28-year-old woman from long-term radiation risks including breast cancer and cardiopulmonary disease." },
        { text: "R-CHOP for 4 cycles followed by consolidation radiation", correct: false, explanation: "R-CHOP for 4 cycles is insufficient for PMBCL. Standard therapy is 6 cycles of chemoimmunotherapy. Abbreviated courses risk inferior outcomes in this aggressive entity." },
        { text: "Pembrolizumab", correct: false, explanation: "Pembrolizumab is approved for relapsed PMBCL but not for untreated disease. While PMBCL has 9p24.1 amplification driving PD-L1 expression, frontline therapy remains chemoimmunotherapy." },
        { text: "Brentuximab vedotin with nivolumab", correct: false, explanation: "This combination has clinical data supporting use in relapsed but not newly diagnosed PMBCL, and it is not an FDA-approved combination for this entity." }
      ],
      category: "PMBCL",
      difficulty: "Standard",
      teachingPoint: "Newly diagnosed PMBCL: DA-R-EPOCH × 6 without consolidation RT is preferred (NIH phase 2 trial — only 2/51 needed RT). Avoids long-term radiation risks in young patients. Pembrolizumab is for relapsed PMBCL only. The 9p24.1 amplification drives PD-L1 overexpression — a therapeutic target in relapsed disease."
    },
    /* ═══ ORIGINAL NEW CLINICAL SCENARIOS ═══ */
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
    },
    /* ═══ DIAGNOSTIC PATHOLOGY MCQs for Haematopathology Residents ═══ */
    {
      id: 27,
      title: "The Hans Algorithm Challenge",
      vignette: "A 64-year-old man undergoes excisional biopsy of a 5 cm cervical lymph node. Histology shows effacement of architecture by sheets of large lymphoid cells with a diffuse growth pattern. IHC panel: CD20+, CD10−, BCL6+, IRF4/MUM1+, CD5−, cyclin D1−. Ki-67 is 70%. FISH shows no MYC, BCL2, or BCL6 rearrangements.",
      question: "Based on the Hans algorithm, what is the cell-of-origin classification, and why is this clinically significant?",
      options: [
        { text: "Non-GCB (ABC) subtype — associated with inferior prognosis and greater benefit from Pola-R-CHP", correct: true, explanation: "The Hans algorithm classifies DLBCL as GCB if CD10+ OR if CD10−/BCL6+/MUM1−. This case is CD10−/BCL6+/MUM1+, making it non-GCB (ABC). ABC-DLBCL has inferior outcomes regardless of IPI, and the POLARIX trial showed the greatest PFS benefit of Pola-R-CHP over R-CHOP in the ABC subtype with IPI ≥2." },
        { text: "GCB subtype — BCL6 positivity alone defines GCB origin", correct: false, explanation: "BCL6 alone does not classify as GCB. The Hans algorithm requires CD10+ OR (CD10−/BCL6+/MUM1−). Since MUM1 is positive here, this is non-GCB despite BCL6 positivity." },
        { text: "Unclassifiable — FISH is needed to determine cell of origin", correct: false, explanation: "The Hans algorithm uses IHC (CD10, BCL6, IRF4/MUM1), not FISH, to determine cell of origin. FISH is used separately to detect gene rearrangements for DHL classification." },
        { text: "GCB subtype — absence of MYC rearrangement indicates germinal centre origin", correct: false, explanation: "MYC rearrangement status does not determine cell of origin. The Hans algorithm is based on CD10, BCL6, and IRF4/MUM1 expression patterns." }
      ],
      category: "DLBCL",
      difficulty: "Advanced",
      teachingPoint: "Hans algorithm: CD10+ → GCB. If CD10−: BCL6+/MUM1− → GCB; BCL6+/MUM1+ or BCL6−/MUM1+ → non-GCB (ABC). Sensitivity: 71% GCB, 88% non-GCB. Newer assays like Lymph2Cx enable real-time COO from FFPE with higher accuracy."
    },
    {
      id: 28,
      title: "Double Expressor vs Double Hit",
      vignette: "A 59-year-old woman is diagnosed with DLBCL after an excisional biopsy of a retroperitoneal mass. IHC shows: CD20+, CD10+, BCL6+, MUM1−, MYC protein (55% positive), BCL2 protein (85% positive). The pathologist reports this as a 'double expressor' lymphoma. The treating haematologist asks whether FISH testing for MYC and BCL2 rearrangements should be performed.",
      question: "What is the key diagnostic distinction between double expressor and double-hit lymphoma, and what is the clinical implication?",
      options: [
        { text: "Double expressor = IHC protein co-expression only; double hit = FISH-confirmed gene rearrangements — FISH is essential to distinguish them as DHL requires more intensive therapy", correct: true, explanation: "Double expressor lymphoma (DEL) is defined by MYC and BCL2 protein co-expression by IHC (~30% of DLBCL) — it has inferior prognosis but is still classified as DLBCL-NOS. Double-hit lymphoma (5-10% of DLBCL) requires FISH-confirmed MYC AND BCL2 gene rearrangements and is reclassified as high-grade B-cell lymphoma in WHO-HAEM5. DHL requires DA-EPOCH-R rather than R-CHOP." },
        { text: "Both terms are interchangeable — they describe the same entity", correct: false, explanation: "These are distinct entities. Double expressor = protein overexpression by IHC. Double hit = gene rearrangements by FISH. They carry different prognoses and different WHO classifications." },
        { text: "FISH testing is unnecessary because IHC protein expression correlates perfectly with gene rearrangements", correct: false, explanation: "MYC protein expression occurs in about one-third of cases as a 'double expressor' but only 5-10% have actual FISH rearrangements (double-hit). IHC does not reliably predict FISH status; therefore FISH testing is essential." },
        { text: "Double hit = IHC co-expression; double expressor = FISH rearrangements", correct: false, explanation: "This is reversed. Double expressor = IHC protein co-expression. Double hit = FISH-confirmed gene rearrangements. DHL is the more aggressive entity requiring intensive therapy." }
      ],
      category: "DHL",
      difficulty: "Advanced",
      teachingPoint: "Double expressor (IHC): MYC+ and BCL2+ protein = ~30% of DLBCL, worse prognosis but still DLBCL-NOS. Double hit (FISH): MYC and BCL2 gene rearrangements = 5-10%, reclassified as high-grade B-cell lymphoma (WHO-HAEM5). Triple-hit adds BCL6 rearrangement. Always do FISH if MYC protein is expressed on IHC."
    },
    {
      id: 29,
      title: "The Blastoid MCL Dilemma",
      vignette: "A 57-year-old man presents with rapidly progressive lymphadenopathy. Lymph node biopsy shows a diffuse infiltrate of medium-to-large lymphoid cells with blastoid morphology, high mitotic rate, and Ki-67 of 85%. IHC: CD20+, CD5+, CD10−, CD23−, cyclin D1+. FISH confirms t(11;14). TP53 mutation is detected on next-generation sequencing.",
      question: "What is the diagnosis and what is the prognostic significance of this morphologic variant?",
      options: [
        { text: "Blastoid variant MCL — aggressive subtype with TP53 mutation conferring median OS of only 1.8 years and resistance to conventional chemotherapy", correct: true, explanation: "This is blastoid variant MCL, characterised by large blastoid cells, high Ki-67 (>30%), and frequent TP53 mutations. TP53-mutated MCL has a distinctively aggressive course with median OS of only 1.8 years regardless of treatment. The blastoid morphology with high proliferative index and TP53 mutation identifies the most aggressive MCL subgroup. Novel agents (BTK inhibitors, CAR-T) offer some hope in this setting." },
        { text: "DLBCL with aberrant CD5 expression — treat with R-CHOP", correct: false, explanation: "CD5+ DLBCL is a diagnostic consideration, but cyclin D1 positivity and t(11;14) by FISH definitively identify this as MCL, not DLBCL. The blastoid morphology can mimic DLBCL, making IHC and FISH essential." },
        { text: "Burkitt lymphoma — the high Ki-67 is diagnostic", correct: false, explanation: "While Burkitt has Ki-67 ~100%, the immunophenotype here (CD5+, CD10−, cyclin D1+, t(11;14)) is classic for MCL, not Burkitt (which is CD10+, CD5−, t(8;14)). Ki-67 alone does not define Burkitt lymphoma." },
        { text: "Indolent MCL with unusually high Ki-67 — observe and watch", correct: false, explanation: "This is the opposite of indolent MCL. Indolent MCL has low Ki-67 (≤10%), is SOX11-negative, and lacks blastoid morphology. This blastoid variant with Ki-67 85% and TP53 mutation is the most aggressive MCL subtype." }
      ],
      category: "MCL",
      difficulty: "Advanced",
      teachingPoint: "Blastoid MCL: Large cells, high Ki-67 (>30%), frequent TP53 mutations. TP53-mutated MCL = median OS 1.8 years. Distinguish from CD5+ DLBCL by cyclin D1/t(11;14). Indolent MCL (SOX11−, low Ki-67) is the polar opposite. Always test TP53 at diagnosis AND relapse — it guides prognosis and therapy."
    },
    {
      id: 30,
      title: "The Starry Sky Diagnostic Puzzle",
      vignette: "A 22-year-old African male presents with a jaw mass that has been growing rapidly over 2 weeks. Biopsy shows a diffuse infiltrate of medium-sized monomorphic lymphoid cells with basophilic cytoplasm, prominent cytoplasmic vacuoles, and an extremely high mitotic rate. Numerous tingible body macrophages are scattered throughout, creating a characteristic pattern. IHC: CD20+, CD10+, BCL6+, BCL2−, Ki-67 approaching 100%. EBER ISH is positive.",
      question: "What is the most likely diagnosis, and which cytogenetic finding would confirm it?",
      options: [
        { text: "Endemic Burkitt lymphoma — t(8;14)(q24;q32) involving MYC and immunoglobulin heavy chain locus", correct: true, explanation: "This is classic endemic Burkitt lymphoma: African child/young adult with jaw mass, 'starry sky' pattern (tingible body macrophages phagocytosing apoptotic cells), medium-sized cells with Ki-67 ~100%, EBV-positive. The hallmark translocation t(8;14) juxtaposes MYC with the IgH locus. Variant translocations t(2;8) and t(8;22) involve light chain loci. Nearly all endemic cases are EBV+, while sporadic cases are EBV+ in only a minority." },
        { text: "DLBCL with high proliferative index — t(14;18) involving BCL2", correct: false, explanation: "The morphology (medium-sized, monomorphic cells, starry sky pattern, Ki-67 ~100%) and clinical presentation (jaw mass in young African male) are classic for Burkitt, not DLBCL. t(14;18) is associated with follicular lymphoma." },
        { text: "High-grade B-cell lymphoma NOS — t(11;14) involving cyclin D1", correct: false, explanation: "t(11;14) is the hallmark of MCL, not high-grade B-cell lymphoma NOS. This case has all the features of Burkitt lymphoma. High-grade B-cell lymphoma NOS has features intermediate between DLBCL and BL but lacks MYC/BCL2 rearrangements." },
        { text: "Lymphoblastic lymphoma — t(12;21) involving TEL-AML1", correct: false, explanation: "Lymphoblastic lymphoma presents with TdT+ immature lymphoblasts, unlike the mature B-cell markers seen here (CD20+, CD10+). t(12;21) is associated with B-ALL in children, not Burkitt lymphoma." }
      ],
      category: "Burkitt",
      difficulty: "Standard",
      teachingPoint: "Burkitt diagnostic triad: (1) 'Starry sky' pattern from tingible body macrophages, (2) Ki-67 ~100%, (3) cMYC translocation — t(8;14) in 80%, variants t(2;8) or t(8;22). BCL2 is typically NEGATIVE. Endemic (EBV+, jaw) vs sporadic (abdominal) vs HIV-associated. Medium-sized monomorphic cells with basophilic cytoplasm and cytoplasmic vacuoles."
    },
    {
      id: 31,
      title: "The PMBCL vs cHL Conundrum",
      vignette: "A 30-year-old woman presents with a 10 cm anterior mediastinal mass and SVC syndrome. Core biopsy shows large B-cells with clear cytoplasm embedded in compartmentalising fibrosis (sclerosis). IHC: CD19+, CD20+, weak CD30+, CD15−, surface Ig negative, PAX5 strongly positive. Gene expression profiling shows a unique signature with similarity to classical Hodgkin lymphoma. The tumour shows 9p24.1 amplification by FISH.",
      question: "What is the diagnosis, and what is the therapeutic relevance of the 9p24.1 amplification?",
      options: [
        { text: "Primary mediastinal large B-cell lymphoma — 9p24.1 drives PD-L1 overexpression, therapeutically targetable with checkpoint inhibitors in relapsed disease", correct: true, explanation: "This is PMBCL: young woman, anterior mediastinal mass, sclerosis, lacks surface Ig, CD19/CD20+, weak CD30+, CD15−. PMBCL is molecularly distinct from DLBCL but shares gene expression features with cHL. The 9p24.1 amplification drives PD-L1/PD-L2 overexpression, which is therapeutically targetable — pembrolizumab is FDA-approved for relapsed PMBCL." },
        { text: "Classical Hodgkin lymphoma, nodular sclerosis — CD30 positivity is diagnostic", correct: false, explanation: "While PMBCL shows weak CD30 similar to cHL, the strong CD20/CD19 positivity, strong PAX5, and CD15 negativity distinguish it from cHL. In cHL, Reed-Sternberg cells are typically CD30+, CD15+, CD20 weak/variable, PAX5 weak." },
        { text: "Mediastinal grey zone lymphoma — mixed features require ABVD", correct: false, explanation: "MGZL has truly ambiguous features between cHL and DLBCL/PMBCL. This case has a clear B-cell phenotype (strong CD20/CD19, PAX5+, CD15−) consistent with PMBCL. MGZL should be treated with DLBCL-type regimens, not ABVD." },
        { text: "T-cell-rich large B-cell lymphoma — treat with CHOP", correct: false, explanation: "T-cell/histiocyte-rich DLBCL has <10% neoplastic B-cells in a T-cell/histiocyte background with hepatosplenomegaly. This case shows abundant neoplastic cells with sclerosis in a mediastinal mass — classic PMBCL." }
      ],
      category: "PMBCL",
      difficulty: "Advanced",
      teachingPoint: "PMBCL IHC: CD19+, CD20+, weak CD30+, CD15−, surface Ig−, PAX5 strong. Sclerosis is hallmark. 9p24.1 amplification → PD-L1/PD-L2 overexpression → pembrolizumab in relapsed disease. Gene expression profile shares more with cHL than DLBCL. Distinguish from cHL (CD15+, CD20 weak, PAX5 weak) and MGZL (ambiguous phenotype)."
    },
    {
      id: 32,
      title: "The Post-Transplant Pathology",
      vignette: "A renal transplant recipient, 4 years post-transplant on tacrolimus and mycophenolate, develops multiple GI tract lesions. Biopsy shows a polymorphous lymphoid infiltrate with a mixture of small and large lymphocytes, immunoblasts, and plasma cells. There is evidence of tissue destruction. EBER in-situ hybridisation shows widespread EBV positivity. The infiltrate does not fulfil criteria for any recognised lymphoma subtype.",
      question: "What is the WHO classification of this lesion, and what distinguishes it from other PTLD categories?",
      options: [
        { text: "Polymorphic PTLD — destructive heterogeneous infiltrate that does not meet criteria for a specific lymphoma subtype", correct: true, explanation: "WHO classifies PTLD into 4 groups: (1) Nondestructive (plasmacytic hyperplasia, infectious mononucleosis-like, florid follicular hyperplasia), (2) Polymorphic (destructive, mixed cell types, doesn't fulfil lymphoma criteria), (3) Monomorphic (fulfils criteria for a recognised B or T-cell lymphoma), (4) cHL PTLD. This case shows a destructive polymorphous infiltrate with EBV+ but doesn't meet criteria for any specific lymphoma — classic polymorphic PTLD." },
        { text: "Nondestructive PTLD — any EBV-positive post-transplant lymphoproliferation is nondestructive", correct: false, explanation: "Nondestructive PTLD includes plasmacytic hyperplasia, infectious mono-like, and florid follicular hyperplasia — WITHOUT tissue destruction. This case shows tissue destruction, placing it in the polymorphic category." },
        { text: "Monomorphic PTLD — all GI tract PTLDs are monomorphic by definition", correct: false, explanation: "GI tract location does not determine PTLD subtype. Monomorphic PTLD fulfils criteria for a recognised lymphoma (e.g., DLBCL, Burkitt). This polymorphous infiltrate with mixed cell types that doesn't meet lymphoma criteria is polymorphic PTLD." },
        { text: "EBV-positive mucocutaneous ulcer — this is a distinct entity", correct: false, explanation: "EBV-positive mucocutaneous ulcer typically presents as cutaneous or mucosal ulcers with an indolent course and responds to reduction of immunosuppression. It does not present as multiple GI masses with tissue-destructive polymorphic infiltrates." }
      ],
      category: "PTLD",
      difficulty: "Advanced",
      teachingPoint: "PTLD WHO classification: (1) Nondestructive — no tissue destruction (plasmacytic hyperplasia, IM-like, florid FH), (2) Polymorphic — destructive but doesn't fulfil lymphoma criteria, (3) Monomorphic — meets criteria for specific B/T-cell lymphoma or plasma cell neoplasm, (4) cHL PTLD. EBV status is assessed at diagnosis. Indolent small B-cell lymphomas (except EBV+ MZL) are NOT considered PTLD."
    },
    {
      id: 33,
      title: "The CD5-Positive Large B-Cell Dilemma",
      vignette: "A 70-year-old woman presents with generalised lymphadenopathy and bone marrow involvement. Lymph node biopsy shows large cells with a diffuse pattern. IHC: CD20+, CD5+, CD10−, CD23−, BCL6+, MUM1+, cyclin D1 NEGATIVE. Ki-67 is 60%. FISH is negative for t(11;14) and MYC rearrangements.",
      question: "What is the key immunohistochemical finding that distinguishes this diagnosis from blastoid MCL?",
      options: [
        { text: "Cyclin D1 negativity with absent t(11;14) — rules out MCL and supports CD5+ DLBCL", correct: true, explanation: "CD5 expression occurs in approximately 10% of DLBCL cases and can mimic blastoid MCL. The critical distinction is cyclin D1: MCL is virtually always cyclin D1+ with t(11;14), while CD5+ DLBCL is cyclin D1 negative. This case shows CD5+ large B-cells but negative cyclin D1 and no t(11;14), confirming CD5+ DLBCL. CD5+ DLBCL tends to have worse prognosis than CD5− DLBCL." },
        { text: "CD23 negativity — this proves it is MCL", correct: false, explanation: "Both MCL and CD5+ DLBCL can be CD23 negative. CD23 negativity helps distinguish MCL from CLL (which is CD23+), but does not distinguish between MCL and CD5+ DLBCL. Cyclin D1/t(11;14) status is the definitive differentiator." },
        { text: "Ki-67 of 60% — this is too high for DLBCL and indicates MCL", correct: false, explanation: "Ki-67 of 60% is common in DLBCL. Blastoid MCL can have Ki-67 >30%, but Ki-67 alone cannot distinguish between MCL and DLBCL. Cyclin D1 and FISH for t(11;14) are the definitive tests." },
        { text: "BCL6 positivity — this excludes MCL and confirms follicular lymphoma origin", correct: false, explanation: "While BCL6 is more common in DLBCL, it does not exclude MCL. BCL6 positivity supports a DLBCL diagnosis but is not the definitive differentiator — cyclin D1 and t(11;14) status are the gold standard for excluding MCL." }
      ],
      category: "DLBCL",
      difficulty: "Advanced",
      teachingPoint: "CD5+ DLBCL (10% of DLBCL): Must distinguish from blastoid MCL. KEY differentiator: MCL = cyclin D1+ and t(11;14)+; CD5+ DLBCL = cyclin D1− and t(11;14)−. CD23 negativity does NOT distinguish them (both can be CD23−). CD5+ DLBCL has worse prognosis than CD5− DLBCL. Always test cyclin D1 and FISH for t(11;14) when CD5 is positive in large B-cell lymphoma."
    },
    {
      id: 34,
      title: "The PCNSL Immunophenotype",
      vignette: "A 65-year-old immunocompetent woman presents with progressive cognitive decline and personality changes. MRI shows a solitary ring-enhancing lesion in the corpus callosum crossing the midline. No steroids have been given. Stereotactic biopsy shows sheets of large lymphoid cells in a perivascular pattern. IHC: CD20+, CD10−, BCL6+, MUM1+, CD79B mutation detected on NGS, MYD88 L265P mutation positive.",
      question: "What molecular features of this tumour are characteristic of PCNSL and distinguish it from systemic DLBCL?",
      options: [
        { text: "CD79B and MYD88 mutations are frequently co-occurring in PCNSL (ABC subtype) — these are hallmarks of the unique molecular pathogenesis", correct: true, explanation: "95% of PCNSL are DLBCL, typically ABC subtype. Mutations in CD79B, MYD88 (especially L265P), and PIM1 are frequently observed and represent the unique molecular signature of PCNSL. The non-GCB/ABC phenotype (CD10−, BCL6+, MUM1+) is typical. These mutations activate the NF-κB and JAK-STAT pathways, which may have therapeutic implications (ibrutinib, lenalidomide, PD-1 inhibitors)." },
        { text: "GCB phenotype with BCL2 rearrangement is the hallmark of PCNSL", correct: false, explanation: "PCNSL is predominantly ABC/non-GCB subtype, NOT GCB. BCL2 rearrangement is not a hallmark of PCNSL. The characteristic molecular features are CD79B, MYD88, and PIM1 mutations." },
        { text: "TP53 mutation is the defining molecular feature of PCNSL", correct: false, explanation: "While TP53 mutations can occur in PCNSL, they are not the defining feature. CD79B, MYD88, and PIM1 mutations are the most characteristic molecular abnormalities of PCNSL, reflecting its ABC-type origin." },
        { text: "EBV positivity is required for PCNSL diagnosis in immunocompetent patients", correct: false, explanation: "EBV-associated PCNSL occurs primarily in immunocompromised patients (HIV, post-transplant). In immunocompetent patients, PCNSL is typically EBV-negative. This case correctly shows EBV is not mentioned as the patient is immunocompetent." }
      ],
      category: "CNS Lymphoma",
      difficulty: "Advanced",
      teachingPoint: "PCNSL molecular signature: 95% DLBCL, predominantly ABC subtype. Hallmark mutations: CD79B, MYD88 (L265P), PIM1. These activate NF-κB/JAK-STAT pathways. Immunocompetent PCNSL is typically EBV-negative. Stereotactic biopsy is preferred; withhold steroids to preserve diagnostic yield. Always do contrast MRI + CSF analysis + slit-lamp examination."
    },
    {
      id: 35,
      title: "The High-Grade NOS Puzzle",
      vignette: "A 48-year-old man presents with a rapidly growing abdominal mass. Biopsy shows a B-cell lymphoma with morphological features intermediate between DLBCL and Burkitt lymphoma — some areas show large pleomorphic cells (DLBCL-like) while other areas show medium-sized monomorphic cells with starry sky pattern (Burkitt-like). Ki-67 is 80%. IHC: CD20+, CD10+, BCL6+. FISH is performed: MYC rearrangement NEGATIVE, BCL2 rearrangement NEGATIVE, BCL6 rearrangement NEGATIVE.",
      question: "What is the correct WHO-HAEM5 classification, and how does the absence of MYC/BCL2 rearrangements affect classification?",
      options: [
        { text: "High-grade B-cell lymphoma, NOS — intermediate features without MYC/BCL2 rearrangements create this distinct entity", correct: true, explanation: "In WHO-HAEM5, B-cell lymphomas with morphologic features intermediate between DLBCL and BL are classified as: (1) High-grade B-cell lymphoma with MYC and BCL2 rearrangements (if FISH confirms both = DHL), or (2) High-grade B-cell lymphoma, NOS (if rearrangements are absent). This case shows intermediate morphology without targetable rearrangements, making it HGBCL-NOS. Prognosis and management remain undefined, but intensive strategies (e.g., DA-EPOCH-R) are preferred based on high-risk histology." },
        { text: "DLBCL-NOS — if FISH is negative, it defaults to DLBCL regardless of morphology", correct: false, explanation: "The presence of intermediate Burkitt-like morphology prevents classification as standard DLBCL-NOS. WHO-HAEM5 specifically created the HGBCL-NOS category for these cases. Morphology matters — these tumours have distinct biology from typical DLBCL." },
        { text: "Burkitt lymphoma — Ki-67 of 80% is sufficient for diagnosis", correct: false, explanation: "Burkitt lymphoma requires Ki-67 ~100%, cMYC translocation, and classic monomorphic medium-cell morphology. This case has Ki-67 80% (not ~100%), mixed morphology, and no MYC rearrangement — insufficient for Burkitt diagnosis." },
        { text: "Double-hit lymphoma — the intermediate morphology defines double-hit regardless of FISH", correct: false, explanation: "Double-hit lymphoma REQUIRES FISH-confirmed MYC AND BCL2 (and/or BCL6) gene rearrangements. Without these rearrangements, the diagnosis is HGBCL-NOS, not DHL. The term 'double-hit' refers specifically to the cytogenetic findings, not morphology." }
      ],
      category: "DHL",
      difficulty: "Advanced",
      teachingPoint: "WHO-HAEM5 classification of aggressive B-cell lymphomas: (1) DLBCL-NOS — typical large cell morphology, (2) Burkitt — monomorphic medium cells, Ki-67 ~100%, cMYC translocation, (3) HGBCL with MYC/BCL2 = DHL, (4) HGBCL-NOS = intermediate features WITHOUT rearrangements. Management of HGBCL-NOS is undefined; most specialists favour intensive DA-EPOCH-R. With DHLs excluded, prognosis may be better than originally described."
    },
    {
      id: 36,
      title: "The Flow Cytometry Puzzle",
      vignette: "A 58-year-old man presents with a peripheral lymphocytosis of 25 × 10⁹/L, mild splenomegaly, and no lymphadenopathy. Flow cytometry of peripheral blood shows: κ-restricted B-cell population, CD5+, CD19+, CD20 bright, FMC7+, CD43+, CD23−, CD10−, CD200 negative. Bone marrow biopsy confirms involvement. The haematologist orders an IHC panel on the bone marrow trephine: cyclin D1 is POSITIVE, SOX11 is NEGATIVE. Ki-67 is 5%.",
      question: "What is the diagnosis, and what critical management decision does the SOX11/Ki-67 pattern inform?",
      options: [
        { text: "Indolent (leukemic non-nodal) MCL — SOX11 negative with low Ki-67 supports observation rather than immediate treatment", correct: true, explanation: "This is the indolent variant of MCL: leukemic non-nodal presentation (peripheral blood/bone marrow involvement WITHOUT lymphadenopathy), SOX11 negative, low Ki-67 (5%), derived from post-germinal centre B cells. Despite cyclin D1 positivity confirming MCL, the SOX11-negative/low Ki-67 pattern identifies the indolent variant where observation is appropriate. These patients may have a prolonged indolent course similar to CLL watch-and-wait." },
        { text: "CLL — CD5+ B-cell lymphocytosis with splenomegaly is always CLL", correct: false, explanation: "CLL is typically CD5+, CD23+, CD200+, FMC7−, with dim CD20. This case shows CD23−, CD200−, FMC7+, bright CD20 — all features favouring MCL over CLL. Cyclin D1 positivity confirms MCL. The flow cytometry pattern is critical for distinguishing these entities." },
        { text: "Blastoid MCL requiring immediate intensive chemotherapy + ASCT", correct: false, explanation: "Blastoid MCL has large cells with blastoid morphology, HIGH Ki-67 (>30%), and often TP53 mutations. This case has low Ki-67 (5%) and SOX11 negativity — the exact opposite pattern. This is indolent MCL where observation is appropriate." },
        { text: "Splenic marginal zone lymphoma — CD5 positivity is irrelevant", correct: false, explanation: "SMZL is typically CD5 negative. While splenomegaly can occur in both, cyclin D1 positivity and t(11;14) are definitive for MCL. The flow cytometry pattern (CD5+, CD23−, FMC7+) further supports MCL." }
      ],
      category: "MCL",
      difficulty: "Advanced",
      teachingPoint: "Indolent MCL diagnostic criteria: (1) Leukemic non-nodal presentation, (2) SOX11 negative, (3) Low Ki-67 (≤10%), (4) Post-GC B-cell derivation. Flow cytometry distinguishes from CLL: MCL = CD5+, CD23−, FMC7+, bright CD20, CD200−; CLL = CD5+, CD23+, FMC7−, dim CD20, CD200+. Cyclin D1/t(11;14) confirms MCL. Observation is appropriate for indolent variant."
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
    { q: "What percentage of DHL patients have MYC and BCL2 rearrangements?", a: "5-10% of all DLBCL", options: ["1-2% of all DLBCL", "5-10% of all DLBCL", "20-25% of all DLBCL", "40-50% of all DLBCL"] },
    /* ── ASH SAP Ch45 MCQ-derived Quick-Fire ── */
    { q: "What is the preferred consolidation for PCNSL after MATRix induction?", a: "ASCT with thiotepa/carmustine", options: ["WBRT", "ASCT with thiotepa/carmustine", "Etoposide + cytarabine", "Rituximab maintenance"] },
    { q: "In CALGB 51101, what was the 2-year PFS in the ASCT arm for PCNSL?", a: "73%", options: ["51%", "65%", "73%", "85%"] },
    { q: "How many total cycles of DA-R-EPOCH for low-risk Burkitt in CR after 2 cycles?", a: "3 total cycles", options: ["2 total cycles", "3 total cycles", "4 total cycles", "6 total cycles"] },
    { q: "What Ki-67 level suggests indolent MCL suitable for observation?", a: "≤10% (e.g., 5%)", options: ["≤10% (e.g., 5%)", "20-30%", "40-50%", "≥60%"] },
    { q: "In the POLARIX trial, which DLBCL subgroup benefited most from Pola-R-CHP?", a: "ABC subtype with IPI ≥2", options: ["GCB subtype with IPI 0-1", "ABC subtype with IPI ≥2", "All DLBCL equally", "Double-hit lymphoma"] },
    { q: "What CD4 threshold makes rituximab safe in HIV-associated lymphoma?", a: ">50/mm³", options: [">50/mm³", ">100/mm³", ">200/mm³", ">350/mm³"] },
    { q: "What percentage of PMBCL patients needed RT after DA-EPOCH-R in the NIH trial?", a: "~4% (2/51)", options: ["~4% (2/51)", "~15%", "~30%", "~50%"] },
    { q: "What trial showed ASCT superiority over etoposide/cytarabine for PCNSL consolidation?", a: "CALGB 51101", options: ["IELSG32", "CALGB 51101", "POLARIX", "CORAL"] },
    /* ── DIAGNOSTIC PATHOLOGY Quick-Fire ── */
    { q: "What IHC panel defines the Hans algorithm?", a: "CD10, BCL6, IRF4/MUM1", options: ["CD5, CD23, CD200", "CD10, BCL6, IRF4/MUM1", "CD20, CD79a, PAX5", "CD3, CD5, CD7"] },
    { q: "What percentage of DLBCL cases express CD5?", a: "~10%", options: ["~1%", "~10%", "~30%", "~50%"] },
    { q: "BCL2 is typically NEGATIVE in which aggressive lymphoma?", a: "Burkitt lymphoma", options: ["DLBCL", "MCL", "Burkitt lymphoma", "PMBCL"] },
    { q: "What is the sensitivity of the Hans algorithm for classifying GCB subtype?", a: "71%", options: ["50%", "71%", "88%", "95%"] },
    { q: "What assay determines cell-of-origin from FFPE tissue with high accuracy?", a: "Lymph2Cx", options: ["Hans algorithm IHC", "Lymph2Cx", "Gene expression microarray", "Next-gen sequencing"] },
    { q: "In the WHO-HAEM5, what defines high-grade B-cell lymphoma vs HGBCL-NOS?", a: "Presence vs absence of MYC/BCL2 rearrangements by FISH", options: ["Ki-67 >90% vs <90%", "Presence vs absence of MYC/BCL2 rearrangements by FISH", "GCB vs ABC subtype", "CD10 positive vs negative"] },
    { q: "What staining pattern distinguishes CLL from MCL on flow cytometry?", a: "CLL: CD23+, dim CD20, CD200+; MCL: CD23−, bright CD20, CD200−", options: ["CLL: CD23+, dim CD20, CD200+; MCL: CD23−, bright CD20, CD200−", "CLL: CD5−; MCL: CD5+", "CLL: FMC7+; MCL: FMC7−", "CLL: cyclin D1+; MCL: cyclin D1−"] },
    { q: "What histological feature of PMBCL is a hallmark finding?", a: "Compartmentalising fibrosis/sclerosis", options: ["Starry sky pattern", "Compartmentalising fibrosis/sclerosis", "Hodgkin-like Reed-Sternberg cells", "Notched nuclei"] },
    { q: "What IHC marker is virtually always positive in MCL but negative in CLL?", a: "Cyclin D1", options: ["CD5", "CD23", "Cyclin D1", "CD20"] },
    { q: "What percentage of neoplastic B-cells defines T-cell/histiocyte-rich DLBCL?", a: "<10%", options: ["<10%", "<25%", "<50%", ">50%"] },
    { q: "EBV-positive mucocutaneous ulcer responds to what initial treatment?", a: "Reduction of immunosuppression", options: ["R-CHOP", "Reduction of immunosuppression", "WBRT", "Antiviral therapy"] },
    { q: "What is the typical CD15 status in PMBCL vs classical Hodgkin lymphoma?", a: "PMBCL: CD15−; cHL: CD15+", options: ["Both CD15+", "PMBCL: CD15−; cHL: CD15+", "Both CD15−", "PMBCL: CD15+; cHL: CD15−"] },
    { q: "What morphological feature of Burkitt cells is seen on Wright-Giemsa stain?", a: "Cytoplasmic lipid vacuoles", options: ["Bilobed nuclei", "Auer rods", "Cytoplasmic lipid vacuoles", "Hairy projections"] },
    { q: "What SOX11 status characterises indolent MCL?", a: "SOX11 negative", options: ["SOX11 positive", "SOX11 negative", "SOX11 not expressed in MCL", "SOX11 variable"] },
    { q: "Which gene mutation (L265P) is a hallmark of primary CNS lymphoma?", a: "MYD88", options: ["TP53", "MYD88", "BRAF", "NOTCH1"] }
  ],
  emqSets: [
    {
      id: 1,
      theme: "Lymphoma Diagnosis by IHC Pattern",
      instruction: "For each clinical scenario, select the MOST LIKELY diagnosis from the option list below.",
      optionList: [
        "A. Diffuse large B-cell lymphoma, GCB subtype",
        "B. Diffuse large B-cell lymphoma, ABC/non-GCB subtype",
        "C. Primary mediastinal large B-cell lymphoma",
        "D. Burkitt lymphoma",
        "E. Mantle cell lymphoma, classical",
        "F. Mantle cell lymphoma, blastoid variant",
        "G. High-grade B-cell lymphoma with MYC and BCL2 rearrangements (DHL)",
        "H. High-grade B-cell lymphoma, NOS",
        "I. T-cell/histiocyte-rich large B-cell lymphoma",
        "J. Primary CNS lymphoma"
      ],
      stems: [
        {
          stem: "Large B-cells, CD20+, CD10+, BCL6+, MUM1−. FISH negative for MYC and BCL2 rearrangements. Ki-67 50%.",
          correctAnswer: "A",
          explanation: "CD10+ by Hans algorithm = GCB subtype. No rearrangements by FISH rules out DHL. Standard DLBCL, GCB subtype."
        },
        {
          stem: "Medium-sized monomorphic cells, 'starry sky' pattern, Ki-67 ~100%, CD20+, CD10+, BCL6+, BCL2−. FISH: t(8;14) positive.",
          correctAnswer: "D",
          explanation: "Classic Burkitt: medium cells, Ki-67 ~100%, starry sky, t(8;14). BCL2 negativity helps distinguish from DHL."
        },
        {
          stem: "Large B-cells, CD20+, CD10−, BCL6+, MUM1+. MYC protein 70% positive, BCL2 protein 90%. FISH: MYC AND BCL2 rearrangements confirmed.",
          correctAnswer: "G",
          explanation: "IHC shows double expressor pattern, but FISH confirms actual MYC AND BCL2 rearrangements = double-hit lymphoma (high-grade B-cell lymphoma with MYC/BCL2 in WHO-HAEM5)."
        },
        {
          stem: "Small-to-medium lymphocytes, CD5+, CD20+, CD10−, CD23−, cyclin D1+. t(11;14) confirmed. Ki-67 85%, blastoid morphology.",
          correctAnswer: "F",
          explanation: "Cyclin D1+/t(11;14) = MCL. Ki-67 85% with blastoid morphology defines blastoid variant — most aggressive MCL subtype."
        },
        {
          stem: "Scattered large B-cells (<10% of cells), CD20+, CD79a+, in a background dominated by CD3+ T-cells and CD68+ histiocytes. Hepatosplenomegaly and bone marrow involvement.",
          correctAnswer: "I",
          explanation: "Sparse neoplastic B-cells (<10%) in T-cell/histiocyte-rich background with advanced-stage presentation = T-cell/histiocyte-rich large B-cell lymphoma."
        }
      ]
    },
    {
      id: 2,
      theme: "Cytogenetic Abnormalities in Aggressive Lymphomas",
      instruction: "Match each cytogenetic finding with the lymphoma subtype it is MOST characteristically associated with.",
      optionList: [
        "A. Burkitt lymphoma",
        "B. Mantle cell lymphoma",
        "C. Follicular lymphoma",
        "D. High-grade B-cell lymphoma (DHL)",
        "E. DLBCL-NOS",
        "F. Primary mediastinal large B-cell lymphoma",
        "G. ALK-positive anaplastic large cell lymphoma",
        "H. Marginal zone lymphoma",
        "I. CLL/SLL",
        "J. Hairy cell leukaemia"
      ],
      stems: [
        {
          stem: "t(8;14)(q24;q32) — juxtaposition of MYC and IGH",
          correctAnswer: "A",
          explanation: "t(8;14) is the hallmark of Burkitt lymphoma, present in ~80% of cases. Variant translocations t(2;8) and t(8;22) involve light chain loci."
        },
        {
          stem: "t(11;14)(q13;q32) — leading to cyclin D1 overexpression",
          correctAnswer: "B",
          explanation: "t(11;14) is present in virtually all MCL cases, resulting in constitutive cyclin D1 overexpression that drives cell cycle dysregulation."
        },
        {
          stem: "Concurrent MYC and BCL2 gene rearrangements confirmed by FISH",
          correctAnswer: "D",
          explanation: "Co-occurrence of MYC AND BCL2 rearrangements by FISH defines double-hit lymphoma, classified as high-grade B-cell lymphoma with MYC/BCL2 in WHO-HAEM5."
        },
        {
          stem: "9p24.1 amplification leading to PD-L1/PD-L2 overexpression",
          correctAnswer: "F",
          explanation: "9p24.1 amplification is characteristic of PMBCL, driving PD-L1 overexpression. This is therapeutically targetable with checkpoint inhibitors in relapsed disease."
        },
        {
          stem: "t(14;18)(q32;q21) — BCL2 overexpression",
          correctAnswer: "C",
          explanation: "t(14;18) is the hallmark of follicular lymphoma, present in ~85% of cases. It causes BCL2 overexpression, preventing apoptosis."
        }
      ]
    },
    {
      id: 3,
      theme: "Flow Cytometry and Immunophenotype Patterns",
      instruction: "Match each flow cytometry/immunophenotype pattern with the MOST LIKELY diagnosis.",
      optionList: [
        "A. CLL/SLL",
        "B. Mantle cell lymphoma",
        "C. Follicular lymphoma",
        "D. Burkitt lymphoma",
        "E. DLBCL",
        "F. Hairy cell leukaemia",
        "G. Splenic marginal zone lymphoma",
        "H. Primary mediastinal large B-cell lymphoma",
        "I. Indolent (leukemic non-nodal) MCL",
        "J. Lymphoplasmacytic lymphoma"
      ],
      stems: [
        {
          stem: "CD5+, CD19+, CD20 bright, CD23−, FMC7+, CD43+, CD200−, cyclin D1+, SOX11+. Ki-67 40%.",
          correctAnswer: "B",
          explanation: "CD5+/CD23−/FMC7+/CD200−/bright CD20 with cyclin D1+ and SOX11+ = classical MCL. The high Ki-67 (40%) indicates typical/aggressive rather than indolent variant."
        },
        {
          stem: "CD5+, CD19+, CD20 dim, CD23+, FMC7−, CD43+, CD200+, cyclin D1 negative.",
          correctAnswer: "A",
          explanation: "CD5+/CD23+/FMC7−/dim CD20/CD200+ = CLL/SLL. This is the classic CLL immunophenotype, distinct from MCL by CD23 positivity, CD200 positivity, and dim CD20."
        },
        {
          stem: "CD5+, CD19+, CD20 bright, CD23−, FMC7+, cyclin D1+, SOX11 NEGATIVE. Ki-67 5%. No lymphadenopathy, peripheral blood lymphocytosis with splenomegaly.",
          correctAnswer: "I",
          explanation: "MCL confirmed by cyclin D1+, but SOX11 negative with low Ki-67 (5%) and leukemic non-nodal presentation = indolent MCL variant. Observation is appropriate."
        },
        {
          stem: "CD19+, CD20+, CD10+, BCL6+, surface Ig+, high forward/side scatter, Ki-67 ~100%.",
          correctAnswer: "D",
          explanation: "CD10+/BCL6+ with Ki-67 ~100% and high scatter (large/blast-like cells) = Burkitt lymphoma. The extremely high proliferative index is the key distinguishing feature."
        },
        {
          stem: "CD19+, CD20+, weak CD30+, surface Ig NEGATIVE, CD10−. Young woman with anterior mediastinal mass.",
          correctAnswer: "H",
          explanation: "Surface Ig negative, weak CD30+, CD20+ in a young woman with mediastinal mass = PMBCL. Absence of surface Ig and weak CD30 are hallmarks distinguishing it from other B-cell lymphomas."
        }
      ]
    }
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
