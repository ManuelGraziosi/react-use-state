import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import languages from './assets/languages'
import { useState } from 'react'

function App() {
  const [selecedLanguage, setSelectedLanguage] = useState({
    id: 0,
    title: "",
    description: "scegli un linguaggio..."
  });

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
                languages.map((curLanguage) => <button className={curLanguage.id === selecedLanguage.id ? "btn btn-warning" : "btn btn-primary"} key={curLanguage.id} onClick={() => setSelectedLanguage(curLanguage)}>{curLanguage.title}</button>)
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
