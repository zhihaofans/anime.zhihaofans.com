if (window.location.hostname != '127.0.0.1') {
    if (window.location.protocol != "https:") {
        window.location.href = targetProtocol + window.location.href.substring(window.location.protocol.length);
    }
} else {
    console.log('本地调试不强制跳转https');
}