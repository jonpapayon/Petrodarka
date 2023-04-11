import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "../../assets/styles/GlobalStyles";
import Popup from "reactjs-popup";

// views
import { Home } from "../../views/Home";
import { About } from "../../views/About";
import { Stations } from "../../views/Stations";

// components
import { Layout } from "../../components/Layout";
import ScrollToTop from "../../components/ScrollToTop";
import { BurgerIcon } from "../BurgerIcon";
import { BurgerMenu } from "../BurgerMenu";

const contentStyle = {
  background: "rgba(34,34,34,0)",
  width: "80%",
  border: "none",
};

const App = () => {
  return (
    <>
      <GlobalStyle />

      <HashRouter>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Layout>
              <Route exact path="/nosotros" component={About} />
              <Route exact path="/estaciones" component={Stations} />
            </Layout>
            <Route component={Home} />
          </Switch>
        </ScrollToTop>
        <Popup
          modal
          overlayStyle={{ background: "rgba(34,34,34,0.98" }}
          contentStyle={contentStyle}
          closeOnDocumentClick={false}
          trigger={(open) => <BurgerIcon open={open} />}
        >
          {(close) => <BurgerMenu close={close} />}
        </Popup>
      </HashRouter>
    </>
  );
};

export default App;
