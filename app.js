const express = require('express');
const app = express();
const port = 1111; 

app.use(express.static('public'));


app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }));


const blogPosts = [
  { id: 1, title: 'What it is like living as a female psychopath', content: "Psychopathy is a condition that reviles and fascinates many people in equal measure, but the deeply entrenched stigma surrounding it means the disorder is still poorly understood – especially when it occurs in women.  Victoria knew about her boyfriend's wife, but after a couple of years she suspected that he had other lovers. There was no proof, but his body language was giving him away, she says. His stories weren't lining up. His face looked different when he lied. I happen to have superb memory when it comes to conversations, she says. He was not at all a good liar. I'm not sure why his wife never caught him. A mental flipboard of ways to punish him flipped in Victoria's mind until she landed on one. It would take a little time, and she'd have to act like she knew nothing. Over the course of several months, while still seeing him, Victoria sent naked photos of her boyfriend to his wife. He came to her distressed, asking who could possibly be doing such a thing. His wife was devastated. He confessed to Victoria that he was, indeed, sleeping with other women. He did not suspect her, and she comforted him. And then, when Victoria got bored and ready to end the relationship, she sent his wife a final gallery of pictures, the last one a photo of herself with the woman's husband. With that explosive reveal, Victoria exited their life forever. When Victoria used to tell people this story, her flippancy would alarm people. People asked me 'Why would you do this to his wife? What did his wife do to you to deserve this? How did she hurt you?', -she says. And I would think, 'Well, life is unfair'. She pauses:I suppose that is a good example of an extreme psychopathic trait I used to have. Callousness."
  , imageUrl:'https://ychef.files.bbci.co.uk/1600x900/p0dfgr00.webp'   },
  { id: 2, title: 'Amazon drought: Stranded boats and dead fish', content:'A severe drought in the Brazilian Amazon is disrupting transport, isolating communities and killing wildlife.The Brazilian government attributes the drought to climate change and the El Niño weather phenomenon, which has caused the volume of rainfall in the northern Amazon to fall below the historical average and river levels to drop to near record levels. The low water levels pose a threat to the estimated 30 million people that call the Amazon basin home. A state of emergency has been declared in Manaus and more than 20 other cities. Four ways climate change affects extreme weather. Warmest September as global temperatures soar. Many rivers have dried up, leaving tens of thousands of people stranded in remote jungle villages. Entire villages that depend on the rivers for a sustainable livelihood and transportation are now struggling to go about daily life and have to receive food, medicine and water by air.'
 , imageUrl:'https://ichef.bbci.co.uk/news/976/cpsprodpb/135CE/production/_131401397_d4a56510-366c-4dd7-82fd-93c2a96e5041.jpg.webp'},
];


app.get('/', (req, res) => {
  res.render('main', { blogPosts });
});


app.get('/new-blogpost', (req, res) => {
  res.render('new-blogpost');
});


app.post('/add-blogpost', (req, res) => {
  const { title, content } = req.body;
  
  const newPost = { id: blogPosts.length + 1, title, content };
  blogPosts.push(newPost);
  res.redirect('/');
});


app.get('/blog/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const blogPost = blogPosts.find(post => post.id === postId);
  res.render('blogpost-detail', { blogPost });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
