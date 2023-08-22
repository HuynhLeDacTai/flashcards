export const parseDataQuestion = () => {
  var parsedJSON = require("./toeic_test.json");
  const jsonArray = Object.values(parsedJSON);

  let transformedArray = jsonArray.map((item) => ({
    choice_1: item["1"],
    choice_2: item["2"],
    choice_3: item["3"],
    choice_4: item["4"],
    answer: item["answer"],
    content: item["question"],
  }));

  return transformedArray.slice(1, 1000);
};
