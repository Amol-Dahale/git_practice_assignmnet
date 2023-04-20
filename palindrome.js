let str = "anna";

let name= "";

for(let i = str.length-1; i >=0; i--)
  {
    name+= str[i];
  }
let flag = false;

for(let j = 0; j < str.length; j++)
  {
    if(str[j] != name[j])
    {
      flag = true;
    }
  }

if(flag == true)
{
  console.log("String is not palindrome");
}
else
{
  console.log("String is palindrome");
}