/* NextGen Nurses · PTE Academic practice bank. Original practice items, not real exam content. */
window.PTE_DATA = {
  skills: [
    { id: "speaking", name: "Speaking", blurb: "Spoken into your microphone, with exam timings." },
    { id: "writing", name: "Writing", blurb: "Typed against the clock with a live word count." },
    { id: "reading", name: "Reading", blurb: "Marked instantly, with the reason for each answer." },
    { id: "listening", name: "Listening", blurb: "Audio played by your device, marked instantly." }
  ],
  tasks: [
    /* ------------------------------------------------------------ SPEAKING */
    {
      id: "ra", skill: "speaking", kind: "speak", name: "Read Aloud",
      meta: ["30–40 s to prepare", "Text up to 60 words", "Scores Speaking + Reading"],
      tips: [
        "Use the preparation time to read the whole text silently and find the hard words.",
        "Pause briefly at commas and full stops. Never go back to correct a word.",
        "Keep one steady pace to the end. Fluency is marked on rhythm, not speed."
      ],
      criteria: ["I read every word with nothing skipped or added", "I kept a steady pace with no long pauses or restarts", "My word endings and stress were clear"],
      items: [
        { show: "Hand hygiene remains the single most effective way to prevent infections in hospitals. Studies have repeatedly shown that when staff clean their hands before and after every patient contact, the number of infections falls sharply, yet compliance is often lower than managers expect.", prep: 35, answer: 35 },
        { show: "Sleep is not simply a period of rest. While we sleep, the brain sorts the information gathered during the day, strengthening useful memories and discarding others. People who regularly sleep fewer than six hours tend to perform worse on tasks that require attention and judgement.", prep: 35, answer: 35 },
        { show: "Australia's population is concentrated along the eastern and southern coasts, leaving vast inland regions sparsely settled. Providing health care to these remote communities is expensive, so governments increasingly rely on telehealth services and visiting specialists who travel by air.", prep: 35, answer: 35 },
        { show: "Antibiotic resistance develops when bacteria change in response to the medicines designed to kill them. Although this process occurs naturally, the overuse of antibiotics in both humans and animals has accelerated it, making some common infections far more difficult to treat.", prep: 35, answer: 35 },
        { show: "Urban planners now recognise that green spaces do more than improve the appearance of a city. Parks lower summer temperatures, absorb stormwater and encourage physical activity, and residents who live close to them report lower levels of stress than those who do not.", prep: 35, answer: 35 },
        { show: "Effective communication in a clinical team depends on structure as much as on goodwill. When a nurse hands over a patient using a consistent format, the receiving clinician knows exactly where to find the key information, and fewer details are lost between shifts.", prep: 35, answer: 35 }
      ]
    },
    {
      id: "rs", skill: "speaking", kind: "speak", name: "Repeat Sentence",
      meta: ["Sentence of 3–9 s", "15 s to answer", "Scores Speaking + Listening"],
      tips: [
        "Listen for the meaning of the sentence, not word by word. Meaning is easier to hold than sound.",
        "Start speaking as soon as the recording opens, and copy the speaker's rhythm.",
        "If you lose part of it, say the words you remember in order. Half a sentence still earns marks."
      ],
      criteria: ["I repeated every word in the right order", "I spoke smoothly without stopping to think", "I copied the stress and intonation of the speaker"],
      items: [
        { audio: "The library will be closed on Monday for the public holiday.", answer: 15, reveal: true },
        { audio: "Please submit your assignment before the end of the week.", answer: 15, reveal: true },
        { audio: "Most of the research was carried out in regional hospitals.", answer: 15, reveal: true },
        { audio: "Students are advised to back up their work regularly.", answer: 15, reveal: true },
        { audio: "The lecture has been moved to the room on the second floor.", answer: 15, reveal: true },
        { audio: "Climate change is affecting rainfall patterns across the continent.", answer: 15, reveal: true },
        { audio: "You will need your student card to borrow books.", answer: 15, reveal: true },
        { audio: "The results of the survey will be published next month.", answer: 15, reveal: true },
        { audio: "Regular exercise reduces the risk of heart disease and diabetes.", answer: 15, reveal: true },
        { audio: "Tutorials start in the second week of the semester.", answer: 15, reveal: true }
      ]
    },
    {
      id: "di", skill: "speaking", kind: "speak", name: "Describe Image",
      meta: ["25 s to prepare", "40 s to answer", "Scores Speaking"],
      tips: [
        "Open with what the image shows: its type, its topic and the units.",
        "Give the highest and lowest values, then one comparison or trend.",
        "Finish with a one-sentence conclusion and stop. Aim for about 35 seconds."
      ],
      criteria: ["I spoke for most of the 40 seconds without long pauses", "My pronunciation was clear enough for a stranger to follow"],
      items: [
        { image: { type: "bar", title: "Hours of sleep per night, by occupation", unit: "hours", labels: ["Teachers", "Nurses", "Drivers", "Office staff", "Students"], values: [7.2, 6.1, 5.8, 7.0, 6.5] }, prep: 25, answer: 40,
          points: ["Said it is a bar chart of average sleep per night for five occupations", "Named teachers as the highest, at about 7.2 hours", "Named drivers as the lowest, at about 5.8 hours", "Gave a conclusion, such as shift workers sleeping least"],
          model: "This bar chart shows the average hours of sleep per night for five occupations. Teachers sleep the most, at about 7.2 hours, followed closely by office staff at 7 hours. Drivers sleep the least, at 5.8 hours, and nurses are also low at around 6 hours. Students are in the middle with 6.5 hours. Overall, people in shift-based jobs appear to sleep less than those who work regular hours." },
        { image: { type: "line", title: "Visits to a city clinic, by month", unit: "visits", labels: ["Jan", "Mar", "May", "Jul", "Sep", "Nov"], values: [420, 460, 610, 880, 640, 450] }, prep: 25, answer: 40,
          points: ["Said it is a line graph of clinic visits across a year", "Described the rise from January to a peak in July of about 880", "Described the fall back to about 450 by November", "Gave a conclusion, such as demand peaking in winter"],
          model: "This line graph shows the number of visits to a city clinic over one year. Visits begin at about 420 in January and rise slowly until March. They then climb steeply to a peak of roughly 880 in July, which is more than double the January figure. After that, the number falls steadily to around 450 in November. In conclusion, demand for the clinic is clearly highest in the middle of the year, during winter." },
        { image: { type: "pie", title: "How first-year students travel to campus", unit: "%", labels: ["Bus", "Train", "Car", "Bicycle", "Walking"], values: [34, 26, 22, 8, 10] }, prep: 25, answer: 40,
          points: ["Said it is a pie chart of how students travel to campus", "Named bus as the largest share, at 34 percent", "Named bicycle as the smallest share, at 8 percent", "Gave a conclusion, such as most students using public transport"],
          model: "This pie chart shows how first-year students travel to campus. The largest share, 34 percent, travel by bus, and a further 26 percent take the train. About one in five students, 22 percent, come by car. Walking accounts for 10 percent, while cycling is the least common at only 8 percent. Overall, public transport is used by well over half of the students, whereas active travel remains uncommon." },
        { image: { type: "bar", title: "Registered nurses per 1,000 people", unit: "nurses", labels: ["Country A", "Country B", "Country C", "Country D"], values: [12.4, 9.1, 5.3, 2.8] }, prep: 25, answer: 40,
          points: ["Said it is a bar chart comparing nurses per 1,000 people in four countries", "Named Country A as the highest, at about 12.4", "Named Country D as the lowest, at about 2.8", "Made a comparison, such as A having more than four times D"],
          model: "This bar chart compares the number of registered nurses per 1,000 people in four countries. Country A has the highest figure, at about 12.4, followed by Country B with roughly 9. Country C has just over 5, and Country D has the lowest, at 2.8. This means Country A has more than four times as many nurses for its population as Country D. In conclusion, access to nursing staff varies widely between these countries." }
      ]
    },
    {
      id: "rl", skill: "speaking", kind: "speak", name: "Re-tell Lecture",
      meta: ["Lecture up to 90 s", "10 s to prepare", "40 s to answer"],
      tips: [
        "Note key words only: the topic, two or three main points and the conclusion.",
        "Begin with 'The lecture was about…', then link your notes into full sentences.",
        "Cover the main ideas rather than repeating every detail. Content is checked for meaning."
      ],
      criteria: ["I spoke for most of the 40 seconds without long pauses", "I used my own linking words instead of reading notes as a list"],
      items: [
        { audio: "Today I want to talk about why we forget. In the eighteen eighties, a German psychologist called Hermann Ebbinghaus tested his own memory using lists of meaningless syllables. He found that forgetting is fastest straight after learning. Within an hour he had lost more than half of what he had studied, and after a day about two thirds. After that, the rate of loss slowed down. This pattern is known as the forgetting curve. The good news is that the curve can be flattened. Each time we review material, we forget it more slowly, so several short review sessions spread over days are far more effective than one long session the night before an exam.", prep: 10, answer: 40,
          points: ["The lecture is about memory and why we forget", "Ebbinghaus tested his own memory and described the forgetting curve", "Forgetting is fastest soon after learning, then slows", "Spaced review slows forgetting and beats one long session"],
          model: "The lecture was about why we forget. The speaker explained that a psychologist called Ebbinghaus tested his own memory and discovered the forgetting curve. He found that we lose information very quickly at first, more than half within an hour, and then the loss becomes slower. The speaker then said the curve can be flattened by reviewing. In conclusion, several short review sessions spread over days work better than one long session before an exam." },
        { audio: "Let's look at urban heat islands. Cities are often several degrees warmer than the countryside around them, especially at night. There are three main reasons. First, dark surfaces such as roads and roofs absorb sunlight during the day and release it slowly after sunset. Second, cities have fewer trees, so there is less shade and less cooling from evaporation. Third, vehicles, factories and air conditioners all release waste heat. The effect matters because heatwaves kill more people than any other natural hazard in many countries, and older residents are most at risk. Planners are responding by planting street trees, installing reflective roofs, and creating green corridors that let cooler air move through the city.", prep: 10, answer: 40,
          points: ["The lecture is about urban heat islands, where cities are warmer than the countryside", "Causes: dark surfaces, fewer trees and waste heat", "It matters because heatwaves are dangerous, especially for older people", "Solutions: street trees, reflective roofs and green corridors"],
          model: "The lecture was about urban heat islands, which means cities are warmer than the surrounding countryside, especially at night. The speaker gave three causes: dark surfaces that absorb heat, a lack of trees, and waste heat from vehicles and air conditioners. She said this is important because heatwaves are very dangerous, particularly for older people. Finally, she mentioned solutions such as planting trees, using reflective roofs and building green corridors." },
        { audio: "This morning's topic is the discovery of penicillin. In nineteen twenty-eight, Alexander Fleming returned from holiday to find that a mould had grown on one of his laboratory dishes, and that the bacteria around it had died. He published his finding, but he could not produce the substance in useful amounts, so it was largely ignored for a decade. It was a team at Oxford, led by Howard Florey and Ernst Chain, that worked out how to purify penicillin and test it on patients. During the Second World War, American factories then produced it on a massive scale. So the story is not really about one lucky accident. It shows that a discovery only changes medicine when others develop it and manufacture it.", prep: 10, answer: 40,
          points: ["The lecture is about the discovery of penicillin", "Fleming noticed mould killing bacteria in 1928 but could not produce it in quantity", "Florey and Chain's Oxford team purified and tested it, and it was mass-produced in the war", "The point: a discovery needs development and manufacturing to matter"],
          model: "The lecture was about the discovery of penicillin. The speaker said that in 1928 Fleming noticed a mould had killed bacteria in his laboratory, but he could not produce enough of it, so it was ignored for years. Later, a team at Oxford led by Florey and Chain purified it and tested it on patients, and it was mass-produced during the Second World War. The main message was that a discovery only matters when other people develop and manufacture it." }
      ]
    },
    {
      id: "asq", skill: "speaking", kind: "speak", name: "Answer Short Question",
      meta: ["Question of 3–9 s", "10 s to answer", "One word or a few words"],
      tips: [
        "Answer with one word or a short phrase. Full sentences earn nothing extra.",
        "Answer straight away. If you are unsure, give your best guess rather than staying silent.",
        "Build general vocabulary by topic: time, body, science, study and everyday objects."
      ],
      criteria: ["My answer matched the correct answer"],
      items: [
        { audio: "What do we call the document that lists the dishes available in a restaurant?", answer: 10, reveal: true, model: "A menu" },
        { audio: "Which organ pumps blood around the body?", answer: 10, reveal: true, model: "The heart" },
        { audio: "How many months are there in a year?", answer: 10, reveal: true, model: "Twelve" },
        { audio: "What do we call a person who studies the stars and planets?", answer: 10, reveal: true, model: "An astronomer" },
        { audio: "What is the opposite of expand?", answer: 10, reveal: true, model: "Contract (or shrink)" },
        { audio: "What instrument is used to measure body temperature?", answer: 10, reveal: true, model: "A thermometer" },
        { audio: "What do we call the list of sources at the end of an essay?", answer: 10, reveal: true, model: "A bibliography (or reference list)" },
        { audio: "Which season comes after summer?", answer: 10, reveal: true, model: "Autumn (or fall)" },
        { audio: "What do we call a period of ten years?", answer: 10, reveal: true, model: "A decade" },
        { audio: "What gas do humans need to breathe in to survive?", answer: 10, reveal: true, model: "Oxygen" },
        { audio: "What do we call the person in charge of a university department?", answer: 10, reveal: true, model: "The head of department (or dean)" },
        { audio: "If something is transparent, can you see through it?", answer: 10, reveal: true, model: "Yes" },
        { audio: "What do we call the money paid regularly to an employee?", answer: 10, reveal: true, model: "A salary (or wage)" },
        { audio: "Which part of a plant is usually below the ground?", answer: 10, reveal: true, model: "The roots" },
        { audio: "What do we call a doctor who performs operations?", answer: 10, reveal: true, model: "A surgeon" }
      ]
    },
    {
      id: "rts", skill: "speaking", kind: "speak", name: "Respond to a Situation",
      meta: ["Added to the test in 2025", "10 s to prepare", "40 s to answer"],
      tips: [
        "Speak directly to the person in the situation, as if they were in front of you.",
        "Cover three things: acknowledge the problem, say what you need or will do, and close politely.",
        "Match the tone to the person. A lecturer needs a more formal tone than a housemate."
      ],
      criteria: ["My tone suited the person I was speaking to", "I spoke for most of the 40 seconds without long pauses"],
      items: [
        { show: "You borrowed a classmate's lecture notes last week and promised to return them yesterday. You have just realised you left them on a bus. Your classmate has an exam on Friday. What would you say to your classmate?", audio: "You borrowed a classmate's lecture notes last week and promised to return them yesterday. You have just realised you left them on a bus. Your classmate has an exam on Friday. What would you say to your classmate?", prep: 10, answer: 40,
          points: ["Apologised and explained what happened", "Offered a practical solution before the exam", "Closed politely and took responsibility"],
          model: "Hi Sam, I'm really sorry, but I have some bad news about your lecture notes. I left them on the bus yesterday, and I know you need them for Friday's exam. I've already called the bus company's lost property office, and I'll check again this afternoon. In the meantime, I can send you photos of my own notes tonight, and I'll ask Priya for hers as well. I feel terrible about this, and I'll make sure you have everything you need by tomorrow." },
        { show: "You are a student. Your group presentation is tomorrow, and one member has not sent their slides or answered messages for three days. You meet your tutor in the corridor. What would you say to your tutor?", audio: "You are a student. Your group presentation is tomorrow, and one member has not sent their slides or answered messages for three days. You meet your tutor in the corridor. What would you say to your tutor?", prep: 10, answer: 40,
          points: ["Explained the problem clearly and politely", "Said what the group has already tried", "Asked for specific advice or a decision"],
          model: "Excuse me, Dr Lee, do you have a minute? I'd like to ask your advice about tomorrow's group presentation. One of our members hasn't sent his slides, and he hasn't replied to our messages for three days. We've tried emailing and calling him. The rest of us are ready, and we could cover his section if necessary. Would it be acceptable for us to present without him, or would you prefer us to request a short extension?" },
        { show: "You work part-time in a pharmacy. An elderly customer is upset because the medicine she ordered has not arrived, and she has only two tablets left. What would you say to the customer?", audio: "You work part-time in a pharmacy. An elderly customer is upset because the medicine she ordered has not arrived, and she has only two tablets left. What would you say to the customer?", prep: 10, answer: 40,
          points: ["Acknowledged her concern calmly", "Offered a concrete next step, such as checking another branch or asking the pharmacist", "Reassured her and said when she would hear back"],
          model: "I'm very sorry about this, Mrs Jones, and I understand why you're worried. Let me help you straight away. I'll check with our supplier to find out where your order is, and I'll also call our other branch to see whether they have it in stock. If they do, we can have it sent here today. I'll also ask the pharmacist to speak with you now, so that you don't run out. Could you take a seat for a few minutes while I do that?" },
        { show: "Your neighbour has been playing loud music late at night this week, and you have early morning shifts. You see your neighbour in the car park. What would you say to your neighbour?", audio: "Your neighbour has been playing loud music late at night this week, and you have early morning shifts. You see your neighbour in the car park. What would you say to your neighbour?", prep: 10, answer: 40,
          points: ["Raised the issue in a friendly way", "Explained the effect on you", "Suggested a reasonable compromise"],
          model: "Hi there, have you got a moment? I wanted to mention something, and I hope you don't mind. I've noticed music coming from your flat quite late this week. I'm on early shifts at the moment, so I have to be up at five, and it's been hard to sleep. Would it be possible to turn it down after ten on weeknights? I'm happy for you to have people over at the weekend. Thanks very much for understanding." }
      ]
    },
    {
      id: "sgd", skill: "speaking", kind: "speak", name: "Summarize Group Discussion",
      meta: ["Added to the test in 2025", "Discussion up to 3 min", "2 min to answer"],
      tips: [
        "Draw three columns, one per speaker, and note each person's main opinion and reason.",
        "Start with the topic, then give each speaker's view, and end with where they agreed.",
        "Use reporting verbs: argued, suggested, disagreed, pointed out, concluded."
      ],
      criteria: ["I reported the views in my own words with reporting verbs", "I kept speaking for at least a minute without long pauses"],
      items: [
        { audio: [
            { v: 0, t: "So, we need to decide how to run the study group this semester. I think we should meet in person in the library twice a week, like last year. I concentrate much better when we're in the same room." },
            { v: 1, t: "I see your point, but twice a week on campus is difficult for me. I work evenings, and the travel takes an hour each way. Could we meet online instead? We could record the sessions too, so anyone who misses one can catch up." },
            { v: 2, t: "I'm somewhere in the middle. Online is convenient, but people switch off their cameras and stop taking part. What about one session in person and one online each week?" },
            { v: 0, t: "That could work. If the in-person one is on Saturday morning, nobody has to rush from work." },
            { v: 1, t: "Saturday is fine for me. And I'm happy to set up the online link and the recordings for the midweek session." },
            { v: 2, t: "Great. Then let's also agree that everyone prepares one question before each meeting, so we don't waste time." },
            { v: 0, t: "Agreed. I'll book a library room for Saturday at ten." }
          ], prep: 10, answer: 120,
          points: ["Topic: how to organise the study group this semester", "First speaker wanted in-person library meetings because she concentrates better", "Second speaker preferred online because of work and travel, and offered to record sessions", "Third speaker suggested a mix because people take part less online", "They agreed on Saturday in person, one midweek session online and a question prepared beforehand"],
          model: "The discussion was about how to organise a study group this semester. The first speaker wanted to meet in person in the library twice a week, because she concentrates better face to face. The second speaker disagreed, explaining that he works in the evenings and travels a long way, so he suggested meeting online and recording the sessions. The third speaker pointed out that people take part less online, and proposed one in-person session and one online session each week. In the end, they all agreed on this compromise: they will meet in the library on Saturday mornings and online in the middle of the week, and everyone will prepare one question before each meeting." },
        { audio: [
            { v: 1, t: "The university is asking for feedback on the plan to remove printed textbooks from the library and replace them with e-books. Personally, I think it's a good idea. E-books never run out, and you can search them in seconds." },
            { v: 2, t: "I'm not convinced. I find it much harder to study from a screen for hours. My eyes get tired, and I remember less. I also like to write notes in the margins." },
            { v: 0, t: "There's a cost question as well. Not every student has a good laptop or a reliable internet connection at home. If everything goes digital, those students are at a disadvantage." },
            { v: 1, t: "That's fair. But the library could lend tablets, and most e-books can be downloaded for use offline." },
            { v: 2, t: "Maybe. I'd still want printed copies of the main textbooks for each course, even if the rest goes digital." },
            { v: 0, t: "I could support that. Keep the core texts in print, move everything else online, and use the money saved for loan devices." },
            { v: 1, t: "All right, let's put that in our feedback." }
          ], prep: 10, answer: 120,
          points: ["Topic: replacing printed library textbooks with e-books", "One speaker supported it because e-books are always available and searchable", "Another found screens tiring and prefers writing notes on paper", "Another raised unequal access to devices and internet", "They agreed to keep core texts in print, move the rest online and fund loan devices"],
          model: "The discussion was about a university plan to replace printed textbooks with e-books. The first speaker supported the plan, arguing that e-books are always available and easy to search. The second speaker disagreed, saying that reading on a screen is tiring, that she remembers less, and that she likes to write notes on paper. The third speaker raised the issue of fairness, pointing out that not all students have a good laptop or internet at home. The first speaker suggested lending tablets and downloading books for offline use. Finally, they agreed to recommend keeping the core textbooks in print, moving other books online, and spending the savings on loan devices." }
      ]
    },

    /* ------------------------------------------------------------- WRITING */
    {
      id: "swt", skill: "writing", kind: "write", name: "Summarize Written Text",
      meta: ["10 minutes", "One sentence, 5–75 words", "Scores Writing + Reading"],
      tips: [
        "Write one sentence only: one capital letter at the start and one full stop at the end.",
        "Find the main idea and two supporting points, then join them with 'and', 'which' or 'although'.",
        "Aim for 30 to 45 words. Check grammar and spelling in the last minute."
      ],
      items: [
        { minutes: 10, min: 5, max: 75, oneSentence: true,
          show: "For most of the twentieth century, hospitals treated visiting hours as a privilege to be rationed. Relatives were allowed in for an hour or two in the afternoon, on the assumption that visitors tired patients, spread infection and got in the way of staff. Over the past two decades that assumption has been tested, and largely overturned. Studies in intensive care units have found that patients whose families are present for longer experience less anxiety and confusion, and that infection rates do not rise when visitors follow hand hygiene rules. Families also notice small changes in a patient's condition and can pass on information that staff would otherwise lack. As a result, many hospitals now allow a nominated family member to stay at any hour. The change has not been without difficulty: nurses report that some relatives interrupt care or ask for constant updates, and shared rooms offer little privacy. Hospitals that have managed the shift best are those that set clear expectations for visitors at the start, rather than limiting the hours they may attend.",
          points: ["Hospitals used to restrict visiting hours", "Research shows longer family presence helps patients without raising infection", "There are difficulties, managed best by setting clear expectations"],
          model: "Although hospitals once restricted visiting hours in the belief that visitors harmed patients, research showing that family presence reduces anxiety and confusion without increasing infection has led many to allow relatives at any time, which works best when clear expectations are set for visitors." },
        { minutes: 10, min: 5, max: 75, oneSentence: true,
          show: "Bees are responsible for pollinating roughly a third of the food crops that humans eat, from almonds and apples to coffee. In recent years, beekeepers in many countries have reported losing an unusually high proportion of their colonies each winter. No single cause has been identified. Researchers point instead to a combination of pressures: a parasitic mite that spreads viruses between hives, pesticides that impair the bees' ability to navigate, and the loss of wildflower habitat as farms grow larger and more uniform. Each of these on its own might be survivable, but together they leave colonies too weak to last through the cold months. The consequences reach beyond honey production. Farmers who rely on pollination already pay to have hives transported to their fields, and those costs are rising. Some governments have responded by restricting certain pesticides and paying farmers to plant strips of flowers along field edges, measures that appear to help wild bee species as well as managed hives.",
          points: ["Bees pollinate a large share of food crops and colonies are declining", "The cause is a combination of mites, pesticides and habitat loss", "Governments are restricting pesticides and funding flower planting"],
          model: "Bee colonies, which pollinate about a third of food crops, are declining because of the combined effects of parasitic mites, pesticides and habitat loss, which raises costs for farmers and has led some governments to restrict pesticides and pay for wildflower planting." },
        { minutes: 10, min: 5, max: 75, oneSentence: true,
          show: "The idea that people learn best when taught in their preferred 'learning style', whether visual, auditory or hands-on, is one of the most widely held beliefs in education. Surveys suggest that more than four in five teachers accept it. Yet when psychologists have tested the claim directly, by matching or mismatching teaching methods to students' stated preferences, they have found no reliable improvement in results. What students prefer and what helps them learn turn out to be different things. The evidence points to a simpler conclusion: the best method depends on the subject, not the learner. Geography is easier to grasp with maps, and pronunciation with sound, whoever is being taught. Critics argue that the learning styles idea is not merely harmless. Time and money spent on classifying students could be used for approaches with much stronger support, such as regular low-stakes testing and spreading study over time. Labelling children may also discourage them from attempting subjects that do not suit their supposed style.",
          points: ["Learning styles are widely believed in by teachers", "Research finds no benefit from matching teaching to preferred style; the subject matters more", "The idea wastes resources and may limit students"],
          model: "Although most teachers believe that students learn best in their preferred learning style, research has found no benefit from matching teaching to these preferences because the best method depends on the subject, and critics argue that the idea wastes resources and may discourage students." }
      ]
    },
    {
      id: "we", skill: "writing", kind: "write", name: "Write Essay",
      meta: ["20 minutes", "200–300 words", "Scores Writing"],
      tips: [
        "Spend 2 minutes planning, 15 writing and 3 checking. Do not start without a plan.",
        "Use four paragraphs: introduction with your position, two body paragraphs with an example each, conclusion.",
        "Stay between 200 and 300 words. Outside that range you lose marks for form."
      ],
      items: [
        { minutes: 20, min: 200, max: 300,
          show: "Some people think that employers should allow staff to work from home whenever the job makes it possible. Others believe that working together in one place produces better results. Discuss both views and give your own opinion.",
          points: ["I stated my position in the introduction", "Each body paragraph has one main idea and an example", "I discussed both views, not only my own", "My conclusion restates my opinion without new ideas", "I checked spelling, plurals and verb endings"],
          model: "Plan. Introduction: both sides have merit, and a mix of the two is best. Body 1: home working saves travel time, allows concentration and widens the pool of people who can take a job; example of a parent or a carer. Body 2: shared workplaces build trust, make training easier and solve problems faster; example of a new graduate learning from colleagues. Conclusion: employers should offer flexibility but keep regular days together." },
        { minutes: 20, min: 200, max: 300,
          show: "In many countries, the average age of the population is rising. What problems does an ageing population cause, and what can governments do to address them?",
          points: ["I answered both parts of the question: problems and solutions", "Each body paragraph has one main idea and an example", "I linked my ideas with words such as however, therefore and as a result", "My conclusion summarises my answer", "I checked spelling, plurals and verb endings"],
          model: "Plan. Introduction: longer lives are an achievement, but they create pressures. Body 1, problems: more demand for health and aged care, fewer workers paying tax, and shortages of nurses and carers. Body 2, solutions: invest in prevention and community care, encourage later or part-time retirement, train and recruit more health workers. Conclusion: with planning, the costs can be managed." },
        { minutes: 20, min: 200, max: 300,
          show: "Some universities now deliver most of their courses online. Do the advantages of online study outweigh the disadvantages?",
          points: ["I gave a clear answer to 'do the advantages outweigh'", "Each body paragraph has one main idea and an example", "I considered the other side before rejecting it", "My conclusion restates my opinion without new ideas", "I checked spelling, plurals and verb endings"],
          model: "Plan. Introduction: state clearly whether advantages outweigh disadvantages. Body 1, advantages: flexibility for people who work, lower costs, access for students in remote areas. Body 2, disadvantages: less contact with teachers and classmates, practical skills are hard to teach, more self-discipline needed; example of a nursing student who needs clinical practice. Conclusion: advantages outweigh for theory, but practical courses need time on campus." },
        { minutes: 20, min: 200, max: 300,
          show: "Governments should spend more money on preventing illness than on treating it. To what extent do you agree or disagree?",
          points: ["I said how far I agree in the introduction", "Each body paragraph has one main idea and an example", "I explained why, not only what", "My conclusion restates my opinion without new ideas", "I checked spelling, plurals and verb endings"],
          model: "Plan. Introduction: largely agree, although treatment cannot be neglected. Body 1: prevention such as vaccination, screening and health education costs less than treating advanced disease; example of smoking campaigns. Body 2: people who are already ill still need hospitals, and results from prevention take years to appear. Conclusion: shift the balance towards prevention while protecting essential treatment." },
        { minutes: 20, min: 200, max: 300,
          show: "Many young people now move abroad to work. What are the benefits and drawbacks of this for the individual and for their home country?",
          points: ["I covered both the individual and the home country", "Each body paragraph has one main idea and an example", "I linked my ideas with words such as however, therefore and as a result", "My conclusion summarises my answer", "I checked spelling, plurals and verb endings"],
          model: "Plan. Introduction: migration for work brings gains and losses on both sides. Body 1, individual: higher pay, new skills and experience, but distance from family and the stress of adapting. Body 2, home country: money sent home and skills brought back, but a loss of trained workers such as nurses and doctors. Conclusion: the benefits are greater when workers keep links with home and can return." }
      ]
    },

    /* ------------------------------------------------------------- READING */
    {
      id: "rwfib", skill: "reading", kind: "fibSelect", name: "Reading & Writing: Fill in the Blanks",
      meta: ["Drop-down list for each blank", "Scores Reading + Writing", "About 2 minutes each"],
      tips: [
        "Read the whole sentence, not just the words beside the blank.",
        "Decide what part of speech the blank needs before you open the list.",
        "Learn collocations, words that normally go together, such as 'play a role' or 'carry out research'."
      ],
      items: [
        { text: "Vaccination works by training the immune system to {{recognise|recognising|recognition|recognisable}} a particular germ without causing the disease itself. When a vaccinated person later {{encounters|counters|accounts|encourages}} the real germ, the body responds quickly. If enough people in a community are vaccinated, the germ cannot spread {{easily|easy|ease|easier}}, which also protects those who are too young or too ill to be vaccinated. This effect is {{known|called|named|said}} as herd immunity.",
          explain: "'To' needs the base verb recognise. A person 'encounters' a germ. 'Spread' is a verb, so it takes the adverb easily. The fixed phrase is 'known as'." },
        { text: "Rising sea levels pose a serious {{threat|treat|thread|theft}} to coastal cities. Engineers have traditionally {{relied|replied|relayed|reminded}} on sea walls to hold back the water, but these are costly to build and maintain. A growing number of cities are {{therefore|however|although|whereas}} restoring natural barriers such as wetlands, which absorb the energy of waves and {{provide|prevent|protect|produce}} a habitat for wildlife.",
          explain: "'Pose a threat' is a collocation. 'Relied on' takes the preposition on. 'Therefore' shows a result. Wetlands 'provide a habitat'." },
        { text: "The way a question is worded can strongly {{influence|influenced|influential|influencing}} the answer people give. In one well-known experiment, people who were told that a treatment had a ninety percent survival rate were far more likely to {{choose|chose|choice|chosen}} it than those told it had a ten percent death rate, {{although|because|unless|so}} the two statements mean exactly the same thing. Psychologists {{refer|prefer|defer|infer}} to this as the framing effect.",
          explain: "'Can' is followed by the base verb influence. 'Likely to' takes the base verb choose. 'Although' introduces the contrast. The phrase is 'refer to this as'." }
      ]
    },
    {
      id: "rmcm", skill: "reading", kind: "mcq", name: "Reading: Multiple Choice, Multiple Answers",
      meta: ["More than one answer is correct", "Wrong choices lose a mark", "Scores Reading"],
      tips: [
        "Read the question first, then scan the text for each option.",
        "Choose only the options you can point to in the text. A wrong choice cancels a right one.",
        "Watch for options that are true in general but not stated in the passage."
      ],
      items: [
        { multi: true, passage: "Shift work disrupts the body's internal clock, which is set mainly by light. People who work at night are trying to stay alert when their bodies are preparing for sleep, and to sleep when daylight is signalling them to wake. Over the long term, night workers have higher rates of heart disease and digestive problems. Employers can reduce the harm in several ways. Rosters that rotate forwards, from morning to evening to night, are easier to adjust to than those that rotate backwards. Short naps during breaks improve alertness, and bright lighting in the workplace helps to delay sleepiness. Workers themselves are advised to keep their bedrooms dark and to avoid caffeine in the second half of a shift.",
          q: "According to the passage, which of the following help to reduce the harm caused by night work?",
          options: ["Rosters that rotate forwards", "Short naps during breaks", "Drinking coffee near the end of a shift", "Bright lighting in the workplace", "Sleeping with the curtains open"],
          correct: [0, 1, 3],
          explain: "The passage names forward-rotating rosters, short naps and bright workplace lighting. It advises against caffeine late in a shift and recommends a dark bedroom." },
        { multi: true, passage: "The first public libraries in Britain were established in the middle of the nineteenth century, paid for by a small local tax. Their supporters argued that free access to books would improve the skills of working people and draw them away from public houses. Opponents feared the cost and doubted that labourers wished to read. Early libraries were cautious. Many kept their books behind a counter, so that readers had to request each volume from a member of staff, and some refused to stock novels on the grounds that fiction was a waste of time. It was only towards the end of the century that open shelves became common and that children were admitted to their own reading rooms.",
          q: "Which of the following statements are supported by the passage?",
          options: ["Early public libraries were funded by local taxation", "Everyone agreed that libraries were a good idea", "Readers in early libraries could not always browse the shelves", "Some libraries did not stock novels", "Children had their own reading rooms from the beginning"],
          correct: [0, 2, 3],
          explain: "The text states the local tax, the books kept behind a counter and the refusal to stock novels. Opponents existed, and children's rooms came only towards the end of the century." }
      ]
    },
    {
      id: "ro", skill: "reading", kind: "reorder", name: "Re-order Paragraphs",
      meta: ["Put the sentences in order", "Marked on each correct pair", "Scores Reading"],
      tips: [
        "Find the opening sentence first. It introduces the topic and does not refer back to anything.",
        "Use pronouns and linking words as clues: 'this', 'they', 'however' and 'as a result' all point backwards.",
        "Each correct neighbouring pair earns a mark, so a partly correct order still scores."
      ],
      items: [
        { paras: [
            "In 1854, a severe outbreak of cholera struck the Soho district of London.",
            "At the time, most doctors believed the disease was spread by bad air.",
            "A physician named John Snow doubted this, and marked each death on a street map.",
            "The map showed that the cases were clustered around a single water pump.",
            "When the handle of that pump was removed, the outbreak quickly came to an end."
          ], explain: "The date and place open the story. 'The disease' refers back to cholera, 'this' to the bad air theory, 'the map' to Snow's map and 'that pump' to the single pump." },
        { paras: [
            "Coral reefs cover less than one percent of the ocean floor.",
            "Despite this small area, they support about a quarter of all marine species.",
            "These species depend on tiny algae that live inside the coral and give it colour.",
            "When the water becomes too warm, the coral expels the algae and turns white.",
            "If the temperature stays high for several weeks, the bleached coral dies."
          ], explain: "'This small area' refers to the first sentence, 'these species' to the second, 'the algae' to the third and 'the bleached coral' to the fourth." },
        { paras: [
            "Many students highlight their textbooks in the belief that it helps them remember.",
            "However, research suggests that highlighting on its own has little effect.",
            "The reason is that it requires almost no mental effort.",
            "A more effective method is to close the book and write down what you recall.",
            "This forces the brain to retrieve the information, which strengthens the memory."
          ], explain: "'However' contrasts with the belief, 'the reason' explains the little effect, 'a more effective method' offers the alternative and 'this' refers to writing from recall." }
      ]
    },
    {
      id: "rfib", skill: "reading", kind: "fibBank", name: "Reading: Fill in the Blanks",
      meta: ["Choose from a word bank", "More words than blanks", "Scores Reading"],
      tips: [
        "Check the grammar around the blank: article, plural, verb form or adjective.",
        "Fill the blanks you are sure of first, which narrows the bank for the rest.",
        "Read the finished text once to check that it makes sense."
      ],
      items: [
        { text: "The human heart beats about one hundred thousand times a day. Each beat is {{triggered}} by an electrical signal that starts in the upper chambers and travels down to the lower ones, causing the muscle to {{contract}}. Doctors can record these signals from the {{surface}} of the skin, and the pattern they produce helps to {{identify}} problems with the heart's rhythm.",
          extra: ["delayed", "expand", "identity"],
          explain: "A beat is 'triggered by' a signal. The muscle 'contracts'. Signals are recorded from the 'surface' of the skin. 'Helps to' needs the base verb 'identify'." },
        { text: "Writing a literature review involves more than listing what others have said. A good review {{compares}} the findings of different studies, points out where they {{disagree}} and explains why. It should also make clear what remains {{unknown}}, since this gap is usually the {{justification}} for the new research.",
          extra: ["compare", "certain", "justify"],
          explain: "'A good review' is singular, so the verb is 'compares'. Studies 'disagree'. What 'remains unknown' is the gap. 'The' needs a noun: 'justification'." },
        { text: "Cities produce large amounts of food waste, most of which ends up in landfill, where it {{releases}} methane as it breaks down. Some councils now collect this waste {{separately}} and turn it into compost or energy. These schemes work best when residents are given clear {{instructions}} and when collections are {{frequent}} enough to prevent smells.",
          extra: ["release", "separate", "rarely"],
          explain: "'It' is singular, so 'releases'. 'Collect' is modified by the adverb 'separately'. 'Clear' needs the noun 'instructions'. Collections must be 'frequent' enough." }
      ]
    },
    {
      id: "rmcs", skill: "reading", kind: "mcq", name: "Reading: Multiple Choice, Single Answer",
      meta: ["One answer is correct", "No marks lost for a wrong choice", "Scores Reading"],
      tips: [
        "Identify what the question asks for: the main idea, a detail, the writer's purpose or an inference.",
        "Eliminate options that are too broad, too narrow or not mentioned.",
        "Never leave it blank. There is no penalty for a wrong answer here."
      ],
      items: [
        { passage: "When the first railways were built, each town kept its own local time, set by the position of the sun. The difference between two towns might be only a few minutes, which hardly mattered when the fastest journey was by horse. Trains changed that. A timetable was useless if the clock at one station disagreed with the clock at the next, and several accidents were blamed on the confusion. Railway companies therefore began to run their services on a single standard time, and within a few decades governments had adopted it for everyone.",
          q: "What is the main point of the passage?",
          options: ["Early trains were dangerous because they were too fast", "Railways led to the adoption of standard time", "Towns once set their clocks by the sun", "Governments were slow to regulate the railways"],
          correct: [1],
          explain: "The passage explains how the needs of railway timetables led to a single standard time. The other options are details or are not stated." },
        { passage: "It is often assumed that multitasking is a skill that improves with practice. Laboratory studies suggest otherwise. When people attempt two demanding tasks at once, they do not perform them at the same moment but switch rapidly between them, and each switch carries a small cost in time and accuracy. People who describe themselves as frequent multitaskers turn out to be worse, not better, at ignoring distractions. The feeling of efficiency that multitasking gives seems to be an illusion.",
          q: "What does the writer suggest about people who multitask frequently?",
          options: ["They have trained themselves to work faster", "They are less able to ignore distractions", "They make fewer errors than other people", "They feel less efficient than they really are"],
          correct: [1],
          explain: "The text says frequent multitaskers are 'worse, not better, at ignoring distractions'." },
        { passage: "The introduction of the potato to Europe in the sixteenth century was at first greeted with suspicion. It was not mentioned in the Bible, it grew underground, and its leaves were poisonous. For two hundred years it was fed mainly to animals. Attitudes shifted when repeated grain failures showed that the potato could produce far more food per field than wheat, and could be stored through the winter. By the nineteenth century it had become the main food of the poor in much of northern Europe.",
          q: "Why did attitudes towards the potato change?",
          options: ["It was found to be safe for animals", "Religious leaders began to recommend it", "It proved more productive than grain when harvests failed", "Its leaves were discovered to be edible"],
          correct: [2],
          explain: "Attitudes shifted 'when repeated grain failures showed that the potato could produce far more food per field than wheat'." }
      ]
    },

    /* ----------------------------------------------------------- LISTENING */
    {
      id: "sst", skill: "listening", kind: "write", name: "Summarize Spoken Text",
      meta: ["10 minutes", "50–70 words", "Scores Listening + Writing"],
      tips: [
        "Take notes while you listen: topic, three or four key points and any conclusion.",
        "Write two or three full sentences in your own words.",
        "Stay between 50 and 70 words, and leave a minute to check spelling and grammar."
      ],
      items: [
        { minutes: 10, min: 50, max: 70,
          audio: "I'd like to explain what we mean by the placebo effect. A placebo is a treatment with no active ingredient, such as a sugar pill. In clinical trials, patients who are given a placebo often report that they feel better, sometimes a great deal better. This is not simply imagination. Brain scans show that when people expect pain relief, the brain releases its own pain-killing chemicals. The effect is strongest for symptoms such as pain, nausea and fatigue, and much weaker for things we can measure objectively, like the size of a tumour. Interestingly, the way a treatment is delivered matters. Injections produce a stronger effect than tablets, and a warm, confident clinician produces a stronger effect than a hurried one. That last point is worth remembering, because it means the way we communicate with patients is itself part of the treatment.",
          points: ["A placebo has no active ingredient, yet patients often feel better", "Expectation makes the brain release its own pain-relieving chemicals", "It works best for symptoms like pain and nausea, not measurable disease", "Delivery and the clinician's manner affect its strength"],
          model: "The lecture explained the placebo effect, in which patients feel better after a treatment with no active ingredient. This occurs because expecting relief causes the brain to release its own pain-killing chemicals. The effect is strongest for symptoms such as pain and nausea, and it increases when treatment is delivered by injection or by a warm, confident clinician, which shows that communication is part of treatment." },
        { minutes: 10, min: 50, max: 70,
          audio: "Let me say a few words about why cities are returning to the tram. In the nineteen fifties, most cities in Europe, America and Australia tore up their tram lines to make room for cars, which were seen as the future. The result, a generation later, was congestion and polluted air. Since the nineteen eighties, many of those same cities have been laying new tracks. Modern trams have several advantages. A single tram carries as many people as around a hundred and fifty cars. They run on electricity, so they produce no fumes in the street. And because the tracks are permanent, businesses are more willing to invest along the route than they are beside a bus line, which could be moved at any time. The main disadvantage is the cost of construction, which is high, and the disruption while the lines are being built.",
          points: ["Cities removed trams in the 1950s to make room for cars", "Congestion and pollution led cities to bring trams back", "Advantages: high capacity, no street-level fumes, and investment along fixed routes", "Disadvantage: high construction cost and disruption"],
          model: "The speaker explained that many cities removed their trams in the 1950s to make room for cars, but have rebuilt them since the 1980s because of congestion and pollution. Modern trams carry large numbers of passengers, produce no fumes in the street and attract business investment because their routes are permanent. However, they are expensive to build and construction causes disruption." }
      ]
    },
    {
      id: "lmcm", skill: "listening", kind: "mcq", name: "Listening: Multiple Choice, Multiple Answers",
      meta: ["More than one answer is correct", "Wrong choices lose a mark", "Scores Listening"],
      tips: [
        "Read the question and options before the audio begins.",
        "Tick options as you hear them supported. Do not rely on memory at the end.",
        "A wrong choice loses a mark, so only select what you actually heard."
      ],
      items: [
        { multi: true,
          audio: "Welcome to the university library orientation. A few practical points. Undergraduates can borrow up to fifteen books at a time, for three weeks. You can renew a loan online twice, unless another reader has requested the book. The silent study area is on the top floor, and group study rooms on the ground floor can be booked for up to two hours a day through the library website. Food is not allowed anywhere in the building, but drinks with a lid are fine. Finally, the library is open until midnight during the examination period, and until nine in the evening at other times.",
          q: "Which of the following statements are true, according to the speaker?",
          options: ["Loans can be renewed online", "Group study rooms are on the top floor", "Drinks with a lid are permitted", "The library opens until midnight during exams", "Undergraduates may borrow books for six weeks"],
          correct: [0, 2, 3],
          explain: "The speaker says loans can be renewed online twice, drinks with a lid are fine and the library opens until midnight in the exam period. Group rooms are on the ground floor, and loans last three weeks." },
        { multi: true,
          audio: "Researchers who study happiness have reached some conclusions that surprise people. Beyond the point where basic needs are met, extra income adds very little to daily mood. What does make a difference is how money is spent. People who spend on experiences, such as travel or a meal with friends, report more lasting satisfaction than those who buy objects. Spending on other people has a similar effect. The quality of close relationships turns out to be the strongest predictor of all. And, perhaps unexpectedly, a short commute matters more than a larger house.",
          q: "According to the speaker, which factors are associated with greater happiness?",
          options: ["Spending money on experiences", "Earning a very high income", "Having good close relationships", "Owning a larger house", "Having a short journey to work"],
          correct: [0, 2, 4],
          explain: "The speaker mentions experiences, close relationships and a short commute. Extra income adds little, and a short commute matters more than a larger house." }
      ]
    },
    {
      id: "lfib", skill: "listening", kind: "fibType", name: "Listening: Fill in the Blanks",
      meta: ["Type the missing words", "Spelling must be correct", "Scores Listening + Writing"],
      tips: [
        "Read the text quickly before the audio so you know where the blanks fall.",
        "Type or note each word as you hear it, then tidy your spelling afterwards.",
        "Check plurals and tenses against the grammar of the sentence."
      ],
      items: [
        { text: "Before your placement begins, you will need to complete an online {{induction}}. This covers health and safety, {{confidentiality}} and how to report an incident. You must also provide {{evidence}} of your immunisations, and your {{supervisor}} will contact you with your roster." },
        { text: "The Great Barrier Reef stretches for more than two thousand {{kilometres}} along the coast of Queensland. It is made up of nearly three thousand {{individual}} reefs and is home to an enormous {{variety}} of fish. In recent years, rising sea {{temperatures}} have caused repeated bleaching." },
        { text: "When you write a report, begin with a short {{summary}} of your main findings. The body should present your {{evidence}} in a logical order, using headings to guide the reader. End with clear {{recommendations}}, and list all your {{references}} at the back." }
      ]
    },
    {
      id: "hcs", skill: "listening", kind: "mcq", name: "Highlight Correct Summary",
      meta: ["Choose the best summary", "One answer is correct", "Scores Listening + Reading"],
      tips: [
        "Note the main idea and two supporting points while you listen.",
        "Reject summaries that add information, reverse a point or cover only a detail.",
        "The correct summary covers the whole recording, not only its beginning."
      ],
      items: [
        { audio: "Many people assume that the more choices we have, the happier we are. A famous experiment in a supermarket tested this. On some days, shoppers were offered samples of twenty-four kinds of jam, and on other days only six. The large display attracted more people, but only three percent of them went on to buy a jar. With the small display, thirty percent bought one. The researchers concluded that too much choice can be overwhelming. Faced with many options, people worry about choosing wrongly, and often decide not to choose at all.",
          q: "Which summary best matches the recording?",
          options: [
            "An experiment with jam showed that shoppers prefer large displays and buy more when they have many options to choose from.",
            "An experiment with jam showed that although a large range attracts attention, people are far more likely to buy when offered fewer options, because too much choice is overwhelming.",
            "Researchers found that supermarkets sell more jam when samples are offered, whatever the number of varieties on display.",
            "A study showed that most shoppers dislike jam samples and prefer to choose products without help."
          ],
          correct: [1],
          explain: "The large display attracted more people, but far fewer bought. The conclusion was that too much choice can stop people choosing." },
        { audio: "For a long time, scientists believed that the adult brain could not change. You were born with a fixed number of brain cells, and from early adulthood it was all decline. We now know this is wrong. Studies of London taxi drivers, who must memorise thousands of streets, found that the part of the brain used for navigation was larger than average, and larger still in those who had driven for longest. Learning a musical instrument or a second language produces similar changes. The brain, in other words, reshapes itself in response to what we ask it to do, at any age.",
          q: "Which summary best matches the recording?",
          options: [
            "Scientists have shown that the adult brain cannot change, which explains why skills such as navigation decline with age.",
            "London taxi drivers are born with larger brains than other people, which is why they are able to memorise so many streets.",
            "It was once thought that the adult brain was fixed, but studies of taxi drivers, musicians and language learners show that it changes in response to learning at any age.",
            "Learning a second language is the most effective way to increase the size of the brain in adulthood."
          ],
          correct: [2],
          explain: "The recording contrasts the old belief with evidence from taxi drivers, musicians and language learners that the brain reshapes itself at any age." }
      ]
    },
    {
      id: "lmcs", skill: "listening", kind: "mcq", name: "Listening: Multiple Choice, Single Answer",
      meta: ["One answer is correct", "No marks lost for a wrong choice", "Scores Listening"],
      tips: [
        "Read the question before the audio so you know what to listen for.",
        "Listen for the speaker's main point or attitude, not single words that match an option.",
        "Always answer. There is no penalty for a wrong choice here."
      ],
      items: [
        { audio: "Thanks for coming in. I've read your draft, and the research is thorough. You've clearly spent a lot of time in the library. My concern is the structure. At the moment, you describe each study one after another, and the reader has to work out how they connect. I'd like you to reorganise it by theme, and to say at the start of each section what your argument is. The content is there. It just needs shaping.",
          q: "What is the tutor's main criticism of the draft?",
          options: ["There is not enough research", "The writing contains too many errors", "The organisation makes the argument hard to follow", "The topic is too broad"],
          correct: [2],
          explain: "The tutor praises the research and says 'my concern is the structure', asking the student to reorganise by theme." },
        { audio: "A quick announcement about Thursday's field trip. The coach will now leave at seven thirty, not eight, because of roadworks on the motorway. Please be at the main gate by seven fifteen. Bring waterproof clothing and sturdy shoes, as we'll be walking on wet ground. Lunch is provided, but you'll need your own water bottle. We expect to be back on campus by about five.",
          q: "Why has the departure time changed?",
          options: ["The coach company made an error", "There are roadworks on the route", "The weather forecast is poor", "The site closes early on Thursdays"],
          correct: [1],
          explain: "The coach leaves earlier 'because of roadworks on the motorway'." }
      ]
    },
    {
      id: "smw", skill: "listening", kind: "mcq", name: "Select Missing Word",
      meta: ["The ending is replaced by a beep", "One answer is correct", "Scores Listening"],
      tips: [
        "Follow the direction of the argument. The missing words must complete it logically.",
        "Listen for signal words near the end, such as 'but', 'so' or 'which means'.",
        "Rule out options that are on topic but contradict what was said."
      ],
      items: [
        { audio: "When we are dehydrated, even slightly, our concentration suffers. In one study, students who drank water before a test performed better than those who did not. So if you have an exam coming up, it is a good idea to bring", beep: true,
          q: "Which words complete the recording?",
          options: ["a bottle of water", "a warm jacket", "an extra pen", "a friend with you"],
          correct: [0],
          explain: "The speaker has been explaining that drinking water improves performance in tests." },
        { audio: "Electric cars produce no exhaust fumes, which is good news for the air in our cities. However, the electricity they use has to come from somewhere. If it is generated by burning coal, then the pollution has not disappeared. It has simply been", beep: true,
          q: "Which words complete the recording?",
          options: ["made more expensive", "moved somewhere else", "removed completely", "turned into fuel"],
          correct: [1],
          explain: "The pollution 'has not disappeared', so it has been moved to where the electricity is generated." },
        { audio: "New graduates often expect to feel confident on their first day at work. In reality, most professionals say it took them at least a year to feel competent. Feeling uncertain at the start does not mean you chose the wrong career. It means you are still", beep: true,
          q: "Which words complete the recording?",
          options: ["looking for a job", "waiting for a promotion", "learning", "at university"],
          correct: [2],
          explain: "The speaker's point is that uncertainty is a normal part of learning a new role." }
      ]
    },
    {
      id: "hiw", skill: "listening", kind: "hiw", name: "Highlight Incorrect Words",
      meta: ["Tap words that differ from the audio", "Wrong taps lose a mark", "Scores Listening + Reading"],
      tips: [
        "Follow the text with your eyes at the speed of the speaker. Do not read ahead.",
        "Tap a word the moment it differs, and keep moving.",
        "Do not guess. Every wrong tap takes away a mark."
      ],
      items: [
        { text: "Regular physical activity has [[benefits|effects]] that go well beyond weight control. It lowers blood pressure, improves mood and helps people sleep more [[deeply|quickly]]. Adults are advised to do at least thirty minutes of [[moderate|gentle]] exercise on most days, and even a brisk walk [[counts|helps]]." },
        { text: "The university was [[founded|opened]] in eighteen fifty-three and now has more than forty thousand students. Its main [[campus|building]] is close to the city centre, and most departments are within walking [[distance|range]] of the central library, which holds over three [[million|thousand]] books." },
        { text: "Plastic takes hundreds of years to break down, and much of it ends up in the [[ocean|river]]. There it is eaten by fish and birds, which [[mistake|take]] it for food. Recycling helps, but the most effective [[solution|answer]] is to produce less plastic in the first [[place|instance]]." }
      ]
    },
    {
      id: "wfd", skill: "listening", kind: "wfd", name: "Write from Dictation",
      meta: ["Type the sentence you hear", "One mark per correct word", "Scores Listening + Writing"],
      tips: [
        "Write the sentence as you hear it, then fix spelling and capital letters.",
        "Every correct word earns a mark, so type whatever you caught.",
        "This task carries a lot of weight for both Listening and Writing. Practise it daily."
      ],
      items: [
        { audio: "The lecture will begin at nine o'clock tomorrow morning." },
        { audio: "All assignments must be submitted through the online portal." },
        { audio: "Most students find the second year more demanding." },
        { audio: "The laboratory is closed for maintenance until Friday." },
        { audio: "Good time management is essential for academic success." },
        { audio: "Please read the first three chapters before the seminar." },
        { audio: "The results were consistent with earlier studies." },
        { audio: "Students may borrow up to ten books at a time." },
        { audio: "Nutrition plays an important role in recovery." },
        { audio: "The deadline has been extended by one week." },
        { audio: "Visitors must sign in at the reception desk." },
        { audio: "Further information is available on the department website." }
      ]
    }
  ]
};
