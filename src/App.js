import React from 'react';

import AboutMe from "./profile-page/aboutMe";
import TopHeadline from "./top-headline";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cur_page: 1,
    };
  }
  changePage = () =>{
    if(this.state.cur_page === 1)
     this.setState({cur_page:2})
     else{
       this.setState({ cur_page: 1 });
     }
  }
  render() {
    return (
      <div>
        {this.state.cur_page === 1 ? <TopHeadline link={this.changePage}/> : <AboutMe link={this.changePage} />}
      </div>
    );
  }
}

export default App;
