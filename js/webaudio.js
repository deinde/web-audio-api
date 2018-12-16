"use strict";

const audioContextCheck = () => {
  if (typeof AudioContext !== "undefined") {
    return new AudioContext();
  } else if (typeof webAudioContext !== "undefined") {
    return new webAudioContext();
  } else if (typeof mozAudioContext !== "undefined") {
    return new mozAudioContext();
  } else {
    throw new Error("Audio Context is not supported Sucka!!!");
  }
};

const audiocontext = audioContextCheck();
let audioBuffer = "";
const getSound = new XMLHttpRequest();
getSound.open("GET", "../sound/snare.WAV", "true");
getSound.responseType = "arraybuffer";
getSound.onload = () => {
  audiocontext.decodeAudioData(getSound.response, buffer => {
    audioBuffer = buffer;
  });
};

getSound.send();

const playBack = () => {
  const playSound = audiocontext.createBufferSource();
  playSound.buffer = audioBuffer;
  playSound.connect(audiocontext.destination);
  playSound.start(audiocontext.currentTime);
};

window.addEventListener("mousedown", playBack);
