import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Shoppingpage from "./Shoppingpage";
function App() {
  return (
    <Container>
      <AppBar
        style={{
          backgroundColor: "rgb(242, 222, 247)",
          textAlign: "center",
          marginTop: "10px",
        }}
        position="static"
      >
        <Typography variant="h3" component="div">
          Redux Shopping Site
        </Typography>
      </AppBar>
      {/* <div className="App"> */}
      {/* <header className="App-header"> */}
      <Shoppingpage />
      {/* </header> */}
      {/* </div> */}
    </Container>
  );
}

export default App;
