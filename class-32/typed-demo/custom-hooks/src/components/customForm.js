import useForm from '../hooks/useForm.js';

function Form() {

  // we're going to import form handlers from a custom hooks
  const [handleSubmit, handleChange, values] = useForm((valuesFromHook) => console.log(valuesFromHook));

  return (
    <form onSubmit={handleSubmit}>
      <input name="assigned" onChange={handleChange} placeholder="assigned to" />
      <input name="task" onChange={handleChange} placeholder="task name" />
      <button type="submit">Submit</button>
      <p>{JSON.stringify(values)}</p>
    </form>
  )
}

export default Form;
