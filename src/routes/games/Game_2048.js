import React, { Component } from 'react';
import styled from 'styled-components';
import { defaultValues, move, failCheck, random } from '../../components/2048/utils_2048';
import { Button } from 'react-bootstrap';
import Item from '../../components/2048/Item';

class Game_2048 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: defaultValues(),
      start: false,
      fail: false,
      wait: false
    };
  }

  componentDidMount() {
    this.hiddenInput.focus();
  }

  start = () => {
    this.addNewValue();
    this.setState({
      start: true
    });
  }

  addNewValue = () => {
    const { values } = this.state;

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

    values[randomX][index] = value;

    if (failCheck(values)) {
      this.setState({
        fail: true,
        values: [...values]
      });
      return;
    }
    this.setState({
      values: [...values]
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
    const { values } = this.state;
    const newValues = move(values, e.key);

    this.setState({
      values: [...newValues]
    });

    if (newValues !== values) {
      this.addNewValue();
    }
  }

  preventBlur = (e) => {
    e.target.focus();
  }

  createRef = (element) => { this.hiddenInput = element }

  render() {
    const { values, fail, start } = this.state;

    return (
      <React.Fragment>
        <h1 className="pageTitle">Here 2048 game</h1>

        <StyledGameBox>
          <input
            onBlur={this.preventBlur}
            className="hiddenInput"
            ref={this.createRef}
            onKeyUp={this.click}
            tabIndex="0"
            autoFocus
            value=""
            max={0}
          />
          {/* ref={this.createRef} */}
          {/* !start && */}
          {
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
                  Start
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
          {
            fail &&
            <div
              className="fail"
            >
              <span>Wasted</span>
            </div>
          }
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
