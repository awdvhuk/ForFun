import React, { Component } from 'react';
import styled from 'styled-components';
import {
  defaultValues,
  getHist,
  setHist,
  getScore,
  setScore,
  move,
  copy,
  failCheck,
  random
} from '../../components/2048/utils_2048';
import { Button } from 'react-bootstrap';
import Item from '../../components/2048/Item';
import ControlPanel from '../../components/2048/ControlPanel';

class Game_2048 extends Component {
  constructor(props) {
    super(props);
    const { score, record } = getScore();

    this.state = {
      values: defaultValues(),
      history: getHist(),
      start: false,
      fail: false,
      wait: false,
      score,
      record
    };
  }

  componentDidMount() {
    this.hiddenInput.focus();
    const { history } = this.state;
    if (history[0]) {
      this.setState({
        values: copy(history[history.length - 1])
      });
    }
  }

  start = () => {
    this.setState({
      start: true
    });
    if (this.state.history[0]) { return; }
    this.addNewValue();
  }

  addNewValue = (values = this.state.values, history = this.state.history) => {
    let index, randomY, randomX;
    while (true) {
      randomY = random(0, 4);
      randomX = random(0, 4);

      if (!values[randomX][randomY]) {
        index = randomY;
        break;
      }
    }

    let randomValue = random(0, 11);
    let value = 2;
    if (!(randomValue % 5)) {
      value = 4;
    }

    if (!history.length) { history.push(copy(values)); }
    values[randomX][index] = value;

    if (failCheck(values)) {
      this.setState({
        fail: true
      });
    }

    history.push(copy(values));
    setHist(history);
    this.setState({
      values: copy(values),
      history: history
    });
  }

  click = (e) => {
    e.persist()
    if (
      e.key !== 'ArrowUp' &&
      e.key !== 'ArrowRight' &&
      e.key !== 'ArrowDown' &&
      e.key !== 'ArrowLeft'
    ) { return; }
    let { values, score, record } = this.state;
    let { values: newValues, score: newScore } = move(values, e.key);
    newScore += score[score.length - 1];
    score.push(newScore);
    record = newScore > record ? newScore : record;

    this.setState({
      values: copy(newValues),
      score,
      record
    });

    setScore(score, record);

    if (newValues !== values) {
      this.addNewValue(newValues.slice());
    }
  }

  restart = () => {
    const values = defaultValues();
    this.setState({
      values: copy(values),
      history: [],
      score: [0],
      start: true,
      fail: false
    });
    this.addNewValue(values, []);
    setHist([]);
    setScore([0]);
  }

  prevStep = () => {
    let { history, score } = this.state;
    if (history.length < 2 || score.length < 2) { return; }

    history.pop();
    score.pop();

    this.setState({
      values: copy(history[history.length - 1]),
      history,
      score
    });
    setHist(history);
    setScore(score);
  }

  preventBlur = (e) => { e.target.focus(); }

  createRef = (element) => { this.hiddenInput = element }

  render() {
    const { values, fail, start, history, score, record } = this.state;

    return (
      <React.Fragment>
        <h1 className="pageTitle">Here 2048 game</h1>

        <ControlPanel
          restart={this.restart}
          prevStep={this.prevStep}
          score={score[score.length - 1]}
          record={record}
        />

        <StyledGameBox>
          <input
            onBlur={this.preventBlur}
            className="hiddenInput"
            ref={this.createRef}
            onKeyUp={this.click}
            tabIndex="0"
            autoFocus
            readOnly
            max={0}
          />

          {
            !start &&
            (
              <div
                className="start"
                style={{ display: start ? 'none' : 'flex' }}
              >
                <Button
                  onClick={this.start}
                  bsStyle="success"
                  bsSize="large"
                >
                  {!history[0] ? 'Start' : 'Continue'}
                </Button>
              </div>
            )
          }
          {
            values.map((item, index) => {
              return (
                <div key={index}>
                  {item.map((value, index) => {
                    return (
                      <Item
                        key={index}
                        value={value}
                      />
                    );
                  })}
                </div>
              );
            })
          }

          {fail && <div className="fail"><span>Wasted</span></div>}
        </StyledGameBox>
      </React.Fragment>
    );
  }
}

const StyledGameBox = styled.div`
  width: 300px;
  height: 300px;
  background: #afafaf;
  border: 2px solid #9c9c9c;
  border-radius: 5px;
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  & .hiddenInput {
    background: transparent;
    color: transparent;
    border: none;
    caret-color: transparent;
    position: absolute;
  }

  & .start,
  & .fail {
    position: absolute;
    top: -2px;
    left: -2px;
    width: 300px;
    height: 300px;
    border-radius: 5px;
    background: #797979bf;
    display: flex;
    align-items: center;
    justify-content: center;
    
    button {
      width: 70%;
      height: 25%;
      font-size: 40px;
    }
  }

  & .fail span {
    font-size: 50px;
    color: #fffff5;
  }

  & .boxItem {
    width: 70px;
    height: 70px;
    border-radius: 5px;
    background: transparent;
    border: 1px solid black;
    margin: 2px 2px 4px 2px;
    text-align: center;
    padding: 14px 0;
    font-size: 30px;
    transition: 0.1s;
  }
`;

export default Game_2048;
