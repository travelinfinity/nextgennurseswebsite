/* NextGen Nurses OET Nursing practice · Test 5. Original practice material, not real OET items. */
OET_TEST({
n: 5,
LA: [
{
who: "a physiotherapist talking to a patient called Chloe Martin, who has injured her ankle",
cast: { T: ["m", "Physiotherapist"], P: ["f", "Chloe Martin (patient)"] },
title: "Patient: Chloe Martin · Left ankle sprain",
notes: `#Injury
injured while playing {}
landed on another player's {}
heard a {} at the time of injury
injury occurred {} days ago
#Current symptoms
swelling mainly on the {} side of the ankle
ankle feels {} on uneven ground
#Previous history
sprained the same ankle {} times before
did not complete {} after previous injuries
#Treatment so far
has been using {} and elevation
#Plan
start {} exercises using a wobble board
wear an ankle {} for sport for six months
expected return to sport in about {}`,
ans: ["netball", "foot", "pop|popping sound", "four|4", "outer|outside", "unstable|wobbly", "three|3", "rehab|rehabilitation", "ice", "balance", "brace|support", "six weeks|6 weeks"],
s: `T: Hi Chloe, I'm Ben. I see you've hurt your left ankle. What happened?
P: I was playing netball on Saturday. I jumped for the ball and came down on another player's foot. My ankle just rolled right over.
T: Did you hear or feel anything at the time?
P: Yes, I heard a pop. That really scared me.
T: A pop is quite common with ligament injuries. So that was four days ago. Were you able to walk afterwards?
P: I hobbled off the court, and I've been walking on it since, but it's sore.
T: Where's the swelling?
P: Mostly on the outer side, around the bone here. And it's gone purple down towards my toes.
T: That bruising is the blood tracking down with gravity. How does it feel when you walk?
P: On flat ground it's okay now. But on uneven ground, like the grass at the park, it feels unstable, like it's going to give way.
T: Have you injured this ankle before?
P: Yes, three times. This is the fourth.
T: What happened after the previous injuries? Did you see anyone?
P: I saw a physio after the first one, but I didn't really finish the rehab. Once it stopped hurting I just went back to playing.
T: That's very common, but it's probably why it keeps happening. The ligaments heal, but the balance and control around the ankle don't fully recover unless you train them. What have you done for it so far?
P: Ice and elevation, like the coach said. And I've been wearing a compression bandage during the day.
T: Good, that's exactly right for the first few days. I've examined it, and the ligaments on the outside are sprained, but the ankle is stable when I test it, and you can bear weight. I don't think it's broken.
P: That's a relief.
T: Today I'd like to start some balance exercises. We'll use a wobble board here, and I'll give you some to do at home, like standing on one leg while you brush your teeth.
P: Okay.
T: When you return to sport, I'd recommend wearing an ankle brace for at least six months. It reduces the risk of another sprain.
P: How long until I can play again?
T: If the rehab goes well, I'd expect you back playing in about six weeks. But this time we finish the program properly.
P: Deal.`
},
{
who: "a nurse talking to a patient called Ivan Petrov at a pre-admission clinic",
cast: { N: ["f", "Pre-admission nurse"], P: ["m", "Ivan Petrov (patient)"] },
title: "Patient: Ivan Petrov · Pre-admission, laparoscopic cholecystectomy",
notes: `#Background
surgery for {} in the gallbladder
had {} episodes of pain in the last six months
#Medical history
takes medication for high {}
uses a {} machine at night for sleep apnoea
had a reaction to {} after a previous operation
#Medications
takes {} for his heart; to be stopped seven days before surgery
#Social
lives with his {}, who will drive him home
#Instructions given
no food after {} the night before surgery
clear fluids allowed until {} on the day of surgery
bring his {} to hospital
arrange for someone to stay with him for {} after discharge
expects {} small cuts of about one centimetre`,
ans: ["gallstones|stones", "three|3", "blood pressure", "CPAP", "a painkiller|tramadol|painkiller", "aspirin", "son", "midnight", "six|6|6 am|six in the morning|6am", "CPAP machine|machine|CPAP", "24 hours|twenty-four hours|one night", "four|4"],
s: `N: Good morning, Mr Petrov. I'm Joanna, one of the pre-admission nurses. I'll be going through some questions to make sure everything's ready for your operation next Tuesday. Can you tell me what you're having done?
P: They're taking out my gallbladder. I've got gallstones.
N: That's right, a laparoscopic cholecystectomy, which is keyhole surgery. How many attacks of pain have you had?
P: Three in the last six months. The last one, I ended up in emergency. It was terrible.
N: I'm sorry to hear that. Let's go through your medical history. Do you have any other health conditions?
P: High blood pressure. I take a tablet every morning for that.
N: Do you have any problems with your breathing or sleep?
P: Yes, I've got sleep apnoea. I use a CPAP machine at night.
N: That's important for the anaesthetist to know. Please bring your CPAP machine with you to hospital, because you'll need it after the anaesthetic, especially on the first night.
P: Okay, I'll make a note.
N: Have you had any problems with an anaesthetic or medications in the past?
P: When I had my knee operation, they gave me a painkiller, tramadol I think, and I was vomiting and very confused. My wife, she was alive then, said I didn't know where I was.
N: Thank you. I'll record that as a reaction to tramadol, so it isn't given again. Any allergies to anything else?
P: No.
N: And what other medications do you take?
P: Aspirin, every day. The doctor said it's for my heart, to keep my blood thin.
N: The surgeon has asked that you stop the aspirin seven days before the operation, to reduce the risk of bleeding. So your last dose will be this Tuesday. Keep taking your blood pressure tablet, including on the morning of surgery, with a small sip of water.
P: Okay.
N: Who's at home with you?
P: My son lives with me. He'll drive me in and pick me up.
N: Great. Most people go home the same day or the next morning. You'll need someone to stay with you for twenty-four hours after you go home.
P: My son works from home, so that's fine.
N: And your fasting instructions. Nothing to eat after midnight the night before surgery. You can have clear fluids, like water, until six in the morning, then nothing at all.
P: No coffee?
N: Black coffee without milk is fine until six. Do you have any questions?
P: Just, how big will the scars be?
N: Usually four small cuts, about one centimetre each.`
}
],
LB: [
{
who: "two nurses discussing a patient with a chest drain",
cast: { A: ["m", "Nurse"], B: ["f", "Nurse"] },
s: `A: Can you have a look at Mrs Grey's chest drain with me? The water in the chamber was swinging this morning, but now it's not moving at all.
B: Is she breathing any differently?
A: No, sats are ninety-six and she's comfortable.
B: Check the tubing isn't kinked or she's not lying on it. If it's clear and still not swinging, it might mean the lung has re-expanded. Either way, let the medical team know, because they may want a chest X-ray.`,
q: "What does the second nurse advise?",
o: ["clamping the drain until the doctor arrives", "checking the tubing and informing the doctors", "changing the drainage bottle"],
a: 1,
why: "She says to check for kinks and to 'let the medical team know'."
},
{
who: "a nurse unit manager talking to staff",
cast: { M: ["f", "Nurse unit manager"] },
s: `M: We'll have three agency nurses with us this week while two of our staff are on leave. Several of them haven't worked here before. Can whoever is in charge make sure they're shown where the emergency trolley is and how our medication system works before they take patients? Please don't give them the most complex patients on their first shift, and check in with them during the day.`,
q: "What is the manager asking staff to do?",
o: ["support agency nurses who are new to the ward", "train the agency nurses to use the emergency trolley", "give agency nurses fewer patients than usual"],
a: 0,
why: "She asks staff to orient them, avoid giving them complex patients and check in with them."
},
{
who: "a doctor talking to a nurse about a delayed operation",
cast: { D: ["m", "Doctor"], N: ["f", "Nurse"] },
s: `N: Mrs Clarke has been nil by mouth since midnight, and theatre still hasn't called. She's very thirsty.
D: I've just spoken to the anaesthetist. She's not likely to go until after four this afternoon. She can have clear fluids until eleven, then nothing. And can you check her blood glucose? She's diabetic, and she's had nothing to eat.`,
q: "The doctor tells the nurse that the patient",
o: ["can eat a light meal before surgery", "may drink clear fluids for a limited time", "will have her surgery cancelled"],
a: 1,
why: "She 'can have clear fluids until eleven, then nothing'."
},
{
who: "a diabetes educator talking to a nurse",
cast: { E: ["f", "Diabetes educator"], N: ["m", "Nurse"] },
s: `N: Mr Arnold's blood glucose was twenty-two this morning. He's on prednisolone for his chest.
E: That's common with steroids. They push the glucose up, especially in the afternoon. I've discussed it with the doctor, and we'll start him on morning insulin to match the steroid dose. As the steroid is reduced, we'll need to reduce the insulin too, or he'll go low. So please check his glucose before each meal and at bedtime.`,
q: "What does the diabetes educator say about the insulin dose?",
o: ["It will be given at bedtime.", "It will need to fall as the steroid dose falls.", "It should be increased in the afternoon."],
a: 1,
why: "'As the steroid is reduced, we'll need to reduce the insulin too.'"
},
{
who: "a physiotherapist talking to a nurse",
cast: { T: ["f", "Physiotherapist"], N: ["m", "Nurse"] },
s: `T: Mr Webb isn't using his incentive spirometer. I found it in the drawer.
N: He said it hurts his wound when he breathes in deeply.
T: That's why he needs good pain relief before he does it. Could you give his analgesia about thirty minutes before I come at two? And if you can encourage him to do ten breaths every hour while he's awake, that would really help prevent a chest infection.`,
q: "What does the physiotherapist ask the nurse to do?",
o: ["remove the spirometer from the patient's room", "give pain relief before the physiotherapy session", "arrange a chest X-ray for the patient"],
a: 1,
why: "She asks for analgesia about thirty minutes before she arrives at two."
},
{
who: "a nurse talking to a pharmacist on the phone",
cast: { N: ["f", "Nurse"], P: ["m", "Pharmacist"] },
s: `N: Mr Diaz has a nasogastric tube now. He's on slow-release morphine tablets twice a day. Can I crush them?
P: No, definitely not. Crushing a slow-release tablet releases the whole dose at once, which could be dangerous. I'll ask the doctor to change it to a liquid form of morphine given more often. Until then, if he's in pain, use his PRN order.`,
q: "What does the pharmacist tell the nurse?",
o: ["The tablets can be crushed if mixed with water.", "The patient's medication will need to be changed.", "The patient should stop taking morphine."],
a: 1,
why: "He will ask the doctor to change it to liquid morphine."
}
],
LC: [
{
who: "an interview with Rosa Delgado, a continence nurse consultant",
cast: { I: ["m", "Interviewer"], R: ["f", "Rosa Delgado"] },
s: `I: Today I'm talking with Rosa Delgado, a clinical nurse consultant in continence care. Rosa, incontinence is a topic many people avoid. Why is that?
R: Embarrassment, mainly. Many people, women especially, think it's a normal part of ageing or of having had children, and that nothing can be done. So they don't mention it, even to their doctor. On average, people wait years before seeking help. Meanwhile, they've stopped going to the gym, stopped seeing friends, and organised their whole life around knowing where the nearest toilet is.
I: Is it really treatable?
R: In most cases, yes. For stress incontinence, which is leaking when you cough, laugh or exercise, pelvic floor muscle training is the first treatment, and it's very effective when it's done properly. The problem is that many women have been told to 'do their pelvic floor exercises' but never been shown how. When we check, about a third are actually doing them wrong, often pushing down instead of lifting up.
I: How do you check?
R: There are several ways, including an internal examination by a trained nurse or physiotherapist, or ultrasound. Once women know they're doing it correctly, and they practise regularly for three months, most see a real improvement.
I: What about other types of incontinence?
R: Urge incontinence, where you get a sudden strong need to go and can't hold on, is managed differently. We look at what people are drinking. Caffeine is a common irritant. So is fizzy drink. Some people drink very little because they're worried about leaking, but concentrated urine actually irritates the bladder more. Then we do bladder training, which means gradually increasing the time between toilet visits.
I: And in hospital?
R: That's an area I feel strongly about. When older patients come into hospital, they're often given pads straight away, even if they were continent at home. It may be because they're slow to get to the toilet, or staff are busy. But once someone is wearing a pad, they may stop trying to get to the toilet, and they can lose continence that they had before. I'd much rather we offered regular toileting assistance.
I: What would you like nurses to do differently?
R: Ask. It's that simple. Include a question about bladder control in the admission assessment, and ask in a way that makes it normal, like, "Many people have some leaking. Is that something that happens to you?" You'd be amazed how often the answer is yes, and how relieved people are to talk about it.`,
qs: [
["According to Rosa, why do many people not seek help for incontinence?", ["They believe it is untreatable.", "They cannot find a specialist.", "They are unaware they have a problem."], 0],
["What problem with pelvic floor exercises does Rosa describe?", ["They take too long to show results.", "Many women perform them incorrectly.", "They are not effective for stress incontinence."], 1],
["What does Rosa say about people who drink very little?", ["They are less likely to have urge incontinence.", "They may make their bladder symptoms worse.", "They should increase their caffeine intake."], 1],
["Rosa is concerned that in hospital, older patients", ["are not offered pads when needed", "may lose continence because of the use of pads", "are kept in bed for too long"], 1],
["What does Rosa recommend nurses do?", ["refer all older patients to a continence service", "ask patients about bladder control in a normal way", "provide written information about pelvic floor exercises"], 1],
["What is Rosa's overall attitude to incontinence?", ["It is a normal part of ageing.", "It is often treatable but under-discussed.", "It is mainly a problem for hospitals."], 1]
]
},
{
who: "a presentation by Dr Angela Moore, a GP, about health literacy and the 'teach-back' method",
cast: { A: ["f", "Dr Angela Moore"] },
s: `A: Thank you for coming. I'd like to start with a question. When you explain something to a patient and then ask, "Do you understand?", how often does the patient say no?
A: Almost never. And yet research consistently shows that patients forget or misunderstand a large proportion of what health professionals tell them, sometimes half or more, within minutes of leaving the consultation.
A: This is partly about health literacy, which is the ability to find, understand and use health information. In Australia, surveys have suggested that around sixty percent of adults have difficulty with health information to some degree. Low health literacy is linked to more hospital admissions, poorer use of medicines and worse outcomes. But it's important to understand that it isn't simply about education. A highly educated person who is frightened, in pain, or has just received bad news will also struggle to take things in.
A: So, what can we do? One of the most effective techniques is called teach-back. Instead of asking whether the patient understands, you ask them to explain, in their own words, what they need to do. For example, "I want to make sure I've explained this clearly. Can you tell me how you're going to take your new tablets?"
A: Notice the wording. The responsibility is on me, the clinician, to explain clearly. It isn't a test of the patient. That matters, because patients can feel embarrassed if they think they're being examined.
A: If the explanation reveals a misunderstanding, you explain again, in a different way, and check again. You keep going until the patient can describe the key points correctly. And you don't need to check everything, just the two or three things that really matter for safety.
A: When I first started using teach-back, I worried it would make consultations much longer. In practice, once I got used to it, it added only a minute or two. And it saved time later, because I had fewer phone calls from confused patients and fewer problems with medicines.
A: I'd like to finish with a story. An elderly man was discharged from hospital with instructions to take his new heart medication "twice a day". When the community nurse used teach-back, he explained that he took one tablet when he got up and one at lunchtime, because those were the two times he was "up and about". In fact, the tablets needed to be twelve hours apart. A small detail, but one that could have made his treatment much less effective. Teach-back found it in under a minute.`,
qs: [
["Dr Moore begins with a question in order to show that", ["patients rarely admit they do not understand", "doctors seldom check patients' understanding", "patients usually understand their instructions"], 0],
["What does Dr Moore say about health literacy?", ["It depends mainly on a person's level of education.", "It can be affected by a patient's emotional state.", "It is rarely a problem in Australia."], 1],
["Why does Dr Moore emphasise the wording used in teach-back?", ["so patients do not feel they are being tested", "so patients repeat the exact words used", "so the explanation is shorter"], 0],
["According to Dr Moore, clinicians using teach-back should", ["check every piece of information", "focus on the most important points", "give written instructions first"], 1],
["What did Dr Moore find when she started using teach-back?", ["It made her consultations much longer.", "It took a little extra time but saved time later.", "Patients found it confusing."], 1],
["The story about the elderly man illustrates", ["the danger of prescribing too many medicines", "how a simple misunderstanding can be identified", "why community nurses should visit all patients"], 1]
]
}
],
RA: {
topic: "Fever in children",
texts: [
{ h: "Text A", t: "Background", b: `Fever is defined as a temperature of 38.0°C or above. It is one of the most common reasons for children to present to health services and is usually caused by a self-limiting viral infection.
Fever itself is not harmful and is part of the body's response to infection. The height of the fever does not reliably indicate how serious the illness is.
Febrile convulsions occur in about 3% of children aged 6 months to 5 years. They are frightening for parents but rarely cause lasting harm. Giving paracetamol or ibuprofen does not prevent febrile convulsions.` },
{ h: "Text B", t: "Red flags: seek urgent medical review", b: `• Age under 3 months with temperature 38.0°C or above
• Drowsy, floppy or difficult to wake
• Non-blanching rash (does not fade when pressed with a glass)
• Breathing difficulty, grunting or long pauses in breathing
• Signs of dehydration: fewer than 4 wet nappies in 24 hours, dry mouth, no tears, sunken fontanelle
• Fever lasting more than 5 days
• Seizure lasting more than 5 minutes
• Parent concern: 'this is different from previous illnesses'` },
{ h: "Text C", t: "Medications", b: `Treat the child's discomfort, not the number on the thermometer. If the child is miserable or in pain:
Paracetamol: 15 mg/kg per dose every 4–6 hours, maximum 4 doses in 24 hours.
Ibuprofen: 10 mg/kg per dose every 6–8 hours, maximum 3 doses in 24 hours. Avoid in children who are dehydrated or have chickenpox.
Do not routinely alternate paracetamol and ibuprofen.
Always use the measuring device supplied with the product. Kitchen teaspoons are not accurate.` },
{ h: "Text D", t: "Advice for parents", b: `• Offer frequent small drinks. Breastfed babies should continue breastfeeding.
• Dress the child in light clothing; do not wrap them in blankets.
• Do NOT sponge with cold water; it can cause shivering, which raises body temperature.
• Check on the child during the night.
• Keep the child home from childcare or school until they have been fever-free for 24 hours.
Parents should return or call the nurse on-call line (1800 022 222) if they are worried at any time.` }
],
qs: [
{ k: "m", q: "Which text tells you how to give medicine accurately?", a: "C" },
{ k: "m", q: "Which text tells you when a child can go back to school?", a: "D" },
{ k: "m", q: "Which text states that a high temperature does not always mean serious illness?", a: "A" },
{ k: "m", q: "Which text lists signs that a child is not getting enough fluid?", a: "B" },
{ k: "m", q: "Which text explains why cold sponging should be avoided?", a: "D" },
{ k: "m", q: "Which text tells you which children should not be given ibuprofen?", a: "C" },
{ k: "m", q: "Which text suggests that a parent's feeling should be taken seriously?", a: "B" },
{ k: "s", q: "What temperature defines fever?", a: "38.0°C or above|38.0°C|38°C|38" },
{ k: "s", q: "What usually causes fever in children?", a: "viral infection|a self-limiting viral infection|virus" },
{ k: "s", q: "What percentage of young children have febrile convulsions?", a: "3%|about 3%|3 percent" },
{ k: "s", q: "What is the dose of paracetamol per kilogram?", a: "15 mg/kg|15mg/kg|15" },
{ k: "s", q: "What is the maximum number of doses of ibuprofen in 24 hours?", a: "3|three" },
{ k: "s", q: "What can be used to check whether a rash fades?", a: "glass|a glass" },
{ k: "s", q: "What number can parents call if they are worried?", a: "1800 022 222|1800022222" },
{ k: "g", q: "A baby under 3 months with a fever needs an urgent {}.", a: "medical review|review" },
{ k: "g", q: "Paracetamol and ibuprofen do not prevent {}.", a: "febrile convulsions|convulsions" },
{ k: "g", q: "A seizure lasting longer than {} needs urgent review.", a: "5 minutes|five minutes" },
{ k: "g", q: "Children with a fever should be dressed in {}.", a: "light clothing" },
{ k: "g", q: "Breastfed babies should {} breastfeeding.", a: "continue" },
{ k: "g", q: "Kitchen {} should not be used to measure medicine.", a: "teaspoons" }
]
},
RB: [
{ src: "Extract from a policy on medication administration", b: `Medications must be administered at the time prescribed. Time-critical medications, including insulin, anti-Parkinson medications, antiepileptics and intravenous antibiotics, must be given within 30 minutes of the prescribed time. Other medications may be given within 60 minutes either side of the prescribed time. If a time-critical medication is delayed or omitted, the medical officer must be informed and the reason documented.`, q: "According to the policy, a delay in giving a time-critical medication must", o: ["be reported to the medical officer", "be avoided by giving it early", "be corrected at the next dose"], a: 0, why: "'The medical officer must be informed and the reason documented.'" },
{ src: "Email from the hospital education department", b: `Subject: Mandatory training deadline. All clinical staff must complete basic life support (BLS) training every 12 months. Our records show that 23% of nursing staff on surgical wards are currently overdue. Staff who are more than 3 months overdue will not be rostered for clinical shifts until the training is completed. Online modules and practical sessions can be booked through the learning portal.`, q: "What will happen to staff who are well overdue for training?", o: ["They will be asked to attend an extra session.", "They will lose access to the learning portal.", "They will not be allowed to work clinical shifts."], a: 2, why: "Staff more than 3 months overdue 'will not be rostered for clinical shifts'." },
{ src: "Extract from guidelines on enteral feeding", b: `Patients receiving enteral feeding should be positioned with the head of the bed raised to at least 30 degrees during feeding and for at least 30 minutes afterwards, to reduce the risk of aspiration. If the patient must lie flat for a procedure, the feed should be stopped before repositioning. Flush the tube with 30 mL of water before and after each medication to prevent blockage.`, q: "Why should the head of the bed be raised?", o: ["to help the feed run more quickly", "to lower the risk of fluid entering the lungs", "to prevent the tube from becoming blocked"], a: 1, why: "It is done 'to reduce the risk of aspiration'." },
{ src: "Notice in a patient waiting area", b: `If you have a fever, cough, sore throat or runny nose, please tell reception staff when you arrive and put on one of the masks provided. You may be asked to wait in a separate area. This helps to protect other patients, many of whom have weakened immune systems. Thank you for helping us keep everyone safe.`, q: "The notice asks patients with respiratory symptoms to", o: ["return home and make another appointment", "inform staff and wear a mask", "wait outside the building"], a: 1, why: "They should tell reception and put on a mask." },
{ src: "Extract from a hospital guideline on oxygen cylinders", b: `Oxygen cylinders must be secured in an approved holder or trolley at all times and must never be left standing unsupported. Check the gauge before transferring a patient to ensure there is sufficient oxygen for the journey, allowing for possible delays. Do not use oils, alcohol-based hand rub or petroleum-based creams near oxygen equipment, as these increase the risk of fire.`, q: "What should staff check before transferring a patient on oxygen?", o: ["that the patient has used hand rub", "that the cylinder contains enough oxygen", "that the cylinder is standing upright"], a: 1, why: "'Check the gauge … to ensure there is sufficient oxygen for the journey.'" },
{ src: "Memo to emergency department nurses", b: `From 1 June, nurses who have completed the approved training may initiate X-rays for suspected simple wrist, ankle and finger injuries at triage, according to the agreed criteria. This is expected to reduce waiting times for patients with minor injuries. Nurses who have not yet completed the training should continue to request X-rays through a medical officer. A list of approved nurses will be kept at the triage desk.`, q: "What change does the memo introduce?", o: ["All triage nurses can now order X-rays.", "Trained nurses can order certain X-rays themselves.", "Doctors will no longer request X-rays for minor injuries."], a: 1, why: "Nurses 'who have completed the approved training' may initiate certain X-rays." }
],
RC: [
{
t: "The placebo effect: friend or foe?",
b: `In clinical trials, the placebo has traditionally played a supporting role. A new medicine is compared with an inactive 'sugar pill', and if the medicine performs better, it is judged to work. Any improvement in the placebo group is regarded as background noise, something to be subtracted from the real result.

Yet that noise can be surprisingly loud. In trials of treatments for pain, depression and irritable bowel syndrome, patients receiving placebo frequently report substantial improvements, sometimes nearly as large as those seen with active treatment. Researchers have increasingly asked whether these effects deserve study in their own right.

The term 'placebo effect' covers a number of different phenomena. Some apparent improvement is due to natural recovery, or to the tendency of symptoms that are unusually severe at one point to become less severe later. But there also appear to be genuine changes in the body produced by expectation and the context of care. Brain imaging studies have shown that a placebo given for pain can activate the brain's own pain-relieving systems, and that these effects can be blocked by drugs that block opioids.

The context of care seems to matter a great deal. In one well-known study, patients with irritable bowel syndrome were divided into three groups: one received no treatment, one received sham acupuncture from a practitioner who said little, and one received sham acupuncture from a practitioner who was warm, attentive and confident. The third group reported the greatest improvement. The finding suggests that the way care is delivered is not merely a matter of courtesy but may influence outcomes.

The flip side is the nocebo effect: negative expectations producing negative outcomes. Patients told about possible side effects of a medicine are more likely to report experiencing them. In trials, a substantial proportion of patients taking placebo stop treatment because of 'side effects'. This raises an ethical dilemma for clinicians, who must obtain informed consent without unnecessarily creating anxiety.

Some researchers have explored whether placebos could be used deliberately. Giving a patient an inactive treatment while claiming it is active would be deceptive and is generally considered unethical. However, studies of so-called 'open-label' placebos, in which patients are told honestly that they are receiving an inactive pill, have produced surprising results: some patients still improve. Why this should happen is not well understood, and the studies have been small.

For nurses and other clinicians, the most practical lesson may not concern pills at all. The words used when giving treatment, the confidence conveyed, and the time taken to listen all appear capable of influencing how patients experience their care. Telling a patient that a medicine 'should help' rather than that it 'might not do much' is not deception if it is honest; it may simply allow the treatment to work as well as it can.

None of this means that symptoms are 'all in the mind', a phrase many patients rightly find dismissive. Rather, it suggests that mind and body are more closely connected than conventional medicine has sometimes acknowledged, and that the relationship between patient and clinician is itself a form of treatment.`,
qs: [
["According to the first paragraph, the improvement seen in placebo groups has traditionally been", ["treated as a key result of trials", "considered unimportant to the outcome", "used to measure side effects", "ignored in trials of pain medicines"], 1],
["What does the writer say about placebo effects in trials of pain and depression?", ["They are often very small.", "They can be almost as large as the effects of real treatment.", "They are mainly caused by natural recovery.", "They have been eliminated by better trial design."], 1],
["The brain imaging studies suggest that placebos", ["have no physical effect on the body", "can trigger the body's natural pain relief", "work in the same way as opioid drugs", "are only effective for mild pain"], 1],
["What did the irritable bowel syndrome study show?", ["Sham acupuncture was more effective than real acupuncture.", "The practitioner's manner influenced the patients' improvement.", "Patients who received no treatment recovered fastest.", "Practitioners who spoke little achieved the best results."], 1],
["What ethical dilemma does the nocebo effect create?", ["how to inform patients about risks without increasing anxiety", "whether to give placebos to patients in trials", "how to stop patients withdrawing from trials", "whether patients should be told about the nocebo effect"], 0],
["What is surprising about the 'open-label' placebo studies?", ["Patients refused to take the pills.", "Some patients improved even though they knew the pill was inactive.", "The studies involved large numbers of patients.", "Clinicians were unaware which patients received placebos."], 1],
["In the seventh paragraph, the writer suggests that clinicians should", ["use placebos when no other treatment is available", "avoid telling patients about a medicine's benefits", "communicate honestly but positively about treatment", "spend less time explaining medication"], 2],
["Why does the writer mention the phrase 'all in the mind'?", ["to support the view that symptoms are imaginary", "to reject an interpretation that patients find dismissive", "to explain how placebos work", "to criticise patients who use placebos"], 1]
]
},
{
t: "Greening the hospital: nurses and healthcare waste",
b: `Healthcare exists to protect health, yet it is also a significant contributor to the environmental damage that threatens it. In Australia, the healthcare sector is estimated to account for around 7% of the country's carbon emissions. Hospitals consume large amounts of energy, water and single-use materials, and they generate enormous quantities of waste.

Much of this waste passes through nurses' hands. A single shift may involve opening dozens of packs of sterile equipment, using hundreds of pairs of gloves and discarding items that were never used. Over the past decade, a growing number of nurses have begun to ask whether all of this is necessary, and some have led changes that reduce waste without compromising patient safety.

Gloves are a good example. Non-sterile gloves are essential when there is a risk of contact with blood or body fluids, but studies have found that they are frequently worn when they are not needed, for instance when taking a blood pressure or handing a patient a meal. Unnecessary glove use not only creates waste; it can also reduce hand hygiene, as staff may move between tasks without removing their gloves or cleaning their hands. Several hospitals have run 'gloves off' campaigns, reminding staff when gloves are and are not required.

Waste segregation is another area where nurses can make a difference. Clinical waste, which must be specially treated or incinerated, is far more expensive and environmentally damaging to dispose of than general waste or recycling. Yet audits regularly find that a large proportion of material placed in clinical waste bins is not clinical at all: packaging, paper and uncontaminated items. Simple measures, such as positioning bins clearly and labelling them with examples, have substantially reduced the volume of clinical waste in some hospitals.

Operating theatres, which are particularly resource-intensive, have been a focus of attention. Theatre nurses have reviewed the contents of standard procedure packs, removing items that were almost never used. In one hospital, this reduced the weight of waste from common operations significantly and saved money at the same time.

There are limits to what individuals can achieve. Many products are only available in single-use form, and decisions about purchasing, energy use and building design are made at an organisational level. Some nurses also worry that an emphasis on sustainability could lead to pressure to reuse items that should be discarded, putting patients at risk. Infection prevention must remain the priority.

Nevertheless, nurses' practical knowledge makes them well placed to identify waste that managers and suppliers may never see. Professional organisations have increasingly recognised environmental sustainability as part of nurses' responsibilities, and some universities now include it in nursing curricula.

The argument for action is not only environmental. Climate change is already affecting health, through heatwaves, bushfires and changing patterns of disease. By reducing the environmental impact of their own work, nurses can help to protect the health of the communities they serve.`,
qs: [
["What point does the writer make in the first paragraph?", ["Hospitals have reduced their carbon emissions.", "Healthcare contributes to environmental harm.", "Australia's hospitals produce less waste than other countries.", "Most hospital waste comes from operating theatres."], 1],
["According to the second paragraph, some nurses have", ["refused to use single-use equipment", "introduced changes that reduce waste safely", "stopped opening sterile packs", "been criticised for using too many gloves"], 1],
["What problem with unnecessary glove use is mentioned?", ["It may lead to poorer hand hygiene.", "It increases the risk of allergies.", "It makes clinical tasks more difficult.", "It is more expensive than hand rub."], 0],
["What did audits of clinical waste bins find?", ["They were often too full.", "They contained many items that were not clinical waste.", "They were placed too far from patients.", "They were frequently mislabelled by suppliers."], 1],
["What was the result of reviewing standard procedure packs?", ["Less waste and lower costs.", "More items were added to the packs.", "Operations took less time.", "Fewer infections occurred."], 0],
["What concern do some nurses have about sustainability efforts?", ["They will increase the cost of healthcare.", "They may encourage unsafe reuse of equipment.", "They will take time away from patient care.", "They are not supported by managers."], 1],
["According to the writer, nurses are well placed to reduce waste because", ["they make purchasing decisions", "they understand everyday practice", "they are trained in environmental science", "they work in operating theatres"], 1],
["What is the writer's main argument in the final paragraph?", ["Reducing waste mainly saves money.", "Environmental action by nurses also supports health.", "Climate change is not yet affecting health.", "Hospitals should stop using single-use items."], 1]
]
}
],
W: {
title: "Letter to a school nurse about a child with newly diagnosed type 1 diabetes",
notes: `You are a registered nurse on the paediatric ward of Lakeside Children's Hospital. Today's date is 9 February.

Patient details
Name: Liam Chen
DOB: 14/06/2016 (9 years)
School: Riverbank Primary School, Year 4
Admitted: 04/02 – diabetic ketoacidosis (DKA); new diagnosis of type 1 diabetes
Parents: Mei and David Chen; both work full-time

Nursing notes
04/02 Presented with thirst, weight loss (3 kg), vomiting. DKA treated with IV insulin and fluids in high dependency unit.
06/02 Transferred to ward. Commenced multiple daily injections: long-acting insulin at night + rapid-acting insulin with meals.
07/02 Parents and Liam taught BGL monitoring and insulin injections. Liam can check his own BGL; parents give injections.
08/02 Continuous glucose monitor (CGM) fitted to upper arm – readings visible on parent's phone app.
09/02 Discharged home. Return to school 12/02.

School needs:
- Lunchtime insulin injection – needs trained adult to supervise/give (Liam not yet confident)
- Check BGL before PE and if unwell
- Hypo: BGL < 4 → 6 jelly beans, recheck 15 min; never leave alone; never send to office alone
- Keep hypo kit in classroom and take on excursions
- Liam enjoys soccer; can continue with snack before activity
- Diabetes educator, Ms Fiona Walsh, will visit school 13/02 to train staff
- Diabetes management plan attached`,
task: "Using the information in the case notes, write a letter to Ms Helen Murray, School Nurse, Riverbank Primary School, 5 Creek Road, Lakeside, explaining Liam's condition and care needs at school. In your answer: expand the relevant notes into complete sentences; do not use note form; use letter format. The body of the letter should be approximately 180–200 words.",
model: `Ms Helen Murray
School Nurse
Riverbank Primary School
5 Creek Road
Lakeside

9 February

Dear Ms Murray,

Re: Liam Chen, DOB 14/06/2016, Year 4

I am writing to inform you about Liam, a nine-year-old student at your school, who has been newly diagnosed with type 1 diabetes and will return to school on 12 February.

Liam was admitted on 4 February with diabetic ketoacidosis. He has now been stabilised on long-acting insulin at night and rapid-acting insulin with meals. A continuous glucose monitor has been fitted to his upper arm, and his parents can view the readings on a phone app.

Liam can check his own blood glucose level; however, he is not yet confident with injections, so a trained adult will need to supervise or give his lunchtime insulin. His blood glucose should also be checked before physical education and whenever he feels unwell.

If his level falls below 4 mmol/L, he should be given six jelly beans and rechecked after 15 minutes. He must never be left alone or sent to the office alone while hypoglycaemic. A hypo kit should be kept in his classroom and taken on excursions.

Liam can continue to play soccer, provided he has a snack beforehand.

Ms Fiona Walsh, a diabetes educator, will visit the school on 13 February to train staff. His diabetes management plan is attached.

Yours sincerely,

Registered Nurse
Paediatric Ward, Lakeside Children's Hospital`
},
S: [
{
set: "Radiology department",
cand: "Nurse",
card: ["A patient is booked for an MRI scan of her lower back. She is very anxious because she is afraid of small spaces and is considering cancelling.", "Find out what she is worried about.", "Explain what happens during the scan (lie still, about 30 minutes, loud knocking noises, headphones provided).", "Suggest ways to make it easier (going in feet first, eyes closed, call buzzer, talking to the radiographer, music).", "Explain that a mild sedative may be possible if arranged with her doctor (needs someone to drive her home).", "Encourage her not to cancel and agree on a plan."],
pat: { role: "Patient, 45, with back pain", lines: ["I don't think I can do this. I hate being in small spaces. I nearly fainted in a lift once.", "How long would I have to be in there?", "What if I panic halfway through and can't get out?", "My friend said it's incredibly noisy.", "Couldn't I just have something to knock me out?", "Okay. If I can hold the buzzer and go in feet first, I'll give it a try."] }
},
{
set: "Postnatal ward",
cand: "Nurse",
card: ["A new mother, two days after giving birth, is having difficulty breastfeeding. Her nipples are sore, and she wants to switch to formula.", "Show empathy and find out about her experience so far.", "Explain that sore nipples are usually caused by the baby's position and attachment, and can be improved.", "Offer to help with positioning and attachment at the next feed.", "Explain the benefits of breastfeeding, but respect her right to choose.", "Inform her about support available after discharge (lactation consultant, child health nurse, helpline)."],
pat: { role: "Mother, 29, first baby", lines: ["I'm done. I can't keep breastfeeding. It hurts so much I'm crying every time she feeds.", "She feeds for ages and then still seems hungry.", "My mum says formula is just as good anyway, and I was formula-fed.", "Everyone keeps telling me what to do and it's all different advice.", "I'll be on my own at home next week when my husband goes back to work.", "Okay, I'll try one more feed with you. But if it still hurts, I'm switching."] }
}
]
});
