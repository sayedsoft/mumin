
class UserAgentChecker {
    _localStorage = {}
    config = {
     "feilds": [
         "HASH_KEY_1",
         "HASH_KEY_2",
         "HASH_KEY_3",
         "HASH_KEY_4",
     ],
     "feild_crypt": "_fdr__1rvb_mb"
   };
   _hasSetup = true
 
   setLocal (local) {
     this._localStorage = local
   }
 
    hasSetup(){
       for (let i = 0; i < this.config.feilds.length; i++) {
           let name = this.config.feild_crypt + i, val = this._localStorage[name];
           if (val == null || val == '') { this._hasSetup = false; break; }
       }
       return  this._hasSetup;
     }
 
     getUserAgnet(){
      if (!this.hasSetup()) return null;
      let key = this.config.feild_crypt + '1'
      return this.getLocalItem(key)
     }
 
 
     decrypt(txt){
       var _txt = CryptoJS.AES.decrypt(txt, "yemen67891123456");
 
             var decryptedMessage = _txt.toString(CryptoJS.enc.Utf8);
           return decryptedMessage;
     }
 
 
     getLocalItem(key){
       let local =  this._localStorage[key];
       if (!local || local === '') {
           throw new Error('no local storage for key ' + key);
       }
       return this.decrypt(local)  ;
     }
 
 
 
 }