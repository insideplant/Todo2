import { Container } from "@mui/material";
import BookTable from "../BookTable";
import { getAllBooks } from "../fetch/ApiFetch";
import { useState,useEffect } from "react";

export default function Root() {
  
    type Book = {
      isbn: number;
      name: String;
      publisher: String;
      author:  String;
    };

  const [books, setBooks] = useState<Book[]>([])


  useEffect(() => {
    console.log("test");
    return () => {
      getAllBooks().then(books => {
        setBooks(books);
      });
    }
  })


    return (
      <>
        <Container maxWidth="md">
          <div>
            TODO List
          </div>
          <BookTable books = {books} />
        </Container>
      </>
    );
  }