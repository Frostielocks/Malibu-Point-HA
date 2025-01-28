/*! For license information please see 5624.0947cb1e9eb7e126.js.LICENSE.txt */
export const ids=["5624"];export const modules={90842:function(e,t,i){i.d(t,{t:function(){return o}});i(92745),i(39527),i(41360),i(88972);class s{constructor(e=window.localStorage){this.storage=void 0,this._storage={},this._listeners={},this.storage=e,e===window.localStorage&&window.addEventListener("storage",(e=>{e.key&&this.hasKey(e.key)&&(this._storage[e.key]=e.newValue?JSON.parse(e.newValue):e.newValue,this._listeners[e.key]&&this._listeners[e.key].forEach((t=>t(e.oldValue?JSON.parse(e.oldValue):e.oldValue,this._storage[e.key]))))}))}addFromStorage(e){if(!this._storage[e]){const t=this.storage.getItem(e);t&&(this._storage[e]=JSON.parse(t))}}subscribeChanges(e,t){return this._listeners[e]?this._listeners[e].push(t):this._listeners[e]=[t],()=>{this.unsubscribeChanges(e,t)}}unsubscribeChanges(e,t){if(!(e in this._listeners))return;const i=this._listeners[e].indexOf(t);-1!==i&&this._listeners[e].splice(i,1)}hasKey(e){return e in this._storage}getValue(e){return this._storage[e]}setValue(e,t){const i=this._storage[e];this._storage[e]=t;try{void 0===t?this.storage.removeItem(e):this.storage.setItem(e,JSON.stringify(t))}catch(e){}finally{this._listeners[e]&&this._listeners[e].forEach((e=>e(i,t)))}}}const a={},o=e=>t=>{const i=e.storage||"localStorage";let o;i&&i in a?o=a[i]:(o=new s(window[i]),a[i]=o);const n=String(t.key),l=e.key||String(t.key),r=t.initializer?t.initializer():void 0;o.addFromStorage(l);const d=!1!==e.subscribe?e=>o.subscribeChanges(l,((i,s)=>{e.requestUpdate(t.key,i)})):void 0,h=()=>o.hasKey(l)?e.deserializer?e.deserializer(o.getValue(l)):o.getValue(l):r;return{kind:"method",placement:"prototype",key:t.key,descriptor:{set(i){((i,s)=>{let a;e.state&&(a=h()),o.setValue(l,e.serializer?e.serializer(s):s),e.state&&i.requestUpdate(t.key,a)})(this,i)},get:()=>h(),enumerable:!0,configurable:!0},finisher(i){if(e.state&&e.subscribe){const e=i.prototype.connectedCallback,t=i.prototype.disconnectedCallback;i.prototype.connectedCallback=function(){e.call(this),this[`__unbsubLocalStorage${n}`]=d?.(this)},i.prototype.disconnectedCallback=function(){t.call(this),this[`__unbsubLocalStorage${n}`]?.(),this[`__unbsubLocalStorage${n}`]=void 0}}e.state&&i.createProperty(t.key,{noAccessor:!0,...e.stateOptions})}}}},54993:function(e,t,i){var s=i(44249),a=i(72621),o=i(27323),n=i(33990),l=i(88540),r=i(57243),d=i(50778);(0,s.Z)([(0,d.Mo)("ha-textarea")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.Cb)({type:Boolean,reflect:!0})],key:"autogrow",value:()=>!1},{kind:"method",key:"updated",value:function(e){(0,a.Z)(i,"updated",this,3)([e]),this.autogrow&&e.has("value")&&(this.mdcRoot.dataset.value=this.value+'=​"')}},{kind:"field",static:!0,key:"styles",value:()=>[n.W,l.W,r.iv`:host([autogrow]) .mdc-text-field{position:relative;min-height:74px;min-width:178px;max-height:200px}:host([autogrow]) .mdc-text-field:after{content:attr(data-value);margin-top:23px;margin-bottom:9px;line-height:1.5rem;min-height:42px;padding:0px 32px 0 16px;letter-spacing:var(
          --mdc-typography-subtitle1-letter-spacing,
          .009375em
        );visibility:hidden;white-space:pre-wrap}:host([autogrow]) .mdc-text-field__input{position:absolute;height:calc(100% - 32px)}:host([autogrow]) .mdc-text-field.mdc-text-field--no-label:after{margin-top:16px;margin-bottom:16px}.mdc-floating-label{inset-inline-start:16px!important;inset-inline-end:initial!important;transform-origin:var(--float-start) top}@media only screen and (min-width:459px){:host([mobile-multiline]) .mdc-text-field__input{white-space:nowrap;max-height:16px}}`]}]}}),o.O)},40137:function(e,t,i){i.r(t),i.d(t,{TTSTryDialog:function(){return u}});var s=i(44249),a=i(57243),o=i(50778),n=i(90842),l=i(11297),r=(i(20095),i(44118)),d=(i(54993),i(421)),h=i(4557);i(90977);let u=(0,s.Z)([(0,o.Mo)("dialog-tts-try")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_loadingExample",value:()=>!1},{kind:"field",decorators:[(0,o.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_valid",value:()=>!1},{kind:"field",decorators:[(0,o.IO)("#message")],key:"_messageInput",value:void 0},{kind:"field",decorators:[(0,n.t)({key:"ttsTryMessages",state:!1,subscribe:!1})],key:"_messages",value:void 0},{kind:"method",key:"showDialog",value:function(e){this._params=e,this._valid=Boolean(this._defaultMessage)}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,(0,l.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"get",key:"_defaultMessage",value:function(){const e=this._params.language?.substring(0,2),t=this.hass.locale.language.substring(0,2);return e&&this._messages?.[e]?this._messages[e]:e===t?this.hass.localize("ui.dialogs.tts-try.message_example"):""}},{kind:"method",key:"render",value:function(){return this._params?a.dy` <ha-dialog open @closed="${this.closeDialog}" .heading="${(0,r.i)(this.hass,this.hass.localize("ui.dialogs.tts-try.header"))}"> <ha-textarea autogrow id="message" .label="${this.hass.localize("ui.dialogs.tts-try.message")}" .placeholder="${this.hass.localize("ui.dialogs.tts-try.message_placeholder")}" .value="${this._defaultMessage}" @input="${this._inputChanged}" ?dialogInitialFocus="${!this._defaultMessage}"> </ha-textarea> ${this._loadingExample?a.dy` <ha-circular-progress size="small" indeterminate slot="primaryAction" class="loading"></ha-circular-progress> `:a.dy` <ha-button ?dialogInitialFocus="${Boolean(this._defaultMessage)}" slot="primaryAction" .label="${this.hass.localize("ui.dialogs.tts-try.play")}" @click="${this._playExample}" .disabled="${!this._valid}"> <ha-svg-icon slot="icon" .path="${"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z"}"></ha-svg-icon> </ha-button> `} </ha-dialog> `:a.Ld}},{kind:"method",key:"_inputChanged",value:async function(){this._valid=Boolean(this._messageInput?.value)}},{kind:"method",key:"_playExample",value:async function(){const e=this._messageInput?.value;if(!e)return;const t=this._params.engine,i=this._params.language,s=this._params.voice;i&&(this._messages={...this._messages,[i.substring(0,2)]:e}),this._loadingExample=!0;const a=new Audio;let o;a.play();try{o=(await(0,d.aT)(this.hass,{platform:t,message:e,language:i,options:{voice:s}})).path}catch(e){return this._loadingExample=!1,void(0,h.Ys)(this,{text:`Unable to load example. ${e.error||e.body||e}`,warning:!0})}a.src=o,a.addEventListener("canplaythrough",(()=>a.play())),a.addEventListener("playing",(()=>{this._loadingExample=!1})),a.addEventListener("error",(()=>{(0,h.Ys)(this,{title:"Error playing audio."}),this._loadingExample=!1}))}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`ha-dialog{--mdc-dialog-max-width:500px}ha-select,ha-textarea{width:100%}ha-select{margin-top:8px}.loading{height:36px}`}}]}}),a.oi)},27323:function(e,t,i){i.d(t,{O:function(){return u}});var s=i(9065),a=i(1105),o=i(57243),n=i(50778),l=i(35359),r=i(20552),d=i(91928);const h={fromAttribute:e=>null!==e&&(""===e||e),toAttribute:e=>"boolean"==typeof e?e?"":null:e};class u extends a.P{constructor(){super(...arguments),this.rows=2,this.cols=20,this.charCounter=!1}render(){const e=this.charCounter&&-1!==this.maxLength,t=e&&"internal"===this.charCounter,i=e&&!t,s=!!this.helper||!!this.validationMessage||i,a={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--end-aligned":this.endAligned,"mdc-text-field--with-internal-counter":t};return o.dy` <label class="mdc-text-field mdc-text-field--textarea ${(0,l.$)(a)}"> ${this.renderRipple()} ${this.outlined?this.renderOutline():this.renderLabel()} ${this.renderInput()} ${this.renderCharCounter(t)} ${this.renderLineRipple()} </label> ${this.renderHelperText(s,i)} `}renderInput(){const e=this.label?"label":void 0,t=-1===this.minLength?void 0:this.minLength,i=-1===this.maxLength?void 0:this.maxLength,s=this.autocapitalize?this.autocapitalize:void 0;return o.dy` <textarea aria-labelledby="${(0,r.o)(e)}" class="mdc-text-field__input" .value="${(0,d.a)(this.value)}" rows="${this.rows}" cols="${this.cols}" ?disabled="${this.disabled}" placeholder="${this.placeholder}" ?required="${this.required}" ?readonly="${this.readOnly}" minlength="${(0,r.o)(t)}" maxlength="${(0,r.o)(i)}" name="${(0,r.o)(""===this.name?void 0:this.name)}" inputmode="${(0,r.o)(this.inputMode)}" autocapitalize="${(0,r.o)(s)}" @input="${this.handleInputChange}" @blur="${this.onInputBlur}">
      </textarea>`}}(0,s.gn)([(0,n.IO)("textarea")],u.prototype,"formElement",void 0),(0,s.gn)([(0,n.Cb)({type:Number})],u.prototype,"rows",void 0),(0,s.gn)([(0,n.Cb)({type:Number})],u.prototype,"cols",void 0),(0,s.gn)([(0,n.Cb)({converter:h})],u.prototype,"charCounter",void 0)},88540:function(e,t,i){i.d(t,{W:function(){return s}});const s=i(57243).iv`.mdc-text-field{height:100%}.mdc-text-field__input{resize:none}`}};
//# sourceMappingURL=5624.0947cb1e9eb7e126.js.map