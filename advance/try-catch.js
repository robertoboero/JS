const getTip = (amount) => {
  if (typeof amount === "number") {
    return amount * 0.25;
  } else {
    throw Error("Invalid amount");
  }
};

try {
  const result = getTip(10);

  console.log(result);
} catch (err) {
  console.log("Error" + err);
}

const gradeCalc = function (score, totalScore) {
  if (typeof score !== "number" || typeof totalScore !== "number") {
    throw Error("Invalid score format");
  }
  if (score >= totalScore) {
    throw Error("Score is out of range");
  }
  const percent = (score / totalScore) * 100;
  let letterGrade = "";

  if (percent >= 90) {
    letterGrade = "A";
  } else if (percent >= 80) {
    letterGrade = "B";
  } else if (percent >= 70) {
    letterGrade = "C";
  } else if (percent >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  return `You got a ${letterGrade} (${percent}%)!`;
};

try {
  const result = gradeCalc(90, 10);
  console.log(result);
} catch (err) {
  console.error(err);
}
