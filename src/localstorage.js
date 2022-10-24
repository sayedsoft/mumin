const {decrypt} = require('./../assets/theme/js/aes')
const config =  require('./../config.json')

exports.sleep = async (ms)  =>{

     return new Promise(function(resolve, reject) {
         setInterval( () => {
            resolve("I love You !!");
         },ms )
    });
}


exports.getLocalItem = (key)  => { 

    let local = localStorage.getItem(key);
    if (!local || local === '') {
        throw new Error('no local storage for key ' + key);
    }
    return decrypt(local)  ;
}

exports.hasSetup =  ()  => {
 let _hasSetup = true;
     for (let i = 0; i < config.feilds.length; i++) {
         let name = config.feild_crypt + i, val = localStorage.getItem(name);
        if (val == null || val == '') { _hasSetup = false; break; }
    }
    return  _hasSetup;
}

