var getQuize = function () {
    var inplay = true;
    var qindex = 0;
    var score = 0;
    //构建内部实现
    var questions = [{
                    question:"7 x 8",
                    answer:"56"
                    },
                    {
                    question:"12 x 12",
                    answer:"144"
                    },
                    {
                    question:"5 x 6",
                    answer:"30"
                    },
                    {
                    question:"9 x 3",
                    answer:"27"
                    }
                ];

    var getQuestion = function () {
        qindex = between(0, questions.length - 1);
        return questions[qindex].question + qinde;
    };
    
    var checkAnswer = function (userAnswer) {
        if(userAnswer === questions[qindex].answer) {
            return "回答正确";
           
        } else {
            return "回答错误 正确答案是" +  questions[qindex].answer;
            
        }
    };
   
    //构建接口
    return {
        quizeMe: getQuestion,
        submit: checkAnswer
    };

};
//调用函数，返回接口分配给quize变量
var quiz = getQuize();