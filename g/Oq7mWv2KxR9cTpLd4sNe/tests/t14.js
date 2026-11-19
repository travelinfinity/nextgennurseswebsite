/* NextGen Nurses OET Nursing practice · Test 14 (with two extra Writing tasks). Original practice material, not real OET items. */
OET_TEST({
n: 14,
LA: [
{
who: "a doctor talking to a patient called Helen Ford, who has been feeling tired",
cast: { D: ["m", "Doctor"], P: ["f", "Helen Ford (patient)"] },
title: "Patient: Helen Ford (47) · Fatigue",
notes: `#Symptoms
tiredness for about {}
gained {} kilograms without changing her diet
always feels {}, even in summer
skin has become {}
hair is {}
has had {} for several weeks
#Other
periods have become {}
mood: feels {}
#Family history
her {} has an underactive thyroid
#Results
TSH level is {}
#Plan
start {} tablets each morning
take on an {} stomach`,
ans: ["six months|6 months", "five|5", "cold", "dry", "thinning|falling out", "constipation", "heavier", "low|flat|down", "sister", "high|raised", "thyroxine", "empty"],
s: `D: Hello, Helen. You came in last week about tiredness, and I've got your blood results. Before we go through them, how have you been?
P: Still exhausted. It's been going on for about six months now. I'm sleeping nine hours a night and I still wake up tired.
D: You mentioned your weight had changed?
P: Yes, I've gained five kilos, and I haven't changed what I eat at all. If anything, I'm eating less.
D: Have you noticed anything else?
P: I'm always cold. My husband jokes about it. Even in summer I'm wearing a cardigan in the office.
D: Any changes in your skin or hair?
P: My skin's become really dry, especially my hands and legs. And my hair is thinning. I find it all over my pillow.
D: How are your bowels?
P: I've been constipated for several weeks. That's not like me.
D: And your periods?
P: They've become heavier over the last few months.
D: How's your mood been?
P: Low, I suppose. I don't feel like doing much. I wondered if I was depressed.
D: Is there anyone in your family with thyroid problems?
P: My sister has an underactive thyroid. She's on tablets for it.
D: That's useful to know, because thyroid problems often run in families. Well, your results explain a lot. Your TSH level is high. TSH is a hormone that tells the thyroid gland to work harder, and when it's high, it usually means the thyroid isn't producing enough hormone. So you have an underactive thyroid, or hypothyroidism.
P: So that's what's causing everything?
D: Very likely, yes. Tiredness, weight gain, feeling cold, dry skin, constipation, heavier periods and low mood are all typical.
P: Is it treatable?
D: Very. You'll take a tablet called thyroxine, which replaces the hormone your thyroid isn't making. You take it once a day, in the morning, on an empty stomach, about half an hour before breakfast. Some things, like calcium and iron tablets, can stop it being absorbed, so take those at a different time of day.
P: How long before I feel better?
D: Most people start to notice a difference within a few weeks, but it can take a couple of months to feel completely back to normal. We'll repeat the blood test in six weeks and adjust the dose if needed. It's usually a lifelong treatment.`
},
{
who: "a physiotherapist talking to a patient called Peter O'Neill, three days after a hip replacement",
cast: { T: ["f", "Physiotherapist"], P: ["m", "Peter O'Neill (patient)"] },
title: "Patient: Peter O'Neill (71) · Day 3 after left total hip replacement",
notes: `#Progress
walked to the {} and back this morning
currently using {}
pain score with walking: {} out of 10
#Concerns
worried about his hip {}
found getting out of {} difficult
#Home
lives in a {} house
has {} steps at the front door
#Activities
keen to return to {}
asked about {} his car
#Plan
practise {} with the physio this afternoon
move on to a {} when steady
attend a {} class after discharge`,
ans: ["nurses' station", "crutches|a frame", "four|4", "dislocating", "bed", "single-storey|one-storey", "three|3", "golf", "driving", "steps|stairs", "walking stick|stick", "hydrotherapy|water exercise"],
s: `T: Good morning, Mr O'Neill. I'm Jenny, the physiotherapist. How did you go with your walk earlier?
P: Not too bad. I walked to the nurses' station and back with the nurse this morning.
T: Wonderful. You're using crutches today, I see. How's the pain when you walk?
P: About four out of ten. It's manageable. Much better than the arthritis was before the operation, to be honest.
T: That's great to hear. Is anything worrying you?
P: I'm scared of dislocating the hip. The surgeon said it's possible, and I keep thinking it'll pop out if I move the wrong way.
T: It's a common worry. The risk is low, especially if you follow the precautions we've discussed: don't bend the hip too far, don't cross your legs, and don't twist on the operated leg. These are most important in the first six weeks. Is there anything you've found difficult?
P: Getting out of bed. I don't really know how to do it without bending too much.
T: Let's practise that together. Keep your operated leg out straight in front of you, and use your arms to push up. I'll show you after we've talked. What's your house like?
P: It's a single-storey house, thankfully. But there are three steps up to the front door.
T: Is there a rail?
P: On one side.
T: That's fine. We'll practise steps this afternoon, so you're confident before you go home. The rule is: up with the good leg first, and down with the operated leg first.
P: Up with the good, down with the bad. I'll remember that.
T: Exactly. What would you like to get back to?
P: Golf. I play twice a week with my mates. I've missed it terribly.
T: Most people get back to golf at around three months, but check with your surgeon first. And it's best to start with putting and chipping before full swings.
P: What about driving? My wife doesn't drive.
T: Usually around six weeks, once you can move your leg quickly and safely in an emergency, but again, the surgeon will confirm. For now, when you're steady, we'll move you from the crutches onto a walking stick. And after you go home, I'd recommend a hydrotherapy class at the community centre. Exercising in water is great after a hip replacement.`
}
],
LB: [
{
who: "two nurses discussing a patient on a heart monitor",
cast: { A: ["f", "Nurse"], B: ["m", "Nurse"] },
s: `A: Mrs Fry's monitor is showing an irregular rhythm. Her heart rate is about one hundred and thirty. She was in a normal rhythm earlier.
B: Is she symptomatic?
A: She says her heart is racing, but her blood pressure's fine and she's not breathless.
B: Do a twelve-lead ECG now to confirm the rhythm, then call the doctor with the result. She'll probably need her heart rate controlled and a decision about anticoagulation.`,
q: "What does the second nurse ask the first nurse to do?",
o: ["give the patient medication to slow her heart rate", "record an ECG and then inform the doctor", "transfer the patient to intensive care"],
a: 1,
why: "'Do a twelve-lead ECG now … then call the doctor.'"
},
{
who: "a nurse unit manager speaking at a ward meeting",
cast: { M: ["m", "Nurse unit manager"] },
s: `M: Last weekend, the drug cupboard keys went home in someone's pocket. Night staff couldn't access the controlled drugs for two hours until the keys were returned. From now on, the keys must be handed directly to the nurse in charge at the end of every shift, and signed for in the key register. No exceptions.`,
q: "Why is the manager introducing the new rule?",
o: ["Controlled drugs were missing from the cupboard.", "Staff were unable to get medicines because of lost keys.", "The key register had not been completed."],
a: 1,
why: "Night staff couldn't access the controlled drugs because the keys went home."
},
{
who: "a doctor talking to a nurse about blood cultures",
cast: { D: ["f", "Doctor"], N: ["m", "Nurse"] },
s: `D: Mr Kim's temperature is thirty-nine. Before we start antibiotics, I'd like two sets of blood cultures, from two different sites, so one from each arm if possible.
N: He has a central line. Can I take one set from that?
D: Yes, take one set from the line and one from a vein. That helps us tell if the line itself is infected. Please label them clearly with where each was taken from.`,
q: "Why does the doctor want samples from both the line and a vein?",
o: ["to find out whether the central line is the source of infection", "because the central line is blocked", "to reduce the number of needle sticks"],
a: 0,
why: "'That helps us tell if the line itself is infected.'"
},
{
who: "an occupational therapist talking to a nurse",
cast: { O: ["f", "Occupational therapist"], N: ["f", "Nurse"] },
s: `O: I've made a resting splint for Mrs Ali's right hand. Her wrist and fingers have been curling in since her stroke. She should wear it at night and for a couple of hours in the afternoon.
N: Anything to check?
O: Yes, take it off every four hours during the times she's wearing it, to check the skin for red marks, especially over the knuckles. If there are marks that last more than twenty minutes, take it off and let me know.`,
q: "What does the occupational therapist ask the nurse to check?",
o: ["the patient's hand movement", "the patient's skin under the splint", "the position of the splint at night"],
a: 1,
why: "Check the skin for red marks, especially over the knuckles."
},
{
who: "a pharmacist talking to a nurse about a medication chart",
cast: { P: ["m", "Pharmacist"], N: ["f", "Nurse"] },
s: `P: Mrs Gray's methotrexate has been charted as ten milligrams daily. It should be once a week. Taking it every day can be extremely dangerous.
N: She's had one dose today already.
P: Okay, don't give any more. I've contacted the doctor to correct the chart. Please check with her which day of the week she usually takes it, and document that clearly. We'll also need a blood test in the next few days.`,
q: "What is the problem with the patient's methotrexate?",
o: ["The dose is too low.", "It has been charted too frequently.", "It was given at the wrong time of day."],
a: 1,
why: "It was charted daily but 'should be once a week'."
},
{
who: "a nurse talking to the interpreter service on the phone",
cast: { N: ["m", "Nurse"], I: ["f", "Interpreter service officer"] },
s: `N: I need an Arabic interpreter for a family meeting tomorrow at two, about Mr Hassan's discharge.
I: We can do that. Do you need a face-to-face interpreter, or is phone okay?
N: Face-to-face, please. There'll be six family members, and we'll be discussing his care needs at home.
I: Okay. Can you give me the ward and your name? And if the meeting time changes, let us know at least four hours ahead, or there may be a cancellation fee.`,
q: "What does the interpreter service officer ask the nurse to do?",
o: ["give notice if the meeting time changes", "book a phone interpreter instead", "reduce the number of family members"],
a: 0,
why: "Changes must be notified 'at least four hours ahead'."
}
],
LC: [
{
who: "an interview with Mariam Yousef, a refugee health nurse",
cast: { I: ["m", "Interviewer"], M: ["f", "Mariam Yousef"] },
s: `I: My guest today is Mariam Yousef, a nurse who works in a refugee health service. Mariam, what does your service do?
M: We provide health assessments and care for people who have recently arrived in Australia as refugees or asylum seekers. Many have spent years in refugee camps or travelling through several countries, with very limited health care. So our first assessment is quite comprehensive. We check immunisations, screen for infections like tuberculosis and hepatitis, look at nutrition, dental health, vision, and of course mental health.
I: What are the most common health problems you see?
M: It varies a lot depending on where people have come from. Vitamin D deficiency is very common, partly because of covered clothing and time spent indoors. Many children have incomplete immunisations, so we create a catch-up schedule. Dental problems are extremely common. And chronic conditions like diabetes and high blood pressure are often undiagnosed.
I: And mental health?
M: Many people have experienced trauma, such as war, persecution, the loss of family members. But I want to be careful here. People often assume that every refugee is traumatised and needs psychological treatment. In fact, many are remarkably resilient. What they often need most is practical help: housing, work, English classes, finding family. Those things can do a lot for mental health. For those who do need specialist help, we refer to a service that specialises in torture and trauma.
I: What are the biggest barriers to care?
M: Language, first of all. We use professional interpreters for every appointment, and we're careful about choosing the interpreter, because sometimes there are ethnic or political tensions between communities. Then there's navigating the system. Our health system is complex even for people born here. And some people have had bad experiences with authorities, so they're cautious about trusting health workers.
I: How do you build trust?
M: By taking time. Our appointments are much longer than a usual GP visit. And by explaining clearly what we're doing and why, and that health information is confidential. We also employ bicultural workers, who come from the same communities. They're incredibly valuable.
I: What do you find most rewarding?
M: Seeing families settle. A child who arrived malnourished and frightened, a year later speaking English and playing soccer. That's why I do this job.`,
qs: [
["Why is the first health assessment so comprehensive?", ["Many people have had limited health care before arriving.", "It is required for a visa.", "Most refugees have serious illnesses."], 0],
["What does Mariam say about vitamin D deficiency?", ["It is rare among refugees.", "It is common, partly due to clothing and time indoors.", "It mainly affects children."], 1],
["What point does Mariam make about mental health?", ["Every refugee needs psychological treatment.", "Practical support can improve mental health.", "Mental health problems are rare."], 1],
["Why is the choice of interpreter important?", ["Some interpreters are not qualified.", "There may be tensions between communities.", "Interpreters are expensive."], 1],
["How does Mariam's service build trust?", ["by keeping appointments short", "by allowing more time and explaining clearly", "by asking families to interpret"], 1],
["What does Mariam find most rewarding?", ["seeing families settle into life in Australia", "diagnosing rare diseases", "training new nurses"], 0]
]
},
{
who: "a presentation by Claire Hughes, an intensive care follow-up nurse, about life after intensive care",
cast: { C: ["f", "Claire Hughes"] },
s: `C: Good afternoon. When we talk about intensive care, we usually focus on survival. Did the patient leave the unit alive? But for many patients, leaving intensive care is not the end of their illness. It's the beginning of a long recovery, and that's what I want to talk about.
C: The term 'post-intensive care syndrome' describes the physical, cognitive and psychological problems that many survivors experience. Physically, patients may have severe muscle weakness, fatigue, breathlessness and pain. Some can't climb stairs or return to work for many months. Cognitively, many have problems with memory, concentration and planning, which can be similar to those seen after a mild brain injury.
C: Psychologically, anxiety, depression and post-traumatic stress are common. Many patients have vivid, frightening memories of hallucinations or nightmares from their time in intensive care, which can feel more real to them than actual events. Some remember being restrained, or believe that staff were trying to harm them.
C: And it doesn't only affect patients. Family members, who often spent days at the bedside not knowing whether their relative would survive, can experience high levels of anxiety and stress too. We sometimes call this post-intensive care syndrome–family.
C: What can be done? One of the simplest interventions is the ICU diary. Nurses and family members write entries in a diary during the patient's stay, describing what happened each day in plain language, sometimes with photographs. Later, the patient can read it, which helps them fill the gaps in their memory and make sense of what they went through. Several studies have found that diaries reduce symptoms of post-traumatic stress, although not all studies agree.
C: Our hospital also runs a follow-up clinic, where patients are seen two to three months after discharge. We assess their physical, cognitive and emotional recovery, and arrange referrals, for example to physiotherapy or psychology. Some patients find it helpful to revisit the intensive care unit, to see the place where they were treated in a calm setting.
C: I'd like to make a request to nurses on general wards. When a patient comes to you from intensive care, they may seem well enough physically. But they may be exhausted, confused about what happened, and frightened. Taking a few minutes to ask how they're feeling about their time in intensive care, and to listen, can make a real difference.`,
qs: [
["What point does Claire make at the start of her talk?", ["Survival rates in intensive care are improving.", "Recovery often continues long after intensive care.", "Most patients recover quickly after discharge."], 1],
["Claire compares the cognitive problems of some survivors to", ["dementia", "the effects of a mild brain injury", "depression"], 1],
["What does Claire say about patients' memories of intensive care?", ["They are usually accurate.", "Some frightening memories feel very real.", "Most patients remember nothing at all."], 1],
["What is the purpose of an ICU diary?", ["to record clinical observations", "to help patients understand what happened to them", "to provide information for the follow-up clinic"], 1],
["What does Claire say about the evidence for ICU diaries?", ["It is consistent in showing large benefits.", "It is generally positive but not entirely consistent.", "It shows they are harmful."], 1],
["What does Claire ask general ward nurses to do?", ["refer all intensive care patients to psychology", "ask patients about their intensive care experience", "keep patients in bed for longer"], 1]
]
}
],
RA: {
topic: "Diabetic foot care",
texts: [
{ h: "Text A", t: "Why feet are at risk", b: `People with diabetes are at increased risk of foot ulcers and amputation because of:
• peripheral neuropathy – loss of protective sensation, so injuries may go unnoticed
• peripheral arterial disease – reduced blood flow, which slows healing
• foot deformity – e.g. bunions, claw toes, which create pressure points.
Foot ulcers precede around 85% of diabetes-related amputations. Many are preventable with early detection and appropriate footwear.` },
{ h: "Text B", t: "Foot risk assessment", b: `All inpatients with diabetes must have a foot assessment within 24 hours of admission. Check:
• sensation using a 10 g monofilament at 3 sites on each foot
• pedal pulses (dorsalis pedis and posterior tibial)
• skin: colour, temperature, calluses, cracks, ulcers
• deformity and footwear.
Risk categories: low (no risk factors), moderate (one risk factor), high (two or more risk factors, or previous ulcer or amputation).
High-risk patients must be referred to podiatry before discharge.` },
{ h: "Text C", t: "Preventing heel ulcers in hospital", b: `Patients with diabetes who are on bed rest are at particular risk of heel pressure injuries, which can develop within hours.
• Offload heels using a pillow under the calves or a heel protection boot.
• Check heels every shift.
• Do not use foam rings ('donuts'), which increase pressure around the area.
• Apply moisturiser to dry skin but NOT between the toes, where moisture can cause skin breakdown and fungal infection.` },
{ h: "Text D", t: "Patient education", b: `Teach patients to:
• check their feet every day, using a mirror if needed, or ask someone to help
• wash feet daily in lukewarm water, testing the temperature with the elbow, not the foot
• dry carefully between the toes
• never walk barefoot, even at home
• cut toenails straight across, or have a podiatrist do it
• seek help the same day for any break in the skin, redness, swelling or discoloration.
Patients should have their feet checked by a health professional at least once a year.` }
],
qs: [
{ k: "m", q: "Which text tells you how often patients should have their feet professionally checked?", a: "D" },
{ k: "m", q: "Which text warns against a particular pressure-relieving device?", a: "C" },
{ k: "m", q: "Which text explains why patients may not feel an injury?", a: "A" },
{ k: "m", q: "Which text tells you which patients must see a podiatrist before going home?", a: "B" },
{ k: "m", q: "Which text tells patients how to check water temperature?", a: "D" },
{ k: "m", q: "Which text describes how quickly heel injuries can develop?", a: "C" },
{ k: "m", q: "Which text gives the proportion of amputations that follow an ulcer?", a: "A" },
{ k: "s", q: "Within how many hours of admission must a foot assessment be done?", a: "24|24 hours|twenty-four" },
{ k: "s", q: "What device is used to test sensation?", a: "10 g monofilament|monofilament|a 10 g monofilament" },
{ k: "s", q: "At how many sites on each foot is sensation tested?", a: "3|three" },
{ k: "s", q: "Name one pulse that should be checked.", a: "dorsalis pedis|posterior tibial" },
{ k: "s", q: "Which risk category applies to a patient with a previous ulcer?", a: "high|high risk" },
{ k: "s", q: "What can be used to offload heels apart from a pillow?", a: "heel protection boot|a heel protection boot|boot" },
{ k: "s", q: "How should toenails be cut?", a: "straight across" },
{ k: "g", q: "Reduced blood flow due to peripheral arterial disease slows {}.", a: "healing" },
{ k: "g", q: "Claw toes are an example of foot {}.", a: "deformity" },
{ k: "g", q: "Moisturiser should not be applied {}.", a: "between the toes" },
{ k: "g", q: "Moisture between the toes can cause skin breakdown and {}.", a: "fungal infection" },
{ k: "g", q: "Patients should never walk {}, even at home.", a: "barefoot" },
{ k: "g", q: "Patients should seek help on the {} for any break in the skin.", a: "same day" }
]
},
RB: [
{ src: "Extract from a policy on visitors during an infectious disease outbreak", b: `During a declared outbreak, visiting to the affected ward will be limited to one nominated visitor per patient per day. Exceptions may be made by the nurse unit manager for patients receiving end-of-life care. All visitors must wear a surgical mask and perform hand hygiene on entry and exit. Visitors with any respiratory symptoms must not visit.`, q: "Who can approve extra visitors during an outbreak?", o: ["the patient's doctor", "the nurse unit manager", "the infection control team"], a: 1, why: "'Exceptions may be made by the nurse unit manager.'" },
{ src: "Email to all nursing staff", b: `Subject: Allergy documentation. When recording an allergy, please include the type of reaction (e.g. rash, swelling, anaphylaxis) and its severity, not just the name of the drug. Many recorded 'allergies' are actually side effects or intolerances, such as nausea, which may lead to patients being denied the most effective treatment. If a patient is unsure about a past reaction, record this and inform the pharmacist.`, q: "Why does the email ask for details of reactions to be recorded?", o: ["to identify which recorded reactions are true allergies", "to reduce the time spent on documentation", "to prevent patients from taking any new medicines"], a: 0, why: "Many 'allergies' are side effects, which may unnecessarily limit treatment." },
{ src: "Extract from guidelines on oral care for ventilated patients", b: `Oral care for patients receiving mechanical ventilation should be performed at least every 4 hours. Brush teeth twice daily with a soft toothbrush and a small amount of toothpaste, and moisten the mouth with water-based gel between brushing. Keep the head of the bed elevated to 30–45 degrees unless contraindicated. Good oral care reduces the risk of ventilator-associated pneumonia.`, q: "What is the main purpose of oral care in ventilated patients?", o: ["to improve patient comfort only", "to reduce the risk of lung infection", "to prevent tooth decay"], a: 1, why: "It 'reduces the risk of ventilator-associated pneumonia'." },
{ src: "Notice on a staff noticeboard", b: `The hospital's annual nursing awards are now open for nominations. Patients, families and staff may nominate any nurse or midwife whose care or teamwork has made a difference. Nomination forms are available at the nurses' station and online. Nominations close on 30 September. Winners will be announced at a ceremony during International Nurses Day celebrations next May.`, q: "Who can make a nomination?", o: ["only nurse unit managers", "patients, families and staff", "nurses and midwives only"], a: 1, why: "'Patients, families and staff may nominate any nurse or midwife.'" },
{ src: "Extract from guidelines on the use of hypnotics in hospital", b: `Sleeping tablets should not be routinely prescribed for hospital inpatients. Poor sleep in hospital is often caused by noise, pain, anxiety or interruptions, which should be addressed first. In older patients, hypnotics increase the risk of falls, confusion and next-day drowsiness. If a hypnotic is considered necessary, it should be prescribed for a short period only and not continued on discharge without review.`, q: "According to the guidelines, what should be done first for a patient who cannot sleep?", o: ["prescribe a short course of sleeping tablets", "look for and address the causes of poor sleep", "move the patient to a single room"], a: 1, why: "Causes such as noise, pain and anxiety 'should be addressed first'." },
{ src: "Memo to staff in a rehabilitation unit", b: `To encourage independence, patients in the unit will now be expected to dress in their own clothes during the day, rather than hospital gowns, wherever possible. Families will be asked to bring in comfortable clothes and suitable footwear. Research shows that wearing day clothes supports dignity and helps patients feel ready to return home. Nurses should assist only as much as needed and record progress in the patient's goals.`, q: "Why are patients being asked to wear their own clothes?", o: ["because there are not enough hospital gowns", "to support their dignity and independence", "to make it easier for families to visit"], a: 1, why: "It 'supports dignity and helps patients feel ready to return home'." }
],
RC: [
{
t: "Not the same heart attack: women and cardiac symptoms",
b: `For many years, the image of a heart attack was that of a middle-aged man clutching his chest. Public health campaigns, medical textbooks and films reinforced this picture. Yet cardiovascular disease is a leading cause of death among women as well as men, and growing evidence suggests that women's heart attacks are more likely to be missed or treated later.

One reason often cited is that women experience different symptoms. It is commonly said that women are more likely than men to have 'atypical' symptoms, such as breathlessness, nausea, fatigue or pain in the back, jaw or arm, rather than classic chest pain. This message has been widely promoted. However, researchers have recently questioned it. Large studies have found that chest pain is the most common symptom in both women and men having a heart attack. Women do tend to report a wider range of additional symptoms, but the difference is smaller than many people assume.

If symptoms are not dramatically different, why are women's heart attacks missed? Part of the explanation may lie in how symptoms are interpreted. Studies have found that when women describe chest pain, it is more likely to be attributed to anxiety or indigestion, both by the women themselves and by clinicians. Women also tend to wait longer before seeking help, sometimes because they do not believe they are at risk, or because they prioritise caring responsibilities.

There are also biological differences. Women are more likely than men to have heart attacks that are not caused by a blocked major artery, for example those caused by spasm of an artery, a tear in the artery wall, or problems in the smallest blood vessels. These conditions may not show up on standard tests, which were largely developed in studies involving men.

The consequences of delay can be serious. Studies have reported that women who have a heart attack are less likely than men to receive some recommended investigations and treatments, and that their outcomes are worse in some respects. After a heart attack, women are also less likely to be referred to cardiac rehabilitation, or to attend if referred.

Some of these differences can be explained by age, since women tend to have heart attacks later in life and have more other health conditions. But differences in care have persisted in studies that took these factors into account, suggesting that bias may also play a role.

What should change? Researchers argue that the message 'women have different symptoms' may have had the unintended effect of making women's chest pain seem less significant. A more useful message may be that chest pain should be taken seriously in everyone, regardless of sex. Including more women in cardiovascular research, ensuring that diagnostic tests perform well in women, and making cardiac rehabilitation more accessible are also priorities.

For nurses, particularly those in triage and emergency settings, the key point is simple: do not let a patient's sex, age or apparent anxiety lower the suspicion of a heart problem.`,
qs: [
["What does the first paragraph suggest about the traditional image of a heart attack?", ["It accurately reflected the people most affected.", "It mainly represented men.", "It was based on recent research.", "It focused on younger people."], 1],
["What have large studies found about symptoms?", ["Women rarely experience chest pain.", "Chest pain is the most common symptom in both sexes.", "Men have more additional symptoms than women.", "Symptoms are identical in men and women."], 1],
["According to the third paragraph, women's chest pain may be", ["more severe than men's", "more often attributed to other causes", "less frequent at night", "more easily recognised by clinicians"], 1],
["Why might standard tests miss some heart attacks in women?", ["The tests were developed largely in studies of men.", "Women refuse to have the tests.", "The tests are too expensive.", "Women have fewer blocked arteries overall."], 0],
["What does the writer say about cardiac rehabilitation?", ["Women are more likely to attend.", "Women are less likely to be referred or attend.", "It is not suitable for women.", "It has no effect on outcomes."], 1],
["What suggests that bias may be involved?", ["Women have heart attacks at a younger age.", "Differences in care remain after accounting for age and other conditions.", "Women report more symptoms.", "Men receive fewer tests."], 1],
["What unintended effect of the 'different symptoms' message is described?", ["It may have made women's chest pain seem less important.", "It caused more women to attend hospital.", "It increased research funding.", "It made men ignore their symptoms."], 0],
["What is the main advice for nurses?", ["Focus on atypical symptoms in women.", "Treat chest pain seriously in all patients.", "Ask women about anxiety first.", "Refer all women for cardiac tests."], 1]
]
},
{
t: "Counting nurses: the debate over staffing ratios",
b: `How many patients can one nurse safely care for? For decades, the answer was left largely to hospital managers, who adjusted staffing according to budgets, bed numbers and the availability of staff. In recent years, however, legislated minimum nurse-to-patient ratios have become a major issue in many countries, including Australia, where Victoria and Queensland have introduced them for certain types of wards.

Supporters of mandated ratios point to a large body of research linking nurse staffing to patient outcomes. One influential series of studies found that each additional patient per nurse on surgical wards was associated with a measurable increase in the likelihood of patient death within 30 days. Other studies have linked lower staffing with higher rates of falls, pressure injuries, infections and failure to recognise deterioration. A study in Queensland, conducted after ratios were introduced, reported fewer deaths and readmissions, as well as shorter stays, and estimated that the cost of extra staff was outweighed by savings.

Nurses themselves often describe the impact in practical terms. With too many patients, essential care, such as helping patients to eat, mobilise, or understand their medication, is left undone. Researchers call this 'missed care', and studies suggest it is common, even in well-resourced hospitals. Missed care is associated not only with worse patient outcomes but with nurse burnout and intention to leave.

Critics of mandated ratios raise several concerns. Fixed ratios, they argue, do not account for the varying needs of patients. Six patients recovering from minor surgery may need far less care than three who are acutely unwell. A rigid ratio might lead managers to treat the minimum as a target, staffing to the ratio even when patients need more. There are also practical difficulties: if a hospital cannot recruit enough nurses, it may need to close beds to comply, potentially reducing access to care.

Some health systems prefer approaches based on patient acuity, in which staffing is calculated according to the measured needs of the patients on the ward at the time. These systems are more flexible, but they depend on accurate assessment and on management commitment to act on the results. Some nurses are sceptical, having seen acuity tools used to justify existing staffing rather than to increase it.

The skill mix of the nursing workforce matters as well. Replacing registered nurses with less qualified staff can reduce costs, but research suggests that a higher proportion of registered nurses is associated with better outcomes. Ratios that count all nursing staff together, regardless of qualification, may therefore hide important differences.

Debates about staffing are ultimately debates about value. Adequate nurse staffing costs money, but evidence increasingly suggests that inadequate staffing costs more, in avoidable harm, longer stays and lost staff. Whatever mechanism is used, the principle that staffing should be based on evidence about patient safety, rather than on budgets alone, is gaining wider acceptance.`,
qs: [
["According to the first paragraph, staffing levels were traditionally decided by", ["government legislation", "hospital managers", "nurses' unions", "patients' needs alone"], 1],
["What did the influential series of studies find?", ["More patients per nurse was linked to higher patient mortality.", "Nurse staffing had no effect on outcomes.", "Surgical wards needed fewer nurses.", "Patient deaths were mainly caused by doctors."], 0],
["What did the Queensland study report?", ["Costs increased significantly without benefit.", "Patient outcomes improved and savings offset costs.", "More nurses left the profession.", "Readmissions increased."], 1],
["What is 'missed care'?", ["care given to the wrong patient", "necessary care that is not provided", "care provided outside working hours", "care that is not documented"], 1],
["What concern do critics have about fixed ratios?", ["They may not reflect differences in patient needs.", "They require too many doctors.", "They are too flexible.", "They are not supported by nurses."], 0],
["Why are some nurses sceptical of acuity-based systems?", ["They are too complicated to use.", "They have been used to justify current staffing.", "They require legislation.", "They ignore patient needs."], 1],
["What does research suggest about skill mix?", ["Less qualified staff produce better outcomes.", "A higher proportion of registered nurses is linked to better outcomes.", "Skill mix has no effect.", "Ratios should count all staff equally."], 1],
["What is the writer's conclusion?", ["Staffing should be based on budgets.", "Mandated ratios should be abolished.", "Staffing decisions should be guided by evidence on patient safety.", "Acuity tools are the only acceptable approach."], 2]
]
}
],
W: [
{
title: "Referral to a podiatrist for a high-risk diabetic foot",
notes: `You are a registered nurse on the medical ward of Lakeview Hospital. Today's date is 20 November.

Patient details
Name: Mr Henry Clarke
DOB: 04/04/1958 (68 years)
Address: 12 Gum Tree Road, Lakeview
Admitted: 15/11 – community-acquired pneumonia (now resolved)
Past history: type 2 diabetes for 20 years (insulin), peripheral neuropathy, peripheral arterial disease, previous ulcer R big toe (healed 2024), retinopathy (reduced vision)
Social: lives alone; retired truck driver; walks to the shops daily; wears old slippers at home and often walks barefoot in the garden

Nursing notes
16/11 Foot assessment: absent sensation both feet (monofilament 0/3 sites each foot). Weak pedal pulses bilaterally. Thick callus under L 1st metatarsal head. Toenails long and thickened. Dry, cracked heels.
16/11 Risk category: HIGH.
17/11 Heel protection boots applied while in bed. Heels intact.
18/11 Callus area – small dark spot under callus noted (?bleeding under callus). Not opened. Reported to medical team – podiatry review requested, not seen before discharge (podiatrist on leave).
19/11 Foot care education given; patient struggles to see his feet. Daughter (lives 2 hours away) visits weekly.
20/11 Discharged home today.

Requests: urgent podiatry review within 1 week (callus with possible bleeding), nail care, footwear assessment.`,
task: "Using the information in the case notes, write a letter of referral to Ms Joanne Price, Podiatrist, Lakeview Community Health Centre, 3 Lake Street, Lakeview. In your answer: expand the relevant notes into complete sentences; do not use note form; use letter format. The body of the letter should be approximately 180–200 words.",
model: `Ms Joanne Price
Podiatrist
Lakeview Community Health Centre
3 Lake Street
Lakeview

20 November

Dear Ms Price,

Re: Mr Henry Clarke, DOB 04/04/1958
12 Gum Tree Road, Lakeview

I am writing to request an urgent podiatry review for Mr Clarke, a 68-year-old man with type 2 diabetes, who was discharged home today following treatment for pneumonia.

Mr Clarke has had insulin-treated diabetes for 20 years and has peripheral neuropathy, peripheral arterial disease and a previous ulcer on his right big toe, which healed in 2024. On assessment, he had no sensation in either foot, and his pedal pulses were weak. He has been categorised as high risk.

He has a thick callus under his left first metatarsal head, and on 18 November a small dark spot was noted beneath it, which may indicate bleeding. Unfortunately, he could not be reviewed by a podiatrist before discharge. His toenails are long and thickened, and his heels are dry and cracked.

Mr Clarke lives alone and has reduced vision due to retinopathy, so he has difficulty checking his feet. He wears old slippers and often walks barefoot in the garden.

I would be grateful if you could review him within one week to assess the callus, provide nail care and assess his footwear.

Yours sincerely,

Registered Nurse
Medical Ward, Lakeview Hospital`
},
{
title: "Transfer letter to a rehabilitation unit after hip replacement",
notes: `You are a registered nurse on the orthopaedic ward of Central Coast Hospital. Today's date is 14 August.

Patient details
Name: Mr Peter O'Neill
DOB: 22/01/1955 (71 years)
Admitted: 10/08 – elective left total hip replacement (posterior approach) 11/08
Past history: osteoarthritis, hypertension, mild COPD (ex-smoker), hearing aid R ear
Social: lives with wife (does not drive) in single-storey house, 3 front steps with rail on one side; plays golf twice weekly; independent before surgery

Nursing notes
11/08 Surgery uneventful. Hip precautions for 6 weeks: no flexion > 90°, no crossing legs, no internal rotation.
12/08 Mobilised with frame + 1 assist. Pain 6/10 – regular paracetamol, oxycodone PRN.
13/08 Low BP on standing (95/60) – dizzy; settled with fluids. Haemoglobin 98 g/L (pre-op 132). Iron infusion given.
14/08 Walking 20 m with crutches, supervision. Pain 4/10. Wound: dry dressing, staples – removal day 14 (25/08). Enoxaparin 40 mg SC daily for 35 days.
Anxious about dislocation; needs practice getting out of bed safely.
Bowels not opened since 10/08 – aperients commenced.

Plan: transfer to Bayview Rehabilitation Unit today for 1–2 weeks of inpatient rehabilitation (stairs, transfers, gait).
Goals: independent with stick, manage 3 steps, return home with wife.`,
task: "Using the information in the case notes, write a letter to Mr Daniel Ross, Nurse Unit Manager, Bayview Rehabilitation Unit, 9 Cliff Road, Bayview, who will be responsible for Mr O'Neill's care after his transfer today. In your answer: expand the relevant notes into complete sentences; do not use note form; use letter format. The body of the letter should be approximately 180–200 words.",
model: `Mr Daniel Ross
Nurse Unit Manager
Bayview Rehabilitation Unit
9 Cliff Road
Bayview

14 August

Dear Mr Ross,

Re: Mr Peter O'Neill, DOB 22/01/1955

I am writing to inform you about Mr O'Neill, a 71-year-old man who is being transferred to your unit today for inpatient rehabilitation following an elective left total hip replacement.

Mr O'Neill underwent surgery via a posterior approach on 11 August, and he must follow hip precautions for six weeks. He is now walking 20 metres with crutches under supervision. However, he is anxious about dislocation and needs further practice getting out of bed safely.

On 13 August he had a low blood pressure on standing, which settled with fluids. His haemoglobin fell to 98 g/L, and he received an iron infusion. His pain is now 4/10 with regular paracetamol and oxycodone as required.

His wound is dry, and his staples are due for removal on 25 August. He is receiving enoxaparin 40 mg subcutaneously daily for 35 days. His bowels have not opened since 10 August, so aperients have been started.

Mr O'Neill lives with his wife in a single-storey house with three front steps. His goals are to walk independently with a stick, manage the steps and return home. Please note that he wears a hearing aid in his right ear.

Yours sincerely,

Registered Nurse
Orthopaedic Ward, Central Coast Hospital`
},
{
title: "Referral to a community continence nurse",
notes: `You are a registered nurse on the gynaecology ward of Eastern Women's Hospital. Today's date is 6 June.

Patient details
Name: Mrs Susan Taylor
DOB: 12/03/1964 (62 years)
Address: 45 Banksia Drive, Eastwood
Admitted: 04/06 – vaginal hysterectomy for uterine prolapse
Past history: 3 vaginal births, mild asthma, BMI 33
Social: married; works part-time as a school receptionist; enjoys walking group (stopped 1 year ago due to leaking)

Nursing notes
04/06 Surgery uneventful. Indwelling catheter removed 05/06 morning.
05/06 Voiding well; bladder scan post-void residual 60 mL (acceptable).
05/06 Patient disclosed long-standing urine leakage with coughing, sneezing and exercise (stress incontinence) for about 5 years; also some urgency. Uses 3 pads/day. Embarrassed – has not told her GP. Drinks 6 cups of coffee a day, limits water to "avoid accidents".
06/06 Taught basic pelvic floor exercises – unsure if doing them correctly. Discharged home today.
Advice given: no heavy lifting 6 weeks, avoid constipation, gradually increase walking.

Requests:
- Continence assessment (bladder diary, pelvic floor assessment)
- Pelvic floor muscle training program (after surgical review at 6 weeks)
- Advice on fluids and caffeine reduction
- Support to return to walking group`,
task: "Using the information in the case notes, write a letter of referral to Ms Karen Mills, Continence Nurse Advisor, Eastwood Community Health, 11 Station Street, Eastwood. In your answer: expand the relevant notes into complete sentences; do not use note form; use letter format. The body of the letter should be approximately 180–200 words.",
model: `Ms Karen Mills
Continence Nurse Advisor
Eastwood Community Health
11 Station Street
Eastwood

6 June

Dear Ms Mills,

Re: Mrs Susan Taylor, DOB 12/03/1964
45 Banksia Drive, Eastwood

I am writing to refer Mrs Taylor, a 62-year-old part-time school receptionist, for a continence assessment and pelvic floor management.

Mrs Taylor underwent a vaginal hysterectomy for uterine prolapse on 4 June, and her recovery has been uneventful. Her catheter was removed the following day, and she is voiding well, with an acceptable post-void residual of 60 mL. She was discharged home today.

During her admission, she disclosed that she has had stress incontinence for about five years, with leakage on coughing, sneezing and exercise, as well as some urgency. She uses three pads a day and has been too embarrassed to tell her GP. She drinks six cups of coffee a day and limits her water intake to avoid accidents. She stopped attending her walking group a year ago because of leaking.

She has been taught basic pelvic floor exercises but is unsure whether she is doing them correctly.

I would be grateful if you could assess her, including a bladder diary, and provide a pelvic floor muscle training program once she has had her six-week surgical review. Advice on fluids and caffeine, and support to return to her walking group, would also be appreciated.

Yours sincerely,

Registered Nurse
Gynaecology Ward, Eastern Women's Hospital`
}
],
S: [
{
set: "General practice",
cand: "Practice nurse",
card: ["A 47-year-old woman has just been told by the doctor that she has an underactive thyroid and needs to take thyroxine. She has some questions.", "Find out what she understands about the condition.", "Explain how to take thyroxine (once daily, morning, empty stomach, 30 minutes before food; separate from calcium and iron).", "Explain that symptoms improve over weeks and that blood tests will be used to adjust the dose.", "Respond to her concern about taking a tablet 'for life'.", "Explain when to contact the clinic (e.g. palpitations, feeling shaky, symptoms not improving)."],
pat: { role: "Patient, 47, newly diagnosed hypothyroidism", lines: ["The doctor said my thyroid isn't working properly. I didn't really take it all in. What does it mean?", "So when exactly do I take this tablet? I usually have my vitamins with breakfast.", "How long until I stop feeling so tired?", "Do I really have to take it forever? I don't like the idea of being on medication for life.", "Will it help me lose the weight I've put on?", "Okay. And what if I feel worse rather than better?"] }
},
{
set: "Intensive care unit (telephone)",
cand: "Nurse",
card: ["A woman telephones the intensive care unit asking for information about a patient admitted last night after a car accident. She says she is the patient's sister. The patient's wife is listed as next of kin and has asked that information only be given to family members who know the family password.", "Respond politely and explain that you need to protect the patient's privacy.", "Explain the password system and ask if she knows it.", "If she does not know the password, explain that you cannot give details and suggest she contact the patient's wife.", "Show empathy for her worry.", "Provide information about visiting hours and how to contact the unit."],
pat: { role: "Caller, says she is the patient's sister", lines: ["Hello, I'm calling about my brother, Michael Evans. He was in a car accident last night. Is he going to be okay?", "What do you mean you can't tell me? I'm his sister!", "A password? Nobody told me about any password.", "His wife and I don't really get on. I don't want to call her.", "I'm so worried. Can you at least tell me if he's alive?", "Fine. When can I come in to see him?"] }
}
]
});
