import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl'


class Activities extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      weight : "",
      duration : "",
      activity : "",
      // calorieBurn : "",
      food : "",
      foodCalorie : "",
      // calorieGain : "",
      // result : ""
    }
  }

    render(){
      return (
        <div class="mt-5 container">
          <img src="https://media2.giphy.com/media/fLysp4DDKY9mmJ69bo/source.gif" width="75" style={{"margin":"0px 5px 0px 0px"}}/>
          <TextField
          label="Weight"
          name="weight" 
          value={this.state.weight}
          onChange={this.changeData} 
          required 
          />
          <span class="text-muted">Kg</span>
          <img src="https://media1.tenor.com/images/0128468e98f1312cb40ef96218f4f6a5/tenor.gif?itemid=14249947" width="45" style={{"margin":"15px 5px 0px 10px"}}/>
          <TextField 
          label="Duration" 
          name="duration" 
          value={this.state.duration} 
          onChange={this.changeData} 
          required
          />
          <span class="text-muted">Minutes</span>
          <img src="https://cdn.onlinewebfonts.com/svg/img_531644.png" id="activityimage" width="40" style={{"margin":"0px 10px 0px 10px"}}/> 
          <FormControl required>
            <InputLabel>Activity</InputLabel>
            <Select style={{"width":"150px"}} name="activity" value={this.state.activity} onChange={this.inputValue} required>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={8}><img src="https://media3.giphy.com/media/KN3I73AInP08U/giphy.gif" width="40" />Basketball</MenuItem>
              <MenuItem value={4.64}><img src="https://cdn.dribbble.com/users/2194564/screenshots/4710586/gif_chinese_dragon_boat_festival_animation_loop.gif" width="40" />Boating</MenuItem>
              <MenuItem value={2.5}><img src="https://media.giphy.com/media/ywl0HkYJNTe9n63c32/giphy.gif" width="40" />Bowling</MenuItem>
              <MenuItem value={9.5}><img src="https://thumbs.gfycat.com/DenseOrnateBluetickcoonhound-small.gif" width="40" />Cycling</MenuItem>
              <MenuItem value={8.5}><img src="https://i.gifer.com/Br9D.gif" width="40" />Cardio</MenuItem>
              <MenuItem value={4.5}><img src="https://media3.giphy.com/media/OFhB9mzG1hACQ/source.gif" width="40" />Dancing</MenuItem>
              <MenuItem value={7.5}><img src="https://www.pnggif.com/uploads/football-soccer-gifs-191248.gif" width="40" />Football</MenuItem>
              <MenuItem value={4}><img src="https://media.giphy.com/media/Sc99zFSblnWbS/giphy.gif" width="40" />Gymnastics</MenuItem>
              <MenuItem value={9}><img src="https://media3.giphy.com/media/l41m5BeYFS3Fk1fRm/source.gif" width="40" />Pull Ups</MenuItem>
              <MenuItem value={7.9}><img src="https://i.gifer.com/T8TA.gif" width="40" />Pushups</MenuItem>
              <MenuItem value={9.8}><img src="https://i.gifer.com/UTdP.gif" width="40" />Running</MenuItem>
              <MenuItem value={5.8}><img src="https://www.dictionary.com/e/wp-content/uploads/2018/01/sexy_lang_1000x700.gif" width="40" />Sex</MenuItem>
              <MenuItem value={1}><img src="https://i1.wp.com/memecollection.net/wp-content/uploads/2014/10/Tired-Funny-GIF.gif?resize=265%2C265" width="40"/>Sleeping</MenuItem>
              <MenuItem value={8.8}><img src="https://orig00.deviantart.net/f0f2/f/2017/005/8/b/week35_swimmingboy_by_kellerac-daubuiq.gif" width="40"/>Swimming</MenuItem>
              <MenuItem value={3.8}><img src="http://rainydaysproductions.weebly.com/uploads/1/6/9/0/16904200/7345737_orig.gif" width="40"/>Walking</MenuItem>
              <MenuItem value={3.5}><img src="https://66.media.tumblr.com/fcef0d7d7fe723e679e68a4f350277a1/tumblr_obqthqpQBJ1v0gt3ro1_1280.gifv" width="40"/>Weight Lifting</MenuItem>
              <MenuItem value={3}><img src="https://cdn.videoplasty.com/gif/man-doing-yoga-gif-animation-3926-1280x720.gif?1574023921" width="40" />Yoga</MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <p class="h5 mt-5">Total Calories Burn 
            <TextField 
            name="calorieBurn"/>
          <small class="text-muted">calories/min</small></p>
          <hr/>
          <div class="h5 mt-5">
            <span style={{"margin-right":"100px"}}>Food 
              <TextField 
              name="food" 
              value={this.state.food} 
              onChange={this.changeData} 
              required/>
            </span>
            Calories 
              <TextField 
              name="foodCalorie" 
              value={this.state.foodCalorie} 
              onChange={this.changeData} 
              required/>
              <small class="text-muted">Calories/g</small>
            <p class="mt-5">Total Calories Gain 
              <TextField
              name="calorieGain"/>
            </p>
            <hr/>
            <span class="h5 mt-5" style={{"margin-right":"100px"}}>Total Calories Burn 
              <TextField/>
            </span>
            <span class="mt-5">Total Calories Gain 
              <TextField/>
            </span>
            <p class="mt-5">Result 
              <TextField 
              name="result"/>
            </p>
            <hr/>
            <p id="Gain" style={{"text":"green"}}></p>
            <p id="Loss" style={{"text":"red"}}></p>
          </div>
        </div>
      );
    }
}

export default Activities