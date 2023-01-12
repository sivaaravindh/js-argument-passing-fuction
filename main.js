//1.
myfuc=(a)=>10+a;
console.log(myfuc(10));

sum=(a,b)=>a+b+myfuc(5);
console.log(sum(10,10));

//2.
add=(a=10,b=20)=>sum(5,5)+a+b;
console.log(add());

//3.
sub=(a=10,b=20)=>add(5,5)-a-b;
console.log(sub());

//4.
tol=(a=10,b=20,c=a+b)=>c+sub(10,10);
console.log(tol());

//5.
sum1=(a,b)=>a*b*myfuc(5);
console.log(sum1(10,10));

//6.
sum2=(a,b)=>a*b/myfuc(5);
console.log(sum2(10,10));

//7.
sum3=(x,y)=>(x*y)+myfuc(5);
console.log(sum3(10,10));

//8.
cal=(a)=>a+myfuc(5);
console.log(cal(10));

//9.
cal2=(a,b)=>(a+b)%myfuc(5);
console.log(cal2(10,20));


//10.
cal3=(x,y)=>(x*y)+myfuc(5);
console.log(cal3(10,20));

