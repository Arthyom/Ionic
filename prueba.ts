function arrow ( ) {

    let array_Un =  [1,1,1,1,1];
    let array_Ps =  [1,1,1,1,1];

    array_Ps.push(5);
    array_Un.unshift(0);

    console.log(array_Un);
    console.log(array_Ps);

    let s = ()=>{

        array_Ps.unshift(6);
        array_Un.unshift(-1);

        console.log(array_Un);
        console.log(array_Ps);


    };

    s();
}

arrow();