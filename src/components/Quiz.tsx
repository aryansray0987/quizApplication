import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  LinearProgress,
} from '@mui/material';
import { motion } from 'framer-motion';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Fe", "Au", "Cu"],
    correctAnswer: "Au"
  }
];

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
    } else {
      setShowResults(true);
      navigate('/results', { state: { score, totalQuestions: questions.length } });
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          py: 4,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            }}
          >
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Question {currentQuestion + 1} of {questions.length}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{ mb: 3, height: 8, borderRadius: 4 }}
            />
            <Typography variant="h4" component="h2" gutterBottom>
              {questions[currentQuestion].question}
            </Typography>
            <FormControl component="fieldset" sx={{ width: '100%', mt: 2 }}>
              <RadioGroup
                value={selectedAnswer}
                onChange={handleAnswerSelect}
              >
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FormControlLabel
                      value={option}
                      control={<Radio />}
                      label={option}
                      sx={{
                        mb: 1,
                        p: 1,
                        borderRadius: 1,
                        '&:hover': {
                          backgroundColor: 'rgba(0, 0, 0, 0.04)',
                        },
                      }}
                    />
                  </motion.div>
                ))}
              </RadioGroup>
            </FormControl>
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="contained"
                size="large"
                onClick={handleNextQuestion}
                disabled={!selectedAnswer}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderRadius: 2,
                }}
              >
                {currentQuestion + 1 === questions.length ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </Paper>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Quiz; 