// Museum data with images
const museums = [
    {
        id: 1,
        name: "The Broadway Museum",
        category: "Theater",
        description: "Explore the history of Broadway theater with costumes, props, and memorabilia from iconic shows.",
        image: "images/broadway-museum.jpg"
    },
    {
        id: 2,
        name: "Museum of the Moving Image",
        category: "Theater & Film",
        description: "Behind the scenes of film, television, and digital media with interactive exhibits.",
        image: "images/moving-image.jpg"
    },
    {
        id: 3,
        name: "The Metropolitan Museum of Art",
        category: "Art",
        description: "One of the world's largest art museums featuring over 5,000 years of art.",
        image: "images/met-museum.jpg"
    },
    {
        id: 4,
        name: "American Museum of Natural History",
        category: "Science",
        description: "Famous natural history museum with dinosaur fossils, space exhibits, and more.",
        image: "images/natural-history.jpg"
    },
    {
        id: 5,
        name: "Museum of Modern Art (MoMA)",
        category: "Art",
        description: "Modern and contemporary art including works by Van Gogh, Warhol, and Picasso.",
        image: "images/moma.jpg"
    },
    {
        id: 6,
        name: "Lincoln Center Theater Collection",
        category: "Theater",
        description: "Special collection at Lincoln Center showcasing theatrical history and performances.",
        image: "images/lincoln-center.jpg"
    },
    {
        id: 7,
        name: "Intrepid Sea, Air & Space Museum",
        category: "History",
        description: "Historic aircraft carrier museum featuring space shuttle Enterprise and submarines.",
        image: "images/intrepid.jpg"
    },
    {
        id: 8,
        name: "9/11 Memorial & Museum",
        category: "History",
        description: "Powerful tribute to the victims of September 11 with artifacts and personal stories.",
        image: "images/911-memorial.jpg"
    },
    {
        id: 9,
        name: "The Frick Collection",
        category: "Art",
        description: "Beautiful mansion museum with Old Master paintings and decorative arts.",
        image: "images/frick.jpg"
    },
    {
        id: 10,
        name: "New York Hall of Science",
        category: "Science",
        description: "Interactive science museum with hands-on exhibits perfect for groups.",
        image: "images/hall-of-science.jpg"
    }
];

// Vote tracking
let votes = JSON.parse(localStorage.getItem('museumVotes')) || {};
let hasVoted = localStorage.getItem('hasVoted') === 'true';
let userVote = localStorage.getItem('userVote');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayMuseums();
    displayResults();
    checkVoteStatus();
});

function displayMuseums() {
    const museumGrid = document.getElementById('museum-grid');
    
    museums.forEach(museum => {
        const card = document.createElement('div');
        card.className = 'museum-card';
        if (hasVoted) {
            card.classList.add('voted');
        }
        
        card.innerHTML = `
            <img src="${museum.image}" alt="${museum.name}" onerror="this.src='images/placeholder.jpg'">
            <div class="museum-info">
                <h3>${museum.name}</h3>
                <span class="category">${museum.category}</span>
                <p>${museum.description}</p>
                <button class="vote-button" onclick="vote(${museum.id})" ${hasVoted ? 'disabled' : ''}>
                    ${hasVoted ? (userVote == museum.id ? 'Your Vote!' : 'Vote Cast') : 'Vote for This Museum'}
                </button>
            </div>
        `;
        
        museumGrid.appendChild(card);
    });
}

function vote(museumId) {
    if (hasVoted) {
        alert('You have already voted!');
        return;
    }
    
    // Record the vote
    votes[museumId] = (votes[museumId] || 0) + 1;
    
    // Save to localStorage
    localStorage.setItem('museumVotes', JSON.stringify(votes));
    localStorage.setItem('hasVoted', 'true');
    localStorage.setItem('userVote', museumId);
    
    // Log the vote to console (in a real app, this would be sent to a server)
    logVote(museumId);
    
    // Update page state
    hasVoted = true;
    userVote = museumId;
    
    // Update UI
    const voteStatus = document.getElementById('vote-status');
    const museum = museums.find(m => m.id === museumId);
    voteStatus.textContent = `Thank you! Your vote for "${museum.name}" has been recorded.`;
    voteStatus.classList.remove('hidden');
    
    // Disable all vote buttons and update their text
    document.querySelectorAll('.vote-button').forEach((button, index) => {
        button.disabled = true;
        if (index === museumId - 1) {
            button.textContent = 'Your Vote!';
        } else {
            button.textContent = 'Vote Cast';
        }
    });
    
    document.querySelectorAll('.museum-card').forEach(card => {
        card.classList.add('voted');
    });
    
    // Update results
    displayResults();
}

function logVote(museumId) {
    const museum = museums.find(m => m.id === museumId);
    const timestamp = new Date().toISOString();
    const logEntry = {
        timestamp: timestamp,
        museumId: museumId,
        museumName: museum.name,
        voter: 'Anonymous', // In production, you'd track actual user IDs
        sessionId: getSessionId()
    };
    
    // Log to console (in production, this would be sent to a server/database)
    console.log('VOTE LOGGED:', logEntry);
    
    // Also save to localStorage for demo purposes
    let voteLogs = JSON.parse(localStorage.getItem('voteLogs')) || [];
    voteLogs.push(logEntry);
    localStorage.setItem('voteLogs', JSON.stringify(voteLogs));
}

function getSessionId() {
    let sessionId = localStorage.getItem('sessionId');
    if (!sessionId) {
        sessionId = 'session_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
        localStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
}

function displayResults() {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    
    // Calculate total votes
    const totalVotes = Object.values(votes).reduce((sum, count) => sum + count, 0);
    
    if (totalVotes === 0) {
        resultsDiv.innerHTML = '<p style="text-align: center; color: #999;">No votes yet. Be the first to vote!</p>';
        return;
    }
    
    // Create result items sorted by vote count
    const sortedMuseums = museums
        .map(museum => ({
            ...museum,
            voteCount: votes[museum.id] || 0
        }))
        .sort((a, b) => b.voteCount - a.voteCount);
    
    sortedMuseums.forEach(museum => {
        const percentage = totalVotes > 0 ? (museum.voteCount / totalVotes * 100).toFixed(1) : 0;
        
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.innerHTML = `
            <div class="museum-name">${museum.name}</div>
            <div class="bar-container">
                <div class="bar" style="width: ${percentage}%">
                    ${museum.voteCount} vote${museum.voteCount !== 1 ? 's' : ''} (${percentage}%)
                </div>
            </div>
        `;
        resultsDiv.appendChild(resultItem);
    });
}

function checkVoteStatus() {
    if (hasVoted) {
        const voteStatus = document.getElementById('vote-status');
        const museum = museums.find(m => m.id == userVote);
        if (museum) {
            voteStatus.textContent = `You have already voted for "${museum.name}". Thank you for participating!`;
            voteStatus.classList.remove('hidden');
            voteStatus.classList.add('already-voted');
        }
    }
}

// Export vote logs function (for debugging/admin purposes)
function exportVoteLogs() {
    const logs = localStorage.getItem('voteLogs');
    if (logs) {
        console.log('All Vote Logs:');
        console.log(JSON.parse(logs));
        return JSON.parse(logs);
    } else {
        console.log('No votes logged yet.');
        return [];
    }
}

// Make it available globally for console access
window.exportVoteLogs = exportVoteLogs;
