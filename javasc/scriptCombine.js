//-------//
let form = document.querySelector("#gernerInput");
let form2 = document.querySelector("#gernerOutput");

db.collection('generalData').get().then( generalData =>{
    var countNorth = 0;
    var countNorthEast = 0;
    var countMid = 0;
    
    var sumCostFarmNorth = 0;
    var sumPayFarmNorth = 0;

    var sumCostFarmNorthEast = 0;
    var sumPayFarmNorthEast = 0;

    var sumCostFarmMid = 0;
    var sumPayFarmMid = 0;

    var sumDriver = 0;
    var sumBroker = 0;
    var sumfuel = 0;
    var sumMove = 0;
    var sumPower = 0;
    var sumRepair = 0;

    generalData.docs.forEach(doc => {
        console.log(doc.data());
        sumDriver += parseFloat(doc.data().driver);
        sumBroker += parseFloat(doc.data().broker);
        sumfuel += parseFloat(doc.data().fuel);
        sumMove += parseFloat(doc.data().move);
        sumPower += parseFloat(doc.data().power);
        sumRepair += parseFloat(doc.data().repair);

        if(doc.data().zone == "north"){
            countNorth+=1;
            sumCostFarmNorth += parseFloat(doc.data().costFarm);
            sumPayFarmNorth += parseFloat(doc.data().sum);
            
        }else if(doc.data().zone == "northEast"){
            countNorthEast += 1;
            sumCostFarmNorthEast += parseFloat(doc.data().costFarm);
            sumPayFarmNorthEast += parseFloat(doc.data().sum);
        }else if(doc.data().zone == "middle"){
            countMid += 1;
            sumCostFarmMid += parseFloat(doc.data().costFarm);
            sumPayFarmMid += parseFloat(doc.data().sum);
        }
 
    });/**<--- In ForEach */
    var allSetCount = countNorth+countNorthEast+countMid;
    pieGraph(allSetCount,sumDriver, sumBroker, sumfuel, sumMove, sumPower, sumRepair, "piePay")
    inPayGraph(countNorth,countNorthEast,countMid,sumCostFarmNorth,sumCostFarmNorthEast,sumCostFarmMid,"incomeBar","รับ");
    inPayGraph(countNorth,countNorthEast,countMid,sumPayFarmNorth,sumPayFarmNorthEast,sumPayFarmMid,"payBar","จ่าย");
    zoneGraph(countNorth,countMid,countNorthEast);
});
function pieGraph(count,driver, broker, fuel, move, power, repair, id){
    var avgDriver = driver/count;
    var avgBroker = broker/count;
    var avgFuel = fuel/count;
    var avgMove = move/count;
    var avgPower = power/count;
    var avgRepair = repair/count;

    var ctxPie = document.getElementById(id);
    var myChart = new Chart(ctxPie, {
        type: 'doughnut',
        data: {
            labels: ['ค่าคนขับและดูแลเครื่อง',
                        'ค่านายหน้า',
                        'ค่าน้ำมันเชื้อเพลิง',
                        'ค่าขนย้ายเครื่อง',
                        'ค่าน้ำมันเครื่อง',
                        'ค่าซ่อมแซนและบำรุงรักษา'],
            datasets: [{
                label: 'รายจ่ายต่างๆ (บาท)',
                data: [avgDriver, avgBroker, avgFuel, avgMove, avgPower, avgRepair],
                backgroundColor: [
                    'rgba(255, 0, 0, 0.2)',
                    'rgba(0, 0, 255, 0.2)',
                    'rgba(0, 255, 127, 0.2)',
                    'rgba(255, 165, 0, 0.2)',
                    'rgba(106, 90, 205, 0.2)',
                    'rgba(238, 130, 238, 0.2)'

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function inPayGraph(cN,cE,cM,sN,sE,sM,id,toDo){
    var avgNorth = sN/cN;
    var avgNorthEast = sE/cE;
    var avgMiddle = sM/cM;
    var ctxMoney = document.getElementById(id);
    var myChart = new Chart(ctxMoney, {
        type: 'bar',
        data: {
            labels: ["ภาคเหนือ", "ภาคกลาง", "ภาคตะวันออกเฉียงเหนือ"],
            datasets: [{
                label: 'ราย'+ toDo +'เฉลี่ย (บาท)',
                data: [avgNorth,avgMiddle,avgNorthEast],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

}
function zoneGraph(a,b,c){
    var ctxZone = document.getElementById('zoneBar');
    var myChart = new Chart(ctxZone, {
        type: 'bar',
        data: {
            labels: ["ภาคเหนือ", "ภาคกลาง", "ภาคตะวันออกเฉียงเหนือ"],
            datasets: [{
                label: 'ภูมิภาคที่เข้าใช้งาน (ครั้ง)',
                data: [a,b,c],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function graph(){
    var p = parseFloat(document.getElementById("p").value);
    var s = parseFloat(document.getElementById("s").value);
    var y = parseFloat(document.getElementById("y").value);
    var i = parseFloat(document.getElementById("i").value);
    var g = parseFloat(document.getElementById("g").value);
    var t = parseFloat(document.getElementById("t").value);
    var e = parseFloat(document.getElementById("e").value);
    var la = parseFloat(document.getElementById("la").value);
    var af = parseFloat(document.getElementById("af").value);
    var as0 = parseFloat(document.getElementById("as").value); ///as ใช้ as0
    var ja = parseFloat(document.getElementById("ja").value);
    var fa = parseFloat(document.getElementById("fa").value);
    var fc = parseFloat(document.getElementById("fc").value);
    var oa = parseFloat(document.getElementById("oa").value);
    var ol = parseFloat(document.getElementById("ol").value);
    var oc = parseFloat(document.getElementById("oc").value);
    var wf = parseFloat(document.getElementById("wf").value);
    var ws = parseFloat( document.getElementById("ws").value);
    var w = parseFloat(document.getElementById("w").value);
    var zone = document.getElementById("zone").value;
    var mc;
    var tsa;
    
    if(zone == "northEast"){
        mc = 41.37;
        tsa = 27.00;
        
    }else if(zone = "north"){
        mc = 39.58;
        tsa = 25.99;
    }else{             // ภาคกลาง
        mc = 30.88;
        tsa = 29.51;
    }
    var area1 = af+as0-200;
    var areaCurrent = af+as0;
    var area3 = af+as0+200;
    var area4 = af+as0+400;
    function allSum(areaX){
        var d = ((p-s)/y);
        //ค่าดอกเบี้ย//
        var it = ((p-s)*0.5)*(i/100);
        //รวมค่าใช้จ่ายคงที่//
        var sum = d+it+g+t+e;
        //ค่าคนขับและดูแลเครื่อง//
        var l = la*(areaX);
    
        //ค่านายหน้า//
        var j = ja*(areaX);
    
        //ค่าน้ำมันเชื้อเพลิง//
        var f = fa*fc*(areaX);
    
        //ค่าน้ำมันเครื่อง//
        var o = (ol/oa)*oc*(areaX);
        
        //ค่าซ่อมแซมและบำรุงรักษา//
        var m = mc*(areaX);
        
        //ค่าขนย้ายเครื่อง//
        var ts = tsa*(areaX);
    
        //รวมค่าใช้จ่ายแปรผัน//
        var v = l+j+f+o+m+ts;
        
        //ค่าจ้างเกี่ยวนวดข้าว//
        var h = (af*wf)+(as0*ws);
        var sumX = parseFloat((p-s)/(h-(v+it+g+t+e)));
        console.log('sum '+'area '+areaX+' '+sumX);
        return sumX
    }

    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [area1, areaCurrent, area3, area4],
            datasets: [{
                label: 'ระยะเวลาคืนทุน',
                data: [allSum(area4), allSum(area3) , allSum(areaCurrent), allSum(area1)],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

}

function calFarmer(){

    var p = parseFloat(document.getElementById("p").value);
    var s = parseFloat(document.getElementById("s").value);
    var y = parseFloat(document.getElementById("y").value);
    var i = parseFloat(document.getElementById("i").value);
    var g = parseFloat(document.getElementById("g").value);
    var t = parseFloat(document.getElementById("t").value);
    var e = parseFloat(document.getElementById("e").value);
    var la = parseFloat(document.getElementById("la").value);
    var af = parseFloat(document.getElementById("af").value);
    var as0 = parseFloat(document.getElementById("as").value); ///as ใช้ as0
    var ja = parseFloat(document.getElementById("ja").value);
    var fa = parseFloat(document.getElementById("fa").value);
    var fc = parseFloat(document.getElementById("fc").value);
    var oa = parseFloat(document.getElementById("oa").value);
    var ol = parseFloat(document.getElementById("ol").value);
    var oc = parseFloat(document.getElementById("oc").value);
    var wf = parseFloat(document.getElementById("wf").value);
    var ws = parseFloat( document.getElementById("ws").value);
    var w = parseFloat(document.getElementById("w").value);
    var zone = document.getElementById("zone").value;
    var mc;
    var tsa;
    if(zone == "northEast"){
        mc = 41.37;
        tsa = 27.00;
        
    }else if(zone = "north"){
        mc = 39.58;
        tsa = 25.99;
    }else{             // ภาคกลาง
        mc = 30.88;
        tsa = 29.51;
    }

    //ค่าเสื่อมราคา//
    d = ((p-s)/y) 
    document.getElementById("d").innerHTML = d;
    //ค่าดอกเบี้ย//
    it = ((p-s)*0.5)*(i/100)
    document.getElementById("it").innerHTML = it;

    //ค่าโรงเก็บเครื่อง//
    document.getElementById("g2").innerHTML = g;
    //ค่าภาษี/ประกัน//
    document.getElementById("t2").innerHTML = t;
    //ค่าใช้จ่ายอื่นๆ//
    document.getElementById("e2").innerHTML = e;
    //รวมค่าใช้จ่ายคงที่//
    sum = d+it+g+t+e
    document.getElementById("sum").innerHTML = sum;
    //ค่าคนขับและดูแลเครื่อง//
    l = la*(af+as0)
    document.getElementById("driver").innerHTML = l; // driver = l (L)

    //ค่านายหน้า//
    j = ja*(af+as0)
    document.getElementById("broker").innerHTML = j;

    //ค่าน้ำมันเชื้อเพลิง//
    f = fa*fc*(af+as0)
    document.getElementById("fuel").innerHTML = f;

    //ค่าน้ำมันเครื่อง//
    o = (ol/oa)*oc*(af+as0)
    document.getElementById("power").innerHTML = o;
    
    //ค่าซ่อมแซมและบำรุงรักษา//
    m = mc*(af+as0) // MC ยังไม่ลง
    document.getElementById("repair").innerHTML = m;
    
    //ค่าขนย้ายเครื่อง//
    ts = tsa*(af+as0) // TSA ยังไม่มี
    document.getElementById("move").innerHTML = ts;

    //รวมค่าใช้จ่ายแปรผัน//
    v = l+j+f+o+m+ts
    document.getElementById("costAll").innerHTML = v;
    
    //ค่าจ้างเกี่ยวนวดข้าว//
    h = (af*wf)+(as0*ws)
    document.getElementById("costFarm").innerHTML = h;

    //ระยะเวลาคืนทุน//
    sum2 = (p-s)/((h)-(v+it+g+t+e))
    document.getElementById("reCost").innerHTML = sum2;
    
    /** IMPORTANT ADD DATA ---DO NOT DELETE--- */
    db.collection('generalData').add({
        zone: form.zone.value,
        d: form2.d.value,
        it: form2.it.value,
        g2: form2.g2.value,
        t2: form2.t2.value,
        e2: form2.e2.value,
        sum: form2.sum.value,
        driver: form2.driver.value,
        broker: form2.broker.value,
        fuel: form2.fuel.value,
        power: form2.power.value,
        repair: form2.repair.value,
        move: form2.move.value,
        costAll: form2.costAll.value,
        costFarm: form2.costFarm.value
    });


}

