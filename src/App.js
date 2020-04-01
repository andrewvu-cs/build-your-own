import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { store } from "./store";
import { useStoreState } from "pullstate";
import "./App.css";
import Home from "./containers/Home";
import Feature from "./containers/Feature";

function App() {
  //onComponentDidMount Equivalent
  useEffect(() => {
    axios.get("https://bshpersona.com/personaAPI/data/GetBYOData").then(res => {
      console.log(res.data.ProductBuilder);
      const { group, ListValues } = res.data.ProductBuilder;
      store.update(s => {
        s.groups = group;
        s.listValues = ListValues;
      });
    });
  }, []);

  const listValues = useStoreState(store, s => s.listValues);
  // console.log(listValues);

  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Dynamically creating routes */}
          {listValues.map(listValue => (
            <Route key={listValue.listItemID} path={`/${listValue.listName}`}>
              <Feature
                key={listValue.listItemID}
                name={listValue.listName}
                items={listValue.listItems}
              />
            </Route>
          ))}
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
