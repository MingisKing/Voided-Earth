let username = prompt("What is your name?");
let special = "Game Beater";
let Branson = "Branson";
let How_Wun = "How Wun";
let Charissa = "Charissa";
let Leigh = "Leigh";
let Ming_Haw = "Ming Haw";
let Mrs_Han = "Mrs Han";
if (username === Branson) {
    alert("You beat the game already? Well, have a description of me then!");
    alert("The coder of the game. Without me, the game would not be possible!");
} else if (username === How_Wun) {
    alert("You beat the game already? Well, have a description of me then!");
    alert("The almighty leader of the group, side storyboard writer. Without me, the entire group might descend into chaos.");
} else if (username === Charissa) {
    alert("You beat the game already? Well, have a description of me then!");
    alert("Main storyboard writer. How did I write it so well? Even I don't know...I guess it's bevause of my winging powers");
} else if (username === Leigh) {
    alert("You beat the game already? Well, have a description of me then!");
    alert("Side storyboard writer and finalist of the game. I provided the best moral and housing support the team could ever ask for :)");
} else if (username === Ming_Haw) {
    alert("You beat the game already? Well, have a description of me then!");
    alert("Final sweep of the script and game, as well as idea contributor. Without me, yall would be sued due to lack of acknowledgements. ¯\_(ツ)_/¯ ");
} else if (username === Mrs_Han) {
    alert("Thanks for being such a great science teacher to us!");
} else if (username === special) {
    alert("Thank you so much for playing Voided Earth!");
} else {
    alert("Hello " + username + ", welcome to Voided Earth!!\nYou are in a dystopian sci-fi world in the year 3069. \nGlobal warming and pollution has gotten a thousand times worse. One side effect of this is extreme versions of natural disaters.")

    alert("Over the years, plastics thrown into the ocean or landfills have mutated for strange unknown reasons and evolved into sentient golems with a hate for organic life. \nThere has been a rapid production of many greenhouse gases due to burning millions of tonnes of fossil fuels and natural gasses.")

    alert("The temperature can drop below -53°C in winter and rise up to 69°C in the summer.\nAir pollution has been attributed to more than 19% of deaths due to choking and asthma. \nThe ocean was also affected badly, with a destructive 500,000 tonnes of plastic waste escaping into the ocean every single day.")

    alert("About 700 species of animals have gone extinct due to the amount of toxins and microplastics released into the oceans, the amount of land cleared and the dirty air.\nSome parts of the ocean are filled with so much toxic waste that it is corrosive. Smaller sources of water have been contaminated and are not suitable for consumption.")

    alert("There is now a lack of natural resources, causing the rich to enjoy living in the hands of The Sauciety and the poor to starve away to death in slums. \nYou are a member of The Ravioli, and your goal is to try and save what is left of this world from the Sauciety.")

    alert("Side note, please take note that for your answers, they need to be left in capital letters! For example, 'A' cannot be 'a'")

    let rite1 = ("A")

    let Question1 = prompt("You need to pick an equipment pack provided by The Ravioli.\nYou get to choose one of three packs.\nDo u pick:\nA)A neon yellow pack with a PathFinder tool attatched to it.\nB)A dull green pack with a PathFinder tool inside a waterproof pouch\nC)A red pack with a PathFinder tool attatched to it.")

    if (Question1 === rite1) {
        alert("You picked up the pack and went to the hanger for further instructions.")
    } else {
        alert("You felt that something about the pack wasn't right but you still went to the hanger for further instructions.")
    }

    let rite2 = ("C")
    let rite2_1 = ("A")

    let Question2 = prompt("You proceed to the hanger as instructed.\nYou meet the Shipyard guard and was recommended to choose a vehicle built for high speed and resilience. Do you choose: \n A) An ATV with jet boosters\n B) A jet\n C) T.A.S.L.V.")

    if (Question2 === rite2) {
        alert("You chose the T.A.S.L.V. which stood for Transfomable.Air.Sea.Land.Vehicle")
    } else if (Question2 === rite2_1) {
        alert("You love going fast, and obviously chose the fastest-looking vehicle you saw.")
    } else {
        alert("You chose the jet as you felt it was the wisest choice of the three.")
    }

    let rite3 = ("C")
    let rite3_1 = ("B")

    let Question3 = prompt("You were told to visit the weaponsmith to choose a weapon for the trip.\nYou arrive at the weaponsmith and were given 3 choices.\nDo you choose:\nA) Hero Shot. Description: It has a high firing rate, with a medium shooting range. It requires a liquid to fire. It can turn into a sword for close-combat.\nB) Charge Rifle. Description: A single-fire laser that gathers power when the trigger is held. 4 shots can be fired before it needs to be reloaded.\nC) Weird Red Glove. Description: They said it was found outside in the scrapyard just a few days ago. There was a strange aura to it... how about you test it?")

    if (Question3 === rite3) {
        alert("You picked up the glove and felt stronger for some reason......")
    } else if (Question3 === rite3_1) {
        alert("You picked up the Charge Rifle. It looks brand new.")
    } else {
        alert("You picked up the Hero Shot and the cans of liquid beside it.")
    }

    alert("You moved on to the launch pad to begin your journey")

    let rite4 = ("B")
    let rite4_1 = ("C")

    if (Question2 === rite2) {
        alert("You enter the vehicle in Air mode and take off.\n5 hours later......\nYou arrive at the site of the first natural disaster.")

        Question4 = prompt("As you wonder what disaster might strike, the ground starts to rumble. What do you do now?\nA) Run to the bunker for shelter.\nB) Run into the site and try to evacuate as many people as you can.\nC) Take a holo-vid of the situation for mission control to record and save for future reference")
    } else if (Question2 === rite2_1) {
        alert("You activated the jet boosters and rush to the site of the first natural disaster.\n2 hours later......\nYou just arrived at the site when mission control called and alerted you of an earthquake imminent in around 3 hours. You were instructed to evacuate as many citizens as possible.")

        Queation4 = prompt("2 hours later, you finally evacuated the last citizen and had time to kill. What do you do?\nA)Nothing, take a break.\nB)Enquire the citizens about the earthquakes.\nc)Go search the area to find anything out of the ordinary.")
    } else {
        Question4 = alert("You enter the jet and takeoff safely.\n5 hours later......")
        alert("You were about to arrive at the site of the first disaster when an alert states that you were out of fuel. As the jet came crashing down, you pulled the emergency lever and were launched out safely.")
        alert("As you stare at the crash site of your jet, you notice the strange rumbling around you. You realized it was an earthquake and helplessly watch buildings and rubble fall onto you.\nTry Again, you got crushed like a pancake.")
        throw new Error();
    }

    if (Question4 === rite4 && Question2 === rite2) {
        alert("The civilians did not believe you, as they thought you were trying to cause mass panic. Just then, the earthquake strikes. You watch helplessly as buildings start to fall and everyone gets crushed.\nGame Over.")
        throw new Error();
    } else if (Question4 === rite4_1 && Question2 === rite2) {
        alert("You stood oustside in the middle of the earthquake for as long as possible, trying to film as much as possible. A piece of debris fell on top of you while you were filming. Although you died, it was not in vain as the collected data was used to help future survivors.\nGame Over, hero.")
        throw new Error();
    } else if (Question4 === rite4 && Question2 === rite2_1) {
        alert("You asked the citizens of the village if they had regular earthquakes, when they started and why. From what you can gather, these earthquakes strted just last month, and can happen at least one week after the last one.")
        alert("The village chief informed you that his grandfather said these powerful earthquakes started in different parts of the world back in 2079, as for why, no one knew. This was shocking information as the rise of the Sauciety was also in 2079.")
        alert("After enquiring all the villagers, mission control alerted you that the earthquake was due in roughtly 20 minutes. With that, you follow the last of the villagers into the bunker to wait out the earthquake.")
    } else if (Question4 === rite4_1 && Question2 === rite2_1) {
        alert("You comb the surrounding areas to look out for anything out of the ordinary. You find nothing and head to the bunker to wait out the earthquake.")
    } else if (Question2 === rite2_1) {
        alert("You doze off in the middle of the village to rest your tired body.\nYou wake up to rumbling to realise the earthquake had begun.You breathed your final breath as debris fell around you.(Try Again, you got flattened like prata)")
        throw new Error();
    } else {
        alert("You rush into the bunker to hide.")
    }
    let rite5 = ("B")
    let rite5_1 = ("A")
    if (Question4 === rite4 && Question3 === rite3_1 || Question2 === rite2 && Question3 === rite3_1) {
        Question5 = prompt("You step into the bunker and are immediately knocked off your feet by a tripwire. As you look up you see a man wearing a cloak which covered his face and body. As you pull out your charge rifle, you see three obvious choices. Do you:\nA) Run towrds the man?\nB) Hide behind some rubble?\n or... ...C) Charge up your rifle?")
    } else if (Question4 === rite4 && Question3 === rite3 || Question2 === rite2 && Question3 === rite3) {
        Question5 = prompt("You step into the bunker and are immediately knocked off your feet by a tripwire. You look up to see a man wearing a cloak which covered his face and body. As you quickly slip on the red gloves, you see three obvious choices. Do you:\nA) Charge head-on blindly.\nB) Hide behind rubble and launch a sneak attack.\nOr... ...C) Stand there menacingly.")
    } else {
        Question5 = prompt("You step into the bunker and are immediately knocked off your feet by a tripwire. You look up to see a man wearing a cloak which covered his face and body. You whip out your Hero shot and load in the ammo. What do you do now? Do you:\nA) Fire at the man while running at him?\nB) Hide behind rubble until the man comes into range?\nOr... ...C) Throw your gun at the man.")
    }


    if (Question4 === rite4 && Question2 === rite2_1 && Question3 === rite3_1 && Question5 === rite5 || Question2 === rite2 && Question3 === rite3_1 && Question5 === rite5) {
        alert("You hid behind some rubble and stayed silent. You did not realise the man had a headset which allowed him to see through the rubble. He took out a gun, before blasting the rubble away with and killing you. (You just got blown away, Try Again)")
        throw new Error();
    } else if (Question4 === rite4 && Question2 === rite2_1 && Question3 === rite3_1 && Question5 === rite5_1 || Question2 === rite2 && Question3 === rite3_1 && Question5 === rite5_1) {
        alert("You run towards the man and hold down on the trigger. Before the charge rifle was fully charged, you were shot by the man with a gun. (Your reaction time was too slow, Try Again)")
        throw new Error();
    } else if (Question4 === rite4 && Question2 === rite2_1 && Question3 === rite3_1 || Question2 === rite2 && Question3 === rite3_1) {
        alert("Before the man could react, you fire a charged shot at him. The force of the shot knocks him against the opposite wall and rubble falls on him.")
    } else if (Question4 === rite4 && Question2 === rite2_1 && Question3 === rite3 && Question5 === rite5 || Question2 === rite2 && Question3 === rite3 && Question5 === rite5) {
        alert("You hid behind some rubble and stayed silent. You did not realise the man had a headset which allowed him to see through the rubble. He took out a gun, before blasting the rubble away.")
        alert("As the smoke dissipitates, you realize you were completely fine. You walk towards the man. He begins to panic as he tries to pull the trigger, only to realise that was jammed. You throw a punch at the man and the force sends him flying to the wall. You stare astonished at your hands.")
    } else if (Question4 === rite4 && Question2 === rite2_1 && Question3 === rite3 && Question5 === rite5_1 || Question2 === rite2 && Question3 === rite3 && Question5 === rite5_1) {
        alert("You charge at the man blindly. As you rush towards the man, he tries to shoot you with his gun, but it was jammed. You rush out of the smoke and punched him upwards. The force was so strong it sent him flying to the roof. He then falls back down.")
    } else if (Question4 === rite4 && Question2 === rite2_1 && Question3 === rite3 || Question2 === rite2 && Question3 === rite3) {
        alert("You stood there menacingly. The man exclaims “ You're just standing there menacingly! Are you going to make your move?”, while distracted, you punch him and send him flying to the wall. ")
    } else if (Question4 === rite4 && Question2 === rite2_1 && Question5 === rite5 || Question2 === rite2 && Question5 === rite5) {
        alert("You hid behind some rubble and stayed silent. You did not realise he had a headset which allowed him to see through the rubble. He blasted the rubble away with his gun. He then shoots you and you die. (You just got blown away, Try Again)")
        throw new Error();
    } else if (Question4 === rite4 && Question2 === rite2_1 && Question5 === rite5_1 || Question2 === rite2 && Question5 === rite5_1) {
        alert("You rapidly fire at the man but run out of bullets as it is powered by water. You change the hero shot into a sword and kill the man before he can react.")
    } else {
        alert("The hero shot hits the man. He stands there, confused. Then, angered by the action, he shoots you. (You just got blown away, Try Again)")
        throw new Error();
    }

    alert("You search the man’s body. You find an insignia on his body, which was relatively burnt off like someone tried to remove it. The only thing that remained was the letter “S” that looked like it was wrapped in vines, leaving behind a sense of speculation as to what it spelt out. You open the bunker door, blinding you with the sudden burst of light.")
    alert("Everything is still, signalling that the earthquake is over. You trudge towards the T.A.S.L.V. that remained unscathed due to the Ravioli’s high-tech updates and drive off back to the hangar.")

    alert("You fly back to the hanger to await further orders.")

    alert("You get an update from your superiors that there has been news about not only a volcano about to erupt, but the rise of an epidemic too. The world is already facing so many threats, they cannot afford to have another worldwide emergency with so many things that are already on their plate. You get ready to head out as you go to the garage. You get in your vehicle and you speed off.")

    if (Question2 === rite2_1) {
        alert("The road to the city is oddly flat and slippery,  the ATV travels at high speeds, you suddenly lose control of the vehicle and swerve due to the high speeds and died on impact. 2 FAST 4 U. Try Again, Vin Diesel.")
        throw new Error();
    } else {
        alert("In air mode, you travel as fast as possible and arrived smoothly.")
    }
    let rite6 = "A"
    let rite6_1 = "B"
    alert("As you walk around the city, you hear many  people coughing and sneezing. You get closer to them and realise that many of the civilians have caught some sort of virus. You immediately walk away from the crowded areas, when you bump into someone who was dressed in black. He releases chloroform gas and knocks you out.")
    alert("When you wake up, you see a bright light shining directly at your eyes. You blink repeatedly and see a shadow in front of you. You try to get up but realise that you are tied to a chair. Suddenly, you hear a voice cut through the silence like a knife, “I’m only going to ask once. Do you have a mask?”")
    let Question6 = prompt("You slowly retrieve your mask from your storage. “This is my last one and it's for emergencies!” “He pulls out a knife and threatens you. “Hand over the mask! HAND IT OVER OR DIE! Do you...\nA) Say no because you need.\nB) Give him the mask as you still have your protective suit.\nC) Take out your knife and stab him.")

    if (Question6 === rite6) {
        alert("The man gets angry but gives you a second chance to answer. You still disagree. He shoots you, it leaves a fatal wound and you die. Try Again.")
        throw new Error();
    } else if (Question6 === rite6_1) {
        alert("He thanks you and releases you. You knew that the mask was for the worst case scenario where your suit stops functioning but it won't happen. You leave and turn on your protective suit’s respiratory function.")
    } else {
        alert("You stabbed him. You leave the building filled with regret. However, you knew that in this time, everyone fights for survival, he was going to die anyways.")
    }

    let rite7 = "A"
    let rite7_1 = "B"
    alert("Just then, you see a puff of smoke in the distance. This was followed by sounds of screaming and running. Right after that, there was a reddish-orange glow, hot steaming lava rushes towards you. You start running with all your might, as far as possible. The lava was gushing towards you and was catching up soon.")
    alert("As you run, you see many people shutting their windows and doors, 'quarantining' themselves. You immediately rush into an abandoned building as you try to recover, and some survivors follow you in. You all start to wander around, trying to find another way out.")
    alert("There is nothing on the ground floor as well as the upper floor so you head down to the basement. It is extremely dark and all the switches are spoilt.")
    let Question7 = prompt("However there is a door at the end of the hallway. You all go closer to it and the door creaked. You switch on your flashlight that came with your pack. Do you…\nA) Decide to explore the place.\nB) Try and blast a hole in the wall.\nC) Trip over a rock")

    if (Question7 === rite7) {
        alert("You find a secret door that's open, so you enter it to investigate. You point your flashlight to the ground, only to see that there is a big hole in the ground. You and the other survivors share whatever materials you have to create a makeshift harness to get down the hole safely. You go down first. Halfway down the hole, the rope snaps. You fall down, dragging the other survivors down with you.")
    } else if (Question7 === rite7_1) {
        alert("Lava seeps in and starts burning part of the floor. Pieces of debris and rubble fall on you and pins you down, rendering you immobile. You sigh in regret as you and your companions burn to death. Try Again.")
        throw new Error();
    } else {
        alert("You stumble and fall down a hole. You desperately grip onto the edge of the hole, but your hands loosens due to how tired you are, and you fall down…. The impact from the impact kills you as you didn’t activate your protective gear in time. Try Again.")
        throw new Error();
    }

    let rite8 = "A"
    let rite8_1 = "B"

    alert("As you feel yourself hit the ground surrounded by spider webs with a huge thud. The protective gear that you activated saves you from too much damage, but you twisted your ankle from landing on your feet. The other survivors were not so lucky. They fell down, only for them to die on impact.")
    alert("As you slowly recover from the pain, you pile up their corpses to bring back to the hangar to use as fertiliser. It would be quite a haul for the people to collect later as they are worth 6 sacks of fertilizer. ")
    alert("Suddenly, you see a light shining in the midst of all the darkness and walk towards it. You realise that it's a tunnel and the light at the end is either the surface or a way out. As you get closer, you hear an eerie sound coming from the tunnel.")
    let Question8 = prompt("You follow the sound and it leads you to a dark hollow chamber with a black cat on a table. As you go near it, it snarls at you ferociously, and someone suddenly shouts, “Hey! Who’s there!”Do you\nA) Hide\nB) Confront the unknown person\nC) Stay silent and explore the place")

    if (Question8 === rite8) {
        alert("You quickly hide behind your invisi-shield and wait for the owner of the voice to appear. You trigger a trap by accident. Try Again.")
        throw new Error();
    } else if (Question8 === rite8_1) {
        alert("You shout, “Come out! I’m not scared of you!” Suddenly, toxic water flows into the room. You see a figure run into a seperate room. You jump up onto your holoboard that is in your pack and watch as torrents of water gush out. Some of the rushing water splashes on you, corroding a few parts of your suit and already injured body. You pass out from the pain…")
    } else {
        alert("You explore the place and find a room with a bed that looks like someone recently stayed in it. You investigate the room to try to find clues of who was living there. You opened the drawer, which triggered a trap that killed you. Game Over.")
        throw new Error();
    }

    let rite9 = "A"
    let rite9_1 = "B"
    alert("You groggily try to understand the situation you're in. You are trapped in a huge holojail in the shape of a cube. You calm your rapidly beating heart and tried to think rationally. The owner of the voice appears after a few minutes of waiting. He is a tall and muscular man, with an unkempt beard and dirty clothes.")

    let Question9 = prompt("You wait for the man to start talking to see what he was going to do. 'Who are you?' He asks, 'What are you doing here? Are you on my side?' Do you...\nA) Be apprehensive about who the man is.\nB) Tell him the partial truth.\nC) Trust him.")

    if (Question9 === rite9) {
        alert("You give a fake name.'I am Riley, I'm good.' He seemed doubtful of your second statement. He pulls you over and finds a Ravioli insignia on your pack. 'You're not.' He then stabs you. Game Over.")
        throw new Error();
    } else if (Question9 === rite9_1) {
        alert("'I'm Ravioli, I'm on your side.'The man responds with his name - Matt and says 'It's rare to find someone from our side.'. He releases you from the holo-prison. You then charge at him and knock him out…")
    } else {
        alert("'I'm Thomas, I'm from the Ravioli, I'm good, you can trust me.'. The man snarls menacingly and says: 'Those who dare to defy The Sauciety deserves a deathly dose of divine destruction!' He takes out his knife and stabs you. Try Again.")
        throw new Error();
    }

    let rite10 = "A"
    let rite10_1 = "B"

    alert("You contact Headquarters to come collect Matt while you try to explore more of the place. You find another door in the basement and open it. Inside is a room filled with many chests and weird paintings hanging on the walls. You open one of the chests and inside is a scroll. You unroll it and on it is written")
    alert("This room has many chests and paintings,\nThere is another door that will lead you to where the master is waiting\nThe master will help you\nFind the key in one of the many few\nChests and accomplish a feat\nThen the master you are able to meet\nYou open all the chests, but nothing is to be found in them. You look at the paintings, each quite similar except for one.")
    alert("All are faces of unknown people that strikes a sense of apprehension, however, one of the people in the paintings has a missing eye. You unhook the painting and behind it was a hole in the wall.")
    alert("You see a box inside and open it to find a silver key, grab the key and unlock the door.\nJust then, you heard footsteps coming from outside. You immediately scramble towards the door and are brought to a tall and snowy mountain.")

    alert("You look behind you and realise the door is missing. It is freezing cold so you equip your snowsuit which was inside your pack. After you have worn your snowsuit, you see a sign in front of you which says:\n'Follow the signs\nWhich will lead you to this abode of mine\nThe place that lacks luster\nwhere the master\nis waiting for you\nSo start making haste as the master wants to give you a clue'")
    alert("You follow the signs which brought you to a deep dark cave. When you enter, you felt so much warmer. You take off your snowsuit and start exploring the cave.")
    alert("Just then, you hear a strange voice 'Whoever has entered, I have been waiting anxiously for your arrival. ")
    let Question10 = prompt("I'm Gretal Thumbell Iceberg, an environmentalist and mabye a poet. Can you help me?' Do you…\nA) Rush towards the holy voice\nB) Press the big red button on the wall\nC) You press a green button on the wall")

    if (Question10 === rite10) {
        alert("You step on the multiple pressure plates that triggers the many traps set around the room. The walls start to close in, acid water starts raining down, poison arrows start to spring out, homing in on their target-You. One arrow hits your face and you feel it going numb. Despite the pain, you still ran towards this voice. It was like a siren, and you were a sailor. You end up coughing out blood, struggling to stay alive, but it was too late. Game Over.")
        throw new Error();
    } else if (Question10 === rite10_1) {
        alert("You heard what sounds like macheinery powering down. You suspected some traps were disabled. You walk forward and encounter the holovid of Gretal Thumbelly Iceberg, 'It's been quite a while since a person has come here. If you're seeing this, I'm probably dead by now. Its 2068, and there is an evil group that is trying to dominate the world. Their actions are harming everyone and destroying the world! Please, stop them! There is an exit further down the hall, there you will be rewarded with something, use it for the greater good!' Somewhere down the cave,a door opens...")
    } else {
        alert("Nothing happens. You think that everything is fine. Suddenly, a bunch of ravage parasytes rushes out from nowhere, and enter your body. These parasytes were mostly hungry after staying in this cave for so long... Game Over.")
        throw new Error();
    }

    let rite11 = "A"

    alert("You walk down the hallway and towards the exit. You find a machine that had the same font of insignia on the man's body, but instead of a 'S' it was an 'A'.There are more letters but they faded away with time. You dismantled the machine, only to find that the machine was actually an ancient computer that dated back to 2020. 'Oh, how primitive their technology was back then,' you think to yourself.\nHowever, these sorts of things have no value to the rich. After all, you didn't really care for the importance of these items, as long as The Ravioli needed it.")
    alert("You were too busy dealing with disasters and monsters to have time for this, even when you're off, your horrible luck always lands you into some form of trouble. Chuckling bitterly to yourself, you haul yourself and the machine all they way back into the T.A.S.L.V and drive back to the hangar to interrogate Matt, the man you captured.")

    alert("You reach the hangar and enter the interrogation room. He was chained and bound to a chair. You start interrogating him, asking him basic questions such as his age and faction, about why he was doing this and if anyone ordered him to do so. All he does is laugh maniacally and says 'This is their will! Those who defy shall die!")
    alert("He smashed his head against the back of the chair and committed suicide in the defence of “them”. A few seconds later, he was pronounced dead. All of a sudden, you see 2 tiny worm-like creatures crawling out of his eye sockets, you instinctively knew from experience that those were parasytes.")
    let Question11 = prompt("On his neck had a word that was fading away, you only got a glimpse of the letters 'UC', also in the same font as the machine. You could not help but to quizzically wonder what the letters meant. The parasytes then start crawling down to find a new host to control. Do you…\nA) Squish them\nB) Capture them")

    if (Question11 === rite11) {
        alert("You squat down to get a closer look. They look disgusting. You squish them with your hand. Suddenly, you felt a flash of pain from your palm. You lift up your hand and realize both the parasytes were piercing your hand and crawling into your bloodstream. You scream in terror and disgust, as you were once told that once they enter a host there is no way to save them. You sit down, shocked, waiting for the imminent loss of control.")
        alert("Suddenly, you feel dizzy and start to lose consciousness. You didn't die, but your body was just left to be a puppet while you have utterly no control over what you rightfully own. Other members of The Rebellion killed you to stop the parasytes. Game Over.")
        throw new Error();
    } else {
        alert("You reach into your pack and take out a small container and lure the parasytes into the container by putting a rat in it. You shut it tightly once the parasyte was in. You then go to the laboratory and  pass it to the scientists who thank you for providing a new research subject to observe.")
    }

    let rite12 = "A"

    let Question12 = prompt("You were given a promotion and you are promoted to a tier-5 survivor! You get a week-long break. Do you…\nA) Take it\nB) Leave it")

    if (Question12 === rite12) {
        alert("Your week-long break begins. Yay!!!")
    } else {
        alert("They are suspicious as to why you rejected them, was it because you are a spy? There is a confidential meeting going on in the two weeks, are you going to infitrate it?. (That was a horrible way to die, Try Again)")
        throw new Error();
    }

    let rite13 = "A"
    let rite13_1 = "B"

    alert("-1 week later-\nYou have been well rested. Your superiors tell you that you have to go on a new mission-to go to what used to be Australia.")
    alert("Coastal flooding that happened over the years has made it sink into the ocean. There has been a strange occurrence in this underwater island, where there has been sightings of an ignisdo. (Yes, a fire tornado in water).")
    alert("HQ scientists think that it is due to some kind of man-made machine. Your mission is to find out the cause of this man-made maritime monstrosity.")

    if (Question3 === rite3) {
        alert("You ride the T.A.S.L.V. into the sea. You see the sunken land of Australia. A once bustling city has now been reduced to a desolated underwater island. You traveled down and landed in a large neighbourhood.")
        alert("This had been the place that the ignisdo has been circling around. The experts at HQ say that there might be something there. As you go out into the sea in your protective underwater gear, you see a hammer-head shark.")
        Question13 = prompt("A normal hammer-head shark might have been ok for you, but this hammer-head shark had plastic spikes protruding out of its head and had plastic-like growths on its skin. It looks like it has been enslaved by parasytes! Do you…\nA) Uppercut the shark\nB) Hide in the T.A.S.L.V\nC) Smoulder")
    } else if (Question3 === rite3_1) {
        alert("You ride the T.A.S.L.V. into the sea. You see the sunken land of Australia. A once bustling city has now been reduced to a desolated underwater island. You traveled down and landed in a neighbourhood. This had been the place that the ignisdo has been circling around.")
        alert("The experts at HQ say that there might be something there. As you go out into the sea in your protective underwater gear, you see a hammer-head shark.")
        Question13 = prompt("A normal hammer-head shark might have been ok for you, but this hammer-head shark had plastic spikes protruding out of its head and had plastic-like growths on its skin. It looks like it has been enslaved by parasytes! Do you…\nA) Charge the rifle\nB) Hide in the T.A.S.L.V\nC) Throw the rifle on the shark")
    } else {
        alert("You ride the T.A.S.L.V. into the sea. You see the sunken land of Australia. A once bustling city has now been reduced to a desolated underwater island. You traveled down and landed in a neighbourhood. This had been the place that the ignisdo has been circling around.")
        alert("The experts at HQ say that there might be something there. As you go out into the sea in your protective underwater gear, you see a hammer-head shark.")
        Question = prompt("A normal hammer-head shark might have been ok for you, but this hammer-head shark had plastic spikes protruding out of its head and had plastic-like growths on its skin. It looks like it has been enslaved by parasytes! Do you…\nA) Shoot the shark\nB) Hide in the T.A.S.L.V\nC) Change it into a sword")
    }

    if (Question13 === rite13 && Question3 === rite3) {
        alert("You uppercut the shark and it flies out of the water. The shark rushes down and back into the water at top speeds, dying on impact. You collect the parasytes for research purposes.")
    } else if (Question13 === rite13_1 && Question3 === rite3) {
        alert("You hide in the T.A.S.L.V. It keeps crashing into the T.A.S.L.V. You exit and punch it hard in its stomach. Blood spews out of the shark, you grab a container and collect the parasytes that were punched out.")
    } else if (Question3 === rite3) {
        alert("You give the shark a smouldering look. The shark was so frightened from that menacing smoulder and swam away.")
    } else if (Question3 === rite3_1 && Question13 === rite13) {
        alert("As you are charging the rifle, the shark bites you. Parasytes start crawling out of its mouth and taking over your body. Try Again.")
        throw new Error();
    } else if (Question3 === rite3_1 && Question13 === rite13_1) {
        alert("You hide in the T.A.S.L.V and start charging your rifle. The shark keeps trying to bump into the T.A.S.L.V. You exit the vehicle and start shooting it with your rifle. You kill the shark, and then quickly grab a container and trap as many parasytes that come out as possible.")
    } else if (Question3 === rite3_1) {
        alert("The gun bounces harmlessly off the shark. It then proceeds to devour its next meal - you. Try Again.")
        throw new Error();
    } else if (Question13 === rite13) {
        alert("In the water, the hero shot is extremely powerful. You shoot the shark, causing a water torpedo to be shot. It hurtles the shark far far away,smashing it into jagged rocks.")
    } else if (Question13 === rite13_1) {
        alert("The shark keeps trying to crash into the T.A.S.L.V. You exit the vehicle, change the hero shot into a sword and stab the shark. The shark dies and you collect the parasytes")
    } else {
        alert("You change the hero shot into a sword. You attack the shark. The shark sees you and rips away the sword from you using its jaws. The shark then devours you. Try Again.")
        throw new Error();
    }

    alert("You then swim into the sunken neighbourhood to find the machine. After a period of searching, you find a strange looking contraption stuck underneath a table. You open it and eat the thing that was inside it. It tasted like a chocolate, strawberry and vanilla sundae with colourful chocolate sprinkles topped with a chocolate covered cherry with cool Hershey’s chocolate sauce drizzled around it with a delicious piece of chocolate coated crunchy wafer, added with a dollop of whipped cream.")

    let rite14 = "A"
    let rite14_1 = "B"

    let Question14 = prompt("Then you realise it is a chocolate, strawberry and vanilla sundae with colourful chocolate sprinkles topped with a chocolate covered cherry with cool Hershey’s chocolate sauce drizzled around it with a delicious piece of chocolate coated crunchy wafer, added with a dollop of whipped cream that have been left since the 21 century. (HOW IS IT NOT EXPIRED YOU ASK? THE ART OF PRESERVATION!) You look inside and find an even stranger contraption that had a look of a bomb but it was made with much more advanced technology. You see three wires. Do you cut the…\nA) Red wire\nB) Green wire\nC) Orange wire")

    if (Question14 === rite14) {
        alert("You died from an explosion")
        throw new Error();
    } else if (Question14 === rite14_1) {
        alert("The bomb defuses")
    } else {
        alert("You see an unholy fire erupt from the machine, one that was not immediately extinguished by the water, but you quickly contain it by putting it out early with a fireproof blanket.")
    }

    alert("As you munch on your sundae, you see the strangest contraption beside the stranger contraption inside the strange contraption which is a letter. on the front says, “All case studies are case studies.” You open it and read it. On it wrote:")

    alert("“To whoever is reading it, this about 2016, when PPAP  as a trend, if you d n't to know of  t, tr   earching it up on google  r whatever search engine you use now. I researched it when I was alive and fou    ut that the man that made the song actually discovered this fru   that c n cure all diseases. Ho e  r, I do not know if it is still av     le in your time. All I know is th t now, in 206 , a group was try  g to obtain it when I was still alive, I do not k    what the situation is like in your ti e. However, please stop the group, destroy them and retrieve the PPAP seed fro    e clutches of the     I   ”")

    alert("You try to read on further but due to time, the words had already faded away. All that was left were the letters “I”. You get curious due to the fact that you are finding letters on your way. You try gathering all the letters and compile them. You get “SAUCI” “SAUCI? What does that mean?” You ask yourself. You take it down on your armband and head out.")

    let rite15 = "A"
    let rite15_1 = "B"

    let Question15 = prompt("All of a sudden, you hear a loud rumbling sound, you rush out to take a look. You look up and see a huge whirlpool but upon greater inspection realise that it wasn’t just a whirlpool but it was an ignisdo. You quickly head back into the room and look at the machine, there was a letter “E” on it. You quickly wrote it down and then tried to find a way to stop the ignisdo. Do you\nA) Look at the dangerously beautiful display of fire\nB) Try to destroy the machine by ripping it apart\nC) Calmly study the buttons on the machine")

    if (Question15 === rite15) {
        alert("You get enveloped by the ignisdo, you diedered without any reason and didn’t even do anything useful. (Try Again)")
        throw new Error();
    } else if (Question15 === rite15_1) {
        alert("You rip apart the metal plates on the machine, the machine stops functioning. The ignisdo continues to head towards you, it envelops you and you died. At least you destroyed the machine so no more ignisdos will ever happen again. (Try Again Hero)")
    } else {
        alert("You find a button that says “Stop operation” and press it, everything goes back to being calm. You press the self destruct button and save everyone from ever having to deal with an ignisdo again.")
    }

    alert("You leave in your T.A.S.L.V and head back to the hangar for further orders. You leave your T.A.S.L.V in the vehicle garage to get upgraded and fixed from you ordeals as you head to your superior’s office to hand in your mission report. Your superior commends you for saving so many people as well as finding a link, “SAUCIE”. He gives you a 2 day break and you gladly accept.")

    alert("Over the break, you decide to go to the city area to relax. You are walking around the town square when you see someone snooping around the unauthorised area only meant for the Survivors. You decide to apprehend him as he does not have the chip that was inserted into the Survivors when they join the Ravioli. He decides to fight back when you try to apprehend him. You hit him in the temple, knocking him out. ")

    alert("You bring him to the HQ after releasing an electric net on him that would shock him with 80 Volts of electricity if he struggled. While carrying him, you think “Why does this have to happen when I’m on my break?” You sigh deeply as you lug him into the interrogation room. You splash him with water to wake him up.")

    alert("You rapidly hit him with torrents of questions, “Who are you? What are you doing here? Are you a spy? Who sent you?” “Hahaha” The man chuckled manically. 'You already know, don’t you have deja vu? This has happened before!'Or do you not remember who you caused to die? Bwahahahaha! You are no different from us, you’ve become the very thing you swore to destroy!”")

    alert("“The name is Matthew, Matt’s brother, you caused him to kill himself! Don’t you dare try to deny it! You aren’t going to get anything out of me! Those who dare to defy shall die!” You know that he is going to try to kill himself, so you inject him with a paralysis poison that deemed him unable to move.")

    alert("You inspect his numb body and see the same insignia as on the other machines and people, the letter “T” was visible while the rest were burnt off. You touch the insignia and it feels hot. Before you can register what was happening, Matthew’s body bursts into flames, leaving no evidence behind. At least you were one step closer to solving the mystery.")

    alert("The next day, your break ends. You report back to work and is tasked with the mission of going to the city of Metropolis that is in the state of Illinois to investigate the case of toxicus inundatios (Toxic floods) turning up in different places of the city. You decide to go to the previous sites of the floods to see if you can find any clues there.")

    let rite16 = "A"
    let rite16_1 = "B"

    let Question16 = prompt("You go down the sewers to see if anything is going on, but not before putting on your protective gear to avoid corrosion of your body. As you go down into the sewers, you notice weird numbered pipes that look different from the normal pipes that were installed by the head officers. Do you\nA) Follow the pipes to where they lead\nB) Investigate the pipe\nC) Swim in the water")

    if (Question16 === rite16) {
        alert("You found a machine that makes the reservoir overflow…")
    } else if (Question16 === rite16_1) {
        alert("You find a button, press it and release all the toxic water, killing yourself. However, you release all the water that was meant to kill the residents of Metropolis. (Try Again Hero)")
        throw new Error();
    } else {
        alert("You die, duh.(Try Again You Dimwit)")
        throw new Error();
    }

    alert("You decide to inspect the machine. You finally find out that the machine has the letter “Y”on it. You compile all the letters together and get the word “SAUCIETY”. Ï should have known it was them! This must have all been part of The Uprising!” You hurriedly send a message back to your superior telling him that you have found out about who was behind everything. After that, you get back to the problem at hand, the machine. You blow up the machine and sped back to the HQ, preparing to gear up for the war to come.")
}
