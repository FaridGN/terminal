  let navbar = document.createElement("div");
   navbar.className = "navig";
   document.body.appendChild(navbar);

  let logo = document.createElement("img");
    logo.src = "images/logo.png";
    logo.id = "mylogo";
    document.body.appendChild(logo);

  let nida = document.createElement("img");
     nida.id = "exc";
     nida.src = "images/nida.png";
     document.body.appendChild(nida);

     let providers = { 
       Kommunal:{  
        "name": "div",
        "backgound-color": "green",
        "width": "80px",
        "height": "60px",
       },
  
        Mobil:{
        "name": "div",
        "backgound-color": "green",
        "width": "80px",
        "height": "60px"
      },

        Bank:{
        "name": "div",
        "backgound-color": "green",
        "width": "80px",
        "height": "60px",
      },
      Dovlet:{  
        "name": "div",
        "backgound-color": "green",
        "width": "80px",
        "height": "60px",
       },
  
        TV:{
        "name": "div",
        "backgound-color": "green",
        "width": "80px",
        "height": "60px"
      },

        Internet:{
        "name": "div",
        "backgound-color": "green",
        "width": "80px",
        "height": "60px",
      },
      Odeme:{  
        "name": "div",
        "backgound-color": "green",
        "width": "80px",
        "height": "60px",
       },
  
      Eylence:{
        "name": "div",
        "backgound-color": "green",
        "width": "80px",
        "height": "60px",
      },

        Pulqabi:{
        "name": "div",
        "backgound-color": "green",
        "width": "80px",
        "height": "60px",
      }
    }
 
    function appendBody() {
      let element = document.createElement(name);
      element.width = width;
      element.height = height;
      element.backgroundColor = backgroundColor;
      document.body.appendChild(element);
  }

  
  
