function studentGradeAverage(){
var gradeNumber = parseInt(document.getElementById("grades").value);
var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;
document.getElementById("postFullName").innerHTML = firstName + " " + lastName;


//checking score for letter grade
if (gradeNumber <= 100 && gradeNumber >= 90){
document.getElementById("postGrade").innerHTML ="Your Grade Is an A";

} else if ( gradeNumber >= 80) {
document.getElementById("postGrade").innerHTML = "Your Grade Is an B";

} else if (gradeNumber >= 70) {
document.getElementById("postGrade").innerHTML = "Your Grade Is an C";

} else if (gradeNumber >= 60) {
document.getElementById("postGrade").innerHTML = "Your Grade Is an D";

}else{
document.getElementById("postGrade").innerHTML = "Your Grade Is an F"; 
}
}
