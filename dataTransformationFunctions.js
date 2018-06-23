import { dateDiff } from './helperFunctions';

//dataTransformation function massages the input object for ML training
// SAMPLE DATA: [
//   {input: {"time_to_resolved":5,"sentiment_score":0.6}, output: {"given_score":62}},
//   {input: {"time_to_resolved":4,"sentiment_score":0.8}, output: {"given_score":-34}},
//   {input: {"time_to_resolved":3,"sentiment_score":0.1}, output: {"given_score":-50}}
// ]


export function dataTransformation(input, output) {
  let transformedData = [];

  // Iterate through each object in the array
  for(var i = 0; i < input.length; i++) {
    // Declare a temp variable called record within the for loop
    let record = {};
    let dateDifference = dateDiff(input[i].created_at, input[i].resolved_at);
    // INPUTS :
    // Calculate the time_to_resolved using input[i].created_at and input[i].resolved_at;
    record.input = {"time_to_resolved" :  dateDifference, "sentimentScore" : input[i].sentiment_score};
    // Set record.time_to_resolved to the returned outcome
    // OUTPUTs :
    // Set record.output to output[i];
    record.output = output[i];
    transformedData.push(record);
  }
  return transformedData;
}
