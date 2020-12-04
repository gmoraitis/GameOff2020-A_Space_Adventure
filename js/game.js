//Button for play pause music
function play_pause() {
    var myAudio = document.getElementById("myAudio");
    if (myAudio.paused) {
        myAudio.play();
    } else {
        myAudio.pause();
    }
}


window.addEventListener("load", () => {
    //window loaded
    //do something

    document.addEventListener("keypress", function (event) {
        var node = document.createElement("LI");
        var br = document.createElement("BR");
        if (event.key === "Enter") {
            var text = document.getElementById("input").value.toLowerCase();

            // Start
            if (text === 'start') {

                var textnode = document.createTextNode("The year is 2789. Humankind had leave planet Earth a lot of time ago. They found peace on a planet name Nexus far far away from Earth. After a long time, a bad creature named Darun from planet Ratmond decided to kill all humans and conquest planet Nexus. You are in the middle of this war and you are about to save mankind. You found an old map for a secret room from an old forgotten wizard that will guide you to find the code to deactivate Darun's bomb. You are in this room, type north , east, west, south to move in the room. Only type the word...");
                node.appendChild(textnode);
                document.getElementById("computer").appendChild(node);
                document.getElementById("computer").appendChild(br);
                var music = document.getElementById("myAudio");
                music.play();

            }
            // North
            else if (text === "north") {
                
                var textnode = document.createTextNode("There is a wall in front of you with some old pictures and dust books. I don't think that you will find something there...Try something else...   ");
                node.appendChild(textnode);
                document.getElementById("computer").appendChild(node);
                document.getElementById("computer").appendChild(br);
            }

            // East
            else if (text === "east") {

                var textnode = document.createTextNode("Also nothing here but hey look carefully there is a bottle with some special magic juice. Some of the wizard's old tricks...Drink it to get power to continue... Good now try to type something else...");
                node.appendChild(textnode);
                document.getElementById("computer").appendChild(node);
                document.getElementById("computer").appendChild(br);
            }

            // West
            else if (text === "west") {

                var textnode = document.createTextNode("Again nothing here but wait ... there is an old note and it might be from the wizard...Type 'read note' to read it...There must be a clue inside right?");
                node.appendChild(textnode);
                document.getElementById("computer").appendChild(node);
                document.getElementById("computer").appendChild(br);
            }

            // Open Note
            else if (text === "read note") {

                var textnode = document.createTextNode(" ...Yes I am the wizard and you did great so far...There is one place that didn't go...Can you imagine what it is?... You will face 3 challenges when you find what you are looking for... ");
                node.appendChild(textnode);
                document.getElementById("computer").appendChild(node);
                document.getElementById("computer").appendChild(br);
            }

            // South
            else if (text === "south") {
                var node = document.createElement("LI");
                var textnode = document.createTextNode("Great !!! You found the old secret door behind you...Now get in that room to answer 3 questions. If you are correct you will get the code to stop the disaster... Hurry up ... you see there is no time left ... Type 'ready' to start with the first question... ");
                node.appendChild(textnode);
                document.getElementById("computer").appendChild(node);
                document.getElementById("computer").appendChild(br);
            }

            // Ready to answer
            else if (text === "ready") {
                var node = document.createElement("LI");
                var textnode = document.createTextNode("I will give you two numbers and figure out what is the third one so if you add all together or multiply all together the answer will be 6. ");
                node.appendChild(textnode);
                document.getElementById("computer").appendChild(node);
                document.getElementById("computer").appendChild(br);
            }

            // First Question result
            else if (text === '3') {
                var node = document.createElement("LI");
                var textnode = document.createTextNode("Correct !!! Now Dr. Ram has 5 sons. Each of his sons has a sister. If so, how many children does Dr.Ram have?  ");
                node.appendChild(textnode);
                document.getElementById("computer").appendChild(node);
                document.getElementById("computer").appendChild(br);
            }

            // Second Question result
            else if (text === '6') {
                var node = document.createElement("LI");
                var textnode = document.createTextNode("Amazing !!! You are too close !!! There is a three-digit number. The second digit is 4 times bigger than the third digit. The first digit is 3 less than the second digit. What number is it?");
                node.appendChild(textnode);
                document.getElementById("computer").appendChild(node);
                document.getElementById("computer").appendChild(br);
            }

            // Third Question result
            else if (text === '141' || text === '582') {
                var node = document.createElement("LI");
                var textnode = document.createTextNode("I knew that you are the O N E that will save mankind!!! You know that the wizard has his old tricks right? After you solve the riddles you automatically transferred to Darun's spaceship in the bombs room. All you have to do is to type the numbers together in the opposite order you found them...Hurry up !!!");
                node.appendChild(textnode);
                document.getElementById("computer").appendChild(node);
                document.getElementById("computer").appendChild(br);
            }

            // Found code
            else if (text === '14163' || text === '58263') {
                var node = document.createElement("LI");
                var textnode = document.createTextNode("Congratulations !!! You saved mankind !!! The bomb deactivated and you defeated  Darun !!! Thank you for playing. The end.");
                node.appendChild(textnode);
                document.getElementById("computer").appendChild(node);
                document.getElementById("computer").appendChild(br);
            }

            // ELSE
            else  {
                var node = document.createElement("LI");
                var textnode = document.createTextNode("I can't understand...Try to start again or type 'north' for example...");
                node.appendChild(textnode);
                document.getElementById("computer").appendChild(node);
                document.getElementById("computer").appendChild(br);
            }
        }
    })
});
