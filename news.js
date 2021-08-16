(function () {
   var CharacterPos = 0;
   var MsgBuffer = "";
   var TypeDelay = 100; 
   var NxtMsgDelay = 100;
   var MsgIndex = 0;
   var delay;
   var MsgArray = ["News Headlines\n\n1. RDIF and Wockhardt partner to produce Sputnik V and Sputnik Light vaccines\n\n2. Dishman Carbogen Amcis records 16.1 per cent growth YoY in consolidated net sales\n\n3.DoP takes measures to mandatorily revise ceiling prices of drugs every five years\n\n"];

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
