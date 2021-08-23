const getRequiredDataFromQuiz = (quiz) => {
  delete quiz._id;
  delete quiz.__v;
  delete quiz.createdAt;
  delete quiz.updatedAt;
  return { ...quiz };
};

module.exports = { getRequiredDataFromQuiz };
