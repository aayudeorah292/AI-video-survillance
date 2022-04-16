status="";
function preload(){
}
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function draw(){
    image(video,0,0,380,380);
}
function start(){
    objectdetector=ml5.objectDetector('cocossd',modalLoaded);
    document.getElementById('status').innerHTML="status : detecting objects";
    object_name=document.getElementById("object_name").value;
}
function modalLoaded(){
    console.log("modal Loaded");
    status=true;
}