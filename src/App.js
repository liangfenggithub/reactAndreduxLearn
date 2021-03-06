import React from 'react';
import routes from "./routes/routes.js"
import { Route, Switch } from "react-router-dom";
import { Button } from "antd";
class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          {
            routes.map(v => {
              return <Route path={v.path} exact={v.exact} key={v.path} component={v.component} >
              </Route>
            })
          }
        </Switch>
      </div>
    );
  }
}


export default App;
