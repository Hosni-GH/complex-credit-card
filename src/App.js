import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cardHolder:'Hosni Ghribi',
      cardNumber:'.... .... .... ....',
      validThru:'**/**',
      valueCardHolder:'',
      valueCardNumber:'',
      valueValidThru:'',
      first4digit:'****',
      second4digit:'****',
      third4digit:'****',
      fourth4digit:'****'
    }
 
      /*let cardExpiry=event.target.value;
      let mm=cardExpiry.substr(0,2)
      if (/^[0-9]*$/.test(cardExpiry)) {
        if (cardExpiry.substr(0, 2) <= 12){
          this.setState({
            validThru: cardExpiry.substr(0, 2) + "/" + cardExpiry.substr(2, 4),
            valueValidThru:cardExpiry.substr(0, 2) + "/" + cardExpiry.substr(2, 4)
          });
        }
      }
*/

     
  
      /*var patt1 = /[0-9]/g;
      if (patt1.test(code)){


        let x=code.substring(0,2)
        console.log("x"+x)

       
        this.setState({
          validThru:code,
          valueValidThru:code
        })
      }
      else alert("Enter a valid month")
     /* var allowedKeys = [8];
      if (allowedKeys.indexOf(code) !== -1) {
        return;
      }
      event.target.value = event.target.value.replace(
        /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
      );
      */
  
  }


  formastri1=(event) =>{
   
    if (event.target.value.length===2)
    event.target.value=event.target.value.concat("/")
    var patt1 = /[0-9]/g;
      if (patt1.test(event.target.value)){
// if test  2 d [1..12] this.setState({validThru:event.target.value})

      
      }
console.log( "fff")



    
  }
  onChangeCardHolder=(e)=>{
    let name=e.target.value.toUpperCase()
    let regex=/^[a-z A-Z]+$/
    if (!name.match(regex)) 
  {
    alert("cardHolder must contain only chars");
    return false;
  }
    if (name.length<21)
    this.setState({
      cardHolder:name,
      valueCardHolder:e.target.value
    }) 
    else alert ("Card holder can not contain more than 20 char")

  }
onChangeCardNumber=(e)=>{
let number=e.target.value
if (isNaN(number)) 
  {
    alert("cardNumber must contain only numbers");
    return false;
  }
if (number.length<17){
    let first4=number.substring(0,4),
    second4=number.substring(4,8),
    third4=number.substring(8,12),
    fourth4=number.substring(12)
    this.setState({
      cardNumber:number,
      valueCardNumber:e.target.value,
      first4digit:first4,
      second4digit:second4,
      third4digit:third4,
      fourth4digit:fourth4
    }) 
    
  }
    else alert ("Card number can not contain more than 16 char")

}
  render() { 
    return ( 
      <div className="App">
        <div className="main-container">
          <div className="title-container">
              <h1>Credit Card</h1>
          </div>
          <div className="chip-container">
              <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/credit-card-chip-1522262-1288452.png" alt="" />
          </div>
          <div className="footer">
            <div className="info-container">
              <div className="card-number">
                <p>{this.state.first4digit}</p><p>{this.state.second4digit}</p> <p>{this.state.third4digit}</p> <p>{this.state.fourth4digit}</p>
              </div> 
              <div className="code-valid">
                <div className="card-code">
                  <p className="bold-effect">5422</p>
                </div>
                <div className="card-validation">
                  <div className="month-year">
                      <p>Month/Year</p>
                  </div>
                  <div className="valid-thru">
                    <div className="valid-until">
                      <p>VALID<br/>THRU</p>
                    </div>
                    <div>
                      <i className="fas fa-caret-right"></i>
                    </div>
                    <div className="month-year-value">
                      <p className="bold-effect">{this.state.validThru}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-holder">
                <p className="bold-effect">{this.state.cardHolder}</p>
              </div> 
            </div>
            <div className="imgs-conainer">
              <img src=".\imgs\visa-master-card.png" alt=""/>
            </div>
          </div>
        </div>
        <div className="form-container">
          <input type="text" placeholder="Card Number" onChange={(e)=>this.onChangeCardNumber(e)} value={this.state.valueCardNumber}/><br/>
          <input type="text" placeholder="Card Holder" onChange={(e)=>this.onChangeCardHolder(e)} value={this.state.valueCardHolder}/><br/>
          <input maxLength="5" placeholder="MM/YY" type="text" onChange={(event)=>this.formastri1(event)} />

        </div>
      </div>
    );
  }
}
 
export default App;

