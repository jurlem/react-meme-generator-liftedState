import React from 'react';
import './style.css';

const MemeGenerator = props => {
  return (
    <div>

      <form className="meme-form" onSubmit={props.onSubmit}>
        <input
          type="text"
          name="upperText"
          value={props.upperText}
          placeholder="Your upper text here"
          onChange={props.onChange}
        />
        <input
          type="text"
          name="lowerText"
          value={props.lowerText}
          placeholder="Lower text"
          onChange={props.onChange}
        />
        <button>Generate</button>
      </form>
      <div className="meme">
        <img src={props.img} alt="random meme" />
        <h2 className="top">{props.upperText}</h2>
        <h2 className="bottom">{props.lowerText}</h2>
      </div>
    </div>
  );
};

export default MemeGenerator;
