// Resume-Terence Yep

// Bio information
var bio = {
    "name" : "Terence Yep",
    "role": "Analytical Chemist",
    "contacts": {
    "email" : "terence.yep@gmail.com",
    "mobile": "647-879-6338",
    "github": "yepterence",
    "location": "Windsor,ON",
    },
    "welcomeMsg" : "I am awesome!",
    "skills": [
    "Analytical methods & Instrument operation (UV/Vis, HPLC, AAS, GC-MS)","Scientific report writing","MS-Office applications: Word, Excel, Powerpoint","Programming languages: Python, Pandas, Numpy, HTML, CSS, Javascript"
    ],
    "bioPic": "images/self.jpg"
};

// var skillset = ["MS Office","Report writing","Python","HTML","CSS","Javascript",["HPLC","UV/Vis","AAS","GC-MS"]];


// var projects = {
//     "project1": "Wastewater treatment technology development",
//     "project2": "Hydrogen sulfide detection using silver-doped membranes",
//     "Description1":"",
//     "Description2":""
// };


bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
    $("#header").append(formattedwelcomeMsg);


    $("#header").append(HTMLskillsStart);

    for (i = 0; i < bio.skills.length; i++){
        // console.log(bio.skills[i]);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#header").append(formattedSkill);
    }

};

bio.display();


// Work experience section
var workExp = {
    "jobs":[
        {
            "employer":"University of Windsor",
            "Title": "Research Assistant",
            "Dates":"Sept 2012 - Sept 2016",
            "location":"Windsor, Ontario",
            "description": "Worked on several projects that involved analyzing solutions for analytes using various techniques and instruments. Taught students in laboratory sessions about biochemistry techniques and instruments that are used to analyze for various analytes."
        },
        {
            "employer": "University of Windsor",
            "Title": "IT Student Consultant",
            "Dates":"Sept 2009 - Apr 2012",
            "location":"Windsor, Ontario",
            "description":"Helped students and the public with MS Office problems as well as library printing and scanning issues."
        }
    ]
};



workExp.display = function() {
    $("#workExperience").append(HTMLworkStart);
    for(i = 0; i < workExp.jobs.length; i++){

            var formattedEmployer = HTMLworkEmployer.replace("%data%",workExp.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%",workExp.jobs[i].Title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedDates = HTMLworkDates.replace("%data%",workExp.jobs[i].Dates);
            $(".work-entry:last").append(formattedDates);
            var formattedLocation = HTMLworkLocation.replace("%data%",workExp.jobs[i].location);
            $(".work-entry:last").append(formattedLocation);
            var formattedDescription = HTMLworkDescription.replace("%data%",workExp.jobs[i].description);
            $(".work-entry:last").append(formattedDescription);

            }

};

workExp.display();


// Education section

var education = {
    "schools":[
    {
        "name":"University of Windsor",
        "degree":"Bachelor of Science",
        "major":"Biochemistry",
        "date":"June 2012",
        "location":"Windsor, Ontario"
    },
    {
        "name":"University of Windsor",
        "degree":"Master of Science",
        "major": "Biochemistry",
        "date":"June 2016",
        "location":"Windsor, Ontario"
    }],
    "onlineCourses":{
        "title":"Intro to Programming",
        "name":"Udacity",
        "date":"April 2017",
        "url":"https://www.udacity.com"
    }
};


education.display = function() {

    $("#education").append(HTMLschoolStart);

    for (i = 0; i < education.schools.length; i++){

            var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[i].name);
            $(".education-entry:last").append(formattedSchoolName);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[i].date);
            $(".education-entry:last").append(formattedSchoolDates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
            $(".education-entry:last").append(formattedSchoolLocation);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
            $(".education-entry:last").append(formattedSchoolDegree);
            var formattedSchoolMajor =  HTMLschoolMajor.replace("%data%",education.schools[i].major);
            $(".education-entry:last").append(formattedSchoolMajor);
        }
    $(".education-entry:last").append(HTMLonlineClasses);
    var formattedOnlineSchoolName = HTMLonlineSchool.replace("%data%",education.onlineCourses.name);
    $(".education-entry:last").append(formattedOnlineSchoolName);
    var formattedOnlineSchoolDate = HTMLonlineDates.replace("%data%",education.onlineCourses.date);
    $(".education-entry:last").append(formattedOnlineSchoolDate);
    var formattedOnlineSchoolTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses.title);
    $(".education-entry:last").append(formattedOnlineSchoolTitle);
    var formattedOnlineSchoolurl = HTMLonlineURL.replace("%data%",education.onlineCourses.url);
    $(".education-entry:last").append(formattedOnlineSchoolurl);
};


education.display();

// Projects section

var projects = {
    "project":[{
            "title":"Application of Chitosan in Agricultural Wastewater treatment",
            "date":"Sept 2016",
            "description":"MSc. thesis project. Conducted studies and field tests primarily to determine the efficacy of Chitosan agricultural wastewater treatment. "
        },
        {
            "title":"Intro to Programming: Data analysis-elective project",
            "date":"April 2017",
            "description": "Study the various variables that affected passenger survival in the sinking of the RMS Titanic using Python libraries such as Numpy and Pandas. "
        }]
};

projects.display = function() {

    $("#projects").append(HTMLprojectStart);
    for (i = 0; i < projects.project.length; i++) {
        console.log(i);
        var formattedprojectTitle = HTMLprojectTitle.replace("%data%",projects.project[i].title);
        var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.project[i].date);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%",projects.project[i].description);
        $(".project-entry:last").append(formattedprojectTitle);
        $(".project-entry:last").append(formattedprojectDates);
        $(".project-entry:last").append(formattedprojectDescription);
    }
};

projects.display();

// Internationalize button

$("#main").append(internationalizeButton);

// name changer, takes in a parameter name (string)
var inName = function(name) {

    split_name = name.trim().split(" "); // trim() removes any white space from the front and back of the string.
    // console.log(split_name);
    all_caps_last_name = split_name[split_name.length - 1].toUpperCase();
    // console.log(all_caps_last_name);
    sliced_first_name = split_name[0].slice(0,1).toUpperCase() + split_name[0].slice(1).toLowerCase();
    // console.log(sliced_first_name);
    final_name = sliced_first_name + " " + all_caps_last_name;
    return final_name;
};

// Tracks location of clicks by user
$(document).click(function(loc) {
    console.log(loc.pageX, loc.pageY);
    // var x = loc.pageX;
    // var y = loc.pageY;

    // logClicks(x,y);
});

$("#mapDiv").append(googleMap);
/*
This is empty on purpose! Your code to build the resume will go here.
 */