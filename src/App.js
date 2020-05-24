import React, {Component} from 'react';
import Header from './components/Header';
import { Grid } from "@material-ui/core";
import Text from './components/Text';
import TextCard from './components/TextCard';
import axios from 'axios';

class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      userInput: "",
      summaryText: ""
    }
  }

  inputChangeHandler = (e) => {
    this.setState({
      userInput: e.target.value
    })
  };

  getSummary = () => {

    if (this.state.userInput === ""){
      alert("You didn't enter any text!");
      return;
    }
    
    const reviewJSON = {
      text: this.state.userInput
    }
    axios.post(`https://summarizeruwu.herokuapp.com/summarize`,reviewJSON)
        .then(response => {
            console.log(response)
            console.log(response.data)
            this.setState({
                summaryText: response.data
            })
        })
        .catch(error => {
            console.log("ERROR in Category loading ", error)
        }) //update with correct string
  };

  render(){
  return (
    <Grid container direction="column">
    <Grid item>
      <Header />
    </Grid>
    <Grid item container alignItems="center">
      <Grid item/>
        <Text requestSummaryHandler={this.getSummary} inputChangeHandler={this.inputChangeHandler}/>
      </Grid>
      <Grid item/>
        <TextCard summaryText={this.state.summaryText}/>
    </Grid>
  );
  }
}

export default App;
