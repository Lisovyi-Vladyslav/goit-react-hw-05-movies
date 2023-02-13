import React, { Component } from "react";
import { Header } from 'components/Searchbar/Searchbar.styled'


export class Searchbar extends Component {


  render() {
    return(
      <>
        <Header>
          {this.props.children}
        </Header>
      </>
          
    );
      
  }
}