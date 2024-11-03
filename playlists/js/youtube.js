// 1 - Implementar as playlists de acordo com o TODO
// - sem o search mas com o localStorage
// - No final, eu devo conseguir adicionar playlists,
// apagar playlist e tudo guardado em localStorage

// 2 - Implementar o mesmo para as musicas

const formPlaylist = document.querySelector(".playlistForm");
const playlistList = document.querySelector(".playlistList");
const formMusic = document.querySelector(".musicForm");
const musicList = document.querySelector(".musicList");

const filterMusics = () => {
  // aplico ou retiro a class filtered se playlistName == atributo playlist
  console.log(musicList.children);
  [...musicList.children].forEach((music) => {
    console.log(music);
    console.log(music.getAttribute("playlist"));
    if (playlistName != music.getAttribute("playlist")) {
      music.classList.add("filtered");
    } else {
      music.classList.remove("filtered");
    }
  });
};

const addPlaylist = (playlist) => {
  const li = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="plElement">${playlist}</span>
        <i class="fas fa-trash delete"></i>
    </li>
    `;
  playlistList.innerHTML += li;
};

const addMusic = (musicName, link, playlist) => {
  const li = `
    <li class="list-group-item d-flex justify-content-between align-items-center" playlist="${playlist}">
        ${musicName}
        <a href="${link}" target="_blank"><i class="fas fa-play play"></i></a>
    </li>
    `;
  musicList.innerHTML += li;
};

var playlists = JSON.parse(localStorage.getItem("playlists")) || [];
playlists.forEach((playlist) => addPlaylist(playlist));
var musics = JSON.parse(localStorage.getItem("musics")) || [];
musics.forEach((music) =>
  addMusic(music.musicName, music.link, music.playlistName)
);

formPlaylist.addEventListener("submit", (e) => {
  e.preventDefault();
  const playlist = e.target.playlist.value.trim();
  console.log(playlist);
  if (playlist.length > 0 && !playlists.includes(playlist)) {
    addPlaylist(playlist);
    //musics.push({musicName, link, playlistName});
    playlists.push(playlist);
    localStorage.setItem("playlists", JSON.stringify(playlists));
  }
  formPlaylist.reset();
});

playlistList.addEventListener("click", (e) => {
  if (e.target.tagName == "I") {
    e.target.parentElement.remove();
    const deletedPlaylist = e.target.parentElement.innerText.trim();
    playlists = playlists.filter((playlist) => playlist != deletedPlaylist);
    localStorage.setItem("playlists", JSON.stringify(playlists));
  }
  if (e.target.tagName == "SPAN") {
    document.querySelector(".ativo").classList.remove("ativo");
    e.target.parentElement.classList.add("ativo");
    playlistName = e.target.parentElement.innerText.trim();
    filterMusics();
  }
});

formMusic.addEventListener("submit", (e) => {
  e.preventDefault();
  const musicName = e.target.music.value.trim();
  const link = e.target.youtubeLink.value.trim();
  if (musicName.length > 0) {
    addMusic(musicName, link, playlistName);
    musics.push({ musicName, link, playlistName });
    localStorage.setItem("musics", JSON.stringify(musics));
  }
  formMusic.reset();
});

playlistList.firstElementChild.classList.add("ativo");
var playlistName = playlistList.firstElementChild.innerText.trim();
filterMusics();
