import React, {Component} from 'react';


class NewBookForm extends Component{
	constructor(){
		super();
		this.state = {
			addAuthor: '',
			addTitle:'',
		}
	}

	componentWillMount(){
		this.setState({
		addAuthor: '',
		addTitle: ''
		});

	}

	handleAddAuthor(e){
		this.setState({
			addAuthor: e.target.value,
		});
	}

	handleAddTitle(e){
		this.setState({
			addTitle:e.target.value
		});
	}

		handleBookSubmit(){
		var newBook = {
			title: this.state.handleAddTitle,
			author: this.state.handleAddAuthor
		};
			this.props.addBook(newBook);
	}

	render(){
		return(
 <div className="book-form">
        <label htmlFor="book-form">Add New Book</label>
        <br />
        <input
          type="text"
          name="title"
          placeholder="New Book Title"
          className="inputField"
          onChange={this.handleAddTitle.bind(this)}
        />
        <br />
        <input
          type="text"
          name="title"
          placeholder="New Book Author"
          className="inputField"
          onChange={this.handleAddAuthor.bind(this)}
        />
        <br/>

        <button onClick={this.handleBookSubmit.bind(this)}>Submit</button>
      </div>


			)
	}
}



export default NewBookForm;