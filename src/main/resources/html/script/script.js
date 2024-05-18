
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('active');
    this.classList.toggle('active');
});

document.getElementById('python').addEventListener('mouseover', function(){
    var el = document.getElementById('skillspicture')
    el.src="pictures/python.jpg";
    document.getElementById('python').addEventListener('mouseout', function(){
       el.src="pictures/skills.jpg";
    });
});

document.getElementById('javascript').addEventListener('mouseover', function(){
    var el = document.getElementById('skillspicture')
    el.src="pictures/js.png";

    document.getElementById('javascript').addEventListener('mouseout', function(){
        el.src="pictures/skills.jpg";
    });
});

document.getElementById('java').addEventListener('mouseover', function(){
    var el = document.getElementById('skillspicture')
    el.src="pictures/java.jpg";

    document.getElementById('java').addEventListener('mouseout', function(){
        el.src="pictures/skills.jpg";
    });
});

document.getElementById('vb').addEventListener('mouseover', function(){
   var el = document.getElementById('skillspicture')
    el.src="pictures/vb.jpg";

    document.getElementById('vb').addEventListener('mouseout', function(){
       el.src="pictures/skills.jpg";
    });
});


document.getElementById('c++').addEventListener('mouseover', function(){
       var el = document.getElementById('skillspicture')
       el.src="pictures/c++.jpg";

       document.getElementById('c++').addEventListener('mouseout', function(){
          el.src="pictures/skills.jpg";
       });
});

document.getElementById('thymeleaf').addEventListener('mouseover', function(){
       var el = document.getElementById('webpicture')
       el.src="pictures/thymeleaf.png";

       document.getElementById('thymeleaf').addEventListener('mouseout', function(){
          el.src="pictures/webTech.jpg";
       });
});

document.getElementById('html').addEventListener('mouseover', function(){
       var el = document.getElementById('webpicture')
       el.src="pictures/html.jpg";

       document.getElementById('html').addEventListener('mouseout', function(){
          el.src="pictures/webTech.jpg";
       });
});

document.getElementById('Api').addEventListener('mouseover', function(){
       var el = document.getElementById('webpicture')
       el.src="pictures/rest.png";

       document.getElementById('Api').addEventListener('mouseout', function(){
          el.src="pictures/webTech.jpg";
       });
});

document.getElementById('Json').addEventListener('mouseover', function(){
       var el = document.getElementById('webpicture')
       el.src="pictures/json.jpg";

       document.getElementById('Json').addEventListener('mouseout', function(){
          el.src="pictures/webTech.jpg";
       });
});


document.getElementById('sqlite').addEventListener('mouseover', function(){
       var el = document.getElementById('databasepicture')
       el.src="pictures/sqlite.jpg";

       document.getElementById('sqlite').addEventListener('mouseout', function(){
          el.src="pictures/database.png";
       });
});

document.getElementById('git').addEventListener('mouseover', function(){
       var el = document.getElementById('toolspicture')
       el.src="pictures/git.png";

       document.getElementById('git').addEventListener('mouseout', function(){
          el.src="pictures/tools.jpg";
       });
});

document.getElementById("cicd").addEventListener('mouseover', function(){
       var el = document.getElementById('toolspicture')
       el.src="pictures/CICD.jpg";

       document.getElementById('cicd').addEventListener('mouseout', function(){
          el.src="pictures/tools.jpg";
       });
});

document.getElementById("docker").addEventListener('mouseover', function(){
       var el = document.getElementById('toolspicture')
       el.src="pictures/docker.png";

       document.getElementById('docker').addEventListener('mouseout', function(){
          el.src="pictures/tools.jpg";
       });
});

