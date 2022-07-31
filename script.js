/* .js files add interaction to your website */
// var learnMore = document.getElementById("learnMore");

// learnMore.addEventListener("click", learnMore);

// function learnMore() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display == "none") {
//         x.style.display = "block";
//     } else {
//        x.style.display = "none";
//       }
// }

var africanAmerican = document.getElementById("aA");
var asianAmerican = document.getElementById("asian");
var other = document.getElementById("other");

africanAmerican.addEventListener("click", aA);
asianAmerican.addEventListener("click", asian);
other.addEventListener("click", diff);

var aAFacts = ["2 out of 5 African American adults have high blood pressure, but less than half of them have it under control.[1]", "While white women are more likely to develop breast cancer than Black women, Black women are more likely to die from it.[2]"];
var count = 0;

function showLittleText(){
  littleLittleText.innerHTML="[1] National Center for Health Statistics. (2017, October). Hypertension Prevalence and Control Among Adults: United States. <br>[2] American Cancer Society. (2019, January 1). Cancer Treatment & Survivorship Facts & Figures 2019-2021.<br>[3] National Institutes of Health. (2015, September 8). More than half of Asian Americans with diabetes are undiagnosed. <br>[4] University of California San Francisco. (2018, March 14). Genomic Analysis Reveals Why Asthma Inhalers Fail Minority Children.";
}

function aA(){
  if (count == aAFacts.length){
    count = 0;
  }
  impactText.innerHTML = aAFacts[count];
  count++;
  showLittleText();
}

function asian(){
  impactText.innerHTML = "Asian Americans are at risk for type 2 diabetes at a lower BMI comapred to other groups. What is considered 'normal weight' in other groups—a BMI of 23 or above— requires screening for Asian Americans. This discrepancy has led Asian Americans to have the highest proportion(51%) of undiagnosed diabetes.[3]";

  showLittleText();
}

function diff(){
  impactText.innerHTML = "Genetic differences according to a UC San Franciso study show that asthma medication may not work well for minority children.[4]";
  showLittleText();
}

function learnMore() {
  var x = document.getElementById("more");
  x.style.display = x.style.display != "block"?"block":"none"
  var learnMore = document.getElementById("learnMore");
  // learnMore.value = ''; // will just add a hidden value
  if (learnMore.innerHTML == "Learn More"){
    learnMore.innerHTML = 'Hide';
  }
  else{
    learnMore.innerHTML = "Learn More";
  }
}
