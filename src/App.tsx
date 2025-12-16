const App = () => {
  return (
    <>
      <div className="logo">
        <img src="./assets/svg/logo.svg" alt="Logo" />
      </div>

      <section className="tip-calculator">
        <div className="bills-wrapper">
          <label>Bill</label>
          <input
            type="number"
            className="bill-input"
            placeholder="0"
            data-bill-input
          />
          <label>Select Tip %</label>
          <div className="tips-wrapper">
            <div className="tip tip-5">5%</div>
            <div className="tip tip-10">10%</div>
            <div className="tip tip-15">15%</div>
            <div className="tip tip-25">25%</div>
            <div className="tip tip-50">50%</div>
            <input
              className="custom-tip"
              placeholder="Custom"
              data-custom-tip
            ></input>
          </div>
          <div className="people-number">
            <label>Number of People</label>
            <label className="error-message">Can't be zero.</label>
            <input type="number" placeholder="0" data-people-input />
          </div>
        </div>
        <div className="tip-display">
          <div className="tips-display" data-tip-amount>
            <label>Tip Amount</label>
            <span>$0.00</span>
          </div>
          <div className="tips-display" data-tip-total>
            <label>Total</label>
            <span>$0.00</span>
          </div>
          <button className="reset">Reset</button>
        </div>
      </section>
    </>
  )
}

export default App
