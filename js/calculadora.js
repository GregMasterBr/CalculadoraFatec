  function desabilita (){
          if(document.getElementById("questone").value==""){
              document.getElementById("notaenem").disabled = true;
       }
   }
      function habilita (){
          if(document.getElementById("enem").value==1){
               document.getElementById("notaenem").disabled = false;
          }
          else{
              document.getElementById("notaenem").disabled = true;
          }
      }
      function validar(){
       var one=document.getElementById("questone").value;
             var two=document.getElementById("questtwo").value;
             var enem=document.getElementById("enem").value;
             var redacao=document.getElementById("red").value;
    var pont1=document.getElementById("afro").value;
    var pont2=document.getElementById("publica").value;
    var NPC = 0;
    NPC = (parseInt(two) * 2) + parseInt(one);
    var P=(NPC*100)/64;    
             if (enem == 1){
                 var nota=document.getElementById("notaenem").value;
                 if(nota > P){
                     var N=((4*P)+(1*nota))/5
                     var NF=((8.00*N)+(2.00*redacao))/10
                     document.getElementById("result").value=NF;
                 }
     else{
         var NF=((8.00*P)+(2.00*redacao))/10;
                     document.getElementById("result").value=NF;
     }
             }
             else{
                 var NF=((8.00*P)+(2.00*redacao))/10;
                 document.getElementById("result").value=NF;
     
    }
             if(pont1==1 && pont2==0){
    var NFA=NF*1.03;
    document.getElementById("result").value=NFA;
    }
    if(pont1==0 && pont2==1){
    var NFA=NF*1.1;
    document.getElementById("result").value=NFA;
    }
    if(pont1==1 && pont2==1){
    var NFA=NF*1.13;
    document.getElementById("result").value=NFA;
    }
         }
