require(['ojs/ojbootstrap', 'knockout', 'ojs/ojknockout', 'ojs/ojmodule'],
    function (Bootstrap, ko) {
        function ViewModel() {
            this.moduleSettings = {
                name: 'filmStrip/filmStripOverlaidNavDots'
            }
        }

        Bootstrap.whenDocumentReady().then(function () {
            ko.applyBindings(new ViewModel(),
                document.getElementById('filmstrip-overlaidpagingcontrol-example'));
        });
    });