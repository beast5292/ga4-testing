import './App.css'

function App() {

  const trackEvent = (eventName, eventData = {}) => {
    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: eventName,
      ...eventData
    })

    console.log('GTM Event:', eventName, eventData)
  }

  return (
    <div className="container">
      <h1>GA4 Testing Website</h1>

      <p>
        My GA4 Corner
      </p>

      <div className="card">
        <h2>Test Events</h2>

        <button
          onClick={() =>
            trackEvent('button_click', {
              button_name: 'Test Button'
            })
          }
        >
          Test Button Click
        </button>

        <button
          onClick={() =>
            trackEvent('signup_click', {
              method: 'test'
            })
          }
        >
          Test Sign Up
        </button>

        <button
          onClick={() =>
            trackEvent('purchase_test', {
              item_name: 'Test Product',
              value: 10,
              currency: 'USD'
            })
          }
        >
          Test Purchase Event
        </button>
      </div>
    </div>
  )
}

export default App