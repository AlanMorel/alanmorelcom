var data = {
    contacts: {
        "Github": "https://github.com/AlanMorel",
        "LinkedIn": "https://linkedin.com/in/AlanMorel",
        "Facebook": "https://www.facebook.com/SharpAceX",
        "Twitter": "https://www.twitter.com/SharpAceX",
        "Email": "mailto:alan.morel@nyu.edu",
        "Resume": "/resume",
		"Medium": "https://medium.com/@alanmorel",
        "Instagram": "https://instagram.com/SharpAceX"
    },
    projects: {
        "sabe": {
            name: "Sabe.io",
            background: "#26272f",
            color: "#ffffff",
            date: "September 2017",
            description: "Sabe is an online destination for free high quality web development tutorials, classes and resources. Sabe is the place to learn HTML, CSS and JavaScript! Browse high-quality classes, tutorials and resources on front-end development so you can master the web.",
            images: ["image1", "image2", "image3"],
            technologies: ["PHP", "HTML", "CSS", "JavaScript"],
            platforms: ["Web"],
            links: {
                "Sabe.io": "https://sabe.io/"
            },
        },
        "aria": {
            name: "Aria",
            background: "#414caf",
            color: "#ffffff",
            date: "May 2017",
            description: "Aria is an open-source front-end for a CMS for the MMORPG MapleStory written using React.",
            images: ["image1", "image2", "image3"],
            technologies: ["React", "HTML", "CSS", "JavaScript"],
            platforms: ["Web"],
            links: {
                "Live Demo": "https://aria.austinradams.com/",
                "Github": "https://github.com/AlanMorel/aria"
            },
        },
        "solaxia": {
            name: "Solaxia Online",
            background: "#88a0d6",
            color: "#000000",
            date: "May 2017",
            description: "Solaxia Online is an 2D side-scroller MMORPG with the core written in Java and the scripts in Python.",
            images: ["image1", "image2", "image3", "image4", "image5"],
            technologies: ["Java", "libGDX", "Python"],
            platforms: ["Windows", "Mac"],
            links: {
                "Download for Windows": "downloads/solaxia.zip",
            },
        },
        "trumpulse": {
            name: "Trumpulse",
            background: "#2f61de",
            color: "#ffffff",
            date: "April 2017",
            description: "Trumpulse uses data from multiple news sources so you can get the pulse of America under Trump. Using data from various news sources and social networks like Facebook and Twitter, you can get a diverse picture of the state of America under the Trump administration.",
            images: ["image1", "image2", "image3"],
            technologies: ["Angular.js", "Electron", "Cordova", "PHP", "News API", "Facebook API", "Twitter API"],
            platforms: ["Android", "Web", "Windows", "Mac"],
            links: {
                "Google Play": "https://play.google.com/store/apps/details?id=alanmorel.trumpulse",
				"Download for Windows": "downloads/trumpulse.zip",
                "Demo": "https://alanmorel.com/trumpulse",
                "Github": "https://github.com/AlanMorel/trumpulse"
            },
        },
        "wasdwithme": {
            name: "WASD With Me",
            background: "#5a26a5",
            color: "#ffffff",
            date: "February 2017",
            description: "WASD With Me is the online destination to meet and play with gamers. Discover and connect with gamers, set up gaming sessions and browse other gamers' libraries.",
            images: ["image1", "image2", "image3"],
            technologies: ["Node.js", "Express.js", "MondoDB", "Handlebars.js", "Socket.io", "Stylus", "IGDB API", "News API", "Steam API", "Twitch API"],
            platforms: ["Web"],
            links: {
                "Live Demo": "https://wasdwithme.herokuapp.com/",
                "Github": "https://github.com/AlanMorel/wasdWithMe",
            },
        },
        "zhigly": {
            name: "Zhigly",
            background: "#db3030",
            color: "#ffffff",
            date: "March 2016",
            description: "Zhigly is a hub where you can connect with your college campus. It allows you to look for items you'd like to buy or sell, browse upcoming on-campus events, search for jobs/internships/opportunities, look for housing, and much more.",
            images: ["image1", "image2", "image3"],
            technologies: ["ASP.NET", "C#", "Facebook SDK", "Twitter SDK", "Google+ API", "Imgur API"],
            platforms: ["Web"],
            links: {
                "Live Demo": "https://zhigly.gear.host/",
                "Github": "https://github.com/AlanMorel/zhigly",
            },
        },
        "metronavigator": {
            name: "Metro Navigator",
            background: "#1d4f88",
            color: "#ffffff",
            date: "February 2014",
            description: "You’ll be able to find out the shortest routes between two stations, read the statuses of train lines and view the official map. It’s extremely useful for both experienced riders and newcomers to New York’s transportation system.",
            images: ["image1", "image2"],
            technologies: ["C#", ".NET"],
            platforms: ["Windows"],
            links: {
                "Download for Windows": "downloads/metronavigator.zip",
            },
        },
        "chainball": {
            name: "Chainball",
            background: "#c33a5a",
            color: "#ffffff",
            date: "July 2014",
            description: "Use your fast reflexives to build yourself a chain as you navigate the endless stream of circles. Hit the blue and green circles while avoiding the red and gray ones to score as high as you can. When you’re finished, brag to your friends and challenge them to score higher than you in Chainball!",
            images: ["image1", "image2", "image3"],
            technologies: ["Java", "libGDX"],
            platforms: ["Android"],
            links: {
                "Google Play Store": "https://play.google.com/store/apps/details?id=com.luminositygames.chainball.android",
                "Github": "https://github.com/AlanMorel/chainball",
            },
        },
        "wavewarriors": {
            name: "Wave Warriors",
            background: "#f2ba00",
            color: "#000000",
            date: "December 2015",
            description: "WaveWarriors is a local multiplayer zombie-style survival game played using Xbox Controllers. Play for as long as you can as the waves of enemies get larger, faster and stronger. It supports up to 4 players so grab a few friends, connect your controllers and start working together!",
            images: ["image1", "image2", "image3"],
            technologies: ["Java", "Processing"],
            platforms: ["Windows", "Mac", "Linux"],
            links: {
                "Github": "https://github.com/AlanMorel/WaveWarriors",
            },
        },
        "pokedex": {
            name: "Pokédex",
            background: "#252525",
            color: "#ffffff",
            date: "April 2016",
            description: "Pokédex is a fun web app that you can use to learn more about Pokémon and play the famous 'Who's that Pokémon?'' game. It is a Flask fullstack web app powered by data provided by PokéAPI.",
            images: ["image1", "image2", "image3"],
            technologies: ["Python", "Flask", "PIL", "Requests", "PokéAPI"],
            platforms: ["Web"],
            links: {
                "Live Demo": "https://alanmorel.pythonanywhere.com/",
                "Github": "https://github.com/AlanMorel/pokedex",
            },
        },
        "sonar": {
            name: "Sonar",
            background: "#0b6cb3",
            color: "#ffffff",
            date: "August 2015",
            description: "Sonar allows you to easily see performance attributes of websites as you browse the web. This helps both end-users and developers understand why a webpage might be slow or experiencing problems. With Sonar, you can quickly identify how long a page took to load, the size of the page in bytes, if any requests caused bottlenecks, the number of hosts that served content, and details about the type of files delivered.",
            images: ["image1"],
            technologies: ["Chrome API", "HTML", "CSS", "JavaScript"],
            platforms: ["Chrome"],
            links: {
                "Promotional Page": "http://pages.catchpoint.com/sonar.html",
                "Chrome Web Store": "https://chrome.google.com/webstore/detail/sonar/dibilcjfahbokhiodajibcajcabfjein"
            },
        },
        "smoothietycoon": {
            name: "Smoothie Tycoon",
            background: "#ffa200",
            color: "#000000",
            date: "September 2014",
            description: "Start off small as you sell smoothies on the streets of New York to build your smoothie stand. Buy supplies and set your own price, and determine your own destiny!",
            images: ["image1", "image2", "image3"],
            technologies: ["Java", "libGDX"],
            platforms: ["Windows", "Mac", "Linux"],
            links: {
                "Download": "downloads/smoothietycoon.zip",
                "Github": "https://github.com/AlanMorel/smoothie-tycoon",
            },
        },
        "mars2o": {
            name: "Mars2O",
            background: "#bab9cc",
            color: "#000000",
            date: "October 2015",
            description: "Mars2O is a fun arcade game for Windows and Mac. You're tasked with returning back water from Mars, but there's just one problem: the asteroid belt is abnormally turbulent! Dodge asteroids and refuel your spaceship throughout your journey back to Earth.",
            images: ["image1", "image2", "image3"],
            technologies: ["Java", "Processing"],
            platforms: ["Windows", "Mac", "Linux"],
            links: {
                "Github": "https://github.com/AlanMorel/Mars2O",
            },
        },
        "balloonfrenzy": {
            name: "Balloon Frenzy!",
            background: "#78b7ff",
            color: "#000000",
            date: "August 2011",
            description: "Start off with one balloon and soon end up with many! Every 5 levels unlocks yet another balloon so things will become interesting real quick! Your goal is to obtain as high of a score as possible without missing too many balloons.",
            images: ["image1", "image2", "image3"],
            technologies: ["Java", "PHP"],
            platforms: ["Android"],
            links: {
                "Google Play Store": "https://play.google.com/store/apps/details?id=com.sharpacex.BalloonFrenzy",
            },
        },
        "dangerzone": {
            name: "Danger Zone",
            background: "#e2e2e2",
            color: "#000000",
            date: "June 2012",
            description: "Your job is simple. Just survive. With just your jumping and ducking skills at your disposal, you will need to avoid incoming missiles to keep yourself alive. The longer you can stay alive, the more score you’ll earn! At the end of the game your performance will be ranked from an (A+) to and (F-)! Be warned, this can get addicting!",
            images: ["image1", "image2", "image3"],
            technologies: ["Java", "PHP"],
            platforms: ["Android", "Windows"],
            links: {
                "Download for Windows": "downloads/dangerzone.zip",
                "Google Play Store": "https://play.google.com/store/apps/details?id=com.sharpacex.dangerzone",
            },
        },
        "flash": {
            name: "Flash",
            background: "#781ab5",
            color: "#ffffff",
            date: "March 2014",
            description: "If you want to have the benefits of physical flash cards with the flexibility and convenience of a program on your computer then Flash is the right program for you. Using Flash, you will be able to create flash cards in which you can use to study for your next final, midterm, or anything you’d like!",
            images: ["image1", "image2", "image3"],
            technologies: ["C#", ".NET"],
            platforms: ["Windows"],
            links: {
              "Download for Windows": "downloads/flash.zip",
            },
        },
        "sacredfire": {
            name: "Pokémon: SacredFire",
            background: "#c84000",
            color: "#ffffff",
            date: "October 2009",
            description: "You’re a teenage kid living in Wingpoint Town. Life was all good until about 3 weeks ago. Your Mom has had enough of Team Rocket. After weeks of news reports of Team Rocket abusing wild and legendary Pokémon, your Mom decides to do her best to protect you. From the start, you were destined to take action. Now you are thrown into a world where it’s you against the most powerful, evil and well-known corporation in the world. Your mission is to save the abused Pokémon, your family, and defend the honor of your hometown.",
            images: ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10"],
            technologies: ["Assembly"],
            platforms: ["Game Boy Advance", "Windows", "Mac"],
            links: {
                "Pokémon: SacredFire Patch File": "/downloads/sacredfire.zip",
                "Lunar IPS (LIPS)": "https://fusoya.eludevisibility.org/lips/",
                "Pokémon: FireRed ROM": "https://www.loveroms.com/download/gameboy-advance/pokemon-fire-red-version-u-/39",
                "Visual Boy Advance": "https://sourceforge.net/projects/vba/",
            },
        },
        "khaos": {
            name: "Khaos Map",
            background: "#355d2a",
            color: "#ffffff",
            date: "June 2013",
            description: "This program allows you to easily to create and modify maps for the now-canceled game, Khaos Online. Places tiles, switch tilesets, save and load maps with ease.",
            images: ["image1"],
            technologies: ["C#", ".NET"],
            platforms: ["Windows"],
            links: {
                "Download for Windows": "downloads/khaos.zip",
            },
        },
        "quadratix": {
            name: "Quadratix",
            background: "#d6d6d6",
            color: "#000000",
            date: "October 2013",
            description: "Need help FOILing? Do you have a terrible math teacher? Wish you could easily factor your quadratics? Want to figure out the distance and slope between two points? Look no further than Quadratix! This program does exactly that! Enter either your factors or your quadratic and it will instantly solve it for you! Enter two points on the right and it will give you the slope and distance between those two points!",
            images: ["image1"],
            technologies: ["C#", ".NET"],
            platforms: ["Windows"],
            links: {
                "Download for Windows": "downloads/quadratix.zip",
            },
        },
        "alancryption": {
            name: "Alancryption",
            background: "#e69806",
            color: "#000000",
            date: "June 2013",
            description: "Tired of the NSA reading your conversations on Skype? Want a way to ensure your text is unreadable to humans? Look no further than Alancryption! This neat little program allows you to instantaneously encrypt any text. The encrypted text can then easily be converted back to its original form.",
            images: ["image1"],
            technologies: ["C#", ".NET"],
            platforms: ["Windows"],
            links: {
                "Download for Windows": "downloads/alancryption.zip",
            },
        },
        "prime": {
            name: "Prime Factorizer",
            background: "#d6d6d6",
            color: "#000000",
            date: "September 2013",
            description: "This program does what its name implies; it prime factorizes any number you put into it. It’s that simple. Enter a number and it spits out all the factors that make up that number. Pretty neat, huh?",
            images: ["image1"],
            technologies: ["C#", ".NET"],
            platforms: ["Windows"],
            links: {
                "Download for Windows": "downloads/prime.zip",
            },
        },
    }
};
