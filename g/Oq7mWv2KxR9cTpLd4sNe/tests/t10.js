/* NextGen Nurses OET Nursing practice · Test 10. Original practice material, not real OET items. */
OET_TEST({
n: 10,
LA: [
{
who: "a doctor talking to a patient called Priya Sharma, who has abdominal pain",
cast: { D: ["m", "Doctor"], P: ["f", "Priya Sharma (patient)"] },
title: "Patient: Priya Sharma (29) · Recurrent abdominal pain",
notes: `#Symptoms
crampy pain {} in her abdomen
pain usually relieved by {}
alternates between diarrhoea and being {}
feels {} by the end of the day
#Pattern
symptoms began about {} ago
worse during periods of {} at work
#Red flags
no weight loss, no {} in the stool
no family history of {} disease or bowel cancer
#Diet
eats a lot of {} and onion
#Plan
blood test for {} disease
trial a low {} diet with a dietitian
keep a {} diary`,
ans: ["low down", "opening her bowels|going to the toilet", "constipated", "bloated", "a year|one year|12 months", "stress", "blood", "inflammatory bowel|coeliac", "garlic", "coeliac", "FODMAP", "food and symptom|food|symptom"],
s: `D: Hello Priya, come in. What's been happening?
P: I've been having stomach problems for a while, and it's getting me down.
D: Tell me about the pain.
P: It's a crampy pain, low down in my abdomen. It comes and goes.
D: Does anything make it better?
P: Usually it eases off after I've opened my bowels.
D: And what are your bowels like?
P: All over the place. Some weeks I've got diarrhoea, and then I'm constipated for days. It alternates.
D: Any other symptoms?
P: I get really bloated. By the end of the day, I look like I'm pregnant. I have to change into looser clothes.
D: How long has this been going on?
P: About a year now. Maybe a little longer.
D: Have you noticed any pattern?
P: It's definitely worse when I'm stressed. I'm a project manager, and when we have deadlines at work, it flares up badly.
D: I need to ask a few questions to rule out other causes. Have you lost any weight without trying?
P: No, if anything I've put some on.
D: Any blood in your stool, or black stools?
P: No, nothing like that.
D: Does anyone in your family have inflammatory bowel disease, coeliac disease, or bowel cancer?
P: Not that I know of.
D: Good. What sort of things do you eat?
P: I cook a lot of curries at home, so lots of garlic and onion. And I eat a lot of bread and pasta for lunch.
D: Garlic and onion are common triggers for these sorts of symptoms. From what you've told me, this sounds most like irritable bowel syndrome, but I'd like to do some tests first. I'm going to do a blood test, including a test for coeliac disease. That's important to do before you change your diet, so please keep eating bread for now.
P: Okay.
D: If that's normal, I'd like you to see a dietitian about trialling a low FODMAP diet. FODMAPs are certain carbohydrates in foods like onion, garlic, wheat and some fruits that can trigger symptoms. You cut them out for a few weeks, then reintroduce them one at a time to find your triggers.
P: That sounds complicated.
D: It can be, which is why the dietitian's help is important. In the meantime, I'd like you to keep a food and symptom diary, so you can see if there's a pattern. And we should talk about ways to manage stress, because that seems to be a big factor for you.`
},
{
who: "a falls clinic nurse talking to a patient called Frank Lewis",
cast: { N: ["f", "Falls clinic nurse"], P: ["m", "Frank Lewis (patient)"] },
title: "Patient: Frank Lewis (82) · Falls clinic assessment",
notes: `#Falls history
has fallen {} times in the past six months
most recent fall happened in the {}
fell while {}
was on the floor for about {}
#Contributing factors
feels {} when he stands up quickly
recently started a new tablet for his {}
wears {} at home
needs to get up {} times a night to pass urine
#Home
has a {} rug in the hallway
#Plan
stand up {} and pause before walking
consider a {} alarm
referral to a {} for his eyes`,
ans: ["three|3", "bathroom", "getting out of the shower|getting out of the bath|stepping out of the shower", "an hour|one hour|1 hour", "dizzy|light-headed", "prostate", "slippers", "two or three|2 or 3|three", "loose", "slowly", "personal|personal medical", "optometrist"],
s: `N: Good morning, Mr Lewis. I'm Sue, the falls clinic nurse. Your GP sent you to us after your falls. How many times have you fallen recently?
P: Three times in the last six months, I think. My daughter says it's more, but she worries too much.
N: Tell me about the most recent one.
P: It was in the bathroom, about two weeks ago. I was getting out of the shower, and my foot slipped. I went down hard.
N: Were you hurt?
P: Bruised my hip and my pride. I couldn't get up, so I was on the floor for about an hour until I managed to crawl to the phone.
N: That must have been frightening. Have you noticed any dizziness?
P: Sometimes, when I stand up quickly, I feel dizzy. The room sort of spins for a second.
N: Has anything changed with your medications lately?
P: The doctor started me on a new tablet for my prostate a couple of months ago.
N: Some prostate tablets can lower your blood pressure when you stand up, which can make you dizzy. I'll check your blood pressure lying and standing today, and we'll talk to your GP. What do you wear on your feet at home?
P: My slippers. They're very comfortable.
N: Are they loose at all?
P: Well, they're quite old. They slip off sometimes.
N: Loose slippers are a common cause of trips. Shoes or slippers with a back and a firm sole are much safer. Do you get up at night?
P: Two or three times a night to pass water. That's the prostate again.
N: Is there a light on the way to the toilet?
P: Not really. I don't want to wake my wife.
N: A small night light in the hallway could make a big difference. What's the floor like in the hallway?
P: There's a loose rug. My wife likes it.
N: We'd usually recommend removing loose rugs or fixing them down firmly. Now, some practical steps. When you get up from bed or a chair, stand up slowly and pause for a moment before you start walking, to let your blood pressure adjust.
P: I can do that.
N: Given that you were on the floor for an hour, I'd also suggest a personal alarm that you wear around your neck or wrist. If you fall, you press the button and someone is called.
P: My daughter's been on at me about that. Maybe she's right.
N: When did you last have your eyes checked?
P: Oh, years ago.
N: I'll refer you to an optometrist. Good vision is really important for preventing falls.`
}
],
LB: [
{
who: "two nurses discussing a blood glucose meter",
cast: { A: ["f", "Nurse"], B: ["m", "Nurse"] },
s: `A: The glucose meter failed its quality control check this morning. The control reading was way outside the range.
B: Did you use a new bottle of control solution?
A: Yes, and it still failed.
B: Then don't use it on any patients. Label it as faulty, send it to biomedical engineering, and borrow the spare meter from Ward 5 until it's fixed. And let's tell the nurse in charge, in case any readings this morning were done with it.`,
q: "What does the second nurse say should happen to the meter?",
o: ["It should be tested again with new solution.", "It should be removed from use.", "It should only be used for urgent tests."],
a: 1,
why: "'Don't use it on any patients. Label it as faulty.'"
},
{
who: "a nurse unit manager talking about privacy",
cast: { M: ["f", "Nurse unit manager"] },
s: `M: I need to remind everyone about privacy. A staff member took a photo of a patient's wound on her personal phone to show the doctor. I understand why, but photos on personal phones can end up in the cloud or be seen by others. If you need to take a clinical photo, use the approved app on the ward tablet, which stores it directly in the patient's record.`,
q: "What is the manager's main point?",
o: ["Clinical photos must be taken using approved equipment.", "Staff should never photograph patients' wounds.", "Doctors should take all clinical photos themselves."],
a: 0,
why: "She tells staff to use 'the approved app on the ward tablet'."
},
{
who: "a doctor and a nurse discussing a verbal order",
cast: { D: ["m", "Doctor"], N: ["f", "Nurse"] },
s: `D: I'm in theatre, but can you give Mr Burke some IV morphine for his pain? Two milligrams.
N: Okay, but our policy is that verbal orders are only for emergencies, and I need to read it back. You said morphine two milligrams IV, once only?
D: That's right.
N: Fine. I'll document it as a verbal order, and you'll need to sign the chart within twenty-four hours.`,
q: "What does the nurse do to make the verbal order safer?",
o: ["refuses to give the medication", "repeats the order back to the doctor", "asks another doctor to confirm the dose"],
a: 1,
why: "She reads the order back: 'morphine two milligrams IV, once only?'"
},
{
who: "a physiotherapist and a nurse discussing a patient",
cast: { T: ["f", "Physiotherapist"], N: ["m", "Nurse"] },
s: `T: When I stood Mrs Ward up this morning, she nearly fainted. Her blood pressure dropped from one-thirty to ninety-five.
N: She's been on bed rest for a week, and she's on two blood pressure tablets.
T: That fits. Could you ask the doctor to review her blood pressure tablets? And please don't get her up alone. Sit her on the edge of the bed for a few minutes first, and have two people when she stands.`,
q: "What does the physiotherapist ask the nurse to do?",
o: ["keep the patient on bed rest", "get the patient's medication reviewed", "give the patient extra fluids"],
a: 1,
why: "She asks him to get the doctor to review the blood pressure tablets."
},
{
who: "a pharmacist talking to a nurse about a medication",
cast: { P: ["m", "Pharmacist"], N: ["f", "Nurse"] },
s: `P: Mr Tran is on clozapine for schizophrenia. I see he's missed three days of doses because he was nil by mouth.
N: He's eating again now. Should I just restart his usual dose tonight?
P: No. If clozapine is missed for more than forty-eight hours, it has to be restarted at a low dose and increased slowly, otherwise there's a risk of serious side effects. I'll contact the psychiatry team to arrange the new dosing plan.`,
q: "Why can't the patient restart his usual dose?",
o: ["He has been nil by mouth.", "He has missed doses for too long.", "His psychiatrist has stopped the medication."],
a: 1,
why: "After more than forty-eight hours it must be restarted at a low dose."
},
{
who: "a speech pathologist talking to ward staff",
cast: { S: ["f", "Speech pathologist"] },
s: `S: Mr Lee in bed nine has aphasia after his stroke. He understands much more than he can say, so please talk to him normally, not as if he's a child. Ask yes-or-no questions, give him time to answer, and use the picture board on his table. Please don't finish his sentences for him unless he asks you to.`,
q: "What is the speech pathologist's main advice?",
o: ["to speak more slowly and loudly to the patient", "to communicate with the patient in ways that support him", "to avoid asking the patient questions"],
a: 1,
why: "She lists strategies: yes-or-no questions, time to answer, the picture board."
}
],
LC: [
{
who: "an interview with Craig Matthews, an emergency nurse, about violence against health workers",
cast: { I: ["f", "Interviewer"], C: ["m", "Craig Matthews"] },
s: `I: I'm speaking with Craig Matthews, a senior emergency nurse. Craig, how common is violence against nurses?
C: Unfortunately, very common. Surveys of emergency nurses find that most have been verbally abused, and a large proportion have been physically assaulted at some point in their careers. I've been punched, spat on and threatened more times than I can remember.
I: What causes it?
C: There's no single cause. Sometimes it's people affected by drugs or alcohol. Sometimes it's a medical problem, like delirium, a head injury or low blood sugar, where the person isn't really in control of their behaviour. And sometimes it's frustration, families who've been waiting for hours and feel nobody is listening.
I: Does that distinction matter?
C: Very much. A patient with delirium needs medical treatment, not security guards. But frustration is the area where I think we can do the most to prevent violence. Long waits are often unavoidable, but uncertainty makes them much worse. When we update people regularly, even if the news is just that they'll be waiting another hour, tension goes down noticeably.
I: Is violence underreported?
C: Massively. Many nurses don't report incidents, because they think nothing will happen, or because it's seen as 'part of the job'. That attitude is part of the problem. If it isn't reported, managers don't see the scale of it, and nothing changes.
I: What has your department done?
C: Several things. We've redesigned the waiting room so staff can see everyone, and introduced a flag in the electronic record for people with a history of violence, so staff know to take extra care. All staff now do de-escalation training, which teaches you to recognise warning signs early, like pacing or raised voices, and to use calm language and body language to settle things down.
I: Does the training work?
C: In my experience, yes. It gives people confidence. The biggest change I've seen is that staff now step in earlier, before things escalate. But training isn't enough on its own. We also need enough staff and security on every shift, and proper support for staff after an incident. Too often, a nurse is assaulted and then expected to finish the shift as if nothing happened.
I: What would you say to a new graduate?
C: Report everything. Look after each other. And never accept that being hurt is part of nursing. It isn't.`,
qs: [
["Why does Craig say it is important to understand the cause of aggression?", ["Some causes require medical treatment rather than security.", "It helps decide whether to call the police.", "It determines how long the patient must wait."], 0],
["According to Craig, what helps reduce families' frustration?", ["shorter waiting times", "regular updates on what is happening", "more comfortable waiting rooms"], 1],
["Why does Craig believe underreporting is a problem?", ["Nurses cannot claim compensation.", "Managers remain unaware of how serious the issue is.", "Patients are not held responsible."], 1],
["What is the purpose of the flag in the electronic record?", ["to warn staff about previous violent behaviour", "to identify patients with delirium", "to inform the police of incidents"], 0],
["What change has Craig noticed since de-escalation training?", ["Fewer patients are aggressive.", "Staff intervene at an earlier stage.", "Security staff are called more often."], 1],
["What does Craig say about support after an incident?", ["It is usually good.", "Nurses should go home immediately.", "It is often inadequate."], 2]
]
},
{
who: "a presentation by Dr Maria Santos, a gastroenterologist, about coeliac disease",
cast: { M: ["f", "Dr Maria Santos"] },
s: `M: Hello everyone. My topic today is coeliac disease, a condition that is very common but often goes unrecognised.
M: Coeliac disease is an autoimmune condition, in which the immune system reacts to gluten, a protein found in wheat, rye, barley and oats. This reaction damages the lining of the small intestine, which reduces the body's ability to absorb nutrients. It affects about one in seventy Australians, but it's estimated that around four out of five people with coeliac disease don't know they have it.
M: Why is it missed so often? Partly because the symptoms are so varied. The textbook picture is someone with diarrhoea, weight loss and abdominal pain. But many adults have quite different symptoms: tiredness, iron deficiency anaemia that doesn't respond to treatment, mouth ulcers, or even infertility. Some have no obvious symptoms at all. And because these problems are so common, coeliac disease isn't always considered.
M: Diagnosis starts with a blood test, and if that's positive, it's confirmed with a biopsy of the small intestine taken during an endoscopy. There's one critical point here. The tests are only accurate if the person is eating gluten. Many people try a gluten-free diet first, feel better, and then come for testing. Their results may then be falsely normal, and they need to reintroduce gluten for several weeks before they can be tested. That can be a real problem for them.
M: The only treatment is a strict, lifelong gluten-free diet. And when I say strict, I mean it. Even small amounts of gluten, for example crumbs from a shared toaster, can cause intestinal damage, even if the person doesn't notice symptoms. This is why coeliac disease is different from simply choosing to avoid gluten.
M: What does that mean for nurses? In hospital, patients with coeliac disease need to be confident that their meals are genuinely gluten-free. Errors in hospital food are not uncommon. Medications can also contain gluten in some cases, so checking with the pharmacist is worthwhile.
M: Finally, family members. Coeliac disease runs in families, so first-degree relatives of someone with the condition, such as parents, brothers, sisters and children, have about a one in ten chance of having it too. They should be offered testing, even if they feel well.`,
qs: [
["What does Dr Santos say about people with coeliac disease in Australia?", ["Most have been diagnosed.", "Most are unaware they have it.", "Most have severe symptoms."], 1],
["Why is coeliac disease often missed?", ["The symptoms vary widely between people.", "The blood test is unreliable.", "Doctors rarely see patients with diarrhoea."], 0],
["What important point does Dr Santos make about testing?", ["A biopsy should be done before the blood test.", "Patients must be eating gluten for accurate results.", "Testing is only needed if symptoms are severe."], 1],
["Dr Santos mentions crumbs from a shared toaster to show that", ["patients should buy their own toaster", "even small amounts of gluten can cause damage", "symptoms always occur after eating gluten"], 1],
["What advice does Dr Santos give nurses about hospital patients?", ["to check that meals and medications are gluten-free", "to avoid giving patients bread", "to refer all patients to a dietitian"], 0],
["Why should family members be tested?", ["They are likely to share the same diet.", "They have a higher chance of having the condition.", "They often have more severe symptoms."], 1]
]
}
],
RA: {
topic: "Clostridioides difficile infection",
texts: [
{ h: "Text A", t: "About C. difficile", b: `Clostridioides difficile (C. difficile) is a bacterium that can cause diarrhoea ranging from mild to life-threatening colitis. It produces spores that can survive on surfaces for months and are resistant to alcohol-based hand rub.
Main risk factors: recent antibiotic use (especially broad-spectrum antibiotics), age over 65, prolonged hospital stay, use of proton pump inhibitors, and immunosuppression.
Antibiotics disrupt the normal gut bacteria, allowing C. difficile to multiply.` },
{ h: "Text B", t: "When to test", b: `Send a stool sample for C. difficile testing if a patient has 3 or more episodes of unexplained loose stools (Bristol stool type 6 or 7) in 24 hours.
Do NOT test formed stools.
Do NOT repeat the test within 7 days if the first result is negative, unless symptoms change.
Do NOT test to confirm cure; patients may continue to carry the bacteria without symptoms.
Start contact precautions while awaiting the result.` },
{ h: "Text C", t: "Infection control", b: `• Single room with own toilet or commode.
• Gloves and gown for all patient contact.
• Hand hygiene with SOAP AND WATER, not alcohol-based hand rub.
• Clean the room daily with a chlorine-based (sodium hypochlorite) product.
• Dedicated equipment (e.g. stethoscope, blood pressure cuff).
Precautions may be removed when the patient has had no diarrhoea for 48 hours. A terminal clean of the room is required after discharge.` },
{ h: "Text D", t: "Treatment and monitoring", b: `Stop unnecessary antibiotics and review proton pump inhibitors.
First-line treatment is oral vancomycin or fidaxomicin, as prescribed.
Do NOT give antidiarrhoeal medications such as loperamide.
Monitor stool frequency on the Bristol stool chart, fluid balance and electrolytes.
Signs of severe disease: fever, rising white cell count, abdominal pain or distension, reduced bowel sounds. Escalate to the medical officer urgently.
Recurrence occurs in about 20% of patients.` }
],
qs: [
{ k: "m", q: "Which text explains why antibiotics increase the risk of infection?", a: "A" },
{ k: "m", q: "Which text tells you when isolation can be stopped?", a: "C" },
{ k: "m", q: "Which text tells you which medicine should not be used to stop diarrhoea?", a: "D" },
{ k: "m", q: "Which text tells you not to test a patient after treatment?", a: "B" },
{ k: "m", q: "Which text tells you what cleaning product to use?", a: "C" },
{ k: "m", q: "Which text describes how often the infection comes back?", a: "D" },
{ k: "m", q: "Which text explains how long spores can survive?", a: "A" },
{ k: "s", q: "How many episodes of loose stool in 24 hours indicate testing?", a: "3 or more|three or more|3|three" },
{ k: "s", q: "Which Bristol stool types are considered loose?", a: "6 or 7|type 6 or 7|6 and 7" },
{ k: "s", q: "For how many days should a negative test not be repeated?", a: "7|seven|7 days|seven days" },
{ k: "s", q: "Which product should be used for hand hygiene?", a: "soap and water" },
{ k: "s", q: "How long must the patient be free of diarrhoea before precautions are removed?", a: "48 hours|forty-eight hours" },
{ k: "s", q: "What type of clean is needed after the patient is discharged?", a: "terminal clean|terminal" },
{ k: "s", q: "Name one first-line treatment for C. difficile.", a: "oral vancomycin|vancomycin|fidaxomicin" },
{ k: "g", q: "C. difficile can cause a severe inflammation of the bowel called {}.", a: "colitis" },
{ k: "g", q: "Use of {} is a risk factor for infection.", a: "proton pump inhibitors|proton pump inhibitor|PPIs" },
{ k: "g", q: "{} should be started while waiting for the test result.", a: "Contact precautions" },
{ k: "g", q: "Patients with C. difficile should have their own {}, such as a stethoscope.", a: "dedicated equipment|equipment" },
{ k: "g", q: "Reduced {} may be a sign of severe disease.", a: "bowel sounds" },
{ k: "g", q: "Stool frequency should be recorded on the {}.", a: "Bristol stool chart" }
]
},
RB: [
{ src: "Extract from a policy on patient property", b: `On admission, staff must complete a property list with the patient or their representative and ask them to sign it. Patients should be encouraged to send valuables, such as jewellery and large amounts of cash, home with family. If this is not possible, valuables must be placed in the hospital safe and a receipt given. The hospital is not responsible for items kept at the bedside, including phones, hearing aids and dentures.`, q: "What does the policy say about hearing aids and dentures?", o: ["They must be stored in the hospital safe.", "They should be sent home with family.", "The hospital does not take responsibility for them at the bedside."], a: 2, why: "'The hospital is not responsible for items kept at the bedside, including … hearing aids and dentures.'" },
{ src: "Email to all nursing staff", b: `Subject: Recording patient weights. An audit has found that only 61% of patients had a weight recorded within 24 hours of admission. Weight is essential for calculating doses of many medicines, including enoxaparin, antibiotics and paracetamol in low-weight adults. Estimated weights should only be used if the patient cannot be weighed and must be clearly marked as estimated. Bed scales are available on every ward.`, q: "Why is recording patients' weight important?", o: ["to monitor nutrition", "to calculate safe medication doses", "to choose the right bed"], a: 1, why: "'Weight is essential for calculating doses of many medicines.'" },
{ src: "Extract from guidelines for the care of patients with a nasogastric tube for decompression", b: `For patients with a bowel obstruction, the nasogastric tube should be left on free drainage and aspirated 4-hourly, or as ordered. Record the volume and appearance of drainage on the fluid balance chart. A sudden increase in drainage, or drainage that becomes faecal in appearance or smell, must be reported to the medical officer immediately. Provide frequent mouth care, as these patients are usually nil by mouth.`, q: "What must be reported immediately?", o: ["any drainage over 100 mL", "a change in the drainage that suggests faeces", "a dry mouth"], a: 1, why: "Drainage that 'becomes faecal in appearance or smell' must be reported immediately." },
{ src: "Notice to staff in an outpatient clinic", b: `From 1 May, appointment reminders will be sent by text message three days before each appointment. Patients can reply 'C' to confirm or 'R' to request a new appointment. Patients who do not have a mobile phone will continue to receive a phone call. Please check that the mobile number in the patient's record is correct at every visit.`, q: "What are staff asked to do?", o: ["send text messages to all patients", "call patients who do not reply", "check patients' mobile numbers at each visit"], a: 2, why: "'Please check that the mobile number … is correct at every visit.'" },
{ src: "Extract from guidelines on intravenous fluid therapy", b: `Before starting IV fluids, assess the patient's fluid status, including recent intake and output, weight, observations and blood results. Patients receiving IV fluids should have their fluid balance and electrolytes reviewed daily by the medical team. Prescriptions for maintenance fluids must be reviewed every 24 hours and should not be continued automatically. Oral intake should be encouraged as soon as it is safe.`, q: "What do the guidelines say about maintenance fluid prescriptions?", o: ["They should continue until the patient is discharged.", "They must be reassessed each day.", "They should be stopped once electrolytes are normal."], a: 1, why: "They 'must be reviewed every 24 hours and should not be continued automatically'." },
{ src: "Memo to staff from the hospital chaplaincy service", b: `Chaplains of several faiths are available to patients, families and staff. Spiritual care is not limited to religious people; chaplains also support those without a religion who are facing illness, grief or difficult decisions. Requests can be made through the switchboard 24 hours a day. Please ask patients about their spiritual and cultural needs as part of the admission assessment.`, q: "According to the memo, chaplains", o: ["only visit patients who request religious services", "also support people without a religion", "are available during office hours only"], a: 1, why: "'Chaplains also support those without a religion.'" }
],
RC: [
{
t: "Reading your own notes",
b: `For most of the history of medicine, patients rarely saw what was written about them. Medical records were regarded as the property of the doctor or hospital, and many clinicians assumed that patients would find them confusing or upsetting. That assumption is being challenged. In several countries, patients can now log into an online portal and read their test results and their clinicians' notes, sometimes within hours of a consultation.

The movement towards so-called 'open notes' began in the United States, where a pilot study allowed patients of a group of primary care doctors to read their visit notes. The doctors involved had been anxious beforehand. They predicted that patients would be confused, would worry unnecessarily and would flood them with questions. In practice, few of these fears were realised. Most patients reported that reading their notes helped them understand their health, remember their care plan and feel more in control. Many said they were more likely to take their medicines as prescribed.

Supporters argue that open notes can also improve safety. Patients who read their records sometimes spot errors, such as an incorrect medication, an allergy that has been missed, or a test that was ordered but never followed up. In one study, a significant minority of patients who read their notes reported finding a mistake, some of which they considered serious.

Nevertheless, concerns remain. Test results released to patients before a clinician has had the chance to explain them can cause considerable distress, particularly when they suggest a serious diagnosis. Patients reading a radiology report at midnight, with no one to ask, may imagine the worst. Some health services therefore delay the release of certain results, such as biopsy reports, for a few days to allow time for a conversation.

The language of clinical notes is another issue. Notes written for colleagues often contain abbreviations and technical terms. Some phrases that clinicians regard as neutral, such as 'patient denies' or 'non-compliant', may read to patients as accusatory. Clinicians who know their notes will be read have reported changing the way they write, avoiding judgemental language and explaining things more clearly. Critics worry that this could lead clinicians to leave out important but sensitive information, such as concerns about alcohol use or safety at home.

Mental health notes raise particular questions. Clinicians have worried that reading their notes could harm some patients, for example those experiencing paranoia. However, studies in mental health settings have generally found that most patients value access, and that problems are less common than feared. Most systems allow clinicians to withhold notes in exceptional circumstances where access is likely to cause serious harm.

For nurses, the implications are practical. Nursing documentation may also be visible to patients. Writing objectively, avoiding unexplained abbreviations and describing behaviour rather than labelling it are good practice regardless, but they take on added importance when the patient may be the reader.

Open notes are unlikely to disappear. The question is no longer whether patients should be able to read their records, but how to make that access as helpful and safe as possible.`,
qs: [
["According to the first paragraph, clinicians traditionally believed that patients", ["had a right to read their records", "might be confused or upset by their notes", "would correct errors in their records", "rarely wanted to know about their health"], 1],
["What happened in the US pilot study?", ["Doctors received many more questions.", "Patients found their notes confusing.", "Most of the doctors' fears did not occur.", "Patients stopped taking their medicines."], 2],
["How can open notes improve safety?", ["Patients may identify mistakes in their records.", "Doctors write fewer notes.", "Fewer tests are ordered.", "Patients see their doctors more often."], 0],
["Why do some health services delay releasing certain results?", ["to give time to explain them to the patient", "to reduce the cost of the portal", "because results are often inaccurate", "because patients rarely read them"], 0],
["What does the writer say about phrases such as 'non-compliant'?", ["They are understood correctly by patients.", "They may seem critical to patients.", "They should be used more often.", "They are required in clinical notes."], 1],
["What concern do critics have about clinicians changing how they write?", ["Notes may become too long.", "Notes may become too technical.", "Sensitive information may be omitted.", "Patients will stop reading them."], 2],
["What have studies in mental health settings found?", ["Most patients are harmed by reading their notes.", "Patients do not want access to their notes.", "Most patients value access to their notes.", "Clinicians cannot withhold notes."], 2],
["What practical advice does the writer give nurses?", ["Write notes that would be appropriate for patients to read.", "Avoid writing nursing notes where possible.", "Ask patients to approve their notes.", "Use more abbreviations to save time."], 0]
]
},
{
t: "Exercise as medicine for depression",
b: `When people think of treatment for depression, they usually think of antidepressant medication or talking therapies such as cognitive behavioural therapy. Exercise is rarely the first thing that comes to mind. Yet a substantial body of research now suggests that physical activity can be an effective treatment for depression, and some researchers argue that it deserves a far more prominent place in care.

The evidence comes from many clinical trials comparing exercise with usual care, medication or psychological therapy. Large reviews pooling these studies have generally found that exercise produces a meaningful reduction in depressive symptoms. Some have suggested that the effect is comparable to that of medication or psychotherapy for mild to moderate depression, although the quality of individual studies varies and direct comparisons are limited.

What kind of exercise works? Interestingly, a range of activities appear to help, including walking, jogging, strength training, yoga and team sports. Some analyses suggest that more intense exercise produces larger benefits, but other studies have found that even modest activity, such as regular walking, is helpful. Perhaps more important than the type of exercise is whether people keep doing it.

The mechanisms are not fully understood. Exercise affects brain chemistry, including substances involved in mood regulation, and may promote the growth of new nerve connections. It also improves sleep, which is often disrupted in depression. Psychological and social factors are likely to be just as important: exercise can give a sense of achievement, provide structure to the day and, when done in groups, reduce isolation.

The challenge is that depression itself makes exercise difficult. Low energy, poor motivation and feelings of hopelessness are central features of the condition. Simply telling a person with depression to 'get more exercise' is unlikely to succeed and may even make them feel worse if they then fail. Studies have found that drop-out rates from exercise programmes can be high.

Programmes that succeed tend to share certain features. They start with small, achievable goals, are supervised or supported by a professional, at least initially, and are tailored to the person's preferences and abilities. Group programmes can provide social support and accountability. Some services have employed exercise physiologists within mental health teams, with promising results.

Exercise is not a substitute for other treatment in severe depression, particularly when there is a risk of suicide. Nor does it suit everyone. But as a complement to other treatment, or as an option for people with milder depression who prefer not to take medication, it offers considerable benefits, including for physical health. People with serious mental illness have much higher rates of heart disease and diabetes, and exercise addresses both mental and physical health at once.

For nurses working in any setting, asking patients about physical activity and supporting small changes may be one of the simplest and most valuable interventions available.`,
qs: [
["According to the first paragraph, exercise as a treatment for depression is", ["widely used by most clinicians", "often overlooked", "not supported by research", "only suitable for young people"], 1],
["What do large reviews of the evidence suggest?", ["Exercise is ineffective for depression.", "Exercise is more effective than medication in severe depression.", "Exercise can meaningfully reduce depressive symptoms.", "Exercise only helps if combined with medication."], 2],
["According to the third paragraph, the most important factor may be", ["the intensity of the exercise", "the type of exercise chosen", "continuing to exercise over time", "exercising in a group"], 2],
["Which of the following is NOT mentioned as a way exercise may help?", ["improving sleep", "providing a sense of achievement", "reducing the need for food", "reducing isolation"], 2],
["Why is it difficult for people with depression to exercise?", ["They usually have physical injuries.", "The symptoms of depression reduce energy and motivation.", "Their medication prevents exercise.", "They are not allowed to join gyms."], 1],
["Which feature of successful programmes is mentioned?", ["starting with ambitious targets", "professional support at least at the beginning", "exercising alone at home", "focusing on high-intensity exercise"], 1],
["What does the writer say about severe depression?", ["Exercise should replace medication.", "Exercise should not replace other treatment.", "Exercise is the most effective treatment.", "Exercise is dangerous for these patients."], 1],
["What is the writer's view in the final paragraph?", ["Only exercise physiologists should discuss activity.", "Nurses can help by encouraging physical activity.", "Nurses should prescribe exercise programmes.", "Exercise is too complex for nurses to discuss."], 1]
]
}
],
W: {
title: "Referral to a community dietitian after stroke",
notes: `You are a registered nurse on the stroke unit at Hillcrest Hospital. Today's date is 25 June.

Patient details
Name: Mr Arthur Nguyen
DOB: 08/10/1950 (75 years)
Address: 21 Pine Crescent, Hillcrest
Admitted: 10/06 – right hemisphere ischaemic stroke; left-sided weakness
Past history: hypertension, atrial fibrillation (now on apixaban), type 2 diabetes (metformin)
Social: lives with wife Lan (main carer); Vietnamese is first language – speaks some English, wife fluent; enjoys traditional Vietnamese food

Nursing notes
11/06 Speech pathology: dysphagia. Nil by mouth; nasogastric feeding.
16/06 Swallow improved: commenced minced and moist diet, mildly thick fluids. NG tube removed 18/06.
20/06 Eating 50% of meals; dislikes hospital food. Wife bringing in home-cooked meals (prepared to correct texture with speech pathologist guidance).
23/06 Weight 64 kg (admission 70 kg). BGLs 5–8 mmol/L.
24/06 Mobilising with quad stick + supervision. Left arm weakness – needs help to cut food; using adapted cutlery.
25/06 Discharged home today. Outpatient rehabilitation 3 days/week.

Requests:
- Dietitian review: weight loss (6 kg in 2 weeks), adequate protein/energy within texture-modified diet
- Culturally appropriate meal ideas (minced/moist Vietnamese dishes)
- Advice on diabetes-friendly options
- Speech pathology follow-up arranged separately`,
task: "Using the information in the case notes, write a letter of referral to Ms Claire Bennett, Community Dietitian, Hillcrest Community Health Service, 7 Market Street, Hillcrest. In your answer: expand the relevant notes into complete sentences; do not use note form; use letter format. The body of the letter should be approximately 180–200 words.",
model: `Ms Claire Bennett
Community Dietitian
Hillcrest Community Health Service
7 Market Street
Hillcrest

25 June

Dear Ms Bennett,

Re: Mr Arthur Nguyen, DOB 08/10/1950
21 Pine Crescent, Hillcrest

I am writing to refer Mr Nguyen, a 75-year-old man who was discharged home today following a stroke, for dietary review due to significant weight loss.

Mr Nguyen was admitted on 10 June with a right hemisphere ischaemic stroke, which caused left-sided weakness and dysphagia. He initially required nasogastric feeding. His swallowing has since improved, and he is now on a minced and moist diet with mildly thick fluids. However, he has been eating only half of his meals, as he dislikes hospital food, and his weight has fallen from 70 kg to 64 kg in two weeks.

He also has type 2 diabetes, which is managed with metformin, and his blood glucose levels have been stable at 5–8 mmol/L. Because of weakness in his left arm, he needs help to cut his food and uses adapted cutlery.

Mr Nguyen's first language is Vietnamese, and he enjoys traditional Vietnamese food, which his wife, his main carer, prepares for him. I would appreciate it if you could advise on meeting his protein and energy needs within his texture-modified diet, including culturally appropriate and diabetes-friendly meal ideas.

Yours sincerely,

Registered Nurse
Stroke Unit, Hillcrest Hospital`
},
S: [
{
set: "Gastroenterology clinic",
cand: "Nurse",
card: ["A 34-year-old patient has just been diagnosed with coeliac disease. The doctor has explained the diagnosis. The patient is overwhelmed about changing their diet.", "Find out what the patient understands and what worries them most.", "Explain that a strict, lifelong gluten-free diet is the only treatment (wheat, rye, barley, oats).", "Explain the importance of avoiding cross-contamination (e.g. separate toaster, checking labels).", "Reassure the patient that many foods are naturally gluten-free and that a dietitian will help.", "Respond to the patient's suggestion that 'a little bit won't hurt' when eating out."],
pat: { role: "Patient, 34, office worker", lines: ["I can't believe it. I love bread and pasta. What am I going to eat?", "Do I really have to be that strict? I'll just cut back a bit.", "What about when I go out for dinner with friends? I don't want to be the difficult one.", "Surely a little bit now and then won't hurt?", "My partner and I share a kitchen. Does that matter?", "Okay, I'll see the dietitian. Can you give me something to read in the meantime?"] }
},
{
set: "Rehabilitation ward",
cand: "Nurse",
card: ["An 80-year-old man has had two falls on the ward. The physiotherapist has recommended he use a walking frame, but he refuses because he says it makes him 'look old'.", "Acknowledge his feelings and find out why he does not want to use the frame.", "Explain the risks of further falls (fractures, longer hospital stay, loss of independence).", "Explain how the frame helps (balance, confidence) and that it may be temporary.", "Negotiate a compromise (use the frame on the ward and at night; review with physiotherapist).", "Encourage him to use the call bell when getting up."],
pat: { role: "Patient, 80, retired engineer", lines: ["I'm not using that contraption. I'm not some old man who can't walk.", "I've only fallen twice, and that was because the floor was slippery.", "My wife will laugh at me if she sees me with a frame.", "So if I use it now, does that mean I'll need it forever?", "I don't like pressing the bell. The nurses are busy enough.", "Fine. I'll use it on the ward. But I want to talk to the physio about getting rid of it."] }
}
]
});
