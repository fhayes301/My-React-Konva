import React from 'react';
import ReactDOM from 'react-dom';
import {Layer, Rect, Stage, Group, Text, Image} from 'react-konva';
import Motion from '../src/Motion';

class MyRect extends React.Component {
  state = { color: 'green' }

  // handleClick = () => {
  //   // window.Konva is a global variable for Konva framework namespace
  //   this.setState({
  //     color: window.Konva.Util.getRandomColor()
  //   });
  // }

  componentDidMount() {
      const image = new window.Image();
      image.src = 'http://konvajs.github.io/assets/yoda.jpg';
      image.onload = () => {
        this.setState({
          image: image
        });
      }
    }


  render() {
    return (
      <Group >
        <Image
          image={this.state.image}
        />
        <Text
          text= "Here's my text!"
          fontSize= {30}
          fill="black"
          fontFamily= 'Calibri'
          width= {300}
          padding= {20}
          draggable={true}
          align='center'
        />
      </Group>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Stage width={400} height={500}>
        <Layer>
          <MyRect />

        </Layer>
      </Stage>
    );
  }
}

//
// ReactDOM.render(<App />, document.getElementById('container'));
