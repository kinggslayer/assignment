import React, { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  AppBar,
  Toolbar,
  IconButton,
  Box,
} from '@mui/material';
import { Add as AddIcon, ExitToApp as LogoutIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([
    { id: 1, title: 'React Fundamentals', description: 'Learn React basics' },
    { id: 2, title: 'Advanced JavaScript', description: 'Master JavaScript concepts' },
  ]);
  const [open, setOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({ title: '', description: '' });

  const handleLogout = () => {
    navigate('/login');
  };

  const handleAddCourse = () => {
    setCourses([
      ...courses,
      {
        id: courses.length + 1,
        ...newCourse,
      },
    ]);
    setNewCourse({ title: '', description: '' });
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Course Management System
          </Typography>
          <IconButton color="inherit" onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h5">My Courses</Typography>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={() => setOpen(true)}
                >
                  Add Course
                </Button>
              </Box>
              <List>
                {courses.map((course) => (
                  <ListItem
                    key={course.id}
                    sx={{ border: 1, borderColor: 'grey.300', borderRadius: 1, mb: 1 }}
                  >
                    <ListItemText
                      primary={course.title}
                      secondary={course.description}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>

        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Add New Course</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Course Title"
              fullWidth
              value={newCourse.title}
              onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Course Description"
              fullWidth
              multiline
              rows={4}
              value={newCourse.description}
              onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={handleAddCourse} variant="contained">
              Add Course
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
}

export default Dashboard;