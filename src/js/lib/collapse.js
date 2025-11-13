export class Collapse {
    constructor(target, duration = 300) {
        this.target = target;
        this.duration = duration || 300;
    }
    hide() {
        const s = this.target.style;
        s.height = this.target.offsetHeight + 'px';
        s.transitionProperty = "height, margin, border-width, padding";
        s.transitionDuration = this.duration + 'ms';

        this.target.offsetHeight;

        s.height = 0;
        s.paddingTop = 0;
        s.paddingBottom = 0;
        s.marginTop = 0;
        s.marginBottom = 0;
        s.borderTopWidth = 0;
        s.borderBottomWidth = 0;
        s.overflow = 'hidden';

        window.setTimeout( () => {
            s.display = 'none';
            s.removeProperty('height');
            s.removeProperty('padding-top');
            s.removeProperty('padding-bottom');
            s.removeProperty('margin-top');
            s.removeProperty('margin-bottom');
            s.removeProperty('border-top-width');
            s.removeProperty('border-bottom-width');
            s.removeProperty('overflow');
            s.removeProperty('transition-duration');
            s.removeProperty('transition-property');
        }, this.duration);
    }
    show() {
        const s = this.target.style;
        s.height = 0;
        s.paddingTop = 0;
        s.paddingBottom = 0;
        s.marginTop = 0;
        s.marginBottom = 0;
        s.borderTopWidth = 0;
        s.borderBottomWidth = 0;
        s.overflow = 'hidden';

        s.removeProperty('display');

        let display = window.getComputedStyle(this.target).display;
        let needToRemoveDisplay = true;

        if (display === 'none') {
            display = 'block';
            needToRemoveDisplay = false;
        }
        s.display = display;

        let height = this.target.scrollHeight;

        s.transitionProperty = "height, margin, border-width, padding";
        s.transitionDuration = this.duration + 'ms';
        s.height = height + 'px';
        s.removeProperty('padding-top');
        s.removeProperty('padding-bottom');
        s.removeProperty('margin-top');
        s.removeProperty('margin-bottom');
        s.removeProperty('border-top-width');
        s.removeProperty('border-bottom-width');

        window.setTimeout( () => {
            if (needToRemoveDisplay) {
                s.removeProperty('display');
            }
            s.removeProperty('height');
            s.removeProperty('overflow');
            s.removeProperty('transition-duration');
            s.removeProperty('transition-property');
        }, this.duration);
    }
    toggle() {
        if (window.getComputedStyle(this.target).display === 'none') {
            return this.show(this.target, this.duration);
        } else {
            return this.hide(this.target, this.duration);
        }
    }
}