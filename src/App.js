import Input from './components/Input'
import Button from './components/Button';
import { Container, Content, Row } from "./styles";
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleAddNumber = (number) => {
      setCurrentNumber( prev => `${prev === '0' ? '' : prev}${number}`)
  }
  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber(null)
    setOperation(null)
    
  }
  const handleOperation = (operator) => {
    if (firstNumber === null) {
      setFirstNumber(currentNumber);
      setCurrentNumber('');
      setOperation(operator);
    } else if (operation && currentNumber !== '') {
      handleEquals(); 
      setOperation(operator);
    }
  };

  const handleEquals = () => {
    if (firstNumber !== null && operation !== null && currentNumber !== '') {
      let result = 0;

      switch (operation) {
        case '+':
          result = Number(firstNumber) + Number(currentNumber);
          break;
        case '-':
          result = Number(firstNumber) - Number(currentNumber);
          break;
        case '*':
          result = Number(firstNumber) * Number(currentNumber);
          break;
        case '/':
          result = Number(currentNumber) !== 0 ? Number(firstNumber) / Number(currentNumber) : 'Error';
          break;
        case '%':
          result = (Number(firstNumber) * Number(currentNumber)) / 100;
          break;
        default:
          return;
      }

      setCurrentNumber(String(result));
      setFirstNumber(null);
      setOperation(null);
    }
  };

  return (
    <Container>
      <Content>
      <Input value={currentNumber} />
      <Row>
          <Button label="CE" onCLick={handleOnClear} />
          <Button label="C" onCLick={handleOnClear} />
          <Button label="%" onCLick={() => handleOperation('%')} />
          <Button label="/" onCLick={() => handleOperation('/')} />
        </Row>
        <Row>
          <Button label="7" onCLick={() => handleAddNumber('7')} />
          <Button label="8" onCLick={() => handleAddNumber('8')} />
          <Button label="9" onCLick={() => handleAddNumber('9')} />
          <Button label="*" onCLick={() => handleOperation('*')} />
        </Row>
        <Row>
          <Button label="4" onCLick={() => handleAddNumber('4')} />
          <Button label="5" onCLick={() => handleAddNumber('5')} />
          <Button label="6" onCLick={() => handleAddNumber('6')} />
          <Button label="-" onCLick={() => handleOperation('-')} />
        </Row>
        <Row>
          <Button label="1" onCLick={() => handleAddNumber('1')} />
          <Button label="2" onCLick={() => handleAddNumber('2')} />
          <Button label="3" onCLick={() => handleAddNumber('3')} />
          <Button label="+" onCLick={() => handleOperation('+')} />
        </Row>
        <Row>
          <Button label="0" onCLick={() => handleAddNumber('0')} />
          <Button label="," onCLick={() => handleAddNumber(',')} />
          <Button label="." onCLick={() => handleAddNumber('.')} />
          <Button label="=" onCLick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
