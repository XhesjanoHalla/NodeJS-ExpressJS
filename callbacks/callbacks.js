function anotherEventListener (typeOfEvent, callback){
    
    //Code that detects event 

    var eventThatHappened ={
        eventType: "keypress",
        key : "p",
        durationOfKeypress : 2 
    }

    if(eventThatHappened.eventType === typeOfEvent){

        callback(eventThatHappened);

    }
    
}