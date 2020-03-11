import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { BookListComponent } from "./book-list/book-list.component";
import { SingleBookComponent } from "./book-list/single-book/single-book.component";
import { BookFormComponent } from "./book-list/book-form/book-form.component";
import { AuthService } from "./services/auth.service";
import { AuthGuardService } from "./services/auth-guard.service";
import { BooksService } from "./services/books.service";

const routes: Routes = [
  { path: "auth/signup", component: SignupComponent },
  { path: "auth/signin", component: SigninComponent },
  { path: "books", component: BookListComponent },
  { path: "books/new", component: BookFormComponent },
  { path: "books/view/:id", component: SingleBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
