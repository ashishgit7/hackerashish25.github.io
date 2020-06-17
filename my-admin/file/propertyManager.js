function addMoreHF(){
    var tag1 = document.createElement("input");
    var tag2 = document.createElement("input");
    var br = document.createElement("br");
    var element = document.getElementById("form1");
    tag1.setAttribute("class","form-control HF_input")
    tag1.setAttribute("name","feat")
    tag1.setAttribute("placeholder","Enter House Feature")
    tag2.setAttribute("class","form-control HF_input ml-1")
    tag2.setAttribute("placeholder","Enter value")
    tag2.setAttribute("name","val")
    element.appendChild(br);
   element.appendChild(tag1);
   element.appendChild(tag2);
}

function addMoreNL(){
    var tag1 = document.createElement("input");
    var tag2 = document.createElement("input");
    var br = document.createElement("br");
    var element = document.getElementById("form2");
    tag1.setAttribute("class","form-control HF_input")
    tag1.setAttribute("name","nearPlaces")
    tag1.setAttribute("placeholder","Enter location")
    tag2.setAttribute("class","form-control HF_input ml-1")
    tag2.setAttribute("placeholder","Enter Distance")
    tag2.setAttribute("name","distance")
    element.appendChild(br);
   element.appendChild(tag1);
   element.appendChild(tag2);
}
function addMoreNB(){
    var tag1 = document.createElement("input");
    var tag2 = document.createElement("input");
    var br = document.createElement("br");
    var element = document.getElementById("form3");
    tag1.setAttribute("class","form-control HF_input")
    tag1.setAttribute("name","nearby")
    tag1.setAttribute("placeholder","Nearby")
    tag2.setAttribute("class","form-control HF_input ml-1")
    tag2.setAttribute("placeholder","Enter number")
    tag2.setAttribute("name","number")
    tag2.setAttribute("type","number")
    element.appendChild(br);
   element.appendChild(tag1);
   element.appendChild(tag2);
}
function addMoreAmenity(){
    var tag1 = document.createElement("input");
    // var tag2 = document.createElement("input");
    var br = document.createElement("br");
    var element = document.getElementById("form5");
    tag1.setAttribute("class","form-control m-1")
    tag1.setAttribute("name","Amenity")
    tag1.setAttribute("placeholder","Enter Amenity")
    tag1.style.display="inline";
    tag1.style.width="20%";

    // element.prependChild(br);
   element.appendChild(tag1);
//    element.appendChild(tag2);
}

function addMoreLandmarks(){
    var tag1 = document.createElement("input");
    // var tag2 = document.createElement("input");
    var br = document.createElement("br");
    var element = document.getElementById("form7");
    tag1.setAttribute("class","form-control m-1")
    tag1.setAttribute("name","landmark")
    tag1.setAttribute("placeholder","Enter landmark")
    tag1.style.display="inline";
    tag1.style.width="20%";

   element.appendChild(tag1);

}
function addMoreOtherCharges(){
    var tag1 = document.createElement("input");
    var tag2 = document.createElement("input");
    var tag3 = document.createElement("textarea");
    var br = document.createElement("br");
    var element = document.getElementById("form4");
    tag1.setAttribute("class","form-control HF_input")
    tag1.setAttribute("name","otherchargename")
    tag1.setAttribute("placeholder","Other Charge")
    tag2.setAttribute("class","form-control HF_input ml-1")
    tag2.setAttribute("placeholder","Enter amount")
    tag2.setAttribute("name","amount")
    tag3.setAttribute("class","form-control mt-1")
    tag3.setAttribute("placeholder","Additional Note")
    tag3.setAttribute("name","additionalNote")
    tag3.style.width="30%"
   
    element.appendChild(tag1);
    element.appendChild(tag2);
    element.appendChild(br);
    element.appendChild(tag3);
}


function addMorePhotoURL(){
    var tag1 = document.createElement("input");
    // var tag2 = document.createElement("input");
    var br = document.createElement("br");
    var element = document.getElementById("form8");
    tag1.setAttribute("class","form-control m-1")
    tag1.setAttribute("name","photosURL")
    tag1.setAttribute("type","url")
    tag1.setAttribute("placeholder","Enter photo URL")
    tag1.style.display="inline";
    tag1.style.width="20%";

   element.appendChild(tag1);

}

function addMorePriceArray(){
    var tag1 = document.createElement("input");
    // var tag2 = document.createElement("input");
    var br = document.createElement("br");
    var element = document.getElementById("form9");
    tag1.setAttribute("class","form-control m-1")
    tag1.setAttribute("name","PriceArray")
    tag1.setAttribute("type","number")
    tag1.setAttribute("placeholder","Enter PriceArray")
    tag1.style.display="inline";
    tag1.style.width="20%";

   element.appendChild(tag1);

}
function addMorePropertyFeature(){
    var tag1 = document.createElement("input");
    // var tag2 = document.createElement("input");
    var br = document.createElement("br");
    var element = document.getElementById("form10");
    tag1.setAttribute("class","form-control m-1")
    tag1.setAttribute("name","PropertyFeature")
    
    tag1.setAttribute("placeholder","Enter Property Feature")
    tag1.style.display="inline";
    tag1.style.width="20%";

   element.appendChild(tag1);

}

function addMoreRentDetails(){
    var tag1 = document.createElement("input");
    var tag2 = document.createElement("input");
    var tag3 = document.createElement("input");
    var br = document.createElement("br");
    var element = document.getElementById("form11");
    tag1.setAttribute("class","form-control mt-5")
    tag1.setAttribute("name","type")
    tag1.setAttribute("placeholder","Enter Room type")
    tag2.setAttribute("class","form-control HF_input ")
    tag2.setAttribute("placeholder","Enter Monthly Rent")
    tag2.setAttribute("name","monthlyRent")
    tag3.setAttribute("class","form-control ml-1 HF_input")
    tag3.setAttribute("placeholder","Enter Security Deposit")
    tag3.setAttribute("name","RentSecurityDeposit")
    tag1.style.width="30%"
    element.appendChild(br);
    element.appendChild(tag1);
    
    element.appendChild(tag2);
    element.appendChild(tag3);
}
function addMoreResponsibility(){
    var tag1 = document.createElement("textarea");

    var br = document.createElement("br");
    var element = document.getElementById("form12");
    tag1.setAttribute("class","form-control mt-2")
    tag1.setAttribute("name","responsibility")
    tag1.setAttribute("placeholder","Enter Responsibility")

    tag1.style.width="40%"
    tag1.style.display="block"
    // element.appendChild(br);
    element.appendChild(tag1);
    

}
function addMoreRules(){
    var tag1 = document.createElement("textarea");

    var br = document.createElement("br");
    var element = document.getElementById("form13");
    tag1.setAttribute("class","form-control mt-2")
    tag1.setAttribute("name","rules")
    tag1.setAttribute("placeholder","Enter Rules")

    tag1.style.width="40%"
    tag1.style.display="block"
    // element.appendChild(br);
    element.appendChild(tag1);
    

}

function print(){
    if (confirm("Are you Sure!")) {
        console.log( "You pressed OK!");
      } else {
        console.log("You pressed Cancel!");return;
      }

    let HouseFeature = {},NearPlaces={},Nearby={},OtherCharges={},amenities=[],
    inputs = document.getElementsByName( 'feat' );
    key = [].map.call(inputs, function( input ) {
                
                return input.value;
            });
    console.log(key);        
    inputs = document.getElementsByName( 'val' );   
    value = [].map.call(inputs, function( input ) {
        return parseInt(input.value);
    });
    console.log(value);        
    for(i=0;i<key.length;i++){
        
        HouseFeature[key[i]] = value[i]
    }
    
    console.log(HouseFeature)   
    
    ////////////////////
    inputs = document.getElementsByName( 'nearPlaces' );
    key = [].map.call(inputs, function( input ) {
                return input.value;
            });
    inputs = document.getElementsByName( 'distance' );   
    value = [].map.call(inputs, function( input ) {
                return input.value;
            });
    for(i=0;i<key.length;i++){
        NearPlaces[key[i]] = value[i]}
    
    console.log(NearPlaces) 
    /////////////////////
    inputs = document.getElementsByName( 'nearby' );
    key = [].map.call(inputs, function( input ) {
                return input.value;
            });
    inputs = document.getElementsByName( 'number' );   
    value = [].map.call(inputs, function( input ) {
                return input.value;
            });
    for(i=0;i<key.length;i++){
        Nearby[key[i]] = value[i]}
    
    console.log(Nearby) 
    ///////////////////////////////////////
    inputs = document.getElementsByName( 'otherchargename' );
    key = [].map.call(inputs, function( input ) {
                return input.value;
            });
    inputs = document.getElementsByName( 'amount' );   
    amount = [].map.call(inputs, function( input ) {
                return input.value;
            });
    inputs = document.getElementsByName( 'additionalNote' );   
    note = [].map.call(inputs, function( input ) {
                return input.value;
            });

    arr= new Array()
    for( i=0;i<key.length;i++)
      arr[i] = new Array(2);
    for(i=0;i<key.length;i++){
        arr[i][0] = amount[i];
        arr[i][1] = note[i];
    }

    for(i=0;i<key.length;i++){
        OtherCharges[key[i]] = arr[i]}
    
    console.log(OtherCharges) 
    ///////////////////////////////
    inputs = document.getElementsByName( 'Amenity' );
    amenities = [].map.call(inputs, function( input ) {
                return input.value;
            });
   
    
    console.log(amenities)
    //////////////////////////////
    inputs = document.getElementsByName( 'description' )[0].value;
    description = inputs
    inputs = document.getElementsByName( 'shortDescription' )[0].value;
    shortDescription = inputs
    /////////////////////////////
    var location=""
    inputs = document.getElementsByName( 'forWhom' )[0].value;
    forWhom = inputs
    inputs = document.getElementsByName( 'roomType' )[0].value;
    type = inputs
    inputs = document.getElementsByName('location')[0].value;
    location = inputs
    inputs = document.getElementsByName( 'minSecurityDeposit' )[0].value;
    minSecurityDeposit = parseInt(inputs)
    inputs = document.getElementsByName( 'SecurityDeposit' )[0].value;
    securityDeposit =inputs
    inputs = document.getElementsByName( 'name' )[0].value;
    name =inputs
    console.log(name)
    console.log(forWhom)
    // console.log(location1)
    console.log(location)
    console.log(type)
    console.log(minSecurityDeposit)
    console.log(securityDeposit)
    ////////////////////////////////
    inputs = document.getElementsByName( 'landmark' );
    nearby = [].map.call(inputs, function( input ) {
                return input.value;
            });
    
    console.log(nearby)   
    /////////////////////   
    inputs = document.getElementsByName( 'photosURL' );
    photos = [].map.call(inputs, function( input ) {
                return input.value;
            });
    
    console.log(photos)   
    inputs = document.getElementsByName( 'PriceArray' );
    priceArray = [].map.call(inputs, function( input ) {
                return parseInt(input.value);
            });
    
    console.log(priceArray)   
    inputs = document.getElementsByName( 'PropertyFeature' );
    propertyFeatures= [].map.call(inputs, function( input ) {
                return input.value;
            });
    
    console.log(propertyFeatures )
    //////////////////////////////////   
    rentDetails={}
    inputs = document.getElementsByName( 'type' );
    key = [].map.call(inputs, function( input ) {
                return input.value;
            });
    inputs = document.getElementsByName( 'monthlyRent' );   
    rent = [].map.call(inputs, function( input ) {
                return input.value;
            });
    inputs = document.getElementsByName( 'RentSecurityDeposit' );   
    SD = [].map.call(inputs, function( input ) {
                return input.value;
            });

    arr= new Array()
    for( i=0;i<key.length;i++)
      arr[i] = new Array(2);
    for(i=0;i<key.length;i++){
        arr[i][0] = rent[i];
        arr[i][1] = SD[i];
    }

    for(i=0;i<key.length;i++){
        rentDetails[key[i]] = arr[i]}
    
    console.log(rentDetails) 
    ///////////////////////////////////////
    inputs = document.getElementsByName( 'responsibility' );
    responsibility = [].map.call(inputs, function( input ) {
                return input.value;
            });
    inputs = document.getElementsByName( 'rules' );
    rules = [].map.call(inputs, function( input ) {
                return input.value;
            });
    console.log(responsibility)
    console.log(rules)
    ///////////////////////////////////////////property manager////////////
    inputs = document.getElementsByName( 'PMname' )[0].value;
    manager = inputs
    inputs = document.getElementsByName( 'numberOfProperty' )[0].value;
    numberOfProperty = parseInt(inputs)
    inputs = document.getElementsByName( 'PMPhonenumber' )[0].value;
    PMPhonenumber = inputs

    /////////////////////////////////////////////////////////////////////
            
    const ref = firebase.firestore().collection('temporaryProperties').doc()
console.log(ref.id)  
   

firebase.firestore().collection('temporaryProperties').doc(ref.id).set({
    HouseFeature,NearPlaces,Nearby,OtherCharges,amenities,
    description,shortDescription,minSecurityDeposit,forWhom,type,responsibility,rules,rentDetails,propertyFeatures,priceArray,photos,nearby,name,location,securityDeposit,manager,PMPhonenumber,numberOfProperty,
    id:ref.id
})
}
// var db = firebase.firestore();
const ref = firebase.firestore().collection('temperoryProperties').doc()
console.log(ref.id)  // prints the unique id