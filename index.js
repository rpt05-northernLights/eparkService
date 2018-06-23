const brain = require('brain.js');
import { dataTransformation } from './dataTransformationFunctions'
import { trainingData, trainingScores } from './trainingSet'
var net = new brain.NeuralNetwork();

let data = dataTransformation(trainingData, trainingScores);

net.train(data);

var output = net.run({"time_to_resolved":40, "sentiment_score":0.1});
console.log(output);
