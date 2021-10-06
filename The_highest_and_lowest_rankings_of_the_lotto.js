function solution(lottos, win_nums) {
    let answer = [];
    let zeroCount = 0;
    let sameNumberCount = 0;
    //let sumCount = 0;
    
    for (let index in lottos){
        if(lottos[index]==0){
            zeroCount++;
        }
    }
    
    
    sameNumberCount = lottos.filter(i => win_nums.includes(i)).length;
    //sumCount = zeroCount + sameNumberCount;
    
    answer.push(getRank(zeroCount + sameNumberCount));
    answer.push(getRank(sameNumberCount));
    
    return answer;
}

function getRank(count){
    switch(count){
        case 6 : 
            return 1;
            break;
        case 5 : 
            return 2;
            break;
        case 4 : 
            return 3;
            break;
        case 3 : 
            return 4;
            break;
        case 2 : 
            return 5;
            break;
        default : 
            return 6;
    }          

}