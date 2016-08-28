function applyMultiStyles(elem, styles) {
    for (styleName in styles)
        elem.css(styleName, styles[styleName]);
}

function createCheckIcon() {
    var icon = $('<i></i>'); 

    icon.addClass('icon')
    icon.addClass('glyphicon');
    icon.addClass('glyphicon-ok');

    applyMultiStyles(icon, {
        'position': 'absolute', 
        'top': '50%', 
        'left': '20%', 
        'font-size': '.8em', 
        'line-height': '0'
    });

    return icon;
}

function createBeautyBox() {
    var box = $('<span></span>'); 

    box.addClass('new-box');

    applyMultiStyles(box, {
        'position': 'relative',
        'display': 'inline-block', 
        'float': 'left', 
        'width': '1.3em', 
        'height': '1.3em',
        'margin-right': '.5em',  
        'border': '1px solid #a9a9a9', 
        'border-radius': '.25em' 
    });

    box.append(createCheckIcon());

    return box;
}

function wrapInLabel(origInput, newInput) {
    var label = $('<label></label>');

    origInput.hide();

    label.append(origInput); 
    label.append(newInput);

    return label;
}

$.fn.replaceWithPush = function(a) {
    var $a = $(a);

    this.replaceWith($a);
    return $a;
};

function beauCheckbox(element) {
    var icon; 
    var newBox; 
    var input; 

    element = element.replaceWithPush(wrapInLabel(element.clone(), createBeautyBox()));
    
    input = element.find('input');
    newBox = element.find('.new-box'); 
    icon = newBox.children('.icon');

    input.change(function() {
        applyMultiStyles(icon, {
            'transform':  this.checked ? 'scale(1) rotateZ(0deg)' : 'scale(3) rotateZ(-20deg)', 
            'opacity':    this.checked ? '1' : '0', 
            'transition': 'all .3s ease-in'
        });

        if (this.disabled) 
            newBox.style('opacity', '.5');
    });

    input.change();
}