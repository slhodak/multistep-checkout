//  Dynamically create forms based on form models of attributes
//  Or create several components



//  Forms
class FormOne extends React.Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleBackButtonClick(e) {
    ReactDOM.findDOMNode(this).hidden = true;
    document.getElementById('checkoutButton').hidden = false;
  }
  handleFormSubmit(e) {
    event.preventDefault();
    ReactDOM.findDOMNode(this).hidden = true;
    document.getElementById('formTwo').hidden = false;
  }
  render() {
    return(
    <div id="formOne" hidden={true}>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="text" name="password" />
        <input type="submit" value="Next" onClick={this.handleFormSubmit} />
      </form>
      <button onClick={this.handleBackButtonClick}>Back</button>
    </div>
    )
  }
}

class FormTwo extends React.Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleBackButtonClick(e) {
    ReactDOM.findDOMNode(this).hidden = true;
    document.getElementById('formOne').hidden = false;
  }
  handleFormSubmit(e) {
    event.preventDefault();
    ReactDOM.findDOMNode(this).hidden = true;
    document.getElementById('formThree').hidden = false;
  }
  render() {
    return(
    <div id="formTwo" hidden={true}>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="text" name="password" />
        <input type="submit" value="Next" onClick={this.handleFormSubmit} />
      </form>
      <button onClick={this.handleBackButtonClick}>Back</button>
    </div>
    )
  }
}

class FormThree extends React.Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleBackButtonClick(e) {
    ReactDOM.findDOMNode(this).hidden = true;
    document.getElementById('formTwo').hidden = false;
  }
  handleFormSubmit(e) {
    event.preventDefault();
    ReactDOM.findDOMNode(this).hidden = true;
    document.getElementById('purchaseScreen').hidden = false;
  }
  render() {
    return(
    <div id="formThree" hidden={true}>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="text" name="password" />
        <input type="submit" value="Purchase" onClick={this.handleFormSubmit} />
      </form>
      <button onClick={this.handleBackButtonClick}>Back</button>
    </div>
    )
  }
}

class PurchaseScreen extends React.Component {
  constructor(props) {
    super(props);
    this.handleShopMoreClick = this.handleShopMoreClick.bind(this);
  }
  handleShopMoreClick(e) {
    ReactDOM.findDOMNode(this).hidden = true;
    document.getElementById('checkoutButton').hidden = false;
  }
  render() {
    return(
      <div id="purchaseScreen" hidden={true}>
        <h1>Thank you!</h1>
        <button onClick={this.handleShopMoreClick}>Shop More</button>
      </div>
    )
  }
};

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
        <FormTwo />
        <FormThree />
        <PurchaseScreen />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));