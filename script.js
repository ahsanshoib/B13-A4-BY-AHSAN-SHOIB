var currentTab = "all";

var jobs = [
{id:1,status:"all",companyName:"University of Dhaka",position:"Logical Activist",location:"Dhaka",type:"Remote",salary:"৳25,000",description:"Preventing SHAHBAAGI by using hyper logic."},

{id:2,status:"all",companyName:"University of Chittagong",position:"Snack Hunter",location:"Chittagong",type:"Full-time",salary:"৳26,000",description:"Catching Snack(Ex) from Pookie Faculty."},

{id:3,status:"all",companyName:"University of Rajshahi",position:"Mango Smuggler",location:"Rajshahi",type:"Part-time",salary:"৳27,000",description:"Smuggling Mango by 2.00AM route of 'BONOLOTA EXPRESS'. "},

{id:4,status:"all",companyName:"Jahangirnagar University",position:"Narcotics Inspector",location:"Savar",type:"Full-time",salary:"৳28,000",description:"Punishing Weed Sellers from Fine-Arts Department."},

{id:5,status:"all",companyName:"North South University",position:"Flashmob Cinematographer ",location:"Dhaka",type:"Full-time",salary:"৳29,000",description:"Capturing Random 'SENIOR APU's Moment while performing 'BOSHONTO UTSHOB DANCE'."},

{id:6,status:"all",companyName:"Daffodil International University",position:"Convocation Organizer",location:"Dhaka",type:"Part-time",salary:"৳32,000",description:"Organizing 13 Convocation in 12 months."},

{id:7,status:"all",companyName:"Independent University Bangladesh",position:"Reels Reactor",location:"Dhaka",type:"Remote",salary:"৳31,000",description:"Rating and Reacting student's reel for no reason."},

{id:8,status:"all",companyName:"BRAC University",position:"Cash Bucket Seller",location:"Dhaka",type:"Part-time",salary:"৳32,000",description:"Selling Buckets to the Students, So that they can carry their semester fees."}
];

const jobContainer = document.getElementById("jobContainer");

function renderJobs(){

jobContainer.innerHTML="";

const filtered = jobs.filter
(function(job){
  if(currentTab === "all")
    {return true;} 
  else 
    {return job.status === currentTab;}
});

document.getElementById("ttCount").innerText = jobs.length;
document.getElementById("ivCount").innerText = jobs.filter
(function(j){ return j.status==="interview"}).length;
document.getElementById("rjCount").innerText = jobs.filter(function(j){ return j.status==="rejected"}).length;

if(filtered.length === 0)
{jobContainer.innerHTML=
`<div class="bg-white p-10 rounded-xl text-center">
<p class="text-6xl">📝</p>
<h2 class="text-xl font-semibold mt-2">No Jobs Available</h2>
<p class="text-gray-500">Check back soon for new job opportunities</p></div>`;
document.getElementById("tabCount").innerText =
"0 of " + jobs.length + " jobs";
return;}

document.getElementById("tabCount").innerText =
filtered.length + " of " + jobs.length + " jobs";

filtered.forEach(function(job){

const div = document.createElement("div");
div.className="bg-white p-5 rounded-xl relative";

div.innerHTML=
`<div class="flex justify-between">

<div>
<h3 class="font-bold text-lg">${job.companyName}</h3>
<p class="text-gray-600">${job.position}</p>

<p class="text-sm text-gray-600">

${job.location} • ${job.type} • ${job.salary}

</p>
</div>

<button onclick="deleteJob(${job.id})"
class="hover:text-red-500 text-gray-400">🗑</button>
</div>

${job.status === "interview" ? `
<div class="my-3">
<span class="border border-green-500 bg-green-50 text-green-600 px-4 py-1 rounded-md">
Interview
</span>
</div>`:""}

${job.status === "rejected" ? `
<div class="my-3">
<span class="border border-red-500 bg-red-50 text-red-600 px-4 py-1 rounded-md">
Rejected
</span>
</div>`:""}

<p class="text-gray-600 mt-2">

${job.description}</p>

<div class="mt-4 flex flex-col md:flex-row gap-3">

<button onclick="setStatus(${job.id},'interview')"
class="border border-green-500 text-green-600 px-3 py-1 rounded-md hover:bg-green-500 hover:text-white transition">
Interview
</button>

<button onclick="setStatus(${job.id},'rejected')"
class="border border-red-500 text-red-600 px-3 py-1 
rounded-md hover:bg-red-500 hover:text-white transition">
Rejected
</button>

</div>`;

jobContainer.appendChild(div);

});}

function setStatus(id,status)
{const job = jobs.find(function(j){ return j.id===id });
job.status=status;
renderJobs();}

function deleteJob(id)
{const index = jobs.findIndex(function(j){ return j.id===id });
jobs.splice(index,1);
renderJobs();}

document.querySelectorAll(".tab").forEach(function(btn){
btn.addEventListener("click",function()

{currentTab=this.dataset.tab;

document.querySelectorAll(".tab")
.forEach(function(b){
    
b.classList.remove("bg-blue-600","text-white");
b.classList.add("bg-gray-200");});

this.classList.add("bg-blue-600","text-white");

renderJobs();
});
});

renderJobs();