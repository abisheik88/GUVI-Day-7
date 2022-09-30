//a.Get all the countries from the Asia continent /region using the Filter function

var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result)
    var Asiareg = result.filter((ele)=>ele.region=="Asia")
    var result = Asiareg.map((ele)=>ele.name)
    console.log(result)
  
}


//b.Get all the countries with a population of less than 2 lakhs using Filter function

var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result)
    var population1 = result.filter((ele)=>ele.population<200000).map((ele)=>ele.name)
    console.log(population1)
}

//c.Print the following details name, capital, flag using forEach function

var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result)
    var res=result.forEach(element => {console.log(`Countryname- ${element.name} Capital- ${element.capital} Flag- ${element.flag}`)
        
        
    });
    console.log(res)
}

//d.Print the total population of countries using reduce function

var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result)
    var res=result.reduce((acc,cv)=>acc+cv.population,0)
    console.log(res)
}

//e.Print the country which uses US Dollars as currency.


var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result)
        for(i=0;i<result.length;i++){
            if(result[i].currencies[0].code==="USD")
            {
                console.log("name:",result[i].name)
            }
        }
    }