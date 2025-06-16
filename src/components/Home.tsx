import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Button, 
  Box,
  Paper,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();

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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
            <Typography variant="h1" component="h1" gutterBottom>
              Welcome to Quiz App
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              Test your knowledge with our interactive quiz!
            </Typography>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/quiz')}
                sx={{
                  mt: 3,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.2rem',
                  borderRadius: 2,
                }}
              >
                Start Quiz
              </Button>
            </motion.div>
          </Paper>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Home; 