import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    
    names: ['elad','aviel','david'],
    arr: ['hodi', 'hila', 'yahli', 'yarden'],
    some:true,

  };
  style = {
    fontSize: 100,
    fontWeight: "bold"
  
  }

  // constructor(){
  //   super();
  //   this.handleIncrement =this.handleIncrement.bind(this);
  //   this.handleIncrementtwo=this.handleIncrementtwo.bind(this)
  // }

  // ON THIS REMARK YOU CAN SEE HOW TO BUILD CONTRUCTOR INSTED OF ARROW FUNCTION THAT CONNECT THE FUNCTION TO THE CLASS COUNTER


  render() {
    return( <div>
      <h1 style={this.style} id="value" className={this.changeClass()}> {this.formatcount()} </h1>
      <br />
{/* HEADLINE THAT DESINGD BY THE FUNCTION *changeclass*, AND THE VALUE IN THIS HEADLINE BY THE FUNCTION *formatcount* */}
 

      <button onClick={this.handleIncrement} className="btn m-2 btn-dark" type="submit" >click to add</button>
      <button onClick={this.handleIncrementtwo} className="btn m-2 btn-dark" type="submit" >click to min</button>
      <br /><br />
{/* 2 BUTTONS THAT ADD AND DECRECE THE VALUE OF THE NUMBER THAT APPERE IN HEADLINE H1 BY THE FUNCTIONS handleIncrement/handleIncrementTWO */}


      <button onClick={this.addnames} className="btn m-2 btn-dark">Add me!</button>
      <br />
{/* BUTTON "ADD" CONNECT TO BLUE ARRAY(THIS.STATE.NAMES), ONCLICK WILL ADD THE VALUE OF THE INPUT BY THE FUNCTION ADDNAMES */}


  <input type="text" id="in" onKeyPress={this.hand} placeholder='Press Enter To Add'/>
   <br />
   {this.state.names.map((g,y)=>
    <button key={y} className='btn m-1 btn-info'>{g}</button>)}
 <br /><br />
{/* FIRST INPUT CONSTRUCTUR FROM ARROW FUNCTION BY HANDEL AND ADDNAMES */}
 


 <input type="text" onKeyPress={(ev)=>this.keyHandle(ev)} placeholder='Press Enter To Add' />
 <br />
{this.state.arr.map((v,n)=> 
<button key={n} className={!this.state.some?'btn m-1 btn-dark':'btn m-1'}>{v}</button>)}
{/* SECONFD INPUT CONTRUCTOR FROM THE INPUT FUNCTION IS KEYHANDLE */}
<br />
<label htmlFor="">Add Style--</label>
<input type="checkbox" id="check"  onChange={this.stylearr}/>
<br />

{/* <label htmlFor="">change type</label>
<select name="" id="">
  <option value="">open</option>
  <option value="" id="lab" onClick={this.changelabel}>label</option>
</select> */}



      <br /><br />
      <button onClick={this.alealeale} className='btn btn-primary'>Don't Touch Me!</button>
{/* A BUTTON THAT POPS UP AN ALERT BY THE FUNCTION *alealeale* */}

<br /><br /><br /><br /><br /><br />











      
    </div>
    )
  }





  stylearr=()=>{
    this.state.some=!this.state.some;
    this.setState({some:this.state.some});
  }

//   changelabel=()=>{
// this.state.arr=this.state.arr.map((v,n)=> 
// <label key={n}>{v}</label>);
// console.log(this.state.arr);
// this.setState({arr:this.state.arr})
//   }

  changeClass(){
    let classes = "badge m-w bg-";
   if((this.state.count===0)){
    classes+='warning'
   }else if((this.state.count<0)){
classes+='danger'
   }else{
    classes+='success'
   }
    return classes;
  }

// H1 FUNCTION

  formatcount() {
    return this.state.count === 0 ? 'zero' : this.state.count;
  }
//H1 FUNCTION

  handleIncrement=()=> {
    this.setState({count:this.state.count+1})
// FUNCTION OF THE  '+' BUTTON

  }
  handleIncrementtwo=()=>{
    this.setState({count:this.state.count-1})
  }
//FUNCTION OF THE  '-' BUTTON
hand=(e)=>{
  if(e.charCode==13){
    return this.addnames();
  }
}
//FUNCTION CHECK IF ENTER HAS BEEN PRESSED IF TRUE CALL THE FUNCTION *addnames*

  addnames=(e)=>{
           this.state.names.push(document.getElementById('in').value)
           this.setState(this.state.names);
  }
//FUNCTION THAT INSERT TO THE ARRAY OF NAMES THE VALUE OF THE INPUT. TWO WAYS==> ON BY CLICK ADD BUTTON//TWO BY PRESS ENTER

  keyHandle(ev){
    if(ev.key=="Enter"){
      this.state.arr.push(ev.target.value)
      this.setState(this.state.arr)
    }
  }








 

alealeale=()=>{
 alert('i told you something');
}

}

export default Counter;




// {this.state.map(x=>this.checkfordark(x)?<button className="badge bg-dark">{x}</button>:<button className="badge bg-primary">x</button>)}