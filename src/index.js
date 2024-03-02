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


//Country 

const tenHighestPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'United States of America', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russian Federation', population: 146599183 },
  { country: 'Japan', population: 126960000 },
]

const SectionCountry = () => {
  let worldPopulation = tenHighestPopulation[0].population
  let formmatedCountry = tenHighestPopulation.map((item) => {
    let percent = (item.population * 100)/worldPopulation
    return (
      <div className='row'>
        <div className='col-2 text-start'>
          {item.country}
        </div>
        <div className='col-8'>
          <div className="progress m-2" style={{height : '30px'}}>
            <div className="progress-bar  bg-warning  p-6" role="progressbar" style={{ width: percent+'%' }} aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100">{parseInt(percent)}%</div>
          </div >
        </div>
        <div className='col-2 text-start'>
          {item.population.toLocaleString()}
        </div>
      </div>
    )
  })
  return (
    <div className='text-center mt-5'>
      <h3>World Population</h3>
      <div className='container-xxl'>
        {formmatedCountry}
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
    <SectionCountry />
  </div>
)

ReactDOM.render(<App />, rootElement)