const styles = require('./styles')

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

// Fullscreen & blur/focus body classes
module.exports.onWindow = browserWindow => {
    const enterFullscreen = () => {
        document.body.classList.add('fullscreen')
    }

    const leaveFullscreen = () => {
        document.body.classList.remove('fullscreen')
    }

    const onBlur = () => {
        document.body.classList.add('blur')
    }

    const onFocus = () => {
        document.body.classList.remove('blur')
    }

    browserWindow.on('enter-full-screen', () => {
        browserWindow.webContents.executeJavaScript(`(${enterFullscreen.toString()})();`)
    })

    browserWindow.on('leave-full-screen', () => {
        browserWindow.webContents.executeJavaScript(`(${leaveFullscreen.toString()})();`)
    })

    browserWindow.on('blur', () => {
        browserWindow.webContents.executeJavaScript(`(${onBlur.toString()})();`)
    })

    browserWindow.on('focus', () => {
        browserWindow.webContents.executeJavaScript(`(${onFocus.toString()})();`)
    })

    return browserWindow
}
