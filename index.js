var z_sound = new Audio("sounds/tom-1.mp3");
var x_sound = new Audio("sounds/tom-2.mp3");
var c_sound = new Audio("sounds/tom-3.mp3");
var v_sound = new Audio("sounds/tom-4.mp3");
var b_sound = new Audio("sounds/snare.mp3");
var n_sound = new Audio("sounds/crash.mp3");
var m_sound = new Audio("sounds/kick-bass.mp3");
var no_of_drums = document.querySelectorAll(".drum").length;

for (let i = 0; i< no_of_drums; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() 
    {
        var key = this.innerHTML;
        make_sound(key);
        button_animation(key);
    });
}
document.addEventListener("keypress", function(event)
{
    make_sound(event.key);
    button_animation(event.key);
})
function make_sound(key)
{
    switch(key)
    {
        case "z":
            z_sound.play();
            break;
        case "x":
            x_sound.play();
            break;
        case "c":
            c_sound.play();
            break;
        case "v":
            v_sound.play();
            break;
        case "b":
            b_sound.play();
            break;
        case "n":
            n_sound.play();
            break;
        case "m":
            m_sound.play();
            break;
        default:
            console.log(" ");
    }
    
}
function button_animation(key)
{
    var current_button = document.querySelector("." + key);
    current_button.classList.add("pressed");
    setTimeout( function(){
        current_button.classList.remove("pressed");
    }, 100);
}