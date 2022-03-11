const musicList = document.querySelector(".music_list");

const displayMusic = ( musics =>{
    console.log(musics);
    musics.tracks.forEach(music => {
    
    const musicItem = document.createElement('li');
    musicItem.className = 'music_item';

    const musicaudio = document.createElement('audio');
    musicaudio.className = 'musicaudio';
  
    musicaudio.setAttribute("controls", "true");
    const musicsource = document.createElement('source');
    musicsource.src = music.previewURL;
    musicsource.type = "audio/mpeg"

    const musicInfo = document.createElement('div');
    musicInfo.className = 'music_info';
    
    const music_name = document.createElement('h2');
    music_name.className = 'music_name';
    music_name.textContent = music.name;

    musicList.appendChild(musicItem);
    musicItem.appendChild(musicaudio);
    musicItem.appendChild(musicInfo);
    musicaudio.appendChild(musicsource);
    musicInfo.appendChild(music_name);

});
})