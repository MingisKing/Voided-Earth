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

    alert("Use the link to go to part 2.")
}
