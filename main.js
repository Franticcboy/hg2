Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="id" src="'+data_uri+'">'
    });
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageclassifier('https://teachablemachine.withgoogle.com/models/mcXpXdkGl/model.json',modelloaded);
function modelloaded(){
    console.log('modellloaded');

}
function speak (){
    var synth=window.speechSynthesis;
    speak1="the first prediction is";
    speak2="and the sencond prediciton is";
    var utterthis=new SpeechSynthesisUtterance(speak1+speak2);
    synth.speak(utterthis);
}