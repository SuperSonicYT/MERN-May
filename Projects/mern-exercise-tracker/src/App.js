import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Navbar from './components/navbar.component';
import CreateExercise from './components/create-exercise.component';
import EditExercise from './components/edit-exercise.component';
import ExercisesList from './components/exercises-list.component';
import CreateUser from './components/create-user.component';

class App extends React.Component {
  render() {
    return(
      <Router>
          <Navbar />
          <br/>
          <div className="container">
            <Routes>
              <Route path="/" exact element={<ExercisesList />} />
              <Route path="/edit/:id" exact element={<EditExercise />} />
              <Route path="/create" exact element={<CreateExercise />} />
              <Route path="/user" exact element={<CreateUser />} />
            </Routes>
          </div>
      </Router>
    );
  }
}

export default App;