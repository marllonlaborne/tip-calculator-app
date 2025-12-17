const App = () => {
  return (
    <div className="tip-calculator-app">
      <div className="logo">
        <img src="./assets/svg/logo.svg" alt="Logo" />
      </div>

      <section className="tip-calculator bg-white">
        <div className="bills-data">
          <div className="bill">
            <label className="font-base very-dark-cyan">Bill</label>
            <input
              type="number"
              className="font-md bg-very-light-grayish-cyan very-dark-cyan"
              placeholder="0"
              data-bill-input
            />
          </div>

          <div className="tips-selection">
            <label className="font-base very-dark-cyan">Select Tip %</label>
            <div className="custom-tips">
              <div className="font-base bg-very-dark-cyan white tip tip-5">
                5%
              </div>
              <div className="font-base bg-very-dark-cyan white tip tip-10">
                10%
              </div>
              <div className="font-base bg-very-dark-cyan white tip tip-15">
                15%
              </div>
              <div className="font-base bg-very-dark-cyan white tip tip-25">
                25%
              </div>
              <div className="font-base bg-very-dark-cyan white tip tip-50">
                50%
              </div>
              <input
                className="font-md-1 custom-tip bg-very-light-grayish-cyan very-dark-cyan"
                placeholder="Custom"
                data-custom-tip
              />
            </div>
          </div>

          <div className="people-number">
            <label className="font-base very-dark-cyan">Number of People</label>
            <label className="font-base error-message">Can't be zero.</label>
            <input
              className="font-md very-dark-cyan bg-very-light-grayish-cyan"
              type="number"
              placeholder="0"
              data-people-input
            />
          </div>
        </div>

        <div className="tips-display bg-very-dark-cyan strong-cyan">
          <div className="tips" data-tip-amount>
            <div className="tips-label">
              <label className="font-md white">Tip Amount</label>
              <label className="font-sm grayish-cyan">/ person</label>
            </div>
            <span className="font-lg strong-cyan">$0.00</span>
          </div>
          <div className="tips" data-tip-total>
            <div className="tips-label">
              <label className="font-md white">Total</label>
              <label className="font-sm grayish-cyan">/ person</label>
            </div>
            <span className="font-lg strong-cyan">$0.00</span>
          </div>
          <button className="font-md-1 reset">Reset</button>
        </div>
      </section>
    </div>
  )
}

export default App
