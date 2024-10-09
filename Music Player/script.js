const songlist = [
  { songTitle: "Ye raate ye mausam", songSrc: "./songs/ye_raate_ye_mausam.mp3", singer: "Sanam, Simran Sehgal" , imageUrl:"https://c-fa.cdn.smule.com/rs-s82/arr/db/14/4ded5aed-18e7-41c5-9797-ac10a19e94ea.jpg"},
  { songTitle: "Ek Ajnabee Haseena Se", songSrc: "./songs/Ek_Ajnabee_Haseena_Se.mp3", singer: "Kishore kumar" , imageUrl:"https://a10.gaanacdn.com/gn_img/albums/DwPKOkBKqV/wPKORwkbqV/size_m.webp"},
  { songTitle: "Mere mehboob qayamat hogi", songSrc: "./songs/mere_mehboob_qayamat_hogi.mp3", singer: "Kishore kumar" , imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHEGI2kxbFWBlh-GnWD0AOQ140OXpeMFISw&s"},
  { songTitle: "Lagja gale ki phir ye", songSrc: "./songs/lagja_gale_ki_phir_ye.mp3", singer: "Lata Mangeshkar" , imageUrl: "https://i.ytimg.com/vi/DFbbpMD3taw/maxresdefault.jpg"},
  { songTitle: "Kya Hua Tera Wada", songSrc: "./songs/Kya_Kua_Tera_Wada.mp3", singer: "Mohammed Rafi and Sushma Shreshta" , imageUrl: "https://i.ytimg.com/vi/c4ZNnC48U2o/maxresdefault.jpg"},
  { songTitle: "Pyar deewana hota hai", songSrc: "./songs/pyar_deewana_hota_hai_mastana_hota_hai.mp3", singer: "Kishore kumar", imageUrl: "https://i.ytimg.com/vi/hV7EAqGy5y8/maxresdefault.jpg" },
  { songTitle: "Kitabein Bahut Si", songSrc: "./songs/Kitabein Bahut Si.mp3", singer: "Vinod Rathod, Asha Bhosle", imageUrl: "https://a10.gaanacdn.com/gn_img/albums/w4MKPDOKoj/4MKPynmz3o/size_m.jpg" },
  { songTitle: "ye saam mastani", songSrc: "./songs/ye_saam_mastani.mp3", singer: "Kishore kumar", imageUrl: "https://i1.sndcdn.com/artworks-slmmw0wpb3MXSLNn-DBuz5A-t500x500.jpg" },
  { songTitle: "Galliyan", songSrc: "./songs/Galliyan.mp3", singer: "Ankit Tiwari", imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/01/Galiyan_%28Ek_Villain%29.jpg" },
  { songTitle: "Agar Tum Saath Ho", songSrc: "./songs/Agar Tum Saath Ho.mp3", singer: "Arjit Singh, Alka Yagnik", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Kaun_Tujhe_MS_Dhoni_Cover.jpg/220px-Kaun_Tujhe_MS_Dhoni_Cover.jpg" },
  { songTitle: "Kaun Tujhe", songSrc: "./songs/Kaun Tujhe.mp3", singer: "Palak muchhal", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Kaun_Tujhe_MS_Dhoni_Cover.jpg/220px-Kaun_Tujhe_MS_Dhoni_Cover.jpg" },
  { songTitle: "Raabta (Kehte Hain Khuda Ne)", songSrc: "./songs/Raabta (Kehte Hain Khuda Ne).mp3", singer: "Arjit Singh, Shreya Ghoshal", imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/8b/Raabta_poster.jpg" },
  { songTitle: "Baarish", songSrc: "./songs/Baarish.mp3", singer: "Ash king, Shashaa tirupati", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSC61ow761Evm637wc9bTIJo79ffvfi6GYVA&s" },
  { songTitle: "Kaise Mujhe", songSrc: "./songs/Kaise Mujhe.mp3", singer: "Benny Dayal, Shreya Ghoshal" , imageUrl: "https://i.scdn.co/image/ab67616d0000b2735b7ba7da308af447f48b9943"},
  { songTitle: "Tum jo pakad lo hath mera", songSrc: "./songs/tum_jo_pakad_lo_hath_mera.mp3", singer: "Kishore kumar" , imageUrl: "https://i.ytimg.com/vi/brkwO8ntRhE/hqdefault.jpg"},
  { songTitle: "Lo safar shuru ho gaya", songSrc: "./songs/lo_safar_shuru_ho_gaya.mp3", singer: "Jubin Nautiyal", imageUrl: "https://a10.gaanacdn.com/gn_img/song/Rz4W8evbxD/4W82B7gLKx/size_m_1520929776.jpg" },
  { songTitle: "Cham Cham", songSrc: "./songs/Cham Cham.mp3", singer: "Meet Bros, Monali thakur", imageUrl: "https://filmfare.wwmindia.com/content/2019/feb/tigerandshraddhaweb1549959067.jpg" },
  { songTitle: "Nadaaniyan", songSrc: "./songs/Nadaaniyan.mp3", singer: "Akshath Acharya", imageUrl: "https://i.ytimg.com/vi/7-P4OWuJT6Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCzycVAQrgZL7B4QS8fw10KFog0ew"},
  { songTitle: "Aasa Kooda", songSrc: "./songs/Aasa Kooda.mp3", singer: "	Sai Abhyankkar, Sai Smriti", imageUrl:"https://c.saavncdn.com/772/Aasa-Kooda-from-Think-Indie-Tamil-2024-20240613052402-500x500.jpg"},
  { songTitle: "Suniya Suniya Rata", songSrc: "./songs/Suniya Suniya Rata.mp3", singer: "Juss", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTppdeFg4CN-R02CFeCXS1Zvhas5faiKjmLg&s"}
];

document.addEventListener("DOMContentLoaded", () => {
  let i = 0;
  let songTitle = document.getElementById("songTitle");
  let songSinger = document.getElementById("songSinger");
  let nextIcon = document.getElementById("nextIcon");
  let prevIcon = document.getElementById("prevIcon");
  let progressBar = document.getElementById("progressBar");
  const currentTimeDisplay = document.getElementById("currentTime");
  const durationTimeDisplay = document.getElementById("durationTime");
  let audioPlayer = document.querySelector("#audioPlayer");
  let playIcon = document.getElementById("playIcon");
  let isPlaying = false;
  let interval;
  let musicIcon = document.getElementById("musicIcon");



  function seek(seconds) {
    audioPlayer.currentTime = Math.min(Math.max(audioPlayer.currentTime + seconds, 0), audioPlayer.duration);
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'k' || event.key===" ") {
      playIcon.click();
    }
    else if ( event.key==="j"){
      prevIcon.click();
    } else if (event.key==="l"){
      nextIcon.click();
    }else if ( event.key==="ArrowRight" ){
      seek(5);
    } else if ( event.key==="ArrowLeft"){
      seek(-5);
    }
});


  function updateSongInfo() {
    songTitle.innerText = songlist[i].songTitle;
    songSinger.innerText = songlist[i].singer;
    audioPlayer.src = songlist[i].songSrc;
    musicIcon.src = songlist[i].imageUrl ;
    progressBar.value = 0;
    progressBar.max = 0;
    currentTimeDisplay.innerText = "0:00";
    durationTimeDisplay.innerText = "0:00";
    playIcon.classList.replace('ri-pause-circle-fill', 'ri-play-circle-fill');
    clearInterval(interval);
    isPlaying = false;
  }

  updateSongInfo();

  audioPlayer.addEventListener("loadedmetadata", () => {
    durationTimeDisplay.innerText = formatTime(audioPlayer.duration);
    progressBar.max = audioPlayer.duration;
  });

  audioPlayer.addEventListener("ended", () => {
    setTimeout( ()=>{
      i = (i === songlist.length - 1) ? 0 : i + 1;
      changeSong(i);
    }, 3000 )
  });

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }

  function playSong() {
    audioPlayer.play();
    playIcon.classList.replace('ri-play-circle-fill', 'ri-pause-circle-fill');
    isPlaying = true;
    restartProgress();
  }

  function pauseSong() {
    audioPlayer.pause();
    playIcon.classList.replace('ri-pause-circle-fill', 'ri-play-circle-fill');
    isPlaying = false;
    clearInterval(interval);
  }

  function changeSong(id) {
    i = id;
    updateSongInfo();
    playSong();
  }

  nextIcon.addEventListener("click", () => {
    i = (i + 1) % songlist.length;
    changeSong(i);
  });

  prevIcon.addEventListener("click", () => {
    i = (i - 1 + songlist.length) % songlist.length;
    changeSong(i);
  });

  playIcon.addEventListener('click', () => {
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });

  function progressSong() {
    progressBar.value = audioPlayer.currentTime;
    currentTimeDisplay.innerText = formatTime(audioPlayer.currentTime);
  }

  function restartProgress() {
    clearInterval(interval);
    interval = setInterval(progressSong, 1000);
  }

  progressBar.addEventListener('input', () => {
    audioPlayer.currentTime = progressBar.value;
    currentTimeDisplay.innerText = formatTime(progressBar.value);
  });

  let playlistIcon = document.getElementById("playlistIcon");
  let musicList = document.getElementById("music-list");
  let closeBtn = document.getElementById("closeIcon");

  playlistIcon.addEventListener("click", () => {
    musicList.style.display = "flex";
    playlistIcon.style.display = "none";
    updateSongs();
  });

  closeBtn.addEventListener("click", () => {
    musicList.style.display = "none";
    playlistIcon.style.display = "flex";
  });

  function updateSongs() {
    let songsList = document.getElementById("songsList");
    songsList.innerHTML = "";

    songlist.forEach((item, id) => {
      let div = document.createElement("div");
      div.className = "song";

      let innerDiv = document.createElement("div");

      let h3 = document.createElement("h3");
      h3.innerText = item.songTitle;

      let h4 = document.createElement("h4");
      h4.innerText = item.singer;

      innerDiv.appendChild(h3);
      innerDiv.appendChild(h4);

      let songPlayIconDiv = document.createElement("div");
      songPlayIconDiv.id = "songPlayIcon";
      let songPlayIcon = document.createElement('i');
      songPlayIcon.classList.add('ri-play-line');
      songPlayIconDiv.appendChild(songPlayIcon);

      div.appendChild(innerDiv);
      div.appendChild(songPlayIconDiv);

      songsList.appendChild(div);

      songPlayIconDiv.addEventListener("click", () => {
        musicList.style.display = "none";
        playlistIcon.style.display = "flex";
        changeSong(id);
      });
    });
  }
});
