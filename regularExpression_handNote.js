let re,str;

//literal Character
re=/hello/i //i means case insensitive
str="Hello World" // returns the index of the pattern
str="Hello Hello World" // returns the index of the first matched pattern

//Execution --> returns array or null
let res=re.exec(str)

//test --> returns true or false
res=re.test(str)

//match --> returns array or null 
res=str.match(res)

//search --> returns index of first match or -1
res=str.search(re)

//replace --> return new String
str="Again Hello World"
let newstr=str.replace(re,"Hi")

re=/hello/i;




//Meta Characters
re=/^hello/      //Must start with hello
re=/hello$/      //must end with hello
re=/^hello$/     //must start and end with hello
re=/h.llo/       //matches any one character
re=/h*llo/       // 0 or more times
re=/he?llo/      //e is optional. Can be e or nothing.
re=/he?a?llo/    //e or a or both or nothing


//Character Set using Brackets
re=/h[el]lo/        //Must be one of them inside the bracket
re=/[HA]llo/        //Must be start with H or A
re=/[^ha]ello/      //Anything except one of them in the brackets
re=/^[ha]ello/      //Must start with h or a
re=/[a-z]ello/      //must start with within a and z
re=/^[A-Z]ello/     //must start with in the range A-Z
re=/^[A-Z]/         //first letter must be upper case
re=/[A-Za-z]/       //first letter must be upper case or lower case
re=/[0-9]ello/      //First character must be digit
re=/^[0-9]ello/     //any word that starts with digit and that should be in the first place
re=/[^0-9]ello/     //starts with anything without the digit
re=/[0-9][0-9]ello/ //first 2 should be digits

//Quantifier-{}
re=//hel{2}o/ //words with 2 'l'
re=/hel{2,5}o/ //words with 2-5 'l'
re=/hel{2,}o/ //at least 2 times

//Parenthesis()-Grouping
re=/^([0-9]){10}/ //first 10 should be digits
re=/^([0-9]x){4}/ //matches 1x2x3x4x 

//SHorthand Character

re=/\w/ //Word character - alpha neumeric
re=/\w+/  //One or more
re=/\W/ //non-word character
re=/\d/ //digit
re=/\d+/ //One or more
re=/\D/ //Non-digit
re=/\s/ //White space
re=/\S/ //non-white space
re=/\b/ //Word Boundary 

//Assertions
re=/x(?=y)/         //matches x only if x is before y
re=/x(?!yz)/        //matches when yz is not followed by x

//Example

//Postal-Code
re=/^[0-9]{4}$/

//Phone Number
//01710227814 or +8801710227814 or 8801710227814

re=/^01[0-9]{9}$/ //matches 01710227814
re=/^(\+88)?01[0-9]{9}$/ //matches +8801710227814 and 01710227814 both
re=/^(\+)?(88)?01[0-9]{9}$/ //matches +8801710227814 and 01710227814 and 8801710227814

//Email-address
//aurgho1998@gmail.com

re=/^([a-zA-Z0-9]\.?)+[^\.]@$/  //matches both aurgho.1998@ and aurgho1998@ but doesn't match aurgho1998.@
re=/^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/ //matches auurgho1998@gmail.com





str="Hello World"

reTest(re,str)

function reTest(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`)
    }
    else{
        console.log(`${str} doesn't match ${re.source}`)
    }
}


//Examples






