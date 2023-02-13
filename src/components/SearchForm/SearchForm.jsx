import React, { Component } from "react";
import { Forma, Input, SearchButton, Label } from 'components/SearchForm/SearchForm.styled'
import { Formik } from 'formik';

export class SearchForm extends Component {

handleSubmit = (values, actions) => {
    
  this.props.handlSearcPphoto(values)
        actions.resetForm();
    };

  render() {
    return(
      <>
       
<Formik
initialValues={{ search: '' }}
onSubmit={this.handleSubmit}
  >
    <Forma >
    <SearchButton type="submit" >
      <Label >S</Label>
    </SearchButton>

    <Input
      type="text"
      name="search"
    
      placeholder="Search images and photos"
    />
  </Forma>
</Formik>
          
        
      </>
          
    );
      
  }
}