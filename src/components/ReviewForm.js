import { useState } from 'react';


function ReviewForm() {
  const [review, setName] = useState("");

  const handleSubmit = (event) => {
 event.preventDefault();
    alert(`The Review was  ${review}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your Review:
        <input
          type="text" 
          value={review}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
     
      <input type="submit" style={{ color: "whitesmoke",backgroundColor: 'blue'}} />
      
    </form>
  )
}

export default ReviewForm;