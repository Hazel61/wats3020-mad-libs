// WATS 3020 Mad Libs Assignment

// This JavaScript file takes input from the user and creates a Mad Lib of the Walt Whitman poem O Captain, My Captain.

// The prompts to take input. Defaults are for testing.
let honorific = prompt("Please enter an honorific title (e.g. Mister or Colonel).", "Prince");

let authorName = prompt("What is your full name?", "Bilbo Baggins");

let adjective1 = prompt("Please enter an adjective", "hairy");

let vehicle = prompt ("Please enter a mode of transportation (e.g. plane, boat, etc.).", "zeppelin");

let vehiclePart = prompt("Please enter a part of the vehicle you just named.", "hydrogen");

let parking = prompt("Please enter a location where you park the vehicle you just named.", "hanger");

let precious = prompt("Please enter a precious object.", "ring");

let noiseMaker = prompt("Please enter a word for something that makes a sound.", "roar");

let crowdBehavior = prompt("Please enter a word for something that people do together as a group", "journey");

let adjective2 = prompt("Please enter another adjective", "strong");

let adjective3 = prompt("Please enter yet another adjective", "brave");

let color = prompt("Please enter a color", "green");

let familyMember = prompt("Please enter a word for the name of a family relationship (e.g. sister, father, etc.).", "Uncle");

let organ = prompt("Please enter the name of a body organ (e.g. heart, liver, spleen, etc.).", "heart");

let bodyPart1 = prompt("Please enter the name of a body part.", "hands");

let bodyPart2 = prompt("Please enter the name of yet another body part.", "feet");

let bodyPart3 = prompt("Please enter a third body part.", "nose");

let thing = prompt("Please enter a word for any object.", "mountain");

let thing2 = prompt("Please enter an object you might give somebody you love.", "a hand-knit sweater");

let thing3 = prompt("Please enter an object you might give somebody you like.", "chocolate");

let adjective4 = prompt("Please enter an adjective to describe your vehicle", "small");

let adjective5 = prompt("Please enter another adjective to describe your vehicle", "shiny");


////////////////////////////////////////////////////////////////////////
// Section Numbers
//
// The poem we are using has section numbers. Let's allow the user to
// generate their own.
//

let userNumber = prompt("Please enter your favorite non-zero number", 7);
number2 = userNumber * 3;
number3 = userNumber + 9;


// The code below his line handles variable replacement into the HTML file.
// Please do not edit this code unless you are attempting a stretch goal.

let titleText = `O ${honorific}! My ${honorific}! by <small>${authorName}</small>`;
let titleHeading = document.querySelector("#madlib-title");
titleHeading.innerHTML = titleText;

let storyText = `

    ${userNumber}
    O ${honorific}! my ${honorific}! our ${adjective1} trip is done;
    The ${vehicle} has weather'd every rack, the ${precious} we sought is won;
    The ${parking} is near, the ${noiseMaker} I hear, the people all ${crowdBehavior},
    While follow ${bodyPart1} the steady keel, the vessel ${adjective4} and ${adjective5}:
    But O ${organ}! ${organ}! ${organ}!
    O the bleeding drops of ${color},
    Where on the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.

    ${number2}
    O ${honorific}! my ${honorific}! rise up and hear the ${noiseMaker};
    Rise up-for you the ${thing} is flung-for you the bugle trills;
    For you ${thing2} and ribbon'd ${thing3}-for you the shores a-crowding;
    For you they ${crowdBehavior}, the swaying mass, their eager faces turning;
    Here ${honorific}! dear ${familyMember}!
    This ${bodyPart2} beneath your ${bodyPart3};
    It is some dream that on the ${vehiclePart},
    You've fallen ${adjective2} and ${adjective3}.

    ${number3}
    My ${honorific} does not answer, his lips are pale and still;
    My ${familyMember} does not feel my arm, he has no pulse nor will;
    The ${vehicle} is anchor'd safe and sound, its voyage closed and done;
    From fearful trip, the victor ${vehicle}, comes in with ${precious} won;
    Exult, O shores, and ring, O ${noiseMaker}!
    But I, with mournful tread,
    Walk the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.
`;
let storyParagraph = document.querySelector("#madlib-text");
storyParagraph.innerHTML = storyText;