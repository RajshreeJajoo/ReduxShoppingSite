import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { useState } from "react";

const Shoppingpage = () => {
  const [price, setPrice] = useState();
  const [category,setCategory] = useState();
  const showShopping = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setPrice(res.data[0].price);
        setCategory(res.data[0].category);
      })
      .catch((err) => {
        console.log(err);
      }); 
  };
  return (
    <>
      <Container>
        <h1> Shopping Page</h1>
        <Button onClick={showShopping}>Click for Shoopping Items</Button>
        <Card style={{ width: "25%", backgroundColor: "lightgoldenrodyellow" }}>
          {/* <CardMedia
            component="img"
            height="140"
            image={setData(alldata.image)}
            alt="green iguana"
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {category}
            </Typography>
            <Typography variant="body2">
            {price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
};

export default Shoppingpage;
