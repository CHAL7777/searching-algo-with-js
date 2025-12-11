const linear=function(num,key){
    for(let i=0;i<=num.length;i++){
        if(num[i]===key){
            return i+1;
        }
    }
    return -1;

}


const arr=[12,3,7,6,54,22];
const key=54;
const result=linear(arr,key);
result