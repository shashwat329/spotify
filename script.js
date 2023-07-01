console.log("welcome to spotify");
let audioElement = new Audio('Obsessed_320(PaglaSongs).mp3');
let masterplay = document.getElementById('masterplay');
let gif =document.getElementById('gif');
let progressbar = document.getElementById('slider');

// event listener for music play

masterplay.addEventListener('click',()=>{
    if(audioElement.currentTime==0||audioElement.paused){
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity=0;
    }
})
// updating the seekbar
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    progressbar.value = progress;
})
progressbar.addEventListener('change',()=>{
    audioElement.currentTime = progress*audioElement.duration/100;
})