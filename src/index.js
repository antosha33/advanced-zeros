module.exports = function getZerosCount(number, base) {
        var resultObj = {};
        var potentialResult = [];
        var  primesOfFactors = [];
        var baseFactor = [];
        nextPrime:
        for(var i = 2; i<=base; i++){
            for(var j = 2; j<i; j++){
                if(i%j==0) continue nextPrime
            }
            primesOfFactors.push(i);
        }
        for(i = 0; i < primesOfFactors.length; i++){
            while(base%primesOfFactors[i] == 0){
                baseFactor.push(primesOfFactors[i]);
                base /= primesOfFactors[i]  
            }
        }
        for(i = 0; i < baseFactor.length; i++){
            var currentBaseFactorSQRT = baseFactor[i];
            var result = 0;
            do{              
                result +=Math.floor(number/currentBaseFactorSQRT);
                currentBaseFactorSQRT *=baseFactor[i];
            }while(currentBaseFactorSQRT < number);
            potentialResult.push(result);
        }

            while(potentialResult.length>0){
                var count = 1;
                for(j = 1; j < potentialResult.length; j++ ){
                    if(potentialResult[0]==potentialResult[j]){
                        count+=1;
                    }
                }
                resultObj[potentialResult[0]] = count;
                potentialResult.splice(0,count);
            }
            for( var key in resultObj){
                if(resultObj[key]){
                    potentialResult.push(Math.floor(+key/resultObj[key]));
                }
            }
            potentialResult.sort(function(a,b){
                return a-b;
            });
            return potentialResult[0];
    }
