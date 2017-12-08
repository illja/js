var date= new Date(2017,10,6);

       
var date1 = new Date(1992,11,19);

var res;
res = date-date1;
res_1 = Math.floor(res/1000/60/60/24);


rik = res_1/365.242199;
x = Math.floor(rik);

y = rik-x;
mon = y*12;
x2 = Math.floor(mon);
y2 = mon-x2;
day = y2*30.4368499;
x3 = Math.floor(day); 
console.log(x3);
console.log(x2);
console.log(x);