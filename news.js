(function () {
   var CharacterPos = 0;
   var MsgBuffer = "";
   var TypeDelay = 100; 
   var NxtMsgDelay = 100;
   var MsgIndex = 0;
   var delay;
   var MsgArray = ["News Headlines\n\n1. Lupin receives tentative US FDA approval for Brivaracetam tablets\n\n2. FDA fast tracks breast cancer candidate samuraciclib Carrick Therapeutics’ oral CDK7 inhibitor may improve patient outcomes\n\n3. Pirfenidone could offer ‘viable’ heart failure treatment"]
   function StartTyping() {
      var id = document.getElementById("typing-text");
      if (CharacterPos != MsgArray[MsgIndex].length) {
         MsgBuffer  = MsgBuffer + MsgArray[MsgIndex].charAt(CharacterPos);
         id.value = MsgBuffer+"_";
         delay = TypeDelay;
         id.scrollTop = id.scrollHeight; 
      } else {
         delay = NxtMsgDelay;
         MsgBuffer   = "";
         CharacterPos = -1;
         if (MsgIndex!=MsgArray.length-1){
           MsgIndex++;
         }else {
           MsgIndex = 0;
         }
       }
       CharacterPos++;
       setTimeout(StartTyping,delay);
   }
StartTyping();
})();
