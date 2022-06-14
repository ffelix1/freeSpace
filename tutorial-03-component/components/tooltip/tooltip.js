class Tooltip extends HTMLElement {
    constructor() {
        super();
        this._tooltipContainer;
        this._tooltipText = 'something';
    }

    connectedCallback() {
        if (this.hasAttribute('tooltip-text')) {
            this._tooltipText = this.getAttribute('tooltip-text');
        }
        const tooltipIcon = document.createElement('span'); //this variable will never change
        tooltipIcon.textContent = '(?)';
        tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
        tooltipIcon.addEventListener('mouseleave', this._hideToolTip.bind(this));

        this.appendChild(tooltipIcon);
    }

    _showTooltip() {
        this._tooltipContainer = document.createElement('div');
        this._tooltipContainer.textContent = this._tooltipText;
        this.appendChild(this._tooltipContainer);
    }

    _hideToolTip() {
        this.removeChild(this._tooltipContainer);
    }
}

customElements.define('uc-tooltip', Tooltip);