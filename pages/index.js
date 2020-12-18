import React, { useState, useEffect } from "react"
import { Form } from 'react-bootstrap'
import Icon from '../public/Icon'
import Link from 'next/link'
import { TitleXL } from '../styles/styles'

function Home() {

  //state para input
  const [inputNumber, setInputNumber] = useState('');
  //state para feedback ao user
  const [result, setResult] = useState('');
  //state para controlar visibilidade do feedback
  const [visibility, setVisibility] = useState(false);

  //atualizar feedback quando o input muda
  useEffect(() => {
    fizzbuzz(inputNumber)
  }, [inputNumber])

  const handleOnChange = e => {
    //se existir um input altera o state e dá trigger ao useEffect
    if (e.target.value) { setInputNumber(e.target.value) }
    //senão existir input dá reset aos states e esconde feedback
    else { setInputNumber(''); setResult(''); setVisibility(false) }
  }

  //lógica para calcular se o número é um fizzbuzz
  const fizzbuzz = (i) => {
    if (isNaN(i)) {
      //just a couple easter eggs
      if (i === 'pi') setResult('Smartass... Try another one 🙃')
      else if (i === 'e') setResult('Was that a mathematical constant? 🤓')
      else setResult('I said numbers... 🙄')
    }
    //main logic
    else if (i == 0) { setResult('Not FizzBuzz 😅') }
    else if (i % 1 !== 0) { setResult('Integers only. Try a whole number instead 😶') }
    else if (i % 3 === 0 && i % 5 === 0) { setResult('FizzBuzz 🔥') }
    else if (i % 3 === 0) { setResult('Fizz ⚡') }
    else if (i % 5 === 0) { setResult('Buzz 🚀') }
    else { setResult('Not FizzBuzz 😅') }

    if (inputNumber.length > 0) { setVisibility(true) }
  }


  //ignorar classes css nas tags

  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <div class="col-sm mt-4 mb-3 mx-8">

            {
              //Link do nextjs + Styled component
            }
            <Link href='whatisfizzbuzzerbot'><a><Icon size='boxIcon' /></a></Link>
            <TitleXL size={40}>Tell me a number!</TitleXL>
            
            {
              //ignorar código abaixo
            }
            <div className='mb-10'>
              <Form.Group className='my-10'>
                <Form.Control value={inputNumber} onChange={handleOnChange} size="lg" type="text" placeholder="Type in any number" />
              </Form.Group>
              <div className={visibility ? 'visible' : 'invisible'}>
                <h4 className="font-weight-bold mt-2 mb-0">
                  {result}
                </h4>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;