jQuery Virtual Keyboard
============================

Simple and powerfull virtual keyboard with jquery and css.
Help you enable a virtual keyboard with options like "azerty or qwerty type", "keyboard for email or textarea", "enable on focus" and "draggable".
You can use the keyboard with multiple fields in your document.

1) Examples - How to get it work?
---------------------------------

Minimum options needed. Here, we will create an azerty keyboard inside a "keyboard_content" div.
The ul list will have "keyboard_content_ul", make sure to adapt your css.
NB: By default, the keyboard will appear on focus to "email field".

    $('#email').virtualKeyboard({
        id: 'keyboard_content', 
        keyboard: 'azerty' //qwerty allowed
    });

Full options, we will create a draggable qwerty keyboard inside a keyboard_content div, which will appear when "email" field got focus. 
The ul list will have "keyboard_content_ul", make sure to adapt your css.

    $('#email').virtualKeyboard({
        id: 'keyboard_content', 
        keyboard: 'qwerty', //qwerty allowed
        onFocus: true, //default is true
        isDraggable: true //default is true
    });

This is the corresponding css

    /* KEYBOARD */
    #keyboard_content {
        position: absolute;
        display: block;
        background: #000;
        padding: 2%;
        z-index: 999;
        margin-top: 1%;
    }
    #keyboard_content_ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    #keyboard_content_ul li {
        float: left;
        margin: 0 5px 5px 0;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: #fff;
        color: #000;
        border: 1px solid #f9f9f9;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
    }
    .capslock, .tab, .left-shift {
        clear: left;
    }
    #keyboard_content_ul .tab, #keyboard .delete {
        width: 70px;
    }
    #keyboard_content_ul .capslock {
        width: 80px;
    }
    #keyboard_content_ul .return {
        width: 77px;
    }
    #keyboard_content_ul .left-shift {
        width: 95px;
    }
    #keyboard_content_ul .right-shift {
        width: 109px;
    }
    .lastitem {
        margin-right: 0;
    }
    .uppercase {
        text-transform: uppercase;
    }
    #keyboard_content_ul .space {
        clear: left;
        width: 681px;
    }
    .on {
        display: none;
    }
    #keyboard_content_ul li:hover {
        position: relative;
        top: 1px;
        left: 1px;
        border-color: #e5e5e5;
        cursor: pointer;
    }

NB: If you want to enable keyboard for multiple fields, just change the id parameter, the field targeted and adapt your css and any other parameters you need.

TODO: Create keyboard for email field and number fields.

jquery.virtualKeyboard has been tested under and will work for further Jquery 2.1.0.

For contacts:
edouard.kombo@gmail.com
@edouardkombo on Twitter.

Enjoy!