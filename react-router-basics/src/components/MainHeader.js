// This will cause a request to be fired to the server
// The wrong way to route in React
// You want to focus on making an SPA 

// const MainHeader = () => {
//   return (
//     <header>
//       <nav>
//         <ul>
//           <li>
//             <a href="/welcome">Welcome</a>
//           </li>
//           <li>
//             <a href="/products">Products</a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   )
// }

// export default MainHeader;


// This is the correct way to do it. 
// The Link component is part of react-router-dom
// It acts the same bbut instead of href it wants a "to" prop

// We changed from Link to NavLink as it allows us to specify an activeClassName. This is useful for header as it allows us to visually show what link is active in the NavBar 



import { NavLink } from "react-router-dom";
import classes from './MainHeader.module.css'

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">Welcome</NavLink>
          </li>
          <li>
            <NavLink  activeClassName={classes.active} to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader;