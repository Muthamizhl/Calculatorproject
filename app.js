var total="";
function calc(val)
{
   if(total=="0")
   {
      total="";
   }
   total+=val;
   document.getElementById("display").innerHTML=total;
}
function evaluation()
{
   var val1=eval(total);
   total=val1;
   document.getElementById("display").innerHTML=val1;
}
function cler()
{
   total="0";
   document.getElementById("display").innerHTML=total;
   total="";
}
function del()
{
   total=total.substring(0,total.length-1);
   if(total=="")
   {
      total="0";
   }
   document.getElementById("display").innerHTML=total;
}