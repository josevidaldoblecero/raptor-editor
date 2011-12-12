/**
 * @fileOverview Text alignment ui components
 * @author David Neilson david@panmedia.co.nz
 * @author Michael Robinson mike@panmedia.co.nz
 */
$.ui.editor.registerUi({

    /**
     * @name $.editor.ui.alignLeft
     * @augments $.editor.ui
     * @class Aligns text left within the selected or nearest block-level element.
     * <br/>
     * Toggles <tt>text-align: left</tt>
     */
    alignLeft: /** @lends $.editor.ui.alignLeft.prototype */ {
        
        /**
         * @see $.editor.ui#init
         */
        init: function(editor) {
            return editor.uiButton({
                title: _('Left Align'),
                click: function() {
                    editor.toggleBlockStyle({
                        'text-align': 'left'
                    }, editor.getElement());
                }
            });
        }
    },

    /**
     * @name $.editor.ui.alignJustify
     * @augments $.editor.ui
     * @class Justifies text within the selected or nearest block-level element.
     * <br/>
     * Toggles <tt>text-align: justify</tt>
     */
    alignJustify: /** @lends $.editor.ui.alignJustify.prototype */ {
        
        /**
         * @see $.editor.ui#init
         */
        init: function(editor) {
            return editor.uiButton({
                title: _('Justify'),
                click: function() {
                    editor.toggleBlockStyle({
                        'text-align': 'justify'
                    }, editor.getElement());
                }
            });
        }
    },

    /**
     * @name $.editor.ui.alignCenter
     * @augments $.editor.ui
     * @class Centers text within the selected or nearest block-level element.
     * <br/>
     * Toggles: <tt>text-align: center</tt>
     */
    alignCenter: /** @lends $.editor.ui.alignCenter.prototype */  {
        
        /**
         * @see $.editor.ui#init
         */
        init: function(editor) {
            return editor.uiButton({
                title: _('Center Align'),
                click: function() {
                    editor.toggleBlockStyle({
                        'text-align': 'center'
                    }, editor.getElement());
                }
            });
        }
    },

    /**
     * @name $.editor.ui.alignRight
     * @augments $.editor.ui
     * @class Aligns text right within the selected or nearest block-level element.
     * <br/>
     * Toggles <tt>text-align: right</tt>
     */
    alignRight: /** @lends $.editor.ui.alignRight.prototype */  {
        
        /**
         * @see $.editor.ui#init
         */        
        init: function(editor) {
            return editor.uiButton({
                title: _('Right Align'),
                click: function() {
                    editor.toggleBlockStyle({
                        'text-align': 'right'
                    }, editor.getElement());
                }
            });
        }
    }
});
