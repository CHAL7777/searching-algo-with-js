const binary=function(num,key){
    let left=0;
    let right=num.length-1;

    while(right>=left){
        let mid=Math.floor((left+right)/2);
        

        if(num[mid]==key){
            return mid;
        }
        else if(num[mid]>key){
           right=mid-1;
        }
        else{
            left=mid+1;
        }
    }
    
return -1;
}

const arr=[3, 7,12,14,15,20,32];
const key =15;
const result=binary(arr,key);
result