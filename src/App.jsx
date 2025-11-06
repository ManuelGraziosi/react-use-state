import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import languages from './assets/languages'
import { useState } from 'react'
import Button from './components/Button'

function App() {

  const initialOutput = {
    id: 0,
    title: "",
    description: "scegli un linguaggio..."
  }

  const [selecedLanguage, setSelectedLanguage] = useState(initialOutput);

  return (
    <>
      <main>
        <h1>Learn Web Development</h1>
        <div className="container my-5">
          <section className=''>
            {/* sezione dei bottoni */}
            <div className='my-4 d-flex gap-3'>
              {/* <button className="btn btn-primary">click</button>
              <button className="btn">click</button>
              <button className="btn">click</button>
              <button className="btn">click</button>
              <button className="btn">click</button> */}
              {
                languages.map((curLanguage) => <button className={curLanguage.id === selecedLanguage.id ? "btn btn-warning" : "btn btn-primary"} key={curLanguage.id} onClick={() => (curLanguage.id === selecedLanguage.id ? setSelectedLanguage(initialOutput) : setSelectedLanguage(curLanguage))}>{curLanguage.title}</button>)
              }
            </div>
            <div className='my-4 d-flex gap-3'>
              {
                languages.map((curLanguage) => <Button id={curLanguage.id} text={curLanguage.title} onClick={() => (curLanguage.id === selecedLanguage.id ? setSelectedLanguage(initialOutput) : setSelectedLanguage(curLanguage))} isSelected={curLanguage.id === selecedLanguage.id} />)
              }
            </div>
            {/* blocco di output */}
            <div className='border'>
              <h2>{selecedLanguage.title}</h2>
              <p>{selecedLanguage.description}</p>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
