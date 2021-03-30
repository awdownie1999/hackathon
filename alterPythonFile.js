let users;
let problems;
async function getJsonData() {
    let res = await axios.get('http://localhost:5000');
    console.log(res.data)
    users = JSON.parse(res.data.users);
    problems = JSON.parse(res.data.problems);
    console.log(users[0]);
}

async function createCards() {
    let allCardDiv = document.querySelector('#all-cards');
    let headerDiv = document.querySelector('#header');
    user = users[0];   

    let loop = 0;
    problems.forEach(function (problem) {
        loop += 1;            
        let card = document.createElement('div');
        let cardBody = document.createElement('div');
        let title = document.createElement('h3');
        let cardText = document.createElement('p');
        let cc = document.createElement('button');

        card.setAttribute('class', 'card');
        cardBody.setAttribute('class', 'card-body');
        title.setAttribute('class', 'card-title');
        cardText.setAttribute('class', 'card-text');
        cardHelpBtn.setAttribute('class', 'btn btn-primary');

        title.innerHTML = problem.title;
        title.innerHTML = problem.cardtext; 

        if(user.type == 'therapist'){
            allCardDiv.appendChild(card);
            allCardDiv.appendChild(cardBody);
            allCardDiv.appendChild(title);
            allCardDiv.appendChild(cardText);
            allCardDiv.appendChild(cardHelpBtn);
        }else{
            let newProblem = document.createElement('button');
            if(loop == 1){
                newProblem.appendChild(headerDiv);
            }

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