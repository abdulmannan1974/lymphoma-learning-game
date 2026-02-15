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
    }
  ],
  quickFireQuestions: [
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
    { q: "Which subtype of DLBCL has a worse prognosis regardless of IPI?", a: "ABC (activated B-cell)", options: ["GCB (germinal centre B-cell)", "ABC (activated B-cell)", "Unclassifiable", "T-cell/histiocyte-rich"] }
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
};

export function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
