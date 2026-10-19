function getCandidateStatus(score, isPrepared){
    if(score>=50 && isPrepared){
        return "Ready for interview"
    }else if(score>=25){
        return "Making good Progress"
    }else{
        return "Need imporvement";
    }
}

module.exports = {getCandidateStatus};