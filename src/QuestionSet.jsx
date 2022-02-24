import React from "react";
import {
    Box,
    Button,
    Text,
    Spacer,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
} from "@chakra-ui/react";

function QuestionSet({ onSubmit }) {
    const [questionSetAnswers, setQuestionSetAnswers] = React.useState({
        question1: 3,
        question2: 3,
        question3: 3,
        question4: 3,
        question5: 3,
    });
    const handleSubmit = () => {
        onSubmit(questionSetAnswers);
    };

    const handleChange = (key, newValue) => {
        setQuestionSetAnswers({
            ...questionSetAnswers,
            [key]: newValue,
        });
    };
    return (
        <Box p={4}>
            <Text fontSize="xl">Fart Astrology</Text>

            <Text mt={16}>1. Rate your current digestive system</Text>
            <Slider
                defaultValue={questionSetAnswers.question1 || 0}
                min={1}
                max={5}
                step={1}
                onChange={(newValue) => handleChange("question1", newValue)}
            >
                <SliderTrack bg="red.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="tomato" />
                </SliderTrack>
                <SliderThumb boxSize={6} />
            </Slider>
            <Text>2. Rate your last meal</Text>
            <Slider
                defaultValue={questionSetAnswers.question2 || 0}
                min={1}
                max={5}
                step={1}
                onChange={(newValue) => handleChange("question2", newValue)}
            >
                <SliderTrack bg="red.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="tomato" />
                </SliderTrack>
                <SliderThumb boxSize={6} />
            </Slider>
            <Text>3. Rate your psychological well being</Text>
            <Slider
                defaultValue={questionSetAnswers.question3 || 0}
                min={1}
                max={5}
                step={1}
                onChange={(newValue) => handleChange("question3", newValue)}
            >
                <SliderTrack bg="red.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="tomato" />
                </SliderTrack>
                <SliderThumb boxSize={6} />
            </Slider>
            <Text>4. Rate your love life</Text>
            <Slider
                defaultValue={questionSetAnswers.question4 || 0}
                min={1}
                max={5}
                step={1}
                onChange={(newValue) => handleChange("question4", newValue)}
            >
                <SliderTrack bg="red.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="tomato" />
                </SliderTrack>
                <SliderThumb boxSize={6} />
            </Slider>
            <Text>5. do you feel like you are in control of your life?</Text>
            <Slider
                defaultValue={questionSetAnswers.question5 || 0}
                min={1}
                max={5}
                step={1}
                onChange={(newValue) => handleChange("question5", newValue)}
            >
                <SliderTrack bg="red.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="tomato" />
                </SliderTrack>
                <SliderThumb boxSize={6} />
            </Slider>
            <Button onClick={handleSubmit}>Submit</Button>
        </Box>
    );
}

export default QuestionSet;
