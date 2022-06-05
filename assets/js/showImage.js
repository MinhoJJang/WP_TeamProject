var imgArray = new Array();
  imgArray[0] = "images/picture0.jpg";
  imgArray[1] = "images/picture1.jpg";
  imgArray[2] = "images/picture2.jpg";
  imgArray[3] = "images/picture3.jpg";
  imgArray[4] = "images/picture4.jpg";

  function showImage() {
      var imgNum = Math.round(Math.random() * 4);
      var objImg = document.getElementById("image_id");
      objImg.src = imgArray[imgNum];
      
      var d = imgArray[imgNum];
      setTimeout("showImage()", 4000);
  }