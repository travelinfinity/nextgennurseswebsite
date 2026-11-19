/* NextGen Nurses OET Nursing practice · Test 13. Original practice material, not real OET items. */
OET_TEST({
n: 13,
LA: [
{
who: "a physiotherapist talking to a patient called Jake Wilson, after knee ligament surgery",
cast: { T: ["m", "Physiotherapist"], P: ["m", "Jake Wilson (patient)"] },
title: "Patient: Jake Wilson (24) · Six weeks after ACL reconstruction",
notes: `#Injury and surgery
injured while playing {}
graft taken from his {} tendon
#Progress
can now bend the knee to about {} degrees
still has some {} around the kneecap
walking without {} for two weeks
#Problems
knee feels {} after long periods of sitting
finds {} exercises boring
#Work
works as an {}, mainly at a desk
#Goals
wants to return to sport by {}
#Plan
start riding an {}
begin {} exercises next week
expected return to sport at about {} months`,
ans: ["Australian Rules|AFL|football|footy", "hamstring", "120|a hundred and twenty", "swelling", "crutches", "stiff", "quadriceps|quad", "accountant", "the start of next season|next season|March", "exercise bike|stationary bike", "balance|single-leg balance", "nine|9|nine to twelve"],
s: `T: Hi Jake. Six weeks since your surgery. How's the knee feeling?
P: Much better than at the start, thanks. But I'm getting impatient.
T: That's normal. Remind me how the injury happened?
P: I was playing Aussie Rules. Australian Rules football. I landed from a mark and twisted, and the knee just went.
T: And the surgeon reconstructed the ligament using a graft from your hamstring tendon, is that right?
P: Yeah, from the back of my thigh.
T: Let's see how far you can bend it. Okay, that's about a hundred and twenty degrees. That's really good for six weeks.
P: It still feels tight at the end.
T: That will improve. There's still some swelling around the kneecap, but much less than last time. How long have you been walking without crutches?
P: Two weeks now. I don't limp any more, unless I'm tired.
T: Great. Anything bothering you?
P: If I sit for a long time, like at work, the knee feels stiff when I stand up. It takes a few steps to loosen up.
T: That's common. Try to get up and walk around every half hour if you can. What do you do for work?
P: I'm an accountant, so I'm mostly at a desk.
T: How are you going with the home exercises?
P: Honestly? I do them, but I find the quadriceps exercises really boring. Just tightening my thigh over and over.
T: I know, but they're really important. The quadriceps muscle wastes quickly after surgery, and it's what protects the knee when you return to sport. What are you aiming for?
P: I want to be back playing by the start of next season. That's March.
T: Let's be realistic about that. Returning too early is one of the biggest risks for re-injury. Most people return to sport somewhere between nine and twelve months after surgery, and only once they've passed strength and hop tests. March would be about eight months, so it's likely to be a bit later than that.
P: That's frustrating, but I don't want to do it again.
T: Exactly. The good news is that you can start riding an exercise bike this week, which will help with the stiffness and strength. And next week we'll begin balance exercises, like standing on one leg on a cushion.
P: That sounds more interesting.
T: And if all goes well, running will start at around three to four months.`
},
{
who: "a nurse talking to a patient called Mrs Anita Desai, who has just started warfarin",
cast: { N: ["f", "Anticoagulation nurse"], P: ["f", "Anita Desai (patient)"] },
title: "Patient: Anita Desai (68) · Warfarin education",
notes: `#Background
started warfarin because of a clot in her {}
target INR range: {}
#Medication
takes warfarin at {} each day
uses a {} to remember doses
#Diet
eats a lot of {} vegetables
has been told to avoid {} juice
#Other medicines
takes {} for joint pain
uses a herbal product called {}
#Bleeding signs
told to report {} urine
#Plan
next INR test on {}
carry a warfarin {} at all times
inform her {} before any treatment`,
ans: ["leg|calf", "2 to 3|2-3|two to three", "5 pm|five o'clock|5 o'clock", "pill box|pillbox|dosette box", "green|leafy green", "cranberry", "ibuprofen", "turmeric", "pink|red|dark", "Friday", "alert card|card", "dentist"],
s: `N: Hello, Mrs Desai. I'm Grace, from the anticoagulation clinic. You've recently started warfarin. Can you tell me why?
P: I had a clot in my leg. A DVT, they called it. My calf was very swollen.
N: That's right. Warfarin helps stop the clot from getting bigger and stops new ones forming. We measure how well it's working with a blood test called the INR. For you, we want it between two and three.
P: Two to three. Okay.
N: What time of day do you take it?
P: At five o'clock, before dinner. The doctor said to take it at the same time every day.
N: Perfect. How do you remember?
P: I use a pill box with the days of the week. My daughter fills it on Sundays.
N: That's a great idea. Now, let's talk about food. Some foods contain vitamin K, which affects how warfarin works. What do you usually eat?
P: I'm vegetarian, so I eat a lot of green vegetables. Spinach, broccoli, cabbage.
N: That's fine, and you don't need to stop eating them. The important thing is to eat roughly the same amount each week. Sudden big changes can affect your INR. Has anyone mentioned cranberry juice?
P: Yes, I was told to avoid it.
N: That's right. Large amounts can increase the effect of warfarin. Now, other medicines. What else do you take?
P: Ibuprofen for my joints, when they're bad.
N: I'm glad you mentioned that. Ibuprofen increases the risk of bleeding when taken with warfarin, so please use paracetamol instead. Anything else, including herbal products?
P: I take turmeric capsules. My friend said they're good for inflammation.
N: Turmeric may also increase the bleeding risk, so please stop it for now and check with your doctor. Do you know the signs of bleeding to look out for?
P: Bruising?
N: Yes, unusual bruising, bleeding gums, and pink or red urine, or black stools. If you notice any of those, call us. And if you have a fall and hit your head, go straight to the emergency department, even if you feel fine.
P: Okay.
N: Your next INR test is on Friday. And please carry this warfarin alert card in your purse at all times.
P: I will.
N: One more thing. Before any treatment, especially dental work, tell your dentist you're on warfarin.`
}
],
LB: [
{
who: "two nurses discussing a patient who has had a seizure",
cast: { A: ["m", "Nurse"], B: ["f", "Nurse in charge"] },
s: `A: Mr Adams had a seizure just now. It lasted about two minutes and stopped on its own. He's drowsy but breathing normally.
B: Good. Put him on his side and check his blood glucose and oxygen. Did you note the time it started?
A: Yes, ten forty.
B: Then call the doctor to review him, and stay with him until he's fully awake. If he has another seizure, or one lasts more than five minutes, call a MET call and we'll give the prescribed medication.`,
q: "When should a MET call be made?",
o: ["if the patient remains drowsy", "if a seizure continues for over five minutes", "if the patient's glucose is low"],
a: 1,
why: "'If he has another seizure, or one lasts more than five minutes, call a MET call.'"
},
{
who: "a nurse unit manager talking about preceptors",
cast: { M: ["f", "Nurse unit manager"] },
s: `M: Our new graduates start next month. Each will have a named preceptor, and I'll try to roster them together for at least the first four weeks. Preceptors, I know you're busy, so I've arranged that you'll carry one fewer patient on shifts when you're working with your graduate. Please complete the preceptor workshop before they start if you haven't already.`,
q: "What has the manager arranged to support preceptors?",
o: ["extra pay for the preceptor role", "a lighter patient load when working with graduates", "time off to attend the workshop"],
a: 1,
why: "Preceptors 'will carry one fewer patient' on those shifts."
},
{
who: "a doctor and a nurse discussing an iron infusion",
cast: { D: ["m", "Doctor"], N: ["f", "Nurse"] },
s: `N: Ms Bell's iron infusion is ready. Anything particular to watch for?
D: Reactions are uncommon, but they can happen. Do a set of observations before you start and fifteen minutes in. If she gets flushing or joint aches, slow the infusion. If she has any breathing difficulty or a drop in blood pressure, stop it and call me. Also, tell her she might feel some aches for a day or two afterwards. That's normal.`,
q: "What should the nurse do if the patient has breathing difficulty?",
o: ["slow the infusion", "stop the infusion and call the doctor", "give her pain relief"],
a: 1,
why: "'If she has any breathing difficulty … stop it and call me.'"
},
{
who: "an orthotist talking to a nurse",
cast: { O: ["f", "Orthotist"], N: ["m", "Nurse"] },
s: `O: I've fitted Mr Holt's back brace. He has to wear it whenever he's sitting up or walking. He can take it off when he's lying flat in bed.
N: What about showering?
O: He'll need to shower sitting on a chair, and he can remove the brace while seated, but he mustn't twist or bend. Check his skin under the brace every day, particularly over the hips, because it can cause pressure areas.`,
q: "When can the patient remove the brace?",
o: ["when lying flat or showering while seated", "only when the nurse checks his skin", "whenever he is not walking"],
a: 0,
why: "He can take it off lying flat, and while seated in the shower."
},
{
who: "a pharmacist talking to a nurse about herbal medicine",
cast: { P: ["m", "Pharmacist"], N: ["f", "Nurse"] },
s: `P: When I did Mrs Sato's medication history, she told me she takes St John's wort for low mood. She hadn't mentioned it to the doctors.
N: Is that a problem?
P: It can be. It interacts with lots of medicines, including the oral contraceptive and some heart medicines, and it can make them less effective. I'll let the doctor know. Could you make sure it's recorded on her medication chart, so it's not missed again?`,
q: "What does the pharmacist ask the nurse to do?",
o: ["stop the patient's herbal medicine", "document the herbal medicine on the chart", "explain the interactions to the patient"],
a: 1,
why: "He asks her to 'make sure it's recorded on her medication chart'."
},
{
who: "a nurse talking to a mental health liaison nurse",
cast: { N: ["f", "Ward nurse"], M: ["m", "Mental health liaison nurse"] },
s: `N: Mr Turner, who's in with a broken leg, said something that worried me. He said he didn't see the point in getting better.
M: Thanks for calling. That's important to follow up. Did you ask him directly whether he's had thoughts of ending his life?
N: No, I wasn't sure if I should.
M: It's okay to ask. It doesn't put the idea in someone's head. I'll come and see him within the hour. In the meantime, please keep an eye on him and remove anything he could use to harm himself.`,
q: "What does the liaison nurse want the ward nurse to understand?",
o: ["that asking directly about suicide is safe", "that the patient should be moved to a mental health unit", "that the patient's comment is not serious"],
a: 0,
why: "'It's okay to ask. It doesn't put the idea in someone's head.'"
}
],
LC: [
{
who: "an interview with Sarah Lim, a lactation consultant",
cast: { I: ["m", "Interviewer"], S: ["f", "Sarah Lim"] },
s: `I: Today I'm speaking with Sarah Lim, a midwife and lactation consultant. Sarah, breastfeeding is often described as natural. Is it easy?
S: It's natural, but that doesn't mean it's easy. For many women, especially first-time mothers, breastfeeding takes time to learn, for both mother and baby. I think one of the problems is that women expect it to come instinctively. When it doesn't, they feel they've failed.
I: What are the most common problems you see?
S: Sore, damaged nipples are very common in the first week, and they're almost always caused by the baby not being attached well. Once we improve the position and attachment, the pain usually settles quickly. The other common worry is milk supply. Many mothers believe they don't have enough milk, when in fact the baby is getting plenty.
I: How can a mother tell?
S: Wet and dirty nappies are the best guide. After the first few days, we'd expect at least six heavy wet nappies a day, and the baby should be gaining weight steadily. Babies often feed very frequently in the evenings. That's normal, but mothers often interpret it as a sign that they've run out of milk.
I: Many women stop breastfeeding earlier than they intended. Why?
S: There are many reasons. Pain, worries about supply, lack of support at home, and going back to work. Some receive conflicting advice from different health professionals, which is very confusing. One midwife says one thing, the next nurse says something different. Consistent advice really matters.
I: What about women who choose not to breastfeed, or can't?
S: That's an important question. I'm a strong supporter of breastfeeding, but I'm equally clear that a mother's decision must be respected. Some women can't breastfeed for medical reasons, some have had traumatic experiences, and some simply choose formula. They deserve support, not judgement. Formula-feeding mothers sometimes tell me they feel guilty or that staff made them feel like bad mothers. That's not acceptable.
I: What advice would you give general nurses who care for breastfeeding mothers on other wards?
S: Breastfeeding mothers end up on surgical or medical wards more often than you'd think. Please don't assume she has to stop because she's taking medication. Most common medicines are compatible with breastfeeding. Check with a pharmacist, and help her express if she's separated from her baby. Supporting her to continue can make a big difference to her wellbeing.`,
qs: [
["What does Sarah say about women's expectations of breastfeeding?", ["They expect it to be difficult.", "They often expect it to be instinctive.", "They are usually well prepared."], 1],
["According to Sarah, sore nipples are usually caused by", ["feeding too often", "the baby's attachment", "low milk supply"], 1],
["What does Sarah say about frequent evening feeds?", ["They usually indicate low milk supply.", "They are normal behaviour.", "They should be replaced with formula."], 1],
["Why does Sarah mention conflicting advice?", ["It can lead women to stop breastfeeding.", "It is rarely a problem.", "It mainly comes from family members."], 0],
["What is Sarah's attitude to mothers who use formula?", ["They should be encouraged to try breastfeeding again.", "Their decisions deserve respect and support.", "They need education about the risks."], 1],
["What advice does Sarah give to nurses on other wards?", ["to stop breastfeeding while the mother takes medicines", "to check medicines and support the mother to continue", "to transfer the mother to a maternity ward"], 1]
]
},
{
who: "a presentation by Rebecca Owens, a clinical nurse consultant, about recognising patient deterioration",
cast: { R: ["f", "Rebecca Owens"] },
s: `R: Good morning. I lead our hospital's rapid response team, and today I want to talk about how we recognise and respond to patients who are deteriorating on the ward.
R: Studies of patients who have a cardiac arrest in hospital have repeatedly shown that most had warning signs in the hours beforehand. Their breathing rate went up, their blood pressure dropped, they became more confused. The signs were often recorded on the chart. But they weren't acted on.
R: Of all the vital signs, I want to single out respiratory rate. It's one of the most sensitive early indicators of deterioration, yet it's the one most often measured inaccurately or not at all. Audits have found that many recorded respiratory rates are suspiciously close to sixteen or eighteen, suggesting they've been estimated rather than counted. I'd ask all of you to count it properly, for a full thirty seconds at least.
R: Track and trigger systems, where observations are given scores and a certain total requires a response, have been introduced across Australia. They've helped. But they're only as good as the observations entered into them, and the actions that follow. A high score that nobody responds to doesn't help the patient.
R: There's another source of information that charts don't capture: worry. Nurses often notice that a patient just doesn't seem right before the numbers change. Families notice it too. Our policy now allows staff to call a rapid response for 'staff worried', even if the observations are normal. When we introduced that criterion, some people worried the team would be overwhelmed by unnecessary calls. That hasn't happened. And a surprising number of those calls have identified patients who were genuinely becoming unwell.
R: Why don't people call? When we've asked staff, the most common reason is a fear of being seen as overreacting, or of being criticised by the team that responds. Junior staff, in particular, worry about this. So the culture of the response team is crucial. We always thank the person who called, even if the patient turns out to be fine.
R: Finally, after a rapid response call, the patient's plan should be clear. Who is reviewing them next, how often should observations be done, and what should trigger another call? Too often, the team leaves and the ward is uncertain what to do next. A clear handover after the call can prevent a second, more serious, deterioration.`,
qs: [
["What does research show about patients who have a cardiac arrest in hospital?", ["Most had no warning signs.", "Warning signs were often present but not acted on.", "Most were in intensive care."], 1],
["Why does Rebecca single out respiratory rate?", ["It is the easiest sign to measure.", "It is an early sign that is often not measured accurately.", "It is the only sign included in scoring systems."], 1],
["What does Rebecca say about track and trigger systems?", ["They depend on accurate observations and a response.", "They have replaced the need for clinical judgement.", "They have not been helpful."], 0],
["What happened after the 'staff worried' criterion was introduced?", ["The team received too many calls.", "Many calls found patients who were becoming unwell.", "Families stopped calling for help."], 1],
["According to Rebecca, why do staff sometimes not call the team?", ["They fear being judged as overreacting.", "They don't know the number to call.", "They think the patient is too unwell."], 0],
["What does Rebecca say should happen after a rapid response call?", ["The patient should be moved to intensive care.", "The ward should receive a clear plan.", "The patient's family should be called."], 1]
]
}
],
RA: {
topic: "Warfarin therapy",
texts: [
{ h: "Text A", t: "About warfarin", b: `Warfarin is an oral anticoagulant used to prevent and treat blood clots, e.g. in atrial fibrillation, deep vein thrombosis, pulmonary embolism and mechanical heart valves.
Its effect is measured by the International Normalised Ratio (INR). For most indications, the target range is 2.0–3.0. For some mechanical heart valves, a higher range of 2.5–3.5 is used.
Warfarin has a narrow therapeutic range: too little increases the risk of clots; too much increases the risk of bleeding. Its effect can take 3–5 days to stabilise after a dose change.` },
{ h: "Text B", t: "Interactions", b: `Many medicines interact with warfarin. Common examples:
Increase INR / bleeding risk: many antibiotics (e.g. trimethoprim, ciprofloxacin), amiodarone, fluconazole, NSAIDs (e.g. ibuprofen), aspirin.
Decrease INR: rifampicin, carbamazepine, St John's wort.
Foods: large or sudden changes in intake of vitamin K–rich foods (green leafy vegetables) affect INR. Cranberry juice and alcohol binges may increase INR.
Whenever a new medicine is started or stopped, check the INR within 3–5 days.` },
{ h: "Text C", t: "Management of high INR (no bleeding)", b: `INR above range but below 5.0: reduce or omit the next dose; resume at a lower dose when INR is in range.
INR 5.0–9.0: omit warfarin; consider vitamin K 1–2 mg orally if the patient is at high risk of bleeding.
INR above 9.0: omit warfarin; give vitamin K 2.5–5 mg orally; check INR in 24 hours.
Any significant bleeding, regardless of INR: stop warfarin, call MET, give IV vitamin K and prothrombinex as prescribed.` },
{ h: "Text D", t: "Patient education checklist", b: `☐ Purpose of warfarin and target INR
☐ Take at the same time each day (usually evening)
☐ If a dose is missed, take it the same day if remembered; do NOT double the dose the next day
☐ Signs of bleeding and what to do
☐ Avoid over-the-counter NSAIDs and herbal products unless checked with a pharmacist
☐ Keep a record of INR results and doses in the yellow warfarin book
☐ Inform dentists and other health professionals
☐ Carry a warfarin alert card` }
],
qs: [
{ k: "m", q: "Which text tells you what to do if a patient forgets a dose?", a: "D" },
{ k: "m", q: "Which text explains how long it takes for a dose change to take effect?", a: "A" },
{ k: "m", q: "Which text tells you when to give intravenous vitamin K?", a: "C" },
{ k: "m", q: "Which text lists medicines that reduce the effect of warfarin?", a: "B" },
{ k: "m", q: "Which text tells you where patients should record their results?", a: "D" },
{ k: "m", q: "Which text gives the target range for some heart valve patients?", a: "A" },
{ k: "m", q: "Which text tells you when to recheck the INR after a medication change?", a: "B" },
{ k: "s", q: "What test is used to measure the effect of warfarin?", a: "INR|International Normalised Ratio" },
{ k: "s", q: "What is the usual target INR range?", a: "2.0–3.0|2.0-3.0|2-3|2 to 3" },
{ k: "s", q: "Name an antifungal medicine that increases INR.", a: "fluconazole" },
{ k: "s", q: "Which vitamin affects how warfarin works?", a: "vitamin K|K" },
{ k: "s", q: "What dose of oral vitamin K is given if the INR is above 9.0?", a: "2.5–5 mg|2.5-5 mg|2.5 to 5 mg" },
{ k: "s", q: "When should the INR be checked after giving vitamin K for an INR above 9.0?", a: "in 24 hours|24 hours|after 24 hours" },
{ k: "s", q: "What colour is the warfarin record book?", a: "yellow" },
{ k: "g", q: "Warfarin is said to have a narrow {}.", a: "therapeutic range" },
{ k: "g", q: "Sudden changes in eating green leafy vegetables can affect the {}.", a: "INR" },
{ k: "g", q: "Alcohol {} may increase the INR.", a: "binges" },
{ k: "g", q: "For an INR between 5.0 and 9.0 with no bleeding, warfarin should be {}.", a: "omitted|omit" },
{ k: "g", q: "Significant bleeding should be treated with IV vitamin K and {}.", a: "prothrombinex" },
{ k: "g", q: "Patients should not {} the dose the day after a missed dose.", a: "double" }
]
},
RB: [
{ src: "Extract from a policy on the use of mobile phones by staff", b: `Staff may use hospital-issued mobile phones for clinical communication. Personal mobile phones must not be used to store, photograph or transmit patient information. Personal phones should be kept on silent in clinical areas and used only during breaks, except in an emergency. Staff must not use any phone while preparing or administering medications.`, q: "According to the policy, personal phones", o: ["may be used for clinical messages in an emergency only", "must not be used for patient information", "can be used while giving medications if on silent"], a: 1, why: "They 'must not be used to store, photograph or transmit patient information'." },
{ src: "Email to staff from the facilities department", b: `Subject: Water outage, Level 4. Due to essential repairs, water will be shut off to Level 4 wards on Thursday from 10 pm to 4 am. Bottled water and alcohol-based hand rub will be supplied to each ward. Toilets will not flush during this time; portable toilets will be placed in the corridor near the lifts. Please inform patients during the evening so they are prepared.`, q: "What are nursing staff asked to do?", o: ["move patients to another level", "tell patients about the outage in advance", "collect bottled water from facilities"], a: 1, why: "'Please inform patients during the evening so they are prepared.'" },
{ src: "Extract from guidelines on insulin administration", b: `Rapid-acting insulin should be given within 15 minutes before a meal, or immediately after the meal for patients whose intake is unpredictable, such as those with nausea or poor appetite. If a meal is delayed (e.g. the patient is away for a procedure), the insulin should also be delayed until the meal arrives. Never give rapid-acting insulin if the patient is not going to eat, unless instructed by the medical team.`, q: "When might rapid-acting insulin be given after a meal?", o: ["when the patient's blood glucose is very high", "when it is uncertain how much the patient will eat", "when the patient is having a procedure"], a: 1, why: "It can be given after the meal 'for patients whose intake is unpredictable'." },
{ src: "Notice in a hospital outpatient department", b: `Patients attending for blood tests: no appointment is needed. Please take a ticket from the machine at the entrance and wait for your number to be called. Fasting tests are performed only between 7:30 am and 10:00 am. If you have been asked to fast, do not eat for 8–10 hours before your test, but you may drink water. Take your usual medications unless told otherwise.`, q: "What does the notice say about fasting blood tests?", o: ["They need to be booked in advance.", "They are only done in the early morning.", "Patients should not drink water beforehand."], a: 1, why: "They are 'performed only between 7:30 am and 10:00 am'." },
{ src: "Extract from guidelines on managing patients with dementia in hospital", b: `Where possible, complete a 'This is me' form with the patient and family on admission. The form records the person's preferred name, routines, likes and dislikes, and what might cause distress or help to calm them. It should be kept at the bedside and read by all staff caring for the person. Information about the person's usual routines can help to reduce agitation and support continuity of care.`, q: "What is the purpose of the 'This is me' form?", o: ["to record the patient's medical history", "to help staff understand the person as an individual", "to assess the patient's level of dementia"], a: 1, why: "It records preferences and routines to reduce agitation and support continuity." },
{ src: "Memo to emergency department staff", b: `Following a review of patients who left without being seen, the department will introduce a 'waiting room nurse' role on afternoon and evening shifts. This nurse will reassess waiting patients regularly, provide pain relief under standing orders and update patients on expected waiting times. The aim is to identify deterioration early and to reduce the number of patients who leave before treatment.`, q: "What is one aim of the new role?", o: ["to reduce the number of patients leaving before treatment", "to triage patients faster on arrival", "to replace the triage nurse during busy times"], a: 0, why: "The aim includes 'to reduce the number of patients who leave before treatment'." }
],
RC: [
{
t: "Alarm fatigue: when warnings stop working",
b: `A modern hospital ward is full of alarms. Cardiac monitors beep when a patient's heart rate changes; infusion pumps sound when a line is blocked or a bag is empty; oxygen saturation monitors alarm when a reading falls. Each alarm is designed to protect patients. Yet the sheer number of alarms has created a new problem, known as alarm fatigue.

Alarm fatigue occurs when staff are exposed to so many alarms that they become desensitised to them. Studies in intensive care units have recorded hundreds of alarms per patient per day. Crucially, the great majority, often estimated at more than 80%, do not require any clinical action. They are triggered by a patient moving, a loose sensor or settings that are too sensitive for the individual patient.

When most alarms are false or irrelevant, staff learn to ignore them, respond more slowly or turn the volume down. This is an understandable human reaction, but it can be dangerous. Patient safety organisations in several countries have identified alarm fatigue as a significant hazard, and there have been cases in which patients have died because a genuine alarm was missed among many false ones.

Patients are affected too. Constant alarms disturb sleep, increase anxiety and can contribute to delirium, particularly in intensive care. Families sitting at the bedside often find them distressing, not knowing which alarms matter.

Several strategies have been shown to reduce alarm numbers without compromising safety. One of the simplest is to change electrodes daily, as old or dried electrodes are a common source of false alarms. Another is to individualise alarm limits. Default settings may be inappropriate for some patients; for example, a patient with chronic lung disease whose normal oxygen saturation is 89% will trigger repeated alarms if the limit is set at 92%. Adjusting limits according to the patient's condition, within agreed guidelines, can reduce unnecessary alarms considerably.

Brief delays before an alarm sounds can also help. Many readings that cross a threshold return to normal within seconds. Introducing a short delay for certain parameters filters out these transient readings, although it must be used carefully for life-threatening rhythms.

Equally important is deciding whether a patient needs continuous monitoring at all. In many hospitals, monitoring is started for a specific reason and simply continued, sometimes for days, after the reason has passed. Regular review of the need for monitoring reduces alarms and allows patients to move more freely.

Technology may offer further solutions, such as systems that combine data from several monitors to identify genuinely concerning patterns, or that send alarms directly to the responsible nurse's device. But technology also has the potential to create more alarms. Ultimately, reducing alarm fatigue requires a culture in which alarms are treated as clinical tools that must be configured and reviewed thoughtfully, rather than as background noise.`,
qs: [
["What is alarm fatigue?", ["tiredness caused by night shifts", "staff becoming less responsive to frequent alarms", "the failure of alarms to sound", "patients being woken by alarms"], 1],
["According to the second paragraph, most alarms", ["indicate serious problems", "are caused by equipment failure", "do not require staff to take action", "occur only in intensive care"], 2],
["What does the writer say about staff who ignore alarms?", ["They are usually inexperienced.", "Their reaction is understandable but risky.", "They should be disciplined.", "They are rarely found in hospitals."], 1],
["How do alarms affect patients?", ["They make patients feel safer.", "They can disturb sleep and increase anxiety.", "They reduce the risk of delirium.", "They help families understand the patient's condition."], 1],
["Why does the writer mention a patient whose normal saturation is 89%?", ["to show the need to adjust alarm settings for individuals", "to explain how oxygen saturation is measured", "to argue that monitoring is unnecessary", "to describe a common cause of death"], 0],
["What caution is given about alarm delays?", ["They should never be used.", "They must be used carefully for dangerous rhythms.", "They increase the number of alarms.", "They are not available on most monitors."], 1],
["According to the seventh paragraph, monitoring is sometimes", ["stopped too early", "continued after it is no longer needed", "carried out by families", "replaced by technology"], 1],
["What is the writer's view of technology?", ["It will completely solve alarm fatigue.", "It may help but could also add to the problem.", "It should be avoided.", "It is too expensive to be useful."], 1]
]
},
{
t: "Type 2 diabetes in young people",
b: `Type 2 diabetes was once known as 'adult-onset' diabetes, because it was almost unheard of in children. That name has been abandoned. Over the past few decades, type 2 diabetes has been diagnosed in increasing numbers of adolescents and young adults, and in some populations it now accounts for a substantial proportion of new diabetes cases in young people.

The rise is closely linked to increasing rates of childhood obesity, along with reduced physical activity and changes in diet. Family history is a strong risk factor, and in Australia, rates are particularly high among Aboriginal and Torres Strait Islander young people and among some migrant communities. Socioeconomic disadvantage, which affects access to healthy food and opportunities for exercise, also plays a significant role.

What concerns clinicians most is that type 2 diabetes appears to be more aggressive when it develops at a young age. Studies have found that young people with type 2 diabetes lose the function of insulin-producing cells more rapidly than adults with the condition, and that many need insulin within a few years of diagnosis. Complications that usually take decades to develop in adults, such as kidney disease, eye damage and nerve damage, can appear in the teenage years or early twenties.

The long-term implications are sobering. A person diagnosed at fifteen may have lived with diabetes for thirty years by the age of forty-five, with a correspondingly high risk of heart attack and stroke at a relatively young age. Some studies suggest that young-onset type 2 diabetes carries a higher risk of complications than type 1 diabetes diagnosed at a similar age.

Managing the condition in young people is particularly challenging. Adolescence is a time when many young people seek independence and may resist medical advice. Taking medication every day, monitoring blood glucose and changing eating habits can be difficult for anyone, but especially for teenagers who do not want to seem different from their friends. Rates of missed appointments and of stopping treatment are high. Mental health difficulties, including depression and disordered eating, are also common.

Successful approaches tend to involve the whole family rather than the young person alone, since eating habits and activity levels are shared. Programmes delivered in a supportive, non-judgemental way, and adapted to the young person's culture and circumstances, appear more effective than standard clinic-based care. Some services use youth workers, peer support and text-message reminders to stay connected with young people.

Prevention is critical. Public health measures to improve children's diets and increase physical activity, such as healthy school food policies and safe spaces for exercise, may have greater impact than individual treatment. Screening young people at high risk can also allow earlier diagnosis.

For nurses working with young people, in schools, primary care or hospitals, the message is that type 2 diabetes is no longer a disease of older adults. Recognising risk factors, discussing weight and lifestyle sensitively, and supporting young people to engage with care can make a lasting difference.`,
qs: [
["Why is the term 'adult-onset diabetes' no longer used?", ["Type 2 diabetes now affects many young people.", "It was medically inaccurate from the start.", "Adults rarely develop type 2 diabetes now.", "It was confused with type 1 diabetes."], 0],
["Which factor is NOT mentioned as contributing to the rise?", ["childhood obesity", "socioeconomic disadvantage", "viral infections", "family history"], 2],
["What concerns clinicians about type 2 diabetes in young people?", ["It is usually milder than in adults.", "It progresses more rapidly than in adults.", "It can be cured with diet alone.", "It does not cause complications."], 1],
["Why does the writer mention a person diagnosed at fifteen?", ["to show how long they may live with the condition", "to suggest the condition improves over time", "to compare it with childhood asthma", "to describe a typical patient"], 0],
["According to the fifth paragraph, why is management difficult in adolescence?", ["Young people do not have access to medication.", "Young people may resist treatment and want to fit in.", "Parents often refuse treatment.", "Doctors rarely see young people."], 1],
["What do successful approaches tend to involve?", ["focusing only on the young person", "involving the whole family", "strict rules about diet", "hospital admission"], 1],
["What does the writer say about public health measures?", ["They are less important than individual treatment.", "They may have greater impact than individual treatment.", "They have been shown to be ineffective.", "They should focus on adults."], 1],
["What is the writer's main message for nurses?", ["Type 2 diabetes is mainly a disease of older adults.", "Nurses should refer all young people to specialists.", "Nurses can make a difference by recognising and supporting young people at risk.", "Weight should not be discussed with young people."], 2]
]
}
],
W: {
title: "Discharge letter to a GP after a child's asthma attack",
notes: `You are a registered nurse on the paediatric ward of Riverside Children's Hospital. Today's date is 2 May.

Patient details
Name: Ethan Brown
DOB: 18/08/2018 (7 years)
Parents: Michelle and Paul Brown
GP: Dr Karen Ali, Riverside Medical Clinic, 40 Bridge Road, Riverside
Admitted: 29/04 – acute asthma attack (moderate–severe) triggered by viral infection

Background: asthma diagnosed age 4. Prescribed preventer (fluticasone 50 mcg BD via spacer) but parents report it has been given "only when he's sick". Two ED visits for asthma in past 6 months. Father smokes (outside). Pet dog at home.

Nursing notes
29/04 Salbutamol every 20 min x 3, oral prednisolone, oxygen to keep SpO2 ≥ 94%.
30/04 Salbutamol weaned to 3-hourly. Off oxygen.
01/05 Salbutamol 4-hourly. Spacer technique reviewed – Ethan using it well. Parents educated on daily preventer use and asthma action plan.
02/05 Well. Discharged home.

Discharge medications: prednisolone 1 mg/kg daily for 2 more days (last dose 04/05); salbutamol 6 puffs via spacer every 4 hours for 24 hours, then as needed; fluticasone 50 mcg 2 puffs BD (daily, even when well).
Written asthma action plan given (copy attached). School asthma plan to be updated.
Requests: GP review in 1 week; reinforce daily preventer; discuss smoking cessation support for father; consider paediatric respiratory referral if further attacks.`,
task: "Using the information in the case notes, write a letter to Dr Karen Ali, Ethan's GP, at Riverside Medical Clinic, 40 Bridge Road, Riverside, informing her of Ethan's discharge and requesting follow-up. In your answer: expand the relevant notes into complete sentences; do not use note form; use letter format. The body of the letter should be approximately 180–200 words.",
model: `Dr Karen Ali
Riverside Medical Clinic
40 Bridge Road
Riverside

2 May

Dear Dr Ali,

Re: Ethan Brown, DOB 18/08/2018

I am writing to inform you that Ethan, a seven-year-old boy with asthma, was discharged home today following an admission for a moderate to severe asthma attack, and to request your follow-up.

Ethan was admitted on 29 April with an asthma attack triggered by a viral infection. He was treated with frequent salbutamol, oral prednisolone and oxygen, and he has made a good recovery. This is his third presentation with asthma in six months.

His parents reported that his preventer had only been given when he was unwell. They have now been educated on the importance of daily use, and Ethan's spacer technique has been reviewed. He will continue prednisolone for two more days, with the last dose on 4 May, and salbutamol four-hourly for 24 hours, then as needed. He should take fluticasone 50 mcg, two puffs twice daily, even when well.

A written asthma action plan has been provided, and a copy is attached.

I would be grateful if you could review Ethan in one week and reinforce the use of his preventer. His father smokes, so smoking cessation support would also be beneficial. A referral to a paediatric respiratory specialist may be appropriate if he has further attacks.

Yours sincerely,

Registered Nurse
Paediatric Ward, Riverside Children's Hospital`
},
S: [
{
set: "Anticoagulation clinic",
cand: "Nurse",
card: ["A 72-year-old man has just started warfarin for atrial fibrillation. He is worried because he has heard that he will have to change his diet completely and give up his evening glass of wine.", "Find out what he has heard and what concerns him.", "Explain the role of vitamin K (keep intake of green vegetables steady rather than avoiding them).", "Explain that moderate alcohol is usually acceptable but binge drinking should be avoided.", "Explain the importance of regular INR tests and taking warfarin at the same time daily.", "Discuss which medicines to avoid (e.g. ibuprofen, some herbal products) and the signs of bleeding."],
pat: { role: "Patient, 72, recently started on warfarin", lines: ["My neighbour says now I'm on warfarin I can't eat any vegetables. Is that right? I grow my own.", "And I enjoy a glass of red wine with my dinner. Do I have to give that up as well?", "What's this INR test? How often do I need it?", "I take ibuprofen for my back now and then. Is that okay?", "What happens if I cut myself shaving?", "That's not as bad as I thought. Thank you."] }
},
{
set: "Orthopaedic outpatient clinic",
cand: "Nurse",
card: ["A 22-year-old soccer player is six weeks after knee ligament (ACL) reconstruction. He wants to start running and return to his team as soon as possible because of a big tournament in four months.", "Acknowledge his frustration and find out his goals.", "Explain the healing timeline (the new ligament is weakest between 6 and 12 weeks; return to sport usually 9–12 months).", "Explain the risk of re-injury if he returns too early.", "Encourage him to continue his rehabilitation program and follow his physiotherapist's advice.", "Suggest ways he can stay involved with his team in the meantime."],
pat: { role: "Patient, 22, amateur soccer player", lines: ["The knee feels great now. I reckon I could start running next week.", "We've got a big tournament in four months. I've got to be ready for that.", "My mate had the same operation and was back in six months.", "What's the worst that could happen?", "Sitting on the bench is going to drive me crazy.", "Okay. I'll talk to my physio about a realistic plan."] }
}
]
});
