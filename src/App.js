import React from 'react';
import './style.css';
import Header from './Header';
import MemeGenerator from './MemeGenerator';

class App extends React.Component {
  //kogu state siin
  state = {
    upperText: '',
    lowerText: '',
    randomImg: '',
    allMemeImages: [],
  };

  componentDidMount () {
    fetch ('https://api.imgflip.com/get_memes')
      .then (response => response.json ())
      .then (response => {
        console.log (response.data.memes[0]);
        this.setState ({allMemeImages: response.data.memes});
        this.setState ({randomImg: response.data.memes[0].url});
      });
  }

  handleChange = event => {
    const {name, value} = event.currentTarget;
    this.setState ({[name]: value});
  };

  handleSubmit = event => {
    event.preventDefault ();

    const memes = this.state.allMemeImages;
    const random = Math.floor (Math.random () * memes.length);
    const randMem = memes[random].url;
    this.setState ({randomImg: randMem});
  };

  render () {
    return (
      <div>
        <Header />
        <MemeGenerator
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          img={this.state.randomImg}
          upperText={this.state.upperText}
          lowerText={this.state.lowerText}
        />
      </div>
    );
  }
}

export default App;
