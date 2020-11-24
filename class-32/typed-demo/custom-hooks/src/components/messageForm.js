import useForm from '../hooks/useForm.js';


function Message() {

  const sendMessage = async ({ sender, message }) => {
    console.log(sender, message);
    // let response = await fetch('http://localhost:3001');
    // let json = await response.json();

    // console.log(json);
  }

  // they return all the getters and setters that other components might need
  const [handleSubmit, handleChange, values] = useForm(sendMessage);


  return (
    <form onSubmit={handleSubmit}>
      <input name="sender" onChange={handleChange} placeholder="Sender" />
      <input name="message" onChange={handleChange} placeholder="Message" />
      <button type="submit">Submit</button>
      <p>{JSON.stringify(values)}</p>
    </form>
  )
}

export default Message;
