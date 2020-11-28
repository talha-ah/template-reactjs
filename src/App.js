import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import authReducer from "./store/reducers/auth";
import Main from "./container/Main";

const store = createStore(authReducer);

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      // sm: 481,
      md: 768,
      lg: 992,
      xl: 1199,
    },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
