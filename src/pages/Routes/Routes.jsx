import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "../Banner";
import BookCards from "../BookCards/BookCards";
import Form from "../Form";
import Thanks from "../Thanks";
import Layout from "../Layout";
// import CounterPage from "../CounterPage/CounterPage";
import FactorialCalculator from "../CounterPage/CounterPage";
import RecivedApi from "../BookCards/RecivedApi";
import MyForm from "../FormPage/FormPage";
import GetDetails from "../BookCards/RecivedApi";
const Routers = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Banner />} />
                <Route path="/bookcards" element={<BookCards />} />
                {/* <Route exact path="/myform" element={<MyForm />} /> */}
                <Route path="/myform/:product_name" element={<MyForm />} />
                <Route path="/getdetails/:id" element={<GetDetails />} />
                <Route path="/counter" element={<FactorialCalculator />} />
                <Route path="/thankupage" element={<Thanks />} />
            </Routes>
        </Layout>
    );
}
export default Routers;
