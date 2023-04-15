function soal_1(){
    var x = prompt("masukkan 1 bilangan positif");
    var total = 1;

    for (i=x;i>1;i--){
        total *=i;
    }
    alert("total perkaliannya adalah: " + total)
}

function soal_2(){
    var str = prompt("masukkan sebuah kata");
    var y = str.length;
    var newStr = '';

    for (i=y-1;i>=0;i--){
        newStr += str[i];
    }
    alert("kata kebalikannya adalah: " + newStr)
    
}

function soal_3(){
    var str = prompt('masukkan sembarang karakter');
    var digit = '';
    for (i=0;i<str.length;i++){
        if (!isNaN(str[i])){
            digit = digit+str[i];
        } else {continue;}
    }
    console.log(digit);
    var x = digit.length;
    for (i = 0; i<digit.length;i++){
        var zero = '0';
        var multi = zero.repeat(x-1);
        console.log(digit[i] + multi);
        x = x-1;
    }
}

function soal_4(){
    var x = prompt('masukkan angka pertama');
    var y = prompt('masukkan angka kedua');

    x = x+y;
    y = x-y;
    x = x-y; 

    alert('setelah ditukar, angka pertama sekarang adalah:' + x + ' dan angka kedua sekarang adalah: ' + y);
}


function soal_5(){
    var x = prompt("masukkan 1 angka positif");
    var baca = ['' , 'satu' , 'dua' , 'tiga' , 'empat' , 'lima' , 'enam' , 'tujuh' , 'delapan' , 'sembilan' , 'sepuluh' , 'sebelas'];
    var y = '';
    var sisa = '';
    if (x<12){
        y = baca[x];
    }else if (x<20){
        x -= 10;
        y = baca[x] + " belas";
    }else if(x<100){
        sisa = x % 10;
        x = Math.floor(x/10);
        y = baca[x] + " puluh " + baca[sisa];
    }else if (x==100){
        y = 'seratus';
    }else {
        y = 'silahkan masukkan bilangan 1-100';
    }
    alert("terbilangnya adalah: " + y);
}

function soal_6() {
    var data = [1,4,6,7,9,12,16,17];
    var low = 2;
    var high = 15;
    var newData=[];
    var dataLow = [];
    var dataHigh = [];

    for (i=0;i<data.length;i++){
        if(data[i] < low){
            dataLow[i]=data[i];
            continue;
        } else if(data[i] > high){
            dataHigh[i]=data[i];
            continue;
        }
        newData.push(data[i]);
    }
    console.log(newData);
}

function soal_7(){
    var data = [1,4,6,7,9,12,16,17];
    var low = 2;
    var high = 15;
    var newData=[];
    var dataLow = [];
    var dataHigh = [];

    for (i=0;i<data.length;i++){
        if(data[i] < low){
            dataLow.push(data[i]);
            continue;
        } else if(data[i] > high){
            dataHigh.push(data[i]);
            continue;
        }
        newData.push(data[i]);
    }
    var jumlahLow = dataLow.length;
    var jumlahHigh = dataHigh.length;
    var total = jumlahLow+jumlahHigh;
    console.log('jumlah angka yang berada dibawah Low dan diatas High adalah: ' + total);
}
function soal_8(){
    var x = prompt("masukkan 1 angka positif");
    for (i=1; i<=x; i++){
        var str1 = 'Edu';
        var str2 = 'Work';
        if (i%3 == 0){
            if(i%5 == 0){
                console.log(str1+str2);
                continue;
            }
            console.log(str1);
            continue;
        } else if(i%5 == 0){
            console.log(str2);
            continue;
        }
        console.log(i);
    }
}

function soal_9(data){
    var data = [2,7,1,9,4,10,6,12,5,15,0];
    var low = 999;
    var high = 0;
    for (i=0;i<data.length;i++){
        if (data[i] < low){
            low = data[i];
        } else if (data[i] > high){
            high = data[i];
        }
    }
    console.log('angka terkecil adalah: ' + low + ', dan angka terbesar adalah: ' + high);
}
function soal_10(){
    var x = prompt('masukkan tahun');
    if (x%4 == 0){
        alert(x + ' adalah tahun kabisat');
    } else {
        alert(x + ' bukan tahun kabisat');
    }
}

