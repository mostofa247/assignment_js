
//1.kilometerToMeter
function kilometerToMeter(n){
        var meter=n * 1000;
        return meter;
}



//2.budgetCalculator
function budgetCalculator(ghuri_number,moblie_number,laptop_number){
    var ghuri_cost = ghuri_number * 50;//ghuri price = $50 and ghuri_number = how maeny number do you need?
    var mobile_cost = moblie_number * 100;//mobile_price = $100 & mobile_number = How many product buy you?
    var laptop_cost = laptop_number * 500;//laptop_price = $500 & laptop_number = how many laptop buy you?

    var total_cost = (ghuri_cost + mobile_cost + laptop_cost);
    return total_cost;
}



//3.hotelCost

function hotelCost(total_Day){
    var total_Cost=0;
    if(total_Day<=10){  
        total_Cost=total_Day*100; 
    }
    else if(total_Day<=20){  
       var firstPart =10*100;
       var remainingDay = total_Day-10;   
       var secondPart=remainingDay*80;  
       total_Cost=firstPart+secondPart; 

    }
    else{
        var firstPart =10*100;  
        var secondPart=10*80;  
        var remainingDay = total_Day-20; 
        var thirdPart=remainingDay*50; 
        total_Cost=firstPart+secondPart+thirdPart; 
 
     }

    return total_Cost;
}





//4.megaFriend

function megaFriend(arr){
    var mega = arr[0];
     for ( i = 0; i < arr.length; i++) {
         element = arr[i];
            if( mega.length < element.length){
                mega = element;
    }
  }
 return mega;
}
