// EDIT THIS FILE to update the website. Leave a value empty ("") to hide it.
// Put photos in /public/images and reference them like "/images/hero.webp".
export const academy = {
  name: 'Shyamnagar Adibasi Unite Football Academy',
  location: 'Shyamnagar, Hooghly, West Bengal, India',
  videoId: 'O5HCEQVnY-k',
  contact: { email: '', phone: '' },
  social: { facebook: '', instagram: '', youtube: '', x: '' }, // hidden until filled
  whatsapp: '919874801941', // country code + number, digits only, e.g. "919876543210". When set, the contact form sends messages to this WhatsApp number
  formEndpoint: '', // e.g. a Formspree/Getform URL. Empty = form shows a "not connected" notice
  adsenseClient: '', // add only after AdSense approval
  kolkataOpen: true, // shows the "Opening soon in Kolkata" badge in the hero
  logo: '/images/logo.png',
  images: {
    hero: '/images/photos/cheque-portrait.jpg',
    intro: '/images/photos/team-grey-1.jpg',
    story: ['/images/photos/team-orange.jpg', '/images/photos/team-grey-2.jpg', '/images/photos/medal-ceremony.jpg', '/images/photos/celebration.jpg'],
    achievement: '/images/photos/team-grey-1.jpg',
  },
}
export const achievement = {
  achievement: 'India U-19 National Team Representation',
  playerName: '', year: '', position: '', photo: '', verifiedDetails: '', story: '',
}
export const players = [
  // { name:'', position:'', ageCategory:'', photo:'', story:'', achievements:'' }
  // Publish only with written permission (and guardian consent for minors).
]
export const competitions = [
  { title: 'Football Championship — First Runners-up', year: '2026-27', category: 'Under-8', result: 'Prize ₹10,000', photo: '/images/photos/runners-up-kneel.jpg', description: 'Reliance Foundation Youth Sports Football Championship: our Under-8 team finished as First Runners-up and received medals and the prize cheque on the field.' },
  { title: 'Player of the Match', year: '2026-27', category: 'Under-8', result: '', photo: '/images/photos/cheque-portrait.jpg', description: 'One of our young players was named Player of the Match during the championship.' },
  { title: 'Reliance Foundation Development League', year: '', category: 'Girls team', result: '', photo: '/images/photos/team-grey-2.jpg', description: 'Our girls squad lined up in the academy kit at a Reliance Foundation Youth Sports venue. Add the verified year and result in academyData.js.' },
  { title: 'Player development', year: '', category: '', result: '', photo: '/images/photos/team-orange.jpg', description: 'Team time with our coaches: confidence, discipline and teamwork on and off the pitch.' },
]
export const gallery = [
  { src: '/images/photos/runners-up-kneel.jpg', alt: 'Under-8 team with the First Runners-up cheque of ₹10,000', category: 'Moments' },
  { src: '/images/photos/celebration.jpg', alt: 'Players and coaches celebrating with raised hands', category: 'Moments' },
  { src: '/images/photos/cheque-portrait.jpg', alt: 'Team and coach with the cheque; a player holds a Player of the Match certificate', category: 'Team' },
  { src: '/images/photos/cheque-presentation.jpg', alt: 'Coaches and a young player receiving the First Runners-up cheque', category: 'Matches' },
  { src: '/images/photos/cheque-child.jpg', alt: 'Cheque presentation at the Reliance Foundation backdrop', category: 'Matches' },
  { src: '/images/photos/medal-ceremony.jpg', alt: 'A young player receiving a medal during the ceremony', category: 'Matches' },
  { src: '/images/photos/lineup.jpg', alt: 'Under-8 players lining up for medals', category: 'Matches' },
  { src: '/images/photos/team-grey-1.jpg', alt: 'Girls team in grey kit before a match', category: 'Team' },
  { src: '/images/photos/team-grey-2.jpg', alt: 'Girls team and coach in front of the Reliance Foundation board', category: 'Team' },
  { src: '/images/photos/team-orange.jpg', alt: 'Girls team in orange kit with both coaches', category: 'Team' },
]
export const videos = [
  { src: '/videos/ceremony.mp4', poster: '/videos/ceremony.jpg', title: 'Championship ceremony', desc: 'Medals, the First Runners-up cheque and a proud moment for the whole team.', tall: true },
  { src: '/videos/training-1.mp4', poster: '/videos/training-1.jpg', title: 'Training session', desc: 'Drills and ball work at the academy ground.' },
  { src: '/videos/training-2.mp4', poster: '/videos/training-2.jpg', title: 'On the pitch', desc: 'A quick look at our players in action.' },
]
export const chapters = [
  ['The Beginning', 'Every dream begins with a first step. Our journey began with a belief that girls deserve the opportunity to play, learn and grow through football.'],
  ['Breaking Barriers', 'Challenges cannot define the future. Determination, courage and community create opportunities that once seemed impossible.'],
  ['A Bigger Dream', 'From village football grounds to bigger competitions, every training session and every match brings the dream closer.'],
  ['Inspiring the Next Generation', 'When one player reaches a bigger stage, she creates inspiration for the next generation.'],
]
// dots: [x,y] on a 100x64 pitch; lines: index pairs (passes)
export const training = [
  ['Football Fundamentals', 'Ball control, first touch and the basics every player builds on.', [[20,32],[50,32],[80,32]], [[0,1],[1,2]], '/images/training/fundamentals.jpg', 'A player kicking a ball during a ball-control drill'],
  ['Technical Skills', 'Passing, dribbling and finishing under pressure.', [[18,14],[40,32],[62,18],[84,40]], [[0,1],[1,2],[2,3]], '/images/training/technical.jpg', 'A player dribbling past cones during a training drill'],
  ['Tactical Awareness', 'Reading the game, shape and positioning.', [[15,32],[35,14],[35,50],[60,22],[60,42],[85,32]], [[0,1],[0,2],[1,3],[2,4],[3,5],[4,5]], '/images/training/tactical.jpg', 'Players competing for the ball in a match situation'],
  ['Fitness & Conditioning', 'Stamina, speed and strength for a full match.', [[12,50],[34,20],[56,50],[78,20]], [[0,1],[1,2],[2,3]], '/images/training/fitness.jpg', 'Players jogging during a fitness warm-up'],
  ['Teamwork', 'Trust, communication and playing for each other.', [[25,20],[25,44],[50,32],[75,20],[75,44]], [[0,2],[1,2],[2,3],[2,4]], '/images/training/teamwork.jpg', 'Teammates working together in a match'],
  ['Confidence & Leadership', 'Speaking up, leading by example and believing in yourself.', [[50,32],[28,18],[72,18],[28,46],[72,46]], [[0,1],[0,2],[0,3],[0,4]], '/images/training/confidence.jpg', 'Match officials leading the teams onto the pitch'],
]

export const founder = {
  name: 'Raju Oraon',
  role: 'Founder & Head Coach',
  partner: 'Lalita Oraon',
  paragraphs: [
    'Raju Oraon founded the academy together with his wife, Lalita Oraon. Nearly a decade ago they noticed that girls in the villages around Shyamnagar watched boys play football from the sidelines and were rarely allowed to join in. They decided to give girls that chance.',
    'What started as informal practice sessions grew into the Shyamnagar Adibasi Unite Football Academy and, later, the Bhandarhati Adivasi Sporting Club, where boys and girls train together. Their rule is simple: if a child cannot pay, the child still plays.',
    'Today our teams take part in Reliance Foundation Youth Sports competitions, and Raju continues to coach and mentor players on and off the pitch.',
  ],
  sources: [
    ['The Logical Indian', 'https://thelogicalindian.com/from-sold-jewellery-to-football-dreams-how-an-adivasi-couple-sparked-a-girls-sports-revolution-in-rural-west-bengal/'],
    ['The Better India', 'https://thebetterindia.com/web-stories/changemakers/tribal-couple-adivasi-girls-football-academy-bengal-11016094'],
  ],
}

export const reels = {
  training: [
    { src: '/images/photos/team-grey-1.jpg', alt: 'Girls team in grey kit before a match', cap: 'Match-day focus' },
    { src: '/images/photos/team-orange.jpg', alt: 'Girls team in orange kit with both coaches', cap: 'Together with our coaches' },
    { src: '/images/photos/lineup.jpg', alt: 'Under-8 players lining up for medals', cap: 'Lined up and ready' },
    { src: '/images/photos/medal-ceremony.jpg', alt: 'A young player receiving a medal', cap: 'Rewarded for the effort' },
  ],
  journey: [
    { src: '/images/photos/runners-up-kneel.jpg', alt: 'Under-8 team with the First Runners-up cheque', cap: 'First Runners-up, 2026-27' },
    { src: '/images/photos/celebration.jpg', alt: 'Players and coaches celebrating', cap: 'Pure joy' },
    { src: '/images/photos/cheque-portrait.jpg', alt: 'Team and coach with a Player of the Match certificate', cap: 'Player of the Match' },
    { src: '/images/photos/cheque-presentation.jpg', alt: 'Coaches and a young player receiving the cheque', cap: 'Prize presentation' },
    { src: '/images/photos/team-grey-2.jpg', alt: 'Girls team and coach at the Reliance Foundation board', cap: 'Our girls squad' },
  ],
}

// Pop-up poster shown on every page load / refresh. Set show:false to turn it off.
export const featuredPlayer = {
  show: true,
  name: 'Pritika Barman',
  tag: 'Proud moment',
  level: 'U-17',
  headline: ['Pritika Barman', 'India U-17'],
  text: 'Pritika came through our academy in Shyamnagar and now plays for the India Under-17 women’s team. She missed her Class 10 board exams to represent India at the AFC U17 Women’s Asian Cup.',
  photo: '/images/players/pritika-barman.jpg',
  photoCredit: 'Photo: goalnepal.com',
  details: [['Academy', 'Shyamnagar Adibasi Unite Football Academy'], ['Level', 'India U-17 · National team']],
  highlights: [
    ['May 2026', 'AFC U17 Women’s Asian Cup', 'Two goals in India’s 4–0 win over Lebanon in Suzhou, China, as the Young Tigresses reached the quarter-finals for the first time.'],
    ['Oct 2026', '2027 Asian Cup qualification', 'Scored in a 4–0 win over Malaysia, helping India qualify for back-to-back editions of the tournament.'],
    ['Feb 2026', 'SAFF U19 Championship', 'Player of the Match against Bhutan in the group stage, playing above her age group.'],
    ['Mar 2026', 'International friendlies', 'A brace in a 2–0 away win against Myanmar in Yangon.'],
  ],
  sources: [
    ['AIFF match report', 'https://www.the-aiff.com/article/epoch-making-young-tigresses-secure-back-to-back-afc-u17-womens-asian-cup-qualifications'],
    ['RevSportz', 'https://revsportz.in/pritika-barman-from-revsportzs-empowerment-cup-to-scoring-a-goal-for-india/'],
  ],
}
