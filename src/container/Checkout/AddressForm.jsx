import React, {useState} from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import {Link} from 'react-router-dom'

function AddresForm () {
  
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [focus, setFocus] = useState('')

  return(
    <div>
      <Cards 
      number={number}
      name={name}
      expiry={expiry}
      cvc={cvc}
      focused={focus}
      />
      <form>
        <input type="tel" name="number" 
        placeholder="card number" 
        value={number} 
        onChange={e => setNumber(e.target.value)}
        onFocus={e => setFocus(e.target.name)}
        />
        <input type="text" name="name" 
        placeholder="name" 
        value={name} 
        onChange={e => setName(e.target.value)}
        onFocus={e => setFocus(e.target.name)}
        />
        <input type="text" name="expiry" 
        placeholder="MM/YY Expiry" 
        value={expiry} 
        onChange={e => setExpiry(e.target.value)}
        onFocus={e => setFocus(e.target.name)}
        />
        <input type="tel" name="cvc" 
        placeholder="CVC" 
        value={cvc} 
        onChange={e => setCvc(e.target.value)}
        onFocus={e => setFocus(e.target.name)}
        />
        <Link to="/">
        <button
              className="btn btn-primary"
              style={{
                marginLeft: "900px",
                marginTop: "10px",
                marginBottom: "50px",
              }}
            >
              Pay
            </button>
        </Link>
      </form>
    </div>
  )
}
export default AddresForm