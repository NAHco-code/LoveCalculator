prompt("what is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) +1; //1-100 // +1 bc Math.floor method counts up to the number specified, but doesn't include it.

 if (loveScore > 75) {
     alert("Your love score is " + loveScore + "%" + "! You love eachother like Kanye loves Kanye.");
 } else {
     alert("Your love score is " + loveScore + "%");
 }

