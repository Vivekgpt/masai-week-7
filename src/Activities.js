import React from 'react';
import './App.css';
import './Duration.png';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


class Activities extends React.Component{
    render(){
      return (
        <div class="mt-5 container">
          <img src="https://png.pngtree.com/svg/20170425/weight_1230636.png" width="35" style={{"margin":"12px 5px 0px 0px"}}/>
          <TextField
          label="Weight"
          id="weight"
          /><span class="text-muted">Kg</span>
          <img src="https://cdn3.iconfinder.com/data/icons/video-music-bold-lineart-rounded/48/Video_player_time_duration-512.png" width="45" style={{"margin":"15px 5px 0px 10px"}}/>
          <TextField label="Duration" id="duration"/><span class="text-muted">Minutes</span>
          <img src="https://cdn.onlinewebfonts.com/svg/img_531644.png" width="40" style={{"margin":"0px 10px 0px 10px"}}/> Activity 
          <Select style={{"margin":"0px 0px 0px 10px"}} id="activities">
            <MenuItem value={8}>Basketball</MenuItem>
            <MenuItem value={4.64}>Boating</MenuItem>
            <MenuItem value={3}>Bowling</MenuItem>
            <MenuItem value={9.5}>Cycling</MenuItem>
            <MenuItem value={8}>Cardio</MenuItem>
            <MenuItem value={4.5}>Dancing</MenuItem>
            <MenuItem value={7.5}>Football</MenuItem>
            <MenuItem value={4}>Gymnastics</MenuItem>
            <MenuItem value={9}>Pull Ups</MenuItem>
            <MenuItem value={8}>Pushups</MenuItem>
            <MenuItem value={9.8}>Running</MenuItem>
            <MenuItem value={5.8}>Sex</MenuItem>
            <MenuItem value={1}>Sleeping</MenuItem>
            <MenuItem value={8}>Swimming</MenuItem>
            <MenuItem value={3.8}>Walking</MenuItem>
            <MenuItem value={3}>Weight Lifting</MenuItem>
            <MenuItem value={3}>Yoga</MenuItem>
          </Select>
          <p class="h5 mt-5">Total Calories Burn <TextField id="totalburn"/><small class="text-muted">calories/min</small></p><hr/>
          <div class="h5 mt-5">
            <span style={{"margin-right":"100px"}}>Food <TextField id="food"/></span>
            <span>Calories <TextField id="foodcalorie"/></span>
            <p class="mt-5">Total Calories Gain <TextField/></p><hr/>
            <span class="h5 mt-5" style={{"margin-right":"100px"}}>Total Calories Burn <TextField/></span>
            <span class="mt-5">Total Calories Gain <TextField/></span>
            <p class="mt-5">Result <TextField/></p><hr/>
            <p id="Gain" style={{"text":"green"}}></p>
            <p id="Loss" style={{"text":"red"}}></p>
          </div>
        </div>
      );
    }
}

export default Activities