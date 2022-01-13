import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    // slice, returs the array in range of order, i.e slice (0,8) returns the index 0 to 7 values in the exact order of the data array
    // thus, technically speaking, its not fully randomised, its just displaying the pre-defined lorem ipsum in the corresponding order from the first lorem ipsum
    setText(data.slice(0, amount));
  };
  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          //value = {count}, so that changed count value is shown to the user as well
          // if not this, the value changed will not be displayed to the user
          value={count}
          onChange={(e) => setCount(e.target.value)}
          // onchange, e func to update the value at every moment whenever the value changes,
          // update value instantly and at every change, not once when the submit is pressed
        />
        <button className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
