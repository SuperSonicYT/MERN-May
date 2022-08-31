import React from 'react';
import Header from './Header.jsx';
import { Link, Outlet } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          component:'First',
          id:1
        },
        {
          component:'Second',
          id:2
        },
        {
          component:'Third',
          id:3
        }
      ],
      comp:'',
    }
    this.compSelect = this.compSelect.bind(this);
  }

  compSelect(e) {
    this.setState({comp:e.target.innerText})
  }
  render() {
    return (
      <div>
        <Header />
        <div>
        <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
         <ul>
            <li onClick={this.compSelect}>First</li>
            <li onClick={this.compSelect}>Second</li>
            <li onClick={this.compSelect}>Third</li>
            <h3>{this.state.comp}</h3>
         </ul>
          {this.state.data.map((dynamicContent,i) => 
              <Content key={i} componentData={dynamicContent} comp={this.state.comp} />
          )}
        </div>
        <Footer />
      </div>
    )
  }
}


class Content extends React.Component {
  render() {
    return(
      <div>
         { this.props.componentData.component==this.props.comp ? <h3>{this.props.componentData.component}<br></br>{this.props.componentData.id}</h3> : null }
      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div>
        <h1>Footer</h1>
      </div>
    )
  }
}




export default App;
