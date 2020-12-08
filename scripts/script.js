function calCane() {
    var tsa = document.getElementById("region").value;
    var p = parseInt(document.getElementById("price_1st").value);                     //ราคาเครื่องแรกซื้อ
    var s = parseInt(document.getElementById("price_thought_sold").value);            //ราคาที่คิดว่าจะขายได้เมื่อเลิกใช้งาน
    var y = parseInt(document.getElementById("how_years").value);                     //คาดว่าจะใช้งานเครื่องกี่ปี
    var i = parseInt(document.getElementById("interest_rate").value);                 //อัตราดอกเบี้ย
    var la = parseInt(document.getElementById("drivAndMach").value);                  //ค่าคนขับและดูแลเครื่อง
    var ja = parseInt(document.getElementById("commission").value);                   //ค่านายหน้า
    var fa = parseInt(document.getElementById("fuel_rate").value);                    //อัตราการใช้น้ำมันเชื้อเพลิง
    var fc = parseInt(document.getElementById("fuel_price").value);                   //ราคาน้ำมันเชื้อเพลิง
    var g = parseInt(document.getElementById("garage_price").value);                  //ค่าโรงเก็บเครื่อง
    var t = parseInt(document.getElementById("tax_insu").value);                      //ค่าภาษี/ประกัน
    var e = parseInt(document.getElementById("other_expenses").value);                //ค่าใช้จ่ายอื่นๆ
    var af = parseInt(document.getElementById("workload").value);                     //ปริมาณงาน
    var wf = parseInt(document.getElementById("wages_of_harvest").value);             //ค่าจ้างเก็บเกี่ยว
    var ye = parseInt(document.getElementById("product").value);
    var n = parseInt(document.getElementById("conversion_len").value);


    //ค่าเสื่อมราคา//
    d = (p-s)/y 
    document.getElementById("output_depreciation").innerHTML = d;

    //ค่าดอกเบี้ย//
    it = ((p-s)/2)*(i/100)
    document.getElementById("output_interest_fee").innerHTML = it;

    //ค่าโรงเก็บเครื่อง//
    document.getElementById("output_garage_fee").innerHTML = g;
    //ค่าภาษี/ประกัน//
    document.getElementById("output_tax_insurance").innerHTML = t;
    //ค่าใช้จ่ายอื่นๆ//
    document.getElementById("output_other_expenses").innerHTML = e;
    //รวมค่าใช้จ่ายคงที่//
    sum = d+it+g+t+e
    document.getElementById("output_fixed_cost").innerHTML = sum;

    //ค่าคนขับและดูแลเครื่อง//
    l = la/(ye/12)
    document.getElementById("output_driv_mach").innerHTML = l; // driver = l (L)

    //ค่านายหน้า//
    document.getElementById("output_commision").innerHTML = ja;

    //ค่าน้ำมันเชื้อเพลิง//
    f = fa/(ye/12)*fc*(ye)
    document.getElementById("output_fuel_cost").innerHTML = f;

    //ค่าน้ำมันเครื่อง//
    // o = (ol/oa)*oc*(af+as)
    o = 0;
    document.getElementById("output_engine_oil").innerHTML = o;

    //ค่าซ่อมแซมและบำรุงรักษา//
    m = 26.52
    m = m/(ye/12)*ye; // MC ยังไม่ลง
    document.getElementById("output_repair").innerHTML = m;

    //ค่าขนย้ายเครื่อง//
    //ts = tsa*(af+as0) // TSA ยังไม่มี
    ts = 0;
    document.getElementById("output_transport").innerHTML = ts;

    //รวมค่าใช้จ่ายแปรผัน//
    v = l+j+f+o+m+ts
    document.getElementById("output_variable_cost").innerHTML = v;
    
    //ค่าจ้างเกี่ยวนวดข้าว//
    h = af*n;
    document.getElementById("output_income").innerHTML = h;

    //ระยะเวลาคืนทุน//
    breakEven = (p-s)/(h-it-g-t-e-v)
    breakEven2 = breakEven.toFixed(2);
    document.getElementById("output_payback_period").innerHTML = breakEven;
}

var btn = document.getElementById("calculator_btn");
     
// Assigning event listeners to the button
btn.addEventListener("click", calCane);
btn.addEventListener("click", changePageMainToResultCane);

function changePageMainToResultCane() {
    document.location = 'result.html';
}

function changPageResultToMainCane(){
    document.location = 'cane.html';
}

