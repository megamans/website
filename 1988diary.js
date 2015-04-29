var page = 1;
var backButton = document.getElementById("element1");
var forwardButton = document.getElementById("element2");
var mainPage = document.getElementById("mainPage");
var pages = ["PAGE 0","<p id='page1'>September 10, 1984,<br><br>I guess I could consider this another “stereotypical” diary that translates my fondest memories, thoughts, and feelings onto a piece of paper. It’s my first day and I know that everything written in here will be another saved memory for the future. for starters, I would like to discuss the moment I got this diary.<br><br>I started off by going down to my local pastry shop, I had ordered my usual dry biscuit and dark black coffee. I sat by the old swingset outside of the shop I’ve been going to for the past 9 years.  There was a blue jay chirping away on a tree across the road.  Even with all of the elderly people and sweet neighbors in our community, it seems like crime is a rising concern....<p>",
//page 2
"<p id='page1'>December 22, 1984<br><br>We were robbed today. They left our apartment a complete mess, there are books and broken glass shattered across the floor. He even took our frame from me and my husband’s wedding picture. Later today my husband had gone to the store and bought us a safe. It turns out it fits perfectly in our closets and still leaves lots of room for all of my clothes. I had made my password a fairly recent and memorable year. <p>",
//page 3
"<p id='page1'>July 4, 1985<br><br>I went out with one of my girlfriends last night… We were all supposed to go out and and watch the fireworks. My husband completely ruined it, he never went came with us and did not respond to any of my calls. It is almost like he tries hiding from all of my friends and family. <p>",
//page 4
"<p id='page1'>June 16, 1986<br><br>People have been asking me to visit a doctor about my “unsafe mental health”. People are talking about me and my husband’s relationship. They keep telling me its dangerous and unhealthy. I am right now confused and I don’t understand why they keep telling me that. <p>",
//page 5
"<p id='page1'>May 12, 1988<br><br>My husband, Noah, has died today. I don’t know what to do anymore. He was my life, it was almost like he was a part of me in a physical and mental manner. It has been really hard for me, I have quit my job and tried to organize his funeral.<p>",
//page 6
"<p id='page1'>June 15, 1988<br><br>None of my friends decided to come to the funeral. I was the only one there, but in spirit I know he is watching over me.<p>",
//page 7
"<p id='page1'>August 19, 1995<br><br>It’s been a long time since I have opened this diary, but I feel like it is important to let people know that I have cancer. I won’t be living for much longer and I feel like I have lived an unfilled life. I never had any good friends and for the past 7 years I have lived alone every day thinking about what is wrong with me and no one will help me. I dont live in my nice apartment, instead I sleep in the alley ways… It is not as bad as you might think. At least it wasn’t as bad as it was since my cancer came. <p>",
//page 8
"<p id='page1'>October 19, 1995<br><br>This will be the last time I open this diary. I have looked at all of my great memories and can see how my life has changed. Its an odd feeling, perhaps the last feeling I will ever feel. I don’t have much longer to live and I know I have done much wrong in my life but at the same time I am proud for living my entire regardless of all the hardships I have had.<p>"];
updateButtons();
backButton.addEventListener("click", function() {back();});
forwardButton.addEventListener("click", function() {forward();});

function back(){
    if(page>1){
    page--;
    updateButtons();
    }
}
function forward(){
    page++;
    updateButtons();
}

function updateButtons(){
    backButton.innerHTML="page "+(page-1);
    forwardButton.innerHTML="page "+(page+1);
    mainPage.innerHTML=pages[page];
    
}