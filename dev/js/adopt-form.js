
var formisVisible = false;
var $formTrigger = $('#adopt-form-trigger');
var $formExit = $('#adopt-form-exit');
var $form = $('#adopt-form');


function formToggle(){

    console.log('formTriggered');

    $form.toggleClass("adopt-form-activate");


}

$formTrigger.on("click", formToggle);
$formExit.on("click", formToggle);
