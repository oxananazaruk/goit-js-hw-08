import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

const LS_KEY = "videoplayer-current-time";

const onPlay = function (data) {
    localStorage.setItem(LS_KEY, data.seconds);
    // data is an object containing properties specific to that event
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = +localStorage.getItem(LS_KEY)

player.setCurrentTime(currentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});