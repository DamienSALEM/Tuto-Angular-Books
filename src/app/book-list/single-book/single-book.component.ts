import { Component, OnInit } from "@angular/core";
import { Book } from "../../models/books.model";
import { ActivatedRoute, Router } from "@angular/router";
import { BooksService } from "../../services/books.service";

@Component({
  selector: "app-single-book",
  templateUrl: "./single-book.component.html",
  styleUrls: ["./single-book.component.scss"]
})
export class SingleBookComponent implements OnInit {
  book: Book;

  constructor(
    private route: ActivatedRoute,
    private BooksService: BooksService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.book = new Book("", "");
    const id = this.route.snapshot.params["id"];
    this.BooksService.getSingleBook(+id).then((book: Book) => {
      this.book = book;
    });
  }

  onBack() {
    this.router.navigate(["/books"]);
  }
}
