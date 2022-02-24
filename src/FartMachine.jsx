import React from "react";
import { Button, Box } from "@chakra-ui/react";
import Finger from "./unknown.png";

let one = new Audio("./FartSounds/1.mp3");
let two = new Audio("./FartSounds/2.mp3");
let three = new Audio("./FartSounds/3.mp3");
let four = new Audio("./FartSounds/4.mp3");
let five = new Audio("./FartSounds/5.mp3");
let six = new Audio("./FartSounds/6.mp3");

function FartMachine({ score }) {
    const handlePlayAudio = () => {
        if (score < 6) {
            six.play();
            return;
        }
        if (score >= 25) {
            five.play();
            return;
        }
        if (score < 11) {
            four.play();
            return;
        }
        if (score < 16) {
            two.play();
            return;
        }
        if (score < 21) {
            three.play();
            return;
        }
        if (score < 25) {
            one.play();
            return;
        }
    };
    return (
        <Box textAlign="center">
            <Button
                onClick={handlePlayAudio}
                width="400px"
                height="400px"
                mt={6}
                boxShadow="lg"
                borderRadius={"400px"}
                backgroundColor="tomato"
                backgroundImage={Finger}
                backgroundPosition="center"
                backgroundRepeat={"no-repeat"}
                _hover={{
                    boxShadow: "lg",
                    transform: "scale(1.1)",
                }}
            ></Button>
            {/* <Button onClick={() => one.play()}>1</Button>
            <Button onClick={() => two.play()}>2</Button>
            <Button onClick={() => three.play()}>3</Button>
            <Button onClick={() => four.play()}>4</Button>
            <Button onClick={() => five.play()}>5</Button>
            <Button onClick={() => six.play()}>6</Button> */}
        </Box>
    );
}

export default FartMachine;
