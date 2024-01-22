console.log("Welcome to Spotify")

let songIndex=0;
let audioElement = new Audio('song/1.mp3');
let masterplay=document.getElementById("masterplay");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songname:"Jhoome Jo Pathan", filepath:"song/1.mp3",coverpath:"cover/1.jpg"},
    {songname:"Besharam Rang", filepath:"song/2.mp3",coverpath:"cover/2.jpg"},
    {songname:"Saware", filepath:"song/3.mp3",coverpath:"cover/3.jpg"},
    {songname:"Hass Hass", filepath:"song/4.mp3",coverpath:"cover/4.jpg"},
    {songname:"Heeriye", filepath:"song/5.mp3",coverpath:"cover/5.jpg"},
    {songname:"Sanam Re", filepath:"song/6.mp3",coverpath:"cover/6.jpg"},
    {songname:"Tere Liye", filepath:"song/7.mp3",coverpath:"cover/7.jpg"},
    {songname:"Ik Junoon", filepath:"song/8.mp3",coverpath:"cover/8.jpg"},
    {songname:"Dil Dhadakne Do", filepath:"song/9.mp3",coverpath:"cover/9.jpg"},
    {songname:"O Maahi", filepath:"song/10.mp3",coverpath:"cover/10.jpg"}
]
// audioElement.play();

songItems.forEach((element,i) => {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songname;
})

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;

        
    }
})

audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');

    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);

    // console.log(progress);
    myProgressBar.value=progress;

})


myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})
const makeallplays =()=>{
    //e.target.classList.add('fa-play-circle');
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.addEventListener('click',(e) =>{
        // console.log(e.target);
        makeallplays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`song/${songIndex+1}.mp3`;
        mastersongname.innerText=songs[songIndex].songname;

        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }

    audioElement.src=`song/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songname;

    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;

    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

    audioElement.classList.remove('fa-play-circle');
    audioElement.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }

    audioElement.src=`song/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    audioElement.classList.remove('fa-play-circle');
    audioElement.classList.add('fa-pause-circle');
})