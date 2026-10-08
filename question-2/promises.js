const  resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ messsage: "delayed success!" });
        }, 500);
    });
};
const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({ error:"delayed error!"});
        }, 500);
    });
}
resolvedPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

rejectedPromise()
    .then((result) => {
    console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
    
