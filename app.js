const play=document.getElementById("play");
const music=document.querySelector("audio");
const image=document.querySelector("img");
const player=document.querySelector(".music-container");
const title=document.getElementById("title");
const singer=document.getElementById("singer");
const prev=document.getElementById("prev");
const next=document.getElementById("next");

const songs=[{
    name:"music-1",
    title:"Blinding Lights",
    singer:"Weekend",
},
{
    name:"music-2",
    title:"Slow Music",
    singer:"The God",
},
{
    name:"music-3",
    title:"Carry On",
    singer:"I am an Artist",
}
];
const playmusic=()=>{
    music.play();
    play.classList.replace("fa-play","fa-pause");
    image.classList.add("anime");
    isplaying=true;
    player.classList.add("anim");
}
const pausemusic=()=>{

    music.pause();
    play.classList.replace("fa-pause","fa-play");
    image.classList.remove("anime");
    isplaying=false;
    player.classList.remove("anim");
}
let isplaying=false;
play.addEventListener("click",()=>{
    if(isplaying==false)
    {
        playmusic();
    }
    else
    {
        pausemusic();
    }
});

const loadsong=(songs)=>{
    title.textContent=songs.title;
    singer.textContent=songs.singer;
    music.src="Songs/"+songs.name+".mp3";
    image.src="Photo/"+songs.name+".jfif";
}
songindex=0;
next.addEventListener("click",()=>{
    songindex=(songindex + 1)%songs.length;
loadsong(songs[songindex]);
playmusic();
});
prev.addEventListener("click",()=>{
    songindex=(songindex-1 + songs.length)%songs.length;
    loadsong(songs[songindex]);
});