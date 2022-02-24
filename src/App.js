import logo from "./logo.svg";
import "./App.css";
import { Spinner } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import QuestionSet from "./QuestionSet";
import FartMachine from "./FartMachine";
import { useState } from "react";
function App() {
    const [currentPage, setCurrentPage] = useState(0);
    const [score, setScore] = useState(0);

    const handleSubmit = (data) => {
        console.log(data);
        // map through data (object) & combine results
        const results = Object.keys(data)
            .map((key) => data[key])
            .reduce((a, b) => a + b);

        setScore(results);

        // set Current page to 1, wait two seconds, then set current page to 2
        setCurrentPage(1);
        setTimeout(() => {
            setCurrentPage(2);
        }, 2000);
    };

    return (
        <ChakraProvider>
            {currentPage === 0 && <QuestionSet onSubmit={handleSubmit} />}
            {currentPage === 1 && <Loading />}
            {currentPage === 2 && <FartMachine score={score} />}
        </ChakraProvider>
    );
}

export default App;

const Loading = () => {
    return <Spinner size="xl" />;
};
