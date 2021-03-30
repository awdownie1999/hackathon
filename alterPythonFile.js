let users;
let problems;
async function getJsonData() {
    let res = await axios.get('http://localhost:5000');
    //console.log(res.data)
    users = JSON.parse(res.data.users);
    console.log(users);
    problems = JSON.parse(res.data.problems);
    console.log(users[0]);
}

async function createCards() {
    let allCardDiv = document.querySelector('#all-cards');
    let headerDiv = document.querySelector('#header');
    user = users[4];   


    problems.forEach(function (problem) {
        console.log('problems ', problem)    

        let card = document.createElement('div');
        let cardBody = document.createElement('div');
        let title = document.createElement('h3');
        let cardText = document.createElement('p');
        let cardHelpBtn = document.createElement('button');

        card.setAttribute('class', 'card');
        cardBody.setAttribute('class', 'card-body');
        title.setAttribute('class', 'card-title');
        cardHelpBtn.setAttribute('class', 'btn btn-primary');

        title.innerHTML = user.name
        cardText.innerHTML = problem.problem;
        cardHelpBtn.innerHTML = "Help " + user.name 

        if(user.type == 'therapist'){
            allCardDiv.appendChild(card);
            allCardDiv.appendChild(cardBody);
            allCardDiv.appendChild(title);
            allCardDiv.appendChild(cardText);
            allCardDiv.appendChild(cardHelpBtn);
        }else{
            let newProblem = document.createElement('button');
            newProblem.appendChild(headerDiv);

            if(problem.userId == user.id){
                allCardDiv.appendChild(card);
                allCardDiv.appendChild(cardBody);
                allCardDiv.appendChild(title);
                allCardDiv.appendChild(cardText);
            }
        }
    });
}

getJsonData();

setTimeout(() => {
    createCards();
}, 1000);
