import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import languages from './assets/languages'

function App() {

  return (
    <>
      <main>
        <div className="container my-5">
          <section className=''>
            {/* sezione dei bottoni */}
            <div className='my-4'>
              <button className="btn btn-primary">click</button>
              <button className="btn">click</button>
              <button className="btn">click</button>
              <button className="btn">click</button>
              <button className="btn">click</button>
            </div>
            {/* blocco di output */}
            <div className='border'>
              <h2>Titolo</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil maxime itaque perferendis voluptatibus aliquid deserunt modi, amet atque sint praesentium!</p>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
