import React, { Component } from 'react';
// import './App/styles.css';
import BookListAppTitle from '../../components/BookListAppTitle';
import BookFilterInput from'../../components/BookFilterInput';
import Book from '../../components/Book';
import BookList from '../BookList';
import {getBooksFromFakeXHR, addBookToFakeXHR} from '../../lib/books.db.js';
import NewBookForm from '../NewBookForm/index';




class App extends Component {
	constructor() {
	 super();
	}

	componentWillMount() {
	 console.log('sanity check: Component Will Mount');

	 this.setState({
		// books:booksFromFakeDB,
		books:[],
		bookFilterText: '',
	 });

	getBooksFromFakeXHR()
	.then(books=>{
		this.setState({
			books: books //books on the right is from the thenable, left books is the key name
		});
		console.log(books);
	})
	.catch(err=>{
		console.log(err);
	});

	function addBook(){
		addBookToFakeXHR()
		.then(addBook=>{
			this.setState({
				newBook: addBook
			});
			console.log(addBook);
		})
		.catch(err=>{
			console.log(err);
		});
	}
		
	}


	// handleChangeTitle(e){
	//  console.log('sanity check: Handle Change Title');
	//  this.setState({
	//    changeTitle: e.target.value
	//  });
	// }

	// handleChangeAuthor(e){
	//  console.log('sanity check: Handle Change Author');
	//  this.setState({
	//    changeAuthor: e.target.value
	//  });
	// }

	handleFilterInputerChange(e){
		this.setState({
			bookFilterText: e.target.value
		});
	}

	// addBook(e){
	//  books.push(NewBookForm)
	// }

	render() {
		return (
		<div>

			<BookListAppTitle
				title="Book List"
			/>

			<br />

			<BookFilterInput
				filterInputChange={this.handleFilterInputerChange.bind(this)}
			/>

			<BookList
			filter={this.state.bookFilterText}
			books={this.state.books}
			/>

			<br />

			<NewBookForm
			addBook = {this.addBook.bind(this)}
			/>

		</div>


		);
	}
}

export default App;
