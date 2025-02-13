import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile"
import { ProductsContextProvider } from "./Context/ProductsContext";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

function App() {
  //connect with server
  const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql/',
    cache: new InMemoryCache(),
  });


  return (
    <ApolloProvider client={client}>
    <ProductsContextProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/LogIn" element={<LogIn/>} />
      <Route path="/SignUp" element={<SignUp/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
    <Footer />
  </BrowserRouter>
  </ProductsContextProvider>
  </ApolloProvider>
  )
  }
export default App
