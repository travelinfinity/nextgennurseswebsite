/* NextGen Nurses OET Nursing practice · Test 3. Original practice material, not real OET items. */
OET_TEST({
n: 3,
LA: [
{
who: "a physiotherapist talking to a patient called George Fraser, who has shoulder pain",
cast: { T: ["f", "Physiotherapist"], P: ["m", "George Fraser (patient)"] },
title: "Patient: George Fraser · Right shoulder pain",
notes: `#History
pain began after {} for several hours
gradual onset over about {}
works as a {}
#Symptoms
pain felt on the {} of the upper arm
cannot lift his arm above {} height
pain disturbs sleep when lying on {}
#Assessment findings
reduced strength when turning the arm {}
pain with movement in the middle part of the range (a '{}')
#Previous treatment
had a {} from his GP two years ago
#Plan
avoid {} work for two weeks
begin exercises using a {}
next appointment on {}`,
ans: ["painting a ceiling|painting ceilings", "six weeks|6 weeks", "painter|house painter", "outside|outer side", "shoulder", "the right side|his right side|his right shoulder", "outwards", "painful arc|arc", "cortisone injection|steroid injection|injection", "overhead", "resistance band|theraband|band", "Thursday"],
s: `T: Hi George, I'm Claire. Your GP has referred you for your right shoulder. Tell me how it all started.
P: I'm a house painter. About six weeks ago I spent a whole day painting a ceiling in a big old house, and by the evening my shoulder was aching. I thought it'd settle, but it's got worse bit by bit.
T: So it came on gradually over about six weeks rather than suddenly?
P: That's right. No fall or anything like that.
T: Where do you feel the pain?
P: Mostly here, on the outside of the upper arm, not really in the shoulder joint itself.
T: That's a very typical spot for pain coming from the shoulder tendons. What can't you do at the moment?
P: I can't lift my arm above shoulder height without it really hurting. Which is a problem in my job.
T: I can imagine. How's your sleep?
P: Terrible. If I roll onto my right side in the night, the pain wakes me up straight away.
T: Okay. I'm going to check a few movements now. Lift your arm out to the side for me, slowly. Tell me where it hurts.
P: There. About halfway up. Then it gets a bit easier once it's higher.
T: That's what we call a painful arc. It hurts in the middle of the movement. Now keep your elbow by your side and push your hand outwards against mine.
P: Ooh. That's weak.
T: Yes, there's some weakness turning the arm outwards. That fits with irritation of the rotator cuff tendons. Have you had any treatment for this shoulder before?
P: Two years ago I had a similar problem, and the GP gave me a cortisone injection. It worked for a while.
T: Injections can help with pain in the short term, but on their own they don't strengthen the tendons. That's what we need to work on this time.
P: What about work? I've got a job next week.
T: For the next two weeks I'd like you to avoid overhead work as much as you can. Can you do walls instead of ceilings?
P: I could probably swap with my offsider.
T: Good. I'll give you some exercises to start today. We'll use a resistance band, starting with a light one, and you do them twice a day. A little discomfort is fine, but the pain should settle within half an hour.
P: Okay.
T: I'd like to see you again on Thursday to check how you're going and progress the exercises.`
},
{
who: "a doctor talking to a patient called Megan Hart, who has headaches",
cast: { D: ["f", "Doctor"], P: ["f", "Megan Hart (patient)"] },
title: "Patient: Megan Hart · Recurrent headaches",
notes: `#Headache description
headaches occur about {} a month
pain usually on the {} side of the head
before the headache, sees {} lights
feels {} and cannot stand bright light
#Triggers
attacks often follow {} at weekends
worse around her {}
works as a {}, often skips lunch
#Current medication
takes {} at the start of a headache
uses pain relief on about {} days a month
#Concerns
worried she has a {}
#Plan
keep a {}
trial a {} medication if attacks continue`,
ans: ["four times|4 times|four", "left", "zigzag|zig-zag|flashing zigzag", "sick", "sleeping in|sleep in|sleep-ins|a sleep-in", "period", "teacher|primary school teacher", "ibuprofen", "twelve|12", "brain tumour|tumour|brain tumor", "headache diary|diary", "preventive|preventative"],
s: `D: Hello Megan. You've come in about headaches. Tell me what's been happening.
P: I've always had the odd headache, but over the last six months they've got much worse. I'm getting a really bad one about four times a month.
D: Can you describe a typical one?
P: It's a throbbing pain, nearly always on the left side of my head. It builds up over an hour or so, and it can last all day.
D: Do you get any warning that it's coming?
P: Yes, that's the strange part. About half an hour before, I see zigzag lights in my vision, sort of shimmering. Then they fade, and the headache starts.
D: That's called an aura. Anything else during the headache?
P: I feel sick, I can't stand bright light, and I just want to lie down in a dark room.
D: Have you noticed anything that seems to bring them on?
P: Weekends, funnily enough. If I sleep in on a Saturday, I often wake up with one.
D: That's quite common. Changes in sleep pattern are a known trigger. Anything else?
P: They're definitely worse around my period. And I'm a primary school teacher, so I often don't get a proper lunch break. I tend to skip lunch.
D: Missing meals can be a trigger too. What do you take for them?
P: Ibuprofen as soon as it starts. If I take it early, it helps a bit.
D: How many days a month would you say you're taking pain relief?
P: Hmm. Probably about twelve days, if I count the milder headaches too.
D: That's something to keep an eye on. Taking pain relief on more than about ten days a month can actually cause more headaches. Is there anything particular that's worrying you?
P: Honestly, I've been worried it's a brain tumour. My aunt had one.
D: I understand why you'd worry. From what you've described, and from your examination, which is normal, this sounds very much like migraine with aura. A tumour usually causes a different pattern, and there are no signs that concern me today.
P: That's a relief.
D: What I'd like you to do is keep a headache diary for the next two months: when they happen, what you'd eaten, how you slept, and what you took for them. That will help us see the pattern.
P: I can do that.
D: If the attacks continue at this rate, we could trial a preventive medication, which you'd take every day to reduce how often they happen.`
}
],
LB: [
{
who: "a nurse calling a doctor about a blood result",
cast: { N: ["m", "Nurse"], D: ["f", "Doctor"] },
s: `N: Hi, it's Sam on Ward 6. Mr Gordon's potassium has come back at six point eight.
D: Was the sample haemolysed?
N: The lab says no, it's a good sample.
D: Okay, that's high. Put him on a cardiac monitor and do a twelve-lead ECG now, please. Hold his spironolactone. I'll come and see him and write up treatment in the next few minutes.`,
q: "What does the doctor ask the nurse to do first?",
o: ["repeat the blood test", "monitor the patient's heart", "give the spironolactone early"],
a: 1,
why: "She asks for a cardiac monitor and a twelve-lead ECG."
},
{
who: "an infection control nurse briefing ward staff",
cast: { I: ["f", "Infection control nurse"] },
s: `I: The patient in room three has MRSA in a wound swab. He's in a single room, which is what we want. Please put on a gown and gloves before you touch him or anything around his bed. You don't need a mask unless you're doing something that creates splashes. His equipment, like the blood pressure cuff and stethoscope, should stay in the room. Visitors don't need to wear gowns, but they must clean their hands going in and out.`,
q: "The infection control nurse tells staff that",
o: ["masks must be worn at all times in the room", "visitors need to wear protective clothing", "the patient's equipment should not be shared"],
a: 2,
why: "His equipment 'should stay in the room'."
},
{
who: "two nurses checking controlled drugs",
cast: { A: ["f", "Nurse"], B: ["m", "Nurse"] },
s: `A: The register says there should be eight ampoules of morphine, but there are only seven.
B: Let me check the entries. The last one signed out was at two o'clock for bed nine... and the signatures are there. Hmm. Nothing since.
A: We can't finish the count until it's sorted. We need to tell the nurse in charge now and not let anyone leave until it's been looked into.
B: Agreed. I'll call her.`,
q: "What do the nurses decide to do?",
o: ["report the discrepancy straight away", "recount the drugs at the end of the shift", "correct the entry in the register"],
a: 0,
why: "They agree to tell the nurse in charge now."
},
{
who: "a speech pathologist talking to a nurse",
cast: { S: ["m", "Speech pathologist"], N: ["f", "Nurse"] },
s: `S: I've assessed Mrs Kowalski's swallow. She coughs on thin fluids, but she manages mildly thick fluids safely, and a soft, bite-sized diet.
N: She's asking for her tea. Is that okay?
S: Yes, as long as it's thickened to the right level. The main thing is she must sit fully upright for meals and drinks, and for half an hour afterwards. She tends to slide down in bed, so she'd be better sitting in the chair to eat.`,
q: "What does the speech pathologist emphasise?",
o: ["the patient's position when eating and drinking", "the need to avoid hot drinks", "the importance of a soft diet"],
a: 0,
why: "'The main thing' is that she sits fully upright for meals and afterwards."
},
{
who: "a nurse educator talking about a new sepsis pathway",
cast: { E: ["f", "Nurse educator"] },
s: `E: From next month, the sepsis pathway changes. If an adult patient has a suspected infection and two or more of the warning signs on the chart, you don't need to wait for a doctor to start the bundle. Nurses can take blood cultures and a lactate straight away, under the standing order. The doctor still has to prescribe and review within the hour. We're hoping this will cut the time to the first antibiotic dose.`,
q: "What change does the educator describe?",
o: ["Nurses can begin some sepsis tests without a doctor's order.", "Nurses can now prescribe the first dose of antibiotics.", "Doctors must review all patients with an infection within an hour."],
a: 0,
why: "Nurses can take blood cultures and a lactate 'straight away, under the standing order'."
},
{
who: "a nurse unit manager talking to a nurse",
cast: { M: ["m", "Nurse unit manager"], N: ["f", "Nurse"] },
s: `M: I've had a complaint from Mrs Ahmed's daughter. She says nobody told her that her mother was moved to another ward overnight.
N: That was me. It was two in the morning and we needed the bed for an emergency admission. I didn't want to wake the family.
M: I understand. But her mother's confused, and the daughter got a shock when she arrived to an empty bed. Next time, please call the next of kin, or at least make sure the day staff ring them first thing.`,
q: "What is the manager's main point?",
o: ["Patients should not be moved during the night.", "The family should have been informed of the move.", "Confused patients need to stay on the same ward."],
a: 1,
why: "He asks her to call the next of kin, or make sure the day staff do."
}
],
LC: [
{
who: "an interview with Dr Paul Okoro, an emergency physician, about a hospital-in-the-home service",
cast: { I: ["f", "Interviewer"], P: ["m", "Dr Paul Okoro"] },
s: `I: Today I'm talking to Dr Paul Okoro, who helped set up a hospital-in-the-home service linked to a busy emergency department. Paul, what is hospital in the home?
P: It's exactly what it sounds like. Patients who would otherwise be admitted to a ward receive hospital-level care in their own homes instead. Nurses visit once or twice a day, give intravenous antibiotics, check observations and wounds, and a doctor reviews them regularly, sometimes in person and sometimes by phone.
I: What made you want to set it up?
P: Partly pressure on beds. Our emergency department was full of patients waiting for a ward bed, sometimes for a day or more. But I think the more important reason was seeing what happened to older patients once they were admitted. They'd come in with, say, cellulitis, and be perfectly well apart from the infection. A week later they'd be confused, weaker, sometimes unable to go home at all.
I: Which patients are suitable?
P: The classic examples are cellulitis, urinary tract infections and some chest infections, where the main treatment is antibiotics through a drip. But the medical condition is actually only half the assessment. We need to know the patient is safe at home: that they can get to the toilet, that someone can call for help if they deteriorate, and that they have a phone. If any of those is missing, they're not suitable, however straightforward the infection.
I: Have patients been keen?
P: Most are delighted. A few are anxious about being away from doctors and nurses overnight. What reassures them is knowing they can ring the team twenty-four hours a day, and that they'll be readmitted immediately if there's a problem. In practice, very few need to come back in.
I: Are there downsides?
P: There are. Family carers sometimes carry a heavier load than we'd expect. They might be the ones noticing that a patient isn't eating or is more confused. We've had to make sure we ask carers how they're managing, not just the patient. And for the nurses, driving between homes takes time, so each nurse sees fewer patients than they would on a ward.
I: Is it cheaper than a ward?
P: That's a common assumption, and the answer is: it depends. For patients who stay a week or more, it generally is. For very short stays, the costs are fairly similar. So I'd be cautious about selling it purely as a money-saver. The strongest arguments are about outcomes and patient experience.
I: What's next for the service?
P: We'd like to accept patients directly from GPs, so they don't have to come through the emergency department at all. That's the next step, and it's going to need much closer communication with GPs than we have now.`,
qs: [
["According to Dr Okoro, the most important reason for setting up the service was", ["reducing waiting times in the emergency department", "avoiding the harmful effects of admission on older patients", "freeing up beds for surgical patients"], 1],
["When deciding whether a patient is suitable, Dr Okoro considers", ["mainly the severity of the infection", "how far the patient lives from the hospital", "both the patient's condition and their safety at home"], 2],
["What reassures anxious patients?", ["access to the team at any time", "daily visits from a doctor", "having a family member present"], 0],
["What has the service learned about family carers?", ["They often prefer the patient to be in hospital.", "Their needs should also be assessed.", "They are trained to give intravenous antibiotics."], 1],
["What is Dr Okoro's view on the cost of the service?", ["It is always cheaper than ward care.", "It is mainly justified by financial savings.", "Its cost advantage depends on length of stay."], 2],
["Dr Okoro says that accepting referrals from GPs will require", ["better communication with GPs", "additional funding", "more nursing staff"], 0]
]
},
{
who: "a presentation by Joanne Pike, a pain management nurse, about reducing opioids in chronic pain",
cast: { J: ["f", "Joanne Pike"] },
s: `J: Good morning. My topic today is helping people with long-term pain to reduce their opioid medicines, which is one of the most challenging parts of my job.
J: Let me be clear at the start. Opioids have an important place in managing acute pain, after surgery for example, and in cancer pain. The concern is long-term use in chronic non-cancer pain, such as back pain, where the evidence of benefit beyond the first few months is weak, and the risks, including dependence, falls and overdose, increase with the dose.
J: Many of the people I see have been on opioids for years. Often, they were started after an injury or operation and simply never stopped. When I meet them, they're usually still in pain, despite high doses. Some are sleeping poorly and feeling foggy. They've also become worried, because they've heard in the media that opioids are dangerous, and they're frightened that their medicines will be taken away.
J: That fear is the first thing I have to address. Stopping opioids suddenly is not only unpleasant, it can be dangerous, and it can damage trust in health professionals. So my first message is always that we will not stop anything suddenly, and that any reduction will be slow and agreed together.
J: How slow? In general, we reduce by about ten percent of the dose every two to four weeks, but it varies. Some people manage faster. Others need to pause for a while at a certain dose. The pace should be set by how the patient is coping, not by a calendar.
J: What surprises many patients is that their pain often doesn't get worse as the dose comes down. Some even find it improves, because high doses of opioids can make the nervous system more sensitive to pain. When patients notice that, it's a real turning point.
J: But reducing medication on its own is not enough. If we take something away, we need to offer something in its place. That might be physiotherapy, gentle graded exercise, help with sleep, or psychological approaches that help people manage pain and get back to the activities they value. In my experience, people who have a clear goal, like returning to work or playing with grandchildren, do better than those whose only goal is a lower pain score.
J: Finally, I want to say something about language. Patients often feel judged. Words like 'addict' or 'drug-seeking' are deeply hurtful and usually inaccurate. Most of these patients did exactly what they were told to do by their doctors. I'd encourage you to think about how you talk about opioids, both to patients and in their notes.`,
qs: [
["What concern does Joanne have about opioids?", ["They are overused after surgery.", "Their long-term use in chronic non-cancer pain is of limited benefit.", "They are ineffective for cancer pain."], 1],
["According to Joanne, when patients first come to see her, many of them", ["are afraid their medication will be stopped", "want to stop their opioids immediately", "are no longer in pain"], 0],
["What does Joanne say about the rate of dose reduction?", ["It should follow a fixed timetable.", "It should depend on the patient's response.", "It should be decided by the prescribing doctor."], 1],
["What is often a 'turning point' for patients?", ["discovering that their pain does not increase", "finding a new medication that works", "learning that their pain is psychological"], 0],
["Joanne believes patients do best when they", ["focus on reducing their pain score", "stop all medication quickly", "have a meaningful personal goal"], 2],
["Joanne's comments about language are intended to", ["encourage more accurate diagnosis of addiction", "make staff aware of the effect of their words", "improve the quality of clinical documentation"], 1]
]
}
],
RA: {
topic: "Sepsis in adults",
texts: [
{ h: "Text A", t: "What is sepsis?", b: `Sepsis is a life-threatening condition that occurs when the body's response to an infection damages its own tissues and organs. It can follow any infection, but the most common sources in adults are the chest, urinary tract, abdomen and skin.
People at increased risk include those over 65, people who are immunocompromised (e.g. receiving chemotherapy), people with diabetes, and those who have recently had surgery or an invasive procedure.
Without prompt treatment, sepsis can progress to septic shock, in which blood pressure falls despite adequate fluid replacement.` },
{ h: "Text B", t: "Warning signs (adult deterioration chart)", b: `Consider sepsis in any patient with a suspected infection and ONE OR MORE of:
• respiratory rate 25 breaths/min or more
• new need for oxygen to keep SpO2 above 92%
• systolic blood pressure 90 mmHg or less
• heart rate 130 beats/min or more
• new confusion or altered level of consciousness
• no urine output for 18 hours, or less than 0.5 mL/kg/hr
• mottled or ashen skin
Note: a normal temperature does NOT exclude sepsis. Older patients may have a low temperature (below 36°C).` },
{ h: "Text C", t: "The sepsis bundle: complete within 60 minutes", b: `1. Escalate: call a MET (rapid response) call or urgent medical review as per the deterioration chart.
2. Give oxygen to maintain target saturations.
3. Take blood cultures (at least two sets) BEFORE antibiotics, provided this does not delay treatment.
4. Measure serum lactate (venous sample acceptable).
5. Give IV antibiotics as prescribed.
6. Start IV fluids if hypotensive or lactate is 2 mmol/L or above: 500 mL bolus of crystalloid, reassessing after each bolus.
7. Monitor urine output hourly; consider an indwelling catheter.` },
{ h: "Text D", t: "Communicating with patients and families", b: `Explain to the patient and family that sepsis is suspected and why urgent treatment is needed. Use plain language: avoid terms such as 'septicaemia' or 'blood poisoning', which can cause confusion.
Families often know when a patient 'is not themselves'. Take family concerns seriously; the hospital's family escalation process allows relatives to request a review directly by calling extension 5555.
On discharge, provide the sepsis survivor information leaflet. Many survivors experience fatigue, poor sleep or low mood for weeks or months.` }
],
qs: [
{ k: "m", q: "Which text explains how relatives can ask for a patient to be reviewed?", a: "D" },
{ k: "m", q: "Which text lists groups of patients more likely to develop sepsis?", a: "A" },
{ k: "m", q: "Which text tells you when IV fluids should be started?", a: "C" },
{ k: "m", q: "Which text warns that a patient may have sepsis without a fever?", a: "B" },
{ k: "m", q: "Which text describes possible long-term effects after sepsis?", a: "D" },
{ k: "m", q: "Which text describes a more severe stage of sepsis?", a: "A" },
{ k: "m", q: "Which text tells you what to do before giving antibiotics?", a: "C" },
{ k: "s", q: "Which respiratory rate is a warning sign of sepsis?", a: "25 breaths/min or more|25 or more|25|25 breaths per minute" },
{ k: "s", q: "Which heart rate is a warning sign of sepsis?", a: "130 beats/min or more|130 or more|130" },
{ k: "s", q: "Within how many minutes should the sepsis bundle be completed?", a: "60|60 minutes|sixty" },
{ k: "s", q: "How many sets of blood cultures should be taken?", a: "two|2|at least two|at least 2" },
{ k: "s", q: "What volume should each fluid bolus be?", a: "500 mL|500 ml|500" },
{ k: "s", q: "How often should urine output be monitored?", a: "hourly|every hour" },
{ k: "s", q: "What should patients be given when they are discharged?", a: "sepsis survivor information leaflet|information leaflet|leaflet" },
{ k: "g", q: "Sepsis occurs when the body's response to infection damages its own {}.", a: "tissues and organs|organs|tissues" },
{ k: "g", q: "Patients receiving {} are at increased risk because they are immunocompromised.", a: "chemotherapy" },
{ k: "g", q: "Older patients with sepsis may have a temperature below {}.", a: "36°C|36 degrees|36" },
{ k: "g", q: "A {} sample is acceptable for measuring lactate.", a: "venous" },
{ k: "g", q: "Staff should avoid the term 'blood poisoning' because it can cause {}.", a: "confusion" },
{ k: "g", q: "Relatives can request a review by calling extension {}.", a: "5555" }
]
},
RB: [
{ src: "Extract from a guideline on peripheral intravenous cannulas", b: `Peripheral intravenous cannulas (PIVCs) should be inserted only when clinically required and removed as soon as they are no longer needed. The insertion site must be inspected at least once per shift using the Visual Infusion Phlebitis (VIP) score. Routine replacement at a set time interval is no longer recommended; a PIVC may remain in place for as long as it is functioning, needed and free of complications.`, q: "What does the guideline say about replacing cannulas?", o: ["They must be replaced every 72 hours.", "They do not need replacing simply because of time.", "They should be replaced at the start of each shift."], a: 1, why: "'Routine replacement at a set time interval is no longer recommended.'" },
{ src: "Memo to emergency department staff", b: `Following two recent incidents, all patients presenting with a head injury who are taking anticoagulant medication must have a CT scan of the head within 8 hours of injury, even if they have no symptoms. Triage nurses should ask every patient with a head injury about blood-thinning medicines and record the answer. The medical officer must be informed at the time of triage.`, q: "What are triage nurses required to do?", o: ["arrange a CT scan for all head injury patients", "ask about blood-thinning medication and notify the doctor", "observe anticoagulated patients for 8 hours"], a: 1, why: "They must ask about blood thinners, record the answer and inform the medical officer." },
{ src: "Extract from a product leaflet: hydrocolloid dressing", b: `Hydrocolloid dressings are suitable for lightly to moderately exuding wounds and may be left in place for up to 7 days. As the dressing absorbs fluid, a yellowish gel forms under it, which may have a slight odour when the dressing is removed. This is normal and should not be mistaken for infection. The dressing should not be used on wounds with heavy exudate or on infected wounds.`, q: "According to the leaflet, a gel with a slight smell", o: ["is a sign the dressing should be changed", "may indicate a wound infection", "is an expected effect of the dressing"], a: 2, why: "'This is normal and should not be mistaken for infection.'" },
{ src: "Notice on a staff noticeboard", b: `The Clinical Skills Lab is now open for self-directed practice every weekday from 7 am to 7 pm. Staff can practise cannulation, catheterisation and other skills on manikins at any time without booking. If you would like supervision from an educator, please book a session at least two days in advance through the learning portal. Please return all equipment to the correct drawer after use.`, q: "What is required if a staff member wants an educator present?", o: ["booking in advance online", "attending between 7 am and 7 pm", "returning equipment after use"], a: 0, why: "Supervision must be booked 'at least two days in advance through the learning portal'." },
{ src: "Extract from a policy on patient falls", b: `After any fall, the patient must not be moved until they have been assessed for injury. If a head strike is witnessed or suspected, or if the fall was unwitnessed, neurological observations must be commenced and continued for at least 24 hours. Patients taking anticoagulants require a medical review within 1 hour of the fall. Use a lifting device to move the patient from the floor if they cannot get up unaided.`, q: "When must neurological observations be started?", o: ["only when the patient has hit their head", "after every fall without exception", "when nobody saw the fall happen"], a: 2, why: "They are required if a head strike is suspected or 'if the fall was unwitnessed'." },
{ src: "Email to ward staff", b: `Subject: Patient meal times. Protected Mealtimes will be trialled on our ward for four weeks. Between 12 pm and 1 pm, non-urgent activities such as ward rounds, tests and cleaning will be avoided so that patients can eat without interruption and staff can help those who need assistance. Family members are welcome to visit and help their relatives at mealtimes. Feedback forms are available at the nurses' station.`, q: "The aim of Protected Mealtimes is to", o: ["give staff time to take their lunch breaks", "allow patients to eat without disruption", "prevent family members from visiting at lunch"], a: 1, why: "Non-urgent activities stop 'so that patients can eat without interruption'." }
],
RC: [
{
t: "The hidden cost of night shift",
b: `Hospitals never close, and for nurses that means someone must work through the night. Shift work is so embedded in nursing that it is often treated as simply part of the job. Yet a growing body of research suggests that working nights carries real costs, both for the nurses who do it and, potentially, for the patients they care for.

The most obvious effect is on sleep. Humans are designed to be awake in daylight and asleep in darkness, and the internal body clock that governs this cycle does not adjust easily. Nurses who work nights typically sleep less during the day than they would at night, and the sleep they get is lighter and more easily interrupted by noise, daylight and family life. Over a run of night shifts, this sleep debt accumulates.

The consequences extend beyond tiredness. Large studies of nurses have linked long-term night work with higher rates of obesity, type 2 diabetes and cardiovascular disease. The reasons are not fully understood, but disruption of the body clock appears to affect the way the body processes food, and night workers often eat at times when their metabolism is least prepared for it. The International Agency for Research on Cancer has classified night shift work as probably carcinogenic, largely on the basis of studies of breast cancer, although the evidence remains debated.

There are also immediate safety risks. Fatigue impairs attention, memory and judgement in ways similar to alcohol. Studies have found higher rates of medication errors and needlestick injuries towards the end of long night shifts. Perhaps most alarming is the drive home: nurses have described falling asleep at the wheel after a run of nights, and several countries have recorded fatal crashes involving health workers travelling home.

Not everyone is equally affected. Some people, sometimes called 'night owls', naturally prefer to go to bed and get up late, and seem to tolerate night shifts better than 'morning larks'. Age matters too; many nurses report that nights become harder after the age of about 45. This variation suggests that individual preferences should be taken into account when rosters are designed, although in practice this is not always possible.

What can be done? Roster design is one of the most powerful tools. Rapidly rotating rosters, with no more than two or three nights in a row, appear to allow the body clock to stay closer to its normal pattern. Shifts that rotate forwards, from mornings to afternoons to nights, are generally better tolerated than those that rotate backwards. Allowing at least two full days off after a run of nights gives time for recovery.

Within the shift, short planned naps have been shown to improve alertness, yet many hospitals discourage or forbid them. In some cases this reflects a concern that sleeping staff will not respond quickly to an emergency; in others, simply a belief that sleeping at work is unprofessional. Hospitals that have introduced protected nap periods, with cover arranged, report that staff feel more alert in the early hours of the morning.

Night shifts will not disappear. But treating their effects as an occupational health issue, rather than as something nurses should simply endure, could protect both staff and patients.`,
qs: [
["In the first paragraph, the writer suggests that night shift work", ["is unnecessary in most hospitals", "is usually accepted without question", "is mainly carried out by junior nurses", "has only recently been studied"], 1],
["According to the second paragraph, nurses who work nights", ["gradually adjust to sleeping during the day", "sleep for longer but less deeply", "build up a lack of sleep over time", "prefer to sleep in the evening"], 2],
["What does the writer say about the link between night work and cancer?", ["It has been proven beyond doubt.", "It is supported by some evidence but still disputed.", "It applies only to cardiovascular disease.", "It has been rejected by most researchers."], 1],
["The writer compares fatigue to alcohol in order to show", ["how seriously tiredness affects performance", "why nurses should not drive after work", "that nurses often drink after night shifts", "that errors are caused by poor training"], 0],
["What does the fifth paragraph suggest about rostering?", ["Night shifts should only be given to younger nurses.", "People's natural sleep patterns could be considered.", "Night owls should work all night shifts.", "Rosters should not change once they are set."], 1],
["Which roster pattern is described as better tolerated?", ["several consecutive weeks of night shifts", "backward-rotating shifts from nights to mornings", "short runs of nights with recovery days afterwards", "nights followed immediately by morning shifts"], 2],
["Why do some hospitals discourage naps during night shifts?", ["Naps have been shown to reduce alertness.", "There may be concerns about responding to emergencies.", "Staff prefer to work through the night.", "Naps are not permitted by law."], 1],
["What is the writer's main conclusion?", ["Night shifts should be abolished.", "Nurses should accept the effects of night work as part of the job.", "Night work should be managed as a health and safety issue.", "Further research is needed before any changes are made."], 2]
]
},
{
t: "Social prescribing: medicine for loneliness?",
b: `A significant proportion of visits to general practitioners are not primarily about a medical problem. Patients may come with symptoms such as poor sleep, low mood or vague aches, but the underlying cause may be loneliness, debt, poor housing or a lack of purpose after retirement. Doctors and nurses often recognise these problems but have little to offer within a short appointment.

Social prescribing is an attempt to fill this gap. Instead of, or as well as, a prescription for medication, the patient is referred to a 'link worker', who spends time getting to know them and what matters to them, and then connects them with community activities and services. These might include walking groups, community gardens, art classes, volunteering, men's sheds or advice on benefits and housing.

The idea is not entirely new, but it has grown rapidly, particularly in the United Kingdom, where social prescribing link workers are now funded as part of primary care. Australia has been slower to adopt it, though several pilot programmes have been established, and professional bodies have called for it to be funded nationally.

Supporters point to compelling stories. A widower who had stopped leaving his house finds companionship and a new skill at a community workshop. A young mother struggling with anxiety joins a supported playgroup and gradually rebuilds her confidence. Patients frequently describe these changes as more meaningful than anything a medication could have achieved.

Yet the research evidence has struggled to keep pace with enthusiasm. Many evaluations have been small, have lacked a comparison group, or have relied on participants' own reports collected by the organisations delivering the programmes. Claims that social prescribing reduces GP visits or saves money have proved particularly difficult to substantiate. A systematic review concluded that, while the approach appeared promising, the evidence was not yet strong enough to judge its effectiveness with confidence.

Part of the difficulty lies in what is being measured. Social prescribing aims to improve wellbeing, connection and quality of life, outcomes that are harder to capture than, for example, blood pressure. Some researchers argue that conventional trials are poorly suited to such complex, personalised interventions, and that other forms of evidence deserve weight.

There are also practical concerns. Referring patients to community activities assumes those activities exist and have capacity. In disadvantaged areas, where need is often greatest, voluntary organisations may be underfunded and overstretched. If health services send more people their way without additional support, the result may be longer waiting lists rather than better health.

Finally, critics warn that social prescribing should not become a way of shifting responsibility for structural problems onto individuals. A walking group may ease loneliness, but it will not fix unaffordable housing. Social prescribing works best, its more thoughtful advocates suggest, as part of a broader commitment to addressing the social conditions that make people unwell.`,
qs: [
["The first paragraph suggests that many patients who see a GP", ["exaggerate their physical symptoms", "have problems that are partly social rather than medical", "should be referred to a specialist", "do not need any form of support"], 1],
["What is the role of the 'link worker'?", ["to prescribe medication for low mood", "to connect patients with suitable community activities", "to run walking groups and art classes", "to assess patients' housing needs"], 1],
["What does the writer say about social prescribing in Australia?", ["It is now fully funded within primary care.", "It has been rejected by professional bodies.", "It has developed more slowly than in the UK.", "It began earlier than in the UK."], 2],
["The examples in the fourth paragraph are used to illustrate", ["the personal benefits patients describe", "the cost savings of the approach", "the results of a large research study", "the risks of social prescribing"], 0],
["What is said about claims that social prescribing saves money?", ["They have been confirmed by systematic reviews.", "They are hard to prove with current evidence.", "They are accepted by most GPs.", "They are based on large controlled trials."], 1],
["According to the sixth paragraph, some researchers believe that", ["blood pressure should be used to measure outcomes", "conventional trials may not suit social prescribing", "social prescribing should not be evaluated at all", "wellbeing cannot be improved by community activities"], 1],
["What practical concern is raised in the seventh paragraph?", ["Community services may lack the capacity to accept more people.", "Patients in disadvantaged areas refuse to take part.", "Link workers are poorly trained.", "Voluntary organisations do not want health referrals."], 0],
["In the final paragraph, the writer suggests that social prescribing", ["is the best way to deal with housing problems", "should replace other forms of social policy", "should be combined with efforts to tackle wider social causes", "places too much responsibility on health services"], 2]
]
}
],
W: {
title: "Discharge letter to a GP after treatment for cellulitis",
notes: `You are a registered nurse on the general medical ward of Bayside Hospital. Today's date is 5 May.

Patient details
Name: Mr Daniel Okafor
DOB: 17/04/1971 (55 years)
GP: Dr Susan Lim, Northgate Medical Centre, 12 High Street, Northgate
Admitted: 30/04 – cellulitis right lower leg
Past history: obesity (BMI 38), hypertension (amlodipine 5 mg daily); no known diabetes
Social: lives with wife; works as a truck driver (long hours sitting); smoker 15/day

Nursing notes
30/04 Red, hot, swollen R lower leg from ankle to mid-calf. Temp 38.6°C. Margin marked. IV cefazolin commenced. Leg elevated.
01/05 Redness spreading beyond marked margin. Antibiotics changed by medical team. Fasting BGL 9.8 mmol/L; HbA1c 7.4% → new diagnosis of type 2 diabetes. Seen by diabetes educator – lifestyle advice, metformin 500 mg BD started.
02/05 Afebrile. Redness receding. Small crack in skin between R 4th and 5th toes (tinea) – likely entry point. Antifungal cream applied.
03/05 Changed to oral cephalexin 500 mg QID (to complete 10 days total, last dose 09/05).
04/05 Mobilising independently. Discussed smoking – interested in quitting; given Quitline information.
05/05 Redness much reduced, swelling persists. Discharged home today.

Education given: skin and foot care, daily foot checks, keep leg elevated when resting, finish antibiotics, return if redness spreads or fever.
Follow-up requested: GP review in 1 week (leg, BGL, metformin tolerance); consider nicotine replacement therapy.`,
task: "Using the information in the case notes, write a letter to Dr Susan Lim, the patient's GP, at Northgate Medical Centre, 12 High Street, Northgate, informing her of Mr Okafor's discharge and the follow-up he needs. In your answer: expand the relevant notes into complete sentences; do not use note form; use letter format. The body of the letter should be approximately 180–200 words.",
model: `Dr Susan Lim
Northgate Medical Centre
12 High Street
Northgate

5 May

Dear Dr Lim,

Re: Mr Daniel Okafor, DOB 17/04/1971

I am writing to inform you that Mr Okafor, a 55-year-old truck driver, has been discharged home today following treatment for cellulitis of his right lower leg, and to request your follow-up.

Mr Okafor was admitted on 30 April with a fever and a red, swollen right lower leg. He was treated with intravenous antibiotics, which were changed when the redness spread. He has now been switched to oral cephalexin 500 mg four times daily, with the last dose due on 9 May. A crack in the skin between his fourth and fifth toes, caused by tinea, was the likely entry point and is being treated with antifungal cream. Although the redness has improved, some swelling remains.

During the admission, he was newly diagnosed with type 2 diabetes (HbA1c 7.4%) and commenced on metformin 500 mg twice daily. He has received diabetes education and advice on foot care.

In addition, he smokes 15 cigarettes a day and has expressed interest in quitting.

I would be grateful if you could review him in one week to check his leg, blood glucose and tolerance of metformin, and consider nicotine replacement therapy.

Yours sincerely,

Registered Nurse
General Medical Ward, Bayside Hospital`
},
S: [
{
set: "Day procedure unit (telephone pre-admission)",
cand: "Nurse",
card: ["You are speaking to a patient who is booked for a colonoscopy next week. He is anxious about the bowel preparation and the procedure.", "Find out what he already knows and what is worrying him.", "Explain the bowel preparation in simple terms (low-fibre diet two days before, clear fluids the day before, drinking the preparation solution, staying near a toilet).", "Reassure him about the procedure (sedation, usually not painful, takes about 30 minutes).", "Respond to his concern about taking time off work (explain why he must not drive or work after sedation).", "Check his understanding and confirm the arrangements (someone to drive him home)."],
pat: { role: "Patient, 58, accountant", lines: ["Hi. I've got this colonoscopy next week and I'll be honest, I'm dreading it.", "I've heard the bowel prep is the worst part. What do I actually have to do?", "Will it hurt? I don't like the idea of a camera, you know, down there.", "Do I really need the whole day off? I thought I could go back to the office in the afternoon.", "My wife works too. Can't I just get a taxi home?", "Okay, I'll ask my brother. So, can you go over the diet bit again?"] }
},
{
set: "Medical ward",
cand: "Nurse",
card: ["Your patient's husband is visiting. His wife has type 2 diabetes and is being discharged tomorrow on insulin for the first time. He will be helping her at home and is worried.", "Find out what he is worried about.", "Explain how and when the insulin is given (once daily with the pen, same time each day, rotate injection sites).", "Explain the signs of a low blood sugar and what to do (e.g. sweaty, shaky, confused; give jelly beans or juice and recheck in 15 minutes).", "Reassure him about support after discharge (diabetes educator follow-up, phone line).", "Respond to his suggestion that she should stop the insulin if her sugar levels are good."],
pat: { role: "Husband of a patient, 70", lines: ["My wife's coming home tomorrow and they've put her on insulin. I don't know the first thing about needles.", "What if I give her the wrong amount? Or she goes into a coma or something?", "How will I know if her sugar is too low?", "And what do I actually do then? Ring an ambulance?", "Once her sugars are back to normal, she can just stop the insulin, can't she?", "Right. Is there someone I can ring if I'm not sure about something?"] }
}
]
});
