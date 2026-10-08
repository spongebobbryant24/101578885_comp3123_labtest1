const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject(new Error("Input must be an array."));
            return;
        }

        const words = mixedArray
        .filter((item) => typeof item === "string")
        .map((word) => word.toLowerCase());

        resolve(words);
    });
};
const mixedArray = ["Pizza", 10, true, 25, false, "Wings"];

lowerCaseWords(mixedArray)
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error.message);
});