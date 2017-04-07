var bio = {
    "name": "Terence Yep",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+1-647-879-6338",
        "email": "terence.yep@gmail.com",
        "github": "yepterence",
        "location": "Windsor, Ontario"
    },
    "welcomeMessage": "Life is what we make. Make it a better one.",
    "skills": ["Programming", "Communication", "Leadership", "Management", "Flexible in a group"],
    "biopic": "images/self.jpg"
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $('#header').append(formattedBiopic);
    $('#topContacts').append(formattedMobile);
    $('#footerContacts').append(formattedMobile);
    $('#topContacts').append(formattedEmail);
    $('#footerContacts').append(formattedEmail);
    $('#topContacts').append(formattedGithub);
    $('#footerContacts').append(formattedGithub);
    $('#topContacts').append(formattedLocation);
    $('#footerContacts').append(formattedLocation);
    $('#header').append(formattedWelcomeMsg);

    //if (bio.skills.length > 0) {
    //var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skills) {
        //console.log(skills);
        var formattedSkill = HTMLskills.replace("%data%", skills);
        $("#skills").append(formattedSkill);
    });
};

bio.display();

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

var work = {
    "jobs": [{
        "employer": "University of Windsor",
        "title": "IT stduent consultant",
        "dates": "Sept 2009 - April 2012",
        "description": "Resolved issues related to MS office based software, printers and scanners on-site",
        "location": "Windsor, Ontario"
    }, {
        "employer": "University of Windsor",
        "title": "Research Assistant",
        "dates": "Sept 2012 - Sept 2016",
        "description": "Analyzed wastewater samples using analytical instruments such as HPLC, GC-MS and UV-Vis spectrophotometer","Expressed recombinant proteins in bacterial expression systems and purified resulting proteins using affinity chromatography.",
        "location": "Windsor, Ontario"
    }]
};

work.display = function() {
    //$("#main").prepend(work);
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        //$("#main").append(formattedWorkEmployer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
        //$("#main").append(formattedWorkTitle);
        var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
        $(".work-entry:last").append(formattedWorkEmployerTitle);

        var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedWorkDates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedWorkDescription);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedWorkLocation);
    });
}
work.display();

var projects = {
    "projects": [{
        "title": "HomeAutomation using IoT",
        "dates": "2016",
        "description": "A hardware project that is ought to be controlled by an Android application for the purpose of Home Automation and security. The cheaper but efficient components selected as the building parts of this idea makes this project a success and relevant for the society including common people.",
        "images": ["images/prj2.png"]
    }, {
        "title": "Digital Notice Board",
        "dates": "2015",
        "description": "A software project to help schools and colleges to display notices and other information to a mass audience. User friendly and easily upgradeable one. The language used was Java in the back end and PHP in front end. The project was submitted to my college and is going to be tsken up by the upcoming batches for improvement and some modifications attaching relevant hardware components.",
        "images": ["images/prj1.jpg"]
    }]
};

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDate = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedProjectDate);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedProjectDescription);
        var formattedProjectImage = HTMLprojectImage.replace("%data%", project.images);
        $(".project-entry:last").append(formattedProjectImage);
    });
}
projects.display();

var education = {
    "schools": [{
        "name": "GEC Sreekrishnapuram",
        "degree": "B-Tech",
        "dates": "2016",
        "location": "Sreekrishnapuram",
        "majors": ["Computer Science"],
        "url" : "http://www.gecskp.ac.in/"
    }, {
        "name": "HSS Sreekrishnapuram",
        "degree": "High School",
        "dates": "2011",
        "location": "Sreekrishnapuram",
        "majors": ["Biology"],
        "url" : "http://www.hsssreekrishnapurampalakkad.elisting.in/"
    }],
    "onlineCourses": [{
        "title": "Information Security",
        "school": "NPTEL",
        "dates": "2014",
        "url": "http://www.nptel.ac.in"
    }, {
        "title": "Frontend Web Development",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com/nanodegrees/nd001"
    }]
};

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedschoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        var formattedschoolURL = HTMLschoolURL.replace("%data%", school.url);
        var formatteduniinfo = formattedschoolName + formattedschoolDegree + formattedschoolDates + formattedschoolLocation + formattedschoolMajor + formattedschoolURL;
        $(".education-entry:last").append(formatteduniinfo);
    });

    var formattedonlineHeader = HTMLonlineClasses;
    $(".education-entry:last").append(formattedonlineHeader);

    education.onlineCourses.forEach(function(onlineClass) {
        $("#education").append(HTMLschoolStart);

        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", onlineClass.title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", onlineClass.school);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", onlineClass.dates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", onlineClass.url);
        var formattedbiinfo = formattedonlineTitle + formattedonlineSchool + formattedonlineDates + formattedonlineURL;
        $(".education-entry:last").append(formattedbiinfo);
    });
}
education.display();

/*$(document).click(function(loc){
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});*/


$("#mapDiv").append(googleMap);