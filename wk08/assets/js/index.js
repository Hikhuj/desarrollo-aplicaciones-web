$(function(){
    const body = $('body'),
    stage = $('#stage');

    /* PASO 1 */
    $('#step1 .encrypt').on('click',() => {
        body.attr('class','encrypt');
        step(2);
    })

    $('#step1 .decrypt').on('click',() => {
        body.attr('class','decrypt');
        step(2);
    })

    /* PASO 2 */
    $('#step2 .button').on('click', (e) => {
        $(e.target).parent().find('input').click();
    })

    // Configuracion de eventos para el control file o input file

    const file = null;

    $('#step2').on('change','#encrypt-input',(e) => {
        var control = e.target;
        if(control.files.length!==1){
            alert('Solo puede seleccionar un archivo');
            return 0; //return false
        }
        file = control.files[0];
        // con 1024*1024 manejamos megas y con otro *1024 meanejamos GB
        if(file.size > 1024*1024){
            alert('Por favor selecione un archivo que no sea mayor a 1MB');
            return;
        }
        step(3);

    })

    $('#step2').on('change', '#decrypt-input', function (e){
        const control = e.target;
        if (control.files.length !== 1) {
            alert('Solo puede seleccionar un archivo que encriptar!!!');
            return 0; // Lo que haria que retorne un FALSE
        }
        file = control.files[0];
        step(3);
    })

    /* PASO 3 */
    $('a.button.process').on('click', function() {
        let input = $(this).parent().find('input[type=password]');
        a = $('#step4 a.download'),
        password = input.val();
        input.val('');
        if(password.length < 5){
            alert("Digite una frase que contenga al menos 5 caracteres");
            return;
        }

        // Si vamos a usar controles, este metodo nos permite poder ver los archivos que nos pasan de forma archivo
        let reader = new FileReader();
        if(body.hasClass('encrypt')){
            reader.onload = function(e){
                // Use the CryptoJS library and the AES cypher to encrypt the 
                // contents of the file, held in e.target.result, with the password
                var encrypted = CryptoJS.AES.encrypt(e.target.result.password)

                // The download attribute will cause the contents of the href
                // attribute to be downloaded when clicked. The download attribute
                // also holds the name of the file that is offered for download.
                a.attr('href','data:application/octet-stream,' + encrypted);
                a.attr('download', file.name + '.encrypted');
                step(4);
            }
            // Leer como URL me permite leer el archivo en donde esta ubicado el archivo.
            reader.readAsDataURL(file);
        }else{
            reader.onload = function (e) {
                let decrypted = CryptoJS.AES.decrypt(e.target,result,password).toString(CryptoJS.enc.Latin1);
            }

            if(!/^data:/.test(decrypted)){
                alert('Frase invalida para este archivo. Por favor trate otra vez');
                return false;
            }

            a.attr('href', decrypted);
            a.attr('download', file.name.replace('.enc', ''));
            step(4);
        }
        reader.readAsText(file);
    })

    const step = (i) => {
        stage.css('top', (-(i - 1) * 100) + '%')
    }

})