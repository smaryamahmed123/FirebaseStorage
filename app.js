
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  import { getStorage, ref,uploadBytes,getDownloadURL  } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js";




  // const firebaseConfig = {
  //   apiKey: "AIzaSyDgiCyJHS6eP7IJAJ0Wfb8QOcoaWMHHWy0",
  //   authDomain: "testingstorage-1c1da.firebaseapp.com",
  //   projectId: "testingstorage-1c1da",
  //   storageBucket: "testingstorage-1c1da.appspot.com",
  //   messagingSenderId: "973470727698",
  //   appId: "1:973470727698:web:4068b77ac458b8ad8662cb"
  // };

  const firebaseConfig = {
    apiKey: "AIzaSyBXWoGpYMjZYZh0JJqdYpdVHAYFpVnXpjU",
    authDomain: "imgstorage-34011.firebaseapp.com",
    projectId: "imgstorage-34011",
    storageBucket: "imgstorage-34011.appspot.com",
    messagingSenderId: "569711868675",
    appId: "1:569711868675:web:a1bbb14fd1b4abbdff8736"
  };
  
  var app = initializeApp(firebaseConfig);
  var storage = getStorage(app)


var inp = document.getElementById('inp')
  window.send=function(){
    // console.log(inp.files[0]);

   var storageRef = ref(storage,'images/abc.jpg');
   uploadBytes(storageRef,inp.files[0]).then(function(success){
   
    getDownloadURL(success.ref).then(
        function(url){
            console.log('YE RAHA DOWNLOADABLE URL ===>',url);
        }
    ).catch(function (err){
        console.log(err);
    })



}).catch(function(error){
       console.log(error)

   })



}