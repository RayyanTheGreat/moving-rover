canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
roverwidth = 100 ;
roverheight= 90  ;
rover_x = 10;
rover_y = 10;
bg_image = "mars.jpg" ; 
rover_img ="rover.png" ;

function add(){

bg_imagetag = new Image();
bg_imagetag.onload = uploadBackground ;
bg_imagetag.src = bg_image ;

rover_imagetag = new Image();
rover_imagetag.onload = uploadRover ;
rover_imagetag.src = rover_img ;

}

function uploadBackground() {

ctx.drawImage (bg_imagetag, 0 , 0 , canvas.width , canvas.height);

}

function uploadRover() {

    ctx.drawImage (rover_imagetag, rover_x , rover_y , roverwidth , roverheight);
    
    }


window.addEventListener("keydown" , my_keydown);

function my_keydown (e){

keypressed = e.keyCode;
console.log(keypressed);
if(keypressed == '38'){

up();
console.log ("up")

}

if(keypressed == '38'){

    up();
    console.log ("up")
    
    }

    if(keypressed == '40'){

        down();
        console.log ("down")
        
        }

        if(keypressed == '37'){

            left();
            console.log ("left")
            
            }

            if(keypressed == '39'){

                right();
                console.log ("right")
                
                }
}


function up() {

if (rover_y >=0) {

rover_y = rover_y - 10 ;
console.log("When up arrow is pressed , x = " + rover_x + " | y = " + rover_y);
uploadBackground();
uploadRover();

}

}


function down() {

    if (rover_y <=500) {
    
    rover_y = rover_y + 10 ;
    console.log("When down arrow is pressed , x = " + rover_x + " | y = " + rover_y);
    uploadBackground();
    uploadRover();
    
    }
    
    }



    function left() {

        if (rover_x >=0) {
        
        rover_x = rover_x - 10 ;
        console.log("When left arrow is pressed , x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadRover();
        
        }
        
        }



        function right() {

            if (rover_x <=700) {
            
            rover_x = rover_x + 10 ;
            console.log("When right arrow is pressed , x = " + rover_x + " | y = " + rover_y);
            uploadBackground();
            uploadRover();
            
            }
            
            }


            nasa_mars_images_array = ["marsroimg_1.jpeg","marsroimg_2.jpeg","marsroimg_3.jpg","marsroimg_4.jpg"];
            random_number = Math.floor(Math.random() * 4);
            bg_image = nasa_mars_images_array [random_number];
            console.log("Background_Image = " + bg_image);