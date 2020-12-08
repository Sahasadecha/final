var slideCl = document.getElementById("conversion_len");
var slideQs = document.getElementById("quantity_of_st");
var slidePd = document.getElementById("product");
var slideWages = document.getElementById("ch_wages");
var slideWorkload = document.getElementById("ch_workload");
var valueOfCl = document.getElementById("value_of_cl");
var valueOfQs = document.getElementById("value_of_qs");
var valueOfPd = document.getElementById("value_of_pd");
var valueOfWages = document.getElementById("value_of_wages");
var valueOfWorkload = document.getElementById("value_of_workload");
valueOfCl.innerHTML = slideCl.value;
valueOfQs.innerHTML = slideQs.value;
valueOfPd.innerHTML = slidePd.value;
valueOfWages.innerHTML = slideWages.value;
valueOfWorkload.innerHTML = slideWorkload.value;

slideCl.oninput = function() {
    valueOfCl.innerHTML = this.value;
}

slideQs.oninput = function() {
    valueOfQs.innerHTML = this.value;
}

slidePd.oninput = function() {
    valueOfPd.innerHTML = this.value;
}

slideWages.oninput = function() {
    valueOfWages.innerHTML = this.value;
}

slideWorkload.oninput = function() {
    valueOfWorkload.innerHTML = this.value;
}


// //-------//


// function calFarmer(){
//     p = document.getElementById("price_1st").value;
//     s = document.getElementById("price_thought_sold").value;
//     y = document.getElementById("how_years").value;
//     i = document.getElementById("interest_rate").value;
//     g = document.getElementById("garage_price").value;
//     t = document.getElementById("tax_insu").value;
//     e = document.getElementById("other_expenses").value;
//     la = document.getElementById("drivAndMach").value;
//     af = document.getElementById("field_napee").value;
//     as0 = document.getElementById("field_naprang").value; ///as ใช้ as0
//     ja = document.getElementById("commission").value;
//     fa = document.getElementById("fuel_rate").value;
//     fc = document.getElementById("fuel_price").value;
//     oa = document.getElementById("change_oil").value;
//     ol = document.getElementById("amount_engineOil").value;
//     oc = document.getElementById("engineOil_price").value;
//     wf = document.getElementById("wages_napee").value;
//     ws = document.getElementById("wages_naprang").value;
//     w = document.getElementById("ability_mach").value;
//     zone = document.getElementById("zone").value;
//     mc = 0;
//     tsa = 0;
    
//     if(zone == "northEast"){
//         mc = 41.37;
//         tsa = 27.00;
//     }else if(zone = "north"){
//         mc = 39.58;
//         tsa = 25.99;
//     }else{             // ภาคกลาง
//         mc = 30.88;
//         tsa = 29.51;
//     }

//     //ค่าเสื่อมราคา//
//     d = (p-s)/y 
//     document.getElementById("d").innerHTML = d;

//     //ค่าดอกเบี้ย//
//     it = ((p-s)/2)*(i/100)
//     document.getElementById("it").innerHTML = it;

//     //ค่าโรงเก็บเครื่อง//
//     document.getElementById("g2").innerHTML = g;
//     //ค่าภาษี/ประกัน//
//     document.getElementById("t2").innerHTML = t;
//     //ค่าใช้จ่ายอื่นๆ//
//     document.getElementById("e2").innerHTML = e;
//     //รวมค่าใช้จ่ายคงที่//
//     sum = d+it+g+t+e
//     document.getElementById("sum").innerHTML = sum;

//     //ค่าคนขับและดูแลเครื่อง//
//     l = la*(af*as0)
//     document.getElementById("driver").innerHTML = l; // driver = l (L)

//     //ค่านายหน้า//
//     j = ja*(af+as0)
//     document.getElementById("broker").innerHTML = j;

//     //ค่าน้ำมันเชื้อเพลิง//
//     f = fa*fc*(af+as0)
//     document.getElementById("fuel").innerHTML = f;

//     //ค่าน้ำมันเครื่อง//
//     o = (ol/oa)*oc*(af+as0)
//     document.getElementById("power").innerHTML = o;

//     //ค่าซ่อมแซมและบำรุงรักษา//
//     m = mc*(af+as0) // MC ยังไม่ลง
//     document.getElementById("repair").innerHTML = m;

//     //ค่าขนย้ายเครื่อง//
//     ts = tsa*(af+as0) // TSA ยังไม่มี
//     document.getElementById("transport_cost").innerHTML = ts;

//     //รวมค่าใช้จ่ายแปรผัน//
//     v = l+j+f+o+m+ts
//     document.getElementById("total_variable_costs").innerHTML = v;
    
//     //ค่าจ้างเกี่ยวนวดข้าว//
//     h = (af*wf)+(as0*ws)
//     document.getElementById("costFarm").innerHTML = h;

//     //ระยะเวลาคืนทุน//
//     sum2 = (p-s)/(h-it-g-t-e-v)
//     document.getElementById("payback_period").innerHTML = sum2;



// }