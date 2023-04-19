let str = "anna";

let Str = "";

for(let i = str.length; i >=0; i--)
  {
    Str += str[i];
  }
let flag = false;

for(let j = 0; j < str.length; j++)
  {
    if(str[j] != Str[j])
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