let users;
let problems;
async function getJsonData() {
    let res = await axios.get('http://localhost:5000');
    //console.log(res.data)
    users = JSON.parse(res.data.users);
    console.log(users);
    problems = JSON.parse(res.data.problems);
    //console.log(users[0]);
}

async function createCards() {
    let allCardDiv = document.querySelector('#all-cards');
    let headerDiv = document.querySelector('#header');
    let loop = 0;

    problems.forEach(function (problem) {
        let username;
        let usertype;
        let userID; 
        console.log('problems ', problem)    
        
        users.forEach(function (user) {
            if(problem.uid == user.uid){
                console.log('User Id', user.uid)
                userID = user.id
                username = user.name
                usertype = user.type
            }
        })

        let card = document.createElement('div');
        let cardBody = document.createElement('div');
        let title = document.createElement('h3');
        let cardText = document.createElement('p');
        let cardHelpBtn = document.createElement('button');

        card.setAttribute('class', 'card');
        cardBody.setAttribute('class', 'card-body');
        title.setAttribute('class', 'card-title');
        cardHelpBtn.setAttribute('class', 'btn btn-primary');

        title.innerHTML = username
        cardText.innerHTML = problem.problem;
        cardHelpBtn.innerHTML = "Help " + username 

        if(usertype == 'therapist'){
            allCardDiv.appendChild(card);
            allCardDiv.appendChild(cardBody);
            allCardDiv.appendChild(title);
            allCardDiv.appendChild(cardText);
            allCardDiv.appendChild(cardHelpBtn);
        }else{
            //console.log('hfjksb\kjhfdb');
            let newProblem = document.createElement('btn');
            newProblem.appendChild(headerDiv);
            console.log(userID);
            if(problem.uid == userID){
                console.log('testysd');
                allCardDiv.appendChild(card);
                allCardDiv.appendChild(cardBody);
                allCardDiv.appendChild(title);
                allCardDiv.appendChild(cardText);
            }else{
                console.log('test')
                if(loop == 0){
                    allCardDiv.appendChild(card);
                    allCardDiv.appendChild(cardBody);
                    allCardDiv.appendChild(title);
                    title.innerHTML = "Please add a problem";
                }
            }
        }
        loop += 1;
    });
}

getJsonData();

setTimeout(() => {
    createCards();
}, 1000);
