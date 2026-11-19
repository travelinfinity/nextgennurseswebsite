/* NextGen Nurses OET Nursing practice · Test 12. Original practice material, not real OET items. */
OET_TEST({
n: 12,
LA: [
{
who: "a nurse talking to a patient called Robert King about his new stoma",
cast: { N: ["f", "Stomal therapy nurse"], P: ["m", "Robert King (patient)"] },
title: "Patient: Robert King (61) · New colostomy, day 5 after surgery",
notes: `#Surgery
operation was for {} of the bowel
stoma is expected to be {}
#Current stoma
stoma looks {} and moist
output: soft and {}
#Skin
redness around the stoma caused by a {}
#Self-care
has emptied the bag {} so far
finds it hard to see the stoma because of his {}
plans to use a {} to see better
#Concerns
worried about {} from the bag
worried about returning to {}
#Plan
cut the base plate {} larger than the stoma
practise a full bag change {}`,
ans: ["cancer", "permanent", "pink|red", "formed", "leak", "twice|two times", "stomach|tummy", "mirror", "smell|odour|odor", "bowls|playing bowls", "two to three millimetres|2-3 mm|2 to 3 mm|two millimetres", "tomorrow|tomorrow morning"],
s: `N: Good morning, Mr King. I'm Laura, the stomal therapy nurse. How are you feeling about your stoma today?
P: Morning. Still getting used to it, to be honest. It's a big change.
N: It certainly is. Can you tell me what you understand about your operation?
P: They took out part of my bowel because of the cancer, and they told me the stoma will be permanent.
N: That's right. Let's have a look at it together. It's looking healthy. It's pink and moist, which is exactly what we want to see. And the output is soft and formed, which is good for a colostomy.
P: What's that red patch on the skin around it?
N: That's from a leak. It looks like some output got under the base plate and irritated the skin. Has the bag been leaking?
P: Once, last night. It was horrible. I had to call the nurse.
N: That must have been upsetting. I think the base plate has been cut a little too large, so some skin was exposed. We'll fix that today. Have you been emptying the bag yourself?
P: Twice so far, with the nurses watching.
N: Well done. What have you found difficult?
P: Seeing it, mainly. I've got a bit of a stomach, and when I look down, it's hard to see the stoma properly.
N: That's really common. Many people use a mirror. If you stand in front of a mirror, or prop one up on the sink, you'll see much better.
P: I've got a shaving mirror I could use.
N: Perfect. Is there anything worrying you about going home?
P: The smell, mainly. I'm terrified that people will be able to smell it.
N: Modern bags have filters and are odour-proof, so when the bag is closed, nobody should smell anything. There are also deodorising drops you can put in the bag. What else?
P: I play bowls three times a week. I don't know if I'll be able to go back to bowls.
N: Most people return to their usual sports. You'll need to wait until the wound has healed, and I'll show you a support belt that can help. Lots of people with stomas play bowls, golf, even swim.
P: That's good to hear.
N: Now, when you cut the base plate, it should be about two to three millimetres larger than the stoma. That protects the skin without squeezing the stoma. I'll give you a measuring guide.
P: Okay.
N: I'd like you to practise a full bag change with me tomorrow, so you feel confident before you go home.`
},
{
who: "a doctor talking to the mother of a child called Lily, who has eczema",
cast: { D: ["m", "Doctor"], M: ["f", "Mother"] },
title: "Child: Lily Morgan (4) · Eczema",
notes: `#Current symptoms
rash mainly in the creases of the {} and knees
itching worst at {}
skin has started to {} in places
#Triggers noticed
worse after {}
seems to react to {} jumpers
#Current treatment
uses a {} moisturiser once a day
stopped the steroid cream because she read it can {}
#Plan
apply moisturiser at least {} a day
use the steroid cream until the skin is {}
replace bubble bath with a {}
keep fingernails {}
return if skin becomes {} or crusted`,
ans: ["elbows", "night", "weep|ooze", "swimming", "wool|woollen", "perfumed|scented", "thin the skin|thin skin|thinning the skin", "twice|two times", "smooth|clear", "soap-free wash|soap substitute|soap-free", "short", "yellow|infected"],
s: `D: Hello, Mrs Morgan. And hello, Lily. What brings you in today?
M: It's Lily's eczema. It's been much worse over the last few weeks.
D: Where is the rash at the moment?
M: Mostly in the creases of her elbows and the backs of her knees. Look, it's all red and rough.
D: Yes, I can see. Is she itchy?
M: Very. It's worst at night. She scratches until it bleeds, and neither of us is sleeping.
D: That's exhausting for you both. Has the skin changed at all?
M: In some places it's started to weep, like a clear fluid coming out.
D: Okay. Have you noticed anything that makes it worse?
M: Swimming, definitely. She started lessons at the local pool a month ago, and it's been bad since then.
D: The chlorine can dry and irritate the skin. Anything else?
M: Her grandmother knitted her some wool jumpers, and she seems to react to them.
D: Wool is a common irritant for children with eczema. Cotton is better against the skin. What are you using on her skin at the moment?
M: A perfumed moisturiser from the supermarket, once a day after her bath.
D: Perfumes can irritate eczema, so a fragrance-free moisturiser would be better. And you were given a steroid cream last time?
M: Yes, but I stopped it after a few days. I read that steroid creams can thin the skin, and I didn't want to damage it.
D: That's a very common worry. When used correctly, for short periods, mild steroid creams are very safe and don't thin the skin. The bigger risk is the eczema staying uncontrolled. So here's what I suggest. Use a thick, fragrance-free moisturiser at least twice a day, and more often if you can. Put it on generously.
M: Okay.
D: Use the steroid cream once a day on the red areas until the skin is smooth again, then stop. That may take one to two weeks.
M: And the bath?
D: Avoid bubble bath and soap. Use a soap-free wash instead, and keep baths short and lukewarm. After swimming, rinse her off straight away and put on her moisturiser.
M: That makes sense.
D: Keep her fingernails short to reduce damage from scratching. And please come back if the skin becomes yellow or crusted, or if she gets a fever, because that could mean an infection.`
}
],
LB: [
{
who: "two nurses discussing a patient's overnight blood glucose",
cast: { A: ["f", "Night nurse"], B: ["m", "Day nurse"] },
s: `A: Mrs Bolton had a hypo at three this morning. Her glucose was two point eight. She was sweaty but alert, so I gave her juice and a sandwich, and she came back up to six point five.
B: Do we know why?
A: She only ate half her dinner, but she still had her full dose of evening insulin. Can you make sure the doctor reviews her insulin dose this morning, and check her glucose before breakfast?`,
q: "What does the night nurse think caused the hypo?",
o: ["The patient was given the wrong insulin.", "The patient ate less than usual but had her usual insulin.", "The patient's glucose was not checked overnight."],
a: 1,
why: "'She only ate half her dinner, but she still had her full dose.'"
},
{
who: "a nurse unit manager talking about patient feedback",
cast: { M: ["m", "Nurse unit manager"] },
s: `M: The patient experience survey results are in. Overall, we did well. Patients said nurses were kind and respectful. But the lowest score was for being told about their medications before going home. Many patients said they didn't understand what their new tablets were for. So from next week, I'd like every patient to have their medications explained by the discharging nurse, using the medication list, before they leave.`,
q: "What does the manager want to improve?",
o: ["how kindly nurses treat patients", "patients' understanding of their medications", "the timing of discharges"],
a: 1,
why: "Patients 'didn't understand what their new tablets were for'."
},
{
who: "a doctor and a nurse discussing a confused patient",
cast: { N: ["f", "Nurse"], D: ["m", "Doctor"] },
s: `N: Mr Fletcher is very agitated tonight. He's trying to pull out his cannula. Can you chart something to sedate him?
D: Let's look for a cause first. Has he passed urine today?
N: Not much, now that you mention it.
D: Can you do a bladder scan? Urinary retention is a common cause of agitation in older men. If his bladder's full, a catheter may settle him without any medication.`,
q: "What does the doctor want to do first?",
o: ["prescribe a sedative", "remove the patient's cannula", "check for a possible cause of the agitation"],
a: 2,
why: "'Let's look for a cause first' – a bladder scan for retention."
},
{
who: "a midwife talking to a ward nurse",
cast: { W: ["f", "Midwife"], N: ["f", "Nurse"] },
s: `N: We've got a breastfeeding mother on our ward after her appendix operation. She's been told to stop breastfeeding while she's on the painkillers.
W: Who told her that?
N: I think it was a misunderstanding in emergency.
W: Most common painkillers and antibiotics are compatible with breastfeeding. Can you ask the pharmacist to check her specific medicines? In the meantime, she can express milk to keep her supply going, and I'll bring a pump up.`,
q: "What is the midwife's view?",
o: ["The mother can probably continue breastfeeding.", "The mother must stop breastfeeding until she goes home.", "The mother's medicines should be stopped."],
a: 0,
why: "'Most common painkillers and antibiotics are compatible with breastfeeding.'"
},
{
who: "a pharmacist talking to a nurse about an antibiotic",
cast: { P: ["m", "Pharmacist"], N: ["f", "Nurse"] },
s: `P: Mr Ramos is on once-daily gentamicin. It can damage the kidneys and hearing, so we monitor levels closely. Please make sure the blood level is taken at the right time, and let me know straight away if his urine output drops or he mentions ringing in his ears. We usually don't continue gentamicin for more than three days without a review.`,
q: "What does the pharmacist ask the nurse to report?",
o: ["any signs of a possible side effect", "any missed doses of gentamicin", "the patient's temperature each day"],
a: 0,
why: "He asks to be told about reduced urine output or ringing in the ears."
},
{
who: "two nurses discussing a possible infection on the ward",
cast: { A: ["m", "Nurse"], B: ["f", "Nurse in charge"] },
s: `A: Mrs Ward from the aged-care home has a very itchy rash between her fingers and on her wrists. Two of the staff who looked after her last week now say they're itchy too.
B: That sounds like it could be scabies. Put her on contact precautions, and ask the doctor to look at the rash. I'll contact infection control and the aged-care home, and we'll ask any staff with symptoms to see staff health.`,
q: "What is the nurse in charge's main concern?",
o: ["the patient's allergic reaction", "the possible spread of an infestation", "the patient's skin care at the aged-care home"],
a: 1,
why: "Staff are itchy too, so she arranges precautions and contacts infection control."
}
],
LC: [
{
who: "an interview with Tom Bradley, a flight nurse with an aeromedical retrieval service",
cast: { I: ["f", "Interviewer"], T: ["m", "Tom Bradley"] },
s: `I: My guest today is Tom Bradley, a flight nurse who works on an aeromedical retrieval service in outback Australia. Tom, what does your job involve?
T: We transport patients by plane from remote communities and small hospitals to larger hospitals. Sometimes that's an emergency: a car crash, a heart attack, a woman in difficult labour. Other times it's planned, like taking a patient to a city hospital for surgery. On many flights, I'm the only clinician on board, along with the pilot.
I: That sounds like a big responsibility.
T: It is. You have to be very independent. On a ward, if something goes wrong, you call for help and someone arrives within minutes. At thirty thousand feet, help is a phone call to a doctor on the ground. So the job requires a lot of experience. Most flight nurses have both nursing and midwifery qualifications and years of emergency or intensive care experience.
I: What's different about caring for patients in the air?
T: The environment affects everything. The cabin is noisy, so you can't easily listen to someone's chest. The space is cramped. And the altitude matters. Air pressure is lower, so gases expand. A small collection of air in the chest, for example, can get larger during the flight and cause serious problems. So we sometimes ask the pilot to fly lower, or we insert a drain before take-off.
I: What part of the job is hardest?
T: Honestly, the decisions before take-off. Once we're in the air, options are limited, so I have to think about everything that might go wrong in the next two or three hours and prepare for it. Sometimes that means delaying the flight to stabilise the patient, even though everyone wants to get going.
I: And the most rewarding?
T: The people. In remote communities, the local health clinic is often run by a remote area nurse, working on their own, sometimes for weeks without a doctor. When we arrive, they've usually done an incredible job keeping a very sick patient stable. I have enormous respect for them.
I: Has technology changed the job?
T: Very much. Video calls mean the doctor on the ground can see the patient before we even take off, and portable ultrasound lets us assess things that we'd have had to guess at years ago. But technology doesn't replace judgement. Phone lines drop out over the desert. You still need to be able to manage on your own.`,
qs: [
["How does Tom describe working as a flight nurse compared with ward nursing?", ["Flight nurses require less experience.", "Flight nurses must work more independently.", "Flight nurses have more support from doctors."], 1],
["Why does Tom mention lower air pressure?", ["It can make some medical problems worse.", "It makes patients feel sick.", "It affects the accuracy of equipment."], 0],
["What does Tom find the hardest part of his job?", ["working with pilots", "the noise in the cabin", "planning before the flight leaves"], 2],
["What does Tom say about remote area nurses?", ["They often work alone in difficult conditions.", "They usually travel with the patient.", "They rely heavily on flight nurses."], 0],
["How has technology changed Tom's work?", ["It has removed the need for doctors.", "It allows better assessment of patients.", "It has made flights shorter."], 1],
["What is Tom's view of technology?", ["It cannot replace clinical judgement.", "It is unreliable and rarely used.", "It is the most important part of the job."], 0]
]
},
{
who: "a presentation by Dr Leila Nasser, a respiratory physician, about obstructive sleep apnoea",
cast: { L: ["f", "Dr Leila Nasser"] },
s: `L: Good afternoon. My topic is obstructive sleep apnoea, a condition that affects a large number of adults and is greatly underdiagnosed.
L: In obstructive sleep apnoea, the airway at the back of the throat repeatedly collapses during sleep, blocking breathing for ten seconds or more. Each time, the oxygen level drops and the brain briefly wakes the person to restart breathing. These awakenings are usually so short that the person doesn't remember them, but they can happen dozens of times an hour.
L: The classic features are loud snoring, pauses in breathing noticed by a partner, and daytime sleepiness. But many people don't recognise their own symptoms. They may say they sleep well, simply because they don't remember waking. Often it's the bed partner who brings them in.
L: Risk factors include obesity, a large neck circumference, male sex, increasing age and alcohol use in the evening, which relaxes the throat muscles. But it's important to know that people who are not overweight can also have sleep apnoea, particularly if they have a small jaw or large tonsils.
L: Why does it matter? Untreated sleep apnoea is associated with high blood pressure, atrial fibrillation, heart disease and stroke. The daytime sleepiness increases the risk of motor vehicle crashes, which is why it's relevant to driving licences, especially for commercial drivers.
L: For nurses in hospital, there's another reason to be aware of it. Patients with sleep apnoea are at increased risk after surgery, particularly when they receive opioids and sedatives, which further relax the airway and reduce the drive to breathe. Some patients have collapsed on the ward on the first night after surgery. So if a patient uses a CPAP machine at home, make sure it comes into hospital with them, and that they use it, including during the day if they're sleeping.
L: CPAP, continuous positive airway pressure, is the main treatment. A mask delivers air at a gentle pressure, which holds the airway open. It's very effective, but many people struggle with it at first. The mask may be uncomfortable, or the air pressure may feel strange. Support in the first few weeks makes a big difference to whether people continue.
L: Other options include weight loss, which can reduce severity substantially, devices that move the lower jaw forward during sleep, and in some cases surgery. Simple advice, like avoiding alcohol in the evening and sleeping on the side, can also help.`,
qs: [
["Why do many people with sleep apnoea not remember waking?", ["The awakenings are very brief.", "They take sleeping tablets.", "They only wake once or twice a night."], 0],
["What does Dr Nasser say about who first notices the problem?", ["It is usually the patient's GP.", "It is often the patient's partner.", "It is usually found in hospital."], 1],
["What point does Dr Nasser make about body weight?", ["Only overweight people develop sleep apnoea.", "People who are not overweight can still have sleep apnoea.", "Weight loss has no effect on sleep apnoea."], 1],
["Why does Dr Nasser mention driving?", ["Sleepiness increases the risk of crashes.", "Commercial drivers have more time to sleep.", "CPAP can be used in vehicles."], 0],
["What advice does Dr Nasser give to nurses?", ["Avoid giving opioids to all surgical patients.", "Make sure patients use their CPAP in hospital.", "Ask patients to sleep sitting up after surgery."], 1],
["According to Dr Nasser, what helps people continue using CPAP?", ["support in the early weeks", "a higher air pressure", "using it only on weekdays"], 0]
]
}
],
RA: {
topic: "Gastroenteritis in children: oral rehydration",
texts: [
{ h: "Text A", t: "Assessing dehydration", b: `Most children with gastroenteritis can be managed at home or with oral fluids.
Signs of moderate dehydration: dry mouth, reduced urine output, sunken eyes, irritability, reduced skin elasticity.
Signs of severe dehydration: drowsiness or reduced responsiveness, mottled or cold peripheries, prolonged capillary refill (more than 3 seconds), rapid breathing.
Weigh the child on admission: the most accurate measure of fluid loss is a comparison with a recent weight. Children under 6 months are at greater risk because they become dehydrated more quickly.` },
{ h: "Text B", t: "Oral rehydration", b: `Oral rehydration solution (ORS) is the preferred treatment for mild to moderate dehydration.
Give small, frequent amounts: 5 mL every 1–2 minutes using a syringe, spoon or cup, gradually increasing as tolerated.
If the child will not drink enough, or vomits persistently, consider nasogastric rehydration. This is safer and as effective as intravenous fluids in most children.
Breastfed infants should continue breastfeeding throughout. Formula-fed infants should restart formula once rehydrated.` },
{ h: "Text C", t: "Fluids to avoid", b: `Do NOT use:
• undiluted fruit juice
• soft drinks
• sports drinks
• cordial
These contain high levels of sugar and too little salt, which can make diarrhoea worse.
If ORS is refused, diluted apple juice (half juice, half water) may be offered to children over 6 months with mild dehydration.
Anti-diarrhoeal medicines (e.g. loperamide) must not be given to children.` },
{ h: "Text D", t: "Discharge advice for parents", b: `• Continue offering fluids frequently.
• Reintroduce the child's normal diet as soon as they are hungry; there is no need to avoid milk or 'starve' the child.
• Wash hands thoroughly after nappy changes and before preparing food.
• Keep the child home from childcare until 48 hours after the last episode of diarrhoea or vomiting.
• Return if: fewer than 4 wet nappies in 24 hours, blood in stools, persistent vomiting, the child becomes drowsy, or severe abdominal pain.` }
],
qs: [
{ k: "m", q: "Which text tells you when a child can return to childcare?", a: "D" },
{ k: "m", q: "Which text explains why some drinks may worsen diarrhoea?", a: "C" },
{ k: "m", q: "Which text tells you how to give oral rehydration solution?", a: "B" },
{ k: "m", q: "Which text describes the most accurate way to measure fluid loss?", a: "A" },
{ k: "m", q: "Which text says parents do not need to stop giving milk?", a: "D" },
{ k: "m", q: "Which text gives an alternative if a child refuses ORS?", a: "C" },
{ k: "m", q: "Which text tells you what to do if a child keeps vomiting?", a: "B" },
{ k: "s", q: "What capillary refill time indicates severe dehydration?", a: "more than 3 seconds|over 3 seconds|>3 seconds|3 seconds" },
{ k: "s", q: "Which age group becomes dehydrated more quickly?", a: "under 6 months|children under 6 months|infants under 6 months" },
{ k: "s", q: "What volume of ORS should initially be given every 1–2 minutes?", a: "5 mL|5 ml|5" },
{ k: "s", q: "What is the alternative to IV fluids if a child will not drink enough?", a: "nasogastric rehydration|nasogastric|NG rehydration" },
{ k: "s", q: "In what proportion should apple juice be diluted?", a: "half juice, half water|half and half|50:50|1:1" },
{ k: "s", q: "What type of medicine must not be given to children?", a: "anti-diarrhoeal medicines|anti-diarrhoeal|antidiarrhoeal" },
{ k: "s", q: "How many wet nappies in 24 hours is the minimum before parents should return?", a: "4|four" },
{ k: "g", q: "Reduced skin {} is a sign of moderate dehydration.", a: "elasticity" },
{ k: "g", q: "Breastfed infants should continue {} throughout their illness.", a: "breastfeeding" },
{ k: "g", q: "Formula should be restarted once the infant is {}.", a: "rehydrated" },
{ k: "g", q: "Sports drinks contain too much sugar and too little {}.", a: "salt" },
{ k: "g", q: "Parents should wash their hands after {} and before preparing food.", a: "nappy changes" },
{ k: "g", q: "Children should return if they have {} in their stools.", a: "blood" }
]
},
RB: [
{ src: "Extract from a hospital policy on chaperones", b: `Patients must be offered a chaperone for any intimate examination or procedure, regardless of the gender of the clinician. The offer and the patient's response must be documented. If the patient declines a chaperone but the clinician feels one is necessary, the clinician may decide to delay the examination until a chaperone is available, unless it is urgent. Family members should not usually act as chaperones.`, q: "What should a clinician do if they want a chaperone but the patient declines?", o: ["proceed without documenting the conversation", "consider delaying a non-urgent examination", "ask a family member to be present instead"], a: 1, why: "The clinician 'may decide to delay the examination … unless it is urgent'." },
{ src: "Email to all ward nurses", b: `Subject: Bed rails on hospital beds. Please note that the new beds have split side rails. When the head section is raised, the gap between the rails is larger, and there is a risk that a patient's arm or head could become trapped. Check the gap each time you adjust the bed, especially for confused or very thin patients. Rail covers are available from the equipment store.`, q: "Why are staff asked to check the gap between the rails?", o: ["to prevent patients from becoming caught", "to make it easier to clean the bed", "to stop patients from climbing out of bed"], a: 0, why: "A patient's arm or head 'could become trapped'." },
{ src: "Extract from guidelines on capillary blood glucose testing", b: `Before testing, ask the patient to wash their hands with warm water and dry them thoroughly, as sugar or other substances on the skin can falsely raise the result. Alcohol wipes are not necessary and may affect the result if the skin is still wet. Use the side of the fingertip, which is less painful, and rotate sites. Do not squeeze the finger excessively, as this can dilute the sample with tissue fluid.`, q: "Why should the patient wash their hands before testing?", o: ["to reduce the risk of infection", "to prevent an inaccurate reading", "to make the test less painful"], a: 1, why: "Substances on the skin 'can falsely raise the result'." },
{ src: "Notice to visitors on a children's ward", b: `Parents and carers are welcome on the ward at any time, and one parent may stay overnight with their child. Other visitors are welcome between 10 am and 7 pm. To protect children with weak immune systems, please do not visit if you have had a cold, cough, vomiting, diarrhoea or a rash in the last 48 hours, or if you have been in contact with chickenpox or measles.`, q: "Who can stay overnight on the ward?", o: ["any visitor who arrives before 7 pm", "one parent of the child", "both parents of the child"], a: 1, why: "'One parent may stay overnight with their child.'" },
{ src: "Extract from a guideline on anticoagulants and procedures", b: `Patients taking direct oral anticoagulants (DOACs), such as apixaban or rivaroxaban, may need to stop them before procedures with a risk of bleeding. The timing depends on the drug, the patient's kidney function and the bleeding risk of the procedure, and must be specified by the treating team. Unlike warfarin, DOACs do not require routine INR monitoring, and bridging with enoxaparin is generally not needed.`, q: "According to the guideline, the timing of stopping a DOAC", o: ["is the same for all patients", "depends on several factors and is decided by the treating team", "is based on the patient's INR result"], a: 1, why: "It 'depends on the drug, the patient's kidney function and the bleeding risk'." },
{ src: "Memo to nursing staff", b: `From next month, all nurses will be required to complete a short questionnaire about their own wellbeing every three months as part of the hospital's staff health program. The questionnaire is voluntary in content and confidential: individual responses will not be shared with managers. Staff who indicate high levels of stress will be offered free sessions with the Employee Assistance Program.`, q: "What does the memo say about the questionnaire responses?", o: ["Managers will review each nurse's answers.", "Answers will remain confidential.", "Nurses who are stressed must attend counselling."], a: 1, why: "'Individual responses will not be shared with managers.'" }
],
RC: [
{
t: "Is the weekend a dangerous time to be in hospital?",
b: `In 2015, a large study in England reported that patients admitted to hospital at the weekend were more likely to die within 30 days than those admitted on weekdays. The finding, which became known as the 'weekend effect', attracted enormous attention. Politicians cited it as evidence that hospitals needed to provide the same level of service seven days a week, and it became central to a bitter dispute over junior doctors' working conditions.

The weekend effect itself has been observed in many countries, including Australia. The simplest explanation is that hospitals have fewer senior staff and fewer services, such as imaging and specialist reviews, at weekends, which could delay diagnosis and treatment. If this were true, increasing weekend staffing would save lives.

Yet as researchers looked more closely, the picture became more complicated. One problem is that the patients admitted at weekends may be different from those admitted on weekdays. Planned admissions, such as elective surgery, mostly occur on weekdays and involve relatively healthy patients. At weekends, a larger proportion of admissions are emergencies. Even among emergency admissions, people may delay coming to hospital until the weekend unless they are very unwell. If weekend patients are sicker on arrival, a higher death rate would be expected regardless of staffing.

Studies that have adjusted more carefully for how ill patients are on admission have generally found that the weekend effect becomes smaller, and in some cases disappears. Researchers have also pointed out that the data used to measure illness severity is often less complete for weekend admissions, which could make weekend patients appear healthier than they really are, and therefore exaggerate the effect.

This does not mean that weekend care is the same as weekday care. Patients and staff regularly report differences: fewer senior doctors on the ward, longer waits for tests and procedures, and delays in discharge. For some specific conditions, such as stroke, there is reasonable evidence that the timing of specialist care affects outcomes, and services have worked to provide consistent treatment regardless of the day.

For nurses, who make up the largest group of staff present in hospitals at weekends, the debate has particular significance. Nursing staffing levels can also be lower at weekends, and some research suggests that the ratio of nurses to patients is associated with patient outcomes at any time of the week. Focusing only on doctors may overlook the importance of nursing and other services.

The lessons of the weekend effect debate extend beyond weekends. It illustrates how difficult it is to draw conclusions about cause from observational data, and how readily a striking statistic can be used to support policy decisions before its meaning is fully understood.`,
qs: [
["What did the 2015 study report?", ["Weekend admissions were less common.", "Patients admitted at weekends had a higher death rate.", "Junior doctors worked longer hours at weekends.", "Hospitals provided better care at weekends."], 1],
["What is the 'simplest explanation' for the weekend effect?", ["Weekend patients are older.", "There are fewer senior staff and services at weekends.", "Patients delay seeking help at weekends.", "Weekend data is less accurate."], 1],
["Why might patients admitted at weekends be sicker?", ["They have been waiting for elective surgery.", "Less unwell people may wait until weekdays.", "Hospitals only admit very sick patients at weekends.", "They are usually older than weekday patients."], 1],
["What happened when studies adjusted more carefully for illness severity?", ["The weekend effect increased.", "The weekend effect usually became smaller.", "The weekend effect was confirmed for all conditions.", "The studies could not be completed."], 1],
["Why might incomplete data exaggerate the weekend effect?", ["Weekend patients may seem healthier than they really are.", "Deaths at weekends are not recorded.", "Weekday patients may seem sicker.", "Fewer tests are done on weekdays."], 0],
["What does the writer say about stroke care?", ["Timing of specialist care may affect outcomes.", "It is better at weekends.", "It is not affected by the day of admission.", "It is provided only on weekdays."], 0],
["Why is the debate significant for nurses?", ["Nurses are rarely present at weekends.", "Nurse staffing may also influence outcomes.", "Nurses are responsible for weekend deaths.", "Nurses were not included in the dispute."], 1],
["What wider lesson does the writer draw?", ["Observational data always proves cause.", "Statistics should never influence policy.", "Striking statistics can be used before they are properly understood.", "Weekend staffing should be reduced."], 2]
]
},
{
t: "Less is more: reducing low-value care",
b: `Every year, patients receive tests, treatments and procedures that are unlikely to benefit them. Some of these are simply unnecessary; others carry risks that outweigh any likely benefit. Examples include imaging for uncomplicated lower back pain, antibiotics for viral infections, routine blood tests that do not change management, and urinary catheters that remain in place longer than needed. Collectively, such practices are known as 'low-value care'.

The scale is considerable. Studies in Australia and elsewhere have estimated that a significant proportion of some common investigations and treatments may be of low value. Low-value care wastes resources that could be used elsewhere, but it can also directly harm patients. An unnecessary scan may detect an incidental finding that leads to further tests, anxiety and sometimes invasive procedures. An unnecessary blood test contributes to hospital-acquired anaemia, particularly in patients who have blood taken daily over a long stay.

Why does low-value care persist? Clinicians may order tests out of habit, or because they fear missing something and being blamed. Patients may expect a test or prescription, and clinicians may feel that providing one is easier than explaining why it is not needed. Systems can also encourage overuse, for example when order sets automatically include tests that are not always required.

In response, professional organisations in many countries have joined campaigns such as Choosing Wisely, which was launched in the United States and later adopted in Australia. Professional colleges, including nursing organisations, were asked to identify practices in their own field that should be questioned. The resulting lists include recommendations such as not routinely inserting urinary catheters for incontinence, and not waking patients for routine observations unless clinically indicated.

The campaign has also produced resources for patients, encouraging them to ask questions such as: Do I really need this test or procedure? What are the risks? Are there simpler, safer options? What happens if I do nothing? These questions aim to support shared decision-making rather than discourage patients from seeking care.

Evidence of the campaign's impact has been mixed. Some specific practices have decreased after targeted interventions, especially when combined with changes to systems, such as removing tests from default order sets or providing clinicians with feedback on their ordering compared with colleagues. Lists of recommendations on their own, without such changes, appear to have limited effect.

Nurses have an important role. They are often the people who notice that a catheter is no longer needed, that daily bloods are being taken without being reviewed, or that a patient is confused about why a test is being done. Raising these questions, in a way that is respectful and focused on the patient, can reduce unnecessary harm.

Reducing low-value care is sometimes misunderstood as rationing. Its advocates argue that it is the opposite: ensuring that patients receive the care that will genuinely help them, and are spared the care that will not.`,
qs: [
["Which of the following is given as an example of low-value care?", ["imaging for uncomplicated lower back pain", "antibiotics for bacterial pneumonia", "vaccination of children", "blood tests before surgery"], 0],
["How can an unnecessary scan harm a patient?", ["It may expose them to infection.", "It may lead to further tests and anxiety.", "It always requires an injection of dye.", "It increases the cost of their medication."], 1],
["According to the third paragraph, why might clinicians order unnecessary tests?", ["They are paid more for each test.", "They worry about missing something.", "Patients refuse to have tests.", "Hospital policy requires them."], 1],
["What were professional colleges asked to do as part of Choosing Wisely?", ["reduce their members' salaries", "identify practices in their own field to question", "stop ordering all routine tests", "create new treatments"], 1],
["What is the purpose of the questions suggested for patients?", ["to discourage patients from seeing doctors", "to support shared decision-making", "to reduce the length of consultations", "to make patients pay for tests"], 1],
["According to the sixth paragraph, which approach has been most effective?", ["publishing lists of recommendations alone", "combining recommendations with system changes", "asking patients to refuse tests", "removing all order sets"], 1],
["What role does the writer suggest nurses can play?", ["ordering fewer tests themselves", "questioning care that may no longer be needed", "explaining test results to patients", "auditing doctors' prescriptions"], 1],
["How do advocates respond to the view that reducing low-value care is rationing?", ["They agree that it limits care.", "They argue it ensures patients get care that benefits them.", "They say it mainly saves money.", "They accept it may harm some patients."], 1]
]
}
],
W: {
title: "Referral to a community stomal therapy nurse",
notes: `You are a registered nurse on the colorectal surgical ward of Southern Districts Hospital. Today's date is 8 July.

Patient details
Name: Mr Robert King
DOB: 19/02/1965 (61 years)
Address: 33 Wren Street, Southport
Admitted: 30/06 – bowel cancer (sigmoid colon)
Surgery: 01/07 – open abdominoperineal resection; permanent end colostomy (left iliac fossa)
Past history: type 2 diabetes (diet-controlled), mild obesity (BMI 31)
Social: married; wife works full-time; retired postal worker; plays lawn bowls 3x/week

Nursing notes
02/07 Stoma pink, moist, oedematous. Measuring 35 mm.
05/07 Leak overnight – peristomal skin red but intact. Base plate cut too large; template adjusted.
06/07 Stoma now 30 mm (oedema settling). Output soft, formed. Emptying bag independently.
07/07 Completed full bag change with supervision. Uses mirror to see stoma (abdominal shape).
08/07 Abdominal wound healing; perineal wound – small area of breakdown, packed, dressing daily.
Patient anxious about odour and returning to bowls. Wife supportive; attended one education session.
Discharged home today with 2 weeks' supply of appliances. Registered with stoma association.

Requests:
- Home visit within 1 week: stoma review, re-measure (size expected to reduce further), skin check
- Support with appliance changes and confidence
- Advice on hernia prevention, support belt, return to sport
- District nurse arranged separately for perineal wound`,
task: "Using the information in the case notes, write a letter of referral to Ms Fiona Grant, Stomal Therapy Clinical Nurse Consultant, Southport Community Health, 2 Harbour Road, Southport. In your answer: expand the relevant notes into complete sentences; do not use note form; use letter format. The body of the letter should be approximately 180–200 words.",
model: `Ms Fiona Grant
Stomal Therapy Clinical Nurse Consultant
Southport Community Health
2 Harbour Road
Southport

8 July

Dear Ms Grant,

Re: Mr Robert King, DOB 19/02/1965
33 Wren Street, Southport

I am writing to refer Mr King, a 61-year-old retired postal worker, who has been discharged home today following surgery for bowel cancer, for ongoing stoma care.

Mr King underwent an abdominoperineal resection on 1 July and now has a permanent end colostomy in the left iliac fossa. His stoma is pink and moist, and its oedema is settling; it currently measures 30 mm, reduced from 35 mm, and is expected to reduce further. The output is soft and formed.

He had one leak due to a base plate that had been cut too large, which caused redness of the peristomal skin, although the skin remained intact. He now empties his bag independently and has completed a full bag change under supervision, using a mirror to see the stoma.

Mr King is anxious about odour and about returning to lawn bowls, which he plays three times a week. His wife is supportive.

I would be grateful if you could visit him within one week to review and re-measure his stoma, check his skin and support his confidence with appliance changes. Advice on hernia prevention, a support belt and returning to sport would also be appreciated. A district nurse will manage his perineal wound.

Yours sincerely,

Registered Nurse
Colorectal Surgical Ward, Southern Districts Hospital`
},
S: [
{
set: "Emergency department",
cand: "Nurse",
card: ["A father has brought his 2-year-old son, who has had vomiting and diarrhoea for a day. The doctor has assessed the child as mildly dehydrated and suitable for home care. The father expected his son to be given a drip.", "Acknowledge his concern and explain why a drip is not needed (mild dehydration, oral fluids work well).", "Explain how to give oral rehydration solution (small amounts often, e.g. 5 mL every few minutes, using a syringe).", "Advise which fluids to avoid (juice, soft drinks, sports drinks).", "Explain the warning signs that mean he should return (fewer wet nappies, drowsiness, blood in stools, persistent vomiting).", "Discuss hygiene to prevent spread and when the child can return to childcare."],
pat: { role: "Father of a 2-year-old boy", lines: ["So you're just sending us home? I thought he'd at least get a drip.", "He's vomiting everything. How is he supposed to keep anything down?", "He hates the taste of that rehydration stuff. Can I give him lemonade instead? He loves it.", "How will I know if he's getting worse?", "My partner's pregnant. Could she catch it?", "When can he go back to day care? We both work."] }
},
{
set: "Colorectal outpatient clinic",
cand: "Stomal therapy nurse",
card: ["A 45-year-old woman had an ileostomy formed three months ago. She has come for review and says she has not been out socially since the operation because she is embarrassed.", "Acknowledge her feelings and find out what worries her (noise, odour, leaks, appearance, intimacy).", "Reassure her about practical solutions (odour-proof bags, emptying before going out, carrying a spare kit, high-waisted underwear or wraps).", "Encourage her to start with short outings and build up confidence.", "Suggest the stoma association support group and online community.", "Respond sensitively if she raises concerns about her relationship."],
pat: { role: "Patient, 45, three months after ileostomy", lines: ["Physically I'm fine. But I haven't been out with my friends since the operation. I just can't face it.", "What if the bag makes a noise in a quiet restaurant? Or it leaks? I'd die of embarrassment.", "I used to love wearing dresses. Now I just wear baggy tops.", "Honestly, I don't feel attractive any more. My husband says it doesn't matter, but...", "Do other people really go back to normal life?", "Maybe I could try meeting one friend for coffee first."] }
}
]
});
