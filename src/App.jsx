
import './App.css'

function App() {


  return (
    <>
      <div className='currency-converter'>
        <h1 className='converter-title'>Convertor de monedas</h1>
        <form className='converter-form'>
          <div className='form-group'>
            <label className='form-label'>ingrese el Monto</label>
            <input type='number' className='form-input' placeholder='0.00' required/>
          </div>

          <div className='form-group'>
            <div className='form-section'>
              <label className='form-label'>de</label>
              <div className="currency-select">
                <img src="https://flagsapi.com/US/flat/64.png" alt="bandera" />
                <select className='currency-dropdown'>
                  <option value="USD" selected>USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="JPY">JPY</option>
                </select>
              </div>
            </div>

            <div className="swap-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 1v4h-9v3h9v4l5-5-5-5zM7 23v-4h9v-3H7v-4l-5 5 5 5z" fill='#000'/>
              </svg>
            </div>

            <div className='form-section'>
              <label className='form-label'>de</label>
              <div className="currency-select">
                <img src="https://flagsapi.com/AR/flat/64.png" alt="bandera" />
                <select className='currency-dropdown'>
                  <option value="USD">USD</option>
                  <option value="ARG" selected>ARG</option>
                  <option value="GBP">GBP</option>
                  <option value="JPY">JPY</option>
                </select>
              </div>
            </div>

            <button type='submit' className="submit-button">obtener el tipo de cambio</button>

            <p className="exchange-rate-result">
              1,000 USD = 1285,78 ARS
            </p>

          </div>
        </form>
      </div>

    </>
  )
}

export default App
