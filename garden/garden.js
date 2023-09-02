const line = '==================='
console.log(line);


/****  indoor ****/
// light 
/*
 12hr - 18hr is good enough and need test on plants
 to see how much i will get
 18hr for germinate,seedling and flowering
 12hr for veg  
*/

let plant_stage = {
  germinate:'3-10 days',
  seedling:'2-3 weeks',
  vegetative :'3-16 weeks',
  flowering:'8-10 weeks',
}
let inventory = ['tomato', 'lettuce', 'pepper', 'strawberry']
let PlantStage = {
  stage:[ 'germinate', 'seedling', 'vegetative', 'flowering'],
  lightHOur: function(){
    if(this.stage[0]){
      dayhours = 18
      console.log(dayhours)
    }else{
      console.log('pick seed to grow');
    }
  },

}
select = PlantStage.stage[0] 
console.log(select);

let stage;
stage == 'veg'? console.log('need 12 hours'):
console.log('use 18');
let light_duration = 13;
if(light_duration >= 18){
    console.log('turn it off')
}else if (light_duration > 12){
    console.log('good enough, and alert to ask turn it off or not')
} 
else{
    console.log('turn it on')
}
switch (stage) {
  case '':
    
    break;

  default:
    console.log('time to plant seed!');
    break;
}

/* let temperature = 30;
let
day = temperature > 70 && temperature < 80,
night = temperature < 70  && temperature > 60 ;
switch(temperature){
    case temperature < 70:
        console.log('good for night');
    break;
    default:
        console.log('bleep-beep')
}

console.log(night) */

/* 
let light = {
    red,
    blue, 
    white, commment 500k to 7000k for veg 
    dawn,
} 
*/
/* 
humidity
nutrient
water
sunlight */

/* 
Seed germination length: 3-10 days
Marijuana light cycle: 18 hours a day indoors; 
full, direct sun 6 hours a day outdoors

Seedling stage in cannabis plants
Seedling stage length: 2-3 weeks
Marijuana light cycle: 18 hours a day indoors; 
full, direct sun 6 hours a day outdoors 

Vegetative stage length: 3-16 weeks
Marijuana light cycle: 18 hours a day indoors; 
full, direct sun 6 hours a day outdoors

Flowering stage length: 8-11 weeks
Marijuana light cycle: 12 hours a day indoors; 
full, direct sun 6 hours a day outdoors

Flower initiation (week 1-3): The plant will continue to grow 
and females will develop pre-flowers—pistils, 
or white hairs, will grow out, which are the beginnings of buds.
Mid-flowering (week 4-5): The plant itself will stop growing 
and buds will start fattening up.
Late flowering/ripening (week 6 and on): Trichome density will increase and plants will get very sticky; 
keep an eye on the color of the pistils to tell when to harvest.
*/
//measurement of plants
cube= (width,length,height) =>  console.log(width * length * height);









console.log(line);
/* weight */
function harvest(){
  console.log('how much it weight')

}

function test(){
   /* 
  1g=.035oz  
  1g=.002lb
  1oz=28g
  1oz=.0625lb
  1lb=448g
  1lb=16oz
  */
  let
  gram,
  ounce,
  pound;
  gram = 14;
  ounce = gram *28;
  pound=ounce*16;
  let value = Number(document.getElementById('weight-btn').value);
  if (value >=28){
document.getElementById('harvest').innerHTML= value/28 + 'oz';
}else{
document.getElementById('harvest').innerHTML= value+'g';
} 
  
}



console.log('hello');
console.log('hello');

a=28;
b=29;

c = b/a;
console.log(c);

if (c > 1) {
  
}












console.log('hello');
console.log('hello');














function convent_to_oz(ounce){
  /* 
  1g=.035oz  
  1g=.002lb
  */
  if (gram >=28){
    console.log('oz')
  }
}

function convent_to_lb(pound){
  /* 
  1g=.035oz  
  1g=.002lb
  */
  if (gram >=28){
    console.log('oz')
  }
}

console.log(line);









/*
*******************************************
indoor

temperature tolerance
60 to 80 f
15 to 26 c

12hr to 18hr
18hr from gem to veg
12hr for flower

humidity
depend on plants

nutrient
depend on stage
need more reseach on it

soil
depend on brand
*****but****
homemade soil recipe 
*********************************************
*/ 

/* tempeture */
function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
}

let temperature = 50;
temperature < 60?console.log('too cold'):
temperature > 80?console.log('too hot'):
console.log('just right');
/* humidity */
let humidity;
humidity < 65?console.log('too dry'):
humidity > 90?console.log('too wet'):
console.log('just right');

// for marijuana

stage;
if('germinate'){
  if(humidity > 80 ){
    console.log('too wet')
  }else if(humidity < 65){
    console.log('too dry')
  }
}else if (seedling){
  if(humidity > 80 ){
    console.log('too wet')
  }else if(humidity < 65){
    console.log('too dry')
  }
}else if (vegetative){
  if(humidity > 80 ){
    console.log('too wet')
  }else if(humidity < 65){
    console.log('too dry')
  }
}else if (flowering){
  if(humidity > 80 ){
    console.log('too wet')
  }else if(humidity < 65){
    console.log('too dry')
  }
}else{
  console.log('Time to grow new one')
}
/* 
function temperatureTolerance(){
  let temperature = 50;
temperature < 60?console.log('too cold'):
temperature > 80?console.log('too hot'):
console.log('just right');

} */


// time


let 
date = new Date();
millisecond = date.getMilliseconds(),
second= date.getSeconds(),
minute= date.getMinutes(),
hour= date.getHours();
console.log(millisecond)
console.log(hour)


greet=()=>console.log('hello');
let x = 5000;
y = 0;
z = x *y;
//let test = setTimeout(greet, z);
//1000 is milllisecond, 1000 is one second
j = 2>4;
tick= ()=>console.log('tock')
//let timerId = setInterval(tick, 2000);
// after 5 seconds stop
//setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 6000);
//clock
function clock() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
     console.log(time); 
    /* let t = setTimeout(()=>{ clock() }, 1000); */
  }

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  console.log(day)
//console.log(d.getHours())
//console.log(d.getMinutes())

// track when i sow and reap
// calender and reminder 
const week = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
const months = ['january','february','march','april','may','june',
'july','august','september','october','november','december'];
const season = ['fall', 'winter', 'spring', 'summer'];
const year = new Date().getFullYear();
const month = new Date().getMonth() ;
let tellmonth = months[month];
console.log(tellmonth +" "+ year)


season === 'spring' && temperature < 70 ? 
console.log('It\'s spring! The trees are budding!'): 
season === 'winter' && temperature < 65 ? 
console.log('It\'s winter! Everything is covered in snow.'):
season === 'fall' ? 
console.log('It\'s fall! Leaves are falling!'): 
season === 'summer' && temperature > 70 ? 
console.log('It\'s sunny and warm because it\'s summer!'): 
console.log('Indoor season.');




/* remind */
/* calender */
/* weather */
/* math */