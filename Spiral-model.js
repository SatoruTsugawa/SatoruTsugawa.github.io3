//Spiral-model.js

//========GUI========

function setup() {

  textTitle=createP('Spiral model (R-body)');
  textTitle.position(235,-20);
  textTitle.style('font-size','40px');
  textTitle.style('font-weight','bold');
  let cp;
  cp=createCanvas(700, 700, WEBGL);
  cp.position(50,90);
  sliderSetting();

//  textExplain1=createP('&#9734 Inspired by shell simulators in Shigeru Kondo lab. https://www.fbs-osaka-kondolabo.net/simulation-softs');
//  textExplain1.position(50,550);
//  textExplain1.style('font-size','16px');
//  textExplain1.style('font-weight','bold');
//  textExplain2=createP('Link courtesy of Dr. Shigeru Kondo');
//  textExplain2.position(50,575);
//  textExplain2.style('font-size','16px');
//  textExplain2.style('font-weight','bold');

}

function draw(){
  orbitControl();
  background(200);
  translate(0,10,0);
  rotateY(Math.PI/4);
  rotateY(frameCount * 0.005);
  rotateX(-Math.PI/30);
//  drawCenter();
//  drawSide();
//  drawOpenRings();

  alpha=slideralpha.value()*Math.PI/180.0;
  R=sliderR.value()/3.0;
  a=slidera.value()/3.0;
  b=0; //後々調整
//  gamma=sliderGamma.value()*Math.PI/100.0;
//  w0=sliderW0.value();
//  w1=sliderW.value()/100.0;
//  h0=sliderL0.value();
//  h1=sliderL.value()/100.0;

  drawSpiral();
  drawXYZaxis();
  
}

function drawXYZaxis(){
  stroke('black');
  strokeWeight(1);
  line(-500,0,0,500,0,0);
//  line(0,-5,0,0,500,0);
  line(0,0,-500,0,0,500);
}

function drawSpiral(){
  stroke('blue');
  strokeWeight(5);
  background(250);
//  rotateY(frameCount * 0.01);
  
  
  for (let i = 0; i < 500; i++) {
    r=sqrt(a*R*R+b)
    Th=i*2*Math.PI/50.0
    Z=0
    g=1.02
    c=g*R*cos(alpha)/r
    th=c*Th
    e=g*R*sin(alpha)
    z=e*Th
    push();
    point(r*cos(th),-z,r*sin(th));
    pop();
  }
//  translate(0,1,0);
//  for (let i = 0; i < 80; i++) {
//    push();
//    sphere(2, 3, 3);
//    pop();
//    translate(R*cos(i*2*Math.PI/80),0,R*sin(i*2*Math.PI/80));
//  }
}

function sliderSetting(){
  let sliderLength='200px';
  let kankaku=50;
  let sliderLeftEnd=780;
  let sliderYposition=125;
  let titleYposition=78;
  let labelLeftEnd=780;

  sliderR = createSlider(1, 200, 159);
  sliderR.position(sliderLeftEnd, sliderYposition);
  sliderR.style('width',sliderLength);
  textR=createP('Initial radius : R');
  textR.position(labelLeftEnd,titleYposition);
  textR.style('font-size','20px');

  slideralpha = createSlider(0, 75, 0);
  slideralpha.position(sliderLeftEnd, sliderYposition+kankaku);
  slideralpha.style('width',sliderLength);
  textalpha=createP('angle deform : alpha');
  textalpha.position(labelLeftEnd,titleYposition+kankaku);
  textalpha.style('font-size','20px');

  slidera = createSlider(0, 100, 29);
  slidera.position(sliderLeftEnd, sliderYposition+kankaku*2);
  slidera.style('width',sliderLength);
  texta=createP('Thickness deform : a');
  texta.position(labelLeftEnd,titleYposition+kankaku*2);
  texta.style('font-size','20px');

//  sliderb = createSlider(0, 100, 0);
//  sliderb.position(sliderLeftEnd, sliderYposition+kankaku*3);
//  sliderb.style('width',sliderLength);
//  textb=createP('Cylinder deform : b');
//  textb.position(labelLeftEnd,titleYposition+kankaku*3);
//  textb.style('font-size','20px');

}
