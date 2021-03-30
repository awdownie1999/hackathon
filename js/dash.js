function receive(problems, actualUser){
    let allCardDiv = document.querySelector('#all-cards');
    let headerDiv = document.querySelector('#header');
    

    problems.forEach(function (problem) {
                    
        let card = document.createElement('div');
        let cardBody = document.createElement('div');
        let title = document.createElement('h3');
        let cardText = document.createElement('p');
        let cardHelpBtn = document.createElement('button');

        card.setAttribute('class', 'card');
        cardBody.setAttribute('class', 'card-body');
        title.setAttribute('class', 'card-title');
        cardText.setAttribute('class', 'card-text');
        cardText.setAttribute('class', 'btn btn-primary');

        title.innerHTML = problem.title;
        title.innerHTML = problem.cardtext; 

        if(actualUser.type == 'therapist'){
            allCardDiv.appendChild(card);
            allCardDiv.appendChild(cardBody);
            allCardDiv.appendChild(title);
            allCardDiv.appendChild(cardText);
            allCardDiv.appendChild(cardHelpBtn);
        }else{
            let newProblem = document.createElement('button');
            newProblem.appendChild(headerDiv);

            if(problem.userId == actualUser.id){
                allCardDiv.appendChild(card);
                allCardDiv.appendChild(cardBody);
                allCardDiv.appendChild(title);
                allCardDiv.appendChild(cardText);
            }
        }
    });
}
