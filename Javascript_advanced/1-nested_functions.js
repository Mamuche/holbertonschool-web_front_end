const globalVariable = "Welcome "
const course = "Holberton "
const exclamation = "!"

function outer() {
    alert(globalVariable);
    
    function inner() {
        alert(globalVariable + course);
        
        function inception() {
            alert(globalVariable + course + exclamation);
        }
        inception();
    }
    inner();
}

outer();