import React from 'react';

import { Row, Col } from 'antd';

import dicesAnimation from 'src/assets/dice-animation.gif';
import diceOne from 'src/assets/dice-six-faces-one.png';
import diceTwo from 'src/assets/dice-six-faces-two.png';
import diceThree from 'src/assets/dice-six-faces-three.png';
import diceFour from 'src/assets/dice-six-faces-four.png';
import diceFive from 'src/assets/dice-six-faces-five.png';
import diceSix from 'src/assets/dice-six-faces-six.png';

const dicesSrc = [
  diceOne,
  diceTwo,
  diceThree,
  diceFour,
  diceFive,
  diceSix,
];

interface Props {
  dices: {
    attacker: number[];
    defender: number[];
  };
  attacking: boolean;
}

const DicesRow = (props: Props) => {
  if (!props.dices || !props.dices.attacker || !props.dices.attacker.length) {
    return (
      <div>
      <Row gutter={[16, 8]}>
        <Col className="gutter-row" span={12}>
          <img src={diceSix} style={{ padding: '0 2px', width: '60px' }} alt="Dices" />;
        </Col>
        <Col className="gutter-row" span={12}>
          <img src={diceSix} style={{ padding: '0 2px', width: '60px' }} alt="Dices" />;
        </Col>
      </Row>
      <Row gutter={[16, 8]}>
        <Col className="gutter-row" span={12}>
          <img src={diceSix} style={{ padding: '0 2px', width: '60px' }} alt="Dices" />;
        </Col>
        <Col className="gutter-row" span={12}>
          <img src={diceSix} style={{ padding: '0 2px', width: '60px' }} alt="Dices" />;
        </Col>
      </Row>
      <Row gutter={[16, 8]}>
        <Col className="gutter-row" span={12}>
          <img src={diceSix} style={{ padding: '0 2px', width: '60px' }} alt="Dices" />;
        </Col>
        <Col className="gutter-row" span={12}>
          <img src={diceSix} style={{ padding: '0 2px', width: '60px' }} alt="Dices" />;
        </Col>
      </Row>
    </div>
    );
  }

  let attackerDices: JSX.Element[] = [];
  let defenderDices: JSX.Element[] = [];

  if (props.attacking) {
    attackerDices = props.dices.attacker.map((dice: number) => {
      return <img src={dicesAnimation} style={{ padding: '0 2px', width: '60px' }} alt="Dices" />;
    });

    defenderDices = props.dices.defender.map((dice: number) => {
      return <img src={dicesAnimation} style={{ padding: '0 2px', width: '60px' }} alt="Dices" />;
    });
  } else if (props.dices) {
    attackerDices = props.dices.attacker.map((dice: number) => {
      return <img src={dicesSrc[dice-1]} style={{ padding: '0 2px', width: '60px' }} alt="Dices" />;
    });

    defenderDices = props.dices.defender.map((dice: number) => {
      return <img src={dicesSrc[dice-1]} style={{ padding: '0 2px', width: '60px' }} alt="Dices" />;
    });
  }

  return (
    <div>
      <Row gutter={[16, 8]}>
        <Col className="gutter-row" span={12}>
          {attackerDices[0]}
        </Col>
        <Col className="gutter-row" span={12}>
          {defenderDices[0]}
        </Col>
      </Row>
      <Row gutter={[16, 8]}>
        <Col className="gutter-row" span={12}>
          {attackerDices[1]}
        </Col>
        <Col className="gutter-row" span={12}>
          {defenderDices[1]}
        </Col>
      </Row>
      <Row gutter={[16, 8]}>
        <Col className="gutter-row" span={12}>
          {attackerDices[2]}
        </Col>
        <Col className="gutter-row" span={12}>
          {defenderDices[2]}
        </Col>
      </Row>
    </div>
  );
};

export default DicesRow;