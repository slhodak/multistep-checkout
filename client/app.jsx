//  Dynamically create forms based on form models of attributes
//  Or create several components

//  Forms
class FormOne extends React.Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  handleBackButtonClick(e) {
    ReactDOM.findDOMNode(this).hidden = true;
    document.getElementById('checkoutButton').hidden = false;
  }
  render() {
    return(
    <div id="formOne" hidden={true}>
      <form>
        <label for="name">Name:</label>
        <input type="text" name="name" />
        <label for="email">Email:</label>
        <input type="text" name="email" />
        <label for="password">Password:</label>
        <input type="text" name="password" />
        <input type="submit" value="Next"/>
      </form>
      <button onClick={this.handleBackButtonClick}>Back</button>
    </div>
    )
  }
}

// F1 collects name, email, and password for account creation.
// F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
// F3 collects credit card #, expiry date, CVV, and billing zip code

class CheckoutButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    console.log('should show the next form');
    //  hide this element and show the next form
    ReactDOM.findDOMNode(this).hidden = true;
    document.getElementById('formOne').hidden = false;
  }
  render() {
    return(
      <div id="checkoutButton">
        <label>Checkout</label>
        <button onClick={this.handleSubmit}>Checkout</button>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return(
      <div>
        <CheckoutButton />
        <FormOne />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));