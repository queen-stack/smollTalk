async function topicSelectionHandler(event) {
    event.preventDefault();
    const selectedTopic = event.target.getAttribute('id');
    if (selectedTopic == "politicsBtn") {
        document.location.replace('/home/conversation/1');
    }
    else if (selectedTopic == "covidBtn") {
        document.location.replace('/home/conversation/2');
    }
    else if (selectedTopic == "sportsBtn") {
        document.location.replace('/home/conversation/3');
    }
    else if (selectedTopic == "financesBtn") {
        document.location.replace('/home/conversation/5');
    }
    else {
        document.location.replace('/home/conversation/4');
    }
}

document.querySelector('#politicsBtn').addEventListener('click', topicSelectionHandler);
document.querySelector('#covidBtn').addEventListener('click', topicSelectionHandler);
document.querySelector('#sportsBtn').addEventListener('click', topicSelectionHandler);
document.querySelector('#financesBtn').addEventListener('click', topicSelectionHandler);
document.querySelector('#craigslistBtn').addEventListener('click', topicSelectionHandler);