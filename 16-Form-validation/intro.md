# Form Validation in React 

Forms can be complex in React: 

In this section we will: 

- Investigate what is complex about forms in React 
- Handling Inputs and Forms in React 
- Simplifications (Tools and Approaches)

## What's so Complex about Forms 

Forms and inputs can have many different states. 
This is why they are so complex, you could have valid or invalid.
There could be a state that is searching a database, for known names (To find out if a username is available) so on. 

These states apply to every individual input. 
When a form and it's inptus are invalid, then you may want to output input specific messages, and highlight the input. 

You want to ensure the form cannot be submitted. 

When you should validate is also confusing, 

- When losing focus 
  - Annoying if there is a load of inputs 
  - Avoids unecessary warnings
- On every keystroke 
  - Many re-renders
  - uptodate information
  - warns users before they have had a chance to input valid values.
- When form is submitted
  - This is useful for untouched forms
  - If an input was invalid, the user doesn't know whether it's valid or not. 