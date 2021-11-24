let modal = document.getElementById("modal")
let play = document.getElementById("play")
let quit = document.getElementById("quit")
let video = document.getElementById("video")
let state_play = true;
function modalVideo(state) {
    state.addEventListener("click", () => {
        if (state_play) {
            modal.classList.add("on");
            state_play = false;
        } else {
            video.pause();
            modal.classList.remove("on");
            state_play = true;
        }
    });
}

modalVideo(play)
modalVideo(quit)