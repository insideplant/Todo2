import { Container } from "@mui/material";
import BookTable from "../BookTable";
import { getAllBooks } from "../fetch/ApiFetch";
import { useState,useEffect } from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from '@mui/material';

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
  },[])


    return (
      <>
        <Container maxWidth="md">          
          <Typography variant="h3" gutterBottom> TODO </Typography>
          <BookTable books = {books} />
        </Container>
      </>
    );
  }