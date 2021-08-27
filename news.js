(function () {
   var CharacterPos = 0;
   var MsgBuffer = "";
   var TypeDelay = 100; 
   var NxtMsgDelay = 100;
   var MsgIndex = 0;
   var delay;
   var MsgArray = ["28th August Update\n\n1. 1. GPAT 2017 part 5 Question paper is available now\n\n2. One word nanoparticles question is now available in M.pharm section\n\n3. Goa Drug Inspector 2020 question is available for practice."] function StartTyping() {
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
