'use strict';

var audio, currentTime, currentMusic, day, time, checkVolume, setAudioURL, 
  switchMusic, updateTime, init;;

audio = document.createElement('audio');
audio.loop = true;

day = new Date().getDay();
time = new Date().getHours();
currentTime = new Date().getHours();

