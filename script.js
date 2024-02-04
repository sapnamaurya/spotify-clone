console.log("welcome to spotify")

//initialise the variables
let songIndex = 0;
let audioElement = new Audio('songlist/tumBin.mp3');
console.log("audio", audioElement);
let progress = document.getElementById("progress");
let masterPlay = document.getElementById("masterPlay");
let songItem = Array.from(document.getElementsByClassName("songItem"))
let gif = document.getElementById("gif")
let songList = [
    { songName: "Tum Bin Jiya Jae", filePath: "songList/tumBin.mp3", time: "", coverPath: "cover/tumbin.webp" },
    { songName: "Hasi Ban Gye", filePath: "songList/hasi.mp3", time: "", coverPath: "cover/hasi.webp" },
    { songName: "Tere Liye Hum Hai ", filePath: "songList/tereLiye.mp3", time: "", coverPath: "cover/tereliye.webp" },
    { songName: "Tu Hi Shab hai", filePath: "songList/tuHiShab.mp3", time: "", coverPath: "cover/shab.jpg" },
    { songName: "Jashn E Bahra ", filePath: "songList/jashnEBhara.mp3", time: "", coverPath: "cover/jashn.jpg" },
    { songName: "Bepanha Pyaar ", filePath: "songList/bepanah.mp3", time: "", coverPath: "cover/bepanah.jpg" },
    { songName: "Khud Ko", filePath: "songList/khudKo.mp3", time: "", coverPath: "cover/khud.webp" },
    { songName: "Mera Dil Bhi Kitna ...", filePath: "songList/meraDil.mp3", time: "", coverPath: "cover/meraDil.jpg" },
    { songName: "Jadu Hai Nasha hai", filePath: "songList/jaduHai.mp3", time: "", coverPath: "cover/jadu.webp" },

]

songItem.forEach((element, i) => {
    console.log(element, i)
    element.getElementsByTagName("img")[0].src = songList[i].coverPath
    element.getElementsByClassName("songName")[0].innerHTML = songList[i].songName

});
//handle playt/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//listen the event
audioElement.addEventListener('timeupdate', () => {
    //update progress
    progressHandle = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    progress.value = progressHandle
})
progress.addEventListener('change', () => {
    audioElement.currentTime = progress.value * audioElement.duration / 100
})
const makeAllPlay = () => {
    Array.from(document.getElementsByClassName("songListPlay")).forEach((element) => {
        element.classList.remove("fa-circle-pause")
        element.classList.add("fa-circle-play")
    })
}
Array.from(document.getElementsByClassName("songPlay")).forEach((element, index) => {
    element.addEventListener("click", (e) => {

        //console.log("elenemt", e.target, element, index, songList[index]?.songName)
        makeAllPlay();
        // songIndex = parseInt(e.target.id)

        e.target.classList.remove("fa-circle-play")
        e.target.classList.add("fa-circle-pause")
        audioElement.src = `${songList[index]?.filePath}`;
        console.log('audioElement--', audioElement)
        audioElement.play()
        audioElement.currentTime = 0;
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})
document.getElementById("next").addEventListener("click", () => {
    console.log("e", songList[songIndex]?.filePath, songIndex)
    if (songIndex >= 8) {
        songIndex = 0
    }
    else {
        songIndex = songIndex + 1
    }
    audioElement.src = `${songList[songIndex]?.filePath}`;
    console.log('audioElement--', audioElement)
    audioElement.play()
    audioElement.currentTime = 0;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById("previous").addEventListener("click", () => {
    console.log("e", songList[songIndex]?.filePath, songIndex)
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex = songIndex - 1
    }
    audioElement.src = `${songList[songIndex]?.filePath}`;
    console.log('audioElement--', audioElement)
    audioElement.play()
    audioElement.currentTime = 0;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})