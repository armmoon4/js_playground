function calculateFinalScore(obj) {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
        return "Invalid Input";
    }

    let name = obj.name;
    let testScore = obj.testScore;
    let schoolGrade = obj.schoolGrade;
    let isFFamily = obj.isFFamily;

    if (typeof name !== "string" || typeof testScore !== "number" || typeof schoolGrade !== "number" || typeof isFFamily !== "boolean") {
        return "Invalid Input";
    }

    if (testScore > 50 || schoolGrade > 30) {
        return "Invalid Input";
    }

    let total = testScore + schoolGrade;
    if (isFFamily) {
        total += 20;
    }

    return total >= 80;
}

console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }));