import React from 'react';
import Dropdwn from "./search-dropdwn";
import NavBar from './nav-bar';
import axios from 'axios';
import {country_codes,countries,categories} from './country-codes';
import {Container,Row,Col,Card,Button} from 'react-bootstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class TopHeadline extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value:null,
            posts : "",
            category:null,
            error:false
        }
    }
    componentDidUpdate(prevProps,prevState){
      console.log(this.state);
    //  console.log(prevProps, prevState,this.state.value);
      if (
        (prevState.value !== this.state.value ||
          prevState.category !== this.state.category) &&
        this.state.value !== null
      ) {
        if (this.state.category === null) {
          axios
            .get(
              "https://newsapi.org/v2/top-headlines?country=" +
                this.state.value +
                "&apiKey=4cdd4eff4bf9423aaf52d764fb46a365"
            )
            .then((Response) => {
              this.setState({ posts: Response });
            }).catch(error => this.setState({error:true}));
        } else {
          axios
            .get(
              "https://newsapi.org/v2/top-headlines?country=" +
                this.state.value +
                "&category=" +
                this.state.category +
                "&apiKey=4cdd4eff4bf9423aaf52d764fb46a365"
            )
            .then((Response) => {
              this.setState({ posts: Response });
            })
            .catch((error) => this.setState({ error: true }));
        }
      }
    }
    loadMore = () =>{
      if(this.state.value !==null){
         axios
           .get(
             "https://newsapi.org/v2/top-headlines?country=" +
               this.state.value +
               "&pageSize=" +
               this.state.posts.data.totalResults +
               "&apiKey=4cdd4eff4bf9423aaf52d764fb46a365"
           )
           .then((Response) => {
             this.setState({ posts: Response });
           })
           .catch((error) => this.setState({ error: true }));
      }
    }
    render(){


        return (
          <div>
            <NavBar Active="TopHeadline" link = {this.props.link}/>
            <Container style={{ textAlign: "center" }} className="mt-4">
              <h1>
                Top News in{" "}
                {this.state.value
                  ? country_codes[this.state.value]
                  : "Each Country"}
              </h1>
              {this.state.error ?<h2 className="text-danger">Something went Wrong!</h2>:null}
              <h4>Select Your Country</h4>

              <Row className="justify-content-center">
                <Dropdwn
                  this={this}
                  options={countries}
                  name="Countries"
                  placeholder="Search Your Country"
                  for="country"
                />
                <Dropdwn
                  this={this}
                  options={categories}
                  name="Categories"
                  placeholder="Select the Category (Optional)"
                  for="category"
                />
              </Row>
              <Row className="justify-content-center align-items-start">
                {this.state.posts
                  ? this.state.posts.data.articles.map((a, index) => (
                      <Col xs={12} md={6} lg={4} className="" key={index}>
                        <Card>
                          <Card.Img variant="top" src={a.urlToImage} />
                          <Card.Body>
                            <Card.Title>{a.title}</Card.Title>
                            <Card.Text>
                              {a.author}
                              <br />
                              {a.description}
                            </Card.Text>
                            <Button variant="primary" href={a.url}>
                              For More
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))
                  : null}
              </Row>
              {this.state.posts ? (
                <Button variant="primary" onClick={this.loadMore}>
                  Load More
                </Button>
              ) : null}
            </Container>
          </div>
        );
    }
}




export default TopHeadline;