import useInput from "../hooks/use-input";

const BasicForm = (props) => {

  const stringIsValid = (input) => input.trim() !== '';
  const emailIsValid = (email) => email.includes('@');

  const {
    value: enteredFname,
    isValid: fNameIsValid,
    hasError: fNameHasError,
    inputChangeHandler: fNameChangeHandler,
    inputBlurHandler: fNameBlurHandler,
    resetInput: resetFname
  } = useInput(stringIsValid);

  const {
    value: enteredLName,
    isValid: lNameIsValid,
    hasError: lNameHasError,
    inputChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
    resetInput: resetLName
  } = useInput(stringIsValid);

  const {
    value: enteredEmail,
    isValid: emailValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: resetEmail
  } = useInput(emailIsValid);

  let formIsValid = emailValid && lNameIsValid && fNameIsValid;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if(!formIsValid) 
      return; 

    resetEmail();
    resetLName();
    resetFname();
  }

  const lNameClasses = !lNameHasError ? `form-control` : `form-control invalid`
  const fNameClasses = !fNameHasError ? `form-control` : `form-control invalid`
  const emailClasses = !emailHasError ? `form-control` : `form-control invalid`





  return (
    <form>
      <div className='control-group'>
        <div className={fNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={fNameChangeHandler} onBlur={fNameBlurHandler}
          value={enteredFname} />
        </div>
        <div className={lNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lNameChangeHandler} onBlur={lNameBlurHandler} value={enteredLName}/>
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail}/>
      </div>
      <div className='form-actions'>
        <button disabled={formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
