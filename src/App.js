import React from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = (props) => {
   
  const apiKey = process.env.REACT_APP_NEWS_API_KEY
  const pageSize = 6;
  const country = "in";

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <News apiKey={apiKey} key="general" pageSize={pageSize} country={country} category="general" />
            </Route>
          <Route exact path="/sports"><News apiKey={apiKey} key="sports" pageSize={pageSize} country={country} category="sports" /></Route>
          <Route exact path="/health"><News apiKey={apiKey} key="health" pageSize={pageSize} country={country} category="health" /></Route>
          <Route exact path="/business"><News apiKey={apiKey} key="business" pageSize={pageSize} country={country} category="business" /></Route>
          <Route exact path="/entertainment"><News apiKey={apiKey} key="entertainment" pageSize={pageSize} country={country} category="entertainment" /></Route>
          <Route exact path="/science"><News apiKey={apiKey} key="science" pageSize={pageSize} country={country} category="science" /></Route>
          <Route exact path="/technology"><News apiKey={apiKey} key="technology" pageSize={pageSize} country={country} category="technology" /></Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App;