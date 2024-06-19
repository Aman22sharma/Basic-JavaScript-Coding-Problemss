const timeValues = ['12:59:59', '11:30:56', '09:00:00']

for(let time of timeValues){
  let splitedValue = time.split(":")
  let hour = Number(time.split(":")[0])
  let minute = Number(time.split(":")[1])
  let secand = Number(time.split(":")[2])
  
  secand++;
  if(secand >= 59){
    secand = 00
    minute++;
    if(minute >= 59){
      minute = 00
      hour++
    }
  }
  let finalTiem = `${hour}:${minute}:${secand}`
  console.log(finalTiem)
}

// ====it will work same as object copy===
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5, { a: 10, b: 20 }];
arr1 = [...arr1, ...arr2];
arr2[3].a = 50;
console.log("arr1", arr1);
console.log("arr2", arr2);

/* Output:
arr1[0, 1, 2, 3, 4, 5, { a: 50, b: 20 }]
arr2[3, 4, 5, { a: 50, b: 20 }] */