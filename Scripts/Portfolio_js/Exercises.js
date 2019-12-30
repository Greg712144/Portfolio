//Simple Math

$("#resultHdr").hide();

$("#btnSub1").click(function () {
    $("#resultHdr").show();

    //How do I use jQuery to get the value inside the input with var id=n1?//
    var n1 = Number($("#n1").val());
    var n2 = +$("#n2").val();
    var n3 = +$("#n3").val();
    var n4 = +$("#n4").val();
    var n5 = +$("#n5").val();



    //Calculate Sum
    var sum = n1 + n2 + n3 + n4 + n5;
    //Calculate Product
    var product = n1 * n2 * n3 * n4 * n5;
    //Calculate Average
    var average = sum / 5
    //Calculate Largest
    var max = Math.max(n1, n2, n3, n4, n5)
    //Calculate Smallest
    var min = Math.min(n1, n2, n3, n4, n5)

   

    $("#sum").text("The sum of your numbers: " + sum)
    $("#product").text("The product of your numbers: " + product)
    $("#average").text("The average of your numbers: " + average)
    $("#largest").text("The largest of your numbers: " + max)
    $("#smallest").text("The smallest of your numbers: " + min)


});

//Palindrome

$("#resultPali").hide();

$("#btnSub2").click(function () {
    $("#resultPali").show();

    //Get User Data
    var p = $("#p1").val();


    //Calculation
    function palindrome(str) {
        var lowRegStr = str.toLowerCase().replace(re, '');
        var reverseStr = lowRegStr.split('').reverse().join('');
        return reverseStr === lowRegStr;
    }

    //Output
    if (p.length < 2) {
        $("#palD").text("Try again")

        $("#palD").html(alert2)
    }
    else if (palindrome(p) == true) {
        var re = /[\W_0-9]/g;
        var numIn = p.search(re);
        if (numIn == true) {
            $("#palD").text("Try again")

            $("#palD").html(alert2)
        } else {

             $("#palD").text("This word is a Palindrome")
        }
    }
    else {
            $("#palD").text("Try again")

            $("#palD").html(alert)
    }
});
    //Palindrome Alerts
    function alert() {

        Swal.fire
            ({
                title: 'Sorry!',
                text: 'This word is Not a Palindrome',
                imageUrl: ("/Images/MarioGif.gif"),
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                animation: false,
                timer: 3000,
                showConfirmButton: false
            })
    };

    function alert2() {

        Swal.fire
            ({
                title: 'Woops!',
                text: 'You must have entered less than two characters or a number..',
                imageUrl: ("/Images/MarioGif.gif"),
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                animation: false,
                timer: 3000,
                showConfirmButton: false
            })
    };

//Fizz-Buzz

$("#resultFizz").hide();
$("#btnSub3").click(function () {
    $("#resultFizz").show();

    //Get User Data
    var num1 = parseInt($("#n6").val());
    var num2 = parseInt($("#n7").val());
    var myOutput = "";

    //Write Loop from 1 to 100
    for (var i = 1; i <= 100; i++) {

        //Record Modulus
        var Fizz = i % num1;
        var Buzz = i % num2;
        var comma = " , ";
        if (i == 100)
        {
            comma = " ";
        }

        //Check Fizzy
        if ((Fizz == 0) && (Buzz == 0)) {
            myOutput += "<span class='FizzBuzz'>FizzBuzz </span>" + comma;
        }
        else if (Fizz == 0) {
            myOutput += "<span class='Fizz'>Fizz </span>" + comma;
        }
        else if (Buzz == 0) {
            myOutput += "<span class='Buzz'>Buzz </span>" + comma;
        }
    }

    $("#fizB").html(myOutput);


});

//Factorial

$("#resultFact").hide();

$("#btnSub4").click(function () {
    $("#resultFact").show();


    //Get User Data

    var fain = +$("#n8").val();


    if (fain <= 0) {
        $("#fain").text("Try again")

        $("#fain").html(factAlert)
    }
    else if (fain >= 172) {
        $("#fain").text("Try again")

        $("#fain").html(factAlert2)
    }
    else {
                for (i = (fain - 1); i > 1; i--) {
                    fain2 = fain * i;


                };
                $("#fain").text("The Factorial of " + $("#n8").val() + " is " + fain2)
         }


});
//factorial alerts
function factAlert() {
    Swal.fire({
        title: 'Woops!',
        text: 'Please enter a number greater than zero',
        imageUrl: ("/Images/MarioGif.gif"),
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        animation: false,
        timer: 3000,
        showConfirmButton: false

    })
}

function factAlert2() {
    Swal.fire({
        title: 'Woops!',
        text: 'Please enter a number less than or equal to 171',
        imageUrl: ("/Images/MarioGif.gif"),
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        animation: false,
        timer: 3000,
        showConfirmButton: false
    })
}
//Function Handles


$("#btnClear1, #btnClear2, #btnClear3, #btnClear4").click(function () {

    clearData();


});



$('a[data-toggle="tab"]').click(function () {

    clearData();

});



//Functions

function clearData() {

    $("#resultHdr").hide()
    $("#resultFact").hide()
    $("#resultFizz").hide()
    $("#resultPali").hide()
    $("#Mcode").hide();
    $("#McodeP").hide();
    $("#McodeFb").hide();
    $("#McodeF").hide();
    $("#n1, #n2, #n3, #n4, #n5, #n6, #n7, #n8, #p1").val("")
    $("#sum, #product, #average, #largest, #smallest, #fain, #fizB, #palD, #error").html("")


};

//Custom Theme JavaScript
SyntaxHighlighter.all();

$("#Mcode").hide();
$("#btnCode").click(function () {
    $("#Mcode").toggle();

});

$("#McodeP").hide();
$("#btnCode2").click(function () {
    $("#McodeP").toggle();

});

$("#McodeFb").hide();
$("#btnCode3").click(function () {
    $("#McodeFb").toggle();

});

$("#McodeF").hide();
$("#btnCode4").click(function () {
    $("#McodeF").toggle();

});


//Tooltips

//$(document).ready(function () {
//    $('[data-toggle="tooltip"]').tooltip();
//});
