import { Component, OnInit, OnDestroy } from "@angular/core";
import { BooksService } from "../services/books.service";
import { Book } from "../models/books.model";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.scss"]
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[];
  booksSubscription: Subscription;

  constructor(private BooksService: BooksService, private router: Router) {}

  ngOnInit(): void {
    this.booksSubscription = this.BooksService.booksSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.BooksService.emitBooks();
  }

  onNewBook() {
    this.router.navigate(["/books", "new"]);
  }

  onDeleteBook(book: Book) {
    this.BooksService.removeBook(book);
  }

  onViewBook(id: number) {
    this.router.navigate(["/books", "view", id]);
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }
}
