/*
This is empty on purpose! Your code to build the resume will go here.
 */
//--------------MURARI LAMSAL -----------------------
var Skills = ["Awesomeness","Delivering things","Cryogenic Sleep","Saving the Universe"];
var data = '%data%';
var $header = $("#header");
var bio = {
  "name": "Murari Lamsal",
  "role": "Web Developer",
  "contacts": {
    "mobile": "+977 198 547 578",
    "email": "ml@gmail.com",
    "twiter": "@palpadhading",
    "github": "LAMSSALYYYY",
    "location": "Charlotte"
  },
  "welcomeMessage": "Welcome to the World of Web Developer",
  "skills": Skills, //["Awesomeness","Delivering things","Cryogenic Sleep","Saving the Universe"],
  "biopic": "images/P6.jpg"
};

// --------- MAIN BIO ----------------
bio.display = function(){
 var formattedName = HTMLheaderName.replace(data,bio.name);
 $header.append(formattedName);
 var formattedRole = HTMLheaderRole.replace(data,bio.role);
 $header.append(formattedRole);
 var formattedPic = HTMLbioPic.replace(data, bio.biopic);
 $header.append(formattedPic);
 var formattedMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
 $header.append(formattedMsg);
 //-------- CONTATS ------
 var formattedMobile = HTMLmobile.replace(data,bio.contacts.mobile);
 $("#topContacts").append(formattedMobile);
 var  formattedEmail = HTMLemail.replace(data,bio.contacts.email);
 $("#topContacts").append(formattedEmail);
 var formattedTwiter = HTMLtwitter.replace(data,bio.contacts.twiter);
 $("#topContacts").append(formattedTwiter);
 var formattedGitHub = HTMLgithub.replace(data, bio.contacts.github);
 $('#topContacts').append(formattedGitHub);
 var formattedLoc = HTMLlocation.replace(data, bio.contacts.location);
 $('#topContacts').append(formattedLoc);
 if (bio.skills.length > 0){
   $header.append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace(data,bio.skills[0]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace(data,bio.skills[1]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace(data,bio.skills[2]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace(data,bio.skills[3]);
  $("#skills").append(formattedSkill);
 // ----------F O O T E R ---------------------
  var formattedMobile = HTMLmobile.replace(data, bio.contacts.Mobile);
  $('#footerContacts').append(formattedMobile);
  var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
  $('#footerContacts').append(formattedEmail);
  var formattedGitHub = HTMLgithub.replace(data, bio.contacts.github);
  $('#footerContacts').append(formattedGitHub);

   }
};

bio.display();

//--------WORK EXPERIENCES------------

var work = {
  "jobs": [{

      "employer": "Facebook",
      "title": "Web Developer",
      "location": "Pleasanton, CA",
      "dates": "Feb 2010 - Current",
      "description": "HTMP / CSS BootStap Framework / PL-SQL Script, Create PL-SQL Auto report, Create Shell Script , Design and monitor the live network "
    },
    {
      "employer": "APPLE",
      "title": "Design Engineer",
      "location": "San Francisco, CA",
      "dates": "May 2005 - Jan 2010",
      "description": "Design Mobile Network , Automate using VBA Macro"
    },
    {
      "employer": "Sprint LLC",
      "title": "System Engineer",
      "location": "McLean, VA",
      "dates": "Jul 2002 - May 2004",
      "description": "Monitor and upgrade SW patch , OSS live system Monitor"
    },
    {
      "employer": "LARGE Bank",
      "title": "Java, JSP Programmer",
      "location": "Jacksonville, FL",
      "dates": "Feb 2001 - 2002",
      "description": "Server Side / Front Page Programmer."
    }
  ]
};


  work.disPlayWork = function(job){

	//work.jobs.forEach(function(job) {
  for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace(data,work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace(data,work.jobs[job].title);
	var formattedEmployerTitle =  formattedEmployer + formattedTitle ;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace(data, work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	var formattedLocation = HTMLworkLocation.replace(data, work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);
	var formattedJobDescription = HTMLworkDescription.replace(data, work.jobs[job].description);
	$(".work-entry:last").append(formattedJobDescription);

	}
};

work.disPlayWork();



//----------THE EDUCATION PART------------

var education = {
  "schools": [
  {
      "name": "Tri-Chandara  College",
      "location": "Kathmandu, Nepal",
      "degree": "Intermediate Degree in General Science",
      "majors": "Physics, Chemistary, Bilogy",
      "date": "1998",
      "url": " http://trichandracollege.edu.np "
    },
    {
      "name": "The Institution of Engineering",
      "location": "Calcutta, INDIA",
      "degree": "Bachelor",
      "majors": "Electronics and Communications Engineering",
      "date": "2000",
      "url": " https://www.ieindia.org/index.aspx"
    },
    {
      "name": "Maharishi University of Management",
      "location": "Fairfield , IO",
      "degree": "MSC",
      "majors": "Computer Science",
      "date": "2004",
      "url": "https://www.mum.edu"
    }
  ],

  "onlinecourses":
    {
      "title"   : "Front-End Web Development",
      "school"  : "Udacity On-line",
      "date"   : "2016 ",
      "url"     : "https://www.udacity.com/"
    }

};
education.display = function() {
  for (school in education.schools){
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace(data, education.schools[school].name);
    $(".education-entry:last").append(formattedSchoolName);
    var formattedSchoolDegree = HTMLschoolDegree.replace(data, education.schools[school].degree);
    $(".education-entry:last").append(formattedSchoolDegree);
    var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[school].date);
    $(".education-entry:last").append(formattedSchoolDates);
    var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);
    var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[school].majors);
    $(".education-entry:last").append(formattedSchoolMajor);
  }


  $("#onlineCourses").append(HTMLonlineClasses);
  var formattedOnlineTitle = HTMLonlineTitle.replace(data, education.onlinecourses.title);
  $("#onlineCourses:last").append(formattedOnlineTitle);
  var formattedOnlineSchool = HTMLonlineSchool.replace(data, education.onlinecourses.school);
  $("#onlineCourses:last").append(formattedOnlineSchool);
  var formattedOnlineDates = HTMLonlineDates.replace(data, education.onlinecourses.date);
  $("#onlineCourses:last").append(formattedOnlineDates);
  var formattedOnlineURL = HTMLonlineURL.replace(data, education.onlinecourses.url);
  $("#onlineCourses:last").append(formattedOnlineURL);

};
education.display();

//----------JOB  PROJECTS DETAILS-------------

var projects = {
  "projects": [
    {
      "title": "Web Developer",
      "dates": "2010-2016",
      "description": "PL -SQL Programmer, OSS Shell Programme, VBA coder",
      'images': []
    },

    {
      "title": "Design Engineer",
      "dates": "2004-2010",
      "description": "Unix and perl coding with Java / VBA Coder,JavaScript for live system",
      "images": []
    },
    {
      "title": "System Programmer",
      "dates": "2001-2004",
      "description": "Java , Unix and perl coding with Java / JavaScript for live system",
      "images": []
    },
     {
      "title": "Java Programmer",
      "dates": "2000-2001",
      "description": "Unix and perl coding with Java / JavaScript for live system,Created web-based software system to streamline tuberculosis information across numerous hospitals. Identified user requirements by initiating business and technology analysis. Performed surveys and studies to define design and architecture",
      "images": ['images/P4.jpg']
    }
  ]
};


projects.display = function() {
  for(index in projects.projects) {

     $("#projects").append(HTMLprojectStart);
      var formattedProjectTitle = HTMLprojectTitle.replace(data,projects.projects[index].title);
      $(".project-entry:last").append(formattedProjectTitle);
      var formattedProjectDate = HTMLprojectDates.replace(data,projects.projects[index].dates);
      $(".project-entry:last").append(formattedProjectDate);
      var formattedProjectDescription = HTMLprojectDescription.replace(data,projects.projects[index].description);
      $(".project-entry:last").append(formattedProjectDescription);
       if (projects.projects[index].images.length > 0){
       for(image in projects.projects[index].images) {
       var formattedProjectImages = HTMLprojectImage.replace(data,projects.projects[index].images[image]);
       $(".project-entry:last").append(formattedProjectImages);
     }
   }
  }
}

projects.display();

// --------------MAPS AND MORE ---------------------

$(document).click(function(loc){
  var x =loc.pageX;
  var y =loc.pageY;
  //console.log(x,y);
  logClicks(x,y);
});

function locationizer(work_obj) {

var locationWork = [];

for (loc in work_obj.jobs) {
var newLoc = work_obj.jobs[loc].location;
 locationWork.push(newLoc);
}
return locationWork;
}
console.log(locationizer(work));

$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);
  });
});

function inName(){
 var normalizedName = "MuRarI LaMsaL"
 //var normalizedName = window.name;
 normalizedName = normalizedName.trim().split(" ");
 console.log(normalizedName);
 var newName;
 var newName=  normalizedName[0].slice(0,1).toUpperCase()+normalizedName[0].slice(1).toLowerCase() +" "+normalizedName[1].toUpperCase();
 console.log(newName);
 return newName;

}

$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);

// ---------------------------Seach my address and city ------------------------------

    function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');


    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr + ',' + cityStr;

    $greeting.text('So, you want to live at ' + address + '?');
    var streetviewUrl = 'https://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address +'';

    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');

    return false;
    };


    $('#form-container').submit(loadData);

    loadData();
