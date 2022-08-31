import { Route } from "react-router-dom";

const Welcome = (props) => {
  return (
    <section>
      <h2>Welcome Page</h2>
      <Route path="/welcome/new-user"> {/* Nested routes */}
        <p>Welcome, you rubbber dingy boi</p>
      </Route>
    </section>
  )
}

export default Welcome; 