var puns = ["Don't spell part backwards. It's a trap.", 
            "What do you have to do to have a party in space? You have to Planet.", "I have a few jokes about unemployed people but it doesn't matter none of them work.", 
            "Did you hear about the guy who got hit in the head with a can of soda? He was lucky it was a soft drink.", "I can't believe I got fired from the calendar factory. All I did was take a day off."];

var i = 0;

function changePuns(){
  if (i > 5){
    i = 0;
  }
  document.getElementById("title").innerHTML = puns[i];
  i++;
}
