import React, { Component } from "react";
// import "./App.css";
import "./Components/ContentItems/ContentItems";
import ContentItems from "./Components/ContentItems/ContentItems";

const URLAPI = "https://levencovka.ru/wp-json/wp/v2/posts/?categories=51&_embed";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pages: 1,
    };
  }

  componentDidMount() {
    (async () => {
      const response = await fetch(URLAPI);
      const max_pages = await response.headers.get("X-WP-TotalPages");
      const data = await response.json();
      // console.log(data)
      this.setState({ data: data, pages: max_pages });
    })();
  }

  render() {
    return (
      <div className="App">
        <ContentItems data={this.state.data} pages={this.state.pages}/>
      </div>
    );
  }
}

export default App;
