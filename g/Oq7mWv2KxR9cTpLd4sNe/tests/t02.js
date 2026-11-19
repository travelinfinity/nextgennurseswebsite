/* NextGen Nurses OET Nursing practice · Test 2. Original practice material, not real OET items. */
OET_TEST({
n: 2,
LA: [
{
who: "a GP talking to a patient called Ana Lopez, who has asthma",
cast: { D: ["m", "Doctor"], P: ["f", "Ana Lopez (patient)"] },
title: "Patient: Ana Lopez · Asthma review",
notes: `#Current symptoms
waking at night with a {} about three times a week
symptoms worse since starting work at a {}
uses reliever inhaler about {} times a day
#Possible triggers
recently got a {}
house has a problem with {} in the bathroom
symptoms worse in {} weather
#Medication
stopped her preventer because of a {}
has not been using her {} with the inhaler
#Plan
check her inhaler {}
change preventer to a {}
written {} to be updated
follow-up in {}`,
ans: ["cough|dry cough", "bakery", "four|4", "cat|kitten", "mould|mold", "cold", "sore throat|hoarse voice", "spacer", "technique", "combination inhaler|combined inhaler", "asthma action plan|action plan", "four weeks|4 weeks|a month"],
s: `D: Hello Ana, come in and have a seat. The practice nurse said you wanted to talk about your asthma. What's been happening?
P: It's been bad lately. I keep waking up in the night with a cough. It's a dry cough, and it goes on and on.
D: How often is that happening?
P: About three times a week, maybe more. I'm exhausted.
D: And during the day?
P: It's worse at work, I think. I started a new job two months ago at a bakery, and since then I've been more wheezy.
D: Flour dust can certainly irritate the airways. How often are you using your blue reliever inhaler?
P: About four times a day at the moment.
D: That's a lot more than we'd like. Has anything else changed at home?
P: Well, we got a cat in the spring. My son really wanted one.
D: Any problems with damp in the house?
P: Yes, there's quite a lot of mould in the bathroom. We keep cleaning it but it comes back.
D: Both of those could be contributing. Is there any particular weather that makes it worse?
P: When it's cold. Walking to the bus on a cold morning, I can feel my chest tighten straight away.
D: Now, you were prescribed a brown preventer inhaler last year. Are you still taking that?
P: Not really. It gave me a sore throat and a hoarse voice, so I stopped it a few months ago.
D: That's a known side effect, but it usually happens when some of the medicine stays in the mouth and throat. Were you using the spacer with it?
P: The plastic tube? No, I don't really carry that around. It's too big for my bag.
D: The spacer helps the medicine reach your lungs instead of your throat. Rinsing your mouth after each dose helps too. Could you show me how you use your inhaler?
P: Sure. Like this.
D: Okay. You're breathing in a bit too quickly there. Let's go through your technique properly before you leave, and the nurse can give you a smaller spacer.
P: That would help.
D: I'd also like to change your preventer to a combination inhaler. It contains the preventer and a long-acting reliever together, so it's one inhaler twice a day.
P: That sounds easier.
D: I'll also update your written asthma action plan, so you know exactly what to do if your symptoms get worse, and when to come in or call an ambulance. And I'd like to see you again in four weeks to see how you're going.
P: Okay. What about the cat?
D: Let's see how you go with the new inhaler first. If you're still having trouble, we can arrange allergy testing.`
},
{
who: "a nurse talking to a patient called Peter Walsh, who has recently been diagnosed with type 2 diabetes",
cast: { N: ["f", "Diabetes nurse"], P: ["m", "Peter Walsh (patient)"] },
title: "Patient: Peter Walsh · New diagnosis of type 2 diabetes",
notes: `#Background
diagnosed after a routine {}
first symptom noticed: feeling {} all the time
works as a {}, with irregular hours
#Diet
usually skips {}
drinks about {} cans of soft drink a day
eats {} most evenings
#Activity
main exercise is {} at weekends
#Concerns
worried about {} because of his father's experience
wants to know if he can keep {}
#Plan
start {} with the evening meal
to see a {} next week
booked into a group {}`,
ans: ["blood test", "thirsty", "security guard", "breakfast", "three|3", "takeaway|takeaways", "fishing", "losing his sight|going blind|his eyesight", "driving", "metformin", "dietitian", "education session|education program|education course"],
s: `N: Hello Mr Walsh, I'm Rachel, one of the diabetes nurse educators. Thanks for coming in. How are you feeling about the diagnosis?
P: Call me Peter. Honestly, it was a bit of a shock. I only went to the doctor for a routine blood test because my wife nagged me. I didn't expect anything to come of it.
N: Had you noticed anything different before that?
P: Looking back, yes. I've been thirsty all the time for months. I just thought it was the heat.
N: That's a very common symptom. Can you tell me a bit about your day? What do you do for work?
P: I'm a security guard, so my hours are all over the place. Some weeks it's day shifts, some weeks nights.
N: That can make regular meals tricky. What does a usual day of eating look like?
P: I usually skip breakfast. I'm not hungry in the morning. Then I grab something at work, and I drink a fair bit of soft drink to stay awake.
N: How much would you say?
P: Three cans a day, probably. Sometimes more on night shift.
N: And in the evening?
P: We get takeaway most nights. My wife works late too, so nobody feels like cooking.
N: Thanks for being honest. What about exercise?
P: Not much. I go fishing at the weekends, but that's mostly sitting in a boat.
N: Okay. We can work on small, realistic changes. Swapping the soft drink for water or diet drinks would make a big difference on its own. Is there anything worrying you about the diabetes?
P: My dad had diabetes, and he ended up losing his sight in one eye. That's what scares me.
N: That's a completely understandable worry. Eye damage can be prevented or treated early if your blood glucose is well controlled and you have regular eye checks. We'll arrange those for you.
P: The other thing is driving. I need my car for work. Will they take my licence away?
N: Most people with type 2 diabetes can keep driving. There are some rules, especially if you're on certain medicines, but the doctor will go through that with you. With the medicine you're starting, the risk is very low.
P: That's a relief. What medicine is it?
N: The doctor has prescribed metformin. You'll start with one tablet with your evening meal, and we'll increase it slowly. Taking it with food helps to avoid stomach upsets.
P: Okay.
N: I've also booked you to see a dietitian next week, who can help you plan meals around your shifts. And there's a group education session on the fourteenth. Your wife is welcome to come too.
P: She'll definitely want to come. She's the one who'll make sure I do it.`
}
],
LB: [
{
who: "two nurses discussing a patient's skin",
cast: { A: ["f", "Nurse"], B: ["f", "Nurse"] },
s: `A: When I turned Mrs Bell just now, there's a red area on her sacrum that doesn't go white when you press it.
B: So that's a stage one pressure injury. Is the skin broken?
A: No, it's intact.
B: Right. Can you put her on the two-hourly turning chart, and I'll order an air mattress from the equipment pool. We'll need to fill in an incident report too, and let her son know when he visits this afternoon.`,
q: "What do the nurses decide about Mrs Bell?",
o: ["Her pressure care needs to be increased.", "Her skin should be assessed by a specialist.", "Her wound needs a protective dressing."],
a: 0,
why: "They start two-hourly turning and order an air mattress – increased pressure care."
},
{
who: "an occupational therapist talking to a nurse",
cast: { O: ["m", "Occupational therapist"], N: ["f", "Nurse"] },
s: `N: Is everything ready for Mr Hughes to go home on Friday?
O: Mostly. The shower chair has been delivered. But when I did the home visit, I found the toilet is too low for him to get off safely after his hip operation. I've ordered a raised seat, but it won't arrive until Monday.
N: So should we hold off the discharge?
O: I'd rather we did. His daughter says she can't stay with him over the weekend.`,
q: "The occupational therapist recommends",
o: ["sending the patient home with his daughter", "keeping the patient in hospital a little longer", "arranging for a different shower chair"],
a: 1,
why: "The raised seat won't arrive until Monday, so he would 'rather' delay the discharge."
},
{
who: "a nurse unit manager speaking at a staff meeting",
cast: { M: ["m", "Nurse unit manager"] },
s: `M: As you know, the flu vaccination program for staff starts next week. Last year our ward had the lowest uptake in the hospital, and we had three staff off sick at the same time in July, which left us very short. This year the vaccine will be available on the ward itself, on Tuesday and Thursday mornings, so you won't need to go down to staff health. If you can't be vaccinated for medical reasons, please let me know so I can record it.`,
q: "What is the manager trying to do?",
o: ["explain why the vaccine is compulsory for staff", "encourage more staff to have the vaccine", "find out which staff were sick last year"],
a: 1,
why: "He mentions low uptake last year and makes the vaccine easier to get on the ward."
},
{
who: "a dietitian talking to a nurse",
cast: { D: ["f", "Dietitian"], N: ["m", "Nurse"] },
s: `N: Mr Russo has been nil by mouth for three days now while they work out what's wrong with his bowel. Should we be worried?
D: Yes, we should. He was already underweight when he came in. I've spoken to the surgical team, and they agree he needs nutrition through a vein if he's still nil by mouth tomorrow. Can you check his blood glucose four times a day and weigh him in the morning, so we have a starting point?`,
q: "The dietitian asks the nurse to",
o: ["start feeding the patient through a vein", "collect information about the patient's condition", "speak to the surgical team about the patient"],
a: 1,
why: "She asks for blood glucose checks and a weight 'so we have a starting point'."
},
{
who: "a radiographer talking to a nurse on the phone",
cast: { R: ["m", "Radiographer"], N: ["f", "Nurse"] },
s: `R: Hi, it's Imaging. We've got Mrs Chen booked for a CT with contrast at three. Her kidney function result from this morning isn't on the system yet. Can you chase it with the lab?
N: Sure. Anything else?
R: Yes. She's on metformin. Depending on her kidney function, the radiologist may want it withheld for forty-eight hours after the scan. Don't stop it yet, just make sure the doctor reviews it once the result's back.`,
q: "What does the radiographer say about the patient's metformin?",
o: ["It must be stopped before the scan.", "It may need to be withheld after the scan.", "It does not affect the scan."],
a: 1,
why: "The radiologist 'may want it withheld for forty-eight hours after the scan' depending on the result."
},
{
who: "two nurses at handover",
cast: { A: ["m", "Nurse"], B: ["f", "Nurse"] },
s: `A: Mr Blake in bed four is receiving end-of-life care. He's comfortable, and his syringe driver was refilled at six.
B: How's the family?
A: His wife has been here all night and she's exhausted. She doesn't want to go home in case something happens. I've asked the social worker to see if we can get her a recliner chair and some meal vouchers, but could you make sure she gets a break this morning, even if it's just a coffee downstairs?`,
q: "The nurse is mainly concerned about",
o: ["the patient's pain control", "the wellbeing of the patient's wife", "the arrangements for the patient's death"],
a: 1,
why: "He focuses on the exhausted wife and asks his colleague to make sure she gets a break."
}
],
LC: [
{
who: "an interview with Mark Ellis, a physiotherapist who runs a falls prevention program for older people",
cast: { I: ["f", "Interviewer"], M: ["m", "Mark Ellis"] },
s: `I: My guest today is Mark Ellis, a physiotherapist who runs a community falls prevention program. Mark, how big a problem are falls in older people?
M: It's huge. Around one in three people over sixty-five has a fall each year, and falls are the most common reason older people end up in hospital with an injury. But what people often don't realise is how much damage the fear of falling does. After a fall, many people start avoiding activity. They get weaker, their balance gets worse, and that makes another fall more likely.
I: So what does your program involve?
M: The core of it is exercise, specifically balance and strength training. There's very good evidence that the right kind of exercise reduces falls by around a quarter. But I want to stress that it has to be the right kind. Walking is great for your heart, but on its own it doesn't improve balance enough. People need exercises that challenge their balance, such as standing on one leg or stepping in different directions, and they need to do them regularly.
I: How regularly?
M: The research suggests about three hours a week, over at least four months. That's the part people find hard. Lots of participants come along enthusiastically for the first few weeks and then drift away.
I: How do you keep them coming?
M: We tried a few things. Reminder phone calls didn't make much difference. What really worked was the group itself. People make friends, they notice when someone's missing, and they start looking forward to the class. Some of our groups now go for coffee together afterwards, which I think has done as much good as the exercises.
I: Is exercise the whole answer?
M: No. We also look at other risk factors. We check whether people are on medicines that cause dizziness or drowsiness, and we liaise with their GP if we think something should be reviewed. Sedatives and some blood pressure medicines are common culprits. We also refer people for eye tests, and the occupational therapist can do a home safety check, looking at things like loose rugs and poor lighting.
I: Have you come across any surprises?
M: The biggest one was footwear. I hadn't appreciated how many people were wearing old slippers that were too loose, or shoes with no grip. It sounds trivial, but it's one of the easiest things to fix.
I: What would you like to see change?
M: I'd like falls prevention to start earlier. At the moment most people only get referred to us after they've already fallen and been injured. If we could reach people in their sixties, while they're still fairly strong, we'd prevent a lot more falls. I'd like GPs to ask about balance at every health check, in the same way they ask about blood pressure.`,
qs: [
["According to Mark, what effect does fear of falling have?", ["It makes people more careful and so reduces falls.", "It leads to reduced activity and more falls.", "It is the main reason for hospital admission."], 1],
["What does Mark say about walking as exercise?", ["It is not enough on its own to improve balance.", "It is the best way to prevent falls.", "It should be avoided by people with poor balance."], 0],
["Mark says that the main problem with the exercise program is that", ["it is too difficult for some participants", "it takes too long to show results", "participants often stop attending"], 2],
["What has helped most to keep people attending?", ["regular phone calls", "the social side of the groups", "the results of balance tests"], 1],
["Mark mentions footwear as an example of", ["a risk factor that is simple to deal with", "a topic covered in the home safety check", "a problem that mostly affects people in hospital"], 0],
["What change would Mark like to see?", ["more physiotherapists working in GP clinics", "earlier identification of people at risk", "more research on falls prevention"], 1]
]
},
{
who: "a presentation by Dr Kirsty Allen, a nurse researcher, about interruptions during medication rounds",
cast: { K: ["f", "Dr Kirsty Allen"] },
s: `K: Thank you for having me. I'm going to talk about something every nurse in this room will recognise: being interrupted while giving medications.
K: My interest in this started when I was a ward nurse. I made a drug error, a fairly minor one, thankfully. I gave a patient their morning dose of a blood pressure tablet that had been stopped the day before. When I thought about what had happened, I realised I'd been interrupted four times during that round. I'd lost track of where I was.
K: So, when I moved into research, I decided to measure how often this happens. We followed nurses on medication rounds in two hospitals and recorded every interruption. On average, nurses were interrupted about once for every two patients. Most interruptions came from other staff, not from patients, which surprised many of the managers we spoke to.
K: Not every interruption is harmful. Some are essential. If a colleague comes to tell you that a patient has collapsed, you need to know immediately. The problem is that the majority are not urgent. They're questions about where something is kept, phone calls, requests that could easily wait ten minutes.
K: And the evidence linking interruptions to errors is now quite strong. Each interruption increases the chance of a procedural error, like failing to check the patient's identity, and also of a clinical error, like giving the wrong dose. The risk rises with the number of interruptions. Interestingly, experienced nurses were no less affected than new graduates. Experience didn't protect people.
K: So what can be done? Many hospitals have introduced red vests or tabards with "Do not disturb" written on them. When we evaluated these, the results were mixed. Interruptions did fall, but some nurses felt the vests were uncomfortable and embarrassing, and after a few months many simply stopped wearing them.
K: What seemed to make the biggest difference was changing the system around the nurse. On one ward, they moved the phone away from the medication trolley area and gave the ward clerk responsibility for answering it. On another, they reorganised the timing of rounds so they didn't clash with doctors' ward rounds and visiting times. Those changes were less visible, but they lasted.
K: I'd also like to say something about culture. In several of the wards we studied, nurses told us they felt they couldn't refuse an interruption, especially from a senior doctor. Giving staff permission, and the right words, to say "Can this wait until I've finished?" turned out to be important.
K: To finish, I'd ask you to look at your own ward. Count the interruptions on your next round. You might be surprised.`,
qs: [
["Why does Dr Allen mention her own drug error?", ["to explain how her research interest began", "to show that serious errors are uncommon", "to illustrate the effects of tiredness"], 0],
["What surprised managers about the findings?", ["the high number of interruptions", "the fact that most interruptions came from staff", "the number of patients who interrupted nurses"], 1],
["What does Dr Allen say about experienced nurses?", ["They were interrupted less often.", "They were as likely to make errors as new graduates.", "They were better at avoiding clinical errors."], 1],
["What was the main problem with the 'Do not disturb' vests?", ["Staff stopped using them over time.", "They did not reduce the number of interruptions.", "Patients found them unwelcoming."], 0],
["Dr Allen believes the most effective changes were those that", ["involved the use of new technology", "were introduced by senior management", "altered the ward environment and routines"], 2],
["What point does Dr Allen make about workplace culture?", ["Nurses need to feel able to delay non-urgent requests.", "Doctors are the main cause of unnecessary interruptions.", "Ward managers should discipline staff who interrupt."], 0]
]
}
],
RA: {
topic: "Pressure injury prevention",
texts: [
{ h: "Text A", t: "Pressure injury stages (summary)", b: `Stage 1: Intact skin with non-blanchable redness of a localised area, usually over a bony prominence. May be difficult to detect in individuals with darker skin tones; look for changes in colour, temperature or firmness.
Stage 2: Partial-thickness skin loss presenting as a shallow open ulcer with a red-pink wound bed, or as an intact or ruptured blister.
Stage 3: Full-thickness skin loss. Fat may be visible, but bone, tendon and muscle are not exposed.
Stage 4: Full-thickness tissue loss with exposed bone, tendon or muscle.
Unstageable: The base of the wound is covered by slough or eschar, so the depth cannot be assessed.` },
{ h: "Text B", t: "Risk assessment", b: `All patients must have a pressure injury risk assessment using the Waterlow score within 8 hours of admission. Reassess:
• every 7 days
• after surgery or a procedure involving sedation
• if the patient's condition changes.
A score of 10–14 indicates at risk; 15–19, high risk; 20 or more, very high risk.
Patients in the emergency department for longer than 4 hours should have their skin inspected and their position changed, even if a full assessment has not yet been completed.` },
{ h: "Text C", t: "Prevention measures", b: `At risk: inspect skin each shift; encourage independent movement; use a pressure-redistributing foam mattress.
High risk: reposition at least every 3 hours; heel offloading with a pillow under the calves (not under the heels); consider a prophylactic silicone foam dressing on the sacrum.
Very high risk: reposition every 2 hours; active (alternating air) mattress; refer to the Wound Care Clinical Nurse Consultant.
All patients: keep skin clean and dry; use a pH-balanced cleanser instead of soap; avoid massaging reddened areas, as this can cause further tissue damage; refer to a dietitian if intake is poor.` },
{ h: "Text D", t: "Documentation and reporting", b: `Record the risk score and care plan in the patient's electronic record. Record each position change on the repositioning chart, including the time and the position (e.g. left side, 30° tilt).
Any pressure injury, at any stage, must be reported through the incident management system within 24 hours. Stage 3, Stage 4 and unstageable injuries acquired in hospital are reviewed by the Pressure Injury Committee.
Photograph wounds on admission and weekly using the approved clinical photography app only. Patient consent must be obtained and documented before any photograph is taken.` }
],
qs: [
{ k: "m", q: "Which text tells you how often to move a patient at very high risk?", a: "C" },
{ k: "m", q: "Which text tells you when a patient's risk must be assessed again?", a: "B" },
{ k: "m", q: "Which text describes an injury whose depth cannot be judged?", a: "A" },
{ k: "m", q: "Which text tells you what must happen before a wound is photographed?", a: "D" },
{ k: "m", q: "Which text advises against a common treatment for red skin?", a: "C" },
{ k: "m", q: "Which text gives guidance for patients waiting a long time in emergency?", a: "B" },
{ k: "m", q: "Which text tells you which injuries will be examined by a committee?", a: "D" },
{ k: "s", q: "Which risk assessment tool is used?", a: "Waterlow|Waterlow score" },
{ k: "s", q: "Within how many hours of admission must the risk assessment be done?", a: "8|eight|8 hours|eight hours" },
{ k: "s", q: "What Waterlow score indicates very high risk?", a: "20 or more|20|20+" },
{ k: "s", q: "What type of mattress is recommended for a patient at very high risk?", a: "active|alternating air|active alternating air mattress|alternating air mattress" },
{ k: "s", q: "What should be placed under the calves of a high-risk patient?", a: "pillow|a pillow" },
{ k: "s", q: "What should be used to clean skin instead of soap?", a: "pH-balanced cleanser|ph balanced cleanser" },
{ k: "s", q: "Which app must be used to photograph wounds?", a: "approved clinical photography app|clinical photography app" },
{ k: "g", q: "In patients with darker skin, check for changes in colour, temperature or {}.", a: "firmness" },
{ k: "g", q: "A Stage 2 injury may appear as an intact or ruptured {}.", a: "blister" },
{ k: "g", q: "Patients at high risk may have a silicone foam dressing applied to the {}.", a: "sacrum" },
{ k: "g", q: "A patient with poor intake should be referred to a {}.", a: "dietitian" },
{ k: "g", q: "Pressure injuries must be reported within {} hours.", a: "24|twenty-four" },
{ k: "g", q: "Wounds should be photographed on admission and then {}.", a: "weekly|every week" }
]
},
RB: [
{ src: "Extract from a hospital guideline on visiting hours", b: `Visiting hours are 10 am to 8 pm daily. Outside these hours, one nominated carer may stay with a patient who is receiving end-of-life care, has a cognitive impairment, or is under 18. Carers staying overnight must register at the nurses' station and wear a visitor badge. Nurses in charge may restrict visitors at any time if a patient's condition or an infection risk requires it, but should explain the reason to the family.`, q: "According to the guideline, a carer may stay overnight if", o: ["the patient has been in hospital for more than a week", "the patient has difficulty with thinking or memory", "the nurse in charge has given written permission"], a: 1, why: "A carer may stay for a patient with a 'cognitive impairment'." },
{ src: "Email to theatre and ward staff", b: `Subject: Fasting before surgery. A recent audit showed that many patients on the morning list were fasting from midnight, often for more than 12 hours. This is unnecessary and contributes to dehydration and post-operative nausea. Please follow the current guideline: patients may eat until 6 hours before anaesthesia and drink clear fluids until 2 hours before, unless the anaesthetist instructs otherwise. Ward staff should offer clear fluids until the cut-off time.`, q: "The purpose of the email is to", o: ["reduce unnecessarily long fasting times", "introduce a new fasting guideline", "report an increase in post-operative nausea"], a: 0, why: "It reminds staff of the 'current' guideline because patients were fasting for too long." },
{ src: "Extract from a policy on the use of physical restraint", b: `Physical restraint must only be used as a last resort, when a patient's behaviour poses an immediate risk of serious harm to themselves or others and less restrictive options have failed. Restraint must be authorised by a medical officer within one hour of being applied. The patient must be observed continuously while restrained, and the need for restraint reviewed at least every 2 hours. All use of restraint must be reported as an incident.`, q: "What does the policy say about the review of restraint?", o: ["It must be carried out by a medical officer.", "It must take place at regular intervals.", "It is only needed if the patient's behaviour changes."], a: 1, why: "The need for restraint must be 'reviewed at least every 2 hours'." },
{ src: "Instructions for use: bladder scanner", b: `Before scanning, select the correct patient type. Use 'Female' mode for women who have not had a hysterectomy, and 'Male' mode for all men and for women who have had a hysterectomy, because the absence of the uterus can lead the scanner to measure an inaccurate volume. Apply a generous amount of gel and aim the probe towards the bladder. Repeat the scan if the bladder image is not centred on the screen.`, q: "Why might a nurse choose 'Male' mode for a female patient?", o: ["because the patient has had her uterus removed", "because the bladder image is not centred", "because the patient's bladder volume is very large"], a: 0, why: "Women who have had a hysterectomy should be scanned in 'Male' mode." },
{ src: "Notice to staff in a community health centre", b: `From 1 July, all patient interpreters must be booked through the Language Services portal at least 48 hours before the appointment. Staff must not ask family members, especially children, to interpret clinical information, except in an emergency. If an interpreter is needed urgently, use the telephone interpreting service, which is available 24 hours a day. Record the interpreter's ID number in the patient's notes.`, q: "The notice states that family members", o: ["may interpret if an interpreter cannot be booked in time", "should not usually be used to interpret", "need to be registered with Language Services"], a: 1, why: "Staff 'must not ask family members' to interpret except in an emergency." },
{ src: "Extract from a guideline on blood transfusion", b: `Observations (temperature, pulse, respiratory rate and blood pressure) must be recorded before the transfusion begins, 15 minutes after the start of each unit, and at the end of each unit. Most severe reactions occur within the first 15 minutes, so the patient should be closely observed during this period. If a reaction is suspected, stop the transfusion immediately, keep the IV line open with 0.9% sodium chloride and notify the medical officer.`, q: "Why are observations taken 15 minutes after the transfusion starts?", o: ["because this is when serious reactions most often happen", "because the transfusion rate is increased at this point", "because this is the time the first unit should finish"], a: 0, why: "'Most severe reactions occur within the first 15 minutes.'" }
],
RC: [
{
t: "Nurses and antimicrobial stewardship",
b: `For most of the history of antibiotics, the question of which drug to give, at what dose and for how long has been seen as a matter for doctors. Antimicrobial stewardship programmes, which aim to preserve the effectiveness of antibiotics by ensuring they are used only when necessary and in the right way, have reflected this. They have typically been led by infectious diseases physicians and pharmacists, with nurses mentioned, if at all, as people who carry out instructions.

This is beginning to change. Researchers and policymakers increasingly argue that stewardship will not succeed without nurses, for the simple reason that nurses are present at almost every stage of a patient's antibiotic treatment. They often collect the specimens on which diagnosis depends, they administer the doses, and they are usually the first to notice whether a patient is improving.

Take specimen collection. A urine sample contaminated by poor technique may grow bacteria that were never causing an infection, prompting an unnecessary course of antibiotics. Blood cultures taken after the first dose of antibiotic may fail to grow the organism responsible, leaving the medical team guessing. In both cases the nurse's actions shape the prescribing decisions that follow, even though the nurse may never be involved in those decisions.

Timing matters too. Delays in giving the first dose of antibiotics to a patient with sepsis are associated with worse outcomes, and nurses are central to reducing them. At the other end of treatment, nurses are well placed to prompt a review. Intravenous antibiotics are frequently continued for longer than necessary simply because nobody has asked whether the patient could switch to tablets. A nurse who notices that a patient is eating, drinking and afebrile can raise the question on the ward round.

Some hospitals have formalised this role. In one Australian programme, nurses were given a checklist to use at the 48-hour mark of every intravenous antibiotic course. It asked whether cultures had been reviewed, whether the patient met criteria for oral therapy and whether a stop date had been documented. Use of the checklist was associated with a meaningful reduction in the average duration of intravenous treatment, without any increase in readmissions.

There are obstacles. Many nurses report that they do not feel confident challenging a prescription, particularly when the prescriber is senior. Others say that they have never received any education on antimicrobial resistance beyond hand hygiene. And in busy wards, a review prompt may simply be lost among other priorities.

Perhaps the most persistent obstacle, however, is the belief, held by some doctors and nurses alike, that questioning an antibiotic is outside the nurse's scope of practice. In fact, nurses are not being asked to prescribe. They are being asked to use the information they already hold, and to share it at the moment when it can make a difference.

Patients, too, have a role, and nurses often spend more time with them than any other professional. Explaining why an antibiotic is not needed for a viral infection, or why it is important to finish a course that has been prescribed, can shape behaviour long after discharge. Stewardship, in this broader sense, is less a programme than a habit of practice, and one in which nurses are already more involved than they are given credit for.`,
qs: [
["According to the first paragraph, antimicrobial stewardship programmes have traditionally", ["been designed and led by nurses", "given nurses a minor role", "focused mainly on patient education", "been run without input from pharmacists"], 1],
["Why do researchers believe nurses are essential to stewardship?", ["They are involved throughout antibiotic treatment.", "They prescribe antibiotics in many settings.", "They have more time than doctors to review patients.", "They are trained in infectious diseases."], 0],
["The writer uses the examples of urine samples and blood cultures to show that", ["laboratory errors are common", "nurses should make diagnostic decisions", "nursing practice affects prescribing", "antibiotics are often started too early"], 2],
["According to the fourth paragraph, intravenous antibiotics often continue too long because", ["oral antibiotics are less effective", "patients prefer intravenous treatment", "doctors are unaware of the guidelines", "no one prompts a review of the route"], 3],
["What was the result of the Australian checklist programme?", ["Patients spent less time on intravenous antibiotics.", "Readmissions to hospital increased slightly.", "Nurses felt more confident about prescribing.", "More cultures were taken before treatment."], 0],
["The phrase 'lost among other priorities' suggests that", ["nurses forget their training on busy wards", "review prompts may be overlooked when the ward is busy", "managers do not consider stewardship important", "checklists are often misplaced"], 1],
["What does the writer identify as the most persistent obstacle?", ["a lack of education about resistance", "a shortage of nursing staff", "the attitudes of patients", "beliefs about the nurse's role"], 3],
["In the final paragraph, the writer suggests that stewardship", ["should be part of everyday nursing practice", "is mainly the responsibility of patients", "requires a formal programme to succeed", "is less important after discharge"], 0]
]
},
{
t: "Music in dementia care",
b: `Visitors to the dementia unit at a large aged-care home in Melbourne are sometimes surprised to see residents wearing headphones in the afternoon. The residents are listening to personalised playlists, compiled with the help of their families, of songs that were meaningful to them earlier in life. Staff say the effect can be remarkable. Residents who rarely speak may begin to sing along, and some who are restless in the late afternoon become calmer.

Interest in music for people with dementia has grown rapidly over the past decade, helped by widely shared videos of apparently unresponsive people coming to life when they hear a familiar song. Part of the explanation may lie in the way musical memories are stored. Areas of the brain involved in long-term musical memory appear to be relatively spared in Alzheimer's disease, at least until the later stages, which may be why a person can remember the words of a song from their youth but not what they had for lunch.

The evidence from clinical trials, however, is more modest than the videos suggest. Reviews of the research have found that music-based interventions probably reduce depressive symptoms and may improve overall behaviour and quality of life, but the effects are generally small and the studies vary greatly in quality. Many involved small numbers of participants, and in most it was impossible to hide from staff which residents were receiving the intervention, which may have influenced how their behaviour was rated.

Researchers also distinguish between different approaches. Music therapy, delivered by a qualified therapist, usually involves active participation, such as singing, playing simple instruments or moving to music, and is adapted to the person's responses during the session. Personalised music listening, by contrast, can be delivered by care staff or family and is far cheaper. It is not yet clear whether the more intensive approach produces better results, and some studies suggest the benefits of both fade within weeks if the activity stops.

Not every response is positive. Some families report that particular songs triggered distress, perhaps because they were linked to a painful memory or a person who had died. Staff at the Melbourne home learned to watch residents closely during the first sessions, and to remove songs that seemed to upset them. They also found that headphones were not suitable for everyone; some residents found them confusing or uncomfortable and preferred music played quietly in the room.

There is also a concern that music could become a substitute for human contact rather than an addition to it. A resident wearing headphones may appear settled, but if staff then leave them alone for long periods, the intervention may simply be a more pleasant form of neglect. The most enthusiastic advocates of music programmes stress that the best results occur when someone sits with the person, sings along and talks about the memories the songs bring back.

For care homes struggling with staff shortages, the attraction of a low-cost intervention is obvious. The challenge will be to use it in a way that supports relationships rather than replacing them, and to continue evaluating its effects with more rigorous research.`,
qs: [
["What do staff at the Melbourne home report about the playlists?", ["They reduce the need for medication.", "They can produce striking changes in some residents.", "They are most effective in the morning.", "They are chosen mainly by staff."], 1],
["The writer refers to research on the brain in order to", ["suggest why musical memory may last longer", "explain the causes of Alzheimer's disease", "show that music can reverse memory loss", "criticise the videos shared online"], 0],
["Why does the writer describe the clinical evidence as 'modest'?", ["The studies were carried out over too long a period.", "Music was found to increase depressive symptoms.", "The benefits found were small and the studies were limited.", "Only one type of music was tested."], 2],
["What problem with many studies is mentioned in the third paragraph?", ["Residents refused to take part.", "Staff knew which residents were receiving music.", "Families influenced the choice of music.", "The music used was not personalised."], 1],
["According to the fourth paragraph, personalised music listening", ["is known to be less effective than music therapy", "has longer-lasting effects than music therapy", "must be delivered by a qualified therapist", "costs much less than music therapy"], 3],
["What did staff at the Melbourne home learn to do?", ["play the same songs for all residents", "use headphones with every resident", "observe residents' reactions to particular songs", "avoid music linked to the residents' youth"], 2],
["The phrase 'a more pleasant form of neglect' refers to", ["residents being left alone because they appear calm", "families visiting less often", "staff choosing music residents do not like", "residents listening to music for too long"], 0],
["What is the writer's overall view of music programmes?", ["They should replace other forms of activity.", "They have little real value in dementia care.", "They are useful if they support human contact and are properly evaluated.", "They are too expensive for most care homes."], 2]
]
}
],
W: {
title: "Transfer letter to a residential aged-care facility",
notes: `You are a registered nurse on the medical ward of Eastfield Hospital. Today's date is 22 August.

Patient details
Name: Mr Harold Finch
DOB: 11/09/1938 (85 years)
Admitted: 12/08 – community-acquired pneumonia (right lower lobe)
Past history: Alzheimer's disease (moderate), atrial fibrillation (on apixaban), osteoarthritis, hearing impairment (hearing aid left ear)
Social: lived alone with home-care support 3x/week; recent falls at home x2; family (son Michael) and GP agree he can no longer live safely alone; permanent place arranged at Greenway Aged Care

Nursing notes
12/08 IV antibiotics. O2 2L via nasal prongs. Confused, agitated at night.
14/08 Delirium screen positive. Hearing aid found to have flat battery – replaced. Agitation improved.
16/08 Changed to oral amoxicillin. O2 ceased. Afebrile.
18/08 Small skin tear L forearm (bumped bed rail) – steri-strips, non-adherent dressing, healing well.
20/08 Antibiotics completed. Eating 50–75% of meals – prefers soft foods, needs encouragement. Weight 61 kg (68 kg in March).
21/08 Mobilising with four-wheeled frame + supervision. Continent with prompting to toilet 2–3 hourly.
22/08 Confusion back to baseline (per son). Enjoys music and talking about his career as a train driver.

Medications: apixaban 2.5 mg BD, donepezil 10 mg nocte, paracetamol 1 g QID PRN, Fortisip (supplement drink) BD.
Plan: transfer 23/08 by patient transport. Dietitian referral at facility. Dressing change every 3 days until healed.`,
task: "Using the information in the case notes, write a letter to Ms Priya Nair, Clinical Care Manager, Greenway Aged Care, 40 Lake Road, Eastfield, who will be responsible for Mr Finch's care after his transfer tomorrow. In your answer: expand the relevant notes into complete sentences; do not use note form; use letter format. The body of the letter should be approximately 180–200 words.",
model: `Ms Priya Nair
Clinical Care Manager
Greenway Aged Care
40 Lake Road
Eastfield

22 August

Dear Ms Nair,

Re: Mr Harold Finch, DOB 11/09/1938

I am writing regarding Mr Finch, an 85-year-old man with moderate Alzheimer's disease, who will be transferred to your facility tomorrow for permanent residential care.

Mr Finch was admitted on 12 August with right lower lobe pneumonia. He has completed a course of antibiotics and no longer requires oxygen. During his admission he developed delirium, which improved once the battery in his left hearing aid was replaced. His confusion has now returned to his usual level, according to his son.

He mobilises with a four-wheeled frame under supervision. He is continent if prompted to use the toilet every two to three hours.

His appetite remains reduced, and he eats only half to three-quarters of his meals, preferring soft foods. His weight has fallen from 68 kg in March to 61 kg. He is taking a supplement drink twice daily, and I would be grateful if you could arrange a dietitian review.

He has a healing skin tear on his left forearm, which requires a dressing change every three days.

His current medications are listed on the enclosed chart. He enjoys music and talking about his career as a train driver.

Please contact me if you require any further information.

Yours sincerely,

Registered Nurse
Medical Ward, Eastfield Hospital`
},
S: [
{
set: "Child health clinic",
cand: "Nurse",
card: ["A parent has brought her 10-month-old baby to the clinic. The baby has had a temperature of 38.4°C since last night and is less interested in feeding. The parent wants antibiotics.", "Find out more about the baby's symptoms (e.g. feeding, wet nappies, rash, breathing, alertness).", "Explain that fever is a normal response to infection and most infections in babies are caused by viruses, which antibiotics do not treat.", "Advise on care at home (small frequent feeds, light clothing, paracetamol for discomfort as directed).", "Explain warning signs that need urgent medical care (e.g. fewer wet nappies, rash that doesn't fade, difficulty breathing, very drowsy).", "Respond to the parent's insistence on antibiotics and arrange for the doctor to examine the baby today."],
pat: { role: "Mother of a 10-month-old baby", lines: ["My baby's had a fever since last night. Thirty-eight point four. I think she needs antibiotics, can you get the doctor to prescribe some?", "She's feeding less than usual, but she's still taking the bottle. Maybe four or five wet nappies today. No rash that I've seen.", "She's a bit grizzly, but she smiled at me in the waiting room.", "But last time my son had a fever, the doctor gave him antibiotics and he got better in two days.", "So what am I supposed to do, just wait? I've got work tomorrow.", "Okay. What should make me worried tonight?"] }
},
{
set: "Surgical ward",
cand: "Nurse",
card: ["Your patient had bowel surgery two days ago. The physiotherapist wants him to walk today, but he refuses because he is afraid the wound will 'burst open'.", "Acknowledge his fear and find out what is worrying him.", "Explain why early walking is important (prevents clots and chest infections, helps the bowel recover).", "Reassure him about the wound (stitches/staples hold it securely; support it with a pillow when coughing or moving).", "Discuss pain relief before walking and offer to help him.", "Agree a small goal for today (e.g. sit out of bed, then walk to the door)."],
pat: { role: "Patient, 67, two days after bowel surgery", lines: ["I'm not getting out of that bed today. I can feel the stitches pulling every time I move.", "My neighbour had an operation and her wound split open. I don't want that happening to me.", "Why can't I just rest? Isn't that what you're supposed to do after an operation?", "It really hurts when I try to sit up.", "I suppose I could try to sit in the chair. But not walking.", "Okay, okay. If you stay with me, I'll try to get to the door."] }
}
]
});
