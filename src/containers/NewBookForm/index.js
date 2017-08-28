import React, {Component} from 'react';


class NewBookForm extends Component{
	constructor(){
		super();
		this.state = {
			addAuthor: '',
			addTitle:''
		}
	}

	componentWillMount(){
		// this.setState({
		// addAuthor: '',
		// addTitle: ''
		// });

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
			<div>
					<input
						type="text"
						name="author"
						placeholder="Author"
						onChange={this.handleAddAuthor.bind(this)}
					/>

					<br />

					<input 
					type="text"
					name="title"
					placeholder="book title"
					onChange={this.handleAddTitle.bind(this)}
					/>

					<br />

		<button onClick={this.props.addBook}>Add Book </button>

			</div>


			)
	}
}



export default NewBookForm;