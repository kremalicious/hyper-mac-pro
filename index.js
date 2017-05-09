'use strict'

const fs = require('fs')
const path = require('path')

let styles = ''

try {
    styles = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8')
} catch (err) {
    throw err
}

exports.decorateConfig = config => Object.assign({}, config, {
    css: (config.css || '') + styles
})

// Fix native fullscreen titlebar
exports.decorateBrowserOptions = defaults => Object.assign({}, defaults, {
    transparent: false
})

// Tabs/no tabs body class
exports.getTabsProps = (parentProps, props) => {
    const bodyClasses = document.body.classList

    if (props.tabs.length <= 1) {
        bodyClasses.add('no-tabs')
    } else {
        bodyClasses.remove('no-tabs')
    }

    return Object.assign({}, parentProps, props)
}

// Fullscreen body class
exports.mapHyperState = (state, map) => {
    const bodyClasses = document.body.classList

    if (window.innerHeight === screen.height) {
        bodyClasses.add('fullscreen')
    } else {
        bodyClasses.remove('fullscreen')
    }

    return Object.assign({}, state, map)
}
