document.addEventListener('DOMContentLoaded', () => {
        // STAR RATING SYSTEM
        const ratings = document.querySelectorAll('.rating');
    
        ratings.forEach(rating => {
            const stars = rating.querySelectorAll('.star');
        
            stars.forEach((star, index) => {
                star.addEventListener('click', () => {
                    const radio = star.previousElementSibling;
                    radio.checked = true;
                
                    stars.forEach((s, i) => {
                        if (i <= index) {
                            s.classList.add('selected');
                        } else {
                            s.classList.remove('selected');
                        }
                    });
                });

                star.addEventListener('mouseover', () => {
                    stars.forEach((s, i) => {
                        if (i <= index) {
                            s.classList.add('hover');
                        } else {
                            s.classList.remove('hover');
                        }
                    });
                });

                star.addEventListener('mouseout', () => {
                    stars.forEach(s => {
                        if (!s.previousElementSibling.checked) {
                            s.classList.remove('hover');

                        }
                    });
                });
            });
        });

// SHOW ONE QUESTION AT A TIME
const questions = document.querySelectorAll('.question');
let currentQuestionIndex = 0;

function showQuestion(index) {
    questions.forEach((q, i) => {
        q.style.display = i === index ? 'block' : 'none';
    });
    updateProgressBar(index);
}

function updateProgressBar(index) {
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const progress = ((index + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${Math.round(progress)}%`;
}

document.querySelectorAll('.next-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const currentQuestion = questions[currentQuestionIndex];
        const selectedRating = currentQuestion.querySelector('input[type="radio"]:checked');

        if (selectedRating) {
            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                showQuestion(currentQuestionIndex);
            }
        } else {
            alert('Please rate the current question before proceeding.');
        }
    });
});

 showQuestion(currentQuestionIndex);


    document.getElementById('surveyForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form from submitting

        let scores = {
            "Mystery": 0,
            "Fantasy": 0,
            "Humor": 0,
            "Adventure": 0,
            "Historical Fiction": 0,
            "Science Fiction": 0,
            "Realistic Fiction": 0,
            "Non-Fiction": 0,
            "Scary": 0,
            "Sports": 0,
            // Add other genres here
        };
        let formData = new FormData(e.target);

        // Calculate scores based on the ratings
        formData.forEach((value, key) => {
            let genre;
            switch (key) {
                case 'q1': genre = "Mystery"; break;
                case 'q2': genre = "Fantasy"; break;
                case 'q3': genre = "Humor"; break;
                case 'q4': genre = "Adventure"; break;
                case 'q5': genre = "Historical Fiction"; break;
                case 'q6': genre = "Science Fiction"; break;
                case 'q7': genre = "Realistic Fiction"; break;
                case 'q8': genre = "Non-Fiction"; break;
                case 'q9': genre = "Scary"; break;
                case 'q10': genre = "Sports"; break;
                case 'q11': genre = "Mystery"; break;
                case 'q12': genre = "Fantasy"; break;
                case 'q13': genre = "Humor"; break;
                case 'q14': genre = "Adventure"; break;
                case 'q15': genre = "Historical Fiction"; break;
                case 'q16': genre = "Science Fiction"; break;
                case 'q17': genre = "Realistic Fiction"; break;
                case 'q18': genre = "Non-Fiction"; break;
                case 'q19': genre = "Scary"; break;
                case 'q20': genre = "Sports"; break;
                case 'q21': genre = "Mystery"; break;
                case 'q22': genre = "Fantasy"; break;
                case 'q23': genre = "Humor"; break;
                case 'q24': genre = "Adventure"; break;
                case 'q25': genre = "Historical Fiction"; break;
                case 'q26': genre = "Science Fiction"; break;
                case 'q27': genre = "Realistic Fiction"; break;
                case 'q28': genre = "Non-Fiction"; break;
                case 'q29': genre = "Scary"; break;
                case 'q30': genre = "Sports"; break;
                // Add other question-to-genre mappings here
            }
            if (genre) {
                scores[genre] += parseInt(value);
            }
        });

        //Calculate total score
        let totalScore = Object.values(scores).reduce((acc, score) => acc + score, 0);

        //Convert scores to percentages
        let percentageScores = Object.entries(scores).map(([genre, score]) => {
            let percentage = Math.round((score / 15) *100); //Calculate percentage and round to 2 decimal places
            return { genre, percentage };
        })

        // Sort and display the top genres
        let sortedGenres = percentageScores.sort((a, b) => b.percentage - a.percentage);
        localStorage.setItem('surveyResults', JSON.stringify(sortedGenres));

        // Navigate to Results.html
        location.href = 'Results.html';
        });
    });
