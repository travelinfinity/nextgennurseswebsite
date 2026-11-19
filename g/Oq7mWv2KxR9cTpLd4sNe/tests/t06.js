/* NextGen Nurses OET Nursing practice · Test 6. Original practice material, not real OET items. */
OET_TEST({
n: 6,
LA: [
{
who: "a doctor talking to a patient called Joyce Hill, who has urinary symptoms",
cast: { D: ["f", "Doctor"], P: ["f", "Joyce Hill (patient)"] },
title: "Patient: Joyce Hill (72) · Recurrent urinary tract infections",
notes: `#Current episode
symptoms began {} days ago
says it {} terribly when passing urine
also noticed her urine is {}
no {} or loin pain
#History
this is her {} infection this year
previous infections treated by her {}
#Possible contributing factors
drinks very little because of worry about {}
has been using {} wipes
went through {} about twenty years ago
#Plan
urine sample sent for {}
discussed vaginal {} cream
consider a low-dose {} if infections continue`,
ans: ["two|2", "burns|burning", "cloudy|cloudy and smelly", "fever|temperature", "fourth|4th", "pharmacist|chemist", "leaking|accidents|incontinence", "scented|perfumed", "menopause", "culture", "oestrogen|estrogen", "antibiotic|preventive antibiotic"],
s: `D: Hello Mrs Hill. What brings you in today?
P: Oh, it's my waterworks again, doctor. I think I've got another infection.
D: When did it start this time?
P: Two days ago. It burns terribly when I pass urine, and I'm going every half hour.
D: Have you noticed anything about the urine itself?
P: It's cloudy, and it smells strong.
D: Any fever, shivers, or pain in your back or sides?
P: No, no fever. No back pain.
D: Good. How many of these infections have you had this year?
P: This is my fourth, I think. The last two, I didn't come in. The pharmacist gave me some antibiotics.
D: I see. Now, I'd like to understand why these keep happening. How much do you usually drink in a day?
P: Not much, to be honest. A cup of tea in the morning and maybe one in the afternoon.
D: That's quite a bit less than you need. Is there a reason?
P: Well, I've had some leaking since my last grandchild was born. Not much, but I worry about it when I'm out at the shops or at church, so I don't drink.
D: That's very common, and it's something we can help with separately. Drinking less actually makes infections more likely, because the bladder isn't flushed out. What do you use for washing?
P: I use those scented wipes. I like to feel fresh.
D: The perfumes in those can irritate the skin and make infections more likely. Plain water is best. Can I ask, when did you go through the menopause?
P: Oh, a long time ago. About twenty years.
D: After the menopause, the tissues around the bladder become thinner and drier because of lower oestrogen, and that makes infections more common. So, here's the plan. First, I'd like a urine sample today. We'll send it for culture, so we know exactly which bacteria it is and which antibiotic will work. I'll start you on an antibiotic now, and change it if the culture shows a different one is needed.
P: Alright.
D: Second, there's a vaginal oestrogen cream that can reduce these infections in women after the menopause. It's a very low dose, and it works locally.
P: I'd be willing to try that.
D: And if you're still getting frequent infections after that, we could think about a low-dose antibiotic taken every night to prevent them. I'd also like to refer you to the continence nurse about the leaking.`
},
{
who: "a nurse talking to a patient called Barry Cole, who is going home after a flare-up of COPD",
cast: { N: ["m", "Respiratory nurse"], P: ["m", "Barry Cole (patient)"] },
title: "Patient: Barry Cole · Discharge education after COPD exacerbation",
notes: `#Admission
admitted after becoming breathless while {}
this is his {} admission this year
#Inhalers
confused about which inhaler is his {}
daily long-acting inhaler is the {} one
has been using his inhalers {} only
#Smoking
currently smokes {} cigarettes a day
previously tried {} to quit
#Action plan
early warning sign: change in {} colour
keeps a supply of {} and antibiotics at home
#Lifestyle
has stopped going to {} because of breathlessness
referred to {} rehabilitation
{} vaccination booked with GP`,
ans: ["mowing the lawn|mowing", "second|2nd", "reliever|blue reliever", "orange", "when breathless|when he is breathless|when he needs them", "ten|10", "patches|nicotine patches", "sputum|phlegm", "prednisolone|steroid tablets|steroids", "the bowls club|bowls|lawn bowls", "pulmonary", "pneumococcal|pneumonia|flu|influenza"],
s: `N: Hello Mr Cole, I'm David, the respiratory nurse. I hear you're going home today. Before you go, I'd like to go through a few things to help keep you out of hospital.
P: Good, because I don't want to come back here in a hurry.
N: What happened before you came in?
P: I was mowing the lawn last Saturday, and I just couldn't get my breath. My wife called the ambulance.
N: Have you been in hospital with your chest before this year?
P: Yes, back in May. So this is the second time.
N: Okay. Let's start with your inhalers. Can you tell me which one is which?
P: Honestly, I get mixed up. I'm not sure which one is my reliever.
N: That's very common. The blue one is your reliever. You use it when you're short of breath. The other one, the orange one, is your long-acting inhaler, which you take every morning, even when you feel well. How have you been using them?
P: I just use them when I'm breathless. If I feel fine, I don't bother.
N: That might be part of the problem. The daily inhaler only works if you take it every day. It keeps the airways open over twenty-four hours. Now, I have to ask about smoking.
P: I've cut down a lot. I'm only having ten a day now.
N: That's a good start. Have you tried to quit before?
P: I tried patches a couple of years ago. They gave me strange dreams, so I stopped.
N: There are other options we could look at, like a different type of patch or medication from your GP. Stopping smoking is the most important thing you can do for your lungs. Now, your action plan. What signs tell you a flare-up is starting?
P: More breathless, I suppose.
N: Yes. And one of the earliest signs is a change in your sputum colour, from clear or white to yellow or green. If that happens, you start the prednisolone and antibiotics you keep at home, and you ring your GP the same day.
P: I've got those in the cupboard.
N: Good. Check the expiry dates. What do you enjoy doing?
P: I used to play bowls twice a week, but I've stopped going to the bowls club. I can't walk across the green without stopping.
N: That's exactly why I've referred you to pulmonary rehabilitation. It's an exercise and education program, and lots of people find they can do much more afterwards. The other thing is your vaccinations. Your pneumococcal vaccine is due, so I've booked that with your GP next week, along with your flu shot.`
}
],
LB: [
{
who: "two nurses discussing a patient at risk of alcohol withdrawal",
cast: { A: ["f", "Nurse"], B: ["m", "Nurse"] },
s: `A: Mr Grant, the man with the broken leg, told me he drinks about a bottle of wine a day. His last drink was yesterday afternoon.
B: Is that documented anywhere?
A: No, he didn't mention it in emergency.
B: Right. He's at risk of withdrawal, then. Start the withdrawal scale and score him every four hours, and let the doctor know so they can chart thiamine. Withdrawal usually starts within the first day or two.`,
q: "What do the nurses decide to do?",
o: ["monitor the patient for signs of withdrawal", "give the patient a sedative straight away", "move the patient to a single room"],
a: 0,
why: "They start the withdrawal scale every four hours and inform the doctor."
},
{
who: "a nurse unit manager announcing a change",
cast: { M: ["m", "Nurse unit manager"] },
s: `M: From next Tuesday, we'll be recording observations on the handheld devices instead of the paper charts. The system will calculate the early warning score automatically and alert the medical team if a patient reaches the threshold. But please don't rely on the system alone. If you're worried about a patient, call for a review, even if the score is normal.`,
q: "What does the manager emphasise?",
o: ["The new system will reduce the number of medical reviews.", "Nurses should still act on their own clinical judgement.", "The paper charts will be kept as a backup."],
a: 1,
why: "'If you're worried about a patient, call for a review, even if the score is normal.'"
},
{
who: "a doctor and a nurse discussing a blood transfusion",
cast: { D: ["f", "Doctor"], N: ["m", "Nurse"] },
s: `N: The blood bank has the two units ready for Mrs Lowe. Can I go ahead and collect them?
D: Has she signed the consent form?
N: Not yet. She has some questions. She's worried about catching an infection from the blood.
D: Okay, don't collect it yet. I'll come and talk to her about the risks and benefits now, and once she's consented, you can collect it.`,
q: "Why does the doctor ask the nurse to wait?",
o: ["The blood is not yet ready.", "The patient has not yet agreed to the transfusion.", "The patient's blood results need checking."],
a: 1,
why: "She has not signed the consent form and has questions."
},
{
who: "a wound care nurse talking to a ward nurse",
cast: { W: ["f", "Wound care nurse"], N: ["f", "Ward nurse"] },
s: `N: Mr Fox's wound vacuum keeps alarming. It says there's a leak.
W: It's usually the seal around the dressing. Check where the tubing comes out, and the edges near the skin folds. You can patch small leaks with the extra film. If the pump's been off for more than two hours, though, the whole dressing needs to be changed, so call me and I'll come up.`,
q: "The wound care nurse says the dressing must be changed if",
o: ["there is any leak around the edges", "the pump has been off for over two hours", "the alarm continues after patching"],
a: 1,
why: "'If the pump's been off for more than two hours … the whole dressing needs to be changed.'"
},
{
who: "a pharmacist talking to a nurse",
cast: { P: ["m", "Pharmacist"], N: ["f", "Nurse"] },
s: `P: I see Mr Ross is on vancomycin. Can you make sure his trough level is taken this evening, within half an hour before the eight o'clock dose? If the blood's taken too early, the result can't be interpreted, and we might change the dose wrongly.
N: Should I hold the dose until the result's back?
P: No, give it on time. We'll adjust the next one if we need to.`,
q: "What does the pharmacist stress about the blood test?",
o: ["It should be taken after the dose is given.", "It must be done at the correct time.", "It should replace tomorrow's test."],
a: 1,
why: "Taken too early, the result 'can't be interpreted'."
},
{
who: "a nurse in charge talking to a bed manager",
cast: { B: ["m", "Bed manager"], C: ["f", "Nurse in charge"] },
s: `B: I need a bed for an emergency patient. Can Mrs Abbott go to the discharge lounge?
C: She's medically ready, but her daughter can't collect her until five.
B: The lounge is open until six, and they'll give her lunch.
C: Okay. But she's partially sighted, so she'll need someone to help her find the toilet and her things. I'll call the lounge nurse and hand over.`,
q: "What does the nurse in charge agree to?",
o: ["keeping the patient on the ward until five", "moving the patient once the lounge is informed of her needs", "asking the daughter to come earlier"],
a: 1,
why: "She agrees, but will hand over the patient's needs to the lounge nurse."
}
],
LC: [
{
who: "an interview with Leanne Morris, a palliative care nurse, about advance care planning",
cast: { I: ["m", "Interviewer"], L: ["f", "Leanne Morris"] },
s: `I: My guest is Leanne Morris, a palliative care nurse. Leanne, what is advance care planning?
L: It's the process of thinking about, and talking about, what kind of care you would want if you became seriously ill and couldn't speak for yourself. It often leads to a written document, an advance care directive, and to appointing someone to make decisions for you. But I always stress that the conversation is more important than the paperwork.
I: Why is that?
L: Because a form can only cover so much. Situations in real life are rarely exactly what was imagined. What helps the family and the clinicians most is understanding what matters to the person. For example, one man told me that he didn't mind being in a wheelchair, but he didn't want to live if he could no longer recognise his wife. That gave his family something really clear to guide them.
I: When should these conversations happen?
L: Ideally, well before a crisis. Too often, the first conversation happens in an emergency department at two in the morning, when the person is too unwell to take part. By then, the family are frightened and exhausted and are trying to guess what their relative would have wanted.
I: Are people reluctant to talk about it?
L: Less than health professionals think. We tend to assume that patients will be upset, so we avoid the subject. But when people are asked, most say they're glad someone raised it. What they find upsetting is when it's done badly, like being handed a form with no explanation.
I: What makes a good conversation?
L: Asking open questions and listening. I might start by asking what the person understands about their illness, and what they're hoping for. Then I'd ask what they're worried about. Sometimes people's fears are about things we can easily address, like pain, or being a burden.
I: Is it only for older people?
L: Not at all. Anyone can become suddenly unwell, through an accident, for example. But it's particularly important for people with a progressive illness, like heart failure or dementia. With dementia, there's a limited window while the person can still take part fully.
I: Do these plans actually make a difference?
L: Research shows that people who've done advance care planning are more likely to have their wishes respected at the end of life, and that their families have less stress and anxiety afterwards. That last finding means a great deal to me. Families often tell me that knowing what their relative wanted made a terrible situation more bearable.
I: Any advice for nurses?
L: Don't wait for the doctors to start it. Nurses often notice when a patient wants to talk. Even a simple question, like 'Have you ever talked to your family about what you'd want if you became very unwell?', can open the door.`,
qs: [
["Why does Leanne believe the conversation matters more than the document?", ["Documents are not legally binding.", "Real situations often differ from what was planned.", "Families often lose the paperwork."], 1],
["Leanne mentions the man who did not want to live if he could not recognise his wife to show", ["how values can guide decisions", "why written documents are unnecessary", "how difficult these conversations are"], 0],
["What does Leanne say about patients' reactions to advance care planning?", ["Most patients find it upsetting.", "Patients prefer to discuss it with their doctor.", "Patients are more willing than staff expect."], 2],
["How does Leanne usually begin the conversation?", ["by explaining the legal documents", "by asking about the person's understanding and hopes", "by asking who should make decisions for them"], 1],
["Why does Leanne mention dementia?", ["because the time to plan may be limited", "because it is the most common reason for planning", "because families refuse to discuss it"], 0],
["Which result of advance care planning does Leanne find especially important?", ["shorter stays in hospital", "reduced distress for families", "lower healthcare costs"], 1]
]
},
{
who: "a presentation by Michael Tan, a physiotherapist, about early mobilisation in intensive care",
cast: { M: ["m", "Michael Tan"] },
s: `M: Hello everyone. I'm going to talk about getting patients moving in intensive care, which was once considered almost unthinkable.
M: Twenty years ago, the standard approach in many intensive care units was deep sedation and bed rest. The idea was to let the body recover. But we now know that critically ill patients can lose muscle remarkably quickly, by some estimates up to two percent of muscle mass a day in the first week. Many survivors of intensive care leave hospital unable to climb stairs or even stand up from a chair, and some never fully recover. This condition is called ICU-acquired weakness.
M: So, over the past fifteen years, there's been a shift towards lighter sedation and early mobilisation. 'Early' means as soon as the patient is stable enough, sometimes within a day or two of admission, and in some cases while they're still on a ventilator.
M: What does mobilisation look like in a ventilated patient? It's a staged approach. It might start with passive movements of the arms and legs. Then sitting on the edge of the bed, standing with help, marching on the spot and, in some units, walking with the ventilator on a trolley alongside. It needs a team: a physiotherapist, a nurse to manage the lines and tubes, and sometimes a second nurse or assistant.
M: People often ask me about safety. It's a reasonable question. But studies across many units have found that serious adverse events during mobilisation are rare, well under one percent. Lines and tubes coming out is the main concern, which is why preparation is so important.
M: What about benefits? The evidence here is mixed, I have to be honest. Some trials have shown patients walking further and being more independent at discharge. Others have found little difference in long-term outcomes. Part of the problem is that 'early mobilisation' means different things in different studies. But there's reasonably consistent evidence that it doesn't do harm and may shorten the time patients are delirious.
M: In my experience, the biggest barrier isn't the patient's condition. It's culture and staffing. If nurses are looking after very unstable patients, they may not have time to help. And some staff still believe that rest is best. We've found that having mobility as a standard item on the daily ward round, with a clear goal for each patient, makes a big difference.
M: I'll finish with something a patient said to me after she left intensive care. She said that standing up for the first time, with the ventilator still in, was the moment she believed she would survive. I think we sometimes underestimate the psychological value of movement.`,
qs: [
["Why does Michael mention the loss of muscle mass?", ["to explain the problem that early mobilisation aims to address", "to argue that sedation should be avoided completely", "to show that patients recover quickly after discharge"], 0],
["What does Michael say about mobilising ventilated patients?", ["It is only possible after the ventilator is removed.", "It should begin with walking.", "It is done in gradual steps by a team."], 2],
["According to Michael, the main safety concern is", ["falls during standing", "tubes and lines becoming dislodged", "changes in blood pressure"], 1],
["How does Michael describe the evidence of benefit?", ["consistently positive", "inconsistent between studies", "clearly negative"], 1],
["What has helped to overcome barriers in Michael's unit?", ["employing more physiotherapists", "including mobility goals in daily rounds", "reducing the number of unstable patients"], 1],
["Michael uses the patient's comment to highlight", ["the emotional benefits of movement", "the importance of reducing sedation", "the risk of mobilising too early"], 0]
]
}
],
RA: {
topic: "Head injury observations in adults",
texts: [
{ h: "Text A", t: "Who needs observation?", b: `Adults with a head injury should be admitted for neurological observations if they have any of the following:
• Glasgow Coma Scale (GCS) score below 15 two hours after injury
• loss of consciousness or amnesia for the event
• persistent vomiting (two or more episodes)
• severe or worsening headache
• a seizure since the injury
• taking anticoagulant or antiplatelet medication (excluding aspirin alone)
• age 65 years or older
• intoxication that makes assessment unreliable.` },
{ h: "Text B", t: "Frequency of observations", b: `Record GCS, pupil size and reaction, limb movements, and vital signs:
• every 30 minutes until GCS is 15
• then every 30 minutes for 2 hours
• then hourly for 4 hours
• then 2-hourly thereafter.
If the patient deteriorates at any time, return to 30-minute observations.
Patients asleep at night must still be woken for observations during the first 12 hours.` },
{ h: "Text C", t: "Signs of deterioration: call MET immediately", b: `• Drop in GCS of 2 or more points, or a drop of 1 point in the motor score
• New unequal or non-reacting pupil
• New weakness of an arm or leg
• Seizure
• Rising blood pressure with a falling heart rate (Cushing's response) – a late and serious sign
• Increasing agitation or confusion
Do not attribute a fall in GCS to alcohol until other causes have been excluded.` },
{ h: "Text D", t: "Discharge advice", b: `Patients may be discharged when GCS is 15 and they have a responsible adult to stay with them for the first 24 hours.
Give verbal and written advice. Return to the emergency department if: headache worsens, repeated vomiting, drowsiness, confusion, weakness, seizure, or clear fluid from the nose or ears.
Advise: avoid alcohol for 48 hours, rest from sport until cleared by a doctor, and do not drive until symptoms have resolved.
Symptoms such as tiredness, poor concentration and irritability may persist for several weeks.` }
],
qs: [
{ k: "m", q: "Which text tells you what to do if a patient is sleeping during the night?", a: "B" },
{ k: "m", q: "Which text describes a late warning sign involving blood pressure?", a: "C" },
{ k: "m", q: "Which text tells you which medications mean a patient should be admitted?", a: "A" },
{ k: "m", q: "Which text tells you which symptoms may continue for weeks?", a: "D" },
{ k: "m", q: "Which text warns against blaming confusion on drinking too quickly?", a: "C" },
{ k: "m", q: "Which text tells you when observations should become more frequent again?", a: "B" },
{ k: "m", q: "Which text states who must be with the patient after discharge?", a: "D" },
{ k: "s", q: "What GCS score two hours after injury indicates admission is needed?", a: "below 15|less than 15|under 15" },
{ k: "s", q: "How many episodes of vomiting indicate admission?", a: "two or more|2 or more|two|2" },
{ k: "s", q: "From what age should all adults with a head injury be admitted?", a: "65|65 years|65 years or older" },
{ k: "s", q: "How often are observations recorded after the hourly period ends?", a: "2-hourly|two-hourly|every 2 hours|every two hours" },
{ k: "s", q: "What is the combination of rising blood pressure and falling heart rate called?", a: "Cushing's response|Cushing response|Cushing's" },
{ k: "s", q: "How long should patients avoid alcohol after discharge?", a: "48 hours|forty-eight hours" },
{ k: "s", q: "What fluid from the nose or ears should cause a patient to return?", a: "clear fluid|clear" },
{ k: "g", q: "Aspirin {} does not require admission for observation.", a: "alone" },
{ k: "g", q: "A drop of 1 point in the {} score is a sign of deterioration.", a: "motor" },
{ k: "g", q: "Patients must be woken for observations during the first {}.", a: "12 hours|twelve hours" },
{ k: "g", q: "Patients should not return to sport until {}.", a: "cleared by a doctor" },
{ k: "g", q: "Patients should not drive until their {}.", a: "symptoms have resolved" },
{ k: "g", q: "Patients should receive both verbal and {} advice.", a: "written" }
]
},
RB: [
{ src: "Extract from a policy on the management of patients' own medications", b: `Patients' own medications brought into hospital should be checked by a pharmacist or nurse and may be used during the admission if they are clearly labelled, in date and appropriate for the current treatment plan. They must be stored in the patient's individual locked drawer, not in the patient's bag or bedside locker. On discharge, medications that have been stopped should be returned to the patient only after discussion with the medical team.`, q: "According to the policy, patients' own medications", o: ["must always be sent home with family", "can be used if they meet certain conditions", "should be kept in the bedside locker"], a: 1, why: "They may be used if 'clearly labelled, in date and appropriate'." },
{ src: "Email to nursing staff from the clinical governance unit", b: `Subject: Pain assessment in patients with dementia. A recent audit found that patients with dementia received significantly less pain relief after hip fracture surgery than other patients, despite similar injuries. Many of these patients cannot report pain reliably. From this month, the Abbey Pain Scale, which is based on observation of behaviour, facial expression and body language, should be used for all patients who are unable to give a pain score.`, q: "Why is the Abbey Pain Scale being introduced?", o: ["because patients with dementia exaggerate their pain", "because some patients cannot describe their pain", "because hip fracture surgery has become more painful"], a: 1, why: "It is for 'patients who are unable to give a pain score'." },
{ src: "Extract from guidelines on the use of urinary catheters", b: `Indwelling urinary catheters should only be inserted when there is a clear clinical indication, such as acute urinary retention or the need for accurate hourly output monitoring in a critically ill patient. Incontinence alone is not an indication. The need for the catheter must be reviewed daily and documented, and the catheter removed as soon as it is no longer required, as the risk of infection increases with each day it remains in place.`, q: "The guidelines state that catheters should", o: ["be used to manage incontinence", "remain in place for at least 24 hours", "be removed as early as possible"], a: 2, why: "Remove the catheter 'as soon as it is no longer required'." },
{ src: "Notice to staff about car parking", b: `Due to construction of the new surgical building, the staff car park on Level 2 will close on 3 April. Staff working night shifts may park in the visitor car park free of charge between 7 pm and 8 am. All other staff should use the off-site car park on Bridge Street, from which a free shuttle bus runs every 15 minutes. Parking permits will be reissued by the security office.`, q: "Where can night-shift staff park?", o: ["in the visitor car park", "on Level 2 of the staff car park", "on Bridge Street only"], a: 0, why: "Night-shift staff 'may park in the visitor car park free of charge'." },
{ src: "Extract from product information: alcohol-based hand rub", b: `Apply enough product to cover all surfaces of both hands. Rub hands together until dry, which usually takes 20 to 30 seconds. Alcohol-based hand rub is effective against most bacteria and many viruses. It is not effective against Clostridioides difficile spores or norovirus; when caring for patients with these infections, wash hands with soap and water instead.`, q: "When should staff use soap and water instead of hand rub?", o: ["when hands are dry", "after caring for patients with certain infections", "after every patient contact"], a: 1, why: "Hand rub is not effective against C. difficile spores or norovirus." },
{ src: "Memo to ward nurses", b: `Staff are reminded that patients identified as at risk of falls should have their call bell, walking aid and personal belongings within easy reach at all times. Beds should be left in the lowest position with the brakes on. Several recent falls occurred when patients tried to reach items placed on the other side of the room. Please check the environment at each patient interaction.`, q: "What problem does the memo identify?", o: ["Patients were falling while using walking aids.", "Beds were being left in a high position.", "Patients fell while trying to reach their belongings."], a: 2, why: "Recent falls happened when patients 'tried to reach items placed on the other side of the room'." }
],
RC: [
{
t: "Smartwatches and the heart",
b: `Not long ago, recording an electrocardiogram (ECG) required a clinic, a machine and a trained operator. Today, millions of people wear a device on their wrist that can record a single-lead ECG in thirty seconds and notify them if their heart rhythm appears irregular. Smartwatches and fitness trackers have turned heart monitoring into a consumer product, and health services are still working out what to do about it.

The main target of these devices is atrial fibrillation (AF), an irregular heart rhythm that becomes more common with age. AF matters because it increases the risk of stroke around fivefold, and because it often causes no symptoms. Many people discover they have it only after a stroke has occurred. Detecting it earlier would allow treatment with anticoagulant medication, which substantially reduces stroke risk.

Large studies have tested how well smartwatches perform. In one, involving hundreds of thousands of participants, a small proportion received a notification of an irregular pulse. Of those who then wore a more detailed monitor, about a third were confirmed to have AF during the monitoring period. That might sound disappointing, but AF often comes and goes, so a normal result on later monitoring does not prove the original notification was wrong.

The devices perform best in people who already have a higher risk, such as those over 65. In younger, healthy users, AF is rare, so a larger proportion of notifications are likely to be false alarms. This matters because a false alarm is not harmless. It can cause considerable anxiety and lead to further tests, appointments and, occasionally, unnecessary treatment.

Clinicians report increasing numbers of patients arriving with ECG recordings on their phones. Some find this helpful: a recording made during a palpitation can capture a rhythm that would never appear in a ten-minute clinic visit. Others describe being asked to review long series of recordings from anxious, healthy patients, which takes time from those with more pressing needs.

There is also an equity issue. Smartwatches are expensive, and their users tend to be younger, wealthier and healthier than the population most at risk of AF. If screening relies on consumer devices, those who would benefit most may be the least likely to be checked. Some researchers argue that targeted screening programmes, for example offering short-term monitors to older people through general practice, would be more effective.

Professional organisations have so far been cautious. Most do not recommend routine screening of the general population for AF, whether by smartwatch or other means, while acknowledging that opportunistic checks, such as feeling the pulse during a routine visit, are worthwhile in people over 65.

For nurses, the practical message is to take a patient's device-generated recording seriously but not to treat it as a diagnosis. A notification of irregular rhythm should be confirmed with a standard ECG before any decision about treatment. Equally, a 'normal' result on a watch does not rule out heart disease in a patient with worrying symptoms.`,
qs: [
["The first paragraph suggests that health services", ["have fully adopted smartwatch technology", "are still deciding how to respond to these devices", "no longer need clinic-based ECGs", "were involved in developing smartwatches"], 1],
["Why is detecting atrial fibrillation early considered important?", ["It usually causes severe symptoms.", "Treatment can reduce the risk of stroke.", "It is rare in older people.", "It can be cured with medication."], 1],
["Why does the writer say a normal result on later monitoring does not prove the notification was wrong?", ["The monitors used were unreliable.", "AF may occur only some of the time.", "Participants did not wear the monitors correctly.", "Notifications are always accurate."], 1],
["According to the fourth paragraph, false alarms are more likely in", ["people over 65", "people who already have AF", "younger, healthy users", "people taking anticoagulants"], 2],
["What do some clinicians find helpful about patients' recordings?", ["They can show rhythms that occur during symptoms.", "They replace the need for clinic visits.", "They reduce the number of anxious patients.", "They are easier to interpret than standard ECGs."], 0],
["What is the 'equity issue' described in the sixth paragraph?", ["Smartwatches are less accurate in older people.", "Those most at risk are less likely to own smartwatches.", "General practices cannot afford monitors.", "Screening is only available in cities."], 1],
["What is the position of most professional organisations?", ["They support screening everyone using smartwatches.", "They recommend against checking the pulse.", "They do not support routine population screening.", "They have not considered the issue."], 2],
["What advice does the writer give nurses?", ["Device notifications should be confirmed with a standard ECG.", "Device recordings should be ignored.", "Patients with normal device results need no further assessment.", "Device notifications are sufficient for diagnosis."], 0]
]
},
{
t: "Compassion fatigue: when caring takes its toll",
b: `Nurses enter the profession for many reasons, but the wish to care for others is almost always among them. It is therefore a painful irony that the work of caring can, over time, wear down the very capacity for compassion that drew people to it. This phenomenon, often called compassion fatigue, has received growing attention as health systems struggle to retain staff.

Compassion fatigue is usually described as a combination of emotional exhaustion and the secondary effects of exposure to others' suffering. Nurses affected by it may feel numb or detached from patients, irritable with colleagues, or unable to stop thinking about distressing events after work. Some report sleep problems and physical symptoms. It is related to, but not identical with, burnout, which is more closely linked to workload and organisational factors than to the emotional content of the work itself.

Certain areas of nursing appear to carry higher risk. Emergency, intensive care, oncology and palliative care nurses regularly witness death, trauma and grief. Yet compassion fatigue is not confined to these settings. Nurses in general wards, aged care and community settings also report it, particularly when they feel unable to provide the care they believe patients need.

This last point is important. A growing body of research suggests that what wears nurses down is often not suffering itself, but the sense of being prevented from responding to it properly. When staffing is short and a nurse must hurry past a frightened patient to deal with another task, the resulting distress, sometimes called moral distress, can be more damaging than the emotional demands of caring for someone who is dying.

Individual strategies are often recommended: exercise, adequate sleep, mindfulness, and maintaining interests outside work. These are helpful, and some studies of mindfulness training for nurses have shown reductions in stress. But critics argue that an exclusive focus on individual resilience places responsibility on nurses for problems largely created by their working conditions. Teaching a nurse to breathe deeply does not solve a staffing shortage.

Organisational approaches therefore deserve as much attention. Regular, structured opportunities to discuss difficult cases, such as Schwartz Rounds or clinical supervision, allow staff to share experiences in a supportive setting. Several hospitals that have introduced these report that staff feel less isolated and more connected to their colleagues. Debriefing after critical incidents, when it is offered and voluntary, may also help.

Leadership matters too. Nurses who feel that their managers notice and value their work, and who have some control over their rosters and workload, appear to be better protected. Small gestures, such as a manager asking how a nurse is after a death on the ward, may have a disproportionate effect.

Recognising compassion fatigue is not an admission of weakness. It is a predictable consequence of demanding work, and one that can be reduced. Protecting nurses' capacity for compassion is ultimately also a way of protecting patients.`,
qs: [
["What 'painful irony' does the writer describe?", ["Nurses rarely choose the profession out of compassion.", "Caring work can reduce nurses' ability to care.", "Health systems value compassion less than skills.", "Compassionate nurses are more likely to leave."], 1],
["How does the writer distinguish burnout from compassion fatigue?", ["Burnout is more related to workload and organisation.", "Burnout only affects nurses in emergency settings.", "Burnout causes physical rather than emotional symptoms.", "Burnout is less common than compassion fatigue."], 0],
["According to the third paragraph, compassion fatigue", ["occurs only in high-risk specialties", "can affect nurses in many settings", "is uncommon in community nursing", "mainly affects inexperienced nurses"], 1],
["What does research suggest is particularly damaging to nurses?", ["caring for dying patients", "being unable to give the care they think patients need", "working night shifts", "dealing with difficult families"], 1],
["What criticism is made of individual strategies such as mindfulness?", ["They have been shown to be ineffective.", "They take too much time to learn.", "They may shift responsibility away from organisations.", "They are too expensive for most hospitals."], 2],
["What benefit of Schwartz Rounds and clinical supervision is reported?", ["Staff feel less alone.", "Staff take fewer sick days.", "Patient complaints decrease.", "Staff need less debriefing."], 0],
["The writer mentions a manager asking how a nurse is after a death to show that", ["managers should attend all deaths", "simple acts of recognition can be powerful", "nurses need formal counselling", "debriefing should be compulsory"], 1],
["What is the writer's overall view?", ["Compassion fatigue is a sign of personal weakness.", "Compassion fatigue is unavoidable and cannot be reduced.", "Compassion fatigue is a foreseeable problem that can be addressed.", "Compassion fatigue mainly harms patients rather than nurses."], 2]
]
}
],
W: {
title: "Referral to Hospital in the Home for IV antibiotics",
notes: `You are a registered nurse on the orthopaedic ward at St Luke's Hospital. Today's date is 30 October.

Patient details
Name: Mr Samuel Reid
DOB: 21/07/1980 (46 years)
Address: 7 Banksia Close, Westmead
Admitted: 20/10 – infection of right foot bone (osteomyelitis) following a puncture wound (stood on a nail, gardening)
Past history: type 2 diabetes (insulin), peripheral neuropathy both feet
Social: lives with wife and two teenage children; works as an electrician (currently on sick leave); wife works nights

Nursing notes
21/10 Surgical debridement R foot. Wound packed.
23/10 Bone culture: Staphylococcus aureus. IV flucloxacillin 2 g every 6 hours – planned 6 weeks total (to 03/12).
27/10 PICC line inserted L arm – position confirmed on X-ray.
28/10 Wound 3 cm x 2 cm, granulating, small amount of exudate. Dressing: alginate + foam, change every 2 days.
29/10 BGLs 7–12 mmol/L; insulin adjusted by diabetes team. Taught to check feet daily with a mirror (no sensation in feet).
30/10 Afebrile. Mobilising with crutches, non-weight-bearing R foot. Discharged home today.

Plan:
- HITH: continue IV flucloxacillin via continuous infusion (elastomeric pump) changed daily
- weekly bloods (FBC, CRP, liver and kidney function), PICC care, weekly dressing of PICC site
- wound dressing every 2 days
- Orthopaedic clinic: 13/11
- Patient concerned about missing work; anxious about the PICC line`,
task: "Using the information in the case notes, write a letter of referral to Ms Rebecca Holt, Nurse Unit Manager, Hospital in the Home Service, St Luke's Hospital, 1 Ridge Road, Westmead, requesting home-based care for Mr Reid. In your answer: expand the relevant notes into complete sentences; do not use note form; use letter format. The body of the letter should be approximately 180–200 words.",
model: `Ms Rebecca Holt
Nurse Unit Manager
Hospital in the Home Service
St Luke's Hospital
1 Ridge Road
Westmead

30 October

Dear Ms Holt,

Re: Mr Samuel Reid, DOB 21/07/1980
7 Banksia Close, Westmead

I am writing to refer Mr Reid, a 46-year-old electrician, who is being discharged home today and requires ongoing intravenous antibiotics under your service.

Mr Reid was admitted on 20 October with osteomyelitis of his right foot after standing on a nail. He underwent surgical debridement, and bone cultures grew Staphylococcus aureus. He requires IV flucloxacillin, 2 g six-hourly, until 3 December, which should be continued as a continuous infusion via an elastomeric pump changed daily. A PICC line was inserted in his left arm on 27 October.

His foot wound measures 3 cm by 2 cm and is granulating. It requires an alginate and foam dressing every two days. He must remain non-weight-bearing on his right foot and is using crutches.

Mr Reid has insulin-treated type 2 diabetes and peripheral neuropathy, so he has been taught to check his feet daily.

In addition, please arrange weekly blood tests and care of the PICC site. He is anxious about the line and about missing work, so reassurance would be appreciated. His orthopaedic appointment is on 13 November.

Yours sincerely,

Registered Nurse
Orthopaedic Ward, St Luke's Hospital`
},
S: [
{
set: "Respiratory outpatient clinic",
cand: "Nurse",
card: ["A patient with COPD has come for review. He has been admitted to hospital twice this year. He still smokes 20 cigarettes a day and says he is too old to stop.", "Find out about his smoking and previous attempts to quit.", "Explain the benefits of stopping, even after many years (slower decline in lung function, fewer flare-ups).", "Discuss options to help (nicotine replacement, medication from the GP, Quitline).", "Respond to his belief that it is too late and that smoking helps his stress.", "Encourage him to set a quit date, but respect his decision."],
pat: { role: "Patient, 68, with COPD", lines: ["Look, I know what you're going to say. But I've smoked for fifty years. The damage is done.", "I tried once, cold turkey. Lasted three days. I was like a bear with a sore head.", "Those patches don't work anyway. My mate tried them.", "Smoking's the only thing that calms me down. My wife's not well, and it's stressful.", "So you're saying it would actually make a difference, even now?", "I'm not promising anything. But maybe I could talk to the doctor about those tablets."] }
},
{
set: "Emergency department",
cand: "Nurse",
card: ["The son of a 78-year-old woman is angry. His mother has been waiting in the emergency department for five hours with abdominal pain and has not yet seen a doctor.", "Acknowledge his frustration and apologise for the wait.", "Explain the triage system (patients are seen in order of urgency, not arrival; very busy today).", "Reassure him that his mother is being monitored and update him on what has been done (observations, blood tests, pain relief).", "Find out if her condition has changed and offer to reassess her pain.", "Give a realistic estimate of when she will be seen and how he can get help if worried."],
pat: { role: "Son of a patient", lines: ["This is ridiculous. My mother's eighty years old and she's been sitting here for five hours! Nobody's even looked at her!", "People came in after us and they've been seen already. How is that fair?", "She's in pain. Does anyone actually care?", "She seems a bit more uncomfortable than before, actually.", "So how much longer? Another five hours?", "Alright. I'm sorry I shouted. I'm just worried about her."] }
}
]
});
