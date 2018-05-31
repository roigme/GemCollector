//Setup variables

// Stats
var wins=0;
var losses=0;

// Game
var goal = Math.floor(Math.random() * 102) + 19  ;
var score = 0;

//gembuttons
var gem1= Math.floor(Math.random() * 12) + 1;
var gem2= Math.floor(Math.random() * 12) + 1;
var gem3= Math.floor(Math.random() * 12) + 1;
var gem4= Math.floor(Math.random() * 12) + 1; 


$(document).ready(function(){
// setting up ready state for dom manipulation.




$("#wins").text("Wins: "+wins);
$("#losses").text("Losses: "+losses);
$("#goal").text("Goal: "+goal);
$("#score").text("Score: "+score);


// reset buttons, clears wins and losses and starts  a new game
$("#rstbtn").on("click", function(){
    wins=0;
    losses=0;
    reset();
});

function reset(){
goal = Math.floor(Math.random() * 102) + 19  ;
score= 0;
gem1= Math.floor(Math.random() * 12) + 1;
gem2= Math.floor(Math.random() * 12) + 1;
gem3= Math.floor(Math.random() * 12) + 1;
gem4= Math.floor(Math.random() * 12) + 1; 

$("#goal").text("Goal: "+goal);
$("#score").text("Score: "+score);
};

function win(){

    alert("Good job! You won!");
     wins++; 
     $("#wins").text("Wins: "+wins);
     reset();
};

function loss(){

    alert("You lose, Try again.");
    losses++;
    $("#losses").text("Losses: "+losses);
    reset();
    
};

//clicks Could reduce this by just having 1 function, using this and attributes.
$("#gem1").on("click", function(){
    score = (score + gem1);
    console.log(score);
    $("#score").text("Score: "+score);
        if(score === goal){
           
            win();
            
        }
        else if(score > goal){
            
            
            loss();
        
        };
    });

    $("#gem2").on("click", function(){
        score = (score + gem2);
        console.log(score);
        $("#score").text("Score: "+score);
            if(score === goal){
               
                win();
                
            }
            else if(score > goal){
                
                
                loss();
            
            };
        });

   $("#gem3").on("click", function(){
    score = (score + gem3);
    console.log(score);
    $("#score").text("Score: "+score);
        if(score === goal){
           
            win();
            
        }
        else if(score > goal){
            
            
            loss();
        
        };
    });
     
    $("#gem4").on("click", function(){
        score = (score + gem4);
        console.log(score);
        $("#score").text("Score: "+score);
            if(score === goal){
               
                win();
                
            }
            else if(score > goal){
                
                
                loss();
            
            };
        });

            
    




});
