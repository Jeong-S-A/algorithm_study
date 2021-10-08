
function solution(new_id) {     // 규칙에 맞지 않는 아이디를 입력했을 때, 입력된 아이디와 유사하면서 
    let answer = '';            // 규칙에 맞는 아이디를 추천해주는 프로그램
    answer = new_id.toLowerCase();
    answer = answer.replace(/[^a-z0-9-_.]/g, "");
    answer = answer.replace(/.+/g, ".");
    answer = answer.replace(/^.|.$/g, "");
    
    if(answer==""){
        answer=="a";
    }
    if(answer.length>=16){
        answer=answer.substring(0, 15).replace(/.$/g, "");
    }
    let i=answer.length;
    while (i<=2){
        answer[i]=answer[i-1];
        i++;
    }
    
    return answer;
}