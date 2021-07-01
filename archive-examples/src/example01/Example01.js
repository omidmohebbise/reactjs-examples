import React from 'react';
import MyHeader from './MyHeader';
import MyBody from './MyBody';
import MyFooter from './MyFooter';
import OtherComp from './OtherComp';
import ComponentWithProbs from './ComponentWithProbs';
import Timer from './Timer';
import ClickButtom from './ClickButton';

function Example01() {
  setInterval(() => {
    alert('hello');
    console.log('Interval triggered');
  }, 100000);

  return (
    <div>
    <MyHeader></MyHeader>
    <MyBody></MyBody>
    <MyFooter></MyFooter>
    <OtherComp></OtherComp>
    <ComponentWithProbs></ComponentWithProbs>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
    <hr></hr>
    <Timer>10</Timer>
    <hr/>
    <ClickButtom></ClickButtom>

    </div>
  );
}

export default Example01;