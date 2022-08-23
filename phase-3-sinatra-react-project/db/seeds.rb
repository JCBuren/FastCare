puts "🌱 Seeding spices..."

##Patient Seeds

patient1 = Patient.create(
    firstname: "Jordan",
    lastname: "Buren",
    dob: "12/31/1989",
    email: "Test@Test.com",
    location: "South Dakota"
    
)


##Provider Seeds

provider1 = Provider.create(
    name: "Starlet D. Kerner",
    practice_type: "Family Physician",
    image_url: "https://i.gyazo.com/aa495abb5faeab3433eec56bfbd5ac81.png",
    bio: "Hello, I’m Dr. Kerner. I am a board certified Family Medicine doctor. I have enjoyed working Emergency Medicine and Urgent Care. I look forward to helping you with your medical problem. Please feel free to contact me!",
    languages: "English"
)

provider2 = Provider.create(
    name: "Jeremy Stueven",
    practice_type: "Emergency Medicine",
    image_url: "https://i.gyazo.com/91dd90b0a143b42932ccd84241d5feed.png",
    bio: "Hello! My name is Dr. Jeremy Stueven, I’m a board-certified Emergency Medicine Physician. I’m happy to help you today with any of your healthcare concerns!",
    languages: "English, Spanish"
)
provider3 = Provider.create(
    name: "Rasai Ernst",
    practice_type: "Family Physician",
    image_url: "https://i.gyazo.com/37c8914cdc12836a16cb3dabff1270d9.png",
    bio: "Dr. Ernst is a Board Certified Family Physician who cares for patients of all ages. She believes that health is the foundation of a fulfilling, happy life and enjoys partnering with her patients to maximize their health in order to achieve ultimate wellness.",
    languages: "English"
)

provider4 = Provider.create(
    name: "Ingrid Antall",
    practice_type: "Family Physician",
    image_url: "https://i.gyazo.com/623010e3bd6c59a9614959fb2a2311c0.png",
    bio: "My name is Dr Ingrid Antall. I am a family physician. I enjoy the primary care aspects of family medicine including treating diabetes and hypertension, but also enjoy helping you with any urgent care issues you may have. I look forward to listening to your concerns and helping you with your health care needs!",
    languages: "English"
)

provider5 = Provider.create(
    name: "Sherri DeHaas",
    practice_type: "Family Physician",
    image_url: "https://i.gyazo.com/738bf66fe9be8fe7aca6c067c6e77f53.png",
    bio: "My name is Dr. DeHaas. I'm here to provide you with great medical care. I have been taking care of families, from newborns to the elderly. If you are not feeling well, have a question, or just need to talk to a doctor, I am here to help!",
    languages: "English, Spanish"
)

provider6 = Provider.create(
    name: "Bryant Pierce",
    practice_type: "Emergency Medicine",
    image_url: "https://i.gyazo.com/6d2733c65e794f2be1e96f49b9728d30.png",
    bio: "Welcome! I am delighted to have this chance to meet you and assist with your medical care. I have a great deal of experience in Emergency Medicine. I love my specialty because we are dedicated to giving you answers and treatment plans for many different types of problems at any time of day or night. I promise to listen closely to your concerns and to do my best to help you to better health.",
    languages: "English"
)

provider7 = Provider.create(
    name: "David Dahl",
    practice_type: "Family Physician",
    image_url: "https://i.gyazo.com/b185ec9480690a83447ec49343eb6e73.png",
    bio: "Hello, welcome to the future of medicine. I'm Dr. Dahl. I am a Board Certified Family Physicians who cares for newborns through to the retirement home. I am excited to help you with your medical issue while you remain in the comfort and convenience of your own home, office, car, vacation, or wherever else you may be.",
    languages: "English"
)

provider8 = Provider.create(
    name: "Rasai Ernst",
    practice_type: "Family Physician",
    image_url: "https://i.gyazo.com/4ad7d1939e79a3e8d2e839a1fab17af8.png",
    bio: "Welcome! I’m Dr. Keegan Duchicela, and I’m a board certified family medicine physician with a special interest in nutrition, weight loss and preventative care. In addition to seeing my own patients, I teach medical students and residents. I enjoy taking care of people of all ages, and value relationships built on respect and shared decision making. I look forward to helping you feel better and stay healthy!",
    languages: "English"
)

provider9 = Provider.create(
    name: "Samdolf The Wise",
    practice_type: "Wizardry, Therapy",
    image_url: "https://ca.slack-edge.com/T02MD9XTF-U018W9H54N6-38321cb359b0-512",
    bio: "As as Wise man once said... you are doing better than you think",
    languages: "Yes"
)

puts "✅ Done seeding!"
