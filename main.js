           // div 1

  let count1 = 0;

 function increment1() {
     count1++;
     document.getElementById("count1").innerHTML = count1;
 }
function decrement1() {
    count1--;
    document.getElementById("count1").innerHTML = count1;
 }


let quantity1 = 0;
let price1 = 0;

function increment1() {
  quantity1++;
  price1 += 10000;
  document.getElementById("quantity1").innerHTML = quantity1;
  document.getElementById("price1").innerHTML = price1 + " €";
}
function decrement1() {
    quantity1--;
    price1 -= 10000;
    document.getElementById("quantity1").innerHTML = quantity1;
    document.getElementById("price1").innerHTML = price1 + " €";
  }

  function changeColor1() {
    var heart1 = document.getElementById("heart1");
    heart1.style.color = "red";
  }
  console.log(count1);


  function deleteItem1() {
    var item = document.getElementById("price1");
    item.remove();
    var item = document.getElementById("quantity1")
    item.remove();
}





                 //div2




                 let count2 = 0;

                 function increment2() {
                     count2++;
                     document.getElementById("count2").innerHTML = count2;
                 }
                function decrement2() {
                    count2--;
                    document.getElementById("count2").innerHTML = count2;
                 }
                
                
                let quantity2 = 0;
                let price2 = 0;
                
                function increment2() {
                  quantity2++;
                  price2 += 30000;
                  document.getElementById("quantity2").innerHTML = quantity2;
                  document.getElementById("price2").innerHTML = price2 + " €";
                }
                function decrement2() {
                    quantity2--;
                    price2 -= 30000;
                    document.getElementById("quantity2").innerHTML = quantity2;
                    document.getElementById("price2").innerHTML = price2 + " €";
                  }
                
                  function changeColor2() {
                    var heart2 = document.getElementById("heart2");
                    heart2.style.color = "red";
                  }
                  console.log(count2);

                  function deleteItem2() {
                    var item = document.getElementById("price2");
                    item.remove();
                    var item = document.getElementById("quantity2")
                    item.remove();
                }


                   //div3




 let count3 = 0;

 function increment3() {
     count3++;
     document.getElementById("count3").innerHTML = count3;
 }
function decrement3() {
    count3--;
    document.getElementById("count3").innerHTML = count3;
 }



let quantity3 = 0;
let price3 = 0;

function increment3() {
  quantity3++;
  price3 += 9000;
  document.getElementById("quantity3").innerHTML = quantity3;
  document.getElementById("price3").innerHTML = price3 + " €";
}
function decrement3() {
    quantity3--;
    price3 -= 9000;
    document.getElementById("quantity3").innerHTML = quantity3;
    document.getElementById("price3").innerHTML = price3 + " €";
  }

  function changeColor3() {
    var heart3 = document.getElementById("heart3");
    heart3.style.color = "red";
  }
  console.log(count3);



  function deleteItem3() {
    var item = document.getElementById("price3");
    item.remove();
    var item = document.getElementById("quantity3")
    item.remove();
}