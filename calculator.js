void setup() {
    size(400, 400);
}

/**                                                                                            **\
                                Calculator - By Goncalerta

    -> A simple calculator to add, subract, multiply and divide numbers.
\**                                                                                            **/

//Button Variables
var Button_1 ={
    color: color(155, 188, 224),
};
var Button_2 ={
    color: color(155, 188, 224),
};
var Button_3 ={
    color: color(155, 188, 224),
};
var Button_4 ={
    color: color(155, 188, 224),
};
var Button_5 ={
    color: color(155, 188, 224),
};
var Button_6 ={
    color: color(155, 188, 224),
};
var Button_7 ={
    color: color(155, 188, 224),
};
var Button_8 ={
    color: color(155, 188, 224),
};
var Button_9 ={
    color: color(155, 188, 224),
};

var Button_0 ={
    color: color(155, 188, 224),
};
var Button_dot ={
    color: color(155, 188, 224),
    using: false,
    pending: false,
};
var Button_simetric ={
    color: color(155, 188, 224),
};

var Button_plus ={
    color: color(155, 188, 224),
};
var Button_minus ={
    color: color(155, 188, 224),
};
var Button_times ={
    color: color(155, 188, 224),
};
var Button_divide ={
    color: color(155, 188, 224),
};

var Button_equals ={
    color: color(155, 188, 224),
};
var Button_clear ={
    color: color(155, 188, 224),
};
var Button_clearE ={
    color: color(155, 188, 224),
};

var Button_yes ={
    color: color(155, 188, 224),
};
var Button_no ={
    color: color(155, 188, 224),
};

//Value Variables
var Value = 0;
var getValue;
var standby ={
    value: 0,
    operation: 0,
    simetric: false,
};
var standbyOperation;

//Support Variables
var numberLength = 0;
var decimalnumberLength = 0;
var integernumberLength = 0;
var getnumberLength = 0;
var warning = "";
var impossibleOperation = false;
var confirm = false;
var explosion = -1000;
var simetricSignal;
var decimalZero = 0;
var Zeros = "";

//Number Button Pressed Handler
var numberButtonPressed = function(n){
    
    if(Value < 0){n = -n;}
    if(Button_dot.used){
        if(n === 0){
            decimalZero++;
        }else{
            Button_dot.pending = false;
            decimalZero = 0;
            if(Value < 1 && Value > -1){
                getnumberLength = decimalnumberLength;
            }else{
                getnumberLength = decimalnumberLength+1;
            }
            Value = Value * pow(10, getnumberLength);
            Value = Value + n;
            Value = Value / pow(10, getnumberLength);
        }
        
    }else{Value = Value * 10 + n;}
    
    if(standby.simetric && Value !== 0){
        Value = -Value;
        standby.simetric = false;
    }
};

//Operator
var operate = function(Value, standby){
    //Reads the operation ID and makes the operation
    switch(standby.operation){
        case 1: standby.value = standby.value + Value; break; //ID 1 - Plus
        case 2: standby.value = standby.value - Value; break; //ID 2 - Minus
        case 3: standby.value = standby.value * Value; break; //ID 3 - Times
        case 4: //ID 4 - Divide
        if(Value === 0){impossibleOperation = true;}
        else{standby.value = standby.value / Value;}
        break;
    }
};





// Note that this is not the same draw function as normal
void draw() { 
    if(confirm){
        background(0, 0, 0);
        noStroke();
        
        //Sun
        for(var s = 0; s < 100; s++){
         fill(255, 184, 61, 150-(s*10)); ellipse(-100, -100, 500+(s*10), 600+(s*14));  
        }
        
        //Earth
        fill(17, 173, 245); ellipse(200, 200, 100, 100); //Water
        fill(48, 245, 17); 
        ellipse(231, 197, 40, 65); //Land
        ellipse(216, 189, 60, 25); //Land
        ellipse(163, 198, 25, 60); //Land
        ellipse(200, 242, 50, 15); //Land
        ellipse(199, 158, 49, 15); //Land
        ellipse(175, 171, 26, 21); //Land
        fill(192, 207, 195, 200); ellipse(199, 158, 51, 17); //Land
        
        //Explosion
        if(explosion > 0){
            for(var e = 0; e < 50; e++){
                fill(255, e*3, 0);
                ellipse(200, 200, explosion-e*5, explosion-e*5);
            }    
        }
        if(explosion > 500){
            fill(0, 0, 0, (explosion-500)/15);
            rect(-10, -10, 420, 420);
            if(explosion > 4500){
                fill(255, 255, 255);
                textSize(50);
                textAlign(CENTER, CENTER);
                text("You just broke the Universe", 0, 0, 400, 400);
            }
        }
        explosion+= 25;
        
    }else{
    textAlign(LEFT, BASELINE);
    
    //Value Limiter
    if(Value >  1000000000){Value =  1000000000;}
    if(Value < -1000000000){Value = -1000000000;}
    
    //Background 
        //Gradient
    noStroke();
    for(var g = 0; g < 100; g+=2){
        fill(40+g, 180+g, 255-g);
        rect(-10, -10+g*10, 410, 410);
    }
        //Line
    stroke(60, 67, 143);
    strokeWeight(7);
    noFill();
    rect(0, 0, 399, 399);
    
    //Buttons
    stroke(0, 0, 0);
    strokeWeight(0.5);
    
        //Rectangles
    fill(Button_1.color); rect(29, 150, 50, 30);        //Button 1
    fill(Button_2.color); rect(94, 150, 50, 30);        //Button 2
    fill(Button_3.color); rect(159, 150, 50, 30);       //Button 3
    fill(Button_4.color); rect(29, 195, 50, 30);        //Button 4
    fill(Button_5.color); rect(94, 195, 50, 30);        //Button 5
    fill(Button_6.color); rect(159, 195, 50, 30);       //Button 6
    fill(Button_7.color); rect(29, 240, 50, 30);        //Button 7
    fill(Button_8.color); rect(94, 240, 50, 30);        //Button 8
    fill(Button_9.color); rect(159, 240, 50, 30);       //Button 9
    
    fill(Button_0.color); rect(29, 290, 50, 30);        //Button 0
    fill(Button_dot.color); rect(94, 290, 50, 30);      //Button .
    fill(Button_simetric.color); rect(159, 290, 50, 30);//Button +/-
    
    fill(Button_plus.color); rect(250, 150, 50, 30);    //Button +
    fill(Button_minus.color); rect(250, 195, 50, 30);   //Button -
    fill(Button_times.color); rect(315, 150, 50, 30);   //Button x
    fill(Button_divide.color); rect(315, 195, 50, 30);  //Button /
    
    fill(Button_equals.color); rect(250, 240, 115, 30); //Button =
    fill(Button_clear.color); rect(250, 290, 50, 30);   //Button C
    fill(Button_clearE.color); rect(315, 290, 50, 30);  //Button CE
    
        //Text
    fill(0, 0, 0);
    textSize(25);
    text("1", 45, 156, 50, 30);
    text("2", 111, 156, 50, 30);
    text("3", 175, 156, 50, 30);
    text("4", 45, 201, 50, 30);
    text("5", 111, 201, 50, 30);
    text("6", 175, 201, 50, 30);
    text("7", 45, 246, 50, 30);
    text("8", 111, 246, 50, 30);
    text("9", 175, 246, 50, 30);
    
    text("0", 45, 296, 50, 30);
    textSize(45); text(".", 111, 280, 500, 300);
    textSize(25); text("+", 175, 293, 500, 300); text("-", 178, 300, 500, 300);
    
    text("+", 266, 156, 50, 30);
    text("-", 269, 199, 50, 30);
    text("x", 332, 154, 50, 30);
    text("÷", 333, 201, 50, 30);
    
    text("=", 300, 246, 50, 30);
    text("C", 265, 296, 50, 30);
    text("CE", 323, 296, 50, 30);
    
    //Decimal Zeros Counter
    Zeros = "";
    for(var z = 0; z < decimalZero; z++){
        Zeros = Zeros + "0";
    }
    
    //Operator ID Reader and Translator
    switch(standby.operation){
        case 1: standbyOperation = "+"; break;
        case 2: standbyOperation = "-"; break;
        case 3: standbyOperation = "*"; break;
        case 4: standbyOperation = "÷"; break;
    }
    
    //Display Window
    fill(155, 188, 224); rect(25, 40, 350, 70); //Rectangle
    fill(0, 0, 0); textAlign(RIGHT, BASELINE); 
    
    Value*=pow(10, 9-integernumberLength);
    Value = round(Value);
    Value/=pow(10, 9-integernumberLength);
    
    if(standby.simetric){simetricSignal = "-";}
    else{simetricSignal = "";}
    
    if(impossibleOperation){
        Value = 0;
        warning = "";
        textSize(45); text("Are you sure?", -10, 65, 380, 100);} //Easter Egg Value
    else if(Button_dot.pending){
        textSize(45); text(simetricSignal + Value + "." + Zeros, -10, 65, 380, 100);} //Value + dot
    else{
        textSize(45); text(simetricSignal + Value + Zeros, -10, 65, 380, 100);} //Value 
        
    
    
    if(standby.operation !== 0){
    textSize(20); text(standby.value +" "+ standbyOperation, -10, 47, 380, 100); //Standby Value
    } 
    
    //Big Number Error Handling
    if( standby.value >  999999999 || Value >  999999999   || 
        standby.value < -999999999 || Value < -999999999) 
    {warning = "The number is too big!!! This calculator doesn't accept numbers with more than 9 algarisms.";}
    else if(numberLength > 9){
        warning = "The result was rounded because it can't have more than 9 algarisms.";
    }
    
    
    //Button Animating
    //Button 1
    if( mouseX > 28 &&
        mouseX < 78 &&
        mouseY > 150 &&
        mouseY < 180 ){
            Button_1.color = color(182, 215, 227);
    }   else {Button_1.color = color(155, 188, 224);}
    
    //Button 2
    if( mouseX > 94 &&
        mouseX < 144 &&
        mouseY > 150 &&
        mouseY < 180 ){
            Button_2.color = color(182, 215, 227);
    }   else {Button_2.color = color(155, 188, 224);}
    
    //Button 3
    if( mouseX > 160 &&
        mouseX < 210 &&
        mouseY > 150 &&
        mouseY < 180 ){
            Button_3.color = color(182, 215, 227);
    }   else {Button_3.color = color(155, 188, 224);}
    
    //Button 4
    if( mouseX > 28 &&
        mouseX < 78 &&
        mouseY > 195 &&
        mouseY < 225 ){
            Button_4.color = color(182, 215, 227);
    }   else {Button_4.color = color(155, 188, 224);}
    
    //Button 5
    if( mouseX > 94 &&
        mouseX < 144 &&
        mouseY > 195 &&
        mouseY < 225 ){
            Button_5.color = color(182, 215, 227);
    }   else {Button_5.color = color(155, 188, 224);}
    
    //Button 6
    if( mouseX > 160 &&
        mouseX < 210 &&
        mouseY > 195 &&
        mouseY < 225 ){
            Button_6.color = color(182, 215, 227);
    }   else {Button_6.color = color(155, 188, 224);}
    
    //Button 7
    if( mouseX > 28 &&
        mouseX < 78 &&
        mouseY > 240 &&
        mouseY < 270 ){
            Button_7.color = color(182, 215, 227);
    }   else {Button_7.color = color(155, 188, 224);}
    
    //Button 8
    if( mouseX > 94 &&
        mouseX < 144 &&
        mouseY > 240 &&
        mouseY < 270 ){
            Button_8.color = color(182, 215, 227);
    }   else {Button_8.color = color(155, 188, 224);}
    
    //Button 9
    if( mouseX > 160 &&
        mouseX < 210 &&
        mouseY > 240 &&
        mouseY < 270 ){
            Button_9.color = color(182, 215, 227);
    }   else {Button_9.color = color(155, 188, 224);}
    
    //Button 0
    if( mouseX > 28 &&
        mouseX < 78 &&
        mouseY > 285 &&
        mouseY < 320 ){
            Button_0.color = color(182, 215, 227);
    }   else {Button_0.color = color(155, 188, 224);}
    
    //Button .
    if( mouseX > 94 &&
        mouseX < 144 &&
        mouseY > 285 &&
        mouseY < 320 ){
            Button_dot.color = color(182, 215, 227);
    }   else {Button_dot.color = color(155, 188, 224);}
    
    //Button +/-
    if( mouseX > 160 &&
        mouseX < 210 &&
        mouseY > 280 &&
        mouseY < 320 ){
            Button_simetric.color = color(182, 215, 227);
    }   else {Button_simetric.color = color(155, 188, 224);}
    
    //Button +
    if( mouseX > 250 &&
        mouseX < 300 &&
        mouseY > 150 &&
        mouseY < 180 ){
            Button_plus.color = color(182, 215, 227);
    }   else {Button_plus.color = color(155, 188, 224);}
    
    //Button -
    if( mouseX > 250 &&
        mouseX < 300 &&
        mouseY > 195 &&
        mouseY < 225 ){
            Button_minus.color = color(182, 215, 227);
    }   else {Button_minus.color = color(155, 188, 224);}
    
    //Button *
    if( mouseX > 315 &&
        mouseX < 365 &&
        mouseY > 150 &&
        mouseY < 180 ){
            Button_times.color = color(182, 215, 227);
    }   else {Button_times.color = color(155, 188, 224);}
    
    //Button /
    if( mouseX > 315 &&
        mouseX < 365 &&
        mouseY > 195 &&
        mouseY < 225 ){
            Button_divide.color = color(182, 215, 227);
    }   else {Button_divide.color = color(155, 188, 224);}
    
    //Button =
    if( mouseX > 250 &&
        mouseX < 365 &&
        mouseY > 240 &&
        mouseY < 270 ){
            Button_equals.color = color(182, 215, 227);
    }   else {Button_equals.color = color(155, 188, 224);}
    
    //Button C
    if( mouseX > 250 &&
        mouseX < 300 &&
        mouseY > 285 &&
        mouseY < 320 ){
            Button_clear.color = color(182, 215, 227);
    }   else {Button_clear.color = color(155, 188, 224);}
        
    //Button CE
    if( mouseX > 315 &&
        mouseX < 365 &&
        mouseY > 285 &&
        mouseY < 320 ){
            Button_clearE.color = color(182, 215, 227);
    }   else {Button_clearE.color = color(155, 188, 224);}
    
    //Buttons Yes & No [Easter Egg]
    if(impossibleOperation){
        fill(Button_yes.color); rect(28, 340, 150, 40); //Button yes
        fill(Button_no.color); rect(215, 340, 150, 40); //Button no
        fill(0, 0, 0);
        textSize(30);
        text("Yes", 80, 350, 50, 30);
        text("No", 260, 350, 50, 30);
        
        //Button Yes
        if( mouseX > 28 &&
            mouseX < 178 &&
            mouseY > 340 &&
            mouseY < 380 ){
                Button_yes.color = color(182, 215, 227);
        }   else {Button_yes.color = color(155, 188, 224);}
        
        //Button No
        if( mouseX > 215 &&
            mouseX < 365 &&
            mouseY > 340 &&
            mouseY < 380 ){
                Button_no.color = color(182, 215, 227);
        }   else {Button_no.color = color(155, 188, 224);}
    }
    
    //Warning
    fill(255, 0, 0);
    textSize(16);
    textAlign(LEFT, BASELINE);
    text(warning, 20, 350, 360, 200);
    
    //Number Length Calculator
    getValue = Value;
    integernumberLength = 0;
    
    while(getValue >= 1 || getValue <= -1){
        getValue = getValue/10;
        integernumberLength++;
    }
    
    
    getValue = Value;
    numberLength = ((getValue + "").replace('.', '')).replace("-", "").length + decimalZero;
    decimalnumberLength = numberLength-integernumberLength;
    
    //Button_dot.used Detector
    if(Value !== round(Value)){Button_dot.used = true;}
    
    }
    
};


//Mouse Clicked Event Handler
void mousePressed() {
    warning = "";
    
    //Buttons Yes & No [Easter Egg]
    if(impossibleOperation){
        //Button Yes
        if( mouseX > 28 &&
            mouseX < 178 &&
            mouseY > 340 &&
            mouseY < 380 ){
                confirm = true;
        }  
        
        //Button No
        if( mouseX > 215 &&
            mouseX < 365 &&
            mouseY > 340 &&
            mouseY < 380 ){
            standby.value = 0;
            standby.operation = 0;
            Value = 0;
            Button_dot.used = false;
            Button_dot.pending = false;
            impossibleOperation = false;
        }
    }else{
    
    //Button 1
    if( mouseX > 28 &&
        mouseX < 78 &&
        mouseY > 150 &&
        mouseY < 180 ){
            if(numberLength < 9){numberButtonPressed(1);}
            else{warning = "You can't have more than 9 algarisms in the number.";}
    }
    
    //Button 2
    if( mouseX > 94 &&
        mouseX < 144 &&
        mouseY > 150 &&
        mouseY < 180 ){
            if(numberLength < 9){numberButtonPressed(2);}
            else{warning = "You can't have more than 9 algarisms in the number.";}
    }
    
    //Button 3
    if( mouseX > 160 &&
        mouseX < 210 &&
        mouseY > 150 &&
        mouseY < 180 ){
            if(numberLength < 9){numberButtonPressed(3);}
            else{warning = "You can't have more than 9 algarisms in the number.";}
    }
    
    //Button 4
    if( mouseX > 28 &&
        mouseX < 78 &&
        mouseY > 195 &&
        mouseY < 225 ){
            if(numberLength < 9){numberButtonPressed(4);}
            else{warning = "You can't have more than 9 algarisms in the number.";}
    }
    
    //Button 5
    if( mouseX > 94 &&
        mouseX < 144 &&
        mouseY > 195 &&
        mouseY < 225 ){
            if(numberLength < 9){numberButtonPressed(5);}
            else{warning = "You can't have more than 9 algarisms in the number.";}
    }
    
    //Button 6
    if( mouseX > 160 &&
        mouseX < 210 &&
        mouseY > 195 &&
        mouseY < 225 ){
            if(numberLength < 9){numberButtonPressed(6);}
            else{warning = "You can't have more than 9 algarisms in the number.";}
    }
    
    //Button 7
    if( mouseX > 28 &&
        mouseX < 78 &&
        mouseY > 240 &&
        mouseY < 270 ){
            if(numberLength < 9){numberButtonPressed(7);}
            else{warning = "You can't have more than 9 algarisms in the number.";}
    }
    
    //Button 8
    if( mouseX > 94 &&
        mouseX < 144 &&
        mouseY > 240 &&
        mouseY < 270 ){
            if(numberLength < 9){numberButtonPressed(8);}
            else{warning = "You can't have more than 9 algarisms in the number.";}
    }
    
    //Button 9
    if( mouseX > 160 &&
        mouseX < 210 &&
        mouseY > 240 &&
        mouseY < 270 ){
            if(numberLength < 9){numberButtonPressed(9);}
            else{warning = "You can't have more than 9 algarisms in the number.";}
    }
    
    //Button 0
    if( mouseX > 28 &&
        mouseX < 78 &&
        mouseY > 285 &&
        mouseY < 320 ){
            if(numberLength < 9){numberButtonPressed(0);}
            else{warning = "You can't have more than 9 algarisms in the number.";}
    }
    
    //Button .
    if( mouseX > 94 &&
        mouseX < 144 &&
        mouseY > 285 &&
        mouseY < 320 ){
            if(!Button_dot.used){Button_dot.pending = true; Button_dot.used = true;}
    }
    
    //Button +/-
    if( mouseX > 160 &&
        mouseX < 210 &&
        mouseY > 280 &&
        mouseY < 320 ){
            Value = - Value;
            if(Value === 0){
                standby.simetric = !standby.simetric;
            }
    }
    
    //Button +
    if( mouseX > 250 &&
        mouseX < 300 &&
        mouseY > 150 &&
        mouseY < 180 ){
            
            Button_dot.used = false;
            Button_dot.pending = false;
            standby.simetric = false;
            decimalZero = 0;
            
            if(standby.operation === 0){
                standby.value = Value;
                standby.operation = 1;
                Value = 0;
                numberLength = 0;
            } else {
                operate(Value, standby);
                standby.operation = 1;
                Value = 0;
                numberLength = 0;
            }
    }
    
    //Button -
    if( mouseX > 250 &&
        mouseX < 300 &&
        mouseY > 195 &&
        mouseY < 225 ){
            
            Button_dot.used = false;
            Button_dot.pending = false;
            standby.simetric = false;
            decimalZero = 0;
            
            if(standby.operation === 0){
                standby.value = Value;
                standby.operation = 2;
                Value = 0;
                numberLength = 0;
            } else {
                operate(Value, standby);
                standby.operation = 2;
                Value = 0;
                numberLength = 0;
            }
    }
    
    //Button *
    if( mouseX > 315 &&
        mouseX < 365 &&
        mouseY > 150 &&
        mouseY < 180 ){
            
            Button_dot.used = false;
            Button_dot.pending = false;
            standby.simetric = false;
            decimalZero = 0;
            
            if(standby.operation === 0){
                standby.value = Value;
                standby.operation = 3;
                Value = 0;
                numberLength = 0;
            } else {
                operate(Value, standby);
                standby.operation = 3;
                Value = 0;
                numberLength = 0;
            }
    }
    
    //Button /
    if( mouseX > 315 &&
        mouseX < 365 &&
        mouseY > 195 &&
        mouseY < 225 ){
            
            Button_dot.used = false;
            Button_dot.pending = false;
            standby.simetric = false;
            decimalZero = 0;
            
            if(standby.operation === 0){
                standby.value = Value;
                standby.operation = 4;
                Value = 0;
                numberLength = 0;
            } else {
                operate(Value, standby);
                standby.operation = 4;
                Value = 0;
                numberLength = 0;
            }
    }
    
    //Button =
    if( mouseX > 250 &&
        mouseX < 365 &&
        mouseY > 240 &&
        mouseY < 270 ){
            
            Button_dot.used = false;
            Button_dot.pending = false;
            standby.simetric = false;
            decimalZero = 0;
            
            if(standby.operation !== 0){
                operate(Value, standby);
                standby.operation = 0;
                Value = standby.value;
                standby.value = 0;
            }
    }
    }
    //Button C
    if( mouseX > 250 &&
        mouseX < 300 &&
        mouseY > 285 &&
        mouseY < 320 ){
            standby.value = 0;
            standby.operation = 0;
            Value = 0;
            Button_dot.used = false;
            Button_dot.pending = false;
            impossibleOperation = false;
            standby.simetric = false;
            decimalZero = 0;
    }
    
    //Button CE
    if( mouseX > 315 &&
        mouseX < 365 &&
        mouseY > 285 &&
        mouseY < 320 ){
            Value = 0;
            Button_dot.used = false;
            Button_dot.pending = false;
            impossibleOperation = false;
            standby.simetric = false;
            decimalZero = 0;
    }
};

