
document.getElementById('result').style.display='none';
function submitanswers(){
    var total=5;
    var score=0;

    //get User Input
    var q1=document.forms["quizform"]['q1'].value;
    var q2=document.forms["quizform"]['q2'].value; 
    var q3=document.forms["quizform"]['q3'].value;
    var q4=document.forms["quizform"]['q4'].value;
    var q5=document.forms["quizform"]['q5'].value;
   


    //Validation
    for(var i=1;i<=total;i++)
    {
        if(eval('q'+i)==null || eval('q'+i)=='')
        {
            alert('Please select Question '+i);
            return false;
        }
    }


    // Set ANswer

    var answers=['b','a','a','b','d']
    //Check Answer

    var k=0;
    for(var j=1; j<=total;j++)
    {
        
        if(eval('q'+j)==answers[k])
        {
            k++;
        score++;

        }
        else{
            k++;
        }
        


    }
    
    
    //Dispaly Answers To screen
    var result= document.getElementById("result");
    document.getElementById('result').style.display='block';
    result.innerHTML= '<h3> You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
    return false;
    

}
