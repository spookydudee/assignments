## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```


const fs = require("fs");

fs.readFile("a.txt","utf-8",(err,data)=>{
    data = data.split('');
    let s = "";
    let temp ="";
    for(let i=0;i<data.length;++i){
        if(data[i]!=" "){
            temp+=data[i];
        }else{
            s+=temp;
            temp="";
            if(s.length!=0 && s[s.length-1]!=" "){
                s+=" ";
            }
        }
    }
    s+=temp;
    let ct = 0;
    for(let i = s.length-1;i>=0;--i){
        if(s[i]==" ")ct++;
        else break;
    }
    let answer = "";
    for(let i =0;i<s.length-ct;++i){
        answer+=s[i];
    }
    console.log(answer);
})

fs.readFile("a.txt", "utf-8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const words = data.split(' ').filter(word => word !== '');
    const result = words.join(' ');

    console.log(result);
});