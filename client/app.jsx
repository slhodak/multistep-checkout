
//  Forms
// F1 collects name, email, and password for account creation.
class FormOne extends React.Component {
  constructor(props) {
    super(props);

    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleBackButtonClick(e) {
    this.props.travelBetweenPages('formOne', 'checkoutButton');
  }
  handleFormSubmit(e) {
    this.props.handleSubmitData();
    this.props.travelBetweenPages('formOne', 'formTwo');
  }
  handleChange(e) {
    this.props.updateFormData(e);
  }
  render() {
    return(
    <div id="formOne" hidden={true}>
      <form onSubmit={this.handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" onChange={this.handleChange}/>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" onChange={this.handleChange}/>
        <label htmlFor="password">Password:</label>
        <input type="text" name="password" onChange={this.handleChange}/>
        <input type="submit" value="Next" />
      </form>
      <button onClick={this.handleBackButtonClick}>Back</button>
    </div>
    )
  }
}

// F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
class FormTwo extends React.Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleBackButtonClick(e) {
    this.props.travelBetweenPages('formTwo', 'formOne');
  }
  handleFormSubmit(e) {
    event.preventDefault();
    this.props.travelBetweenPages('formTwo', 'formThree');
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

// F3 collects credit card #, expiry date, CVV, and billing zip code
class FormThree extends React.Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleBackButtonClick(e) {
    this.props.travelBetweenPages('formThree', 'formTwo');
  }
  handleFormSubmit(e) {
    event.preventDefault();
    this.props.travelBetweenPages('formThree', 'purchaseScreen');
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
    this.props.travelBetweenPages('purchaseScreen', 'checkoutButton');
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


class CheckoutButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    this.props.travelBetweenPages('checkoutButton', 'formOne');
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
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSubmitData = this.handleSubmitData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmitData() {
    event.preventDefault();
    for (var item in this.state) {
      console.log(item + ': ' + this.state[item]);
    }
    this.setState({});
  }
  updateFormData(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  travelBetweenPages(self, target) {
    document.getElementById(self).hidden = true;
    document.getElementById(target).hidden = false;
  }
  render() {
    return(
      <div>
        <CheckoutButton travelBetweenPages={this.travelBetweenPages}/>
        <FormOne travelBetweenPages={this.travelBetweenPages} updateFormData={this.updateFormData} handleSubmitData={this.handleSubmitData}/>
        <FormTwo travelBetweenPages={this.travelBetweenPages}/>
        <FormThree travelBetweenPages={this.travelBetweenPages}/>
        <PurchaseScreen travelBetweenPages={this.travelBetweenPages}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));