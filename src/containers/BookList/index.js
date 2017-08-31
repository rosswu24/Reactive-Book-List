// import React, {Component} from 'react' // creates smart componnent or container
// class BookList extends Component{
//  constructor(props){ //dont need props in here because booklist extend from component which has the componet of props
//    super(); // dont need super or constructor. only need constructor if making changes within booklist prop
//    console.log(props);
//  }
//  render(){
//    console.log('render method', this.props);
//  return (
//    <ul>
//      {
//        this.props.books.map(book =>{
//          return(
//            <li>
//              <h3>{book.title}</h3>
//              <p>{book.author}</p>
//            </li>
//          )
//        })
//      }
//    </ul>
//    )
//  }
// }
// export default BookList

import React, { Component } from 'react';
import Book from '../../components/Book';

class BookList extends Component {
	render(){
		// console.log(this.props.filter) //this comes from app.js where filter = {this.state.bookFilterText}
		return (
			<ul>
				{
					this.props.books
					.filter(book=>{
						if (this.props.filter){
							return book.author.toLowerCase().indexOf(this.props.filter.toLowerCase()) > -1
						}else{
							return book
						}

						// return this.props.filter ? book.author.toLowerCase().indexOf(this.props.filter) >-1 : book;
						// //? |  if something is true return null
						// //: | else return book
					})
					.map(book =>{
						return (
							<Book
								title={book.title}
								author={book.author}
								key={book._id}
							/>
						)
					})
				}
			</ul>
		);
	}
}

export default BookList;