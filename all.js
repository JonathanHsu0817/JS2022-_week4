const bmiStateData = {
    overThin:{
      status:"過輕",
      color:"藍色"
    },
    normal:{
      status:"正常",
      color:"紅色"
    },
    overWeight:{
      status:"過重",
      color:"橙色"
    },
    mildFat:{
      status:"輕度肥胖",
      color:"黃色"
    },
    moderateFat:{
      status:"中度肥胖",
      color:"黑色"
    },
    severeFat:{
      status:"重度肥胖",
      color:"綠色"
    }
  };
 
  const bmiHistoryData = [];

  function addData(bmi,state){
    let obj = {};
    obj.bmi=bmi;
    obj.state = state;
    bmiHistoryData.push(obj);
  }

function printBmi(height,weight) {
  const bmi = (weight/Math.pow(2,height/100)).toFixed(2);
  if(bmi<18.5){
    addData(bmi,bmiStateData.overThin)
    console.log(`您的體重${bmiStateData.overThin.status}，健康指數為${bmiStateData.overThin.color}`);
  }else if(bmi<24){
    addData(bmi,bmiStateData.normal)
    console.log(`您的體重${bmiStateData.normal.status}，健康指數為${bmiStateData.normal.color}`);
  }else if(bmi<27){
    addData(bmi,bmiStateData.overWeight)
    console.log(`您的體重${bmiStateData.overWeight.status}，健康指數為${bmiStateData.overWeight.color}`);
  }else if(bmi<30){
    addData(bmi,bmiStateData.mildFat)
    console.log(`您的體重${bmiStateData.mildFat.status}，健康指數為${bmiStateData.mildFat.color}`);
  }else if(bmi<35){
    addData(bmi,bmiStateData.moderateFat)
    console.log(`您的體重${bmiStateData.moderateFat.status}，健康指數為${bmiStateData.moderateFat.color}`);
  }else if(bmi>35){
    addData(bmi,bmiStateData.severeFat)
    console.log(`您的體重${bmiStateData.severeFat.status}，健康指數為${bmiStateData.severeFat.color}`);
  }else{
    console.log(`您的數值輸入錯誤，請重新輸入`);
  }
}

function showHistoryData(){
  console.log(`「您總共計算${bmiHistoryData.length}次 BMI 紀錄，最後一次 BMI 指數為 ${bmiHistoryData[bmiHistoryData.length-1].bmi}，體重${bmiHistoryData[bmiHistoryData.length-1].state.status}！健康指數為${bmiHistoryData[bmiHistoryData.length-1].state.color}！」`);
}

printBmi(178, 20)
printBmi(178, 70) 
printBmi(178, 85)
showHistoryData()
/*第一階段：請寫 printBmi 函式，並印出對應狀態

printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕」
printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常」
printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重」
printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖」
printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖」
printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖」
printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」


第二階段：請程式碼裡加入此變數，並嘗試運用此變數裡的資訊。

printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖，健康指數為黃色」
printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖，健康指數為黑色」
printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖，健康指數為綠色」
printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」


第三階段：儲存每筆計算資料，多一個變數為 bmiHistoryData，並賦予空陣列來儲存計算物件資料，若數值輸入錯誤，則不儲存。

printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
showHistoryData() >> 印出 console.log 文字為「您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！」*/