const config = {
    tabHeight: '35px',
    tabBackground: 'linear-gradient(to bottom, #898989 0%, #676767 100%)',
    tabBackgroundHover: 'linear-gradient(to bottom, #777 0%, #595959 100%)',
    tabBackgroundInactive: 'linear-gradient(to bottom, #7d7d7d 0%, #5e5e5e 100%)',
    tabBackgroundBlur: 'linear-gradient(to bottom, #606060 0%, #555 100%)',
    tabBackgroundBlurActive: 'linear-gradient(to bottom, #666 0%, #595959 100%)',
    tabBorderColor: '#5e5e5e',
    tabTextColor: '#030303',
    tabTextColorInactive: '#363636'
}

module.exports = `
    .hyper_main { border: none; }

    .header_header {
        top: 0;
        left: 0;
        right: 0;
    }

    /* Create a half pixel top border */
    .header_header::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        z-index: 2;
        background: #cfcfcf;
        transform: scaleY(.5);
    }

    .tabs_nav {
        background: ${config.tabBackgroundInactive};
        height: ${config.tabHeight};
        line-height: ${config.tabHeight};
    }

    .no-tabs .tabs_nav {
        background: ${config.tabBackground};
    }

    .blur .tabs_nav,
    .no-tabs.blur .tabs_nav {
        background: ${config.tabBackgroundBlur};
    }

    .tabs_list {
        max-height: ${config.tabHeight};
    }

    .fullscreen .tabs_list {
        margin-left: 0;
    }

    .tabs_nav .tab_tab {
        background: ${config.tabBackgroundInactive};
        border-left: 1px solid ${config.tabBorderColor} !important;
        border-bottom: 0;
        transition: background .25s ease-out;
    }

    .no-tabs .tabs_nav .tab_tab {
        background: ${config.tabBackground};
    }

    .blur .tabs_nav .tab_tab,
    .no-tabs.blur .tabs_nav .tab_tab {
        background: ${config.tabBackgroundBlur};
    }

    .tabs_nav .tab_text,
    .tabs_nav .tabs_title {
        height: ${config.tabHeight};
        color: ${config.tabTextColorInactive};
        text-shadow: 0 1px 0 rgba(255, 255, 255, .1);
        transition: .25s ease-out;
    }

    .tabs_nav .tabs_title,
    .fullscreen .tabs_nav .tab_text {
        font-size: 13px;
    }

    .tabs_nav .tabs_title,
    .tabs_nav .tabs_list .tab_active .tab_text {
        color: ${config.tabTextColor};
    }

    .tabs_nav .tab_tab.tab_first:not(.tab_active) {
        border-left: 0 !important;
    }

    .tabs_nav .tab_tab.tab_first:not(.tab_active):hover {
        box-shadow: -1px 0 0 ${config.tabBorderColor};
    }

    .tabs_nav .tab_tab:not(.tab_active):hover {
        background: ${config.tabBackgroundHover};
    }

    .tabs_nav .tabs_list .tab_active {
        background: ${config.tabBackground};
    }

    .tabs_nav .tabs_list .tab_active .tab_text {
        transition: none;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);
        text-shadow: 0 1px 0 rgba(255, 255, 255, .15);
        z-index: 1;
    }

    .blur .tabs_nav .tabs_list .tab_active {
        background: ${config.tabBackgroundBlurActive};
    }

    .blur .tabs_nav .tabs_title,
    .blur .tabs_nav .tabs_list .tab_active .tab_text {
        transition: none;
        color: ${config.tabTextColorInactive};
    }

    .tabs_nav .tabs_borderShim {
        display: none;
    }

    /* The close icon */
    .tabs_nav .tabs_list .tab_icon {
        z-index: 2;
        right: auto;
        left: 7px;
        top: 11px;
        color: ${config.tabTextColor};
        border-radius: 3px;
        padding: 4px;
        background-color: transparent;
        filter: drop-shadow(0 1px 0 rgba(255, 255, 255, .15));
    }

    .tabs_nav .tabs_list .tab_icon:hover {
        color: ${config.tabTextColor};
        background-color: rgba(0, 0, 0, .12);
        filter: none;
    }

    .tabs_nav .tabs_list .tab_icon:active {
        filter: none;
        transition: none;
        background-color: rgba(0, 0, 0, .2);
    }

    .tabs_nav .tabs_list .tab_active .tab_icon:active {
        background-color: rgba(0, 0, 0, .22);
    }

    .tabs_nav .tabs_list .tab_active .tab_icon:hover {
        background-color: rgba(0, 0, 0, .15);
    }

    .terms_terms {
        margin-top: ${config.tabHeight};
        border-top: 1px solid #181818;
    }
`
