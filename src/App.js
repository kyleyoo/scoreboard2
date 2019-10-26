import React from 'react';
import logo from './logo.svg';
import './App.css';

const players = [
  {name: 'LDK', score: 30, id:1},
  {name: 'HONG', score: 40, id:2},
  {name: 'KIM', score: 50, id:3},
  {name: 'PARK', score: 60, id:4},
];

const Header = (props) => {
  console.log(props);
  //desctruct assignment
  const{title, totalPlayers} = props;
  return (
    <header className='header'>
      {/*<h1 className='h1'>{props.title}</h1>
      <span className='stats'>{props.totalPlayers}</span>*/}
      <h1 className='h1'>{title}</h1>
      <span className='stats'>{totalPlayers}</span>
    </header>
  );
}
//function 컴포넌트를 class 컴포넌트로 전환
class Counter extends React.Component{
  state = {
    score:0,
    name:'aaa'
  };
  //같은거임
  /*constructor() {
    super();
    this.state ={
      score : 0
    }
  }*/
  //렉시컬 this 함수 표현식 디스는 현재의 디스
  incrementScore = () =>{
    console.log('increment');
    this.setState(prevState =>  ({score: prevState.score+1}));
  }
  /*incrementScore(){
    console.log('increment');
    //this.state.score += 1; => 안된다.
    //this.setState({score:this.state.score+1});
    /!*this.setState(prevState => {
      return {score: prevState.score+1}
    });*!/
    //제이슨 객체 리턴은 ()로 한번더 싸야함
    this.setState(prevState =>  ({score: prevState.score+1}));
  }*/

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement">-</button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore.bind(this)}>+</button>
      </div>
    );
  }
}

/*const Counter = (props) => (
  <div className="counter">
    <button className="counter-action decrement">-</button>
    <span className="counter-score">{props.score}</span>
    <button className="counter-action increment">+</button>
  </div>
);*/

const Player = (props) => (
  <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
      {props.name}
    </span>
    <Counter score={props.score}/>
  </div>
);

class App extends React.Component{
  state ={
    players: [
      {name: 'LDK', score: 30, id:1},
      {name: 'HONG', score: 40, id:2},
      {name: 'KIM', score: 50, id:3},
      {name: 'PARK', score: 60, id:4},
    ]
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={10 + 1}/>
        {
          this.state.players.map(player => <Player name={player.name} score={player.score} key={player.id} id={player.id} removePlayer ={this.handleRemovePlayer.bind(this)} />)
        }
      </div>
    );
  }
  handleRemovePlayer(id){
    console.log('handleRemovePlayer'+id);
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id != id);
      //return{players: players}; 줄일수 있음 shortend property
      return{players}
    })
  }
}

export default App;
