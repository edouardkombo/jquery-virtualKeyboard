/*
 * jquery virtual keyboard
 * Version 0.1 (@edouardkombo / breezeframework.com)
 * https://github.com/edouardkombo/jquery-virtualKeyboard
 *
 * Initialize a timer that starts by clicking on an element of the page.
 * If a click has been detected before the end of the timer, timer is increased.
 * Timer is resetted if no click has been detected before its end.
 *
 * Copyright (c) 2014 Edouard Kombo (@edouardkombo / breezeframework.com)
 * Dual licensed under the MIT and GPL licenses.
*/

(function($){
    
    $.fn.virtualKeyboard = function (settings){
        //Settings
        var config = {
            keyboard: 'azerty',        //azerty or qwerty
            id: 'thisId',
            isDraggable: true,
            onFocus: true,
            nextField: false
        };       

        if (settings) {
            $.extend(config, settings);
        }    
        
        this.each(function(){

            if ((config.keyboard !== 'azerty') && (config.keyboard !== 'qwerty')) {
                console.log('Unrecognized virtual keyboard type!');
            }

            var element = $(this),
                azerty_keyboard,
                ul_id = config.id + '_ul',
                character,
                qwerty_keyboard,
                thisKeyboard,
                child,
                shift = false,
                capslock = false;  
        
                 
            azerty_keyboard  = 
            "<ul id='"+ul_id+"'>"+
                "<li class='symbol'><span class='off'>`</span><span class='on'>~</span></li>"+
                "<li class='symbol'><span class='off'>1</span><span class='on'>!</span></li>"+
                "<li class='symbol'><span class='off'>2</span><span class='on'>@</span></li>"+
                "<li class='symbol'><span class='off'>3</span><span class='on'>#</span></li>"+
                "<li class='symbol'><span class='off'>4</span><span class='on'>$</span></li>"+
                "<li class='symbol'><span class='off'>5</span><span class='on'>%</span></li>"+
                "<li class='symbol'><span class='off'>6</span><span class='on'>^</span></li>"+
                "<li class='symbol'><span class='off'>7</span><span class='on'>&amp;</span></li>"+
                "<li class='symbol'><span class='off'>8</span><span class='on'>*</span></li>"+
                "<li class='symbol'><span class='off'>9</span><span class='on'>(</span></li>"+
                "<li class='symbol'><span class='off'>0</span><span class='on'>)</span></li>"+
                "<li class='symbol'><span class='off'>-</span><span class='on'>_</span></li>"+
                "<li class='symbol'><span class='off'>=</span><span class='on'>+</span></li>"+
                "<li class='delete lastitem'>retour</li>"+
                "<li class='tab'>tab</li>"+
                "<li class='letter'>a</li>"+
                "<li class='letter'>z</li>"+
                "<li class='letter'>e</li>"+
                "<li class='letter'>r</li>"+
                "<li class='letter'>t</li>"+
                "<li class='letter'>y</li>"+
                "<li class='letter'>u</li>"+
                "<li class='letter'>i</li>"+
                "<li class='letter'>o</li>"+
                "<li class='letter'>p</li>"+
                "<li class='symbol'><span class='off'>[</span><span class='on'>{</span></li>"+
                "<li class='symbol'><span class='off'>]</span><span class='on'>}</span></li>"+
                "<li class='symbol lastitem'><span class='off'>\\</span><span class='on'>|</span></li>"+
                "<li class='capslock'>verr</li>"+
                "<li class='letter'>q</li>"+
                "<li class='letter'>s</li>"+
                "<li class='letter'>d</li>"+
                "<li class='letter'>f</li>"+
                "<li class='letter'>g</li>"+
                "<li class='letter'>h</li>"+
                "<li class='letter'>j</li>"+
                "<li class='letter'>k</li>"+
                "<li class='letter'>l</li>"+
                "<li class='letter'>m</li>"+        
                "<li class='symbol'><span class='off'>;</span><span class='on'>:</span></li>"+
                "<li class='symbol'><span class='off'>'</span><span class='on'>&quot;</span></li>"+
                "<li class='return lastitem'>entrée</li>"+
                "<li class='left-shift'>shift</li>"+
                "<li class='letter'>w</li>"+
                "<li class='letter'>x</li>"+
                "<li class='letter'>c</li>"+
                "<li class='letter'>v</li>"+
                "<li class='letter'>b</li>"+
                "<li class='letter'>n</li>"+
                "<li class='symbol'><span class='off'>,</span><span class='on'>&lt;</span></li>"+
                "<li class='symbol'><span class='off'>.</span><span class='on'>&gt;</span></li>"+
                "<li class='symbol'><span class='off'>/</span><span class='on'>?</span></li>"+
                "<li class='right-shift lastitem'>maj</li>"+
                "<li class='space lastitem'>&nbsp;&nbsp;</li>"+
            "</ul>";

            qwerty_keyboard  = 
            "<ul id='"+ul_id+"'>"+
                "<li class='symbol'><span class='off'>`</span><span class='on'>~</span></li>"+
                "<li class='symbol'><span class='off'>1</span><span class='on'>!</span></li>"+
                "<li class='symbol'><span class='off'>2</span><span class='on'>@</span></li>"+
                "<li class='symbol'><span class='off'>3</span><span class='on'>#</span></li>"+
                "<li class='symbol'><span class='off'>4</span><span class='on'>$</span></li>"+
                "<li class='symbol'><span class='off'>5</span><span class='on'>%</span></li>"+
                "<li class='symbol'><span class='off'>6</span><span class='on'>^</span></li>"+
                "<li class='symbol'><span class='off'>7</span><span class='on'>&amp;</span></li>"+
                "<li class='symbol'><span class='off'>8</span><span class='on'>*</span></li>"+
                "<li class='symbol'><span class='off'>9</span><span class='on'>(</span></li>"+
                "<li class='symbol'><span class='off'>0</span><span class='on'>)</span></li>"+
                "<li class='symbol'><span class='off'>-</span><span class='on'>_</span></li>"+
                "<li class='symbol'><span class='off'>=</span><span class='on'>+</span></li>"+
                "<li class='delete lastitem'>delete</li>"+
                "<li class='tab'>tab</li>"+
                "<li class='letter'>q</li>"+
                "<li class='letter'>w</li>"+
                "<li class='letter'>e</li>"+
                "<li class='letter'>r</li>"+
                "<li class='letter'>t</li>"+
                "<li class='letter'>y</li>"+
                "<li class='letter'>u</li>"+
                "<li class='letter'>i</li>"+
                "<li class='letter'>o</li>"+
                "<li class='letter'>p</li>"+
                "<li class='symbol'><span class='off'>[</span><span class='on'>{</span></li>"+
                "<li class='symbol'><span class='off'>]</span><span class='on'>}</span></li>"+
                "<li class='symbol lastitem'><span class='off'>\\</span><span class='on'>|</span></li>"+
                "<li class='capslock'>caps lock</li>"+
                "<li class='letter'>a</li>"+
                "<li class='letter'>s</li>"+
                "<li class='letter'>d</li>"+
                "<li class='letter'>f</li>"+
                "<li class='letter'>g</li>"+
                "<li class='letter'>h</li>"+
                "<li class='letter'>j</li>"+
                "<li class='letter'>k</li>"+
                "<li class='letter'>l</li>"+
                "<li class='symbol'><span class='off'>;</span><span class='on'>:</span></li>"+
                "<li class='symbol'><span class='off'>'</span><span class='on'>&quot;</span></li>"+
                "<li class='return lastitem'>return</li>"+
                "<li class='left-shift'>shift</li>"+
                "<li class='letter'>z</li>"+
                "<li class='letter'>x</li>"+
                "<li class='letter'>c</li>"+
                "<li class='letter'>v</li>"+
                "<li class='letter'>b</li>"+
                "<li class='letter'>n</li>"+
                "<li class='letter'>m</li>"+
                "<li class='symbol'><span class='off'>,</span><span class='on'>&lt;</span></li>"+
                "<li class='symbol'><span class='off'>.</span><span class='on'>&gt;</span></li>"+
                "<li class='symbol'><span class='off'>/</span><span class='on'>?</span></li>"+
                "<li class='right-shift lastitem'>shift</li>"+
                "<li class='space lastitem'>&nbsp;</li>"+
            "</ul>";

            //Write keyboard on page
            function createKeyboard(){
                thisKeyboard      = document.createElement('div');
                thisKeyboard.setAttribute('id', config.id);
                child = document.getElementById(element[0].id);
                child.parentNode.insertBefore(thisKeyboard, child);            
                (config.keyboard === 'azerty') ? $('#'+config.id).html(azerty_keyboard) : $('#'+config.id).html(qwerty_keyboard) ;                
            }

            createKeyboard();

            if (config.isDraggable) {
                $('#'+config.id).draggable();
            }

            if (config.onFocus) {
                $('#'+config.id).hide();

                $(element).focus(function(){
                    $('#'+config.id).show();
                });

            } else {
                $('#'+config.id).show();
            }

            $(element).blur(function(){
                $('#'+config.id).hide();
            });            

            $('#'+ul_id+' li').click(function(){
                var $this = $(this);
                character = $this.html();

                // Shift keys
                if ($this.hasClass('left-shift') || $this.hasClass('right-shift')) {
                    $('.letter').toggleClass('uppercase');
                    $('.symbol span').toggle();

                    shift = (shift === true) ? false : true;
                    capslock = false;
                    return false;
                }

                // Caps lock
                if ($this.hasClass('capslock')) {
                    $('.letter').toggleClass('uppercase');
                    capslock = true;
                    return false;
                }

                // Delete
                if ($this.hasClass('delete')) {
                    var html = $(element).val();

                    $(element).val(html.substr(0, html.length - 1));
                    return false;
                }

                // Special characters
                if ($this.hasClass('symbol')) character = $('span:visible', $this).html();
                if ($this.hasClass('space')) character = ' ';
                if ($this.hasClass('tab')) character = "\t";
                if ($this.hasClass('return')) character = "\n";

                // Uppercase letter
                if ($this.hasClass('uppercase')) character = character.toUpperCase();
                
                // Tab class
                if ($this.hasClass('tab')) {
                    if (config.nextField) {
                        $(element).blur(); 
                        $(config.nextField).focus();
                    }
                }                

                // Remove shift once a key is clicked.
                if (shift === true) {
                    $('.symbol span').toggle();
                    if (capslock === false) $('.letter').toggleClass('uppercase');

                    shift = false;
                }
                // Add the character
                $(element).val($(element).val() + character);

            });            
        });
        return this;    
    };
    
})(jQuery);