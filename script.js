// === GF4L script.js ===

const firebaseConfig = {
  apiKey: "AIzaSyDUC7mBCT4R_t3buPLDrDA-GQWGmYEyBnw",
  authDomain: "gf4l-ca7e2.firebaseapp.com",
  databaseURL: "https://gf4l-ca7e2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gf4l-ca7e2",
  storageBucket: "gf4l-ca7e2.appspot.com",
  messagingSenderId: "893712610424",
  appId: "1:893712610424:web:5b0db3683d1aff2667298d"
};

// === LEVELNAMES 0–500 ===
const levelNames = [
  "Energiløs Latsabb", "Sovende Komapost", "Løftesky Skybert", "Feit Fjøsgris", "7 Days to Diet", // 0-4
            "Lat Ark-ologist", "Star Sloth", "Løpe? Nei Takk", "Vandrende Flesk", "Kaffekoppknekker", // 5-9
            "Sliten Speider", "Jogge-Sabotør", "Dørstokkmila Veteran", "Kardio-Kylling", "Feit Survivor (ARK-edition)", // 10-14
            "Couch Potato 9000", "Zombie-Mat (7 Days)", "Fett i Farlig Fart", "Uninstall Gym Sim", "Dronken Drikkebelte", // 15-19
            "Pulsklokka Streika", "Dinosaurus Feitus (ARK)", "Biceps? Aldri Hørt Om", "Fett i Fritt Fall", "Kompost-latens", // 20-24
            "Rage-Quit Jogger", "Loot-crate Lurker", "Lat Spacefarer", "Aerob-Nekter", "Kondis Kollapse", // 25-29
            "Treig Tek Rex (ARK)", "Matpause-Mester", "Fettfinger Fighter", "Treningsnekter Prime", "Fett-tralla på turbo", // 30-34
            "Kantinemage Commander", "Jaktet av Fett-Raptors", "Fitness Feilstart", "Space-Burger Banditt", "Vegetar-Zombie", // 35-39
            "Fettbrann Slukker", "Varmmat-Veteran", "Overopphetet Kosedress", "Fettgass Farmer", "Fettfiasko Frontier", // 40-44
            "Push-up Pøbel", "Inaktiv Inventar", "Pustepause Pilot", "Kebab-Kriger", "Star Citizen, Feit Edition", // 45-49
            "Latskapens Overlevende", "Fettlaget Explorer", "Base Builder med Burgerbehov", "Ark-Huleboer med Hoffnarrmage", "Løpende Latmann", // 50-54
            "T-Rex med T-skjorte for Trang", "Burpee-Flopper", "Zombiebait med Zumbaangst", "Kardio-Katastrofe", "Dino-napper", // 55-59
            "Løftefobi Lord", "Dodgeball Deserter", "Frityr-Forsvarer", "ARK-noob med ab-crunch-anfall", "Kroppsvekt-Kunstner (uten øving)", // 60-64
            "Feitmen i Rustning", "Gassmaskeglad Gomp (7DTD)", "Loot før Lungene", "Fettkontroller i Freefall", "Star Pølsegutt", // 65-69
            "Pre-workout Panikk", "Hopp over Leg Day", "Kraftig Karbonader", "Fettfredag Fanatiker", "Latmus Prime", // 70-74
            "Fettbuffer Brawler", "Benkpress Beklager", "Sliten Scout (SC)", "Feitest i Fracture Space", "Muffinsmodus Mekaniker", // 75-79
            "Grumpy Gains Gnome", "Struts med Stepskrrekk", "Fettfeita Fleet Commander", "Knestående Kraftløs", "Lat Lystløgner", // 80-84
            "Proteinshake Posør", "Helsefare i Hengekøya", "Superslow Survivor", "Fettfarm Farmer Joe", "Dodge ‘n’ Donuts", // 85-89
            "Vaffel-Veteran", "Zzz-Zone Zero", "Lat på Lave Oksygennivå", "Kraftløs Krigshelt", "Lårskjelver på Lavgear", // 90-94
            "Fett og Farlig i Fjellheimen", "Fett-Enhanced Fighter", "Løpemotstander med Lathetslisens", "Squatless Wonder", "Commander Couchpotato", // 95-99
            "Dodo-Mester Deluxe", "Sulten Bronto på Sukkersjokk", "Kardio-Kråke fra Klatrefobi", "Lat Loot Llama (importert)", "Fettbasert Frontsoldat", // 100-104
            "Star Citizen med Stramme Skritt", "Proteinfiendtlig Pteranodon", "Zombieknekt uten Knekk", "Oksygensvett Overlevingsnarkis", "Dino-Dansende Dessertglad", // 105-109
            "Jetpack-Jan med Jojo-diett", "Pølsepress-Pilot", "Kraftløs Kompanjong (ARK Tribe)", "Feit Feltsjef", "Staminasvak Scout", // 110-114
            "Muffins-Muncher med Minigun", "Lat Latamaster (7DTD versjon)", "Hodeskalle-Henger i Hengekøya", "Tyrannosaurus Trøtt", "Sofa-Strateg i Starbase", // 115-119
            "Donut-Dodo Defender", "Lat-Giga Tammer", "Slapp i Saddle (riding skill: 0)", "Proteinpanisk Pyroman", "Fettfiksert Feral Fighter", // 120-124
            "Fettfiendtlig Flyer", "Buffless Bronto-Bro", "Skritteller-Sabotør", "Svimete Sabertooth", "KardioKollapser i Kommandodrakt", // 125-129
            "Fett-Heavy Heavy", "Lat-Lasher i Light Armor", "Feit Fenrisulv-Fanger", "Couch-Clinger Commander", "Pustepause Paladin", // 130-134
            "Staminasviker i Skyttergrav", "Dessert-Diplomat i Doom", "Svett i Spacetaxi", "Dodo-Fencer", "Bronto-Bouncer med Bakrus", // 135-139
            "Fettpanser Pilot", "Slowmo Sniper (ARK PvE)", "Sulten Survivor med Sideskjegg", "Stappfull Starfarer", "Latstyrt Loot Looter", // 140-144
            "Guffen Giga med Godterisporer", "Svett i Saddelen", "Fettarmada General", "Nap Queen of 7 Days", "Sko-fobisk Speider", // 145-149
            "Deigete Dino-Dompteur", "Buffløse Blærefanter", "Frityr-Favoritten i Fjellbase", "Knebeskytter-Klovn", "Proteinprell på Patrol", // 150-154
            "Respawn-Rebell uten Rundkast", "Fritids-Feiter med Fjernkontroll", "Jetpack-Jabba", "Fettfelgen Fighter", "Dodo-Diver med Donutdiett", // 155-159
            "Loot-Lat på Langtur", "Sitronskviset Scout", "Bronto-Bergenser", "Kraftløs Cargopilot", "Zombie-Zoner på Zumba", // 160-164
            "Saft-Sippende Stegosaurus", "Fett & Furious", "Fettforkledd Farlighet", "Skrittsparedinosaur", "Dessertdrevne Droner", // 165-169
            "Fleskefin Fighter", "Kardiosky Kaptein", "Feit Feltrapportør", "Løpebort-Legende", "Fettstartet Freelancer", // 170-174
            "Skulderklapp-samler", "Zzz-bunker Befaler", "Avocado-Aggressor", "Kalorikarusell Kaprer", "Matpakke-Monark", // 175-179
            "Treige Tek Tyrant", "Cheeto-Chomper fra Citadel", "Svettbaron i Stjernehavn", "Treningsvegrer-Veteran", "Late Loot Lord", // 180-184
            "Dino Dørvakt", "Fett i Fart", "Planleggingsfase-Pegasus", "Muffinsmaskin Mekanikus", "SofaSovereign", // 185-189
            "Latigatoren", "KakeKommandør", "Pauseskjerm-Paladin", "Fettbasert Fangevokter", "Narkoberry-Narkoman", // 190-194
            "Tungtbelastet Tanktop-Tyrann", "Dodo-Diktator", "Bronto-Bamse med Bicepsfrykt", "Loot-Legende på Lavpuls", "Fettfyrst av Fjernlandet", // 195-199
            "Trøtt Tyrannodausaurus", "Sulten Star Whale", "Latsabb på månebase", "Dodo Dronning", "Feit Fjellzombie", // 200-204
            "Bambi på proteinshakes", "Fettberg i romdrakt", "Kokt Kompysalat", "Svett Spino med ølbæltet", "Hardcore Hamsterhjul", // 205-209
            "Bronto som nekta cardio", "Nøtt i Navesgane", "Rømt fra Rec Room", "Dronedame med donuts", "Lat med laserkanon", // 210-214
            "Kompressor-Karen", "Buff, men bare i cutscenes", "AFK Apokalypse", "Ryggsøyle av gummi", "DoomGuy på donutdiett", // 215-219
            "Narkobear i PvE", "Feit Raptor med Crocs", "Vinglete Voxelkonge", "NAKEN OG RASENDE", "T-rex med treningsnekrose", // 220-224
            "Fettleif på hoverboard", "Stakkarslig Space Viking", "Muskelmugg i minibuss", "Kvernet Quetzal", "Pinglepilot i pyro-pyjamas", // 225-229
            "Proteinpudderpresten", "Zombiegamp med glidematte", "Fettbryter 3000", "Spekkhogger på bootcamp", "Dronemage i feil univers", // 230-234
            "BrontoBootyMaster", "Skjelvende skrotløfter", "Latmannsløype Legend", "Sovemodus aktivert", "Baconbaron i baris", // 235-239
            "Tordenfeit Torsk", "PT med PTSD fra leg day", "Sushisamurai på diett", "Feit Fenrisulv med fetisj", "Kompis med knekk i korsryggen", // 240-244
            "Kardio? Nei takk-Kongen", "Dodo Dommedagsprofet", "Dinosaur i dvale", "Snuble-soldat fra Star Marine", "Gåstol Gladiator", // 245-249
            "PvZ: Plantet seg fast", "Aimbot, men for sofaen", "Tjukk i trynet og stolt", "7 Days to Die(t)", "Fettfiasko på fjelltur", // 250-254
            "Overlevelsesekspert i BH", "Prustende Pteranodon", "ProteinPadde", "Zed med Zoomfobi", "Chill-Rex på sykkelsete", // 255-259
            "Fettfarm Farmer", "Rømmende Rumpelunk", "Bootybaron fra Bronto-Bay", "Latlifter fra Lavlandet", "Sulten Sabertooth", // 260-264
            "Kakekriger i kamuflasje", "Ræv-Robot i Rust", "Laktosekriger uten plan", "Treningsnarkoleptiker", "Fettsekk i frontlinja", // 265-269
            "Helikopter-Henning", "Zombiefett med sixpack", "Dino med dødsangst for burpees", "Latskalle fra Lazarus-planet", "Flåsende Fettfirefly", // 270-274
            "Dødens DonutDisippel", "PvP på PizzaPlanet", "Kroppsvekt: JA", "Spacetrooper med strekk", "Proteinrakett med mageknip", // 275-279
            "Fetttrøbbel i Fjordzone", "Svett i Subnautica", "Donut-Dronning fra Duna", "Latlux Lurker", "Fettfuru på måneskinsjogg", // 280-284
            "Suppe-Spino i superundertøy", "Loothoarder med lårkrampe", "Latskapens Overlord", "BootcampBaron av Bø", "Fettfrekvens 9000", // 285-289
            "Buff bak en skjerm", "Dødlig Donutdiplomat", "Steinalder Sumo", "StaminaSkrue", "LatZilla vs KetoKong", // 290-294
            "Dodo med dumbbells", "Fettflukt fra Fjellbase", "Ragequit-Runner", "PoopMaster i PaleoPark", "Leg Day Lost Soul", // 295-299
            "Proteinshake med promille", "Astma-Raptor på el-scooter", "Dodo med donuts og Daddy-issues", "Buff bronto med BHen feil vei", "Zombiekondis som snorker", // 300-304
            "Dverg-Titan med chipsavhengighet", "Fettfløyel i full galopp", "Laserpung på lavkarbo", "Muskel-Jabba fra Mos Espa", "Triceps-T-rex med tomme tanker", // 305-309
            "Snuble-Sabertooth i speedo", "Hardcore-Høne med hjulbeinsfobi", "Kardio-Kraken på karaokebar", "Fettmedaljong i feil univers", "PvE-Pungdyr med pollenallergi", // 310-314
            "Benchpress-Bjørn på bensin", "Kremtoppen fra Katastrofeklanen", "Løpe-Latmask i latex", "Buff-Zombie med boccia-belter", "Kalori-Kalkun fra kantina", // 315-319
            "Lattersjokk i leggings", "Dinosaur med depresjon og dadler", "Svett-Space Marine på sparkesykkel", "Støl i stjernebassenget", "Magemuskel-Mammut med melkeskvulp", // 320-324
            "Overkokt Oviraptor med OCD", "Tyggegummi-Tyrannosaurus", "Donut-Dronning på do", "Rage-Rein i rottetruse", "Oppblåsbar Oppsynsmann", // 325-329
            "Kardio-Kålorm med kampinstinkt", "Fettfiesta på Fjelltoppen", "Zombie med Zumba-angst", "Superlat Søppeldrager", "Fett-fett-fettere fra Frøya", // 330-334
            "Protein-Potet i power-pose", "Stjerne-støgg og stolt", "Lårklask-Lama i latex", "Vræle-Viking på vektreduksjon", "Space-Bacon på springmarsj", // 335-339
            "Donut-Diplodocus med diabetes", "Fettknapp på full guffe", "Kardio-Kompost med krøll", "Latterlig Lat-Lynx", "Gal-Giga med godteskjegg", // 340-344
            "Buff og Blind på samme tid", "Fett-Emo på elipse", "PvP-Pingvin med panikk", "Ryggsekk med rocka rumpe", "Gass-Gigant på grøtdiett", // 345-349
            "Biceps-Bamse med barnebukse", "Muskelfjert fra Månebase", "Bronto-Ballong med blodsukkerfall", "Elg-Eminem i eksistensiell krise", "Latsabb Luchador", // 350-354
            "Galaktisk Gummibjørn", "Pølse-PT fra Pluto", "Spekkgiraff på snur", "Fett-fotograf med fettfilter", "Twerk-T-rex med tinnitus", // 355-359
            "Muskelsløv Muldvarp", "Karbo-Krokodille i krise", "Svette-Sith med situpsfobi", "Fettlokk i fartsdress", "Donut-Direktør på deadline", // 360-364
            "Rølpe-Rav i romdrakt", "Late Lunge-Lama", "BrontoBiff med badering", "Smågodt-Sentinel", "DildoDodo med dumbbells", // 365-369
            "Fett-Utpost i feil galakse", "Muskelmygg i Minecraft", "Ræv-Raptordans", "Kardio-Kylling med kraftig kjøttfeber", "Overkokt Orangutang", // 370-374
            "Zombielår med zitzapper", "Fettfeber på Fjortisnivå", "Musklene sover – hjernen og", "Sitrondiett-Spacecowboy", "Svette-Skorpion med skammekrok", // 375-379
            "Benpresse-Bjørn med bleie", "Fett-Bard i bikini", "Donut-Dreper med dystopi-diett", "Astro-Latsabb på lavblods", "Muskelfritt Marsvin", // 380-384
            "Kalorikrig med knyttneve", "Pinglepilot med papirlår", "Tynnfeit Triceratops", "Proteinpirat på plattform", "Space-Kebab med kastestjerner", // 385-389
            "Fettvulkan med frityrfett", "Mageknip-Mantis på monsterenergi", "Kake-Kriger fra Kandisbyen", "Burpee-baron med brokk", "Kardio-Klovn med krokfot", // 390-394
            "PvE-Prest med pumptrack-prestisje", "Rage-rein med ryggsår", "Donut-Spion med dobbelt hake", "Fett-Apokalypse nå", "Muskelsvinnets Messias", // 395-399
            "Kardio-Kadaverdans", "Fett-Fury fra Fjæra", "ZombieSquats med zombietid", "Lårskjelver med laservåpen", "Proteinpudding på pansersko", // 400-404
            "Kalori-Kanari", "Fett-sfinx med stretchbukse", "Triceps-Tyrann med T-rex-trøkk", "Zumba-Zombie på Zoloft", "BrontoBokser på baris", // 405-409
            "FettFiasko fra Fortnite", "Hormon-Hamster på Hula-hoop", "Svette-Sergeant på sofa", "Kardio-Koala med cupcake-fobi", "Gasspingvin med gains", // 410-414
            "Latlapp i latex", "Pølseprins fra Prolapsplanet", "Donut-godzilla med diabetes deluxe", "Muskeldiktator i Minecraft-misjon", "Protein-Pikachu på puddingkur", // 415-419
            "Fettbombe med føtter", "DinoDandy med dustete dumbbells", "Rævrevnet Robot", "Galaktisk Gulasj-Gamer", "PvP-Panda på paracet", // 420-424
            "Fett-fantom i Fortnite-fly", "Zombiefjes på fjelltur", "Muskel-Marit med melkesyre", "Oppblåsbar Ostepopp", "Kardio-Karate Kid", // 425-429
            "Dinosaur med dataspilldepresjon", "Lat-Kommando med kakekanon", "Fettpåfyll fra Fiasko-planet", "Dumbbell-Dobby i dobeltdose", "FjertFit 9000", // 430-434
            "Kardio-Krøpling i krykker", "Trenings-Taco på tur", "Ræv-Raider fra Rust", "Fett-Oracle med Oculus Rift", "DodoDiktator med dumbbells", // 435-439
            "Zombie med Zeppeliner", "Kosedyr-Kung Fu", "Donut-deadlift Disaster", "Muskelflukt fra Mummidalen", "Latterlig Latmageddon", // 440-444
            "PvE-Potet i panicmode", "Kardio-Kalkun fra Katteplaneten", "Protein-Preben på puddingprosjekt", "Fett-Fantom i Froskehopp", "Dumbbell-Direktør med databriller", // 445-449
            "Triceps-Tragedie på tredemølle", "Magefett-Megatron", "Svett-Spacelord på sofaferd", "DodoDoom på donuts og despair", "Fettspøkelse i Fortnite", // 450-454
            "Kardio-Krise-Kristian", "Muskeldamp fra Minecraft-minen", "PvE-Prinsessa på pølseløft", "Fettflagg i flammer", "Dumbbell-Deimos i dorullrustning", // 455-459
            "Kalori-Kriger fra Kuskitkroken", "Fett-Kake-Krutt", "Svett-Zebra på zzz-piller", "Muskel-Mekker på melkekur", "DodoDommedag", // 460-464
            "Kardio-Klovn i krabbegir", "ProteinPiraya fra Planet P", "Fett-Fiesta på fullstendig feil planet", "Snuble-Saber-Tooth i snøstorm", "Zombieløft med ZZZ-top", // 465-469
            "Lat-Lord av Lavt Stamina", "T-rex-Tøffing med treningsvegring", "Donut-Predator på Pogo-stick", "KardioKlaus med kakekaos", "Muskel-Mutant i muffinsmodus", // 470-474
            "Fett-Bastion av Bobleplast", "Snorke-Sith på snappekur", "Protein-Pappskalle på Planet Fit", "Pølse-Paladin fra PvP-Paradiset", "Fett-Fabel fra Fjellfiaskoen", // 475-479
            "Latskapens Lorax", "Donut-Demon i DodoDrakt", "FettFighter 4000", "Kardio-Kongle på karbo-kick", "Muskler i minus med monster-trøkk", // 480-484
            "Rage-Raider på Ribbebuffet", "Fettmekker fra Fjordby", "Dumbbell-Drage med diett-trøbbel", "Svette-Sau fra StarBase", "Bronto-Beist på burgerkurs", // 485-489
            "Zumba-Zebra med zombielus", "Kardio-Karambola", "Feit Farao fra Fortnite", "Lat-Lynx med laserbiceps", "Muffin-Master fra Muskelverden", // 490-494
            "PvE-Pølse i pappkropp", "Fett-Kriger i Fortnite-Fjell", "Donut-Darklord med dadelbiceps", "ZombieZillah på Zzz-top", // 495-499
            "Overpowered Super Gamer! 💪🕹️👑", // 500
];

let currentUser = null;

window.addEventListener("DOMContentLoaded", () => {
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();



  const userSelect = document.getElementById("user-select");
  const loginBtn = document.getElementById("login-btn");
  const status = document.getElementById("status");

  db.ref("users").once("value").then(snapshot => {
    const users = snapshot.val();
    for (let username in users) {
      const option = document.createElement("option");
      option.value = username;
      option.textContent = username;
      userSelect.appendChild(option);
    }
  });

 loginBtn.addEventListener("click", () => {
    const username = userSelect.value;
    const pw = document.getElementById("pass").value.trim();
    if (!username || username === "Velg bruker") return alert("Velg en bruker!");

    if (pw.toLowerCase() !== username[0].toLowerCase()) {
      return alert("Feil passord. Hint: Første bokstav i brukernavnet.");
    }

    currentUser = username;
    loadUserData(username);
  });

  function loadUserData(username) {
    db.ref("users/" + username).once("value").then(snap => {
      const data = snap.val();
      if (!data) return status.textContent = "Fant ikke brukerdata";

      const xp = data.xp || 0;
      const level = getLevelFromXP(xp);

      status.innerHTML = `
        <h2>${username}</h2>
        <p>XP: ${xp}</p>
        <p>Nivå: ${levelNames[level] || "Ukjent"} (Level ${level})</p>
      `;

      updateUserLevel(username, xp);
    });
  }

  function getLevelFromXP(xp) {
    return Math.min(Math.floor(xp / 10), levelNames.length - 1);
  }
});
