import React, { Component } from 'react';
import Book from '../../components/Book';


class NewBookForm extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      author: ''
    }
  }

  handleAddTitle(e){
    this.setState({
      title: e.target.value
    });
  }

  handleAddAuthor(e){
    this.setState({
      author: e.target.value
    });
  }

  handleBookSubmit(){
    let newBook = {
      title: this.state.title,
      author: this.state.author,
    };

    this.props.addBook(newBook);
  }

  render(){
    return (
      <div className="book-form">
        <label htmlFor="book-form">Add New Book</label>
        <br />
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          className="inputField"
          onChange={this.handleAddTitle.bind(this)}
        />
        <br />
        <input
          type="text"
          name="title"
          placeholder="Author"
          className="inputField"
          onChange={this.handleAddAuthor.bind(this)}
        />
        <br/>

        <button onClick={this.handleBookSubmit.bind(this)}>Add Book</button>
      </div>
    );
  }
}

export default NewBookForm;