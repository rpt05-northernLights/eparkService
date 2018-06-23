//Middleware
const axios = require('axios');

// ** Routes **
// A. POST forecasted_score to Cases Objects
// B. GET the created_at and resolved_at dates from Cases Object
// C. GET the sentiment_score from the Message Object

// A :
// Recieve a get request from the cases Object
// The get will trigger multiple functions to gather information to feed into the ML model
// 1. GET the sentiment_score of the messages tied to a case_id
// 2. GET the created_at and resolved_at

const getDates = function(caseId) {
  axios.get('/getDates', {caseId: caseId})
  .then(function(response){
    return dateDiff(response.createdAt, response.resolvedAt);
  });
};

const getSentimentScore = function(caseId) {
  axios.get('/getSentimentScore', {caseId: caseId})
  .then(function(response){
    return response.sentimentScore;
  });
};

const getForecastedScore = function(caseId) {
  let dateDiff = getDates();
  let sentimentScore = getSentimentScore();
  axios.get('/', {dateDiff: dateDiff, sentimentScore: sentimentScore})
  .then(function(response){
    return response;
  });
}
