"use strict";

const audiocontext = () => {
  if (typeof audiocontext !== undefined) {
    return audiocontext();
  } else if (typeof webAudioContext !== undefined) {
    return webAudioContext();
  } else if (typeof mozAudioContext !== undefined) {
    return mozAudioContext();
  } else {
    throw new Error("Audio Context is not supported Sucka!!!");
  }
};
