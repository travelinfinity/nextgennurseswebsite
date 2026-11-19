/* NextGen Nurses OET Nursing practice · Test 9. Original practice material, not real OET items. */
OET_TEST({
n: 9,
LA: [
{
who: "a physiotherapist talking to a patient called Linda Shaw, who has knee osteoarthritis",
cast: { T: ["m", "Physiotherapist"], P: ["f", "Linda Shaw (patient)"] },
title: "Patient: Linda Shaw (66) · Knee osteoarthritis",
notes: `#Symptoms
pain in {} knees, worse on the right
knee is {} for about half an hour in the morning
pain worse going {} stairs
knee sometimes {} when walking
#Function
has given up {} in the garden
can walk for about {} before needing to rest
#Previous treatment
had an {} on the right knee three years ago
uses {} gel
#Beliefs
believes exercise will {} her knees
hopes to have a knee {}
#Plan
join a {} exercise class
aim to lose {} kilograms`,
ans: ["both", "stiff", "down", "gives way|gives out", "kneeling|weeding", "twenty minutes|20 minutes", "arthroscopy|keyhole operation", "anti-inflammatory|diclofenac", "wear out|damage", "replacement", "water-based|hydrotherapy|aqua|pool", "five|5"],
s: `T: Good morning, Linda. I'm Andrew. Your GP has referred you for your knees. Tell me what's been happening.
P: Both my knees have been getting worse for a few years. The right one's the worst.
T: What's it like when you first get up in the morning?
P: Stiff. Really stiff for about half an hour. Then it loosens up a bit once I get moving.
T: What makes it worse?
P: Stairs. Going down stairs is the worst. Going up isn't as bad.
T: Does the knee ever feel unstable?
P: Sometimes it gives way when I'm walking. I haven't fallen, but it gives me a fright.
T: How is it affecting what you do day to day?
P: I've had to give up kneeling in the garden, which I hate. I love my garden.
T: How far can you walk?
P: About twenty minutes, then I need to sit down.
T: Have you had any treatment for your knees before?
P: I had an arthroscopy on the right knee three years ago. They cleaned it out, but honestly, it didn't help much.
T: That's in line with what research shows now for arthritis. What do you use for the pain?
P: Anti-inflammatory gel, mostly. I rub it in morning and night. And paracetamol when it's bad.
T: Okay. How do you feel about exercise?
P: To be honest, I've been avoiding it. I thought exercise would wear out my knees even more. Isn't that what happens?
T: That's a really common belief, but the evidence actually shows the opposite. Strengthening the muscles around the knee takes pressure off the joint, and regular exercise usually reduces pain. The joint needs movement to stay healthy.
P: Really? I always thought I should rest them.
T: Rest makes the muscles weaker, which tends to make things worse. What are you hoping to get from coming here?
P: Honestly, I was hoping you'd tell me I need a knee replacement. My sister had one and she's like a new woman.
T: A replacement may be an option in the future, and it can work very well. But surgeons usually recommend trying exercise and weight management properly first, and many people find they can put surgery off for years, or avoid it altogether.
P: Okay. What would you suggest?
T: I'd like you to join our water-based exercise class. The water takes weight off the joints, so it's easier to move. Twice a week, for eight weeks. I'll also give you some strengthening exercises to do at home.
P: That sounds manageable.
T: And we talked about weight. Losing even five kilograms can make a real difference to knee pain. Would you like a referral to a dietitian?
P: Yes, I think I would.`
},
{
who: "an oncology nurse talking on the phone to a patient called Graham Hunt, who is having chemotherapy",
cast: { N: ["f", "Oncology nurse"], P: ["m", "Graham Hunt (patient)"] },
title: "Patient: Graham Hunt · Telephone triage, oncology day unit",
notes: `#Current symptoms
temperature this morning: {}
feels {} and shivery
has a {} throat
#Treatment details
receiving chemotherapy for {} cancer
last treatment was {} days ago
#Other
has been taking {} for a headache
has a {} line in his arm
redness around the line? {}
#Medications
has started antibiotics left over from his {}
#Advice
come to the {} immediately
bring his {} card
do not {} himself to hospital`,
ans: ["38.3|38.3 degrees", "achy|weak|aching", "sore", "bowel", "ten|10", "paracetamol", "PICC", "no|none", "dental surgery|dentist|tooth", "emergency department|emergency", "chemotherapy alert|alert", "drive"],
s: `N: Oncology day unit, Ruth speaking.
P: Hi, it's Graham Hunt. I'm one of your chemo patients. I was told to ring if I had a temperature.
N: Yes, you did the right thing, Graham. What was your temperature?
P: Thirty-eight point three, about half an hour ago.
N: Okay. How are you feeling otherwise?
P: Achy and shivery. I just feel awful. And I've got a sore throat.
N: Remind me what you're being treated for.
P: Bowel cancer. I'm on my third cycle.
N: And when was your last treatment?
P: Ten days ago.
N: Right. That's around the time when your white blood cell count is likely to be at its lowest, so you're more at risk of infection. Have you taken anything for your temperature?
P: I took paracetamol about an hour before I measured it, for a headache.
N: That's important. Paracetamol can bring a temperature down, so your real temperature may have been higher. Do you have a line for your chemotherapy?
P: Yes, a PICC line in my left arm.
N: Is there any redness, swelling or discharge around where it goes in?
P: No, none. It looks the same as always.
N: Good. Have you taken any other medications?
P: I had some antibiotics left over from my dental surgery last month, so I took one of those this morning. I thought it might help.
N: I understand why you did that, but please don't take any more of them. They may not be the right antibiotic, and they could make it harder for the hospital to find out what's causing the infection.
P: Oh. Sorry.
N: That's alright. Graham, I need you to come to the emergency department straight away. Fever after chemotherapy can become serious very quickly, and you need to be seen and have blood tests and antibiotics within the hour.
P: Now? I was hoping to wait and see if it settled.
N: Not with these symptoms. Please come now. I'll call the emergency department and let them know you're on your way. Do you have your chemotherapy alert card?
P: Yes, it's in my wallet.
N: Bring it with you and show it at triage. How are you getting here?
P: I was going to drive.
N: Please don't drive yourself while you're feeling like this. Is there someone who can bring you, or would you like me to call an ambulance?
P: My neighbour's home. I'll ask her.`
}
],
LB: [
{
who: "two nurses discussing a patient with an epidural",
cast: { A: ["f", "Nurse"], B: ["m", "Nurse"] },
s: `A: Mrs Fox's epidural is running at eight mils an hour. When I checked her block just now, she couldn't lift her legs off the bed at all. An hour ago she could.
B: Is her pain controlled?
A: Yes, pain score zero.
B: A dense motor block that's getting worse needs urgent review. Stop the infusion and page the anaesthetist now. Keep checking her legs every fifteen minutes until they come.`,
q: "Why does the nurse decide to contact the anaesthetist?",
o: ["The patient's pain is not controlled.", "The patient's leg weakness has increased.", "The epidural infusion has run out."],
a: 1,
why: "She can no longer lift her legs – a worsening motor block."
},
{
who: "a nurse unit manager talking about identification bands",
cast: { M: ["m", "Nurse unit manager"] },
s: `M: In this week's audit, four patients had no identification band, and two had bands with the wrong date of birth because they'd been printed for a different patient with the same surname. Please check every band against the patient's own details when they arrive on the ward, not just the name, and replace any band that's missing or unreadable straight away.`,
q: "What is the manager asking staff to do?",
o: ["print new bands for all patients", "check identification bands carefully on arrival", "avoid admitting patients with the same surname"],
a: 1,
why: "He asks staff to check every band against the patient's details on arrival."
},
{
who: "a doctor and a nurse discussing an infusion",
cast: { D: ["f", "Doctor"], N: ["m", "Nurse"] },
s: `N: You've charted forty millimoles of potassium in a hundred mils over one hour. Our policy says a maximum of ten millimoles an hour through a peripheral line.
D: You're right, sorry. That's the rate we use in ICU through a central line. Let's make it forty millimoles in a litre over four hours instead. I'll rewrite the order now.`,
q: "Why does the doctor change the order?",
o: ["The original rate was unsafe for a peripheral line.", "The patient's potassium level has improved.", "The patient has been transferred to ICU."],
a: 0,
why: "The rate exceeded the peripheral maximum of ten millimoles an hour."
},
{
who: "a social worker talking to a nurse",
cast: { S: ["m", "Social worker"], N: ["f", "Nurse"] },
s: `N: Mr Davies told me he can't afford all the medications on his discharge list. He said he'll just buy the cheapest ones.
S: Thanks for letting me know. Many patients don't mention that. I'll check whether he has a concession card. If he does, his medicines will cost much less. I'll also ask the pharmacist whether any can be supplied from the hospital before he goes.`,
q: "What is the social worker going to do?",
o: ["look into ways to reduce the cost of the patient's medicines", "ask the doctor to remove some medicines from the list", "arrange for the patient to stay in hospital longer"],
a: 0,
why: "He will check for a concession card and ask about hospital supply."
},
{
who: "a nurse educator talking about new equipment",
cast: { E: ["f", "Nurse educator"] },
s: `E: The ward has received a new bariatric bed and a ceiling hoist that can take up to three hundred and fifty kilos. Before you use them, you must complete the fifteen-minute online module and a short practical session with me. Please don't try to use the hoist untrained, even in an emergency. Call the manual handling team, who are available around the clock.`,
q: "What does the educator say about the hoist?",
o: ["It can be used in emergencies without training.", "Staff must be trained before using it.", "It is only available during the day."],
a: 1,
why: "Staff must complete the module and a practical session first."
},
{
who: "a nurse talking to a GP's receptionist on the phone",
cast: { R: ["f", "Receptionist"], N: ["m", "Nurse"] },
s: `R: Dr Brown is asking about Mrs Ng, who was discharged from your ward on Monday. We haven't received a discharge summary, and she's coming in tomorrow. Her daughter says her tablets were changed.
N: I'm sorry about that. I'll find out why it wasn't sent. In the meantime, I'll fax through the medication list from her discharge, and ask the doctor to send the full summary today.`,
q: "What is the nurse going to do first?",
o: ["send the patient's medication list", "contact the patient's daughter", "ask the patient to come back to the ward"],
a: 0,
why: "'In the meantime, I'll fax through the medication list.'"
}
],
LC: [
{
who: "an interview with Kerry Walsh, a nurse who works in a prison health service",
cast: { I: ["m", "Interviewer"], K: ["f", "Kerry Walsh"] },
s: `I: Today I'm talking to Kerry Walsh, a nurse in a prison health service. Kerry, how did you come to work in a prison?
K: Quite by accident. I applied for a six-month contract because I needed a change from the emergency department. That was nine years ago, and I'm still here.
I: What kept you there?
K: The patients, honestly. People in prison have some of the greatest health needs in the community. Many have mental illness, problems with drugs or alcohol, chronic conditions like hepatitis C, and often they've had very little health care before. For some, prison is the first time they've had regular access to a nurse or doctor.
I: What's a typical day like?
K: There's no such thing as typical. I might start with a medication round, which can take hours, then see people in the clinic with anything from a skin infection to chest pain. We also do health assessments for new arrivals. Those first days in custody are a high-risk time, especially for mental health, so the assessment is really important.
I: Are there challenges unique to the setting?
K: Plenty. Security comes first, which means I can't always see someone when I'd like to. If there's a lockdown, the clinic may close. Getting someone to a hospital appointment requires officers and transport, so appointments get cancelled. And people sometimes don't trust health staff, because they see us as part of the prison system.
I: How do you build trust?
K: By being consistent, and by being clear that my role is health care, not punishment. I don't ask what someone's in for. It's not relevant to their treatment, and knowing it could affect the way I treat them, even without meaning to.
I: What about when people leave prison?
K: That's the part that worries me most. The weeks after release are very dangerous, particularly for people who used opioids before prison. Their tolerance has dropped, and the risk of overdose is high. We now give everyone at risk naloxone, the overdose reversal medicine, and training before they leave. We also try to arrange a GP appointment and enough medication to bridge the gap.
I: Would you recommend this work?
K: To the right person, yes. You need to be resilient and non-judgemental. But you can make an enormous difference, and you develop a very broad range of skills.`,
qs: [
["Why did Kerry first take a job in prison health?", ["She wanted a change from her previous work.", "She was interested in mental health.", "She was offered a permanent position."], 0],
["What does Kerry say about many people in prison?", ["They rarely need health care.", "They have often had limited health care before.", "They usually refuse treatment."], 1],
["Why are health assessments for new arrivals important?", ["The first days in custody carry high risk.", "They are required by law.", "They identify people who need surgery."], 0],
["Why doesn't Kerry ask what a patient has been convicted of?", ["Patients find the question offensive.", "Officers don't allow her to ask.", "It might affect how she treats them."], 2],
["What is Kerry's main concern about release from prison?", ["People lose contact with their families.", "People are at high risk of overdose.", "People cannot find housing."], 1],
["Kerry believes nurses in prison health need to be", ["experienced in emergency care", "resilient and non-judgemental", "trained in security procedures"], 1]
]
},
{
who: "a presentation by Dr Hannah Cole, an endocrinologist, about gestational diabetes",
cast: { H: ["f", "Dr Hannah Cole"] },
s: `H: Good afternoon. I'm going to talk about gestational diabetes, which now affects around one in seven pregnancies in Australia.
H: Gestational diabetes is high blood glucose that is first detected during pregnancy. It happens because hormones from the placenta make the body less sensitive to insulin. Most women can produce enough extra insulin to cope, but some can't, and their blood glucose rises.
H: Why has it become more common? Partly because more women are having babies later in life, and rates of obesity have increased. But there's another reason. In 2015, the diagnostic criteria changed, making the threshold lower. So more women are now diagnosed than would have been under the old criteria. That's been controversial. Some argue that it has led to many women with mild glucose elevations receiving intensive monitoring that may not improve outcomes.
H: Whatever your view on that debate, the risks of untreated gestational diabetes are real. The baby may grow too large, which can make birth more difficult. After birth, babies are at risk of low blood glucose. And for the mother, there's a higher chance of needing a caesarean section and of developing high blood pressure in pregnancy.
H: The good news is that most women can manage it with changes to diet and physical activity alone. Women check their blood glucose four times a day and see a dietitian. Around a third will also need medication, usually insulin, although metformin is used increasingly.
H: I want to emphasise something about how the diagnosis is delivered. For many women, it comes as a shock. They may feel guilty, as if they caused it, or worry that they've harmed their baby. How we talk to them matters. I tell women that it is caused largely by the pregnancy hormones, not by anything they did, and that treatment is very effective.
H: Finally, and this is the message I'd most like you to take away: gestational diabetes usually disappears after the birth, but it's a warning sign for the future. Women who have had it have a substantially higher risk of developing type 2 diabetes later in life. Yet many never have the follow-up glucose test that's recommended after birth. Busy new mothers understandably focus on the baby. So every contact, whether with a midwife, child health nurse or GP, is an opportunity to remind them.`,
qs: [
["According to Dr Cole, gestational diabetes occurs because", ["women eat more during pregnancy", "placental hormones reduce the effect of insulin", "the pancreas stops producing insulin"], 1],
["What does Dr Cole say about the 2015 change to diagnostic criteria?", ["It reduced the number of diagnoses.", "It has caused some debate.", "It was based on new treatment methods."], 1],
["Which risk to the baby does Dr Cole mention?", ["low blood glucose after birth", "early labour", "developing type 1 diabetes"], 0],
["How do most women manage gestational diabetes?", ["with insulin injections", "with metformin", "with diet and activity changes"], 2],
["Why does Dr Cole emphasise how the diagnosis is delivered?", ["Women may blame themselves.", "Women often refuse treatment.", "Women do not understand the risks."], 0],
["What is Dr Cole's main message?", ["Gestational diabetes often continues after birth.", "Women need follow-up testing after birth.", "Midwives should manage gestational diabetes."], 1]
]
}
],
RA: {
topic: "Postoperative nausea and vomiting (PONV)",
texts: [
{ h: "Text A", t: "Risk factors", b: `PONV affects around 30% of surgical patients and up to 80% of those at high risk. It is distressing and can delay discharge.
Main patient risk factors (Apfel score – 1 point each):
• female sex
• non-smoker
• history of PONV or motion sickness
• use of postoperative opioids.
Each additional risk factor increases the risk by about 20%. Other contributing factors include long operations, general anaesthesia with volatile agents, and certain types of surgery (e.g. laparoscopic, ear, gynaecological).` },
{ h: "Text B", t: "Prevention", b: `Patients with 2 or more risk factors should receive preventive antiemetics during anaesthesia, as prescribed by the anaesthetist.
Other measures:
• minimise fasting time (clear fluids up to 2 hours before surgery)
• use regional anaesthesia where possible
• reduce opioid use with regular paracetamol and other non-opioid analgesics
• ensure adequate IV hydration.
Avoid giving large volumes of oral fluids immediately after surgery; start with small sips.` },
{ h: "Text C", t: "Treatment on the ward", b: `Assess nausea using a 0–3 scale (0 = none, 3 = severe/vomiting).
If nausea score is 2 or more, give a PRN antiemetic from a DIFFERENT drug class from the one used during anaesthesia, as giving the same drug again is less effective.
Check the anaesthetic record before giving any antiemetic.
Ondansetron: may cause headache and constipation; use caution in patients with prolonged QT interval.
Metoclopramide: avoid in patients with Parkinson's disease or bowel obstruction.
If vomiting persists after two antiemetics from different classes, request medical review.` },
{ h: "Text D", t: "Nursing care", b: `• Position the patient upright or on their side if drowsy, to reduce the risk of aspiration.
• Offer mouth care after vomiting.
• Record the volume and appearance of vomit on the fluid balance chart.
• Watch for signs of dehydration and electrolyte imbalance.
• Avoid strong smells (e.g. food trolleys, perfumes) near the patient.
• Peppermint or ginger may help some patients; check the patient's preferences.
• Encourage slow, deep breathing during episodes of nausea.` }
],
qs: [
{ k: "m", q: "Which text tells you which document to check before giving an antiemetic?", a: "C" },
{ k: "m", q: "Which text describes how to position a sleepy patient who may vomit?", a: "D" },
{ k: "m", q: "Which text explains how much each risk factor adds to the overall risk?", a: "A" },
{ k: "m", q: "Which text gives advice on giving drinks after surgery?", a: "B" },
{ k: "m", q: "Which text suggests natural remedies that may help?", a: "D" },
{ k: "m", q: "Which text tells you when a doctor should review the patient?", a: "C" },
{ k: "m", q: "Which text mentions types of surgery associated with nausea?", a: "A" },
{ k: "s", q: "What percentage of surgical patients overall experience PONV?", a: "30%|around 30%|30" },
{ k: "s", q: "What is the name of the risk score used?", a: "Apfel score|Apfel" },
{ k: "s", q: "How many risk factors mean a patient should receive preventive antiemetics?", a: "2 or more|two or more|2|two" },
{ k: "s", q: "Which type of anaesthesia should be used where possible?", a: "regional anaesthesia|regional" },
{ k: "s", q: "Which nausea score indicates that a PRN antiemetic should be given?", a: "2 or more|2|two or more" },
{ k: "s", q: "Which antiemetic should be avoided in Parkinson's disease?", a: "metoclopramide" },
{ k: "s", q: "Where should the volume of vomit be recorded?", a: "fluid balance chart|the fluid balance chart" },
{ k: "g", q: "A history of motion sickness is a {} for PONV.", a: "risk factor" },
{ k: "g", q: "Using non-opioid analgesics can reduce the use of {}.", a: "opioids|opioid" },
{ k: "g", q: "Giving an antiemetic from the same class used in surgery is {}.", a: "less effective" },
{ k: "g", q: "Ondansetron may cause headache and {}.", a: "constipation" },
{ k: "g", q: "Patients should be offered {} after vomiting.", a: "mouth care" },
{ k: "g", q: "During episodes of nausea, encourage slow, deep {}.", a: "breathing" }
]
},
RB: [
{ src: "Extract from a hospital heatwave plan", b: `When a heatwave warning is issued, ward managers should identify patients at increased risk, including older people, those with heart or kidney disease and those taking diuretics or certain psychiatric medications. Offer fluids regularly unless restricted, monitor fluid balance and temperature, and keep blinds closed during the day. Report any wards where the temperature exceeds 26°C to the facilities manager.`, q: "What should ward managers do during a heatwave?", o: ["move all older patients to cooler wards", "identify the patients most at risk", "stop all diuretic medications"], a: 1, why: "They 'should identify patients at increased risk'." },
{ src: "Email to all graduate nurses", b: `Subject: Graduate support program. All nurses in their first year of practice are allocated a clinical support nurse, who can be contacted on extension 4410 during day and evening shifts. Graduates will also attend six study days during the year; these are paid and rostered. If you have not received your study day dates, please contact the graduate coordinator by the end of this week.`, q: "What should graduates do if they do not know their study day dates?", o: ["call extension 4410", "contact the graduate coordinator", "ask their clinical support nurse"], a: 1, why: "'Please contact the graduate coordinator by the end of this week.'" },
{ src: "Extract from guidelines on wound swabs", b: `Wound swabs should only be taken when there are clinical signs of infection, such as increasing pain, redness, warmth, swelling or purulent discharge. Routine swabbing of wounds without signs of infection is not recommended, as most chronic wounds contain bacteria that are not causing harm. Before swabbing, clean the wound with saline to remove surface debris, then rotate the swab over a 1 cm² area of the wound bed.`, q: "Why do the guidelines advise against routine swabbing?", o: ["because bacteria are usually present without causing infection", "because swabbing can damage the wound", "because the results take too long"], a: 0, why: "Most chronic wounds contain bacteria 'that are not causing harm'." },
{ src: "Notice in a day surgery unit", b: `Patients having a general anaesthetic or sedation must be collected by a responsible adult and should not be left alone for 24 hours. If a patient does not have a responsible adult available, their procedure may need to be rescheduled or they may need to stay overnight. Please confirm these arrangements with every patient at the pre-admission phone call.`, q: "What are staff asked to do during the pre-admission call?", o: ["reschedule patients who live alone", "check that the patient will have an adult with them", "arrange overnight beds for all patients"], a: 1, why: "Staff must 'confirm these arrangements' about a responsible adult." },
{ src: "Extract from a policy on smoking", b: `The hospital is a smoke-free site, including all buildings, car parks and grounds. Nurses should ask all patients about smoking on admission and offer nicotine replacement therapy (NRT) to every patient who smokes, to manage withdrawal and support quitting. NRT can be prescribed by a nurse under the standing order. Patients who wish to leave the ward to smoke should be informed of the risks, especially if they are on oxygen or are at risk of falls.`, q: "According to the policy, nurses can", o: ["allow patients to smoke in the car park", "start NRT without a doctor's order", "refuse to let patients leave the ward"], a: 1, why: "NRT 'can be prescribed by a nurse under the standing order'." },
{ src: "Memo to ward staff", b: `A number of patients have been discharged without their own medications, which were stored in the ward's medication room. Families have then had to return to collect them. From now on, the discharging nurse must check the patient's own medication drawer and the medication room fridge as part of the discharge checklist, and sign to confirm this has been done.`, q: "What problem does the memo address?", o: ["patients' medications being forgotten at discharge", "medications being stored in the wrong fridge", "families bringing in the wrong medications"], a: 0, why: "Patients were 'discharged without their own medications'." }
],
RC: [
{
t: "When the heat kills",
b: `Australians are used to hot summers, but the heatwaves of recent years have been more frequent, longer and more intense. Heatwaves are now recognised as the deadliest natural hazard in Australia, responsible for more deaths than bushfires, floods and storms combined. Yet their effects are often hidden. Unlike a bushfire, a heatwave leaves no visible damage, and the people it harms frequently die quietly at home.

The human body is designed to maintain a core temperature of about 37°C. In hot conditions, it loses heat mainly through sweating and by increasing blood flow to the skin. These responses place extra strain on the heart, and they depend on adequate fluid. When temperatures remain high overnight, the body has no chance to recover, and the risk of illness rises sharply.

Those most at risk include older people, whose ability to sense thirst and regulate temperature declines with age; people with heart, lung or kidney disease; young children; and people who work outdoors. Certain medications also increase risk. Diuretics can cause dehydration, some heart medications reduce the ability to increase cardiac output, and several psychiatric medicines interfere with sweating or temperature regulation.

Social factors are just as important. People who live alone, who are socially isolated, or who cannot afford to run air conditioning are particularly vulnerable. In the 2009 Victorian heatwave, many of those who died were older people living alone, and some were found days later. The experience led to the introduction of heat health warning systems and programmes in which volunteers or council staff telephone vulnerable residents during heatwaves.

Hospitals and health services are also affected. During heatwaves, emergency department presentations increase, not only for heat stroke, but for kidney problems, heart attacks and mental health crises. Demand for ambulances rises. Ironically, some older hospital buildings struggle to keep wards cool, putting inpatients at risk.

Nurses have a particular role in prevention. Community and practice nurses can identify patients at high risk before summer and help them prepare a heat health plan, covering how to keep cool, how much to drink and who to contact. Reviewing medications with the patient's doctor before a heatwave may also be appropriate. In hospitals, nurses can monitor patients' fluid balance and body temperature, and ensure that those on fluid restrictions are carefully assessed rather than left without adequate hydration.

Advice for the public tends to focus on drinking water and staying indoors, but some messages are less obvious. Fans may help in moderate heat, but at very high temperatures they can actually increase heat gain. Cool showers, damp cloths and spending time in air-conditioned public spaces such as libraries and shopping centres can be more effective. Checking on neighbours who live alone may save a life.

Climate projections suggest that heatwaves will continue to become more severe. Preparing for them is no longer an occasional concern, but a core part of public health planning.`,
qs: [
["Why does the writer describe the effects of heatwaves as 'hidden'?", ["They cause less damage than bushfires.", "Many deaths occur unnoticed in people's homes.", "They are not reported in the media.", "They mainly affect remote areas."], 1],
["According to the second paragraph, why are hot nights particularly dangerous?", ["People drink less at night.", "The body cannot recover from the day's heat.", "Air conditioning is often switched off.", "Sweating stops during sleep."], 1],
["Why are older people at increased risk?", ["They are less able to sense thirst and control temperature.", "They spend more time outdoors.", "They are more likely to live in hot areas.", "They sweat more than younger people."], 0],
["What did the 2009 Victorian heatwave lead to?", ["new building standards for hospitals", "warning systems and phone calls to vulnerable people", "free air conditioning for older people", "more ambulances in rural areas"], 1],
["What does the writer say about hospitals during heatwaves?", ["Admissions for heat stroke fall.", "Some older buildings have difficulty keeping wards cool.", "Mental health presentations decrease.", "Demand for ambulances remains stable."], 1],
["What does the writer suggest nurses do before summer?", ["help high-risk patients make a plan for hot weather", "stop all diuretic medications", "install fans in patients' homes", "admit older patients to hospital"], 0],
["What does the writer say about fans?", ["They are the most effective way to keep cool.", "They may be counterproductive in extreme heat.", "They should be used with cool showers.", "They are too expensive for many people."], 1],
["What is the writer's main conclusion?", ["Heatwaves are becoming less frequent.", "Heatwave preparation should be a standard part of public health.", "Hospitals are responsible for heatwave deaths.", "Public advice about heatwaves is adequate."], 1]
]
},
{
t: "Easing the transition: support for new graduate nurses",
b: `The first year of nursing practice is often described as one of the most challenging periods in a nurse's career. After years of study and supervised placements, new graduates find themselves responsible for a full patient load, making decisions under time pressure and working night shifts for the first time. Researchers have used the term 'transition shock' to describe the stress, uncertainty and sometimes disillusionment that many experience.

The consequences extend beyond individual distress. Turnover among first-year nurses is high in many countries, with a significant proportion leaving their first position within twelve months, and some leaving the profession altogether. Given the cost of educating a nurse, and the global shortage of nursing staff, losing new graduates early represents a substantial waste of investment.

What causes transition shock? New graduates commonly report a gap between what they learned at university and the realities of clinical work. They describe feeling unprepared for the pace and volume of tasks, for the emotional demands of caring for very sick or dying patients, and for the complexity of working within a team. Some also describe a fear of making mistakes and reluctance to ask questions, for fear of appearing incompetent.

Workplace culture plays an important role. Graduates who feel welcomed and supported tend to adjust more successfully than those who encounter what has been called 'horizontal violence': belittling, exclusion or hostility from more experienced colleagues. While such behaviour is not universal, it has been reported in nursing for decades, and new graduates are particularly vulnerable to it.

Most Australian hospitals now offer formal graduate programmes. These typically include a supernumerary orientation period, during which the graduate works alongside an experienced nurse without their own patient load, as well as study days and rotations through different clinical areas. Evidence suggests that such programmes improve confidence and retention, although their quality varies considerably.

The role of preceptors, experienced nurses who guide graduates on a day-to-day basis, appears particularly significant. Effective preceptors provide feedback, model good practice and, importantly, make graduates feel safe to ask questions. Yet preceptors themselves often receive little training or recognition for the role, and may be expected to precept while carrying a full patient load. Some hospitals have responded by providing preceptor training and allocating protected time.

Graduates also benefit from support from one another. Peer groups, in which new nurses meet regularly to share experiences, have been found to reduce feelings of isolation. Hearing that others are struggling with the same difficulties can be reassuring in itself.

Ultimately, the transition to practice is a shared responsibility. Universities can prepare students more realistically for clinical work; employers can create supportive environments; and experienced nurses can remember what their own first year felt like.`,
qs: [
["What is 'transition shock'?", ["the stress experienced by nurses moving into practice", "the difficulty of changing hospitals", "the shock of working in intensive care", "the change from day to night shifts"], 0],
["Why does the writer describe early turnover as 'a substantial waste'?", ["New nurses are paid more than experienced nurses.", "Educating nurses is costly and staff are in short supply.", "Graduates rarely return to nursing.", "Hospitals must pay for recruitment."], 1],
["According to the third paragraph, some new graduates hesitate to ask questions because they", ["do not know who to ask", "are worried about seeming incompetent", "believe they already know the answers", "are too busy"], 1],
["What is 'horizontal violence'?", ["physical aggression from patients", "hostile behaviour from fellow nurses", "conflict between nurses and doctors", "pressure from managers"], 1],
["What does the writer say about graduate programmes?", ["They are always of high quality.", "They have no effect on retention.", "They can help but vary in quality.", "They are only offered in large hospitals."], 2],
["What problem with preceptors is mentioned?", ["They are often too strict.", "They often lack training and time for the role.", "They are usually new graduates themselves.", "They are paid extra for the role."], 1],
["What benefit of peer groups is described?", ["They reduce isolation.", "They replace preceptors.", "They improve clinical skills.", "They shorten orientation periods."], 0],
["What is the writer's conclusion?", ["Universities are mainly responsible for transition shock.", "Graduates should be more resilient.", "Several groups share responsibility for supporting graduates.", "Graduate programmes should be compulsory."], 2]
]
}
],
W: {
title: "Referral to an Aged Care Assessment Team",
notes: `You are a registered nurse on the general medical ward of Valley Hospital. Today's date is 11 April.

Patient details
Name: Mrs Edna Fraser
DOB: 30/01/1939 (87 years)
Address: 4 Hill Street, Valleyview
Admitted: 05/04 – fall at home; found by neighbour after several hours on floor; dehydration; urinary tract infection
Past history: heart failure, osteoporosis, macular degeneration (poor vision), mild cognitive impairment
Social: widow, lives alone in two-storey house (bedroom and bathroom upstairs); son lives interstate, calls weekly; neighbour helps with shopping; no current home services; still drives occasionally

Nursing notes
05/04 Bruising L hip, no fracture on X-ray. IV fluids. Antibiotics.
07/04 UTI resolved. Mild confusion on admission – now back to baseline (per son).
08/04 Mobilising with four-wheeled frame. Physio: unsteady on stairs; needs supervision.
09/04 OT assessment: difficulty with showering and meal preparation; poor vision affects reading medication labels – taking tablets incorrectly at home (blister pack recommended).
10/04 Patient wishes to return home; would consider moving bedroom downstairs. Son supportive.
11/04 Medically ready for discharge.

Requests: ACAT assessment for home care package (personal care, meals, medication support, cleaning); personal alarm; consider review of driving.`,
task: "Using the information in the case notes, write a letter of referral to the Aged Care Assessment Team (ACAT), Valleyview Community Health Centre, 18 Main Road, Valleyview, requesting an assessment for Mrs Fraser. In your answer: expand the relevant notes into complete sentences; do not use note form; use letter format. The body of the letter should be approximately 180–200 words.",
model: `Aged Care Assessment Team
Valleyview Community Health Centre
18 Main Road
Valleyview

11 April

Dear Colleagues,

Re: Mrs Edna Fraser, DOB 30/01/1939
4 Hill Street, Valleyview

I am writing to request an assessment for Mrs Fraser, an 87-year-old widow, who is medically ready for discharge and wishes to return home.

Mrs Fraser was admitted on 5 April after a fall at home, where she lay on the floor for several hours before being found by her neighbour. She was treated for dehydration and a urinary tract infection. Her confusion has resolved, and she has returned to her usual cognitive level.

She has heart failure, osteoporosis, poor vision due to macular degeneration and mild cognitive impairment. She now mobilises with a four-wheeled frame but is unsteady on stairs. This is a concern, as her bedroom and bathroom are upstairs; however, she is willing to move her bedroom downstairs.

The occupational therapist found that she has difficulty showering and preparing meals. Because of her poor vision, she has been taking her medications incorrectly, so a blister pack has been recommended.

Mrs Fraser lives alone and currently receives no home services. I would be grateful if you could assess her for a home care package, including personal care, meals, medication support and cleaning, as well as a personal alarm. A review of her driving may also be appropriate.

Yours faithfully,

Registered Nurse
General Medical Ward, Valley Hospital`
},
S: [
{
set: "Oncology day unit",
cand: "Nurse",
card: ["A 42-year-old woman is starting chemotherapy for breast cancer next week. She is upset because she has been told she will probably lose her hair.", "Acknowledge her feelings and find out what she is most worried about.", "Explain when hair loss usually happens (2–3 weeks after the first treatment) and that hair usually grows back after treatment ends.", "Discuss options (cutting hair short beforehand, wigs, scarves, scalp cooling if available).", "Mention financial support for wigs and the Look Good Feel Better program.", "Respond to her worry about telling her young children."],
pat: { role: "Patient, 42, mother of two", lines: ["I know it sounds silly, with everything else going on, but losing my hair is what I'm dreading most.", "When will it start falling out? Will it be all at once?", "Will it ever grow back properly?", "Wigs are so expensive though, aren't they?", "My kids are six and eight. How do I explain it to them without frightening them?", "Thank you. I feel a bit more prepared now."] }
},
{
set: "Orthopaedic outpatient clinic",
cand: "Nurse",
card: ["A 63-year-old man with knee osteoarthritis has been told by the surgeon that he is not yet ready for knee replacement and should try a physiotherapy and weight-loss program first. He is disappointed and frustrated.", "Acknowledge his frustration and find out what he understands about the surgeon's advice.", "Explain why exercise and weight loss are recommended first (reduce pain, improve function, better outcomes if surgery is needed later).", "Explain that surgery remains an option in the future.", "Discuss practical steps (referral to physiotherapy, dietitian, pain relief).", "Respond to his belief that exercise will make his knee worse."],
pat: { role: "Patient, 63, retired builder", lines: ["I waited six months for that appointment and he says I'm not ready for surgery? I can barely walk!", "He said something about losing weight and exercising, but I don't see how that's going to fix my knee.", "Exercise hurts. Surely it's just wearing the joint down more?", "So I'm never getting the operation?", "I've tried to lose weight before. It never works.", "Alright. I'll give the physio a go, but I want to come back if it doesn't help."] }
}
]
});
