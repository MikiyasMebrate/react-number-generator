import React from 'react'
import ReactDOM from 'react-dom'

const rootElement = document.getElementById('root')


const Header = () => (
  <div className='text-center'>
    <h1>30 Days of React</h1>
  </div>
)


const SectionNumberGenerator = () => (
  <div className='text-center mt-3 '>
    <h3>Number Generator</h3>
  </div>
)

const Card = ({ number, color }) => <div className={'col-1 p-5  text-light  border bg-' + color}>{number}</div>

const NumberGeneratorBody = () => {
  let numberLists = []
  let notPrime = true;
  for (let i = 0; i < 48; i++) {
    notPrime = true
    if (i === 1) {
      numberLists.push(<Card number={i} color="warning" />)
    } else if (i === 2) {
      numberLists.push(<Card number={i} color="danger" />)
    }
    else if (i % 2 !== 0) {
      for (let j = 3; j < i; j += 2) {
        if (i % j === 0) {
          notPrime = false
          break;
        }
      }
      notPrime ? numberLists.push(<Card number={i} color="danger" />) : numberLists.push(<Card number={i} color="warning" />)
    } else if (i % 2 === 0) {

      numberLists.push(<Card number={i} color="success" />)
    }
  }


  return (
    <div className='container-xxl'>
      <div className='row justify-content-center'>
        <div className='text-center'>
          <p>Green: Even Numbers, Yellow: Odd Numbers, Red: Prime Numbers</p>
        </div>
        {numberLists}
      </div>
    </div>
  )
}

const SectionHexaColor = () => (
  <div className='text-center mt-5'>
    <h3>Hexadecimal Color Generator</h3>
  </div>
)

const hexaCodeGenerator = () => {
  let str = '123456789abcdef'
  let code = ''
  for (let i = 0; i < 6; i++) {
    code += str[Math.floor(Math.random() * str.length)]
  }
  return code
}

const HexaCard = ({ code }) => <div style={{ backgroundColor: `#${code}` }} className='col-2 p-5  border text-center text-light'>#{code}</div>

const HexaColorBody = () => {
  let code = []
  for (let i = 0; i < 24; i++) {
    code.push(<HexaCard code={hexaCodeGenerator()} />)
  }
  return (
    <div className='container-xxl'>
      <div className='row justify-content-center text-center'>
        {code}
      </div>
    </div>
  )
}

const App = () => (
  <div className='m-5'>
    <Header />
    <SectionNumberGenerator />
    <NumberGeneratorBody />
    <SectionHexaColor />
    <HexaColorBody />
  </div>
)

ReactDOM.render(<App />, rootElement)