/* NextGen Nurses OET Nursing practice · Test 4. Original practice material, not real OET items. */
OET_TEST({
n: 4,
LA: [
{
who: "a community nurse talking to a patient called Dorothy Green, who has a leg ulcer",
cast: { N: ["f", "Community nurse"], P: ["f", "Dorothy Green (patient)"] },
title: "Patient: Dorothy Green · Venous leg ulcer, home visit",
notes: `#Ulcer history
ulcer started after she {} on a garden step
present for about {}
#Current symptoms
skin around the ulcer is very {}
leg feels {} by the evening
noticed a {} smell from the dressing
#Self-care
removes the {} at night because they feel tight
spends most of the day sitting in a {}
#General health
appetite poor since her {} moved away
mainly eating {} for dinner
#Plan
swab sent to check for {}
show her {} exercises
arrange a {} to help with putting on stockings`,
ans: ["scraped her leg|knocked her leg|scraped her shin", "three months|3 months", "itchy", "heavy", "different|new", "bandages|compression bandages", "recliner|recliner chair|armchair", "daughter", "toast|toast and tea", "infection", "ankle|ankle pump|calf", "stocking applicator|applicator|aid"],
s: `N: Good morning, Mrs Green. It's Hannah, the community nurse. How have you been since last week?
P: Oh, come in, love. Not too bad, but this leg's still giving me trouble.
N: Remind me, how did the ulcer first start?
P: I scraped my leg on the garden step. It was only a small graze, but it never healed properly.
N: And that was about three months ago now?
P: Yes, three months. It feels like forever.
N: Has anything changed this week?
P: It's been very itchy around the edges. I've been trying not to scratch it.
N: Good, try not to. Itching is common with this kind of ulcer. How does the leg feel during the day?
P: By the evening it feels really heavy, like it's full of water.
N: That's the fluid building up when you're upright. Have you noticed anything about the dressing?
P: Well, yes. There's been a different smell this week. Not nice at all.
N: Thank you for telling me. I'll take a swab today and send it to the lab to check for infection. Now, I have to ask, are you keeping the compression bandages on overnight?
P: I'll be honest, I take them off at night. They feel so tight when I'm in bed.
N: I understand they can be uncomfortable, but the compression is what helps the ulcer heal. If they're too tight, tell me, and we can adjust them rather than taking them off. How much are you moving around during the day?
P: Not much. I sit in my recliner most of the day watching television.
N: Do you put your feet up?
P: Sometimes.
N: Raising your legs above the level of your hips when you're sitting really helps. I'll also show you some ankle exercises you can do in the chair. Moving your ankle pumps the blood back up the leg.
P: I can manage that.
N: How's your eating? Good nutrition helps wounds to heal.
P: Not great. My appetite's gone since my daughter moved away. She used to cook for us on Sundays.
N: That must be hard. What do you usually have for dinner?
P: Just toast, mostly. It's easy.
N: We might get a dietitian to give you some ideas for easy meals with a bit more protein. Once the ulcer's healed, you'll need to wear compression stockings to stop it coming back. Do you think you could get them on yourself?
P: With my hands? I doubt it.
N: There's a device called a stocking applicator that makes it much easier. I'll arrange one for you.`
},
{
who: "a doctor talking to a patient called Kevin Doyle, who has had chest pain",
cast: { D: ["m", "Doctor"], P: ["m", "Kevin Doyle (patient)"] },
title: "Patient: Kevin Doyle · Follow-up after chest pain",
notes: `#Symptoms
pain described as a {} across the chest
pain comes on when {}
pain spreads into his {}
pain settles after about {} of rest
#Risk factors
smokes about {} cigarettes a day
father had a {} at 58
#Investigations
{} test showed changes during exercise
cholesterol level was {}
#Plan
use {} spray under the tongue if pain occurs
start a daily {}
referred for an {} to look at the arteries
call an ambulance if pain lasts more than {} minutes`,
ans: ["tightness|tight band|band", "walking uphill|walking up hills|going uphill", "left arm|arm", "five minutes|5 minutes", "twenty|20", "heart attack", "stress|exercise stress|treadmill", "high|raised", "GTN|glyceryl trinitrate|nitroglycerin", "aspirin", "angiogram|coronary angiogram", "ten|10"],
s: `D: Good afternoon, Kevin. I've got the results of your tests from last week. Before we go through them, can you remind me what the pain's been like?
P: It's like a tightness across my chest. Like someone's pulled a band round it.
D: When does it come on?
P: When I'm walking uphill, mainly. There's a hill on the way to the train station, and halfway up I have to stop.
D: Does the pain go anywhere else?
P: Sometimes it goes down into my left arm.
D: And what happens when you stop?
P: It eases off after about five minutes of rest, and then I can carry on.
D: Have you had it at rest, or at night?
P: No, only when I'm exerting myself.
D: Okay. And you're still smoking?
P: Yeah, about twenty a day. I know, I know.
D: We'll come back to that. You mentioned your father had heart problems?
P: He had a heart attack when he was fifty-eight. He survived it, but he was never the same after.
D: Right. So, the exercise stress test you had on the treadmill showed some changes on your heart tracing while you were exercising, which suggests that some of the arteries supplying your heart are narrowed. Your cholesterol was also high.
P: So, is it angina, then?
D: Yes, that's what this looks like. It means your heart muscle isn't getting enough blood when it's working harder.
P: Is it dangerous?
D: It's a warning sign, and we need to take it seriously, but there's a lot we can do. First, I'm giving you a GTN spray. If you get the pain, stop, sit down and spray it under your tongue. It works within a minute or two.
P: Okay.
D: I'd also like you to start taking aspirin once a day, and a tablet to lower your cholesterol. And I'm referring you to a cardiologist for an angiogram. That's a test where they put dye into the arteries of the heart to see exactly where the narrowing is.
P: When will that be?
D: Within the next few weeks. In the meantime, there's one very important thing. If you get pain that doesn't go away after using the spray, or lasts more than ten minutes, call an ambulance. Don't drive yourself to hospital.
P: Understood.
D: And the smoking. Stopping is the single most important thing you can do for your heart. Would you like some help with that?
P: My wife would say yes. I suppose I would too.`
}
],
LB: [
{
who: "two nurses discussing a patient using a PCA pump",
cast: { A: ["f", "Nurse"], B: ["m", "Nurse"] },
s: `A: Mr Lin's pain score is still eight, even though he's on the PCA.
B: How many times has he pressed the button?
A: Only twice in the last four hours. I think he's frightened of getting addicted. He told me he wants to save it for when it's really bad.
B: Right. Can you go back and explain that the dose is small and the pump is set so he can't overdose? He should press it before the pain gets that bad, especially before he moves.`,
q: "Why is the patient's pain poorly controlled?",
o: ["The pump is not delivering enough medication.", "The patient is reluctant to use the pump.", "The patient's dose has been reduced."],
a: 1,
why: "He has pressed it only twice because he is frightened of addiction."
},
{
who: "a social worker talking to a nurse",
cast: { S: ["f", "Social worker"], N: ["m", "Nurse"] },
s: `N: Have you managed to find respite care for Mrs Taylor?
S: There's a place at Willow Lodge from next Tuesday for two weeks. Her husband's very relieved. He's been caring for her on his own and he's exhausted.
N: Does she know?
S: Not yet. Her husband wants to tell her himself this evening, so please don't mention it before then. I'll come back tomorrow to talk it through with them both.`,
q: "What does the social worker ask the nurse to do?",
o: ["avoid telling the patient about the plan for now", "inform the patient about the respite place", "arrange for the husband to visit this evening"],
a: 0,
why: "The husband wants to tell her himself, 'so please don't mention it before then'."
},
{
who: "a pharmacist speaking at a ward meeting",
cast: { P: ["m", "Pharmacist"] },
s: `P: I want to flag a near miss from last week. A patient was almost given hydromorphone instead of morphine. The two drugs have similar names, but hydromorphone is about five times stronger. From today, hydromorphone will be stored in a separate drawer in the safe with a bright yellow label. When you check opioids with a second nurse, please read the full name aloud, not just the first few letters.`,
q: "The pharmacist is explaining",
o: ["how to calculate the correct dose of hydromorphone", "why morphine will no longer be used on the ward", "measures to prevent confusion between two drugs"],
a: 2,
why: "Separate storage, yellow labels and reading the full name aloud prevent mix-ups."
},
{
who: "a paramedic handing over to a triage nurse",
cast: { P: ["m", "Paramedic"], N: ["f", "Triage nurse"] },
s: `P: This is Mrs Ito, seventy-nine. Found on the floor by her neighbour this morning. She thinks she slipped last night and couldn't get up. She was on the floor for about ten hours.
N: Any injuries?
P: Bruising to the left hip, but she can move the leg. Our main concern is she's been lying there so long. She's had nothing to drink, and she's cold. Her temperature was thirty-five point two.`,
q: "What is the paramedic most concerned about?",
o: ["a possible hip fracture", "the effects of a long time on the floor", "the cause of the patient's fall"],
a: 1,
why: "'Our main concern is she's been lying there so long' – no fluids and a low temperature."
},
{
who: "an infection control nurse talking to ward staff",
cast: { I: ["f", "Infection control nurse"] },
s: `I: The hand hygiene audit results are in. Overall, the ward scored seventy-eight percent, which is below the national target of eighty. Most missed opportunities were after touching the patient's surroundings, things like the bed rails and the bedside table, rather than after direct patient contact. I'll be putting extra hand rub dispensers at the end of each bed this week.`,
q: "According to the audit, staff most often forgot hand hygiene",
o: ["after contact with the area around the patient", "before touching the patient", "after removing their gloves"],
a: 0,
why: "Most missed opportunities were after touching bed rails and bedside tables."
},
{
who: "a doctor and a nurse discussing a patient's fluid balance",
cast: { D: ["f", "Doctor"], N: ["m", "Nurse"] },
s: `D: How's Mr Patel's fluid balance looking?
N: He's positive by about two litres over the last twenty-four hours. His ankles are more swollen, and he says he's a bit short of breath lying flat.
D: Okay. Let's stop the maintenance fluids, and I'll give him a dose of IV frusemide now. Can you weigh him tomorrow morning, before breakfast, so we can compare with his admission weight?`,
q: "What does the doctor decide to do?",
o: ["increase the patient's IV fluids", "reduce the amount of fluid in the patient's body", "restrict the patient's oral fluid intake"],
a: 1,
why: "She stops the IV fluids and gives frusemide, a diuretic."
}
],
LC: [
{
who: "an interview with Amira Haddad, a hospital dietitian, about malnutrition in hospital",
cast: { I: ["m", "Interviewer"], A: ["f", "Amira Haddad"] },
s: `I: I'm joined by Amira Haddad, a senior dietitian. Amira, malnutrition in hospital sounds like something from the past. Is it still a problem?
A: It certainly is. Studies in Australian hospitals suggest that somewhere between a quarter and a third of adult patients are malnourished. And part of the reason it's overlooked is that it doesn't always look the way people expect. A patient can be overweight and still be malnourished, if they've lost a lot of weight quickly or they're not eating enough protein.
I: Why does it matter so much?
A: Malnourished patients have more complications, more infections, their wounds heal more slowly, and they stay in hospital longer. They're also more likely to be readmitted. For older patients especially, losing muscle in hospital can mean the difference between going home and needing residential care.
I: How do patients become malnourished in hospital?
A: Some arrive that way, of course. But many get worse during their stay. They're kept nil by mouth for tests, sometimes for much longer than necessary because a procedure gets postponed. Meals arrive when they're away having an X-ray. Or the tray is put down out of reach, and nobody notices it's taken away untouched.
I: That sounds like a system problem rather than a medical one.
A: Very much so. Which is why I think nurses are so important. We have a screening tool that takes a couple of minutes on admission. It asks about recent weight loss and appetite. If nurses complete it, we can catch most at-risk patients early. The problem is that when the ward is busy, screening is often left incomplete, and then we only hear about the patient a week later.
I: What else helps?
A: Simple things. Putting a red tray or a red lid on the meal of patients who need help, so everyone knows to check. Recording food intake on a chart for a few days. Encouraging families to visit at mealtimes. We also offer snacks between meals. Honestly, a milky drink and a biscuit at three in the afternoon can make more difference than people imagine.
I: And supplements?
A: Oral nutritional supplements are useful, but they're often prescribed and then not taken. Patients get tired of the taste, or the drinks are left warm on the bedside table. I'd much rather we offer them in small amounts, chilled, several times a day, and check that they're actually being drunk.
I: Finally, what about after discharge?
A: That's the gap I worry about most. Patients often go home weaker than when they came in, and nobody follows up their nutrition. We've started including a nutrition plan in the discharge summary for GPs, and that's beginning to help.`,
qs: [
["What point does Amira make about overweight patients?", ["They are rarely malnourished.", "They can still be malnourished.", "They need less protein."], 1],
["According to Amira, malnutrition is especially serious for older patients because", ["it can affect their ability to return home", "they are often kept nil by mouth", "they are less likely to eat hospital food"], 0],
["What does Amira say about the screening tool?", ["It takes too long to complete.", "It is not always completed when wards are busy.", "It is carried out by dietitians."], 1],
["What is the purpose of the red trays?", ["to indicate patients who need help with eating", "to show which patients are nil by mouth", "to identify meals that contain extra protein"], 0],
["What is Amira's view on oral nutritional supplements?", ["They are rarely effective.", "They should replace meals for some patients.", "They need to be given in a way patients will accept."], 2],
["What concerns Amira most?", ["the cost of nutritional supplements", "the lack of nutritional follow-up after discharge", "the number of patients admitted malnourished"], 1]
]
},
{
who: "a presentation by Dr Neil Chandra, an immunologist, about penicillin allergy labels",
cast: { N: ["m", "Dr Neil Chandra"] },
s: `N: Good afternoon. I'm going to talk about something that appears on thousands of patient records in this hospital: the label 'penicillin allergy'.
N: About one in ten patients in Australian hospitals has a penicillin allergy recorded. Yet when these patients are properly tested, more than ninety percent turn out not to be allergic at all. So most of these labels are wrong.
N: How does this happen? Very often the label dates back to childhood. A child is given amoxicillin for an ear infection and develops a rash. The rash may well have been caused by the virus, not the antibiotic, but the parents are told the child might be allergic, and the label stays for life. Other labels are based on side effects, such as nausea or diarrhoea, which are not allergies.
N: Does it matter? It does, quite a lot. Patients labelled as allergic are given alternative antibiotics, which are often broader in their action, less effective or more toxic. These patients have higher rates of infection with resistant organisms such as MRSA and of a serious gut infection called C. difficile. They also stay in hospital longer. So an incorrect label is not harmless.
N: What can nurses do? Nurses are often the first to record the allergy, at admission. I'd encourage you to ask a few more questions. What exactly happened? How long ago? Did it involve swelling of the face or difficulty breathing? Did they need treatment in hospital? Have they taken a penicillin since? You'd be surprised how many patients say, "Oh yes, I had amoxicillin last year and it was fine."
N: Recording these details is enormously helpful. A note that says 'penicillin allergy: rash' is far less useful than 'non-itchy rash, age four, no other symptoms, has since taken amoxicillin without problems'.
N: Our hospital now runs a service to remove incorrect labels. For patients at low risk, based on their history, we can often do a direct oral challenge: we give a single dose of amoxicillin and watch them for an hour. Until recently, everyone had skin testing first, but research has shown that for low-risk patients this step isn't necessary.
N: Of course, some patients do have genuine, serious allergies, and we must never take those lightly. But removing incorrect labels is one of the simplest ways we can improve antibiotic use. And when we tell patients that they can safely take penicillin, many are genuinely relieved. Please remember, though, to make sure the label is removed everywhere, including from the GP's records. Otherwise it simply reappears at the next admission.`,
qs: [
["What does Dr Chandra say about penicillin allergy labels?", ["Most are inaccurate.", "They are rarely recorded in hospitals.", "They usually develop in adulthood."], 0],
["Dr Chandra uses the example of a child with a rash to explain", ["how viral infections cause allergies", "why amoxicillin should not be given to children", "how incorrect labels often begin"], 2],
["According to Dr Chandra, an incorrect allergy label can", ["lead to the use of less suitable antibiotics", "prevent patients receiving vaccines", "cause patients to develop a real allergy"], 0],
["Why does Dr Chandra encourage nurses to ask more questions?", ["to identify patients who need urgent treatment", "to obtain more detailed information about the reaction", "to persuade patients to take penicillin"], 1],
["What has changed in the testing of low-risk patients?", ["They now need two doses of amoxicillin.", "They are tested only by their GP.", "Skin testing is no longer always required first."], 2],
["What does Dr Chandra warn about at the end?", ["Patients may refuse penicillin even after testing.", "Labels must be removed from all records.", "Serious allergies are becoming more common."], 1]
]
}
],
RA: {
topic: "Anaphylaxis",
texts: [
{ h: "Text A", t: "Recognising anaphylaxis", b: `Anaphylaxis is a severe, potentially life-threatening allergic reaction. It usually develops within minutes of exposure to the trigger, but may be delayed by up to 2 hours (e.g. after food).
Anaphylaxis is likely if there is sudden onset of skin or mucosal symptoms (hives, swelling of lips or tongue) PLUS any of: breathing difficulty, wheeze or persistent cough; low blood pressure, collapse or dizziness; persistent severe abdominal pain or vomiting.
Anaphylaxis can also occur WITHOUT skin symptoms, particularly in reactions to insect stings or medications.
Common triggers in hospital: antibiotics, IV contrast, latex, blood products.` },
{ h: "Text B", t: "Immediate management", b: `1. Remove the trigger if possible (e.g. stop the infusion).
2. Call for help: MET call.
3. Lay the patient flat. Do NOT allow them to stand or walk. If breathing is difficult, allow them to sit with legs outstretched.
4. Give adrenaline (epinephrine) 1:1000 IM into the outer mid-thigh: adults and children over 12 years, 0.5 mg (0.5 mL). Do not delay adrenaline to give antihistamines.
5. Give high-flow oxygen.
6. Repeat adrenaline every 5 minutes if there is no response.
7. Establish IV access and give 0.9% sodium chloride 20 mL/kg if hypotensive.` },
{ h: "Text C", t: "After the reaction", b: `Observe the patient for at least 4 hours after the last dose of adrenaline; longer (overnight) if the reaction was severe, required more than one dose of adrenaline, or occurred at night.
Biphasic reactions (a second reaction without further exposure) can occur within 72 hours.
Take blood for mast cell tryptase as soon as possible after the onset, and again at 1–2 hours. This helps to confirm the diagnosis later.
Antihistamines may be given for skin symptoms only; they do not treat airway or circulation problems.` },
{ h: "Text D", t: "Discharge and documentation", b: `Before discharge, every patient should receive:
• an adrenaline autoinjector prescription (2 devices) and training in its use
• an ASCIA Action Plan for Anaphylaxis
• referral to a clinical immunologist or allergist.
Record the trigger and reaction in the alerts section of the medical record and on the medication chart. Report reactions to medicines or vaccines to the Therapeutic Goods Administration (TGA).` }
],
qs: [
{ k: "m", q: "Which text tells you how long a patient should be monitored after treatment?", a: "C" },
{ k: "m", q: "Which text tells you how to position the patient?", a: "B" },
{ k: "m", q: "Which text explains that anaphylaxis may occur without a rash?", a: "A" },
{ k: "m", q: "Which text tells you which specialist the patient should be referred to?", a: "D" },
{ k: "m", q: "Which text explains the role of a blood test in diagnosis?", a: "C" },
{ k: "m", q: "Which text lists causes of anaphylaxis commonly seen in hospital?", a: "A" },
{ k: "m", q: "Which text tells you where to report a reaction to a medicine?", a: "D" },
{ k: "s", q: "Where should IM adrenaline be injected?", a: "outer mid-thigh|outer mid thigh|thigh" },
{ k: "s", q: "What dose of adrenaline is given to an adult?", a: "0.5 mg|0.5mg|0.5 mL|0.5" },
{ k: "s", q: "How often can adrenaline be repeated if there is no response?", a: "every 5 minutes|5 minutes|five minutes" },
{ k: "s", q: "What is a second reaction without further exposure called?", a: "biphasic reaction|biphasic" },
{ k: "s", q: "Which blood test should be taken soon after the reaction begins?", a: "mast cell tryptase|tryptase" },
{ k: "s", q: "How many autoinjector devices should be prescribed?", a: "2|two" },
{ k: "s", q: "Which document should every patient receive before discharge?", a: "ASCIA Action Plan for Anaphylaxis|ASCIA Action Plan|action plan" },
{ k: "g", q: "After food, the onset of anaphylaxis may be delayed by up to {}.", a: "2 hours|two hours" },
{ k: "g", q: "A patient with breathing difficulty may sit with their {} outstretched.", a: "legs" },
{ k: "g", q: "Antihistamines should not be given before {}.", a: "adrenaline|epinephrine" },
{ k: "g", q: "A hypotensive patient should receive sodium chloride {}.", a: "20 mL/kg|20 ml/kg" },
{ k: "g", q: "Biphasic reactions can occur within {} hours.", a: "72|seventy-two" },
{ k: "g", q: "The trigger should be recorded in the {} of the medical record.", a: "alerts section|alerts" }
]
},
RB: [
{ src: "Extract from a hospital policy on nasogastric tubes", b: `The position of a nasogastric tube must be confirmed before first use and before every feed or medication. The first-line method is testing the pH of aspirate: a reading of 5.5 or below indicates gastric placement. If no aspirate can be obtained, or the pH is above 5.5, an X-ray must be requested. Never use the 'whoosh test' (listening for air) to confirm placement, as it has been shown to be unreliable.`, q: "What should a nurse do if the aspirate pH is 6?", o: ["repeat the 'whoosh test'", "arrange an X-ray", "start the feed slowly"], a: 1, why: "A pH above 5.5 means an X-ray must be requested." },
{ src: "Email to all clinical staff", b: `Subject: Changes to the patient handover tool. From next Monday, nursing handover will use the ISBAR format (Identify, Situation, Background, Assessment, Recommendation) on all wards. Handover will take place at the bedside wherever possible, and patients should be invited to take part. Confidential information that the patient does not wish to be discussed in front of others should be handed over away from the bedside.`, q: "What does the email say about bedside handover?", o: ["It is only to be used for confidential information.", "Patients should be given the opportunity to contribute.", "It will replace the ISBAR format."], a: 1, why: "'Patients should be invited to take part.'" },
{ src: "Extract from an equipment manual: automated blood pressure monitor", b: `Select a cuff of the correct size: the inflatable bladder should encircle at least 80% of the upper arm. A cuff that is too small will give a falsely high reading; one that is too large may give a falsely low reading. Position the arm at heart level. If the patient has an irregular heart rhythm, such as atrial fibrillation, automated readings may be inaccurate and a manual measurement should be considered.`, q: "According to the manual, a manual blood pressure measurement may be needed when", o: ["the cuff is too large for the patient", "the patient's heart rhythm is irregular", "the reading appears unusually high"], a: 1, why: "In atrial fibrillation 'a manual measurement should be considered'." },
{ src: "Memo to nurses in a mental health unit", b: `Following a review, all patients on the unit will now have their physical health observations recorded at least once per day, including weight weekly. People with severe mental illness have a significantly shorter life expectancy, largely because of physical conditions such as heart disease and diabetes, which are often not detected. Some antipsychotic medications also cause weight gain and metabolic changes.`, q: "The purpose of the memo is to explain", o: ["why physical health monitoring is being increased", "how to manage the side effects of antipsychotics", "the causes of severe mental illness"], a: 0, why: "It explains the new daily observations by describing poor physical health outcomes." },
{ src: "Notice in a staff room", b: `Lost property: Items left in the staff room for more than one week will be removed. Valuables, including phones and wallets, will be handed to Security on Level 1. Food in the staff fridge must be labelled with your name and the date. The fridge will be emptied every Friday afternoon, and any unlabelled items will be thrown away.`, q: "What will happen to unlabelled food in the fridge?", o: ["It will be given to Security.", "It will be kept for one week.", "It will be discarded on Fridays."], a: 2, why: "Unlabelled items 'will be thrown away' when the fridge is emptied every Friday." },
{ src: "Extract from guidelines on neurovascular observations", b: `Neurovascular observations should be performed on any limb that has been injured, operated on or placed in a cast or splint. Check colour, warmth, capillary refill, movement, sensation, pulse and swelling, and compare with the other limb. Pain that is out of proportion to the injury, especially pain on passive stretching of the fingers or toes, may be an early sign of compartment syndrome and must be reported to the medical officer immediately.`, q: "What does the extract identify as a possible early warning sign?", o: ["a limb that is warmer than the other limb", "severe pain when the toes or fingers are moved by someone else", "swelling around a cast or splint"], a: 1, why: "Pain on passive stretching 'may be an early sign of compartment syndrome'." }
],
RC: [
{
t: "Virtual reality as a distraction for children in pain",
b: `For a child, a blood test or a dressing change can be a frightening experience, and the memory of a painful procedure can make the next one harder still. Paediatric nurses have long used distraction, such as bubbles, books, games and conversation, to help children cope. In recent years, a new tool has joined the kit: virtual reality.

Virtual reality (VR) headsets immerse the child in a three-dimensional world. Instead of watching a needle approach their arm, a child might be swimming among dolphins or flying through space. The theory is straightforward. Attention is limited, and pain demands attention. If the child's attention is fully occupied elsewhere, there is less available to process pain signals, and the experience is perceived as less painful.

Early studies have produced encouraging results. Trials in children having needle procedures, burns dressings and minor procedures in emergency departments have found reductions in self-reported pain and distress compared with standard care. Parents often report that their children are calmer, and some children who had previously needed sedation for dressing changes have been able to manage without it.

However, the strength of the evidence varies. Many trials are small, and because it is impossible to hide from a child whether they are wearing a headset, it is difficult to rule out the influence of expectation. In addition, 'standard care' differs between studies; in some, children in the comparison group received no distraction at all, which makes the effect of VR look larger than it may be in practice, where nurses already use other forms of distraction.

There are also practical considerations. Headsets must be cleaned thoroughly between patients, which takes time. Some young children find them heavy or uncomfortable, and a small number experience dizziness or nausea. Children with certain conditions, such as epilepsy triggered by flashing lights, may not be suitable. For very young children, typically under four, the devices are generally not recommended.

Perhaps the most important finding concerns how VR is introduced. Nurses who have used it successfully stress that the headset should be fitted before the child becomes distressed, and that the child should have time to settle into the virtual world before the procedure begins. Trying to put a headset on a child who is already crying and frightened rarely works. Equally, the nurse must continue to talk to the child during the procedure; VR is not a substitute for human reassurance.

Cost, once a major barrier, has fallen considerably. Consumer headsets are now relatively cheap, although hospitals must also pay for suitable software and cleaning protocols. Several Australian children's hospitals have introduced VR programmes, often funded by charitable donations.

Whether VR will become a routine part of paediatric care depends on larger trials comparing it with the best existing distraction techniques rather than with none. In the meantime, it offers nurses one more option, which, used thoughtfully, may make a frightening experience a little easier for some children.`,
qs: [
["According to the first paragraph, a painful procedure can", ["make children afraid of nurses", "affect how a child copes with future procedures", "be avoided through the use of distraction", "cause long-term physical harm"], 1],
["How is virtual reality thought to reduce pain?", ["by blocking pain signals from the skin", "by relaxing the child's muscles", "by occupying the child's attention", "by reducing the need for needles"], 2],
["What does the writer say about the results of early studies?", ["They showed that VR is less effective than sedation.", "They found reductions in pain and distress.", "They were mainly based on parents' opinions.", "They showed no difference from standard care."], 1],
["Why might some studies overstate the benefits of VR?", ["Children in comparison groups sometimes had no distraction.", "Nurses chose which children received VR.", "The studies were funded by headset manufacturers.", "Children were sedated before the procedures."], 0],
["Which group of children is VR generally not recommended for?", ["children having burns dressings", "children under about four years old", "children who have been sedated before", "children who are afraid of needles"], 1],
["Nurses who have used VR successfully emphasise that", ["the headset should be fitted after the child is calm", "the procedure should start as soon as the headset is on", "nurses should stay silent during the procedure", "parents should fit the headset"], 0],
["The phrase 'not a substitute for human reassurance' suggests that", ["children prefer talking to nurses rather than using VR", "VR should be used alongside the nurse's support", "VR is only effective when parents are present", "reassurance is unnecessary when VR is used"], 1],
["What does the writer believe is needed before VR becomes routine?", ["lower costs for hospitals", "more charitable funding", "trials comparing VR with the best alternatives", "better training for paediatric nurses"], 2]
]
},
{
t: "Who will care for the carers? The ageing nursing workforce",
b: `In many hospitals, some of the most experienced nurses on the roster are now in their fifties and sixties. This is no accident. The large group of nurses who entered the profession in the 1970s and 1980s is approaching retirement, and in Australia, as in many other countries, the average age of the nursing workforce has risen steadily over the past two decades.

This creates an obvious problem. When experienced nurses retire, they take with them not only their labour but also their knowledge: the ability to recognise a deteriorating patient before the observations change, to calm a frightened family, or to guide a new graduate through a difficult shift. Workforce planners estimate that, without changes, retirements will significantly worsen existing shortages within the next decade.

The usual response has been to focus on recruitment, by increasing student numbers or attracting nurses from overseas. Both are important, but neither replaces experience quickly. A growing number of health services are therefore asking a different question: how can we keep older nurses working for longer?

Research with older nurses suggests that many would be willing to stay if their work were organised differently. The physical demands of bedside nursing, including lifting, long shifts and night work, are often cited as reasons for leaving earlier than planned. So is a sense that their experience is not valued, particularly when organisational changes are introduced without consultation.

Flexibility appears to be central. Nurses approaching retirement often want to reduce their hours gradually rather than stop all at once, but rigid rostering can make part-time work difficult to arrange. Some hospitals now offer 'transition to retirement' arrangements, allowing nurses to work shorter shifts, avoid nights or move into roles such as education, quality improvement or telehealth, which use their knowledge with less physical strain.

Mentoring programmes, in which experienced nurses are paired with graduates, serve two purposes. They help new nurses develop clinical judgement, and they give older nurses a recognised role that values their expertise. Evaluations of such programmes have found improvements in graduate confidence and, in some cases, in retention of both groups.

There are risks in overgeneralising, however. Older nurses are not a single group with identical needs. Some are fit and keen to continue full-time clinical work; others are managing their own health problems or caring for ageing parents or grandchildren. Assuming that all older nurses want less demanding roles may be as unhelpful as ignoring their needs altogether. The most successful approaches involve individual conversations about each nurse's plans and preferences.

Equipment and environment matter too. Mechanical lifting aids, adjustable beds and well-designed workspaces reduce physical strain for everyone, not only older staff. In this sense, measures introduced to retain older nurses may make nursing a more sustainable career for all ages.`,
qs: [
["According to the first paragraph, the rise in the average age of nurses is mainly due to", ["fewer young people choosing nursing", "a large group of nurses recruited decades ago", "changes to the retirement age", "nurses returning to work after retirement"], 1],
["In the second paragraph, the writer emphasises that retiring nurses", ["are difficult to replace because of their knowledge and skills", "often leave because of poor working conditions", "are mainly working in management roles", "have been poorly prepared for retirement"], 0],
["What does the writer say about recruitment strategies?", ["They have failed to attract enough students.", "They are less important than retaining older nurses.", "They cannot quickly replace experienced staff.", "They rely too heavily on overseas nurses."], 2],
["Which reason for leaving early is mentioned in the fourth paragraph?", ["a feeling that their experience is undervalued", "a lack of opportunities for promotion", "low pay compared with other professions", "a wish to travel"], 0],
["'Transition to retirement' arrangements allow nurses to", ["retire earlier than planned", "take on less physically demanding work", "train as nurse practitioners", "work extra night shifts"], 1],
["According to the writer, mentoring programmes benefit", ["mainly the graduate nurses", "mainly the hospital managers", "both experienced and new nurses", "only nurses who intend to retire"], 2],
["What warning does the writer give in the seventh paragraph?", ["Older nurses should not work full-time.", "The needs of older nurses vary widely.", "Individual conversations take too much time.", "Older nurses have more health problems than younger nurses."], 1],
["In the final paragraph, the writer suggests that changes to equipment and environment", ["are too expensive for most hospitals", "will benefit nurses of all ages", "are only necessary for older nurses", "should replace flexible rostering"], 1]
]
}
],
W: {
title: "Referral to a cardiac rehabilitation program",
notes: `You are a registered nurse in the cardiology ward at Central City Hospital. Today's date is 18 March.

Patient details
Name: Mrs Lorraine Baker
DOB: 02/12/1962 (63 years)
Admitted: 13/03 – non-ST elevation myocardial infarction (NSTEMI)
Procedure: 14/03 – coronary angiogram; stent inserted in left anterior descending artery (via right wrist)
Past history: hypertension, high cholesterol, type 2 diabetes (diet-controlled), knee osteoarthritis
Social: married; works part-time as a school librarian; non-smoker; sedentary; BMI 32

Nursing notes
14/03 Right radial puncture site – no bleeding or haematoma.
15/03 Mobilising around ward independently. Mild chest discomfort at rest – ECG unchanged, settled with GTN.
16/03 Pain-free. Anxious about "having another heart attack"; tearful, poor sleep. Husband very supportive.
17/03 Walked 200 m on flat – no symptoms. Knee pain limits longer walks. Echo: mildly reduced heart function (EF 45%).
18/03 Discharged home.
Medications: aspirin 100 mg daily, ticagrelor 90 mg BD (for 12 months – do not stop without cardiologist advice), atorvastatin 80 mg nocte, metoprolol 23.75 mg daily, ramipril 2.5 mg daily, GTN spray PRN.

Education provided: medications, GTN use, when to call an ambulance, no driving for 2 weeks.
Patient wishes to return to work in 4 weeks; would prefer morning sessions (works afternoons).
Request: cardiac rehabilitation – exercise program (consider knee pain), dietary advice, support for anxiety.`,
task: "Using the information in the case notes, write a letter of referral to Mr James Ford, Cardiac Rehabilitation Coordinator, Central City Community Health, 88 Park Avenue, Central City. In your answer: expand the relevant notes into complete sentences; do not use note form; use letter format. The body of the letter should be approximately 180–200 words.",
model: `Mr James Ford
Cardiac Rehabilitation Coordinator
Central City Community Health
88 Park Avenue
Central City

18 March

Dear Mr Ford,

Re: Mrs Lorraine Baker, DOB 02/12/1962

I am writing to refer Mrs Baker, a 63-year-old part-time school librarian, to your cardiac rehabilitation program following a non-ST elevation myocardial infarction.

Mrs Baker was admitted on 13 March, and a stent was inserted into her left anterior descending artery the following day. Apart from one episode of mild chest discomfort, which settled with GTN, her recovery has been uneventful. An echocardiogram showed mildly reduced heart function, with an ejection fraction of 45%. She was discharged home today.

Her other medical conditions include hypertension, high cholesterol, diet-controlled type 2 diabetes and osteoarthritis of the knee. She is overweight and inactive. Although she walked 200 metres without symptoms, knee pain limits her ability to walk further, so a modified exercise program may be needed. She would also benefit from dietary advice.

Mrs Baker has been anxious and tearful about having another heart attack and is sleeping poorly, so psychological support would be helpful.

She hopes to return to work in four weeks and would prefer morning sessions, as she works in the afternoons. Her medications are listed on the attached discharge summary.

Yours sincerely,

Registered Nurse
Cardiology Ward, Central City Hospital`
},
S: [
{
set: "General practice clinic",
cand: "Practice nurse",
card: ["An 81-year-old patient has come in for a routine blood pressure check. You notice from the records that she has declined the flu vaccine for the past two years.", "Ask about her reasons for not having the vaccine.", "Explain why the vaccine is recommended for people over 65 (higher risk of complications, hospital admission).", "Correct the belief that the vaccine can give her the flu (it contains no live virus; mild aches are possible for a day or two).", "Explain that the vaccine is free for her age group and can be given today.", "Respect her decision if she still declines, and give her written information."],
pat: { role: "Patient, 81, retired", lines: ["Oh no, not the flu jab again. I don't have it, dear.", "The last time I had it, I got the flu straight afterwards. I was in bed for a week.", "I've been healthy all my life. I don't think I need it.", "My friend says they put all sorts of chemicals in those vaccines.", "Is it expensive? My pension doesn't stretch very far.", "Well, let me think about it. Can I take something home to read?"] }
},
{
set: "Emergency department",
cand: "Nurse",
card: ["A 35-year-old man has a sprained ankle from playing football. He has been examined by the doctor, who says no X-ray is needed. He is unhappy and wants an X-ray and strong painkillers.", "Acknowledge his frustration and explain why an X-ray is not needed (doctor's examination, can walk four steps, no bone tenderness).", "Explain the treatment of a sprain (rest, ice, compression, elevation; gentle movement after 48 hours).", "Advise on pain relief (regular paracetamol, anti-inflammatory if suitable).", "Respond to his request for stronger painkillers (not usually needed, side effects).", "Tell him when to return or see his GP (unable to walk, pain worsening, not improving after a week)."],
pat: { role: "Patient, 35, plays amateur football", lines: ["I've been waiting three hours and the doctor didn't even send me for an X-ray. How does he know it's not broken?", "It really hurts. Can't you just give me something stronger? Like codeine or whatever?", "I've got a match in two weeks. Will I be able to play?", "So what am I supposed to do with it at home?", "And if it is broken and you've missed it?", "Fine. I'll try it. But I'm coming back if it's not better."] }
}
]
});
