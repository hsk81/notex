Ext.define ('Webed.form.field.CodeArea', {
    extend: 'Ext.form.field.TextArea',
    alias: 'widget.code-area',

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    config: {
        options: {
            autoClearEmptyLines: true,
            autofocus: true,
            lineNumbers: true,
            lineWrapping: true,
            matchBrackets: true,
            styleActiveLine: true
        }, mime: undefined
    },

    constructor: function (config) {
        this.callParent (arguments);
        this.initConfig (Ext.Object.merge (this.config, config||{}));

        var mime = this.getMime ();
        if (mime) {
            var modeInfos = CodeMirror.modeInfo.filter (function (mi) {
                return mi.mime == mime;
            });

            var modeInfo = modeInfos.pop ();
            if (modeInfo) this.getOptions ().mode = modeInfo.mode;
        }
    },

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    setValue: function (value) {
        if (this.codemirror) {
            this.codemirror.setValue (value);
        } else {
            if (this.inputEl && this.inputEl.dom) {
                this.codemirror = CodeMirror.fromTextArea (this.inputEl.dom,
                    this.getOptions ()
                );

                var mode = this.getOptions ().mode;
                if (mode) CodeMirror.autoLoadMode (this.codemirror, mode);
                this.codemirror.setValue (value);
            } else {
                this.callParent (arguments);
            }
        }
    },

    getValue: function () {
        if (this.codemirror) {
            return this.codemirror.getValue ();
        } else {
            return this.callParent (arguments);
        }
    },

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    updateLayout: function () {
        if (this.codemirror) {
            this.codemirror.refresh ();
        } else {
            if (this.inputEl && this.inputEl.dom) {
                this.codemirror = CodeMirror.fromTextArea (this.inputEl.dom,
                    this.getOptions ()
                );

                var mode = this.getOptions ().mode;
                if (mode) CodeMirror.autoLoadMode (this.codemirror, mode);
            } else {
                this.callParent (arguments);
            }
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
});
