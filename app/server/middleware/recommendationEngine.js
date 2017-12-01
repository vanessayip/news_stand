const sw = require('stopword');
const _ = require('underscore');
const WordPOS = require('wordpos'),

wordpos = new WordPOS();

const fullArt1 = { 
  _id: '5a20c5250936ec7e4a19b6a2',
  author: 'Bob Ortega, CNN',
  title: 'No known evidence of assault in Border Patrol agent death, despite official statements',
  description: 'Despite claims of murder by Texas governor Greg Abbott and others, the FBI still says what happened to two border agents on November 18 is a mystery.',
  url: 'http://www.cnn.com/2017/11/30/us/no-known-evidence-assault-border-patrol-agent-death-invs/index.html',
  urlToImage: 'http://cdn.cnn.com/cnnnext/dam/assets/171125150032-border-patrol-agent-funeral-rogelio-martinez-00000000-super-tease.jpg',
  __v: 0,
  favorites: 0,
  comments: [],
  body: 
  [ 'Van Horn, Texas (CNN)Less than a day after a Border Patrol agent died and another was badly injured in a November 18 incident in West Texas, President Donald Trump tweeted that "We will seek out and bring to justice those responsible. We will, and must, build the Wall!"',
    'The next day, Texas Gov. Greg Abbott offered a $20,000 reward for information in "this murder of" Border Patrol Agent Rogelio "Roger" Martinez, 36. "Help us catch this killer," he wrote on Twitter.',
    'But ten days into the FBI\'s investigation, facts to back up claims of an assault by a unknown assailant remain thin. Department of Homeland Security Acting Secretary Elaine Duke said Thursday that the circumstances around the death of Martinez remain a mystery.',
    'The FBI has released no information to support the idea that Martinez was murdered, or that he and the surviving agent were attacked. (CNN has confirmed the identity of the second agent, but Customs and Border Protection requested that he not be named, citing "security concerns.") A person familiar with the investigation said that as of late Tuesday the agency had not ruled out any possibilities.',
    'That includes the possibility that the two men simply fell into a concrete-lined culvert adjacent to Interstate 10, about 12 miles east of their base in the small town of Van Horn. That is the area where they were found about 11:20 p.m. on that dark night, several hours after the moon had set. Martinez was alive, but had traumatic head injuries and broken bones. The other agent had a contusion to the back of his head requiring stitches, among other injuries, according to local Border Patrol union representative Lee Smith. Both men were taken first to a hospital in Van Horn, then airlifted to a trauma center in El Paso. Martinez died on November 19; the second agent was released from the hospital on November 22, walking with the help of a cane.',
    'On November 21, the FBI\'s Special Agent in Charge of the El Paso Division, Emmerson Buie Jr., said at a press conference that the FBI was investigating the incident as "a potential assault of a federal officer." The bureau announced a $25,000 reward for information leading to the arrest of anyone involved.',
    'FBI spokeswoman Jeanette Harper said Wednesday that the bureau is investigating "a few responses to the combined reward of $45,000." But she said the FBI had no further information to share.',
    '"We\'re in fact-finding mode. We\'re trying to answer all those questions everybody has," she said.',
    'Gov. Abbott\'s office said the reward offer had resulted in tips which were passed along to the FBI. They had not responded as of late Thursday to repeated queries about what led Abbott to describe the incident as a murder.',
    'Late Thursday, the FBI announced a digital billboard campaign covering areas near the southwest border, from Arizona to Texas, seeking information from anyone who drove through Van Horn between 10 p.m. and midnight on November 18. The campaign highlights the $45,000 in reward money available for information that helps resolve how Martinez died and the second agent was injured.',
    'In the meantime, friends and family have little to go on.',
    '"They haven\'t told us anything more about what happened," said Elvia Martinez, the mother of Roger Martinez, at her home in El Paso on Tuesday.',
    '"It does look weird" that there\'s so little information, said Israel Velasquez, a close friend of Martinez who flew in from Cincinnati to serve as a pallbearer at his funeral. "And what I\'ve heard is weird," he added, declining to elaborate.',
    'Chris Cabrera, a spokesman for the National Border Patrol Council, the agents\' union, was one early voice just after the incident calling it "a brutal attack." "This was something well-thought out and planned," he said.',
    'Cabrera said Tuesday evening that he remained convinced the agents were ambushed, based on his experience as an agent, on evidence he said he wasn\'t at liberty to discuss, and on that $25,000 FBI reward. If it had merely been a fall, he said, surely the FBI could have confirmed that within a week and a half.',
    '"It bugs me they say they\'re investigating this as a potential assault," he said. "If someone dies, shouldn\'t it be a homicide? I hope they can get moving on this thing. A lot of agents want answers."',
    'The area where Martinez and the other agent were injured is known to be a drop-off point for bundles of marijuana carried through the desert from the Mexican border, about 30 miles south. On November 10, in one of two such seizures that day, agents found six 50-pound backpacks of marijuana stuffed into a culvert under I-10, near where the two agents were found on November 18.',
    'Border Patrol spokesman Rush Carter said he couldn\'t confirm whether it was precisely the same culvert. But he said such traffic is common enough for agents on the night shift from the Van Horn station to make it a regular part of their duties to check the culverts for contraband.',
    'That may have been what Martinez was doing. According to the Border Patrol, Martinez and the second agent were patrolling in separate vehicles. It\'s unclear why both ended up at the culvert. The Border Patrol does not have a record of a radio transmission from either agent asking for help, though given the remote location, it is possible either would have radioed only agents who were close by -- something that would not have been recorded.',
    'At some point that night -- neither the Border Patrol nor the FBI have released the time frame -- the second agent called his wife, disoriented, telling her he didn\'t know where he was. She then called the Van Horn station to tell them something was wrong, according to a Border Patrol agent who spoke directly with her.',
    'According to Lee Smith, the local union rep who met with the surviving agent, that officer said he doesn\'t remember what happened that night. The last thing he remembers is arriving at work that day, Smith said. Contacted at his home, the agent declined a request for an interview.',
    'The bottom of the culvert where the two agents were found is about an 8- to 10-foot drop from a narrow, rocky verge along the highway. Six square tunnels run beneath the highway, each just over 6 feet high. Four days after the incident, police tape attached to a rock marked the spot.',
    'Culberson County Sheriff Oscar Carrillo, one of the responders that night, told CNN "it did not look like the scene of an attack or an ambush," and that to suggest that it was would be "very premature."',
    'Then, too, neither the Border Patrol nor the local sheriff that night put out an all-points bulletin known as a BOLO, for "be on the lookout" for possible assailants, to other law-enforcement agencies.',
    '"There wasn\'t enough information to put a BOLO together," said Carter, the Border Patrol spokesman. "But we definitely did reach out to law enforcement partners."',
    'Carter also said that, since the incident, the Border Patrol has beefed up enforcement activity in the area, borrowing agents from other stations to the east and west.',
    'The Van Horn station normally has about four dozen agents. The Border Patrol declined to say how many more agents have been brought in.',
    'Historically, the Big Bend Sector, which includes the Van Horn Station where Martinez and the other agent worked, has been relatively safe. For the fiscal year ended September 30, the 511 agents in that sector reported a total of seven incidents in which 11 agents were assaulted, the fewest of any of the nine sectors along the US-Mexico border, according to CBP data. By contrast, the Rio Grande Valley Sector reported 357 assaults against agents last fiscal year.',
    'But it remains unclear whether the two agents were, in fact, assaulted. The FBI hasn\'t excluded any alternatives, according to spokeswoman Harper, including some sort of accident or an altercation between the agents.',
    'Whatever happened, Israel Velasquez said that he knows that his friend Roger Martinez loved his work and "had total trust in his job and his training."',
    'And he said that while Martinez\'s family and friends want to know how and why he died, "at the end of the day, he\'s gone. That\'s all I know."',
    'CNN\'s Ed Lavandera, Scott McLean, and Jaide Timm-Garcia contributed to this report.' ],
  source: { name: 'CNN' }
}

const fullArt2 = { 
  _id: '5a20c5250936ec7e4a19b6b2',
  author: 'Bob Ortega, CNN',
  title: 'No known evidence of assault in Border Patrol agent death, despite official statements',
  description: 'Despite claims of murder by Texas governor Greg Abbott and others, the FBI still says what happened to two border agents on November 18 is a mystery.',
  url: 'http://www.cnn.com/2017/11/30/us/no-known-evidence-assault-border-patrol-agent-death-invs/index.html',
  urlToImage: 'http://cdn.cnn.com/cnnnext/dam/assets/171125150032-border-patrol-agent-funeral-rogelio-martinez-00000000-super-tease.jpg',
  __v: 0,
  favorites: 0,
  comments: [],
  body: 
  [ 'Van Horn, Texas (CNN)Less than a day after a Border Patrol agent died and another was badly injured in a November 18 incident in West Texas, President Donald Trump tweeted that "We will seek out and bring to justice those responsible. We will, and must, build the Wall!"',
    'The next day, Texas Gov. Greg Abbott offered a $20,000 reward for information in "this murder of" Border Patrol Agent Rogelio "Roger" Martinez, 36. "Help us catch this killer," he wrote on Twitter.',
    'But ten days into the FBI\'s investigation, facts to back up claims of an assault by a unknown assailant remain thin. Department of Homeland Security Acting Secretary Elaine Duke said Thursday that the circumstances around the death of Martinez remain a mystery.',
    'The FBI has released no information to support the idea that Martinez was murdered, or that he and the surviving agent were attacked. (CNN has confirmed the identity of the second agent, but Customs and Border Protection requested that he not be named, citing "security concerns.") A person familiar with the investigation said that as of late Tuesday the agency had not ruled out any possibilities.',
    'That includes the possibility that the two men simply fell into a concrete-lined culvert adjacent to Interstate 10, about 12 miles east of their base in the small town of Van Horn. That is the area where they were found about 11:20 p.m. on that dark night, several hours after the moon had set. Martinez was alive, but had traumatic head injuries and broken bones. The other agent had a contusion to the back of his head requiring stitches, among other injuries, according to local Border Patrol union representative Lee Smith. Both men were taken first to a hospital in Van Horn, then airlifted to a trauma center in El Paso. Martinez died on November 19; the second agent was released from the hospital on November 22, walking with the help of a cane.',
    'On November 21, the FBI\'s Special Agent in Charge of the El Paso Division, Emmerson Buie Jr., said at a press conference that the FBI was investigating the incident as "a potential assault of a federal officer." The bureau announced a $25,000 reward for information leading to the arrest of anyone involved.',
    'FBI spokeswoman Jeanette Harper said Wednesday that the bureau is investigating "a few responses to the combined reward of $45,000." But she said the FBI had no further information to share.',
    '"We\'re in fact-finding mode. We\'re trying to answer all those questions everybody has," she said.',
    'Gov. Abbott\'s office said the reward offer had resulted in tips which were passed along to the FBI. They had not responded as of late Thursday to repeated queries about what led Abbott to describe the incident as a murder.',
    'Late Thursday, the FBI announced a digital billboard campaign covering areas near the southwest border, from Arizona to Texas, seeking information from anyone who drove through Van Horn between 10 p.m. and midnight on November 18. The campaign highlights the $45,000 in reward money available for information that helps resolve how Martinez died and the second agent was injured.',
    'In the meantime, friends and family have little to go on.',
    '"They haven\'t told us anything more about what happened," said Elvia Martinez, the mother of Roger Martinez, at her home in El Paso on Tuesday.',
    '"It does look weird" that there\'s so little information, said Israel Velasquez, a close friend of Martinez who flew in from Cincinnati to serve as a pallbearer at his funeral. "And what I\'ve heard is weird," he added, declining to elaborate.',
    'Chris Cabrera, a spokesman for the National Border Patrol Council, the agents\' union, was one early voice just after the incident calling it "a brutal attack." "This was something well-thought out and planned," he said.',
    'Cabrera said Tuesday evening that he remained convinced the agents were ambushed, based on his experience as an agent, on evidence he said he wasn\'t at liberty to discuss, and on that $25,000 FBI reward. If it had merely been a fall, he said, surely the FBI could have confirmed that within a week and a half.',
    '"It bugs me they say they\'re investigating this as a potential assault," he said. "If someone dies, shouldn\'t it be a homicide? I hope they can get moving on this thing. A lot of agents want answers."',
    'The area where Martinez and the other agent were injured is known to be a drop-off point for bundles of marijuana carried through the desert from the Mexican border, about 30 miles south. On November 10, in one of two such seizures that day, agents found six 50-pound backpacks of marijuana stuffed into a culvert under I-10, near where the two agents were found on November 18.',
    'Border Patrol spokesman Rush Carter said he couldn\'t confirm whether it was precisely the same culvert. But he said such traffic is common enough for agents on the night shift from the Van Horn station to make it a regular part of their duties to check the culverts for contraband.',
    'That may have been what Martinez was doing. According to the Border Patrol, Martinez and the second agent were patrolling in separate vehicles. It\'s unclear why both ended up at the culvert. The Border Patrol does not have a record of a radio transmission from either agent asking for help, though given the remote location, it is possible either would have radioed only agents who were close by -- something that would not have been recorded.',
    'At some point that night -- neither the Border Patrol nor the FBI have released the time frame -- the second agent called his wife, disoriented, telling her he didn\'t know where he was. She then called the Van Horn station to tell them something was wrong, according to a Border Patrol agent who spoke directly with her.',
    'According to Lee Smith, the local union rep who met with the surviving agent, that officer said he doesn\'t remember what happened that night. The last thing he remembers is arriving at work that day, Smith said. Contacted at his home, the agent declined a request for an interview.',
    'The bottom of the culvert where the two agents were found is about an 8- to 10-foot drop from a narrow, rocky verge along the highway. Six square tunnels run beneath the highway, each just over 6 feet high. Four days after the incident, police tape attached to a rock marked the spot.',
    'Culberson County Sheriff Oscar Carrillo, one of the responders that night, told CNN "it did not look like the scene of an attack or an ambush," and that to suggest that it was would be "very premature."',
    'Then, too, neither the Border Patrol nor the local sheriff that night put out an all-points bulletin known as a BOLO, for "be on the lookout" for possible assailants, to other law-enforcement agencies.',
    '"There wasn\'t enough information to put a BOLO together," said Carter, the Border Patrol spokesman. "But we definitely did reach out to law enforcement partners."',
    'Carter also said that, since the incident, the Border Patrol has beefed up enforcement activity in the area, borrowing agents from other stations to the east and west.',
    'The Van Horn station normally has about four dozen agents. The Border Patrol declined to say how many more agents have been brought in.',
    'Historically, the Big Bend Sector, which includes the Van Horn Station where Martinez and the other agent worked, has been relatively safe. For the fiscal year ended September 30, the 511 agents in that sector reported a total of seven incidents in which 11 agents were assaulted, the fewest of any of the nine sectors along the US-Mexico border, according to CBP data. By contrast, the Rio Grande Valley Sector reported 357 assaults against agents last fiscal year.',
    'But it remains unclear whether the two agents were, in fact, assaulted. The FBI hasn\'t excluded any alternatives, according to spokeswoman Harper, including some sort of accident or an altercation between the agents.',
    'Whatever happened, Israel Velasquez said that he knows that his friend Roger Martinez loved his work and "had total trust in his job and his training."',
    'And he said that while Martinez\'s family and friends want to know how and why he died, "at the end of the day, he\'s gone. That\'s all I know."',
    'CNN\'s Ed Lavandera, Scott McLean, and Jaide Timm-Garcia contributed to this report.' ],
  source: { name: 'CNN' }
}

const fullArt3 = { 
  _id: '5a20c5250936ec7e4a19b6c3',
  author: 'Bob Ortega, CNN',
  title: 'No known evidence of assault in Border Patrol agent death, despite official statements',
  description: 'Despite claims of murder by Texas governor Greg Abbott and others, the FBI still says what happened to two border agents on November 18 is a mystery.',
  url: 'http://www.cnn.com/2017/11/30/us/no-known-evidence-assault-border-patrol-agent-death-invs/index.html',
  urlToImage: 'http://cdn.cnn.com/cnnnext/dam/assets/171125150032-border-patrol-agent-funeral-rogelio-martinez-00000000-super-tease.jpg',
  __v: 0,
  favorites: 0,
  comments: [],
  body: 
  [ 'Van Horn, Texas (CNN)Less than a day after a Border Patrol agent died and another was badly injured in a November 18 incident in West Texas, President Donald Trump tweeted that "We will seek out and bring to justice those responsible. We will, and must, build the Wall!"',
    'The next day, Texas Gov. Greg Abbott offered a $20,000 reward for information in "this murder of" Border Patrol Agent Rogelio "Roger" Martinez, 36. "Help us catch this killer," he wrote on Twitter.',
    'But ten days into the FBI\'s investigation, facts to back up claims of an assault by a unknown assailant remain thin. Department of Homeland Security Acting Secretary Elaine Duke said Thursday that the circumstances around the death of Martinez remain a mystery.',
    'The FBI has released no information to support the idea that Martinez was murdered, or that he and the surviving agent were attacked. (CNN has confirmed the identity of the second agent, but Customs and Border Protection requested that he not be named, citing "security concerns.") A person familiar with the investigation said that as of late Tuesday the agency had not ruled out any possibilities.',
    'That includes the possibility that the two men simply fell into a concrete-lined culvert adjacent to Interstate 10, about 12 miles east of their base in the small town of Van Horn. That is the area where they were found about 11:20 p.m. on that dark night, several hours after the moon had set. Martinez was alive, but had traumatic head injuries and broken bones. The other agent had a contusion to the back of his head requiring stitches, among other injuries, according to local Border Patrol union representative Lee Smith. Both men were taken first to a hospital in Van Horn, then airlifted to a trauma center in El Paso. Martinez died on November 19; the second agent was released from the hospital on November 22, walking with the help of a cane.',
    'On November 21, the FBI\'s Special Agent in Charge of the El Paso Division, Emmerson Buie Jr., said at a press conference that the FBI was investigating the incident as "a potential assault of a federal officer." The bureau announced a $25,000 reward for information leading to the arrest of anyone involved.',
    'FBI spokeswoman Jeanette Harper said Wednesday that the bureau is investigating "a few responses to the combined reward of $45,000." But she said the FBI had no further information to share.',
    '"We\'re in fact-finding mode. We\'re trying to answer all those questions everybody has," she said.',
    'Gov. Abbott\'s office said the reward offer had resulted in tips which were passed along to the FBI. They had not responded as of late Thursday to repeated queries about what led Abbott to describe the incident as a murder.',
    'Late Thursday, the FBI announced a digital billboard campaign covering areas near the southwest border, from Arizona to Texas, seeking information from anyone who drove through Van Horn between 10 p.m. and midnight on November 18. The campaign highlights the $45,000 in reward money available for information that helps resolve how Martinez died and the second agent was injured.',
    'In the meantime, friends and family have little to go on.',
    '"They haven\'t told us anything more about what happened," said Elvia Martinez, the mother of Roger Martinez, at her home in El Paso on Tuesday.',
    '"It does look weird" that there\'s so little information, said Israel Velasquez, a close friend of Martinez who flew in from Cincinnati to serve as a pallbearer at his funeral. "And what I\'ve heard is weird," he added, declining to elaborate.',
    'Chris Cabrera, a spokesman for the National Border Patrol Council, the agents\' union, was one early voice just after the incident calling it "a brutal attack." "This was something well-thought out and planned," he said.',
    'Cabrera said Tuesday evening that he remained convinced the agents were ambushed, based on his experience as an agent, on evidence he said he wasn\'t at liberty to discuss, and on that $25,000 FBI reward. If it had merely been a fall, he said, surely the FBI could have confirmed that within a week and a half.',
    '"It bugs me they say they\'re investigating this as a potential assault," he said. "If someone dies, shouldn\'t it be a homicide? I hope they can get moving on this thing. A lot of agents want answers."'],
  source: { name: 'CNN' }
}

const fullArticles = [fullArt1, fullArt2, fullArt3];

createEdge = (article1, article2) => {
  if (!article1.edges[article2._id]) {
    let count = 0;
    Object.keys(article1.wordMap).forEach((word) => {
      if (article2.wordMap[word]) {
        count += 1;
      }
    });
    article1.edges[article2._id] = count;
    article2.edges[article1._id] = count;
  }
}

const addedEdges = fullArticles.map((article) => {
  const wordMap = {};
  const wordsArray = article.body.join(' ').replace(/[.,\/#!?'"$%\^&\*;:{}=\-_`~()]/g, '').split(' ').map(word => word.toLowerCase());
  return new Promise((resolve, reject) => {
    wordpos.getNouns(wordsArray.join(' '), (result) => {
      result.forEach((word) => {
        wordMap[word] = 1; // we could weight this using frequency * inverse appearance
      });
      article.edges = {};
      article.wordMap = wordMap;
      resolve(article);
    });
  });
});

Promise.all(addedEdges)
.then((articleObjArr) => {    
  articleObjArr;
  for (let i = 0; i < articleObjArr.length - 1; i++) {
    for (let j = i + 1; j < articleObjArr.length; j++) {
      createEdge(articleObjArr[i], articleObjArr[j]);
    }
  }
  console.log(createRecommendedList([articleObjArr[0]])); // THIS NEEDS TO SHOW ACTUAL FAVORITES!
});

createRecommendedList = (favArray) => {
  const recommendedEdges = {};
  const reccommendedList = [];
  favArray.forEach((article) => {
    Object.keys(article.edges).forEach((articleId) => {
      if(recommendedEdges[articleId] !== 'favorite') {
        recommendedEdges[articleId] = {
          article: article,
          proximity: recommendedEdges[articleId] ? recommendedEdges[articleId].proximity + article.edges[articleId] : article.edges[articleId]
        };
      }
    });
    recommendedEdges[article._id] = 'favorite';
  });
  Object.keys(recommendedEdges).forEach((articleId) => {
    if(recommendedEdges[articleId] !== 'favorite') {
      reccommendedList.push(recommendedEdges[articleId]);
    }
  });
  return reccommendedList.sort((a,b) => {
    return b.proximity - a.proximity;
  });
};
