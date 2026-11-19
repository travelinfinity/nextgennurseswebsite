/* NextGen Nurses OET Nursing practice · Test 11. Original practice material, not real OET items. */
OET_TEST({
n: 11,
LA: [
{
who: "a physiotherapist talking to a patient called Sophie Reynolds, who has neck pain",
cast: { T: ["f", "Physiotherapist"], P: ["f", "Sophie Reynolds (patient)"] },
title: "Patient: Sophie Reynolds (34) · Neck pain",
notes: `#Symptoms
pain mainly on the {} side of the neck
pain spreads up into the back of the {}
gets {} most afternoons
no {} or weakness in the arms
#Work
works as a {}
works from home at the {} table
uses a {} instead of a monitor
#Other factors
sleeps on her {}
recently started {} classes
#Plan
raise the screen to {} level
set a timer to take a break every {}
do neck exercises {} a day`,
ans: ["right", "head", "headaches", "numbness|tingling", "graphic designer", "kitchen", "laptop", "stomach|front", "boxing", "eye", "thirty minutes|30 minutes|half an hour", "three times|3 times"],
s: `T: Hi Sophie, I'm Megan. Tell me about your neck.
P: It's been sore for about two months now. It's mostly on the right side, from here down to my shoulder.
T: Does the pain go anywhere else?
P: Up into the back of my head. And I get headaches most afternoons, which I never used to.
T: Any numbness or tingling in your arms or hands? Any weakness?
P: No, nothing like that.
T: Good. What do you do for work?
P: I'm a graphic designer. I've been working from home since my company closed the office last year.
T: What's your setup like at home?
P: Not great, honestly. I work at the kitchen table, on my laptop. I don't have a separate monitor.
T: How many hours a day are you at the computer?
P: Eight, nine hours. Sometimes more when there's a deadline.
T: And do you take breaks?
P: Not really. I get absorbed in what I'm doing. Sometimes I look up and three hours have gone by.
T: That's very common with creative work. Looking down at a laptop for long periods puts a lot of strain on the neck. How do you sleep?
P: On my stomach, with my head turned to the side.
T: That position twists the neck for hours, which can contribute. Have you changed anything else recently?
P: I started boxing classes about six weeks ago. I wanted to get fitter.
T: Good for you. Does the neck hurt during or after the classes?
P: A bit after, especially if we've done a lot of punching.
T: Okay. I don't think you need to stop, but tell your trainer about your neck, and we'll check your technique later. So, here's what I suggest. First, your screen. Ideally, the top of the screen should be at eye level. If you can get a laptop stand and a separate keyboard and mouse, that would make a big difference.
P: I can order those.
T: Second, breaks. Set a timer to remind you to get up and move every thirty minutes. Even a minute or two is enough.
P: Okay. That will be hard, but I'll try.
T: And third, I'm going to give you some neck and shoulder exercises. I'd like you to do them three times a day. They only take five minutes.
P: That sounds doable.
T: Try sleeping on your back or your side, with a pillow that keeps your neck straight. Let's see how you are in two weeks.`
},
{
who: "a doctor talking to a patient called Joseph Mensah, who has high blood pressure",
cast: { D: ["f", "Doctor"], P: ["m", "Joseph Mensah (patient)"] },
title: "Patient: Joseph Mensah (52) · New diagnosis of hypertension",
notes: `#Results
average home blood pressure reading: {}
kidney function test: {}
#Background
works as a {}
father died of a {} at 60
#Lifestyle
adds {} to most meals
drinks about {} glasses of wine on weekdays
exercise: plays {} on Sundays
#Concerns
worried medication will cause {}
prefers to try {} first
#Plan
start a low dose of {}
check blood test in {} weeks
continue measuring blood pressure {} a week`,
ans: ["152 over 96|152/96", "normal", "taxi driver", "stroke", "salt|stock cubes", "two|2", "soccer|football", "tiredness|fatigue|feeling tired", "lifestyle changes|diet and exercise", "perindopril", "two|2", "twice"],
s: `D: Hello, Joseph. Thanks for bringing in your home blood pressure diary. Let's have a look.
P: I did it twice a day for a week, like you said.
D: That's perfect. Your average reading is one hundred and fifty-two over ninety-six. That's consistently high. Combined with the readings in the clinic, it confirms that you have high blood pressure, or hypertension.
P: I was afraid you'd say that.
D: The good news is your blood tests were fine. Your kidney function is normal, and your cholesterol is okay. What sort of work do you do again?
P: I'm a taxi driver. Long shifts, lots of sitting.
D: And you mentioned your family history last time?
P: My father died of a stroke when he was sixty. That's why I came in, really. I don't want the same thing to happen to me.
D: That's very understandable. High blood pressure is the most important risk factor for stroke, and treating it reduces that risk significantly. Let's talk about lifestyle. How much salt do you use?
P: Quite a lot, I suppose. I add salt to most meals, and I use stock cubes in my cooking.
D: Stock cubes are very high in salt. What about alcohol?
P: Two glasses of wine on weekdays, maybe more at weekends.
D: And exercise?
P: I play soccer with friends on Sundays. That's about it.
D: That's good, but it would help to be active on more days. Now, I'd recommend starting a blood pressure tablet, as well as making some lifestyle changes. How do you feel about that?
P: I'm a bit worried. My brother takes blood pressure tablets, and he says they make him tired all the time. I can't be tired when I'm driving.
D: That's a fair concern. Different medicines suit different people, and tiredness isn't common with the one I'd suggest. If you do get side effects, we can change it.
P: Could I try lifestyle changes first and see if that works?
D: With readings at this level and your family history, I'd advise doing both at the same time. Lifestyle changes alone may lower your pressure by a few points, but probably not enough. But it's your decision.
P: Okay. If it reduces my risk of stroke, I'll do both.
D: Good. I'll start you on a low dose of perindopril. It can occasionally cause a dry cough, so let me know if that happens. I'll need to repeat your blood test in two weeks, to check your kidney function and potassium.
P: Okay.
D: And please keep measuring your blood pressure at home, twice a week, so we can see how it's responding.`
}
],
LB: [
{
who: "two nurses discussing a patient with an insulin pump",
cast: { A: ["m", "Nurse"], B: ["f", "Nurse"] },
s: `A: Mr Cooper's going to theatre at two. He wears an insulin pump. Should he take it off?
B: Not without a plan. If the pump's removed, he'll have no insulin at all and could go into ketoacidosis quickly. The anaesthetist and the diabetes team need to decide whether he keeps it on or switches to an insulin infusion. Let's call the diabetes team now so it's sorted before he goes.`,
q: "What is the second nurse's concern?",
o: ["The pump might interfere with the surgical equipment.", "The patient could become unwell without insulin.", "The patient's operation may be delayed."],
a: 1,
why: "Without the pump 'he'll have no insulin at all and could go into ketoacidosis'."
},
{
who: "a nurse unit manager talking about the roster",
cast: { M: ["m", "Nurse unit manager"] },
s: `M: Following the fatigue review, nobody will be rostered for a morning shift straight after a late shift any more. You'll have at least ten hours between shifts. Also, I won't approve double shifts unless there's no other option, and if you do one, you must take a break of at least eight hours before your next shift. Please let me know if your current roster doesn't meet these rules.`,
q: "What is the purpose of the changes?",
o: ["to reduce staff tiredness", "to save money on overtime", "to give staff more shifts"],
a: 0,
why: "They follow 'the fatigue review' and ensure rest between shifts."
},
{
who: "a doctor and a nurse discussing a patient's resuscitation plan",
cast: { N: ["f", "Nurse"], D: ["m", "Doctor"] },
s: `N: Mrs Hall's chart says 'not for resuscitation', but her daughter told me this morning that her mother wants everything done.
D: Hmm. The form was completed on her last admission, a year ago. Her situation may have changed. I'll talk to Mrs Hall herself this afternoon, while she's well enough to tell us what she wants, and update the form. Until then, if she deteriorates, call a MET call and we'll discuss it.`,
q: "What does the doctor plan to do?",
o: ["follow the daughter's wishes", "confirm the patient's wishes directly", "keep the existing form unchanged"],
a: 1,
why: "He will 'talk to Mrs Hall herself' and update the form."
},
{
who: "an occupational therapist talking to a nurse",
cast: { O: ["m", "Occupational therapist"], N: ["f", "Nurse"] },
s: `O: I've brought a pressure-relieving cushion for Mr Ellis. He's at high risk, and he's sitting out in the chair for longer now.
N: Great. How long can he sit out?
O: With the cushion, up to two hours at a time, then he should go back to bed or stand and shift his weight. Without the cushion, no more than an hour. Make sure the cover's the right way up, with the label at the back.`,
q: "What does the occupational therapist explain?",
o: ["how to clean the cushion", "how long the patient can safely sit", "why the patient should stay in bed"],
a: 1,
why: "He gives safe sitting times with and without the cushion."
},
{
who: "a pharmacist talking to a nurse",
cast: { P: ["f", "Pharmacist"], N: ["m", "Nurse"] },
s: `N: Mrs Ruiz is starting doxycycline. Anything I should know?
P: Yes. She needs to take it with a full glass of water and stay upright for at least thirty minutes afterwards. If it gets stuck in the oesophagus, it can cause painful ulcers. So don't give it to her just before she lies down for the night. And she should avoid milk or antacids around the same time, because they reduce absorption.`,
q: "What does the pharmacist mainly advise about?",
o: ["how to give the medication safely", "the side effects of the medication on the skin", "how long the course of medication should last"],
a: 0,
why: "She explains water, staying upright and avoiding milk around the dose."
},
{
who: "a laboratory scientist calling a ward",
cast: { L: ["m", "Laboratory scientist"], N: ["f", "Nurse"] },
s: `L: Hello, I'm calling from Haematology with a critical result for Ms Jones, bed fourteen. Her haemoglobin is sixty-two.
N: Sixty-two. Thank you. Can I just read that back? Ms Jones, bed fourteen, haemoglobin sixty-two.
L: That's correct. Yesterday it was ninety. I'll need your name for our records.
N: It's Hana Ali. I'll let the doctor know right away.`,
q: "Why does the laboratory scientist call the ward?",
o: ["to request another blood sample", "to report an urgent abnormal result", "to ask why the haemoglobin was tested"],
a: 1,
why: "He calls 'with a critical result' – a large drop in haemoglobin."
}
],
LC: [
{
who: "an interview with Jasmine Cho, a neonatal intensive care nurse, about skin-to-skin contact",
cast: { I: ["m", "Interviewer"], J: ["f", "Jasmine Cho"] },
s: `I: I'm talking with Jasmine Cho, a nurse in a neonatal intensive care unit. Jasmine, you're a strong advocate of skin-to-skin contact for premature babies. What does that involve?
J: It's very simple. The baby, wearing only a nappy, is placed upright on the parent's bare chest, and both are covered with a blanket. It's often called kangaroo care, because the parent holds the baby close, like a kangaroo's pouch. It started in Colombia in the late 1970s, where there weren't enough incubators, and parents were used to keep babies warm.
I: But surely incubators are better, in a modern unit?
J: That's what we used to think. But the research has been striking. Babies who have skin-to-skin contact tend to have more stable temperatures, heart rates and breathing. They cry less, sleep better and are more likely to be breastfed. Studies in low-income countries found that it reduced deaths among low-birthweight babies. And more recent research suggests that starting it very early, even immediately after birth, has benefits in high-income settings too.
I: What about the parents?
J: That's the part I find most moving. Having a premature baby is traumatic. Parents often feel helpless, as if the baby belongs to the machines and the staff. Skin-to-skin gives them something only they can do. Mothers who do it have lower rates of anxiety and depression, and fathers benefit too.
I: Are there babies who can't have it?
J: Fewer than people think. We now do skin-to-skin with babies on breathing support and with several lines in. It takes planning and two staff to transfer the baby safely, so that tubes aren't dislodged. Of course, if a baby is very unstable, we wait.
I: What are the barriers?
J: Honestly, the biggest barrier has been staff attitudes and the environment. When I started, some nurses saw it as a risk, or as extra work. And many units don't have comfortable reclining chairs or private spaces. Parents need to be able to sit for an hour or more. If they're on a hard chair in a busy corridor, they won't stay long.
I: How have you changed things in your unit?
J: We trained all staff in safe transfers, so everyone feels confident. We bought proper reclining chairs and put up screens for privacy. And we started treating skin-to-skin as a care activity that's recorded on the chart, like feeding. That sent a message that it's part of treatment, not an optional extra. The number of babies receiving it has more than doubled.`,
qs: [
["Why was kangaroo care first introduced?", ["because of a shortage of incubators", "because parents asked to hold their babies", "because it reduced infection rates"], 0],
["What does Jasmine say about the research on skin-to-skin contact?", ["It shows benefits only in low-income countries.", "It shows benefits for babies' stability and feeding.", "It has produced mixed results."], 1],
["According to Jasmine, skin-to-skin is especially valuable for parents because it", ["reduces the time they spend in hospital", "gives them a role in their baby's care", "teaches them to use the equipment"], 1],
["What does Jasmine say about babies on breathing support?", ["They should never have skin-to-skin contact.", "They can have it with careful preparation.", "They need a doctor present during transfer."], 1],
["What does Jasmine identify as the biggest barrier?", ["the cost of equipment", "parents' lack of interest", "staff attitudes and the physical environment"], 2],
["Why did Jasmine's unit start recording skin-to-skin on the chart?", ["to show it was a recognised part of care", "to measure how long parents stayed", "to meet a hospital policy"], 0]
]
},
{
who: "a presentation by Dr Paul Weston, a rheumatologist, about osteoporosis after a fracture",
cast: { P: ["m", "Dr Paul Weston"] },
s: `P: Good evening. I want to talk about a gap in care that affects thousands of Australians every year: what happens, or doesn't happen, after a fragility fracture.
P: A fragility fracture is a broken bone caused by a fall from standing height or less, which wouldn't normally break a healthy bone. Common sites are the wrist, the spine, the shoulder and, most seriously, the hip. These fractures are often the first sign of osteoporosis.
P: Here's the important point. Having one fragility fracture roughly doubles the risk of having another. And the risk is highest in the first year or two after the first fracture. So that first fracture is a warning, and an opportunity.
P: Unfortunately, it's an opportunity we usually miss. Studies have found that only around one in five people who have a fragility fracture are assessed and treated for osteoporosis afterwards. The fracture is fixed, the cast comes off, and everyone moves on. That's what we call the treatment gap.
P: Why does it happen? Partly because responsibility isn't clear. The orthopaedic team treats the fracture, but they may see osteoporosis as the GP's job. The GP may assume it was dealt with in hospital. The patient may not realise that the fracture has anything to do with their bones being weak. They think, 'I fell over, anyone would have broken something.'
P: The most effective solution we've found is something called a fracture liaison service. It's usually coordinated by a nurse. The nurse identifies every patient over fifty who comes in with a fragility fracture, arranges a bone density scan and blood tests, starts or recommends treatment, and follows them up to make sure they're still taking it. Hospitals with these services have much higher treatment rates, and fewer second fractures.
P: Treatment itself is effective. Several medicines can reduce the risk of further fractures by around half or more. Some are tablets taken once a week, others are injections every six months or once a year. I should mention that some patients are worried about rare side effects they've read about, such as problems with the jaw bone. These are real but very rare, and for most people the benefit of preventing fractures is much greater.
P: Alongside medication, we look at falls prevention, calcium and vitamin D, and exercise, particularly strength and balance training.
P: So my request to you is simple. If you see a patient over fifty with a fracture from a minor fall, ask: has anyone checked this person's bones?`,
qs: [
["What is a fragility fracture?", ["a fracture caused by a minor fall", "a fracture that heals slowly", "a fracture of the hip only"], 0],
["According to Dr Weston, when is the risk of a second fracture highest?", ["during the first few years after the first fracture", "many years after the first fracture", "in patients under fifty"], 0],
["What is the 'treatment gap'?", ["the delay before surgery for a fracture", "the failure to treat osteoporosis after a fracture", "the difference in treatment between hospitals"], 1],
["Why do many patients not see the connection between their fracture and osteoporosis?", ["They believe the fall itself explains the fracture.", "They are not told about their diagnosis.", "They have never had a bone density scan."], 0],
["What does a fracture liaison service do?", ["performs surgery on fractures", "identifies and follows up patients for osteoporosis treatment", "runs exercise classes for older people"], 1],
["What does Dr Weston say about rare side effects of treatment?", ["They usually outweigh the benefits.", "They should prevent most patients from having treatment.", "They are less important than the benefits for most patients."], 2]
]
}
],
RA: {
topic: "Blood transfusion",
texts: [
{ h: "Text A", t: "Before the transfusion", b: `• Confirm there is a valid prescription and documented consent. Consent should include the reason for transfusion, risks, benefits and alternatives.
• Check the patient's identity with the patient (ask them to state their full name and date of birth) against the identification band and the pre-transfusion blood sample label.
• Insert an IV cannula of at least 20 gauge for adults.
• Record baseline observations: temperature, pulse, respiratory rate, blood pressure and SpO2.
• Patients with a history of heart failure may need a diuretic, as prescribed.` },
{ h: "Text B", t: "Collecting and checking blood", b: `Blood must be collected from the blood bank only when the patient is ready to receive it.
Red cells must start within 30 minutes of leaving the blood fridge, and the transfusion must be completed within 4 hours of removal.
Two staff members (at least one a registered nurse) must check the product at the bedside, including: patient details, blood group, product type, unit number, expiry date and any special requirements (e.g. irradiated).
Never store blood in a ward fridge.` },
{ h: "Text C", t: "During the transfusion", b: `• Use a blood administration set with a filter. Do not add any medications to the blood or the line.
• Only 0.9% sodium chloride may be given through the same line.
• Observe the patient closely during the first 15 minutes, when severe reactions are most likely.
• Repeat observations 15 minutes after starting, then hourly, and at the end of the unit.
• Signs of a reaction include fever, rigors, rash, itching, breathlessness, hypotension, back pain and dark urine.` },
{ h: "Text D", t: "Suspected transfusion reaction", b: `1. STOP the transfusion immediately.
2. Keep the IV line open with 0.9% sodium chloride using a NEW administration set.
3. Recheck the patient's identity against the blood product.
4. Call the medical officer urgently (MET call if severe).
5. Notify the blood bank and return the blood bag and administration set.
6. Collect blood and urine samples as requested.
7. Complete an incident report.
Mild reactions (e.g. isolated rash) may allow the transfusion to continue after medical review.` }
],
qs: [
{ k: "m", q: "Which text tells you which fluid can be given in the same line as blood?", a: "C" },
{ k: "m", q: "Which text tells you what to send back to the blood bank after a reaction?", a: "D" },
{ k: "m", q: "Which text explains what information should be included in consent?", a: "A" },
{ k: "m", q: "Which text gives the time limit for completing a transfusion?", a: "B" },
{ k: "m", q: "Which text lists symptoms that suggest a reaction?", a: "C" },
{ k: "m", q: "Which text mentions extra medication for some patients before transfusion?", a: "A" },
{ k: "m", q: "Which text tells you where blood must not be kept?", a: "B" },
{ k: "s", q: "What minimum cannula size is recommended for adults?", a: "20 gauge|20" },
{ k: "s", q: "Within how many minutes of leaving the fridge must red cells start?", a: "30|30 minutes|thirty minutes" },
{ k: "s", q: "How many staff members must check the product at the bedside?", a: "two|2" },
{ k: "s", q: "What special requirement is given as an example?", a: "irradiated" },
{ k: "s", q: "What must the blood administration set contain?", a: "a filter|filter" },
{ k: "s", q: "How often are observations taken after the first 15 minutes?", a: "hourly|every hour" },
{ k: "s", q: "What should be used to keep the IV line open after a reaction?", a: "0.9% sodium chloride|sodium chloride|normal saline" },
{ k: "g", q: "The patient should be asked to state their full name and {}.", a: "date of birth" },
{ k: "g", q: "Blood should only be collected when the {}.", a: "patient is ready to receive it|patient is ready" },
{ k: "g", q: "No {} should be added to the blood or the line.", a: "medications|medication" },
{ k: "g", q: "Dark urine and {} can be signs of a transfusion reaction.", a: "back pain" },
{ k: "g", q: "After a reaction, a {} administration set must be used.", a: "new" },
{ k: "g", q: "A transfusion may continue after a mild reaction such as an isolated rash, following {}.", a: "medical review" }
]
},
RB: [
{ src: "Extract from a policy on pressure injury reporting", b: `All pressure injuries, including those present on admission, must be documented in the patient's record and on the wound chart. Injuries acquired during the hospital stay must also be reported through the incident system. Injuries present on admission should be reported to the referring facility, such as the aged-care home, so they can review their own prevention strategies.`, q: "What should happen when a patient arrives with a pressure injury?", o: ["It should be reported as a hospital incident.", "The facility the patient came from should be informed.", "It does not need to be documented."], a: 1, why: "They 'should be reported to the referring facility'." },
{ src: "Email to staff from the education team", b: `Subject: New online learning platform. The hospital is moving to a new online learning platform on 1 August. Your training history will transfer automatically, but certificates for courses completed outside the hospital will not. Please upload any external certificates to the old system before 25 July, so that they are included in the transfer. Login details for the new system will be sent to your work email.`, q: "What should staff do before 25 July?", o: ["complete all outstanding courses", "upload certificates from external courses", "create an account on the new system"], a: 1, why: "External certificates must be uploaded 'before 25 July'." },
{ src: "Extract from guidelines on caring for patients after a lumbar puncture", b: `After a lumbar puncture, patients do not need to lie flat; current evidence shows bed rest does not prevent headache. Patients may mobilise as soon as they feel able. Encourage normal oral fluids. Observe the puncture site for leakage of clear fluid or bleeding. A headache that is worse when sitting or standing and relieved by lying down may indicate a post-lumbar puncture headache and should be reported.`, q: "What do the guidelines say about bed rest after a lumbar puncture?", o: ["Patients should lie flat for several hours.", "Bed rest is not necessary.", "Patients should rest until they have no headache."], a: 1, why: "'Patients do not need to lie flat … bed rest does not prevent headache.'" },
{ src: "Notice in a hospital lift", b: `During the fire alarm test every Tuesday at 7 am, lifts will return to the ground floor and remain out of service for approximately 5 minutes. Staff transferring patients at this time should use alternative routes or wait until the test is complete. In a real emergency, do not use the lifts unless instructed by the fire warden.`, q: "What does the notice advise staff transferring patients on Tuesday mornings?", o: ["to use the lifts as normal", "to plan around the lift interruption", "to contact the fire warden"], a: 1, why: "They should 'use alternative routes or wait until the test is complete'." },
{ src: "Extract from guidelines on the care of patients with sickle cell disease", b: `Patients with sickle cell disease presenting with a painful crisis should receive analgesia within 30 minutes of arrival. Pain should be reassessed every 30 minutes until controlled. Patients often know which analgesia works for them and should be involved in decisions about their pain management. Keep patients warm and well hydrated, and monitor oxygen saturation, as low oxygen can trigger further sickling.`, q: "What do the guidelines say about involving patients?", o: ["Patients should choose their own dose.", "Patients' experience of what works should be considered.", "Patients should manage their own pain at home."], a: 1, why: "'Patients often know which analgesia works for them and should be involved.'" },
{ src: "Memo to all nursing staff", b: `Several patients recently received meals containing allergens they had reported on admission. In each case, the allergy was recorded in the medical record but not on the meal ordering system, which is separate. From today, nurses must enter all food allergies and intolerances into the meal ordering system at admission, as well as in the medical record.`, q: "Why did the patients receive unsuitable meals?", o: ["Their allergies had not been recorded anywhere.", "The kitchen ignored the meal ordering system.", "Their allergies were not on the meal ordering system."], a: 2, why: "The allergy was in the medical record 'but not on the meal ordering system'." }
],
RC: [
{
t: "Artificial intelligence in the emergency department",
b: `Emergency departments are among the most pressured parts of any health system. Patients arrive unannounced, with problems ranging from minor to life-threatening, and staff must decide quickly who needs attention first. It is perhaps unsurprising that emergency medicine has become a testing ground for artificial intelligence (AI), with developers promising tools that can predict which patients are at risk, read X-rays and even help with triage.

Some of these tools are already in use. Algorithms that analyse chest X-rays can flag possible abnormalities, such as a collapsed lung, and move those images to the top of the radiologist's list. Others analyse routine observations and blood results to predict which patients are likely to develop sepsis or deteriorate in the coming hours. In some hospitals, AI systems suggest a triage category based on the patient's symptoms and vital signs.

The potential benefits are clear. A well-designed algorithm does not get tired at four in the morning, and it can process large amounts of data quickly. Studies have shown that some image-reading algorithms match or exceed the accuracy of human readers for specific tasks. Early warning tools have, in some evaluations, identified deteriorating patients earlier than standard methods.

However, results in research studies do not always translate into real-world benefit. An algorithm developed in one hospital may perform poorly in another, where patients, equipment and practices differ. A widely reported sepsis prediction tool, used in many American hospitals, was found in an independent evaluation to miss a large proportion of sepsis cases while generating frequent false alarms. Too many alerts can lead to 'alert fatigue', in which staff start to ignore warnings altogether.

There are also concerns about bias. AI systems learn from historical data, and if that data reflects existing inequalities in care, the algorithm may reproduce them. For example, a system trained mainly on data from one population may be less accurate for patients from other ethnic backgrounds. Developers and health services need to test tools carefully across different groups before using them.

The question of responsibility is unresolved. If an AI tool recommends a low-priority triage category and the patient deteriorates, who is accountable: the nurse who accepted the recommendation, the hospital that purchased the tool, or the company that developed it? Most current guidance emphasises that AI should support, not replace, clinical judgement, and that the clinician remains responsible for decisions.

For nurses, this has practical implications. Triage nurses draw on information that is difficult to capture in data: how a patient looks, how they speak, a parent's sense that their child is 'not right'. These observations are often critical, and there is a risk that over-reliance on algorithms could lead them to be undervalued. On the other hand, nurses who understand how AI tools work, and their limitations, are well placed to use them wisely.

AI will almost certainly play a growing role in emergency care. The challenge is to ensure that it is evaluated rigorously, used transparently and integrated in ways that strengthen, rather than weaken, the human skills on which emergency care depends.`,
qs: [
["Why has emergency medicine become a testing ground for AI?", ["Emergency departments have more funding.", "Quick decisions about many patients are needed.", "Emergency staff are keen on new technology.", "Patients in emergency are less complex."], 1],
["How are some X-ray algorithms currently used?", ["to replace radiologists", "to prioritise images that may show abnormalities", "to decide which patients need X-rays", "to explain results to patients"], 1],
["What does the writer say about AI tools developed in one hospital?", ["They work equally well everywhere.", "They may not perform as well in other hospitals.", "They should only be used in research.", "They are always more accurate than humans."], 1],
["What is 'alert fatigue'?", ["tiredness caused by night shifts", "staff ignoring warnings because there are too many", "the failure of a system to produce alerts", "patients becoming anxious about alarms"], 1],
["Why might an AI system be biased?", ["It may learn from data that reflects existing inequalities.", "It is designed by people from one country.", "It cannot process information about ethnicity.", "It is used only in large hospitals."], 0],
["What does current guidance say about responsibility?", ["The company is responsible for errors.", "The clinician remains responsible for decisions.", "The hospital is responsible for all decisions.", "Responsibility is shared equally."], 1],
["What risk does the writer see for triage nurses?", ["Their observations may become undervalued.", "They will lose their jobs.", "They will need to learn programming.", "They will make more errors."], 0],
["What is the writer's overall view of AI in emergency care?", ["It should be banned until it is perfect.", "It will soon replace emergency nurses.", "It should be carefully evaluated and support human skills.", "It has already proved its value in all areas."], 2]
]
},
{
t: "Getting patients home: nurse-led discharge",
b: `For many hospitals, the hardest part of the day is not admitting patients but discharging them. Beds are needed for new admissions, yet patients who are medically ready to leave often wait hours for the paperwork, medications and transport that will allow them to go home. Delays in discharge contribute to crowding in emergency departments and to patients being cared for in corridors.

One cause of delay is that, in many hospitals, only a doctor can authorise discharge. If the patient's condition is stable and their treatment plan is clear, they may still have to wait until a doctor is available to see them, which may not happen until late in the afternoon. On busy days, discharges are sometimes postponed until the next day.

Nurse-led discharge is designed to address this problem. Under this approach, the medical team agrees in advance, often on the morning ward round, the criteria a patient must meet to go home: for example, being free of fever for 24 hours, eating and drinking normally, mobilising safely and having pain controlled with oral medication. When the patient meets these criteria, a nurse can complete the discharge without waiting for further medical review.

The approach has been used successfully for a range of patients, particularly those having planned surgery with predictable recovery, such as joint replacement or hernia repair. Studies have found that nurse-led discharge can lead to earlier discharges in the day and, in some cases, shorter overall stays, without an increase in readmissions or complications. Patients generally report high levels of satisfaction, appreciating the clarity of knowing what needs to happen before they can go home.

Its success depends on several conditions. The criteria must be specific, measurable and agreed by the medical team. Nurses need training and confidence to make the decision, and there must be clear guidance on what to do if a patient does not meet the criteria. Importantly, nurses must feel supported by the organisation; if they fear blame for any problem after discharge, they may be reluctant to use the authority they have been given.

Some doctors have been hesitant, concerned about losing oversight of their patients. Experience suggests that these concerns usually diminish once the system is in place, particularly when doctors realise that they are still setting the criteria, and that it frees them to focus on more complex patients.

Nurse-led discharge is not appropriate for every patient. Those with complex or unpredictable conditions, or with significant social needs, require individual assessment and planning. But for a substantial group of patients, it offers a way to get home sooner, safely.

Discharge is also about more than leaving the building. Nurses are often best placed to ensure that patients understand their medications, know the warning signs to look out for and have follow-up arranged. A well-organised discharge can prevent a readmission; a rushed one can cause it.`,
qs: [
["According to the first paragraph, discharge delays", ["have little effect on other parts of the hospital", "contribute to overcrowding elsewhere in the hospital", "are mainly caused by patients", "only occur in large hospitals"], 1],
["What is one cause of discharge delay mentioned in the second paragraph?", ["patients waiting for a doctor to authorise discharge", "a shortage of hospital transport", "patients refusing to leave", "nurses being too busy"], 0],
["In nurse-led discharge, who decides the discharge criteria?", ["the nurse", "the patient", "the medical team", "the hospital manager"], 2],
["Which patients have most commonly been discharged this way?", ["patients with complex medical conditions", "patients recovering from planned surgery", "older patients with social needs", "patients in intensive care"], 1],
["What do studies of nurse-led discharge show?", ["It increases readmission rates.", "It can lead to earlier discharge without more complications.", "Patients prefer to be discharged by doctors.", "It increases the length of stay."], 1],
["Why might nurses be reluctant to use their authority?", ["They may fear being blamed if something goes wrong.", "They do not have time.", "Patients do not trust them.", "The criteria are too simple."], 0],
["How have some doctors' concerns changed over time?", ["They have increased.", "They usually decrease once the system is used.", "They have led to the system being stopped.", "They have remained the same."], 1],
["What point does the writer make in the final paragraph?", ["Discharge is mainly an administrative task.", "Good discharge planning can help prevent readmission.", "Patients should arrange their own follow-up.", "Doctors should explain medications to patients."], 1]
]
}
],
W: {
title: "Discharge letter to a GP after acute kidney injury",
notes: `You are a registered nurse on the renal ward at Westgate Hospital. Today's date is 12 March.

Patient details
Name: Mrs Patricia Hughes
DOB: 23/11/1956 (69 years)
GP: Dr Andrew Moss, Westgate Family Practice, 15 Church Lane, Westgate
Admitted: 06/03 – acute kidney injury (AKI) after 4 days of gastroenteritis (vomiting, diarrhoea)
Past history: hypertension, type 2 diabetes, osteoarthritis
Usual medications: ramipril 5 mg daily, metformin 1 g BD, ibuprofen 400 mg TDS (bought over the counter for knee pain), amlodipine 5 mg daily

Nursing notes
06/03 Creatinine 285 (usual baseline 85). Dehydrated, BP 95/60. IV fluids. Ramipril, metformin and ibuprofen withheld.
08/03 Gastroenteritis resolved. Eating and drinking normally.
10/03 Creatinine 140. BP 135/80. BGLs 8–13 mmol/L – short-acting insulin as needed in hospital.
11/03 Creatinine 110. Pharmacist counselled patient: avoid ibuprofen and other anti-inflammatories; paracetamol for knee pain. "Sick day" plan explained: stop ramipril and metformin if vomiting/diarrhoea and seek medical advice.
12/03 Discharged home. Metformin restarted 500 mg BD (reduced dose). Ramipril remains withheld. Amlodipine continued. Paracetamol 1 g QID PRN.

Requests to GP:
- Repeat kidney function and electrolytes in 1 week
- Decide when to restart ramipril depending on kidney function and BP
- Review diabetes control (consider increasing metformin if kidney function recovers)`,
task: "Using the information in the case notes, write a letter to Dr Andrew Moss, the patient's GP, at Westgate Family Practice, 15 Church Lane, Westgate, informing him of Mrs Hughes's discharge and requesting follow-up. In your answer: expand the relevant notes into complete sentences; do not use note form; use letter format. The body of the letter should be approximately 180–200 words.",
model: `Dr Andrew Moss
Westgate Family Practice
15 Church Lane
Westgate

12 March

Dear Dr Moss,

Re: Mrs Patricia Hughes, DOB 23/11/1956

I am writing to inform you that Mrs Hughes, a 69-year-old woman, was discharged home today following treatment for an acute kidney injury, and to request your follow-up.

Mrs Hughes was admitted on 6 March after four days of vomiting and diarrhoea due to gastroenteritis. She was dehydrated and hypotensive, and her creatinine had risen to 285 from her usual baseline of 85. She was treated with intravenous fluids, and her ramipril, metformin and ibuprofen were withheld. Her gastroenteritis has resolved, and her creatinine has improved to 110.

Several changes have been made to her medications. Metformin has been restarted at a reduced dose of 500 mg twice daily, but ramipril remains withheld. Amlodipine has been continued. She has been advised to stop taking ibuprofen and to use paracetamol for her knee pain instead. She has also been given a sick day plan.

Her blood glucose levels were 8–13 mmol/L during admission.

I would be grateful if you could repeat her kidney function and electrolytes in one week, decide when to restart ramipril, and review her diabetes control, including whether her metformin dose can be increased.

Yours sincerely,

Registered Nurse
Renal Ward, Westgate Hospital`
},
S: [
{
set: "Diabetes clinic",
cand: "Diabetes nurse",
card: ["A 20-year-old with type 1 diabetes is going to a music festival for three days. He wants advice but says he 'doesn't want a lecture'.", "Respect his independence and find out his plans (alcohol, dancing, sleeping arrangements, food).", "Explain the risk of hypoglycaemia with alcohol and exercise, including overnight and the next day.", "Advise practical steps (eat when drinking, check glucose more often, carry fast-acting glucose, tell friends what to do).", "Discuss storing insulin in the heat (cool bag) and carrying spare supplies.", "Suggest he wear medical identification and know where the first aid tent is."],
pat: { role: "Patient, 20, university student", lines: ["I'm going to a festival this weekend with my mates. I know what you're going to say, so please don't give me a lecture.", "Yeah, there'll be drinking. And dancing all night. That's the point.", "Why would alcohol make my sugar go low? I thought drinks had sugar in them.", "Where am I meant to keep my insulin? It's going to be like thirty-five degrees.", "My friends don't really know much about diabetes.", "Okay, that's actually useful. Thanks for not making it a big deal."] }
},
{
set: "Surgical ward",
cand: "Nurse",
card: ["A 55-year-old woman is being discharged after abdominal surgery. She needs to give herself enoxaparin injections daily for four weeks. She is frightened of needles.", "Acknowledge her fear and find out what worries her.", "Explain why the injections are needed (to prevent blood clots after surgery).", "Explain the technique step by step (pinch skin on abdomen, insert needle at 90 degrees, don't expel the air bubble, don't rub).", "Offer to supervise her giving the next dose before she goes home.", "Discuss options if she cannot manage (family member, community nurse)."],
pat: { role: "Patient, 55, after abdominal surgery", lines: ["Four weeks of injections? I'm sorry, I can't do it. I faint at the sight of needles.", "Why do I need them? I'm walking around fine now.", "Does it hurt a lot?", "What if I do it wrong and hurt myself?", "My husband could maybe do it, but he's away for work half the week.", "Alright. Can you stay with me while I try the first one?"] }
}
]
});
