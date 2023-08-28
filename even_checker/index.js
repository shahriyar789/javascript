
const EvenChecker=(arr)=>{
    try {
        arr.forEach(element => {
            if(!(element%2===0))
            throw Error('not even array')
        });
        console.log('Even array');
    } catch (error) {
        console.log(error);
    }
    finally{
        arr.splice(0,arr.length);
        console.log(arr);
    }
}

let a=[2,4,6,8,10];
EvenChecker(a)