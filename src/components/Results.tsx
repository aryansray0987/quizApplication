import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  CircularProgress,
} from '@mui/material';
import { motion } from 'framer-motion';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions } = location.state as { score: number; totalQuestions: number };
  const percentage = (score / totalQuestions) * 100;

  const getMessage = () => {
    if (percentage >= 80) return "Excellent! You're a quiz master!";
    if (percentage >= 60) return "Good job! Keep practicing!";
    if (percentage >= 40) return "Not bad! You can do better!";
    return "Keep studying! You'll get better!";
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          py: 4,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              textAlign: 'center',
              borderRadius: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            }}
          >
            <Typography variant="h3" component="h1" gutterBottom>
              Quiz Complete!
            </Typography>
            <Box sx={{ position: 'relative', display: 'inline-flex', my: 4 }}>
              <CircularProgress
                variant="determinate"
                value={percentage}
                size={200}
                thickness={4}
                sx={{ color: percentage >= 60 ? 'success.main' : 'error.main' }}
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h4" component="div" color="text.secondary">
                  {`${Math.round(percentage)}%`}
                </Typography>
              </Box>
            </Box>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              {getMessage()}
            </Typography>
            <Typography variant="h6" sx={{ mb: 4 }}>
              You scored {score} out of {totalQuestions} questions correctly
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/quiz')}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    borderRadius: 2,
                  }}
                >
                  Try Again
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/')}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    borderRadius: 2,
                  }}
                >
                  Go Home
                </Button>
              </motion.div>
            </Box>
          </Paper>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Results; 