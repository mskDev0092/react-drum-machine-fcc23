import React from 'react';
import React, { useState, useEffect } from 'react';

const DATA = [
  {
    id: 'Heater 1',
    key: 'Q',
    keyCode: 81,
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    id: 'Heater 2',
    key: 'W',
    keyCode: 87,
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
  {
    id: ' Heater 3',
    key: 'E',
    keyCode: 69,
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  {
    id: 'Heater 4 ',
    key: 'A',
    keyCode: 65,
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  {
    id: 'Clap',
    key: 'S',
    keyCode: 83,
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    id: 'Open-HH',
    key: 'D',
    keyCode: 68,
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  },
  {
    id: "Kick-n'-Hat",
    key: 'Z',
    keyCode: 90,
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    id: 'Kick',
    key: 'X',
    keyCode: 88,
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  },
  {
    id: 'Closed-HH',
    key: 'C',
    keyCode: 67,
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
];

export default function Drum() {
  const [display, setDisplay] = useState('Welcome');
  const [url, setUrl] = useState();
  const [key, setKey] = useState();
  const [volume, setVolume] = useState(34);
  const [isActive, setIsActive] = useState(true);
  const toggle = ['display', 'drum-pad'];

  const audio = new Audio();
  audio.src = url;

  useEffect(() => {
    document.title = `${display}`;
  }, []);

  const handleKeyboard = (e) => {
    setUrl(e.url);
    setDisplay(e.id);
    audio.play();
  };

  const handleClick = (e) => {
    // Play the sound from the URL.
    setUrl(e.url);
    // Update the displayer to show the played.
    setDisplay(e.id);
    audio.play();
  };

  return (
    <>
      <div id="drum-machine" className="drum-machine">
        <div id="display" className="display" onChange={(e) => setDisplay()}>
          <h1>{display}</h1>
        </div>
        <div className="menue">
          <div className="btn">
            <button
              onClick={() => setIsActive(!isActive)}
              className={isActive ? 'activePads' : 'offPads'}
            ></button>
          </div>
          <div>
            <input
              type="range"
              min="1"
              max="100"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
          </div>
        </div>
        <div className="drum-pad" id="drum-pad">
          {DATA.map((e) => (
            <button
              key={e.id}
              onClick={() => handleClick(e)}
              onKeyDown={() => handleKeyboard(e)}
            >
              {e.key}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
