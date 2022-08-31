// create style here
const style = {
  form: { margin: "150px" },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    fontSize: "20px",
    fontWeight: "900",
  },
  input: {
    width: "100%",
    padding: "10px",
    backgroundColor: "grey",
    borderRadius: "10px",
  },
};

// create Form component
function Form() {
  return (
    // code inside div
    <form style={style.form}>
      <div style={style.formGroup}>
        <label htmlFor="" style={style.label}>
          Username
        </label>
        <input type="text" placeholder="Input username" style={style.input} />
      </div>
    </form>
  );
}

export default Form;
