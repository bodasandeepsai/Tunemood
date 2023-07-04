//audio
let songindex = 0;
let audioElement = new Audio('songs/happy/tylor swift.mp3');
let masterplay = document.getElementById('masterplay');
let progressbar = document.getElementById('progressbar');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
  {songname : "call me maybe", filepath: "songs/happy/1.mp3.mp3", coverpath: "cover/1.png"},
  {songname : "keep driving", filepath: "songs/1.mp3", coverpath: "cover/1.png"},
  {songname : "I dont want it all", filepath: "songs/1.mp3", coverpath: "cover/1.png"},
  {songname : "good as hell", filepath: "songs/1.mp3", coverpath: "cover/1.png"},
  {songname : "valerie", filepath: "songs/1.mp3", coverpath: "cover/1.png"},
  {songname : "classic", filepath: "songs/1.mp3", coverpath: "cover/1.png"},
  {songname : "sunroof", filepath: "songs/1.mp3", coverpath: "cover/1.png"},
  {songname : "sunday best", filepath: "songs/1.mp3", coverpath: "cover/1.png"},
  {songname : "paper rings", filepath: "songs/1.mp3", coverpath: "cover/1.png"},
  {songname : "signed,sealed,delivered", filepath: "songs/1.mp3", coverpath: "cover/1.png"}
  

]



//audioElement play

//handle play / pause click

masterplay.addEventListener('click', ()=>{
   if(audioElement.paused || audioElement.currentTime <=0){
    audioElement.play();
    masterplay.classList.remove('fa-solid fa-play');
   }
   else{
    audioElement.pause();

   }
})

let changeicon = function(icon){
  icon.classList.toggle('fa-times');
}




//listen to events

audioElement.addEventListener('timeupdate',()=>{

  //seekbar update

  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  progressbar.value= progress;
})

progressbar.addEventListener("change", ()=>{
  audioElement.currentTime = progressbar.value * audioElement.duration/100;
})





