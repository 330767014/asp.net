window.Application2 = window.Application2 || {};

$(function() {
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    Application2.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Application2,
        layoutSet: DevExpress.framework.html.layoutSets[Application2.config.layoutSet],
        navigation: Application2.config.navigation
    });
    Application2.app.router.register(":view/:id", { view: "home", id: undefined });

    Application2.app.navigate();
});
