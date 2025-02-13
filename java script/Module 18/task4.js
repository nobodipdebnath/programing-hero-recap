const score = 80;
const friendScore = 60;
if(score > 80){
    if(friendScore > 80){
        console.log("Then go for a lunch");
    } else if(friendScore < 80 && friendScore >= 60){
        console.log("good luck for  next time");
    } else if(friendScore < 60 && friendScore >= 40){
        console.log("Unread your friend sms.");
    } else{
        console.log("Block your Friend");
    }
} else{
    console.log("Go to home and sleep and eat more food")
}