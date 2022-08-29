import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {value: enteredName, 
         isValid: nameIsValid,
         hasError: nameInputHasError,
         inputChangeHandler: nameInputChangeHandler,
         inputBlurHandler: nameInputBlurHandler,
         resetInput: resetName
        } = useInput((value) => value.trim() !== '');
  const {
          value: enteredEmail, 
          isvalid: emailIsValid,
          hasError: emailInputError,
          inputChangeHandler: emailChangeHandler,
          inputBlurHandler: emailBlurHandler,
          resetInput: resetEmail
        } = useInput((value) => value.includes('@'))

  let formIsValid = nameIsValid && emailIsValid ? true : false;

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    console.log(formIsValid)
    // if(!formIsValid)
    //   return

    resetEmail();
    resetName();
  }



  const nameInputClasses = !nameInputHasError ? `form-control` 
                                       : `form-control invalid`


  const emailInputClasses = !emailInputError ? `form-control` 
                                            : `form-control invalid`

  return (
    <form  onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
               type='text' id='name' 
               onChange={nameInputChangeHandler}
               onBlur={nameInputBlurHandler}
               value={enteredName}
        />
        {nameInputHasError && <p className="error-text">Name is invalid you prick</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input 
               type='email' id='name' 
               onChange={emailChangeHandler}
               onBlur={emailBlurHandler}
               value={enteredEmail}
        />
        {emailInputError && <p className="error-text">Name is invalid you prick</p>}
      </div>
      <div className="form-actions">
        <button disabled={formIsValid} id="submit" type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
