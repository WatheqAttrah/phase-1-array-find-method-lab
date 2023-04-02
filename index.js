// code your solution here


function superbowlWin(record){
    for(let item of record){
        if(item.result==="W"){
            return item.year;
        }
    }
}        
record.find(superbowlWin);