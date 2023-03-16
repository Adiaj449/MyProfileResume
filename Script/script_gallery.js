function buildGallery()
{
    var body = document.getElementsByTagName('body');
    document.body.append(createHeader());
    document.body.append(createProfile());
    document.body.append(createAbout());
   
}
function createHeader(params) {
    var container = document.createElement('div');
    container.setAttribute('class','container-fluid text-center p-2 header');

    var row = document.createElement('div');
    row.setAttribute('class','row');
    container.append(row);

    var col1 = document.createElement('div');
    col1.setAttribute('class','col-sm-12');
    col1.innerHTML ="<h3>Profile Resume </h3>";

    var col2 = document.createElement('div');
    col2.setAttribute('class','col-sm-12');
    col2.innerHTML ="<a href="+"https://github.com/Adiaj449"+"><span class="+"menu"+">Github </span></a><a target="+"_blank"+"+ href="+"https://www.linkedin.com/in/ajinkya-algonda-4b9b3180"+"><span class="+"menu"+">LinkedIn </span></a><a target="+"_blank"+" href="+"#"+"><span class="+"menu"+">Image Gallery</span></a>";
    
    row.appendChild(col1);
    row.appendChild(col2);
    
    container.appendChild(row);
    return container;
}
function createProfile()
{
    var container = document.createElement('div');
    container.setAttribute('class','container text-center');
    var row = document.createElement('div');
    row.setAttribute('class','row');
    container.append(row);
    var col1 = document.createElement('div');
    col1.setAttribute('class','col-sm-6 mt-5');
    
    var col2 = document.createElement('div');
    col2.setAttribute('class','col-sm-6 mt-5');
    
    row.appendChild(col1);
    row.appendChild(col2);

    
    
    var profileImage = document.createElement('img');
    profileImage.setAttribute('class','rounded');
    profileImage.setAttribute('src','./Images/profile_ajinkya.jpg');
    profileImage.setAttribute('height','450px');
    col2.appendChild(profileImage);
    
    var profileImage1 = document.createElement('img');
    profileImage1.setAttribute('class','rounded');
    profileImage1.setAttribute('src','./Images/img3.jpg');
    profileImage1.setAttribute('height','450px');
    col1.appendChild(profileImage1);

    var hori = document.createElement('hr');
    hori.setAttribute('class','bg-danger');
    container.appendChild(hori);
    
    return container;
    
}
function createAbout()
{
    var container = document.createElement('div');
    container.setAttribute('class','container text-center');
    
    var row = document.createElement('div');
    row.setAttribute('class','row mt-5');
    container.append(row);


    var about = document.createElement('img');
    about.setAttribute('class','col-sm-12 text-center');
    about.setAttribute('src','./Images/img1.jpg');
    about.setAttribute('height','750px');
    row.appendChild(about);
    
    var aboutInfo = document.createElement('img');
    aboutInfo.setAttribute('class','col-sm-12 text-left');
    aboutInfo.setAttribute('src','./Images/img2.jpg');
    about.setAttribute('height','750px');
    row.appendChild(aboutInfo); 
    
    var downloadPdf = document.createElement('div');
    downloadPdf.setAttribute('class','col-sm-4 text-center');
    let path = "#";
    downloadPdf.innerHTML = "<a href="+path+">Download PDF</a>"
    row.appendChild(downloadPdf);
    container.appendChild(row);
    
    var hori = document.createElement('hr');
    hori.setAttribute('class','bg-danger');
    container.appendChild(hori);

   
    return container;
}

function getEducationDetails(){
    var container = document.createElement('div');
    container.setAttribute('class','container text-center');
    
    var row = document.createElement('div');
    row.setAttribute('class','row mt-5');
    container.append(row);
    
    var about = document.createElement('div');
    about.setAttribute('class','col-sm-4 text-center');
    about.innerHTML = "<h3>Education</h3>";
    row.appendChild(about);
    
    var aboutInfo = document.createElement('div');
    aboutInfo.setAttribute('class','col-sm-4 text-left');
    aboutInfo.innerHTML = "<b>Bachelor of Engineering</b><p><span>MIT World Peace University, Pune. 038 Formally Know as MIT PUNE</span></p>";
    row.appendChild(aboutInfo);
    
    var downloadPdf = document.createElement('div');
    downloadPdf.setAttribute('class','col-sm-4 text-center');
    let path = "#";
    downloadPdf.innerHTML = "<a href="+path+">Graduated in June - 2018 </a><p><span>First Class with Distinction</span></p>";
    row.appendChild(downloadPdf);
    container.appendChild(row);

    var hori = document.createElement('hr');
    hori.setAttribute('class','bg-danger');
    container.appendChild(hori); 

    
    
    return container;
}
function getResearchDetails(params) {
    var container = document.createElement('div');
    container.setAttribute('class','container text-center');
    
    var row = document.createElement('div');
    row.setAttribute('class','row mt-5');
    container.append(row);
    
    var about = document.createElement('div');
    about.setAttribute('class','col-sm-4 text-center');
    about.innerHTML = "<h3>Research Paper (Springer Journal, Singapore)</h3>";
    row.appendChild(about);
    
    var aboutInfo = document.createElement('div');
    aboutInfo.setAttribute('class','col-sm-4 text-left');
    aboutInfo.innerHTML = "<b>Title: Hybrid Solutions for E-toll Payments</b><p> Published Research Paper in Springer Journal, Singapore in 2017 on Hybrid Solutions for Electronic Toll collection on Payments.</p><p> Proposed different payment techniques based on different literature survey and implementation. </p><p> Used No cash system at toll ways means totally cashless payments for vehicles.</p>";
    row.appendChild(aboutInfo);
    
    var downloadPdf = document.createElement('div');
    downloadPdf.setAttribute('class','col-sm-4 text-center');
    let path = "#";
    downloadPdf.innerHTML = "<a href="+path+">Published in - 2017 </a><p><span> <a target="+"_blank"+" href ="+"https://link.springer.com/chapter/10.1007/978-981-10-7245-1_40"+"> Link to Research Paper</a></span></p>";
    row.appendChild(downloadPdf);
    container.appendChild(row);

    var hori = document.createElement('hr');
    hori.setAttribute('class','bg-danger');
    container.appendChild(hori);

    
    return container;
}
function getAwardDetails(params) {
    var container = document.createElement('div');
    container.setAttribute('class','container text-center');
    
    var row = document.createElement('div');
    row.setAttribute('class','row mt-5');
    container.append(row);
    
    var about = document.createElement('div');
    about.setAttribute('class','col-sm-4 text-center');
    about.innerHTML = "<h3>AWARDS & CERTIFICATIONS</h3>";
    row.appendChild(about);
    
    var aboutInfo = document.createElement('div');
    aboutInfo.setAttribute('class','col-sm-4 text-left');
    aboutInfo.innerHTML = "<p> Microsoft Azure Cloud AI Certified Associate 2019. </p><p> Oracle Cloud Application Integration Associate 2019.</p> <p> Pursuing knowledge in AWS Cloud for developer and Architecture complete in July. </p><p> Microsoft Azure Cloud Data Engineer Associate 2021. </p>";
    row.appendChild(aboutInfo);
    
    var downloadPdf = document.createElement('div');
    downloadPdf.setAttribute('class','col-sm-4 text-center');
    let path = "#";
    downloadPdf.innerHTML = "<a href="+path+">Path</a></span></p>";
    row.appendChild(downloadPdf);
    container.appendChild(row);
    
    var hori = document.createElement('hr');
    hori.setAttribute('class','bg-danger');
    container.appendChild(hori);
     
    
    return container;
}
function createFooter(params) {
    var container = document.createElement('div');
    container.setAttribute('class','container-fluid text-center p-2 footer');

    var row = document.createElement('div');
    row.setAttribute('class','row');
    container.append(row);

    var col1 = document.createElement('div');
    col1.setAttribute('class','col-sm-12');
    col1.innerHTML ="<h6>All Rights Reserved | Copyright &copy Ajinkya Algonda </h6>";

    row.appendChild(col1);
    container.appendChild(row);

    return container;
}