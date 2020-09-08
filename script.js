$( document ).ready(function($) {

    var subtitleElement = $("#subtitle");
    var subtitleString = subtitleElement.html();
    var typingIndex = 0;
    var typingForward = true;

    subtitleElement.empty();
    
    setInterval(() => {
        if (typingForward) {
            console.log(typingIndex);
            subtitleElement.html(subtitleString.substring(0, typingIndex) + "|");
            typingIndex++;
            typingForward = typingIndex > subtitleString.length? false : true;
        } else {
            subtitleElement.html(subtitleString.substring(0, typingIndex) + "|");
            typingIndex--;
            typingForward = typingIndex <= 0? true : false;
        }
        
        
    }, 100);

});