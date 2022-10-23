fetch("./Data.json").then(response=>response.json())
        .then(data=>{
                console.log(data);
                person = data["resume"][0];
                document.getElementById("company_name").innerHTML=person["work"]["Company Name"];
                document.getElementById("position").innerHTML=person["work"]["Position"];
                document.getElementById("start_date").innerHTML=person["work"]["Start Date"];
                document.getElementById("end_date").innerHTML=person["work"]["End Date"];
                document.getElementById("summary").innerHTML=person["work"]["Summary"];
                document.getElementById("name").innerHTML=person["projects"]["name"];
                document.getElementById("project_summary").innerHTML=person["projects"]["description"];
                document.getElementById("UG").innerHTML=person["education"]["UG"]["institute"]+","+person["education"]["UG"]["course"]+","+person["education"]["UG"]["cgpa"]+","+person["education"]["UG"]["Start Date"]+","+person["education"]["UG"]["End Date"];
                document.getElementById("PU").innerHTML=person["education"]["Senior Secondary"]["institute"]+","+person["education"]["Senior Secondary"]["cgpa"];
                document.getElementById("High_school").innerHTML=person["education"]["High School"]["institute"]+","+person["education"]["High School"]["cgpa"];
                document.getElementById("Company_name").innerHTML=person["Internship"]["Company Name"];
                document.getElementById("Position").innerHTML=person["Internship"]["Position"];
                document.getElementById("Start_date").innerHTML=person["Internship"]["Start Date"];
                document.getElementById("End_date").innerHTML=person["Internship"]["End Date"];
                document.getElementById("Summary").innerHTML=person["Internship"]["Summary"];
                document.getElementById("SUMMARY").innerHTML=person["achievements"]["Summary"];
                document.getElementById("main_name").innerHTML=person["basics"]["name"];
                document.getElementById("applied_for").innerHTML=person["basics"]["AppliedFor"];
                document.getElementById('mobile').innerHTML=person["basics"]["phone"];
                document.getElementById('email').innerHTML=person["basics"]["email"];
                document.getElementById('url').innerHTML=person["basics"]["profiles"]["network"];
                document.getElementById('url').href = person["basics"]["profiles"]["url"];
                for(var i=0;i<person["skills"]["keywords"].length;i++){
                        var tag = document.createElement('p');
                        var text = document.createTextNode(person["skills"]["keywords"][i]);
                        tag.appendChild(text);
                        var element = document.getElementById("t_skills");
                        element.appendChild(tag);
                }
                document.getElementById("h1").innerHTML=person["interests"]["hobbies"][0];
                document.getElementById("h2").innerHTML=person["interests"]["hobbies"][1];
                document.getElementById("h3").innerHTML=person["interests"]["hobbies"][2];
        })
document.getElementById("prev_button").style.visibility="hidden";
let count =0;
function make_resume(count){
        console.log("count in make_resume is",count);
        fetch("./Data.json").then(response=>response.json())
        .then(data=>{
                //console.log(data);
                person = data["resume"][count];
                console.log(person);

                document.getElementById("company_name").innerHTML=person["work"]["Company Name"];
                document.getElementById("position").innerHTML=person["work"]["Position"];
                document.getElementById("start_date").innerHTML=person["work"]["Start Date"];
                document.getElementById("end_date").innerHTML=person["work"]["End Date"];
                document.getElementById("summary").innerHTML=person["work"]["Summary"];
                document.getElementById("name").innerHTML=person["projects"]["name"];
                document.getElementById("project_summary").innerHTML=person["projects"]["description"];
                document.getElementById("UG").innerHTML=person["education"]["UG"]["institute"]+","+person["education"]["UG"]["course"]+","+person["education"]["UG"]["cgpa"]+","+person["education"]["UG"]["Start Date"]+","+person["education"]["UG"]["End Date"];
                document.getElementById("PU").innerHTML=person["education"]["Senior Secondary"]["institute"]+","+person["education"]["Senior Secondary"]["cgpa"];
                document.getElementById("High_school").innerHTML=person["education"]["High School"]["institute"]+","+person["education"]["High School"]["cgpa"];
                document.getElementById("Company_name").innerHTML=person["Internship"]["Company Name"];
                document.getElementById("Position").innerHTML=person["Internship"]["Position"];
                document.getElementById("Start_date").innerHTML=person["Internship"]["Start Date"];
                document.getElementById("End_date").innerHTML=person["Internship"]["End Date"];
                document.getElementById("Summary").innerHTML=person["Internship"]["Summary"];
                document.getElementById("SUMMARY").innerHTML=person["achievements"]["Summary"];
                document.getElementById("main_name").innerHTML=person["basics"]["name"];
                document.getElementById("applied_for").innerHTML=person["basics"]["AppliedFor"];
                document.getElementById('mobile').innerHTML=person["basics"]["phone"];
                document.getElementById('email').innerHTML=person["basics"]["email"];
                document.getElementById('url').innerHTML=person["basics"]["profiles"]["network"];
                document.getElementById('url').href = person["basics"]["profiles"]["url"];
                document.getElementById("t_skills").innerHTML = "";
                for(var i=0;i<person["skills"]["keywords"].length;i++){
                        var tag = document.createElement('p');
                        var text = document.createTextNode(person["skills"]["keywords"][i]);
                        tag.appendChild(text);
                        var element = document.getElementById("t_skills");
                        element.appendChild(tag);
                }
                document.getElementById("h1").innerHTML=person["interests"]["hobbies"][0];
                document.getElementById("h2").innerHTML=person["interests"]["hobbies"][1];
                document.getElementById("h3").innerHTML=person["interests"]["hobbies"][2];
        })


}
function foo(){
        console.log("ButtonClicked");
        count+=1;
        make_resume(count)
        if(count>0){
                document.getElementById("prev_button").style.visibility ="visible";
        }
}

function prev_function(){
        count-=1;
        make_resume(count);
}
