// #region Declare Variables
// #region Declare Variables

const keyCodes = {
  0: 'That key has no keycode',
  3: 'break',
  8: 'backspace / delete',
  9: 'tab',
  12: 'clear',
  13: 'enter',
  16: 'shift',
  17: 'ctrl',
  18: 'alt',
  19: 'pause/break',
  20: 'caps lock',
  21: 'hangul',
  25: 'hanja',
  27: 'escape',
  28: 'conversion',
  29: 'non-conversion',
  32: 'spacebar',
  33: 'page up',
  34: 'page down',
  35: 'end',
  36: 'home',
  37: 'left arrow',
  38: 'up arrow',
  39: 'right arrow',
  40: 'down arrow',
  41: 'select',
  42: 'print',
  43: 'execute',
  44: 'Print Screen',
  45: 'insert',
  46: 'delete',
  47: 'help',
  48: '0',
  49: '1',
  50: '2',
  51: '3',
  52: '4',
  53: '5',
  54: '6',
  55: '7',
  56: '8',
  57: '9',
  58: ':',
  59: 'semicolon (firefox), equals',
  60: '<',
  61: 'equals (firefox)',
  63: 'ß',
  64: '@ (firefox)',
  65: 'a',
  66: 'b',
  67: 'c',
  68: 'd',
  69: 'e',
  70: 'f',
  71: 'g',
  72: 'h',
  73: 'i',
  74: 'j',
  75: 'k',
  76: 'l',
  77: 'm',
  78: 'n',
  79: 'o',
  80: 'p',
  81: 'q',
  82: 'r',
  83: 's',
  84: 't',
  85: 'u',
  86: 'v',
  87: 'w',
  88: 'x',
  89: 'y',
  90: 'z',
  91: 'Windows Key / Left ⌘ / Chromebook Search key',
  92: 'right window key',
  93: 'Windows Menu / Right ⌘',
  95: 'sleep',
  96: 'numpad 0',
  97: 'numpad 1',
  98: 'numpad 2',
  99: 'numpad 3',
  100: 'numpad 4',
  101: 'numpad 5',
  102: 'numpad 6',
  103: 'numpad 7',
  104: 'numpad 8',
  105: 'numpad 9',
  106: 'multiply',
  107: 'add',
  108: 'numpad period (firefox)',
  109: 'subtract',
  110: 'decimal point',
  111: 'divide',
  112: 'f1',
  113: 'f2',
  114: 'f3',
  115: 'f4',
  116: 'f5',
  117: 'f6',
  118: 'f7',
  119: 'f8',
  120: 'f9',
  121: 'f10',
  122: 'f11',
  123: 'f12',
  124: 'f13',
  125: 'f14',
  126: 'f15',
  127: 'f16',
  128: 'f17',
  129: 'f18',
  130: 'f19',
  131: 'f20',
  132: 'f21',
  133: 'f22',
  134: 'f23',
  135: 'f24',
  144: 'num lock',
  145: 'scroll lock',
  151: 'airplane mode',
  160: '^',
  161: '!',
  162: '؛ (arabic semicolon)',
  163: '#',
  164: '$',
  165: 'ù',
  166: 'page backward',
  167: 'page forward',
  168: 'refresh',
  169: 'closing paren (AZERTY)',
  170: '*',
  171: '~ + * key',
  172: 'home key',
  173: 'minus (firefox), mute/unmute',
  174: 'decrease volume level',
  175: 'increase volume level',
  176: 'next',
  177: 'previous',
  178: 'stop',
  179: 'play/pause',
  180: 'e-mail',
  181: 'mute/unmute (firefox)',
  182: 'decrease volume level (firefox)',
  183: 'increase volume level (firefox)',
  186: 'semi-colon / ñ',
  187: 'equal sign',
  188: 'comma',
  189: 'dash',
  190: 'period',
  191: 'forward slash / ç',
  192: 'grave accent / ñ / æ / ö',
  193: '?, / or °',
  194: 'numpad period (chrome)',
  219: 'open bracket',
  220: 'back slash',
  221: 'close bracket / å',
  222: 'single quote / ø / ä',
  223: '`',
  224: 'left or right ⌘ key (firefox)',
  225: 'altgr',
  226: '< /git >, left back slash',
  230: 'GNOME Compose Key',
  231: 'ç',
  233: 'XF86Forward',
  234: 'XF86Back',
  235: 'non-conversion',
  240: 'alphanumeric',
  242: 'hiragana/katakana',
  243: 'half-width/full-width',
  244: 'kanji',
  251: 'unlock trackpad (Chrome/Edge)',
  255: 'toggle touchpad',
};

const keyLocations = {
  0: 'General keys',
  1: 'Left-side modifier keys',
  2: 'Right-side modifier keys',
  3: 'Numpad',
};

const body = document.querySelector('body');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.textBaseline = 'middle';
ctx.textAlign = 'center';
ctx.font = '110px sans-serif';

// #endregion

// #region Main Methods

function drawNumberToCanvas(number) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'black';
  ctx.fillText(number, canvas.width / 2, canvas.height / 2, canvas.width);
  const data = canvas.toDataURL('image/png');

  const link = document.querySelector("link[rel*='icon']");
  link.type = 'image/x-icon';
  link.href = data;
}


// #endregion

// #region Event Listeners

body.onkeydown = function(e) {

  if (!e.metaKey) {
    e.preventDefault();
  }
  //writes javascript key code to page icon
  //drawNumberToCanvas(e.keyCode);

  // Check if Key_Values is Unidentified then redirect to docs
  let newKeyText = '';
  if (e.key != null && e.key === 'Unidentified') {
    newKeyText = '<a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values#Special_values" target="_blank" rel="noopener">Unidentified</a>';
  } else if (e.key === ' ') {
    // newKeyText = `<span class="text-muted">(Space character)</span>`;
	newKeyText = `<span>Space</span>`;
  } else if (e.which === 17) {
	newKeyText = `<span>Control</span>`;
  } else if (e.which === 174) {
	newKeyText = `<span>Volume-</span>`;
  } else if (e.which === 175) {
	newKeyText = `<span>Volume+</span>`;
  } else if (e.which === 173) {
	newKeyText = `<span>Mute</span>`;
  } else if (e.which === 180) {
	newKeyText = `<span>Mail</span>`;
  } else if (e.which === 183) {
	newKeyText = `<span>Calculator</span>`;
  } else if (e.which === 20) {
	newKeyText = `<span>Caps Lock</span>`;
  } else if (e.which === 93) {
	newKeyText = `<span>Context</span>`;
  } else if (e.which === 145) {
	newKeyText = `<span>Scroll Lock</span>`;
  } else if (e.which === 33) {
	newKeyText = `<span>Page Up</span>`;
  } else if (e.which === 34) {
	newKeyText = `<span>Page Down</span>`;
  } else if (e.which === 144) {
	newKeyText = `<span>Num Lock</span>`;
  } else {
    newKeyText = e.key || '';
  }
	switch(e.which) {
		case 8:
			var x = document.getElementById("backspace.mp3"); 
			x.play();
			break;
		case 9:
			var x = document.getElementById("tab.mp3"); 
			x.play();
			break;
		case 13:
			var x = document.getElementById("enter.mp3"); 
			x.play();
			break;
		case 16:
			var x = document.getElementById("shift.mp3"); 
			x.play();
			break;
		case 17:
			var x = document.getElementById("control.mp3"); 
			x.play();
			break;
		case 18:
			var x = document.getElementById("alt.mp3"); 
			x.play();
			break;
		case 19:
			var x = document.getElementById("pause.mp3"); 
			x.play();
			break;
		case 20:
			var x = document.getElementById("capslock.mp3"); 
			x.play();
			break;
		case 27:
			var x = document.getElementById("escape.mp3"); 
			x.play();
			break;
		case 32:
			var x = document.getElementById("spacebar.mp3"); 
			x.play();
			break;
		case 33:
			var x = document.getElementById("pageup.mp3"); 
			x.play();
			break;
		case 34:
			var x = document.getElementById("pagedown.mp3"); 
			x.play();
			break;
		case 35:
			var x = document.getElementById("end.mp3"); 
			x.play();
			break;
		case 36:
			var x = document.getElementById("home.mp3"); 
			x.play();
			break;
		case 37:
			var x = document.getElementById("leftarrow.mp3"); 
			x.play();
			break;
		case 38:
			var x = document.getElementById("uparrow.mp3"); 
			x.play();
			break;
		case 39:
			var x = document.getElementById("rightarrow.mp3"); 
			x.play();
			break;
		case 40:
			var x = document.getElementById("downarrow.mp3"); 
			x.play();
			break;
		case 45:
			var x = document.getElementById("insert.mp3"); 
			x.play();
			break;
		case 46:
			var x = document.getElementById("delete.mp3"); 
			x.play();
			break;
		case 47:
			var x = document.getElementById("help.mp3"); 
			x.play();
			break;
		case 48:
			if(newKeyText === ")"){
					var x = document.getElementById("rightbracket.mp3"); 
				}
			else{
				var x = document.getElementById("0.mp3");
				}
			x.play();
			break;
		case 49:
			if(newKeyText === "!"){
					var x = document.getElementById("exclamationmark.mp3"); 
				}
			else{
				var x = document.getElementById("1.mp3"); 
				}
			x.play();
			break;
		case 50:
			if(newKeyText == "@"){
					var x = document.getElementById("at.mp3"); 
				}
			else{
				var x = document.getElementById("2.mp3"); 
				}
			x.play();
			break;
		case 51:if(newKeyText === "#"){
					var x = document.getElementById("hash.mp3"); 
				}
			else{
				var x = document.getElementById("3.mp3"); 
				}
			x.play();
			break;
		case 52:
			if(newKeyText === "$"){
					var x = document.getElementById("dollar.mp3"); 
				}
			else{
				var x = document.getElementById("4.mp3"); 
				}
			x.play();
			break;
		case 53:
			if(newKeyText === "%"){
					var x = document.getElementById("percent.mp3"); 
				}
			else{
				var x = document.getElementById("5.mp3"); 
				}
			x.play();
			break;
		case 54:
			if(newKeyText === "^"){
					var x = document.getElementById("circumflex.mp3"); 
				}
			else{
				var x = document.getElementById("6.mp3"); 
				}
			x.play();
			break;
		case 55:
			if(newKeyText === "&"){
					var x = document.getElementById("ampersand.mp3"); 
				}
			else{
				var x = document.getElementById("7.mp3"); 
				}
			x.play();
			break;
		case 56:
			if(newKeyText === "*"){
					var x = document.getElementById("star.mp3"); 
				}
			else{
				var x = document.getElementById("8.mp3"); 
				}
			x.play();
			break;
		case 57:
			if(newKeyText === "("){
					var x = document.getElementById("leftbracket.mp3"); 
				}
			else{
				var x = document.getElementById("9.mp3"); 
				}
			x.play();
			break;
		case 58:
			if(newKeyText === ")"){
					var x = document.getElementById("rightbracket.mp3"); 
				}
			else{
				var x = document.getElementById("0.mp3"); 
				}
			x.play();
			break;
		case 59:
			var x = document.getElementById("semicolon.mp3"); 
			x.play();
			break;
		case 60:
			var x = document.getElementById("lessthan.mp3"); 
			x.play();
			break;
		case 61:
			if(newKeyText === "+"){
					var x = document.getElementById("plus.mp3"); 
				}
			else{
				var x = document.getElementById("equals.mp3"); 
				}
			x.play();
			break;
		case 64:
			var x = document.getElementById("at.mp3"); 
			x.play();
			break;
		case 65:
			var x = document.getElementById("a.mp3"); 
			x.play();
			break;
		case 66:
			var x = document.getElementById("b.mp3"); 
			x.play();
			break;
		case 67:
			var x = document.getElementById("c.mp3"); 
			x.play();
			break;
		case 68:
			var x = document.getElementById("d.mp3"); 
			x.play();
			break;
		case 69:
			var x = document.getElementById("e.mp3"); 
			x.play();
			break;
		case 70:
			var x = document.getElementById("f.mp3"); 
			x.play();
			break;
		case 71:
			var x = document.getElementById("g.mp3"); 
			x.play();
			break;
		case 72:
			var x = document.getElementById("h.mp3"); 
			x.play();
			break;
		case 73:
			var x = document.getElementById("i.mp3"); 
			x.play();
			break;
		case 74:
			var x = document.getElementById("j.mp3"); 
			x.play();
			break;
		case 75:
			var x = document.getElementById("k.mp3"); 
			x.play();
			break;
		case 76:
			var x = document.getElementById("l.mp3"); 
			x.play();
			break;
		case 77:
			var x = document.getElementById("m.mp3"); 
			x.play();
			break;
		case 78:
			var x = document.getElementById("n.mp3"); 
			x.play();
			break;
		case 79:
			var x = document.getElementById("o.mp3"); 
			x.play();
			break;
		case 80:
			var x = document.getElementById("p.mp3"); 
			x.play();
			break;
		case 81:
			var x = document.getElementById("q.mp3"); 
			x.play();
			break;
		case 82:
			var x = document.getElementById("r.mp3"); 
			x.play();
			break;
		case 83:
			var x = document.getElementById("s.mp3"); 
			x.play();
			break;
		case 84:
			var x = document.getElementById("t.mp3"); 
			x.play();
			break;
		case 85:
			var x = document.getElementById("u.mp3"); 
			x.play();
			break;
		case 86:
			var x = document.getElementById("v.mp3"); 
			x.play();
			break;
		case 87:
			var x = document.getElementById("w.mp3"); 
			x.play();
			break;
		case 88:
			var x = document.getElementById("x.mp3"); 
			x.play();
			break;
		case 89:
			var x = document.getElementById("y.mp3"); 
			x.play();
			break;
		case 90:
			var x = document.getElementById("z.mp3"); 
			x.play();
			break;
		case 91:
			var x = document.getElementById("windows.mp3"); 
			x.play();
			break;
		case 93:
			var x = document.getElementById("context.mp3"); 
			x.play();
			break;
		case 96:
			var x = document.getElementById("0.mp3"); 
			x.play();
			break;
		case 97:
			var x = document.getElementById("1.mp3"); 
			x.play();
			break;
		case 98:
			var x = document.getElementById("2.mp3"); 
			x.play();
			break;
		case 99:
			var x = document.getElementById("3.mp3"); 
			x.play();
			break;
		case 100:
			var x = document.getElementById("4.mp3"); 
			x.play();
			break;
		case 101:
			var x = document.getElementById("5.mp3"); 
			x.play();
			break;
		case 102:
			var x = document.getElementById("6.mp3"); 
			x.play();
			break;
		case 103:
			var x = document.getElementById("7.mp3"); 
			x.play();
			break;
		case 104:
			var x = document.getElementById("8.mp3"); 
			x.play();
			break;
		case 105:
			var x = document.getElementById("9.mp3"); 
			x.play();
			break;
		case 106:
			var x = document.getElementById("multiply.mp3"); 
			x.play();
			break;
		case 107:
			if(newKeyText === "+"){
					var x = document.getElementById("plus.mp3"); 
				}
			else{
				var x = document.getElementById("equals.mp3"); 
				}
			x.play();
			break;
		case 108:
			if(newKeyText === ">"){
					var x = document.getElementById("greaterthan.mp3"); 
				}
			else{
				var x = document.getElementById("fullstop.mp3"); 
				}
			x.play();
			break;
		case 109:
			var x = document.getElementById("minus.mp3"); 
			x.play();
			break;
		case 110:
			var x = document.getElementById("decimalpoint.mp3"); 
			x.play();
			break;
		case 111:
			var x = document.getElementById("divide.mp3"); 
			x.play();
			break;
		case 112:
			var x = document.getElementById("f1.mp3"); 
			x.play();
			break;
		case 113:
			var x = document.getElementById("f2.mp3"); 
			x.play();
			break;
		case 114:
			var x = document.getElementById("f3.mp3"); 
			x.play();
			break;
		case 115:
			var x = document.getElementById("f4.mp3"); 
			x.play();
			break;
		case 116:
			var x = document.getElementById("f5.mp3"); 
			x.play();
			break;
		case 117:
			var x = document.getElementById("f6.mp3"); 
			x.play();
			break;
		case 118:
			var x = document.getElementById("f7.mp3"); 
			x.play();
			break;
		case 119:
			var x = document.getElementById("f8.mp3"); 
			x.play();
			break;
		case 120:
			var x = document.getElementById("f9.mp3"); 
			x.play();
			break;
		case 121:
			var x = document.getElementById("f10.mp3"); 
			x.play();
			break;
		case 122:
			var x = document.getElementById("f11.mp3"); 
			x.play();
			break;
		case 123:
			var x = document.getElementById("f12.mp3"); 
			x.play();
			break;
		case 144:
			var x = document.getElementById("numlock.mp3"); 
			x.play();
			break;
		case 145:
			var x = document.getElementById("scrolllock.mp3"); 
			x.play();
			break;
		case 160:
			var x = document.getElementById("circumflex.mp3"); 
			x.play();
			break;
		case 161:
			var x = document.getElementById("exclamationmark.mp3"); 
			x.play();
			break;
		case 162:
			var x = document.getElementById("colon.mp3"); 
			x.play();
			break;
		case 163:
			var x = document.getElementById("hash.mp3"); 
			x.play();
			break;
		case 164:
			var x = document.getElementById("dollarsign.mp3"); 
			x.play();
			break;
		case 170:
			var x = document.getElementById("star.mp3"); 
			x.play();
			break;
		case 172:
			var x = document.getElementById("home.mp3"); 
			x.play();
			break;
		case 182:
			var x = document.getElementById("volumedown.mp3"); 
			x.play();
			break;
		case 183:
			var x = document.getElementById("volumeup.mp3"); 
			x.play();
			break;
		case 186:
			if(newKeyText === ":"){
					var x = document.getElementById("colon.mp3"); 
				}
			else{
				var x = document.getElementById("semicolon.mp3"); 
				}
			x.play();
			break;
		case 187:
			if(newKeyText === "+"){
					var x = document.getElementById("plus.mp3"); 
				}
			else{
				var x = document.getElementById("equals.mp3"); 
				}
			x.play();
			break;
		case 188:
			if(newKeyText === "<"){
					var x = document.getElementById("lessthan.mp3"); 
				}
			else{
				var x = document.getElementById("comma.mp3"); 
				}
			x.play();
			break;
		case 189:
			if(newKeyText === "_"){
					var x = document.getElementById("underscore.mp3"); 
				}
			else{
				var x = document.getElementById("dash.mp3"); 
				}
			x.play();
			break;
		case 190:
			if(newKeyText === ">"){
					var x = document.getElementById("greaterthan.mp3"); 
				}
			else{
				var x = document.getElementById("fullstop.mp3"); 
				}
			x.play();
			break;
		case 191:
			if(newKeyText === "?"){
					var x = document.getElementById("questionmark.mp3"); 
				}
			else{
				var x = document.getElementById("forwardslash.mp3"); 
				}
			x.play();
			break;
		case 192:
			if(newKeyText === "~"){
					var x = document.getElementById("tild.mp3"); 
				}
			else{
				var x = document.getElementById("grave.mp3"); 
				}
			x.play();
			break;
		case 194:
			var x = document.getElementById("fullstop.mp3"); 
			x.play();
			break;
		case 219:
	if(newKeyText === "{"){
					var x = document.getElementById("leftcurlybracket.mp3"); 
				}
			else{
				var x = document.getElementById("leftsquarebracket.mp3"); 
				}
			x.play();
			break;
		case 220:
			if(newKeyText === "|"){
					var x = document.getElementById("pipe.mp3"); 
				}
			else{
				var x = document.getElementById("backslash.mp3"); 
				}
			x.play();
			break;
		case 221:
if(newKeyText === "}"){
					var x = document.getElementById("rightcurlybracket.mp3"); 
				}
			else{
				var x = document.getElementById("rightsquarebracket.mp3"); 
				}
			x.play();
			break;
		case 222:
			if(newKeyText === "\""){
					var x = document.getElementById("quote.mp3"); 
				}
			else{
				var x = document.getElementById("apostrophe.mp3"); 
				}
			x.play();
			break;
		case 223:
			var x = document.getElementById("grave.mp3"); 
			x.play();
			break;
		case 225:
			var x = document.getElementById("alt.mp3"); 
			x.play();
			break;
		case 226:
			var x = document.getElementById("backslash.mp3"); 
			x.play();
			break;
	}
	
// Moved Main e.keyCode display
  document.querySelector('.keycode-display').innerHTML = newKeyText;



};


// #endregion

// #region Init Methods

drawNumberToCanvas('⌨️');

// #endregion
