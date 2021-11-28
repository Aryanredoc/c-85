//Create a reference for canvas 
canvas=document.getElementById('my canvas');
ctx =canvas.getContext("2d");

//Done by guna.

//Give specific height and width to the car image
<canvas id=" my canvas " width = "800" height = "400"> </canvas>;

//Done by guna.

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
green_car height= "75";
green_car width="100";

//Done by guna.

function add() {
	//upload car, and background images on the canvas.
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;
    
    greencar_imageTag = new Image();
    greencar_imageTag.onload = uploadBackground;
    greencar_imageTag.src = greencar_image;
    
    //Done by guna.
}

function uploadBackground() {
	//Define function ‘uploadBackground’
     
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
    
   //Done by guna. 
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
    
ctx.drawImage(greencar_imageTag,greencar_x,greencar_y,greencar_width,greencar_height);
    
	//Done by guna.
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
    
    if(greencar_y >=0)
    
    {
    
    greencar_y = greencar_y -10;
    
 console.log("When up arrow is pressed, x =" + greencar-x + | y = " +greencar_y )
    
    uploadBackground();
        
    uploadgreencar();
    }
    //Done by guna.
}

function down()
{
	//Define function to move the car downward
        if(greencar_y <=0)
    
    {
    
    greencar_y = greencar_y +10;
    
 console.log("When down arrow is pressed, x =" + greencar-x + | y = " +greencar_y )
    
    uploadBackground();
        
    uploadgreencar();
    }
    //Done by guna.
}

function left()
{
	//Define function to move the car left side
        if(greencar_x >=0)
    
    {
    
    greencar_x = greencar_x -10;
    
 console.log("When left arrow is pressed, x =" + greencar-x + | y = " +greencar_y )
    
    uploadBackground();
        
    uploadgreencar();
    }
}
//Done by guna.

function right()
{
	//Define function to move the car right side
    
            if(greencar_x <=0)
    
    {
    
    greencar_x = greencar_x +10;
    
 console.log("When left arrow is pressed, x =" + greencar-x + | y = " +greencar_y )
    
    uploadBackground();
        
    uploadgreencar();
    }
    
}
//Done by guna.