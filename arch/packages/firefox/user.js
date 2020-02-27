// PERFORMANCE
// RAM cache
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.enable", true);

// THEMING
// Dark mode
user_pref("browser.in-content.dark-mode", true);
user_pref("ui.systemUsesDarkTheme", 1);
// Disable gtk theming
user_pref("browser.display.use_system_colors", false);
// Enable css customization with userChrome.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// ENABLE FEATURES
// Enable choosing how to handle magnet links
user_pref("network.protocol-handler.expose.magnet", false);

// DISABLE FEATURES
// Disable pocket
user_pref("browser.pocket.enabled", false);
user_pref("extensions.pocket.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
// Disable fullscreen warning
user_pref("full-screen-api.warning.timeout", 0);
// Disable about:config warning
user_pref("browser.aboutConfig.showWarning", false);
// Disable url trimming
user_pref("browser.urlbar.trimURLs", false);
// Disable default browser checking
user_pref("browser.shell.checkDefaultBrowser", false);
// Disable first run intros
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.startup.homepage_override.mstone", "ignore");

// PRIVACY ENABLE
// Basic tracking protection
user_pref("privacy.trackingprotection.enabled", true);
// Enable Do Not Track Header (DNT)
user_pref("privacy.donottrackheader.enabled", true);

// PRIVACY DISABLE
// WebRTC IP leak prevention
user_pref("media.peerconnection.ice.no_host", true);
// Disable WebRTC getUserMedia, screen sharing, audio capture, video capture
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.video.enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);
// Disable HTTP referer
user_pref("network.http.sendRefererHeader", 0);
// Disable telemetry
user_pref("toolkit.telemetry.enabled", false);
// Disable geolocation
user_pref("geo.enabled", false);
// Disable leaking network/browser connection information via Javascript
user_pref("dom.netinfo.enabled", false);
// Disable Safe Browsing
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
// Disable telephony API
user_pref("dom.telephony.enabled", false);
// Disable "beacon" asynchronous HTTP transfers (used for analytics)
user_pref("beacon.enabled", false);
// Disable sensor API
user_pref("device.sensors.enabled", false);
// Disable pinging URIs specified in HTML <a> ping= attributes
user_pref("browser.send_pings",	false);
// Disable gamepad API to prevent USB device enumeration
user_pref("dom.gamepad.enabled", false);
// Disable virtual reality devices APIs
user_pref("dom.vr.enabled", false);
// Disable vibrator API
user_pref("dom.vibrator.enabled", false);
// Disable resource timing API
user_pref("dom.enable_resource_timing",	false);
// Disable WebAssembly
user_pref("javascript.options.wasm", false);
// Disable face detection
user_pref("camera.control.face_detection.enabled", false);

// KEYBINDINGS
// Browser backspace
user_pref("browser.backspace_action", 0);
// Smooth scrolling
user_pref("mousewheel.min_line_scroll_amount", 30);
user_pref("general.smoothScroll.lines.durationMaxMS", 125);
user_pref("general.smoothScroll.lines.durationMinMS", 125);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 200);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 100);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.other.durationMaxMS", 125);
user_pref("general.smoothScroll.other.durationMinMS", 125);
user_pref("general.smoothScroll.pages.durationMaxMS", 125);
user_pref("general.smoothScroll.pages.durationMinMS", 125);
user_pref("mousewheel.system_scroll_override_on_root_content.enabled", true);
user_pref("mousewheel.system_scroll_override_on_root_content.horizontal.factor", 175);
user_pref("mousewheel.system_scroll_override_on_root_content.vertical.factor", 175);
user_pref("toolkit.scrollbox.horizontalScrollDistance", 6);
user_pref("toolkit.scrollbox.verticalScrollDistance", 2);
