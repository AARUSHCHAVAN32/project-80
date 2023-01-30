var firstarray=[]
function submit(){
    var secondarray = [];
    for(var i = 1;i<=4;i++){
        var name = document.getElementById("name_of_the_student_"+i).value ;
        console.log(name);
        firstarray.push(name)
    }
    console.log(firstarray)
    var lengthofarray=firstarray.length
    console.log(lengthofarray)

    for(var j=0;j<lengthofarray;j++)
    {
        secondarray.push("<h4>name -"+firstarray[j]+"</h4>")

    }
    console.log(secondarray)
    document.getElementById("display_name_with_commas").innerHTML=secondarray
    var nocommas = secondarray.join("")
    document.getElementById("display_name_without_commas").innerHTML=nocommas
    
}