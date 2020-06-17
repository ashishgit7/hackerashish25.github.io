async function seenbar(){
    seen=[];
    var val={};
  await firebase.firestore().collection('visits').get().then((res) =>{ 
       res.docs.forEach( (doc)=> {
           val= doc.data();
           if(val.seen==false)
            return;

           val['id'] = doc.id;
           seen.push(val)
       })
   }) 
//   console.log(val)
  
   
   var element = document.getElementById("seenTable");
   var box = document.getElementById("unseen");
   box.style.display = "none"
   box = document.getElementById("seen");
   box.style.display = "block"
//    console.log(element)
   
   element.innerHTML=""
   seen.forEach((doc)=>{
   //    console.log(doc) 
      var tag1 = document.createElement("input");
      tag1.setAttribute('type','checkbox');
      tag1.setAttribute('name','seenCheckbox');
      tag1.setAttribute('id',doc.id);
      tag1.checked=true

   tableRow = document.createElement("tr");
   tdpropertyID = document.createElement("td")
   tdpropertyname = document.createElement("td")
   tdpropertyphone = document.createElement("td")
   tdpropertybookedDate = document.createElement("td")
   tdpropertymark = document.createElement("td")
   tdpropertymark.appendChild(tag1)
   tdpropertyID.innerText = doc.propertyid;
   tdpropertyname.innerHTML = doc.form.name;
   tdpropertyphone.innerHTML = doc.form.phone;
   tdpropertybookedDate.innerHTML = doc.form.bookedDate;
   tableRow.appendChild(tdpropertyID)
   tableRow.appendChild(tdpropertyname)
   tableRow.appendChild(tdpropertybookedDate)
   tableRow.appendChild(tdpropertyphone)
   tableRow.appendChild(tdpropertymark)
//    console.log(tdpropertymark)
   element.appendChild(tableRow)
   })
}
async function unseenbar(){
     unseen=[];
     var val={};
   await firebase.firestore().collection('visits').get().then((res) =>{ 
        res.docs.forEach( (doc)=> {
            val= doc.data();
            if(val.seen==true)
             return;

            val['id'] = doc.id;
            unseen.push(val)
        })
    }) 
   console.log(val)
   var box = document.getElementById("seen");
   box.style.display = "none"
   box = document.getElementById("unseen");
   box.style.display = "block"

    var element = document.getElementById("unseenTable");
    // console.log(element)
    
    element.innerHTML=""
    unseen.forEach((doc)=>{
    //    console.log(doc) 
       var tag1 = document.createElement("input");
       tag1.setAttribute('type','checkbox');
       tag1.setAttribute('name','unseenCheckbox');
       tag1.setAttribute('id',doc.id);

    tableRow = document.createElement("tr");
    tdpropertyID = document.createElement("td")
    tdpropertyname = document.createElement("td")
    tdpropertyphone = document.createElement("td")
    tdpropertybookedDate = document.createElement("td")
    tdpropertymark = document.createElement("td")
    tdpropertymark.appendChild(tag1)
    tdpropertyID.innerText = doc.propertyid;
    tdpropertyname.innerHTML = doc.form.name;
    tdpropertyphone.innerHTML = doc.form.phone;
    tdpropertybookedDate.innerHTML = doc.form.bookedDate;
    tableRow.appendChild(tdpropertyID)
    tableRow.appendChild(tdpropertyname)
    tableRow.appendChild(tdpropertybookedDate)
    tableRow.appendChild(tdpropertyphone)
    tableRow.appendChild(tdpropertymark)
    // console.log(tdpropertymark)
    element.appendChild(tableRow)
    }) 
}

function updateUnseenVisit(){
    input = document.getElementsByName( 'unseenCheckbox' )
    input.forEach((box)=>{
        if(box.checked==true){
            var ID = box.id
            console.log(ID)
            var seen = true;
            firebase.firestore().collection('visits').doc(ID).update({
                  seen
            })
        }
    })
    unseenbar()
    // console.log(input)
}
function updateSeenVisit(){
    input = document.getElementsByName( 'seenCheckbox' )
    input.forEach((box)=>{
        if(box.checked==false){
            var ID = box.id
            console.log(ID)
            var seen = false;
            firebase.firestore().collection('visits').doc(ID).update({
                  seen
            })
        }
    })
    seenbar()
    // console.log(input)
}