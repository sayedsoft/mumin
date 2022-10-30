
const loader = $('.loader');
const _basePath = './'
let config = {
    "feilds": [
        "HASH_KEY_1",
        "HASH_KEY_2",
        "HASH_KEY_3",
        "HASH_KEY_4",
    ],
    "feild_crypt": "_fdr__1rvb_mb"
};

let _webView;
let webviewTag;

async function sleep (ms) {
     return new Promise(function(resolve, reject) {
         setInterval( () => {
            resolve("I love You !!");
         },ms )
    });
}

function hasSetup(){
    let _hasSetup = true;
     for (let i = 0; i < config.feilds.length; i++) {
         let name = config.feild_crypt + i, val = localStorage.getItem(name);
        if (val == null || val == '') { _hasSetup = false; break; }
    }
    return  _hasSetup;
}


function setForm(){
    let html = '';
    for (let i = 0; i < config.feilds.length; i++) {
        const t = config.feilds[i],name = config.feild_crypt + i;
         html += '<div class="mb-3">'
         html +=   '<label for='+name+' class="form-label">'+t+'</label>'
         html +=   '<input type="password"  class="form-control" id="'+name+'" placeholder="">'
         html += '</div>';
    }

    $('#loadForm').html(html);

    return ;
}

function encrypt(txt){
    var _txt = CryptoJS.AES.encrypt(txt, "yemen67891123456");
    return _txt.toString();
}

function decrypt(txt){
    var _txt = CryptoJS.AES.decrypt(txt, "yemen67891123456");
 
           var decryptedMessage = _txt.toString(CryptoJS.enc.Utf8);
        return decryptedMessage;
}


function getLocalItem(key){
    let local = localStorage.getItem(key);
    if (!local || local === '') {
        throw new Error('no local storage for key ' + key);
    }
    return decrypt(local)  ;
}



function closModal () {
    $('#dismiss-btn').click()
}

async function resetConfirm () {
    
    var pass = $('#pass_c').val()
    if (pass != '123456') {
        $('#dismiss_1-btn').click()
        return;
    }

    localStorage.clear();

     window.sessionStorage.clear();

    location.reload();

    $('#dismiss_1-btn').click() 
}

async function  start () {
    let _hasSetup = hasSetup();
    await sleep(2000)
    if (!_hasSetup) {
        $('.setupLaoder').load(_basePath+'setup.html')

    } else {
        $('.webviewLaoder').html(setWebViewHtml())
        await sleep(100);
        resize()
    }

    loader.hide();  

    return;
}


async function saveLocal(txt) {
    for (let i = 0; i < config.feilds.length; i++) {
         let name = config.feild_crypt + i, val = $('#'+name).val();
        if (val == null || val == '') {
              alert('Missin key!'); 
            throw new Error('Missin key!');
        }
        try {
            localStorage.setItem(name, encrypt(val));
             location.reload();
        } catch (error) {
            alert ('localStorage not supported!')
        }
        
    
    }
    closModal() ;
    await sleep(200)
    await start()
}



function setWebViewHtml () {
    let feild_crypt = config.feild_crypt;
    let link = getLocalItem(feild_crypt+0)
    let agent = getLocalItem(feild_crypt + 1);
    _webView = new  window.WebView()
    _webView.src = link
    _webView.useragent = agent
    _webView.autosize = 'on'
    _webView.id = 'webview' 
    _webView.setAttribute("allowpopups", "allowpopups");   
    webviewTag = document.getElementById('webview')

    
    return _webView
}

function resize() {
    let _controlsHeight = 0;
         const webview = $("#webview");
         webview.height(document.height)
        const windowHeight = window.height;
        const controlsHeight = _controlsHeight
        const webviewHeight = windowHeight - controlsHeight;

        webview.height = webviewHeight + "px";
}



$( document ).ready( async function() {

    
   await start();

});