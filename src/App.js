import { useState } from 'react';
import { Button } from './components/Button';
import Input from './components/Input';

import { Container, Content, Row } from "./styles";

function App() {
    const [currentNumber, setCurrentNumber] = useState('');
    const [firstNumber, setFirstNumber] = useState(0);
    const [operation, setOperation] = useState(null);
    const [ponto, setPonto] = useState('');

    const handleClear = () => {
        setCurrentNumber('');
        setFirstNumber(0);
        setOperation(null);
        setPonto('');
    };

    const handleAddNumber = (number) => {
        setCurrentNumber(prev => `${prev}${ponto}${number}`);
        setPonto(''); /** caso currentNumber já não seja um inteiro */
    };

    const handleSoma = () => {
        if (firstNumber === 0) {
            setFirstNumber(currentNumber);
            setCurrentNumber('');
            setOperation('+');
        } else {
            const soma = Number(firstNumber) + Number(currentNumber);
            setCurrentNumber(soma);
            setOperation(null);
        }
    };

    const handleSubtrai = () => {
        if (firstNumber === 0) {
            setFirstNumber(currentNumber);
            setCurrentNumber('')
            setOperation('-')
        } else {
            const subtrai = Number(firstNumber) - Number(currentNumber);
            setCurrentNumber(subtrai)
            setOperation(null)
        }
    };
    
    const handleMultiplica = () => {
        if (firstNumber === 0) {
            setFirstNumber(currentNumber);
            setCurrentNumber('')
            setOperation('*')
        } else {
            const multiplica = Number(firstNumber) * Number(currentNumber);
            setCurrentNumber(multiplica)
            setOperation(null)
        }
    };

    const handleDivide = () => {
        if (firstNumber === 0) {
            setFirstNumber(currentNumber);
            setCurrentNumber('')
            setOperation('/')
        } else {
            const divide = Number(firstNumber) / Number(currentNumber);
            setCurrentNumber(divide)
            setOperation(null)
        }
    };

    const handleIgual = () => {
        if (firstNumber !== 0 && operation !== null && currentNumber !== 0){
            switch(operation) {
                case '+':
                    handleSoma();
                    break;
                case '-':
                    handleSubtrai();
                    break;
                case '*':
                    handleMultiplica();
                    break;
                case '/':
                    handleDivide();
                    break;
                default: 
                    break;
            };
        };
    };

    const handleBack = () => {
        let numero = String(currentNumber).slice(0, -1);
        setCurrentNumber(numero);
    };

    const handlePonto = () => {
        //if (Number.isInteger(currentNumber) || currentNumber === 0)
        if (currentNumber.indexOf('.') < 1)
            setPonto('.');
    };

    return (
        <Container className="App">
            <Content>
                <Input value={currentNumber}/>
                <Row>
                    <Button label={'*'} onClick={handleMultiplica} />
                    <Button label={'/'} onClick={handleDivide}/>
                    <Button label={'C'} onClick={handleClear}/>
                    <Button label={'<='} onClick={handleBack}/>
                </Row>
                <Row>
                    <Button label={'7'} onClick={() => handleAddNumber('7')}/>
                    <Button label={'8'} onClick={() => handleAddNumber('8')}/>
                    <Button label={'9'} onClick={() => handleAddNumber('9')}/>
                    <Button label={'-'} onClick={handleSubtrai}/>
                </Row>
                <Row>
                    <Button label={'4'} onClick={() => handleAddNumber('4')}/>
                    <Button label={'5'} onClick={() => handleAddNumber('5')}/>
                    <Button label={'6'} onClick={() => handleAddNumber('6')}/>
                    <Button label={'+'} onClick={handleSoma}/>
                </Row>
                <Row>
                    <Button label={'1'} onClick={() => handleAddNumber('1')}/>
                    <Button label={'2'} onClick={() => handleAddNumber('2')}/>
                    <Button label={'3'} onClick={() => handleAddNumber('3')}/>
                    <Button label={'='} onClick={handleIgual}/>
                </Row>
                <Row>
                    <Button label={'_'} />
                    <Button label={'0'} onClick={() => handleAddNumber('0')}/>
                    <Button label={','} onClick={handlePonto}/>
                    <Button label={'_'} />
                </Row>
            </Content>
        </Container>
    );
}

export default App;
